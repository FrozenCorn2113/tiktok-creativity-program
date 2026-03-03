import Container from '@/components/ui/Container'
import CalloutBox from '@/components/CalloutBox'
import EmailSignupForm from '@/components/EmailSignupForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Viral Content Playbook',
  description: 'Hook formulas, pacing templates, and series builders to create consistently high-performing TikTok content.',
}

const features = [
  '12 proven hook formulas with fill-in-the-blank templates',
  'Pacing guide — how to structure 30s, 60s, and 3-min videos for maximum watch time',
  'Series builder: turn one idea into 10 connected videos that grow together',
  'Retention drop analysis — why viewers leave and how to fix it',
  'Niche-specific examples for fitness, education, music, and lifestyle creators',
]

export default function ViralContentPlaybookPage() {
  return (
    <section className="py-12">
      <Container size="narrow">
        <div className="space-y-6">
          <header className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-text-subtle)]">
              Coming soon
            </p>
            <h1 className="text-3xl font-semibold text-[var(--color-text)]">
              Viral Content Playbook
            </h1>
            <p className="text-sm text-[var(--color-text-muted)]">
              Hooks, pacing, and series structures used by creators hitting consistent qualified
              views — not luck, just repeatable process.
            </p>
          </header>

          <div className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-white p-6">
            <h2 className="text-base font-semibold text-[var(--color-text)]">What&apos;s inside</h2>
            <ul className="mt-3 space-y-2">
              {features.map((f) => (
                <li key={f} className="flex gap-2 text-sm text-[var(--color-text-muted)]">
                  <span className="mt-0.5 shrink-0 text-[var(--color-accent)]">✓</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <CalloutBox type="info">
            Launching soon — join the list for early access pricing and a free preview chapter.
          </CalloutBox>
          <EmailSignupForm variant="inline" ctaLabel="Get early access" />
        </div>
      </Container>
    </section>
  )
}
