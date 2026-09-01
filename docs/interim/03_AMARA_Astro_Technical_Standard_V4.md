---
document_id: AMARA-INT-ASTRO-003
title: AMARA Astro & Design Architecture Contract V4
version: 4.22.0
status: ACTIVE
authority_class: CONTRACT / GOVERNING INTERIM
source_type: INTERIM SNAPSHOT FROM APPROVED PDF + APPROVED REPOSITORY AMENDMENT
source_attachment: "03_AMARA_Astro_Technical_Standard_V4 (1).pdf"
source_sha256: b3d8a3e780b29b5be42922aec838c7f56f455184cca8336d9a0f3564ba43f9aa
snapshot_created: 2026-08-14T09:08:00+02:00
migration_state: PENDING PACKAGE 2/3 NORMALIZATION
last_modified: 2026-09-01T14:14:49+02:00
---

# AMARA Astro & Design Architecture Contract V4 — Interim Markdown Snapshot

> **INTERIM SNAPSHOT.** This file preserves the wording of the currently approved source document while AMARA migrates active documentation into the repository. Formatting was normalized for Markdown; no substantive rule change is intended by this conversion. Where the System Constitution, Governance or Decision Register explicitly records an intentional supersession, the higher owner governs.



---

AMARA Astro & Design Architecture Contract V4
Status                                                ACTIVE
Version                                               4.21.0
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

8.1 Media role contract

`src/components/media/mediaContract.ts` classifies media by job as hero, editorial, split, card, gallery or
utility. `AmaraMediaFrame` owns repeatable framing: shared aspect ratios where the job permits, surface,
optional soft radius, mobile full bleed, restrained interactive motion, captions and sources. `AmaraImage`
remains the responsive delivery owner and exposes the declared media role and optional focal point on the
actual image. Hero geometry and priority remain with the named hero family; a page nominates only its real
LCP candidate for eager loading and high fetch priority. Non-critical media stays lazy and async.

The roles do not erase page-family differences. Trust evidence may remain text-led, Stay galleries remain
decision-oriented and interactive, Location media may establish spatial authority, and Experience media may
carry narrative or provenance context. Captions and sources are authored only when meaningful. Card and
gallery hover treatment is opt-in and respects reduced motion; documentary and utility media is inert by
default. Existing direct compositions are controlled legacy and migrate in bounded representative sets or
when their containing renderer is materially revised.

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

The canonical public header also exposes a compact, localized AMARA Experience access icon immediately before
the language control. It links directly to the access page in the current language, remains distinct from the
editorial AMARA Experience navigation entry and keeps its own accessible name and hit area at every supported
viewport. The protected Guest Guide and its specialized access shell keep their own header contracts.

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
section introductions. `AmaraSection` owns the canonical page-shell rhythm and the approved plain, tint and
inverse surfaces. Its default, hero, compact and closing variants describe page position and spacing; they
are not page-local design knobs.

Equal-surface page sections use one centrally owned inset separator. The one-pixel rule aligns with the page
content gutter on mobile and desktop and never reaches the outer edge of the white page surface.
`AmaraSection` applies the geometry automatically to plain default and compact sections; it exposes no
page-local divider switch. Full-width outer section rules are prohibited. Editorial boxes, display bands, CTA
panels, prose, pull quotes, bylines and provenance blocks carry no decorative top or bottom edge rules. Borders
inside lists, tables, controls and media frames remain valid when their component job requires structure or
interaction.

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

17.9 Form-control contract

`AmaraFormControl` is the canonical production owner for the shared native field surface used by date inputs,
selects and button-based calendar triggers. It owns minimum hit height, width, border, radius, surface, padding,
focus, expanded, invalid and disabled states through the `am-form-control` role in `global.css`.

The semantic form, label text, grouping, validation message and client behaviour remain with the consuming job.
A filter chip, checkbox, radio control, action button or free-form editor is not a form-control variant merely
because it accepts input. New Stay and booking controls use the production component rather than recreating its
field recipe locally. The current canonical consumers are the Stay search finder, property booking calendar and
last-minute guest filter.

17.10 Page-end contract

`src/components/page-end/pageEndContract.ts` classifies the final content sequence as FAQ, related content,
editorial close, next action or conversion. The contract exposes semantic role, family, visual weight, surface
and maximum-width intent. Mobile DOM order is canonical: FAQ and recommendations precede a close, and a
decisive conversion close is last when present. Roles may be omitted; FAQ is never required merely to fill a
sequence.

`FaqAccordion`, `ExperiencePreFooter` and `EditorialClosingCta` are the existing productive owners integrated
with this contract. They retain authored content and action resolution. `AmaraSection`, section-introduction
roles and action components continue to own rhythm, hierarchy and action treatment. Stay booking widgets and
provider handoff, Trust evidence logic, Location onward routing and Experience recommendation selection remain
family-owned; the page-end contract does not become a universal conversion component.

