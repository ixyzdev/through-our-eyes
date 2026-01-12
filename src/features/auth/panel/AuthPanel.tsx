'use client'

import { useState } from 'react'

import { SliderToggle } from '@/components/slider-toggle/SliderToggle'
import { InlineNotification } from '@/components/inline-notification/InlineNotification'

import { LoginForm } from './forms/LoginForm'
import { RegisterForm } from './forms/RegisterForm'

import { useAuthPanel } from './hooks/useAuthPanel'
import { useAuthFormState } from './hooks/useAuthFormState'
import { AuthMode } from './interfaces/auth-panel.types'

const AUTH_MODES = ['login', 'signup'] as const

export function AuthPanel() {
  const { authError, setAuthError, actions } = useAuthPanel()

  const { formData, setFormData } = useAuthFormState()

  const [authMode, setAuthMode] = useState<AuthMode>('login')

  return (
    <section className="bg-background flex flex-1 flex-col overflow-hidden rounded-2xl px-3 py-5 shadow-xl">
      <SliderToggle<'login' | 'signup'>
        value={authMode}
        onChange={setAuthMode}
        options={[
          { value: 'login', label: 'Iniciar sesión' },
          { value: 'signup', label: 'Registrarme' }
        ]}
      />

      <section className="flex flex-1 px-3">
        {authMode === 'login' && (
          <LoginForm
            formData={formData}
            setFormData={setFormData}
            handleLogin={async (data) => {
              const error = await actions.login(data)
              setAuthError(error)
            }}
          />
        )}

        {authMode === 'signup' && (
          <RegisterForm
            formData={formData}
            setFormData={setFormData}
            handleRegister={async (data) => {
              const error = await actions.register(data)
              setAuthError(error)
            }}
          />
        )}
      </section>

      {authError && (
        <div className="animate-in fade-in slide-in-from-bottom-2 fixed right-6 bottom-6 z-50 w-1/2">
          <InlineNotification
            title={authError.title}
            description={authError.message}
            variant="danger"
            onClose={() => setAuthError(null)}
          />
        </div>
      )}
    </section>
  )
}
