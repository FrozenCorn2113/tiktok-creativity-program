# Brand Guide: TikTok Creativity Program
**Prepared by:** Vale
**Date:** 2026-03-15
**For:** Devan (implementation) and Scribe (tone reference)
**Status:** v1.0 — complete

---

## Design Principles

Five principles govern every visual decision on this site. When in doubt, run the question through these.

**1. Earned trust, then monetization.**
Every page earns the reader's confidence before it asks for a click, a signup, or a purchase. Information comes first. Affiliate CTAs and email captures appear after the reader has received value — never as the opening move.

**2. Independent clarity over corporate polish.**
This site is not a SaaS company. It's not a media brand with a content team. It's the smartest friend who figured out the Creator Rewards Program and is explaining it plainly. The design should feel like a well-organized personal resource — structured, but not corporate. Approachable, but not amateur.

**3. Mobile-native first.**
TikTok creators live on their phones. Every layout decision starts with how it looks on a 390px screen. Desktop is an enhancement. Mobile is the design surface.

**4. Content breathes.**
White space is active, not empty. The illustration style is built on it. The layout honors it. Dense walls of text or cluttered UI would contradict the visual identity entirely.

**5. Utility is the aesthetic.**
Calculators, checklists, comparison tables — these aren't secondary features. They are the brand expression. Tools that actually work are what make this site different from every generic blog covering the same topic.

---

## Brand Positioning

**Voice:** The knowledgeable peer. Someone who went through the Creator Rewards Program process, read everything, ran the numbers, and is now explaining it without jargon or affiliate-driven enthusiasm.

**Tone:** Direct. Plain. Occasionally warm. Never hype. Never corporate-FAQ. The opposite of "this post may contain affiliate links, and we're so excited to share our top picks!" — it's closer to "here's what actually determines your RPM, and here are the tools that help with the parts you can control."

**Personality pillars:**
- Credible without being stiff
- Practical without being cold
- Helpful without being salesy
- Clear without being condescending

**What the design is NOT:**
Not TikTok's brand (avoid their exact red/black). Not a generic creator blog (no stock-photo faces, no gradient CTAs, no loud colors). Not an enterprise tool site (no heavy navy, no formal serif headers, no whitepaper aesthetic).

---

## Color Palette

Sampled from the existing illustrations. The orange is the emotional core of the brand — aspirational, warm, human. Black is structure. White is space. Warm off-white holds the pages together without clinical coldness.

### Primary Colors

| Name | Hex | Tailwind Equivalent | Use |
|---|---|---|---|
| Brand Orange | `#F4A261` | `orange-400` | Primary accent, CTAs, illustration fills, active states |
| Orange Dark | `#E58B3A` | `orange-500` | Hover states, strong borders, secondary emphasis |
| Orange Soft | `#FFE9D5` | `orange-100` | Callout backgrounds, tag backgrounds, soft highlights |
| Ink | `#111827` | `gray-900` | Primary text, illustration outlines, bold UI elements |
| Ink Strong | `#0B0F1A` | — | Display headings, maximum contrast text |

### Background and Surface Colors

| Name | Hex | Tailwind Equivalent | Use |
|---|---|---|---|
| White | `#FFFFFF` | `white` | Primary page background, card backgrounds |
| Warm White | `#FFF7ED` | `orange-50` | Subtle warm surface for sections, hero areas |
| Surface Muted | `#FFF1E6` | — | Email capture sections, featured callouts |
| Surface Inset | `#F9EDE1` | — | Code blocks, calculator input fields, inset UI |
| Border | `#EADFD3` | — | Default card borders, dividers |
| Border Strong | `#DFD1C4` | — | Table borders, active section dividers |

### Text Colors

| Name | Hex | Tailwind Equivalent | Use |
|---|---|---|---|
| Text Primary | `#101828` | `gray-900` | Body text, headings |
| Text Muted | `#475467` | `gray-600` | Secondary text, captions, metadata |
| Text Subtle | `#667085` | `gray-500` | Placeholder text, helper text, fine print |

### Semantic Colors

| Name | Hex | Tailwind Equivalent | Use |
|---|---|---|---|
| Success Green | `#12B76A` | `emerald-500` | Eligible indicators, checklist checks, positive status |
| Warning Amber | `#F79009` | `amber-500` | Important caveats, payout delays, attention flags |
| Error Red | `#F04438` | `red-500` | Errors, disqualifiers, blocked status |
| Info Blue | `#0EA5E9` | `sky-500` | Informational callouts, neutral tips |

### Ad-Safe Design Note

The site will eventually run Mediavine ads. Never use edge-to-edge color fills that span the full viewport width on pages with ad placements. Use contained max-width sections with white or warm-white backgrounds on the outer shell so standard ad units (336x280 rectangles, 300x600 sidebar) render cleanly against neutral backgrounds without clashing with brand orange.

### Dark Mode Forward Note

The warm neutral palette translates well to dark mode. Reserve this palette decision for a future phase. Do not make implementation choices that hard-code white backgrounds in ways that would require complete rework — use semantic token names (surface, background, surface-muted) rather than hardcoded `bg-white`.

### WCAG Contrast Notes

- Ink (`#111827`) on White: 16.7:1 — AAA
- Ink (`#111827`) on Warm White `#FFF7ED`: 15.2:1 — AAA
- Brand Orange (`#F4A261`) on White: 2.9:1 — FAILS on small text; use for decorative/large elements only, never for small body copy
- Ink on Orange Soft `#FFE9D5`: 11.8:1 — AAA — safe for callout box text
- White on Brand Orange: 2.9:1 — FAILS; do not use white text on orange backgrounds
- Ink on Brand Orange for button text: 4.6:1 — AA (large text only). Use `#0B0F1A` ink, not white, on orange buttons.

**Button rule:** Orange buttons get dark ink text (`#0B0F1A`), not white. This is the only combination that passes contrast.

---

## Typography

### Font Pairing

**Heading font: Manrope** (already in tokens.css — keep it)
- Source: Google Fonts
- Weights used: 600 (semibold) for subheadings, 700 (bold) for headings, 800 (extrabold) for display/hero
- Character: Geometric sans-serif with subtle humanist curves. Modern, clean, slightly friendly. Matches the illustration style precisely.
- Load: `wght@600;700;800`

**Body font: Manrope** (same family — intentional)
- Weight: 400 (regular) for body, 500 (medium) for labels and UI, 600 for emphasis
- Rationale: Single-family approach reduces load time. Manrope has enough weight variation to create clear hierarchy without a second typeface. Avoids the mismatched feeling of most two-font stacks.

**Mono font: JetBrains Mono** (Google Fonts)
- Use: Code snippets, calculator numeric outputs, data values, error codes
- Load: `wght@400;500`
- Tailwind: `font-mono`

### Type Scale

| Token | Size (mobile) | Size (desktop) | Weight | Line Height | Use |
|---|---|---|---|---|---|
| Display | 2.5rem (40px) | 3.5–4rem (56–64px) | 800 | 1.15 | Hero headlines only |
| H1 | 2rem (32px) | 2.5–3rem (40–48px) | 700 | 1.2 | Page titles |
| H2 | 1.5rem (24px) | 1.75–2rem (28–32px) | 700 | 1.25 | Section headings |
| H3 | 1.125rem (18px) | 1.25–1.4rem (20–22px) | 600 | 1.3 | Subsections, card titles |
| H4 | 1rem (16px) | 1rem (16px) | 600 | 1.4 | Labels, sidebar headings |
| Body | 1rem (16px) | 1rem (16px) | 400 | 1.7 | All prose content |
| Body Large | 1.125rem (18px) | 1.125rem (18px) | 400 | 1.7 | Intro paragraphs, lead text |
| Small | 0.875rem (14px) | 0.875rem (14px) | 400 | 1.5 | Metadata, captions, fine print |
| Caption | 0.75rem (12px) | 0.75rem (12px) | 500 | 1.4 | Tags, badges, labels, timestamps |
| Button | 0.875rem (14px) | 0.9375rem (15px) | 600 | 1 | All button labels |
| Calculator Label | 0.875rem (14px) | 0.875rem (14px) | 500 | 1.4 | Input field labels |
| Calculator Output | 1.5–2rem | 1.75–2.5rem | 700 | 1.2 | Numeric results display |

### Typography Rules

- Never use more than two visual levels of heading on a single screen at mobile width.
- Body text max-width: `max-w-prose` (65ch) inside article content. Do not let body text span full-width containers — readability degrades past 70 characters per line.
- Use `tracking-tight` (letter-spacing: -0.025em) on Display and H1 only. Normal tracking everywhere else.
- Avoid italics in body text except for truly necessary emphasis. The illustration style is clean and upright — the typography should match.

---

## Illustration Style Guide

### Core Style Attributes

Study the four existing images. This is what defines the style:

**Outlines**
- Line weight: thin and consistent — approximately 1.5–2px at the illustration's native resolution. No tapered strokes. No brush variation. Uniform weight throughout.
- Outline color: Near-black, approximately `#1A1A1A` to `#2A2A2A`. Not pure black. Slightly warm. This prevents the harsh digital-black look.
- All objects are outlined — figures, furniture, UI elements, plant leaves. Nothing is "filled without an outline."

