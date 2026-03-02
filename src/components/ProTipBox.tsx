type ProTipBoxProps = {
  children: React.ReactNode
  title?: string
}

export default function ProTipBox({ children, title = 'PRO TIP' }: ProTipBoxProps) {
  return (
    <div className="callout-accent my-6">
      <p className="text-xs font-bold uppercase tracking-wider text-[var(--color-accent)]">
        {title}
      </p>
      <div className="mt-2 text-sm text-[var(--color-text-muted)] leading-relaxed">
        {children}
      </div>
    </div>
  )
}
