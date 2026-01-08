'use client'

import Link from 'next/link'
import { BookOpen, Github, LogOut, Settings, User } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
// import { useIsMobile } from '@/hooks/use-mobile'
// import { NavigationMenuLink } from '@/components/ui/navigation-menu'

export const GeneralHeader = () => {
  // const isMobile = useIsMobile()

  return (
    <header className="justify-between">
      <div className="mx-auto flex max-w-6xl items-center justify-between py-3.5 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          {/* <span className="bg-primary/10 text-primary flex h-10 w-10 items-center justify-center rounded-2xl">
            <Eye className="h-5 w-5" aria-hidden="true" />
          </span> */}
          <span className="text-xl font-semibold">
            <span className="">Through Our Eyes</span>
          </span>
        </Link>

        <nav className="flex items-center gap-3">
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
          {/* 
          <Button
            asChild
            size="icon"
            variant="outline"
            className="text-muted-foreground hover:text-foreground"
          ></Button> */}

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size="icon" variant="outline" aria-label="Navegación">
                <User className="h-4 w-4" aria-hidden="true" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuItem asChild>
                <Link href="/profile" aria-label="Perfil de usuario">
                  <User className="h-4 w-4" aria-hidden="true" />
                  Perfil
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/library" className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4" aria-hidden="true" />
                  Biblioteca
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/settings" className="flex items-center gap-2">
                  <Settings className="h-4 w-4" aria-hidden="true" />
                  Configuración
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/" className="flex items-center gap-2">
                  <LogOut className="h-4 w-4" aria-hidden="true" />
                  Cerrar sesión
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
      </div>
    </header>
  )
}

// function ListItem({
//   title,
//   children,
//   href,
//   ...props
// }: React.ComponentPropsWithoutRef<'li'> & { href: string }) {
//   return (
//     <li {...props}>
//       <NavigationMenuLink asChild>
//         <Link
//           href={href}
//           className="hover:bg-muted/60 focus:bg-muted/60 block space-y-1 rounded-2xl p-3 leading-none no-underline transition-colors outline-none"
//         >
//           <div className="text-sm leading-none font-semibold">{title}</div>
//           <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
//             {children}
//           </p>
//         </Link>
//       </NavigationMenuLink>
//     </li>
//   )
// }
