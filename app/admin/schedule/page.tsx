'use client'

import { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

export default function SchedulePage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const practiceId = searchParams.get('practiceId')

  const [students, setStudents] = useState<any[]>([])
  const [practices, setPractices] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [submitting, setSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    practiceBankId: practiceId || '',
    studentId: '',
    scheduledDate: '',
    dueDate: ''
  })

  useEffect(() => {
    loadData()
  }, [])

  async function loadData() {
    try {
      const [studentsRes, practicesRes] = await Promise.all([
        fetch('/api/admin/students'),
        fetch('/api/admin/practices')
      ])

      const studentsData = await studentsRes.json()
      const practicesData = await practicesRes.json()

      setStudents(studentsData.students || [])
      setPractices(practicesData.practices || [])
    } catch (error) {
      console.error('Error loading data:', error)
    } finally {
      setLoading(false)
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitting(true)

    try {
      const res = await fetch('/api/admin/schedule', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (res.ok) {
        router.push('/admin/practices')
      } else {
        const data = await res.json()
        alert(data.error || 'Failed to schedule test')
      }
    } catch (error) {
      console.error('Error scheduling test:', error)
      alert('An error occurred')
    } finally {
      setSubmitting(false)
    }
  }

  if (loading) {
    return <div className="px-4 py-6 sm:px-0">Loading...</div>
  }

  return (
    <div className="px-4 py-6 sm:px-0">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Schedule Test</h1>

      <form onSubmit={handleSubmit} className="bg-white shadow rounded-lg p-6 space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Practice Set</label>
          {practices.length === 0 ? (
            <div className="mt-2 p-4 bg-yellow-50 border border-yellow-200 rounded-md">
              <p className="text-sm text-yellow-800">
                No practice sets available. <a href="/admin/practices/new" className="underline">Create one first</a>.
              </p>
            </div>
          ) : (
            <select
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              value={formData.practiceBankId}
              onChange={(e) => setFormData({ ...formData, practiceBankId: e.target.value })}
            >
              <option value="">Select a practice set</option>
              {practices.map((practice) => {
                const focusAreas = JSON.parse(practice.focusAreas || '[]')
                const questions = JSON.parse(practice.questions || '[]')
                return (
                  <option key={practice.id} value={practice.id}>
                {practice.title} | {practice.businessDomain} | {practice.category} | {questions.length} questions | Focus: {focusAreas.slice(0, 2).join(', ')}
                  </option>
                )
              })}
            </select>
          )}
          {formData.practiceBankId && (
            <div className="mt-2 p-3 bg-gray-50 rounded-md">
              {(() => {
                const selected = practices.find(p => p.id === formData.practiceBankId)
                if (!selected) return null
                const focusAreas = JSON.parse(selected.focusAreas || '[]')
                const questions = JSON.parse(selected.questions || '[]')
                return (
                  <div className="text-sm text-gray-600">
                    <p><strong>Domain:</strong> {selected.businessDomain}</p>
                    <p><strong>Category:</strong> {selected.category}</p>
                    <p><strong>Questions:</strong> {questions.length}</p>
                    <p><strong>Focus Areas:</strong> {focusAreas.join(', ')}</p>
                  </div>
                )
              })()}
            </div>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Student</label>
          <select
            required
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            value={formData.studentId}
            onChange={(e) => setFormData({ ...formData, studentId: e.target.value })}
          >
            <option value="">Select a student</option>
            {students.map((student) => (
              <option key={student.id} value={student.id}>
                {student.name || student.username}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Scheduled Date</label>
          <input
            type="datetime-local"
            required
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            value={formData.scheduledDate}
            onChange={(e) => setFormData({ ...formData, scheduledDate: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Due Date (Optional)</label>
          <input
            type="datetime-local"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            value={formData.dueDate}
            onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
          />
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
            disabled={submitting}
            className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50"
          >
            {submitting ? 'Scheduling...' : 'Schedule Test'}
          </button>
        </div>
      </form>
    </div>
  )
}

