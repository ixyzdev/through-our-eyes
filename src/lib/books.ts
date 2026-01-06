export type BookStatus = 'reading' | 'completed' | 'queued'

export interface Book {
  id: string
  title: string
  author: string
  genre: string
  tags: string[]
  categories: string[]
  status: BookStatus
  progress: number
  mood: string
  cover: string
  coverImage: string
  lastOpened: string
}

export interface BooksData {
  recommended: Book[]
  library: Book[]
}

const booksMock: BooksData = {
  recommended: [
    {
      id: 'rec-1',
      title: 'La ridícula idea de no volver a verte',
      author: 'Rosa Montero',
      genre: 'Memorias',
      tags: ['Duelo', 'Autobiografía'],
      categories: ['Memorias', 'Autoficción'],
      status: 'queued',
      progress: 0,
      mood: 'Íntimo · emotivo',
      cover: 'from-rose-100 via-amber-50 to-white',
      coverImage:
        'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80',
      lastOpened: 'Recomendado hoy'
    },
    {
      id: 'rec-2',
      title: 'Project Hail Mary',
      author: 'Andy Weir',
      genre: 'Sci-Fi',
      tags: ['Audiolibro', 'Aventura'],
      categories: ['Ciencia ficción', 'Aventura'],
      status: 'queued',
      progress: 0,
      mood: 'Optimista · ágil',
      cover: 'from-indigo-100 via-blue-100 to-cyan-50',
      coverImage:
        'https://images.unsplash.com/photo-1463320726281-696a485928c7?auto=format&fit=crop&w=800&q=80',
      lastOpened: 'Basado en tus notas de sci-fi'
    }
  ],
  library: [
    {
      id: 'book-1',
      title: 'El infinito en un junco',
      author: 'Irene Vallejo',
      genre: 'Ensayo',
      tags: ['Historia', 'Libros'],
      categories: ['Ensayo', 'Historia cultural'],
      status: 'reading',
      progress: 68,
      mood: 'Curioso · contemplativo',
      cover: 'from-amber-200 via-amber-100 to-white',
      coverImage:
        'https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=800&q=80',
      lastOpened: 'Ayer'
    },
    {
      id: 'book-2',
      title: 'Hábitos atómicos',
      author: 'James Clear',
      genre: 'Productividad',
      tags: ['Rituales', 'Notas'],
      categories: ['Hábitos', 'Productividad'],
      status: 'reading',
      progress: 42,
      mood: 'Práctico · accionable',
      cover: 'from-emerald-200 via-emerald-100 to-white',
      coverImage:
        'https://images.unsplash.com/photo-1496104679561-38b3b4d7d00d?auto=format&fit=crop&w=800&q=80',
      lastOpened: 'Hace 2 días'
    },
    {
      id: 'book-3',
      title: 'Sapiens',
      author: 'Yuval Noah Harari',
      genre: 'Historia',
      tags: ['Club', 'Mapa mental'],
      categories: ['Historia', 'Divulgación'],
      status: 'completed',
      progress: 100,
      mood: 'Reflexivo · expansivo',
      cover: 'from-slate-200 via-slate-100 to-white',
      coverImage:
        'https://images.unsplash.com/photo-1463320726281-696a485928c7?auto=format&fit=crop&w=800&q=80',
      lastOpened: 'Semana pasada'
    },
    {
      id: 'book-4',
      title: 'Before the Coffee Gets Cold',
      author: 'Toshikazu Kawaguchi',
      genre: 'Ficción',
      tags: ['Nocturno', 'Breve'],
      categories: ['Ficción', 'Café & viajes en el tiempo'],
      status: 'queued',
      progress: 0,
      mood: 'Melancólico · cálido',
      cover: 'from-sky-100 via-white to-amber-50',
      coverImage:
        'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=800&q=80',
      lastOpened: 'En cola'
    },
    {
      id: 'book-5',
      title: 'La sociedad del cansancio',
      author: 'Byung-Chul Han',
      genre: 'Filosofía',
      tags: ['Ensayo', 'Subrayados'],
      categories: ['Filosofía', 'Psicopolítica'],
      status: 'completed',
      progress: 100,
      mood: 'Crítico · conciso',
      cover: 'from-neutral-200 via-neutral-100 to-white',
      coverImage:
        'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=800&q=80',
      lastOpened: 'Hace 3 semanas'
    }
  ]
}

export async function fetchBooks(): Promise<BooksData> {
  await new Promise((resolve) => setTimeout(resolve, 500))
  return JSON.parse(JSON.stringify(booksMock))
}
