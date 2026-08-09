# AMARA Technical Stabilization Handover — 2026-08-09

Status: COMPLETED

## 1. Scope and baseline

Audit baseline:

`f0652c8b86b29c470dc027eeaeceed69ffe09f68` — `Add Romantic Hideaways main landmark`

Final production baseline:

`fe565a23086e34a5cf92638fc9dcc502536ea8fd` — `Use automatic stylesheet inlining`

The stabilization work intentionally preserved:

- URL and slug infrastructure
- Link Registry and resolver
- canonical and hreflang system
- redirect governance
- structured data
- image pipeline
- booking architecture
- Guest Guide shell
- mobile navigation architecture

`src/pages/tools/design-lab/` was explicitly excluded from all work.

## 2. ApartmentCard image scope fix

Commit:

`bce01b793a353176b1b1ab12690213760bdfb43c` — `Fix apartment card image scope boundary`

Astro scoped CSS did not cross the `AmaraImage` component boundary, so apartment images missed their sizing, `object-fit`, transition and hover behavior, leaving a visible grey or empty strip below them. The fix crossed the boundary locally in `ApartmentCard` and kept `AmaraImage` unchanged. Image gaps became `0px` at 375, 966 and 1440px; `object-fit: cover` and the `scale(1.05)` hover were restored. All five Romantic Hideaways languages passed.

## 3. Canonical footer contract

Commit:

`5913944215532a62bb07b762feb036dcadc3acf2` — `Restore canonical footer contract`

Property Sale previously suppressed `FooterCore` while rendering an empty `FooterMinimal` band, leaving the indexed page without the normal legal/footer route. `FooterCore` now always renders on `BaseLayout` pages. The highlight contract is:

- `undefined` → defaults
- empty array → no `FooterMinimal`
- non-empty array → custom `FooterMinimal`

The obsolete `footerVariant` was removed without a replacement variant. All five Property Sale language routes passed.

## 4. Desktop navigation disclosure contract

Commit:

`a9b12461bb7e953c33b1c56601da8ea1eef03043` — `Complete desktop navigation disclosure behavior`

Visible state and `aria-expanded` previously had competing CSS and JavaScript controllers. Explicit state now synchronizes visibility, `aria-expanded` and dropdown `inert`. Enter, Space, click, hover, Escape and breakpoint reset passed; only one desktop dropdown may be open. Mobile navigation remained unchanged, and all 774 `aria-controls` references resolved exactly once.

## 5. Location Authority landmarks

Commit:

`e9c0c451e8a0e8f717df32b39a220750961718e1` — `Restore location authority banner landmark`

The baseline contained 406 generated HTML files, 35 redirect stubs and 371 real pages; 110 pages had Navigation inside `<main>`. The solution introduced a named `navigation` slot before the layout-owned `<main>` and migrated all 21 true consumers atomically.

Results:

- header-inside-main: `110 → 0`
- all 191 pages containing shared Navigation now place it outside `<main>`
- zero real pages have zero or multiple `<main>` elements
- all 22 affected routes × 5 languages passed
- visual output remained unchanged

## 6. Localized skip link

Commit:

`9b0ed067ac9cfab894d3ba9e2169689d5c3c8845` — `Add localized main-content skip link`

One static skip link was added to `BaseLayout`, targeting `#am-main-content` without JavaScript. It is localized in EN, DE, ES, NL and SV. All 191 `BaseLayout` pages have 191 matching targets, with zero missing or duplicate targets. The 180 Guest Guide pages were intentionally unchanged, and mobile inert behavior remained correct.

## 7. CSS inlining benchmark and decision

Three disposable builds compared `always`, `auto` and `never` across this representative journey:

Homepage → Frigiliana Location → Comfort & Amenities → Romantic Hideaways

| Metric | always | auto | never |
| --- | ---: | ---: | ---: |
| Combined Brotli four-page payload | 127.5 KB | **65.2 KB** | 65.7 KB |
| Warm journey transferred | 140.9 KB | **73.7 KB** | 75.8 KB |
| Distinct reusable CSS files | 0 | **2** | 8 |

Cold mobile homepage:

- `always`: FCP 442 ms / LCP 1,086 ms
- `auto`: FCP 678 ms / LCP 778 ms
- `never`: FCP 670 ms / LCP 774 ms

Warm mobile pages:

- `always`: FCP 446–456 ms / LCP 544–690 ms
- `auto`: **FCP 328–362 ms / LCP 422–472 ms**
- `never`: FCP 470–474 ms / LCP 616–646 ms

Decision:

`inlineStylesheets: 'auto'`

Commit:

`fe565a23086e34a5cf92638fc9dcc502536ea8fd` — `Use automatic stylesheet inlining`

The decision delivered approximately 48% lower HTML/CSS transfer over the representative multi-page journey, cached and reused two shared stylesheets, and materially improved warm-page FCP/LCP. `never` added requests without meaningful size benefit.

Measurement limitation: this was a controlled local lab benchmark with real Brotli and cache behavior over HTTP/1.1, not production field Core Web Vitals.

## 8. Validation status

Throughout the stabilization work:

- production builds passed
- slug policy passed
- shared-link policy passed
- fallback policy passed
- source-image policy passed
- structured-data audit passed
- generated-dist image policy passed
- redirect checks remained healthy
- representative browser tests produced zero console errors

The final CSS production smoke test built 377 pages and audited 406 HTML files. Homepage, Frigiliana Location, Comfort & Amenities and Romantic Hideaways loaded shared CSS normally.

## 9. Deferred backlog

The following items are deferred and are not approved implementation:

- remaining English accessible names (D4)
- Comfort & Amenities Lucide SVG DOM duplication
- orphaned deploy assets
- unused dependencies, configuration and components
- broader reduced-motion governance

Route-manifest migration is **NOT approved**.

## 10. Protected areas

These systems should not be refactored without a new concrete defect or explicit architectural decision:

- Link Registry
- link resolver
- SEO resolver
- canonical/hreflang
- redirects
- slugs
- image pipeline
- desktop and mobile navigation
- `BaseLayout` footer, landmark and skip-link contracts
- Guest Guide shell
- booking architecture

The stabilization phase is complete.

Future work should return to product value:

- Top Funnel
- conversion
- design modernization
- authority and content expansion

Technical optimization should be measurement-led and proportional to real user or system impact.
