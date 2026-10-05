# AREA DNA Bangladesh

> আপনার এলাকার আসল চিত্র, এক জায়গায়।

Read `PROJECT_BRAIN.md` first. Current stage: **Stage 1** (application foundation).

## Run

```bash
npm install
npm run dev        # http://localhost:3000
npm run typecheck
npm run lint
npm run build
```

Requires Node.js 20+. Stage 1 needs no environment variables (see `.env.example`).

## Layout

See `ARCHITECTURE.md` §3. Stage 1 uses `src/app`, `src/components/{ui,layout}`, `src/features/home`, `src/config`, `src/lib/i18n`.
