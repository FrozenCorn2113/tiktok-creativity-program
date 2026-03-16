// Designed by Vale v4 — Editorial affiliate card, grid/tools page variant

"use client";

import { Info, Tag, ExternalLink, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface AffiliateCardGridProps {
  toolName: string;
  slug: string;
  review: string;
  bestFor: string;
  priceRange: string;
  ctaText: string;
  isEditorsPick?: boolean;
  domain?: string;
}

export function AffiliateCardGrid({
  toolName,
  slug,
  review,
  bestFor,
  priceRange,
  ctaText,
  isEditorsPick = false,
  domain,
}: AffiliateCardGridProps) {
  const logoSrc = `/images/tools/${slug}-logo.png`;
  const faviconFallback = domain
    ? `https://www.google.com/s2/favicons?domain=${domain}&sz=64`
    : `https://www.google.com/s2/favicons?domain=${slug.replace(/-/g, "")}.com&sz=64`;

  return (
    <div className="bg-white border border-border-default rounded-xl p-6 hover:shadow-md transition-shadow duration-200 flex flex-col h-full">
      {/* Header row */}
      <div className="flex items-start gap-3 mb-4">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={logoSrc}
          alt={`${toolName} logo`}
          className="w-12 h-12 rounded-lg object-contain border border-border-default bg-white p-1 flex-shrink-0"
          onError={(e) => {
            e.currentTarget.src = faviconFallback;
            e.currentTarget.onerror = null;
          }}
        />
        <div className="flex-1 min-w-0">
          <h3 className="font-manrope font-bold text-brand-ink text-base leading-tight">{toolName}</h3>
          <span className="text-text-muted text-xs">{priceRange}</span>
        </div>
        {/* Optional: editor's pick badge */}
        {isEditorsPick && (
          <Badge className="bg-brand-primarySoft text-brand-primaryDeep border-brand-primary/30 text-xs font-manrope font-semibold flex-shrink-0">
            <Star className="w-3 h-3 mr-1" aria-hidden />
            Editor&apos;s Pick
          </Badge>
        )}
      </div>

      {/* Review */}
      <p className="text-text-secondary text-sm leading-relaxed flex-1 mb-4">{review}</p>

      {/* Best for tag */}
      <div className="mb-4">
        <Badge className="bg-surface text-text-secondary border-border-default text-xs font-manrope">
          <Tag className="w-3 h-3 mr-1" aria-hidden />
          Best for: {bestFor}
        </Badge>
      </div>

      {/* CTA */}
      <a
        href={`/go/${slug}`}
        target="_blank"
        rel="noopener sponsored"
        className="w-full inline-flex items-center justify-center gap-1.5 h-7 px-2.5 text-[0.8rem] rounded-lg border border-brand-primary text-brand-ink hover:bg-brand-primarySoft font-semibold transition-colors"
      >
        {ctaText} <ExternalLink className="w-3 h-3" aria-hidden />
      </a>

      {/* Disclosure */}
      <p className="text-text-muted text-[11px] font-manrope text-center mt-2 flex items-center justify-center gap-1">
        <Info className="w-3 h-3" aria-hidden />
        We may earn a commission
      </p>
    </div>
  );
}

export default AffiliateCardGrid;
