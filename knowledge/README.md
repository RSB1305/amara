---
document_id: AMARA-KNOWLEDGE-OPS-001
title: AMARA Research and Knowledge Workflow
version: 1.0.0
status: ACTIVE
created_at: 2026-08-21T11:26:50+02:00
last_modified: 2026-08-21T11:26:50+02:00
---

# AMARA Research and Knowledge Workflow

## Purpose

This directory preserves the evidence behind AMARA's public content. It prevents a page redesign, copy edit or shortening pass from deleting the research that supports the page.

## One-way publishing flow

1. **Google Drive — immutable raw archive:** original Deep Research outputs, supplied files and operator notes.
2. **`knowledge/` — versioned evaluation:** sources, atomic facts, claim boundaries, conflicts, open questions and page coverage.
3. **`src/content/` — curated public authoring:** user-facing copy selected from verified knowledge for the page's job.
4. **page families/components — presentation:** layout and visual treatment only; presentation changes do not rewrite evidence.

Raw research never publishes itself. Public copy never becomes the only remaining record of a researched fact.

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
- status: `awaiting-raw`
- Drive: [open upload run](https://drive.google.com/drive/folders/1HL7uYADn_GHrQCMsD7Qsv9duZtSNdCBA)
- exact prompt: [open research brief](https://drive.google.com/file/d/13oumAGPHGugLDJK8OvjjlFbu5-l1fNZA/view?usp=drivesdk)

Upload GPT output to `02_GPT_RAW`, Gemini output to `03_GEMINI_RAW`, source exports to `04_SOURCE_MATERIAL` and human context to `05_OPERATOR_NOTES`. The original files remain unchanged after ingestion.

## Git structure

- `prompts/` stores the exact research brief used for a run.
- `research-runs/` records timestamps, Drive IDs, provider destinations and lifecycle status.
- `research/` stores human-readable research dossiers and synthesis.
- `sources/` stores normalized source metadata.
- `facts/` stores atomic claims with verification status and claim boundaries.
- `open-questions/` stores unresolved evidence needs.
- `pages/` stores one manifest and coverage map per public page.

## Ingestion procedure

1. Confirm both raw uploads and record `receivedAt` in the run manifest.
2. Preserve disagreements between sources or research providers; never silently choose one.
3. Normalize reusable sources and atomic facts, including checked date, volatility and claim boundary.
4. Resolve or create open questions where the evidence is incomplete.
5. Map verified fact IDs to each page section in its page manifest.
6. Update public content only from that reviewed map; retain facts that are not selected for the current layout.
7. Mark the run `normalized`, then move its Drive folder from `00_INBOX` to `90_ARCHIVE`. The stable Drive folder ID remains the audit link.

## Change rule

A page can become shorter or change layout without reducing its knowledge base. A researched fact leaves the active knowledge set only through explicit supersession, dispute or a documented scope decision. New research adds a new timestamped run and updates existing facts transparently; it does not erase previous evidence.

## Revision history

| Timestamp | Version | Change |
|---|---:|---|
| 2026-08-21T11:26:50+02:00 | 1.0.0 | Established the Drive raw archive, Git evaluation layer, page manifests and immutable timestamped research runs. |