**Fills**
- Flat fills only. No gradients. No drop shadows within the illustration. No inner glow.
- Three fill values: white (primary), orange (accent), and very light gray (`#F2F2F2` approx) for background surfaces like walls and floors.
- Orange (`#F4A261`) appears on: clothing (one garment per figure, never all clothing), data visualization elements (one segment of a chart, one bar), UI accent borders (a single highlighted frame or box), and occasional prop accents (a mug, a plant pot).
- Black fill appears on: dark clothing (pants, some tops), hair, device frames/keyboards, dark props.

**Orange usage rule:** Orange is the accent — it appears on ONE clothing piece per figure (a top, a pair of pants, or a jacket — never all three) and on ONE UI element in the scene. If a scene has three figures, only one or two figures wear orange; the others wear black or white/gray clothing. Orange is never the background, never the ground, never the walls.

**Background treatment**
- Pure white background. No vignette. No background color. No gradient sky. The illustrations float on white.
- Ground/floor is implied by position and object shadows only — no drawn floor line except in specific scenes.
- Background props (bookshelves, plants, windows) are drawn in the same thin-line style but with lighter fills (near-white or light gray `#F0F0F0`) to recede behind the foreground figure.

**Character proportions**
- Slightly stylized — heads are proportionally a little larger than anatomically accurate (approximately 1/6 body height). This is typical of this illustration style and gives characters personality.
- Limbs are simplified but not caricature — no exaggerated joint angles.
- Faces: minimal detail. Eyes are simple closed arcs or dots. Expressions read from posture and context more than facial detail. Some characters have a small, simple smile.
- Hair: solid fill (black or orange), simple shapes. No hair detail.
- Diverse character designs across the set — different hair styles, skin tone implied through slight variation in fill warmth (though current illustrations use the same fill, future ones can vary slightly to show diversity).

**Objects and props**
- Screens, devices, and UI elements are diagrammatic — showing interface chrome (a browser border, a phone frame) with simplified content icons inside. They are not realistic mockups.
- Data visualizations within illustrations (charts, pie charts, bar graphs) use orange + black as the data colors on a white background. They look like diagrams, not screenshots.
- All props share the same line weight and flat fill treatment as the figures.

### Reusable AI Generation Prompt Template

Use this base prompt in Midjourney, DALL-E 3, or Adobe Firefly. Replace [SUBJECT] with the specific scene description.

```
Flat line-art illustration, thin uniform black outlines approximately 2px weight,
flat color fills with no gradients or shading, white background, orange accent color
#F4A261 used sparingly on one clothing item and one UI element only, black fill for
dark clothing and hair, light gray for background surfaces, minimalist geometric
character proportions with slightly larger head, simple facial features, clean modern
style. Scene: [SUBJECT]. Style reference: modern vector illustration for SaaS
marketing, similar to Blush Design or unDraw style with orange accent.
```

For Midjourney specifically, append: `--style raw --stylize 50 --ar 1:1`

For scenes with multiple figures: specify which one wears orange to maintain the visual balance.

### New Illustration Briefs (12 scenes)

All scenes: white background, thin black outlines, flat fills, orange accent on one element per figure.

---

**Scene 01 — Homepage Hero: Creator at Their Setup**
Person sitting at a desk with a phone on a small tripod/stand, recording themselves. Ring light is visible at left of frame. On a monitor or tablet behind them, a simple analytics graph shows an upward line. Character wears an orange top and black pants. Props: ring light, desk, phone on stand, small monitor with chart. Mood: confident, casual, in-control.

---

**Scene 02 — Guides Hub / Start Here: Person with TikTok Interface**
Person holding a phone with an oversized simplified phone frame next to them (same scale trick as image 4 with the shopping phone). The phone screen shows a simplified TikTok-style vertical video interface — a play button, a few interaction icons, a simple waveform. Character wears black top, orange pants. Mood: engaged, curious, about to figure something out.

---

**Scene 03 — Calculator Pages: Person with Calculator and Rising Chart**
Person at a desk with a large open spreadsheet/grid visible on the desk surface. Behind them, a simple bar chart with one bar highlighted in orange and an upward arrow. Character has both hands on the desk, looking at the numbers with a satisfied expression. Orange accent: one bar on the chart. Character wears white shirt, black pants. Include a small calculator icon on the desk. Mood: analytical, satisfied.

---

**Scene 04 — Eligibility Guides: Person Reading a Checklist**
Person seated, holding a tablet or clipboard with a visible checklist. Three checklist items, two with orange checkmarks, one still unchecked. Character looks slightly uncertain but engaged — reading carefully. Orange accent: checkmarks on the list. Character wears orange jacket, black pants. Props: clipboard/tablet, simple chair. Mood: in the process of qualifying, hopeful.

---

**Scene 05 — Earnings / Monetization Content: Person Celebrating with Upward Graph**
Person standing next to a large presentation board showing a simple upward-trending bar chart. The final (tallest) bar is orange. Character has one arm raised or fist slightly pumped — celebration without being over the top. Character wears black top, black pants (no orange on clothing — the orange is entirely on the chart bar). Mood: earned success, not lottery winner energy.

---

**Scene 06 — Troubleshooting Content: Person Looking at an Error Screen**
Person sitting at a desk, leaning in toward a monitor that shows a simplified error/warning state — a red or amber triangle icon and some simplified error text lines. Character's expression shows mild frustration but not panic — the "figuring it out" face, not despair. Orange accent: the person's chair is orange. Character wears black top, black pants. Props: desk, monitor, mouse. Mood: problem-solving mode.

---

**Scene 07 — Roundup / Comparison Pages: Two People Comparing Options**
Two people standing on either side of a large simple table or comparison grid. Each is gesturing toward their side — one points at a column with an orange checkmark header, the other gestures at a column with a neutral/black header. Characters are equal in size and prominence, no "winner" character has dominant body language — the viewer chooses. Orange accent: one column header on the comparison board is highlighted orange. Characters: one in orange top/black pants, one in black top/white pants. Mood: clear-headed comparison, not debate.

---

**Scene 08 — Email Capture / Newsletter: Person Opening an Envelope**
Person holding a large simplified envelope (oversized relative to figure — the envelope is roughly torso-sized). A document or checklist is partially pulled out of the envelope. Character looks pleased — the "this is useful" expression. Orange accent: the envelope has an orange border/trim or orange seal. Character wears black top, black pants. Simple background prop: a small plant or bookshelf. Mood: anticipation, value received.

---

**Scene 09 — Application Process: Person Filling Out a Form**
Person at a desk with an oversized simplified form on a tablet or screen in front of them. The form has a few labeled fields, one with a cursor blinking, one already filled with a checkmark. Character is mid-typing, focused. Orange accent: the submit button on the form is orange. Character wears white top, black pants. Mood: in progress, methodical.

---

**Scene 10 — Tools / Equipment Guides: Creator with Ring Light and Mic**
Person standing in a recording setup — ring light on a stand to their left, a simple microphone on a desk stand to their right. Character faces slightly forward as if recording. Phone on a tripod in front of them. Orange accent: the ring light glow ring is drawn in orange outline (not a photographic glow — just the circular frame of the light drawn in orange lines). Character wears orange top, black pants. Mood: ready, set up, professional.

---

**Scene 11 — 404 / Empty State: Person Shrugging at a Broken Screen**
Person standing next to a monitor or device that shows a simple broken/disconnected state icon — a broken link symbol or a simple "404" in large type. Character's posture is a gentle shrug — palms up, slight tilt of head. Not distressed, just bemused. Orange accent: character wears orange shoes (small detail). Clothing: black top, black pants. Props: desk, monitor. Mood: gentle humor, non-alarming.

---

**Scene 12 — Featured / Start Here CTA: Person with Megaphone**
Person holding a large simple megaphone, pointing it slightly upward and forward. Megaphone has an orange bell/flare. Character looks enthusiastic but not aggressive — like announcing something genuinely good. Character wears black top, black pants (orange entirely on the megaphone). A small star or sparkle near the megaphone bell (drawn in the same thin line style). Mood: hey, this matters — confident announcement energy.

---

### Extended Illustration Briefs (Scenes 13–22) — Added 2026-03-15

Prompts written for Google Imagen (Nano Banana API key). Full generation-ready prompts live in `ILLUSTRATION_PROMPTS.md`. Scene briefs below for quick reference.

**Base prompt to prepend to all scenes:**
Flat line-art illustration. Thin uniform black outlines, consistent 1.5-2px weight throughout — no tapered strokes, no brush variation. Flat color fills only — absolutely no gradients, no shading, no drop shadows. Pure white background. Orange accent #F4A261 on one clothing item per figure and one UI element per scene only. Black or white for all other clothing. Hair solid black or solid orange fill, no detail. Slightly stylized proportions, simple facial features. Clean modern vector illustration, Blush Design / unDraw style. Square 1:1 ratio.

---

**Scene 13 — Homepage Hero: Creator Celebrating Earnings**
`illustration-hero-earnings.png` | Homepage hero section
Person standing, one fist slightly raised in calm earned-success gesture. Oversized phone prop (torso height) beside them showing simplified earnings dashboard — large dollar amount text + bar chart, rightmost bar in orange. Character: black hair, orange top, black pants. Background: light-gray desk and small plant receding behind. Mood: confident quiet celebration.
Closest to: `landpress-marketing-2.png`

