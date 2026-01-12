import * as React from 'react'

import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'

interface RememberMeFieldProps {
  checked: boolean
  onChange: (checked: boolean) => void
}

export function RememberMeField({ checked, onChange }: RememberMeFieldProps) {
  return (
    <div className="flex items-center gap-2">
      <Checkbox
        id="remember"
        checked={checked}
        onCheckedChange={(value) => onChange(value === true)}
      />
      <Label
        htmlFor="remember"
        className="text-muted-foreground text-sm select-none"
      >
        Recuérdame
      </Label>
    </div>
  )
}
