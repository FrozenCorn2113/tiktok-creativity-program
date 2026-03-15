import Container from '@/components/ui/Container'
import EmailSignupForm from '@/components/EmailSignupForm'
import ScrollReveal from '@/components/ScrollReveal'
import JourneyCard from '@/components/JourneyCard'
import Link from 'next/link'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Start Here — TikTok Creator Rewards',
  description:
    'Your starting point for the TikTok Creator Rewards program. Learn eligibility, apply successfully, and maximize your earnings.',
  path: '/start-here',
})

export default function StartHerePage() {
  return (
    <>
      <ScrollReveal />

      {/* Hero — oversized email form, minimal nav context */}
      <section className="bg-[var(--color-surface-warm)] py-16 sm:py-24">
        <Container size="narrow">
          <div className="mx-auto max-w-xl">
            <div className="reveal text-center" data-reveal>
              <p className="text-[0.75rem] font-semibold uppercase tracking-widest text-[var(--color-primary-hover)]">
                TikTok Creator Rewards Program
              </p>
              <h1 className="mt-4 text-[var(--text-display)] font-bold leading-[var(--leading-display)] tracking-tight text-[var(--color-ink-strong)]">
                Start here.
              </h1>
              <p className="mx-auto mt-4 max-w-md text-[1.125rem] leading-[1.7] text-[var(--color-text-muted)]">
                Free guides, calculators, and a weekly eligibility checklist — everything you need
                to understand and qualify for the TikTok Creator Rewards Program.
              </p>
            </div>

            {/* Hero email form — variant hero = 56px inputs */}
            <div className="reveal mt-10" data-reveal>
              <EmailSignupForm
                variant="hero"
                title="Get free access"
                description="The eligibility checklist, earnings tracker, and weekly program updates — free."
                ctaLabel="Get free access"
                className="bg-white shadow-[var(--shadow-md)]"
              />
            </div>

            <p className="reveal mt-4 text-center text-[0.75rem] text-[var(--color-text-subtle)]" data-reveal>
              Free. No spam. Unsubscribe any time.
            </p>
          </div>
        </Container>
      </section>

      {/* Trust strip */}
      <section className="bg-white py-10 border-y border-[var(--color-border)]">
        <Container>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-16">
            {[
              { stat: '57', label: 'guides' },
              { stat: '3', label: 'free calculators' },
              { stat: '2026', label: 'updated rules' },
            ].map(({ stat, label }) => (
              <div key={label} className="text-center">
                <p className="text-xl font-bold text-[var(--color-ink-strong)]">{stat}</p>
                <p className="text-sm text-[var(--color-text-muted)]">{label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Where are you in your journey */}
      <section className="bg-[var(--color-surface-warm)] py-16">
        <Container size="narrow">
          <div className="reveal text-center" data-reveal>
            <h2 className="text-[var(--text-h2)] font-bold text-[var(--color-ink-strong)]">
              Where are you in your journey?
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-[var(--text-body)] text-[var(--color-text-muted)]">
              Jump to the section that matches where you are right now.
            </p>
          </div>

          <div className="reveal-stagger mt-10 grid gap-6 md:grid-cols-3" data-reveal>
            <JourneyCard
              title="Just Starting Out"
              description="Learn the fundamental eligibility requirements and how to build your profile to join. Step-by-step guides for beginners."
              linkText="Read Eligibility Requirements"
              linkHref="/guides/creator-rewards-2026"
            />
            <JourneyCard
              title="Ready to Apply"
              description="Understand the application process in detail to avoid common pitfalls and rejections. Application walkthrough and tips."
              linkText="Application Walkthrough"
              linkHref="/guides/appeal-rejection"
            />
            <JourneyCard
              title="Growing & Earning"
              description="Discover strategies to increase engagement, hit qualified view thresholds, and unlock higher earnings."
              linkText="Earning Tips"
              linkHref="/guides/optimize-rpm"
            />
          </div>
        </Container>
      </section>

      {/* Footer row */}
      <section className="bg-white py-10">
        <Container>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <Link href="/guides" className="font-semibold text-[var(--color-primary)] hover:underline">
              All guides
            </Link>
            <Link href="/calculators" className="font-semibold text-[var(--color-primary)] hover:underline">
              Calculators
            </Link>
            <Link href="/resources" className="font-semibold text-[var(--color-primary)] hover:underline">
              Resources
            </Link>
          </div>
        </Container>
      </section>
    </>
  )
}
