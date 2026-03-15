import Link from 'next/link'
import { siteConfig } from '@/lib/site'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: `Start Here | ${siteConfig.name}`,
}

/**
 * Start Here layout — logo-only header, no nav or footer.
 * Removes navigation for conversion focus.
 * Vale's direction: nav removal improves conversion 2-4x on this page.
 */
export default function StartHereLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--color-surface-warm)]">
      {/* Logo-only header */}
      <header className="border-b border-[var(--color-border)] bg-white py-4">
        <div className="mx-auto flex max-w-[var(--container-narrow)] items-center justify-between px-[var(--gutter)]">
          <Link
            href="/"
            className="font-sans text-lg font-bold tracking-tight text-[var(--color-ink-strong)] hover:text-[var(--color-primary)] transition-colors duration-200"
          >
            {siteConfig.name}
          </Link>
          <Link
            href="/guides"
            className="text-sm font-semibold text-[var(--color-text-muted)] hover:text-[var(--color-ink)] transition-colors duration-200"
          >
            Browse guides &rarr;
          </Link>
        </div>
      </header>

      {/* Page content */}
      <main className="flex flex-1 flex-col">
        {children}
      </main>
    </div>
  )
}
