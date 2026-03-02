import Container from '@/components/ui/Container'
import CalloutBox from '@/components/CalloutBox'
import EmailSignupForm from '@/components/EmailSignupForm'

export default function MonetizationMasterclassPage() {
  return (
    <section className="py-12">
      <Container size="narrow">
        <div className="space-y-6">
          <header className="space-y-3">
            <h1 className="text-3xl font-semibold text-[var(--color-text)]">
              TikTok Monetization Masterclass
            </h1>
            <p className="text-sm text-[var(--color-text-muted)]">
              A structured course covering Creator Rewards, affiliates, and scaling to multiple
              revenue streams.
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
