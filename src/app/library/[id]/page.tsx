import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  ArrowLeft,
  BookOpen,
  BookmarkPlus,
  Clock3,
  Globe,
  MessageSquare,
  LayoutList,
  ListPlus,
  Plus,
  Share2,
  Sparkles,
  Star,
  Tag,
  User,
  Wand2
} from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import {
  fetchBookById,
  fetchBooks,
  type Book,
  type BookStatus
} from '@/lib/books'
import { fetchUserLists } from '@/lib/lists'

export const dynamic = 'force-dynamic'

const statusMeta: Record<
  BookStatus,
  { label: string; chipClass: string; description: string }
> = {
  reading: {
    label: 'Leyendo',
    chipClass: 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-200',
    description: 'Sesiones activas y progreso en marcha.'
  },
  completed: {
    label: 'Completado',
    chipClass: 'bg-neutral-900 text-neutral-50',
    description: 'Terminaste este libro; listo para repasar notas.'
  },
  queued: {
    label: 'En cola',
    chipClass: 'bg-blue-500/10 text-blue-700 dark:text-blue-200',
    description: 'Esperando turno en tu pila de lectura.'
  }
}

function DetailBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-foreground inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold shadow-sm backdrop-blur dark:bg-white/10 dark:text-white">
      {children}
    </span>
  )
}

function MoodPill({ mood }: { mood: Book['mood'] }) {
  return (
    <div className="from-primary/10 text-primary/80 ring-primary/10 dark:from-primary/10 dark:text-primary-foreground/90 inline-flex items-center gap-2 rounded-full bg-gradient-to-r via-amber-50 to-blue-50 px-3 py-2 text-sm font-semibold tracking-wide uppercase shadow-sm ring-1 dark:via-amber-900/20 dark:to-blue-900/30">
      <Sparkles className="h-4 w-4" />
      {mood}
    </div>
  )
}

export async function generateStaticParams() {
  const data = await fetchBooks()
  const ids = [...data.library, ...data.recommended].map((book) => ({
    id: book.id
  }))
  return ids
}

