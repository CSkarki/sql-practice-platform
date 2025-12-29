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
    
    const user = await prisma.user.findUnique({
      where: { username: trimmedUsername }
    })

    if (!user) {
      return { error: 'Invalid credentials' }
    }

    const isValid = await verifyPassword(password, user.password)
    if (!isValid) {
      return { error: 'Invalid credentials' }
    }

    return { user: { id: user.id, username: user.username, role: user.role, name: user.name } }
  } catch (error) {
    console.error('Login error:', error)
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