---

**Scene 14 — Calculator Page: Person Analyzing Numbers**
`illustration-calculator.png` | Calculator pages (RPM, earnings estimator)
Person seated at desk, leaning forward with forearms on desk, looking at open laptop. Laptop screen: simplified spreadsheet grid + small bar chart, one bar in orange. Calculator icon on desk beside laptop. Character: black hair, white shirt, black pants. Background prop: bookshelf in light gray. Mood: focused, analytical.
Closest to: `landpress-marketing-hero.png`

---

**Scene 15 — Eligibility: Person Checking Requirements**
`illustration-eligibility.png` | Eligibility guide pages, getting started
Person in chair holding clipboard/tablet with oversized checklist. Four items: two checked black, one in-progress in orange, one empty. Character: black hair, orange jacket over white shirt, black pants. Background: small side table. Mood: working through requirements, hopeful.
Closest to: `landpress-marketing-hero.png`

---

**Scene 16 — Troubleshooting: Person Puzzled at Error Screen**
`illustration-troubleshooting.png` | Troubleshooting guides, FAQ pages
Person seated at desk, one hand raised palm-up "what is happening" gesture, looking at monitor showing simplified error state (exclamation triangle in black outline only, no red). Chair filled in orange — the single orange element. Character: black hair, black top, black pants. Background prop: small cactus plant. Mood: mild puzzlement, problem-solving.
Closest to: `landpress-marketing-hero.png`

---

**Scene 17 — Video Editing Tools: Person Editing on Laptop**
`illustration-video-editing.png` | Video editing tools roundup, equipment guides
Person at desk, one hand on keyboard, one on mouse, working on laptop. Screen shows simplified video timeline — horizontal frame strips, track rows, active row in orange. Flat headphones on desk beside laptop. Character: black hair, white hoodie, black pants. Background: simple external monitor in light gray. Mood: focused, creative flow.
Closest to: `landpress-marketing-hero.png`

---

**Scene 18 — Earnings / Payout: Person Receiving Payment Notification**
`illustration-payout.png` | Earnings explainer pages, payout timeline guides
Person standing, looking at phone in one hand, other hand raised in quiet "yes" gesture. Oversized phone prop beside them (shoulder height) showing payment notification — dollar sign, amount, checkmark in orange. Character: black hair, orange crewneck top, black pants. Background: small plant. Mood: calm positive — the money landed.
Closest to: `landpress-marketing-4.png`

---

**Scene 19 — Email Signup CTA: Person Opening Envelope Excitedly**
`illustration-email-signup.png` | Email capture sections, newsletter CTAs
Person standing, holding oversized envelope (torso-width) in both hands, flap partially open. Document/checklist partially pulled out. Envelope flap has orange seal/border trim — the single orange element. Character: black hair, black top, black pants (no orange clothing). Expression: pleased and slightly surprised. Background prop: small bookshelf. Mood: value received.
Closest to: `landpress-marketing-hero.png`

---

**Scene 20 — Musician Creator: Person with Guitar Filming**
`illustration-musician-creator.png` | Niche content guides, creator type pages
Person on stool holding acoustic guitar (simplified flat geometric shapes). Phone on small tripod stand in front recording them — screen shows simple "REC" indicator circle. Guitar strap filled in orange — the single orange element. Character: black hair, white shirt, black jeans. Background: simple floor lamp in light gray. Mood: relaxed mid-performance, unstaged.
Closest to: `landpress-marketing-4.png`

---

**Scene 21 — Community / Resources: Group of Creators Collaborating**
`illustration-community.png` | Resources hub, community sections, guides index
Three people around a table. Left: seated, holding tablet, black top, black pants, black hair. Center: standing, pointing at open laptop screen showing content calendar grid, orange top, orange hair. Right: seated, looking at laptop, white shirt, black pants, black hair. Table has laptop and coffee mug. Background: simple whiteboard in light gray. Orange only on center figure's top and hair. Mood: collaborative working session.
Closest to: `landpress-marketing-3.png`

---

**Scene 22 — Success Story: Creator with Growing Analytics Chart**
`illustration-success-story.png` | Success story pages, case study sections
Person standing beside large presentation board showing upward-trending bar chart — five bars increasing, tallest rightmost bar in orange, small upward arrow above it. Person gestures loosely toward board, relaxed. Character: black hair, orange wide-leg pants, white shirt. Background: simple shelving with vase in light gray. Mirrors composition of existing landpress-marketing-2.png. Mood: earned data-backed confidence.
Closest to: `landpress-marketing-2.png`

---

**Generation rules (applies to all scenes above):**
- One prompt per API call — do not batch
- If orange appears on more than one clothing item, regenerate
- If any gradient fills appear, prepend "strict flat fills only, zero gradients" and regenerate
- Save to `projects/tiktok-creativity-program/assets/brand-images/` using filenames above
- Verify against `landpress-marketing-2.png` as the style anchor

---

## Component Design Direction

### Navigation / Header

**Structure:** Logo left, nav links center, single CTA button right. On mobile: logo left, hamburger menu right. Full-width header at fixed top position.

