'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function SubmissionsPage() {
  const [submissions, setSubmissions] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadSubmissions()
  }, [])

  async function loadSubmissions() {
    try {
      const res = await fetch('/api/admin/submissions')
      const data = await res.json()
      setSubmissions(data.submissions || [])
    } catch (error) {
      console.error('Error loading submissions:', error)
    } finally {
      setLoading(false)
    }
  }

  async function handleReview(submissionId: string, autoReview: boolean, releaseAnswers: boolean) {
    try {
      const res = await fetch('/api/admin/review', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          submissionId,
          autoReview,
          answersReleased: releaseAnswers
        })
      })

      if (res.ok) {
        loadSubmissions()
        alert('Review completed successfully')
      } else {
        const data = await res.json()
        alert(data.error || 'Failed to review')
      }
    } catch (error) {
      console.error('Error reviewing:', error)
      alert('An error occurred')
    }
  }

  if (loading) {
    return <div className="px-4 py-6 sm:px-0">Loading...</div>
  }

  return (
    <div className="px-4 py-6 sm:px-0">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Test Submissions</h1>

      {submissions.length === 0 ? (
        <div className="bg-white shadow rounded-lg p-8 text-center">
          <p className="text-gray-500">No submissions yet.</p>
        </div>
      ) : (
        <div className="bg-white shadow overflow-hidden sm:rounded-md">
          <ul className="divide-y divide-gray-200">
            {submissions.map((submission) => (
              <li key={submission.id} className="px-4 py-4 sm:px-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium text-indigo-600">
                      {submission.scheduledTest.practiceBank.title}
                    </div>
                    <div className="mt-1 text-sm text-gray-500">
                      Student: {submission.scheduledTest.student.name || submission.scheduledTest.student.username}
                    </div>
                    <div className="mt-1 text-sm text-gray-500">
                      Submitted: {new Date(submission.submittedAt).toLocaleString()}
                    </div>
                    {submission.score !== null && (
                      <div className="mt-1 text-sm font-medium">
                        Score: {submission.score.toFixed(1)}%
                      </div>
                    )}
                  </div>
                  <div className="flex space-x-2">
                    <Link
                      href={`/admin/submissions/${submission.id}`}
                      className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                    >
                      Review
                    </Link>
                    {!submission.reviewedAt && (
                      <>
                        <button
                          onClick={() => handleReview(submission.id, true, false)}
                          className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                        >
                          Auto Review
                        </button>
                        <button
                          onClick={() => handleReview(submission.id, true, true)}
                          className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
                        >
                          Auto Review & Release
                        </button>
                      </>
                    )}
                    {submission.reviewedAt && !submission.answersReleased && (
                      <button
                        onClick={() => handleReview(submission.id, false, true)}
                        className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
                      >
                        Release Answers
                      </button>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

