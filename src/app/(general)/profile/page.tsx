import {
  Award,
  BookHeart,
  BookOpen,
  CalendarCheck,
  ListChecks,
  MapPin,
  MessageCircleQuestion,
  PenLine,
  PlusCircle,
  Sparkles,
  Trophy,
  UserCircle2,
  Users
} from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const profileMeta = [
  { label: 'Seguidores', value: '1.8k', icon: Users },
  { label: 'Siguiendo', value: '214', icon: UserCircle2 },
  { label: 'Autores seguidos', value: '18', icon: BookOpen }
]

const readingStats = [
  { label: 'Libros terminados', value: '24', detail: '+4 este mes' },
  { label: 'Horas de lectura', value: '128', detail: 'Ritual diario' },
  { label: 'Clubes activos', value: '3', detail: 'Debates semanales' }
]

const recentMoments = [
  {
    title: 'Sesión compartida',
    description: 'Lectura en vivo de "El infinito en un junco".',
    time: 'Hace 2 horas'
  },
  {
    title: 'Nueva reseña',
    description: 'Análisis emotivo de "La ridícula idea de no volver a verte".',
    time: 'Ayer · 18:30'
  },
  {
    title: 'Ritual completado',
    description: '20 minutos de lectura al amanecer.',
    time: 'Ayer · 07:10'
  }
]

const bookshelfHighlights = [
  {
    title: 'Leyendo ahora',
    description: '“La mujer habitada” de Gioconda Belli.',
    tag: 'Capítulo 12',
    cover: 'emerald'
  },
  {
    title: 'Próxima lectura',
    description: '“Los recuerdos del porvenir” de Elena Garro.',
    tag: 'Inicio mañana',
    cover: 'amber'
  },
  {
    title: 'En audiolibro',
    description: '“El país de las mujeres” narrado por la autora.',
    tag: '45% completado',
    cover: 'violet'
  }
]

const readingLists = [
  {
    title: 'Voces latinoamericanas',
    description: 'Narrativas contemporáneas escritas por autoras del sur.',
    count: '14 libros',
    visibility: 'Pública',
    accent: 'from-rose-100 via-amber-50 to-white'
  },
  {
    title: 'Ciencia y futuro',
    description: 'Ensayos sobre tecnología, feminismo y nuevos mundos.',
    count: '9 libros',
    visibility: 'Colaborativa',
    accent: 'from-sky-100 via-emerald-50 to-white'
  },
  {
    title: 'Lecturas calmadas',
    description: 'Novelas para leer con té y lluvia suave.',
    count: '21 libros',
    visibility: 'Privada',
    accent: 'from-violet-100 via-pink-50 to-white'
  }
]

const followingPeople = [
  { name: 'Valeria Cruz', detail: 'Ilustradora' },
  { name: 'Irene Salas', detail: 'Editora' },
  { name: 'Mariana Ríos', detail: 'Bibliotecaria' },
  { name: 'Lucía Paz', detail: 'Narradora' }
]

const followingAuthors = [
  { name: 'Isabel Allende', works: '28 libros' },
  { name: 'Samanta Schweblin', works: '9 libros' },
  { name: 'Liliana Colanzi', works: '4 libros' }
]

const createActions = [
  {
    title: 'Nueva lista de lectura',
    description: 'Agrupa libros por tema, momento o emoción.',
    icon: ListChecks,
    buttonLabel: 'Crear lista'
  },
  {
    title: 'Publicar reseña',
    description: 'Comparte tus notas y subrayados con la comunidad.',
    icon: PenLine,
    buttonLabel: 'Escribir reseña'
  },
  {
    title: 'Abrir club',
    description: 'Invita lectoras a una sesión en vivo o a un foro.',
    icon: PlusCircle,
    buttonLabel: 'Crear club'
  }
]

const favoriteQuotes = [
  '“La lectura es una forma de respiración.”',
  '“Cada libro es un lugar seguro donde volver.”',
  '“Las historias que compartimos nos cambian para siempre.”'
]

const achievements = [
  { label: 'Curadora de club', icon: Trophy },
  { label: 'Reseñas destacadas', icon: Award },
  { label: 'Recomendadora top', icon: Sparkles }
]

const coverPalette: Record<string, { from: string; to: string }> = {
  emerald: { from: '#34d399', to: '#059669' },
  amber: { from: '#fbbf24', to: '#f97316' },
  violet: { from: '#c4b5fd', to: '#7c3aed' }
}

