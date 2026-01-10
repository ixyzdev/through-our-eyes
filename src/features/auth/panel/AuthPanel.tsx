'use client'

import { useState, useEffect } from 'react'

import { account, ID } from '@/lib/appwrite/client'
// import { awUser } from '@/lib/appwrite/interfaces/appwrite.interface'

import { LoginForm } from './forms/LoginForm'
import { RegisterForm } from './forms/RegisterForm'

import { AuthFormData } from './interfaces/auth-form.types'

import { SliderToggleElevated } from '../components/slider-toggle/variants/SliderToggleElevated'

import { Models } from 'appwrite'

type AuthMode = 'login' | 'signup'

export function AuthPanel() {
  const [authMode, setAuthMode] = useState<AuthMode>('login')

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
      account.createEmailPasswordSession({
        email: formData.email,
        password: formData.password
      })

      const currentUser = await account.get()
      setUser(currentUser)
    } catch (error) {
      console.error('Login error:', error)
      throw error
    }
  }

  async function handleRegister(formData: AuthFormData) {
    try {
      await account.create({
        userId: ID.unique(),
        email: formData.email,
        password: formData.password,
        name: formData.name
      })
      // Auto-login tras registro
      account.createEmailPasswordSession({
        email: formData.email,
        password: formData.password
      })
      const currentUser = await account.get()
      setUser(currentUser)
    } catch (error) {
      console.error('Register error:', error)
      throw error
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
    </section>
  )
}
