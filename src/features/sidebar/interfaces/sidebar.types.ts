import type { ElementType } from 'react'

export type SidebarItem = {
  id: string
  label: string
  href: string
  icon: ElementType
}

export type SidebarSectionData = {
  title: string
  items: SidebarItem[]
}
