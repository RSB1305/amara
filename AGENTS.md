# AGENTS.md — AMARA Project Rules

## Mission

Build AMARA as a premium-feeling Astro website with simple, repeatable architecture.

Default mindset:
- 98% of the project should use standardized, low-complexity patterns
- Prefer pragmatic, reusable solutions over abstract or enterprise-heavy systems
- Keep the site fast, calm, structured, and visibly professional

AMARA should feel like:
- simple architecture
- professional signal
- premium execution
- no overengineering

---

## Core Execution Rule

Always follow this sequence:

1. Analyze
2. Recommend
3. Wait for explicit confirmation
4. Implement

Do not jump directly into implementation when architecture, routing, localization structure, design system behavior, or shared components are affected.

If the task is ambiguous and affects system structure:
- stop
- explain the decision point
- ask for confirmation before changing code

---

## AMARA Default Philosophy

### Prefer standardization
Use the existing AMARA patterns by default.

Do:
- reuse existing layouts
- reuse existing components
- reuse existing tokens
- reuse existing content structures
- keep page families consistent
- keep changes narrow and controlled

Do not:
- invent a new pattern for a one-off page
- create parallel systems
- create a second visual solution for the same job
- introduce complexity unless the current standard truly cannot solve the task

### Taxi, not spaceship
AMARA is a premium small-site project, not an enterprise platform by default.

That means:
- high-quality output
- low-complexity structure
- minimal moving parts
- no unnecessary abstractions

Enterprise-grade options may exist in the background, but they are not the default implementation mode.

---

## Astro Architecture Rules

### Keep Astro simple
Use Astro like a clean, high-performance, structured website builder.

Default approach:
- few layouts
- few shared components
- few page families
- low logic inside pages
- clear content objects
- minimal JS unless clearly needed

Avoid:
- unnecessary page-family engines
- abstraction layers for small problems
- duplicate authoring systems
- “future-proofing” that increases present complexity without clear benefit

---

## Localization Rules

### English is SSOT
English is the semantic source of truth for meaning.

This means:
- preserve meaning exactly
- preserve information depth
- preserve factual accuracy
- do not shorten
- do not add new meaning
- do not remove nuance

### Localization is NOT literal translation
All target languages must sound natural, idiomatic, and market-native.

Use:
- native hospitality phrasing
- market-appropriate wording
- language that a real guest-facing premium apartment brand would use

Do not use:
- literal translation
- machine-sounding wording
- grammar copied from English
- terms that are technically correct but unnatural in market context

Always ask internally:
- “How would a native speaker really say this on a boutique hospitality website?”

### Use language dictionaries / content objects
Localization should use structured language dictionaries or page-family content objects where practical.

Preferred pattern:
- one page structure
- one content object
- one language key per locale
- same structure, different language content

Avoid:
- hardcoded full-page copy per language when a structured content object would keep the page family cleaner
- parallel templates per language unless explicitly approved

---

## Design System Rules

### Professional signal, simple structure
The site must look highly professional, intentional, and premium.

But do not confuse visual quality with architectural complexity.

Do:
- preserve visual hierarchy
- preserve section rhythm
- preserve spacing discipline
- preserve typography hierarchy
- preserve component consistency

Do not:
- redesign while “cleaning up”
- modernize without approval
- subtly change composition during refactors
- replace a proven component with a different look just because it seems cleaner

### Design freeze rule
If the user identifies a page or variant as the visual master:
- treat that version as frozen
- preserve its visible output
- unify logic underneath it
- do not change visual composition unless explicitly requested

---

## Component Rules

### Reuse first
Before creating or changing a component, check whether an existing AMARA component already solves the need.

Only introduce or expand a component if:
- there is a real recurring use case
- it improves consistency
- it does not create a parallel system

### Shared components are high-risk
When editing shared components such as:
- Navigation
- Footer
- Hero
- FAQ
- CTA
- Layouts

always:
- state the scope risk clearly
- verify possible global side effects
- keep changes minimal
- avoid unrelated cleanup

---

## Hero Rules

Hero components are system-critical.

Do not:
- improvise new hero structures
- switch hero components casually
- change hero spacing or composition during refactors
- move to a different hero style without approval

If one hero is designated as the canonical standard for a family:
- use that one
- preserve the approved visual output exactly

---

## Routing / Registry / Slug Rules

Treat these as infrastructure.

Do not change without explicit approval:
- slugs
- route ownership
- registry behavior
- link resolution logic
- navigation language behavior
- route generation scope

Never introduce:
- hidden fallbacks
- silent cross-language redirects
- fake availability in the UI
- invented token behavior

Infrastructure stability overrides convenience.

---

## Trust Page Rules

Trust pages must feel:
- clear
- calm
- premium
- reassuring
- structurally consistent

Do not let trust pages drift into:
- inconsistent hero systems
- mixed CTA patterns
- half-localized states
- page-family splits

When working on trust pages:
- preserve the approved visual family
- standardize underneath
- keep the visible result coherent

---

## Code Rules

All code must be:
- production-ready
- copy-paste-ready
- narrow in scope
- consistent with existing project conventions

Comments should:
- be in professional English
- explain architectural intent
- explain why the structure exists
- avoid trivial narration

Do not:
- leave behind temporary hacks
- introduce fallback logic without approval
- mix cleanup with implementation unless explicitly requested

---

## Validation Rules

After implementation, always verify:
- build still passes
- no unrelated files were changed without reason
- shared components did not regress globally
- approved visual references remain visually unchanged where required
- localization did not shorten or distort meaning

If a task touched a shared component:
- verify at least one unrelated page that also uses it

If a task touched localization:
- verify no English leftovers remain where localized content was expected
- verify the result sounds native, not translated

---

## What to Avoid by Default

Avoid these unless explicitly approved:
- broad refactors
- architecture rewrites
- registry cleanups during unrelated work
- design refreshes
- page-family redesigns
- introducing new component systems
- enterprise-level abstraction for small page tasks

---

## Preferred Delivery Style

When responding with implementation work:
- explain the smallest safe change
- identify exact files affected
- mention risks if shared systems are touched
- keep changes controlled
- do not bundle unrelated improvements

When architecture is involved:
- recommend the strategically better option
- do not stay neutral if one option is clearly safer
- but do not implement without explicit confirmation

---

## AMARA One-Line Principle

Simple architecture. Professional signal.