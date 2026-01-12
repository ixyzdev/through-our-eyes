import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, BookOpenCheck, Sparkles, User } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { fetchAuthorsIndex } from '@/lib/authors'

export const metadata = {
  title: 'Autores | Through Our Eyes',
  description:
    'Explora perfiles de autoras y autores destacados, con sus géneros y libros clave.'
}

export default async function AuthorsIndexPage() {
  const authors = await fetchAuthorsIndex()

  return (
    <div className="text-foreground relative min-h-screen overflow-hidden bg-gradient-to-b from-amber-50 via-white to-blue-50 antialiased dark:from-zinc-950 dark:via-zinc-900 dark:to-black">
      <div className="from-primary/10 pointer-events-none absolute inset-x-0 top-0 h-80 bg-gradient-to-b via-transparent to-transparent blur-3xl" />
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-10 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-2">
            <p className="text-primary text-sm font-semibold">Autores</p>
            <h1 className="text-3xl leading-tight font-semibold">
              Descubre a quienes inspiran tu biblioteca.
            </h1>
            <p className="text-muted-foreground text-sm">
              Perfiles destacados con sus géneros, libros clave y categorías más
              leídas.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Button asChild variant="outline" className="gap-2">
              <Link href="/library">
                <ArrowLeft className="h-4 w-4" />
                Volver a biblioteca
              </Link>
            </Button>
            <Button className="gap-2">
              <Sparkles className="h-4 w-4" />
              Curar selección
            </Button>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {authors.map((author) => (
            <Card
              key={author.profile.slug}
              className="border-border/70 bg-card/90 overflow-hidden border shadow-[0_20px_70px_-40px_rgba(15,23,42,0.45)]"
            >
              <div className="grid gap-6 p-6 sm:grid-cols-[140px_1fr] sm:items-center">
                <div className="relative overflow-hidden rounded-3xl">
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/50 via-black/10 to-transparent" />
                  <Image
                    src={author.profile.image}
                    alt={author.profile.name}
                    width={280}
                    height={320}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <div className="bg-primary/10 text-primary flex h-8 w-8 items-center justify-center rounded-xl">
                          <User className="h-4 w-4" />
                        </div>
                        <p className="text-lg font-semibold">
                          {author.profile.name}
                        </p>
                      </div>
                      <p className="text-muted-foreground mt-1 text-sm">
                        {author.profile.location}
                      </p>
                    </div>
                    <Badge variant="outline" className="text-xs uppercase">
                      {author.totalBooks} libros
                    </Badge>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {author.profile.bio}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {author.highlightedGenres.map((genre) => (
                      <Badge
                        key={`${author.profile.slug}-${genre}`}
                        className="bg-primary/10 text-primary border-primary/10"
                      >
                        {genre}
                      </Badge>
                    ))}
                  </div>

                  <div className="text-muted-foreground flex flex-wrap items-center gap-3 text-xs font-semibold uppercase">
                    <span className="inline-flex items-center gap-2">
                      <BookOpenCheck className="h-4 w-4 text-primary" />
                      {author.latestTitle}
                    </span>
                    <span>
                      {author.earliestYear} · {author.latestYear}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <Button asChild size="sm" className="gap-2">
                      <Link href={`/authors/${author.profile.slug}`}>
                        Ver perfil
                      </Link>
                    </Button>
                    <Button size="sm" variant="outline" className="gap-2">
                      Guardar en lista
                    </Button>
                  </div>
                </div>
              </div>
              <div className="border-border/70 bg-muted/40 flex flex-wrap items-center justify-between gap-3 border-t px-6 py-4 text-xs text-muted-foreground">
                <span className="font-semibold uppercase">
                  Categorías destacadas
                </span>
                <div className="flex flex-wrap gap-2">
                  {author.categories.slice(0, 3).map((category) => (
                    <Badge key={`${author.profile.slug}-${category}`} variant="outline">
                      {category}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
