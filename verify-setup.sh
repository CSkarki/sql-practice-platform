#!/bin/bash
echo "🔍 Verifying Vercel Setup..."
echo ""
echo "1. Check if DATABASE_URL is in local .env:"
if grep -q "DATABASE_URL" .env 2>/dev/null; then
  echo "   ✅ DATABASE_URL found in .env"
else
  echo "   ❌ DATABASE_URL not found in .env"
fi

echo ""
echo "2. Test local database connection:"
npm run db:generate > /dev/null 2>&1
if node -e "require('dotenv').config(); const { PrismaClient } = require('./lib/generated/prisma'); const prisma = new PrismaClient(); prisma.\$connect().then(() => { console.log('   ✅ Local database connects'); prisma.\$disconnect(); }).catch(e => { console.log('   ❌ Local database error:', e.message); process.exit(1); });" 2>/dev/null; then
  echo "   ✅ Local database connection works"
else
  echo "   ❌ Local database connection failed"
fi

echo ""
echo "3. Check if users exist locally:"
USER_COUNT=$(node -e "require('dotenv').config(); const { PrismaClient } = require('./lib/generated/prisma'); const prisma = new PrismaClient(); prisma.user.count().then(c => { console.log(c); prisma.\$disconnect(); }).catch(() => { console.log('0'); prisma.\$disconnect(); });" 2>/dev/null)
if [ "$USER_COUNT" -gt 0 ]; then
  echo "   ✅ Found $USER_COUNT user(s) in local database"
else
  echo "   ⚠️  No users found locally. Run: npm run db:seed"
fi

echo ""
echo "📋 Next Steps for Vercel:"
echo "   1. Add DATABASE_URL to Vercel environment variables"
echo "   2. Enable 'Allow Azure services' in Azure Portal"
echo "   3. Seed users in production: DATABASE_URL='...' npm run db:seed"
echo "   4. Redeploy on Vercel"
