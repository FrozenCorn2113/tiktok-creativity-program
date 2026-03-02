import Container from '@/components/ui/Container'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'
import { getGuidesByCategory, getAllGuides } from '@/lib/mdx'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Educational Guides Index',
  description:
    'Everything TikTok creators need to know about eligibility, qualifying, and earning.',
  path: '/guides',
})

export default function GuidesPage() {
  const categorized = getGuidesByCategory()
  const featuredGuide = getAllGuides().find((g) => g.slug === 'creator-rewards-2026')

  const categories = [
    { name: 'Eligibility', guides: categorized.Eligibility },
    { name: 'Application', guides: categorized.Application },
    { name: 'Earnings', guides: categorized.Earnings },
    { name: 'Tools', guides: categorized.Tools },
  ]

  return (
    <>
      <ScrollReveal />
      <section className="bg-white py-16">
        <Container>
          {/* Centered page header */}
          <div className="mx-auto max-w-2xl text-center reveal" data-reveal>
            <h1 className="text-4xl font-extrabold text-[var(--color-text)]">
              Educational Guides Index
            </h1>
            <p className="mt-4 text-base text-[var(--color-text-muted)]">
              Everything TikTok creators need to know about eligibility, qualifying, and earning.
            </p>
          </div>

          {/* Featured Guide */}
          {featuredGuide && (
            <div className="mx-auto mt-10 max-w-2xl reveal" data-reveal>
              <div className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface-warm)] p-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-accent)]">
                  Featured Guide
                </p>
                <h2 className="mt-2 text-xl font-semibold text-[var(--color-text)]">
                  The Complete TikTok Creator Rewards Checklist
                </h2>
                <p className="mt-2 text-sm text-[var(--color-text-muted)]">
                  Master the requirements and boost your chances of acceptance.
                </p>
                <Link
                  href={`/guides/${featuredGuide.slug}`}
                  className="mt-3 inline-block text-sm font-semibold text-[var(--color-accent)] hover:underline"
                >
                  Read Guide &rarr;
                </Link>
              </div>
            </div>
          )}

          {/* 4-Column Category Grid */}
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((cat) => (
              <div key={cat.name} className="reveal" data-reveal>
                <h3 className="text-base font-bold text-[var(--color-text)]">{cat.name}</h3>
                <ul className="mt-4 space-y-3">
                  {cat.guides.map((guide) => (
                    <li key={guide.slug} className="flex items-start gap-2">
                      <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-[var(--color-accent)]" />
                      <Link
                        href={`/guides/${guide.slug}`}
                        className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent)]"
                      >
                        {guide.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
