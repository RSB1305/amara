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

Public editorial and design work must preserve the active Constitution brand core: **AMARA — Romantic Hideaways — special places for shared time as a couple.** This is a brand positioning, not a claim that every stay has every romantic feature; property-specific claims remain evidence-based.

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
- Validation is not cumulative: choose the single smallest sufficient path. Do not routinely run `typecheck` -> `check` -> `build`; `npm run build` already runs its production prebuild/postbuild gates.
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
- AMARA uses one mobile-first responsive design system. The mobile composition is the canonical source layout; larger viewports progressively enhance space, imagery and columns without changing semantic order, dominant job or conversion path.
- Preserve hierarchy, section rhythm, spacing, typography and component consistency. Do not redesign during cleanup or refactoring unless redesign is the objective.
- Shared Navigation, Footer, Hero, FAQ, CTA and Layout changes have broad blast radius; keep them minimal and validate representative consumers.
- Use existing `linkRegistry.ts` and `routeOwnership.ts` contracts where applicable. Do not invent silent fallbacks, aliases or token behavior.
- Text size, weight, tracking and case come from the typography roles in `src/styles/global.css`. A typographic arbitrary Tailwind value fails `check:typography-policy` unless it is deliberately recorded in the baseline. A treatment used at more than one call site is a role, not a repeated recipe.
- Keep Astro simple and client JavaScript minimal unless it provides a concrete user benefit.
- Code must be production-ready, narrow and consistent with project conventions. Comments explain architectural intent in professional English.

## Localization

Content modules localize at the leaf: the module describes the page once and each authored string carries its five locales, using `LocalizedText` and its siblings from `src/types/content.ts` (`DR-CONTENT-STRUCT-001`). Modules still carrying one copy of the page shape per language are migrated when they are materially revised, not in a separate campaign.

The five locales of a module must carry the same **semantic units**: every key exists in every locale, and lists of units — FAQ entries, cards, themes, sections, CTA blocks — hold the same number of entries. Where those entries carry a stable `id`, `token`, `key` or `slug`, identity and order are enforced too. Where they do not, only the count and field shape are checked, so give a new list of units an id. A contract test enforces this and records the gaps that exist today. A recorded gap is closed by authored copy in the missing languages, never by deriving one locale from another.

A list whose *selection* is a deliberate decision about a market declares itself with `MARKET_CURATED` next to the data. That exempts it from identity parity and nothing else, and it must not be used on a list that has simply drifted apart.

**Prose segmentation is not a semantic unit.** Splitting one paragraph into two, or joining two into one, is what a natural translation does and is expressly allowed; the parity test does not compare the length of a prose list. Use `LocalizedTextList` for running text and an identified list of objects for units that must correspond.

The cross-language SSOT is facts, page job, evidence, claim boundaries, required information/topics, conversion intent, meaning depth and material nuance. English may be a working reference but is not a mandatory master language.

Every locale must be natural and market-native. Do not shorten away required information, weaken meaning or remove material nuance. Use correct visible-language characters; infrastructure identifiers follow the active route contract.

Public editorial copy speaks from AMARA's collective host perspective and addresses guests in the plural form natural to EN, DE, ES, NL and SV. This voice must not turn researched or third-party evidence into an invented first-party observation.

New and materially revised public editorial copy uses **experiential authority** (`TR-CONTENT-005`): place guests in a concrete, truthful situation and connect the relevant scene or condition to movement, choice, stay consequence and a useful next step. Prefer active verbs and specific verified detail to distant category language. Do not invent atmosphere or first-party experience, and do not weaken the page job, direct answer, evidence, caveats, safety or provenance. Calibrate the technique to the page type; utility, legal, system and safety-critical copy prioritizes instruction clarity. A micro correction does not trigger an adjacent rewrite.

A public page whose dominant job answers a clear question opens with a **self-contained direct answer** (`TR-CONTENT-006`): roughly 60–130 words immediately after the H1, before hero media and before any section, readable on its own, carrying the values a guest decides on. Take those values from `knowledge/`, with the check date where volatility is medium or high. State no value the evidence does not support — omit it rather than estimate it — and avoid precision that is not true for most readers: where something varies by person or season, give the range or the consequence, not a point value. The word range is an authoring target; each locale writes it natively and may differ in length. Utility, legal, system, entry and safety-critical surfaces are out of scope.

Where a page compares two or more options across the **same named attributes**, emit that comparison as a table or an identified list rather than prose (`TR-CONTENT-007`). An attribute the evidence does not cover is omitted or marked unknown, never estimated to complete a row. Surrounding editorial copy stays prose.

