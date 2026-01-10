'use client'

import * as React from 'react'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

import { AuthFormData } from '../interfaces/auth-form.types'
import { GoogleLoginButton } from '../components/GoogleLoginButton'
import { GithubLoginButton } from '../components/GithubLoginButton'
import { Checkbox } from '@/components/ui/checkbox'

interface RegisterFormProps {
  formData: AuthFormData
  setFormData: React.Dispatch<React.SetStateAction<AuthFormData>>
  handleRegister: (formData: AuthFormData, confirmPassword: string) => void
}

export function RegisterForm(props: RegisterFormProps) {
  const [confirmPassword, setConfirmPassword] = React.useState('')

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    props.handleRegister(props.formData, confirmPassword)
  }

  return (
    <section className="flex h-full w-full flex-col justify-center gap-8">
      {/* Header */}
      <header className="space-y-2 text-center">
        <h1 className="font-serif text-4xl tracking-tight">Crear cuenta</h1>
      </header>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
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
                props.setFormData((prev) => ({
                  ...prev,
                  email: e.target.value
                }))
              }
            />
          </div>

          {/* Username */}
          <div className="space-y-2">
            <Label htmlFor="username">Nombre de usuario</Label>
            <Input
              id="username"
              type="text"
              autoComplete="username"
              required
              value={props.formData.name}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                props.setFormData((prev) => ({
                  ...prev,
                  name: e.target.value
                }))
              }
            />
          </div>

          {/* Password */}
          <div className="space-y-2">
            <Label htmlFor="password">Contraseña</Label>
            <Input
              id="password"
              type="password"
              autoComplete="new-password"
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

          {/* Confirm Password */}
          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Confirmar contraseña</Label>
            <Input
              id="confirmPassword"
              type="password"
              autoComplete="new-password"
              required
              value={confirmPassword}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setConfirmPassword(e.target.value)
              }
            />
          </div>
        </div>

        {/* Submit */}
        <Button type="submit" className="w-full">
          Crear cuenta
        </Button>

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
        </div>

        {/* Legal */}
        {/* <p className="text-muted-foreground text-xs leading-relaxed">
          Al crear una cuenta aceptas nuestros{' '}
          <span className="text-foreground underline underline-offset-2">
            Términos y Condiciones
          </span>{' '}
          y{' '}
          <span className="text-foreground underline underline-offset-2">
            Política de Privacidad
          </span>
          .
        </p> */}
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
        <GoogleLoginButton
          onClick={function (): void {
            throw new Error('Function not implemented.')
          }}
        />
        <GithubLoginButton
          onClick={function (): void {
            throw new Error('Function not implemented.')
          }}
        />
      </div>
    </section>
  )
}
