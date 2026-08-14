---
document_id: AMARA-INT-RUNTIME-004
title: AMARA Runtime & SEO Standard V4
version: 4.0
status: ACTIVE
authority_class: CONTRACT / GOVERNING INTERIM
source_type: INTERIM SNAPSHOT FROM APPROVED PDF
source_attachment: "04_AMARA_Runtime_and_SEO_Standard_V4(1).pdf"
source_sha256: 65e3a3312c1c56a3c096800d3a267dc85e57c6e60f16b81eecc3cbce089eb621
snapshot_created: 2026-08-14T09:08:00+02:00
migration_state: PENDING PACKAGE 2/3 NORMALIZATION
---

# AMARA Runtime & SEO Standard V4 — Interim Markdown Snapshot

> **INTERIM SNAPSHOT.** This file preserves the wording of the currently approved source document while AMARA migrates active documentation into the repository. Formatting was normalized for Markdown; no substantive rule change is intended by this conversion. Where the System Constitution, Governance or Decision Register explicitly records an intentional supersession, the higher owner governs.



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

10. Booking runtime boundary
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

11. Robots and noindex systems
Guest Guide and other intentionally private/internal utility surfaces remain noindex and outside normal public
sitemap discovery.
Noindex status does not justify breaking canonical or metadata consistency, but public rich-result
optimization is not a goal for those pages.

12. Runtime guardrails
The build must prevent or detect, as applicable:
- invalid canonical public slugs;
- unresolved or disallowed shared links;
- invalid language fallback behavior;
- image-policy violations;
- structured-data integrity errors;
- redirect collisions, chains, loops, or conflicting ownership.
A guardrail that fails is a system error, not a suggestion to add a workaround.

13. Runtime change control
Changes to any of the following require explicit architectural alignment and system-wide validation:


- SEO head resolver;
- structured-data resolver;
- Link Registry semantics;
- route ownership;
- canonical/hreflang behavior;
- booking-origin architecture;
- redirect generation.
If runtime behavior changes materially, update the relevant governing documentation in the same controlled
workstream.

14. Runtime definition of done
A public page is runtime-complete when:
- SEO authoring input exists and resolves;
- canonical and hreflang are correct;
- robots intent is correct;
- only the central resolver emits metadata/schema;
- semantic internal links resolve through approved infrastructure;
- structured data is factual and page-appropriate;
- build guardrails pass.
AMARA Runtime & SEO Standard V4 is binding.
