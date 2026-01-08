import { BookOpenCheck, LogIn } from 'lucide-react'

import { FormField } from '@/features/auth/auth-form/components/FormField'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'

import { AuthMode } from '../interfaces/auth-form.types'

import { AUTH_FORM_FIELDS } from '@/features/auth/auth-form/configs/auth-form-fields.config'
import { AUTH_FORM_HEADER } from '@/features/auth/auth-form/configs/auth-form-header.config'

interface AuthFormProps {
  mode: AuthMode
  onModeChange: (mode: AuthMode) => void
}

export function AuthForm(props: AuthFormProps) {
  const isLogin = props.mode === 'login'

  return (
    <Card className="border-border/70 bg-card/70 flex w-120 flex-col justify-center">
      <CardHeader className="space-y-4 pb-2">
        <div className="space-y-2">
          <CardTitle className="text-3xl">
            {AUTH_FORM_HEADER[props.mode].actionLabel}
          </CardTitle>
          <CardDescription className="text-base leading-relaxed">
            {AUTH_FORM_HEADER[props.mode].subtitle}
          </CardDescription>
        </div>
        <div className="bg-muted/60 flex gap-2 rounded-2xl p-1">
          <Button
            type="button"
            variant={isLogin ? 'default' : 'ghost'}
            size="sm"
            className="flex-1"
            onClick={() => props.onModeChange('login')}
          >
            <LogIn className="mr-2 h-4 w-4" />
            Iniciar sesión
          </Button>
          <Button
            type="button"
            variant={!isLogin ? 'default' : 'ghost'}
            size="sm"
            className="flex-1"
            onClick={() => props.onModeChange('signup')}
          >
            <BookOpenCheck className="mr-2 h-4 w-4" />
            Registrarme
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <form
          className="space-y-6"
          onSubmit={(event) => event.preventDefault()}
        >
          <div className="space-y-4">
            {AUTH_FORM_FIELDS[props.mode].map((field) => (
              <FormField key={field.name} field={field} />
            ))}
          </div>
          <div className="flex items-center justify-between text-sm">
            <Checkbox id="remember" label="Recuérdame" defaultChecked />
            <button
              type="button"
              className="text-primary hover:text-primary/80 transition"
            >
              ¿Olvidaste tu contraseña?
            </button>
          </div>
          <Button type="submit" className="w-full text-base">
            {AUTH_FORM_HEADER[props.mode].actionLabel}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
