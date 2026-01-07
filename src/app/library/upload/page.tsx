'use client'

import Link from 'next/link'
import { useEffect, useMemo, useRef, useState } from 'react'
import {
  ArrowLeft,
  BookOpen,
  FileText,
  FileUp,
  Loader2,
  TriangleAlert
} from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'

const supportedFormats = [
  { label: 'PDF', description: 'Lectura directa en el navegador.' },
  { label: 'EPUB', description: 'Navega capítulos con controles básicos.' },
  { label: 'MOBI', description: 'Disponible para descarga rápida.' },
  { label: 'AZW', description: 'Conserva tu archivo para lectores Kindle.' }
]

const formatLabels = new Map([
  ['pdf', 'PDF'],
  ['epub', 'EPUB'],
  ['mobi', 'MOBI'],
  ['azw', 'AZW'],
  ['azw3', 'AZW3']
])

type ReaderFormat = 'pdf' | 'epub' | 'other'

function getFileExtension(file: File | null) {
  if (!file?.name) return null
  const parts = file.name.split('.')
  if (parts.length < 2) return null
  return parts.pop()?.toLowerCase() ?? null
}

function resolveReaderFormat(file: File | null): ReaderFormat {
  if (!file) return 'other'
  const extension = getFileExtension(file)
  if (extension === 'pdf' || file.type === 'application/pdf') return 'pdf'
  if (
    extension === 'epub' ||
    file.type === 'application/epub+zip' ||
    file.type === 'application/octet-stream'
  ) {
    return 'epub'
  }
  return 'other'
}

function EpubViewer({
  fileUrl,
  onError
}: {
  fileUrl: string
  onError: (message: string) => void
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const renditionRef = useRef<any>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    let isMounted = true
    setIsLoading(true)

    const renderEpub = async () => {
      try {
        const module = await import('epubjs')
        const ePub = module.default ?? module
        if (!containerRef.current || !isMounted) return
        const book = ePub(fileUrl)
        const rendition = book.renderTo(containerRef.current, {
          width: '100%',
          height: '100%'
        })
        renditionRef.current = rendition
        await rendition.display()
        if (isMounted) {
          setIsLoading(false)
        }
      } catch (error) {
        if (isMounted) {
          onError(
            'No pudimos renderizar el EPUB. Descarga el archivo o prueba otro navegador.'
          )
          setIsLoading(false)
        }
      }
    }

    renderEpub()

    return () => {
      isMounted = false
      if (containerRef.current) {
        containerRef.current.innerHTML = ''
      }
      renditionRef.current = null
    }
  }, [fileUrl, onError])

  return (
    <div className="space-y-3">
      <div className="border-border/70 bg-background/60 relative h-[520px] overflow-hidden rounded-3xl border">
        {isLoading ? (
          <div className="text-muted-foreground flex h-full items-center justify-center gap-2 text-sm">
            <Loader2 className="h-4 w-4 animate-spin" />
            Cargando EPUB...
          </div>
        ) : null}
        <div
          ref={containerRef}
          className="h-full w-full [&>div]:!max-w-none"
        />
      </div>
      <div className="flex flex-wrap gap-2">
        <Button
          variant="outline"
          onClick={() => renditionRef.current?.prev?.()}
        >
          Página anterior
        </Button>
        <Button onClick={() => renditionRef.current?.next?.()}>
          Página siguiente
        </Button>
      </div>
    </div>
  )
}

