// Based on 21st.dev components — see individual component files for source URLs
// H1-H20 per BRAND.md v2.0 Mandatory Implementation Checklist

'use client'

import { useState } from 'react'
import Image from 'next/image'
import Container from '@/components/ui/Container'
import EmailSignupForm from '@/components/EmailSignupForm'
import ScrollReveal from '@/components/ScrollReveal'
import TrustBar from '@/components/TrustBar'
import GuideCard from '@/components/GuideCard'
import HeroSection from '@/components/HeroSection'
import CategoryFilterTabs from '@/components/CategoryFilterTabs'
import Link from 'next/link'
import { Calculator, ChevronRight, Check, DollarSign, Wrench, BookOpen } from 'lucide-react'

// H13: Static guide data for homepage — matched to actual published guides
const featuredGuides = [
  {
    title: 'TikTok Creator Rewards Program 2026: Complete Guide',
    description:
      'Eligibility requirements, how the program works, what qualified views actually means, and how payouts are calculated.',
    href: '/guides/creator-rewards-2026',
    category: 'Eligibility',
    readTime: '12 min',
  },
  {
    title: 'How to Maximize Qualified Views',
    description:
      'Why your qualified view count is lower than your total views, and what to do about it.',
    href: '/guides/maximize-qualified-views',
    category: 'Earnings',
    readTime: '8 min',
  },
  {
    title: 'TikTok Creator Rewards: What Counts as Qualified Content',
    description:
      'The specific content types and formats that earn — and the ones TikTok quietly excludes.',
    href: '/guides/qualified-content-types',
    category: 'Eligibility',
    readTime: '6 min',
  },
  {
    title: 'How to Improve Your RPM',
    description:
      'Country mix, niche, content length, completion rate — everything that moves the RPM needle.',
    href: '/guides/optimize-rpm',
    category: 'Earnings',
    readTime: '10 min',
  },
  {
    title: 'What to Do If Your Application Is Rejected',
    description:
      'The real reasons applications fail and the exact steps to appeal or reapply successfully.',
    href: '/guides/appeal-rejection',
    category: 'Application',
    readTime: '7 min',
  },
  {
    title: 'Growing from 5K to 10K Followers',
    description:
      'The specific content and engagement strategies that get creators to the 10K threshold without burning out.',
    href: '/guides/grow-5k-to-10k',
    category: 'Eligibility',
    readTime: '9 min',
  },
]

// H10-H11: Content pillars — 4 cards, Lucide icons 24px
// Based on 21st.dev jatin-yadav05/feature-spotlight structure
// Source: https://21st.dev/components/jatin-yadav05/feature-spotlight
const pillars = [
  {
    Icon: Check,
    title: 'Eligibility',
    description:
      'What TikTok actually requires — follower count, view thresholds, account type, and region — plus the edge cases most guides skip.',
    href: '/guides',
  },
  {
    Icon: BookOpen,
    title: 'Apply',
    description:
      'How the application process works, what to expect after submitting, and what to do if you get rejected.',
    href: '/guides',
  },
  {
    Icon: DollarSign,
    title: 'Earnings',
    description:
      'Qualified views, RPM, payout timing, and what the numbers mean for your specific account.',
    href: '/guides',
  },
  {
    Icon: Wrench,
    title: 'Tools',
    description:
      'The editors, schedulers, analytics tools, and music libraries worth knowing — with honest assessments of what\'s actually useful.',
    href: '/resources',
  },
]

const filterTabs = [
  { label: 'Eligibility', value: 'Eligibility' },
  { label: 'Application', value: 'Application' },
  { label: 'Earnings', value: 'Earnings' },
  { label: 'Tools', value: 'Tools' },
]

