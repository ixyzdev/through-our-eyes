import React from 'react'

import { Checkbox } from '@/components/ui/checkbox'
import { BaseInput } from '../components/BaseInput'
import { PasswordInput } from '../components/PasswordInput'
import { AuthFormData } from '../interfaces/auth-form.types'
import { GoogleLoginButton } from '../components/GoogleLoginButton'
import { GithubLoginButton } from '../components/GithubLoginButton'

interface LoginFormProps {
  formData: AuthFormData
  setFormData: React.Dispatch<React.SetStateAction<AuthFormData>>
  handleLogin: (formData: AuthFormData) => void
}

export function LoginForm({
  formData,
  setFormData,
  handleLogin
}: LoginFormProps) {
  function handleSubmit(event: React.FormEvent) {
    event.preventDefault()
    handleLogin(formData)
  }

  return (
    <div className="mx-auto w-full max-w-sm space-y-12">
      {/* Header */}
      <header className="space-y-4 text-center">
        <h1 className="font-serif text-4xl tracking-tight">
          Bienvenido de vuelta
        </h1>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Ingresa tu correo y contraseña para acceder a tu cuenta
        </p>
      </header>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Inputs */}
        <div className="space-y-6">
          <BaseInput
            id="email"
            label="Correo electrónico"
            type="email"
            autoComplete="email"
            required
            value={formData.email}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, email: e.target.value }))
            }
          />

          <PasswordInput
            id="password"
            label="Contraseña"
            autoComplete="current-password"
            required
            value={formData.password}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, password: e.target.value }))
            }
          />
        </div>

        {/* Remember + Forgot */}
        <div className="flex items-center justify-between">
          <label
            htmlFor="remember"
            className="text-muted-foreground flex items-center gap-2 text-sm select-none"
          >
            <Checkbox
              id="remember"
              checked={formData.remember}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  remember: e.target.checked
                }))
              }
            />
            Recuérdame
          </label>

          <button
            type="button"
            className="text-muted-foreground hover:text-foreground text-sm transition-colors"
          >
            ¿Olvidaste tu contraseña?
          </button>
        </div>

        {/* CTA */}
        <button
          type="submit"
          className="bg-foreground text-background w-full rounded-lg py-3 text-sm font-medium shadow-[0_6px_16px_-8px_rgb(0_0_0/0.45)] transition-shadow duration-150 hover:shadow-[0_10px_24px_-10px_rgb(0_0_0/0.55)]"
        >
          Iniciar sesión
        </button>
      </form>
      <GoogleLoginButton
        onClick={() => {
          /* google auth */
        }}
      />
      <GithubLoginButton
        onClick={() => {
          /* github auth */
        }}
      />
    </div>
  )
}
