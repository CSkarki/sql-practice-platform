import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET() {
  const diagnostics: any = {
    timestamp: new Date().toISOString(),
    environment: {
      nodeEnv: process.env.NODE_ENV || 'not set',
      hasDatabaseUrl: !!process.env.DATABASE_URL,
      databaseUrlLength: process.env.DATABASE_URL?.length || 0,
      databaseUrlPreview: process.env.DATABASE_URL 
        ? `${process.env.DATABASE_URL.substring(0, 30)}...` 
        : 'NOT SET'
    },
    database: {
      connected: false,
      error: null,
      userCount: 0,
      hasUsers: false,
      users: []
    },
    recommendations: []
  }

  // Test database connection
  try {
    await prisma.$connect()
    diagnostics.database.connected = true
    
    // Try to count users
    try {
      const userCount = await prisma.user.count()
      diagnostics.database.userCount = userCount
      diagnostics.database.hasUsers = userCount > 0
      
      if (userCount > 0) {
        const users = await prisma.user.findMany({
          select: {
            username: true,
            role: true,
            name: true
          },
          take: 10
        })
        diagnostics.database.users = users
      } else {
        diagnostics.recommendations.push('No users found in database. Run: npm run db:seed with production DATABASE_URL')
      }
    } catch (queryError: any) {
      diagnostics.database.error = queryError.message
      diagnostics.recommendations.push('Database connected but query failed. Check table structure.')
    }
  } catch (error: any) {
    diagnostics.database.connected = false
    const errorMessage = error.message || 'Unknown error'
    diagnostics.database.error = errorMessage
    
    // Provide specific recommendations based on error
    if (errorMessage.includes('Environment variable not found')) {
      diagnostics.recommendations.push('DATABASE_URL environment variable is not set')
      diagnostics.recommendations.push('Go to Azure App Service → Configuration → Application settings → Add DATABASE_URL')
    } else if (errorMessage.includes('not allowed to access') || errorMessage.includes('firewall')) {
      diagnostics.recommendations.push('Azure SQL Server firewall is blocking connection')
      diagnostics.recommendations.push('Go to Azure Portal → SQL Server → Networking → Enable "Allow Azure services"')
    } else if (errorMessage.includes('Login failed') || errorMessage.includes('authentication')) {
      diagnostics.recommendations.push('Database credentials are incorrect')
      diagnostics.recommendations.push('Check username and password in DATABASE_URL connection string')
    } else if (errorMessage.includes('timeout') || errorMessage.includes('ECONNREFUSED')) {
      diagnostics.recommendations.push('Cannot reach database server')
      diagnostics.recommendations.push('Check server name and network connectivity')
    }
  } finally {
    try {
      await prisma.$disconnect()
    } catch (e) {
      // Ignore disconnect errors
    }
  }

  // Add general recommendations
  if (!diagnostics.environment.hasDatabaseUrl) {
    diagnostics.recommendations.push('DATABASE_URL is missing - add it to Azure App Service environment variables')
  }

  if (diagnostics.database.connected && !diagnostics.database.hasUsers) {
    diagnostics.recommendations.push('Database is connected but has no users. Seed the database with: DATABASE_URL="your-url" npm run db:seed')
  }

  return NextResponse.json(diagnostics, {
    status: diagnostics.database.connected ? 200 : 500
  })
}

