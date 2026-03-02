'use client'

import { useState } from 'react'

export default function CommentSection() {
  const [message, setMessage] = useState('')

  return (
    <div className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-white p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-[var(--color-text)]">Community questions</h3>
      <p className="mt-2 text-sm text-[var(--color-text-muted)]">
        Comments are coming soon. For now, drop your question and we’ll add it to the next update.
      </p>
      <form
        onSubmit={(event) => {
          event.preventDefault()
          setMessage('')
        }}
        className="mt-4 space-y-3"
      >
        <textarea
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder="What should we cover next?"
          className="min-h-[110px] w-full rounded-[var(--radius-md)] border border-[var(--color-border)] p-3 text-sm focus-visible:outline-none focus-visible:shadow-[var(--focus-ring)]"
        />
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-[var(--radius-lg)] border border-[var(--color-border)] px-4 py-2 text-sm font-semibold text-[var(--color-text)] transition hover:bg-[var(--color-surface-muted)]"
        >
          Send question
        </button>
      </form>
    </div>
  )
}
