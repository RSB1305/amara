---
document_id: AMARA-INT-RUNTIME-004
title: AMARA Runtime & SEO Standard V4
version: 4.5.0
status: ACTIVE
authority_class: CONTRACT / GOVERNING INTERIM
source_type: INTERIM SNAPSHOT FROM APPROVED PDF
source_attachment: "04_AMARA_Runtime_and_SEO_Standard_V4(1).pdf"
source_sha256: 65e3a3312c1c56a3c096800d3a267dc85e57c6e60f16b81eecc3cbce089eb621
snapshot_created: 2026-08-14T09:08:00+02:00
migration_state: PENDING PACKAGE 2/3 NORMALIZATION
last_modified: 2026-09-02T11:29:14+02:00
---

# AMARA Runtime & SEO Standard V4 — Interim Markdown Snapshot

> **INTERIM SNAPSHOT.** This file preserves the wording of the currently approved source document while AMARA migrates active documentation into the repository. Formatting was normalized for Markdown; no substantive rule change is intended by this conversion. Where the System Constitution, Governance or Decision Register explicitly records an intentional supersession, the higher owner governs.

## Active repository amendment — official destination forecasts

The public Weather pages for Frigiliana, Nerja and Tarifa remain statically generated Astro. Each may progressively request its fixed same-origin GET route under `/api/weather/{destination}` to display the official short-term AEMET municipality forecast. The only approved destination routes are `/api/weather/frigiliana`, `/api/weather/nerja` and `/api/weather/tarifa`.

The Cloudflare Pages Functions own the server-only `AEMET_API_KEY`, the fixed municipality mapping for those three destinations, the provider's two-step request, temporary-host validation, response normalization and per-destination edge caching. The browser receives only the small provider-neutral forecast projection required by the visible component. It never receives the key, provider request URL or raw provider payload.

Failure of the external forecast must not remove or rewrite the static climate content. The component fails safely to a short unavailable state and the official AEMET source link. This amendment grants no dynamic-runtime scope to another public page or destination by implication.

The existing Tarifa Wind / Spots / Safety kitesurfing spoke may additionally request the fixed same-origin GET route `/api/weather/tarifa/kitesurfing`. The page remains statically generated and renders useful evergreen and safety content before enhancement. Its shared Cloudflare Pages gateway owns the server-only Open-Meteo customer API key, fixed Los Lances and Valdevaqueros coordinates, paired weather and marine requests, three-day daytime normalization and deterministic safety assessment. Open-Meteo uses its automatic best-match model selection; the implementation does not select a named forecast model.

The gateway may cache a versioned provider-neutral forecast in `WIND_FORECAST_KV`: data up to six hours old is fresh, data older than six and no older than twelve hours may be served as stale while a background refresh is attempted, and data older than twelve hours is never presented as current. Without a valid cache and provider response the route fails closed with 503. The browser receives neither `OPEN_METEO_API_KEY` nor raw provider payloads.

An optional Workers AI binding may formulate and localize facts already determined by code when `AI` and `WIND_BRIEFING_AI_MODEL` are configured. AI never determines or changes status, warnings, safety, skill suitability or equipment sizing. Invalid, unavailable or timed-out AI output falls back to deterministic ES, EN, DE, NL and SV briefing text. Los Lances with E or SE wind is deterministically `avoid` with offshore-risk and local-check-required warnings; no other safety or suitability thresholds are implied. Valdevaqueros is only the usual alternative to check, never a guarantee of suitable conditions.



---

AMARA Runtime & SEO Standard V4
Status                                                ACTIVE
Version                                               4.0
Effective date                                        2026-08-10
Platform                                              Astro


1. Purpose
This standard defines the single runtime and SEO system for AMARA. It covers metadata, structured data,
language clustering, link resolution, and integrity controls.
Content strategy and visual layout belong to other standards.

2. SEO authoring model
Page families provide a typed SEO authoring object ( AmaraAuthoringSeo).
The authoring object may contain, as appropriate:
- page version/context;
- strategic page type;
- localized title and description;
- robots directive;
- canonical mode;
- Open Graph image input;
- entity key;
- structured-data type assignment;
- article metadata.
Pages do not manually write <title>, canonical, hreflang, Open Graph, Twitter, or JSON-LD markup.

3. Head ownership
BaseLayout owns the public marketing page <head>.
It calls the central SEO head resolver and emits:
- title;
- meta description;
- robots;
- canonical;
- hreflang;
- Open Graph;
- Twitter metadata;
- structured data;
- the serialized data-amara="seo" runtime/audit block.
The data-amara="seo" block is resolver output, not a manually authored page-level SEO system.

4. Canonical and hreflang
Canonical is system-generated. Authoring uses canonical: 'auto'.
Do not hardcode canonical URLs in page families.


Hreflang is generated centrally from the owned multilingual route set.
Spanish is the default unprefixed language. EN, DE, NL, and SV use language prefixes.
No page may emit a second manual hreflang cluster.

5. Structured-data ownership
resolveStructuredData() is the only normal JSON-LD authority.
Pages and components must not add independent application/ld+json blocks without an explicit runtime
architecture decision.
The resolver may emit nodes such as:
- WebSite where applicable;
- WebPage;
- BreadcrumbList;
- AMARA brand/lodging-business entity;
- Article when explicitly authored;
- VacationRental when a complete lodging entity is explicitly assigned.
Structured data must describe visible, factual site content. It is not a hidden instruction channel for crawlers
or AI agents.

6. VacationRental rule
A complete VacationRental node belongs on the corresponding public listing/detail page when that page
has an explicit lodging schema assignment and a valid entity record.
Do not duplicate full rental entities across homepage, collection, or unrelated pages simply to increase
schema volume.
VacationRental data must be sourced from the canonical vacation-rental entity data model, not copied into
page files.
No fake ratings, unsupported amenities, invented availability, or unverified business claims may be emitted.

