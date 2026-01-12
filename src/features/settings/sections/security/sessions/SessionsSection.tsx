import { Button } from '@/components/ui/button'

export function SessionsSection() {
  return (
    <section className="space-y-3">
      <header className="space-y-1">
        <p className="text-sm font-semibold">Sesiones iniciadas</p>
        <p className="text-muted-foreground text-xs">
          Tienes la sesión iniciada en estos dispositivos o has iniciado sesión
          en ellos en los últimos 28 días.
        </p>
      </header>

      <div className="bg-muted/40 flex items-center justify-between rounded-xl border px-4 py-3">
        <div className="space-y-0.5">
          <p className="text-sm font-medium">Chrome · Windows 10</p>
          <p className="text-muted-foreground text-xs">
            Sesión actual · Hace 5 minutos
          </p>
        </div>

        <Button variant="ghost" size="sm">
          Cerrar sesión
        </Button>
      </div>
    </section>
  )
}
