import { NextRequest, NextResponse } from 'next/server'
import { requireAuth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export async function POST(request: NextRequest) {
  try {
    const user = await requireAuth('student')
    const data = await request.json()

    const { scheduledTestId } = data

    if (!scheduledTestId) {
      return NextResponse.json({ error: 'Test ID required' }, { status: 400 })
    }

    // Check if test belongs to student
    const test = await prisma.scheduledTest.findFirst({
      where: {
        id: scheduledTestId,
        studentId: user.id
      }
    })

    if (!test) {
      return NextResponse.json({ error: 'Test not found' }, { status: 404 })
    }

    // Check if already submitted
    const existingSubmission = await prisma.testSubmission.findUnique({
      where: { scheduledTestId }
    })

    if (existingSubmission) {
      return NextResponse.json({ error: 'Test already submitted' }, { status: 400 })
    }

    // Create submission
    const submission = await prisma.testSubmission.create({
      data: {
        scheduledTestId,
        studentId: user.id
      }
    })

    // Update test status
    await prisma.scheduledTest.update({
      where: { id: scheduledTestId },
      data: { status: 'submitted' }
    })

    return NextResponse.json({ submission })
  } catch (error: any) {
    console.error('Submit error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

