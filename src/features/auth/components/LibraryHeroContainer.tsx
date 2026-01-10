import { cn } from '@/lib/utils'
import type { PropsWithChildren } from 'react'

interface LibraryHeroContainerProps extends PropsWithChildren {
  className?: string
  backgroundImage?: string
}

export function LibraryHeroContainer({
  children,
  className,
  backgroundImage
}: LibraryHeroContainerProps) {
  return (
    <section
      className={cn(
        'relative h-full min-h-130 overflow-hidden rounded-xl',
        className
      )}
    >
      {/* Fondo opcional (portadas, textura, imagen) */}
      {backgroundImage && (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${backgroundImage}')` }}
        />
      )}

      {/* Overlay coherente con el theme */}
      <div className="from-background/80 via-background/60 to-background/90 absolute inset-0 bg-linear-to-b" />

      {/* Contenido */}
      <div className="relative z-10 flex h-full flex-col justify-end px-10 py-12">
        {/* Card translúcida reutilizable */}
        <div
          className={cn(
            'border-border/60 bg-card/70 relative max-w-xl rounded-2xl border p-8 backdrop-blur-xl'
          )}
        >
          {/* Gradiente pastel interno */}
          <div className="pointer-events-none absolute inset-0 -z-10 rounded-2xl bg-linear-to-br from-amber-200/20 via-indigo-200/15 to-blue-200/20" />

          <div className="relative">{children}</div>
        </div>
      </div>
    </section>
  )
}
