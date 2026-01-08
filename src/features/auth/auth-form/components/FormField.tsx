import * as React from 'react'
import { Eye, EyeOff } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

import { FormFieldDefinition } from '../interfaces/auth-form.types'

interface FormFieldProps {
  field: FormFieldDefinition
}

export function FormField({ field }: FormFieldProps) {
  const [isVisible, setIsVisible] = React.useState(false)
  const isPassword = field.type === 'password'

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <Label htmlFor={field.name}>{field.label}</Label>
      </div>
      <div className="relative">
        <Input
          id={field.name}
          name={field.name}
          type={isPassword && !isVisible ? 'password' : 'text'}
          placeholder={field.placeholder}
          autoComplete={field.autoComplete}
          required
          className="pr-11"
        />
        {isPassword ? (
          <Button
            type="button"
            variant="ghost"
            size="icon"
            aria-label={isVisible ? 'Ocultar contraseña' : 'Mostrar contraseña'}
            onClick={() => setIsVisible((prev) => !prev)}
            className="text-muted-foreground hover:text-foreground absolute inset-y-0 right-1 my-auto h-9 w-9"
          >
            {isVisible ? (
              <EyeOff className="h-4 w-4" />
            ) : (
              <Eye className="h-4 w-4" />
            )}
          </Button>
        ) : null}
      </div>
    </div>
  )
}
