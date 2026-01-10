import { AuthPanel } from '@/features/auth/panel/AuthPanel'
import { HeroPanel } from '@/features/auth/hero/AuthHeroPanel'

export function AuthView() {
  return (
    <section className="flex flex-1 gap-5 px-5 py-8">
      <div className="flex flex-2/3">
        <HeroPanel />
      </div>
      <div className="flex flex-1/3">
        <AuthPanel />
      </div>
    </section>
  )
}
