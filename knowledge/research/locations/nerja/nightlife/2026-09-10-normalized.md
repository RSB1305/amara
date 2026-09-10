# Nerja nightlife — normalized synthesis (verification run)

- **Run:** `2026-09-10__110516__nerja-nightlife-evidence-verification__research-001`
- **Provider:** GPT Deep Research (ingested, German-language raw). No Gemini run.
- **Raw:** [10_LOCATIONS/nerja/experiences/nightlife](https://drive.google.com/drive/folders/1x4khVuX53R-t2nQx8rK7EH9zVCCM-qFL) → `2026-09-10__091826__gpt__nerja-nightlife-evidence-verification__raw.md`
- **Prompt:** `knowledge/prompts/locations/2026-09-10__110516__nerja-nightlife-evidence-verification__research-001.md`
- **Status:** normalized — 8 atomic facts, 3 sources, 3 open questions.

## Why this run existed
The nightlife page carried deep legacy copy with almost no backing (0 facts, 3 recommendation records; the manifest validated only the first-party Cochran's sundowner). This run establishes the honest character and which venue claims are safe.

## Evidence discipline (important)
Sourcing is weak — one official municipal event release plus a 2018 travel guide and a commercial venue-listing platform. The raw report labelled venue claims "verified", but on normalization they are recorded as **`partially-verified` with strong claim boundaries**: nightlife venues are highly volatile, and a listing/old blog does not confirm current operation. Only the summer late-event fact rests on an official source.

## Headline
Nerja nightlife is a **relaxed bar-and-terrace town**, not a club city: sea-view rooftop terraces at sunset, a centre cluster around **Plaza Tutti Frutti**, flamenco/live-music spots, and family-friendly beach bars — lively in summer (events to ~03:00), much quieter off-season.

## Public vs AMARA Experience split
- **Public "a night out in Nerja" model:** sunset on a rooftop terrace (Cochran's, Buddha Lounge), then the Plaza Tutti Frutti cluster for a livelier late evening in summer; live music at Cochran's and flamenco at El Burro Blanco / El Molino; calmer family evenings at H2O on Burriana. Hours are seasonal — no promises.
- **AMARA Experience (internal):** in high season the centre is busy and loud at weekends; off-season the choice narrows and many bars close. Flag seasonality and that specific venues must be checked live.

## KEEP / QUALIFY / DROP for the current page
- **KEEP (largely confirmed as active, treat as volatile):** Plaza Tutti Frutti as the hub; Cochran's Irish Pub; Buddha Lounge; El Burro Blanco; El Molino; H2O beach bar; rooftop-terrace/sunset character; summer late events.
- **QUALIFY:** Cochran's "Terrace Bar" (confirm it is part of Cochran's); opening/closing times (strongly seasonal — never guarantee late hours); named plaza bars (Malagrana, Premium, Tamareo, Obelix, Savage, Maui, Paradise) as "among the bars around the plaza", not individually guaranteed.
- **DROP:** big-disco / club claims (e.g. a "Seven"/Rockefeller party concept) without current evidence — likely from older descriptions.

## Coverage note
Facts in `knowledge/facts/locations/nerja/nightlife.ts`; sources in `knowledge/sources/locations/nerjaNightlifeSources.ts`; open questions in `knowledge/open-questions/locations/nerja/nightlife.ts`; page coverage extended additively in `knowledge/pages/nerja-nightlife/manifest.ts`. The first-party Cochran's sundowner stays owned by the existing `nerja.evenings.cochrans.*` records.
