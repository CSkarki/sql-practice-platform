'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Footer from '@/components/Footer'

export default function Home() {
  const router = useRouter()
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    checkAuth()
  }, [])

  async function checkAuth() {
    try {
      const res = await fetch('/api/auth/me')
      const data = await res.json()
      if (data.user) {
        setUser(data.user)
        router.push(data.user.role === 'admin' ? '/admin' : '/student')
      } else {
        router.push('/login')
      }
    } catch (error) {
      router.push('/login')
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <div className="mb-8">
          <Image
            src="/ssbs-logo.png"
            alt="SSBS Logo"
            width={200}
            height={67}
            className="h-16 w-auto"
          />
        </div>
        <div className="text-xl text-gray-600">Loading...</div>
        <Footer />
      </div>
    )
  }

  return null
}
