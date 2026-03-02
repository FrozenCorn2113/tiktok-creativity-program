'use client'

import { useEffect, useState } from 'react'
import EmailSignupForm from '@/components/EmailSignupForm'

export default function ExitIntentSignup() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleMouseLeave = (event: MouseEvent) => {
      if (event.clientY <= 0) {
        setOpen(true)
      }
    }

    window.addEventListener('mouseout', handleMouseLeave)
    return () => window.removeEventListener('mouseout', handleMouseLeave)
  }, [])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4">
      <div className="relative w-full max-w-md rounded-[var(--radius-lg)] bg-white p-6 shadow-lg">
        <button
          type="button"
          className="absolute right-4 top-4 text-sm text-[var(--color-text-subtle)]"
          onClick={() => setOpen(false)}
          aria-label="Close"
        >
          Close
        </button>
        <EmailSignupForm variant="exit-intent" />
      </div>
    </div>
  )
}