export default function HomePage() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filteredGuides =
    activeFilter === 'all'
      ? featuredGuides
      : featuredGuides.filter((g) => g.category === activeFilter)

  return (
    <>
      <ScrollReveal />

      {/* H1-H6: Hero — two-column grid with illustration */}
      <HeroSection />

      {/* H7-H9: Trust bar — 3 stats with countUp */}
      <TrustBar className="border-b border-[#EADFD3]" />

      {/* H10-H11: Content pillars — 4 cards, 2-col mobile / 4-col desktop */}
      {/* Based on 21st.dev jatin-yadav05/feature-spotlight */}
      <section className="bg-white py-20 md:py-24">
        <Container>
          <div className="reveal text-center" data-reveal>
            <h2 className="text-[1.5rem] font-[700] leading-[1.25] text-[#0B0F1A] md:text-[1.875rem]">
              Everything in one place
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-[1rem] leading-[1.7] text-[#475467]">
              The four areas that matter for the Creator Rewards Program.
            </p>
          </div>

          {/* H10: grid grid-cols-2 md:grid-cols-4 gap-4 */}
          <div
            className="reveal-stagger mt-12 grid grid-cols-2 gap-4 md:grid-cols-4"
            data-reveal
          >
            {pillars.map((pillar) => (
              <Link
                key={pillar.title}
                href={pillar.href}
                // H10: white bg, border #EADFD3 rounded-2xl p-6, hover border orange + shadow-sm
                className="group flex cursor-pointer flex-col rounded-2xl border border-[#EADFD3] bg-white p-6 transition-all duration-150 hover:border-[#F4A261] hover:shadow-sm"
              >
                {/* H10: Lucide icon 24px, orange */}
                <span
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FFE9D5] text-[#E58B3A]"
                  aria-hidden
                >
                  <pillar.Icon className="h-6 w-6" />
                </span>
                {/* H10: H3 title */}
                <h3 className="mt-4 text-[1.125rem] font-[600] leading-[1.3] text-[#0B0F1A]">
                  {pillar.title}
                </h3>
                {/* H10: 14px body */}
                <p className="mt-2 flex-1 text-[14px] leading-[1.65] text-[#475467]">
                  {pillar.description}
                </p>
                <span className="mt-4 flex items-center gap-1 text-[14px] font-[600] text-[#F4A261] transition-transform duration-200 group-hover:translate-x-0.5">
                  Explore
                  <ChevronRight className="h-4 w-4" aria-hidden />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* H12: Calculator preview — inline panel, one input + result */}
      <section className="bg-[#FFF7ED] py-20 md:py-24">
        <Container>
          <div className="reveal mx-auto max-w-3xl" data-reveal>
            <div className="overflow-hidden rounded-2xl border border-[#EADFD3] bg-white">
              <div className="grid gap-0 md:grid-cols-2">
                {/* Left: copy + single input */}
                <div className="flex flex-col justify-center p-8">
                  <span className="inline-flex w-fit items-center gap-2 rounded-xl bg-[#FFE9D5] px-3 py-1.5 text-[12px] font-[600] text-[#E58B3A]">
                    <Calculator className="h-3.5 w-3.5" aria-hidden />
                    Free calculator
                  </span>
                  <h2 className="mt-4 text-[1.5rem] font-[700] leading-[1.25] text-[#0B0F1A] md:text-[1.875rem]">
                    Run the numbers before you post
                  </h2>
                  <p className="mt-3 text-[1rem] leading-[1.7] text-[#475467]">
                    Three tools built for Creator Rewards: earnings estimator, RPM by country, and
                    follower income model.
                  </p>
                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <Link
                      href="/calculators/earnings-calculator"
                      className="inline-flex cursor-pointer items-center gap-2 rounded-xl bg-[#F4A261] px-5 py-3 text-[15px] font-[600] text-[#0B0F1A] transition-all duration-150 hover:bg-[#E58B3A] hover:shadow-sm active:scale-95"
                    >
                      Calculate your earnings
                    </Link>
                    <Link
                      href="/calculators"
                      className="inline-flex cursor-pointer items-center gap-2 rounded-xl border border-[#EADFD3] px-5 py-3 text-[15px] font-[600] text-[#111827] transition-all duration-150 hover:border-[#DFD1C4] hover:bg-[#FFF7ED]"
                    >
                      All calculators
                    </Link>
                  </div>
                </div>

                {/* Right: mini results preview — JetBrains Mono, warm-white bg */}
                <div className="flex flex-col justify-center gap-4 border-t border-[#EADFD3] bg-[#FFF7ED] p-8 md:border-l md:border-t-0">
                  <p className="text-[12px] font-[600] uppercase tracking-wide text-[#667085]">
                    At 100,000 views / $0.70 RPM
                  </p>
                  <div>
                    <p className="font-[family-name:var(--font-mono)] text-[2.5rem] font-[700] text-[#0B0F1A]">
                      $57.40
                    </p>
                    <p className="mt-1 text-[14px] text-[#475467]">estimated earnings</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 border-t border-[#EADFD3] pt-4">
                    <div>
                      <p className="font-[family-name:var(--font-mono)] text-[1.25rem] font-[500] text-[#475467]">
                        82,000
                      </p>
                      <p className="mt-0.5 text-[12px] text-[#667085]">qualified views</p>
                    </div>
                    <div>
                      <p className="font-[family-name:var(--font-mono)] text-[1.25rem] font-[500] text-[#475467]">
                        $68.88
                      </p>
                      <p className="mt-0.5 text-[12px] text-[#667085]">with +20% bonus</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* H13: Featured guides — 3 cards, section heading "Start with these guides" */}
      <section className="bg-white py-20 md:py-24">
        <Container>
          <div className="reveal flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between" data-reveal>
            <div>
              {/* H13: heading per spec */}
              <h2 className="text-[1.5rem] font-[700] leading-[1.25] text-[#0B0F1A] md:text-[1.875rem]">
                Start with these guides
              </h2>
              <p className="mt-2 text-[1rem] leading-[1.7] text-[#475467]">
                The guides most creators need first — from eligibility basics to why your qualified
                views might be lower than you think.
              </p>
            </div>
            <Link
              href="/guides"
              className="flex-shrink-0 text-[14px] font-[600] text-[#F4A261] hover:underline"
            >
              All guides &rarr;
            </Link>
          </div>

          <div className="reveal mt-8" data-reveal>
            <CategoryFilterTabs
              tabs={filterTabs}
              onChange={setActiveFilter}
            />
          </div>

          {/* H13: grid md:grid-cols-3 gap-4 */}
          <div className="reveal-stagger mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3" data-reveal>
            {filteredGuides.slice(0, 3).map((guide) => (
              <GuideCard
                key={guide.href}
                title={guide.title}
                description={guide.description}
                href={guide.href}
                category={guide.category}
                readTime={guide.readTime}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* H14-H17: Email capture — two-column on desktop, illustration right */}
      {/* Based on 21st.dev ruixenui/newsletter-form */}
      {/* Source: https://21st.dev/components/ruixenui/newsletter-form */}
      <section className="bg-[#FFF7ED] py-20 md:py-24">
        <Container>
          <div
            className="reveal mx-auto max-w-5xl"
            data-reveal
          >
            {/* H15: bg-[#FFF1E6], rounded-3xl, px-8 py-12, two-column on desktop */}
            <div className="grid items-center gap-8 rounded-3xl bg-[#FFF1E6] px-8 py-12 md:grid-cols-2 md:gap-12">

              {/* H16: LEFT column — headline, description, email form, disclaimer */}
              <div>
                <h2 className="text-[1.5rem] font-[700] leading-[1.25] text-[#0B0F1A] md:text-[1.875rem]">
                  Get the free eligibility checklist
                </h2>
                <p className="mt-3 text-[1rem] leading-[1.7] text-[#475467]">
                  Every requirement in plain language, the most common rejection reasons, and weekly updates when program rules change.
                </p>
                <div className="mt-6">
                  <EmailSignupForm
                    variant="inline"
                    title=""
                    description=""
                    ctaLabel="Get Free Checklist"
                    className="bg-transparent p-0"
                  />
                </div>
                {/* H16: small-print disclaimer 12px text-subtle */}
                <p className="mt-3 text-[12px] text-[#667085]">
                  Free. No spam. Unsubscribe any time.
                </p>
              </div>

              {/* H17: RIGHT column — landpress-marketing-4.png, desktop only */}
              <div className="relative hidden h-[360px] w-full md:block">
                <Image
                  src="/assets/brand-images/landpress-marketing-4.png"
                  alt="Creator receiving TikTok earnings notification"
                  fill
                  className="object-contain object-right"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
