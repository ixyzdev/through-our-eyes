import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { fetchBooks } from '@/lib/books'

const readingParagraphs = [
  'Las primeras líneas de un libro bien construido deben invitar al silencio. Aquí se despliega una idea principal: leer es también una forma de escuchar lo que el texto evita decir.',
  'Con el ritmo de la página aparecen conceptos que se encadenan. El objetivo es mantener la concentración con márgenes generosos, tipografía cómoda y una sola columna clara.',
  'La lectura continua no necesita adornos: solo espacio, contraste adecuado y un flujo sin interrupciones. Así se respeta la experiencia de concentración profunda.',
  'En el tramo final, las ideas quedan abiertas para que el lector retome después. La vista se enfoca en ofrecer calma y continuidad.'
]

export default async function LibraryReaderPage() {
  const data = await fetchBooks()
  const book = data.library[0]

  return (
    <div className="text-foreground min-h-screen bg-white">
      <div className="mx-auto flex min-h-screen max-w-3xl flex-col px-6 py-10 lg:px-8">
        <header className="flex flex-col gap-6 border-b border-border/60 pb-8">
          <Link
            href="/library"
            className="text-muted-foreground hover:text-foreground inline-flex items-center gap-2 text-sm font-semibold transition"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver a la biblioteca
          </Link>
          <div className="space-y-2">
            <Badge className="bg-muted/60 text-muted-foreground border-border/60">
              Lectura
            </Badge>
            <h1 className="text-3xl font-semibold">{book.title}</h1>
            <p className="text-muted-foreground text-sm">
              {book.author} · {book.genre} · {book.pages} páginas
            </p>
          </div>
        </header>
        <main className="flex-1 pb-16 pt-10 text-lg leading-relaxed text-slate-800">
          <div className="space-y-6">
            {readingParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </main>
        <footer className="border-t border-border/60 pt-6 text-sm text-muted-foreground">
          Progreso guardado · Capítulo 4 · Última sesión {book.lastOpened}
        </footer>
      </div>
    </div>
  )
}
