---
document_id: AMARA-GOV-005
title: AMARA Governance, Execution & Documentation Lifecycle
version: 5.7.0
status: ACTIVE
authority_class: GOVERNING CONTRACT
effective_from: 2026-08-14
last_modified: 2026-08-28T07:08:21+02:00
canonical_path: /docs/standards/05_AMARA_Governance_Execution_and_Documentation_Lifecycle_V5.md
supersedes:
  - AMARA Governance & Execution Standard V4.2
  - AMARA Efficient Execution Protocol V1.0
  - AMARA AI Execution Productivity & Focus Guardrail V1.0
activation_state: ACTIVE
decision_refs:
  - DR-DOC-001
  - DR-DOC-005
  - DR-DOC-006
  - DR-AGENT-001
  - DR-EXEC-001
  - DR-EXEC-002
  - DR-EXEC-008
  - DR-EXEC-007
  - DR-EXEC-006
  - DR-EXEC-005
  - DR-EXEC-004
  - DR-EXEC-003
  - DR-EXEC-010
  - DR-EXEC-011
  - DR-BOOT-001
---

# AMARA Governance, Execution & Documentation Lifecycle V5

## 1. Purpose

AMARA must move quickly without becoming fragile.

Governance protects architectural integrity, factual/content quality, user-visible correctness, operator time, AI tokens/credits, build/deployment resources, clean Git history and documentation clarity.

**Use the minimum process necessary to make the approved change safely. More process is justified only when it reduces a concrete risk.**

## 2. Current work order

The operator's current request is the only active work order.

Handovers, TODOs, audits, inventories, maintenance notes and suggested next steps are context only unless the operator explicitly selects them. Anything that does not directly block the requested result is parked.

## 3. Daily execution model

For normal Class 0–2 work:

1. understand the requested result and identify the smallest complete implementation scope;
2. implement with existing approved patterns;
3. run targeted validation against the changed scope;
4. stage exact files and create one atomic local commit when included in the work order;
5. push or deploy only with separate permission.

The operator's direct implementation request is confirmation. Class 0–2 work does not require a separate analysis/recommendation/approval sequence.

Deliver the requested result in the turn. Ask only when unresolved ambiguity would materially change the result, create substantial avoidable rework or trigger an irreversible/high-risk action. Do not offer process, tooling, audit or validation work as an optional next step; offer only meaningful content, product or scope choices when a genuine choice remains.

Architecture/SSOT work and changes to protected Class-3 contracts require relevant owner context and explicit alignment before implementation.

## 4. Align once, execute once

After confirmation, the implementation agent may complete the agreed local cycle without repeatedly asking for the same approval:

**implement -> targeted validation -> exact staging -> staged-set verification -> atomic commit**

Return to alignment only when a Stop Criterion is triggered.

## 5. Change classes

### Class 0 — Micro Edit
Typos, punctuation, one factual value/date, equivalent labels or a single approved replacement with no semantic/layout/runtime impact.

### Class 1 — Content Fast Lane
Copy in existing fields while preserving page job, section structure, layout, route and runtime contracts.

### Class 2 — Local Page Change
Local section/composition/markup/presentation changes without changing shared owners.

### Class 3 — Shared / Infrastructure Change
Changes to the system itself: resolver semantics, canonical/hreflang architecture, route ownership architecture, Link Registry semantics, global navigation architecture, global CSS/tokens, broadly shared infrastructure/components, build pipeline, analytics/consent architecture, booking/checkout architecture or other protected contracts.

Using an existing approved page family, route pattern, registry mechanism, resolver, component pattern or localization structure is normal implementation, not a Class-3 architecture change.

### FAST-first execution default

**FAST is the default execution posture for Class 0, Class 1 and bounded Class 2 work.** Deep process is not justified by the mere possibility that something could go wrong; it requires a concrete shared/infrastructure risk, an unresolved contradiction, or an explicit release gate.

FAST means:

