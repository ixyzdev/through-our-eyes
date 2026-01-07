import { notFound } from 'next/navigation'

import AuthorDetail from '@/components/author/author-detail'
import { fetchAuthorBySlug, fetchAuthorSlugs } from '@/lib/authors'

export async function generateStaticParams() {
  return fetchAuthorSlugs()
}

export default async function AuthorPage({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const author = await fetchAuthorBySlug(slug)

  if (!author) {
    notFound()
  }

  return <AuthorDetail author={author} />
}
