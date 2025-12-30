# Quick Fix: Add DATABASE_URL to Vercel

## The Problem
Your Vercel logs show: **"Environment variable not found: DATABASE_URL"**

This means the database connection string is not configured in Vercel.

## Solution: Add Environment Variable in Vercel

### Step 1: Get Your Database Connection String

Your Azure SQL Server connection string should look like:
```
sqlserver://chn-dev-srv01.database.windows.net:1433;database=sql-practice-platform;user=chn-admin@chn-dev-srv01;password=P@ssword12345;encrypt=true;trustServerCertificate=false
```

**⚠️ Important:** Use the exact connection string from your local `.env` file.

### Step 2: Add to Vercel

1. **Go to Vercel Dashboard**
   - Visit: https://vercel.com/dashboard
   - Navigate to your project: **sql-practice-platform**

2. **Open Settings**
   - Click on **Settings** tab (top navigation)
   - Click **Environment Variables** (left sidebar)

3. **Add DATABASE_URL**
   - Click **"Add New"** button
   - **Key:** `DATABASE_URL`
   - **Value:** Paste your full connection string:
     ```
     sqlserver://chn-dev-srv01.database.windows.net:1433;database=sql-practice-platform;user=chn-admin@chn-dev-srv01;password=P@ssword12345;encrypt=true;trustServerCertificate=false
     ```
   - **Environment:** Select **Production** (and optionally **Preview** and **Development**)
   - Click **Save**

4. **Add OPENAI_API_KEY** (if not already set)
   - Click **"Add New"** again
   - **Key:** `OPENAI_API_KEY`
   - **Value:** Your OpenAI API key (starts with `sk-...`)
   - **Environment:** Select **Production** (and optionally **Preview** and **Development**)
   - Click **Save**

### Step 3: Redeploy

**Critical:** After adding environment variables, you MUST redeploy:

1. Go to **Deployments** tab
2. Click **"..."** (three dots) on the latest deployment
3. Select **"Redeploy"**
4. Wait for deployment to complete (usually 1-2 minutes)

### Step 4: Verify

1. **Test Database Connection:**
   Visit: `https://your-app.vercel.app/api/test-db`
   
   You should see:
   ```json
   {
     "success": true,
     "userCount": 3,
     "hasUsers": true,
     "message": "Database connection successful"
   }
   ```

2. **Try Login Again:**
   - Go to your login page
   - Use credentials: `admin` / `admin123` (or your updated password)
   - Should work now!

## Common Issues

### Still Getting 401 After Adding DATABASE_URL?

1. **Check Environment Scope:**
   - Make sure `DATABASE_URL` is set for **Production** environment
   - Vercel has separate environments: Production, Preview, Development

2. **Verify Connection String:**
   - No extra spaces or quotes
   - Username includes `@SERVER` (e.g., `chn-admin@chn-dev-srv01`)
   - Password is correct (special characters may need URL encoding)

3. **Check Azure SQL Server Firewall:**
   - Go to Azure Portal → SQL Server → Networking
   - Enable **"Allow Azure services and resources to access this server"**
   - Click **Save**

4. **Check Vercel Logs Again:**
   - After redeploy, check if error changed
   - Should see "Database connection successful" instead of "Environment variable not found"

### Users Not Found?

If database connects but login still fails:
- Users may not be seeded in production database
- Run: `DATABASE_URL="your-production-url" npm run db:seed`

## Quick Checklist

- [ ] Added `DATABASE_URL` to Vercel Environment Variables
- [ ] Added `OPENAI_API_KEY` to Vercel Environment Variables  
- [ ] Set environment scope to **Production**
- [ ] Redeployed the application
- [ ] Verified database connection at `/api/test-db`
- [ ] Enabled "Allow Azure services" in Azure SQL Server firewall
- [ ] Tested login with admin credentials

## Need Help?

If still having issues:
1. Check Vercel logs for new error messages
2. Visit `/api/test-db` endpoint to see specific error
3. Verify connection string format matches exactly
4. Ensure Azure SQL Server firewall allows Azure services

