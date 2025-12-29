import { NextRequest, NextResponse } from 'next/server'
import { requireAuth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export async function POST(request: NextRequest) {
  try {
    const user = await requireAuth('admin')
    const data = await request.json()

    const { submissionId, autoReview, answersReleased, score, feedback } = data

    if (!submissionId) {
      return NextResponse.json({ error: 'Submission ID required' }, { status: 400 })
    }

    const submission = await prisma.testSubmission.findUnique({
      where: { id: submissionId },
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
      return NextResponse.json({ error: 'Submission not found' }, { status: 404 })
    }

    let calculatedScore = score

    // Auto-review logic
    if (autoReview) {
      const practice = await prisma.practiceBank.findUnique({
        where: { id: submission.scheduledTest.practiceBankId }
      })

      if (practice) {
        const correctAnswers = JSON.parse(practice.answers)
        const studentAnswers = submission.scheduledTest.answers

        let correctCount = 0
        let totalQuestions = correctAnswers.length

        for (let i = 0; i < totalQuestions; i++) {
          const correctAnswer = correctAnswers[i]?.answer?.toLowerCase().trim()
          const studentAnswer = studentAnswers.find((a: any) => a.questionId === String(i))?.answerText?.toLowerCase().trim()

          // Simple comparison - in production, you might want more sophisticated comparison
          if (correctAnswer && studentAnswer && correctAnswer === studentAnswer) {
            correctCount++
            // Update student answer as correct
            await prisma.studentAnswer.updateMany({
              where: {
                scheduledTestId: submission.scheduledTestId,
                questionId: String(i)
              },
              data: { isCorrect: true }
            })
          } else {
            await prisma.studentAnswer.updateMany({
              where: {
                scheduledTestId: submission.scheduledTestId,
                questionId: String(i)
              },
              data: { isCorrect: false }
            })
          }
        }

        calculatedScore = (correctCount / totalQuestions) * 100
      }
    }

    const updatedSubmission = await prisma.testSubmission.update({
      where: { id: submissionId },
      data: {
        reviewedAt: new Date(),
        reviewedBy: user.id,
        autoReviewed: autoReview || false,
        answersReleased: answersReleased || false,
        score: calculatedScore,
        feedback: feedback || null
      }
    })

    // Update scheduled test status
    await prisma.scheduledTest.update({
      where: { id: submission.scheduledTestId },
      data: { status: 'reviewed' }
    })

    return NextResponse.json({ submission: updatedSubmission })
  } catch (error: any) {
    console.error('Review error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

