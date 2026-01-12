'use client'

import { SidebarHeader } from './components/SidebarHeader'
import { SidebarSection } from './components/SidebarSection'

import { SidebarSectionData } from './interfaces/sidebar.types'

interface SidebarProps {
  items: SidebarSectionData[]
}

export function Sidebar(props: SidebarProps) {
  return (
    <aside>
      <section className="my-6 ml-3 flex w-54 flex-col gap-6">
        <SidebarHeader />
        <nav className="flex flex-col gap-6">
          {props.items.map((section) => (
            <SidebarSection key={section.title} section={section} />
          ))}
        </nav>
      </section>
    </aside>
  )
}

export default Sidebar
