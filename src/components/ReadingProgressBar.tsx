'use client'

import { useEffect, useState } from 'react'

export default function ReadingProgressBar() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const current = window.scrollY
      const percent = totalHeight > 0 ? (current / totalHeight) * 100 : 0
      setProgress(Math.min(100, Math.max(0, percent)))
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="fixed left-0 top-0 z-50 h-1 w-full bg-transparent">
      <div
        className="h-full bg-[var(--color-accent)] transition-[width] duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}
