'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    practices: 0,
    submissions: 0,
    students: 0
  })

  useEffect(() => {
    loadStats()
  }, [])

  async function loadStats() {
    try {
      const [practicesRes, submissionsRes, studentsRes] = await Promise.all([
        fetch('/api/admin/practices'),
        fetch('/api/admin/submissions'),
        fetch('/api/admin/students')
      ])

      const practices = await practicesRes.json()
      const submissions = await submissionsRes.json()
      const students = await studentsRes.json()

      setStats({
        practices: practices.practices?.length || 0,
        submissions: submissions.submissions?.length || 0,
        students: students.students?.length || 0
      })
    } catch (error) {
      console.error('Error loading stats:', error)
    }
  }

  return (
    <div className="px-4 py-6 sm:px-0">
      <div className="border-4 border-dashed border-gray-200 rounded-lg p-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Admin Dashboard</h1>
        
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 mb-8">
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="text-2xl font-bold text-gray-900">{stats.practices}</div>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Practice Sets</dt>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="text-2xl font-bold text-gray-900">{stats.submissions}</div>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Submissions</dt>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="text-2xl font-bold text-gray-900">{stats.students}</div>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Students</dt>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <Link
            href="/admin/practices/new"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Create New Practice Set
          </Link>
        </div>
      </div>
    </div>
  )
}

