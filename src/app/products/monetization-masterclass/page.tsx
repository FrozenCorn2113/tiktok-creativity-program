import Container from '@/components/ui/Container'
import CalloutBox from '@/components/CalloutBox'
import EmailSignupForm from '@/components/EmailSignupForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'TikTok Monetization Masterclass',
  description: 'A structured course covering Creator Rewards, brand deals, affiliate income, and digital product revenue for creators.',
}

const modules = [
  'Module 1 — Creator Rewards foundation: eligibility, qualified views, and RPM levers',
  'Module 2 — Affiliate income: building a stack that converts without being salesy',
  'Module 3 — Brand deals: pitching, pricing, and deliverables for small creators',
  'Module 4 — Digital products: creating and selling templates, trackers, and playbooks',
  'Module 5 — Stacking streams: how to run 3+ income sources without burning out',
]

export default function MonetizationMasterclassPage() {
  return (
    <section className="py-12">
      <Container size="narrow">
        <div className="space-y-6">
          <header className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-text-subtle)]">
              Coming soon
            </p>
            <h1 className="text-3xl font-semibold text-[var(--color-text)]">
              TikTok Monetization Masterclass
            </h1>
            <p className="text-sm text-[var(--color-text-muted)]">
              A structured 5-module course for creators who want to move beyond Creator Rewards and
              build recurring income from multiple sources.
            </p>
          </header>

          <div className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-white p-6">
            <h2 className="text-base font-semibold text-[var(--color-text)]">Course modules</h2>
            <ul className="mt-3 space-y-2">
              {modules.map((m) => (
                <li key={m} className="flex gap-2 text-sm text-[var(--color-text-muted)]">
                  <span className="mt-0.5 shrink-0 text-[var(--color-accent)]">✓</span>
                  {m}
                </li>
              ))}
            </ul>
          </div>

          <CalloutBox type="info">
            Launching soon — join the list for early access pricing and a free preview module.
          </CalloutBox>
          <EmailSignupForm variant="inline" ctaLabel="Get early access" />
        </div>
      </Container>
    </section>
  )
}
