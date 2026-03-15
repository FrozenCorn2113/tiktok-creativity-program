'use client'

import { useState } from 'react'
import Container from '@/components/ui/Container'
import EmailSignupForm from '@/components/EmailSignupForm'
import ScrollReveal from '@/components/ScrollReveal'
import TrustBar from '@/components/TrustBar'
import GuideCard from '@/components/GuideCard'
import CategoryFilterTabs from '@/components/CategoryFilterTabs'
import Link from 'next/link'
import { ArrowRight, Calculator, ChevronRight } from 'lucide-react'

// Static guide data for homepage — matched to actual published guides
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

const pillars = [
  {
    icon: '✓',
    title: 'Eligibility',
    description:
      'What TikTok actually requires — follower count, view thresholds, account type, and region — plus the edge cases most guides skip.',
    href: '/guides',
  },
  {
    icon: '→',
    title: 'Apply',
    description:
      'How the application process works, what to expect after submitting, and what to do if you get rejected.',
    href: '/guides',
  },
  {
    icon: '$',
    title: 'Earnings',
    description:
      'Qualified views, RPM, payout timing, and what the numbers mean for your specific account.',
    href: '/guides',
  },
  {
    icon: '⚒',
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

      {/* ── Section 1: Hero ─────────────────────────────────────────────── */}
      <section className="bg-[var(--color-surface-warm)] pb-0 pt-16 sm:pt-20">
        <Container>
          <div className="mx-auto max-w-3xl pb-12 pt-4 text-center sm:pb-16">
            {/* Eyebrow */}
            <p
              className="reveal text-[0.75rem] font-semibold uppercase tracking-widest text-[var(--color-primary-hover)]"
              data-reveal
            >
              TikTok Creator Rewards Program
            </p>

            {/* Headline with accent underline */}
            <h1
              className="reveal mt-4 text-[var(--text-display)] font-bold leading-[var(--leading-display)] tracking-tight text-[var(--color-ink-strong)]"
              data-reveal
            >
              The TikTok Creator Rewards Program,{' '}
              <span className="accent-underline">explained plainly.</span>
            </h1>

            {/* Subhead */}
            <p
              className="reveal mx-auto mt-5 max-w-xl text-[1.125rem] leading-[1.7] text-[var(--color-text-muted)]"
              data-reveal
            >
              Eligibility requirements, earnings calculators, and practical guides — no hype, no
              fluff.
            </p>

            {/* CTA row */}
            <div
              className="reveal mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
              data-reveal
            >
              <Link
                href="/start-here"
                className="inline-flex items-center gap-2 rounded-[var(--radius-md)] bg-[var(--color-primary)] px-6 py-3.5 text-[var(--text-btn)] font-semibold text-[var(--color-ink-strong)] transition-all duration-200 hover:bg-[var(--color-primary-hover)] hover:shadow-[var(--shadow-sm)] active:scale-95"
              >
                Start here
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link
                href="/guides"
                className="inline-flex items-center gap-2 rounded-[var(--radius-md)] border border-[var(--color-border-strong)] bg-white px-6 py-3.5 text-[var(--text-btn)] font-semibold text-[var(--color-ink)] transition-all duration-200 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] active:scale-95"
              >
                Browse guides
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Section 2: Trust Bar ─────────────────────────────────────────── */}
      <TrustBar className="border-b border-[var(--color-border)]" />

      {/* ── Section 3: Content Pillars ───────────────────────────────────── */}
      <section className="bg-white py-20">
        <Container>
          <div className="reveal text-center" data-reveal>
            <h2 className="text-[var(--text-h2)] font-bold leading-[var(--leading-h2)] text-[var(--color-ink-strong)]">
              Everything in one place
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-[var(--text-body)] text-[var(--color-text-muted)]">
              The four areas that matter for the Creator Rewards Program.
            </p>
          </div>

          <div
            className="reveal-stagger mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
            data-reveal
          >
            {pillars.map((pillar) => (
              <Link
                key={pillar.title}
                href={pillar.href}
                className="group flex flex-col rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-white p-6 transition-all duration-200 hover:border-[var(--color-primary)] hover:shadow-[var(--shadow-sm)]"
              >
                <span
                  className="flex h-10 w-10 items-center justify-center rounded-[var(--radius-md)] bg-[var(--color-accent-soft)] text-lg font-bold text-[var(--color-primary-hover)]"
                  aria-hidden
                >
                  {pillar.icon}
                </span>
                <h3 className="mt-4 text-[var(--text-h3)] font-semibold text-[var(--color-ink-strong)]">
                  {pillar.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-[1.65] text-[var(--color-text-muted)]">
                  {pillar.description}
                </p>
                <span className="mt-4 flex items-center gap-1 text-sm font-semibold text-[var(--color-primary)] transition-transform duration-200 group-hover:translate-x-0.5">
                  Explore
                  <ChevronRight className="h-4 w-4" aria-hidden />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Section 4: Featured Guides ───────────────────────────────────── */}
      <section className="bg-[var(--color-surface-warm)] py-20">
        <Container>
          {/* Section header */}
          <div className="reveal flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between" data-reveal>
            <div>
              <h2 className="text-[var(--text-h2)] font-bold leading-[var(--leading-h2)] text-[var(--color-ink-strong)]">
                Start with these
              </h2>
              <p className="mt-2 text-[var(--text-body)] text-[var(--color-text-muted)]">
                The guides most creators need first — from eligibility basics to why your qualified
                views might be lower than you think.
              </p>
            </div>
            <Link
              href="/guides"
              className="flex-shrink-0 text-sm font-semibold text-[var(--color-primary)] hover:underline"
            >
              All guides &rarr;
            </Link>
          </div>

          {/* Filter tabs */}
          <div className="reveal mt-8" data-reveal>
            <CategoryFilterTabs
              tabs={filterTabs}
              onChange={setActiveFilter}
            />
          </div>

          {/* Guide cards grid */}
          <div className="reveal-stagger mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" data-reveal>
            {filteredGuides.map((guide) => (
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

      {/* ── Section 5: Calculator Preview ────────────────────────────────── */}
      <section className="bg-white py-20">
        <Container>
          <div className="reveal overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-white shadow-[var(--shadow-md)]" data-reveal>
            <div className="grid gap-0 lg:grid-cols-2">
              {/* Left: copy */}
              <div className="flex flex-col justify-center p-8 lg:p-12">
                <span className="inline-flex w-fit items-center gap-2 rounded-[var(--radius-md)] bg-[var(--color-accent-soft)] px-3 py-1.5 text-[0.75rem] font-semibold text-[var(--color-primary-hover)]">
                  <Calculator className="h-3.5 w-3.5" aria-hidden />
                  Free calculators
                </span>
                <h2 className="mt-4 text-[var(--text-h2)] font-bold leading-[var(--leading-h2)] text-[var(--color-ink-strong)]">
                  Run the numbers before you post
                </h2>
                <p className="mt-3 text-[var(--text-body)] leading-[1.7] text-[var(--color-text-muted)]">
                  Three tools built for Creator Rewards: earnings estimator, RPM by country, and
                  follower income model.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/calculators/earnings-calculator"
                    className="inline-flex items-center gap-2 rounded-[var(--radius-md)] bg-[var(--color-primary)] px-5 py-3 text-[var(--text-btn)] font-semibold text-[var(--color-ink-strong)] transition-all duration-200 hover:bg-[var(--color-primary-hover)] hover:shadow-[var(--shadow-sm)] active:scale-95"
                  >
                    Earnings calculator
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </Link>
                  <Link
                    href="/calculators"
                    className="inline-flex items-center gap-2 rounded-[var(--radius-md)] border border-[var(--color-border-strong)] px-5 py-3 text-[var(--text-btn)] font-semibold text-[var(--color-ink)] transition-all duration-200 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
                  >
                    All calculators
                  </Link>
                </div>
              </div>

              {/* Right: mini stats preview */}
              <div className="flex flex-col justify-center gap-4 border-t border-[var(--color-border)] bg-[var(--color-surface-warm)] p-8 lg:border-l lg:border-t-0 lg:p-12">
                <p className="text-[0.75rem] font-semibold uppercase tracking-wide text-[var(--color-text-subtle)]">
                  At 100,000 views / $0.70 RPM
                </p>
                <div>
                  <p className="mono-output text-[2.5rem]">$57.40</p>
                  <p className="mt-1 text-sm text-[var(--color-text-muted)]">estimated earnings</p>
                </div>
                <div className="grid grid-cols-2 gap-4 border-t border-[var(--color-border)] pt-4">
                  <div>
                    <p className="mono-output text-lg">82,000</p>
                    <p className="mt-0.5 text-[0.75rem] text-[var(--color-text-subtle)]">qualified views</p>
                  </div>
                  <div>
                    <p className="mono-output text-lg">$68.88</p>
                    <p className="mt-0.5 text-[0.75rem] text-[var(--color-text-subtle)]">with +20% bonus</p>
                  </div>
                </div>
                <p className="text-[0.75rem] text-[var(--color-text-subtle)]">
                  Use the full calculator to model your actual numbers.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Section 6: Email Capture ─────────────────────────────────────── */}
      <section className="bg-[var(--color-surface-muted)] py-20">
        <Container>
          <div className="reveal mx-auto max-w-2xl" data-reveal>
            <div className="text-center">
              <h2 className="text-[var(--text-h2)] font-bold leading-[var(--leading-h2)] text-[var(--color-ink-strong)]">
                Get the free eligibility checklist
              </h2>
              <ul className="mx-auto mt-4 max-w-sm space-y-2 text-left text-[var(--text-small)] text-[var(--color-text-muted)]">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 flex-shrink-0 text-[var(--color-success)]">✓</span>
                  Every eligibility requirement in plain language
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 flex-shrink-0 text-[var(--color-success)]">✓</span>
                  The most common rejection reasons — and how to fix them
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 flex-shrink-0 text-[var(--color-success)]">✓</span>
                  Weekly updates when program rules change
                </li>
              </ul>
            </div>

            <div className="mt-8">
              <EmailSignupForm
                variant="inline"
                title=""
                description=""
                ctaLabel="Get the checklist"
                className="bg-white"
              />
            </div>

            <p className="mt-4 text-center text-[0.75rem] text-[var(--color-text-subtle)]">
              Free. No spam. Unsubscribe any time.
            </p>
          </div>
        </Container>
      </section>
    </>
  )
}