17.11 Global system and page-type composition profiles

AMARA has two distinct design-control levels. The global design system owns foundations, primitives, media,
section rhythm, responsive behaviour and accessibility. `src/components/page-type/pageTypeContract.ts` owns
the composition profiles `authority`, `explore`, `trust` and `conversion`: dominant psychological purpose,
layout character, information density, media weight, whitespace intent, CTA mode and compatible page-end
roles. The ownership chain is global design system → page-type profile → page-family template → concrete page
and localized content. A profile orchestrates global production owners; it never creates alternative colors,
controls or components.

Every classified public page has exactly one dominant type. Page type is not page family: one family template
may support different explicitly declared profiles. Missing classification has no default, and unclassified
legacy pages remain unchanged. Authority supports FAQ, related content, editorial close and restrained next
action; Explore supports related content, editorial close and inspirational next action; Trust supports FAQ,
editorial close and subtle next action; Conversion supports FAQ plus one terminal conversion close. The
Conversion profile describes AMARA search, availability, stay-decision and checkout-handoff composition only.
It does not own booking runtime, create an Astro checkout or change the boundary governed by
`AMARA-BOOKING-ARCHITECTURE.md` and `src/lib/directBooking.ts`.

17.12 Reference anatomies and conversion ownership

The four page-type profiles record semantic module phases and one canonical reference family without becoming
a page builder or runtime ordering engine. Arrival Guide is the Authority reference, Experience Hub the Explore
reference, About Us the Trust reference and Vacation Rental the Conversion reference. The family template owns
composition for all of its concrete localized pages; destination, stay and locale do not create special layouts.

Conversion intent has two valid owners: `page-end-owned` where one terminal conversion close carries the
decision, and `family-owned` where the Stay calendar, quote, sticky action and protected checkout handoff carry
it. A Conversion page may therefore end with a non-competing editorial close and does not require an additional
conversion page-end module. Direct Booking Benefits is page-end-owned; Vacation Rental is family-owned. In both
cases there is one coherent primary path. The external booking boundary remains unchanged. Explore closes use
editorial next actions rather than decisive button treatment; Authority closes remain restrained information
transitions; Trust closes remain subtle.

17.13 Active page-family classification registry

`AMARA_PAGE_FAMILY_PROFILES` in `src/components/page-type/pageTypeContract.ts` is the sole active mapping of
approved page-family identifiers to their page type and, for Conversion families, conversion ownership. A
template selects one registered family explicitly and `getPageFamilyProfile()` fails rather than inventing a
default. Unclassified legacy and Guest Utility families remain outside the registry. Page type and page family
are emitted as separate attributes; classification is not inferred from a route, layout or directory.

Reference anatomies remain canonical examples, not required phase checklists. A family may omit phases that do
not serve its dominant job. In particular, documentary Authority families such as Booking Stay Terms and Legal
Notice require neither functional media nor a next action and do not adopt Location-guide composition. This
release registers the five existing reference families plus the approved attribute-only Booking Terms, Legal
Notice, Nerja Location Hub, Nerja Where-to-Stay, Instagram, Stay Search and Last Minute families without changing
their visible composition.

The registry now covers every public family template with a dominant public page job. Shared renderers classify
their localized and destination variants once at the template boundary. Guest Guide remains deliberately outside
the four public profiles because it is a noindex post-booking utility rather than a public discovery, trust,
authority or conversion page; internal tools and error pages remain outside for the same contract-boundary reason.

17.14 Executable Trust-family composition

`src/components/trust/trustFamilyContract.ts` owns the bounded composition profiles for `trust-content`,
`guest-reviews` and `comfort-amenities`. It names each family's semantic job, permitted phases, intro and evidence
alignment and shared subtle-close rule. `TrustPageLayout` emits that contract for those three consumers, while
`TrustFamilyClosing` delegates their final next action to `EditorialClosingCta` and the existing Trust page-end
role. The contract does not classify other users of the layout, render content schemas or create a second card,
hero, evidence or action system.

About Us retains philosophy, principles, responsibility and personal host context; Guest Reviews retains sourced
reviews and awards; Comfort & Amenities retains its functional inventory and detail interaction. Authored action
styles and order remain family-owned, but the close cannot introduce a second conversion owner. Winter Stays is
the approved `location-winter-stays` Authority family because its dominant job is practical seasonal orientation.

17.15 Executable Authority-family composition

`src/components/authority/authorityFamilyContract.ts` groups every registered Authority family by its real
composition job: practical guidance, destination orientation, FAQ authority or documentary authority. It owns
the permitted semantic phases and the shared direct-answer, information/evidence, functional-media and restrained
close alignments. `BaseLayout` emits the selected profile with the existing page-type and family attributes, so
Location layouts, FAQ layouts and direct documentary templates consume one contract without becoming one renderer.

