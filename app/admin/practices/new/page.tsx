'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

const BUSINESS_DOMAINS = ['Banking', 'Retail', 'ERP', 'Travel', 'Telecom', 'Healthcare', 'Education']
const CATEGORIES = ['simple', 'medium', 'intermediate', 'advanced']
const FOCUS_AREAS = [
  // Basic to Intermediate
  'SELECT and WHERE Clauses',
  'Aggregate Functions (COUNT, SUM, AVG, MAX, MIN)',
  'GROUP BY and HAVING',
  'JOINs (INNER, LEFT, RIGHT, FULL OUTER)',
  'Self-Joins',
  'Subqueries (Scalar, Correlated, Nested)',
  'Date Functions and Filtering',
  'ORDER BY, LIMIT, OFFSET',
  'DISTINCT and NULL Handling',
  'BETWEEN, IN, LIKE Operators',
  'CASE Statements',
  'UNION and UNION ALL',
  
  // Advanced
  'Window Functions (ROW_NUMBER, RANK, DENSE_RANK)',
  'Window Functions (LAG, LEAD, FIRST_VALUE, LAST_VALUE)',
  'Window Functions (PARTITION BY, ORDER BY)',
  'Common Table Expressions (CTEs)',
  'Recursive CTEs',
  'PIVOT and UNPIVOT',
  'EXISTS and NOT EXISTS',
  'Derived Tables',
  'Stored Procedures Concepts',
  'Views and Materialized Views',
  'Indexes and Performance',
  'Transaction Management',
  'Data Type Conversions (CAST, CONVERT)',
  'String Functions',
  'Mathematical Functions',
  'Conditional Aggregation',
  'Multiple Table JOINs',
  'Complex WHERE Conditions',
  'Query Optimization',
  'Set Operations (INTERSECT, EXCEPT)'
]

