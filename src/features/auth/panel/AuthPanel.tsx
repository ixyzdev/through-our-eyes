'use client'

import { useState, useEffect } from 'react'

import { account, ID } from '@/lib/appwrite/client'
// import { awUser } from '@/lib/appwrite/interfaces/appwrite.interface'

import { LoginForm } from './forms/LoginForm'
import { RegisterForm } from './forms/RegisterForm'

import { AuthFormData } from './interfaces/auth-form.types'

import { SliderToggleElevated } from '../components/slider-toggle/variants/SliderToggleElevated'

import { Models } from 'appwrite'

import { useRouter } from 'next/navigation'

import { useAuth } from '@/providers/AuthProvider'

import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert'

import { InlineNotification } from '../components/InlineNotification'

type AuthMode = 'login' | 'signup'

type AuthError = {
  title: string
  message: string
}

export function AuthPanel() {
  const [authMode, setAuthMode] = useState<AuthMode>('login')

  const [authError, setAuthError] = useState<AuthError | null>(null)

  const router = useRouter()

  const { refresh } = useAuth()

  // * Estados para los atributos del usuario
  const [formData, setFormData] = useState<AuthFormData>({
    email: '',
    name: '',
    password: '',
    remember: false
  })

  useEffect(() => {
    console.log(formData)

    // return () => {}
  }, [formData])

  const onModeChange = (authMode: AuthMode) => {
    setAuthMode(authMode)
  }

  const [user, setUser] = useState<Models.User | null>(null)

  async function handleLogin(formData: AuthFormData) {
    try {
      setAuthError(null)

      await account.createEmailPasswordSession({
        email: formData.email,
        password: formData.password
      })

      await refresh()
      router.replace('/')
    } catch (error: any) {
      setAuthError({
        title: 'Error al iniciar sesión',
        message:
          error?.message ??
          'Las credenciales no son válidas o ocurrió un problema inesperado.'
      })
    }
  }

  async function handleRegister(formData: AuthFormData) {
    try {
      setAuthError(null)

      await account.create({
        userId: ID.unique(),
        email: formData.email,
        password: formData.password,
        name: formData.name
      })

      await account.createEmailPasswordSession({
        email: formData.email,
        password: formData.password
      })

      await refresh()
      router.replace('/')
    } catch (error: any) {
      setAuthError({
        title: 'Error al registrarse',
        message:
          error?.message ??
          'No fue posible crear la cuenta. Verifica los datos ingresados.'
      })
    }
  }

  return (
    <section className="bg-background flex flex-1 flex-col overflow-hidden rounded-2xl px-3 py-5 shadow-xl">
      <SliderToggleElevated<'login' | 'signup'>
        value={authMode}
        onChange={setAuthMode}
        options={[
          { value: 'login', label: 'Iniciar sesión' },
          { value: 'signup', label: 'Registrarme' }
        ]}
      />

      {/* Formularios */}
      <section className="flex flex-1 px-3">
        {authMode === 'login' && (
          <LoginForm
            formData={formData}
            setFormData={setFormData}
            handleLogin={handleLogin}
          />
        )}

        {authMode === 'signup' && (
          <RegisterForm
            formData={formData}
            setFormData={setFormData}
            handleRegister={handleRegister}
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
