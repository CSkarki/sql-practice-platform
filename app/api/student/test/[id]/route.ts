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

    const test = await prisma.scheduledTest.findFirst({
      where: {
        id: testId,
        studentId: user.id
      },
      include: {
        practiceBank: true,
        answers: true,
        submissions: true
      }
    })

    if (!test) {
      return NextResponse.json({ error: 'Test not found' }, { status: 404 })
    }

    // Parse questions for student (without answers)
    const questions = JSON.parse(test.practiceBank.questions)

    return NextResponse.json({
      test: {
        ...test,
        practiceBank: {
          ...test.practiceBank,
          questions
        }
      }
    })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

