# Frigiliana festivals — normalized synthesis (verification run)

- **Run:** `2026-09-10__085529__frigiliana-festivals-evidence-verification__research-001`
- **Provider:** GPT Deep Research (ingested). No Gemini run.
- **Raw:** [10_LOCATIONS/frigiliana/experiences/festivals](https://drive.google.com/drive/folders/1am0Oi78kux9epFClEeiOrux4krBrh6gI) → `2026-09-10__071322__gpt__frigiliana-festivals-evidence-verification__raw`
- **Prompt:** `knowledge/prompts/locations/2026-09-10__085529__frigiliana-festivals-evidence-verification__research-001.md`
- **Status:** normalized — 24 atomic facts, 21 sources, 5 open questions.
- **Self-evaluation (GPT):** 37/40.

## Why this run existed
The festivals page carried ~2,340 words/language of deep copy with **zero backing facts and no dossier**. This run puts verified evidence under it and flags which current-page claims to keep, qualify or drop.

## Headline
Frigiliana has a well-evidenced recurring festival calendar. Strongest "plan a trip around it" event: **Festival Frigiliana 3 Culturas** (communal, since 2006, late August, multi-day, turns the historic core into a venue — with the overnight downside the official sources themselves document: huge crowds, night programme, pyrotechnics, special parking/shuttle). The other robust core dates: **San Sebastián (Jan), Carnaval (Lent), Semana Santa (Easter), Día de la Miel (late Apr/early May), Cruces de Mayo (3 May), Feria de San Antonio (~13 June)**.

The decisive discipline is **fixed saint's day vs. visitor programme**: 20 Jan, 3 May, 13 June are fixed feast days, but that does not mean every public event sits exactly on those days. Carnaval/Semana Santa/Miel are movable; for 3 Culturas "late August" is the anchor, not a guaranteed date.

## Public vs AMARA Experience split
- **Public decision tree:** most lively → **3 Culturas**; classic local feria → **San Antonio**; ritual/procession atmosphere → **Semana Santa**; flower/village tradition → **Cruces de Mayo**; food/day-oriented → **Día de la Miel**; San Sebastián is an authentic add-on; Carnaval a deliberate party night; **Candelarias is not currently a reliable planning anchor**.
- **Internal stay note (noise):** around **late-August 3 Culturas** is the clearest red zone for a quiet-stay guest, then the **Feria** (the municipality itself describes it as loud into/after midnight). Carnaval and Cruces can produce single very late nights (Cruces: Plaza de la Iglesia). Semana Santa is "full streets + nocturnal procession movement", solemn rather than amplified. Día de la Miel has the lowest documented overnight impact. For all, a live check shortly before the stay supplements the evergreen facts.

## Conflicts preserved (not smoothed)
- **Candelarias recurrence** — traditional 7 Sept, official "extinct" note, intermittent revival; absent from the core list. Treat as historic/intermittent, not a travel anchor.
- **Día de la Miel 2026** — announced 2 May vs a "CANCELADO" post; execution unresolved.
- **3 Culturas edition number** — XIV (municipal) vs XIX/XX (others) → drop the number from evergreen facts.
- **3 Culturas piromusical position** — generic "opens" vs 2025 "closes" → name only in the live programme.

## KEEP / QUALIFY / DROP for the current festivals page
**KEEP:** 3 Culturas is an established recurring highlight; typically late August; includes music/gastronomy/market/street programme/culture; brings very large crowds and changes the village; Feria de San Antonio is the big June feria around the 13th patron day; Semana Santa has traditional processions and the nocturnal Soledad; Cruces de Mayo is a recurring flower/neighbourhood tradition around 3 May; Día de la Miel is a recurring gastronomic event.

**QUALIFY:** "every year on the last August weekend" → "typically late August; check the current edition"; "3 Culturas is annual" → "established as annual" (archive shows interruptions); "~20,000 / tens of thousands" → municipal magnitude, not exact statistic; "San Sebastián is on 20 January" → feast day yes, public programme may shift/extend; "Carnaval is in February" → movable relative to Lent; "Día de la Miel is end of April" → "late April/early May; no fixed day"; "Feria lasts five days" → "multi-day around 13 June"; "Feria ends 13 June with fireworks" → source says only "usually"; "Cruz de Mayo is a day event" → add the late verbena; "Semana Santa is quiet" → "solemn" is safer ("quiet" is wrong for Good Friday crowds); "Día de la Miel incl. factory visit/free tasting" → only with the live programme.

**DROP:** "the piromusical opens every 3 Culturas"; any concrete 2026 edition number; "Candelarias is a reliably annual 7 September bonfire fiesta"; any guaranteed upcoming artist list, exact tapa prices, stall counts, shuttle times, procession route or road closure in evergreen copy; "Frigiliana is quiet/event-free outside the named festivals".

## Knowledge-fact approach
Store fixed religious/traditional anchors only where they are truly fixed (20 Jan, 3 May, 13 June) and keep separate fields for typical event window, live-check-required and guest-impact. For Carnaval, Semana Santa, Miel and 3 Culturas no concrete future date belongs in an evergreen fact.

## Coverage note
Facts in `knowledge/facts/locations/frigiliana/festivals.ts`; sources in `knowledge/sources/locations/frigilianaFestivalsSources.ts`; open questions in `knowledge/open-questions/locations/frigiliana/festivals.ts`; page coverage in `knowledge/pages/frigiliana-festivals/manifest.ts`. History/heritage backdrop stays owned by `history-culture.ts` / `heritage-streetscape.ts`.
