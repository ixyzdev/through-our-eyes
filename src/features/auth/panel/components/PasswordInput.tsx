import * as React from 'react'
import { Eye, EyeOff } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { BaseInput, BaseInputProps } from './BaseInput'

export interface PasswordInputProps extends BaseInputProps {}

export function PasswordInput(props: PasswordInputProps) {
  const [visible, setVisible] = React.useState(false)

  return (
    <div className="relative">
      <BaseInput
        {...props}
        type={visible ? 'text' : 'password'}
        className="pr-11"
      />
      <Button
        type="button"
        variant="ghost"
        size="icon"
        onClick={() => setVisible((v) => !v)}
        className="absolute inset-y-0 right-1 my-auto h-9 w-9"
      >
        {visible ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
      </Button>
    </div>
  )
}
