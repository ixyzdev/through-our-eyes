import * as React from 'react'

import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

import { AuthFormData } from '../interfaces/auth-form.types'
import { GoogleLoginButton } from '../components/oauth/GoogleLoginButton'
import { GithubLoginButton } from '../components/oauth/GithubLoginButton'
import { Separator } from '@/components/ui/separator'

interface LoginFormProps {
  formData: AuthFormData
  setFormData: React.Dispatch<React.SetStateAction<AuthFormData>>
  handleLogin: (formData: AuthFormData) => void
}

export function LoginForm(props: LoginFormProps) {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    props.handleLogin(props.formData)
  }

  return (
    <section className="flex h-full w-full flex-col justify-center gap-8">
      {/* Header */}
      <header className="space-y-2 text-center">
        <h1 className="font-serif text-4xl tracking-tight">
          Bienvenido de vuelta
        </h1>
      </header>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Email */}
        <div className="space-y-2">
          <Label htmlFor="email">Correo electrónico</Label>
          <Input
            id="email"
            type="email"
            autoComplete="email"
            required
            value={props.formData.email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              props.setFormData((prev) => ({ ...prev, email: e.target.value }))
            }
          />
        </div>

        {/* Password */}
        <div className="space-y-2">
          <Label htmlFor="password">Contraseña</Label>
          <Input
            id="password"
            type="password"
            autoComplete="current-password"
            required
            value={props.formData.password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              props.setFormData((prev) => ({
                ...prev,
                password: e.target.value
              }))
            }
          />
        </div>

        {/* Remember + Forgot */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Checkbox
              id="remember"
              checked={props.formData.remember}
              onCheckedChange={(checked) =>
                props.setFormData((prev) => ({
                  ...prev,
                  remember: checked === true
                }))
              }
            />
            <Label
              htmlFor="remember"
              className="text-muted-foreground text-sm select-none"
            >
              Recuérdame
            </Label>
          </div>

          <button
            type="button"
            className="text-muted-foreground hover:text-foreground text-sm"
          >
            ¿Olvidaste tu contraseña?
          </button>
        </div>

        {/* Submit */}
        <Button type="submit" className="w-full">
          Iniciar sesión
        </Button>
      </form>

      {/* Separator */}
      <div className="relative">
        <Separator />
        <span className="bg-background text-muted-foreground absolute inset-x-0 -top-2 mx-auto w-fit px-2 text-xs">
          o continúa con
        </span>
      </div>

      {/* OAuth */}
      <div className="space-y-2">
        <GoogleLoginButton onClick={() => {}} />
        <GithubLoginButton onClick={() => {}} />
      </div>
    </section>
  )
}
