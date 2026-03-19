import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ExternalLink, ChevronRight, TrendingUp, DollarSign, BookOpen, Mail } from 'lucide-react'
import { buildMetadata } from '@/lib/seo'
import { niches, getNicheBySlug } from '@/lib/nicheData'
import { getAffiliateLink } from '@/lib/affiliateLinks'
import { EmailCapture } from '@/components/sections/email-capture'

export async function generateStaticParams() {
  return niches.map((n) => ({ slug: n.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const niche = getNicheBySlug(params.slug)
  if (!niche) return {}

  return buildMetadata({
    title: niche.title,
    description: niche.description,
    path: `/niche/${niche.slug}`,
  })
}

export default function NichePage({ params }: { params: { slug: string } }) {
  const niche = getNicheBySlug(params.slug)
  if (!niche) notFound()

  return (
    <div className="min-h-screen bg-white">
      {/* Hero / Header */}
      <section className="bg-background-warm border-b border-border-default py-14">
        <div className="max-w-container mx-auto px-6">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-1.5 text-sm text-text-secondary mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-brand-primary transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" aria-hidden />
            <Link href="/niche" className="hover:text-brand-primary transition-colors">Niches</Link>
            <ChevronRight className="w-3.5 h-3.5" aria-hidden />
            <span className="text-brand-ink font-medium">{niche.title.split(' for ').pop()}</span>
          </nav>

          <div className="flex items-start gap-4 max-w-3xl">
            <span className="text-5xl leading-none mt-1 flex-shrink-0" aria-hidden>{niche.emoji}</span>
            <div>
              <h1 className="text-[2rem] md:text-[2.75rem] font-extrabold text-brand-ink leading-tight">
                {niche.title}
              </h1>
              <p className="mt-4 text-[1.1rem] text-text-secondary leading-[1.75] max-w-2xl">
                {niche.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recommended Tools — THE MONEY SECTION */}
      <section className="py-14 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="flex items-center gap-2 mb-2">
            <DollarSign className="w-5 h-5 text-brand-primary" aria-hidden />
            <h2 className="text-[1.75rem] font-bold text-brand-ink">
              Recommended Tools for {niche.title.split(' for ').pop()}
            </h2>
          </div>
          <p className="text-text-secondary mb-8 max-w-2xl">
            These are the tools that directly impact your revenue as a creator in this niche. Every link is an affiliate link — disclosed and honest.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {niche.recommendedTools.map((tool) => {
              const href = getAffiliateLink(tool.slug) ?? `https://${tool.domain}`
              return (
                <div
                  key={tool.slug}
                  className="group rounded-xl border border-border-default bg-white p-5 hover:border-brand-primary/40 hover:shadow-md transition-all duration-200 flex flex-col"
                >
                  {/* Tool header */}
                  <div className="flex items-center gap-3 mb-3">
                    {/* Domain logo — initial badge fallback (no onError in server components) */}
                    <span className="rounded-md w-8 h-8 flex items-center justify-center flex-shrink-0 bg-brand-primary/10 text-brand-primaryDeep text-sm font-bold uppercase">
                      {tool.toolName.charAt(0)}
                    </span>
                    <div>
                      <p className="font-semibold text-brand-ink leading-tight">{tool.toolName}</p>
                      <p className="text-xs text-text-secondary">{tool.priceRange}</p>
                    </div>
                  </div>

                  {/* Why it matters for this niche */}
                  <p className="text-sm text-text-secondary leading-[1.65] flex-1 mb-4">
                    {tool.nicheDescription}
                  </p>

                  {/* Affiliate CTA */}
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="inline-flex items-center justify-center gap-1.5 w-full rounded-lg bg-brand-primary hover:bg-brand-primaryHover text-white text-sm font-semibold py-2.5 px-4 transition-colors duration-150"
                  >
                    {tool.ctaText}
                    <ExternalLink className="w-3.5 h-3.5" aria-hidden />
                  </a>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Monetization Tips */}
      <section className="py-14 bg-background-warm border-t border-border-default">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-5 h-5 text-brand-primary" aria-hidden />
              <h2 className="text-[1.75rem] font-bold text-brand-ink">
                How to Monetize as a {niche.title.split(' for ').pop()}
              </h2>
            </div>
            <p className="text-text-secondary mb-8">
              Niche-specific strategies — not generic advice. These are the income streams that work in your content category.
            </p>

            <ol className="space-y-4">
              {niche.monetizationTips.map((tip, i) => (
                <li key={i} className="flex gap-4">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-brand-primary/10 text-brand-primaryDeep text-sm font-bold flex items-center justify-center mt-0.5">
                    {i + 1}
                  </span>
                  <p className="text-[0.975rem] text-text-primary leading-[1.7]">{tip}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Related Guides */}
      <section className="py-14 bg-white border-t border-border-default">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-2">
              <BookOpen className="w-5 h-5 text-brand-primary" aria-hidden />
              <h2 className="text-[1.75rem] font-bold text-brand-ink">
                Guides for {niche.title.split(' for ').pop()}
              </h2>
            </div>
            <p className="text-text-secondary mb-8">
              Deep-dive guides relevant to your niche and monetization strategy.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {niche.relatedGuides.map((guide) => (
                <Link
                  key={guide.href}
                  href={guide.href}
                  className="group flex items-center gap-3 p-4 rounded-xl border border-border-default hover:border-brand-primary/40 hover:bg-background-warm transition-all duration-150"
                >
                  <span className="w-8 h-8 rounded-lg bg-brand-primary/10 flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-4 h-4 text-brand-primary" aria-hidden />
                  </span>
                  <span className="text-sm font-semibold text-brand-ink group-hover:text-brand-primary transition-colors leading-snug">
                    {guide.label}
                  </span>
                  <ChevronRight className="w-4 h-4 text-text-secondary ml-auto flex-shrink-0 group-hover:text-brand-primary transition-colors" aria-hidden />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Email Capture */}
      <div className="border-t border-border-default">
        <EmailCapture
          headline={`Get ${niche.title.split(' for ').pop()?.replace(' Creators', '').replace(' & ', ' and ')}-specific creator tips`}
          subheadline="Monetization strategies, tool updates, and Creator Rewards news tailored to your niche. Free."
          cta="Subscribe Free"
          showImage={false}
        />
      </div>

      {/* Cross-Niche Navigation */}
      {niche.relatedNiches.length > 0 && (
        <section className="py-12 bg-background-warm border-t border-border-default">
          <div className="max-w-container mx-auto px-6">
            <h2 className="text-[1.25rem] font-bold text-brand-ink mb-6">Explore Related Niches</h2>
            <div className="flex flex-wrap gap-3">
              {niche.relatedNiches.map((slug) => {
                const related = getNicheBySlug(slug)
                if (!related) return null
                return (
                  <Link
                    key={slug}
                    href={`/niche/${slug}`}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border-default bg-white hover:border-brand-primary/40 hover:bg-brand-primary/5 text-sm font-medium text-brand-ink transition-all duration-150"
                  >
                    <span aria-hidden>{related.emoji}</span>
                    {related.title.split(' for ').pop()}
                    <ChevronRight className="w-3.5 h-3.5 text-text-secondary" aria-hidden />
                  </Link>
                )
              })}
              <Link
                href="/niche"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-dashed border-border-default bg-white hover:border-brand-primary/40 text-sm font-medium text-text-secondary transition-all duration-150"
              >
                All niches
                <ChevronRight className="w-3.5 h-3.5" aria-hidden />
              </Link>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
