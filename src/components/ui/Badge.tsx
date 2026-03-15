import React from 'react'

type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  variant?: 'category' | 'new' | 'muted'
  /** @deprecated use variant instead */
  tone?: 'accent' | 'neutral'
}

const variantStyles = {
  category:
    'bg-[var(--color-accent-soft)] text-[var(--color-primary-hover)]',
  new: 'bg-[#EFF8FF] text-[var(--color-info)]',
  muted: 'bg-[var(--color-surface-muted)] text-[var(--color-text-muted)]',
}

export default function Badge({
  children,
  className = '',
  variant,
  tone,
  ...props
}: BadgeProps) {
  // Legacy tone prop support
  let resolvedVariant: 'category' | 'new' | 'muted' = 'muted'
  if (variant) {
    resolvedVariant = variant
  } else if (tone === 'accent') {
    resolvedVariant = 'category'
  }

  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-[0.75rem] font-semibold leading-[1.4] ${variantStyles[resolvedVariant]} ${className}`}
      {...props}
    >
      {children}
    </span>
  )
}