Practical guidance remains action- and planning-led; destination orientation retains spatial context, functional
media and comparison; FAQ pages remain question-led; Booking Stay Terms and Legal Notice remain formal documents
for which media and next actions are not required. The contract does not reorder content, infer a family, render a
schema or introduce a universal Authority component. Family-owned heroes, evidence, FAQ, callout, media and closing
owners remain responsible for their existing jobs and visible output.

17.16 Executable Conversion-family composition

`src/components/conversion/conversionFamilyContract.ts` owns the smallest confirmed composition grouping for all
seven registered Conversion families: Stay Discovery for Romantic Hideaways, Stay Search Results and Last Minute
Stays; Stay Decision for Vacation Rental; Direct Booking for Direct Booking Benefits; and Specialist Enquiry for
Group Stays and Property Sale. It declares each group's semantic phases, intro, decision, evidence and action
alignment, permitted close and funnel protection. `BaseLayout` emits the selected profile beside the existing
page-type attributes and verifies its ownership against `AMARA_PAGE_FAMILY_PROFILES` rather than creating a second
ownership registry.

Stay Discovery and Stay Decision remain `family-owned`: selection, availability, property facts, calendar, quote,
sticky action and protected checkout handoff stay with their existing production owners and cannot gain a second
terminal funnel. Direct Booking and Specialist Enquiry remain `page-end-owned` and retain exactly one clear booking
or enquiry close. The contract does not infer families, derive routes or content, render or reorder sections, replace
search/calendar/quote/checkout components, or create a universal Conversion template. It adds semantic data
attributes only; no public CSS or client-script selector consumes them in this release, so visible composition and
the external booking provider boundary remain unchanged.

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
| 4.9.0 | 2026-08-25T19:02:14+02:00 | Activated the canonical native form-control owner, centralized select, date-input and calendar-trigger states, migrated all three repeated public recipes and rendered the production API in the living styleguide. |
| 4.10.0 | 2026-08-25T20:00:00+02:00 | Activated the semantic media-role contract, shared production frame and focal-point hook; migrated bounded Location and Experience split-media consumers and rendered production media roles in the living styleguide. |
| 4.11.0 | 2026-08-25T20:30:00+02:00 | Activated semantic page-end roles and canonical mobile order across bounded Trust, Stay, Location and Experience consumers while preserving family conversion owners. |
| 4.12.0 | 2026-08-25T21:00:00+02:00 | Activated the two-level global-system/page-type architecture, four semantic composition profiles and bounded explicit consumers without default-classifying legacy pages or changing booking ownership. |
| 4.13.0 | 2026-08-26T10:00:00Z | Added canonical reference anatomies, corrected terminal Conversion ownership to page-end-owned or family-owned, and aligned the four bounded reference templates without changing booking runtime. |
| 4.14.0 | 2026-08-26T12:00:00Z | Centralized approved family-to-type mappings, registered seven attribute-only families and clarified reference anatomies as optional canonical phases without visible redesign. |
| 4.15.0 | 2026-08-26T15:00:00Z | Closed public page-family classification coverage at the owning template boundary while preserving Guest Guide, internal tools and error pages as explicit non-public-profile exceptions. |
| 4.16.0 | 2026-08-26T16:00:00Z | Activated the bounded executable Trust-family composition contract and shared Trust close, corrected Winter Stays to Authority and described Guest Guide accurately as a noindex post-booking utility. |
| 4.17.0 | 2026-08-26T17:00:00Z | Activated the executable Authority-family composition contract across practical, destination, FAQ and documentary groups without changing public composition or conversion paths. |
| 4.18.0 | 2026-08-26T18:00:00Z | Activated the executable Conversion-family composition contract across Stay Discovery, Stay Decision, Direct Booking and Specialist Enquiry without changing public conversion or checkout paths. |
| 4.19.0 | 2026-08-31T18:18:00+02:00 | Standardized horizontal boundaries after repeated partial-divider regressions: equal-surface section dividers now span their full owning surface, decorative partial-width rules are retired from prose, pull quotes, bylines and provenance, and structural component borders remain permitted. |
| 4.20.0 | 2026-09-01T07:40:00+02:00 | Retired decorative horizontal rules entirely from outer section boundaries and the top/bottom edges of editorial boxes, display bands and CTA panels; removed the shared divider API and added source plus browser guardrails while preserving structural borders inside lists, tables, controls and media frames. |
| 4.21.0 | 2026-09-01T07:48:00+02:00 | Corrected section-boundary ownership to the approved inset treatment: equal-surface sections receive one centrally controlled line aligned to the content gutter, never the white-canvas edge; editorial boxes, display bands and CTA panels retain clean top/bottom edges. |
| 4.22.0 | 2026-09-01T14:14:49+02:00 | Added the localized AMARA Experience access icon immediately before the language control in the canonical public header while preserving the existing booking and mobile containment contracts. |
