# PRODUCT_REQUIREMENTS.md

**Status:** Proposed. Nothing here is implemented yet. Requirements are tagged with the roadmap stage that is planned to deliver them.
**Last updated:** October 2026

---

## 1. Problem statement (proposed)

People choosing where to live, study, or work in Bangladesh often rely on word of mouth and scattered posts. AREA DNA proposes to bring structured, transparent, community-informed area information into one place — without presenting unverified opinions as fact.

> Note: no market research has been performed. Target-user assumptions below are hypotheses to validate, not findings.

## 2. Hypothesized user groups

| Group | Example need |
|---|---|
| Students | Student-friendly areas, cheap rent, internet, transport to campus |
| Job seekers / workers | Commute, rent, safety, food |
| Families | Healthcare, education, safety, traffic |
| Movers between cities | Fast overview of an unfamiliar area |
| Contributors | Share what they know about their own area |

These need validation with real users before Stage 9 (personalization).

## 3. Functional requirements

Priority: **P0** = core, **P1** = important, **P2** = later.

### 3.1 Application shell — Stage 1 (P0)
- Bengali-first layout with mobile-first navigation.
- Routes for Home, Explore (map placeholder), Compare (placeholder), About/Trust.
- Designed loading, empty, and error states.

### 3.2 Map — Stage 2 (P0), Stage 10 (P1)
- Bangladesh overview map (MapLibre GL JS).
- Lazy-initialized; map code isolated from unrelated UI.
- Later: district/city/area selection, score-based coloring, markers, popups, search, filters, nearby info.

### 3.3 Geographic hierarchy — Stage 3 (P0)
- Structured hierarchy: Division → District → Upazila/City Corporation → Area (see `DATABASE_SCHEMA.md`).
- Geographic data from structured sources, not hard-coded in components.

### 3.4 Scoring — Stage 4 (P0)
- Ten initial categories, each eventually scored 0–100.
- Central scoring module. Supports default score, category score, confidence, freshness, personalized score.

### 3.5 Area profile — Stage 5 (P0)
- Overall score, category scores, strengths/weaknesses.
- Every data point shows source, confidence, report count, last-updated.
- Meaningful, shareable URLs (e.g. `/areas/chattogram/gec-circle`).

### 3.6 Community ratings & reviews — Stage 6 (P0)
- Authenticated users can rate categories and write reviews.
- Duplicate-submission prevention, moderation hooks, timestamps.

### 3.7 Community reports & confidence — Stage 7 (P0)
- Reports (e.g. rent observations) aggregate into ranges with report counts.
- Confidence and verification state computed by defined rules.

### 3.8 Comparison — Stage 8 (P1)
- Compare multiple areas side by side across categories.

### 3.9 Personalized recommendations — Stage 9 (P1)
- User-profile-weighted scores (budget, lifestyle, study/work needs).

### 3.10 Photos — after Stage 7 (P2)
- Photo contributions via Supabase Storage with moderation.

### 3.11 Admin & moderation — Stage 11 (P0 before public launch of UGC)
- Moderation queue, admin action log, removal and verification state changes.

## 4. Non-functional requirements

- **Performance:** no over-fetching; lazy-load expensive components; optimized images; map initialized only when needed.
- **Security:** env-based secrets; RLS on exposed tables; server-side validation.
- **Accessibility:** to be audited in Stage 12; semantic HTML and sufficient contrast from Stage 1.
- **SEO:** routing designed now to allow indexable area pages, metadata, Open Graph, and Bengali SEO later (Stage 12).
- **Localization:** Bengali primary; English where natural. i18n approach is an open decision.
- **Resilience:** product must remain understandable with incomplete data.

## 5. Data trust requirements

Each displayed value should be able to show:

- source
- confidence
- timestamp
- number of reports
- verification state

Example presentation (illustrative format only, not real data):

```
Estimated Rent
৳18,000–৳25,000
Based on 31 community reports
Last updated: October 2026
```

## 6. Out of scope for Stage 0 and Stage 1

Map, authentication, database tables, user-generated content, recommendations, any real or fake data.

## 7. Open product questions

See `DEVELOPMENT_ROADMAP.md` → "Open human decisions".
