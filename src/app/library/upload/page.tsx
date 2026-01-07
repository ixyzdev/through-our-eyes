'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, FileText, FileUp, Plus, UploadCloud } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { fetchUserLists, type UserList } from '@/lib/lists'

type SupportedFormat = 'pdf' | 'epub' | 'other'

type UploadItem = {
  id: string
  file: File
  title: string
  author: string
  language: string
  year: string
  tags: string
  description: string
  listId: string
  format: SupportedFormat
}

const supportedFormats = ['PDF', 'EPUB', 'MOBI', 'AZW3', 'TXT']

const getFileFormat = (file: File): SupportedFormat => {
  const extension = file.name.split('.').pop()?.toLowerCase()
  if (file.type === 'application/pdf' || extension === 'pdf') {
    return 'pdf'
  }
  if (file.type === 'application/epub+zip' || extension === 'epub') {
    return 'epub'
  }
  return 'other'
}

const formatFileSize = (bytes: number) => {
  if (!bytes) return '0 KB'
  const kb = bytes / 1024
  if (kb < 1024) return `${kb.toFixed(1)} KB`
  return `${(kb / 1024).toFixed(1)} MB`
}

const createUploadItem = (file: File): UploadItem => ({
  id: crypto.randomUUID(),
  file,
  title: file.name.replace(/\.[^/.]+$/, ''),
  author: '',
  language: 'Español',
  year: '',
  tags: '',
  description: '',
  listId: '',
  format: getFileFormat(file)
})

