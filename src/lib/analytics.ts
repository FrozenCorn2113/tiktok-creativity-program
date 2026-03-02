export type AnalyticsEvent = {
  action: string
  category?: string
  label?: string
  value?: number
}

export function trackEvent({ action, category, label, value }: AnalyticsEvent) {
  if (typeof window === 'undefined') return
  if (!('gtag' in window)) return

  window.gtag?.('event', action, {
    event_category: category,
    event_label: label,
    value,
  })
}

declare global {
  interface Window {
    gtag?: (...args: any[]) => void
  }
}
