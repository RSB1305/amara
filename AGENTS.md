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

**understand -> implement -> proportionate targeted validation -> atomic local commit**

A completed Class 0–2 implementation ends with an atomic local commit after successful proportionate validation unless the operator explicitly says not to commit or the work is analysis/draft only. Exact staging remains a technical safety step, not an operator task.

The operator's direct implementation request is confirmation. Ask only when unresolved ambiguity would materially change the result, create substantial avoidable rework or trigger an irreversible/high-risk action.

- Keep scope narrow and preserve unrelated work.
- Use repository reality for current-state questions; ignore stale inventories and do not repair them incidentally.
- Reuse approved layouts, components, tokens, content structures and page-family patterns.
- Do not create new documentation, tests, audit scripts, validation utilities, inventories, npm checks or guardrails unless the operator requests them as deliverables. Existing relevant tooling may be used.
- No mandatory second-agent review, post-fix re-review, full production build or five-locale browser matrix for normal Class 0–2 work.
- A successful targeted check closes a normal task.
- Validation is not cumulative: choose the single smallest sufficient path. Do not routinely run `typecheck` -> `check` -> `build`; `npm run build` already runs its production prebuild/postbuild gates.
- Match validation to actual change risk: text, numbers and translations need a small focused check; local page/composition work needs the affected surface plus a relevant technical check; related multi-page work needs its affected scope and a build only for realistic build risk; Class 3/shared-infrastructure implementation needs broad relevant checks and a build. Documentation-only Class-3 governance work uses document/diff/metadata/consistency checks without product tests or a production build.
- Reuse successful validation unless a later code-changing commit, changed environment or concrete new doubt invalidates it.
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

Use the smallest validation that directly tests the changed scope. Full builds belong to a specific whole-site rendering or generated-output risk, shared-infrastructure implementation, or missing risk-proportionate release evidence. Merely editing Astro/TypeScript or consuming an existing shared component is not by itself global risk.

For sandboxed PowerShell Astro commands, disable telemetry in the same invocation:

```powershell
$env:ASTRO_TELEMETRY_DISABLED='1'; npm run typecheck
$env:ASTRO_TELEMETRY_DISABLED='1'; $env:PUBLIC_SITE_URL='https://amara-lodging.es'; npm run build
```

Do not precede the build with `npm run check` merely out of habit; the build already invokes the required production lifecycle.

Inspect the working tree, preserve unrelated changes, stage only explicit task files, verify the staged set and `git diff --cached --check`, and make one coherent local commit for a completed Class 0–2 implementation unless the operator explicitly excludes the commit or the work is analysis/draft only. Do not push or merge without explicit instruction.

## Daily Git operator model

The operator's two normal Git actions are:

- **PUSH** — secure the already validated and committed state of the current branch on GitHub.
- **MERGE** — take the finished branch through the required PR/checks and integrate it into `main`.

The operator does not need to direct staging, commits, test types, Playwright, build gates or release batches. The system selects and performs those technical details at the appropriate lifecycle point.

### PUSH — transport only

`PUSH`, "pushen", "bitte pushen" or an equivalent unambiguous instruction means only: transfer the already locally validated and committed state of the current branch safely to GitHub.

For a normal push, check the current branch and status, confirm the finished work is committed, check remote freshness/ahead-behind, and push the current branch only when there is no divergence. Report the push result and local/remote state briefly.

A normal push starts no new tests, browser checks, production builds, release gates or contract suites; changes no files; repairs no tests; creates no PR; performs no merge; and does not wait for GitHub Actions or Cloudflare. An automatically triggered Cloudflare preview may be mentioned without waiting for it or adding local validation.

Remote divergence is a stop condition. Do not automatically pull, rebase, merge or force-push. If a normal push cannot be completed in roughly 2–3 minutes, stop and report the concrete Git/remote blocker instead of expanding the process.

### MERGE — release integration

`MERGE`, "mergen", "bitte mergen" or an equivalent unambiguous instruction means: take the finished branch as a release candidate through PR/checks and integrate it into `main`.

A merge may push finished commits, create or update the PR, reuse still-valid local validation since the last code-changing commit, run only missing risk-proportionate release validation, await required GitHub CI checks and merge when green. Do not duplicate an equivalent local gate immediately before GitHub CI without a concrete reason.

The release/merge gate is read-only. If a gate fails, classify the cause briefly, stop the merge and report it. Do not change production code, pages or tests inside the gate. A necessary correction returns to the normal cycle: **fix -> proportionate validation -> atomic commit -> push -> continue release**.

## External build budget and release batching

Treat the operator-reported Cloudflare Pages limit of 500 builds as a hard shared budget. A local commit consumes no external build; a branch push, pull-request update or merge can trigger GitHub Actions and Cloudflare builds.

- Multiple validated local commits may be batched into intentional release points to conserve external builds, but a deliberate backup/security push is always legitimate.
- Do not use remote CI or Cloudflare as the first implementation validation when the relevant checks can run locally.
- An ordinary push remains transport, not a release gate; external build cost does not justify repeating local validation before it.
- Before merge/release, inspect relevant workflow/deployment triggers, identify the exact release scope and disclose the expected GitHub Actions and Cloudflare cost. Prefer one intentional PR and merge for the finished batch.
- Finish known corrections before the release boundary and batch follow-up pushes where practical. Each additional fix push still requires authorization within the active merge/release workstream.

## Operator commands

- `PUSH` — secure the validated, committed current branch on GitHub; no new validation or release work.
- `MERGE` — take the finished branch through the necessary PR/checks and merge it into `main`.
- `AMARA FAST: ...` — minimum-safe FAST execution.
- `AMARA RELEASE BATCH` — legacy explicit release-batch form; apply the MERGE/release rules to the named accumulated scope.
- `Bitte in die AMARA SSOT aufnehmen: ...` — classify and recommend/place the item in the smallest correct SSOT owner or inbox.
- `AMARA SSOT SYNC` — consolidate pending SSOT items once and update only owners whose normative meaning changed.
- `OK, in die SSOT übernehmen.` — authorize the already-aligned documentation-only canonical update.
- `Bitte AMARA SSOT Audit durchführen.` — audit active owners, decisions, review triggers, duplication and repository/document divergence.

**Simple architecture. Professional signal.**
