'use client'

import React, { useRef, useState } from 'react'

import { BaseInput } from '../components/BaseInput'
import { PasswordInput } from '../components/PasswordInput'
import { AuthFormData } from '../interfaces/auth-form.types'

interface RegisterFormProps {
  formData: AuthFormData
  setFormData: React.Dispatch<React.SetStateAction<AuthFormData>>
  handleRegister: (formData: AuthFormData, confirmPassword: string) => void
}

export function RegisterForm(props: RegisterFormProps) {
  const formRef = useRef<HTMLFormElement>(null)
  const [confirmPassword, setConfirmPassword] = useState('')

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault()
    props.handleRegister(props.formData, confirmPassword)
  }

  function handleFormKeyDown(event: React.KeyboardEvent<HTMLFormElement>) {
    if (event.key !== 'Enter') return

    // evita que algún componente “coma” el Enter
    event.preventDefault()
    formRef.current?.requestSubmit()
  }

  return (
    <div>
      <div className="space-y-4 pb-2">
        <div className="space-y-2">
          <div className="text-3xl">Crear cuenta</div>
          <div className="text-base leading-relaxed">
            Comienza tu experiencia
          </div>
        </div>
      </div>

      <div>
        <form
          ref={formRef}
          className="space-y-6"
          onSubmit={handleSubmit}
          onKeyDown={handleFormKeyDown}
        >
          <div className="space-y-4">
            <BaseInput
              id="email"
              label="Correo electrónico"
              type="email"
              autoComplete="email"
              required
              value={props.formData.email}
              onChange={(e) =>
                props.setFormData((prev) => ({
                  ...prev,
                  email: e.target.value
                }))
              }
            />

            <BaseInput
              id="username"
              label="Nombre de usuario"
              type="text"
              autoComplete="username"
              required
              value={props.formData.name}
              onChange={(e) =>
                props.setFormData((prev) => ({
                  ...prev,
                  username: e.target.value
                }))
              }
            />

            <PasswordInput
              id="password"
              label="Contraseña"
              autoComplete="new-password"
              required
              value={props.formData.password}
              onChange={(e) =>
                props.setFormData((prev) => ({
                  ...prev,
                  password: e.target.value
                }))
              }
            />

            <PasswordInput
              id="confirmPassword"
              label="Confirmar contraseña"
              autoComplete="new-password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="w-full">
            Crear cuenta
          </button>
        </form>
      </div>
    </div>
  )
}
