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
  synopsis: string
  professionalDescription: string
  purchaseLink: string
  isbn: string
  translator: string
  publisher: string
  publicationYear: number
  language: string
  pages: number
  edition: string
  authorSection: string
  similarBooks: Array<{ title: string; author: string }>
  ratings: {
    average: number
    total: number
    breakdown: Array<{ label: string; count: number }>
    comments: Array<{
      id: string
      name: string
      rating: number
      date: string
      comment: string
    }>
  }
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
      lastOpened: 'Recomendado hoy',
      synopsis:
        'Una carta abierta al duelo que entrelaza memorias personales con la historia de Marie Curie y el arte de recomponerse.',
      professionalDescription:
        'Ensayo narrativo de corte autobiográfico que combina investigación y memoria para retratar la resiliencia femenina en la cultura europea.',
      purchaseLink:
        'https://www.buscalibre.com.co/libro-la-ridicula-idea-de-no-volver-a-verte/9788432220804/p/46647176',
      isbn: '978-84-322-2080-4',
      translator: 'No aplica',
      publisher: 'Seix Barral',
      publicationYear: 2013,
      language: 'Español',
      pages: 240,
      edition: '1ª edición',
      authorSection:
        'Rosa Montero es periodista y escritora española; su obra mezcla narrativa, ensayo y perfiles biográficos con una mirada íntima sobre la experiencia humana.',
      similarBooks: [
        { title: 'El año del pensamiento mágico', author: 'Joan Didion' },
        { title: 'La ridícula idea de no volver a verte (Club de lectura)', author: 'Rosa Montero' }
      ],
      ratings: {
        average: 4.6,
        total: 1284,
        breakdown: [
          { label: '5 estrellas', count: 860 },
          { label: '4 estrellas', count: 300 },
          { label: '3 estrellas', count: 92 },
          { label: '2 estrellas', count: 22 },
          { label: '1 estrella', count: 10 }
        ],
        comments: [
          {
            id: 'rec-1-comment-1',
            name: 'María P.',
            rating: 5,
            date: 'Feb 2024',
            comment:
              'Una lectura conmovedora que equilibra memoria y divulgación sin perder sensibilidad.'
          },
          {
            id: 'rec-1-comment-2',
            name: 'Jorge L.',
            rating: 4,
            date: 'Ene 2024',
            comment:
              'Me gustó el enfoque documental; la mezcla con Marie Curie es fascinante.'
          }
        ]
      }
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
      lastOpened: 'Basado en tus notas de sci-fi',
      synopsis:
        'Un científico despierta solo en una misión espacial con un objetivo imposible: salvar a la Tierra de la extinción.',
      professionalDescription:
        'Thriller de ciencia ficción dura con énfasis en resolución de problemas y ritmo cinematográfico, premiado por su narrativa accesible.',
      purchaseLink:
        'https://www.buscalibre.com.co/libro-project-hail-mary/9780593135204/p/53078960',
      isbn: '978-0-593-13520-4',
      translator: 'Javier Guerrero',
      publisher: 'Ballantine Books',
      publicationYear: 2021,
      language: 'Inglés',
      pages: 496,
      edition: '1ª edición',
      authorSection:
        'Andy Weir es autor de ciencia ficción con formación en ingeniería; sus novelas destacan por el rigor científico y el humor técnico.',
      similarBooks: [
        { title: 'The Martian', author: 'Andy Weir' },
        { title: 'Artemis', author: 'Andy Weir' }
      ],
      ratings: {
        average: 4.8,
        total: 2140,
        breakdown: [
          { label: '5 estrellas', count: 1700 },
          { label: '4 estrellas', count: 340 },
          { label: '3 estrellas', count: 80 },
          { label: '2 estrellas', count: 15 },
          { label: '1 estrella', count: 5 }
        ],
        comments: [
          {
            id: 'rec-2-comment-1',
            name: 'Lucas R.',
            rating: 5,
            date: 'Mar 2024',
            comment:
              'Ciencia ficción divertida y emotiva; no podía soltarlo.'
          },
          {
            id: 'rec-2-comment-2',
            name: 'Elena V.',
            rating: 4,
            date: 'Feb 2024',
            comment:
              'Mucho detalle científico, pero el corazón de la historia lo compensa.'
          }
        ]
      }
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
      lastOpened: 'Ayer',
      synopsis:
        'Un recorrido por la historia del libro y la lectura desde la Antigüedad hasta el mundo moderno.',
      professionalDescription:
        'Ensayo literario de alta divulgación que combina investigación histórica con estilo narrativo y sensibilidad poética.',
      purchaseLink:
        'https://www.buscalibre.com.co/libro-el-infinito-en-un-junco/9788417860794/p/50668265',
      isbn: '978-84-17860-79-4',
      translator: 'No aplica',
      publisher: 'Siruela',
      publicationYear: 2019,
      language: 'Español',
      pages: 452,
      edition: '1ª edición',
      authorSection:
        'Irene Vallejo es filóloga y ensayista; su obra explora la tradición clásica y la historia cultural con un tono narrativo cercano.',
      similarBooks: [
        { title: 'La biblioteca perdida', author: 'David M. Rubenstein' },
        { title: 'Los libros y la libertad', author: 'Luis Rodríguez' }
      ],
      ratings: {
        average: 4.7,
        total: 1876,
        breakdown: [
          { label: '5 estrellas', count: 1300 },
          { label: '4 estrellas', count: 430 },
          { label: '3 estrellas', count: 110 },
          { label: '2 estrellas', count: 24 },
          { label: '1 estrella', count: 12 }
        ],
        comments: [
          {
            id: 'book-1-comment-1',
            name: 'Paula M.',
            rating: 5,
            date: 'Mar 2024',
            comment:
              'Una carta de amor a los libros. Me dejó con ganas de releer clásicos.'
          },
          {
            id: 'book-1-comment-2',
            name: 'Diego S.',
            rating: 4,
            date: 'Feb 2024',
            comment:
              'Muy informativo y a la vez poético. Ideal para amantes de la lectura.'
          }
        ]
      }
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
      lastOpened: 'Hace 2 días',
      synopsis:
        'Guía práctica para construir hábitos sostenibles mediante cambios pequeños y consistentes.',
      professionalDescription:
        'Manual de autoayuda con base en ciencia del comportamiento, enfocado en sistemas y procesos diarios.',
      purchaseLink:
        'https://www.buscalibre.com.co/libro-habitos-atomicos/9788479539042/p/50971732',
      isbn: '978-84-7953-904-2',
      translator: 'Jorge Pizarro',
      publisher: 'Paidós',
      publicationYear: 2018,
      language: 'Español',
      pages: 328,
      edition: '1ª edición',
      authorSection:
        'James Clear es escritor y conferencista especializado en hábitos, rendimiento y toma de decisiones; mantiene un boletín sobre mejora continua.',
      similarBooks: [
        { title: 'El poder de los hábitos', author: 'Charles Duhigg' },
        { title: 'Essentialism', author: 'Greg McKeown' }
      ],
      ratings: {
        average: 4.5,
        total: 2450,
        breakdown: [
          { label: '5 estrellas', count: 1600 },
          { label: '4 estrellas', count: 620 },
          { label: '3 estrellas', count: 180 },
          { label: '2 estrellas', count: 35 },
          { label: '1 estrella', count: 15 }
        ],
        comments: [
          {
            id: 'book-2-comment-1',
            name: 'Laura B.',
            rating: 5,
            date: 'Ene 2024',
            comment:
              'Súper claro y aplicable; ya tengo nuevas rutinas.'
          },
          {
            id: 'book-2-comment-2',
            name: 'Mateo G.',
            rating: 4,
            date: 'Dic 2023',
            comment:
              'Repite algunas ideas, pero en general es muy útil.'
          }
        ]
      }
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
      lastOpened: 'Semana pasada',
      synopsis:
        'Una síntesis provocadora de la historia de la humanidad desde los primeros Homo sapiens hasta la actualidad.',
      professionalDescription:
        'Ensayo histórico con enfoque interdisciplinario que combina antropología, economía y cultura en un relato accesible.',
      purchaseLink:
        'https://www.buscalibre.com.co/libro-sapiens-de-animales-a-dioses/9788499924213/p/48638631',
      isbn: '978-84-9992-421-3',
      translator: 'Joandomènec Ros',
      publisher: 'Debate',
      publicationYear: 2014,
      language: 'Español',
      pages: 496,
      edition: '1ª edición',
      authorSection:
        'Yuval Noah Harari es historiador y profesor; sus obras exploran el impacto de la tecnología, la biología y la cultura en la humanidad.',
      similarBooks: [
        { title: 'Homo Deus', author: 'Yuval Noah Harari' },
        { title: 'Guns, Germs, and Steel', author: 'Jared Diamond' }
      ],
      ratings: {
        average: 4.4,
        total: 3100,
        breakdown: [
          { label: '5 estrellas', count: 1800 },
          { label: '4 estrellas', count: 860 },
          { label: '3 estrellas', count: 300 },
          { label: '2 estrellas', count: 90 },
          { label: '1 estrella', count: 50 }
        ],
        comments: [
          {
            id: 'book-3-comment-1',
            name: 'Sofía C.',
            rating: 5,
            date: 'Nov 2023',
            comment:
              'Me cambió la forma de ver la historia; muy recomendable.'
          },
          {
            id: 'book-3-comment-2',
            name: 'Andrés R.',
            rating: 4,
            date: 'Oct 2023',
            comment: 'Excelente síntesis, aunque algunas partes se hacen densas.'
          }
        ]
      }
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
      lastOpened: 'En cola',
      synopsis:
        'En una cafetería de Tokio, los clientes pueden viajar en el tiempo bajo reglas estrictas que revelan el valor del presente.',
      professionalDescription:
        'Novela breve con estructura episódica y tono melancólico, ideal para lectores de ficción introspectiva.',
      purchaseLink:
        'https://www.buscalibre.com.co/libro-before-the-coffee-gets-cold/9781526611120/p/50995732',
      isbn: '978-1-5266-1112-0',
      translator: 'Geoffrey Trousselot',
      publisher: 'Picador',
      publicationYear: 2015,
      language: 'Inglés',
      pages: 213,
      edition: '1ª edición',
      authorSection:
        'Toshikazu Kawaguchi es dramaturgo y novelista japonés; su obra se centra en la nostalgia y las segundas oportunidades.',
      similarBooks: [
        { title: 'Sweet Bean Paste', author: 'Durian Sukegawa' },
        { title: 'The Cat and the City', author: 'Nick Bradley' }
      ],
      ratings: {
        average: 4.2,
        total: 980,
        breakdown: [
          { label: '5 estrellas', count: 500 },
          { label: '4 estrellas', count: 300 },
          { label: '3 estrellas', count: 130 },
          { label: '2 estrellas', count: 30 },
          { label: '1 estrella', count: 20 }
        ],
        comments: [
          {
            id: 'book-4-comment-1',
            name: 'Nina A.',
            rating: 4,
            date: 'Sep 2023',
            comment: 'Corta y emotiva, perfecta para una tarde tranquila.'
          },
          {
            id: 'book-4-comment-2',
            name: 'Carlos D.',
            rating: 4,
            date: 'Ago 2023',
            comment: 'Historias sencillas con mucha carga emocional.'
          }
        ]
      }
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
      lastOpened: 'Hace 3 semanas',
      synopsis:
        'Ensayo crítico sobre la autoexplotación y el agotamiento en la sociedad contemporánea.',
      professionalDescription:
        'Filosofía contemporánea con estilo breve y contundente, centrada en la cultura del rendimiento.',
      purchaseLink:
        'https://www.buscalibre.com.co/libro-la-sociedad-del-cansancio/9788425435980/p/46850039',
      isbn: '978-84-254-3598-0',
      translator: 'Alberto Ciria',
      publisher: 'Herder',
      publicationYear: 2012,
      language: 'Español',
      pages: 128,
      edition: '1ª edición',
      authorSection:
        'Byung-Chul Han es filósofo y ensayista; sus textos cuestionan la cultura digital, el rendimiento y la subjetividad.',
      similarBooks: [
        { title: 'Psicopolítica', author: 'Byung-Chul Han' },
        { title: 'La sociedad de la transparencia', author: 'Byung-Chul Han' }
      ],
      ratings: {
        average: 4.1,
        total: 760,
        breakdown: [
          { label: '5 estrellas', count: 330 },
          { label: '4 estrellas', count: 260 },
          { label: '3 estrellas', count: 120 },
          { label: '2 estrellas', count: 30 },
          { label: '1 estrella', count: 20 }
        ],
        comments: [
          {
            id: 'book-5-comment-1',
            name: 'Rocío T.',
            rating: 5,
            date: 'Jun 2023',
            comment: 'Breve pero demoledor; te deja pensando.'
          },
          {
            id: 'book-5-comment-2',
            name: 'Iván M.',
            rating: 3,
            date: 'May 2023',
            comment: 'Interesante, aunque me habría gustado más desarrollo.'
          }
        ]
      }
    }
  ]
}

export async function fetchBooks(): Promise<BooksData> {
  await new Promise((resolve) => setTimeout(resolve, 500))
  return JSON.parse(JSON.stringify(booksMock))
}

export async function fetchBookById(id: string): Promise<Book | null> {
  const data = await fetchBooks()
  const allBooks = [...data.library, ...data.recommended]
  const book = allBooks.find((entry) => entry.id === id)
  return book ?? null
}