**Visual treatment:**
- Background: white with a subtle bottom border using `--color-border` (#EADFD3)
- On scroll: add a minimal box-shadow (`--shadow-sm`) to lift the nav from content
- Logo: site name in Manrope 700, ink color. No wordmark icon needed unless one is designed separately.
- Nav links: Manrope 500, text-muted (#475467), 15px. Hover: ink color. Active: ink color + orange underline (2px, orange accent).
- Dropdown menus: white background, border-radius `--radius-md` (12px), box-shadow `--shadow-md`, padding 16px. Link groups have a gray label above (text-subtle, caption size) and clean left-aligned links below.
- CTA button in header: Primary button style (see Buttons). Label: "Start Here" or "Get the Checklist."
- Mobile nav: Full-screen slide-in panel from right. White background. Nav links stacked, 48px minimum tap target height. Grouped sections with small gray labels. CTA at bottom of panel.

**What to avoid:** No sticky nav with gradient. No logo with icon unless deliberately designed. No hamburger that animates to an X (keep it simple).

---

### Buttons

**Primary button**
- Background: `#F4A261` (Brand Orange)
- Text: `#0B0F1A` (Ink Strong) — see contrast note in color section
- Font: Manrope 600, 15px
- Padding: 12px 24px (mobile: 14px 20px)
- Border radius: `--radius-md` (12px)
- Border: none
- Hover: background shifts to `#E58B3A` (Orange Dark)
- Active: slight scale-down (`scale-95`)
- No shadow on default state. On hover, add `--shadow-sm`.

**Secondary button**
- Background: white
- Text: `#111827` (Ink)
- Border: 1.5px solid `#EADFD3` (Border)
- Same radius and padding as primary
- Hover: border color shifts to `#DFD1C4` (Border Strong), background shifts to `#FFF7ED` (Warm White)

**Affiliate link button** (used inside roundup pages and tool recommendations)
- Visually distinct from site UI buttons to signal external link
- Background: `#F4A261` but slightly wider padding (16px 28px) and with a small right-pointing arrow icon
- Label format: "Try [Product Name]" or "Get [Product Name]" — never "Click here" or "Buy now"
- Always preceded by the "Affiliate" or "Curated" label in caption size, text-subtle color, directly above the button
- Border: none. Slightly more rounded than primary: `--radius-lg` (16px)

**Ghost / text button**
- No background, no border
- Text: Brand Orange `#F4A261` or Ink depending on context
- Hover: underline
- Use for: "Read more," "See all guides," low-priority secondary actions

**Destructive / warning button** (rare — only for error states)
- Background: `#FEF3F2` (very light red)
- Text: `#B42318` (dark red)
- Border: 1px solid `#FDA29B`

---

### Guide Cards

Used on the /guides listing page (57 guides need cards). These need to work at scale.

**Card anatomy:**
- Container: white background, border `1px solid #EADFD3`, border-radius `--radius-lg` (16px)
- Hover: border color shifts to Brand Orange `#F4A261`, box-shadow `--shadow-sm`
- Padding: 24px (desktop), 20px (mobile)
- No image inside guide cards — they'd be inconsistent across 57 guides and add load overhead. Use the category tag and a category accent color dot instead.
- Top of card: Category badge (pill tag) + optional "New" badge
- Title: H3 style, Manrope 700, ink color, 2-line clamp
- Description: 2–3 lines of body small (14px) text-muted, 3-line clamp
- Bottom: Read time estimate (caption, text-subtle) + a right-pointing chevron or "Read guide" text link

**Card grid:**
- Desktop: 3 columns
- Tablet: 2 columns
- Mobile: 1 column, cards span full width
- Gap: 16px (Tailwind: `gap-4`)

**Category badge (pill tag):**
- Background: `--color-accent-soft` (#FFE9D5)
- Text: `#E58B3A` (Orange Dark), caption size, Manrope 600
- Border-radius: full (pill)
- Padding: 4px 12px
- Each content pillar (Eligibility, Apply, Earnings, Tools) gets the same orange tag style. Differentiation is in the label text only, not color — keeps the palette coherent.

**"New" badge:**
- Background: `#EFF8FF` (light blue)
- Text: `#0EA5E9` (Info Blue), caption size, Manrope 700
- Border-radius: full (pill)
- Padding: 4px 8px

---

### Comparison Tables

These are first-class design elements. Roundup pages depend on them. They must look authoritative and be easy to scan on mobile.

**Table structure:**
- Max-width: `max-w-4xl` — do not let them span full container width on desktop (becomes hard to scan)
- On mobile: horizontally scrollable with a visible right-edge fade indicating scroll
- Sticky first column on mobile scroll (product name stays visible)

**Visual treatment:**
- Header row: Background `#FFF1E6` (Surface Muted), text ink color, Manrope 600, 14px
- Alternating row shading: odd rows white, even rows `#FAFAF9` (nearly white, very subtle)
- "Winner" or "Recommended" row: left border 3px solid Brand Orange `#F4A261`, background `#FFF7ED` (Warm White), slightly bolder text
- Cell padding: 14px 16px (desktop), 12px 12px (mobile)
- Border: 1px solid `#EADFD3` between rows and columns
- Border-radius on outer table: `--radius-md` (12px). Use `overflow-hidden` on the container.

**Check/X indicators:**
- Check (feature present): SVG checkmark icon, filled circle `#12B76A` (Success Green)
- X (feature absent): SVG X icon, filled circle `#F04438` (Error Red)
- Partial (limited/conditional): dash, text-muted, no filled circle

**Table CTA:**
- Below each "winner" row or at the bottom of the table: affiliate link button (see Buttons) with the "Affiliate" label
- Do not put multiple affiliate buttons inside the table cells themselves — put one primary CTA below the table or in the dedicated product section below

---

### Calculator UI

The calculators are a core brand differentiator. They need to feel custom-built, not like embedded Google Sheets.

**Input area:**
- Background: white
- Each input group: label (14px, Manrope 500, text-muted) above the field
- Input fields: Background `#F9EDE1` (Surface Inset), border `1px solid #EADFD3`, border-radius `--radius-md` (12px), focus-border Brand Orange `#F4A261`, focus ring `--focus-ring` (subtle orange glow)
- Sliders (if used): track color `#EADFD3`, filled portion Brand Orange, thumb is a white circle with Brand Orange border
- Number inputs: right-aligned values, JetBrains Mono font for numeric display inside the field
- Labels with helper text: small info icon (ⓘ) with tooltip for technical terms (RPM, qualified views)

**Results area:**
- Background: `#FFF7ED` (Warm White) — visually separates from input area
- Border: 1px solid `#EADFD3`, border-radius `--radius-lg` (16px)
- Primary result (the headline number): JetBrains Mono 700, 2rem–2.5rem, ink color
- Secondary results (breakdown figures): Manrope 600, 1.25rem, text-muted
- Result labels: caption size, text-subtle
- NO affiliate CTAs in the results area (per monetization rules). Instead, a muted text link: "Improve your RPM →" that goes to an optimization guide.

**Calculate button:**
- Full-width on mobile
- Primary button style
- Label: "Calculate Earnings" or "Calculate RPM" — specific to the calculator
- Position: below all inputs, above results area

---

### Callout Boxes, Pro Tips, Warnings

Inline callouts that appear within guide content. Used to highlight important info without breaking reading flow.

**Pro tip / general info:**
- Left border: 3px solid Brand Orange `#F4A261`
- Background: `#FFF7ED` (Warm White)
- Icon: orange lightbulb or star icon
- Padding: 16px 20px
- Font: body size, normal weight. First sentence can be Manrope 600 bold as the "tip headline."

**Warning / caution:**
- Left border: 3px solid `#F79009` (Warning Amber)
- Background: `#FFFAEB` (amber-50)
- Icon: amber warning triangle
- Same padding and font as pro tip

**Important / eligibility note:**
- Left border: 3px solid `#0EA5E9` (Info Blue)
- Background: `#F0F9FF` (sky-50)
- Icon: blue info circle
- Used for: program requirement notes, regional differences, date-specific information

**Error / disqualifier:**
- Left border: 3px solid `#F04438` (Error Red)
- Background: `#FEF3F2` (red-50)
- Icon: red X circle
- Used sparingly — only for actual disqualifiers or hard stops in eligibility guides

All callout boxes: border-radius `--radius-md` (12px) on the non-left sides (left side is square to meet the border). Max-width follows content column (`max-w-prose`).

---

### Email Signup Forms

**Inline form (within content):**
- Container: Background `#FFF1E6` (Surface Muted), border-radius `--radius-xl` (24px), padding 32px (desktop) 24px (mobile)
- Headline: H3 style, ink
- Subtext: body small, text-muted
- Email input: white background, border `1px solid #EADFD3`, border-radius `--radius-md` (12px), height 48px (minimum tap target), full-width
- Submit button: primary button, sits to the right of the input on desktop, below it on mobile
- Fine print: caption, text-subtle, below the form

**Start Here / landing page email form:**
- More prominent variant — the email form IS the hero
- Larger overall: headline at H1 scale
- Input and button are oversized (56px height)
- No sidebar distractions. No navigation (per research: removing nav improves conversion 2–4x on this page type)
- Below the form: three trust indicators in small caption text with a checkmark icon each

---

### Footer

**Structure (three column + bottom bar):**
Column 1: Logo/brand name + one-sentence description + social links (if any)
Column 2: Quick links (Guides, Calculators, Start Here, Resources)
Column 3: Legal/fine print links (Privacy, Affiliate Disclosure, About) + ConvertKit branding if required

Bottom bar: Full-width rule (border-top 1px solid #EADFD3), then copyright text left, affiliate disclosure snippet right (caption, text-subtle). The affiliate disclosure in the footer must always be present per monetization rules.

**Visual treatment:**
- Background: white — do not use a dark footer. It breaks the warm white palette and creates a jarring visual end to the page.
- Top border: 1px solid `#EADFD3`
- Padding: 48px top, 24px bottom
- Link color: text-muted, hover → ink color
- Font: body small (14px) throughout

---

## Page Layout Templates

### Homepage / Landing

**Section order (top to bottom):**

1. **Navigation** — standard header (white, with nav and "Start Here" CTA)

2. **Hero section** — max-width `max-w-5xl`, centered. Left column (60%): display headline, one-line value prop, primary CTA button (email capture). Right column (40%): Scene 01 illustration (creator at setup). On mobile: stacked, illustration below text, illustration 280px max height. Background: white to warm-white gradient over this section only (subtle — `#FFFFFF` to `#FFF7ED`).

3. **Trust bar** — full-width muted strip (`#FFF1E6` background). Three short stats or trust indicators in a row: "57 guides," "3 free calculators," "updated for 2026." Manrope 600, 14px. Icon + text pairs. No elaborate styling.

4. **Content pillars** — 4 cards in a row (desktop), 2x2 grid (tablet), single column (mobile). Each pillar card links to the relevant guide category. Eligibility, Apply, Earnings, Tools. Guide card style (see above) but slightly larger and with a more prominent heading.

5. **Calculator preview** — a simplified preview of the Earnings Calculator embedded inline. Not fully functional on homepage — shows the input fields and a "Calculate" button that clicks through to /calculators/earnings-calculator. Background: `#FFF7ED`. Framed with `--radius-xl` container. This section signals "this is a tool site, not just another blog."

6. **Featured guides strip** — 3 guide cards in a horizontal row, selected editorially ("most useful for new creators"). Heading: "Start with these." Section background: white.

7. **Email capture / Start Here CTA** — full-width section, `#FFF1E6` background. Scene 08 (envelope) illustration on right (desktop), inline above text on mobile. Headline, 3-line benefit list with checkmarks, email form. This is the page's highest-intent section below the fold.

8. **Footer**

**Ads note:** If Mediavine/Ezoic ads are active, they will inject between sections. White outer-page background prevents visual clashes. Do not inject ads between steps 2 and 3 (trust is being built); the calculator preview (step 5) is the natural insertion point.

---

### Guide / Article Page

**Layout: Single column with optional right sidebar**

- **Article content max-width:** `max-w-prose` (65ch) — this is non-negotiable. Do not widen for ads or other reasons.
- **Page container:** `max-w-5xl` (75rem) centered to accommodate potential sidebar.

**Section order:**

1. Navigation
2. **Guide header** — breadcrumb (small, text-subtle), category badge, H1 title, byline/date line (caption), read time, a relevant illustration (one of the 12 scenes matched to content type) — right-aligned on desktop, full-width on mobile.
3. **Table of contents** — visible on desktop as a sticky sidebar element (right column, `w-64`), visible on mobile as an expandable accordion below the header. TOC links: 14px, text-muted, active state is ink + orange left dot indicator.
4. **Article content area** — full prose. Inline callout boxes, embedded CTAs, and comparison tables can appear here. Inline "recommended tool" blocks appear mid-content after the core value has been delivered.
5. **End-of-guide CTA** — after the article conclusion, a contained affiliate block (if appropriate for the content) or email capture block. Per monetization rules: no affiliate CTAs in FAQ sections.
6. **Related guides** — 3 cards below the article. Heading: "Related guides."
7. Footer

**Desktop sidebar:** The right sidebar (w-64) sits alongside the content area. Contains: Table of Contents (sticky, scrolls with user up to the last TOC item). Below the TOC (fixed at bottom of sidebar): one affiliate link block maximum, labeled "Curated tool."

**Ad placement:** Inject between section 3 and 4 (after TOC, before article begins) for the 728x90 leaderboard. Sidebar can contain a 300x600 unit below the TOC affiliate block. No ads inside the article content itself (too disruptive; harms Mediavine quality score application).

---

### Guides Listing Page (/guides)

**Layout:** Full-page category browser

1. Navigation
2. **Page header** — H1 "All Guides," one-line description, search bar (prominent, centered, full-width on mobile). Background: `#FFF7ED` Warm White section, contained.
3. **Category filter tabs** — horizontal scrollable pill tabs on mobile, full-row on desktop. Options: All, Eligibility, Apply, Earnings, Tools. Active tab: Brand Orange background, ink text. Inactive: white background, border, text-muted.
4. **Guide card grid** — 3 columns desktop, 2 columns tablet, 1 column mobile. All 57 guide cards.
5. Footer

No sidebar on this page. Let the grid breathe. No pagination if feasible — infinite scroll or "load more" button degrades SEO. Static render all 57 cards on initial page load.

---

### Calculator Pages

**Layout:** Two-panel on desktop, stacked on mobile

1. Navigation
2. **Calculator header** — H1 title (e.g., "TikTok Earnings Calculator"), one-paragraph description, relevant illustration (Scene 03) right-aligned on desktop. Background: `#FFF7ED`.
3. **Calculator panel** — two-column desktop: left column has inputs, right column shows results. On mobile: inputs above, results below, results scroll into view on calculate. White background, `--radius-xl` container, `--shadow-md`.
4. **Contextual guidance** — below the calculator: "What affects your results?" section. Plain prose. This is where topical links to guides naturally appear (not affiliate CTAs). Links to RPM optimization guide, qualified views guide, etc.
5. **Related calculators** — 2 cards linking to the other calculators.
6. Footer

**No affiliate CTAs on calculator pages.** Per monetization rules. The contextual guidance section links to guides; the affiliate CTAs live inside those guides.

---

### Roundup / Comparison Pages

These are the highest-revenue page type. Design reflects their commercial purpose while maintaining editorial credibility.

**Layout:** Editorial with prominent comparison table

1. Navigation — standard (do not remove nav on roundup pages; only Start Here/landing pages benefit from nav removal)
2. **Page header** — H1 title (e.g., "Best Video Editing Apps for TikTok Creators (2026)"), last-updated date badge, one-paragraph framing. No illustration on this page type — keeps the focus commercial and immediate.
3. **Quick-pick box** — directly below the header, before any prose: a contained box (`#FFF7ED` background, orange left border, `--radius-lg`) with the single top recommendation. "Our top pick: [Product] for [reason in one line]." Affiliate button immediately inside. This captures high-intent readers who just want the answer.
4. **Comparison table** — the full side-by-side table (see Comparison Tables component). 5–10 products. Placed as high as possible — within the first screenful on desktop.
5. **Individual product sections** — one H2 per product. Each section: product name + one-line verdict, 3–4 paragraph review, affiliate CTA button. These are for readers who want detail.
6. **FAQ section** — no affiliate CTAs in FAQ answers (per monetization rules)
7. **Related roundups** — 2–3 card links
8. Footer

**Visual distinction from editorial guides:** The quick-pick box and comparison table signal "this is a buying guide." No illustration in the header. Slightly more generous use of the affiliate button style. The editorial integrity of the rest of the site means readers trust the recommendation rather than dismissing it as spam.

---

### Start Here / Email Capture Landing Page

**Layout:** Conversion-focused. Navigation removed (per research: 2–4x improvement).

1. **Minimal header** — Logo only, no nav links, no CTA button.
2. **Hero** — full-width, `#FFF7ED` background. H1 pain-state headline. Short subhead. Primary email form (oversized fields). Scene 12 illustration (megaphone) on right side (desktop), stacked below form on mobile.
3. **Trust strip** — three trust indicators (checkmarks + short text). Below the hero form.
4. **Content preview** — show a simplified preview of what they'll receive (checklist items, styled as a visual doc prop). Scene 08 illustration (envelope) can appear here.
5. **Social proof** — if real numbers exist: subscriber count, etc. Never fabricate numbers. If no real numbers exist, use zero social proof rather than invented proof.
6. **Secondary CTA** — repeat email form, simplified (just the input + button, no framing copy).
7. **Minimal footer** — privacy policy and affiliate disclosure links only. No full footer nav.

---

## Competitive Differentiation

**What competitors look like and why this site should look different:**

| Competitor type | Their visual mistake | Our counter |
|---|---|---|
| Tool company blogs (Metricool, Later) | Their design serves the tool, not the reader. Blog content is visually treated as secondary to the product CTA. Headers push trial signups; content looks like an afterthought. | No product CTA in the nav. Content is the product. The design should feel like a guide built by someone who uses the program, not a company selling against it. |
| Generic media sites (Social Media Examiner) | High ad density. Busy navigation. Stock photos of people looking at phones. Orange or blue branded headers that feel corporate. | Illustration-based visual identity replaces stock photos. Contained white-background ad placements prevent the "ad-stuffed" feel. Clean nav with fewer items. |
| Influencer Marketing Hub | High DR, high trust. But their design is 2018 — blue headers, cluttered sidebar, tables that break on mobile. | The comparison tables here are mobile-first, modern, and scannable. The orange accent differentiates immediately from their blue/navy default. |
| Niche TikTok guides (smaller blogs) | Minimal design investment. Either bare WordPress or generic Tailwind starter templates. Low visual confidence. | The illustration set alone signals investment. A consistent design system makes even a small site feel authoritative. |

**The differentiation in one sentence:** This is the only site in the space with a custom illustration identity, calculators that actually model the program accurately, and a design that earns attention before it asks for anything.

---

## Component References

**Note on sourcing:** All 21st.dev URLs below were verified by direct fetch against the live sitemap (2026-03-15). Component names and descriptions are pulled from each page's ld+json SoftwareSourceCode block. Canonical URLs are listed — some discovery links redirect to these. Where no 21st.dev component matches the brand requirements, a custom build spec is provided inline.

**How Devan uses these:** Browse the URL, view the live preview, copy the component code via the "Copy" button on 21st.dev. Then apply the brand customization notes below each entry.

**Font loading reminder before any component work:**
```
https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap
```

---

### Style and Palette Direction for Devan (ui-ux-pro-max pass)

Before the shopping list — the approach that ties every component together:

**Palette role in components:**
- `#F4A261` (Brand Orange) is the single interactive signal. Hover states, active tabs, focus rings, filled buttons, and highlighted table rows all use it. No component should introduce a second accent color.
- `#FFF7ED` (Warm White) is the section-level separator. Use it to carve the page into zones without borders or shadows — hero backgrounds, calculator panels, email capture sections.
- `#111827` (Ink) is the single text color for headings and labels. Never use opacity-based grays — use the defined text-muted and text-subtle hex values instead, so dark mode migration is clean.
- White (`#FFFFFF`) is the default card and surface background. Every card floats on white; the page background provides the warmth.

**Border radius philosophy:**
All components use the same radius tokens — `--radius-md` (12px) for inputs and small cards, `--radius-lg` (16px) for guide cards and containers, `--radius-xl` (24px) for section-level containers and email capture panels. This consistency prevents the "assembled from random parts" feeling that kills affiliate site credibility.

**Shadow system:**
- Default: no shadow (clean, flat feel matches illustration style)
- Hover on interactive cards: `box-shadow: 0 1px 3px rgba(0,0,0,0.08)` (shadow-sm)
- Floating panels (nav dropdown, calculator panel, modal): `box-shadow: 0 4px 16px rgba(0,0,0,0.10)` (shadow-md)
- No heavy drop shadows anywhere. The site is not a SaaS product dashboard.

**Font pairing in components:**
- All UI labels, nav links, button text, table headers: Manrope
- All numeric outputs in calculator results: JetBrains Mono
- No third font introduced by any component library. If a component uses Inter or system-ui by default, override to Manrope in the component wrapper.

---

### 1 — Hero Section

**Recommended:** `shadcn/ui` does not ship a hero component — correct approach is composition.

**21st.dev verified components — evaluate in order:**

| Component | URL | Description |
|---|---|---|
| Hero Section (moumensoliman) | https://21st.dev/community/components/moumensoliman/hero-section-shadcnui | Hero section with staggered text and button reveal. Light background, clean layout. |
| Hero Grid Section | https://21st.dev/community/components/Abuhuraira/hero-grid-section | Modern hero with subtle background grid, stacked avatars. Light-mode compatible. |
| Hero Section (prebuiltui) | https://21st.dev/community/components/prebuiltui/hero-section | Standard hero section component. Inspect for split-layout variant. |
| Hero 1 (efferd) | https://21st.dev/community/components/efferd/hero-1 | Centered hero with radial gradient background and announcement badge. Needs gradient stripped. |

**Brand assessment:** Hero Grid Section (Abuhuraira) is the closest match if it has a two-column layout. moumensoliman's staggered reveal adds motion that fits the brand energy without being gratuitous. Avoid efferd/hero-1 unless the radial gradient is fully removable — warm-white-to-white gradient is fine; dark or colored gradients are not.

**What to customize on any 21st.dev pick:**
- Strip dark backgrounds entirely — replace with `bg-white` or `bg-gradient-to-b from-white to-[#FFF7ED]`
- Override headline font to Manrope 800, tracking-tight
- Remove any animated gradient text or glow effects
- CTA button: replace default primary color with `bg-[#F4A261] text-white hover:bg-[#E8935A]`

**Implementation spec for Devan (if no close match found):**
```
<section class="bg-gradient-to-b from-white to-[#FFF7ED] py-16 md:py-24">
  <div class="max-w-5xl mx-auto px-4 grid md:grid-cols-[3fr_2fr] gap-12 items-center">
    <!-- Left: text -->
    <div>
      <h1 class="text-[2.5rem] md:text-[3.5rem] font-extrabold tracking-tight text-[#0B0F1A] leading-[1.15]">
        [Display headline]
      </h1>
      <p class="mt-4 text-lg text-[#475467] leading-relaxed">[Value prop]</p>
      <div class="mt-8">[Primary CTA button]</div>
    </div>
    <!-- Right: illustration -->
    <div class="flex justify-center">
      <img src="/illustrations/scene-01.svg" alt="" aria-hidden="true"
           class="w-full max-w-[380px] md:max-w-none" />
    </div>
  </div>
</section>
```
**Notes:** No background image. No video. No animated gradient. The illustration (Scene 01) is decorative — `aria-hidden="true"` on the img. The gradient runs vertically, top-to-bottom, white to warm-white over the section only — not the whole page.

---

### 2 — Card Layouts (Guide Cards)

**Recommended:** shadcn/ui `Card` component as base — `npx shadcn@latest add card`

**21st.dev verified components — evaluate in order:**

| Component | URL | Description |
|---|---|---|
| Blog Cards (sumonadotwork) | https://21st.dev/community/components/sumonadotwork/blog-cards | Minimal, text-focused preview of a journal or blog entry. No thumbnail required. |
| Blog Post Card (erikx) | https://21st.dev/community/components/erikx/blog-post-card | Standalone blog post card. Inspect for clean border treatment. |
| Article Cards (kavikatiyar) | https://21st.dev/community/components/kavikatiyar/article-cards | Article card with background image, category, title, CTA button, hover animation. Needs image removed. |
| Hover Blog Card (shadcnspace) | https://21st.dev/community/components/shadcnspace/hover-blog-card | Blog card with hover effect. Inspect for layout flexibility. |
| Blogs (cnippet_dev) | https://21st.dev/community/components/cnippet_dev/blogs | Vertically stacked interactive headings — useful reference for list-style guide index pages. |

**Brand assessment:** sumonadotwork/blog-cards is the best starting point — minimal and text-forward matches the no-image-per-card direction. Article Cards (kavikatiyar) has a strong visual layout but needs the background image removed and gradient stripped before it works here.

**Implementation notes for Devan:**
- Base with `shadcn/ui Card` (`CardHeader`, `CardContent`, `CardFooter` slots)
- Override default gray border to `#EADFD3`
- Override border-radius to `--radius-lg` (16px)
- Add hover state: `hover:border-[#F4A261] hover:shadow-sm transition-all`
- Category badge: custom pill, not from a library — the orange soft background is brand-specific
- No card image slot — the design explicitly omits images for performance and consistency across 57 guides
- Title: 2-line clamp via `line-clamp-2` Tailwind utility
- Description: 3-line clamp via `line-clamp-3`

**Grid wrapper:** Tailwind grid — `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4` — no external grid library needed.

---

### 3 — Comparison Tables

**Recommended:** Build custom. No off-the-shelf library component matches the requirements accurately.

**21st.dev verified components (reference only — all require structural rework):**

| Component | URL | Description |
|---|---|---|
| Pricing Table (vaib215) | https://21st.dev/community/components/vaib215/pricing-table | Four-tier pricing table with toggle, feature checklist, info icons. Best structural reference. |
| Pricing table (authenticui) | https://21st.dev/community/components/authenticui/pricing-table | Standard pricing table layout. |
| Pricing Card With Features (rubenerik) | https://21st.dev/community/components/rubenerik/pricing-card-with-features | Pricing card with feature list. Closest to a single product row. |
| Pricing Section (bigbogiballer) | https://21st.dev/community/components/bigbogiballer/pricing-section | Full pricing section, inspect for horizontal comparison layout. |

**Why likely custom regardless:** Most 21st.dev comparison components assume equal columns (products vs. features). The roundup use case needs a sticky product-name column, a "winner" row with orange left-border highlight, and affiliate buttons below the table — not inside cells. The SaaS pricing table pattern doesn't map cleanly.

**Custom build spec for Devan:**
```
<!-- Table wrapper — horizontal scroll on mobile -->
<div class="overflow-x-auto rounded-xl border border-[#EADFD3]">
  <table class="w-full min-w-[640px] text-sm">
    <thead>
      <tr class="bg-[#FFF1E6]">
        <th class="sticky left-0 bg-[#FFF1E6] px-4 py-3.5 text-left font-semibold text-[#111827]">
          Product
        </th>
        <!-- additional column headers -->
      </tr>
    </thead>
    <tbody>
      <!-- Winner row gets: border-l-[3px] border-l-[#F4A261] bg-[#FFF7ED] -->
      <!-- Even rows get: bg-[#FAFAF9] -->
      <!-- Odd rows get: bg-white -->
    </tbody>
  </table>
</div>
<!-- CTA below table, NOT inside cells -->
<div class="mt-4 flex items-center gap-3">
  <span class="text-xs text-[#667085]">Affiliate</span>
  [Affiliate button]
</div>
```
**Check/X icons:** Use Lucide `CheckCircle2` (color `#12B76A`) and `XCircle` (color `#F04438`). Both are already in the Lucide React package. Dash for partial: `Minus` icon, color `#475467`.

**Mobile fade indicator:** Add a CSS `::after` pseudo-element on the scroll wrapper with a white-to-transparent gradient on the right edge to signal more content.

---

### 4 — Calculator / Tool Interface

**Recommended:** Build custom. No library component exists for this use case.

**21st.dev verified components (for slider sub-components only — full calculator is custom):**

| Component | URL | Description |
|---|---|---|
| PricingSlider Loops | https://21st.dev/community/components/radu-activation-popescu/pricing-slider-loops | 1:1 replica of Loops pricing — interactive slider calculator with discrete breakpoints and dynamic result display. Best reference for the slider-to-result pattern. |
| Range Slider Input (ruixenui) | https://21st.dev/community/components/ruixenui/range-slider-input | Dual-handle range slider with numeric input fields. Useful for advanced calculator variants. |
| Range Slider (avanishverma4) | https://21st.dev/community/components/avanishverma4/range-slider | Reusable range slider component. |
| Basic Slider (anubra266) | https://21st.dev/community/components/anubra266/basic-slider | Clean slider component. Use as reference for shadcn/ui Slider override. |

**What you'll find and why it's not enough:** No 21st.dev component delivers the two-panel input+result layout with JetBrains Mono numerics in a warm-white panel. PricingSlider Loops is the closest analog for the slider-calculates-result interaction pattern — study it for the JavaScript approach, then apply the custom panel layout below.

**Custom build spec for Devan:**
```
<div class="bg-white rounded-2xl border border-[#EADFD3] shadow-md overflow-hidden">
  <div class="grid md:grid-cols-2">
    <!-- Input panel -->
    <div class="p-6 md:p-8 space-y-6">
      <div class="space-y-1.5">
        <label class="text-sm font-medium text-[#475467] flex items-center gap-1.5">
          [Label] <InfoIcon class="w-3.5 h-3.5 text-[#667085]" />
        </label>
        <input type="number"
          class="w-full bg-[#F9EDE1] border border-[#EADFD3] rounded-xl px-4 py-3
                 font-mono text-right text-[#111827]
                 focus:border-[#F4A261] focus:ring-2 focus:ring-[#F4A261]/20 outline-none" />
      </div>
      [Calculate button — full-width primary]
    </div>
    <!-- Results panel -->
    <div class="bg-[#FFF7ED] p-6 md:p-8 border-t md:border-t-0 md:border-l border-[#EADFD3]">
      <p class="text-sm text-[#667085] mb-1">[Result label]</p>
      <p class="font-mono font-bold text-[2rem] text-[#0B0F1A]">[Primary result]</p>
      <!-- Secondary results below -->
    </div>
  </div>
</div>
```
**Tooltip component:** Use `shadcn/ui Tooltip` — `npx shadcn@latest add tooltip` — for the info icon (ⓘ) on technical labels (RPM, qualified views). Override trigger to use `InfoIcon` from Lucide.

**Slider (if used):** Use `shadcn/ui Slider` — `npx shadcn@latest add slider` — then override CSS variables: `--slider-track: #EADFD3`, `--slider-range: #F4A261`, `--slider-thumb-border: #F4A261`.

---

### 5 — CTA / Email Capture Sections

**Recommended:** shadcn/ui does not ship this. Look at 21st.dev first.

**21st.dev verified components — evaluate in order:**

| Component | URL | Description |
|---|---|---|
| News letter (ruixenui) | https://21st.dev/community/components/ruixenui/newsletter | Newsletter card with gradient background, card layout, shadcn/ui. Needs gradient removed, warm-white background applied. |
| News letter Form (ruixenui) | https://21st.dev/community/components/ruixenui/newsletter-form | Modern newsletter subscription form with card layout, input + button. Closest to the contained inline variant needed. |
| Newsletter Card (kavikatiyar) | https://21st.dev/community/components/kavikatiyar/newsletter-card | Newsletter card component. |
| Newsletter (prebuiltui) | https://21st.dev/community/components/prebuiltui/newsletter | Standard newsletter section component. |
| CTA 3 (efferd) | https://21st.dev/community/components/efferd/cta-3 | CTA section — inspect for contained layout variant. |

**Brand assessment:** ruixenui/newsletter-form is the best structural match — contained card layout, input + button, card wrapping. Remove gradient, set background to `#FFF1E6`, ensure input has `h-12` minimum tap target. Add the 3-point benefit checklist as a custom addition below the form — no library component includes this.

**If no match:** The inline form variant is straightforward to build. Key implementation notes:
- Container: `bg-[#FFF1E6] rounded-3xl p-8` (24px padding on mobile)
- Input: white background, `h-12` (48px minimum tap target)
- Button sits right of input on `md:` breakpoint, below on mobile: `flex flex-col md:flex-row gap-3`
- Fine print: `text-xs text-[#667085] mt-2`

**Start Here landing page email form:** Oversized variant. Input and button both `h-14` (56px). This is a one-off page — build it without a component library. The conversion benefit of nav removal and oversized inputs is documented in the brand guide.

---

### 6 — Navigation / Header

**Recommended:** `shadcn/ui NavigationMenu` — `npx shadcn@latest add navigation-menu`

**21st.dev verified components — evaluate in order:**

| Component | URL | Description |
|---|---|---|
| Header 1 (efferd) | https://21st.dev/community/components/efferd/header-1 | Responsive sticky header with scroll blur effect, animated mobile menu, adaptive navigation links. **Best match.** |
| Header 2 (efferd) | https://21st.dev/community/components/efferd/header-2 | Elegant responsive header with scroll-based styling, mobile drawer, smooth transitions. |
| Header 3 (efferd) | https://21st.dev/community/components/efferd/header-3 | Feature-rich header with scroll blur, animated mobile drawer, nested navigation menus. Use if dropdown nav is needed. |
| Header-01 (aliimam) | https://21st.dev/community/components/aliimam/header-01 | Header navigation bar with menu. |
| Vercel Navbar (aliimam) | https://21st.dev/community/components/aliimam/vercel-navbar | Vercel-style navbar with navigation menu. Clean, minimal, light background. |
| Navigation Menu (reui) | https://21st.dev/community/components/reui/navigation-menu-1 | Navigation menu with keyboard navigation and accessibility features. |

**Brand assessment:** efferd/header-1 is the correct starting point — it already has scroll-based styling, animated mobile menu, and sticky behavior. The scroll blur effect needs to be tuned: use `backdrop-blur-sm` with white/95 opacity background (not dark), add `border-b border-[#EADFD3]` on scroll instead of a shadow if the blur feels too heavy.

**shadcn/ui NavigationMenu customization for Devan:**
- Override `data-[state=open]` trigger color to Brand Orange `#F4A261`
- Override indicator underline to `bg-[#F4A261]`
- Viewport/dropdown: `bg-white border border-[#EADFD3] rounded-xl shadow-md`
- Scroll behavior: add `useScrollPosition` hook — on scroll > 10px, add `shadow-sm` class to header
- Mobile: `Sheet` component from shadcn (`npx shadcn@latest add sheet`) — slides from right, full-height, white background, `min-h-[48px]` tap targets throughout
- Active link detection: Next.js `usePathname()` — apply `text-[#111827] after:bg-[#F4A261]` underline to active route

---

### 7 — Footer

**Recommended:** Build custom. Footer components on 21st.dev are mostly dark-background or highly stylized.

**21st.dev verified components (reference only — all likely need affiliate disclosure zone added):**

| Component | URL | Description |
|---|---|---|
| Minimal Footer (efferd) | https://21st.dev/community/components/efferd/minimal-footer | Clean, responsive footer with company links, resources, social icons. Closest to the required structure. Light background. |
| NeoMinimal Footer | https://21st.dev/community/components/m.kumailalirajpoot/neo-minimal-footer | Sleek minimal footer with branding, navigation links, newsletter input, social icons. |
| Vercel Footer (aliimam) | https://21st.dev/community/components/aliimam/vercel-footer | Vercel-style footer with dropdown menu. |
| Footer (prebuiltui) | https://21st.dev/community/components/prebuiltui/footer-1 | Standard footer component. |
| Footer Section (efferd) | https://21st.dev/community/components/efferd/footer-section | Animated footer section — inspect but likely too stylized. |

**Brand assessment:** efferd/minimal-footer is the right foundation — it's light-background, has the multi-column link structure, and can accept a custom bottom bar for the affiliate disclosure. NeoMinimalFooter is richer but the newsletter input adds complexity that's not needed in the footer.

**Why still custom regardless:** The affiliate disclosure bottom bar is a hard brand requirement and a legal requirement. No library footer has this. Add it as a custom row below any 21st.dev footer base.

**Custom build spec for Devan:**
```
<footer class="bg-white border-t border-[#EADFD3] pt-12 pb-6">
  <div class="max-w-5xl mx-auto px-4">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
      <!-- Col 1: Brand -->
      <!-- Col 2: Quick links -->
      <!-- Col 3: Legal links -->
    </div>
    <div class="border-t border-[#EADFD3] pt-4 flex flex-col md:flex-row
                justify-between items-start md:items-center gap-2">
      <p class="text-xs text-[#667085]">© 2026 [Site Name]</p>
      <p class="text-xs text-[#667085] max-w-md text-right">
        This site contains affiliate links. We may earn a commission
        at no cost to you. <a href="/affiliate-disclosure" class="underline">Full disclosure.</a>
      </p>
    </div>
  </div>
</footer>
```
**Notes:** White background is mandatory — never dark. Affiliate disclosure in the bottom bar is a hard requirement, not optional design flair.

---

### 8 — Pricing / Feature Tables (Product Comparison)

**See section 3 (Comparison Tables).** The comparison table component covers this use case. There is no separate "pricing table" page type — products are compared in the roundup page format using the same comparison table component.

**If a true pricing/tier table is needed** (e.g., comparing TikTok monetization tiers or tool subscription plans):

**21st.dev verified components (if a true pricing/tier table is needed):**

| Component | URL | Description |
|---|---|---|
| Pricing Table (vaib215) | https://21st.dev/community/components/vaib215/pricing-table | Four-tier pricing with toggle, credit dropdowns, feature checklist, student discount banner. Best adapted for monetization tier comparison. |
| Pricing Card With Features (rubenerik) | https://21st.dev/community/components/rubenerik/pricing-card-with-features | Single pricing card with feature list. Use as a column in a custom 3-column layout. |

**See section 3 (Comparison Tables) for the full roundup table build spec.**

**Adaptation notes for Devan:**
- Strip any dark gradient headers — replace with `bg-[#FFF1E6]` header row
- Replace "highlighted plan" blue/purple accent with Brand Orange left-border treatment
- Remove any animated pricing toggles (monthly/yearly) — not applicable here
- Override typography to Manrope throughout

---

### 8b — Feature Sections (How-It-Works, Benefits Grid)

**Recommended:** Build custom for the specific 3-column or 2x3 grid format this site uses. 21st.dev feature sections are mostly SaaS-oriented with dark backgrounds and icon-heavy layouts.

**21st.dev verified components:**

| Component | URL | Description |
|---|---|---|
| Feature Spotlight (jatin-yadav05) | https://21st.dev/community/components/jatin-yadav05/feature-spotlight | Feature spotlight card for landing pages. Single-feature callout style. |
| Feature (shadway) | https://21st.dev/community/components/shadway/feature | Sleek animated featured cards section. Inspect for light-mode support. |
| Feature Section (ravikatiyar) | https://21st.dev/community/components/ravikatiyar/feature-section | Feature grid. Standard multi-feature layout. |
| Feature Carousel (0xUrvish) | https://21st.dev/community/components/0xUrvish/feature-carousel | Animated feature carousel with slide transitions. **Avoid** — carousel pattern has poor mobile usability. |
| bento grid 01 (avanishverma4) | https://21st.dev/community/components/avanishverma4/bento-grid-01 | Responsive bento grid layout with animation. Reference for the calculator/tool feature grid only. |

**Brand assessment:** Feature Spotlight (jatin-yadav05) works well for the "3 reasons to use the calculator" section. Feature Section (ravikatiyar) is the right base for a 3-column benefits grid. Strip all dark backgrounds and replace feature accent colors with Brand Orange. No bento grids on content pages — they add visual weight that competes with the articles.

**Customization for any feature grid:**
- Background: `bg-white` or alternating `bg-[#FFF7ED]` section
- Icon container: `bg-[#FFF1E6] rounded-xl p-3` with Lucide icon at `text-[#F4A261]`
- Title: Manrope 600, `text-[#111827]`
- Body: `text-[#475467]` body font

---

### 9 — Testimonial / Social Proof Sections

**Current status:** Per brand guide, this site should use ZERO social proof until real numbers exist. Fabricated subscriber counts or made-up testimonials are explicitly prohibited.

**When real social proof exists:** Revisit this component.

**21st.dev verified components (for when real social proof exists):**

| Component | URL | Description |
|---|---|---|
| Minimal Testimonial (jatin-yadav05) | https://21st.dev/community/components/jatin-yadav05/minimal-testimonial | Clean, minimal — just a beautifully typeset quote with smooth fade/blur transitions. **Best match when real quotes exist.** |
| Clean Testimonial (jatin-yadav05) | https://21st.dev/community/components/jatin-yadav05/clean-testimonial | Clean testimonial with unique features. |
| Empty Testimonial (reapollo) | https://21st.dev/community/components/reapollo/empty-testimonial | Animated empty state for testimonial sections — useful as a placeholder while building social proof. |
| Testimonial (kavikatiyar) | https://21st.dev/community/components/kavikatiyar/testimonial | Testimonial section. |

**Brand assessment:** jatin-yadav05/minimal-testimonial is the correct choice when the time comes — text-first, no avatar required, smooth transitions. Avoid any carousel/slider variant. Avoid MultiMedia Testimonial (ruixenui) — video testimonials are not in scope and add external dependencies.

**Recommended component type when ready:**
- Simple stat strip (3 numbers in a row) — `bg-[#FFF1E6]` background, Manrope 700 for the number, caption for the label
- No headshots unless real images are available
- If using text testimonials: simple `<blockquote>` card with orange left border (matches Pro Tip callout style) — no star ratings unless verified

**Do not install a third-party testimonials/review widget.** These add external scripts that hurt page speed scores and Mediavine ad eligibility.

---

### 10 — Blog / Article Page Layout

**Recommended:** Build custom. This is a layout composition, not a component.

**21st.dev verified components (layout primitives and reference):**

| Component | URL | Description |
|---|---|---|
| Blogs (cnippet_dev) | https://21st.dev/community/components/cnippet_dev/blogs | Vertically stacked interactive headings that reveal content — useful reference for mobile TOC accordion pattern. |
| Blog Cards (sumonadotwork) | https://21st.dev/community/components/sumonadotwork/blog-cards | Minimal text-focused blog card — useful as the "related articles" component at bottom of article pages. |
| Blog Post Card (erikx) | https://21st.dev/community/components/erikx/blog-post-card | Blog post card — reference for article header card design. |

**Note:** No 21st.dev component covers the full article page layout. This is a composition task. The primitives below (from shadcn) are the correct approach.

**Key layout primitives needed (all from shadcn/ui):**

| Component | Install command | Use |
|---|---|---|
| `Breadcrumb` | `npx shadcn@latest add breadcrumb` | Guide page header navigation |
| `Badge` | `npx shadcn@latest add badge` | Category tags, "New" labels |
| `Separator` | `npx shadcn@latest add separator` | Section dividers in article content |
| `Scroll Area` | `npx shadcn@latest add scroll-area` | Table of contents sidebar (sticky, scrollable) |
| `Collapsible` | `npx shadcn@latest add collapsible` | Mobile TOC accordion |
| `Tooltip` | `npx shadcn@latest add tooltip` | Info icons on technical terms |

**Table of Contents implementation note:**
The desktop TOC sidebar is a sticky div with `position: sticky; top: 80px; max-height: calc(100vh - 100px); overflow-y: auto`. Active section detection via `IntersectionObserver` — highlight the current H2/H3 with `text-[#111827]` and a `w-1 bg-[#F4A261]` left dot indicator. This is custom JavaScript — no library does this correctly out of the box for long-form content with nested headings.

**Callout boxes (Pro Tip, Warning, Info, Error):**
These are not available from any library with the correct brand styling. Build as four named variants of a single `<Callout>` component:
```
// components/callout.tsx
type CalloutVariant = 'tip' | 'warning' | 'info' | 'error'

const variants = {
  tip:     { border: 'border-l-[#F4A261]', bg: 'bg-[#FFF7ED]',  icon: 'Lightbulb',     iconColor: '#F4A261' },
  warning: { border: 'border-l-[#F79009]', bg: 'bg-[#FFFAEB]',  icon: 'AlertTriangle', iconColor: '#F79009' },
  info:    { border: 'border-l-[#0EA5E9]', bg: 'bg-[#F0F9FF]',  icon: 'Info',          iconColor: '#0EA5E9' },
  error:   { border: 'border-l-[#F04438]', bg: 'bg-[#FEF3F2]',  icon: 'XCircle',       iconColor: '#F04438' },
}
```
All icons from Lucide React. All four variants share: `border-l-[3px] rounded-r-xl px-5 py-4 max-w-prose`.

---

### Complete shadcn/ui Install List for Devan

Run these once at project setup. Everything else is 21st.dev copy-paste + customization, or custom build.

```bash
npx shadcn@latest add card
npx shadcn@latest add navigation-menu
npx shadcn@latest add sheet
npx shadcn@latest add tooltip
npx shadcn@latest add slider
npx shadcn@latest add badge
npx shadcn@latest add breadcrumb
npx shadcn@latest add separator
npx shadcn@latest add scroll-area
npx shadcn@latest add collapsible
npx shadcn@latest add button
```

**Do not install:** Table (shadcn's table component is for data tables, not comparison tables — the custom build above handles this better), Dialog/Modal (not needed in this site's UX), Tabs (build the category filter tabs custom — shadcn Tabs adds unnecessary JS for this simple use case).

**Lucide React icons used across the site:**
`CheckCircle2`, `XCircle`, `Minus`, `ChevronRight`, `Info`, `Lightbulb`, `AlertTriangle`, `Menu`, `X` (close), `ExternalLink` (affiliate link indicator), `Clock` (read time).

---

### 21st.dev Quick Reference (Verified Links)

The shortest path from component need to working code. All URLs confirmed live as of 2026-03-15.

| Use case | Start here | URL |
|---|---|---|
| **Navigation header** | efferd/header-1 | https://21st.dev/community/components/efferd/header-1 |
| **Navigation with nested dropdowns** | efferd/header-3 | https://21st.dev/community/components/efferd/header-3 |
| **Hero section** | moumensoliman/hero-section-shadcnui | https://21st.dev/community/components/moumensoliman/hero-section-shadcnui |
| **Blog/guide card** | sumonadotwork/blog-cards | https://21st.dev/community/components/sumonadotwork/blog-cards |
| **Email capture / newsletter** | ruixenui/newsletter-form | https://21st.dev/community/components/ruixenui/newsletter-form |
| **Footer (minimal, light)** | efferd/minimal-footer | https://21st.dev/community/components/efferd/minimal-footer |
| **Pricing/comparison table reference** | vaib215/pricing-table | https://21st.dev/community/components/vaib215/pricing-table |
| **Calculator slider reference** | radu-activation-popescu/pricing-slider-loops | https://21st.dev/community/components/radu-activation-popescu/pricing-slider-loops |
| **Feature section** | jatin-yadav05/feature-spotlight | https://21st.dev/community/components/jatin-yadav05/feature-spotlight |
| **Testimonial (when ready)** | jatin-yadav05/minimal-testimonial | https://21st.dev/community/components/jatin-yadav05/minimal-testimonial |
| **Blog article card** | erikx/blog-post-card | https://21st.dev/community/components/erikx/blog-post-card |

---

### What to Build Custom (No Library Match)

| Component | Reason | 21st.dev verdict | Notes |
|---|---|---|---|
| Comparison table | SaaS pricing tables don't map to roundup format | No match — use vaib215/pricing-table as structural reference only | Spec in section 3 |
| Calculator panel | No library component for input + mono results | Closest: radu-activation-popescu/pricing-slider-loops for JS pattern | Spec in section 4 |
| Callout boxes | Brand-specific 4-variant system | No match | Spec in section 10 |
| Guide cards | Image-free card with category pill is non-standard | Start from sumonadotwork/blog-cards, remove image slot | Notes in section 2 |
| Footer with affiliate disclosure | Unique legal requirement | Start from efferd/minimal-footer, add disclosure row | Spec in section 7 |
| Category filter tabs | shadcn Tabs adds unnecessary weight for pill-style filter | No match | Simple button group with active state |
| Quick-pick box (roundup pages) | Brand-specific editorial component | No match | Orange left-border container, single affiliate CTA |
| TOC with IntersectionObserver | Library solutions are unreliable for nested headings | No match | Custom hook |

---

## Brand Summary for Scribe and Devan

**For Scribe:** The visual tone is warm but not casual. Clean but not sterile. The illustrations show aspirational creators — productive, organized, in-motion. Write to match that: clear, specific, direct. No pep talk energy. No hedged corporate-passive voice. The person reading has a question; answer it.

**For Devan:** Implement from `tokens.css` as the source of truth. Primary additions needed: semantic success/warning/error colors, comparison table styles, calculator panel layout, callout box variants (pro-tip, warning, info, error), and the affiliate button variant. The illustration style guide has prompt templates for generating additional images when new pages need headers. All components are Tailwind-implementable with no custom CSS needed beyond what tokens.css already defines. Mobile-first on every component. Ad-safe design: max-width containers, white outer backgrounds.
