import { NextRequest, NextResponse } from 'next/server'
import { requireAuth } from '@/lib/auth'
import OpenAI from 'openai'

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
    const prompt = `You are an expert SQL instructor creating practice questions for ${category} level students.

Business Domain: ${businessDomain}
Difficulty Level: ${category}
Focus Areas: ${focusAreasText}
Number of Questions: ${numQuestions}

Generate ${numQuestions} SQL practice questions with the following format for each question:
1. A realistic business scenario question related to ${businessDomain}
2. A database schema (table structure) relevant to the question
3. The correct SQL query answer
4. A detailed explanation of why the answer is correct
5. Key SQL concepts covered

Focus on these areas: ${focusAreasText}

Return the response as a JSON array where each object has:
- question: string (the question text)
- schema: string (table definitions)
- answer: string (the correct SQL query)
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