The Navigation booking CTA must have a native localized label in EN, DE, ES, NL and SV.

## Consolidation slot

FAST optimizes each task locally, which is right for the task and, repeated often enough, produces duplication no single task is responsible for. This slot is the counterweight (`DR-EXEC-009`).

After a material release batch, the area that batch actually changed may be reviewed for repeated content, renderer and presentation patterns and consolidated. Within that area this is expected work, not scope creep, and it may touch the shared owners that live inside it.

- The changed area bounds the slot. It is not an opening for repository-wide refactoring.
- Consolidation preserves behaviour. Prove it: compare the built output before and after, and treat a visible difference as a finding rather than an acceptable side effect.
- Where one role has several spellings, fix it at the value most call sites already use, and say in the commit how many sites shift.
- No redesign, no new features, no content shortening. A genuinely distinct page job stays distinct.
- Contracts outside the changed area keep their normal Class 3 alignment requirement.

## FAST preflights

Before creating a new public page, route or guide, run a targeted repository-wide search for probable topic/search-intent duplication. Repository-wide defines search reach, not work scope. Normally use no more than about three targeted searches or 60 seconds, covering likely topic/intent, route/content and registry ownership. Stop on a probable duplicate; otherwise continue. Never create a full inventory for this check.

After a multilingual change intended for all five locales, check only the changed scope for required entries, sections and links across EN, DE, ES, NL and SV. Natural sentence and paragraph differences are allowed. Do not inspect all multilingual repository content or browser-test all five locales by default.

## Parallel traffic check

When parallel agent work is explicitly active, apply `DR-EXEC-010` before a new implementation task and before integrating or pushing work: spend about 30 seconds maximum on a read-only check of active local worktrees, visible active remote branches or pull requests where available, and scopes declared by the operator or Traffic Controller.

- Stop and report only when another active worker owns the same files or the same shared owner/contract.
- If scopes are separate, proceed immediately.
- Do not turn the check into builds, tests, broad audits, architecture review, lengthy preflight or a new coordination system.

For explicitly parallel Codex, Claude or Codex Cloud work, apply `DR-EXEC-011` as well:

- One active implementation task owns one dedicated branch and one dedicated Git worktree. Do not share a working directory between agents.
- The primary `main` worktree is control/integration space during parallel work; implementation happens in the task worktrees.
- Name branches by worker and bounded task, for example `codex/<task>`, `claude/<task>` or `codex/cloud-<task>`. A branch identifies provenance, not automatic release readiness.
- Every task records its scope before editing. Same-file or same-owner overlap stops; separate scopes proceed.
- Codex Cloud work is includable only after a remote branch, pull request, commit SHA or operator-provided patch makes it visible to the release controller. Cloud agents do not merge directly to `main` unless the operator explicitly assigns them the release-controller role.
- Only one release controller integrates and pushes a release batch. Before push it inventories active worktrees, unmerged local branches, visible unmerged remote branches and open pull requests. Every discovered item must be classified as **included**, **waiting** or **intentionally excluded**; unknown work stops the push.
- Integrate all **included** committed work into one release branch from current `origin/main`, resolve conflicts there, run the release validation once, then use one intentional push, pull request and merge. Never use `git push --all` as integration and never absorb uncommitted or unfinished work.
- After merge, remove completed task worktrees and delete merged task branches. Persistent branches are the exception.

Normal parallel work is: **traffic check -> dedicated task worktree -> implement -> targeted validation -> local commit -> READY handoff**. Release is: **inventory -> classify every workstream -> integrate READY commits -> release validation -> one push/PR/merge -> cleanup**. The Governance owner contains the full normative rule.

## External booking boundary

Astro is the sole AMARA website runtime. The active external booking/availability/checkout boundary remains separately governed by `AMARA-BOOKING-ARCHITECTURE.md` and `src/lib/directBooking.ts`. Do not hardcode booking hosts elsewhere, point booking CTAs at an OTA or let operational data overwrite authored AMARA content outside the approved boundary.

## Git and validation

Use the smallest validation that directly tests the changed scope. Full builds belong to a specific whole-site rendering or generated-output risk, applicable Class 3 work, or batch/release boundaries. Merely editing Astro/TypeScript or consuming an existing shared component is not by itself global risk.

For sandboxed PowerShell Astro commands, disable telemetry in the same invocation:

```powershell
$env:ASTRO_TELEMETRY_DISABLED='1'; npm run typecheck
$env:ASTRO_TELEMETRY_DISABLED='1'; $env:PUBLIC_SITE_URL='https://amara-lodging.es'; npm run build
```

Do not precede the build with `npm run check` merely out of habit; the build already invokes the required production lifecycle.

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
