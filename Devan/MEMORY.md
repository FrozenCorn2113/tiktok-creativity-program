# Devan Memory — tiktok-creativity-program

**Last updated:** 2026-03-15
**Current branch:** rebuild/audit-and-stabilize

---

## Phase Status

| Phase | Status |
|-------|--------|
| Phase 1 — Foundation (config, tokens, CSS) | COMPLETE |
| Phase 2 — Components (28 components) | COMPLETE — Bernard PASS |
| Phase 3 — Pages (15 pages rebuilt) | COMPLETE |
| Phase 4 — Final pass + deploy | PENDING |

---

## Key Decisions Made

### Architecture
- Homepage split into `page.tsx` (server, exports metadata) + `HomePageClient.tsx` (client, interactive)
- Guides listing split into `guides/page.tsx` (server, loads data) + `GuidesListClient.tsx` (client, filter state)
- Pattern: server page exports metadata + passes serializable props to client component
- Start Here has its own `layout.tsx` that overrides root layout — logo-only header, no nav

### Component Usage
- `ScrollReveal` — client component, placed at top of server page components (renders null, mounts IntersectionObserver)
- `TrustBar` — standalone, self-contained with countUp animation
- `CategoryFilterTabs` — needs to be in a client component (useState)
- `TableOfContents` — `sidebar={true}` for desktop, `sidebar={false}` for mobile accordion
- `RelatedGuides` — takes array of guides, shows up to 3

### Content Integration
- 7 new affiliate slugs added to `src/lib/affiliateLinks.ts` (filmora, adobe-cc, later, buffer, sprout-social, epidemic-sound, artlist)
- Amazon slug aliases added: `amazon-ring-light`, `amazon-mic` (resources page uses hyphens, affiliateLinks had camelCase)
- Resources page: `ResourceItem` internal helper component handles affiliate + external links
- Products page: uses Scribe's waitlist copy, no confirmed pricing shown

### Bernard's Phase 2 Blocking Fixes (2026-03-15)
All 7 blocking issues fixed. Build passes 0 errors.

1. **Guides listing cards** — `GuidesListClient` grid had `data-reveal` but no `is-visible`. ScrollReveal may not fire in time for client-mounted content. Fixed: added `is-visible` directly to the grid, removed `data-reveal`. Cards now always visible.
2. **Guide page header illustration** — Wrapped `PageHeader` in two-column grid per A1-A3. Added category-to-illustration helper `getIllustrationForCategory()`. Image goes in right column, `h-[320px]`, fill, object-contain object-right.
3. **Calculator page headers** — All 3 calculator pages now have `bg-[#FFF7ED]` two-column header section with `landpress-marketing-hero.png` in right column per C1-C3.
4. **"What affects your results?" section** — Added to all 3 calculator pages (C10). Removed duplicate `benchmarkRows`/`ComparisonTable` from earnings calculator.
5. **404 illustration** — Replaced `illustration-placeholder` div with `<Image src="/assets/brand-images/landpress-marketing-4.png" fill className="object-contain">` per E1-E3. Button label updated to "Back to home".
6. **TrustBar year formatting** — Added `noGrouping?: boolean` to `TrustStat` type. Year stat gets `noGrouping: true`. `formatCount()` helper returns `String(count)` when noGrouping, else `.toLocaleString()`. "Updated 2026" now renders correctly.
7. **Content pillar icon color** — Changed `text-[#E58B3A]` to `text-[#F4A261]` on pillar icon wrapper in HomePageClient per H10.
**Non-blocking (also fixed):** Guide ToC layout inverted — moved `<aside>` (ToC) before `<article>` in the flex row so ToC is left, prose is right per A5.

### Bernard's Phase 2 Notes (resolved pre-fix)
- JetBrains Mono on calculator outputs: VERIFIED — `mono-output` CSS class in global.css maps to `--font-mono`, used on `<p className="mono-output">` in EarningsCalculator
- Duplicate font @import in globals.css: NOT PRESENT — fonts load via `<link>` tags in layout.tsx head, one `@import` for tokens, one for global.css animations. Clean.

### Pages Removed / Changed
- Guide detail: removed right sidebar illustration, bottom tab nav, CommentSection
- Niche/Location pages: now use `notFound()` instead of inline fallback for unknown slugs
- `not-found.tsx` created at app root (covers all 404s)

---

## Build State
- `npm run build`: PASS (97 pages, 0 errors)
- `npm run typecheck`: PASS (0 errors)
- ESLint not configured (pre-existing)

---

## Phase 4 Remaining Work
1. New MDX guides: move from `content/new-guides/` to `content/guides/`
2. Earnings database page — restyle (not touched yet)
3. Utility pages (contact, privacy, terms, affiliate-disclosure, newsletter, sponsor, media, troubleshooting) — minimal PageHeader treatment
4. Final Lighthouse check
5. Vercel deploy

---

## File Locations
- Build plan: `BUILD_PLAN.md`
- Brand spec: `BRAND.md`
- Design system: `/Users/bcarter/Desktop/Claude Agents/design-system/tiktok-creativity-program/MASTER.md`
- Content: `content/`
- App: `src/app/`
- Components: `src/components/`
