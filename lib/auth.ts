import { prisma } from './prisma'
import bcrypt from 'bcryptjs'
import { cookies } from 'next/headers'

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 10)
}

export async function verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
  return bcrypt.compare(password, hashedPassword)
}

export async function login(username: string, password: string) {
  try {
    // Trim whitespace from username
    const trimmedUsername = username.trim()
    
    if (!trimmedUsername || !password) {
      return { error: 'Username and password are required' }
    }

    // Check database connection
    await prisma.$connect()
    
    const user = await prisma.user.findUnique({
      where: { username: trimmedUsername }
    })

    if (!user) {
      if (process.env.NODE_ENV === 'production') {
        console.error('Login attempt failed: User not found', { username: trimmedUsername })
      }
      return { error: 'Invalid credentials' }
    }

    const isValid = await verifyPassword(password, user.password)
    if (!isValid) {
      if (process.env.NODE_ENV === 'production') {
        console.error('Login attempt failed: Invalid password', { username: trimmedUsername, userId: user.id })
      }
      return { error: 'Invalid credentials' }
    }

    return { user: { id: user.id, username: user.username, role: user.role, name: user.name } }
  } catch (error) {
    // Enhanced error logging
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    console.error('Login error:', {
      message: errorMessage,
      stack: error instanceof Error ? error.stack : undefined,
      type: error?.constructor?.name
    })
    
    // Check for database connection errors
    if (errorMessage.includes("Can't reach database server") || 
        errorMessage.includes('connection') || 
        errorMessage.includes('timeout') || 
        errorMessage.includes('ECONNREFUSED') ||
        errorMessage.includes('ENOTFOUND') ||
        errorMessage.includes('P1001') ||
        errorMessage.includes('P1017')) {
      const isProduction = process.env.NODE_ENV === 'production'
      return { 
        error: isProduction 
          ? 'Database connection failed. Please check Azure SQL Server firewall rules and ensure "Allow Azure services" is enabled.'
          : 'Database connection failed. Your local IP may be blocked by Azure SQL Server firewall. Please add your IP to the firewall rules in Azure Portal.'
      }
    }
    
    // Provide more specific error message in production
    if (process.env.NODE_ENV === 'production') {
      if (errorMessage.includes('40615') || errorMessage.includes('not allowed to access')) {
        return { error: 'Database firewall blocking connection. Please enable "Allow Azure services" in Azure SQL Server firewall settings.' }
      }
      if (errorMessage.includes('Login failed') || errorMessage.includes('authentication')) {
        return { error: 'Database authentication failed. Please check DATABASE_URL credentials in Azure App Service.' }
      }
    }
    
    return { error: 'An error occurred during login' }
  }
}

export async function getCurrentUser() {
  try {
    const cookieStore = await cookies()
    const userId = cookieStore.get('userId')?.value

    if (!userId) {
      return null
    }

    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { id: true, username: true, role: true, name: true }
    })

    return user
  } catch (error) {
    return null
  }
}

export async function requireAuth(requiredRole?: 'admin' | 'student') {
  const user = await getCurrentUser()
  
  if (!user) {
    throw new Error('Unauthorized')
  }

  if (requiredRole && user.role !== requiredRole) {
    throw new Error('Forbidden')
  }

  return user
}

