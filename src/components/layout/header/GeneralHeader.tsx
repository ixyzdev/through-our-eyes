'use client'

// ! Problema para cerrar sesion con retraso

import Link from 'next/link'
import { BookMarked, LogOut, Settings, UserCircle2 } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

import { GithubButton } from './components/GithubButton'

import { account } from '@/lib/appwrite/client'

import { useRouter } from 'next/navigation'

import { useAuth } from '@/providers/AuthProvider'

export const GeneralHeader = () => {
  const router = useRouter()

  const { refresh } = useAuth()

  async function handleLogout() {
    await account.deleteSession({ sessionId: 'current' })
    await refresh()
    router.replace('/auth')
  }

  return (
    <header className="flex items-center justify-between py-3.5">
      <div className="flex flex-1"></div>

      <nav className="flex items-center gap-3">
        <GithubButton href="https://github.com/ixyzdev/through-our-eyes" />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button size="icon" variant="outline" aria-label="Navegación">
              <UserCircle2 className="h-4 w-4" aria-hidden="true" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuItem asChild>
              <Link href="/profile" aria-label="Perfil de usuario">
                <UserCircle2 className="h-4 w-4" aria-hidden="true" />
                Perfil
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/library" className="flex items-center gap-2">
                <BookMarked className="h-4 w-4" aria-hidden="true" />
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
                <button
                  type="button"
                  onClick={handleLogout}
                  className="flex items-center gap-2"
                >
                  Cerrar sesión
                </button>
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </nav>
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
