# Final Fix Guide - Get Vercel Working

Let's fix this step by step. Follow these instructions exactly.

## Pre-Check: Verify Everything Locally First

Before deploying, make sure it works locally:

```bash
# 1. Make sure your local .env has the correct DATABASE_URL
# 2. Test database connection
npm run dev
# Try logging in locally - does it work?
```

If local login works, the issue is Vercel configuration, not your code.

## Step-by-Step Vercel Fix

### Step 1: Add Environment Variables in Vercel (5 minutes)

1. **Go to Vercel Dashboard**
   - https://vercel.com/dashboard
   - Click on **sql-practice-platform** project

2. **Add DATABASE_URL**
   - Click **Settings** → **Environment Variables**
   - Click **"Add New"**
   - **Key:** `DATABASE_URL`
   - **Value:** Copy EXACTLY from your local `.env` file:
     ```
     sqlserver://chn-dev-srv01.database.windows.net:1433;database=sql-practice-platform;user=chn-admin@chn-dev-srv01;password=P@ssword12345;encrypt=true;trustServerCertificate=false
     ```
   - **Environment:** Check **Production**, **Preview**, and **Development**
   - Click **Save**

3. **Add OPENAI_API_KEY** (if not already there)
   - Click **"Add New"** again
   - **Key:** `OPENAI_API_KEY`
   - **Value:** Your OpenAI key (from local `.env`)
   - **Environment:** Check all three
   - Click **Save**

### Step 2: Fix Azure SQL Server Firewall (3 minutes)

1. **Go to Azure Portal**
   - https://portal.azure.com
   - Search: `chn-dev-srv01`
   - Click on the SQL Server

2. **Enable Azure Services**
   - Left menu: **Security** → **Networking**
   - Find: **"Public network access"** section
   - Look for: **"Allow Azure services and resources to access this server"**
   - ✅ **CHECK THE BOX** (make sure it's actually checked)
   - Click **Save** at the top
   - Wait for "Successfully updated" message

3. **Verify It's Enabled**
   - Refresh the page
   - Make sure the checkbox is still checked
   - If not, check it again and save

### Step 3: Seed Production Database (2 minutes)

Your production database might be empty. Seed it:

```bash
# Get your production DATABASE_URL from Vercel (Settings → Environment Variables)
# Copy the value, then run:

DATABASE_URL="sqlserver://chn-dev-srv01.database.windows.net:1433;database=sql-practice-platform;user=chn-admin@chn-dev-srv01;password=P@ssword12345;encrypt=true;trustServerCertificate=false" npm run db:seed
```

This creates the default users:
- `admin` / `admin123`
- `student1` / `student123`
- `sk01` / `student123`

### Step 4: Redeploy on Vercel (2 minutes)

1. **Go to Vercel Dashboard**
   - Click **Deployments** tab
   - Find the latest deployment
   - Click **"..."** (three dots)
   - Click **"Redeploy"**
   - Wait for it to finish (1-2 minutes)

### Step 5: Test (1 minute)

1. **Test Database Connection:**
   ```
   https://sql-practice-platform-843iih87m-cskarkis-projects.vercel.app/api/test-db
   ```
   
   Should show:
   ```json
   {
     "success": true,
     "userCount": 3,
     "hasUsers": true
   }
   ```

2. **Try Login:**
   - Go to your login page
   - Username: `admin`
   - Password: `admin123`
   - Should work!

## If Still Not Working

### Check Vercel Logs

1. Vercel Dashboard → **Deployments** → Latest → **Functions** tab
2. Look for the most recent error
3. Share the error message

### Common Issues

**"Environment variable not found"**
→ DATABASE_URL not set in Vercel (Step 1)

**"IP address not allowed"**
→ Azure firewall not enabled (Step 2)

**"Invalid credentials" but database connects**
→ Users not seeded (Step 3)

**"User not found"**
→ Users not seeded (Step 3)

## Alternative: Use SQLite for Production (Quick Fix)

If Azure SQL Server continues to cause issues, you can temporarily use a different database:

1. Use Vercel Postgres (free tier available)
2. Or use a simpler database solution

But let's try to fix Azure SQL first - it should work!

## Quick Checklist

- [ ] DATABASE_URL added to Vercel (all environments)
- [ ] OPENAI_API_KEY added to Vercel
- [ ] Azure firewall "Allow Azure services" is CHECKED
- [ ] Clicked Save in Azure Portal
- [ ] Waited 3 minutes after firewall change
- [ ] Seeded users in production database
- [ ] Redeployed on Vercel
- [ ] Tested `/api/test-db` endpoint
- [ ] Tried login

## Need Help?

If you're still stuck, share:
1. Response from `/api/test-db` endpoint
2. Latest error from Vercel logs
3. Screenshot of Azure Portal → Networking page

We'll get this working! 🚀

