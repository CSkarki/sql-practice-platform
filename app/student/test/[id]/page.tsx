'use client'

import { useEffect, useState } from 'react'
import { useRouter, useParams } from 'next/navigation'
import Link from 'next/link'

type AnswerMode = 'text' | 'sql'

export default function TakeTestPage() {
  const router = useRouter()
  const params = useParams()
  const testId = params.id as string
  const [test, setTest] = useState<any>(null)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [answerModes, setAnswerModes] = useState<Record<number, AnswerMode>>({})
  const [sqlQueries, setSqlQueries] = useState<Record<number, string>>({})
  const [queryResults, setQueryResults] = useState<Record<number, any>>({})
  const [runningQueries, setRunningQueries] = useState<Record<number, boolean>>({})
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    loadTest()
  }, [testId])

  async function loadTest() {
    try {
      const res = await fetch(`/api/student/test/${testId}`)
      const data = await res.json()
      setTest(data.test)

      // Load existing answers
      const existingAnswers: Record<number, string> = {}
      const defaultModes: Record<number, AnswerMode> = {}
      if (data.test.answers) {
        data.test.answers.forEach((ans: any) => {
          const qId = parseInt(ans.questionId)
          existingAnswers[qId] = ans.answerText
          defaultModes[qId] = 'text' // Default to text mode
        })
      }
      setAnswers(existingAnswers)
      setAnswerModes(defaultModes)
    } catch (error) {
      console.error('Error loading test:', error)
    } finally {
      setLoading(false)
    }
  }

  async function saveAnswer(questionId: number, answerText: string) {
    setSaving(true)
    try {
      await fetch('/api/student/answers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          scheduledTestId: testId,
          questionId,
          answerText
        })
      })
    } catch (error) {
      console.error('Error saving answer:', error)
    } finally {
      setSaving(false)
    }
  }

  function handleAnswerChange(questionId: number, value: string) {
    setAnswers(prev => ({ ...prev, [questionId]: value }))
    // Auto-save after a delay
    clearTimeout((window as any).saveTimeout)
    ;(window as any).saveTimeout = setTimeout(() => {
      saveAnswer(questionId, value)
    }, 1000)
  }

  function setAnswerMode(questionId: number, mode: AnswerMode) {
    setAnswerModes(prev => ({ ...prev, [questionId]: mode }))
    // If switching to text mode, copy SQL query to answer if it exists
    if (mode === 'text' && sqlQueries[questionId]) {
      handleAnswerChange(questionId, sqlQueries[questionId])
    }
    // If switching to SQL mode, copy text answer to SQL query if it exists
    if (mode === 'sql' && answers[questionId] && !sqlQueries[questionId]) {
      setSqlQueries(prev => ({ ...prev, [questionId]: answers[questionId] }))
    }
  }

  async function runQuery(questionId: number) {
    const query = sqlQueries[questionId]?.trim()
    if (!query) {
      return
    }

    setRunningQueries(prev => ({ ...prev, [questionId]: true }))
    setQueryResults(prev => ({ ...prev, [questionId]: null }))

    try {
      const res = await fetch('/api/student/run-query', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query })
      })

      const data = await res.json()

      if (data.success) {
        setQueryResults(prev => ({ ...prev, [questionId]: data }))
      } else {
        setQueryResults(prev => ({ 
          ...prev, 
          [questionId]: { error: data.error, details: data.details } 
        }))
      }
    } catch (error: any) {
      setQueryResults(prev => ({ 
        ...prev, 
        [questionId]: { error: error.message || 'Failed to execute query' } 
      }))
    } finally {
      setRunningQueries(prev => ({ ...prev, [questionId]: false }))
    }
  }

  function copyQueryToAnswer(questionId: number) {
    const query = sqlQueries[questionId]
    if (query) {
      handleAnswerChange(questionId, query)
      setAnswerMode(questionId, 'text')
    }
  }

  async function handleSubmit() {
    if (!confirm('Are you sure you want to submit? You cannot change your answers after submission.')) {
      return
    }

    setSubmitting(true)
    try {
      const res = await fetch('/api/student/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ scheduledTestId: testId })
      })

      if (res.ok) {
        router.push('/student')
      } else {
        const data = await res.json()
        alert(data.error || 'Failed to submit test')
      }
    } catch (error) {
      console.error('Error submitting test:', error)
      alert('An error occurred')
    } finally {
      setSubmitting(false)
    }
  }

  if (loading) {
    return <div className="px-4 py-6 sm:px-0">Loading...</div>
  }

  if (!test) {
    return <div className="px-4 py-6 sm:px-0">Test not found</div>
  }

  // Parse questions if they're stored as JSON string
  const questionsRaw = test.practiceBank.questions || []
  const questions = typeof questionsRaw === 'string' ? JSON.parse(questionsRaw) : questionsRaw
  const isSubmitted = test.status === 'submitted' || test.status === 'reviewed'

  return (
    <div className="px-4 py-6 sm:px-0">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">{test.practiceBank.title}</h1>
        <p className="text-sm text-gray-500 mt-1">
          {test.practiceBank.businessDomain} • {test.practiceBank.category}
        </p>
      </div>

      {isSubmitted ? (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
          <p className="text-yellow-800">This test has been submitted. You cannot make changes.</p>
          {test.submissions?.[0]?.answersReleased ? (
            <Link
              href={`/student/results/${testId}`}
              className="mt-3 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
            >
              View Results & Answers
            </Link>
          ) : (
            <p className="mt-2 text-sm text-yellow-700">Results will be available once your teacher releases them.</p>
          )}
        </div>
      ) : null}

      <div className="space-y-6">
        {questions.map((q: any, index: number) => (
          <div key={index} className="bg-white shadow rounded-lg p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-3">
              Question {index + 1}
            </h3>
            <p className="text-gray-700 mb-4">{q.question}</p>
            {q.schema && (
              <div className="mt-3 mb-4 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
                <p className="text-sm font-semibold text-gray-700 mb-2">Database Schema:</p>
                <pre className="text-sm text-gray-700 whitespace-pre-wrap font-mono bg-white p-3 rounded border border-blue-200">{q.schema}</pre>
              </div>
            )}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-sm font-medium text-gray-700">
                  Your Answer:
                </label>
                <div className="flex space-x-2">
                  <button
                    type="button"
                    onClick={() => setAnswerMode(index, 'text')}
                    disabled={isSubmitted}
                    className={`px-3 py-1 text-xs rounded ${
                      answerModes[index] !== 'sql'
                        ? 'bg-indigo-600 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    } disabled:opacity-50`}
                  >
                    Text Answer
                  </button>
                  <button
                    type="button"
                    onClick={() => setAnswerMode(index, 'sql')}
                    disabled={isSubmitted}
                    className={`px-3 py-1 text-xs rounded ${
                      answerModes[index] === 'sql'
                        ? 'bg-indigo-600 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    } disabled:opacity-50`}
                  >
                    SQL Runner
                  </button>
                </div>
              </div>

              {answerModes[index] === 'sql' ? (
                <div className="space-y-3">
                  <div>
                    <textarea
                      rows={6}
                      className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 font-mono text-sm"
                      value={sqlQueries[index] || ''}
                      onChange={(e) => setSqlQueries(prev => ({ ...prev, [index]: e.target.value }))}
                      disabled={isSubmitted}
                      placeholder="Write your SQL query here..."
                    />
                  </div>
                  <div className="flex space-x-2">
                    <button
                      type="button"
                      onClick={() => runQuery(index)}
                      disabled={isSubmitted || runningQueries[index] || !sqlQueries[index]?.trim()}
                      className="px-4 py-2 bg-green-600 text-white text-sm rounded hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {runningQueries[index] ? 'Running...' : '▶ Run Query'}
                    </button>
                    <button
                      type="button"
                      onClick={() => copyQueryToAnswer(index)}
                      disabled={isSubmitted || !sqlQueries[index]?.trim()}
                      className="px-4 py-2 bg-indigo-600 text-white text-sm rounded hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Copy to Answer
                    </button>
                  </div>

                  {/* Query Results */}
                  {queryResults[index] && (
                    <div className={`mt-3 rounded-lg border ${
                      queryResults[index].error 
                        ? 'bg-red-50 border-red-200' 
                        : 'bg-green-50 border-green-200'
                    }`}>
                      {queryResults[index].error ? (
                        <div className="p-3">
                          <p className="text-sm font-medium text-red-800 mb-1">Error:</p>
                          <p className="text-sm text-red-700 font-mono">{queryResults[index].error}</p>
                          {queryResults[index].details && (
                            <p className="text-xs text-red-600 mt-2 font-mono">{queryResults[index].details}</p>
                          )}
                        </div>
                      ) : (
                        <div className="p-3">
                          <div className="flex justify-between items-center mb-2">
                            <p className="text-sm font-medium text-green-800">
                              Query executed successfully
                              {queryResults[index].rowCount !== undefined && (
                                <span className="ml-2 text-xs text-green-600">
                                  ({queryResults[index].rowCount} row{queryResults[index].rowCount !== 1 ? 's' : ''})
                                </span>
                              )}
                            </p>
                            {queryResults[index].message && (
                              <p className="text-xs text-green-600">{queryResults[index].message}</p>
                            )}
                          </div>
                          {queryResults[index].columns && queryResults[index].rows && (
                            <div className="mt-2 overflow-x-auto">
                              <table className="min-w-full text-xs border border-green-200 bg-white">
                                <thead>
                                  <tr className="bg-green-100">
                                    {queryResults[index].columns.map((col: string, i: number) => (
                                      <th key={i} className="px-2 py-1 text-left border border-green-200 font-semibold text-gray-700">
                                        {col}
                                      </th>
                                    ))}
                                  </tr>
                                </thead>
                                <tbody>
                                  {queryResults[index].rows.map((row: any, i: number) => (
                                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                      {queryResults[index].columns.map((col: string, j: number) => (
                                        <td key={j} className="px-2 py-1 border border-green-200 text-gray-700">
                                          {row[col] !== null && row[col] !== undefined ? String(row[col]) : 'NULL'}
                                        </td>
                                      ))}
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ) : (
                <div>
                  <textarea
                    rows={6}
                    className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 font-mono text-sm"
                    value={answers[index] || ''}
                    onChange={(e) => handleAnswerChange(index, e.target.value)}
                    disabled={isSubmitted}
                    placeholder="Write your SQL query here..."
                  />
                  {saving && index === Object.keys(answers).length - 1 && (
                    <p className="mt-1 text-xs text-gray-500">Saving...</p>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {!isSubmitted && (
        <div className="mt-8 flex justify-end">
          <button
            onClick={handleSubmit}
            disabled={submitting}
            className="px-6 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50"
          >
            {submitting ? 'Submitting...' : 'Submit Test'}
          </button>
        </div>
      )}
    </div>
  )
}

