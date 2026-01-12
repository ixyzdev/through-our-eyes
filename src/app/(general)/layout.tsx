'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/providers/AuthProvider'
import { Sidebar } from '@/features/sidebar/Sidebar'
import { GeneralHeader } from '@/components/layout/header/GeneralHeader'
import { BsLayoutSidebar } from 'react-icons/bs'

import { sidebarSection } from '@/features/sidebar/data/sidebar.data'

export default function PrivateLayout({
  children
}: {
  children: React.ReactNode
}) {
  const { user, loading } = useAuth()
  const router = useRouter()
  const [sidebarOpen, setSidebarOpen] = useState(true)

  useEffect(() => {
    if (!loading && !user) {
      router.replace('/auth')
    }
  }, [loading, user, router])

  if (loading || !user) return null

  return (
    <section className="flex min-h-screen">
      {sidebarOpen && <Sidebar items={sidebarSection} />}

      <div className="inset-surface mx-3 my-2 flex flex-1 flex-col">
        <div className="flex items-center justify-between px-2">
          <button
            type="button"
            onClick={() => setSidebarOpen((v) => !v)}
            aria-label="Toggle sidebar"
          >
            <BsLayoutSidebar className="size-8" />
          </button>

          <GeneralHeader />
        </div>

        <main className="flex-1">{children}</main>
      </div>
    </section>
  )
}
