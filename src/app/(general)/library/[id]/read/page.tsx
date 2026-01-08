import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  ArrowLeft,
  Bookmark,
  BookmarkCheck,
  BookOpen,
  Highlighter,
  MessageSquareText,
  Quote,
  Sparkles,
  Tag,
  Timer
} from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { fetchBookById } from '@/lib/books'

export const dynamic = 'force-dynamic'

const readingParagraphs = [
  'Las primeras páginas nos invitan a detenernos en la idea de que cada lectura es un viaje personal. El texto describe cómo la memoria se entreteje con la imaginación cuando subrayamos una frase que nos persigue durante días.',
  'En este capítulo se plantea que la disciplina no se trata de rigidez, sino de crear un ritmo que haga sostenible el hábito. El autor propone micro-rituales: preparar un espacio limpio, elegir una música tenue y marcar el inicio con una respiración profunda.',
  'Más adelante, una reflexión sobre los lectores inquietos: saltar entre párrafos también puede ser una forma de lectura activa, siempre que se capture la esencia con una nota breve y una pregunta para retomar después.',
  'La conclusión vuelve a la importancia de registrar hallazgos. Cada fragmento seleccionado puede convertirse en una cita, una referencia para un ensayo o una chispa para futuras conclusiones.'
]

const highlightExamples = [
  {
    id: 'frag-1',
    label: 'Cita',
    icon: Quote,
    text: 'Cada lectura es un viaje personal que se expande cuando subrayamos la frase justa.'
  },
  {
    id: 'frag-2',
    label: 'Referencia',
    icon: Tag,
    text: 'Micro-rituales para sostener el hábito: espacio, música, respiración.'
  },
  {
    id: 'frag-3',
    label: 'Conclusión',
    icon: Sparkles,
    text: 'Registrar hallazgos convierte cada fragmento en una semilla para futuras ideas.'
  }
]

const notes = [
  {
    id: 'note-1',
    title: 'Nota importante',
    text: 'Conectar el ritual con emociones positivas para mantener la constancia.'
  },
  {
    id: 'note-2',
    title: 'Idea para el club',
    text: 'Abrir debate sobre cómo cada lector marca fragmentos significativos.'
  }
]

