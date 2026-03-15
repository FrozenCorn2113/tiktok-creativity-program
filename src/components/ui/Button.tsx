import React from 'react'

const sizes = {
  sm: 'px-3 py-2 text-sm',
  md: 'px-6 py-3 text-[0.9375rem]',
  lg: 'px-7 py-3.5 text-[0.9375rem]',
} as const

const variants = {
  primary:
    'bg-[var(--color-primary)] text-[var(--color-ink-strong)] hover:bg-[var(--color-primary-hover)] hover:shadow-[var(--shadow-sm)] active:scale-95',
  secondary:
    'bg-white text-[var(--color-ink)] border border-[1.5px] border-[var(--color-border)] hover:border-[var(--color-border-strong)] hover:bg-[var(--color-surface-warm)]',
  ghost:
    'bg-transparent text-[var(--color-primary)] hover:underline',
  affiliate:
    'bg-[var(--color-primary)] text-[var(--color-ink-strong)] hover:bg-[var(--color-primary-hover)] hover:shadow-[var(--shadow-sm)] active:scale-95',
  dark: 'bg-[var(--color-ink)] text-white hover:bg-[var(--color-ink-strong)]',
  subtle:
    'bg-transparent text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:bg-[var(--color-surface-muted)]',
} as const

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof variants
  size?: keyof typeof sizes
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}: ButtonProps) {
  const affiliateRadius = variant === 'affiliate' ? 'rounded-[var(--radius-lg)]' : 'rounded-[var(--radius-md)]'
  return (
    <button
      className={`inline-flex cursor-pointer items-center justify-center gap-2 font-semibold tracking-[0.01em] transition duration-200 focus-visible:outline-none focus-visible:shadow-[var(--focus-ring)] disabled:pointer-events-none disabled:opacity-50 ${affiliateRadius} ${sizes[size]} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
