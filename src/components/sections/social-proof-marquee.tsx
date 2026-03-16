// Social Proof Marquee — publication/trust mentions, text-only, grayscale
// Uses Magic UI Marquee component, pauses on hover

"use client";

import { Marquee } from "@/components/magicui/marquee";

const trustItems = [
  "Creator Economy Insider",
  "Social Media Today",
  "TikTok Creators",
  "The Verge",
  "Digiday",
  "Influencer Marketing Hub",
  "Later Media",
  "Creator IQ",
  "Morning Brew",
  "Business Insider",
];

export function SocialProofMarquee() {
  return (
    <div className="bg-white border-y border-border-default py-8">
      <div className="max-w-container mx-auto px-6 mb-4 text-center">
        <p className="text-[12px] font-medium uppercase tracking-widest text-text-muted">
          Covering the Creator Rewards Program since 2024
        </p>
      </div>
      <Marquee pauseOnHover className="[--duration:30s]">
        {trustItems.map((item) => (
          <div
            key={item}
            className="mx-8 flex items-center"
          >
            <span className="text-lg font-bold text-gray-300 whitespace-nowrap select-none">
              {item}
            </span>
          </div>
        ))}
      </Marquee>
    </div>
  );
}

export default SocialProofMarquee;
