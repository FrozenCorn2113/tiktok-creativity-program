# Implementation Checklist — TikTok Creativity Program

**How this works:**
- Devan checks off every item before submitting to Bernard
- Bernard verifies every item — screenshot evidence required
- Unchecked items at review = automatic REVISION NEEDED
- Items marked [WCAG] are accessibility requirements. Failing these blocks ship.

---

## Foundation

- [ ] 1. `tokens.json` values loaded into `tailwind.config.ts` — all color, typography, spacing, shadow, and border-radius tokens available as Tailwind classes
- [ ] 2. Manrope font loaded via `next/font/google` with weights 400, 500, 600, 700, 800
- [ ] 3. JetBrains Mono font loaded via `next/font/google` with weight 400
- [ ] 4. Brand color classes work: `bg-brand-primary`, `text-brand-ink`, `bg-background-warm`, `bg-brand-primarySoft` all render correctly in browser
- [ ] 5. Container max-width set to 1200px (`max-w-container`)
- [ ] 6. Content max-width set to 720px (`max-w-content`) — used for article prose and centered layouts
- [ ] 7. [WCAG] Orange buttons (`bg-brand-primary`) always use `text-brand-ink` (#111827) — never white text on orange. Contrast ratio verified: #111827 on #F4A261 = 4.56:1 (passes AA). Verify in browser DevTools accessibility panel.
- [ ] 8. Framer Motion installed: `npm install framer-motion`
- [ ] 9. shadcn/ui initialized: `npx shadcn@latest init` complete, `components/ui/` directory exists
- [ ] 10. Core shadcn components installed: button, card, navigation-menu, tabs, accordion, badge, breadcrumb, sheet, slider, scroll-area, input
- [ ] 11. Magic UI CLI installed: `npx magicui-cli@latest` can resolve
- [ ] 12. `prefers-reduced-motion` handled: all Framer Motion animations wrapped with `useReducedMotion()` check — static render when true
- [ ] 13. Brand images copied: all 4 files from `assets/brand-images/` exist at `public/images/brand/` with correct filenames (landpress-marketing-hero.png, landpress-marketing-2.png, landpress-marketing-3.png, landpress-marketing-4.png)

---

## Navigation (all pages)

- [ ] 14. Aceternity Floating Navbar installed — source URL visited: https://ui.aceternity.com/components/floating-navbar — code copied to `components/aceternity/floating-navbar.tsx` — source URL documented in file comment
- [ ] 15. Navbar renders as floating pill with blur background on scroll (not a static top bar)
- [ ] 16. Logo: "TikTok Creativity Program" — Manrope 800, #111827 — visually distinct from nav links (heavier, larger)
- [ ] 17. Nav links render at correct weight (Manrope 500, not bold)
- [ ] 18. Navbar CTA button: `bg-brand-primary text-brand-ink font-semibold` — orange with ink text, not white text
- [ ] 19. Mobile: hamburger (Lucide `Menu`) visible at 375px — tap opens shadcn Sheet drawer
- [ ] 20. Mobile sheet contains all nav links stacked + full-width CTA button at bottom
- [ ] 21. [WCAG] Navbar CTA keyboard-accessible: Tab reaches button, Enter/Space activates it
- [ ] 22. No emojis in navigation. Lucide icons only.

---

## Homepage

- [ ] 23. Aceternity UI Spotlight installed — source URL visited: https://ui.aceternity.com/components/spotlight — code copied to `components/aceternity/spotlight.tsx` — source URL documented in file comment
- [ ] 24. Hero section uses Spotlight component as the animated background layer (mouse-following light beam effect renders in browser)
- [ ] 25. Hero background is `bg-background-warm` (#FFF7ED) — NOT white, NOT orange
- [ ] 26. Hero layout is 2-column grid (`md:grid-cols-[3fr_2fr]`) — text left, image right. NOT single column.
- [ ] 27. `landpress-marketing-hero.png` renders in hero RIGHT column at correct dimensions (max-h 440px, object-contain, rounded-2xl)
- [ ] 28. Hero H1 headline text matches CONTENT.md `homepage-hero-headline` exactly
- [ ] 29. Hero headline animates on page load: staggered word reveal via Framer Motion (each word opacity 0→1, y 10→0, stagger 0.08s)
- [ ] 30. Hero primary CTA button: `bg-brand-primary text-brand-ink font-bold shadow-orange` with `hover:scale-[1.02] transition-all` — visually pops, not flat
- [ ] 31. Hero primary CTA has Lucide `ChevronRight` icon right of text
- [ ] 32. Hero secondary CTA: `variant="ghost"` with Lucide `Calculator` icon left of text
- [ ] 33. Scroll indicator: Lucide `ChevronDown` visible at bottom-center of hero, animated bounce (y oscillates 0→6→0)
- [ ] 34. Trust bar renders below hero with 3 stats: guide count, creator count, calculator count
- [ ] 35. Magic UI Number Ticker installed: `npx magicui-cli@latest add number-ticker` — stats count up when scrolled into view
- [ ] 36. Trust bar numbers do NOT flash "0" on initial render — target value renders server-side, animation fires after IntersectionObserver
- [ ] 37. Three-path section: Magic UI Bento Grid installed (`npx magicui-cli@latest add bento-grid`) — 3 cards render: "Am I eligible?" / "I'm in. How do I earn more?" / "Something's wrong"
- [ ] 38. Three-path cards each have: Lucide icon (CheckCircle / TrendingUp / AlertTriangle), title, body, CTA link
- [ ] 39. Three-path cards stagger on scroll (Framer Motion, 0.1s between cards)
- [ ] 40. Featured Guides section: 21st.dev blog cards installed — source URL visited: https://21st.dev/r/sumonadotwork/blog-cards — code in `components/sections/guide-cards.tsx` — source URL documented
- [ ] 41. Featured Guides: 6 guide cards visible with category badge, thumbnail image, title, excerpt, read time
- [ ] 42. Featured Guides: every card has a unique thumbnail image (400x300 WebP) — no recycled thumbnails
- [ ] 43. Guide card thumbnails are NOT missing/placeholder — actual generated images
- [ ] 44. shadcn Tabs installed and working as category filter on Guides listing section
- [ ] 45. Calculators section: `bg-brand-ink` dark background — visually breaks up the page
- [ ] 46. `landpress-marketing-2.png` renders in calculators section RIGHT column (400x440, rounded-2xl, object-contain)
- [ ] 47. Email capture section: 21st.dev newsletter form installed — source URL visited: https://21st.dev/r/ruixenui/newsletter-form — code in `components/sections/email-capture.tsx` — source URL documented
- [ ] 48. `landpress-marketing-3.png` renders ABOVE the email form (200x200, centered, rounded-2xl)
- [ ] 49. Email form submit button: `bg-brand-primary text-brand-ink font-bold rounded-full` — orange, ink text
- [ ] 50. Magic UI Marquee installed: `npx magicui-cli@latest add marquee` — logo strip section renders with scrolling content
- [ ] 51. Marquee pauses on hover

---

## Guide Article Pages

- [ ] 52. shadcn Breadcrumb renders above article header with correct path (Home > Guides > Category > Title)
- [ ] 53. Article H1 renders at Manrope 800, 48px desktop — not generic body text weight
- [ ] 54. Hero image renders for EVERY guide: `public/images/guides/hero-{slug}.webp` at 1200x630
- [ ] 55. Every guide has a UNIQUE hero image — not the same image reused across guides
- [ ] 56. Hero images load with `priority` and `loading="eager"` (above fold)
- [ ] 57. At least 3 inline images per article between sections — `public/images/guides/guide-inline-{slug}-{n}.webp` at 800x600
- [ ] 58. All inline images have descriptive alt text (not "image" or filename)
- [ ] 59. All below-fold images use `loading="lazy"`
- [ ] 60. Prose styles applied: Manrope body, correct heading weights, link colors, code styling
- [ ] 61. Comparison tables: `overflow-x-auto` wrapper + sticky first column on mobile — no horizontal scroll issues at 375px
- [ ] 62. Callout boxes (info/warning/tip) render with left border, correct background tint, Lucide icon
- [ ] 63. Sidebar Table of Contents visible on desktop (hidden on mobile)
- [ ] 64. shadcn ScrollArea wrapping ToC links
- [ ] 65. Sidebar sticky behavior: ToC scrolls with user, highlights active section
- [ ] 66. Related guides section at article footer: 3 cards with thumbnails
- [ ] 67. [WCAG] Article body text: Manrope 400 at minimum 16px, line-height 1.75 — verify readable at 375px mobile
- [ ] 68. No affiliate CTAs in first 3 paragraphs of any guide — rule from strategy.md

---

## Calculator Pages

- [ ] 69. Calculator hero image renders at top: `public/images/calculators/hero-{slug}.webp` at 1200x630
- [ ] 70. Each calculator has a UNIQUE hero — not recycled from guides or other calculators
- [ ] 71. 21st.dev pricing slider adapted for calculator input — source URL visited: https://21st.dev/r/radu-activation-popescu/pricing-slider-loops — code in `components/sections/calculator-panel.tsx` — source URL documented
- [ ] 72. shadcn Slider installed: `npx shadcn@latest add slider` — input sliders render and function
- [ ] 73. Calculator result number renders in JetBrains Mono 700, 48px, text-brand-primary (#F4A261)
- [ ] 74. Magic UI Number Ticker on calculator result — number animates when value changes
- [ ] 75. "What affects your results?" section renders below calculator with 3 explanation cards and guide links
- [ ] 76. No affiliate CTAs on any calculator page — only links to guides — verified against strategy.md rule
- [ ] 77. shadcn Accordion for calculator FAQ — 5-7 FAQs render and expand correctly
- [ ] 78. unDraw illustration renders inline: `public/images/illustrations/calculator-results.min.svg` — color is orange (#F4A261), NOT purple (#6C63FF)

---

## Start Here Page

- [ ] 79. Navigation is REMOVED from Start Here page — no floating navbar, no nav links
- [ ] 80. Only the logo wordmark appears as a header, centered, linking to homepage
- [ ] 81. `landpress-marketing-4.png` renders in Start Here hero (600x400, rounded-2xl, centered)
- [ ] 82. Eligibility checklist renders as shadcn Accordion with expandable items
- [ ] 83. Email capture is the primary CTA — positioned immediately after eligibility checklist
- [ ] 84. Footer on Start Here page is minimal (single-row dark bar) — NOT the full 4-column footer

---

## 404 Page

- [ ] 85. unDraw page-not-found SVG exists at `public/images/illustrations/page-not-found.min.svg`
- [ ] 86. SVG color is orange (#F4A261), NOT the default purple (#6C63FF) — sed color swap was applied
- [ ] 87. SVG is optimized with svgo — file size under 20KB
- [ ] 88. SVG renders at 400x300 centered on the 404 page
- [ ] 89. This is NOT a placeholder div. NOT a missing image. An actual SVG file is present.
- [ ] 90. Two exit buttons render: "Go Home" (primary, orange) and "Browse Guides" (outline)
- [ ] 91. No full navigation on 404 page

---

## Global / All Pages

- [ ] 92. No emoji icons anywhere in rendered output — Lucide icons only. Screenshot every page and verify.
- [ ] 93. All pages responsive at 375px — no horizontal scroll, no content cut off, no overlapping elements
- [ ] 94. All pages responsive at 768px — tablet layout correct (2-column where specified)
- [ ] 95. All pages responsive at 1280px — desktop layout correct, no excessive whitespace
- [ ] 96. Touch targets at 375px: all buttons and links >= 44px tall (WCAG requirement)
- [ ] 97. Footer renders on all pages (except Start Here and 404) with 4 columns desktop, 2 columns tablet, 1 column mobile
- [ ] 98. Footer background is `bg-brand-ink` (#111827) — dark
- [ ] 99. [WCAG] Run axe-core on homepage, 1 guide page, 1 calculator page — zero critical violations
- [ ] 100. OG image route exists at `app/og/route.tsx` — visiting `/og?title=Test+Title` renders a 1200x630 image with dark ink background and orange accent
- [ ] 101. All page metadata includes `openGraph.images` pointing to `/og?title=...`
- [ ] 102. Lighthouse Performance >= 85 on homepage (run `npx lighthouse http://localhost:3000 --output=json`)
- [ ] 103. Lighthouse SEO >= 95 on homepage
- [ ] 104. Lighthouse Accessibility >= 90 on homepage
- [ ] 105. Lighthouse Best Practices >= 90 on homepage
- [ ] 106. Run Lighthouse on 1 guide page — same thresholds
- [ ] 107. Run Lighthouse on 1 calculator page — same thresholds
- [ ] 108. CLS (Cumulative Layout Shift) < 0.1 — all images have explicit width/height attributes

---

## Image Completeness Check

- [ ] 109. `public/images/brand/landpress-marketing-hero.png` — exists, loads in browser, not broken
- [ ] 110. `public/images/brand/landpress-marketing-2.png` — exists, loads in browser
- [ ] 111. `public/images/brand/landpress-marketing-3.png` — exists, loads in browser
- [ ] 112. `public/images/brand/landpress-marketing-4.png` — exists, loads in browser
- [ ] 113. `public/images/homepage-explainer.webp` — generated, exists, loads in browser
- [ ] 114. `public/images/calculators/hero-earnings.webp` — generated, exists
- [ ] 115. `public/images/calculators/hero-rpm.webp` — generated, exists
- [ ] 116. `public/images/calculators/hero-follower.webp` — generated, exists
- [ ] 117. All 57 guide hero images exist at `public/images/guides/hero-{slug}.webp` — each is unique
- [ ] 118. All 57 guide thumbnails exist at `public/images/guides/thumb-{slug}.webp` — 400x300
- [ ] 119. `public/images/illustrations/page-not-found.min.svg` — exists, is orange not purple
- [ ] 120. `public/images/illustrations/calculator-results.min.svg` — exists, is orange not purple

---

## Component Source Documentation

Each installed component must have the source URL documented in a comment at the top of the file. Bernard verifies this at G2/G4 gates.

- [ ] 121. `components/aceternity/floating-navbar.tsx` — first line comment: `// Source: https://ui.aceternity.com/components/floating-navbar`
- [ ] 122. `components/aceternity/spotlight.tsx` — first line comment: `// Source: https://ui.aceternity.com/components/spotlight`
- [ ] 123. `components/sections/guide-cards.tsx` — first line comment: `// Source: https://21st.dev/r/sumonadotwork/blog-cards`
- [ ] 124. `components/sections/email-capture.tsx` — first line comment: `// Source: https://21st.dev/r/ruixenui/newsletter-form`
- [ ] 125. `components/sections/calculator-panel.tsx` — first line comment: `// Source: https://21st.dev/r/radu-activation-popescu/pricing-slider-loops`

---

## Pre-Delivery Final Check (Devan runs before any Bernard submission)

- [ ] 126. Dev server runs without errors: `npm run dev` — zero console errors
- [ ] 127. Build succeeds: `npm run build` — zero build errors
- [ ] 128. Desktop screenshot taken at 1280px: `npx playwright screenshot http://localhost:3000 --viewport-width=1280 --viewport-height=900 -o review-desktop.png`
- [ ] 129. Mobile screenshot taken at 375px: `npx playwright screenshot http://localhost:3000 --viewport-width=375 --viewport-height=812 -o review-mobile.png`
- [ ] 130. Full-page screenshot taken: `npx playwright screenshot http://localhost:3000 --viewport-width=1280 --full-page -o review-full.png`
- [ ] 131. Screenshots visually reviewed by Devan before submitting — if anything looks broken, fix it first
- [ ] 132. IMPLEMENTATION_CHECKLIST.md submitted alongside screenshots — every checked item has been manually verified

**Total items: 132**

Bernard's review gate: Devan submits screenshots + checklist. Bernard walks every checked item visually. Items that are checked but visually wrong = immediate REVISION NEEDED. No exceptions.
