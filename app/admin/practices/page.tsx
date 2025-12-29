'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function PracticesPage() {
  const [practices, setPractices] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadPractices()
  }, [])

  async function loadPractices() {
    try {
      const res = await fetch('/api/admin/practices')
      const data = await res.json()
      setPractices(data.practices || [])
    } catch (error) {
      console.error('Error loading practices:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return <div className="px-4 py-6 sm:px-0">Loading...</div>
  }

  return (
    <div className="px-4 py-6 sm:px-0">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Practice Sets</h1>
        <Link
          href="/admin/practices/new"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
        >
          Create New
        </Link>
      </div>

      {practices.length === 0 ? (
        <div className="bg-white shadow rounded-lg p-8 text-center">
          <p className="text-gray-500">No practice sets created yet.</p>
          <Link
            href="/admin/practices/new"
            className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Create Your First Practice Set
          </Link>
        </div>
      ) : (
        <div className="bg-white shadow overflow-hidden sm:rounded-md">
          <ul className="divide-y divide-gray-200">
            {practices.map((practice) => {
              const focusAreas = JSON.parse(practice.focusAreas || '[]')
              const questions = JSON.parse(practice.questions || '[]')
              return (
                <li key={practice.id} className="px-4 py-4 sm:px-6">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="text-sm font-medium text-indigo-600">
                        {practice.title}
                      </div>
                      <div className="mt-1 text-sm text-gray-500">
                        <span className="font-medium">{practice.businessDomain}</span> • 
                        <span className="capitalize"> {practice.category}</span> • 
                        <span> {questions.length} questions</span>
                      </div>
                      {focusAreas.length > 0 && (
                        <div className="mt-1 text-xs text-gray-400">
                          Focus: {focusAreas.slice(0, 3).join(', ')}{focusAreas.length > 3 ? ` +${focusAreas.length - 3} more` : ''}
                        </div>
                      )}
                      <div className="mt-1 text-xs text-gray-400">
                        Created: {new Date(practice.createdAt).toLocaleDateString()}
                      </div>
                    </div>
                    <div className="flex space-x-2 ml-4">
                      <Link
                        href={`/admin/practices/${practice.id}/view`}
                        className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                      >
                        View/Print
                      </Link>
                      <Link
                        href={`/admin/schedule?practiceId=${practice.id}`}
                        className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                      >
                        Schedule
                      </Link>
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