- reuse already-approved analysis, research, facts and copy instead of repeating them;
- edit the smallest complete owner scope immediately after confirmation;
- treat documentation as reference material, not a cumulative checklist whose relevant sections must all be executed in sequence;
- use targeted source/diff checks and only the existing tools or browser checks that directly test the visible change;
- do not create new documentation, tests, audit scripts, validation utilities, inventories, npm checks or guardrails merely to validate the task; create permanent tooling only when the operator requests it;
- do **not** run a full production build for ordinary content/local-page work unless the change creates a concrete compile/runtime risk;
- require no second-agent review, post-fix re-review, full production build or five-locale browser matrix for normal Class 0–2 work;
- a successful targeted implementation validation closes the normal task;
- prefer one implementation pass and one atomic local commit;
- deliver a normal FAST result within roughly 5–10 minutes total, including validation; if that is not happening, report the concrete blocker/cost instead of expanding the process.

The operator command **`AMARA FAST: ...`** explicitly requests this minimum-safe execution posture. If the requested change is objectively Class 3 or would alter a protected contract, the agent must say so and return to alignment rather than pretending it is FAST.

## 6. Operator Abstraction Rule

The operator defines the desired result. The system translates it into the smallest safe technical scope.

## 7. Minimum Necessary Context

For normal Class 0–2 work, `AGENTS.md` is sufficient operating context. The default read set is:

- working-tree status when repository state matters;
- files named by or directly required for the current request;
- direct data sources, imports and consumers only when needed.

Do not automatically read the Register, Governance, Constitution, SEO, URL, Astro or other owner documents. Read the Register and relevant owner only when:

1. the operator explicitly requests architecture or SSOT work;
2. the task would change a protected contract; or
3. implementation reveals a concrete contradiction or uncertainty.

Do not default to full repository audits, full Git history, all page families, all owner documents or repeated research already approved in the workstream.

## 8. Scope rule

**One coherent objective -> smallest complete atomic scope -> every file genuinely required -> no unrelated changes.**

File count is not a quality metric. Partial migrations are forbidden when they would leave two structural contracts active in parallel.

## 9. One bounded unit, clean execution context

For normal FAST implementation:

**one bounded objective -> one implementation pass -> targeted validation -> one atomic local commit**

A fresh implementation chat is useful only when it reduces a concrete context-risk: workstream change with substantial unrelated history, ambiguous context compression, contradictory instructions, or repeated corrective loops. Do not create a fresh chat as ritual overhead when the current context is already clean.

## 10. Role separation

Strategy/editorial work owns page job, architecture, facts/evidence, search intent, AMARA differentiation, native-language direction and copy approval.

Implementation work owns repository ownership discovery, smallest safe implementation, approved registration/composition, technical validation, exact staging/commit and concise status reporting.

## 11. Template-first and pattern-fitness

Investigate repeated problems in this order: layout -> shared component -> shared data/content model -> page family -> individual page.

Reuse an existing approved pattern when it fits the requested result. Reading architecture owners or reopening the pattern's rationale is unnecessary unless the task would change the pattern or reveals a concrete conflict. Fix at the highest stable reusable layer that genuinely owns the problem without expanding a local task into a redesign.

## 12. Page/content alignment

For new pages or material restructuring, confirm dominant strategic job, surface type where relevant, prohibited drift, parent/child ownership, content outcome, module logic, conversion path and current route/path status.

## 13. Content Production Gate

Material public copy/new pages/major rewrites/multi-language creation require a brief covering dominant job, search intent, guest questions, verified proof, information order, conversion goal, limitations and locale notes. Cross-language required information, meaning depth and material nuance must be identified explicitly; no locale may shorten or omit them merely for stylistic localization.

These are required content outcomes, not mandatory separate documents, tools or review rounds. Their checks may be combined inside one FAST implementation pass when the scope is already approved.

## 14. Anti-stall / no duplicate analysis

Reuse verified facts, decisions, page jobs and copy unless sources changed, implementation reveals contradiction or a concrete new question exists.

For bounded page tasks:

- FAST work should normally complete in roughly **5–10 minutes** when the scope is already decided;
- if ~10 minutes pass without a credible path to completion, stop and report exactly what is consuming the time;
- do not spend another 10–20 minutes on broader validation merely because the first checks were successful;
- repeated research or a second independent review requires a concrete new doubt, not ritual confidence.

## 15. Scope-drift gate

If an unexpected shared component, global CSS/token, resolver, route reform, unrelated SEO cleanup, analytics runtime or other protected contract becomes necessary, stop and return to alignment.

