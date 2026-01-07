import type { Book, CreateBookInput, UpdateBookInput } from './types'

export interface BookRepository {
  list(): Promise<Book[]>
  getById(id: string): Promise<Book | null>
  create(input: CreateBookInput): Promise<Book>
  update(id: string, input: UpdateBookInput): Promise<Book | null>
  remove(id: string): Promise<boolean>
}

const initialBooks: Book[] = [
  {
    id: 'bk-001',
    title: 'La ciudad y los perros',
    author: 'Mario Vargas Llosa',
    summary: 'Un retrato intenso de la adolescencia y el poder.',
    status: 'published',
    createdAt: new Date('2024-01-12T10:00:00.000Z').toISOString(),
    updatedAt: new Date('2024-01-12T10:00:00.000Z').toISOString()
  },
  {
    id: 'bk-002',
    title: 'Distancia de rescate',
    author: 'Samanta Schweblin',
    summary: 'Una historia sobre maternidad, miedo y vínculos.',
    status: 'draft',
    createdAt: new Date('2024-02-03T15:30:00.000Z').toISOString(),
    updatedAt: new Date('2024-02-03T15:30:00.000Z').toISOString()
  }
]

class InMemoryBookRepository implements BookRepository {
  private readonly store = new Map<string, Book>()

  constructor(seed: Book[]) {
    seed.forEach((book) => this.store.set(book.id, book))
  }

  async list(): Promise<Book[]> {
    return Array.from(this.store.values())
  }

  async getById(id: string): Promise<Book | null> {
    return this.store.get(id) ?? null
  }

  async create(input: CreateBookInput): Promise<Book> {
    const now = new Date().toISOString()
    const book: Book = {
      id: `bk-${crypto.randomUUID()}`,
      title: input.title,
      author: input.author,
      summary: input.summary,
      status: input.status ?? 'draft',
      createdAt: now,
      updatedAt: now
    }

    this.store.set(book.id, book)

    return book
  }

  async update(id: string, input: UpdateBookInput): Promise<Book | null> {
    const existing = this.store.get(id)

    if (!existing) {
      return null
    }

    const updated: Book = {
      ...existing,
      ...input,
      updatedAt: new Date().toISOString()
    }

    this.store.set(id, updated)

    return updated
  }

  async remove(id: string): Promise<boolean> {
    return this.store.delete(id)
  }
}

export const bookRepository: BookRepository =
  new InMemoryBookRepository(initialBooks)
