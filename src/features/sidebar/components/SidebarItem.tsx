import Link from 'next/link'
import { cn } from '@/lib/utils'
import type { SidebarItem } from '../interfaces/sidebar.types'

type SidebarItemProps = {
  item: SidebarItem
  isActive: boolean
}

export function SidebarItem({ item, isActive }: SidebarItemProps) {
  const Icon = item.icon

  return (
    <Link
      href={item.href}
      className={cn(
        'group flex w-full items-center justify-between rounded-lg px-3 py-3 text-sm font-medium transition-colors',
        'text-foreground',
        'hover:bg-muted/70 hover:text-foreground',
        isActive && 'inset-surface'
      )}
    >
      <span className="flex items-start gap-3">
        <Icon className="group-hover:text-primary mt-0.5 h-4 w-4 transition-colors" />
        <span className="text-sm font-semibold">{item.label}</span>
      </span>
    </Link>
  )
}
