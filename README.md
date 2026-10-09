# Mint AMC Marketing Site

Production marketing website for **Mint AMC** (www.mintamc.com), a division of CONZEX GLOBAL PRIVATE LIMITED.

## Design system lock (uidrac)

This project's design system is intentionally locked to `~/Projects/uidrac` (`apps/web`). Any theme change, component update, or design token change must originate in uidrac first, then be propagated here. **Never edit design tokens or component styles directly in mint-amc.** If a change is needed, make it in uidrac, then re-sync.

Reference implementation:

- Tailwind theme: Dell console palette (`dell-blue`, `bg-body`, `border-card`, etc.)
- Typography: Open Sans (Google Fonts import in `globals.css`)
- Icons: `lucide-react`
- Layout: 52px `dell-blue` sticky header, `PageHeroBand`, `PAGE_CONTAINER_CLASS`, card/table patterns from uidrac marketing pages

## Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS 3.4

## Scripts

```bash
npm install
npm run dev    # http://localhost:3001
npm run build
npm run start
```

## Content

All copy lives under `src/content/` as `{{PLACEHOLDER}}` tokens. See `CONTENT_TODO.md` for the full replacement checklist.

## Pages

Home, Services (+ 17 detail routes), Solutions, Pricing (tiers, tables, FAQ), About, Why Mint AMC, Resources, Contact, Privacy, Terms, SLA, 404.