export default function UploadBookPage() {
  const [file, setFile] = useState<File | null>(null)
  const [fileUrl, setFileUrl] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const extension = useMemo(() => getFileExtension(file), [file])
  const formatLabel = extension ? formatLabels.get(extension) : null
  const readerFormat = useMemo(() => resolveReaderFormat(file), [file])

  useEffect(() => {
    if (!file) {
      setFileUrl(null)
      return
    }
    const url = URL.createObjectURL(file)
    setFileUrl(url)
    return () => {
      URL.revokeObjectURL(url)
    }
  }, [file])

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newFile = event.target.files?.[0] ?? null
    setFile(newFile)
    setError(null)
  }

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
            Subir libro
          </p>
        </div>

        <Card className="border-border/70 bg-card/90 overflow-hidden border p-6 shadow-[0_30px_120px_-60px_rgb(15,23,42,0.5)]">
          <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr]">
            <div className="space-y-5">
              <div className="space-y-2">
                <p className="text-primary text-sm font-semibold">
                  Importa tu lectura
                </p>
                <h1 className="text-3xl font-semibold">
                  Sube un libro y empieza a leerlo aquí mismo.
                </h1>
                <p className="text-muted-foreground text-sm">
                  Aceptamos archivos comunes como PDF y EPUB para que puedas
                  continuar tu lectura sin salir de la biblioteca.
                </p>
              </div>

              <Card className="border-border/70 bg-background/60 space-y-4 rounded-3xl border p-5 shadow-sm">
                <div className="flex items-center gap-3">
                  <span className="bg-primary/10 text-primary flex h-11 w-11 items-center justify-center rounded-2xl">
                    <FileUp className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-base font-semibold">Selecciona archivo</p>
                    <p className="text-muted-foreground text-sm">
                      Puedes arrastrar el archivo o elegirlo desde tu equipo.
                    </p>
                  </div>
                </div>
                <Input
                  type="file"
                  accept=".pdf,.epub,.mobi,.azw,.azw3"
                  onChange={handleFileChange}
                />
                {file ? (
                  <div className="border-border/70 bg-background/80 space-y-2 rounded-2xl border p-4 text-sm">
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge variant="outline">
                        {formatLabel ?? 'Archivo'}
                      </Badge>
                      <span className="font-semibold">{file.name}</span>
                    </div>
                    <p className="text-muted-foreground">
                      Tamaño: {(file.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Button variant="outline" onClick={() => setFile(null)}>
                        Limpiar
                      </Button>
                      {fileUrl ? (
                        <Button asChild>
                          <a href={fileUrl} download={file.name}>
                            Descargar copia
                          </a>
                        </Button>
                      ) : null}
                    </div>
                  </div>
                ) : (
                  <div className="text-muted-foreground text-sm">
                    Ningún archivo seleccionado todavía.
                  </div>
                )}
              </Card>
            </div>

            <div className="space-y-4">
              <Card className="border-border/70 bg-background/60 space-y-4 rounded-3xl border p-5 shadow-sm">
                <div className="flex items-center gap-3">
                  <span className="bg-primary/10 text-primary flex h-11 w-11 items-center justify-center rounded-2xl">
                    <BookOpen className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-base font-semibold">Formatos soportados</p>
                    <p className="text-muted-foreground text-sm">
                      Optimizamos cada lectura según el tipo de archivo.
                    </p>
                  </div>
                </div>
                <div className="space-y-3">
                  {supportedFormats.map((format) => (
                    <div
                      key={format.label}
                      className="border-border/70 bg-background/80 rounded-2xl border p-3"
                    >
                      <p className="text-sm font-semibold">{format.label}</p>
                      <p className="text-muted-foreground text-xs">
                        {format.description}
                      </p>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="border-border/70 bg-background/60 space-y-3 rounded-3xl border p-5 text-sm shadow-sm">
                <div className="flex items-center gap-3">
                  <span className="bg-primary/10 text-primary flex h-10 w-10 items-center justify-center rounded-2xl">
                    <FileText className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-base font-semibold">Consejos rápidos</p>
                    <p className="text-muted-foreground text-xs">
                      Asegura que tu archivo esté desbloqueado y legible.
                    </p>
                  </div>
                </div>
                <ul className="text-muted-foreground list-disc space-y-1 pl-5 text-xs">
                  <li>Los PDF se abren directamente en el visor inferior.</li>
                  <li>Los EPUB incluyen navegación por capítulos.</li>
                  <li>
                    Otros formatos se preparan para descarga y lectura externa.
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </Card>

        <Card className="border-border/70 bg-card/90 space-y-4 border p-6 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-lg font-semibold">Vista de lectura</p>
              <p className="text-muted-foreground text-sm">
                Previsualiza tu libro y continúa leyendo cuando quieras.
              </p>
            </div>
            {formatLabel ? (
              <Badge variant="outline">Formato: {formatLabel}</Badge>
            ) : null}
          </div>

          {!file ? (
            <div className="text-muted-foreground flex items-center gap-3 rounded-3xl border border-dashed p-6 text-sm">
              <FileUp className="h-5 w-5" />
              Sube un archivo para comenzar la lectura aquí.
            </div>
          ) : null}

          {file && readerFormat === 'pdf' && fileUrl ? (
            <div className="border-border/70 bg-background/60 overflow-hidden rounded-3xl border">
              <iframe
                title="Vista previa PDF"
                src={fileUrl}
                className="h-[600px] w-full"
              />
            </div>
          ) : null}

          {file && readerFormat === 'epub' && fileUrl ? (
            <div className="space-y-3">
              {error ? (
                <div className="text-muted-foreground flex items-start gap-3 rounded-2xl border border-dashed p-4 text-sm">
                  <TriangleAlert className="h-5 w-5 text-amber-500" />
                  <span>{error}</span>
                </div>
              ) : null}
              <EpubViewer fileUrl={fileUrl} onError={setError} />
            </div>
          ) : null}

          {file && readerFormat === 'other' ? (
            <div className="text-muted-foreground flex items-start gap-3 rounded-2xl border border-dashed p-4 text-sm">
              <TriangleAlert className="h-5 w-5 text-amber-500" />
              Este formato aún no se puede renderizar aquí. Descarga el archivo
              para leerlo en tu dispositivo favorito.
            </div>
          ) : null}
        </Card>
      </div>
    </div>
  )
}
