import React from 'react'

type CalloutType = 'tip' | 'warning' | 'success' | 'info'

const styles: Record<CalloutType, { label: string; className: string }> = {
  tip: {
    label: 'Tip',
    className: 'border-emerald-200 bg-emerald-50 text-emerald-900',
  },
  warning: {
    label: 'Warning',
    className: 'border-amber-200 bg-amber-50 text-amber-900',
  },
  success: {
    label: 'Success',
    className: 'border-teal-200 bg-teal-50 text-teal-900',
  },
  info: {
    label: 'Info',
    className: 'border-blue-200 bg-blue-50 text-blue-900',
  },
}

type CalloutBoxProps = React.HTMLAttributes<HTMLDivElement> & {
  type?: CalloutType
  title?: string
}

export default function CalloutBox({
  type = 'info',
  title,
  children,
  className = '',
  ...props
}: CalloutBoxProps) {
  const style = styles[type]
  return (
    <div
      className={`rounded-[var(--radius-lg)] border px-5 py-4 ${style.className} ${className}`}
      {...props}
    >
      <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide">
        <span>{style.label}</span>
        {title ? <span className="text-xs font-normal normal-case">{title}</span> : null}
      </div>
      <div className="mt-2 text-sm leading-relaxed text-current">{children}</div>
    </div>
  )
}
