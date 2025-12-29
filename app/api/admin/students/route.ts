import { NextResponse } from 'next/server'
import { requireAuth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const user = await requireAuth('admin')
    
    const students = await prisma.user.findMany({
      where: { role: 'student' },
      select: {
        id: true,
        username: true,
        name: true,
        email: true
      }
    })

    return NextResponse.json({ students })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 401 })
  }
}

