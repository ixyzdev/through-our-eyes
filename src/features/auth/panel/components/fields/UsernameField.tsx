import * as React from 'react'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

interface UsernameFieldProps {
  value: string
  onChange: (value: string) => void
}

export function UsernameField({ value, onChange }: UsernameFieldProps) {
  return (
    <div className="space-y-2">
      <Label htmlFor="username">Nombre de usuario</Label>
      <Input
        id="username"
        type="text"
        autoComplete="username"
        required
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          onChange(e.target.value)
        }
      />
    </div>
  )
}
