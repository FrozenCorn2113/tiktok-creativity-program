import Container from '@/components/ui/Container'
import PageHeader from '@/components/PageHeader'
import ScrollReveal from '@/components/ScrollReveal'
import { getAllGuides } from '@/lib/mdx'
import { buildMetadata } from '@/lib/seo'
import GuidesListClient from './GuidesListClient'

export const metadata = buildMetadata({
  title: 'Educational Guides Index',
  description:
    'Everything TikTok creators need to know about eligibility, qualifying, and earning.',
  path: '/guides',
})

export default function GuidesPage() {
  const allGuides = getAllGuides()

  const guides = allGuides.map((g) => ({
    slug: g.slug,
    title: g.title,
    description: g.description ?? '',
    category: g.category ?? '',
    readTime: g.readingTime ?? '',
  }))

  return (
    <>
      <ScrollReveal />

      {/* Page header band */}
      <section className="bg-[var(--color-surface-warm)] py-14">
        <Container>
          <div className="reveal mx-auto max-w-2xl" data-reveal>
            <PageHeader
              breadcrumbs={[
                { label: 'Home', href: '/' },
                { label: 'Guides', href: '/guides' },
              ]}
              title="Educational Guides Index"
              description="Everything TikTok creators need to know about eligibility, qualifying, and earning."
            />
          </div>
        </Container>
      </section>

      {/* Guide listing — client for filter interactivity */}
      <section className="bg-white py-14">
        <Container>
          <GuidesListClient guides={guides} />
        </Container>
      </section>
    </>
  )
}
