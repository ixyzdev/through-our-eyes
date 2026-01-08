'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useEffect, useMemo, useState } from 'react'
import {
  ArrowDown,
  ArrowLeft,
  ArrowUp,
  BookOpen,
  BookmarkPlus,
  GripVertical,
  Plus,
  Search,
  Tag,
  Trash2,
  X
} from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { fetchBooks, type Book } from '@/lib/books'
import { fetchUserLists, type ListVisibility, type UserList } from '@/lib/lists'

type ListFormState = {
  name: string
  description: string
  visibility: ListVisibility
  tags: string[]
}

const defaultListState: ListFormState = {
  name: '',
  description: '',
  visibility: 'privada',
  tags: []
}

export default function ListDetailPage() {
  const params = useParams<{ id: string }>()
  const listId = Array.isArray(params.id) ? params.id[0] : params.id
  const [formState, setFormState] = useState<ListFormState>(defaultListState)
  const [tagInput, setTagInput] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  const [allBooks, setAllBooks] = useState<Book[]>([])
  const [selectedBooks, setSelectedBooks] = useState<Book[]>([])
  const [listMeta, setListMeta] = useState<UserList | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  const isNewList = listId === 'new'

  useEffect(() => {
    let mounted = true
    if (!listId) return
    Promise.all([fetchUserLists(), fetchBooks()]).then(([lists, books]) => {
      if (!mounted) return
      const targetList = lists.find((list) => list.id === listId) || null
      const availableBooks = [...books.library, ...books.recommended]
      setAllBooks(availableBooks)

      if (targetList) {
        setFormState({
          name: targetList.name,
          description: targetList.description,
          visibility: targetList.visibility,
          tags: ['rituales', 'mensual', 'subrayados']
        })
        setSelectedBooks(availableBooks.slice(0, 4))
      } else {
        setFormState(defaultListState)
        setSelectedBooks(isNewList ? [] : availableBooks.slice(0, 2))
      }
      setListMeta(targetList)
      setIsLoading(false)
    })
    return () => {
      mounted = false
    }
  }, [listId, isNewList])

  const filteredBooks = useMemo(() => {
    if (!allBooks.length) return []
    const selectedIds = new Set(selectedBooks.map((book) => book.id))
    const trimmedQuery = searchQuery.trim().toLowerCase()
    return allBooks.filter((book) => {
      if (selectedIds.has(book.id)) return false
      if (!trimmedQuery) return true
      const haystack = `${book.title} ${book.author} ${book.genre} ${book.tags.join(' ')}`.toLowerCase()
      return haystack.includes(trimmedQuery)
    })
  }, [allBooks, searchQuery, selectedBooks])

  const updateForm = (next: Partial<ListFormState>) => {
    setFormState((prev) => ({ ...prev, ...next }))
  }

  const addTag = () => {
    const nextTag = tagInput.trim()
    if (!nextTag) return
    if (formState.tags.some((tag) => tag.toLowerCase() === nextTag.toLowerCase())) {
      setTagInput('')
      return
    }
    updateForm({ tags: [...formState.tags, nextTag] })
    setTagInput('')
  }

  const removeTag = (tag: string) => {
    updateForm({ tags: formState.tags.filter((item) => item !== tag) })
  }

  const addBook = (book: Book) => {
    setSelectedBooks((prev) => [...prev, book])
  }

  const removeBook = (bookId: string) => {
    setSelectedBooks((prev) => prev.filter((book) => book.id !== bookId))
  }

  const moveBook = (index: number, direction: 'up' | 'down') => {
    setSelectedBooks((prev) => {
      const next = [...prev]
      const targetIndex = direction === 'up' ? index - 1 : index + 1
      if (targetIndex < 0 || targetIndex >= next.length) return prev
      const [moved] = next.splice(index, 1)
      next.splice(targetIndex, 0, moved)
      return next
    })
  }

  return (
    <div className="text-foreground relative min-h-screen overflow-hidden bg-gradient-to-b from-amber-50 via-white to-blue-50 antialiased dark:from-zinc-950 dark:via-zinc-900 dark:to-black">
      <div className="from-primary/10 pointer-events-none absolute inset-x-0 top-0 h-72 bg-gradient-to-b via-transparent to-transparent blur-3xl" />
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-10 lg:px-8">
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
            {isNewList ? 'Nueva lista' : 'Gestionar lista'}
          </p>
        </div>

        <header className="border-border/70 bg-card/90 rounded-3xl border p-6 shadow-[0_20px_80px_-40px_rgb(15,23,42,0.35)] backdrop-blur">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="space-y-2">
              <p className="text-primary text-sm font-semibold">Detalles</p>
              <h1 className="text-2xl font-semibold">
                {formState.name || 'Nueva lista personalizada'}
              </h1>
              <p className="text-muted-foreground text-sm">
                Edita el nombre, descripción y visibilidad. Agrega libros y
                ordénalos manualmente.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" className="gap-2">
                <BookmarkPlus className="h-4 w-4" />
                Guardar cambios
              </Button>
              <Button
                variant="outline"
                className="gap-2 border-red-200 text-red-600 hover:border-red-300 hover:bg-red-50 dark:border-red-500/40 dark:text-red-200 dark:hover:bg-red-500/10"
              >
                <Trash2 className="h-4 w-4" />
                Eliminar lista
              </Button>
            </div>
          </div>
          {listMeta ? (
            <div className="mt-4 flex flex-wrap gap-3 text-xs font-semibold uppercase text-muted-foreground">
              <span>{listMeta.bookCount} libros</span>
              <span>{listMeta.updatedAt}</span>
              <span>{listMeta.visibility}</span>
            </div>
          ) : null}
        </header>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Card className="border-border/70 bg-card/90 p-6">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-lg font-semibold">Información general</p>
                <p className="text-muted-foreground text-sm">
                  Ajusta los datos base de la lista y define su privacidad.
                </p>
              </div>
              <Tag className="text-primary h-5 w-5" />
            </div>
            <div className="mt-6 grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="list-name">Nombre</Label>
                <Input
                  id="list-name"
                  value={formState.name}
                  placeholder="Ej. Lecturas para el club"
                  onChange={(event) =>
                    updateForm({ name: event.target.value })
                  }
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="list-description">Descripción</Label>
                <textarea
                  id="list-description"
                  className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring min-h-[120px] w-full rounded-md border px-3 py-2 text-sm shadow-sm focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
                  value={formState.description}
                  placeholder="Describe el propósito de esta lista."
                  onChange={(event) =>
                    updateForm({ description: event.target.value })
                  }
                />
              </div>
              <div className="grid gap-2">
                <Label>Visibilidad</Label>
                <div className="flex flex-wrap gap-3">
                  <label className="border-border/70 bg-background/70 flex cursor-pointer items-center gap-2 rounded-full border px-3 py-2 text-sm font-semibold">
                    <input
                      type="radio"
                      name="visibility"
                      checked={formState.visibility === 'privada'}
                      onChange={() => updateForm({ visibility: 'privada' })}
                    />
                    Privada
                  </label>
                  <label className="border-border/70 bg-background/70 flex cursor-pointer items-center gap-2 rounded-full border px-3 py-2 text-sm font-semibold">
                    <input
                      type="radio"
                      name="visibility"
                      checked={formState.visibility === 'compartida'}
                      onChange={() => updateForm({ visibility: 'compartida' })}
                    />
                    Compartida
                  </label>
                </div>
              </div>
              <div className="grid gap-3">
                <Label>Tags</Label>
                <div className="flex flex-wrap gap-2">
                  {formState.tags.length ? (
                    formState.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="gap-1">
                        {tag}
                        <button
                          type="button"
                          onClick={() => removeTag(tag)}
                          className="text-muted-foreground hover:text-foreground"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </Badge>
                    ))
                  ) : (
                    <span className="text-muted-foreground text-sm">
                      Sin etiquetas aún.
                    </span>
                  )}
                </div>
                <div className="flex flex-wrap gap-2">
                  <Input
                    value={tagInput}
                    placeholder="Agregar tag"
                    onChange={(event) => setTagInput(event.target.value)}
                    onKeyDown={(event) => {
                      if (event.key === 'Enter') {
                        event.preventDefault()
                        addTag()
                      }
                    }}
                    className="max-w-xs"
                  />
                  <Button type="button" variant="outline" onClick={addTag}>
                    Añadir
                  </Button>
                </div>
              </div>
            </div>
          </Card>

          <Card className="border-border/70 bg-card/90 p-6">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-lg font-semibold">Orden manual</p>
                <p className="text-muted-foreground text-sm">
                  Define el orden exacto de lectura o prioridad.
                </p>
              </div>
              <GripVertical className="text-primary h-5 w-5" />
            </div>
            <div className="mt-5 grid gap-3">
              {isLoading ? (
                <p className="text-muted-foreground text-sm">
                  Cargando libros...
                </p>
              ) : selectedBooks.length ? (
                selectedBooks.map((book, index) => (
                  <div
                    key={book.id}
                    className="border-border/70 bg-background/60 flex flex-wrap items-center justify-between gap-3 rounded-2xl border p-4"
                  >
                    <div>
                      <p className="text-base font-semibold">{book.title}</p>
                      <p className="text-muted-foreground text-sm">
                        {book.author}
                      </p>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => moveBook(index, 'up')}
                        disabled={index === 0}
                      >
                        <ArrowUp className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => moveBook(index, 'down')}
                        disabled={index === selectedBooks.length - 1}
                      >
                        <ArrowDown className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeBook(book.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-muted-foreground text-sm">
                  Todavía no has agregado libros a esta lista.
                </p>
              )}
            </div>
          </Card>
        </div>

        <Card className="border-border/70 bg-card/90 p-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-lg font-semibold">Buscar y agregar libros</p>
              <p className="text-muted-foreground text-sm">
                Encuentra títulos en tu biblioteca y añádelos a la lista.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Search className="text-muted-foreground h-4 w-4" />
              <Input
                value={searchQuery}
                placeholder="Buscar por título, autor o tag"
                onChange={(event) => setSearchQuery(event.target.value)}
                className="w-64"
              />
            </div>
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {filteredBooks.length ? (
              filteredBooks.map((book) => (
                <div
                  key={book.id}
                  className="border-border/70 bg-background/60 flex flex-wrap items-center justify-between gap-3 rounded-2xl border p-4"
                >
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 flex h-10 w-10 items-center justify-center rounded-full">
                      <BookOpen className="text-primary h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-base font-semibold">{book.title}</p>
                      <p className="text-muted-foreground text-sm">
                        {book.author}
                      </p>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    className="gap-2"
                    onClick={() => addBook(book)}
                  >
                    <Plus className="h-4 w-4" />
                    Agregar
                  </Button>
                </div>
              ))
            ) : (
              <p className="text-muted-foreground text-sm">
                No encontramos más libros para agregar.
              </p>
            )}
          </div>
        </Card>
      </div>
    </div>
  )
}
