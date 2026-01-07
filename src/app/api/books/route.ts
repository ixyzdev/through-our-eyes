import { NextResponse } from 'next/server'

import { bookRepository } from './repository'
import { BookService } from './service'
import { NotFoundError, ValidationError } from './errors'

const service = new BookService(bookRepository)

export async function GET() {
  const books = await service.listBooks()

  return NextResponse.json({ data: books })
}

export async function POST(request: Request) {
  try {
    const payload = await request.json()
    const book = await service.createBook(payload)

    return NextResponse.json({ data: book }, { status: 201 })
  } catch (error) {
    return handleServiceError(error)
  }
}

function handleServiceError(error: unknown) {
  if (error instanceof ValidationError || error instanceof NotFoundError) {
    return NextResponse.json(
      { error: error.message },
      { status: error.statusCode }
    )
  }

  return NextResponse.json(
    { error: 'Ocurrió un error inesperado en la API.' },
    { status: 500 }
  )
}
