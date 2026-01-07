export type BookStatus = 'draft' | 'published'

export type Book = {
  id: string
  title: string
  author: string
  summary?: string
  status: BookStatus
  createdAt: string
  updatedAt: string
}

export type CreateBookInput = {
  title: string
  author: string
  summary?: string
  status?: BookStatus
}

export type UpdateBookInput = Partial<Omit<CreateBookInput, 'status'>> & {
  status?: BookStatus
}
