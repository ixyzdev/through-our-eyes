import { navigationSections } from '@/features/home/sidebar/sidebar.config'

import { Sparkles } from 'lucide-react'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { cn } from '@/lib/utils'

import { navShortcuts } from '@/lib/dashboard'

export const HomeSidebar = () => {
  const pathname = usePathname()

  return (
    <aside className="border-border/70 bg-card/80 w-full max-w-[260px] space-y-8 rounded-3xl border p-6 shadow-[0_20px_80px_-40px_rgb(15,23,42,0.35)] backdrop-blur lg:sticky lg:top-8">
      <div className="space-y-2">
        <p className="text-muted-foreground text-xs font-semibold tracking-[0.18em] uppercase">
          Navegación
        </p>
        <div className="space-y-3">
          <div>
            <label
              htmlFor="nav-search"
              className="text-muted-foreground mb-2 block text-xs font-semibold"
            >
              Buscar sección
            </label>
            <Input
              id="nav-search"
              placeholder="Ej. notas, sesiones..."
              className="bg-background"
            />
          </div>
          <nav className="space-y-6">
            {navigationSections.map((section) => (
              <div key={section.title} className="space-y-2">
                <p className="text-muted-foreground text-[11px] font-semibold tracking-[0.2em] uppercase">
                  {section.title}
                </p>
                <div className="space-y-1">
                  {section.items.map((item) => {
                    const isActive =
                      item.href === pathname ||
                      (pathname === '/' && item.id === 'resumen')

                    return (
                      <Link
                        key={item.id}
                        href={item.href}
                        className={cn(
                          'group text-muted-foreground hover:bg-muted/70 hover:text-foreground flex w-full items-center justify-between rounded-2xl px-3 py-2 text-sm font-medium transition',
                          isActive &&
                            'bg-primary/10 text-foreground ring-primary/30 ring-1'
                        )}
                      >
                        <span className="flex items-start gap-3">
                          <item.icon className="text-primary/80 group-hover:text-primary mt-0.5 h-4 w-4" />
                          <span className="space-y-1">
                            <span className="block text-sm font-semibold">
                              {item.label}
                            </span>
                            <span className="text-muted-foreground block text-xs font-normal">
                              {item.description}
                            </span>
                          </span>
                        </span>
                        {item.count ? (
                          <span className="bg-primary/10 text-primary rounded-full px-2 py-0.5 text-xs font-semibold">
                            {item.count}
                          </span>
                        ) : null}
                      </Link>
                    )
                  })}
                </div>
              </div>
            ))}
          </nav>
        </div>
      </div>
      <div className="from-primary/10 via-primary/5 shadow-primary/10 space-y-3 rounded-2xl bg-gradient-to-br to-emerald-50 p-4 shadow-inner">
        <div className="flex items-center gap-3">
          <div className="bg-primary text-primary-foreground shadow-primary/30 flex h-11 w-11 items-center justify-center rounded-2xl shadow-lg">
            <Sparkles className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm font-semibold">Recuerdos activos</p>
            <p className="text-muted-foreground text-xs">
              Captura ideas y vuelve a ellas en segundos.
            </p>
          </div>
        </div>
        <Button className="w-full">Crear recuerdo</Button>
      </div>
      <div className="space-y-2">
        <p className="text-muted-foreground text-xs font-semibold tracking-[0.18em] uppercase">
          Atajos
        </p>
        <div className="grid grid-cols-2 gap-2">
          {navShortcuts.map(({ label, key, icon: Icon }) => (
            <Card
              key={label}
              className="border-border/70 bg-card/60 flex items-center gap-2 border-dashed p-3"
            >
              <Icon className="text-primary h-4 w-4" />
              <div className="flex flex-1 items-center justify-between text-xs font-semibold">
                <span>{label}</span>
                <span className="bg-muted text-muted-foreground rounded-md px-2 py-1 text-[11px] tracking-wide uppercase">
                  {key}
                </span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </aside>
  )
}

export default HomeSidebar
