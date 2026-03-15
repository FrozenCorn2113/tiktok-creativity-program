'use client'

import { trackEvent } from '@/lib/analytics'

type AffiliateLinkProps = {
  slug: string
  label: string
  className?: string
}

export default function AffiliateLink({ slug, label, className = '' }: AffiliateLinkProps) {
  const handleClick = () => {
    trackEvent({
      action: 'affiliate_click',
      category: 'monetization',
      label: slug,
    })
  }

  return (
    <a
      href={`/go/${slug}`}
      onClick={handleClick}
      rel="noopener noreferrer sponsored"
      className={`text-[var(--color-primary-hover)] underline decoration-[var(--color-primary)] underline-offset-2 hover:text-[var(--color-ink)] ${className}`}
    >
      {label}
    </a>
  )
}
