# CHANGELOG.md

All notable changes to AREA DNA Bangladesh. Newest first. Every stage must add an entry.

Format: `## [Stage N] — YYYY-MM-DD` with Added / Changed / Removed / Notes.

---

## [Stage 1] — 2026-10-05

### Added
- Next.js (App Router) + TypeScript (strict) + Tailwind CSS v4 project scaffold, written by hand (see Notes).
- Design tokens from `DESIGN_SYSTEM.md` in `src/app/globals.css` (colors, Bangla line-height, focus ring, reduced motion).
- Bangla copy dictionary `src/lib/i18n/bn.ts` and `toBanglaDigits` formatter.
- `src/config/navigation.ts` (nav with live/planned status) and `src/config/dimensions.ts` (display-only list of the ten planned dimensions; not scoring config).
- UI primitives: `Button`/`ButtonLink`, `Badge`, `Card`, `SectionHeading`, `Skeleton`, `EmptyState`, `ErrorState`, `Icon` (inline SVG, no icon dependency).
- Layout: `SiteHeader`, `Logo`, `NavLinks` (desktop), `MobileNav` (bottom bar), `SiteFooter`, `Container`, `ComingSoonPage`.
- Homepage sections in `src/features/home/`: Hero, SearchPlaceholder (disabled, visual only), MapPreview + MapPlaceholder (static, no geography), DimensionsSection (10 cards), HowItWorks (3 steps), FutureCta.
- Routes: `/`, `/explore` and `/compare` (honest "not built yet" pages), `/about` (data-trust principles), plus `loading`, `error`, `not-found`.
- `.env.example` (names only), `.gitignore`, `README.md`.

### Changed
- Nothing in Stage 0 documents.

### Removed
- Nothing.

### Notes
- Dependencies: next ~15.5, react 19, react-dom 19; dev: typescript, tailwindcss 4, @tailwindcss/postcss, eslint, eslint-config-next, @types/*. No UI, icon, or map libraries.
- Font: Hind Siliguri via `next/font/google` (proposal; still an open decision).
- NOT done in the authoring environment (no npm registry access): `npm install`, `next build`, `next lint`, full `tsc`, browser/responsive/console checks. Run them locally before accepting Stage 1.
- Done instead: SSR render smoke test of every page and layout component (all render; 10 dimension cards; one `h1`), and a partial type check with only missing-package errors remaining.
- No map, database, auth, scoring, fake data, fake scores, or fake reviews.

---

## [Stage 0] — 2026-10-05

### Added
- `PROJECT_BRAIN.md` — project constitution and rules for all agents.
- `PRODUCT_REQUIREMENTS.md` — proposed functional and non-functional requirements by stage.
- `ARCHITECTURE.md` — proposed stack, layering rules, folder structure, routing, geographic hierarchy, scoring and trust architecture, map and security architecture, dependency log.
- `DATABASE_SCHEMA.md` — conceptual entities, hierarchy, community-data trust fields, moderation entities, migration policy. No SQL.
- `DESIGN_SYSTEM.md` — proposed design tokens, Bangla typography guidance, component and state rules, trust presentation pattern.
- `DEVELOPMENT_ROADMAP.md` — stages 0–13, per-stage checklist, Stage 1 prep notes, risks, open human decisions.
- `CHANGELOG.md` — this file.

### Changed
- Nothing (greenfield; no pre-existing repository or documents were found).

### Removed
- Nothing.

### Notes
- Documentation only. No application code, no dependencies, no secrets, no data.
- Stage 1 has **not** been started and requires explicit instruction.
