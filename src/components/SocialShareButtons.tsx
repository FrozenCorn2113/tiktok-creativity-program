'use client'

import { useMemo } from 'react'

type SocialShareButtonsProps = {
  url: string
  title: string
}

export default function SocialShareButtons({ url, title }: SocialShareButtonsProps) {
  const shareLinks = useMemo(
    () => ({
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        title,
      )}&url=${encodeURIComponent(url)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    }),
    [title, url],
  )

  const handleNativeShare = async () => {
    if (navigator.share) {
      await navigator.share({ title, url })
    } else {
      window.open(shareLinks.twitter, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <div className="flex flex-wrap items-center gap-2">
      <button
        onClick={handleNativeShare}
        className="rounded-full border border-[var(--color-border)] px-4 py-2 text-xs font-semibold uppercase tracking-wide text-[var(--color-text)] transition hover:bg-[var(--color-surface-muted)]"
      >
        Share
      </button>
      <a
        href={shareLinks.twitter}
        target="_blank"
        rel="noreferrer"
        className="rounded-full border border-[var(--color-border)] px-4 py-2 text-xs font-semibold uppercase tracking-wide text-[var(--color-text)] transition hover:bg-[var(--color-surface-muted)]"
      >
        Twitter
      </a>
      <a
        href={shareLinks.facebook}
        target="_blank"
        rel="noreferrer"
        className="rounded-full border border-[var(--color-border)] px-4 py-2 text-xs font-semibold uppercase tracking-wide text-[var(--color-text)] transition hover:bg-[var(--color-surface-muted)]"
      >
        Facebook
      </a>
      <a
        href={shareLinks.linkedin}
        target="_blank"
        rel="noreferrer"
        className="rounded-full border border-[var(--color-border)] px-4 py-2 text-xs font-semibold uppercase tracking-wide text-[var(--color-text)] transition hover:bg-[var(--color-surface-muted)]"
      >
        LinkedIn
      </a>
    </div>
  )
}
