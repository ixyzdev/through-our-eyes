// * Import de tipados
import { NavigationItem } from '../interfaces/home.interface'

import {
  Bookmark,
  BookmarkPlus,
  CalendarClock,
  Compass,
  Headphones,
  History,
  NotebookPen,
  Settings,
  UserCircle2
} from 'lucide-react'

export const navigationSections: {
  title: string
  items: NavigationItem[]
}[] = [
  {
    title: 'Panel principal',
    items: [
      {
        id: 'resumen',
        label: 'Resumen',
        icon: Compass,
        description: 'Vistas rápidas de tu progreso.',
        href: '/#resumen'
      },
      {
        id: 'recomendaciones',
        label: 'Recomendaciones',
        icon: Bookmark,
        description: 'Lecturas sugeridas según tu ritmo.',
        href: '/#recomendaciones'
      }
    ]
  },
  {
    title: 'Biblioteca viva',
    items: [
      {
        id: 'memorias',
        label: 'Recuerdos',
        icon: History,
        count: '3',
        description: 'Subrayados y fragmentos recientes.',
        href: '/#memorias'
      },
      {
        id: 'sesiones',
        label: 'Sesiones',
        icon: CalendarClock,
        count: '2',
        description: 'Rituales y sesiones agendadas.',
        href: '/#sesiones'
      },
      {
        id: 'listas',
        label: 'Listas & rituales',
        icon: BookmarkPlus,
        description: 'Colecciones y rutinas activas.',
        href: '/library'
      }
    ]
  },
  {
    title: 'Explora y configura',
    items: [
      {
        id: 'perfil',
        label: 'Perfil',
        icon: UserCircle2,
        description: 'Tu tarjeta pública de lectora.',
        href: '/profile'
      },
      {
        id: 'audio',
        label: 'Audiolibros',
        icon: Headphones,
        description: 'Escucha tus historias favoritas.',
        href: '/library'
      },
      {
        id: 'notas',
        label: 'Notas rápidas',
        icon: NotebookPen,
        description: 'Ideas capturadas en segundos.',
        href: '/library'
      },
      {
        id: 'configuracion',
        label: 'Configuración',
        icon: Settings,
        description: 'Preferencias, privacidad y accesos.',
        href: '/settings'
      }
    ]
  }
]
