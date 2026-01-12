import * as React from 'react'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

interface PasswordFieldProps {
  value: string
  onChange: (value: string) => void
  autoComplete?: string
}

export function PasswordField({
  value,
  onChange,
  autoComplete = 'current-password'
}: PasswordFieldProps) {
  return (
    <div className="space-y-2">
      <Label htmlFor="password">Contraseña</Label>
      <Input
        id="password"
        type="password"
        autoComplete={autoComplete}
        required
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          onChange(e.target.value)
        }
      />
    </div>
  )
}
