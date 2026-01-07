'use client'

import Image from 'next/image'
import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import type { LucideIcon } from 'lucide-react'
import {
  BookOpenCheck,
  Filter,
  Loader2,
  PanelRight,
  Sparkles,
  Wand2
} from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import type { BookStatus } from '@/lib/books'
import { fetchBooks, type Book, type BooksData } from '@/lib/books'

const statusLabels: Record<BookStatus | 'all', string> = {
  all: 'Todos',
  reading: 'Leyendo',
  completed: 'Completados',
  queued: 'En cola'
}

const statusStyles: Record<BookStatus, string> = {
  reading: 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-200',
  completed: 'bg-neutral-800 text-neutral-50',
  queued: 'bg-blue-500/10 text-blue-700 dark:text-blue-200'
}

type FilterItem = {
  id: BookStatus | 'all'
  icon: LucideIcon
}

const filters: FilterItem[] = [
  { id: 'all', icon: PanelRight },
  { id: 'reading', icon: BookOpenCheck },
  { id: 'completed', icon: Sparkles },
  { id: 'queued', icon: Wand2 }
]

type CardVariant = 'default' | 'recommendation'

function BookCard({
  book,
  variant = 'default'
}: {
  book: Book
  variant?: CardVariant
}) {
  const isRecommendation = variant === 'recommendation'
  const router = useRouter()
  const aspect = isRecommendation ? 'aspect-[3/4]' : 'aspect-[2/3]'
  const cardStyle = isRecommendation
    ? 'bg-transparent border-0 p-0 shadow-none'
    : 'border-border/70 bg-card/90 p-4 shadow-sm'

  return (
    <Card
      role="button"
      tabIndex={0}
      onClick={() => router.push(`/library/${book.id}`)}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault()
          router.push(`/library/${book.id}`)
        }
      }}
      className={`group relative overflow-hidden rounded-3xl transition duration-300 hover:-translate-y-1 hover:shadow-[0_25px_70px_-35px_rgba(15,23,42,0.45)] ${cardStyle}`}
    >
      <div
        className={`relative ${aspect} overflow-hidden rounded-3xl shadow-[0_20px_40px_-28px_rgb(15,23,42,0.35)]`}
      >
        <div
          className={`absolute inset-0 bg-gradient-to-br ${book.cover} opacity-70 transition duration-500 group-hover:opacity-90`}
        />
        <Image
          src={book.coverImage}
          alt={book.title}
          fill
          className="object-cover transition duration-700 group-hover:scale-[1.04]"
          sizes="(min-width: 1024px) 320px, 100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent opacity-85 transition duration-500 group-hover:opacity-95" />

        <div className="absolute top-3 right-3 left-3 flex flex-wrap gap-2">
          {book.categories.map((category) => (
            <Badge
              key={category}
              className="text-primary bg-white/85 shadow"
              variant="outline"
            >
              {category}
            </Badge>
          ))}
        </div>

        <div className="absolute inset-x-3 bottom-3 flex items-center justify-between">
          <Badge className="text-primary bg-white/85 shadow" variant="outline">
            {book.genre}
          </Badge>
          <span className="rounded-full bg-black/65 px-3 py-1 text-[11px] font-semibold tracking-wide text-white uppercase">
            {book.lastOpened}
          </span>
        </div>

        {!isRecommendation ? (
          <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 transition duration-300 group-hover:opacity-100">
            <Link
              href={`/library/${book.id}`}
              className="text-primary rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold tracking-wide uppercase transition hover:bg-white"
              onClick={(event) => event.stopPropagation()}
            >
              Ver ficha
            </Link>
            <button
              className="rounded-full bg-black/65 px-3 py-1 text-[11px] font-semibold tracking-wide text-white uppercase transition hover:bg-black/80"
              onClick={(event) => event.stopPropagation()}
            >
              Añadir a lista
            </button>
          </div>
        ) : null}
      </div>

      <div className="relative z-20 mt-4 space-y-1">
        <p className="text-lg leading-tight font-semibold">{book.title}</p>
        <p className="text-muted-foreground text-sm">{book.author}</p>
      </div>
      <p className="text-primary/80 relative z-20 mt-2 text-sm">{book.mood}</p>
      <div className="relative z-20 mt-3 flex flex-wrap gap-2">
        {book.tags.map((tag) => (
          <Badge key={tag} variant="outline">
            {tag}
          </Badge>
        ))}
      </div>

      <div className="text-muted-foreground relative z-20 mt-4 flex items-center justify-between text-xs">
        <span
          className={`rounded-full px-3 py-1 font-semibold ${statusStyles[book.status]}`}
        >
          {statusLabels[book.status]}
        </span>
        <span>{book.progress}%</span>
      </div>
      <div
        className={`bg-muted relative z-20 mt-2 h-2 w-full overflow-hidden rounded-full ${isRecommendation ? 'opacity-75' : ''}`}
      >
        <div
          className="bg-primary h-full rounded-full transition-all"
          style={{ width: `${book.progress}%` }}
        />
      </div>
    </Card>
  )
}

