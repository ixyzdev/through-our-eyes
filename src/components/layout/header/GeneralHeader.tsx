'use client'

import * as React from 'react'
import Link from 'next/link'
import { BookHeart, Eye, Github, Sparkles, User } from 'lucide-react'

import { useIsMobile } from '@/hooks/use-mobile'
import { Button } from '@/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu'

const featuredRoutes: { title: string; href: string; description: string }[] = [
  {
    title: 'Explorar historias',
    href: '/library',
    description: 'Colecciones vivas curadas por la comunidad.'
  },
  {
    title: 'Curaduría destacada',
    href: '/highlights',
    description: 'Selecciones sofisticadas de los últimos lanzamientos.'
  },
  {
    title: 'Bitácora del equipo',
    href: '/blog',
    description: 'Novedades editoriales y avances del proyecto.'
  },
  {
    title: 'Eventos y encuentros',
    href: '/events',
    description: 'Activaciones, charlas y sesiones abiertas.'
  }
]

export const GeneralHeader = () => {
  const isMobile = useIsMobile()

  return (
    <header className="border-border/70 bg-card/80 h-[70px] max-h-[70px] border-b backdrop-blur">
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <span className="bg-primary/10 text-primary flex h-10 w-10 items-center justify-center rounded-2xl shadow-[0_10px_25px_-15px_rgba(0,0,0,0.5)]">
            <Eye className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="text-xl font-semibold tracking-tight">
            <span className="from-primary via-primary/70 to-secondary bg-gradient-to-r bg-clip-text text-transparent">
              Through Our Eyes
            </span>
          </span>
        </Link>

        <nav className="flex items-center gap-4">
          <NavigationMenu viewport={isMobile}>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Explorar</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[420px] lg:w-[520px] lg:grid-cols-[1fr_1.2fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link
                          href="/library"
                          className="from-muted/40 to-muted flex h-full w-full flex-col justify-between rounded-2xl bg-gradient-to-br p-5 no-underline outline-none transition-all duration-200 focus:shadow-md"
                        >
                          <div>
                            <div className="flex items-center gap-2 text-lg font-semibold">
                              <Sparkles className="h-5 w-5" aria-hidden="true" />
                              Curaduría premium
                            </div>
                            <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                              Descubre colecciones destacadas, historias visuales y
                              lecturas recomendadas.
                            </p>
                          </div>
                          <span className="text-primary mt-4 text-sm font-semibold">
                            Ver biblioteca
                          </span>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    {featuredRoutes.map((route) => (
                      <ListItem
                        key={route.title}
                        title={route.title}
                        href={route.href}
                      >
                        {route.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle}>
                  <Link href="/manifesto">Manifiesto</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center gap-2">
            <Button
              asChild
              size="icon"
              variant="outline"
              className="text-muted-foreground hover:text-foreground"
            >
              <Link
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Repositorio de GitHub"
              >
                <Github className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>

            <Button
              asChild
              size="icon"
              variant="outline"
              className="text-muted-foreground hover:text-foreground"
            >
              <Link href="/profile" aria-label="Perfil de usuario">
                <User className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>

            <Button asChild className="hidden sm:inline-flex">
              <Link href="/library">
                <BookHeart className="mr-2 h-4 w-4" aria-hidden="true" />
                Biblioteca viva
              </Link>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  )
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<'li'> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className="hover:bg-muted/60 focus:bg-muted/60 block space-y-1 rounded-2xl p-3 leading-none no-underline outline-none transition-colors"
        >
          <div className="text-sm font-semibold leading-none">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}
