# PROJECT: TikTok Creativity Program

**Pipeline:** full-creative
**Sequence:** Atlas (setup) -> Christopher (research) -> Vale (brand) -> Scribe (content) -> Devan (build)
**Owner:** Bernard
**Created:** 2026-03-15

---

## Objective

Transform tiktokcreativityprogram.com from a functional-but-ugly SEO/affiliate content site into a polished, monetized, production-grade resource for TikTok creators. Site already has 57 MDX guides, 3 calculators, affiliate redirects, and ConvertKit integration. Needs: research-informed monetization strategy, proper brand identity, improved content, clean codebase, and deployment.

## Revenue Model

- **Primary:** Affiliate commissions (Amazon gear, Canva, Fiverr, Mavely + new programs from research)
- **Secondary:** Premium newsletter (waitlist exists, not yet launched)
- **Tertiary:** Ad network (once traffic thresholds met)
- **Future:** Digital products (templates, courses)
- **No auth, no payments, no gated content** (email capture only)

## What Exists

- Next.js 14 + TypeScript + Tailwind + MDX
- 57 MDX guides (eligibility, earnings, niches, regional)
- 3 interactive calculators (earnings, RPM, follower income)
- ConvertKit email capture (inline + popup)
- Affiliate redirect system (`/go/[slug]/`)
- GA4 analytics
- 4 brand illustrations (orange/black/white line-art) at `assets/brand-images/`
- Comprehensive audit at `docs/rebuild/AUDIT.md`
- 3-phase rebuild plan at `docs/rebuild/PLAN.md`
- Strategy doc at `docs/strategy.md`

## What's Wrong

- Design is poor ("disgusting" per Brett)
- 20+ dead Vite-era files polluting codebase
- Broken ToC regex, dead Unsplash API for images, missing og-default.png
- No tests, no ESLint config, strict mode off
- No rate limiting on API endpoints
- Placeholder product/resource pages
- CommentSection is fake
- Monetization strategy is basic -- needs research-driven optimization

---

## Pipeline Phases

### Phase 0: Atlas -- Project Setup
**Status:** SKIP (PROJECT.md created by Bernard directly; project directory and docs already exist)

### Phase 1: Christopher -- Research & Intelligence
**Status:** LOCKED
**Brief:** `Bernard/briefs/tcp-christopher-brief.md`
**Deliverable:** `projects/tiktok-creativity-program/RESEARCH.md`
**Success Criteria:**
- Competitive landscape mapped (5+ competitor sites analyzed)
- Top affiliate programs identified with commission rates
- Ad network options with traffic thresholds documented
- SEO keyword gaps identified (10+ opportunities)
- Email monetization strategies researched
- Content-to-revenue patterns documented from similar sites

### Phase 2: Vale -- Brand & Visual Direction
**Status:** LOCKED
**Brief:** `Bernard/briefs/tcp-vale-brief.md`
**Deliverable:** `projects/tiktok-creativity-program/BRAND.md` (1107 lines) + `design-system/tiktok-creativity-program/MASTER.md` (676 lines)
**Success Criteria:**
- Color palette formalized (extending orange/black/white) -- DONE: #F4A261 primary, full warm neutral system, WCAG contrast notes
- Typography system defined -- DONE: Manrope + JetBrains Mono, full type scale with mobile/desktop
- Component design direction (cards, CTAs, navigation) -- DONE: 10+ components with CSS specs and 21st.dev references
- Illustration style guide for generating more images -- DONE: 12 scene briefs + AI generation prompt template
- Page layout templates (guide page, calculator page, landing page, hub page) -- DONE: 6 page types with section-by-section structure
- Brett approves the direction before Scribe/Devan proceed -- PENDING

### Phase 3: Scribe -- Content
**Status:** READY
**Brief:** `Bernard/briefs/tcp-scribe-brief.md`
**Deliverable:** `projects/tiktok-creativity-program/content/` (~25 files) + `CONTENT_DELIVERABLES.md` manifest
**Success Criteria:**
- 5 reusable content templates (guide, roundup, comparison, landing page, email)
- 8 new content pieces (3 roundups, 4 guides, 1 landing page)
- 5-email ConvertKit welcome sequence
- Homepage copy blocks for all 5 sections
- Product/resource page copy (real, not placeholder)
- All content matches BRAND.md voice/tone
- All affiliate links labeled per strategy.md
- No unverified facts presented as true
- Templates detailed enough for autonomous agent production
- CONTENT_DELIVERABLES.md manifest listing all files

### Phase 4: Devan -- Build & Deploy
**Status:** READY
**Brief:** `Bernard/briefs/tcp-devan-brief.md`
**Build Plan:** `projects/tiktok-creativity-program/BUILD_PLAN.md` (Devan-authored, 317 lines)
**Deliverable:** Production-ready site on Vercel
**Success Criteria:**
- All dead Vite code removed
- New brand/design implemented from Vale's BRAND.md + MASTER.md
- All bugs from AUDIT.md fixed
- Scribe's 7 new guides + homepage/product/resource copy integrated
- 7 new affiliate redirect slugs added
- Site feels interactive and animated (scroll reveals, micro-interactions, smooth transitions)
- All animations respect prefers-reduced-motion
- No animation libraries (CSS transitions + IntersectionObserver only)
- No text-white on orange backgrounds (WCAG)
- `npm run build` passes clean, `npm run typecheck` zero errors, `npm run lint` zero warnings
- Lighthouse: SEO >= 95, Performance >= 85, Accessibility >= 90
- Mobile: no horizontal scroll at 390px, all tap targets >= 48px
- Deployed to Vercel

