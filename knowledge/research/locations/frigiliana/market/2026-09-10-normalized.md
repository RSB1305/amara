# Frigiliana market day — normalized synthesis

- **Run:** `2026-09-10__085528__frigiliana-market-day__research-001`
- **Provider:** GPT Deep Research (ingested). No Gemini run.
- **Raw:** [10_LOCATIONS/frigiliana/experiences/market](https://drive.google.com/drive/folders/1_YvFSE2ciM3Vi0KZPy_RLLSdwx3sM5lm) → `2026-09-10__071001__gpt__frigiliana-market-day__raw`
- **Prompt:** `knowledge/prompts/locations/2026-09-10__085528__frigiliana-market-day__research-001.md`
- **Status:** normalized — 7 atomic facts, 4 sources, 8 open questions.
- **Self-evaluation (GPT):** 32/40 (release note: existence provable; a 2026-ready day+time+location guest record is NOT release-ready).

## Headline
**What is proven:** Frigiliana runs municipally regulated street trade (*comercio ambulante*), evidenced by the 2021 approval + Decreto 2021-1050 and a referenced 2023 Alcaldía decree. **What is NOT proven:** the current weekly day, the time window, the current location, the stall mix, stall count and seasonality. The widely copied "Thursday morning / ~08:00–14:00 / Plaza de las Tres Culturas" is **not** primary-verified for 2026.

## Evidence discipline (the point of this run)
This is a low-fact-yield, high-guardrail ingest. The correct AMARA framing is:

> The Frigiliana market is a sensible bonus if it falls on a stay day, but on current evidence it is not an experience for which AMARA should promise a guest a full day or a trip based on an unverified online weekday.

Two hard boundaries:
- *comercio ambulante* ≠ a farmers' market (no local-producer claim) and ≠ a curated tourist craft market. Temporary craft/fiesta stalls are separate events.
- Historical permit lists are not a count of stalls present — no "X stalls".

## Public vs AMARA Experience split
- **Public decision model:** "Yes if it already falls on a suitable morning; not a reason on its own to replan a whole day." Position it as *a glimpse of local street trade → then village + gastronomy → local Axarquía produce explained where its origin is actually evidenced.* Do not write "come here to buy Frigiliana produce".
- **AMARA Experience (internal):** treat as a morning add-on, not a fixed point. Before a stay message, check the current Ayuntamiento notice **for the concrete calendar date**. No fixed route/parking into the knowledge layer until the current market point is officially confirmed; until then the existing supermarkets facts are the reliable date-independent Plan B. A Nerja market may be offered as a better alternative only once its day/time/location is confirmed via a current Nerja source.

## Recommended data-model status
`marketExists = confirmed`; `recurringDay`, `hours`, `currentLocation`, `seasonality`, `stallMix`, `parkingRoute` = **gap / high-volatility pending current official confirmation**. See the page manifest coverage and open questions.

## Coverage note
Facts in `knowledge/facts/locations/frigiliana/market.ts`; sources in `knowledge/sources/locations/frigilianaMarketSources.ts`; open questions in `knowledge/open-questions/locations/frigiliana/market.ts`. The existing `frigiliana-market` page manifest (topic `weekly-market-outing`) already carries the shopping/agriculture owners; this run adds the dedicated street-trade baseline and does not duplicate them.
