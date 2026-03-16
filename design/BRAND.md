# Brand Identity — TikTok Creativity Program

## Brand Personality

This site is the authority a TikTok creator actually trusts — not a corporate how-to page, not a tool company's blog, not a generic content farm. It feels like getting advice from someone who has figured out the Creator Rewards Program and wants to share exactly what they know. Warm, direct, confident without being smug. The visual energy is creator-native: dark ink with orange fire, the aesthetic of someone who takes their content seriously. A creator should land on this site and feel immediate recognition — "this is built for people like me."

The first-visit impression must answer three questions in under 3 seconds: What is this? (The only guide you need for the TikTok Creator Rewards Program.) Why should I care? (Real RPM data, accurate calculators, and 57 guides.) What do I do next? (One clear CTA.) Everything else is noise.

---

## Color Palette

| Role | Hex | Usage |
|---|---|---|
| Primary | #F4A261 | CTA buttons, active states, highlights, icon accents |
| Primary Hover | #E8894A | Button hover, pressed states |
| Primary Soft | #FFF1E6 | Subtle backgrounds on callout cards, tag backgrounds |
| Ink | #111827 | All headings, primary body text, logo |
| Background Page | #FFFFFF | Page backgrounds |
| Background Warm | #FFF7ED | Hero section wash, email capture section, section alternates |
| Surface | #F9FAFB | Card backgrounds, sidebar backgrounds |
| Border Default | #E5E7EB | Card borders, dividers |
| Border Strong | #D1D5DB | Focused input borders, table borders |
| Text Primary | #111827 | Body text, headings |
| Text Secondary | #6B7280 | Captions, metadata, breadcrumbs |
| Text Muted | #9CA3AF | Placeholder text, disabled states |
| Text Inverse | #FFFFFF | Text on Ink backgrounds only |
| Success | #16A34A | Eligible checkmarks, positive stats |
| Warning | #D97706 | Caution callouts |
| Error | #DC2626 | Error states, rejection alerts |

**WCAG Rule — Hard Stop:** Primary orange (#F4A261) on white achieves only 2.43:1 contrast. Never use white text on orange. All orange buttons use Ink (#111827) text. Verified with WCAG AA calculator. No exceptions.

---

## Typography

| Role | Font | Weight | Size | Line Height |
|---|---|---|---|---|
| H1 | Manrope | 800 | 3.5rem (56px) | 1.1 |
| H2 | Manrope | 700 | 2.25rem (36px) | 1.2 |
| H3 | Manrope | 700 | 1.5rem (24px) | 1.3 |
| H4 | Manrope | 600 | 1.25rem (20px) | 1.4 |
| Body | Manrope | 400 | 1rem (16px) | 1.75 |
| Body Large | Manrope | 400 | 1.125rem (18px) | 1.7 |
| Caption | Manrope | 500 | 0.75rem (12px) | 1.5 |
| Label | Manrope | 600 | 0.875rem (14px) | 1.4 |
| Mono | JetBrains Mono | 400 | 0.875rem (14px) | 1.6 |

Single-family approach: Manrope handles everything. Weight variance creates hierarchy without font-switching visual complexity. JetBrains Mono only for calculator outputs and data values.

Load Manrope from Google Fonts (weights: 400, 500, 600, 700, 800). Load JetBrains Mono from Google Fonts (weight: 400 only). Both via next/font/google for optimal performance.

---

## Image Style

Style prompt prefix for all AI-generated images:

"Flat design illustration, warm orange (#F4A261) and ink black (#111827) on white or warm white (#FFF7ED) background, clean geometric shapes, bold outlines, minimal detail, no text overlay, no gradients, creator/smartphone/content theme"

Rules:
- Orange appears on ONE element per illustration (clothing piece OR device accent OR single UI highlight)
- Ink black for outlines, secondary elements, devices
- White or #FFF7ED for backgrounds — never orange backgrounds
- Characters are stylized, not photorealistic — flat limbs, geometric heads, bold shapes
- Every guide gets a unique illustration. Recycling is not acceptable.
- unDraw SVGs: color-swap default purple (#6C63FF) to #F4A261 using sed

---

## Animation Direction

Creator-native energy through purposeful motion. The hero has a signature animated effect (Aceternity UI Spotlight) that signals this site was designed, not templated. Below the fold: scroll-reveal on all major sections using Framer Motion (opacity 0 to 1, y 20 to 0, duration 0.5s, viewport once: true). Cards stagger at 0.1s intervals. No parallax. No auto-playing video. No infinite looping animations that compete with reading.

CTAs animate on hover (scale 1.02, shadow deepens). Numbers in stat blocks count up when scrolled into view (Magic UI Number Ticker). The hero headline uses a staggered word reveal on first load (Framer Motion, words animate in sequence at 0.08s stagger).

prefers-reduced-motion: all scroll reveals and entrance animations are disabled when set. Static renders only. This is a hard requirement — not optional.

---

## Icon System

Lucide React exclusively. No emojis anywhere in rendered output. No decorative emoji in headings, cards, or body text. Zero exceptions. If a design idea requires an emoji, replace it with the nearest Lucide icon.

Key icons for this project: `TrendingUp`, `DollarSign`, `Video`, `BarChart2`, `CheckCircle`, `XCircle`, `AlertTriangle`, `Clock`, `Globe`, `ChevronRight`, `ExternalLink`, `Calculator`, `BookOpen`, `Users`, `Zap`, `Star`.
