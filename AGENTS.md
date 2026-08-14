# AGENTS.md — AMARA Project Rules and SSOT Gateway

## Authority notice

This file remains the model-neutral implementation gateway. It preserves the important current operational rules while routing durable policy to the AMARA SSOT.

Before material AMARA work, read:

1. `docs/AMARA_REGISTER.md`;
2. the relevant governing owner;
3. any explicitly listed interim/feature owner needed for the task.

If this gateway conflicts with a higher owner or an explicitly recorded intentional supersession, the higher owner governs. A conversational shorthand or isolated new statement never silently supersedes an ACTIVE contract; use Reality Reconciliation.

## Mission

Build AMARA as a premium-feeling Astro website with simple, repeatable architecture.

Default mindset:
- standardized, low-complexity patterns;
- pragmatic reuse over enterprise-heavy abstraction;
- fast, calm, structured and visibly professional output;
- no overengineering.

## Core execution rule

**Default: AMARA FAST.**

For an already-scoped normal task: **understand -> implement -> targeted validate -> atomic local commit**. The operator's direct instruction to implement the named task counts as confirmation; do not add another approval round.

Use deeper analysis/validation only for a concrete shared/infrastructure risk, unresolved contradiction, protected contract or explicit release gate.

Do not jump directly into implementation when architecture, routing, localization structure, design-system behavior, shared components or other protected contracts are genuinely affected.

If scope expands, validation fails or repository/document reality materially disagree: stop and report the decision point.

**No ritual re-review:** if the agreed fix passes its targeted implementation checks, close the normal task.

**No routine full build:** content and bounded local-page work use targeted validation; full builds belong to concrete compile/global risk, shared/infrastructure work or batch/release boundaries.

**Time discipline:** a normal FAST task should usually finish in roughly 5–10 minutes. If it does not, report the concrete blocker/cost instead of silently expanding the audit.

## Architecture philosophy

Prefer existing AMARA layouts, components, tokens, content structures and page-family patterns. Keep changes narrow. Do not create parallel systems, duplicate authoring models or speculative future-proofing.

AMARA is Astro-native. Keep Astro simple: few layouts, focused shared components, clear content objects, low page logic and minimal client JavaScript unless it provides a concrete user benefit.

## Localization rules

The shared cross-language SSOT is **facts, page job, evidence, claim boundaries, required information/topics, conversion intent, meaning depth and material nuance**. English may be used as a practical semantic working reference, but it is **not** a mandatory master language.

Each locale must sound natural and market-native. No literal translation, machine phrasing or grammar copied from another language. **Do not shorten away required information, weaken meaning or remove material nuance.** Locale-specific examples/emphasis/additional depth are allowed only when explicitly justified by the locale brief/evidence and never by omitting shared required information.

Use proper language characters in visible labels, titles and descriptions (for example German/Swedish diacritics). Infrastructure identifiers such as slugs, URLs, tokens and filenames follow the active URL/route contract and should not introduce locale-specific special characters unless that contract explicitly changes.

Use structured language dictionaries/content objects where practical: one structural page system, localized content by language key, parallel templates only when explicitly justified.

**Navigation booking CTA contract:** the `Check Availability` / booking CTA must have a native localized label in all five supported locales: EN, DE, ES, NL and SV.

## Design system rules

High visual quality does not justify architectural complexity. Preserve hierarchy, section rhythm, spacing discipline, typography hierarchy and component consistency. Do not redesign while cleaning up or refactoring unless redesign is the approved objective.

If a page/variant is designated a visual master, preserve its visible output unless the approved workstream explicitly changes composition.

## Component rules

Reuse first. Introduce or expand a component only for a real recurring use case that improves consistency without creating a parallel system.

Shared components such as Navigation, Footer, Hero, FAQ, CTA and Layouts are high-risk: state scope risk, consider global consumers, keep changes minimal and avoid unrelated cleanup.

## Hero rules

Hero components are system-critical. Do not improvise new hero structures, switch hero families casually or change spacing/composition during unrelated refactors. Use the canonical family pattern when one exists.

## Routing / Registry / Slug rules

Treat slugs, route ownership, registry behavior, link resolution, language routing and route generation as infrastructure. Do not change them without the explicit alignment required by the active URL/route contract and Decision Register.

Use the existing `linkRegistry.ts` and `routeOwnership.ts` contracts for navigation logic where applicable. Do not introduce silent cross-language fallbacks, hidden routing aliases or invented token behavior.

## Current external booking boundary

Astro is the sole AMARA **website** runtime. The current external booking / availability / checkout boundary remains separately governed and active until an explicit architecture workstream changes it.

For that scope, the current interim owner is `AMARA-BOOKING-ARCHITECTURE.md` and the centralized repository helper it references. Do not hardcode booking hosts elsewhere, point booking CTAs at an OTA, or let external operational data overwrite authored AMARA content outside its approved data boundary.

## Trust page rules

Trust pages should remain clear, calm, premium and reassuring. Preserve their approved visual family and avoid mixed CTA patterns, half-localized states or accidental page-family splits.

## Code rules

Code must be production-ready, narrow in scope and consistent with project conventions. Comments are in professional English and explain architectural intent rather than narrating obvious syntax. Do not leave temporary hacks or unapproved fallback systems.

## Validation rules

Validation follows Governance risk classes rather than one universal full-build rule. Use targeted checks for micro/content edits, page/browser/build validation for local structural work and broader cross-consumer validation for shared/infrastructure changes.

When a shared component changes, verify representative unrelated consumers. When localization changes, verify the affected locale is complete and natural. A wrong visible page is FAIL even if tests pass.

### FAST preflight checks

Two deterministic checks, run by the implementing agent. They do not add a review round and do not require a second agent.

**Before creating a new public page, route or guide:** grep the whole repository — not just the current location cluster — for an existing page with the same or substantially overlapping topic/search intent. Check routes, page families/content and registry entries. On probable duplication or ownership overlap, stop and report before creating the page.

**After a multilingual change meant for all five locales:** verify EN, DE, ES, NL and SV deterministically for structural completeness — required keys/entries, sections and links present in all five. A count/structure mismatch is FAIL and must be fixed before commit. Browser-testing all five locales is not the default.

## What to avoid by default

Avoid broad refactors, architecture rewrites, registry cleanups during unrelated work, design refreshes, page-family redesigns, new component systems and enterprise-level abstraction for small tasks unless explicitly approved.

## Operator commands

`AMARA FAST: ...` means: use the minimum-safe FAST execution posture. Do not repeat settled research, do not add a post-fix review, and do not run a full production build unless a concrete risk requires it.

`Bitte in die AMARA SSOT aufnehmen: ...` means: classify the information and place/recommend it in the smallest correct SSOT owner/inbox; do not automatically version multiple documents immediately.

`AMARA SSOT SYNC` means: consolidate pending SSOT items once, update only owners whose normative meaning changed, update the Register/Change Ledger, and prepare one documentation commit.

`OK, in die SSOT übernehmen.` authorizes the already-aligned documentation-only canonical update; it does not authorize unrelated website/runtime changes.

`Bitte AMARA SSOT Audit durchführen.` means: audit active owners, decisions, review triggers, duplication and repository/document divergence.

## AMARA one-line principle

**Simple architecture. Professional signal.**
