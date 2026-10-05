# ARCHITECTURE.md

**Status:** Proposed architecture. No code exists yet. Update this file whenever structure changes.
**Last updated:** October 2026

---

## 1. Technology direction

| Concern | Choice | Status |
|---|---|---|
| Framework | Next.js (App Router) | Planned (Stage 1) |
| Language | TypeScript (strict) | Planned (Stage 1) |
| Styling | Tailwind CSS | Planned (Stage 1) |
| Database | Supabase PostgreSQL | Planned (Stage 3+) |
| Geospatial | PostGIS | Planned (Stage 3+) |
| Auth | Supabase Auth | Planned (Stage 6, when needed) |
| Storage | Supabase Storage | Planned (post Stage 7) |
| Map | MapLibre GL JS | Planned (Stage 2) |
| Map tiles | MapTiler (or another properly licensed provider) for prototype | Open decision |
| Hosting | Vercel (MVP / non-commercial) | Planned |
| VCS | Git + GitHub | Planned |

Check tile-provider and Vercel plan terms before any commercial use.

## 2. Layering rules

Dependencies flow **downward only**:

```
app/ (routes, layouts)            ← thin; composes features
  └─ features/ (UI + feature logic per domain)
       └─ components/ui (generic primitives)
       └─ lib/ (domain logic: scoring, geo, validation, db access)
            └─ config/ , types/
```

- `app/` pages stay thin: fetch via `lib/db`, hand to feature components.
- `components/ui` knows nothing about areas, scores, or maps.
- `lib/scoring` knows nothing about React or the database.
- `lib/geo` knows nothing about React.
- `lib/db` is the only layer that talks to Supabase.
- Map code lives in `features/map` and is the only place importing `maplibre-gl`.

## 3. Proposed folder structure

Created progressively — **not** all at once. Stage 1 creates only what it needs.

```
area-dna-bangladesh/
├─ docs/                      # (optional) extra design notes
├─ PROJECT_BRAIN.md  PRODUCT_REQUIREMENTS.md  ARCHITECTURE.md
├─ DATABASE_SCHEMA.md  DESIGN_SYSTEM.md  DEVELOPMENT_ROADMAP.md  CHANGELOG.md
├─ .env.example               # variable names only, never values
├─ public/
├─ supabase/
│  ├─ migrations/             # versioned SQL
│  └─ seed/                   # labeled seed data, kept separate
├─ src/
│  ├─ app/
│  │  ├─ (public)/            # home, explore, compare, about
│  │  ├─ areas/
│  │  │  └─ [district]/[area]/page.tsx   # shape reserved for SEO URLs
│  │  ├─ admin/               # Stage 11
│  │  └─ api/                 # route handlers when needed
│  ├─ components/
│  │  ├─ ui/                  # Button, Card, Badge, Skeleton, EmptyState, ErrorState…
│  │  └─ layout/              # Header, MobileNav, Footer, PageShell
│  ├─ features/
│  │  ├─ map/                 # MapLibre wrapper, layers, controls, hooks
│  │  ├─ area-profile/        # profile sections, score cards, trust labels
│  │  ├─ reviews/             # Stage 6
│  │  ├─ reports/             # Stage 7
│  │  ├─ compare/             # Stage 8
│  │  ├─ recommendations/     # Stage 9
│  │  └─ moderation/          # Stage 11
│  ├─ lib/
│  │  ├─ db/                  # Supabase clients + typed queries
│  │  ├─ geo/                 # hierarchy helpers, bounds, slugs, GeoJSON utils
│  │  ├─ scoring/             # central scoring engine
│  │  ├─ validation/          # schemas shared client/server
│  │  ├─ auth/                # session helpers
│  │  ├─ i18n/                # Bangla/English strings + formatters (bn digits, ৳)
│  │  └─ utils/
│  ├─ config/                 # categories, weights, feature flags, site config
│  ├─ types/                  # shared domain types
│  └─ styles/                 # tokens, globals
└─ tests/
```

## 4. Routing (reserved for SEO)

| Route | Purpose | Stage |
|---|---|---|
| `/` | Home | 1 |
| `/explore` | Map exploration | 2 |
| `/areas/[district]/[area]` | Area profile, e.g. `/areas/chattogram/gec-circle` | 5 |
| `/compare` | Comparison | 8 |
| `/about` | About, methodology, trust | 1 |
| `/admin/*` | Moderation | 11 |

