---
document_id: AMARA-INT-ASTRO-003
title: AMARA Astro & Design Architecture Contract V4
version: 4.8.1
status: ACTIVE
authority_class: CONTRACT / GOVERNING INTERIM
source_type: INTERIM SNAPSHOT FROM APPROVED PDF + APPROVED REPOSITORY AMENDMENT
source_attachment: "03_AMARA_Astro_Technical_Standard_V4 (1).pdf"
source_sha256: b3d8a3e780b29b5be42922aec838c7f56f455184cca8336d9a0f3564ba43f9aa
snapshot_created: 2026-08-14T09:08:00+02:00
migration_state: PENDING PACKAGE 2/3 NORMALIZATION
last_modified: 2026-08-25T18:47:39+02:00
---

# AMARA Astro & Design Architecture Contract V4 — Interim Markdown Snapshot

> **INTERIM SNAPSHOT.** This file preserves the wording of the currently approved source document while AMARA migrates active documentation into the repository. Formatting was normalized for Markdown; no substantive rule change is intended by this conversion. Where the System Constitution, Governance or Decision Register explicitly records an intentional supersession, the higher owner governs.



---

AMARA Astro & Design Architecture Contract V4
Status                                                ACTIVE
Version                                               4.8.1
Effective date                                        2026-08-10
Runtime                                               Astro
Styling                                               Tailwind CSS + AMARA global tokens + scoped component
                                                      styles


1. Technical philosophy
AMARA is Astro-native. The project owns the document structure and therefore does not require CMS-
defense wrappers, platform override layers, or compatibility markup inherited from Lodgify.
Technical priorities are:
- simple architecture;
- shared ownership boundaries;
- static-first rendering;
- semantic HTML;
- token-driven styling;
- narrow components;
- predictable localization;
- no parallel systems.

2. Responsibility model
2.1 Layouts own document structure
Layouts define the shell: <html>, <head>, <body>, navigation placement, main landmark ownership where
applicable, footer, and shared utilities.
BaseLayout is the public marketing shell. Specialized layouts may compose it where they own a repeatable
page-family contract.
The Guest Guide intentionally uses a separate noindex shell and must not be forced into the marketing shell.

2.2 Page families assemble meaning
Page-family files own:
- page composition;
- localized authoring objects or content imports;
- page-specific module ordering;
- SEO authoring input;
- approved link intent;
- page-family-specific data wiring.
Page families must not duplicate document-head logic or global routing systems.

2.3 Components own reusable UI
A component should have a narrow visual or interaction responsibility. Repeated UI problems should be
solved at the shared component or layout layer, not page by page.


Do not create a new component merely to hide a one-off workaround.

3. Document landmarks
Every real page must have one meaningful <main> landmark unless a deliberately specialized shell has an
explicitly reviewed alternative.
Global navigation must not be nested inside <main>.
The shared public header must preserve banner semantics.
Public BaseLayout pages use the localized main-content skip-link contract and exactly one matching #am-
main-content target.
Avoid duplicate header, main, nav, or footer landmarks with indistinguishable roles.

4. Root and wrapper policy
There is no mandatory `.am-root` or `.am-wrap` contract in Astro.
Do not reintroduce these as generic wrappers solely because older documents required them.
A wrapper is permitted only when the current layout or component has a real structural or styling need for it.

5. Styling model
5.1 Global styling
global.css is the master global stylesheet entry.
Global style responsibilities include:
- design tokens and theme values;
- typography system;
- global control patterns;
- shared utility classes;
- cross-component primitives that are truly global.

5.2 Scoped component styles
Astro scoped <style> blocks are allowed for presentation owned by a component.
Rules:
- scoped styles must not attempt to control child-rendered DOM across component boundaries unless the
  boundary is crossed deliberately and locally;
- do not create hidden global layout rules inside a component;
- remove dead scoped selectors rather than leaving them as silent debt;
- prefer existing utility classes and tokens before adding new CSS.

5.3 Tailwind
Tailwind utilities are the normal composition layer for layout, responsive behavior, spacing, and visual utilities
where they keep the markup clear.
Do not create a second token system in Tailwind config or component code.

5.4 Hardcoding
Raw brand colors belong in token/theme definitions, not scattered through components.


