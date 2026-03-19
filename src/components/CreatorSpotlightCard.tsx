import Image from 'next/image'
import { ExternalLink, Users } from 'lucide-react'
import type { CreatorSpotlight } from '@/lib/nicheData'

interface CreatorSpotlightCardProps {
  creator: CreatorSpotlight
}

export function CreatorSpotlightCard({ creator }: CreatorSpotlightCardProps) {
  return (
    <article className="group rounded-2xl border border-border-default bg-white overflow-hidden hover:border-brand-primary/40 hover:shadow-lg transition-all duration-200 flex flex-col">
      {/* Profile image — wide header */}
      <div className="relative w-full aspect-[16/7] bg-background-warm overflow-hidden">
        <Image
          src={creator.profileImage}
          alt={`${creator.name} TikTok profile`}
          fill
          className="object-cover object-top"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Follower count badge */}
        <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-black/70 backdrop-blur-sm text-white text-xs font-semibold px-2.5 py-1.5 rounded-full">
          <Users className="w-3 h-3" aria-hidden />
          {creator.followers}
        </div>
      </div>

      {/* Card body */}
      <div className="p-5 flex flex-col flex-1">
        {/* Creator identity */}
        <div className="mb-4">
          <h3 className="text-[1rem] font-bold text-brand-ink leading-tight">{creator.name}</h3>
          <p className="text-sm text-brand-primary font-medium mt-0.5">@{creator.handle}</p>
        </div>

        {/* What they do */}
        <div className="mb-3 flex-1">
          <p className="text-xs font-semibold text-text-secondary uppercase tracking-wide mb-1">What they do</p>
          <p className="text-[0.9rem] text-text-primary leading-[1.65]">{creator.what}</p>
        </div>

        {/* Monetization */}
        <div className="mb-5 p-3 rounded-lg bg-brand-primary/5 border border-brand-primary/15">
          <p className="text-xs font-semibold text-brand-primaryDeep uppercase tracking-wide mb-1">How they monetize</p>
          <p className="text-[0.875rem] text-text-primary leading-[1.6]">{creator.monetization}</p>
        </div>

        {/* TikTok link */}
        <a
          href={creator.tiktokUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-1.5 w-full rounded-lg border border-border-default hover:border-brand-primary/40 bg-white hover:bg-background-warm text-sm font-semibold text-brand-ink py-2.5 px-4 transition-all duration-150"
        >
          View @{creator.handle} on TikTok
          <ExternalLink className="w-3.5 h-3.5 text-text-secondary" aria-hidden />
        </a>
      </div>
    </article>
  )
}