export default function UploadBookPage() {
  const [uploads, setUploads] = useState<UploadItem[]>([])
  const [activeId, setActiveId] = useState<string | null>(null)
  const [lists, setLists] = useState<UserList[]>([])
  const inputRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    let mounted = true
    fetchUserLists().then((data) => {
      if (!mounted) return
      setLists(data)
    })
    return () => {
      mounted = false
    }
  }, [])

  const activeUpload = useMemo(
    () => uploads.find((upload) => upload.id === activeId) ?? uploads[0],
    [uploads, activeId]
  )

  const handleFiles = (fileList: FileList | null) => {
    if (!fileList?.length) return
    const newItems = Array.from(fileList).map((file) => createUploadItem(file))
    setUploads((prev) => [...prev, ...newItems])
    setActiveId(newItems[0]?.id ?? null)
  }

  const updateUpload = (id: string, updates: Partial<UploadItem>) => {
    setUploads((prev) =>
      prev.map((item) => (item.id === id ? { ...item, ...updates } : item))
    )
  }

  return (
    <div className="text-foreground relative min-h-screen overflow-hidden bg-gradient-to-b from-amber-50 via-white to-blue-50 antialiased dark:from-zinc-950 dark:via-zinc-900 dark:to-black">
      <div className="from-primary/10 pointer-events-none absolute inset-x-0 top-0 h-48 bg-gradient-to-b via-transparent to-transparent blur-3xl" />
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 lg:px-8">
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
            Subir libros
          </p>
        </div>

        <header className="border-border/70 bg-card/90 flex flex-col gap-3 rounded-3xl border p-6 shadow-sm backdrop-blur">
          <div className="space-y-2">
            <h1 className="text-2xl leading-tight font-semibold">
              Gestiona la metadata antes de guardar.
            </h1>
            <p className="text-muted-foreground text-sm">
              Sube uno o varios archivos y completa los datos clave de cada
              libro.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {supportedFormats.map((format) => (
              <Badge key={format} variant="outline">
                {format}
              </Badge>
            ))}
          </div>
        </header>

        <Card className="border-border/70 bg-card/90 p-6 shadow-sm">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-primary/10 text-primary flex h-10 w-10 items-center justify-center rounded-2xl">
                <UploadCloud className="h-5 w-5" />
              </div>
              <div>
                <p className="text-base font-semibold">Carga múltiple</p>
                <p className="text-muted-foreground text-sm">
                  Arrastra varios archivos o selecciónalos desde tu equipo.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <Input
                ref={inputRef}
                type="file"
                accept=".pdf,.epub,.mobi,.azw3,.txt"
                multiple
                className="hidden"
                onChange={(event) => handleFiles(event.target.files)}
              />
              <Button
                type="button"
                variant="outline"
                onClick={() => inputRef.current?.click()}
                className="gap-2"
              >
                <FileText className="h-4 w-4" />
                Seleccionar archivos
              </Button>
            </div>
          </div>
          <div
            className="border-border/70 bg-muted/40 mt-5 flex min-h-[120px] items-center justify-center rounded-3xl border border-dashed text-sm text-muted-foreground"
            onDragOver={(event) => event.preventDefault()}
            onDrop={(event) => {
              event.preventDefault()
              handleFiles(event.dataTransfer.files)
            }}
          >
            <div className="flex items-center gap-2">
              <FileUp className="h-4 w-4" />
              Suelta tus libros aquí
            </div>
          </div>
        </Card>

        <div className="grid gap-6 lg:grid-cols-[0.7fr_1.3fr]">
          <Card className="border-border/70 bg-card/90 p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <p className="text-base font-semibold">Archivos cargados</p>
              <Badge variant="outline">{uploads.length} libros</Badge>
            </div>
            <div className="mt-4 space-y-2">
              {uploads.length === 0 ? (
                <p className="text-muted-foreground text-sm">
                  Aún no has cargado archivos.
                </p>
              ) : (
                uploads.map((upload) => (
                  <button
                    key={upload.id}
                    onClick={() => setActiveId(upload.id)}
                    className={`flex w-full items-center justify-between rounded-2xl border px-3 py-2 text-left text-sm transition ${
                      upload.id === activeUpload?.id
                        ? 'border-primary/50 bg-primary/5 text-foreground'
                        : 'border-border/70 text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    <span className="font-semibold">{upload.title || 'Sin título'}</span>
                    <span className="text-xs uppercase">
                      {upload.format === 'other' ? 'OTRO' : upload.format}
                    </span>
                  </button>
                ))
              )}
            </div>
          </Card>

          <Card className="border-border/70 bg-card/90 p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <p className="text-base font-semibold">Metadata del libro</p>
              <Button variant="outline" className="gap-2">
                <Plus className="h-4 w-4" />
                Nueva lista
              </Button>
            </div>

            {!activeUpload ? (
              <div className="text-muted-foreground mt-6 text-sm">
                Selecciona un archivo para editar su metadata.
              </div>
            ) : (
              <div className="mt-6 grid gap-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <label className="space-y-2 text-sm font-semibold">
                    Título
                    <Input
                      value={activeUpload.title}
                      onChange={(event) =>
                        updateUpload(activeUpload.id, {
                          title: event.target.value
                        })
                      }
                    />
                  </label>
                  <label className="space-y-2 text-sm font-semibold">
                    Autor/a
                    <Input
                      value={activeUpload.author}
                      onChange={(event) =>
                        updateUpload(activeUpload.id, {
                          author: event.target.value
                        })
                      }
                    />
                  </label>
                  <label className="space-y-2 text-sm font-semibold">
                    Idioma
                    <Input
                      value={activeUpload.language}
                      onChange={(event) =>
                        updateUpload(activeUpload.id, {
                          language: event.target.value
                        })
                      }
                    />
                  </label>
                  <label className="space-y-2 text-sm font-semibold">
                    Año de publicación
                    <Input
                      value={activeUpload.year}
                      onChange={(event) =>
                        updateUpload(activeUpload.id, { year: event.target.value })
                      }
                    />
                  </label>
                </div>

                <label className="space-y-2 text-sm font-semibold">
                  Etiquetas (separa con comas)
                  <Input
                    value={activeUpload.tags}
                    onChange={(event) =>
                      updateUpload(activeUpload.id, { tags: event.target.value })
                    }
                  />
                </label>

                <label className="space-y-2 text-sm font-semibold">
                  Descripción
                  <textarea
                    value={activeUpload.description}
                    onChange={(event) =>
                      updateUpload(activeUpload.id, {
                        description: event.target.value
                      })
                    }
                    className="border-input bg-background focus-visible:ring-ring/80 min-h-[110px] w-full rounded-2xl border px-4 py-3 text-sm shadow-none focus-visible:outline-none focus-visible:ring-2"
                  />
                </label>

                <label className="space-y-2 text-sm font-semibold">
                  Añadir a lista de lectura
                  <select
                    value={activeUpload.listId}
                    onChange={(event) =>
                      updateUpload(activeUpload.id, { listId: event.target.value })
                    }
                    className="border-input bg-background focus-visible:ring-ring/80 w-full rounded-2xl border px-4 py-3 text-sm shadow-none focus-visible:outline-none focus-visible:ring-2"
                  >
                    <option value="">Selecciona una lista</option>
                    {lists.map((list) => (
                      <option key={list.id} value={list.id}>
                        {list.name}
                      </option>
                    ))}
                  </select>
                </label>

                <div className="text-muted-foreground text-xs">
                  {activeUpload.file.name} ·{' '}
                  {formatFileSize(activeUpload.file.size)}
                </div>
              </div>
            )}
          </Card>
        </div>
      </div>
    </div>
  )
}
