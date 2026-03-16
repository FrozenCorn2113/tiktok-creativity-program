// Designed by Vale v4 — Editorial affiliate card, inline guide variant

"use client";

import { Info, Tag, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface AffiliateCardInlineProps {
  toolName: string;
  slug: string;
  review: string;
  bestFor: string;
  priceRange: string;
  ctaText: string;
}

export function AffiliateCardInline({
  toolName,
  slug,
  review,
  bestFor,
  priceRange,
  ctaText,
}: AffiliateCardInlineProps) {
  return (
    <div className="bg-surface border border-border-default rounded-xl p-5 flex items-start gap-4 my-8 relative not-prose">
      {/* Affiliate disclosure label — top right, always visible */}
      <div className="absolute top-3 right-3 flex items-center gap-1 text-text-muted">
        <Info className="w-3 h-3" aria-hidden />
        <span className="text-[11px] font-manrope font-medium">Affiliate</span>
      </div>

      {/* Tool logo */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`/images/tools/${slug}-logo.png`}
        alt={`${toolName} logo`}
        className="w-12 h-12 rounded-lg object-contain flex-shrink-0 border border-border-default bg-white p-1"
        onError={(e) => {
          // Fallback to Google Favicon API
          const domain = slug.replace(/-/g, "");
          e.currentTarget.src = `https://www.google.com/s2/favicons?domain=${domain}.com&sz=64`;
          e.currentTarget.onerror = null;
        }}
      />

      {/* Content */}
      <div className="flex-1 pr-12">
        <h4 className="font-manrope font-semibold text-brand-ink text-base mb-1">{toolName}</h4>
        <p className="text-text-secondary text-sm leading-relaxed mb-3">{review}</p>
        <div className="flex items-center gap-2 flex-wrap mb-3">
          <Badge className="bg-surface text-text-secondary border-border-default text-xs font-manrope">
            <Tag className="w-3 h-3 mr-1" aria-hidden />
            Best for: {bestFor}
          </Badge>
          <span className="text-text-muted text-xs">{priceRange}</span>
        </div>
        <a
          href={`/go/${slug}`}
          target="_blank"
          rel="noopener sponsored"
          className="inline-flex items-center gap-1.5 h-7 px-2.5 text-[0.8rem] rounded-lg border border-brand-primary text-brand-ink hover:bg-brand-primarySoft font-semibold transition-colors"
        >
          {ctaText} <ExternalLink className="w-3 h-3" aria-hidden />
        </a>
      </div>
    </div>
  );
}

export default AffiliateCardInline;
