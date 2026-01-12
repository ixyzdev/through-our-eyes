import { UserCircle2 } from 'lucide-react'
import { SectionHeading } from '../../components/SectionHeading'
import { ProfileForm } from './ProfileForm'

export function ProfileSection() {
  return (
    <section id="perfil" className="space-y-4">
      <SectionHeading
        title="Perfil y cuenta"
        description="Mantén tu identidad sincronizada en todos tus dispositivos."
        icon={UserCircle2}
      />
      <ProfileForm />
    </section>
  )
}
