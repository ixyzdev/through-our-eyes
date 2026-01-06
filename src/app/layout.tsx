import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import Link from 'next/link'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Through Our Eyes | Club de lectura moderno',
  description:
    'Explora una experiencia de lectura inteligente con bibliotecas personalizadas, rituales y notas sincronizadas.'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="bg-background text-foreground">
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
              <div className="flex items-center gap-2">
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
              </div>
            </div>
          </header>
          {children}
        </div>
      </body>
    </html>
  )
}
