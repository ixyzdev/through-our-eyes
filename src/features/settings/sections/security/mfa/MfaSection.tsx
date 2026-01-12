import { Checkbox } from '@/components/ui/checkbox'

export function MfaSection() {
  return (
    <section className="flex items-center justify-between gap-6">
      <div className="space-y-1">
        <p className="text-sm font-semibold">
          Autenticación de dos factores (2FA)
        </p>
        <p className="text-muted-foreground text-xs">
          Protege tu cuenta con una capa adicional de seguridad.
        </p>
      </div>

      <Checkbox disabled />
    </section>
  )
}
