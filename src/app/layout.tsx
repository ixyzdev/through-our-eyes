import type { Metadata } from 'next'

import '@/styles/globals.css'

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
      <body className="app-background-gradient text-foreground flex min-h-screen flex-col font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