export default async function BookDetailPage({
  params
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const book = await fetchBookById(id)
  const lists = await fetchUserLists()

  if (!book) {
    notFound()
  }

  const status = statusMeta[book.status]

  return (
    <div className="text-foreground relative min-h-screen overflow-hidden bg-gradient-to-b from-amber-50 via-white to-blue-50 antialiased dark:from-zinc-950 dark:via-zinc-900 dark:to-black">
      <div className="from-primary/10 pointer-events-none absolute inset-x-0 top-0 h-80 bg-gradient-to-b via-transparent to-transparent blur-3xl" />
      <div className="mx-auto flex max-w-5xl flex-col gap-8 px-6 py-10 lg:px-8">
        <div className="flex items-center gap-3">
          <Link
            href="/library"
            className="text-muted-foreground hover:text-foreground inline-flex items-center gap-2 text-sm font-semibold transition"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver a la biblioteca
          </Link>
          <div className="bg-primary/70 h-2 w-2 animate-pulse rounded-full" />
          <p className="text-primary/80 text-xs font-semibold tracking-[0.25em] uppercase">
            Ficha del libro
          </p>
        </div>

        <Card className="border-border/70 bg-card/90 overflow-hidden border shadow-[0_30px_120px_-60px_rgb(15,23,42,0.5)]">
          <div className="relative grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div className="relative isolate overflow-hidden rounded-3xl">
              <div
                className={`absolute inset-0 opacity-80 blur-3xl ${book.cover}`}
              />
              <div className="relative">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-black/60 via-black/10 to-transparent" />
                <Image
                  src={book.coverImage}
                  alt={book.title}
                  width={900}
                  height={1100}
                  priority
                  className="h-full max-h-[520px] w-full rounded-3xl object-cover shadow-[0_25px_80px_-45px_rgb(0,0,0,0.65)]"
                />
                <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                  <DetailBadge>
                    <BookOpen className="h-4 w-4" />
                    {book.genre}
                  </DetailBadge>
                  <DetailBadge>{status.label}</DetailBadge>
                  <DetailBadge>{book.lastOpened}</DetailBadge>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="space-y-3">
                <MoodPill mood={book.mood} />
                <h1 className="text-3xl leading-tight font-semibold">
                  {book.title}
                </h1>
                <p className="text-muted-foreground text-lg">
                  {book.author} · {book.genre}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {book.synopsis}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {book.professionalDescription}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {book.categories.map((category) => (
                  <Badge
                    key={category}
                    className="bg-primary/10 text-primary border-primary/10"
                  >
                    {category}
                  </Badge>
                ))}
                {book.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="gap-1">
                    <Tag className="h-3 w-3" />
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <Card className="bg-gradient-to-br from-emerald-50 to-white/60 p-4 shadow-inner dark:from-emerald-900/30 dark:to-white/5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold tracking-wide text-emerald-700 uppercase dark:text-emerald-200">
                        Estado
                      </p>
                      <p className="text-lg font-semibold">{status.label}</p>
                    </div>
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${status.chipClass}`}
                    >
                      {status.description}
                    </span>
                  </div>
                </Card>
                <Card className="bg-gradient-to-br from-blue-50 to-white/60 p-4 shadow-inner dark:from-blue-900/30 dark:to-white/5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold tracking-wide text-blue-700 uppercase dark:text-blue-200">
                        Avance
                      </p>
                      <p className="text-lg font-semibold">
                        {book.progress}% completado
                      </p>
                    </div>
                    <div className="bg-muted h-2 w-24 overflow-hidden rounded-full">
                      <div
                        className="bg-primary h-full rounded-full transition-all"
                        style={{ width: `${book.progress}%` }}
                      />
                    </div>
                  </div>
                </Card>
                <Card className="bg-gradient-to-br from-amber-50 to-white/60 p-4 shadow-inner dark:from-amber-900/30 dark:to-white/5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold tracking-wide text-amber-700 uppercase dark:text-amber-200">
                        Última sesión
                      </p>
                      <p className="text-lg font-semibold">{book.lastOpened}</p>
                    </div>
                    <Clock3 className="h-5 w-5 text-amber-500" />
                  </div>
                </Card>
                <Card className="bg-gradient-to-br from-indigo-50 to-white/60 p-4 shadow-inner dark:from-indigo-900/30 dark:to-white/5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold tracking-wide text-indigo-700 uppercase dark:text-indigo-200">
                        Ánimo de lectura
                      </p>
                      <p className="text-lg font-semibold">{book.mood}</p>
                    </div>
                    <Wand2 className="h-5 w-5 text-indigo-500" />
                  </div>
                </Card>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button asChild className="gap-2">
                  <Link href={`/library/${book.id}/read`}>
                    <Sparkles className="h-4 w-4" />
                    Abrir siguiente sesión
                  </Link>
                </Button>
                <Button variant="outline" className="gap-2">
                  <BookmarkPlus className="h-4 w-4" />
                  Añadir a ritual
                </Button>
                <Button variant="secondary" className="gap-2">
                  <ListPlus className="h-4 w-4" />
                  Añadir a mi lista
                </Button>
                <Button variant="ghost" className="gap-2">
                  <Share2 className="h-4 w-4" />
                  Compartir
                </Button>
              </div>
            </div>
          </div>
        </Card>

        <div className="grid gap-4 lg:grid-cols-[1.4fr_1fr]">
          <Card className="border-border/60 bg-card/80 relative overflow-hidden p-6">
            <div
              className={`absolute inset-0 opacity-40 blur-3xl ${book.cover}`}
            />
            <div className="relative space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 text-primary flex h-11 w-11 items-center justify-center rounded-2xl">
                  <BookOpen className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-lg font-semibold">Bitácora relámpago</p>
                  <p className="text-muted-foreground text-sm">
                    Snapshot con todos los datos clave de este libro.
                  </p>
                </div>
              </div>
              <div className="grid gap-3 md:grid-cols-2">
                <div className="border-border/70 bg-background/60 rounded-2xl border p-4 shadow-sm">
                  <p className="text-muted-foreground text-xs font-semibold tracking-wide uppercase">
                    Colecciones
                  </p>
                  <p className="text-foreground/80 mt-2 text-sm leading-relaxed">
                    {book.categories.join(' · ')}
                  </p>
                </div>
                <div className="border-border/70 bg-background/60 rounded-2xl border p-4 shadow-sm">
                  <p className="text-muted-foreground text-xs font-semibold tracking-wide uppercase">
                    Etiquetas activas
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {book.tags.map((tag) => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="border-border/70 bg-background/60 rounded-2xl border p-4 shadow-sm">
                  <p className="text-muted-foreground text-xs font-semibold tracking-wide uppercase">
                    Progreso & ritmo
                  </p>
                  <div className="mt-3 space-y-2">
                    <div className="bg-muted h-2 w-full overflow-hidden rounded-full">
                      <div
                        className="bg-primary h-full rounded-full"
                        style={{ width: `${book.progress}%` }}
                      />
                    </div>
                    <p className="text-muted-foreground text-sm">
                      Mantén sesiones cortas y consistentes para cerrar los
                      últimos capítulos.
                    </p>
                  </div>
                </div>
                <div className="border-border/70 bg-background/60 rounded-2xl border p-4 shadow-sm">
                  <p className="text-muted-foreground text-xs font-semibold tracking-wide uppercase">
                    Último movimiento
                  </p>
                  <p className="text-foreground mt-2 text-sm font-semibold">
                    {book.lastOpened}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Reactiva el foco con un sprint de 25 minutos y refresca tus
                    subrayados.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="border-border/70 bg-card/90 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-lg font-semibold">Ficha editorial</p>
                <p className="text-muted-foreground text-sm">
                  Información bibliográfica y detalles de publicación.
                </p>
              </div>
              <BookOpen className="text-primary h-5 w-5" />
            </div>
            <div className="mt-5 grid gap-3 text-sm">
              <div className="flex flex-wrap items-center justify-between gap-2 rounded-2xl border border-white/10 bg-background/60 px-4 py-3">
                <span className="text-muted-foreground text-xs font-semibold uppercase">
                  Autor
                </span>
                <span className="font-semibold">{book.author}</span>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-2 rounded-2xl border border-white/10 bg-background/60 px-4 py-3">
                <span className="text-muted-foreground text-xs font-semibold uppercase">
                  Traductor
                </span>
                <span className="font-semibold">{book.translator}</span>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-2 rounded-2xl border border-white/10 bg-background/60 px-4 py-3">
                <span className="text-muted-foreground text-xs font-semibold uppercase">
                  Editorial
                </span>
                <span className="font-semibold">{book.publisher}</span>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-2 rounded-2xl border border-white/10 bg-background/60 px-4 py-3">
                <span className="text-muted-foreground text-xs font-semibold uppercase">
                  Año
                </span>
                <span className="font-semibold">{book.publicationYear}</span>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-2 rounded-2xl border border-white/10 bg-background/60 px-4 py-3">
                <span className="text-muted-foreground text-xs font-semibold uppercase">
                  Idioma
                </span>
                <span className="font-semibold">{book.language}</span>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-2 rounded-2xl border border-white/10 bg-background/60 px-4 py-3">
                <span className="text-muted-foreground text-xs font-semibold uppercase">
                  Páginas
                </span>
                <span className="font-semibold">{book.pages}</span>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-2 rounded-2xl border border-white/10 bg-background/60 px-4 py-3">
                <span className="text-muted-foreground text-xs font-semibold uppercase">
                  Edición
                </span>
                <span className="font-semibold">{book.edition}</span>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-2 rounded-2xl border border-white/10 bg-background/60 px-4 py-3">
                <span className="text-muted-foreground text-xs font-semibold uppercase">
                  ISBN
                </span>
                <span className="font-semibold">{book.isbn}</span>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              <Button asChild className="gap-2">
                <Link href={book.purchaseLink} target="_blank" rel="noreferrer">
                  <Globe className="h-4 w-4" />
                  Comprar en Busca Libre
                </Link>
              </Button>
              <Button variant="outline" className="gap-2">
                <BookmarkPlus className="h-4 w-4" />
                Guardar como favorito
              </Button>
            </div>
          </Card>
        </div>

        <div className="grid gap-4 lg:grid-cols-[1.5fr_1fr]">
          <Card className="border-border/70 bg-card/90 p-6">
            <div className="flex items-center justify-between gap-4">
              <div className="space-y-1">
                <p className="text-lg font-semibold">Mis listas</p>
                <p className="text-muted-foreground text-sm">
                  Selecciona dónde guardar este libro y revisa tus colecciones
                  activas.
                </p>
              </div>
              <span className="text-primary/80 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold">
                {lists.length} listas
              </span>
            </div>
            <div className="mt-5 grid gap-3">
              {lists.map((list) => (
                <div
                  key={list.id}
                  className="border-border/70 bg-background/60 flex flex-wrap items-center justify-between gap-4 rounded-2xl border p-4 shadow-sm"
                >
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="text-base font-semibold">{list.name}</p>
                      <span className="text-muted-foreground text-xs font-semibold uppercase">
                        {list.visibility}
                      </span>
                    </div>
                    <p className="text-muted-foreground mt-1 text-sm">
                      {list.description}
                    </p>
                    <div className="text-muted-foreground mt-3 flex flex-wrap gap-3 text-xs font-semibold uppercase">
                      <span>{list.bookCount} libros</span>
                      <span>{list.updatedAt}</span>
                    </div>
                  </div>
                  <Button variant="outline" className="gap-2">
                    <Plus className="h-4 w-4" />
                    Añadir aquí
                  </Button>
                </div>
              ))}
            </div>
          </Card>

          <Card className="border-border/70 bg-card/90 p-6">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-lg font-semibold">Sección del autor</p>
                <p className="text-muted-foreground text-sm">
                  Perfil breve del autor y sus líneas temáticas.
                </p>
              </div>
              <User className="text-primary h-5 w-5" />
            </div>
            <p className="text-muted-foreground mt-4 text-sm leading-relaxed">
              {book.authorSection}
            </p>
            <div className="mt-6 space-y-3">
              <div className="border-border/70 bg-background/60 rounded-2xl border p-4">
                <p className="text-muted-foreground text-xs font-semibold tracking-wide uppercase">
                  Categorías del autor
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {book.categories.map((category) => (
                    <Badge
                      key={`author-${category}`}
                      className="bg-primary/10 text-primary border-primary/10"
                    >
                      {category}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <Button className="gap-2">
                  <Plus className="h-4 w-4" />
                  Crear nueva lista
                </Button>
                <Button variant="outline" className="gap-2">
                  <BookmarkPlus className="h-4 w-4" />
                  Gestionar mis listas
                </Button>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid gap-4 lg:grid-cols-[1.2fr_1fr]">
          <Card className="border-border/70 bg-card/90 p-6">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-lg font-semibold">Libros similares</p>
                <p className="text-muted-foreground text-sm">
                  Títulos recomendados con temática o estilo afín.
                </p>
              </div>
              <Sparkles className="text-primary h-5 w-5" />
            </div>
            <div className="mt-5 grid gap-3">
              {book.similarBooks.map((similar) => (
                <div
                  key={`${similar.title}-${similar.author}`}
                  className="border-border/70 bg-background/60 flex flex-wrap items-center justify-between gap-4 rounded-2xl border p-4 shadow-sm"
                >
                  <div>
                    <p className="text-base font-semibold">{similar.title}</p>
                    <p className="text-muted-foreground text-sm">
                      {similar.author}
                    </p>
                  </div>
                  <Button variant="outline" className="gap-2">
                    <BookOpen className="h-4 w-4" />
                    Ver ficha
                  </Button>
                </div>
              ))}
            </div>
          </Card>

          <Card className="border-border/70 bg-card/90 p-6">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-lg font-semibold">Calificaciones</p>
                <p className="text-muted-foreground text-sm">
                  {book.ratings.total} reseñas · promedio {book.ratings.average}
                </p>
              </div>
              <Star className="text-primary h-5 w-5" />
            </div>
            <div className="mt-4 space-y-3">
              {book.ratings.breakdown.map((item) => (
                <div key={item.label} className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-semibold uppercase text-muted-foreground">
                    <span>{item.label}</span>
                    <span>{item.count}</span>
                  </div>
                  <div className="bg-muted h-2 w-full overflow-hidden rounded-full">
                    <div
                      className="bg-primary h-full rounded-full"
                      style={{
                        width: `${Math.round(
                          (item.count / book.ratings.total) * 100
                        )}%`
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <Card className="border-border/70 bg-card/90 p-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-lg font-semibold">Comentarios</p>
              <p className="text-muted-foreground text-sm">
                Opiniones recientes de lectores.
              </p>
            </div>
            <MessageSquare className="text-primary h-5 w-5" />
          </div>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {book.ratings.comments.map((comment) => (
              <div
                key={comment.id}
                className="border-border/70 bg-background/60 rounded-2xl border p-4 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold">{comment.name}</p>
                  <span className="text-muted-foreground text-xs">
                    {comment.date}
                  </span>
                </div>
                <div className="mt-2 flex items-center gap-1 text-amber-500">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={`${comment.id}-star-${index}`}
                      className={`h-4 w-4 ${
                        index < comment.rating
                          ? 'fill-amber-400'
                          : 'fill-transparent text-muted-foreground/40'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
                  {comment.comment}
                </p>
              </div>
            ))}
          </div>
        </Card>

        <Card className="border-border/70 bg-card/90 p-6">
          <div className="flex items-center justify-between gap-4">
            <div className="space-y-1">
              <p className="text-lg font-semibold">Ritual sugerido</p>
              <p className="text-muted-foreground text-sm">
                Mezcla de energía juvenil y estructura ligera.
              </p>
            </div>
            <Wand2 className="text-primary h-5 w-5" />
          </div>
          <div className="text-foreground/90 mt-4 space-y-3 text-sm">
            <div className="flex items-start gap-3">
              <span className="bg-primary/10 text-primary mt-1 inline-flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold">
                1
              </span>
              <p>
                Calienta con una lectura de 5 minutos para recordar el tono{' '}
                <strong>{book.mood.toLowerCase()}</strong>.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-primary/10 text-primary mt-1 inline-flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold">
                2
              </span>
              <p>
                Activa etiquetas como{' '}
                <strong>{book.tags.slice(0, 2).join(' · ')}</strong> y enfoca las
                notas.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-primary/10 text-primary mt-1 inline-flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold">
                3
              </span>
              <p>
                Programa la siguiente sesión con{' '}
                <strong>{book.genre.toLowerCase()}</strong> en tu lista rápida y
                marca el estado si cambió.
              </p>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            <Button className="gap-2">
              <Wand2 className="h-4 w-4" />
              Lanzar ritual animado
            </Button>
            <Button variant="outline" className="gap-2">
              <BookmarkPlus className="h-4 w-4" />
              Guardar como favorito
            </Button>
          </div>
        </Card>
      </div>
    </div>
  )
}
