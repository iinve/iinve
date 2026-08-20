# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

iinve is a Next.js (App Router) platform for generating personalized digital wedding invitations ("e-invites"), plus related products (e-walls for businesses, a template gallery, a couple-facing "dashboard"). The vast majority of the codebase is the invite product: one visual **Template** rendered with a per-couple **data object**.

## Commands

```bash
npm run dev      # start dev server (Turbopack, next dev) — check the terminal/console for the actual port; next.js falls back to 3001+ if 3000 is taken
npm run build    # production build, then runs postbuild (next-sitemap) automatically
npm run start    # serve the production build
npm run lint     # next lint (eslint-config-next/core-web-vitals, see eslint.config.mjs)
```

There is no test suite/framework configured (no jest/vitest, no `*.test.js`). Verify changes by running the dev server and checking the actual route in a browser — most work in this repo is on visual/animated components where type-checking alone won't catch regressions.

Node engine is pinned to `22.x` in package.json.

## Architecture: data-driven invites

Every invite is `Template(data)`:

1. **Data**: `src/DB/<Couple-Name>.js` exports a plain object with everything about one couple's event — names, `theme`/`default_color`/`highlight_color` (hex colors consumed as CSS custom properties), `images` (imported local assets), event/venue/date fields, `parents_data`, `bismillah`, background `music` path, etc. There is no database/CMS for this data — each couple is a hand-authored JS file.
2. **Route**: `src/app/invite/<slug>/page.js` (also `app/wedding/<slug>`, `app/reception/<slug>` for other product variants) imports the couple's data file and a Template via `next/dynamic`, and renders `<Template data={coupleData} />`. Route metadata (OG tags etc.) is hand-written per page.
3. **Template**: `src/Templates/<ThemeName>/` (e.g. `EnvelopeInvite`, `Eternity`, `Luna`, `CoffeePremium`, `Twilight`, `MinimalTemplate`, `BasicEternity`, `ReceptionKarthik`) is one full visual design — it composes many `Components` in a fixed order and threads `data` down as props. Adding a new couple almost never means writing new components; it means writing a new `DB/*.js` file and a route that pairs it with an existing Template. Building a genuinely new *look* means adding a new Template.
4. **Components**: `src/Components/**` (~70 components) are the reusable building blocks (HeroSlider, ParentsDetails, WeddingCountdown, EventDetails, ImageGallery, LocationSection, Footer, EnvelopeIntro, BismillahScreen, StarField, AnimatedBackground, …), each typically paired with a CSS Module (`*.module.scss`, occasionally `*.module.css`) for its styles. `src/ProUI/**` is a smaller set of lower-level, more generic UI primitives (Button, Card, Modal, Dropdown, Tabs, …) used across templates and the marketing site.

Per-couple theming flows through CSS custom properties: a Template sets `--theme-color` / `--content-color` / `--highlight-color` (from the data object) on its root wrapper via inline `style`, and every descendant component's SCSS module reads `var(--theme-color)` etc. rather than hardcoding colors.

## Import resolution

Imports use bare paths rooted at `src/` — e.g. `import HeroSlider from "Components/HeroSlider/HeroSlider"`, `import { jinshaAshimData } from "DB/Jinsha-Ashim"`, `import { getHeading } from "utils/greetingUtils"` — with no relative `./` and no `@/` prefix. This works because `jsconfig.json` sets `compilerOptions.baseUrl` to `./src`, which Next.js honors for actual module resolution (not just editor intellisense), for both entries with explicit `paths` aliases (`@/data/*`, `@/styles/*`) and plain baseUrl-relative lookups.

Note: `next.config.mjs`'s `webpack()` function references an undefined `path` and the config object is never exported (`module.exports`/`export default` is missing), so its `resolve.modules` tweak, `images.remotePatterns`, and the CSP/CORS `headers()` are **not actually applied** — confirmed by the dev server not sending a `Content-Security-Policy` header. Don't assume those headers or webpack aliases are live; if you need them, the file needs its export fixed.

## Styling

- Global: `src/styles/global.css` imports Tailwind v4 (`@import "tailwindcss"`), HeroUI styles, and a large block of local `@font-face` declarations (Afacad, Fleur De Leah, Helena Bloom, Goodnewsj, Uroob, Gauri, Malayalam script fonts, etc. — served from `public/fonts/`) plus a few global utility classes (`.fleur`, `.helena`, `.baloo-chettan`, …).
- Per-component: CSS Modules (mostly `.module.scss`, via `sass`) scoped to each Component/Template, using nested selectors and the shared `--theme-color`/`--content-color`/`--highlight-color` variables.
- Animation: `framer-motion` is used pervasively for entrance/scroll/gesture animation (not CSS `@keyframes`, except for a few always-on ambient effects like shimmer/glow loops written as plain CSS `@keyframes`).
- Some folders have both a `.module.scss` and a stale, no-longer-imported `.module.css` (leftover compiled output checked into source, e.g. `MeshMasonrySpotlight`) — check the component's actual `import Style from "./X.module.scss"` line rather than assuming the `.css` file is live.

## Multi-phase reveal components

Several intro/hero components (`EnvelopeIntro`, `HeroSlider`, formerly `BismillahScreen`) are driven by an explicit string-based phase state machine (`useState("sealed")` → `"breaking"` → `"opening"` → …) rather than boolean flags, with `onAnimationComplete` callbacks on the relevant `motion.*` element advancing the phase. When editing these, trace the phase machine end-to-end (all branches of every `phase ===` check) rather than editing one animation in isolation — the phases are tightly sequenced and a change to one duration/delay shifts the felt timing of the whole sequence.

## Other product surfaces

- `src/app/e-invite`, `src/app/e-wall`, `src/app/templates` — marketing/gallery pages for the wider product (not couple-specific).
- `src/app/dashboard/<slug>` — a per-couple dashboard route (RSVP/guest-management style surface), separate from the public invite page for the same couple.
- `src/app/api/notion` — proxies form submissions into a Notion database (`NOTION_TOKEN`, `NOTION_DATABASE_ID` env vars).
- `src/app/api/og` — dynamic OG image generation.
