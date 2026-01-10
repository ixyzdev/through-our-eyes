'use client'

import { useEffect, useState, createContext, useContext } from 'react'
import { account } from '@/lib/appwrite/client'
import { Models } from 'appwrite'

type AuthContextType = {
  user: Models.User | null
  loading: boolean
  refresh: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | null>(null)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<Models.User | null>(null)
  const [loading, setLoading] = useState(true)

  const refresh = async () => {
    try {
      const user = await account.get()
      setUser(user)
    } catch {
      setUser(null)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    refresh()
  }, [])

  return (
    <AuthContext.Provider value={{ user, loading, refresh }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth outside AuthProvider')
  return ctx
}
