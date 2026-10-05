# PROJECT_BRAIN.md — AREA DNA Bangladesh

> Read this file first. It is the project constitution and the rulebook for every human and AI agent working in this repository.

**Product:** AREA DNA Bangladesh
**Tagline:** "আপনার এলাকার আসল চিত্র, এক জায়গায়।"
**Status:** Stage 0 complete (documentation only). No application code exists yet.
**Last updated:** October 2026

---

## 1. What this product is

A Bangladesh-focused geographic intelligence and community data platform. A user explores Bangladesh on a map, selects a district / city / area, and sees that area's "DNA profile": category scores, strengths and weaknesses, and community-reported information, each shown with its source, confidence, and freshness.

Planned user capabilities (all **future**, delivered stage by stage):

1. Explore Bangladesh on an interactive map.
2. Select a district / city / area.
3. View the area's DNA profile.
4. See strengths and weaknesses.
5. See category-level scores.
6. See community-reported information.
7. Compare multiple areas.
8. Get personalized recommendations (lifestyle, budget, study/work, preferences).
9. Contribute ratings, reports, observations, and eventually photos.
10. Discover useful nearby services.

## 2. Principles (non-negotiable)

1. Bangladesh-first.
2. Mobile-first.
3. Data-driven.
4. Map-centric.
5. Community-powered.
6. Trust and transparency first.
7. Minimal but premium visual design.
8. Fast, smooth interaction.
9. Bengali-first UI; English where technically natural.
10. Scalability considered from day one.

## 3. Rules for all agents

### 3.1 Process rules
- **Staged work only.** Never implement more than the current stage. The current stage is recorded in `DEVELOPMENT_ROADMAP.md`.
- Every stage follows this loop: inspect repo → read source-of-truth docs → understand what exists → smallest coherent change → preserve working features → test → check TypeScript/build/lint → update `CHANGELOG.md` → update architecture docs if needed → explain what changed → explain how to verify → **STOP**.
- Never auto-continue to the next stage. Wait for an explicit instruction.
- Do not silently rewrite the project. Do not remove existing features unless explicitly told to.
- Prefer additive, backward-compatible changes.
- If a request conflicts with the architecture, **explain the conflict first**, then wait for a decision.
- Do not add dependencies without a written justification (in the stage report and `ARCHITECTURE.md` dependency log).

### 3.2 Source-of-truth documents
`PROJECT_BRAIN.md`, `PRODUCT_REQUIREMENTS.md`, `ARCHITECTURE.md`, `DATABASE_SCHEMA.md`, `DESIGN_SYSTEM.md`, `DEVELOPMENT_ROADMAP.md`, `CHANGELOG.md`.

If code and docs disagree, stop and report it. Do not guess which is right.

### 3.3 Code rules
- Next.js App Router + TypeScript (strict). Tailwind CSS.
- Modular: UI, business logic, DB access, geo logic, scoring logic, validation, auth, admin/moderation, config, and seed data live in separate modules.
- No giant files. No everything-in-one-page components. Reusable components. Clear names.
- Score formulas live **only** in the central scoring module. Never in UI.
- Map logic is isolated from unrelated UI. Never hard-code hundreds of coordinates in React components.
- No fake production data. Any development/demo data must be clearly labeled and kept separate from real data.

### 3.4 Security rules
- No secrets in the repo. Use environment variables.
- Never expose service-role keys, private API keys, DB passwords, or server secrets to client code. Only `NEXT_PUBLIC_*` variables may reach the browser, and only for values safe to be public.
- Never trust client-side validation alone; validate on the server.
- Every exposed Supabase table needs Row Level Security considered before it ships.

### 3.5 Data-trust rules
- Community-submitted information is **never** presented as verified fact.
- Every displayed data point carries (where applicable): source, confidence, timestamp, number of reports, verification state.
- Planned verification states: `UNVERIFIED`, `COMMUNITY_REPORTED`, `PARTIALLY_VERIFIED`, `VERIFIED`, `OUTDATED`, `REMOVED`.
- UI must stay understandable when data is missing or incomplete.

### 3.6 Honesty rules for writing
- Do not invent research data or statistics.
- Do not claim the product is unique or the first of its kind.
- Use "planned", "proposed", or "future" for anything not yet built.

## 4. Current stage

**Stage 0 — Project constitution** (complete, awaiting human review).
Next: Stage 1 (application shell and navigation) — **not started; requires explicit instruction.**

## 5. Open decisions

Tracked in `DEVELOPMENT_ROADMAP.md` → "Open human decisions".
