export type PasswordValidationError =
  | 'TOO_SHORT'
  | 'NO_UPPERCASE'
  | 'NO_NUMBER'
  | 'NO_SPECIAL'
  | 'NOT_MATCHING'

export function validatePassword(
  password: string,
  confirm?: string
): PasswordValidationError | null {
  if (password.length < 8) return 'TOO_SHORT'
  if (!/[A-Z]/.test(password)) return 'NO_UPPERCASE'
  if (!/[0-9]/.test(password)) return 'NO_NUMBER'
  if (!/[!@#$%^&*]/.test(password)) return 'NO_SPECIAL'
  if (confirm !== undefined && password !== confirm) return 'NOT_MATCHING'
  return null
}
