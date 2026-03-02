import Container from '@/components/ui/Container'
import CalloutBox from '@/components/CalloutBox'

export default function TroubleshootingPage() {
  return (
    <section className="py-12">
      <Container>
        <div className="space-y-6">
          <header className="space-y-3">
            <h1 className="text-3xl font-semibold text-[var(--color-text)]">
              Troubleshooting Creator Rewards
            </h1>
            <p className="text-sm text-[var(--color-text-muted)]">
              Answers for missing qualified views, RPM drops, and program rejections.
            </p>
          </header>
          <CalloutBox type="info">
            This hub is coming soon. We’ll publish detailed fixes and templates to help you resolve
            issues faster.
          </CalloutBox>
        </div>
      </Container>
    </section>
  )
}
