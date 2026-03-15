import Container from '@/components/ui/Container'
import TableOfContents from '@/components/TableOfContents'
import EmailSignupForm from '@/components/EmailSignupForm'
import SocialShareButtons from '@/components/SocialShareButtons'
import ReadingProgressBar from '@/components/ReadingProgressBar'
import PageHeader from '@/components/PageHeader'
import RelatedGuides from '@/components/RelatedGuides'
import { notFound } from 'next/navigation'
import { buildMetadata } from '@/lib/seo'
import { compileGuide, getGuideBySlug, getGuideSlugs, getTableOfContents, getAllGuides } from '@/lib/mdx'
import { siteConfig } from '@/lib/site'

type GuidePageProps = {
  params: { slug: string }
}

export async function generateStaticParams() {
  return getGuideSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: GuidePageProps) {
  const guide = getGuideBySlug(params.slug)
  if (!guide) return {}

  const { frontmatter } = guide
  return buildMetadata({
    title: frontmatter.title,
    description: frontmatter.description,
    path: `/guides/${frontmatter.slug}`,
    image: frontmatter.image,
  })
}

export default async function GuidePage({ params }: GuidePageProps) {
  const guide = getGuideBySlug(params.slug)
  if (!guide) notFound()

  const { frontmatter, content } = guide
  const toc = getTableOfContents(content)
  const compiled = await compileGuide(content)

  // Build related guides — same category, excluding current
  const related = getAllGuides()
    .filter((g) => g.slug !== frontmatter.slug && g.category === frontmatter.category)
    .slice(0, 3)
    .map((g) => ({
      title: g.title,
      description: g.description ?? '',
      href: `/guides/${g.slug}`,
      category: g.category,
      readTime: g.readingTime,
    }))

  const articleUrl = `${siteConfig.url}/guides/${frontmatter.slug}`
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: frontmatter.title,
    description: frontmatter.description,
    datePublished: frontmatter.date,
    dateModified: frontmatter.date,
    url: articleUrl,
    image: frontmatter.image ?? `${siteConfig.url}/og-default.png`,
    author: { '@type': 'Organization', name: siteConfig.name, url: siteConfig.url },
    publisher: { '@type': 'Organization', name: siteConfig.name, url: siteConfig.url },
    keywords: frontmatter.keywords?.join(', '),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ReadingProgressBar />

      {/* Page header band */}
      <section className="bg-[var(--color-surface-warm)] py-10">
        <Container>
          <PageHeader
            breadcrumbs={[
              { label: 'Home', href: '/' },
              { label: 'Guides', href: '/guides' },
              { label: frontmatter.title, href: `/guides/${frontmatter.slug}` },
            ]}
            category={frontmatter.category ?? 'Guide'}
            title={frontmatter.title}
            description={frontmatter.description}
            updatedAt={frontmatter.date}
            readTime={frontmatter.readingTime ?? '8 min'}
          />
        </Container>
      </section>

      {/* Article body */}
      <section className="bg-white py-10">
        <Container>
          {/* Mobile: collapsible TOC above content */}
          {toc.length > 0 ? (
            <div className="mb-8 lg:hidden">
              <TableOfContents items={toc} sidebar={false} />
            </div>
          ) : null}

          <div className="flex gap-12">
            {/* Main article column */}
            <article className="min-w-0 flex-1">
              {/* Social share */}
              <div className="mb-6">
                <SocialShareButtons
                  url={articleUrl}
                  title={frontmatter.title}
                />
              </div>

              {/* Prose content — max-w-prose, NOT max-w-none */}
              <div className="prose prose-slate max-w-prose">
                {compiled.content}
              </div>

              {/* Inline email capture after content */}
              <div className="mt-12">
                <EmailSignupForm variant="inline" />
              </div>
            </article>

            {/* Desktop: sticky sidebar ToC */}
            {toc.length > 0 ? (
              <aside className="hidden w-56 flex-shrink-0 lg:block xl:w-64">
                <TableOfContents items={toc} sidebar={true} />
              </aside>
            ) : null}
          </div>

          {/* Related guides strip */}
          {related.length > 0 ? (
            <div className="mt-16 border-t border-[var(--color-border)] pt-12">
              <RelatedGuides guides={related} />
            </div>
          ) : null}
        </Container>
      </section>
    </>
  )
}
