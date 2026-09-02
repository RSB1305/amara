---
document_id: AMARA-KNOWLEDGE-OPS-001
title: AMARA Research and Knowledge Workflow
version: 1.2.0
status: ACTIVE
created_at: 2026-08-21T11:26:50+02:00
last_modified: 2026-09-02T06:19:43+02:00
---

# AMARA Research and Knowledge Workflow

## Purpose

This directory preserves the evidence behind AMARA's public and booked-guest content. It prevents a page redesign, copy edit or shortening pass from deleting the research that supports the page, and it prevents raw research or an AI synthesis from becoming an AMARA recommendation without human approval.

The normative content-product boundary and approval model are defined in `docs/features/11_AMARA_Experience_Knowledge_Product_Feature_Contract_V1.md`. This file owns the operational Drive-to-Git Knowledge workflow.

## One-way publishing flow

1. **Google Drive — immutable raw archive:** original Deep Research outputs, supplied files and operator notes.
2. **`knowledge/` — versioned evaluation:** sources, atomic facts, claim boundaries, conflicts, external experience patterns, open questions and page coverage.
3. **Recommendation candidate — non-public synthesis:** a proposed practical recommendation connected to its evidence, limitations, uncertainty and intended guest situation.
4. **Human approval gate:** the AMARA operator approves, changes, defers, rejects or requires field validation.
5. **Authoring projections:** approved evidence and recommendations are selected separately for public Experience content and for AMARA Experience booked-guest utility.
6. **Page families and Guest Utility presentation:** layout, shell and visual treatment render the approved authoring without rewriting its evidence or approval status.

Raw research never publishes itself. An AI candidate never approves itself. Public or private copy never becomes the only remaining record of a researched fact or recommendation decision.

## Public Experience and AMARA Experience boundary

Public Experience pages remain complete, indexable Type B pages. They explain and differentiate the subject, include concrete evidence-supported examples and answer the durable search or trip-planning question without requiring a booking.

AMARA Experience adds the actionable layer for an authenticated stay: prioritized shortlists, exact timing, route or starting point, reservation/order/access guidance, property-specific application, current host notes and a realistic Plan B.

The same evaluated evidence may support both surfaces, but the copy and immediate job are different. Private placement does not turn external research into AMARA first-hand experience. Human approval confirms the AMARA recommendation; it does not replace missing evidence.

## Google Drive boundary

