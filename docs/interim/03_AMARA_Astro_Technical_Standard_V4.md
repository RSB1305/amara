---
document_id: AMARA-INT-ASTRO-003
title: AMARA Astro Technical Standard V4
version: 4.0
status: ACTIVE
authority_class: CONTRACT / GOVERNING INTERIM
source_type: INTERIM SNAPSHOT FROM APPROVED PDF
source_attachment: "03_AMARA_Astro_Technical_Standard_V4 (1).pdf"
source_sha256: b3d8a3e780b29b5be42922aec838c7f56f455184cca8336d9a0f3564ba43f9aa
snapshot_created: 2026-08-14T09:08:00+02:00
migration_state: PENDING PACKAGE 2/3 NORMALIZATION
---

# AMARA Astro Technical Standard V4 — Interim Markdown Snapshot

> **INTERIM SNAPSHOT.** This file preserves the wording of the currently approved source document while AMARA migrates active documentation into the repository. Formatting was normalized for Markdown; no substantive rule change is intended by this conversion. Where the System Constitution, Governance or Decision Register explicitly records an intentional supersession, the higher owner governs.



---

AMARA Astro Technical Standard V4
Status                                                ACTIVE
Version                                               4.0
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

7. Hero contract
Hero media is not a card.
Do not add card borders, shadows, fake frames, or reusable-card radius behavior to hero media.
Hero geometry and image priority must follow the page family's canonical hero pattern.
A repeated hero family must use a shared hero component or shared structural contract rather than page-
specific variants.

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


- scroll lock;
- language-switch behavior.
Do not refactor navigation incidentally during page work.

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
