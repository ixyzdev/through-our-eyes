'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ArrowLeft } from 'lucide-react'

import { AuthForm } from '@/components/auth/auth-form'
import { HeroPanel } from '@/components/auth/hero-panel'
import { Card } from '@/components/ui/card'

type AuthMode = 'login' | 'signup'

interface AuthPageProps {
  defaultMode: AuthMode
}

export function AuthPage({ defaultMode }: AuthPageProps) {
  const [mode, setMode] = useState<AuthMode>(defaultMode)

  return (
    <div className="text-foreground relative min-h-[calc(100vh-80px)] overflow-hidden bg-gradient-to-b from-amber-50 via-white to-blue-50 antialiased dark:from-zinc-950 dark:via-zinc-900 dark:to-black">
      <div className="from-primary/15 pointer-events-none absolute inset-x-0 top-0 h-72 bg-gradient-to-b via-transparent to-transparent blur-3xl" />
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 lg:flex-row lg:items-start lg:px-8">
        <div className="flex flex-1 flex-col gap-4">
          <Link
            href="/"
            className="text-muted-foreground hover:text-foreground inline-flex w-fit items-center gap-2 text-sm font-semibold transition"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver al inicio
          </Link>
          <HeroPanel />
        </div>
        <div className="w-full max-w-xl space-y-3">
          <AuthForm mode={mode} onToggleMode={setMode} />
          <Card className="border-border/70 bg-card/70 text-muted-foreground border p-4 text-sm">
            Al continuar aceptas nuestras{' '}
            <Link
              href="#"
              className="text-primary font-semibold hover:underline"
            >
              Condiciones de servicio
            </Link>{' '}
            y{' '}
            <Link
              href="#"
              className="text-primary font-semibold hover:underline"
            >
              Política de privacidad
            </Link>
            . Puedes cambiar entre iniciar sesión y crear cuenta sin perder los
            datos ingresados.
          </Card>
        </div>
      </div>
    </div>
  )
}
