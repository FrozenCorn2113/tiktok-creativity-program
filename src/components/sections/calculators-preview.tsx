// Calculators Preview section — dark bg-brand-ink, image right (v4: Free badges added)
// No external library — custom 2-column split per PAGE_SPECS.md
// SSR-safe: content visible without JS.

"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/motion";

export function CalculatorsPreview() {
  const shouldReduceMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  const motionProps = mounted && !shouldReduceMotion
    ? { initial: "hidden", whileInView: "show", viewport: viewportOnce, variants: fadeUp }
    : {};

  return (
    <section className="bg-brand-ink py-24">
      <div className="max-w-container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Left — text on dark bg */}
          <motion.div {...motionProps}>
            <span className="text-[12px] font-semibold uppercase tracking-widest text-brand-primary">
              Free Calculators
            </span>
            <h2 className="mt-3 text-[2.25rem] font-bold text-white leading-tight" style={{ fontWeight: 700 }}>
              Find Out What Your Views Are Worth
            </h2>
            <p className="mt-4 text-[1rem] leading-[1.75] text-gray-300 max-w-md">
              Most TikTok earnings calculators use follower count. The Creator Rewards Program doesn&apos;t pay based on followers — it pays based on qualified views and your RPM. These calculators use the actual model.
            </p>

            {/* Imagen-generated TikTok creator illustration */}
            <div className="mt-8 rounded-2xl overflow-hidden">
              <Image
                src="/images/homepage-explainer.webp"
                alt="Creator checking TikTok earnings and analytics on phone"
                width={480}
                height={360}
                className="w-full object-contain rounded-2xl"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Right — brand image */}
          <motion.div
            className="flex justify-center md:justify-end"
            {...(mounted && !shouldReduceMotion
              ? { initial: { opacity: 0, x: 20 }, whileInView: { opacity: 1, x: 0 }, viewport: viewportOnce, transition: { duration: 0.5, delay: 0.15 } }
              : {})}
          >
            <Image
              src="/images/brand/landpress-marketing-2.png"
              alt="TikTok earnings calculator on phone"
              width={400}
              height={440}
              className="rounded-2xl object-contain"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default CalculatorsPreview;
