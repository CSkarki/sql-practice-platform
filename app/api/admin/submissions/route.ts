import { NextRequest, NextResponse } from 'next/server'
import { requireAuth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const user = await requireAuth('admin')
    
    const submissions = await prisma.testSubmission.findMany({
      include: {
        scheduledTest: {
          include: {
            practiceBank: true,
            student: true
          }
        }
      },
      orderBy: { submittedAt: 'desc' }
    })

    return NextResponse.json({ submissions })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 401 })
  }
}

