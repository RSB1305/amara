---
document_id: AMARA-KNOWLEDGE-OPS-001
title: AMARA Research and Knowledge Workflow
version: 1.5.0
status: ACTIVE
created_at: 2026-08-21T11:26:50+02:00
last_modified: 2026-09-04T13:30:00+02:00
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

## Content ownership and projection rule

Every topic shared by the public website and AMARA Experience declares one canonical maintenance owner before new authoring or a material revision:

- **Public editorial owner:** the public Location or Experience surface owns the complete explanation; AMARA Experience adds only stay-specific execution.
- **Shared fact owner:** one `knowledge/` or approved data record owns reusable facts; each surface selects the fields and actions required by its job.
- **AMARA Experience owner:** protected booked-stay guidance owns accommodation-specific and operational content; public content carries only the general context required by its own job.

A fact may be projected into both surfaces, but it is maintained once. Identical or near-identical editorial long-form copy is not maintained twice. The public responsive shell and the separate noindex, mobile-first Guest Utility shell remain distinct.

Existing duplication is consolidated incrementally when a topic is materially revised. The first reference cases are Pharmacies in Nerja for shared facts and Hiking in Frigiliana for public editorial ownership.

Until dedicated projection fields are implemented, record the selected model and canonical owner in the relevant non-public research dossier, synthesis or page manifest. Do not create a parallel database or a second authoring system.

## Google Drive boundary

The Drive root is [AMARA – Research Vault](https://drive.google.com/drive/folders/1YlfuHYxBGAVZIZIzAOXBegNfOUkhzyvG).

- `00_INBOX` receives new timestamped research runs that are not yet normalized.
- `10_LOCATIONS` mirrors the public route hierarchy in `src/lib/publicRouteManifest.mjs`: one durable folder per destination, each holding its topic folders (`geography`, `parking`, `where-to-stay`, `weather`, `winter`, `supermarkets`, `health`, …) plus an `experiences/` subtree with a `_hub` and every experience topic; Tarifa's `experiences/kitesurfing/` carries the full kitesurf cluster. Folder names are the stable English route-key segment, not the localized path and not the pre-migration flat slug.
- `20_PROPERTIES` holds one folder per branded stay plus a `_collections` folder for the stays-hub topics.
- `30_BRAND` holds brand, trust and company evidence (about, guest-reviews, direct-booking, amenities, amara-experience, booking-terms).
- `40_SHARED` holds cross-destination and market evidence (`markets`, `methodology`) and retired page intake such as `*-practical-local-rules`.
- `90_ARCHIVE` receives only superseded or replaced raw runs, without changing their folder IDs.

Folder names in `10_LOCATIONS`, the topic-key in `knowledge/` and the route-key in the public route manifest are one shared address space, so a page, its evidence folder and its knowledge records carry the same name.

Each research run has a unique ID in the form `YYYY-MM-DD__HHMMSS__topic__research-NNN`. Existing run contents are not overwritten. A later investigation receives a new run ID. Once a run is normalized it moves out of `00_INBOX` into the topic folder it belongs to under `10_LOCATIONS`, `20_PROPERTIES`, `30_BRAND` or `40_SHARED`; the raw run then lives beside the page it supports, and its Drive folder ID stays stable. A cross-destination run is filed under the destination named first in its run ID, with the second destination recorded in the run's `subjects`.

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

Two cross-destination runs support the active public Daily Life page pair:

| Topic | Run | Drive | Publication state |
|---|---|---|---|
| Supermarkets & Shopping | `2026-08-22__064102__supermarkets-everyday-shopping__research-001` | [open run](https://drive.google.com/drive/folders/1LXzvwCnCDNsRZg5ncPkahPJERroaqFdD) | Three standalone destination pages retain the existing public baseline while their manifests track remaining evidence gaps. |
| Health & Emergency Planning | `2026-08-22__064103__health-emergency__research-001` | [open run](https://drive.google.com/drive/folders/1sEVnMDg75TqhEgroNPJGUtHTXVbVX2nh) | Public/private/live boundary must be resolved before authoring. |

The issued Practical & Local Rules run and its three manifests remain preserved as historical evidence intake. They no longer define a public page or navigation topic; any useful result is assigned to the relevant specialist owner before publication.

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
10. Mark the run `normalized`, then move its Drive folder from `00_INBOX` into the topic folder it supports under `10_LOCATIONS`, `20_PROPERTIES`, `30_BRAND` or `40_SHARED`. `90_ARCHIVE` is used only when a run is later superseded or replaced. The stable Drive folder ID remains the audit link.

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
| 2026-09-02T08:09:00+02:00 | 1.3.0 | Added the single-owner projection rule, three ownership models, duplicate-copy prohibition, separate-shell boundary and incremental consolidation reference cases. |
| 2026-09-02T10:15:00+02:00 | 1.4.0 | Aligned Daily Life knowledge coverage to the two standalone public topics, retained the Practical & Local Rules intake as historical evidence and removed it as a public page target. |
| 2026-09-04T13:30:00+02:00 | 1.5.0 | Re-shaped the Drive vault to mirror the public route hierarchy: route-key folder names, an `experiences/` subtree with Tarifa's kitesurf cluster, new `30_BRAND` and `40_SHARED` buckets, and normalized runs filed into their topic folder instead of a flat archive. Synced every `driveFolder.path` string. |
