# Vercel Deployment Troubleshooting Guide

## Common Issues and Solutions

### 1. Login Not Working on Vercel

If login works locally but not on Vercel, check the following:

#### A. Environment Variables

**Critical**: Ensure all environment variables are set in Vercel:

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Verify these variables are set:

   ```
   DATABASE_URL=sqlserver://your-server.database.windows.net:1433;database=sql-practice-platform;user=username@server;password=password;encrypt=true;trustServerCertificate=false
   OPENAI_API_KEY=sk-your-key-here
   NODE_ENV=production
   ```

4. **Important**: After adding/updating environment variables, you must **redeploy** your application.

#### B. Azure SQL Server Firewall Rules

Azure SQL Server blocks connections by default. You need to allow Vercel's IP addresses:

1. Go to [Azure Portal](https://portal.azure.com)
2. Navigate to your SQL Server resource
3. Go to **Security** → **Networking** → **Firewall rules**
4. Add firewall rules to allow:
   - **Option 1**: Allow Azure services (recommended for Vercel)
     - Enable "Allow Azure services and resources to access this server"
   - **Option 2**: Add specific IP ranges
     - Vercel uses dynamic IPs, so this is less reliable
   - **Option 3**: Use Private Endpoint (advanced, for production)

#### C. Database Connection String Format

Ensure your `DATABASE_URL` in Vercel matches this exact format:

```
sqlserver://SERVER.database.windows.net:1433;database=DATABASE_NAME;user=USERNAME@SERVER;password=PASSWORD;encrypt=true;trustServerCertificate=false
```

**Common mistakes:**
- Missing `@SERVER` in username
- Wrong port (should be `1433`)
- Missing `encrypt=true`
- Incorrect password encoding (special characters may need URL encoding)

#### D. Database Schema and Data

Ensure your production database has:
1. All tables created (run migrations)
2. Initial users seeded

**To seed production database:**
```bash
# Option 1: Use Vercel CLI
vercel env pull .env.production
npm run db:seed

# Option 2: Run seed script locally with production DATABASE_URL
DATABASE_URL="your-production-url" npm run db:seed
```

### 2. Cookie Issues

If login succeeds but session is not maintained:

- **Check browser console** for cookie errors
- **Verify HTTPS**: Vercel uses HTTPS, so `secure: true` cookies should work
- **Check cookie path**: Should be set to `/` (already fixed in code)

### 3. Debugging Production Issues

#### View Vercel Logs

1. Go to Vercel dashboard → Your project → **Deployments**
2. Click on a deployment → **Functions** tab
3. View real-time logs

#### Test Database Connection

Create a test API route to verify database connectivity:

```typescript
// app/api/test-db/route.ts
import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    await prisma.$connect()
    const userCount = await prisma.user.count()
    return NextResponse.json({ 
      success: true, 
      userCount,
      message: 'Database connection successful' 
    })
  } catch (error) {
    return NextResponse.json({ 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error' 
    }, { status: 500 })
  }
}
```

Then visit: `https://your-app.vercel.app/api/test-db`

### 4. Build Errors

#### Prisma Client Generation

If build fails with Prisma errors:

1. Ensure `postinstall` script runs: `"postinstall": "prisma generate --schema=./prisma/schema.prisma"`
2. Check that `prisma/schema.prisma` is committed to Git
3. Verify Prisma version in `package.json` matches your schema

#### TypeScript Errors

If TypeScript errors occur:

1. Check `tsconfig.json` paths are correct
2. Ensure all dependencies are in `package.json`
3. Run `npm install` locally to verify

### 5. Step-by-Step Deployment Checklist

- [ ] Code pushed to GitHub
- [ ] Vercel project connected to GitHub repository
- [ ] Environment variables set in Vercel:
  - [ ] `DATABASE_URL` (Azure SQL Server connection string)
  - [ ] `OPENAI_API_KEY`
  - [ ] `NODE_ENV=production`
- [ ] Azure SQL Server firewall allows Azure services
- [ ] Database schema deployed (`npm run db:push` or migrations)
- [ ] Initial users seeded in production database
- [ ] Build succeeds on Vercel
- [ ] Test login on production URL
- [ ] Check Vercel function logs for errors

### 6. Quick Fixes

#### Reset Environment Variables

1. Vercel Dashboard → Settings → Environment Variables
2. Delete and re-add `DATABASE_URL`
3. Redeploy

#### Force Rebuild

1. Vercel Dashboard → Deployments
2. Click "..." on latest deployment
3. Select "Redeploy"

#### Clear Build Cache

1. Vercel Dashboard → Settings → General
2. Scroll to "Build & Development Settings"
3. Clear cache and redeploy

## Getting Help

If issues persist:

1. **Check Vercel Logs**: Most errors will appear in function logs
2. **Test Database Connection**: Use the test API route above
3. **Verify Environment Variables**: Double-check all are set correctly
4. **Check Azure SQL Server**: Verify firewall rules and connection string
5. **Compare Local vs Production**: Ensure local `.env` matches Vercel settings

## Common Error Messages

### "Invalid credentials"
- User doesn't exist in production database
- Password is incorrect
- **Solution**: Seed users in production database

### "Database connection failed"
- Firewall blocking Vercel IPs
- Incorrect `DATABASE_URL`
- **Solution**: Check Azure firewall rules and connection string

### "Environment variable not found: DATABASE_URL"
- Variable not set in Vercel
- Variable not available during build
- **Solution**: Set in Vercel dashboard and redeploy

### Cookie not set / Session lost
- Cookie path incorrect
- HTTPS/secure cookie issues
- **Solution**: Already fixed in code (path: '/')

