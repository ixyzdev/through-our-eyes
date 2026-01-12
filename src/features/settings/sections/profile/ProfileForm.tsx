'use client'

import { useAuth } from '@/providers/AuthProvider'

import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Skeleton } from '@/components/ui/skeleton'

export function ProfileForm() {
  const { user, loading } = useAuth()

  if (loading) {
    return (
      <Card>
        <CardContent className="grid gap-4 md:grid-cols-2">
          <ProfileSkeleton />
        </CardContent>
      </Card>
    )
  }

  if (!user) return null

  return (
    <Card>
      <CardContent className="grid gap-4 md:grid-cols-2">
        {/* Identidad */}
        <Field label="Nombre completo" value={user.name} />
        <Field label="Correo principal" value={user.email} />
        <Field label="Teléfono" value={user.phone || '—'} />

        {/* Preferencias (ejemplo visual) */}
        {/* <Field label="Idioma" value={String(user.prefs?.language ?? '—')} /> */}

        <Field label="Tema" value={String(user.prefs?.theme ?? '—')} />
      </CardContent>
    </Card>
  )
}

/* ---------- Field (solo lectura) ---------- */

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div className="space-y-2">
      <Label>{label}</Label>
      <Input value={value} disabled className="bg-muted/40" />
    </div>
  )
}

/* ---------- Skeleton ---------- */

function ProfileSkeleton() {
  return (
    <>
      <Skeleton className="h-14 w-full rounded-md" />
      <Skeleton className="h-14 w-full rounded-md" />
      <Skeleton className="h-14 w-full rounded-md" />
      <Skeleton className="h-14 w-full rounded-md" />
    </>
  )
}
