import { BookOpenCheck, LogIn, Sparkles } from 'lucide-react'

import { FormField, type FormFieldDefinition } from '@/features/auth/form-field'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'

type AuthMode = 'login' | 'signup'

const fields: Record<AuthMode, FormFieldDefinition[]> = {
  login: [
    {
      name: 'email',
      label: 'Correo electrónico',
      type: 'email',
      placeholder: 'sofia@lecturas.co',
      autoComplete: 'email'
    },
    {
      name: 'password',
      label: 'Contraseña',
      type: 'password',
      placeholder: '••••••••',
      autoComplete: 'current-password'
    }
  ],
  signup: [
    {
      name: 'name',
      label: 'Nombre completo',
      type: 'text',
      placeholder: 'Sofía Ramírez',
      autoComplete: 'name'
    },
    {
      name: 'email',
      label: 'Correo electrónico',
      type: 'email',
      placeholder: 'sofia@lecturas.co',
      autoComplete: 'email'
    },
    {
      name: 'password',
      label: 'Contraseña',
      type: 'password',
      placeholder: 'Crea una contraseña segura',
      autoComplete: 'new-password'
    }
  ]
}

interface AuthFormProps {
  mode: AuthMode
  onToggleMode: (mode: AuthMode) => void
}

export function AuthForm({ mode, onToggleMode }: AuthFormProps) {
  const isLogin = mode === 'login'
  const actionLabel = isLogin ? 'Iniciar sesión' : 'Crear cuenta'
  const toggleLabel = isLogin ? 'Crear cuenta' : 'Iniciar sesión'
  const subtitle = isLogin
    ? 'Vuelve a tus lecturas y continúa justo donde dejaste.'
    : 'Personaliza tu biblioteca y descubre nuevas lecturas.'

  return (
    <Card className="border-border/70 bg-card/70 w-full max-w-[480px]">
      <CardHeader className="space-y-4 pb-2">
        <Badge variant="success" className="w-fit">
          <Sparkles className="h-4 w-4" />
          Lectura inteligente
        </Badge>
        <div className="space-y-2">
          <CardTitle className="text-3xl">{actionLabel}</CardTitle>
          <CardDescription className="text-base leading-relaxed">
            {subtitle}
          </CardDescription>
        </div>
        <div className="bg-muted/60 flex gap-2 rounded-2xl p-1">
          <Button
            type="button"
            variant={isLogin ? 'default' : 'ghost'}
            size="sm"
            className="flex-1"
            onClick={() => onToggleMode('login')}
          >
            <LogIn className="mr-2 h-4 w-4" />
            Iniciar sesión
          </Button>
          <Button
            type="button"
            variant={!isLogin ? 'default' : 'ghost'}
            size="sm"
            className="flex-1"
            onClick={() => onToggleMode('signup')}
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
            {fields[mode].map((field) => (
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
            {actionLabel}
          </Button>
          <div className="bg-primary/5 text-muted-foreground rounded-2xl p-4 text-sm">
            {isLogin ? (
              <>
                ¿Primera vez aquí?{' '}
                <button
                  type="button"
                  className="text-primary font-semibold hover:underline"
                  onClick={() => onToggleMode('signup')}
                >
                  {toggleLabel}
                </button>{' '}
                y desbloquea recomendaciones personalizadas.
              </>
            ) : (
              <>
                ¿Ya tienes una cuenta?{' '}
                <button
                  type="button"
                  className="text-primary font-semibold hover:underline"
                  onClick={() => onToggleMode('login')}
                >
                  {toggleLabel}
                </button>{' '}
                para seguir tus libros en progreso.
              </>
            )}
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
