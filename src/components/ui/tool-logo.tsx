"use client"

import { useState } from 'react'

interface ToolLogoProps {
  domain: string
  toolName: string
}

export function ToolLogo({ domain, toolName }: ToolLogoProps) {
  const [visible, setVisible] = useState(true)

  if (!visible) return null

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`https://logo.clearbit.com/${domain}`}
      alt=""
      width={32}
      height={32}
      className="rounded-md w-8 h-8 object-contain flex-shrink-0 bg-gray-50"
      onError={() => setVisible(false)}
    />
  )
}
