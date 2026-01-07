'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useMemo, useState } from 'react'
import {
  ArrowLeft,
  BookOpen,
  LayoutList,
  Share2,
  Sparkles,
  User
} from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import type { AuthorDetail } from '@/lib/authors'

const sortLabels = {
  relevance: 'Relevancia',
  publication: 'Orden de salida'
} as const

type SortOption = keyof typeof sortLabels

type AuthorDetailProps = {
  author: AuthorDetail
}

export default function AuthorDetail({ author }: AuthorDetailProps) {
  const [sort, setSort] = useState<SortOption>('relevance')
  const [activeSaga, setActiveSaga] = useState(author.sagas[0]?.id ?? '')

  const sortedBooks = useMemo(() => {
    if (sort === 'publication') {
      return [...author.books].sort(
        (a, b) => a.publicationYear - b.publicationYear
      )
    }

    return author.books
  }, [author.books, sort])

  const saga = author.sagas.find((item) => item.id === activeSaga)

  return (
    <div className="text-foreground relative min-h-screen overflow-hidden bg-gradient-to-b from-amber-50 via-white to-blue-50 antialiased dark:from-zinc-950 dark:via-zinc-900 dark:to-black">
      <div className="from-primary/10 pointer-events-none absolute inset-x-0 top-0 h-80 bg-gradient-to-b via-transparent to-transparent blur-3xl" />
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-10 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/library"
            className="text-muted-foreground hover:text-foreground inline-flex items-center gap-2 text-sm font-semibold transition"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver a la biblioteca
          </Link>
          <Button variant="outline" className="gap-2">
            <Share2 className="h-4 w-4" />
            Compartir autor
          </Button>
        </div>

        <Card className="border-border/70 bg-card/90 overflow-hidden border shadow-[0_30px_120px_-60px_rgb(15,23,42,0.5)]">
          <div className="grid gap-8 p-6 lg:grid-cols-[1.1fr_1fr] lg:items-center">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 text-primary flex h-11 w-11 items-center justify-center rounded-2xl">
                  <User className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-primary/80 text-xs font-semibold tracking-[0.3em] uppercase">
                    Perfil del autor
                  </p>
                  <h1 className="text-3xl font-semibold leading-tight">
                    {author.profile.name}
                  </h1>
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {author.profile.bio}
              </p>
              <div className="text-muted-foreground flex flex-wrap items-center gap-3 text-sm">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 font-semibold shadow-sm dark:bg-white/10">
                  {author.profile.location}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 font-semibold shadow-sm dark:bg-white/10">
                  {author.totalBooks} libros publicados
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 font-semibold shadow-sm dark:bg-white/10">
                  {author.earliestYear} · {author.latestYear}
                </span>
              </div>
              <p className="text-foreground/90 text-sm italic">
                {author.profile.quote}
              </p>
              <div className="flex flex-wrap gap-2">
                {author.categories.map((category) => (
                  <Badge
                    key={category}
                    className="bg-primary/10 text-primary border-primary/10"
                  >
                    {category}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="relative isolate">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-black/50 via-black/10 to-transparent" />
              <Image
                src={author.profile.image}
                alt={author.profile.name}
                width={900}
                height={900}
                className="h-full max-h-[420px] w-full rounded-3xl object-cover shadow-[0_25px_80px_-45px_rgb(0,0,0,0.65)]"
              />
            </div>
          </div>
        </Card>

        <Card className="border-border/70 bg-card/90 p-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-lg font-semibold">Libros del autor</p>
              <p className="text-muted-foreground text-sm">
                Lista completa con ordenación por relevancia o salida.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-muted-foreground text-xs font-semibold uppercase">
                Ordenar por
              </span>
              {Object.entries(sortLabels).map(([value, label]) => (
                <Button
                  key={value}
                  variant={sort === value ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSort(value as SortOption)}
                >
                  {label}
                </Button>
              ))}
            </div>
          </div>
          <div
            id="all-books"
            className="mt-5 grid gap-4 md:grid-cols-2"
          >
            {sortedBooks.map((book, index) => (
              <div
                key={book.id}
                className="border-border/70 bg-background/60 flex gap-4 rounded-2xl border p-4 shadow-sm"
              >
                <div className="relative h-24 w-20 overflow-hidden rounded-2xl">
                  <Image
                    src={book.coverImage}
                    alt={book.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase text-muted-foreground">
                      {sort === 'publication' ? index + 1 : book.publicationYear}
                    </p>
                    <p className="text-base font-semibold">{book.title}</p>
                    <p className="text-muted-foreground text-sm">
                      {book.genre} · {book.publicationYear}
                    </p>
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-muted-foreground line-clamp-2 text-xs">
                      {book.synopsis}
                    </p>
                    <Button size="sm" variant="outline" className="gap-2">
                      <BookOpen className="h-4 w-4" />
                      Ver ficha
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="border-border/70 bg-card/90 p-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-lg font-semibold">Sagas destacadas</p>
              <p className="text-muted-foreground text-sm">
                Elige una saga para explorar una selección breve.
              </p>
            </div>
            <Button asChild variant="outline" className="gap-2">
              <Link href="#all-books">
                <LayoutList className="h-4 w-4" />
                Ver todos los libros
              </Link>
            </Button>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {author.sagas.map((sagaOption) => (
              <Button
                key={sagaOption.id}
                size="sm"
                variant={activeSaga === sagaOption.id ? 'default' : 'outline'}
                onClick={() => setActiveSaga(sagaOption.id)}
              >
                {sagaOption.name}
              </Button>
            ))}
          </div>

          {saga && (
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <Sparkles className="text-primary h-4 w-4" />
                <p className="font-semibold">{saga.description}</p>
              </div>
              <div className="flex gap-4 overflow-x-auto pb-4">
                {saga.items.map((item) => (
                  <div
                    key={`${saga.id}-${item.title}`}
                    className="border-border/70 bg-background/60 w-64 flex-none rounded-2xl border p-4 shadow-sm"
                  >
                    <div className="relative h-36 w-full overflow-hidden rounded-2xl">
                      <Image
                        src={item.coverImage}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="mt-3 space-y-1">
                      <p className="text-xs font-semibold uppercase text-muted-foreground">
                        {item.year}
                      </p>
                      <p className="text-base font-semibold">{item.title}</p>
                      <p className="text-muted-foreground text-xs">
                        {item.note}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </Card>
      </div>
    </div>
  )
}
