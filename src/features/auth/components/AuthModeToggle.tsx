import { LogIn, BookOpenCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'

export type AuthMode = 'login' | 'signup'

interface AuthModeToggleProps {
  value: AuthMode
  onChange: (mode: AuthMode) => void
  className?: string
}

export function AuthModeToggle({
  value,
  onChange,
  className
}: AuthModeToggleProps) {
  return (
    <section
      className={`bg-muted/60 flex gap-2 rounded-2xl p-1 ${className ?? ''}`}
    >
      <Button
        type="button"
        variant={value === 'login' ? 'default' : 'ghost'}
        size="sm"
        className="flex-1"
        onClick={() => onChange('login')}
      >
        <LogIn className="mr-2 h-4 w-4" />
        Iniciar sesión
      </Button>

      <Button
        type="button"
        variant={value === 'signup' ? 'default' : 'ghost'}
        size="sm"
        className="flex-1"
        onClick={() => onChange('signup')}
      >
        <BookOpenCheck className="mr-2 h-4 w-4" />
        Registrarme
      </Button>
    </section>
  )
}
