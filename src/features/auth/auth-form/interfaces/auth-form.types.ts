export type AuthMode = 'login' | 'signup'

type FieldType = 'text' | 'email' | 'password'

export interface FormFieldDefinition {
  name: string
  label: string
  type: FieldType
  placeholder?: string
  autoComplete?: string
}
