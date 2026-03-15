export const affiliateLinks: Record<string, string> = {
  // Existing
  amazonRingLight: 'https://www.amazon.com/',
  amazonMic: 'https://www.amazon.com/',
  mavely: 'https://www.joinmavely.com/',
  fiverr: 'https://www.fiverr.com/',
  canva: 'https://www.canva.com/',

  // Phase 3 additions — affiliate URLs TBD, placeholder direct links
  filmora: 'https://filmora.wondershare.com/',
  'adobe-cc': 'https://www.adobe.com/creativecloud.html',
  later: 'https://later.com/',
  buffer: 'https://buffer.com/',
  'sprout-social': 'https://sproutsocial.com/',
  'epidemic-sound': 'https://www.epidemicsound.com/',
  artlist: 'https://artlist.io/',

  // Amazon Associates — slug aliases used in resources page copy
  'amazon-ring-light': 'https://www.amazon.com/',
  'amazon-mic': 'https://www.amazon.com/',
}

export function getAffiliateLink(slug: string) {
  return affiliateLinks[slug]
}
