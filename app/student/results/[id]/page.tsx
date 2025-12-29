'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'

export default function ViewResultsPage() {
  const router = useRouter()
  const params = useParams()
  const testId = params?.id as string
  const [results, setResults] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (testId) {
      loadResults()
    } else {
      setError('Test ID not found')
      setLoading(false)
    }
  }, [testId])

  async function loadResults() {
    if (!testId) {
      setError('Test ID is required')
      setLoading(false)
      return
    }

    try {
      const res = await fetch(`/api/student/results/${testId}`)
      if (res.ok) {
        const data = await res.json()
        setResults(data)
      } else {
        const errorData = await res.json().catch(() => ({ error: 'Failed to load results' }))
        setError(errorData.error || 'Results not available yet')
      }
    } catch (error) {
      console.error('Error loading results:', error)
      setError('Failed to load results. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="px-4 py-6 sm:px-0">
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            <div className="text-xl text-gray-600">Loading results...</div>
          </div>
        </div>
      </div>
    )
  }

  if (error || !results) {
    return (
      <div className="px-4 py-6 sm:px-0">
        <div className="bg-white shadow rounded-lg p-8">
          <div className="text-center">
            <p className="text-red-600 text-lg font-medium mb-2">
              {error || 'Results not available'}
            </p>
            <p className="text-gray-500 text-sm mb-4">
              {error === 'Results not available yet' 
                ? 'Your teacher has not released the answers yet. Please check back later.'
                : 'Please contact your teacher if you believe this is an error.'}
            </p>
            <button
              onClick={() => router.push('/student')}
              className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
            >
              Back to My Tests
            </button>
          </div>
        </div>
      </div>
    )
  }

  const submission = results?.submission
  const correctAnswers = results?.correctAnswers || []
  const studentAnswers = submission?.scheduledTest?.answers || []

  if (!submission || !submission.scheduledTest) {
    return (
      <div className="px-4 py-6 sm:px-0">
        <p className="text-red-600">Invalid results data</p>
        <button
          onClick={() => router.push('/student')}
          className="mt-4 px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
        >
          Back to My Tests
        </button>
      </div>
    )
  }

  return (
    <div className="px-4 py-6 sm:px-0">
      <div className="mb-6">
        <button
          onClick={() => router.push('/student')}
          className="text-sm text-gray-500 hover:text-gray-700 mb-4"
        >
          ← Back to My Tests
        </button>
        <h1 className="text-2xl font-bold text-gray-900">Test Results</h1>
        <p className="text-sm text-gray-500 mt-1">
          {submission.scheduledTest.practiceBank.title}
        </p>
        <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <p className="text-sm text-gray-600">Score</p>
              <p className="text-2xl font-bold text-blue-600">
                {submission.score !== null ? `${submission.score.toFixed(1)}%` : 'N/A'}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Submitted</p>
              <p className="text-sm font-medium text-gray-900">
                {new Date(submission.submittedAt).toLocaleString()}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Reviewed</p>
              <p className="text-sm font-medium text-gray-900">
                {submission.reviewedAt ? new Date(submission.reviewedAt).toLocaleString() : 'Pending'}
              </p>
            </div>
          </div>
          {submission.feedback && (
            <div className="mt-4 pt-4 border-t border-blue-200">
              <p className="text-sm font-medium text-gray-700 mb-1">Teacher Feedback:</p>
              <p className="text-sm text-gray-600">{submission.feedback}</p>
            </div>
          )}
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-xl font-semibold text-gray-900">Questions and Answers</h2>
        
        {correctAnswers.map((correctAnswer: any, index: number) => {
          const studentAnswer = studentAnswers.find((a: any) => a.questionId === String(index))
          const isCorrect = studentAnswer?.isCorrect

          return (
            <div key={index} className="bg-white shadow rounded-lg p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Question {index + 1}
                {isCorrect !== null && (
                  <span className={`ml-3 text-sm font-normal ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                    {isCorrect ? '✓ Correct' : '✗ Incorrect'}
                  </span>
                )}
              </h3>
              
              <div className="mb-4">
                <p className="text-gray-700 font-medium mb-2">Question:</p>
                <p className="text-gray-600">{correctAnswer.question || 'Question not available'}</p>
                {correctAnswer.schema && (
                  <div className="mt-2 bg-gray-50 border border-gray-200 rounded p-3">
                    <p className="text-sm font-mono text-gray-800">{correctAnswer.schema}</p>
                  </div>
                )}
              </div>

              <div className="mb-4">
                <p className="text-gray-700 font-medium mb-2">Your Answer:</p>
                <div className={`border rounded p-3 ${isCorrect === true ? 'bg-green-50 border-green-200' : isCorrect === false ? 'bg-red-50 border-red-200' : 'bg-gray-50 border-gray-200'}`}>
                  <pre className="text-sm font-mono whitespace-pre-wrap">{studentAnswer?.answerText || 'No answer provided'}</pre>
                </div>
              </div>

              <div className="mb-4">
                <p className="text-gray-700 font-medium mb-2">Correct Answer:</p>
                <div className="bg-blue-50 border border-blue-200 rounded p-3">
                  <pre className="text-sm font-mono whitespace-pre-wrap">{correctAnswer.answer || 'Answer not available'}</pre>
                </div>
              </div>

              {correctAnswer.explanation && (
                <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <p className="text-gray-700 font-medium mb-2">Explanation:</p>
                  <p className="text-gray-600 text-sm">{correctAnswer.explanation}</p>
                </div>
              )}

              {correctAnswer.concepts && (
                <div className="mt-3">
                  <p className="text-sm font-medium text-gray-700">Key Concepts:</p>
                  <p className="text-sm text-gray-600">{correctAnswer.concepts}</p>
                </div>
              )}
            </div>
          )
        })}
      </div>

      <div className="mt-8 flex justify-end">
        <button
          onClick={() => router.push('/student')}
          className="px-6 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
        >
          Back to My Tests
        </button>
      </div>
    </div>
  )
}

