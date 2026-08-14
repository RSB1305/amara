# AMARA Lodging — website

Static Astro site for AMARA Lodging: six holiday rentals in Frigiliana, Nerja and
Tarifa, published in five languages across roughly 470 pages.

The site is static-first by design. There is no server runtime, no hydration in the
production output, and no client-side framework on the page. Booking, availability
and checkout live behind a separate external boundary (see below).

## Setup

Requires Node 24 (`.nvmrc` pins the version).

```bash
npm install
npm run dev
```

The dev server runs on port 4321.

## Everyday commands

| Command | What it does |
|---|---|
| `npm run dev` | Dev server, including the internal tools at `/tools/*` |
| `npm run typecheck` | Astro + TypeScript check. Fast; run this after any edit. |
| `npm run check` | Typecheck plus the slug, fallback and image policy checks |
| `npm run build` | Production build. Runs `npm run check` first and fails on any error. |
| `npm run preview` | Serve the built `dist/` locally |

A production build needs `PUBLIC_SITE_URL`:

```bash
PUBLIC_SITE_URL=https://amara-lodging.es npm run build
```

The build aborts without it rather than emitting wrong canonical URLs.

## How the code is organised

```
src/
  pages/           Thin route wrappers. One file per public URL.
  pages/_tools/    Internal tools. Dev-only; never in the production build.
  page-families/   The actual page implementations, grouped by page job.
  layouts/         Document shells (BaseLayout, LocationAuthorityLayout, …)
  components/      Shared UI. Navigation and Footer have site-wide reach.
  content/         Authored copy and page data, one module per page family.
  lib/             Resolvers and contracts (links, routes, SEO, images, booking)
  assets/images/   Images processed by the build
  styles/          global.css and the design tokens
scripts/           Policy checks that run before and after the build
docs/              Architecture and governance documents (see AGENTS.md)
```

The flow for any page is:

**route wrapper** (`src/pages/…`) → **page family** (`src/page-families/…`) →
**content module** (`src/content/…`) + **resolvers** (`src/lib/…`) →
**layout and components**.

Dependencies mostly point downward: page families use `lib` and `content`, and
`content` uses `lib`. Two documented exceptions run the other way —
`lib/seo/resolve-structured-data.ts` reads `content/trustLabels` and
`content/stayCollectionLabels`, and `lib/tarifa/tarifaAuthoritySubnav.ts` imports a
content type. Treat those as the exceptions they are; do not add more.

Within `lib`, `linkRegistry` builds on `routeOwnership`, so `routeOwnership` must
not import back from the registry — that one is a hard cycle, not a preference.

## Internal links

Never hardcode an internal URL. Links resolve through the registry:

```ts
import { resolveLink, resolveOptionalLink, type LinkToken } from '../lib/linkResolver';

// Required link — throws at build time if it cannot resolve.
const href = resolveLink('location_nerja', lang, { context: 'Nerja geography' });

// Optional link — returns null so the surface can omit the entry.
const maybe = resolveOptionalLink('nerja_weather', lang, { suppressMissing: true });
```

`LinkToken` is derived from `linkRegistry.ts`, so an invalid token is a compile
error. Any field that stores a token should be typed `LinkToken`, not `string`.

## Adding a route or page family

1. Search the repository first for an existing page covering the same topic and
   search intent. Duplicate intent is the failure mode here, not missing pages.
2. Add the token and localized paths to `src/lib/linkRegistry.ts`.
3. Add the slug to `src/lib/routeOwnership.ts` / the canonical slug list.
4. Create the page family under `src/page-families/<family>/`, reusing an
   existing layout and the shared components.
5. Put the copy in a content module under `src/content/`, and annotate the
   export with its interface so the declared shape is actually enforced.
6. Add the route wrappers: `src/pages/<slug>.astro` and
   `src/pages/[lang]/<slug>.astro`.
7. Run `npm run check`.

Spanish is unprefixed; `de`, `en`, `nl` and `sv` are language-prefixed. All five
locales must carry the same facts and required information — see the localization
rules in `AGENTS.md`.

## Quality gates

The repository has a focused automated test suite plus the build gate:

- `npm run typecheck` — the primary safety net for everyday edits
- `npm run typecheck:tools` — strict checking for the dev-only internal tools
- `npm run test:contracts` — booking, localization, route and link contracts
- `npm run test:browser` — real-browser smoke tests for interactive behaviour
- `check-public-slug-policy` — slug collisions, duplicates, redirect chains and loops
- `check-fallback-policy` — restricts `fallbackLang` to approved files
- `check-image-policy` — responsive image delivery, in source and in `dist`
- `postbuild.mjs` — structured data audit and SEO title policy assertions

Because `prebuild` runs the production typecheck and policy checks, a commit that
breaks any of them fails the build. `.github/workflows/check.yml` additionally runs
the tools typecheck, both test layers and `npm run build` on every push and pull
request, so a failure is visible before it reaches the deployment path.

Locally: run `npm run check` for the fast production preflight, `npm test` for the
focused automated suite, and `npm run build` for rendering and postbuild audits.
CI runs all three scopes on a clean install.

The internal tools are excluded from `npm run typecheck` because they are dev-only
surfaces with their own conventions. `npm run typecheck:tools` checks them against
the same strict settings and currently passes with zero errors. It remains separate
from the fast production check, but CI enforces it on every push and pull request.

## Internal tools

`/tools/component-library`, `/tools/styleguide`, `/tools/design-lab`,
`/tools/converter` and `/tools/guest-welcome` are internal surfaces. They live in
`src/pages/_tools/`, which Astro's file router ignores, and are mounted as routes
only in the dev server. To include them in a local QA build:

```bash
AMARA_INCLUDE_INTERNAL_TOOLS=true PUBLIC_SITE_URL=https://amara-lodging.es npm run build
```

They are excluded from `npm run typecheck`; run `npm run typecheck:tools` after
changing one.

## Booking boundary

Booking, availability and checkout are handled by an external provider. All
booking URLs are built in `src/lib/directBooking.ts`. Do not hardcode booking
hosts anywhere else and do not point a booking CTA at an OTA. The contract is
owned by `AMARA-BOOKING-ARCHITECTURE.md`.

## Deployment

Cloudflare Pages builds from the repository and serves `dist/`.
`PUBLIC_SITE_URL` must be set in the Production environment. Redirects live in
`astro.config.mjs` and in the Cloudflare redirect list, both covered by the slug
policy check.

## Working conventions

`AGENTS.md` is the operating contract for day-to-day work: change classes, what
counts as a protected contract, and when to consult `docs/AMARA_REGISTER.md`.
Read it before making structural changes.
