import type { AuthMode } from '../interfaces/auth-form.types'

type AuthFormHeaderConfig = {
  actionLabel: string
  toggleLabel: string
  subtitle: string
}

export const AUTH_FORM_HEADER: Record<AuthMode, AuthFormHeaderConfig> = {
  login: {
    actionLabel: 'Iniciar sesión',
    toggleLabel: 'Crear cuenta',
    subtitle: 'Vuelve a tus lecturas y continúa justo donde dejaste.'
  },
  signup: {
    actionLabel: 'Crear cuenta',
    toggleLabel: 'Iniciar sesión',
    subtitle: 'Personaliza tu biblioteca y descubre nuevas lecturas.'
  }
}
