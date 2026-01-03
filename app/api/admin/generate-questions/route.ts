import { NextRequest, NextResponse } from 'next/server'
import { requireAuth } from '@/lib/auth'
import OpenAI from 'openai'

// Banking Database Schema
const BANKING_SCHEMA = `
Branches (
    BranchID INT PRIMARY KEY,
    BranchCode VARCHAR(10) UNIQUE,
    BranchName VARCHAR(100),
    City VARCHAR(50),
    State VARCHAR(50),
    CreatedDate DATE
)

Customers (
    CustomerID INT PRIMARY KEY,
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    DOB DATE,
    Email VARCHAR(100),
    Phone VARCHAR(20),
    CreatedDate DATE,
    Status VARCHAR(20)
)

Accounts (
    AccountID INT PRIMARY KEY,
    AccountNumber VARCHAR(20) UNIQUE,
    AccountType VARCHAR(30),
    BranchID INT,
    CurrentBalance DECIMAL(18,2),
    OpenDate DATE,
    Status VARCHAR(20),
    FOREIGN KEY (BranchID) REFERENCES Branches(BranchID)
)

AccountOwnerships (
    OwnershipID INT PRIMARY KEY,
    AccountID INT,
    CustomerID INT,
    OwnershipType VARCHAR(20),
    FOREIGN KEY (AccountID) REFERENCES Accounts(AccountID),
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
)

Transactions (
    TransactionID BIGINT PRIMARY KEY,
    AccountID INT,
    TransactionDate DATETIME,
    TransactionType VARCHAR(30),
    Amount DECIMAL(18,2),
    BalanceAfter DECIMAL(18,2),
    Description VARCHAR(200),
    FOREIGN KEY (AccountID) REFERENCES Accounts(AccountID)
)

Transfers (
    TransferID BIGINT PRIMARY KEY,
    FromAccountID INT,
    ToAccountID INT,
    Amount DECIMAL(18,2),
    TransferDate DATETIME,
    FOREIGN KEY (FromAccountID) REFERENCES Accounts(AccountID),
    FOREIGN KEY (ToAccountID) REFERENCES Accounts(AccountID)
)

Loans (
    LoanID INT PRIMARY KEY,
    CustomerID INT,
    LoanType VARCHAR(50),
    Principal DECIMAL(18,2),
    InterestRate DECIMAL(5,2),
    StartDate DATE,
    EndDate DATE,
    Status VARCHAR(20),
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
)

LoanPayments (
    PaymentID BIGINT PRIMARY KEY,
    LoanID INT,
    DueDate DATE,
    PaymentDate DATE,
    Amount DECIMAL(18,2),
    FOREIGN KEY (LoanID) REFERENCES Loans(LoanID)
)
`

export async function POST(request: NextRequest) {
  try {
    const user = await requireAuth('admin')
    const data = await request.json()

    const { businessDomain, category, focusAreas, numQuestions } = data

    if (!businessDomain || !category || !focusAreas || focusAreas.length === 0 || !numQuestions) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const openaiApiKey = process.env.OPENAI_API_KEY
    if (!openaiApiKey) {
      return NextResponse.json({ error: 'OpenAI API key not configured' }, { status: 500 })
    }

    const openai = new OpenAI({ apiKey: openaiApiKey })

    // Build the prompt for OpenAI
    const focusAreasText = focusAreas.join(', ')
    
    // Use banking schema if domain is Banking
    const isBanking = businessDomain.toLowerCase() === 'banking'
    const schemaSection = isBanking 
      ? `\n\n=== REQUIRED DATABASE SCHEMA (MUST USE FOR ALL QUESTIONS) ===\n\n${BANKING_SCHEMA}\n\n=== END OF SCHEMA ===\n\nCRITICAL REQUIREMENTS:\n- ALL questions MUST use ONLY the tables and columns listed above\n- Use exact table names: Branches, Customers, Accounts, AccountOwnerships, Transactions, Transfers, Loans, LoanPayments\n- Use exact column names as shown in the schema\n- Do NOT create or reference any other tables or columns\n- All SQL queries must work with this exact schema structure`
      : `\n\nGenerate realistic database schemas relevant to ${businessDomain} business scenarios.`
    
    const prompt = `You are an expert SQL instructor creating practice questions for ${category} level students.

Business Domain: ${businessDomain}
Difficulty Level: ${category}
Focus Areas: ${focusAreasText}
Number of Questions: ${numQuestions}${schemaSection}

Generate ${numQuestions} SQL practice questions with the following format for each question:
1. A realistic business scenario question related to ${businessDomain}
2. ${isBanking ? 'Use the EXACT database schema provided above - copy it exactly in the schema field' : 'A database schema (table structure) relevant to the question'}
3. The correct SQL query answer using ${isBanking ? 'ONLY the tables and columns from the provided schema' : 'the schema you define'}
4. A detailed explanation of why the answer is correct
5. Key SQL concepts covered

Focus on these areas: ${focusAreasText}

${isBanking ? `\nSCHEMA USAGE RULES FOR BANKING DOMAIN:
- For the "schema" field in each question, include the relevant table definitions from the schema above
- For the "answer" field, write SQL queries using ONLY: Branches, Customers, Accounts, AccountOwnerships, Transactions, Transfers, Loans, LoanPayments
- Example question types: finding customer accounts, calculating balances, transaction history, loan payments, branch statistics, account transfers, etc.
- All column names must match exactly: CustomerID, AccountID, BranchID, TransactionID, etc.` : ''}

Return the response as a JSON array where each object has:
- question: string (the question text)
- schema: string (${isBanking ? 'relevant table definitions from the schema above (copy exact structure)' : 'table definitions relevant to the question'})
- answer: string (the correct SQL query ${isBanking ? 'using ONLY the provided schema tables' : ''})
- explanation: string (detailed explanation)
- concepts: string (comma-separated key concepts)

Make questions realistic and practical for ${businessDomain} business scenarios. Ensure questions progress from basic to more complex within the ${category} difficulty level.`

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content: 'You are an expert SQL instructor. Return a JSON object with a "questions" array. Each question object must have: question, schema, answer, explanation, and concepts fields.'
        },
        {
          role: 'user',
          content: prompt
        }
      ],
      response_format: { type: 'json_object' },
      temperature: 0.7
    })

    const responseContent = completion.choices[0]?.message?.content
    if (!responseContent) {
      return NextResponse.json({ error: 'Failed to generate questions' }, { status: 500 })
    }

    // Parse the response
    let parsedResponse
    try {
      parsedResponse = JSON.parse(responseContent)
    } catch (error) {
      // If response is not JSON, try to extract JSON from markdown
      const jsonMatch = responseContent.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        try {
          parsedResponse = JSON.parse(jsonMatch[0])
        } catch (e) {
          return NextResponse.json({ error: 'Invalid response format from AI' }, { status: 500 })
        }
      } else {
        return NextResponse.json({ error: 'Invalid response format from AI' }, { status: 500 })
      }
    }

    // Handle both array and object with questions property
    let questions = Array.isArray(parsedResponse) ? parsedResponse : (parsedResponse.questions || parsedResponse.data || [])

    if (!Array.isArray(questions) || questions.length === 0) {
      return NextResponse.json({ error: 'No questions generated' }, { status: 500 })
    }

    // Ensure we have the right number of questions
    questions = questions.slice(0, numQuestions)

    return NextResponse.json({ questions })
  } catch (error: any) {
    console.error('Error generating questions:', error)
    return NextResponse.json({ 
      error: error.message || 'Failed to generate questions',
      details: error.response?.data || null
    }, { status: 500 })
  }
}