export default function NewPracticePage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    businessDomain: 'Banking',
    category: 'intermediate',
    focusAreas: [] as string[],
    numQuestions: 25
  })
  const [questions, setQuestions] = useState<any[]>([])
  const [answers, setAnswers] = useState<any[]>([])

  function handleFocusAreaChange(area: string) {
    setFormData(prev => ({
      ...prev,
      focusAreas: prev.focusAreas.includes(area)
        ? prev.focusAreas.filter(a => a !== area)
        : [...prev.focusAreas, area]
    }))
  }

  async function generateQuestions() {
    if (!formData.title) {
      alert('Please enter a title first')
      return
    }
    if (formData.focusAreas.length === 0) {
      alert('Please select at least one focus area')
      return
    }

    setLoading(true)
    try {
      const res = await fetch('/api/admin/generate-questions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          businessDomain: formData.businessDomain,
          category: formData.category,
          focusAreas: formData.focusAreas,
          numQuestions: formData.numQuestions
        })
      })

      const data = await res.json()

      if (res.ok && data.questions) {
        // Set generated questions
        const generatedQuestions = data.questions.map((q: any) => ({
          question: q.question || '',
          schema: q.schema || ''
        }))
        const generatedAnswers = data.questions.map((q: any) => ({
          question: q.question || '',
          schema: q.schema || '',
          answer: q.answer || '',
          explanation: q.explanation || '',
          concepts: q.concepts || ''
        }))
        setQuestions(generatedQuestions)
        setAnswers(generatedAnswers)
        alert(`Successfully generated ${generatedQuestions.length} questions!`)
      } else {
        alert(data.error || 'Failed to generate questions. Please check your OpenAI API key in .env file.')
      }
    } catch (error) {
      console.error('Error generating questions:', error)
      alert('An error occurred while generating questions. Please check your OpenAI API key.')
    } finally {
      setLoading(false)
    }
  }

  function addQuestion() {
    const newQuestion = {
      question: '',
      schema: '',
      answer: '',
      explanation: '',
      concepts: ''
    }
    setQuestions([...questions, newQuestion])
    setAnswers([...answers, { ...newQuestion }])
  }

  function updateQuestion(index: number, field: string, value: string) {
    const updated = [...questions]
    updated[index] = { ...updated[index], [field]: value }
    setQuestions(updated)
  }

  function updateAnswer(index: number, field: string, value: string) {
    const updated = [...answers]
    updated[index] = { ...updated[index], [field]: value }
    setAnswers(updated)
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)

    try {
      const res = await fetch('/api/admin/practices', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          questions: questions.map(q => ({ question: q.question, schema: q.schema })),
          answers: answers
        })
      })

      if (res.ok) {
        router.push('/admin/practices')
      } else {
        const data = await res.json()
        alert(data.error || 'Failed to create practice')
      }
    } catch (error) {
      console.error('Error creating practice:', error)
      alert('An error occurred')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="px-4 py-6 sm:px-0">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Create New Practice Set</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-gray-700">Title</label>
              <input
                type="text"
                required
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Business Domain</label>
              <select
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                value={formData.businessDomain}
                onChange={(e) => setFormData({ ...formData, businessDomain: e.target.value })}
              >
                {BUSINESS_DOMAINS.map(domain => (
                  <option key={domain} value={domain}>{domain}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Category</label>
              <select
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              >
                {CATEGORIES.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Number of Questions</label>
              <input
                type="number"
                min="1"
                max="50"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                value={formData.numQuestions}
                onChange={(e) => setFormData({ ...formData, numQuestions: parseInt(e.target.value) })}
              />
            </div>
          </div>

          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Focus Areas</label>
            <div className="mb-3">
              <button
                type="button"
                onClick={() => {
                  const basicAreas = FOCUS_AREAS.slice(0, 11)
                  setFormData(prev => ({ ...prev, focusAreas: basicAreas }))
                }}
                className="text-xs px-2 py-1 mr-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-50"
              >
                Select Basic
              </button>
              <button
                type="button"
                onClick={() => {
                  const advancedAreas = FOCUS_AREAS.slice(11)
                  setFormData(prev => ({ ...prev, focusAreas: advancedAreas }))
                }}
                className="text-xs px-2 py-1 mr-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-50"
              >
                Select Advanced
              </button>
              <button
                type="button"
                onClick={() => setFormData(prev => ({ ...prev, focusAreas: [] }))}
                className="text-xs px-2 py-1 border border-gray-300 rounded text-gray-700 hover:bg-gray-50"
              >
                Clear All
              </button>
            </div>
            <div className="max-h-96 overflow-y-auto border border-gray-200 rounded-lg p-4">
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-700 mb-2">Basic to Intermediate Topics</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {FOCUS_AREAS.slice(0, 11).map(area => (
                    <label key={area} className="flex items-center">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        checked={formData.focusAreas.includes(area)}
                        onChange={() => handleFocusAreaChange(area)}
                      />
                      <span className="ml-2 text-sm text-gray-700">{area}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="border-t border-gray-200 pt-4 mt-4">
                <h4 className="text-sm font-semibold text-gray-700 mb-2">Advanced Topics</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {FOCUS_AREAS.slice(11).map(area => (
                    <label key={area} className="flex items-center">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        checked={formData.focusAreas.includes(area)}
                        onChange={() => handleFocusAreaChange(area)}
                      />
                      <span className="ml-2 text-sm text-gray-700">{area}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
            {formData.focusAreas.length > 0 && (
              <p className="mt-2 text-sm text-gray-600">
                {formData.focusAreas.length} focus area(s) selected
              </p>
            )}
          </div>
        </div>

        <div className="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-medium text-gray-900">Questions</h2>
            <div className="flex space-x-2">
              <button
                type="button"
                onClick={generateQuestions}
                disabled={loading || formData.focusAreas.length === 0}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-green-600 hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Generating...' : '🤖 Generate Questions (AI)'}
              </button>
              <button
                type="button"
                onClick={addQuestion}
                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Add Question Manually
              </button>
            </div>
          </div>
          
          {formData.focusAreas.length === 0 && (
            <div className="mb-4 p-3 bg-yellow-50 border border-yellow-200 rounded-md">
              <p className="text-sm text-yellow-800">
                ⚠️ Please select at least one focus area to generate questions automatically.
              </p>
            </div>
          )}

          {questions.map((q, index) => (
            <div key={index} className="mb-6 p-4 border border-gray-200 rounded-lg">
              <h3 className="font-medium mb-3">Question {index + 1}</h3>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Question Text</label>
                  <textarea
                    rows={3}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    value={q.question}
                    onChange={(e) => updateQuestion(index, 'question', e.target.value)}
                    placeholder="Enter the question..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Schema (optional)</label>
                  <textarea
                    rows={2}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 font-mono text-sm"
                    value={q.schema}
                    onChange={(e) => updateQuestion(index, 'schema', e.target.value)}
                    placeholder="Table: accounts (account_id, customer_id, balance)..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Answer (for teacher view)</label>
                  <textarea
                    rows={2}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 font-mono text-sm"
                    value={answers[index]?.answer || ''}
                    onChange={(e) => updateAnswer(index, 'answer', e.target.value)}
                    placeholder="SELECT * FROM accounts WHERE..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Explanation (for teacher view)</label>
                  <textarea
                    rows={3}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    value={answers[index]?.explanation || ''}
                    onChange={(e) => updateAnswer(index, 'explanation', e.target.value)}
                    placeholder="This query demonstrates..."
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-end space-x-3">
          <button
            type="button"
            onClick={() => router.back()}
            className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={loading || questions.length === 0}
            className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50"
          >
            {loading ? 'Creating...' : 'Create Practice Set'}
          </button>
        </div>
      </form>
    </div>
  )
}

