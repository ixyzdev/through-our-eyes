import { BookmarkCheck, Clock, Headphones, Sparkles } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'

const highlights = [
  {
    icon: Sparkles,
    title: 'Lectura guiada',
    description: 'Resúmenes y mapas mentales listos en segundos.'
  },
  {
    icon: BookmarkCheck,
    title: 'Colecciones vivas',
    description: 'Guarda citas, notas y listas para cada libro.'
  },
  {
    icon: Headphones,
    title: 'Audiolibros sin fricción',
    description: 'Sincroniza tu progreso entre texto y audio.'
  },
  {
    icon: Clock,
    title: 'Sesiones conscientes',
    description: 'Rituales de enfoque y descansos programados.'
  }
]

const stats = [
  { label: 'Lectores activos', value: '48k' },
  { label: 'Bibliotecas creadas', value: '120k' },
  { label: 'Páginas leídas este mes', value: '8.4M' }
]

export function HeroPanel() {
  return (
    <div className="from-primary/10 via-primary/5 text-foreground dark:from-primary/20 relative flex flex-1 flex-col justify-between gap-10 overflow-hidden rounded-3xl bg-gradient-to-br to-indigo-100 p-8 shadow-[0_30px_80px_-40px_rgb(15,23,42,0.45)] dark:via-zinc-900 dark:to-black">
      <div className="absolute inset-0 opacity-70">
        <div className="from-primary/20 absolute inset-10 rounded-full bg-linear-to-br via-purple-500/10 to-emerald-400/10 blur-3xl" />
      </div>
      <div className="relative space-y-4">
        <h1 className="text-2xl leading-tight font-semibold tracking-tight md:text-2xl">
          La forma moderna de leer, subrayar y recordar.
        </h1>
        <p className="text-muted-foreground max-w-xl text-lg">
          Organiza tu biblioteca, crea rituales de lectura y recibe insights
          personalizados. Diseñado para clubes de lectura, investigadores y
          lectores voraces.
        </p>
      </div>
      <div className="relative grid grid-cols-1 gap-3 sm:grid-cols-2">
        {highlights.map(({ icon: Icon, title, description }) => (
          <Card
            key={title}
            className="flex items-start gap-3 border-transparent bg-white/50 p-4 shadow-none backdrop-blur dark:bg-zinc-900/50"
          >
            <div className="bg-primary/10 text-primary flex h-11 w-11 items-center justify-center rounded-2xl">
              <Icon className="h-5 w-5" />
            </div>
            <div>
              <p className="font-semibold">{title}</p>
              <p className="text-muted-foreground text-sm">{description}</p>
            </div>
          </Card>
        ))}
      </div>
      <div className="relative grid grid-cols-3 gap-3 rounded-3xl border border-white/40 bg-white/50 p-4 text-sm font-semibold shadow-inner shadow-white/50 backdrop-blur dark:border-white/10 dark:bg-white/5 dark:shadow-black/10">
        {stats.map((stat) => (
          <div key={stat.label} className="space-y-1">
            <p className="text-primary text-2xl font-semibold">{stat.value}</p>
            <p className="text-muted-foreground text-xs tracking-wide uppercase">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
