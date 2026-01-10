import { cn } from '@/lib/utils'
import type { PropsWithChildren } from 'react'

interface FahrenheitContainerProps extends PropsWithChildren {
  className?: string
}

export function FahrenheitContainer({
  children,
  className
}: FahrenheitContainerProps) {
  return (
    <div
      className={cn(
        // Base: misma familia visual, pero más opresiva y térmica
        'text-foreground relative overflow-hidden rounded-xl px-6 py-4 antialiased',
        // Fondo: degradado oscuro + rojo/ámbar (fuego, censura)
        'bg-linear-to-br from-zinc-900 via-red-950/80 to-amber-900/70',
        // Sombra más pesada, sensación de peso y control
        'shadow-[0_40px_90px_-35px_rgba(0,0,0,0.7)]',
        className
      )}
    >
      {/* Ruido térmico / fuego latente */}
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute inset-6 rounded-full bg-linear-to-br from-red-600/20 via-orange-400/10 to-yellow-300/10 blur-3xl" />
      </div>

      {/* Capa de “humo” */}
      <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-black/20" />

      {/* Contenido */}
      <div className="relative">{children}</div>
    </div>
  )
}
