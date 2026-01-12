'use client'

import { usePathname } from 'next/navigation'
import { SidebarItem } from './SidebarItem'
import { type SidebarSectionData } from '../interfaces/sidebar.types'

type SidebarSectionProps = {
  section: SidebarSectionData
}

export function SidebarSection({ section }: SidebarSectionProps) {
  const pathname = usePathname()

  const hasActive = section.items.some((item) => item.href === pathname)

  return (
    <div className="space-y-2">
      <div className="space-y-1">
        {section.items.map((item, index) => {
          const isActive =
            item.href === pathname ||
            (!hasActive && pathname === '/' && index === 0)

          return <SidebarItem key={item.id} item={item} isActive={isActive} />
        })}
      </div>
    </div>
  )
}
