import { BookOpen, Clock3, Compass, Sparkles, Target } from 'lucide-react'

export type Trend = 'up' | 'down' | 'flat'

export interface ReadingStat {
  id: string
  label: string
  value: string
  delta: string
  trend: Trend
}

export interface ReadingMemory {
  id: string
  bookTitle: string
  snippet: string
  mood: string
  createdAt: string
  tags: string[]
  color: string
}

export interface SessionPlan {
  id: string
  title: string
  focus: string
  status: 'scheduled' | 'active' | 'completed'
  startTime: string
  durationMinutes: number
  progress: number
}

export interface Recommendation {
  id: string
  title: string
  author: string
  genre: string
  confidence: number
  reason: string
}

export interface DashboardData {
  stats: ReadingStat[]
  memories: ReadingMemory[]
  sessions: SessionPlan[]
  recommendations: Recommendation[]
}

const mockData: DashboardData = {
  stats: [
    {
      id: 'time-read',
      label: 'Tiempo de enfoque',
      value: '8h 24m',
      delta: '+42% vs semana pasada',
      trend: 'up'
    },
    {
      id: 'pages',
      label: 'Páginas leídas',
      value: '312',
      delta: '+18% vs semana pasada',
      trend: 'up'
    },
    {
      id: 'highlights',
      label: 'Nuevos subrayados',
      value: '47',
      delta: 'Estable',
      trend: 'flat'
    },
    {
      id: 'rituals',
      label: 'Rituales cumplidos',
      value: '5/7',
      delta: '-1 vs semana pasada',
      trend: 'down'
    }
  ],
  memories: [
    {
      id: 'mem-1',
      bookTitle: 'La sociedad del cansancio',
      snippet:
        '“La positividad absoluta transforma la libertad en obligación.”',
      mood: 'reflexivo',
      createdAt: 'Hace 3h',
      tags: ['Filosofía', 'Subrayado', 'Mindfulness'],
      color: 'from-amber-100 via-orange-100 to-rose-50'
    },
    {
      id: 'mem-2',
      bookTitle: 'Proyecto Hail Mary',
      snippet: 'Gracia es un recordatorio de que la colaboración salva mundos.',
      mood: 'energizante',
      createdAt: 'Ayer',
      tags: ['Sci-Fi', 'Audiolibro'],
      color: 'from-indigo-100 via-blue-100 to-cyan-50'
    },
    {
      id: 'mem-3',
      bookTitle: 'Hábitos atómicos',
      snippet:
        'Un ritual de 10 minutos es mejor que un plan perfecto jamás iniciado.',
      mood: 'práctico',
      createdAt: 'Hace 2 días',
      tags: ['No-ficción', 'Productividad'],
      color: 'from-emerald-100 via-emerald-50 to-white'
    }
  ],
  sessions: [
    {
      id: 'session-1',
      title: 'Club de lectura — Capítulo 4',
      focus: 'Análisis de personajes',
      status: 'active',
      startTime: '08:30',
      durationMinutes: 45,
      progress: 72
    },
    {
      id: 'session-2',
      title: 'Sesión nocturna',
      focus: 'Notas sobre creatividad',
      status: 'scheduled',
      startTime: '22:00',
      durationMinutes: 30,
      progress: 0
    },
    {
      id: 'session-3',
      title: 'Revisión de citas',
      focus: 'Clasificar y etiquetar ideas',
      status: 'completed',
      startTime: 'Ayer, 19:00',
      durationMinutes: 25,
      progress: 100
    }
  ],
  recommendations: [
    {
      id: 'rec-1',
      title: 'El infinito en un junco',
      author: 'Irene Vallejo',
      genre: 'Historia cultural',
      confidence: 92,
      reason:
        'Te gustan los ensayos de ritmo narrativo y las historias sobre libros.'
    },
    {
      id: 'rec-2',
      title: 'La tiranía del mérito',
      author: 'Michael J. Sandel',
      genre: 'Filosofía',
      confidence: 86,
      reason:
        'Afinidad con tus temas de justicia social y los últimos subrayados.'
    },
    {
      id: 'rec-3',
      title: 'Before the Coffee Gets Cold',
      author: 'Toshikazu Kawaguchi',
      genre: 'Ficción contemporánea',
      confidence: 79,
      reason: 'Buscas lecturas breves y emotivas para la noche.'
    }
  ]
}

export async function fetchDashboardData(): Promise<DashboardData> {
  await new Promise((resolve) => setTimeout(resolve, 650))
  return JSON.parse(JSON.stringify(mockData))
}

export const navShortcuts = [
  { label: 'Ir a biblioteca', key: 'B', icon: BookOpen },
  { label: 'Explorar', key: 'E', icon: Compass },
  { label: 'Ritual de enfoque', key: 'R', icon: Target },
  { label: 'Sesiones', key: 'S', icon: Clock3 },
  { label: 'Recomendaciones', key: 'P', icon: Sparkles }
]
