# DATABASE_SCHEMA.md

**Status:** CONCEPTUAL ONLY. No tables exist. No SQL has been written. Schema is designed progressively; each stage adds only the tables it needs, via versioned migrations.
**Last updated:** October 2026

---

## 1. Principles

- Postgres (Supabase) + PostGIS. Geometry type `geography` or `geometry(…, 4326)` — decide in Stage 3.
- UUID primary keys; `created_at` / `updated_at` on every table.
- Stable ASCII `slug` plus separate `name_bn` / `name_en`.
- Soft-delete / `REMOVED` state for user content; avoid hard deletes of moderated data.
- RLS enabled on every table exposed through the Supabase API.
- Every user-generated table considers: moderation state, abuse prevention, duplicate prevention, timestamps, confidence, verification state, privacy, edit history where needed.
- Community data never auto-promotes to "verified".

## 2. Entity overview and planned stage

| Entity | Purpose | Stage |
|---|---|---|
| `divisions` | Top administrative level | 3 |
| `districts` | Districts, linked to division | 3 |
| `cities` / local-government units | City corporations, upazilas, paurashavas | 3 |
| `areas` | Community-meaningful places inside a district/unit | 3 |
| `area_categories` | The ten scoring categories (reference) | 4 |
| `area_scores` | Stored computed scores per area × category × scoring version | 4 |
| `area_statistics` | Non-community or imported numeric stats, with source | 4–5 |
| `users` / `profiles` | Supabase auth users + public profile | 6 |
| `area_ratings` | Per-user category ratings | 6 |
| `area_reviews` | Free-text reviews | 6 |
| `area_reports` | Structured community observations (e.g. rent) | 7 |
| `area_images` | Photos with moderation state | post 7 |
| `saved_areas` | User bookmarks | 8–9 |
| `comparisons` | Saved comparisons | 8 |
| `moderation_queue` | Items awaiting review | 11 |
| `admin_actions` | Immutable audit log | 11 |

> `divisions` is an addition to the original entity list; included because the proposed hierarchy has a division level. Confirm in Stage 3.

## 3. Geographic hierarchy (conceptual)

```
divisions 1─* districts 1─* local units (city corp / upazila / paurashava) 1─* areas
```

Conceptual columns (not final):

- **all levels:** `id`, `slug`, `name_bn`, `name_en`, `parent_id`, `geometry` (nullable at first), `created_at`, `updated_at`
- **areas additionally:** `centroid` (point), optional `boundary` (polygon, later), `status` (e.g. `DRAFT | ACTIVE | HIDDEN`), `source` of the geographic record

Constraints to define in Stage 3: slug unique within parent; cascading rules; whether an area may belong to more than one local unit.

Geographic seed data must come from a properly licensed source with attribution recorded. Source is an open decision.

## 4. Scoring entities (conceptual)

- `area_categories`: `key` (e.g. `transport`), `name_bn`, `name_en`, `direction` (higher-is-better or lower-is-better), `default_weight`, `sort_order`.
- `area_scores`: `area_id`, `category_id`, `score` (0–100, nullable), `confidence`, `sample_size`, `freshness_at`, `scoring_version`, `computed_at`. Unique on (area, category, scoring_version).
- Overall score: computed by the central scoring module; may be cached, never hand-edited.

Personalized scores are computed on request from the same inputs with a user weight profile; not stored initially.

## 5. Community data entities (conceptual)

Shared trust fields on `area_ratings`, `area_reviews`, `area_reports`, `area_images`:

| Field | Meaning |
|---|---|
| `user_id` | Author (privacy: public display name policy TBD) |
| `area_id` | Target |
| `verification_state` | `UNVERIFIED`, `COMMUNITY_REPORTED`, `PARTIALLY_VERIFIED`, `VERIFIED`, `OUTDATED`, `REMOVED` |
| `moderation_state` | e.g. `PENDING`, `APPROVED`, `REJECTED` |
| `confidence` | Computed 0–1 or banded; rules defined in Stage 7 |
| `source` | e.g. `COMMUNITY`, `IMPORTED`, `ADMIN` |
| `observed_at` | When the author says it applied |
| `created_at` / `updated_at` | Timestamps |

Abuse and duplicate prevention (to design in Stage 6/7):

- One active rating per user × area × category (edit, don't duplicate).
- Rate limits per user and per IP/device (server-side).
- Report de-duplication window.
- Edit history table where edits could change public meaning.
- Account-age or trust gating for high-impact reports — open decision.

Privacy: no precise personal location stored with a report unless explicitly required; strip image EXIF location on upload (Stage for images).

## 6. Moderation entities (Stage 11, conceptual)

- `moderation_queue`: `target_type`, `target_id`, `reason`, `status`, `assigned_to`, timestamps.
- `admin_actions`: append-only; `admin_id`, `action`, `target_type`, `target_id`, `before/after`, `created_at`.

## 7. Security notes

- RLS policy drafts written alongside each migration and reviewed before merge.
- Public read: approved, non-removed content only.
- Writes: authenticated user, own rows only, server-validated.
- Admin actions: role-checked on the server; service-role key never reaches the client.

## 8. Migration policy

- All schema changes via versioned files in `supabase/migrations/`.
- Additive and backward-compatible where possible.
- Seed data in `supabase/seed/`, labeled as development/demo vs real.
- Update this document in the same change as any migration.

## 9. Open schema questions

1. Ward/union level needed?
2. `geography` vs `geometry`?
3. Source and license for official boundaries.
4. Area ↔ multiple parents?
5. Public identity of contributors (real name, alias, anonymous)?
6. Trust gating rules for new accounts.
