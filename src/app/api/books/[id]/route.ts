import { NextResponse } from 'next/server'

import { bookRepository } from '../repository'
import { BookService } from '../service'
import { NotFoundError, ValidationError } from '../errors'

const service = new BookService(bookRepository)

type RouteContext = {
  params: {
    id: string
  }
}

export async function GET(_: Request, context: RouteContext) {
  try {
    const book = await service.getBookById(context.params.id)

    return NextResponse.json({ data: book })
  } catch (error) {
    return handleServiceError(error)
  }
}

export async function PUT(request: Request, context: RouteContext) {
  try {
    const payload = await request.json()
    const book = await service.updateBook(context.params.id, payload)

    return NextResponse.json({ data: book })
  } catch (error) {
    return handleServiceError(error)
  }
}

export async function DELETE(_: Request, context: RouteContext) {
  try {
    await service.deleteBook(context.params.id)

    return NextResponse.json({ data: { id: context.params.id } })
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
