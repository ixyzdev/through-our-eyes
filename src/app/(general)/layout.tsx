import { GeneralHeader } from '@/components/layout/header/GeneralHeader'

export default function PublicLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <GeneralHeader />
      {children}
    </>
  )
}
