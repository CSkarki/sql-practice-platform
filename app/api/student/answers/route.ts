import { NextRequest, NextResponse } from 'next/server'
import { requireAuth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export async function POST(request: NextRequest) {
  try {
    const user = await requireAuth('student')
    const data = await request.json()

    const { scheduledTestId, questionId, answerText } = data

    if (!scheduledTestId || questionId === undefined || !answerText) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Check if test belongs to student
    const test = await prisma.scheduledTest.findFirst({
      where: {
        id: scheduledTestId,
        studentId: user.id,
        status: { in: ['scheduled', 'in_progress'] }
      }
    })

    if (!test) {
      return NextResponse.json({ error: 'Test not found or not available' }, { status: 404 })
    }

    // Check if answer exists
    const existingAnswer = await prisma.studentAnswer.findFirst({
      where: {
        scheduledTestId,
        questionId: String(questionId)
      }
    })

    // Update or create answer
    const answer = existingAnswer
      ? await prisma.studentAnswer.update({
          where: { id: existingAnswer.id },
          data: { answerText }
        })
      : await prisma.studentAnswer.create({
          data: {
            scheduledTestId,
            questionId: String(questionId),
            answerText
          }
        })

    // Update test status to in_progress
    await prisma.scheduledTest.update({
      where: { id: scheduledTestId },
      data: { status: 'in_progress' }
    })

    return NextResponse.json({ answer })
  } catch (error: any) {
    console.error('Save answer error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

