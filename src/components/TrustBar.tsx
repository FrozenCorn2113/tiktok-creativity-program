'use client'

import { useEffect, useRef, useState } from 'react'

type TrustStat = {
  value: number
  suffix?: string
  prefix?: string
  label: string
}

const defaultStats: TrustStat[] = [
  { value: 64, suffix: '', label: 'guides' },
  { value: 3, suffix: '', label: 'free calculators' },
  { value: 2026, prefix: 'Updated for ', label: '' },
]

function useCountUp(target: number, isVisible: boolean, duration = 1200) {
  const [count, setCount] = useState(0)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    if (!isVisible) return
    // Respect prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setCount(target)
      return
    }

    const startTime = performance.now()
    const animate = (now: number) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * target))
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate)
      }
    }
    rafRef.current = requestAnimationFrame(animate)
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [isVisible, target, duration])

  return count
}

function StatItem({ stat }: { stat: TrustStat; index: number }) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const count = useCountUp(stat.value, isVisible)

  useEffect(() => {
    if (!ref.current) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.5 },
    )
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="flex flex-col items-center gap-1 text-center">
      <span className="text-[1.25rem] font-bold text-[var(--color-ink-strong)]">
        {stat.prefix ?? ''}{count}{stat.suffix ?? ''}
      </span>
      {stat.label ? (
        <span className="text-sm font-medium text-[var(--color-text-muted)]">{stat.label}</span>
      ) : null}
    </div>
  )
}

type TrustBarProps = {
  stats?: TrustStat[]
  className?: string
}

export default function TrustBar({ stats = defaultStats, className = '' }: TrustBarProps) {
  return (
    <div
      className={`bg-[var(--color-surface-muted)] px-4 py-6 ${className}`}
      aria-label="Site stats"
    >
      <div className="mx-auto flex max-w-[var(--container-max)] flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-16 px-[var(--gutter)]">
        {stats.map((stat, i) => (
          <StatItem key={stat.label || stat.value} stat={stat} index={i} />
        ))}
      </div>
    </div>
  )
}
