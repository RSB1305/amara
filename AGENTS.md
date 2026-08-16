# AGENTS.md — AMARA Daily Operating Contract

## Daily gateway

`AGENTS.md` is the sufficient operating context for normal Class 0–2 work.

The operator's current request is the only active work order. Handovers, TODOs, audits, inventories, maintenance notes and suggested next steps are context only unless the operator explicitly selects them.

Do not automatically read `docs/AMARA_REGISTER.md` or owner documents. Read the Register and the relevant owner only when:

- the operator requests architecture or SSOT work;
- the task would change a protected contract; or
- implementation reveals a concrete contradiction or uncertainty.

Documentation is reference material, not a cumulative checklist. Using an existing approved page family, route pattern, registry/resolver, component pattern or localization structure is normal implementation, not an architecture change.

## Mission

Build AMARA as a premium-feeling Astro website with simple, repeatable architecture: standardized patterns, pragmatic reuse, calm professional output and no overengineering.

## AMARA FAST

FAST is the default for normal Class 0–2 work:

**understand -> implement -> targeted validate -> exact stage -> atomic local commit**

The operator's direct implementation request is confirmation. Ask only when unresolved ambiguity would materially change the result, create substantial avoidable rework or trigger an irreversible/high-risk action.

- Keep scope narrow and preserve unrelated work.
- Use repository reality for current-state questions; ignore stale inventories and do not repair them incidentally.
- Reuse approved layouts, components, tokens, content structures and page-family patterns.
- Do not create new documentation, tests, audit scripts, validation utilities, inventories, npm checks or guardrails unless the operator requests them as deliverables. Existing relevant tooling may be used.
- No mandatory second-agent review, post-fix re-review, full production build or five-locale browser matrix for normal Class 0–2 work.
- A successful targeted check closes a normal task.
- A normal FAST task should usually deliver its result within roughly 5–10 minutes total. If it will not, report the concrete blocker instead of expanding the process.
- End result-first. Do not offer optional process, audit, tooling or validation work; offer only meaningful content/product/scope choices when a choice is genuinely needed.

## Change classes and protected triggers

- **Class 0:** micro edits with no semantic, layout or runtime impact.
- **Class 1:** content changes in existing fields that preserve page job, structure, route and runtime contracts.
- **Class 2:** bounded local page/composition/presentation changes that do not change shared owners.
- **Class 3:** changes to the system itself, including resolver semantics, canonical/hreflang architecture, route ownership, Link Registry semantics, global navigation, broadly shared infrastructure/components, global CSS/tokens, analytics/consent or booking/checkout architecture.

Class 3 and protected-contract work requires the Register, relevant owner and explicit alignment. If ordinary implementation unexpectedly reaches that boundary, stop and report the decision point.

Classify the change by the owner or contract actually being changed, not by shared infrastructure that a local consumer merely uses. A local, behavior-preserving cleanup is not Class 3 solely because it references a shared component, global style or token. It becomes Class 3 when the shared owner or contract itself changes.

## Implementation rules

- Prefer existing AMARA architecture. Do not create parallel systems, duplicate authoring models or speculative abstractions.
- Preserve hierarchy, section rhythm, spacing, typography and component consistency. Do not redesign during cleanup or refactoring unless redesign is the objective.
- Shared Navigation, Footer, Hero, FAQ, CTA and Layout changes have broad blast radius; keep them minimal and validate representative consumers.
- Use existing `linkRegistry.ts` and `routeOwnership.ts` contracts where applicable. Do not invent silent fallbacks, aliases or token behavior.
- Keep Astro simple and client JavaScript minimal unless it provides a concrete user benefit.
- Code must be production-ready, narrow and consistent with project conventions. Comments explain architectural intent in professional English.

## Localization

The cross-language SSOT is facts, page job, evidence, claim boundaries, required information/topics, conversion intent, meaning depth and material nuance. English may be a working reference but is not a mandatory master language.

Every locale must be natural and market-native. Do not shorten away required information, weaken meaning or remove material nuance. Use correct visible-language characters; infrastructure identifiers follow the active route contract.

The Navigation booking CTA must have a native localized label in EN, DE, ES, NL and SV.

## FAST preflights

Before creating a new public page, route or guide, run a targeted repository-wide search for probable topic/search-intent duplication. Repository-wide defines search reach, not work scope. Normally use no more than about three targeted searches or 60 seconds, covering likely topic/intent, route/content and registry ownership. Stop on a probable duplicate; otherwise continue. Never create a full inventory for this check.

After a multilingual change intended for all five locales, check only the changed scope for required entries, sections and links across EN, DE, ES, NL and SV. Natural sentence and paragraph differences are allowed. Do not inspect all multilingual repository content or browser-test all five locales by default.

## External booking boundary

Astro is the sole AMARA website runtime. The active external booking/availability/checkout boundary remains separately governed by `AMARA-BOOKING-ARCHITECTURE.md` and `src/lib/directBooking.ts`. Do not hardcode booking hosts elsewhere, point booking CTAs at an OTA or let operational data overwrite authored AMARA content outside the approved boundary.

## Git and validation

Use the smallest validation that directly tests the changed scope. Full builds belong to concrete compile/global risk, Class 3 work or batch/release boundaries.

Inspect the working tree, preserve unrelated changes, stage only explicit task files, verify the staged set and `git diff --cached --check`, and make one coherent local commit when requested. Do not push without explicit instruction.

## External build budget and release batching

Treat the operator-reported Cloudflare Pages limit of 500 builds as a hard shared budget. A local commit consumes no external build; a branch push, pull-request update or merge can trigger GitHub Actions and Cloudflare builds.

- Keep validated Class 0–2 changes and behavior-preserving cleanup commits local by default, and batch them into intentional release points.
- Do not propose or perform a separate push or pull request for every micro change. Do not use remote CI or Cloudflare as the first validation when the relevant checks can run locally.
- Before requesting or performing any push, inspect the active workflow and deployment triggers and tell the operator the exact commits and scope in the batch, the expected GitHub Actions runs and Cloudflare builds through pull request and merge, and why this is a sensible release boundary.
- Push authorization applies only to the named batch after that cost disclosure. It does not authorize additional update or fix pushes; finish known local corrections first and batch necessary follow-up fixes whenever practical.
- Use targeted validation while accumulating local commits. Run the complete release validation once at the batch boundary, then prefer one branch push, one pull request and one merge for the approved batch.
- Exceptions require either an urgent production or security need, or an explicit operator override after the external build cost has been disclosed.

## Operator commands

- `AMARA FAST: ...` — minimum-safe FAST execution.
- `AMARA RELEASE BATCH` — report the accumulated scope and expected external build cost, run the release gate once and request approval for one intentional push and pull request.
- `Bitte in die AMARA SSOT aufnehmen: ...` — classify and recommend/place the item in the smallest correct SSOT owner or inbox.
- `AMARA SSOT SYNC` — consolidate pending SSOT items once and update only owners whose normative meaning changed.
- `OK, in die SSOT übernehmen.` — authorize the already-aligned documentation-only canonical update.
- `Bitte AMARA SSOT Audit durchführen.` — audit active owners, decisions, review triggers, duplication and repository/document divergence.

**Simple architecture. Professional signal.**
