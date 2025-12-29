import { NextResponse } from 'next/server'
import { requireAuth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const user = await requireAuth('student')
    
    const tests = await prisma.scheduledTest.findMany({
      where: { studentId: user.id },
      include: {
        practiceBank: {
          select: {
            id: true,
            title: true,
            businessDomain: true,
            category: true,
            focusAreas: true
          }
        },
        submissions: true
      },
      orderBy: { scheduledDate: 'desc' }
    })

    return NextResponse.json({ tests })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 401 })
  }
}

