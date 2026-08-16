---
document_id: AMARA-EVID-TDD-001
title: AMARA Technical Due Diligence Closure Record
version: 1.0.0
status: ARCHIVED
authority_class: ARCHIVE / EVIDENCE
record_date: 2026-08-16
repository_baseline: 7be597fbdbf8095e829d405c27b4c467b5cda590
---

# Technical Due Diligence closure record

> **EVIDENCE ONLY.** This record summarizes the August 2026 technical remediation and the repository state at the baseline above. It is not a governing contract, an automatic work order or a replacement for `AGENTS.md`, `docs/AMARA_REGISTER.md` or the active owner documents. A later review must verify current repository reality before relying on these measurements.

## Scope and outcome

The review covered code integrity, modularity, separation of concerns, DOM and styling discipline, static delivery, dependency management, automated validation and maintainability. SEO strategy, copywriting, visual redesign, penetration testing, field performance and live external-service configuration were outside scope.

**Outcome: PASS for the reviewed technical scope.** No known critical or merge-blocking code defect remained at this baseline.

Baseline evidence:

- `main` and `origin/main`: `7be597fbdbf8095e829d405c27b4c467b5cda590`
- 481 statically built pages
- 66 contract tests and 55 browser tests passing in CI
- all typechecks and build-policy audits passing
- dependency audit reporting zero known high/critical vulnerabilities
- seven production dependencies and three development dependencies

## Closed findings

| Area | Closure evidence at baseline |
|---|---|
| Test coverage | Contract and browser suites are enforced by CI; tool and test typechecks are separate required gates. |
| Internal tools | 44 type errors reduced to zero; broken module-scoped handlers replaced with typed event listeners. |
| Global navigation | The former 1,419-line component was decomposed; `Navigation.astro` is 79 lines and behavior is characterized for focus, Escape, `inert`, hover and scroll locking. |
| Authority templates | Shared composition and required-link context were centralized; page families use the common resolver rather than local resolver implementations. |
| Dead navigation API | `locationAuthorityNav` and all consumers were removed after behavior characterization. |
| Public image contract | 58 stable public paths are emitted from the source root and audited byte-for-byte; 58 redundant legacy copies were removed. |
| Styling debt | Responsive gutters were centralized and normalized; redundant vertical and horizontal Tailwind important modifiers were removed. |
| Inline presentation | No production inline styles or inline event-handler attributes remained. |
| Dependency layer | React, React DOM, the Astro React integration and React icon/type packages were removed; Lucide icons render Astro-native through `@lucide/astro`. |
| Static-first delivery | No React runtime, Astro island or `client:*` hydration remained. Small deliberate inline scripts still provide bounded interactions. |
| CI cost | Pull-request branches run one CI gate rather than duplicate `push` and `pull_request` gates. `AGENTS.md` requires intentional release batching and build-cost disclosure. |
| Multilingual location pages | Frigiliana Geography and Daily Life were added in five locales; the Nerja sister pages and both hubs were updated and validated. |

## Accepted implementation exceptions

These are not open defects and must not be removed without their review trigger:

1. `src/styles/global.css` retains one documented `margin: 0 !important` required by the current Tailwind layer relationship.
2. `src/page-families/comfort-amenities/ComfortAmenitiesPage.astro` retains one documented `display: none !important` so the native `[hidden]` state defeats display utilities.
3. `AmenitySpecRow.astro` pins the previous Lucide `waves` geometry through Lucide's Astro factory. Lucide 1.x redrew/renamed the icon; changing it is a deliberate design choice, not an incidental dependency upgrade.
4. Four small `is:inline` scripts remain for bounded interactions. They are not framework hydration or inline event-handler attributes.

## Open points and review triggers

| Open point | Current status | Revisit when |
|---|---|---|
| Public media inventory | `public/images` contains 208 files (about 47.03 MiB). Historical unreferenced-file counts are not a deletion list and may be stale after the 481-page build. | Asset/storage cleanup is explicitly requested. Recalculate references across source, CSS, generated HTML, metadata, structured data and known external URLs before deleting anything. |
| CSS exceptions | The two raw `!important` declarations above are justified under the current implementation. | Tailwind layering or the amenities visibility contract changes. |
| Lucide compatibility pin | The pool glyph intentionally preserves the pre-1.x appearance. | `@lucide/astro` is upgraded materially or the owner approves the new Waves design. |
| Live delivery boundary | Green Cloudflare checks refer to the `amara-staging` Pages project. `amara-lodging.es` remained on Lodgify at this baseline. | A production cutover or DNS/hosting change is explicitly commissioned. Never infer live deployment from a staging check. |
| Repository branch hygiene | Historical local branches remain; remote `tooling-and-css-cleanup` should be confirmed merged before optional deletion. `booking-subdomain-cutover` is a separate protected workstream. | Repository housekeeping is explicitly requested; do not delete the booking branch as generic cleanup. |
| Wider controlled workstreams | URL-policy migration, analytics/consent and documentation Package 2/3 work remain governed by the Register. | Their Register review trigger is met and the operator selects that workstream. |

## Next technical review

A future due-diligence review should start from the then-current `main`, read this document as historical evidence, and avoid reopening closed findings without contradictory repository evidence. Re-run the relevant checks when any of these triggers occurs:

- external developer handover or acquisition diligence;
- major Astro, Tailwind, Playwright or Lucide upgrade;
- route ownership, Link Registry, global navigation, global CSS or booking-boundary change;
- production hosting cutover;
- new security advisory or repeated CI regression;
- explicit public-asset cleanup.

The next review should report regressions against this baseline separately from newly discovered findings.