7. Collection/list semantics
If a public page visibly presents a true collection of AMARA stays, an ItemList or more specific page
semantic may be considered only after explicit alignment.
If implemented, it must:
- stay inside the existing resolver;
- reflect visible items and real links;
- reuse canonical entity/route data;
- avoid duplicating full VacationRental detail data;
- not be justified as an invisible crawler instruction.
No collection-schema extension is currently mandatory.

8. Link Registry
linkRegistry is the semantic single source of truth for internal navigation destinations represented by
tokens.
Use resolveLink() for required links and resolveOptionalLink() only where the surface is intentionally
optional.
Do not:


- invent tokens;
- hardcode semantic internal URLs in content/components;
- hide missing translations with silent fallback;
- create alias systems without explicit approval.

9. Route-ownership helpers
Framework-owned route construction is a separate infrastructure concern from semantic link authoring.
routeOwnership helpers may construct localized paths when the code is operating on an already-owned
canonical route rather than authoring a semantic navigation destination.
This is the approved distinction:
- content/navigation intent -> registry token/resolver;
- framework-owned route generation -> route-ownership helper;
- raw hardcoded internal paths -> forbidden except fragments/static assets or a documented infrastructure
  case.

10. External operational runtime boundaries

### Booking

Booking infrastructure is separate from the marketing-site runtime.
All direct-booking host logic must derive from the single approved booking-origin constant/contract.
Lodgify may provide:
- booking engine;
- availability;
- price;
- minimum-stay information;
- other explicitly approved operational data.
Lodgify must not overwrite AMARA-authored destination copy, trust copy, schema architecture, page layout,
or routing.

### Official destination forecasts

The Frigiliana, Nerja and Tarifa Weather pages may use the narrow same-origin AEMET boundary defined in the active repository amendment above. The Tarifa Wind / Spots / Safety spoke may use the separate fixed kitesurfing projection from the same shared weather-gateway owner. These pages stay static, the enhancements use no client framework, and each visible component attributes its provider.

11. Delivery security headers

Cloudflare Pages applies the following response protections across normal public, Guest Utility, legal and booking-entry documents:

- MIME sniffing is disabled;
- referrer information is limited to the destination origin on cross-origin requests;
- browser capabilities not used by AMARA are disabled through a restrictive Permissions Policy;
- foreign-origin framing is denied;
- the validated resource-origin inventory is enforced through Content Security Policy.

The enforced CSP permits only same-origin resources plus the explicitly validated Google Analytics, Open-Meteo and click-to-load YouTube origins required by AMARA. Inline script elements and styles remain allowed because the static Astro output deliberately uses them; inline event-handler attributes are blocked. Any new runtime origin or relaxation requires explicit alignment and representative compatibility validation before release.

12. Robots and noindex systems
Guest Guide and other intentionally private/internal utility surfaces remain noindex and outside normal public
sitemap discovery.
Noindex status does not justify breaking canonical or metadata consistency, but public rich-result
optimization is not a goal for those pages.

13. Runtime guardrails
The build must prevent or detect, as applicable:
- invalid canonical public slugs;
- unresolved or disallowed shared links;
- invalid language fallback behavior;
- image-policy violations;
- structured-data integrity errors;
- redirect collisions, chains, loops, or conflicting ownership.
A guardrail that fails is a system error, not a suggestion to add a workaround.

14. Runtime change control
Changes to any of the following require explicit architectural alignment and system-wide validation:


- SEO head resolver;
- structured-data resolver;
- Link Registry semantics;
- route ownership;
- canonical/hreflang behavior;
- booking-origin architecture;
- external live-data gateways and their secret boundaries;
- redirect generation.
If runtime behavior changes materially, update the relevant governing documentation in the same controlled
workstream.

15. Runtime definition of done
A public page is runtime-complete when:
- SEO authoring input exists and resolves;
- canonical and hreflang are correct;
- robots intent is correct;
- only the central resolver emits metadata/schema;
- semantic internal links resolve through approved infrastructure;
- structured data is factual and page-appropriate;
- build guardrails pass.
AMARA Runtime & SEO Standard V4 is binding.

## Revision history

| Version | Timestamp | Change |
|---|---|---|
| 4.0 | 2026-08-10 | Approved source snapshot. |
| 4.1.0 | 2026-08-27T14:18:49+02:00 | Added the narrow server-side AEMET forecast boundary for the static Frigiliana Weather page. |
| 4.2.0 | 2026-08-28T06:28:44+02:00 | Extended the fixed server-side AEMET forecast boundary to the static Weather pages for Frigiliana, Nerja and Tarifa. |
| 4.3.0 | 2026-08-28T18:00:00Z | Added the Cloudflare Pages security-header contract and introduced CSP strictly in report-only mode. |
| 4.4.0 | 2026-08-29T07:01:07+02:00 | Enforced the validated CSP origin inventory after representative Public, Guest, consent/analytics, weather, YouTube, legal and booking-entry browser flows completed without violations. |
| 4.4.1 | 2026-08-29T22:20:00+02:00 | Added YouTube's image host to the CSP image origins. The click-to-load trailer still is served from a separate origin to the player, so enforcing 4.4.0 blocked it; a preview check against the real origins found the gap that the pre-enforcement flows had not. |
| 4.5.0 | 2026-09-02T11:29:14+02:00 | Added the fixed Open-Meteo weather-and-marine projection for the static Tarifa Wind / Spots / Safety spoke, with versioned KV freshness limits, deterministic safety ownership and an optional formulation-only Workers AI layer. |
