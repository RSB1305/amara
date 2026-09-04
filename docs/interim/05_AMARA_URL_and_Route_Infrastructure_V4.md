---
document_id: AMARA-INT-URL-005
title: AMARA URL & Route Infrastructure V4
version: 4.0
status: ACTIVE
authority_class: CONTRACT / GOVERNING INTERIM
source_type: INTERIM SNAPSHOT FROM APPROVED PDF
source_attachment: "05_AMARA_URL_and_Route_Infrastructure_V4(1).pdf"
source_sha256: e95f24df7fb20c1761b3170ee00a80f694acae99042bdeeff032f6afabc69018
snapshot_created: 2026-08-14T09:08:00+02:00
migration_state: PENDING PACKAGE 2/3 NORMALIZATION
---

# AMARA URL & Route Infrastructure V4 — Interim Markdown Snapshot

> **INTERIM SNAPSHOT.** This file preserves the wording of the currently approved source document while AMARA migrates active documentation into the repository. Formatting was normalized for Markdown; no substantive rule change is intended by this conversion. Where the System Constitution, Governance or Decision Register explicitly records an intentional supersession, the higher owner governs.

> **Transition note (2026-09-04):** the locale-path direction recorded in `DR-URL-003` is now the implemented contract. Public routes are declared once in `src/lib/publicRouteManifest.mjs` with one language-neutral key, one parent and one native hierarchical path per locale, and rendered by two catch-all pages; canonical, hreflang, sitemap alternates, breadcrumb hierarchy, the Link Registry and the migration redirects derive from that manifest. Sections 2–5 and 7 below describe the superseded shared-slug model and are governed by `DR-URL-003`, `DR-URL-005` and `DR-ROUTE-003` in the Register. Redirect governance, semantic link resolution, the change gate and the definition of done continue to apply unchanged.

---

AMARA URL & Route Infrastructure V4
Status                                                 ACTIVE
Version                                                4.0
Effective date                                         2026-08-10
Platform                                               Astro + Cloudflare Pages


1. Core principle
URLs are infrastructure. Stability beats keyword micro-optimization.
AMARA uses explicit canonical route ownership, language-neutral slugs, controlled redirects, and centralized
link resolution.

2. Canonical multilingual route model
Spanish is the default language and has no language prefix.
Canonical public pattern:
- Spanish: /{slug}
- English: /en/{slug}
- German: /de/{slug}
- Dutch: /nl/{slug}
- Swedish: /sv/{slug}
Homepage:
- Spanish: /
- English: /en
- German: /de
- Dutch: /nl
- Swedish: /sv
/es/ is not an authored canonical prefix. Legacy /es/ routes may redirect where explicitly configured, but
new links and canonical metadata must not use them.

3. Slug neutrality
The slug is identical across languages. Localization happens in page copy and metadata, not in the slug.
Correct concept:
- /frigiliana-parking
- /en/frigiliana-parking
- /de/frigiliana-parking
Do not translate the slug by language.

4. Slug taxonomy
Naming should reflect the strategic layer without becoming a keyword-stuffing exercise.
Typical patterns:
- Location Authority: {location}-{topic}


- Explore: explore-{location}-{theme} where appropriate
- Comparison: stable neutral comparison slug
- Trust: neutral brand/trust slug
- Conversion: neutral or asset-level descriptive slug
Existing canonical slugs override pattern theory. Do not rename a stable route merely to make it look more
consistent.

5. Slug freeze
Once published/indexed, a slug is frozen.
Changes are permitted only for:
- structural defect;
- legal requirement;
- brand re-architecture.
Never for:
- keyword refinement;
- AI suggestion;
- stylistic preference;
- minor localization improvement.

6. Canonical public slug ownership
The project maintains an explicit canonical public slug set.
A route is not public merely because a file can render. Public ownership must be represented in the canonical
route system and must survive build guardrails.
Do not create hidden parallel routes.

7. Route wrappers
Explicit Astro route wrappers are the current standard.
They keep route ownership inspectable and compatible with existing slug/link guardrails.
A route-manifest migration is not approved. Do not introduce one as cleanup or "future proofing" without a
separate architectural decision backed by demonstrated need.

8. Semantic link resolution
User-facing semantic internal links should use registry tokens and the shared resolver.
This protects:
- language consistency;
- route ownership;
- centralized changes;
- missing-link detection.
No raw hardcoded public path should be introduced into content or reusable components when a registry
token exists or should exist.

9. Framework-owned path construction
Route-ownership helpers may construct localized paths when the framework already knows the canonical
slug and is generating infrastructure such as:


- hreflang/owned language paths;
- breadcrumb hierarchy;
- sitemap-related route structures;
- canonical entity routing;
- explicit page-family routing logic.
This does not replace the Link Registry for authored navigation intent.

10. Redirect governance
Redirects are infrastructure and must remain deterministic.
The system must avoid:
- loops;
- chains;
- duplicate sources;
- conflicting targets;
- canonical collisions;
- redirects that accidentally create translated-slug architecture.
Legacy aliases are redirects, not active canonical routes.

`public/_redirects` is the sole authored redirect-rule source. Rules inside its
`@astro-redirects` section are also consumed by Astro for local and static
routing; their sources and targets must not be duplicated in `astro.config.mjs`.

11. Cloudflare cutover boundary
Cloudflare Pages is the target marketing-site delivery platform.
Until final cutover, the public domain may still serve the legacy Lodgify-hosted marketing site. This does not
change the Astro canonical source of truth in the repository.
At cutover, DNS/Pages configuration must preserve:
- HTTPS;
- mail records;
- Search Console verification;
- canonical host consistency;
- booking-engine separation.

12. Booking host
The booking engine is allowed to use a separate host/origin.
All booking links must derive from the single booking-origin infrastructure contract. Do not hardcode the
booking host throughout components.
The booking host does not define marketing-site slugs.

13. Infrastructure change gate
Before introducing or changing a public slug or route:
- page class/job is confirmed;
- parent/ownership is clear;
- canonical slug is checked for collision;
- Link Registry implications are known;
- redirects are evaluated;
- hreflang/canonical behavior is understood;
- the change is separated from unrelated styling/content refactors.


14. Definition of done
URL/route work is complete only when:
- canonical route ownership is unambiguous;
- all language variants resolve correctly;
- internal links use approved infrastructure;
- redirects are chain/loop/collision free;
- sitemap/canonical/hreflang agree;
- no accidental /es/ canonical path was introduced;
- build guardrails pass.
AMARA URL & Route Infrastructure V4 is binding.
