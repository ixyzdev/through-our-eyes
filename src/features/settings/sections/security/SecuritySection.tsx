import { KeyRound } from 'lucide-react'
import { SectionHeading } from '../../components/SectionHeading'
import { SecuritySettings } from './SecuritySettings'

export function SecuritySection() {
  return (
    <section id="seguridad" className="space-y-4">
      <SectionHeading
        title="Seguridad y accesos"
        description="Protege tu cuenta y gestiona sesiones activas."
        icon={KeyRound}
      />
      <SecuritySettings />
    </section>
  )
}

// UI de perfil: name, email, phone, prefs

// UI de seguridad: password, mfa, targets
