'use client'

import Link from 'next/link'

type SubNavItem = {
  label: string
  href: string
}

type SubNavProps = {
  items: SubNavItem[]
}

export default function SubNav({ items }: SubNavProps) {
  return (
    <div className="subnav">
      <div className="mx-auto flex max-w-[var(--container-max)] flex-wrap items-center justify-center gap-1 px-[var(--gutter)]">
        {items.map((item, i) => (
          <span key={item.href} className="flex items-center">
            <Link href={item.href}>{item.label}</Link>
            {i < items.length - 1 && (
              <span className="mx-2 text-white/50">|</span>
            )}
          </span>
        ))}
      </div>
    </div>
  )
}
