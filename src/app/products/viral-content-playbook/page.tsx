import Container from '@/components/ui/Container'
import CalloutBox from '@/components/CalloutBox'
import EmailSignupForm from '@/components/EmailSignupForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Viral Content Playbook',
  description: 'Hook formulas, pacing templates, and series builders to create consistently high-performing TikTok content.',
}

export default function ViralContentPlaybookPage() {
  return (
    <section className="py-12">
      <Container size="narrow">
        <div className="space-y-6">
          <header className="space-y-3">
            <h1 className="text-3xl font-semibold text-[var(--color-text)]">
              Viral Content Playbook
            </h1>
            <p className="text-sm text-[var(--color-text-muted)]">
              Hook formulas, pacing templates, and series builders to improve retention.
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
