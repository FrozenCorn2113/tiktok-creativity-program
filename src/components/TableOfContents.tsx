import Link from 'next/link'

export type TocItem = {
  id: string
  title: string
  level: number
}

type TableOfContentsProps = {
  items: TocItem[]
}

export default function TableOfContents({ items }: TableOfContentsProps) {
  if (!items.length) return null

  return (
    <div className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-white p-4 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-text-subtle)]">
        Table of Contents
      </p>
      <ul className="mt-3 space-y-2 text-sm text-[var(--color-text)]">
        {items.map((item) => (
          <li key={item.id} className={item.level === 3 ? 'ml-4 text-[0.85rem]' : ''}>
            <Link href={`#${item.id}`} className="hover:text-[var(--color-accent)]">
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
