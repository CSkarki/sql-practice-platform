import { NextRequest, NextResponse } from 'next/server'
import { login } from '@/lib/auth'
import { cookies } from 'next/headers'

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json()

    if (!username || !password) {
      return NextResponse.json({ error: 'Username and password required' }, { status: 400 })
    }

    const result = await login(username, password)

    if (result.error) {
      // Log error in production for debugging (without sensitive data)
      if (process.env.NODE_ENV === 'production') {
        console.error('Login failed:', { username: username.trim(), error: result.error })
      } else {
        // In development, log full error for debugging
        console.error('Login failed:', result.error)
      }
      return NextResponse.json({ error: result.error }, { status: 401 })
    }

    const cookieStore = await cookies()
    cookieStore.set('userId', result.user!.id, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 7 // 7 days
    })

    return NextResponse.json({ user: result.user })
  } catch (error) {
    // Enhanced error logging for production debugging
    console.error('Login error:', error)
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    const errorStack = error instanceof Error ? error.stack : undefined
    
    // Log full error details in production for debugging
    if (process.env.NODE_ENV === 'production') {
      console.error('Login error details:', {
        message: errorMessage,
        stack: errorStack,
        type: error?.constructor?.name
      })
    }
    
    return NextResponse.json({ 
      error: 'Internal server error',
      ...(process.env.NODE_ENV === 'development' && { details: errorMessage })
    }, { status: 500 })
  }
}

