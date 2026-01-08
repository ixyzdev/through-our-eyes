import { Sparkles, Stars, Zap } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'

const highlights = [
  {
    title: 'Organiza tus lecturas',
    description:
      'Planifica hábitos, fija metas y mantén tu progreso siempre visible.'
  },
  {
    title: 'Descubre nuevos libros',
    description:
      'Recibe sugerencias hechas a tu medida y explora géneros similares.'
  },
  {
    title: 'Listas y presupuestos',
    description:
      'Arma listas de lectura, controla compras y prioriza lo que viene.'
  }
]

const featureCards = [
  {
    title: 'Biblioteca a tu ritmo',
    description:
      'Organiza tu biblioteca, avanza capítulos y guarda notas personales.',
    icon: Sparkles,
    tone: 'from-pink-500/20 via-purple-500/20 to-indigo-500/20'
  },
  {
    title: 'Listas inteligentes',
    description:
      'Crea listas de lectura y presupuestos para elegir tu próxima compra.',
    icon: Stars,
    tone: 'from-amber-400/20 via-orange-500/20 to-rose-500/20'
  },
  {
    title: 'Apuntes sociales',
    description:
      'Descubre notas y apuntes de personas a las que sigues.',
    icon: Zap,
    tone: 'from-emerald-400/20 via-cyan-500/20 to-blue-500/20'
  }
]

const steps = [
  {
    title: 'Descubre ventajas',
    description:
      'Organiza tus lecturas y encuentra nuevos libros con rapidez.'
  },
  {
    title: 'Regístrate en segundos',
    description:
      'Guarda tus listas, presupuestos y preferencias de lectura.'
  },
  {
    title: 'Recibe novedades lectoras',
    description:
      'Déjanos tu correo y recibe actualizaciones, lanzamientos y retos.'
  }
]

const benefits = [
  {
    title: 'Organiza tus lecturas',
    description: 'Clasifica por estado, metas y tiempos reales de lectura.'
  },
  {
    title: 'Descubre nuevos libros',
    description: 'Explora tendencias, recomendaciones y novedades editoriales.'
  },
  {
    title: 'Arma tus listas y presupuestos',
    description: 'Planea compras, asigna presupuestos y prioriza tus lecturas.'
  },
  {
    title: 'Lee como aplicación',
    description: 'Convierte la web en tu app diaria para leer y avanzar.'
  },
  {
    title: 'Apuntes de tu comunidad',
    description: 'Consulta notas y subrayados de personas a las que sigues.'
  }
]

export function WelcomeView() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-white via-amber-50/70 to-blue-50 text-foreground">
      <div className="pointer-events-none absolute -left-24 top-16 h-72 w-72 rounded-full bg-gradient-to-tr from-pink-400/30 via-purple-400/30 to-indigo-400/30 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-10 h-80 w-80 rounded-full bg-gradient-to-tr from-emerald-400/25 via-cyan-400/25 to-sky-400/25 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-gradient-to-tr from-amber-300/30 via-orange-300/20 to-rose-300/30 blur-3xl" />

      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-16 lg:px-8">
        <section className="relative flex flex-col gap-10 overflow-hidden rounded-[36px] border border-white/60 bg-white/70 p-10 shadow-[0_30px_80px_-50px_rgba(15,23,42,0.45)] backdrop-blur">
          <div className="absolute right-6 top-6 flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
            <span className="h-2 w-2 animate-pulse rounded-full bg-amber-500" />
            Experiencia lectora
          </div>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-6">
              <Badge className="w-fit bg-amber-100 text-amber-700 hover:bg-amber-200">
                Primera visita
              </Badge>
              <h1 className="text-4xl leading-tight font-semibold text-slate-900 md:text-5xl">
                Tu primer vistazo a la experiencia que organiza tu mundo lector.
              </h1>
              <p className="text-lg text-slate-600">
                Esta vista es solo para quienes llegan por primera vez. Te
                mostramos cómo ordenar tus lecturas, descubrir libros y crear
                listas de forma clara y dinámica.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button size="lg" className="bg-slate-900 text-white">
                  Quiero registrarme
                </Button>
                <Button variant="outline" size="lg">
                  Dejar mi correo
                </Button>
              </div>
              <div className="flex flex-wrap gap-3 text-sm text-slate-500">
                {highlights.map((item) => (
                  <span key={item.title} className="rounded-full bg-white/80 px-4 py-2">
                    {item.title}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative grid gap-4">
              {featureCards.map((card) => (
                <Card
                  key={card.title}
                  className={`group relative overflow-hidden border-white/60 bg-white/80 p-5 shadow-lg transition-transform duration-300 hover:-translate-y-1 ${card.tone}`}
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/70 text-slate-800 shadow-sm">
                      <card.icon className="h-6 w-6" />
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">
                        {card.title}
                      </h3>
                      <p className="text-sm text-slate-600">
                        {card.description}
                      </p>
                    </div>
                  </div>
                  <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-white/50 blur-2xl transition-opacity duration-300 group-hover:opacity-80" />
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
          <Card className="border-white/60 bg-white/80 p-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-slate-900">
                Tu lectura, bien estructurada
              </h2>
              <p className="text-slate-600">
                Cada panel está pensado para ayudarte a planificar lecturas,
                descubrir novedades y mantener tu biblioteca ordenada sin
                esfuerzo.
              </p>
              <div className="grid gap-4">
                {steps.map((step, index) => (
                  <div
                    key={step.title}
                    className="flex items-start gap-4 rounded-2xl bg-white/60 p-4"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="text-base font-semibold text-slate-900">
                        {step.title}
                      </h3>
                      <p className="text-sm text-slate-600">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          <Card className="relative overflow-hidden border-white/60 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 p-8 text-white">
            <div className="pointer-events-none absolute left-6 top-8 h-20 w-20 animate-[spin_12s_linear_infinite] rounded-full border border-white/10" />
            <div className="pointer-events-none absolute bottom-6 right-10 h-16 w-16 animate-pulse rounded-full bg-white/10" />
            <div className="relative space-y-5">
              <h2 className="text-2xl font-semibold">
                Déjanos tu correo y recibe novedades lectoras primero
              </h2>
              <p className="text-sm text-slate-200">
                Te enviaremos nuevas recomendaciones, listas destacadas y notas
                de la comunidad para inspirar tus próximas lecturas.
              </p>
              <form className="flex flex-col gap-3 sm:flex-row">
                <Input
                  type="email"
                  placeholder="tu-correo@ejemplo.com"
                  className="border-white/30 bg-white/10 text-white placeholder:text-slate-300"
                />
                <Button size="lg" className="bg-amber-400 text-slate-900 hover:bg-amber-300">
                  Quiero enterarme
                </Button>
              </form>
              <p className="text-xs text-slate-300">
                Sin spam. Solo contenido valioso mientras pulimos la experiencia.
              </p>
            </div>
          </Card>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          {benefits.map((benefit) => (
            <Card
              key={benefit.title}
              className="border-white/60 bg-white/80 p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1"
            >
              <h3 className="text-lg font-semibold text-slate-900">
                {benefit.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                {benefit.description}
              </p>
            </Card>
          ))}
        </section>
      </div>
    </div>
  )
}
