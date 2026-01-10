'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/providers/AuthProvider'
import { GeneralHeader } from '@/components/layout/header/GeneralHeader'

export default function PublicLayout({
  children
}: {
  children: React.ReactNode
}) {
  const { user, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && !user) {
      router.replace('/auth')
    }
  }, [loading, user, router])

  if (loading) return null
  if (!user) return null

  return (
    <>
      <GeneralHeader />
      {children}
    </>
  )
}

// app - background - gradient
