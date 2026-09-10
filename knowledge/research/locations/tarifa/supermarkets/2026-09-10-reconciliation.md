# Tarifa supermarkets — reconciliation (Aug + Sep 2026 runs)

- **Run:** `2026-08-22__064102__supermarkets-everyday-shopping__research-001` (cross-destination; now `normalized`).
- **Raws (both on Drive, 00_INBOX/02_GPT_RAW):** `2026-08-22__051950__gpt__supermarkets-everyday-shopping__raw.md` (62 KB, more rigorous/current, cited) and `2026-09-10__100953__gpt__supermarkets-everyday-shopping__raw.md` (45 KB).
- **Status:** normalized — 4 atomic facts, 3 sources, 3 open questions.

## Reconciled truth
- **Both agree (verified):** big supermarkets along the approach roads / outer axes (towards Los Lances and the port), small shops only in the old-town centre; **Lidl at C. Coronel Francisco Valdés 27**; Tarifa is Municipio Turístico → opening freedom in Semana Santa and 1 Jun–30 Sep (not additionally a ZGAT like Nerja; actual opening = operator's choice).
- **Disagree (disputed → volatile):** the current chain set. September named Mercadona (C/ La Línea) and Supeco (C/ San José 67); the more current August run found DIA (two branches), Supermercados El Jamón and a Carrefour Express at the N-340 service station, and could not address-confirm Mercadona. The August run also notes municipal market-hall stalls awarded 12 Aug 2026 (Calle Colón) whose operational status is unconfirmed.

## Decision
Publish only the stable layer — structure, the Lidl anchor and the tourist-municipality opening logic — and treat specific chains/addresses as live-check items (open questions), never a frozen list.

## Coverage
Facts in `facts/locations/tarifa/supermarkets.ts`; sources in `sources/locations/tarifaSupermarketsSources.ts`; open questions in `open-questions/locations/tarifa/supermarkets.ts`; page coverage extended in `pages/tarifa-supermarkets/manifest.ts`.