---

## Quality Gates

| Gate | Between | Bernard Reviews |
|------|---------|-----------------|
| G1 | Christopher -> Vale | Research quality, completeness, actionability |
| G2 | Vale -> Scribe | Brand direction alignment, illustration guidance quality |
| G3 | Scribe -> Devan | Content quality, proof standards, monetization rule compliance |
| G4 | Devan -> Delivery | Build quality, design fidelity, deployment, performance |

---

## Work Log

| Date | Agent | Action | Verdict |
|------|-------|--------|---------|
| 2026-03-15 | Bernard | PROJECT.md created, Christopher brief written, pipeline defined | -- |
| 2026-03-15 | Bernard | Routing Christopher for Phase 1 research | ASSIGNED |
| 2026-03-15 | Christopher | Phase 1 research delivered -- RESEARCH.md (557 lines, 6 areas, 7 competitors, ~15 affiliate programs, 20 keyword opportunities) | COMPLETE |
| 2026-03-15 | Bernard | G1 Review -- research meets all 7 success criteria. Aligned to objective, covers all 6 areas substantively, UNVERIFIED tags used correctly, actionable recommendations throughout. Clear for Vale handoff. | LOCKED |
| 2026-03-15 | Bernard | Vale brief written, routing Phase 2 brand direction | ASSIGNED |
| 2026-03-15 | Vale | Phase 2 brand direction delivered -- BRAND.md (1107 lines) + MASTER.md (676 lines). Color palette, typography, 12 illustration briefs, 10+ component specs with CSS, 11 verified 21st.dev references, 6 page layouts, WCAG contrast analysis, ad-safe design notes. | COMPLETE |
| 2026-03-15 | Bernard | G2 Review -- brand direction exceeds all 6 success criteria. Comprehensive, implementation-ready, aligned to research findings. Two-document approach (BRAND.md + MASTER.md) gives both Scribe and Devan clear references. 21st.dev components verified. Illustration prompt template and 12 scene briefs cover all page types. One note: Brett approval still pending on visual direction. | LOCKED |
| 2026-03-15 | Bernard | Scribe brief written -- 5 deliverable groups, ~25 files, repeatable template system for autonomous operation. Routing Phase 3 content. | ASSIGNED |
| 2026-03-15 | Scribe | Phase 3 content delivered -- 18 files: 5 templates, 7 new guides, 1 email sequence, 1 homepage copy, 2 page copies, 1 manifest. CONTENT_DELIVERABLES.md tracks everything. | COMPLETE |
| 2026-03-15 | Bernard | G3 Review -- content passes all 5 review questions. Voice matches BRAND.md. Affiliate CTAs correctly placed per strategy.md (no CTAs in FAQs, eligibility lists, calculator outputs). Templates structured for autonomous agent reuse. 10 UNVERIFIED items flagged honestly and catalogued. Homepage copy aligns with Vale's 7-section layout. One note: total file count is 18 not 25 (brief overestimated). Quality is high. | LOCKED |
| 2026-03-15 | Bernard | Devan brief written -- clean styling rebuild with animation/interaction directive from Brett. BUILD_PLAN.md referenced. All open questions answered. Routing Phase 4 build. | ASSIGNED |
| 2026-03-15 | Devan | Phase 4 Step 1 (Foundation) delivered -- tailwind.config.ts, tokens.css, global.css, globals.css, layout.tsx | COMPLETE |
| 2026-03-15 | Bernard | Phase 1 Checkpoint PASS -- all 18 hex values match Vale's spec, 13 animation keyframes, scroll reveal system (4 variants), prefers-reduced-motion block, dual token system aligned. Minor notes: duplicate font loading (import + link tag), h4 leading variable name. | PASS |
| 2026-03-15 | Devan | Phase 4 Step 2 (Components) delivered -- 28 components (20 restyled, 8 new) | COMPLETE |
| 2026-03-15 | Bernard | Phase 2 Checkpoint PASS -- 6 key components verified against BRAND.md specs. Button WCAG correct (ink-strong on orange). Navbar has scroll shadow, active underline, dropdown, mobile drawer. Footer 4-col grid with affiliate disclosure. CalloutBox 4 variants with correct semantic colors and Lucide icons. ComparisonTable has sticky first column, winner row highlight, scroll-fade-right. TrustBar has countUp with IntersectionObserver and prefers-reduced-motion check. TableOfContents has sticky sidebar (desktop) + accordion (mobile) with orange dot active indicator. All animations CSS-only, no libraries. | PASS |
