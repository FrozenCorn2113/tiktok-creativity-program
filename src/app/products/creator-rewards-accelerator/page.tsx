import Container from '@/components/ui/Container'
import CalloutBox from '@/components/CalloutBox'
import EmailSignupForm from '@/components/EmailSignupForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Creator Rewards Accelerator',
  description: 'A premium playbook with checklists, templates, and workflows to get approved for Creator Rewards and increase RPM.',
}

const features = [
  'Step-by-step application walkthrough with approval checklist',
  'RPM optimization playbook — content types, posting windows, and audience signals that lift earnings',
  'Qualified view troubleshooting guide with fix templates',
  'Additional Reward criteria breakdown with real examples',
  '30-day content calendar designed for Creator Rewards growth',
]

export default function CreatorRewardsAcceleratorPage() {
  return (
    <section className="py-12">
      <Container size="narrow">
        <div className="space-y-6">
          <header className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-text-subtle)]">
              Coming soon
            </p>
            <h1 className="text-3xl font-semibold text-[var(--color-text)]">
              Creator Rewards Accelerator
            </h1>
            <p className="text-sm text-[var(--color-text-muted)]">
              The complete playbook to get approved, fix qualified view issues, and steadily grow
              your RPM — without guessing what TikTok rewards.
            </p>
          </header>

          <div className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-white p-6">
            <h2 className="text-base font-semibold text-[var(--color-text)]">What&apos;s inside</h2>
            <ul className="mt-3 space-y-2">
              {features.map((f) => (
                <li key={f} className="flex gap-2 text-sm text-[var(--color-text-muted)]">
                  <span className="mt-0.5 shrink-0 text-[var(--color-primary)]">✓</span>
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
