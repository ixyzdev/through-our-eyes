'use client'

import { Separator } from '@/components/ui/separator'
import { SessionsSection } from './sessions/SessionsSection'
import { MfaSection } from './mfa/MfaSection'
import { PasswordSection } from './password/PasswordSection'

export function SecuritySettings() {
  return (
    <section className="bg-card space-y-6 rounded-2xl border px-6 py-5 shadow-sm">
      <SessionsSection />
      <Separator />
      <MfaSection />
      <Separator />
      <PasswordSection />
    </section>
  )
}
