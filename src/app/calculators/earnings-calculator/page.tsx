import Container from '@/components/ui/Container'
import EarningsCalculator from '@/components/EarningsCalculator'
import CalloutBox from '@/components/CalloutBox'
import ComparisonTable from '@/components/ComparisonTable'
import PageHeader from '@/components/PageHeader'
import ScrollReveal from '@/components/ScrollReveal'
import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'TikTok Earnings Calculator',
  description:
    'Estimate your TikTok Creator Rewards payout based on qualified views, RPM, and the Additional Reward bonus.',
}

const faqRows = [
  {
    cells: [
      'What RPM should I use?',
      "Start with $0.60 to $0.80 if you're in the US, UK, or Germany and your content is consistently 1+ minute.",
    ],
  },
  {
    cells: [
      'Why are qualified views lower than total views?',
      "TikTok only counts eligible For You Page views after you join the program. Duets, Stitches, and Photo Mode don't count.",
    ],
  },
  {
    cells: [
      'Does the Additional Reward always apply?',
      "No. It's a bonus for content that meets quality and engagement thresholds. Use the toggle to model both outcomes.",
    ],
  },
]


export default function EarningsCalculatorPage() {
  return (
    <>
      <ScrollReveal />

      {/* C1-C3: two-column header band with illustration */}
      <section className="bg-[#FFF7ED] py-12 md:py-16">
        <Container>
          <div className="grid items-center gap-12 md:grid-cols-[3fr_2fr]">
            {/* C2: LEFT column */}
            <PageHeader
              breadcrumbs={[
                { label: 'Home', href: '/' },
                { label: 'Calculators', href: '/calculators' },
                { label: 'Earnings Calculator', href: '/calculators/earnings-calculator' },
              ]}
              category="Interactive tool"
              title="TikTok Creator Rewards earnings calculator"
              description="Estimate Creator Rewards payouts based on views, RPM, and the Additional Reward bonus. Designed for 1+ minute content posted after joining the program."
            />
            {/* C3: RIGHT column — landpress-marketing-hero.png */}
            <div className="relative hidden h-[320px] w-full md:block">
              <Image
                src="/assets/brand-images/landpress-marketing-hero.png"
                alt="Creator analyzing TikTok earnings with calculator"
                fill
                className="object-contain object-right"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="py-12">
      <Container>
        <div className="space-y-10">
          {/* Calculator component */}
          <EarningsCalculator />

          {/* Contextual guidance — two column */}
          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
            <div className="space-y-4">
              <h2 className="text-[var(--text-h2)] font-bold text-[var(--color-ink-strong)]">
                How it works
              </h2>
              <p className="text-[var(--text-small)] leading-[1.7] text-[var(--color-text-muted)]">
                We assume qualified views are roughly 82% of total views, based on average creator
                reports. RPM varies by country, content quality, and viewer behavior — so we let you
                choose a realistic range.
              </p>
              <CalloutBox type="tip" title="Improve your RPM">
                Focus on 1+ minute videos with high completion rates, clear audio, and a strong hook
                in the first 2 seconds.
              </CalloutBox>
              <p className="text-[var(--text-small)] text-[var(--color-text-muted)]">
                Want a deeper breakdown?{' '}
                <Link
                  href="/guides/optimize-rpm"
                  className="font-semibold text-[var(--color-primary)] hover:underline"
                >
                  Read the RPM optimization guide &rarr;
                </Link>
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-[var(--text-h3)] font-semibold text-[var(--color-ink-strong)]">
                FAQ
              </h3>
              <ComparisonTable columns={['Question', 'Answer']} rows={faqRows} />
            </div>
          </div>

          {/* C10: "What affects your results?" — required section per BRAND.md */}
          <div className="max-w-prose space-y-4">
            <h2 className="text-[var(--text-h2)] font-bold text-[var(--color-ink-strong)]">
              What affects your results?
            </h2>
            <p className="text-[var(--text-body)] leading-[1.7] text-[var(--color-text-muted)]">
              Your RPM is the single biggest variable. Creators in the US, UK, Germany, and Australia
              typically see RPMs of $0.50–$1.20. Creators in other eligible countries often see $0.20–$0.50.
              Niche matters too — finance, tech, and educational content consistently earns more than
              entertainment or trends.
            </p>
            <p className="text-[var(--text-body)] leading-[1.7] text-[var(--color-text-muted)]">
              The qualified view threshold is the other lever. TikTok only counts views that meet the
              program&apos;s criteria: organic FYP delivery, video length of 1+ minute, and no content
              exclusions (Duets, Stitches, or Photo Mode). Creators typically see 70–90% of total
              views qualify. Lower numbers usually mean your content mix includes excluded formats.
            </p>
            <p className="text-[var(--text-body)] leading-[1.7] text-[var(--color-text-muted)]">
              The Additional Reward bonus adds up to 20% on top of your base payout, but it
              isn&apos;t guaranteed. TikTok applies it based on quality and engagement signals.
              Consistently 1+ minute videos with high completion rates and strong comments tend to
              earn it most reliably.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/guides/maximize-qualified-views"
                className="text-sm font-[500] text-[#F4A261] hover:underline"
              >
                How to maximize qualified views &rarr;
              </Link>
              <Link
                href="/guides/optimize-rpm"
                className="text-sm font-[500] text-[#F4A261] hover:underline"
              >
                How to improve your RPM &rarr;
              </Link>
              <Link
                href="/guides/additional-reward-criteria-2026"
                className="text-sm font-[500] text-[#F4A261] hover:underline"
              >
                Additional Reward criteria explained &rarr;
              </Link>
            </div>
          </div>

          {/* C11: Related calculators — 2-col grid */}
          <div className="reveal" data-reveal>
            <h2 className="mb-4 text-[var(--text-h2)] font-bold text-[var(--color-ink-strong)]">
              Related calculators
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Link
                href="/calculators/rpm-by-country"
                className="group flex flex-col rounded-2xl border border-[#EADFD3] bg-white p-6 transition-all duration-150 hover:border-[#F4A261] hover:shadow-sm"
              >
                <h3 className="text-[1.125rem] font-[600] text-[#0B0F1A]">RPM by Country</h3>
                <p className="mt-2 flex-1 text-sm leading-[1.65] text-[#475467]">
                  Compare typical RPM ranges by country and model weighted earnings based on your audience mix.
                </p>
                <span className="mt-4 flex items-center gap-1 text-sm font-[600] text-[#F4A261] transition-transform duration-200 group-hover:translate-x-0.5">
                  Open calculator <span aria-hidden>&rarr;</span>
                </span>
              </Link>
              <Link
                href="/calculators/follower-income-estimator"
                className="group flex flex-col rounded-2xl border border-[#EADFD3] bg-white p-6 transition-all duration-150 hover:border-[#F4A261] hover:shadow-sm"
              >
                <h3 className="text-[1.125rem] font-[600] text-[#0B0F1A]">Follower Income Estimator</h3>
                <p className="mt-2 flex-1 text-sm leading-[1.65] text-[#475467]">
                  Project earnings based on follower count, engagement rate, and monthly posting frequency.
                </p>
                <span className="mt-4 flex items-center gap-1 text-sm font-[600] text-[#F4A261] transition-transform duration-200 group-hover:translate-x-0.5">
                  Open calculator <span aria-hidden>&rarr;</span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
    </>
  )
}
