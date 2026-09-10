# Tarifa arrival & getting there — normalized synthesis

- **Run:** `2026-09-10__110515__tarifa-arrival-getting-there__research-001`
- **Provider:** GPT Deep Research (ingested, German-language raw). No Gemini run.
- **Raw:** [10_LOCATIONS/tarifa/arrival](https://drive.google.com/drive/folders/1H_E2FwF1sN8tgPXI7V6ItWzBQoPmUVTP) → `2026-09-10__091856__gpt__tarifa-arrival-getting-there__raw.md`
- **Prompt:** `knowledge/prompts/locations/2026-09-10__110515__tarifa-arrival-getting-there__research-001.md`
- **Status:** normalized — 10 atomic facts, 9 sources, 5 open questions.

## Why this run existed
The Tarifa arrival page carried authored copy with zero backing facts and no dossier. This run fills the genuine evidence void (not an authoring gap).

## Core model
Four-airport decision → road/coach choice → the car-free old town with a police access permit → onward mobility on a wind-exposed coast (beaches, Bolonia, the weather-dependent Tanger ferry).

- **Airport choice:** Málaga (AGP, ~160 km / ~2 h) is the default for international flights; Jerez (~119 km / ~1 h 40) for western Andalucía; Gibraltar (~45 km, +border) mainly for UK; Seville (~200 km / ~2–2.5 h) furthest.
- **Road:** toll-free A-7 (E-15) via Algeciras from Málaga; A-4 then via Cádiz from Seville/Jerez.
- **Coach:** four operators (ALSA, Avanza, Comes, Socibus), ~75 daily connections aggregated, ~4/day from Málaga (~2.5 h); bus station at Calle Batalla del Salado 92, ~5 min from the centre. Frequency band only — live search per date.
- **Old town:** car-free from 13:30 Mon–Sat (2021 rule); only residents, reduced-mobility, permit-holding accommodation guests and delivery/service vehicles enter. Guests arrange a short-term police access permit via the accommodation to load/unload.
- **Parking:** outside the centre — paid car park by the tourist office, guarded harbour car park; beaches have roadside/paid parking (non-official source; verify on site).
- **Ferry:** Tarifa → Tanger-Ville ~1 h, up to ~8/day seasonally, weather-dependent — strong Levante cancels crossings.

## Evidence discipline
- No promised timetables, prices or ferry operation; all volatile items routed to live sources.
- The 2021 old-town rule is the strongest official anchor but may have changed → open question.
- Parking/beach-bus specifics rest on a non-official local source → `partially-verified`, verify on site.
- Accessibility: the reduced-mobility exemption is the rule, but cobbled narrow lanes remain a per-route difficulty.

## Public vs AMARA Experience split
- **Public decision model:** choose the airport by flight options; choose car vs coach by luggage/comfort; avoid driving into the old town; park at the edge; watch Levante warnings before counting on the ferry; tell the accommodation your arrival time so a short-term entry permit can be arranged.
- **AMARA Experience (internal):** a resolved arrival card per stay — airport, transfer/car, the exact old-town entry window and permit status, the edge car park to use, the door-level luggage plan, and the ferry Plan B. First-party measurement of the exact last stretch remains the open piece.

## Coverage note
Facts in `knowledge/facts/locations/tarifa/arrival.ts`; sources in `knowledge/sources/locations/tarifaArrivalSources.ts`; open questions in `knowledge/open-questions/locations/tarifa/arrival.ts`; page coverage in `knowledge/pages/tarifa-arrival/manifest.ts`. Existing `geography.ts` and `parking.ts` retain the village-layout and parking context. The kitesurf cluster is out of scope (edited in parallel).