New design tokens require explicit approval. Existing arbitrary dimensions may be used where they represent
a measured structural contract and do not create a new design language.

5.5 Inline styles
HTML style="..." attributes are not the normal AMARA authoring path and require a documented
technical reason.
Astro component <style> blocks are not considered forbidden inline design styles when they are scoped,
intentional, and component-owned.

6. Typography and visual hierarchy
AMARA uses a restrained editorial hierarchy:
- display serif for editorial/emotional hierarchy;
- functional sans for controls, labels, and practical copy;
- one H1 per public content page unless a specialized system page requires a reviewed exception;
- clear H2/H3 hierarchy;
- no decorative heading inflation.
Existing am-text-* typography classes are the preferred semantic text scale.

6.1 Mobile-first responsive page contract

AMARA uses one mobile-first responsive design system. The mobile composition is the canonical source
layout; larger viewports progressively enhance space, imagery and column structure without changing the
page's semantic order, dominant job or conversion path.

The operational consequences are:
- authored DOM order follows the narrow-screen reading and decision sequence;
- base layout rules define the mobile composition and `min-width` enhancements add space or columns;
- mobile and desktop do not use separate page templates or separate content hierarchies;
- a page family owns one repeatable composition across all five locales;
- a larger viewport may strengthen imagery and place related units beside one another, but it must not move
  a primary action behind a different information path or change which content carries the page's job.

7. Hero contract

`src/components/hero/heroContract.ts` is the canonical semantic owner for public hero classification. It
does not impose one universal composition. Every production hero owner declares a family, a named variant,
an optional hub/spoke/conversion role and an optional topic through the shared `data-am-hero-*` attributes.
This makes the cluster discoverable and governable without erasing page-job differences.

The active family variants are:

- `TrustHero` / `trust-content` for text-led trust and supporting information pages;
- `StayHero` / `stay-decision` for the image, key facts, booking decision and direct-trust sequence on a stay;
- `LocationGuideHero` and its thin derivatives / `authority-media` or `authority-evidence` for Location and
  image-led Experience authority;
- `ExperienceArticleHero` / `authority-editorial` for narrative Experience articles with standfirst and
  provenance;
- `Hero` / `campaign-media` for the bounded campaign/editorial split composition that predates the authority
  family and remains a named family variant.

Hero media is not a card. Do not add card borders, shadows, fake frames, or reusable-card radius behavior to
hero media. Hero geometry, semantic order, action path and image priority follow the named family owner. Each
hero has one page heading; eyebrow, lead/paragraphs, metadata, actions and media are exposed only where the
family job needs them. A new public hero uses one of these owners. A materially new hero job requires explicit
classification and a contract/owner change rather than a page-local recipe. Existing direct compositions are
legacy and migrate when their page-family renderer is materially revised.

8. Images
Use the canonical Astro image pipeline and AMARA image profiles.
Requirements:
- meaningful alt text in the current language;
- correct width and height;
- responsive srcset / sizes where applicable;
- one intentional high-priority/LCP image per page context;
- lazy loading for non-critical imagery;
- no decorative image bytes without a clear visual purpose.
Do not bypass AmaraImage / the approved image pipeline without a concrete reason.

9. Navigation and shared shell behavior
Navigation is a high-risk shared component.
Preserve:
- localized labels;
- route resolution through current infrastructure;
- truthful aria-expanded state;
- keyboard activation;
- Escape/focus restoration;
- mobile inert containment;
- width containment for localized contextual breadcrumbs and sibling navigation;
- scroll lock;
- language-switch behavior.
Do not refactor navigation incidentally during page work.

Context navigation must not widen the document at any supported mobile viewport. The current breadcrumb may
truncate inside its available width; sibling links that intentionally remain on one line own their horizontal
scrolling inside the navigation rail. Long localized labels must never transfer that overflow to the page.

The persistent booking action remains visible in the canonical header. Below 360px it uses the approved native
compact availability label for EN, DE, ES, NL and SV so the brand, language control, booking path and menu keep
separate hit areas. Hiding one of those four jobs is not an acceptable width fix.

10. Footer contract
BaseLayout pages render the canonical footer core.
Footer highlights behave as follows:
- undefined -> localized defaults;
- empty array -> no highlight navigation;
- non-empty array -> custom highlight navigation.
Do not reintroduce footer variants to suppress legal/core information.