const buildCover = (from: string, to: string) =>
  `data:image/svg+xml;utf8,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="120" height="160" viewBox="0 0 120 160"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="${from}"/><stop offset="100%" stop-color="${to}"/></linearGradient></defs><rect width="120" height="160" rx="16" fill="url(#g)"/><rect x="12" y="18" width="96" height="124" rx="10" fill="rgba(255,255,255,0.22)"/></svg>`
  )}`

export default function ProfilePage() {
  return (
    <div className="text-foreground min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-10 lg:px-8">
        <header className="relative overflow-hidden rounded-[32px] border border-emerald-100/60 bg-white/90 p-6 shadow-[0_20px_80px_-40px_rgb(15,23,42,0.35)] backdrop-blur">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.2),_transparent_60%)]" />
          <div className="relative flex flex-col gap-6">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="flex flex-wrap items-center gap-5">
                <div className="bg-primary/10 text-primary flex h-16 w-16 items-center justify-center rounded-2xl text-2xl font-semibold">
                  SN
                </div>
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-3">
                    <h1 className="text-3xl font-semibold">Sofía Navarro</h1>
                    <Badge className="bg-emerald-500/10 text-emerald-700">
                      Perfil público
                    </Badge>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Editora literaria y anfitriona del club “Lecturas con calma”.
                  </p>
                  <div className="text-muted-foreground flex flex-wrap items-center gap-3 text-xs">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      Barcelona, España
                    </span>
                    <span className="flex items-center gap-1">
                      <UserCircle2 className="h-4 w-4" />
                      @sofiabooks
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button variant="outline">Editar perfil</Button>
                <Button>Compartir perfil</Button>
              </div>
            </div>

            <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="grid gap-4 sm:grid-cols-3">
                {readingStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex flex-col gap-1 rounded-2xl border border-emerald-100/60 bg-emerald-50/60 px-4 py-3"
                  >
                    <span className="text-muted-foreground text-xs">
                      {stat.label}
                    </span>
                    <span className="text-2xl font-semibold">{stat.value}</span>
                    <span className="text-muted-foreground text-xs">
                      {stat.detail}
                    </span>
                  </div>
                ))}
              </div>
              <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                {profileMeta.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 rounded-2xl border border-emerald-100/60 bg-white/90 px-4 py-3"
                  >
                    <div className="bg-emerald-500/10 text-emerald-700 flex h-9 w-9 items-center justify-center rounded-xl">
                      <item.icon className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500">{item.label}</p>
                      <p className="text-sm font-semibold">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {achievements.map((achievement) => (
                <div
                  key={achievement.label}
                  className="flex items-center gap-1 rounded-full border border-slate-100 bg-white px-3 py-1 text-[11px] font-semibold text-slate-600"
                >
                  <achievement.icon className="h-3.5 w-3.5 text-primary" />
                  {achievement.label}
                </div>
              ))}
            </div>
          </div>
        </header>

        <div className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr]">
          <div className="space-y-8">
            <Card className="border-0 bg-white/90 shadow-[0_18px_60px_-40px_rgba(15,23,42,0.4)]">
              <CardHeader className="flex flex-row items-center justify-between gap-3">
                <div>
                  <CardTitle className="text-lg">Actividad reciente</CardTitle>
                  <p className="text-muted-foreground text-sm">
                    Movimientos de lectura y comunidad.
                  </p>
                </div>
                <Button variant="outline" size="sm">
                  Ver historial
                </Button>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentMoments.map((moment) => (
                  <div
                    key={moment.title}
                    className="flex flex-col gap-2 rounded-2xl border border-slate-100 bg-gradient-to-r from-white via-slate-50 to-emerald-50/40 px-4 py-3"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Badge className="bg-emerald-500/10 text-emerald-700">
                          Actualización
                        </Badge>
                        <span className="text-sm font-semibold">
                          {moment.title}
                        </span>
                      </div>
                      <span className="text-muted-foreground text-xs">
                        {moment.time}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      {moment.description}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="border-0 bg-white/90 shadow-[0_18px_60px_-40px_rgba(15,23,42,0.4)]">
              <CardHeader className="flex flex-row items-center justify-between gap-3">
                <div>
                  <CardTitle className="text-lg">Estantería destacada</CardTitle>
                  <p className="text-muted-foreground text-sm">
                    Tus libros activos y próximos rituales.
                  </p>
                </div>
                <Button variant="outline" size="sm">
                  Gestionar
                </Button>
              </CardHeader>
              <CardContent className="space-y-4">
                {bookshelfHighlights.map((item) => (
                  <div
                    key={item.title}
                    className="flex flex-col gap-3 rounded-2xl border border-amber-100/70 bg-amber-50/60 px-4 py-4 sm:flex-row sm:items-center"
                  >
                    <div className="flex items-center gap-4">
                      <img
                        src={buildCover(
                          coverPalette[item.cover].from,
                          coverPalette[item.cover].to
                        )}
                        alt={`Portada de ${item.description}`}
                        className="h-20 w-14 rounded-xl object-cover shadow"
                      />
                      <div className="space-y-2">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-sm font-semibold">
                            {item.title}
                          </span>
                          <Badge className="bg-amber-500/10 text-amber-700">
                            {item.tag}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground text-sm">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <section className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-semibold">Listas de lectura</h2>
                  <p className="text-muted-foreground text-sm">
                    Colecciones públicas y privadas creadas por Sofía.
                  </p>
                </div>
                <Button variant="outline" size="sm">
                  Explorar todas
                </Button>
              </div>
              <div className="grid gap-4 md:grid-cols-3">
                {readingLists.map((list) => (
                  <Card
                    key={list.title}
                    className={`border-0 bg-gradient-to-br ${list.accent} shadow-[0_18px_50px_-40px_rgba(15,23,42,0.4)]`}
                  >
                    <CardContent className="space-y-3 p-5">
                      <div className="flex items-center justify-between">
                        <Badge className="bg-white/70 text-slate-700">
                          {list.visibility}
                        </Badge>
                        <span className="text-xs font-semibold text-slate-500">
                          {list.count}
                        </span>
                      </div>
                      <div>
                        <p className="text-base font-semibold">{list.title}</p>
                        <p className="text-muted-foreground text-sm">
                          {list.description}
                        </p>
                      </div>
                      <Button size="sm" className="w-full">
                        Ver lista
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </div>

          <div className="space-y-8">
            <section className="space-y-4">
              <div>
                <h2 className="text-xl font-semibold">Crear algo nuevo</h2>
                <p className="text-muted-foreground text-sm">
                  Opciones rápidas para lanzar ideas desde tu perfil.
                </p>
              </div>
              <div className="space-y-3">
                {createActions.map((action) => (
                  <Card
                    key={action.title}
                    className="border-0 bg-gradient-to-br from-emerald-50 via-white to-sky-50 shadow-[0_18px_50px_-40px_rgba(15,23,42,0.4)]"
                  >
                    <CardContent className="flex items-start gap-4 p-5">
                      <div className="bg-emerald-500/10 text-emerald-700 flex h-11 w-11 items-center justify-center rounded-2xl">
                        <action.icon className="h-5 w-5" />
                      </div>
                      <div className="flex-1 space-y-2">
                        <div>
                          <p className="text-sm font-semibold">
                            {action.title}
                          </p>
                          <p className="text-muted-foreground text-sm">
                            {action.description}
                          </p>
                        </div>
                        <Button size="sm" variant="outline">
                          {action.buttonLabel}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            <section className="space-y-4">
              <div>
                <h2 className="text-xl font-semibold">Siguiendo</h2>
                <p className="text-muted-foreground text-sm">
                  Personas que inspiran el día a día de Sofía.
                </p>
              </div>
              <div className="grid gap-3">
                {followingPeople.map((person) => (
                  <div
                    key={person.name}
                    className="flex items-center justify-between rounded-2xl border border-slate-100 bg-white/90 px-4 py-3"
                  >
                    <div>
                      <p className="text-sm font-semibold">{person.name}</p>
                      <p className="text-muted-foreground text-xs">
                        {person.detail}
                      </p>
                    </div>
                    <Button size="sm" variant="outline">
                      Ver perfil
                    </Button>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-4">
              <div>
                <h2 className="text-xl font-semibold">Autores seguidos</h2>
                <p className="text-muted-foreground text-sm">
                  Autoras y autores que marcan sus lecturas.
                </p>
              </div>
              <div className="grid gap-3">
                {followingAuthors.map((author) => (
                  <div
                    key={author.name}
                    className="flex items-center justify-between rounded-2xl border border-violet-100/70 bg-violet-50/50 px-4 py-3"
                  >
                    <div>
                      <p className="text-sm font-semibold">{author.name}</p>
                      <p className="text-muted-foreground text-xs">
                        {author.works}
                      </p>
                    </div>
                    <Badge className="bg-white/80 text-slate-700">
                      Siguiendo
                    </Badge>
                  </div>
                ))}
              </div>
            </section>

            <Card className="border-0 bg-white/90 shadow-[0_18px_60px_-40px_rgba(15,23,42,0.4)]">
              <CardHeader>
                <CardTitle className="text-lg">Participación</CardTitle>
                <p className="text-muted-foreground text-sm">
                  Roles y hábitos que destacan su presencia en la comunidad.
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3 rounded-2xl border border-emerald-100/70 bg-emerald-50/60 px-4 py-3">
                  <BookHeart className="text-emerald-600 h-5 w-5" />
                  <div>
                    <p className="text-sm font-semibold">
                      Curadora del club “Lectoras en viaje”
                    </p>
                    <p className="text-muted-foreground text-xs">
                      215 participantes activos
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-2xl border border-sky-100/70 bg-sky-50/60 px-4 py-3">
                  <CalendarCheck className="text-sky-600 h-5 w-5" />
                  <div>
                    <p className="text-sm font-semibold">Ritual semanal</p>
                    <p className="text-muted-foreground text-xs">
                      Domingos · 09:00
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-2xl border border-amber-100/70 bg-amber-50/60 px-4 py-3">
                  <MessageCircleQuestion className="text-amber-600 h-5 w-5" />
                  <div>
                    <p className="text-sm font-semibold">
                      32 citas compartidas
                    </p>
                    <p className="text-muted-foreground text-xs">
                      Inspiración para la comunidad
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-white/90 shadow-[0_18px_60px_-40px_rgba(15,23,42,0.4)]">
              <CardHeader>
                <CardTitle className="text-lg">Citas favoritas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {favoriteQuotes.map((quote) => (
                  <div
                    key={quote}
                    className="text-muted-foreground rounded-2xl border border-violet-100/70 bg-violet-50/60 px-4 py-3 text-sm italic"
                  >
                    {quote}
                  </div>
                ))}
              </CardContent>
            </Card>

          </div>
        </div>
      </div>
    </div>
  )
}
