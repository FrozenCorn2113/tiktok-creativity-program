import Container from '@/components/ui/Container'
import TableOfContents from '@/components/TableOfContents'
import EmailSignupForm from '@/components/EmailSignupForm'
import SocialShareButtons from '@/components/SocialShareButtons'
import ReadingProgressBar from '@/components/ReadingProgressBar'
import CommentSection from '@/components/CommentSection'
import Button from '@/components/ui/Button'
import WorkingIllustration from '@/components/illustrations/WorkingIllustration'
import { notFound } from 'next/navigation'
import { buildMetadata } from '@/lib/seo'
import { compileGuide, getGuideBySlug, getGuideSlugs, getTableOfContents } from '@/lib/mdx'
import { siteConfig } from '@/lib/site'
import Link from 'next/link'

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

  return (
    <section className="py-12">
      <ReadingProgressBar />
      <Container>
        <div className="grid gap-10 lg:grid-cols-[220px_1fr_200px]">
          {/* Left Sidebar: Table of Contents */}
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <TableOfContents items={toc} />
            </div>
          </aside>

          {/* Main Article Content */}
          <article>
            <header className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-text-subtle)]">
                {frontmatter.category ?? 'Guide'}
              </p>
              <h1 className="text-3xl font-extrabold text-[var(--color-text)]">
                {frontmatter.title}
              </h1>
              <p className="text-base text-[var(--color-text-muted)]">{frontmatter.description}</p>
              <div className="text-xs text-[var(--color-text-subtle)]">
                Updated {frontmatter.date} · {frontmatter.readingTime ?? '8 min read'}
              </div>
              <SocialShareButtons
                url={`${siteConfig.url}/guides/${frontmatter.slug}`}
                title={frontmatter.title}
              />
            </header>

            <div className="prose prose-slate mt-8 max-w-none">
              {compiled.content}
            </div>

            {/* CTA Button */}
            <div className="mt-10">
              <Link href="/resources">
                <Button size="lg">Get the Pro Toolkit</Button>
              </Link>
            </div>

            {/* Bottom Tab Navigation */}
            {toc.length > 0 && (
              <div className="mt-10 flex flex-wrap gap-1 border-b border-[var(--color-border)]">
                {toc
                  .filter((item) => item.level === 2)
                  .map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="border-b-2 border-transparent px-4 py-2 text-sm font-medium text-[var(--color-text-muted)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                    >
                      {item.title}
                    </a>
                  ))}
              </div>
            )}

            <div className="mt-10">
              <EmailSignupForm variant="inline" />
            </div>
            <div className="mt-10">
              <CommentSection />
            </div>
          </article>

          {/* Right Sidebar: Illustration */}
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <WorkingIllustration className="w-full" />
            </div>
          </aside>
        </div>
      </Container>
    </section>
  )
}
