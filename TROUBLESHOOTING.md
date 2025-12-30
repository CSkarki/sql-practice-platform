# Troubleshooting Vercel Login Issues

## Current Status Check

Based on your error logs, here's what to check:

### Step 1: Test Database Connection

Visit this URL (should work immediately):
```
https://sql-practice-platform-843iih87m-cskarkis-projects.vercel.app/api/test-db
```

**Expected Results:**

✅ **If successful:**
```json
{
  "success": true,
  "userCount": 3,
  "hasUsers": true,
  "message": "Database connection successful"
}
```
→ Database is connected! Check if users exist.

❌ **If firewall error:**
```json
{
  "success": false,
  "error": "Client with IP address '98.91.244.76' is not allowed..."
}
```
→ Azure firewall is still blocking. See Step 2.

❌ **If no DATABASE_URL:**
```json
{
  "success": false,
  "error": "Environment variable not found: DATABASE_URL"
}
```
→ Add DATABASE_URL to Vercel environment variables.

### Step 2: Verify Azure SQL Server Firewall

**Your error showed:** IP `98.91.244.76` was blocked

**Fix in Azure Portal:**

1. Go to: https://portal.azure.com
2. Search: `chn-dev-srv01`
3. Click: **Security** → **Networking**
4. **CRITICAL:** Check this box:
   ```
   ☑ Allow Azure services and resources to access this server
   ```
5. Click **Save**
6. Wait 2-3 minutes

**Double-check:**
- The checkbox must be **checked** (not just visible)
- Click **Save** even if it looks enabled
- Wait a few minutes for changes to propagate

### Step 3: Check if Users Exist in Production Database

If database connects but login fails, users might not be seeded.

**Check:**
Visit `/api/test-db` - if `userCount: 0`, you need to seed users.

**Seed users:**
```bash
# Get your production DATABASE_URL from Vercel
# Then run locally:
DATABASE_URL="sqlserver://chn-dev-srv01.database.windows.net:1433;database=sql-practice-platform;user=chn-admin@chn-dev-srv01;password=YOUR_PASSWORD;encrypt=true;trustServerCertificate=false" npm run db:seed
```

### Step 4: Verify Vercel Environment Variables

1. Go to: https://vercel.com/dashboard
2. Select: **sql-practice-platform**
3. Go to: **Settings** → **Environment Variables**
4. Verify:
   - ✅ `DATABASE_URL` exists
   - ✅ Set for **Production** environment
   - ✅ Value matches your Azure connection string exactly

**Connection String Format:**
```
sqlserver://SERVER.database.windows.net:1433;database=DATABASE_NAME;user=USERNAME@SERVER;password=PASSWORD;encrypt=true;trustServerCertificate=false
```

**Common Mistakes:**
- Missing `@SERVER` in username (should be `chn-admin@chn-dev-srv01`)
- Extra spaces or quotes
- Wrong password
- Missing `encrypt=true`

### Step 5: Check Vercel Logs

1. Go to: Vercel Dashboard → **Deployments**
2. Click on latest deployment → **Functions** tab
3. Look for:
   - ✅ "Database connection successful" = Good!
   - ❌ "not allowed to access" = Firewall issue
   - ❌ "Environment variable not found" = Missing DATABASE_URL
   - ❌ "Login failed: User not found" = No users in database

## Quick Diagnostic Checklist

Run through these in order:

- [ ] Visit `/api/test-db` endpoint
- [ ] Check response - what does it say?
- [ ] If firewall error → Enable "Allow Azure services" in Azure
- [ ] If no DATABASE_URL → Add to Vercel environment variables
- [ ] If userCount: 0 → Seed users in production database
- [ ] Wait 2-3 minutes after any changes
- [ ] Try login again
- [ ] Check Vercel logs for new errors

## Most Common Issues

### Issue 1: Firewall Still Blocking
**Symptom:** Error mentions IP address not allowed
**Fix:** 
- Go to Azure Portal → SQL Server → Networking
- **Double-check** "Allow Azure services" is checked
- Click Save (even if it looks enabled)
- Wait 3-5 minutes

### Issue 2: No Users in Database
**Symptom:** Database connects but login fails with "Invalid credentials"
**Fix:**
- Seed users: `DATABASE_URL="..." npm run db:seed`
- Default users: `admin`/`admin123`, `student1`/`student123`, `sk01`/`student123`

### Issue 3: Wrong Connection String
**Symptom:** Authentication errors or connection timeouts
**Fix:**
- Verify connection string in Vercel matches your local `.env`
- Check username includes `@SERVER`
- Verify password is correct

## Still Not Working?

1. **Share the `/api/test-db` response** - This will show exactly what's wrong
2. **Check Vercel logs** - Look for the most recent error
3. **Verify Azure firewall** - Take a screenshot of the Networking page
4. **Double-check environment variables** - Verify DATABASE_URL is set for Production

## Next Steps

After fixing the firewall or environment variables:
1. Wait 2-3 minutes
2. Visit `/api/test-db` to verify connection
3. If successful, try login
4. If login fails but connection works, seed users

