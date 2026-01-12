import * as React from 'react'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

interface ConfirmPasswordFieldProps {
  value: string
  onChange: (value: string) => void
}

export function ConfirmPasswordField({
  value,
  onChange
}: ConfirmPasswordFieldProps) {
  return (
    <div className="space-y-2">
      <Label htmlFor="confirmPassword">Confirmar contraseña</Label>
      <Input
        id="confirmPassword"
        type="password"
        autoComplete="new-password"
        required
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          onChange(e.target.value)
        }
      />
    </div>
  )
}
