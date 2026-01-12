'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/providers/AuthProvider'
import type { AuthMode, AuthError } from '../interfaces/auth-panel.types'
import { useAuthActions } from './useAuthActions'

export function useAuthPanel() {
  const [authMode, setAuthMode] = useState<AuthMode>('login')
  const [authError, setAuthError] = useState<AuthError | null>(null)

  const router = useRouter()
  const { refresh } = useAuth()

  const onSuccess = async () => {
    await refresh()
    router.replace('/')
  }

  const actions = useAuthActions(onSuccess)

  return {
    authMode,
    setAuthMode,
    authError,
    setAuthError,
    actions
  }
}
