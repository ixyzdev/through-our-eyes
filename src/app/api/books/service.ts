import { NotFoundError, ValidationError } from './errors'
import type { Book, CreateBookInput, UpdateBookInput } from './types'
import type { BookRepository } from './repository'

const ALLOWED_STATUSES: Book['status'][] = ['draft', 'published']

export class BookService {
  constructor(private readonly repository: BookRepository) {}

  async listBooks(): Promise<Book[]> {
    return this.repository.list()
  }

  async getBookById(id: string): Promise<Book> {
    const book = await this.repository.getById(id)

    if (!book) {
      throw new NotFoundError('El libro solicitado no existe.')
    }

    return book
  }

  async createBook(input: CreateBookInput): Promise<Book> {
    this.validateCreateInput(input)

    return this.repository.create({
      ...input,
      status: input.status ?? 'draft'
    })
  }

  async updateBook(id: string, input: UpdateBookInput): Promise<Book> {
    this.validateUpdateInput(input)

    const updated = await this.repository.update(id, input)

    if (!updated) {
      throw new NotFoundError('No encontramos el libro para actualizar.')
    }

    return updated
  }

  async deleteBook(id: string): Promise<void> {
    const removed = await this.repository.remove(id)

    if (!removed) {
      throw new NotFoundError('No encontramos el libro para eliminar.')
    }
  }

  private validateCreateInput(input: CreateBookInput) {
    if (!input.title?.trim()) {
      throw new ValidationError('El título es obligatorio.')
    }

    if (!input.author?.trim()) {
      throw new ValidationError('El autor es obligatorio.')
    }

    if (input.status && !ALLOWED_STATUSES.includes(input.status)) {
      throw new ValidationError('El estado del libro no es válido.')
    }
  }

  private validateUpdateInput(input: UpdateBookInput) {
    if (input.title !== undefined && !input.title.trim()) {
      throw new ValidationError('El título no puede estar vacío.')
    }

    if (input.author !== undefined && !input.author.trim()) {
      throw new ValidationError('El autor no puede estar vacío.')
    }

    if (input.status && !ALLOWED_STATUSES.includes(input.status)) {
      throw new ValidationError('El estado del libro no es válido.')
    }
  }
}
