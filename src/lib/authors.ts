import { fetchBooks, type Book } from '@/lib/books'

export interface AuthorBookSummary {
  id: string
  title: string
  genre: string
  coverImage: string
  publicationYear: number
  synopsis: string
}

export interface AuthorSagaItem {
  title: string
  year: number
  coverImage: string
  note: string
}

export interface AuthorSaga {
  id: string
  name: string
  description: string
  items: AuthorSagaItem[]
}

export interface AuthorProfile {
  name: string
  slug: string
  bio: string
  image: string
  quote: string
  location: string
}

export interface AuthorDetail {
  profile: AuthorProfile
  categories: string[]
  books: AuthorBookSummary[]
  totalBooks: number
  earliestYear: number
  latestYear: number
  sagas: AuthorSaga[]
}

const authorProfiles: Record<string, Omit<AuthorProfile, 'slug'>> = {
  'irene-vallejo': {
    name: 'Irene Vallejo',
    bio: 'Filóloga y ensayista que rescata la memoria de los libros con un tono narrativo cercano. Sus textos combinan investigación, divulgación cultural y un fuerte pulso poético.',
    image:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80',
    quote: '"Escribir es construir un refugio para la curiosidad."',
    location: 'Zaragoza, España'
  },
  'rosa-montero': {
    name: 'Rosa Montero',
    bio: 'Periodista y novelista que entrelaza experiencia personal, historia y ficción. Su obra explora la vulnerabilidad, el duelo y la resiliencia con voz íntima.',
    image:
      'https://images.unsplash.com/photo-1526510747491-58f928ec870f?auto=format&fit=crop&w=900&q=80',
    quote: '"La literatura es la gran conversación con la vida."',
    location: 'Madrid, España'
  },
  'andy-weir': {
    name: 'Andy Weir',
    bio: 'Autor de ciencia ficción dura con formación en ingeniería, conocido por historias optimistas y un sentido del humor técnico que equilibra tensión y asombro.',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80',
    quote: '"Resolver problemas imposibles es mi deporte favorito."',
    location: 'California, EE.UU.'
  }
}

const authorSagas: Record<string, AuthorSaga[]> = {
  'irene-vallejo': [
    {
      id: 'tradicion-clasica',
      name: 'Tradición clásica',
      description: 'Ensayos sobre el legado grecolatino y su eco en la lectura contemporánea.',
      items: [
        {
          title: 'El infinito en un junco',
          year: 2019,
          coverImage:
            'https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=800&q=80',
          note: 'Bitácora histórica sobre el libro y sus guardianes.'
        },
        {
          title: 'Manuscritos de viento',
          year: 2021,
          coverImage:
            'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=800&q=80',
          note: 'Crónica de bibliotecas nómadas y lectores viajeros.'
        },
        {
          title: 'Voces del papiro',
          year: 2023,
          coverImage:
            'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=800&q=80',
          note: 'Retratos breves de autoras clásicas olvidadas.'
        }
      ]
    },
    {
      id: 'mapa-lectoras',
      name: 'Mapa de lectoras',
      description: 'Relatos cortos para clubes de lectura y conversación comunitaria.',
      items: [
        {
          title: 'Cartas a la lectura',
          year: 2018,
          coverImage:
            'https://images.unsplash.com/photo-1457694587812-e8bf29a43845?auto=format&fit=crop&w=800&q=80',
          note: 'Epistolario sobre hábitos de lectura.'
        },
        {
          title: 'Bitácora del aula',
          year: 2020,
          coverImage:
            'https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=800&q=80',
          note: 'Experiencias docentes en talleres literarios.'
        }
      ]
    }
  ],
  'rosa-montero': [
    {
      id: 'memoria-viva',
      name: 'Memoria viva',
      description: 'Serie de no ficción sobre duelo, biografía y resiliencia.',
      items: [
        {
          title: 'La ridícula idea de no volver a verte',
          year: 2013,
          coverImage:
            'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80',
          note: 'Ensayo personal con el legado de Marie Curie.'
        },
        {
          title: 'El peligro de estar cuerda',
          year: 2022,
          coverImage:
            'https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?auto=format&fit=crop&w=800&q=80',
          note: 'Reflexión sobre creatividad y salud mental.'
        }
      ]
    }
  ],
  'andy-weir': [
    {
      id: 'misiones-imposibles',
      name: 'Misiones imposibles',
      description: 'Ciencia ficción optimista centrada en ciencia aplicada.',
      items: [
        {
          title: 'Project Hail Mary',
          year: 2021,
          coverImage:
            'https://images.unsplash.com/photo-1463320726281-696a485928c7?auto=format&fit=crop&w=800&q=80',
          note: 'Un profesor convertido en héroe espacial.'
        },
        {
          title: 'The Martian',
          year: 2014,
          coverImage:
            'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=800&q=80',
          note: 'Sobrevivir en Marte con ingenio y humor.'
        }
      ]
    }
  ]
}

const defaultSaga = (books: AuthorBookSummary[]): AuthorSaga[] => [
  {
    id: 'seleccion-curada',
    name: 'Selección curada',
    description: 'Un vistazo breve a títulos representativos de esta autora o autor.',
    items: books.slice(0, 3).map((book) => ({
      title: book.title,
      year: book.publicationYear,
      coverImage: book.coverImage,
      note: book.synopsis
    }))
  }
]

export function getAuthorSlug(name: string) {
  return name
    .toLowerCase()
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '')
}

function getProfile(name: string, slug: string): AuthorProfile {
  const profile = authorProfiles[slug]
  if (profile) {
    return { ...profile, slug }
  }

  return {
    name,
    slug,
    bio: 'Autor destacado dentro de la biblioteca, con obras que conectan con distintos públicos y estilos narrativos.',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80',
    quote: '"Cada libro es un puente entre épocas y lectores."',
    location: 'Latinoamérica'
  }
}

function mapBookSummary(book: Book): AuthorBookSummary {
  return {
    id: book.id,
    title: book.title,
    genre: book.genre,
    coverImage: book.coverImage,
    publicationYear: book.publicationYear,
    synopsis: book.synopsis
  }
}

export async function fetchAuthorBySlug(
  slug: string
): Promise<AuthorDetail | null> {
  const data = await fetchBooks()
  const books = [...data.library, ...data.recommended].filter(
    (book) => getAuthorSlug(book.author) === slug
  )

  if (books.length === 0) {
    return null
  }

  const mappedBooks = books.map(mapBookSummary)
  const categories = Array.from(
    new Set(books.flatMap((book) => book.categories))
  )
  const years = books.map((book) => book.publicationYear)
  const earliestYear = Math.min(...years)
  const latestYear = Math.max(...years)
  const profile = getProfile(books[0].author, slug)
  const sagas = authorSagas[slug] ?? defaultSaga(mappedBooks)

  return {
    profile,
    categories,
    books: mappedBooks,
    totalBooks: books.length,
    earliestYear,
    latestYear,
    sagas
  }
}

export async function fetchAuthorSlugs() {
  const data = await fetchBooks()
  const slugs = new Set(
    [...data.library, ...data.recommended].map((book) =>
      getAuthorSlug(book.author)
    )
  )
  return Array.from(slugs).map((slug) => ({ slug }))
}
