type StepCardProps = {
  number: number
  title: string
  description: string
}

export default function StepCard({ number, title, description }: StepCardProps) {
  return (
    <div className="flex gap-4 items-start">
      <div className="step-circle">{number}</div>
      <div>
        <h3 className="text-lg font-semibold text-[var(--color-text)]">{title}</h3>
        <p className="mt-1 text-sm text-[var(--color-text-muted)]">{description}</p>
      </div>
    </div>
  )
}
