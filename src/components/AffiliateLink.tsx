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
      className={`text-[var(--color-accent)] hover:underline ${className}`}
    >
      {label}
    </a>
  )
}
