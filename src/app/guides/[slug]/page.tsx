import Container from '@/components/ui/Container'
import TableOfContents from '@/components/TableOfContents'
import EmailSignupForm from '@/components/EmailSignupForm'
import SocialShareButtons from '@/components/SocialShareButtons'
import ReadingProgressBar from '@/components/ReadingProgressBar'
import PageHeader from '@/components/PageHeader'
import RelatedGuides from '@/components/RelatedGuides'
import ScrollReveal from '@/components/ScrollReveal'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { buildMetadata } from '@/lib/seo'
import { compileGuide, getGuideBySlug, getGuideSlugs, getTableOfContents, getAllGuides } from '@/lib/mdx'
import { siteConfig } from '@/lib/site'

// A3: map guide category to illustration per BRAND.md Section 9
// earnings/RPM/success → landpress-marketing-2.png
// tools/comparisons/roundups → landpress-marketing-3.png
// eligibility/getting-started → landpress-marketing-hero.png
// email/payout → landpress-marketing-4.png
function getIllustrationForCategory(category?: string): string {
  if (!category) return '/assets/brand-images/landpress-marketing-hero.png'
  const lower = category.toLowerCase()
  if (lower.includes('email') || lower.includes('payout') || lower.includes('payment')) {
    return '/assets/brand-images/landpress-marketing-4.png'
  }
  if (lower.includes('earnings') || lower.includes('rpm') || lower.includes('monetization') || lower.includes('case study') || lower.includes('strategy') || lower.includes('seasonal') || lower.includes('niche')) {
    return '/assets/brand-images/landpress-marketing-2.png'
  }
  if (lower.includes('tools') || lower.includes('comparison') || lower.includes('affiliate')) {
    return '/assets/brand-images/landpress-marketing-3.png'
  }
  // Eligibility, application, troubleshooting, hub, growth, international, creator rewards → hero
  return '/assets/brand-images/landpress-marketing-hero.png'
}

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
      <ScrollReveal />
      <ReadingProgressBar />

      {/* A1-A3: Page header band — two-column on desktop per BRAND.md */}
      <section className="bg-[var(--color-surface-warm)] py-12 md:py-16">
        <Container>
          <div className="grid items-center gap-12 md:grid-cols-[3fr_2fr]">
            {/* A2: LEFT column — breadcrumb, badge, H1, description, meta */}
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
            {/* A3: RIGHT column — illustration matched to guide category */}
            <div className="relative hidden h-[320px] w-full md:block">
              <Image
                src={getIllustrationForCategory(frontmatter.category)}
                alt={`Illustration for ${frontmatter.category ?? 'guide'} content`}
                fill
                className="object-contain object-right"
              />
            </div>
          </div>
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

          {/* A5: two-column — LEFT sticky ToC, RIGHT article prose */}
          <div className="flex gap-12">
            {/* A5/A6: LEFT column — sticky ToC, desktop only */}
            {toc.length > 0 ? (
              <aside className="hidden w-56 flex-shrink-0 lg:block xl:w-64">
                <TableOfContents items={toc} sidebar={true} />
              </aside>
            ) : null}

            {/* RIGHT column — article prose */}
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

              {/* A9: Inline email capture after content — data-reveal for scroll animation */}
              <div className="reveal mt-12" data-reveal>
                <EmailSignupForm variant="inline" />
              </div>
            </article>
          </div>

          {/* A10: Related guides strip — data-reveal for scroll animation */}
          {related.length > 0 ? (
            <div className="reveal mt-16 border-t border-[var(--color-border)] pt-12" data-reveal>
              <RelatedGuides guides={related} />
            </div>
          ) : null}
        </Container>
      </section>
    </>
  )
}