11. Localization
Supported public languages are EN, DE, ES, NL, and SV.
One structural page system should serve all languages wherever practical.
Use localized content objects/dictionaries instead of parallel templates.
Visible labels and accessible names must follow the current language unless a language-scoped content
block intentionally uses another language.
Do not implement page-level JavaScript language toggles.

12. Client-side behavior
Static HTML is the default.
Client JavaScript is allowed when it provides a concrete UX function that cannot be delivered adequately with
static HTML/CSS alone.
Rules:
- keep scripts narrow;
- prefer progressive enhancement;
- avoid hydration frameworks for small controls;
- no library for a small interaction that native browser behavior can provide;
- preserve functionality without JS where reasonably possible.

13. Page and route files
The normal public page pattern is:
- src/page-families/<family>/<PageName>Page.astro
- src/pages/<slug>.astro for Spanish root routing
- src/pages/[lang]/<slug>.astro for EN/DE/NL/SV wrappers where that family uses the shared
  dynamic language route pattern
Explicit route wrappers are the current standard. A route-manifest migration is not approved.

14. Internal tools and development surfaces
Internal tools must not leak into normal production output unless explicitly enabled.
Development-only pages must not become public/indexable through accidental route ownership.


15. Technical definition of done
For normal page or component work verify, as relevant:
- build passes;
- existing guardrails pass;
- landmark count is correct;
- heading hierarchy remains correct;
- localized content is complete;
- shared components did not regress;
- no new hardcoded internal route was introduced;
- no new parallel styling/runtime system was introduced;
- no unnecessary client JavaScript was added;
- visible output matches the approved reference.
Validation depth is governed by the Governance & Execution Standard.
AMARA Astro Technical Standard V4 is binding for all implementation work.

16. Evidence, authoring and presentation boundary

This repository amendment activates the Constitution's Evidence & Data, Authoring and Presentation separation in Astro.

The ownership boundary is:

- `knowledge/` owns durable, non-public research dossiers, sources, atomic facts, verification state, claim boundaries, review dates, supersession and open questions;
- `src/content/` owns localized public authoring and may reference the knowledge records used for a claim;
- `src/page-families/` owns page-family composition and selects the authored material needed for a page job;
- layouts and components own presentation and reusable UI.

Research does not become public merely because it is stored in the repository. A page is a curated projection of the knowledge base, not the knowledge base itself. Public copy may summarize, localize or omit a fact for the page job, but shortening or redesigning a page must not delete the underlying knowledge record.

Knowledge records must keep enough provenance to distinguish verified facts, partial support, first-party observations, unverified leads, disputed claims and superseded information. Volatile facts require a checked date and review expectation. Conflicting evidence is retained and resolved explicitly rather than silently overwritten.

New topic work follows this direction:

1. preserve the research dossier;
2. register reusable sources;
3. extract atomic facts, claim boundaries and open questions;
4. author localized public meaning with evidence references;
5. assemble it through the approved page family and components.

The typed contract in `knowledge/schema.ts` is the executable repository owner for knowledge-record shape. It must remain presentation-agnostic and must not become a second routing, runtime or styling system.

17. Design-system control and cross-silo convergence

17.1 Purpose

AMARA's design system is the controlled cross-section of the public page families, not a separate visual layer placed above them. Trust, Stay, Location, Experience, Home and Guest Utility may keep distinct compositions where their page jobs require them, but the same UI job must not acquire a new visual language merely because it appears in another family.

The system distinguishes five statuses:

- **canonical** — the approved shared treatment for a named UI job;
- **family** — a deliberate variant required by a distinct page-family or surface job;
- **experimental** — isolated in the internal Design Lab and not approved for public use;
- **legacy** — existing output that remains valid while it is migrated but may not be copied into new work;
- **retired** — no longer permitted in active public output.

Visual similarity alone does not make two units the same component. Visual difference alone does not justify two implementations. Classification follows semantic job, interaction, information hierarchy and responsive behaviour.

17.2 Executable ownership

The ownership chain is:

- `src/styles/global.css` owns foundations, tokens, typography roles and genuinely global control/link treatments;
- shared components own canonical interactive primitives and reusable content modules;
- page families compose those primitives and modules for their dominant job and may own local layout, but they do not create parallel foundation or control systems;
- `/tools/styleguide` is the rendered operational reference and must display production tokens and production components rather than restating or imitating them;
- `/tools/design-lab` owns visual experiments only. An experiment becomes canonical only through an explicitly approved contract/component change;
- the internal component inventory may describe implementation coverage but cannot define design status independently of this contract and the production component.

A styleguide-only class is tool chrome or demonstration scaffolding. It cannot establish a public AMARA pattern.

17.3 Exception-led convergence

Convergence proceeds by UI job across silos rather than by redesigning one complete page family at a time:

1. compare the same job across representative Trust, Stay, Location and Experience consumers;
2. group repeated recipes and materially different solutions as an exception cluster;
3. classify each cluster as canonical, family, experimental, legacy or retired;
4. select or create the smallest appropriate token, role or component owner;
5. migrate bounded consumers and validate representative mobile and larger-viewport output;
6. update the rendered styleguide from the production owner.

Existing public output is not invalid merely because it predates this process. A legacy treatment stays stable until its cluster is selected for migration. New work must not copy a legacy treatment or add another local solution to an already identified shared UI job.

17.4 Primitive roles and current transition state

The current controlled primitive vocabulary is:

- typography through the `am-text-*` roles; the legacy ratchet records zero unresolved arbitrary typography values and fails on any reintroduction;
- action buttons through `am-btn` with `primary`, `secondary` and the inverse-surface modifier;
- editorial onward actions through `am-cta-link`;
- body-copy links through `am-inline-link`;
- related-guide links through `am-guide-link`;
- textual links inside a larger linked card treatment through `am-card-link`.

The CSS roles above remain the canonical visual treatments. `AmaraActionLink` owns navigational use of primary, secondary, editorial, inline, guide and card treatments, including inverse, external and non-interactive disabled semantics. `AmaraActionButton` owns local and form actions, including disabled and loading semantics. New consumers use these production components rather than composing the CSS roles directly; bounded direct uses that predate the API remain legacy until their page-family renderer is materially revised.

Chip-like controls and labels must be classified by semantics before canonical implementation:

- a **filter chip** is interactive and exposes its selected state accessibly;
- a **meta chip** is passive, concise information;
- a **status badge** communicates a real state rather than decorative emphasis;
- an **icon surface** contains an icon and is not described or implemented as a chip merely because it is circular.

The production owners are `AmaraFilterChip` for toggle filters with accessible selected and disabled state, `AmaraMetaChip` for passive concise information and `AmaraStatusBadge` for a real communicated state. The Amenities filter and the repeated Location recipes are canonical consumers of those owners. The festival date badge qualifies because it communicates confirmation or date variability; decorative emphasis does not. Icon surfaces remain distinct. Badges that exist only in an internal styleguide are not canonical public components.

17.5 Surfaces, cards and elevation

AMARA does not have one universal card. Stay selection, guide navigation, evidence, comparison and booking decision are different jobs and may use different named modules. Flat editorial composition and hairline separation remain the default; elevation is component-owned and reserved for a demonstrated hierarchy or overlay need. A new generic card recipe is not permitted merely to wrap content visually.

Scoped component styles remain valid ownership. Their existence is not design debt by itself. A scoped treatment becomes a shared-system concern when the same UI job or recipe appears across component or page-family boundaries.

17.6 Cards and content-module contract

AMARA has no universal card component. Card-like appearance does not establish a reusable job. The semantic
classification owner is `src/components/content/moduleContract.ts`; rendered modules declare their job,
status and, where applicable, family through `data-am-content-module-*` attributes.

The canonical cross-silo modules are:

- `EditorialFeatureGrid` for non-linked feature, quality or amenity explanations;
- `EditorialCallout` for a practical consequence, tip or access note, with only the approved low and lowest
  surfaces.

The deliberate family modules are:

- `GuideLinkCardSection` for Location guide navigation;
- `ApartmentCard` for stay selection and conversion-aware result states;
- `LocationGuideEvidence` for verified Location evidence;
- `LocationEditorialComparison` for editorial place comparison;
- `BookingDecisionPanel` for a price-context and booking decision;
- `EditorialStatement` for the bounded elevated trust/statement treatment.

