import { NextRequest, NextResponse } from 'next/server'
import { requireAuth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const user = await requireAuth('student')
    const { id: testId } = await params

    const submission = await prisma.testSubmission.findFirst({
      where: {
        scheduledTestId: testId,
        studentId: user.id,
        answersReleased: true
      },
      include: {
        scheduledTest: {
          include: {
            practiceBank: true,
            answers: true
          }
        }
      }
    })

    if (!submission) {
      return NextResponse.json({ error: 'Results not available yet' }, { status: 404 })
    }

    // Parse answers with explanations
    const correctAnswers = JSON.parse(submission.scheduledTest.practiceBank.answers)

    return NextResponse.json({
      submission,
      correctAnswers
    })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

