'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function StudentDashboard() {
  const router = useRouter()
  const [tests, setTests] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadTests()
  }, [])

  async function loadTests() {
    try {
      const res = await fetch('/api/student/tests')
      const data = await res.json()
      setTests(data.tests || [])
    } catch (error) {
      console.error('Error loading tests:', error)
    } finally {
      setLoading(false)
    }
  }

  function getStatusBadge(status: string) {
    const colors: Record<string, string> = {
      scheduled: 'bg-blue-100 text-blue-800',
      in_progress: 'bg-yellow-100 text-yellow-800',
      submitted: 'bg-green-100 text-green-800',
      reviewed: 'bg-purple-100 text-purple-800'
    }
    return colors[status] || 'bg-gray-100 text-gray-800'
  }

  if (loading) {
    return <div className="px-4 py-6 sm:px-0">Loading...</div>
  }

  return (
    <div className="px-4 py-6 sm:px-0">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">My Tests</h1>

      {tests.length === 0 ? (
        <div className="bg-white shadow rounded-lg p-8 text-center">
          <p className="text-gray-500">No tests assigned yet.</p>
        </div>
      ) : (
        <div className="bg-white shadow overflow-hidden sm:rounded-md">
          <ul className="divide-y divide-gray-200">
            {tests.map((test) => {
              const submission = test.submissions?.[0]
              const answersReleased = submission?.answersReleased || false
              const canViewResults = (test.status === 'reviewed' || test.status === 'submitted') && answersReleased
              
              return (
                <li key={test.id}>
                  <div className="px-4 py-4 sm:px-6 hover:bg-gray-50">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center flex-1">
                        <div className="flex-1">
                          <div className="text-sm font-medium text-indigo-600">
                            {test.practiceBank.title}
                          </div>
                          <div className="mt-2 sm:flex sm:justify-between">
                            <div className="sm:flex">
                              <p className="flex items-center text-sm text-gray-500">
                                Domain: {test.practiceBank.businessDomain}
                              </p>
                              <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                                Category: {test.practiceBank.category}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusBadge(test.status)}`}>
                          {test.status}
                        </span>
                        {canViewResults && (
                          <Link
                            href={`/student/results/${test.id}`}
                            className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
                            onClick={(e) => e.stopPropagation()}
                          >
                            View Results
                          </Link>
                        )}
                        {test.status === 'scheduled' || test.status === 'in_progress' ? (
                          <Link
                            href={`/student/test/${test.id}`}
                            className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                            onClick={(e) => e.stopPropagation()}
                          >
                            Take Test
                          </Link>
                        ) : null}
                      </div>
                    </div>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Scheduled: {new Date(test.scheduledDate).toLocaleDateString()}
                        {test.dueDate && ` • Due: ${new Date(test.dueDate).toLocaleDateString()}`}
                      </p>
                      {submission?.score != null && typeof submission.score === 'number' && (
                        <p className="text-sm font-medium text-gray-700 mt-1">
                          Score: {submission.score.toFixed(1)}%
                        </p>
                      )}
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </div>
  )
}

