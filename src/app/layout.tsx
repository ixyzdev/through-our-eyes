import type { Metadata } from 'next'
import Link from 'next/link'
import './globals.css'

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
      <body className="font-sans antialiased">
        <div className="bg-background text-foreground">{children}</div>
      </body>
    </html>
  )
}