export default function LibraryPage() {
  const [data, setData] = useState<BooksData | null>(null)
  const [status, setStatus] = useState<FilterItem['id']>('all')
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')

  useEffect(() => {
    let mounted = true
    fetchBooks().then((payload) => {
      if (!mounted) return
      setData(payload)
      setIsLoading(false)
    })
    return () => {
      mounted = false
    }
  }, [])

  const filteredLibrary = useMemo(() => {
    if (!data?.library) return []
    const byStatus =
      status === 'all'
        ? data.library
        : data.library.filter((book) => book.status === status)
    if (!query.trim()) return byStatus
    return byStatus.filter((book) => {
      const haystack =
        `${book.title} ${book.author} ${book.genre} ${book.tags.join(' ')}`.toLowerCase()
      return haystack.includes(query.toLowerCase())
    })
  }, [data, status, query])

  const filteredRecommended = useMemo(() => {
    if (!data?.recommended) return []
    if (!query.trim()) return data.recommended
    return data.recommended.filter((book) => {
      const haystack =
        `${book.title} ${book.author} ${book.genre} ${book.tags.join(' ')}`.toLowerCase()
      return haystack.includes(query.toLowerCase())
    })
  }, [data, query])

  const skeletons = useMemo<null[]>(
    () => Array.from({ length: 4 }, () => null),
    []
  )

  return (
    <div className="text-foreground relative min-h-screen overflow-hidden bg-gradient-to-b from-amber-50 via-white to-blue-50 antialiased dark:from-zinc-950 dark:via-zinc-900 dark:to-black">
      <div className="from-primary/15 pointer-events-none absolute inset-x-0 top-0 h-72 bg-gradient-to-b via-transparent to-transparent blur-3xl" />
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-10 lg:px-8">
        <header className="border-border/70 bg-card/90 flex flex-col gap-4 rounded-3xl border p-6 shadow-[0_20px_80px_-40px_rgb(15,23,42,0.35)] backdrop-blur">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="space-y-2">
              <p className="text-primary text-sm font-semibold">Biblioteca</p>
              <h1 className="text-3xl leading-tight font-semibold">
                Todos tus libros, organizados y recomendados.
              </h1>
              <p className="text-muted-foreground text-sm">
                Filtra por estado, busca por título o autor y revisa lecturas
                sugeridas según tu ánimo.
              </p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="gap-2">
                <Filter className="h-4 w-4" />
                Filtros rápidos
              </Button>
              <Button asChild className="gap-2">
                <Link href="/library/upload">
                  <Sparkles className="h-4 w-4" />
                  Añadir libro
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setStatus(filter.id)}
                  className={`flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition ${
                    status === filter.id
                      ? 'border-primary bg-primary/10 text-primary'
                      : 'border-border/70 text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <filter.icon className="h-4 w-4" />
                  {statusLabels[filter.id]}
                </button>
              ))}
            </div>
            <div className="bg-muted/60 ring-border/60 focus-within:ring-primary/60 flex w-full max-w-md items-center gap-2 rounded-full px-3 py-2 ring-1">
              <Input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Buscar por título, autor o etiqueta"
                className="border-0 bg-transparent shadow-none focus-visible:ring-0"
              />
            </div>
          </div>
        </header>

        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-lg font-semibold">Recomendados para ti</p>
              <p className="text-muted-foreground text-sm">
                Basados en tus últimos subrayados y sesiones de enfoque.
              </p>
            </div>
            <Button variant="outline" size="sm">
              Ver más
            </Button>
          </div>
          <div className="grid gap-4 md:grid-cols-3 xl:grid-cols-4">
            {(isLoading ? skeletons : filteredRecommended).map((book, index) =>
              book ? (
                <BookCard key={book.id} book={book} variant="recommendation" />
              ) : (
                <Card
                  key={`rec-skeleton-${index}`}
                  className="bg-muted/30 border-0 p-4 shadow-none"
                >
                  <div className="space-y-3">
                    <div className="bg-muted-foreground/10 h-6 w-40 rounded-lg" />
                    <div className="bg-muted-foreground/10 h-4 w-32 rounded-lg" />
                    <div className="bg-muted-foreground/10 h-3 w-full rounded-lg" />
                  </div>
                </Card>
              )
            )}
          </div>
        </section>

        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-lg font-semibold">Mi biblioteca</p>
              <p className="text-muted-foreground text-sm">
                Revisa tu progreso, estados y etiquetas clave.
              </p>
            </div>
            <div className="text-muted-foreground text-sm">
              {isLoading
                ? 'Sincronizando...'
                : `${filteredLibrary.length} libros`}
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {(isLoading ? skeletons : filteredLibrary).map((book, index) =>
              book ? (
                <BookCard key={book.id} book={book} />
              ) : (
                <Card
                  key={`lib-skeleton-${index}`}
                  className="border-border/70 bg-muted/40 p-4"
                >
                  <div className="space-y-3">
                    <div className="bg-muted-foreground/10 h-6 w-32 rounded-lg" />
                    <div className="bg-muted-foreground/10 h-4 w-24 rounded-lg" />
                    <div className="bg-muted-foreground/10 h-3 w-full rounded-lg" />
                    <div className="bg-muted-foreground/10 h-2 w-full rounded-full" />
                  </div>
                </Card>
              )
            )}
          </div>
        </section>

        {isLoading ? (
          <div className="border-border/60 bg-muted/30 text-muted-foreground flex items-center gap-2 rounded-2xl border border-dashed p-4 text-sm">
            <Loader2 className="h-4 w-4 animate-spin" />
            Sincronizando biblioteca...
          </div>
        ) : (
          <Card className="border-border/70 bg-card/90 flex items-center justify-between p-5 shadow-sm backdrop-blur">
            <div>
              <p className="text-lg font-semibold">Biblioteca actualizada</p>
              <p className="text-muted-foreground text-sm">
                Tus recomendaciones se ajustarán a medida que avances en tus
                lecturas.
              </p>
            </div>
            <Button variant="outline" className="gap-2">
              <Sparkles className="h-4 w-4" />
              Afinar recomendaciones
            </Button>
          </Card>
        )}
      </div>
    </div>
  )
}
