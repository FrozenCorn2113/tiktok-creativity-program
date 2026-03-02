'use client'

import { useState } from 'react'
import Button from '@/components/ui/Button'
import { trackEvent } from '@/lib/analytics'

type Variant = 'inline' | 'sidebar' | 'exit-intent'

type EmailSignupFormProps = {
  variant?: Variant
  title?: string
  description?: string
  ctaLabel?: string
  layout?: 'card' | 'inline'
  className?: string
}

const defaultCopy: Record<Variant, { title: string; description: string; ctaLabel: string }> = {
  inline: {
    title: 'Get the free TikTok Earnings Tracker',
    description: 'Track views, RPM, qualified views, and earnings in one clean sheet.',
    ctaLabel: 'Send the tracker',
  },
  sidebar: {
    title: 'Get weekly monetization tips',
    description: 'Short, tactical emails to grow earnings without the fluff.',
    ctaLabel: 'Join the list',
  },
  'exit-intent': {
    title: 'Before you go — want the earnings tracker?',
    description: 'It takes 30 seconds to set up and keeps your Creator Rewards organized.',
    ctaLabel: 'Email me the tracker',
  },
}

export default function EmailSignupForm({
  variant = 'inline',
  title,
  description,
  ctaLabel,
  layout = 'card',
  className = '',
}: EmailSignupFormProps) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const copy = defaultCopy[variant]

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!email) return

    setStatus('loading')
    setMessage('')

    try {
      const response = await fetch('/api/email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: variant }),
      })

      if (!response.ok) {
        throw new Error('Request failed')
      }

      setStatus('success')
      setMessage('Check your inbox for the tracker and next steps.')
      setEmail('')
      trackEvent({
        action: 'email_signup',
        category: 'engagement',
        label: variant,
      })
    } catch (error) {
      setStatus('error')
      setMessage('Something went wrong. Please try again.')
    }
  }

  const isCard = layout === 'card'

  return (
    <div
      className={`${isCard ? 'rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-white p-5 shadow-[var(--shadow-sm)]' : ''} ${
        variant === 'sidebar' && isCard ? 'sticky top-24' : ''
      } ${className}`}
    >
      {(title ?? copy.title) ? (
        <h3 className="text-base font-semibold text-[var(--color-text)]">{title ?? copy.title}</h3>
      ) : null}
      {(description ?? copy.description) ? (
        <p className="mt-2 text-sm text-[var(--color-text-muted)]">
          {description ?? copy.description}
        </p>
      ) : null}
      <form
        onSubmit={handleSubmit}
        className={`mt-4 flex flex-col gap-3 ${layout === 'inline' ? 'sm:flex-row sm:items-center' : ''}`}
      >
        <input
          type="email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Enter your email"
          className={`h-11 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-white px-3 text-sm focus-visible:outline-none focus-visible:shadow-[var(--focus-ring)] ${
            layout === 'inline' ? 'sm:flex-1' : ''
          }`}
          required
        />
        <Button type="submit" disabled={status === 'loading'}>
          {status === 'loading' ? 'Sending...' : ctaLabel ?? copy.ctaLabel}
        </Button>
        {message ? (
          <p
            className={`text-xs ${
              status === 'success' ? 'text-emerald-700' : 'text-rose-600'
            }`}
          >
            {message}
          </p>
        ) : null}
      </form>
    </div>
  )
}
