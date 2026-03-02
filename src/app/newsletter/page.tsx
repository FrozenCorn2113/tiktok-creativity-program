import Container from '@/components/ui/Container'
import CalloutBox from '@/components/CalloutBox'
import EmailSignupForm from '@/components/EmailSignupForm'

export default function NewsletterPage() {
  return (
    <section className="py-12">
      <Container size="narrow">
        <div className="space-y-6">
          <header className="space-y-3">
            <h1 className="text-3xl font-semibold text-[var(--color-text)]">
              Premium TikTok Monetization Newsletter
            </h1>
            <p className="text-sm text-[var(--color-text-muted)]">
              Weekly deep dives, templates, and data-backed strategies for creators who want
              recurring income and faster growth.
            </p>
          </header>

          <div className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-white p-6 text-sm">
            <h2 className="text-xl font-semibold text-[var(--color-text)]">What you get</h2>
            <ul className="mt-3 space-y-2 text-sm text-[var(--color-text-muted)]">
              <li>Exclusive RPM optimization tactics</li>
              <li>Monthly monetization playbooks</li>
              <li>Early access to tools and templates</li>
            </ul>
          </div>

          <CalloutBox type="info">
            Premium newsletter is launching soon. Join the waitlist to get early access pricing.
          </CalloutBox>

          <EmailSignupForm variant="inline" />
        </div>
      </Container>
    </section>
  )
}
