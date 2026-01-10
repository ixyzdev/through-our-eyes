import { cn } from '@/lib/utils'
import type { PropsWithChildren } from 'react'

interface ExoticContainerProps extends PropsWithChildren {
  className?: string
}

export function ExoticContainer({ children, className }: ExoticContainerProps) {
  return (
    <div
      className={cn(
        'from-primary/10 via-primary/5 text-foreground dark:from-primary/20 relative overflow-hidden rounded-xl bg-linear-to-br to-indigo-100 antialiased shadow-[0_30px_80px_-40px_rgb(15,23,42,0.45)] dark:via-zinc-900 dark:to-black',
        className
      )}
    >
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div className="from-primary/20 absolute inset-10 rounded-full bg-linear-to-br via-purple-500/10 to-emerald-400/10 blur-3xl" />
      </div>

      <div className="relative">{children}</div>
    </div>
  )
}