## 16. Working-tree discipline

Inspect relevant branch/HEAD and working tree before repository work. Preserve unrelated tracked/untracked work.

Never reset, discard, stage, commit or rewrite unrelated work for convenience.

## 17. Validation ladder

- **Level A — FAST / Class 0–1:** changed value/text, targeted source/diff check, `git diff --check`, and only the focused policy/unit check directly related to the change. Browser-check only when visible output can plausibly regress.
- **Level B — bounded Class 2:** exact affected-page browser sanity, targeted compile/type check where relevant, focused guardrails and heading/link checks that test the changed surface. A **full production build is not automatic**; run it only when the change can materially affect compilation/global output or at the next batch/release boundary.
- **Level C — Class 3 / shared infrastructure:** production build plus full relevant guardrails, representative/system-wide consumers, affected languages/routes and migration/canonical/schema/link validation as relevant.
- **Level D — isolated committed-state/worktree validation:** only for a concrete clean-state need.

A wrong visible page is FAIL even when tests pass.

FAST validation may use existing relevant tooling. It must not create permanent tests, scripts, npm checks, inventories, validation utilities, compatibility gates or other guardrails merely to prove the current task.

### FAST preflight checks

Both checks are deterministic, cheap and performed by the implementing agent. Neither requires a second agent; a second agent is added only for concrete uncertainty, shared/infrastructure risk or a deliberate release check.

**New-page duplication check.** Before creating a new public page, route or guide, run a targeted repository-wide search for an existing page with the same or substantially overlapping topic/search intent. Repository-wide describes search reach, not work scope. Normally use no more than about three targeted searches or 60 seconds, covering likely topic/intent, route/content and registry ownership. On probable duplication or ownership overlap, stop and report; otherwise continue implementation. Never create a full inventory for this preflight.

**Five-locale completeness check.** After a multilingual change intended for all supported languages, check only the multilingual scope changed by the task. Verify required entries, sections and links across EN, DE, ES, NL and SV. Natural paragraph and sentence differences between languages are allowed. Do not inspect all multilingual repository content or browser-test all five locales by default.

### Parallel Traffic Check

When the operator or Traffic Controller declares that parallel agent work is active, the implementing agent performs a read-only traffic check of about 30 seconds maximum before starting a new implementation task and again before integrating or pushing work.

The check is limited to:

- active local worktrees;
- visible active remote branches or pull requests where available; and
- active scopes explicitly declared by the operator or Traffic Controller.

If another active worker owns the same files or the same shared owner or contract, stop and report the overlap. If scopes are separate, proceed immediately.

The traffic check must not run builds, tests, broad repository audits, architecture reviews or lengthy preflights. It does not create a new coordination framework, manifest, database or process system.

The normal parallel-work sequence is:

**30-second traffic check -> implement -> targeted validation -> local commit**

Push remains centralized and batched at an intentional release point.

### Isolated Worktrees and Central Release Integration

When Codex, Claude, Codex Cloud or another implementation worker may operate in parallel, each active implementation task owns one dedicated Git branch and one dedicated Git worktree. Agents must not share a working directory. The primary `main` worktree is reserved for traffic control, integration and release work for the duration of parallel execution.

Before editing, every task has a bounded scope and a provenance-bearing branch name such as `codex/<task>`, `claude/<task>` or `codex/cloud-<task>`. Branch provenance does not imply release readiness. The Parallel Traffic Check remains the overlap guard: same-file or same-owner/contract ownership stops; separate scopes proceed.

Local workers hand off a clean committed branch and commit SHA. Codex Cloud or another remote worker is part of the same release inventory only after it exposes a remote branch, pull request, commit SHA or operator-provided patch to the release controller. Remote workers do not merge directly to `main` unless the operator explicitly assigns that worker the release-controller role.

One release controller owns integration and push. Immediately before any release push, that controller inventories:

- active registered local worktrees;
- unmerged local branches;
- visible unmerged remote branches;
- open pull requests; and
- operator-declared or Traffic-Controller workstreams.

Every discovered workstream is classified as **included**, **waiting** or **intentionally excluded**, with its branch or commit identity. An unknown or unclassified workstream stops the push. This inventory is a bounded release gate, not a persistent coordination database or repository-wide audit.

