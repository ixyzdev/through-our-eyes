import { ProfileSection } from '../sections/profile/ProfileSection'
import { SecuritySection } from '../sections/security/SecuritySection'

export function SettingsView() {
  return (
    <div className="text-foreground min-h-screen bg-linear-to-br from-slate-50 via-white to-emerald-50">
      <div className="flex flex-col gap-8 px-6 py-3.5 lg:px-8">
        <div className="flex flex-1 flex-col space-y-8">
          <ProfileSection />
          <SecuritySection />
        </div>
      </div>
    </div>
  )
}
