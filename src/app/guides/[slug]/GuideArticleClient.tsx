'use client'

import { useState } from 'react'
import { ThumbsUp, ThumbsDown } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface GuideArticleClientProps {
  articleUrl: string
  title: string
}

export default function GuideArticleClient({ articleUrl, title }: GuideArticleClientProps) {
  const [voted, setVoted] = useState<'up' | 'down' | null>(null)

  const handleVote = async (vote: 'up' | 'down') => {
    setVoted(vote)
    // Simple feedback — fire and forget, no external service
    try {
      await fetch('/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: articleUrl, title, vote }),
      })
    } catch {
      // Silent fail — UX feedback already shown
    }
  }

  if (voted) {
    return (
      <div className="text-sm text-text-secondary py-2">
        {voted === 'up' ? 'Thanks — glad it helped.' : 'Thanks for the feedback. We\'ll keep improving.'}
      </div>
    )
  }

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm text-text-secondary font-medium">Was this helpful?</span>
      <Button
        variant="outline"
        size="sm"
        onClick={() => handleVote('up')}
        className="flex items-center gap-1.5 text-text-secondary hover:text-brand-ink min-h-[44px]"
        aria-label="Yes, this was helpful"
      >
        <ThumbsUp className="h-3.5 w-3.5" aria-hidden />
        Yes, helpful
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={() => handleVote('down')}
        className="flex items-center gap-1.5 text-text-secondary hover:text-brand-ink min-h-[44px]"
        aria-label="No, needs improvement"
      >
        <ThumbsDown className="h-3.5 w-3.5" aria-hidden />
        Needs improvement
      </Button>
    </div>
  )
}
