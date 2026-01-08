import Link from 'next/link'

export const GeneralHeader = () => {
  return (
    <header className="border-border/70 bg-card/80 border-b backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-semibold tracking-tight"
        >
          <span className="bg-primary/10 text-primary rounded-full px-3 py-1">
            Through Our Eyes
          </span>
          <span className="text-muted-foreground">· Biblioteca viva</span>
        </Link>

        <nav className="flex items-center gap-2">
          <Link
            href="https://github.com/"
            className="border-border hover:border-primary hover:bg-primary/5 rounded-full border px-4 py-2 text-sm font-semibold transition"
            target="_blank"
            rel="noreferrer"
          >
            GitHub del proyecto
          </Link>

          <Link
            href="/login"
            className="text-muted-foreground hover:text-foreground rounded-full px-4 py-2 text-sm font-semibold transition"
          >
            Iniciar sesión
          </Link>

          <Link
            href="/settings"
            className="text-muted-foreground hover:text-foreground rounded-full px-4 py-2 text-sm font-semibold transition"
          >
            Configuración
          </Link>

          <Link
            href="/signup"
            className="border-border bg-primary text-primary-foreground hover:bg-primary/90 rounded-full border px-4 py-2 text-sm font-semibold shadow"
          >
            Crear cuenta
          </Link>

          <Link
            href="/library"
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-4 py-2 text-sm font-semibold shadow"
          >
            Ver biblioteca
          </Link>
        </nav>
      </div>
    </header>
  )
}
