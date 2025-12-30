import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    // Test database connection
    await prisma.$connect()
    
    // Try to count users
    const userCount = await prisma.user.count()
    
    // Try to get first user
    const firstUser = await prisma.user.findFirst({
      select: {
        username: true,
        role: true,
        name: true
      }
    })
    
    return NextResponse.json({ 
      success: true, 
      userCount,
      hasUsers: userCount > 0,
      firstUser: firstUser || null,
      message: 'Database connection successful',
      databaseUrl: process.env.DATABASE_URL ? 'Set (hidden)' : 'NOT SET'
    })
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    const errorStack = error instanceof Error ? error.stack : undefined
    
    return NextResponse.json({ 
      success: false, 
      error: errorMessage,
      errorType: error?.constructor?.name,
      stack: process.env.NODE_ENV === 'development' ? errorStack : undefined,
      databaseUrl: process.env.DATABASE_URL ? 'Set (hidden)' : 'NOT SET',
      nodeEnv: process.env.NODE_ENV || 'not set'
    }, { status: 500 })
  }
}