These jobs may not be interchanged because their information hierarchy, interaction and responsive behaviour
are different. New work uses the owner for its job rather than copying its surface classes. Existing direct
recipes remain legacy until the containing renderer is materially revised. Elevation remains limited to the
named owner that demonstrates the hierarchy need; it is not a generic card option.

17.7 Living styleguide contract

Every canonical primitive or module shown in the living styleguide must include, as applicable:

- semantic purpose and when not to use it;
- production owner and supported API;
- allowed variants and status;
- mobile and larger-viewport behaviour;
- hover, focus, active, disabled, loading and error states;
- long-label and five-locale considerations;
- accessibility requirements;
- at least one real production consumer.

The styleguide is therefore an executable view of the system, not a parallel source of design values. A mismatch is resolved in the production owner or in this contract; it is not patched locally in the styleguide.

17.8 Section rhythm and introduction contract

`src/components/layout/sectionContract.ts` is the semantic classification owner for page sections and
section introductions. `AmaraSection` owns the canonical page-shell rhythm, divider behaviour and the
approved plain, tint and inverse surfaces. Its default, hero, compact and closing variants describe page
position and spacing; they are not page-local design knobs.

`AmaraSectionIntro` owns the recurring eyebrow, H2, lead, note and supplemental-detail hierarchy. Its named
variants preserve distinct jobs rather than flattening the silos:

- `centered` is the Trust family introduction for evidence and proof groups;
- `standard` is the direct Stay and utility introduction without editorial italics;
- `editorial` is the shared Location and Experience introduction for place-led guidance.

The variants share semantic markup, width, responsive spacing and discoverable `data-am-section-intro-*`
attributes. A materially different split or media-led introduction remains a family composition until its
own cross-silo job is selected; it must not be forced into this component merely because it contains an H2.

The older `am-section` Location shell is controlled legacy. Existing consumers remain stable and may use the
canonical introduction inside it, but new page-shell work uses `AmaraSection`. Legacy shell migration happens
with the containing renderer when its composition is materially revised, not as an unbounded class rewrite.

## Revision history

| Version | Date | Change |
|---|---|---|
| 4.0 | 2026-08-10 | Approved source standard preserved as the interim Markdown snapshot. |
| 4.1.0 | 2026-08-20 | Added the approved Evidence & Knowledge boundary and executable repository ownership model. |
| 4.2.0 | 2026-08-23T13:54:40+02:00 | Activated the canonical mobile-first composition contract and progressive-enhancement boundary for all public page families. |
| 4.3.0 | 2026-08-25T15:51:22+02:00 | Activated exception-led cross-silo design convergence, explicit design-status classes, executable owner boundaries and the living-styleguide contract without changing public rendering. |
| 4.4.0 | 2026-08-25T16:33:34+02:00 | Activated the executable action/link and chip/status component owners, migrated bounded cross-silo consumers, and kept icon surfaces and decorative emphasis outside the chip/status vocabulary. |
| 4.5.0 | 2026-08-25T17:32:07+02:00 | Closed all 32 typography legacy values through canonical or explicitly named special-purpose roles, reduced the ratchet to zero and replaced the styleguide's parallel typography specimens with production roles. |
| 4.6.0 | 2026-08-25T17:49:36+02:00 | Activated the semantic hero contract, named the deliberate Trust, Stay, Location, Experience and campaign variants, extracted the Stay decision hero into a production owner and rendered representative production owners in the living styleguide. |
| 4.7.0 | 2026-08-25T18:22:10+02:00 | Activated semantic classification for card-like and editorial modules, established canonical feature-grid and practical-callout owners, preserved distinct family jobs and replaced the styleguide's simulated cards with production modules. |
| 4.8.0 | 2026-08-25T18:37:51+02:00 | Activated the shared section rhythm and section-introduction contract, preserved named Trust, Stay and Location/Experience variants, migrated bounded production consumers and classified the older Location shell as controlled legacy. |
| 4.8.1 | 2026-08-25T18:47:39+02:00 | Corrected mobile width containment in the canonical context navigation so localized current-page breadcrumbs truncate within the rail and sibling links retain contained horizontal scrolling without widening the document; added the native compact booking-label tier below 360px so all four header jobs remain visible. |
