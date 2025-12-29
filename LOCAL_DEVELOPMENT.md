# Local Development Setup Guide

## Azure SQL Server Connection Issues

If you see the error:
```
Can't reach database server at `chn-dev-srv01.database.windows.net:1433`
```

This means your local IP address is blocked by Azure SQL Server's firewall.

## Solution: Add Your IP to Azure SQL Server Firewall

### Step 1: Find Your Public IP Address

**Option A: Using Terminal (macOS/Linux)**
```bash
curl ifconfig.me
```

**Option B: Using Browser**
- Visit: https://whatismyipaddress.com/
- Copy your IPv4 address

**Option C: Using PowerShell (Windows)**
```powershell
(Invoke-WebRequest -Uri "https://ifconfig.me").Content
```

### Step 2: Add Firewall Rule in Azure Portal

1. **Go to Azure Portal**
   - Visit: https://portal.azure.com
   - Sign in with your Azure account

2. **Navigate to Your SQL Server**
   - Search for "SQL servers" in the top search bar
   - Click on your SQL server: `chn-dev-srv01`

3. **Open Firewall Settings**
   - In the left menu, under **Security**, click **Networking**
   - Or go to **Settings** → **Networking**

4. **Add Your IP Address**
   - Click **+ Add client IPv4** (this automatically adds your current IP)
   - **OR** manually add:
     - Click **+ Add a firewall rule**
     - **Rule name**: `MyLocalDev` (or any name)
     - **Start IP address**: Your public IP (e.g., `123.45.67.89`)
     - **End IP address**: Same as Start IP
     - Click **OK**

5. **Save Changes**
   - Click **Save** at the top of the page
   - Wait for the confirmation message

### Step 3: Verify Connection

After adding your IP, wait 1-2 minutes for the firewall rule to propagate, then:

```bash
# Test connection
npm run dev
```

Try logging in again. The connection should work now.

## Alternative: Allow All Azure Services (Less Secure)

If you want to allow all Azure services (including your local machine if using Azure VPN):

1. In Azure Portal → SQL Server → Networking
2. Enable **"Allow Azure services and resources to access this server"**
3. Click **Save**

⚠️ **Note**: This is less secure but convenient for development.

## Temporary Solution: Use SQLite for Local Development

If you can't access Azure SQL Server, you can temporarily use SQLite for local development:

1. **Update `.env`:**
   ```env
   # Comment out Azure SQL Server
   # DATABASE_URL="sqlserver://..."
   
   # Use SQLite for local dev
   DATABASE_URL="file:./dev.db"
   ```

2. **Update `prisma/schema.prisma`:**
   ```prisma
   datasource db {
     provider = "sqlite"  // Change from "sqlserver"
     url      = env("DATABASE_URL")
   }
   ```

3. **Reset and seed:**
   ```bash
   npm run db:push
   npm run db:seed
   ```

⚠️ **Note**: Remember to switch back to SQL Server before deploying to production!

## Troubleshooting

### Still Can't Connect?

1. **Check Your IP Changed**
   - Your public IP may change if you're on a dynamic connection
   - Re-run `curl ifconfig.me` and update the firewall rule

2. **Check Connection String**
   - Verify your `.env` file has the correct `DATABASE_URL`
   - Format: `sqlserver://SERVER.database.windows.net:1433;database=DB_NAME;user=USER@SERVER;password=PASSWORD;encrypt=true;trustServerCertificate=false`

3. **Check Server Status**
   - In Azure Portal, verify your SQL Server is running
   - Check if there are any service alerts

4. **Test Connection with Azure CLI**
   ```bash
   # Install Azure CLI if not installed
   # macOS: brew install azure-cli
   # Then test connection
   az sql server firewall-rule list --server chn-dev-srv01 --resource-group YOUR_RESOURCE_GROUP
   ```

5. **Check Network/Firewall**
   - Ensure your local firewall isn't blocking port 1433
   - Check if your company/school network blocks SQL Server connections

### Common Error Messages

**"Can't reach database server"**
- ✅ Solution: Add your IP to Azure SQL Server firewall (see above)

**"Login failed for user"**
- ✅ Solution: Check username/password in connection string
- ✅ Ensure username includes `@SERVER` (e.g., `admin@chn-dev-srv01`)

**"Connection timeout"**
- ✅ Solution: Check network connectivity, firewall rules, and server status

**"The server was not found or was not accessible"**
- ✅ Solution: Verify server name is correct in connection string
- ✅ Check if server exists and is running in Azure Portal

## Quick Reference

```bash
# Find your IP
curl ifconfig.me

# Test database connection
npm run dev

# Check Prisma connection
npm run db:studio
```

## Need Help?

1. Check Azure Portal → SQL Server → Networking → Firewall rules
2. Verify your `.env` file has correct `DATABASE_URL`
3. Check Vercel deployment guide: `VERCEL_DEPLOYMENT.md`
4. Review Prisma logs in terminal output

