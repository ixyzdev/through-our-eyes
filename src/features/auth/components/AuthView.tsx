'use client'

import { useState } from 'react'

import { AuthForm } from '@/features/auth/auth-form/components/AuthForm'
import { HeroPanel } from '@/features/auth/components/AuthHeroPanel'

type AuthMode = 'login' | 'signup'

interface AuthPageProps {
  defaultMode: AuthMode
}

export function AuthPage({ defaultMode }: AuthPageProps) {
  const [mode, setMode] = useState<AuthMode>(defaultMode)

  const onModeChange = (mode: AuthMode) => {
    setMode(mode)
  }

  return (
    <section className="text-foreground relative flex flex-1 overflow-hidden bg-linear-to-b from-amber-50 via-white to-blue-50 antialiased dark:from-zinc-950 dark:via-zinc-900 dark:to-black">
      <div className="flex flex-1 items-center justify-center">
        <div className="flex max-w-6xl gap-6">
          <HeroPanel />
          <AuthForm mode={mode} onModeChange={onModeChange} />
        </div>
      </div>
    </section>
  )
}
