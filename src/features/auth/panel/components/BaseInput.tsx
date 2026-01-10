import * as React from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export interface BaseInputProps extends React.ComponentPropsWithoutRef<
  typeof Input
> {
  label?: string
}

export const BaseInput = React.forwardRef<
  React.ComponentRef<typeof Input>,
  BaseInputProps
>(({ label, id, ...inputProps }, ref) => {
  return (
    <div className="space-y-2">
      {label ? <Label htmlFor={id}>{label}</Label> : null}
      <Input ref={ref} id={id} {...inputProps} />
    </div>
  )
})

BaseInput.displayName = 'BaseInput'
