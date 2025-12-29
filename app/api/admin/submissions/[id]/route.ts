import { NextRequest, NextResponse } from 'next/server'
import { requireAuth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const user = await requireAuth('admin')
    const { id } = await params
    
    const submission = await prisma.testSubmission.findUnique({
      where: { id },
      include: {
        scheduledTest: {
          include: {
            practiceBank: true,
            student: true,
            answers: true
          }
        }
      }
    })

    if (!submission) {
      return NextResponse.json({ error: 'Submission not found' }, { status: 404 })
    }

    return NextResponse.json({ submission })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 401 })
  }
}

