'use client'

import { useEffect, useState } from 'react'
import { useRouter, useParams } from 'next/navigation'
import Link from 'next/link'

export default function TakeTestPage() {
  const router = useRouter()
  const params = useParams()
  const testId = params.id as string
  const [test, setTest] = useState<any>(null)
  const [answers, setAnswers] = useState<Record<number, string>>({})
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
      if (data.test.answers) {
        data.test.answers.forEach((ans: any) => {
          existingAnswers[parseInt(ans.questionId)] = ans.answerText
        })
      }
      setAnswers(existingAnswers)
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
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Answer:
              </label>
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

