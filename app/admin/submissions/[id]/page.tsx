'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'

export default function SubmissionDetailPage() {
  const params = useParams()
  const router = useRouter()
  const submissionId = params.id as string
  const [submission, setSubmission] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [reviewing, setReviewing] = useState(false)
  const [formData, setFormData] = useState({
    score: '',
    feedback: '',
    autoReview: false,
    releaseAnswers: false
  })

  useEffect(() => {
    loadSubmission()
  }, [submissionId])

  async function loadSubmission() {
    try {
      const res = await fetch(`/api/admin/submissions/${submissionId}`)
      if (res.ok) {
        const data = await res.json()
        setSubmission(data.submission)
        if (data.submission.score !== null) {
          setFormData(prev => ({
            ...prev,
            score: data.submission.score.toString(),
            feedback: data.submission.feedback || ''
          }))
        }
      } else {
        console.error('Failed to load submission')
      }
    } catch (error) {
      console.error('Error loading submission:', error)
    } finally {
      setLoading(false)
    }
  }

  async function handleReview() {
    setReviewing(true)
    try {
      const res = await fetch('/api/admin/review', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          submissionId,
          autoReview: formData.autoReview,
          answersReleased: formData.releaseAnswers,
          score: formData.score ? parseFloat(formData.score) : null,
          feedback: formData.feedback || null
        })
      })

      if (res.ok) {
        router.push('/admin/submissions')
      } else {
        const data = await res.json()
        alert(data.error || 'Failed to review')
      }
    } catch (error) {
      console.error('Error reviewing:', error)
      alert('An error occurred')
    } finally {
      setReviewing(false)
    }
  }

  if (loading) {
    return <div className="px-4 py-6 sm:px-0">Loading...</div>
  }

  if (!submission) {
    return (
      <div className="px-4 py-6 sm:px-0">
        <p className="text-red-600">Submission not found</p>
        <button
          onClick={() => router.back()}
          className="mt-4 px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
        >
          Go Back
        </button>
      </div>
    )
  }

  const practice = submission.scheduledTest.practiceBank
  const student = submission.scheduledTest.student
  const studentAnswers = submission.scheduledTest.answers || []
  const correctAnswers = JSON.parse(practice.answers || '[]')

  return (
    <div className="px-4 py-6 sm:px-0">
      <div className="mb-6">
        <button
          onClick={() => router.back()}
          className="text-sm text-gray-500 hover:text-gray-700 mb-4"
        >
          ← Back to Submissions
        </button>
        <h1 className="text-2xl font-bold text-gray-900">Review Submission</h1>
        <p className="text-sm text-gray-500 mt-1">
          Practice: {practice.title} • Student: {student.name || student.username}
        </p>
        <p className="text-sm text-gray-500">
          Submitted: {new Date(submission.submittedAt).toLocaleString()}
        </p>
        {submission.score !== null && (
          <p className="text-sm font-medium mt-2">
            Score: {submission.score.toFixed(1)}%
          </p>
        )}
      </div>

      <div className="space-y-6">
        {correctAnswers.map((correctAnswer: any, index: number) => {
          const studentAnswer = studentAnswers.find((a: any) => a.questionId === String(index))
          const isCorrect = studentAnswer?.isCorrect

          return (
            <div key={index} className="bg-white shadow rounded-lg p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Question {index + 1}
              </h3>
              
              <div className="mb-4">
                <p className="text-gray-700 font-medium mb-2">Question:</p>
                <p className="text-gray-600">{correctAnswer.question}</p>
                {correctAnswer.schema && (
                  <div className="mt-2 bg-gray-50 border border-gray-200 rounded p-3">
                    <p className="text-sm font-mono text-gray-800">{correctAnswer.schema}</p>
                  </div>
                )}
              </div>

              <div className="mb-4">
                <p className="text-gray-700 font-medium mb-2">Student Answer:</p>
                <div className={`border rounded p-3 ${isCorrect === true ? 'bg-green-50 border-green-200' : isCorrect === false ? 'bg-red-50 border-red-200' : 'bg-gray-50 border-gray-200'}`}>
                  <pre className="text-sm font-mono whitespace-pre-wrap">{studentAnswer?.answerText || 'No answer provided'}</pre>
                </div>
                {isCorrect !== null && (
                  <p className={`text-sm mt-2 ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                    {isCorrect ? '✓ Correct' : '✗ Incorrect'}
                  </p>
                )}
              </div>

              <div className="mb-4">
                <p className="text-gray-700 font-medium mb-2">Correct Answer:</p>
                <div className="bg-blue-50 border border-blue-200 rounded p-3">
                  <pre className="text-sm font-mono whitespace-pre-wrap">{correctAnswer.answer}</pre>
                </div>
              </div>

              {correctAnswer.explanation && (
                <div className="mt-4">
                  <p className="text-gray-700 font-medium mb-2">Explanation:</p>
                  <p className="text-gray-600 text-sm">{correctAnswer.explanation}</p>
                </div>
              )}
            </div>
          )
        })}
      </div>

      {!submission.reviewedAt && (
        <div className="mt-8 bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Review Options</h2>
          
          <div className="space-y-4">
            <div>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  checked={formData.autoReview}
                  onChange={(e) => setFormData({ ...formData, autoReview: e.target.checked })}
                />
                <span className="ml-2 text-sm text-gray-700">Auto-review (compare answers automatically)</span>
              </label>
            </div>

            <div>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  checked={formData.releaseAnswers}
                  onChange={(e) => setFormData({ ...formData, releaseAnswers: e.target.checked })}
                />
                <span className="ml-2 text-sm text-gray-700">Release answers to student</span>
              </label>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Score (optional, will be calculated if auto-review is enabled)</label>
              <input
                type="number"
                min="0"
                max="100"
                step="0.1"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                value={formData.score}
                onChange={(e) => setFormData({ ...formData, score: e.target.value })}
                placeholder="0-100"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Feedback (optional)</label>
              <textarea
                rows={4}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                value={formData.feedback}
                onChange={(e) => setFormData({ ...formData, feedback: e.target.value })}
                placeholder="Provide feedback to the student..."
              />
            </div>

            <div className="flex justify-end space-x-3">
              <button
                onClick={() => router.back()}
                className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={handleReview}
                disabled={reviewing}
                className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50"
              >
                {reviewing ? 'Reviewing...' : 'Submit Review'}
              </button>
            </div>
          </div>
        </div>
      )}

      {submission.reviewedAt && (
        <div className="mt-8 bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Review Details</h2>
          <p className="text-sm text-gray-600">
            Reviewed: {new Date(submission.reviewedAt).toLocaleString()}
          </p>
          {submission.score !== null && (
            <p className="text-sm text-gray-600 mt-2">
              Score: {submission.score.toFixed(1)}%
            </p>
          )}
          {submission.feedback && (
            <div className="mt-4">
              <p className="text-sm font-medium text-gray-700">Feedback:</p>
              <p className="text-sm text-gray-600 mt-1">{submission.feedback}</p>
            </div>
          )}
          {submission.answersReleased && (
            <p className="text-sm text-green-600 mt-2">✓ Answers have been released to student</p>
          )}
          {!submission.answersReleased && (
            <button
              onClick={() => {
                setFormData({ ...formData, releaseAnswers: true })
                handleReview()
              }}
              className="mt-4 px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700"
            >
              Release Answers to Student
            </button>
          )}
        </div>
      )}
    </div>
  )
}

