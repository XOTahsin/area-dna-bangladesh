# DEVELOPMENT_ROADMAP.md

**Current stage:** Stage 1 — code written, awaiting local install/build verification and human review.
**Rule:** Work one stage at a time. After each stage: report, explain verification, STOP. The next stage starts only on explicit instruction.
**Last updated:** October 2026

---

## Per-stage checklist (applies to every stage)

1. Inspect repository.
2. Read source-of-truth documents.
3. Understand what exists.
4. Smallest coherent change for this stage.
5. Preserve working features.
6. Test changed functionality.
7. TypeScript / lint / build clean.
8. Update `CHANGELOG.md`.
9. Update architecture docs if needed.
10. Explain what changed.
11. Explain how to verify.
12. STOP.

## Stages

| # | Stage | Goal | Status |
|---|---|---|---|
| 0 | Constitution | Source-of-truth docs, architecture, design system, roadmap | Done |
| 1 | App shell & navigation | Next.js + TS + Tailwind scaffold; layout; mobile nav; placeholder routes; loading/empty/error patterns; Bangla font | **Code complete; build unverified** |
| 2 | Map foundation | MapLibre in isolated `features/map`; Bangladesh overview; lazy init; tile key via env | Not started |
| 3 | Geographic hierarchy | Division→District→Unit→Area schema and structured, licensed geographic data; first migrations | Not started |
| 4 | Scoring architecture | Central scoring module, config, confidence/freshness rules, unit tests | Not started |
| 5 | Area profile page | `/areas/[district]/[area]`; score display; trust labels; metadata groundwork | Not started |
| 6 | Ratings & reviews | Auth, ratings, reviews, RLS, duplicate prevention | Not started |
| 7 | Reports & confidence | Community reports, aggregation, verification states | Not started |
| 8 | Comparison engine | Multi-area comparison | Not started |
| 9 | Personalized recommendations | Weight profiles, preference input | Not started |
| 10 | Advanced map intelligence | Score coloring, search, filters, nearby info | Not started |
| 11 | Admin & moderation | Queue, audit log, verification controls | Not started |
| 12 | Performance, SEO, a11y, security | Audits and hardening | Not started |
| 13 | Production readiness & launch | Monitoring, legal pages, launch checklist | Not started |

## Stage 1 — preparation notes (do not start without instruction)

Likely contents, subject to human decisions below:

- Scaffold Next.js App Router + TypeScript strict + Tailwind.
- Folder skeleton for only what Stage 1 uses (`components/ui`, `components/layout`, `config`, `lib/i18n`).
- Design tokens from `DESIGN_SYSTEM.md`.
- Pages: Home, Explore (placeholder), Compare (placeholder), About/Trust.
- Skeleton, EmptyState, ErrorState components.
- `.env.example` (no secrets).
- Likely dependencies: `next`, `react`, `react-dom`, `typescript`, `tailwindcss`, ESLint tooling. Anything else must be justified.
- Explicitly **not** in Stage 1: map, auth, database, real data.

## Cross-stage risks

| Risk | Mitigation |
|---|---|
| Community data read as fact | `TrustLabel` everywhere; verification states; methodology page |
| Cold-start (empty areas) | Designed partial-data and empty states; show "not enough data" rather than fake scores |
| Abuse / spam in UGC | Rate limits, duplicate rules, moderation before wide launch |
| Licensing of map tiles / boundary data | Decide and record before Stage 2 / Stage 3 |
| Bangla rendering on low-end devices | Test font early in Stage 1 |
| Scope creep | Staged process; docs as source of truth |

## Open human decisions

**Needed before Stage 1:**
1. Confirm Next.js / Tailwind versions policy (latest stable at scaffold time?).
2. Package manager (npm / pnpm / yarn).
3. Bangla font choice (see `DESIGN_SYSTEM.md`).
4. i18n approach: simple in-repo string dictionary vs a library (e.g. `next-intl`). Default proposal: dictionary until a library is justified.
5. Is a Git repo already initialised / which GitHub remote?

**Needed before Stage 2:**
6. Map tile provider and account (MapTiler or other); confirm terms for current use.

**Needed before Stage 3:**
7. Source and license for Bangladesh administrative boundaries and place names.
8. Whether ward/union level is modelled.
9. Initial pilot geography (e.g. one city) vs nationwide districts.
10. `geography` vs `geometry` in PostGIS.

**Needed before Stage 4:**
11. Per-category direction and default weights (human review; no invented data).
12. Confidence and freshness rules.

**Needed before Stage 6:**
13. Contributor identity policy (real name / alias / anonymous).
14. Moderation staffing plan (who reviews content?).

**Product / business (any time):**
15. Name, domain, branding.
16. Commercial intent (affects Vercel plan and tile licensing).
17. Privacy policy and terms before accepting UGC.

## Definition of done for Stage 0

- All seven source-of-truth documents exist and are consistent.
- No application code, no dependencies, no secrets, no fake data.
- Open decisions listed.