export default async function BookReadPage({
  params
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const book = await fetchBookById(id)

  if (!book) {
    notFound()
  }

  return (
    <div className="text-foreground min-h-screen bg-gradient-to-b from-slate-50 via-white to-amber-50 dark:from-slate-950 dark:via-slate-900 dark:to-black">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-10 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-col gap-2">
            <Link
              href={`/library/${book.id}`}
              className="text-muted-foreground hover:text-foreground inline-flex items-center gap-2 text-sm font-semibold transition"
            >
              <ArrowLeft className="h-4 w-4" />
              Volver a la ficha del libro
            </Link>
            <div className="flex flex-wrap items-center gap-3">
              <Badge className="bg-primary/10 text-primary border-primary/20">
                Lectura activa
              </Badge>
              <Badge variant="outline">{book.genre}</Badge>
              <span className="text-muted-foreground text-xs font-semibold uppercase tracking-[0.2em]">
                Capítulo 04 · Sección 2
              </span>
            </div>
            <div>
              <h1 className="text-3xl font-semibold">{book.title}</h1>
              <p className="text-muted-foreground">
                {book.author} · {book.mood}
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button variant="outline" className="gap-2">
              <BookmarkCheck className="h-4 w-4" />
              Guardar marcador
            </Button>
            <Button className="gap-2">
              <Sparkles className="h-4 w-4" />
              Cerrar sesión
            </Button>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.6fr_1fr]">
          <Card className="border-border/70 bg-card/90 p-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 text-primary flex h-11 w-11 items-center justify-center rounded-2xl">
                  <BookOpen className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-lg font-semibold">Vista de lectura</p>
                  <p className="text-muted-foreground text-sm">
                    Selecciona un fragmento para crear cita, referencia o nota.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-xs font-semibold uppercase text-emerald-600">
                <Timer className="h-4 w-4" />
                Sesión 18 min
              </div>
            </div>

            <div className="mt-6 grid gap-6 lg:grid-cols-[0.4fr_1fr]">
              <div className="relative overflow-hidden rounded-3xl">
                <div className={`absolute inset-0 ${book.cover} opacity-70`} />
                <Image
                  src={book.coverImage}
                  alt={book.title}
                  width={320}
                  height={420}
                  className="relative h-full w-full rounded-3xl object-cover shadow-[0_20px_40px_-22px_rgba(15,23,42,0.45)]"
                />
                <div className="absolute bottom-3 left-3 right-3 rounded-2xl bg-white/80 p-3 text-xs font-semibold text-slate-900 shadow-sm backdrop-blur">
                  Progreso actual: {book.progress}%
                  <div className="bg-muted mt-2 h-2 overflow-hidden rounded-full">
                    <div
                      className="bg-primary h-full rounded-full"
                      style={{ width: `${book.progress}%` }}
                    />
                  </div>
                </div>
              </div>
              <div className="space-y-5 text-base leading-relaxed text-slate-700 dark:text-slate-200">
                {readingParagraphs.map((paragraph, index) => (
                  <p key={paragraph}>
                    {index === 1 ? (
                      <>
                        En este capítulo se plantea que la disciplina no se
                        trata de rigidez, sino de{' '}
                        <span className="bg-amber-100 text-amber-900 rounded-md px-1.5 py-0.5 font-semibold dark:bg-amber-500/20 dark:text-amber-100">
                          crear un ritmo sostenible
                        </span>{' '}
                        que haga sostenible el hábito. El autor propone
                        micro-rituales: preparar un espacio limpio, elegir una
                        música tenue y marcar el inicio con una respiración
                        profunda.
                      </>
                    ) : (
                      paragraph
                    )}
                  </p>
                ))}
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3 rounded-2xl border border-dashed border-amber-200 bg-amber-50/60 px-4 py-3 text-sm text-amber-900 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-100">
              <Highlighter className="h-4 w-4" />
              Marca un fragmento y clasifícalo como cita, referencia, conclusión
              o nota importante para mantener tu bitácora organizada.
            </div>
          </Card>

          <div className="space-y-6">
            <Card className="border-border/70 bg-card/90 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-lg font-semibold">Fragmentos marcados</p>
                  <p className="text-muted-foreground text-sm">
                    Lista de selecciones listas para citar.
                  </p>
                </div>
                <Badge className="bg-primary/10 text-primary border-primary/20">
                  {highlightExamples.length} activos
                </Badge>
              </div>
              <div className="mt-5 space-y-3">
                {highlightExamples.map((fragment) => {
                  const Icon = fragment.icon
                  return (
                    <div
                      key={fragment.id}
                      className="border-border/70 bg-background/60 flex gap-3 rounded-2xl border p-4 shadow-sm"
                    >
                      <span className="bg-primary/10 text-primary flex h-9 w-9 items-center justify-center rounded-full">
                        <Icon className="h-4 w-4" />
                      </span>
                      <div>
                        <p className="text-sm font-semibold uppercase text-slate-500">
                          {fragment.label}
                        </p>
                        <p className="text-sm text-slate-700 dark:text-slate-200">
                          “{fragment.text}”
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                <Button variant="outline" className="gap-2">
                  <Quote className="h-4 w-4" />
                  Guardar cita
                </Button>
                <Button variant="secondary" className="gap-2">
                  <Bookmark className="h-4 w-4" />
                  Exportar selección
                </Button>
              </div>
            </Card>

            <Card className="border-border/70 bg-card/90 p-6">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-lg font-semibold">Notas importantes</p>
                  <p className="text-muted-foreground text-sm">
                    Captura ideas rápidas y conclusiones.
                  </p>
                </div>
                <MessageSquareText className="text-primary h-5 w-5" />
              </div>
              <div className="mt-5 space-y-4">
                {notes.map((note) => (
                  <div
                    key={note.id}
                    className="border-border/70 bg-background/60 rounded-2xl border p-4 shadow-sm"
                  >
                    <p className="text-sm font-semibold">{note.title}</p>
                    <p className="text-muted-foreground mt-2 text-sm">
                      {note.text}
                    </p>
                  </div>
                ))}
                <label className="text-muted-foreground text-xs font-semibold uppercase tracking-wide">
                  Nueva nota
                </label>
                <textarea
                  className="border-input bg-background text-foreground focus-visible:border-primary/70 focus-visible:ring-primary/30 min-h-[120px] w-full rounded-2xl border px-4 py-3 text-sm shadow-sm outline-none focus-visible:ring-2"
                  placeholder="Escribe una nota importante, una conclusión o una referencia..."
                />
                <Button className="gap-2">
                  <MessageSquareText className="h-4 w-4" />
                  Guardar nota
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
