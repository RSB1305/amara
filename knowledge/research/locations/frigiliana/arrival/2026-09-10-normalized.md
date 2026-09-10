# Frigiliana arrival & getting there — normalized synthesis

- **Run:** `2026-09-10__085527__frigiliana-arrival-getting-there__research-001`
- **Provider:** GPT Deep Research (ingested). No Gemini run.
- **Raw:** [10_LOCATIONS/frigiliana/arrival](https://drive.google.com/drive/folders/1M8SPNUv336F3HDTEtdoSXR3BHqno8pPV) → `2026-09-10__071432__gpt__frigiliana-arrival-getting-there__raw`
- **Prompt:** `knowledge/prompts/locations/2026-09-10__085527__frigiliana-arrival-getting-there__research-001.md`
- **Status:** normalized — 20 atomic facts, 19 sources, 8 open questions.
- **Self-evaluation (GPT):** 38.6 / 40.

## Why this run existed
The arrival page carried authored transport copy with **zero backing facts**: no transport/arrival facts topic existed, so distances, journey times, bus operation and transfer options were unverified. This run fills the genuine evidence void (not an authoring gap).

## Core model
The transport architecture reduces cleanly to **three layers**:

1. **Regional arrival** (airport → coast): car, pre-booked taxi/transfer, or coach, with a valid train-based Plan B.
2. **Nerja ⇄ Frigiliana interface**: the local bus line plus taxi as the practical mode-switch fallback.
3. **Property-specific last mile**: the legally reachable vehicle endpoint and the measured walk to each door.

Layers 1–2 are now externally evidenced. **Layer 3 must not be derived from general Frigiliana information** — it needs AMARA first-party measurement (see open questions).

## Key findings and conflicts (preserved, not smoothed)
- **Operator change:** since **2026-08-10** the Nerja⇄Frigiliana concessionaire is **Grupo Verano Azul** (supersedes Grupo Fajardo). Secured by a separately dated municipal announcement.
- **Timetable source conflict:** the municipal timetable URL showed a caching/version split (new operator+times vs cached old operator+times). Exact timetable data is therefore deliberately **not** frozen into facts — treat as live-only.
- **"Unloading" ≠ loading zone:** the ordinance defines a short `parada` (Art. 17) but carga y descarga zones (Art. 34) are for goods vehicles (disabled-card exception). Hard guardrail against recommending a generic loading zone as a suitcase stop.
- **Accessibility is not neutral:** steep narrow stairs, cobbles and gradients in the historic core mean "a few minutes on foot" is not an access statement; it must be judged per micro-route.
- **Nerja is the mobility interface**, not just a neighbour: airport↔Nerja coach, regional ALSA hub (Málaga, Granada), and the seasonal 2026 Maro beach shuttle (until 15 Sep 2026) all route through it.

## Public vs AMARA Experience split
- **Public arrival decision model:** decide by flexibility, transfer risk, luggage/mobility and onward travel behaviour — car (regional freedom, but solve parking + last mile), pre-booked transfer (simplest, esp. late flight/luggage/mobility), bus (works only with a date-checked Nerja connection). This goes demonstrably beyond the official pages, which only say *which service exists*; the AMARA model says *when it is practically dependable for an overnight guest and where its failure mode is*.
- **AMARA Experience (internal):** a single resolved arrival card per stay (arrival mode, live transport check, vehicle endpoint, unload rule, primary/backup parking from existing `parking.ts`, measured walk/elevation/steps/surface, luggage + mobility flag, bus/taxi points, event-exception check, failure plan, host-contact trigger). The biggest remaining gap is **first-party location intelligence**, not more web research.

## Coverage note
Facts in `knowledge/facts/locations/frigiliana/arrival.ts`; sources in `knowledge/sources/locations/frigilianaArrivalSources.ts`; open questions in `knowledge/open-questions/locations/frigiliana/arrival.ts`; page coverage in `knowledge/pages/frigiliana-arrival/manifest.ts`. Existing `parking.ts` and `geography.ts` retain ownership of village layout and parking; this run does not duplicate them.
