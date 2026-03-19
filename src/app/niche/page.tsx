import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight, Wrench } from 'lucide-react'
import { niches } from '@/lib/nicheData'
import { EmailCapture } from '@/components/sections/email-capture'
import { buildMetadata } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'TikTok Creator Niches — Monetization by Content Type',
  description:
    'Find your niche and get tailored monetization strategies, affiliate tool recommendations, and guides for your specific content type on TikTok.',
  path: '/niche',
})

export default function NicheIndexPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-background-warm border-b border-border-default py-16">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-primaryDeep bg-brand-primarySoft border border-brand-primary/20 rounded-full px-3 py-1 mb-4">
              <Wrench className="w-3 h-3" aria-hidden />
              Niche Guides
            </div>
            <h1 className="text-[2.25rem] md:text-[3rem] font-extrabold text-brand-ink leading-tight">
              Monetization by Niche
            </h1>
            <p className="mt-4 text-[1.125rem] text-text-secondary leading-[1.7]">
              Generic TikTok advice misses the point. Your niche determines your RPM, your best affiliate tools, and your revenue ceiling. Find yours below and get strategies that actually apply to your content.
            </p>
            <p className="mt-2 text-sm text-text-secondary">
              {niches.length} niches &mdash; each with affiliate tool recommendations, monetization strategies, and relevant guides.
            </p>
          </div>
        </div>
      </section>

      {/* Niche Grid */}
      <section className="py-14 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {niches.map((niche) => (
              <Link
                key={niche.slug}
                href={`/niche/${niche.slug}`}
                className="group flex flex-col rounded-xl border border-border-default bg-white hover:border-brand-primary/40 hover:shadow-md transition-all duration-200 overflow-hidden"
              >
                {/* Card header */}
                <div className="bg-background-warm p-5 border-b border-border-default">
                  <div className="flex items-start gap-3">
                    <span className="text-3xl leading-none flex-shrink-0" aria-hidden>{niche.emoji}</span>
                    <div>
                      <h2 className="font-bold text-brand-ink text-[1rem] leading-snug group-hover:text-brand-primary transition-colors">
                        {niche.title.split(' for ').pop()}
                      </h2>
                    </div>
                  </div>
                </div>

                {/* Card body */}
                <div className="p-5 flex flex-col flex-1">
                  <p className="text-sm text-text-secondary leading-[1.65] flex-1">
                    {niche.description.split('.')[0]}.
                  </p>

                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xs text-text-secondary font-medium">
                      {niche.recommendedTools.length} tools recommended
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-brand-primary group-hover:gap-1.5 transition-all">
                      View guide
                      <ChevronRight className="w-3.5 h-3.5" aria-hidden />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Email Capture */}
      <div className="border-t border-border-default">
        <EmailCapture
          headline="Get niche-specific creator tips"
          subheadline="Monetization strategies, affiliate deals, and Creator Rewards updates — matched to your content type."
          cta="Subscribe Free"
          showImage={false}
        />
      </div>
    </div>
  )
}
