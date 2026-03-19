'use client'

import { trackEvent } from '@/lib/analytics'

type AffiliateLinkProps = {
  // slug+label API (original)
  slug?: string
  label?: string
  // href+children API (used in MDX inline links)
  href?: string
  children?: React.ReactNode
  className?: string
}

export default function AffiliateLink({ slug, label, href, children, className = '' }: AffiliateLinkProps) {
  const resolvedHref = href ?? (slug ? `/go/${slug}` : '#')
  const resolvedLabel = slug ?? href ?? 'affiliate'

  const handleClick = () => {
    trackEvent({
      action: 'affiliate_click',
      category: 'monetization',
      label: resolvedLabel,
    })
  }

  return (
    <a
      href={resolvedHref}
      onClick={handleClick}
      rel="noopener noreferrer sponsored"
      className={`text-[var(--color-primary-hover)] underline decoration-[var(--color-primary)] underline-offset-2 hover:text-[var(--color-ink)] ${className}`}
    >
      {children ?? label}
    </a>
  )
}
