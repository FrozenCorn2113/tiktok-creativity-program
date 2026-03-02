import React from 'react'

type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  tone?: 'accent' | 'neutral'
}

const toneStyles = {
  accent:
    'bg-[var(--color-accent-soft)] text-[var(--color-accent)] border-[var(--color-accent-soft)]',
  neutral: 'bg-[var(--color-surface-muted)] text-[var(--color-text-muted)]',
}

export default function Badge({
  children,
  className = '',
  tone = 'neutral',
  ...props
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium ${toneStyles[tone]} ${className}`}
      {...props}
    >
      {children}
    </span>
  )
}
