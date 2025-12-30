# Fix: Azure SQL Server Firewall Blocking Vercel

## The Problem
Vercel's server (IP: `98.91.244.76`) is being blocked by Azure SQL Server firewall.

**Error Message:**
```
Client with IP address '98.91.244.76' is not allowed to access the server.
```

## Solution: Enable "Allow Azure Services" in Azure SQL Server

### Step-by-Step Instructions

1. **Go to Azure Portal**
   - Visit: https://portal.azure.com
   - Sign in with your Azure account

2. **Navigate to Your SQL Server**
   - In the search bar at the top, type: `chn-dev-srv01`
   - Click on your SQL Server resource

3. **Open Firewall Settings**
   - In the left menu, under **Security**, click **Networking**
   - Or go to **Settings** → **Networking**

4. **Enable Azure Services Access**
   - Find the section: **"Public network access"** or **"Firewall rules"**
   - Look for the checkbox: **"Allow Azure services and resources to access this server"**
   - ✅ **Check this box** (enable it)
   - This allows ALL Azure services (including Vercel) to connect

5. **Save Changes**
   - Click **Save** at the top of the page
   - Wait for the confirmation message: "Firewall rules updated successfully"

6. **Wait for Propagation**
   - Azure says it may take up to 5 minutes for changes to take effect
   - Usually it's faster (1-2 minutes)

### Alternative: Add Specific IP Range (Not Recommended)

If you prefer to add specific IPs instead:
- Vercel uses dynamic IPs, so this is not reliable
- You'd need to add multiple IP ranges
- **Better to use "Allow Azure services" option above**

## Verify the Fix

After enabling "Allow Azure services":

1. **Wait 1-2 minutes** for changes to propagate

2. **Test Database Connection:**
   Visit: `https://sql-practice-platform-843iih87m-cskarkis-projects.vercel.app/api/test-db`
   
   Should see:
   ```json
   {
     "success": true,
     "userCount": 3,
     "message": "Database connection successful"
   }
   ```

3. **Try Login:**
   - Go to your login page
   - Use: `admin` / `admin123` (or your password)
   - Should work now!

## Visual Guide

In Azure Portal, you should see:

```
┌─────────────────────────────────────────┐
│ Networking                              │
├─────────────────────────────────────────┤
│ Public network access                   │
│                                         │
│ ☑ Allow Azure services and resources   │
│   to access this server                 │
│                                         │
│ [Save]                                  │
└─────────────────────────────────────────┘
```

## Important Notes

1. **Security:** Enabling "Allow Azure services" is safe because:
   - Only Azure-hosted services can connect
   - Still requires valid credentials
   - Your database is not publicly accessible

2. **Vercel IPs Change:** Vercel uses dynamic IPs, so adding specific IPs won't work reliably. Using "Allow Azure services" is the correct solution.

3. **Both Settings Needed:**
   - ✅ `DATABASE_URL` environment variable in Vercel (you already have this)
   - ✅ "Allow Azure services" enabled in Azure (you need to do this)

## Troubleshooting

### Still Getting Firewall Errors?

1. **Double-check the setting:**
   - Go back to Azure Portal → SQL Server → Networking
   - Verify the checkbox is actually checked
   - Click Save again if needed

2. **Wait longer:**
   - Sometimes takes up to 5 minutes
   - Try again after waiting

3. **Check Vercel Logs:**
   - After waiting, check if error changed
   - Should see "Database connection successful" instead

4. **Verify Connection String:**
   - Make sure `DATABASE_URL` in Vercel is correct
   - Should match your local `.env` file

## Quick Checklist

- [ ] Opened Azure Portal
- [ ] Navigated to SQL Server: `chn-dev-srv01`
- [ ] Went to **Security** → **Networking**
- [ ] ✅ Enabled **"Allow Azure services and resources to access this server"**
- [ ] Clicked **Save**
- [ ] Waited 1-2 minutes
- [ ] Tested `/api/test-db` endpoint
- [ ] Tried login again

## After Fixing

Once the firewall is configured:
- ✅ Vercel can connect to your database
- ✅ Login will work
- ✅ All API endpoints will function
- ✅ Students and admins can use the application

