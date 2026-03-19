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

  // Clipping Tools — placeholder direct links, needs affiliate approval
  opusclip: 'https://www.opus.pro',
  vizard: 'https://vizard.ai',
  submagic: 'https://www.submagic.co',
  kapwing: 'https://www.kapwing.com',
  descript: 'https://www.descript.com',
  pictory: 'https://pictory.ai',
  klap: 'https://klap.app',

  // Amazon Associates — slug aliases used in resources page copy
  'amazon-ring-light': 'https://www.amazon.com/',
  'amazon-mic': 'https://www.amazon.com/',

  // Niche page tools — affiliate URLs TBD, placeholder direct links
  'capcut-pro': 'https://www.capcut.com/',
  'davinci-resolve': 'https://www.blackmagicdesign.com/products/davinciresolve',
  'canva-pro': 'https://www.canva.com/pro/',
  'ring-light': 'https://www.amazon.com/',
  microphone: 'https://www.amazon.com/',
  tripod: 'https://www.amazon.com/',
  'stan-store': 'https://stan.store/',
  'linktree-pro': 'https://linktr.ee/s/pricing',
  skillshare: 'https://www.skillshare.com/',
  'obs-studio': 'https://obsproject.com/',
  'elgato-stream-deck': 'https://www.elgato.com/stream-deck',
  // Fitness niche tools
  kit: 'https://kit.com/',
  fillout: 'https://www.fillout.com/',
}

export function getAffiliateLink(slug: string) {
  return affiliateLinks[slug]
}
