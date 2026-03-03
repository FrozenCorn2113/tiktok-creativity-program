import Container from '@/components/ui/Container'
import CalloutBox from '@/components/CalloutBox'
import EmailSignupForm from '@/components/EmailSignupForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Creator Rewards Accelerator',
  description: 'A premium playbook with checklists, templates, and workflows to get approved for Creator Rewards and increase RPM.',
}

export default function CreatorRewardsAcceleratorPage() {
  return (
    <section className="py-12">
      <Container size="narrow">
        <div className="space-y-6">
          <header className="space-y-3">
            <h1 className="text-3xl font-semibold text-[var(--color-text)]">
              Creator Rewards Accelerator
            </h1>
            <p className="text-sm text-[var(--color-text-muted)]">
              A premium playbook with checklists, templates, and workflows to get approved faster
              and increase RPM.
            </p>
          </header>
          <CalloutBox type="info">
            This product is in development. Join the list to get early access.
          </CalloutBox>
          <EmailSignupForm variant="inline" />
        </div>
      </Container>
    </section>
  )
}
