'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/providers/AuthProvider'

export default function AuthOnlyLayout({
  children
}: {
  children: React.ReactNode
}) {
  const { user, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && user) {
      router.replace('/home')
    }
  }, [loading, user, router])

  if (loading) return null
  if (user) return null

  return <>{children}</>
}