All included, committed and validated work is integrated from current `origin/main` into one temporary release branch. Conflicts are resolved and the release validation runs there once. The release then uses one intentional branch push, one pull request and one merge. `git push --all` is never an integration mechanism: it publishes refs but neither combines their contents nor establishes readiness. Uncommitted, dirty or unfinished work is never silently absorbed.

After merge, completed task worktrees are removed and merged task branches are deleted locally and remotely. Persistent implementation branches require a concrete continuing purpose. Cloudflare and CI branch controls should exclude ordinary worker branches and reserve automatic preview deployment for the intentional release branch where the connected platform permits it.

The normal parallel sequence is:

**traffic check -> dedicated task branch/worktree -> implement -> targeted validation -> local commit -> READY handoff**

The centralized release sequence is:

**inventory -> classify every workstream -> integrate included commits -> release validation -> one push/PR/merge -> cleanup**

### Completion rule

For a normal FAST task, one successful targeted validation after implementation is sufficient to close the task. Do not require a separate post-fix review unless the fix changed scope, failed once, or introduced a new concrete uncertainty.

## 18. Stop Criteria

Stop before commit when scope exceeds confirmation, an unexpected protected contract is required, a new public route/path/token is unexpectedly needed, a material claim/page job is unclear, validation fails without understood cause, an out-of-scope regression appears, unrelated tracked work cannot be separated, staged files exceed scope, remote divergence affects a requested push, or document/repository reality materially disagree. Ask the operator only when the unresolved point meets the material ambiguity/high-risk threshold in section 3.

## 19. Git and push rules

Git is a primary safety boundary.

- no broad staging in mixed working trees;
- stage only explicit approved paths;
- verify `git diff --cached --name-only` and `git diff --cached --check`;
- one atomic commit per coherent objective;
- commit is not push for normal implementation work;
- validated local commits should normally be **batched into intentional release/push points** instead of triggering a micro-push after every small change;
- push/deployment only when explicitly requested or already included in the confirmed instruction;
- never force-push without separate explicit approval;
- do not leave a documentation/SSOT staging set occupying the index across unrelated workstreams: once approved, either commit it promptly or remove it from staging while preserving the working copy before switching workstreams.

### Documentation-only SSOT exception

The operator command **`OK, in die SSOT übernehmen.`** authorizes the already-aligned documentation-only SSOT update to the canonical repository branch, including the documentation commit needed for it to become ACTIVE. It does **not** authorize website/runtime/SEO/URL/design code changes.

# Documentation Lifecycle

## 20. Canonical source

Canonical active documentation is versioned Markdown in the repository. PDFs and project attachments are optional distribution/backup snapshots and never outrank Markdown.

## 21. Semantic versioning

Active documents use `MAJOR.MINOR.PATCH`:

- **MAJOR** — architectural generation or incompatible governance model change;
- **MINOR** — meaningful new/changed rule within the same architecture;
- **PATCH** — wording/clarification/factual correction with no contract meaning change.

## 22. Required metadata

Every active Markdown owner contains at least `document_id`, `title`, `version`, `status`, `authority_class`, `effective_from`, `last_modified` as ISO-8601 with timezone, `canonical_path`, and relevant `supersedes` / `decision_refs`.

## 23. Status vocabulary

Documents use only **DRAFT**, **PROPOSED**, **APPROVED**, **ACTIVE**, **SUPERSEDED**, **ARCHIVED**.

Decisions use **PROPOSED -> APPROVED -> ACTIVE -> UNDER REVIEW -> SUPERSEDED/RETIRED** as applicable.

## 24. Revision history and traceability

Each active owner keeps a short revision history: version, timestamp, normative change, decision reference and commit reference.

For the commit that introduces the current revision, `this revision` is acceptable because a document cannot know the SHA of the commit that contains itself. Exact SHA is available from Git history.

The AMARA Register keeps the cross-system chronological Change Ledger.

## 25. Information -> Decision -> Contract

New information does not automatically rewrite governance.

1. **Evidence/source** — preserve the new fact/research/evaluation.
2. **Decision** — determine whether an existing decision changes or a new decision is needed.
3. **Contract/principle** — change an owner document only when the normative rule itself changes.

