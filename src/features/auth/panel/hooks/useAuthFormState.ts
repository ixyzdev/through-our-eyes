'use client'

import { useState } from 'react'
import { AuthFormData } from '../interfaces/auth-form.types'

const initialState: AuthFormData = {
  email: '',
  name: '',
  password: '',
  remember: false
}

export function useAuthFormState() {
  const [formData, setFormData] = useState<AuthFormData>(initialState)
  const [confirmPassword, setConfirmPassword] = useState('')

  return {
    formData,
    setFormData,
    confirmPassword,
    setConfirmPassword,
    reset: () => {
      setFormData(initialState)
      setConfirmPassword('')
    }
  }
}
