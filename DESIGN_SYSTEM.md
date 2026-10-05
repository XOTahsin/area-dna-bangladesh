# DESIGN_SYSTEM.md

**Status:** Proposed direction. Tokens below are starting proposals to be tuned visually in Stage 1. Not final.
**Last updated:** October 2026

---

## 1. Character

Minimal · warm · clean · modern · trustworthy · slightly playful · professional · Bangladesh-specific.

It should feel like a carefully designed Bangladeshi product, not a generic dashboard.

## 2. Avoid

Excess gradients · heavy glassmorphism · neon · big shadows · lots of animation · stock-style hero sections · decoration with no meaning · generic AI-dashboard look.

## 3. Bangladesh-specific cues (use with restraint)

- Bengali-first copy and numerals option (০–৯), ৳ currency, Bengali date formats.
- Warm palette inspired by familiar local tones (e.g. deep green, warm red-orange accents, paper-like neutrals). Avoid literal flag colors as UI chrome; use sparingly as accents.
- Subtle, meaningful motifs only if they carry meaning (e.g. map outline). No clichéd ornament.

## 4. Color tokens (proposed, to tune)

Defined as CSS variables / Tailwind theme tokens. Never hard-code hex values in components.

| Token | Intent | Starting proposal |
|---|---|---|
| `--bg` | Page background, warm off-white | `#FAF8F4` |
| `--surface` | Cards | `#FFFFFF` |
| `--ink` | Primary text | `#1F2A24` |
| `--ink-muted` | Secondary text | `#5C6860` |
| `--border` | Hairlines | `#E6E1D8` |
| `--brand` | Primary actions, deep green | `#0F6B4F` |
| `--brand-soft` | Brand tint backgrounds | `#E3F1EA` |
| `--accent` | Highlights, warm | `#D9583B` |
| `--warn` | Caution / outdated | `#B7791F` |
| `--danger` | Errors / removed | `#B3261E` |

Contrast: body text ≥ 4.5:1, large text ≥ 3:1. Verify in Stage 1.

**Score colors** (for map and score chips) use a single sequential ramp plus a distinct "no data" neutral. Never rely on color alone — always pair with number/label. Ramp is defined in Stage 4.

**Trust-state styling** (distinct, consistent everywhere):

| State | Treatment |
|---|---|
| `UNVERIFIED` | muted outline badge |
| `COMMUNITY_REPORTED` | neutral badge |
| `PARTIALLY_VERIFIED` | brand-soft badge |
| `VERIFIED` | brand badge with check |
| `OUTDATED` | warn badge |
| `REMOVED` | hidden from public; admin-only styling |

## 5. Typography

- **Bangla:** a well-hinted Bengali web font. Candidates: Hind Siliguri, Noto Sans Bengali, Anek Bangla. **Final choice is an open decision** (test conjunct rendering at small sizes on low-end Android).
- **Latin:** a clean sans that pairs with the Bangla font (e.g. Inter or the Bangla font's own Latin).
- Bangla needs more line-height than Latin: start at **1.6–1.7** for body, **1.3–1.4** for headings. Avoid tight tracking and avoid all-caps tricks.
- Minimum body size 16px on mobile.
- Load fonts with `next/font`, subset, `display: swap`.
- Numerals: support Bengali or Latin digits through one formatter in `lib/i18n`; never hand-format in components.

## 6. Spacing, shape, elevation

- 4px base scale (4, 8, 12, 16, 24, 32, 48).
- Radius: small (8px) for inputs/chips, medium (12–16px) for cards.
- Elevation: borders first; at most one very soft shadow level. No stacked shadows.

## 7. Layout

- Mobile-first; design at 360px width first.
- Breakpoints use Tailwind defaults unless a clear need arises.
- Mobile nav: simple bottom bar or compact top bar with ≤ 4 destinations (Home, Explore, Compare, About). Final pattern chosen in Stage 1.
- Touch targets ≥ 44px.
- Every major screen states a clear next action.

## 8. Core components (planned, built when needed)

`Button`, `IconButton`, `Card`, `Badge`, `Chip`, `ScoreChip`, `TrustLabel`, `Skeleton`, `EmptyState`, `ErrorState`, `PageShell`, `Header`, `MobileNav`, `SectionHeading`.

Rules:

- Generic components in `components/ui` know nothing about domain concepts.
- Domain components (e.g. `CategoryScoreCard`) live in `features/*`.
- Props typed; no styling logic duplicated across components.

## 9. Required states

| State | Requirement |
|---|---|
| Loading | Skeletons matching final layout; no spinners-only screens |
| Empty | Friendly Bangla message + what to do next |
| Error | Plain-language cause + retry/next action; no raw errors |
| Partial data | Show what exists; label missing items "তথ্য নেই / এখনো পর্যাপ্ত তথ্য নেই" (wording to finalize) |

## 10. Trust presentation pattern

Wherever a community-derived value appears, show: value → basis (report count) → freshness → verification state. Format is shared via `TrustLabel`.

Illustrative layout:

```
আনুমানিক ভাড়া
৳১৮,০০০–৳২৫,০০০
৩১টি কমিউনিটি রিপোর্টের ভিত্তিতে · সর্বশেষ আপডেট: অক্টোবর ২০২৬
```

(Format only; numbers are placeholders, not data.)

## 11. Motion

Minimal. Short (150–200ms) transitions for state changes and map camera moves. Respect `prefers-reduced-motion`.

## 12. Iconography and imagery

Consistent single icon set (choose in Stage 1; justify any new dependency). Photos must be optimized (`next/image`) and, once UGC exists, moderated.

## 13. Accessibility baseline

Semantic HTML · visible focus styles · labels on form controls · sufficient contrast · keyboard-reachable map controls where feasible · full audit in Stage 12.

## 14. Open design decisions

1. Final Bangla font.
2. Final palette after real-screen testing.
3. Mobile nav pattern.
4. Icon set.
5. Logo / wordmark.
