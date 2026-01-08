import type {
  AuthMode,
  FormFieldDefinition
} from '../interfaces/auth-form.types'

export const AUTH_FORM_FIELDS: Record<AuthMode, FormFieldDefinition[]> = {
  login: [
    {
      name: 'email',
      label: 'Correo electrónico',
      type: 'email',
      placeholder: 'sofia@lecturas.co',
      autoComplete: 'email'
    },
    {
      name: 'password',
      label: 'Contraseña',
      type: 'password',
      placeholder: '••••••••',
      autoComplete: 'current-password'
    }
  ],
  signup: [
    {
      name: 'name',
      label: 'Nombre completo',
      type: 'text',
      placeholder: 'Sofía Ramírez',
      autoComplete: 'name'
    },
    {
      name: 'email',
      label: 'Correo electrónico',
      type: 'email',
      placeholder: 'sofia@lecturas.co',
      autoComplete: 'email'
    },
    {
      name: 'password',
      label: 'Contraseña',
      type: 'password',
      placeholder: 'Crea una contraseña segura',
      autoComplete: 'new-password'
    }
  ]
}
