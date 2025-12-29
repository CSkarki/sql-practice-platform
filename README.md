# SQL Practice App

A full-stack web application for managing SQL practice tests for students. Built with Next.js, TypeScript, Prisma, and SQLite.

## Features

### Admin (Teacher) Features
- Create practice sets with questions and answers
- **Auto-generate questions using AI** (OpenAI integration)
- Select business domain (Banking, Retail, ERP, Travel, Telecom, etc.)
- Categorize by difficulty (simple, medium, intermediate, advanced)
- Tag with focus areas (Aggregate Functions, GROUP BY, JOINs, etc.)
- Browse and select from practice set bank when scheduling
- Schedule tests for students
- Review submitted tests
- Auto-review functionality (compares student answers with correct answers)
- Release answers to students

### Student Features
- View assigned tests
- Take tests with question interface
- Save answers automatically
- Submit completed tests
- View results when released by teacher

## Tech Stack

- **Frontend**: Next.js 16, React 19, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes
- **Database**: Azure SQL Server with Prisma ORM
- **Authentication**: Simple cookie-based session
- **AI Integration**: OpenAI API for question generation

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Database

```bash
# Generate Prisma Client
npm run db:generate

# Run migrations
npm run db:migrate

# Seed initial users
npm run db:seed
```

### 3. Default Users

After seeding, you can login with:

**Admin:**
- Username: `admin`
- Password: `admin123`

**Students:**
- Username: `student1` or `student2`
- Password: `student123`

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

### Quick Deployment to Vercel

See [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) for detailed step-by-step instructions.

**Quick Steps:**
1. Push code to GitHub
2. Import project in Vercel
3. Set up PostgreSQL database (Vercel Postgres recommended)
4. Add environment variables in Vercel:
   - `DATABASE_URL` (PostgreSQL connection string)
   - `OPENAI_API_KEY` (for AI question generation)
5. Update `prisma/schema.prisma` to use `postgresql` provider
6. Deploy and run migrations

### Database for Production

**Important**: This application uses Azure SQL Server for production.

1. Set up Azure SQL Server:
   - Create SQL Database in [Azure Portal](https://portal.azure.com)
   - Get connection details (server, database, username, password)
   - Configure firewall rules

2. Connection String Format:
   ```
   sqlserver://SERVER.database.windows.net:1433;database=DATABASE_NAME;user=USERNAME@SERVER;password=PASSWORD;encrypt=true;trustServerCertificate=false
   ```

3. Add to `.env` file:
   ```env
   DATABASE_URL="sqlserver://your-server.database.windows.net:1433;database=sql-practice-db;user=admin@your-server;password=YourPassword123!;encrypt=true;trustServerCertificate=false"
   ```

4. Run migrations: `npm run db:migrate:deploy`
5. Seed initial users: `npm run db:seed`

## Project Structure

```
sql-practice-app/
├── app/
│   ├── admin/          # Admin interface
│   │   ├── practices/  # Practice management
│   │   └── submissions/ # Review submissions
│   ├── student/        # Student interface
│   │   └── test/       # Take tests
│   ├── api/            # API routes
│   │   ├── admin/      # Admin APIs
│   │   ├── auth/       # Authentication APIs
│   │   └── student/    # Student APIs
│   └── login/          # Login page
├── lib/
│   ├── auth.ts         # Authentication utilities
│   └── prisma.ts       # Prisma client
├── prisma/
│   └── schema.prisma   # Database schema
└── scripts/
    └── seed.ts         # Database seeding
```

## Usage

### Creating a Practice Set

1. Login as admin
2. Go to "Practices" → "Create New"
3. Fill in practice details:
   - Title
   - Business Domain
   - Category
   - Focus Areas
   - Number of Questions
4. **Auto-Generate Questions (Recommended):**
   - Click "🤖 Generate Questions (AI)" button
   - AI will generate questions based on your selections
   - Review and edit generated questions if needed
5. **Or Add Questions Manually:**
   - Click "Add Question Manually"
   - For each question, provide:
     - Question text
     - Schema (optional)
     - Answer (for teacher view)
     - Explanation (for teacher view)
6. Save the practice set

### Scheduling a Test

1. Go to "Practices"
2. Click "Schedule" on a practice set
3. Select student
4. Set scheduled date and due date
5. Save

### Taking a Test (Student)

1. Login as student
2. View "My Tests"
3. Click on a test to start
4. Answer questions (answers auto-save)
5. Click "Submit Test" when done

### Reviewing Submissions (Admin)

1. Go to "Submissions"
2. Click "Review" to manually review
3. Or click "Auto Review" to automatically compare answers
4. Click "Release Answers" to make results visible to students

## Development

### Database Migrations

```bash
# Create a new migration
npm run db:migrate

# Reset database (development only)
npx prisma migrate reset
```

### Environment Variables

Create a `.env` file (see `.env.example` for template):

```env
# Azure SQL Server Connection String
DATABASE_URL="sqlserver://your-server.database.windows.net:1433;database=sql-practice-db;user=admin@your-server;password=YourPassword123!;encrypt=true;trustServerCertificate=false"

# OpenAI API Key (required for AI question generation)
OPENAI_API_KEY=your_openai_api_key_here

# Optional
OPENAI_MODEL=gpt-4o-mini
NODE_ENV=development
```

**Note:** 
- `DATABASE_URL` is required - use your Azure SQL Server connection string
- `OPENAI_API_KEY` is required for auto-generating questions. Get your API key from [OpenAI Platform](https://platform.openai.com/api-keys)
- For Azure SQL: Ensure firewall allows your IP address and Azure services

## License

MIT
