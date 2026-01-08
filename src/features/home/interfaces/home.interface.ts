import type { LucideIcon } from 'lucide-react'

export interface NavigationItem {
  id: string
  label: string
  icon: LucideIcon
  count?: string
  description: string
  href: string
}
