import * as React from 'react'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

interface EmailFieldProps {
  value: string
  onChange: (value: string) => void
}

export function EmailField({ value, onChange }: EmailFieldProps) {
  return (
    <div className="space-y-2">
      <Label htmlFor="email">Correo electrónico</Label>
      <Input
        id="email"
        type="email"
        autoComplete="email"
        required
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          onChange(e.target.value)
        }
      />
    </div>
  )
}
