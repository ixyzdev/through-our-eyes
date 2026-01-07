export type ListVisibility = 'privada' | 'compartida'

export interface UserList {
  id: string
  name: string
  description: string
  bookCount: number
  updatedAt: string
  visibility: ListVisibility
}

const listsMock: UserList[] = [
  {
    id: 'list-1',
    name: 'Lecturas en curso',
    description: 'Libros con subrayados y metas activas para este mes.',
    bookCount: 4,
    updatedAt: 'Actualizada hoy',
    visibility: 'privada'
  },
  {
    id: 'list-2',
    name: 'Favoritos luminosos',
    description: 'Historias que quiero releer o recomendar en el club.',
    bookCount: 12,
    updatedAt: 'Actualizada hace 3 días',
    visibility: 'compartida'
  },
  {
    id: 'list-3',
    name: 'Ideas para rituales',
    description: 'Libros con ejercicios, fichas y prompts creativos.',
    bookCount: 7,
    updatedAt: 'Actualizada hace 1 semana',
    visibility: 'privada'
  }
]

export async function fetchUserLists(): Promise<UserList[]> {
  await new Promise((resolve) => setTimeout(resolve, 350))
  return JSON.parse(JSON.stringify(listsMock))
}
