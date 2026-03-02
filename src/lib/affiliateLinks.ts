export const affiliateLinks: Record<string, string> = {
  amazonRingLight: 'https://www.amazon.com/',
  amazonMic: 'https://www.amazon.com/',
  mavely: 'https://www.joinmavely.com/',
  fiverr: 'https://www.fiverr.com/',
  canva: 'https://www.canva.com/',
}

export function getAffiliateLink(slug: string) {
  return affiliateLinks[slug]
}
