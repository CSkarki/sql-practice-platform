'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Footer from '@/components/Footer'

export default function LoginPage() {
  const router = useRouter()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      })

      const data = await res.json()

      if (res.ok) {
        router.push(data.user.role === 'admin' ? '/admin' : '/student')
        router.refresh()
      } else {
        setError(data.error || 'Login failed')
      }
    } catch (error) {
      setError('An error occurred')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Intro Section */}
            <div className="hidden lg:block">
              <div className="mb-6">
                <Image
                  src="/ssbs-logo.png"
                  alt="SSBS Logo"
                  width={200}
                  height={67}
                  className="h-16 w-auto mb-6"
                />
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                SQL Practice Platform
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                Master SQL queries through hands-on practice with real-world business scenarios.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-700 font-medium">Real-world Business Scenarios</p>
                    <p className="text-gray-600 text-sm">Practice with Banking, Retail, ERP, Travel, and more</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-700 font-medium">Comprehensive SQL Topics</p>
                    <p className="text-gray-600 text-sm">From basics to advanced: JOINs, Subqueries, Window Functions, and more</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-700 font-medium">Instant Feedback</p>
                    <p className="text-gray-600 text-sm">Get detailed explanations and learn from your mistakes</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Login Form */}
            <div className="w-full max-w-md mx-auto lg:max-w-lg">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="lg:hidden mb-6 text-center">
                  <Image
                    src="/ssbs-logo.png"
                    alt="SSBS Logo"
                    width={150}
                    height={50}
                    className="h-12 w-auto mx-auto mb-4"
                  />
                </div>
                <div>
                  <h2 className="text-2xl font-extrabold text-gray-900 text-center">
                    Welcome! Please sign in to continue.
                  </h2>
                 
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                  {error && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
                      {error}
                    </div>
                  )}
                  <div className="rounded-md shadow-sm -space-y-px">
                    <div>
                      <label htmlFor="username" className="sr-only">
                        Username
                      </label>
                      <input
                        id="username"
                        name="username"
                        type="text"
                        required
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                    </div>
                    <div>
                      <label htmlFor="password" className="sr-only">
                        Password
                      </label>
                      <input
                        id="password"
                        name="password"
                        type="password"
                        required
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      disabled={loading}
                      className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
                    >
                      {loading ? 'Signing in...' : 'Sign in'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}