## 26. SSOT intake commands

### `Bitte in die AMARA SSOT aufnehmen: ...`

The system must read the Register and relevant owner, classify the input, identify conflicts/review triggers/version impact, recommend the smallest correct SSOT update and wait for confirmation before writing.

### `OK, in die SSOT übernehmen.`

Authorizes the agreed documentation-only SSOT change and canonical documentation commit.

### `Bitte AMARA SSOT Audit durchführen.`

Audit Register -> active owners -> decisions/review triggers -> repository reality -> archive only when necessary. Report contradictions, duplicate rules, stale decisions, missing owners, version needs and material repository/document divergence.

## 27. One Rule, One Owner

A binding rule is stated normatively in exactly one owner document. Other documents reference rather than independently copy/extend it.

Do not create a new active appendix, prompt or memo to add a permanent rule that belongs in an existing owner.

## 28. Archive boundary

Superseded standards, audits, handovers, reform notes, prompts, replacement maps and superseded platform records are archive evidence, not current instruction. An external operational service that is still implemented and listed as ACTIVE/INTERIM in the Register is not historical merely because the website runtime is Astro-only.

## 29. Inventories and current-state authority

Create or update an inventory only when the operator requests it as the deliverable. Inventories describe reality at a point in time and do not create policy. During normal work, stale inventories are ignored for current-state reasoning; repository reality is authoritative. Do not repair an old route matrix or inventory incidentally.

## 30. Reality Reconciliation Rule

When a governing document and repository materially diverge, determine whether code drifted, documentation is outdated, rationale no longer applies, a later decision replaced the contract, or an inventory is stale. Resolution may change repository, governing owner, Decision Register or more than one. No workaround or silent assumption.

## 31. Operator time and process proportionality

Operator time, attention, AI credits, builds and deployments are first-class operating resources.

A process is itself a governance failure when its expected cost materially exceeds the failure risk it is trying to prevent. AMARA is a small hospitality platform; validation depth must be justified by the concrete blast radius of the change, not by enterprise-style theoretical completeness.

When two safe methods exist, prefer the one that reaches a verified user-visible result with less operator intervention and less repeated analysis.

## 32. SSOT intake and sync

The command **`Bitte in die AMARA SSOT aufnehmen: ...`** means: classify the new information as evidence, decision, contract impact or principle and record/recommend the smallest correct owner change. It does **not** require immediate versioning of every owner document.

Routine new information may wait for a deliberate **`AMARA SSOT SYNC`** boundary. At that boundary, consolidate pending items, update only the owners whose normative meaning actually changed, update the Register/Change Ledger once, and commit the documentation batch.

Urgent protected-contract changes may be synchronized immediately when delay itself creates risk.

## 33. SSOT Compatibility Gate

An initial documentation bootstrap, governing-owner migration, or SSOT change that could supersede a protected implementation contract must pass a **read-only compatibility gate** before implementation.

This gate is protected/Class-3 process, not a daily Class 0–2 requirement. A normal already-aligned revision to Governance/Register/content guidance does **not** require a full bootstrap-style compatibility package. Use a targeted owner/Register consistency check unless the change introduces a concrete protected-contract conflict.

The gate compares the candidate package with current repository reality and classifies every finding as exactly one of:

- **BLOCKING CONFLICT** — applying the candidate would remove, contradict or misstate a still-active contract, owner or implementation reality;
- **INTENTIONAL SUPERSESSION** — an existing rule is deliberately replaced by an already aligned higher-authority decision and the replacement is explicitly documented;
- **INFORMATIONAL DRIFT** — stale wording, inventory or history that does not alter the current contract;
- **PASS** — no material conflict.

The gate must verify at minimum:

1. internal consistency of the candidate package, including status/activation wording and revision-history consistency;
2. repository compatibility;
3. existence of every referenced owner;
4. manifest completeness versus actual candidate files;
5. preservation of protected current contracts and unrelated working-tree changes;
6. explicit documentation of every intended supersession;
7. absence of website/runtime/SEO/URL/design/content changes when the workstream is documentation-only;
8. preservation of explicit high-value agent rules, including the five-language Navigation booking-CTA localization contract;
9. distinction between an intentionally superseded policy doctrine and a still-protected current implementation.