Slugs: lowercase ASCII, stable, unique within parent. Bengali names stored separately. Slug-change policy (redirects) is an open decision.

## 5. Geographic hierarchy (proposed)

```
Country (Bangladesh)
 └─ Division (বিভাগ)
     └─ District (জেলা)
         └─ Local-government unit: City Corporation / Upazila / Paurashava
             └─ Area (এলাকা)   ← e.g. GEC Circle, Uttara, Zindabazar
```

Open question: whether to model wards/unions as an intermediate level. Decide in Stage 3 before schema work.

Areas are **community-meaningful places**, which may not match administrative boundaries. Model them with a parent link plus their own geometry (point first, polygon later).

## 6. Scoring architecture (proposed)

Lives only in `src/lib/scoring`. Pure functions, no I/O.

**Inputs:** category inputs (rating aggregates, report aggregates, statistics) with sample size and timestamps; weight profile.
**Outputs:** per-category `{ score 0–100 | null, confidence, freshness, sampleSize }` and an overall result.

```
overall = Σ(weight_c × score_c) / Σ(weight_c)   over categories with score != null
```

Design requirements:

- **Default weights** in `config/`, versioned.
- **Personalized weights** are just another weight profile passed in; same function.
- **Missing data** → `null`, never a fake zero. Overall reports how many categories contributed.
- **Confidence** derived from sample size, source mix, and verification state (rules defined in Stage 4).
- **Freshness** derived from timestamps with a decay rule (defined in Stage 4).
- Scoring version stamped on stored results to allow recalculation.
- Fully unit-tested.

Initial categories: Transport, Food, Cost/Rent, Education, Healthcare, Internet, Safety, Traffic, Lifestyle, Student Friendliness. Whether higher is always "better" (e.g. Traffic, Cost) is defined per category in config in Stage 4.

## 7. Data trust model (proposed)

Every user-derived datum carries: `source`, `confidence`, `created_at / updated_at`, `report_count`, `verification_state`.

Verification states: `UNVERIFIED → COMMUNITY_REPORTED → PARTIALLY_VERIFIED → VERIFIED`, plus `OUTDATED`, `REMOVED`. Transitions are explicit, logged, and (for upward moves past `COMMUNITY_REPORTED`) admin- or rule-driven.

UI shows the trust label wherever the datum appears (shared `TrustLabel` component).

## 8. Map architecture (proposed)

- `features/map` exposes a small interface (e.g. `<AreaMap />` plus hooks); callers don't touch MapLibre directly.
- Lazy-loaded via dynamic import; not initialized until the map is visible.
- Geometry/coordinates come from data sources (GeoJSON / PostGIS), never literals in components.
- Style and tile-provider key read from env (`NEXT_PUBLIC_MAP_*`); tile provider swappable.

## 9. Security architecture (proposed)

- Secrets only in env vars; `.env.local` git-ignored; `.env.example` documents names.
- Service-role key used **only** in server-only modules; never imported from client components.
- RLS enabled on every exposed table; policies written in migrations and reviewed.
- Server-side validation with shared schemas.
- Abuse controls for UGC: rate limiting, duplicate detection, moderation queue.

## 10. Performance guidelines

- Query only needed columns; paginate lists.
- Server Components by default; client components only where interactivity requires.
- Dynamic-import heavy modules (map).
- `next/image` for images.
- Dependency additions logged below.

## 11. Dependency log

| Dependency | Stage | Justification |
|---|---|---|
| _(none yet)_ | 0 | Stage 0 is documentation only |
| next, react, react-dom | 1 | Framework (App Router) |
| typescript, @types/node, @types/react, @types/react-dom | 1 | Strict typing |
| tailwindcss, @tailwindcss/postcss | 1 | Styling per architecture |
| eslint, eslint-config-next | 1 | Lint quality gate |

Stage 1 added no UI, icon, map, or state libraries. Icons are inline SVG in `components/ui/Icon.tsx`.

## 12. Quality gates (every stage)

`tsc --noEmit` clean · lint clean · build succeeds · changed behavior manually verified · `CHANGELOG.md` updated.
