import { useState } from 'react'
import { changePassword } from './password.service'
import { validatePassword } from './password.validation'
import { mapPasswordError } from './password.errors'

export function useChangePassword() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  const submit = async (
    oldPassword: string,
    newPassword: string,
    confirm: string
  ) => {
    setError(null)
    setSuccess(false)

    const validationError = validatePassword(newPassword, confirm)
    if (validationError) {
      setError(humanizeValidationError(validationError))
      return
    }

    try {
      setLoading(true)
      await changePassword(newPassword, oldPassword)
      setSuccess(true)
    } catch (e) {
      setError(mapPasswordError(e))
    } finally {
      setLoading(false)
    }
  }

  return { submit, loading, error, success }
}

function humanizeValidationError(code: string): string {
  switch (code) {
    case 'TOO_SHORT':
      return 'Debe tener al menos 8 caracteres'
    case 'NO_UPPERCASE':
      return 'Debe incluir una letra mayúscula'
    case 'NO_NUMBER':
      return 'Debe incluir un número'
    case 'NO_SPECIAL':
      return 'Debe incluir un carácter especial'
    case 'NOT_MATCHING':
      return 'Las contraseñas no coinciden'
    default:
      return 'Contraseña inválida'
  }
}
