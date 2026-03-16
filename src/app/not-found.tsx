import Container from '@/components/ui/Container'
import Image from 'next/image'
import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="flex flex-1 items-center py-24">
      <Container>
        <div className="mx-auto max-w-md px-4 text-center">
          {/* E1-E3: landpress-marketing-4.png via Next.js Image with fill */}
          <div className="relative mx-auto mb-8 h-[320px] w-full max-w-[320px]">
            <Image
              src="/assets/brand-images/landpress-marketing-4.png"
              alt="Creator looking puzzled at a broken page"
              fill
              className="object-contain"
            />
          </div>

          <h1 className="text-[var(--text-h1)] font-bold text-[var(--color-ink-strong)]">
            Page not found
          </h1>
          <p className="mx-auto mt-3 max-w-sm text-[var(--text-body)] text-[var(--color-text-muted)]">
            This page doesn&apos;t exist or was moved. Try the guides index or search from the
            homepage.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/"
              className="inline-flex items-center rounded-[var(--radius-md)] bg-[var(--color-primary)] px-5 py-3 text-[var(--text-btn)] font-semibold text-[var(--color-ink-strong)] transition-all duration-200 hover:bg-[var(--color-primary-hover)] hover:shadow-[var(--shadow-sm)] active:scale-95"
            >
              Back to home
            </Link>
            <Link
              href="/guides"
              className="inline-flex items-center rounded-[var(--radius-md)] border border-[var(--color-border-strong)] px-5 py-3 text-[var(--text-btn)] font-semibold text-[var(--color-ink)] transition-all duration-200 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
            >
              Browse guides
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}