A candidate with any **BLOCKING CONFLICT** is not implementation-ready. The gate itself never authorizes writes, staging, commit or push.

## 34. Contract supersession safeguard

A conversational shorthand, isolated user sentence, summary, example or newly discovered fact does **not** silently supersede an ACTIVE contract.

If a new statement appears to conflict with the Register, repository implementation or an active feature contract:

1. treat the conflict as a Reality Reconciliation trigger;
2. identify whether the statement changes strategy, website runtime, or an external operational boundary;
3. show the concrete contract impact to the operator;
4. change status/version only after explicit confirmation of that contract-level effect.

This safeguard is especially important when a broad statement such as "Astro-only" could be misread as removing an independently governed operational service.

## 35. Agent Context Rule

`AGENTS.md` is the model-neutral daily operating contract. Tool/vendor files contain no independent policy.

For normal Class 0–2 work, agents read `AGENTS.md` and the current task scope. They read the Register and relevant owners only for an architecture/SSOT request, a protected-contract change or a concrete conflict discovered during implementation.

## 36. Activation

A document becomes ACTIVE when its approved canonical Markdown is on the canonical branch and the Register lists that version ACTIVE.

Project attachments/PDFs are not activation gates.

## Revision history

| Version | Timestamp | Change | Decision refs | Commit |
|---|---|---|---|---|
| 5.0.0 | 2026-08-13 | Consolidated Governance V4.2, Efficient Execution and Productivity Guardrail. | DR-EXEC-001, DR-EXEC-002 | historical package snapshot |
| 5.1.0 | 2026-08-14T08:55:00+02:00 | Prepared semantic revision control, metadata/status model, Change Ledger, SSOT commands, attachment decoupling and contract-supersession safeguard after Reality Reconciliation. | DR-DOC-001, DR-DOC-005, DR-DOC-006, DR-GOV-001 | withdrawn candidate — never committed |
| 5.2.0 | 2026-08-14T09:28:00+02:00 | **PROPOSED, not activated.** Added mandatory read-only SSOT Compatibility Gate; preserved transitional agent rules; strengthened multilingual meaning-depth protection and policy-vs-implementation supersession checks. | DR-BOOT-001, DR-AGENT-001 | candidate only — never committed |
| 5.3.0 | 2026-08-14T11:41:00+02:00 | **ACTIVE FAST-first revision.** Made minimum-safe FAST execution the default for Class 0/1 and bounded Class 2 work; removed ritual post-fix re-review/full-build defaults; added operator-time proportionality, push batching and SSOT intake/sync. | DR-EXEC-003, DR-EXEC-004, DR-EXEC-005, DR-EXEC-006, DR-EXEC-007, DR-EXEC-008 | 5c59674 |
| 5.4.0 | 2026-08-14T12:30:00+02:00 | Added two deterministic FAST preflight checks to the validation ladder: repository-wide new-page duplication check before creating a public page/route/guide, and a five-locale structural completeness check before committing multilingual changes. Both are performed by the implementing agent; neither introduces a mandatory second agent. | DR-EXEC-003, DR-EXEC-004 | 0e2b26a |
| 5.5.0 | 2026-08-14T12:59:47+02:00 | Made `AGENTS.md` sufficient for daily Class 0–2 work; limited owner reads to architecture/SSOT, protected-contract and concrete-conflict triggers; bounded FAST preflights; prohibited incidental validation tooling, documentation and inventories; established result-first turn completion. | DR-EXEC-001–008, DR-AGENT-001 | this revision |
| 5.6.0 | 2026-08-27T13:11:27+02:00 | Added the bounded read-only Parallel Traffic Check for declared parallel-agent work, with an overlap stop only for the same files or shared owner/contract and no expansion into builds, audits or new coordination infrastructure. | DR-EXEC-010, DR-EXEC-007 | this revision |
| 5.7.0 | 2026-08-28T07:08:21+02:00 | Required one dedicated branch and worktree per parallel implementation task, reserved the primary `main` worktree for control/integration, added remote Codex Cloud handoff requirements and established a centralized release inventory that classifies every visible workstream before one integrated push/PR/merge. | DR-EXEC-011, DR-EXEC-010, DR-EXEC-007 | this revision |
