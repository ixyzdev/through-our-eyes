import Link from 'next/link'
import { AlertTriangle, ArrowLeft, Compass } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

export default function NotFound() {
  return (
    <div className="text-foreground min-h-screen bg-gradient-to-b from-slate-50 via-white to-amber-50 dark:from-slate-950 dark:via-slate-900 dark:to-black">
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 py-16 text-center lg:px-8">
        <Badge className="bg-muted text-muted-foreground border-border/60 inline-flex items-center gap-2">
          <AlertTriangle className="h-4 w-4" />
          Ruta no encontrada
        </Badge>

        <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">
          Esta página se perdió entre las páginas.
        </h1>
        <p className="text-muted-foreground mt-4 max-w-2xl text-base sm:text-lg">
          No pudimos encontrar la vista que buscas. Puedes volver al inicio, ir a
          tu biblioteca o seguir explorando autores destacados.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button asChild className="gap-2">
            <Link href="/">
              <Compass className="h-4 w-4" />
              Volver al inicio
            </Link>
          </Button>
          <Button asChild variant="outline" className="gap-2">
            <Link href="/library">
              <ArrowLeft className="h-4 w-4" />
              Ir a la biblioteca
            </Link>
          </Button>
        </div>

        <Card className="border-border/70 bg-card/90 mt-12 w-full max-w-2xl p-6 text-left shadow-sm backdrop-blur">
          <div className="space-y-2">
            <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              Sugerencias rápidas
            </p>
            <ul className="text-muted-foreground space-y-2 text-sm">
              <li>• Revisa la URL o vuelve a intentar desde el menú principal.</li>
              <li>• Si llegaste desde una recomendación, guarda la lectura y vuelve más tarde.</li>
              <li>• ¿Necesitas ayuda? Escríbenos desde el perfil para corregir el enlace.</li>
            </ul>
          </div>
        </Card>
      </div>
    </div>
  )
}
