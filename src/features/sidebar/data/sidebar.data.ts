// * Import de tipados
import { SidebarItem, SidebarSectionData } from '../interfaces/sidebar.types'

import {
  BookMarked,
  // BookmarkPlus,
  // CalendarClock,
  // Headphones,
  // History,
  // NotebookPen,
  Settings,
  UserCircle2,
  House
} from 'lucide-react'

import { AiOutlineHome } from 'react-icons/ai'

export const sidebarSection: SidebarSectionData[] = [
  {
    title: 'Panel principal',
    items: [
      {
        id: 'principal',
        label: 'Principal',
        icon: House,

        href: '/home'
      },
      {
        id: 'perfil',
        label: 'Perfil',
        icon: UserCircle2,
        href: '/profile'
      },
      {
        id: 'bilbioteca',
        label: 'Bilbioteca',
        icon: BookMarked,

        href: '/library'
      },
      {
        id: 'configuracion',
        label: 'Configuración',
        icon: Settings,

        href: '/settings'
      }
    ]
  }
  // {
  //   title: 'Biblioteca viva',
  //   items: [
  //     {
  //       id: 'memorias',
  //       label: 'Recuerdos',
  //       icon: History,
  //       count: '3',
  //       description: 'Subrayados y fragmentos recientes.',
  //       href: '/#memorias'
  //     },
  //     {
  //       id: 'sesiones',
  //       label: 'Sesiones',
  //       icon: CalendarClock,
  //       count: '2',
  //       description: 'Rituales y sesiones agendadas.',
  //       href: '/#sesiones'
  //     },
  //     {
  //       id: 'listas',
  //       label: 'Listas & rituales',
  //       icon: BookmarkPlus,
  //       description: 'Colecciones y rutinas activas.',
  //       href: '/library'
  //     }
  //   ]
  // }
  // {
  //   title: 'Explora y configura',
  //   items: [

  //     {
  //       id: 'audio',
  //       label: 'Audiolibros',
  //       icon: Headphones,
  //       description: 'Escucha tus historias favoritas.',
  //       href: '/library'
  //     },
  //     {
  //       id: 'notas',
  //       label: 'Notas rápidas',
  //       icon: NotebookPen,
  //       description: 'Ideas capturadas en segundos.',
  //       href: '/library'
  //     },
  //     {
  //       id: 'configuracion',
  //       label: 'Configuración',
  //       icon: Settings,
  //       description: 'Preferencias, privacidad y accesos.',
  //       href: '/settings'
  //     }
  //   ]
  // }
]