The Drive root is [AMARA – Research Vault](https://drive.google.com/drive/folders/1YlfuHYxBGAVZIZIzAOXBegNfOUkhzyvG).

- `00_INBOX` receives new timestamped research runs.
- `10_LOCATIONS` contains durable destination/page folders.
- `20_PROPERTIES` is reserved for property-specific evidence.
- `90_ARCHIVE` receives completed or superseded raw runs without changing their folder IDs.

Each research run has a unique ID in the form `YYYY-MM-DD__HHMMSS__topic__research-NNN`. Existing run contents are not overwritten. A later investigation receives a new run ID.

The current combined Geography & Orientation run is:

- run ID: `2026-08-21__112650__geography-orientation__research-001`
- created: `2026-08-21T11:26:50+02:00`
- status: `normalized`
- Drive: [open archived raw run](https://drive.google.com/drive/folders/1HL7uYADn_GHrQCMsD7Qsv9duZtSNdCBA)
- exact prompt: [open research brief](https://drive.google.com/file/d/13oumAGPHGugLDJK8OvjjlFbu5-l1fNZA/view?usp=drivesdk)

GPT and Gemini raw inputs are present in `02_GPT_RAW` and `03_GEMINI_RAW`. Source exports belong in `04_SOURCE_MATERIAL` and human context in `05_OPERATOR_NOTES`. Original uploads remain unchanged after ingestion; where a provider exposes only a share page, the archive records the capture method and preserves the share URL.

The normalized synthesis is `knowledge/research/locations/geography-orientation/2026-08-21__research-001-synthesis.md`. Destination-level sources, facts, conflicts and open questions are versioned under their respective `knowledge/` folders. The three public content files were intentionally not changed during ingestion.

| Provider | Received | Canonical raw filename | Preservation |
|---|---|---|---|
| GPT Deep Research | 2026-08-21T11:45:23+02:00 | `2026-08-21__114446__gpt__geography-orientation__raw.md` | Original Markdown upload; filename normalized only |
| Gemini Deep Research | 2026-08-21T11:49:45+02:00 | `2026-08-21__114907__gemini__geography-orientation__raw.txt` | Rendered main-content text capture; source share URL retained |

## Open Daily Life research intake

Three cross-destination runs are issued and awaiting raw inputs:

| Topic | Run | Drive | Publication state |
|---|---|---|---|
| Supermarkets & Everyday Shopping | `2026-08-22__064102__supermarkets-everyday-shopping__research-001` | [open run](https://drive.google.com/drive/folders/1LXzvwCnCDNsRZg5ncPkahPJERroaqFdD) | Nine-page family not yet evidence-approved; three destination manifests are `awaiting-research`. |
| Health & Emergency Planning | `2026-08-22__064103__health-emergency__research-001` | [open run](https://drive.google.com/drive/folders/1sEVnMDg75TqhEgroNPJGUtHTXVbVX2nh) | Public/private/live boundary must be resolved before authoring. |
| Practical & Local Rules | `2026-08-22__064104__practical-local-rules__research-001` | [open run](https://drive.google.com/drive/folders/1n65iJYtUImeGYkLCgr2lubwAToWpo4Hj) | Ownership, volatility and standalone-page value must be resolved before authoring. |

Each run has the standard `01_PROMPT`, `02_GPT_RAW`, `03_GEMINI_RAW`, `04_SOURCE_MATERIAL` and `05_OPERATOR_NOTES` folders. Durable destination folders exist for all nine candidate pages under `10_LOCATIONS`. The exact prompts are stored in Git and Drive. Sources and atomic facts are intentionally not created until raw research is ingested and evaluated.

## Git structure

- `prompts/` stores the exact research brief used for a run.
- `research-runs/` records timestamps, Drive IDs, provider destinations and lifecycle status.
- `research/` stores human-readable research dossiers, synthesis, external experience patterns and interim recommendation review cards.
- `sources/` stores normalized source metadata.
- `facts/` stores atomic claims with verification status and claim boundaries.
- `open-questions/` stores unresolved evidence needs, including targeted first-hand or field-validation requests.
- `pages/` stores one manifest and coverage map per public page.

The current `knowledge/schema.ts` models sources, facts, open questions, research runs and public page manifests. Dedicated structured records for Experience patterns, recommendation lifecycle and AMARA Experience manifests are an approved target but remain implementation-pending. Until that workstream is completed, do not create an ad-hoc parallel database or misclassify a recommendation as a `KnowledgeFact`.

## Experience research package

Before a recommendation-focused run begins, the operator activates a bounded package containing:

- public search or trip-planning question;
- AMARA Experience value hypothesis;
- existing Knowledge and raw-corpus recovery;
- concrete unresolved gaps;
- required source standard;
- volatility and maintenance expectation;
- likely first-hand or field-validation needs;
- expected public, private or split use.

A package may include corpus recovery, candidate discovery, fact verification, external experience-pattern analysis, recommendation synthesis and targeted field validation. These are controlled stages of one package; they do not authorize automatic research outside the selected topic.

## Recommendation review package

When an activated run is intended to produce recommendations, each candidate receives a stable ID and a compact review card containing:

- proposed recommendation;
- guest situation and reason for inclusion;
- evidence references and provenance proposal;
- strengths, limitations and unresolved uncertainty;
- practical timing, duration, access, preparation or reservation implications;
- credible alternative or Plan B where relevant;
- proposed public, AMARA Experience, split or internal scope;
- checked date, volatility and proposed review date.

Only the human AMARA operator may approve an official recommendation. The available decisions are approve, approve with changes, field validation required, defer and reject. Approval records the final claim boundary, provenance, publication scope, caveats and review trigger.

## Ingestion procedure

1. Confirm all expected raw uploads and record `receivedAt` in the run manifest.
2. Preserve disagreements between sources or research providers; never silently choose one.
3. Normalize reusable sources and atomic facts, including checked date, volatility and claim boundary.
4. Record external experience patterns separately from factual claims and AMARA first-hand evidence.
5. Resolve or create open questions where the evidence is incomplete.
6. When the activated package seeks recommendations, prepare stable recommendation review cards; do not self-approve them.
7. Record the operator's decision and any required field validation before an item is treated as an AMARA recommendation.
8. Map reviewed fact and approved recommendation IDs to the appropriate public and/or private authoring scope once the dedicated schema/manifests are implemented.
9. Update public or Guest Utility content only through a separately approved authoring/implementation scope; retain evidence and rejected/deferred candidates for traceability.
10. Mark the run `normalized`, then move its Drive folder from `00_INBOX` to `90_ARCHIVE`. The stable Drive folder ID remains the audit link.

## Organizational boundary

- The operator owns research priority, run activation, first-hand confirmation, recommendation approval and publication scope.
- The Research Agent owns gap analysis, source work, raw preservation, evidence extraction and candidate preparation.
- The Knowledge Editor owns normalization, provenance, conflicts, claim boundaries and review dates.
- Public Editorial owns complete Type B authoring from approved evidence.
- AMARA Experience Editorial owns concise booked-stay execution guidance from approved recommendations.
- Implementation publishes through the existing content, Guest Utility, route, resolver and runtime owners; it does not invent a parallel system.

One human or AI may perform several preparation roles. The AI may not perform the operator approval gate.

## Change rule

A page can become shorter or change layout without reducing its knowledge base. A researched fact or approved recommendation leaves the active Knowledge set only through explicit supersession, dispute, pause, retirement or a documented scope decision. New research adds a new timestamped run and updates existing records transparently; it does not erase previous evidence or silently preserve an outdated approval.

## Revision history

| Timestamp | Version | Change |
|---|---:|---|
| 2026-08-21T11:26:50+02:00 | 1.0.0 | Established the Drive raw archive, Git evaluation layer, page manifests and immutable timestamped research runs. |
| 2026-08-21T11:49:45+02:00 | 1.0.1 | Recorded both raw research inputs, normalized filenames and advanced the Geography & Orientation run to `raw-received`. |
| 2026-08-21T12:01:15+02:00 | 1.0.2 | Normalized both raw reports into destination sources, atomic facts, conflicts, open questions and page coverage; archived the raw run without changing its Drive ID. |
| 2026-08-22T06:48:59+02:00 | 1.1.0 | Opened the three Daily Life research runs, registered nine destination page manifests and preserved the evidence gate before public authoring. |
| 2026-09-02T06:19:43+02:00 | 1.2.0 | Added the public Experience versus AMARA Experience knowledge-product flow, recommendation candidates, human approval gate, publication scopes and role separation while leaving the dedicated schema implementation pending. |
