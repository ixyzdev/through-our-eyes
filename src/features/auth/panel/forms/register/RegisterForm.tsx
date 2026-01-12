'use client'

import { Separator } from '@/components/ui/separator'
import { EmailField } from '../../components/fields/EmailField'
import { UsernameField } from '../../components/fields/UsernameField'
import { PasswordField } from '../../components/fields/PasswordField'
import { ConfirmPasswordField } from '../../components/fields/ConfirmPasswordField'
import { RememberMeField } from '../../components/fields/RememberMeField'
import { SubmitButton } from '../../components/actions/SubmitButton'
import { GoogleLoginButton } from '../../components/oauth/GoogleLoginButton'
import { GithubLoginButton } from '../../components/oauth/GithubLoginButton'
import { AuthFormData } from '../../interfaces/auth-form.types'

interface Props {
  formData: AuthFormData
  confirmPassword: string
  onChange: {
    email(v: string): void
    name(v: string): void
    password(v: string): void
    confirmPassword(v: string): void
    remember(v: boolean): void
  }
  onSubmit(): void
}

export function RegisterForm({
  formData,
  confirmPassword,
  onChange,
  onSubmit
}: Props) {
  return (
    <section className="flex h-full w-full flex-col justify-center gap-8">
      <header className="text-center">
        <h1 className="font-serif text-4xl tracking-tight">Crear cuenta</h1>
      </header>

      <form
        onSubmit={(e) => {
          e.preventDefault()
          onSubmit()
        }}
        className="space-y-6"
      >
        <div className="space-y-4">
          <EmailField value={formData.email} onChange={onChange.email} />
          <UsernameField value={formData.name} onChange={onChange.name} />
          <PasswordField
            value={formData.password}
            onChange={onChange.password}
          />
          <ConfirmPasswordField
            value={confirmPassword}
            onChange={onChange.confirmPassword}
          />
        </div>

        <SubmitButton label="Crear cuenta" />

        <RememberMeField
          checked={formData.remember}
          onChange={onChange.remember}
        />
      </form>

      <div className="relative">
        <Separator />
        <span className="bg-background text-muted-foreground absolute inset-x-0 -top-2 mx-auto w-fit px-2 text-xs">
          o continúa con
        </span>
      </div>

      <div className="space-y-2">
        <GoogleLoginButton />
        <GithubLoginButton />
      </div>
    </section>
  )
}
