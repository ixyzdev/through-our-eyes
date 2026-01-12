'use client'

import { authService } from '../services/auth.service'
import type { AuthFormData } from '../interfaces/auth-form.types'
import type { AuthError } from '../interfaces/auth-panel.types'

export function useAuthActions(onSuccess: () => Promise<void>) {
  const login = async (data: AuthFormData): Promise<AuthError | null> => {
    try {
      await authService.login(data)
      await onSuccess()
      return null
    } catch (error: any) {
      return {
        title: 'Error al iniciar sesión',
        message:
          error?.message ??
          'Las credenciales no son válidas o ocurrió un problema inesperado.'
      }
    }
  }

  const register = async (data: AuthFormData): Promise<AuthError | null> => {
    try {
      await authService.register(data)
      await onSuccess()
      return null
    } catch (error: any) {
      return {
        title: 'Error al registrarse',
        message:
          error?.message ??
          'No fue posible crear la cuenta. Verifica los datos ingresados.'
      }
    }
  }

  return { login, register }
}
