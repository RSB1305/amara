# Nerja supermarkets — reconciliation (Aug + Sep 2026 runs)

- **Run:** `2026-08-22__064102__supermarkets-everyday-shopping__research-001` (cross-destination; now `normalized`).
- **Raws (both on Drive, 00_INBOX/02_GPT_RAW):** `2026-08-22__051950__gpt__supermarkets-everyday-shopping__raw.md` (62 KB, more rigorous/current, cited) and `2026-09-10__100953__gpt__supermarkets-everyday-shopping__raw.md` (45 KB).
- **Status:** normalized — 4 atomic facts, 3 sources, 3 open questions.

## Why reconciled
Two GPT runs covered the same topic; the operator asked to cross-check "until we have the truth". All four raw files stay on Drive as evidence.

## Reconciled truth
- **Both agree (verified):** big supermarkets on the approach/edge roads, small shops in the centre; **Lidl at Av. Alcalde Antonio Villasclaras Rosas 3**; Nerja is Municipio Turístico + ZGAT → Sunday/holiday opening freedom in Semana Santa and 1 Jun–30 Sep (actual opening = operator's choice).
- **Disagree (disputed → volatile):** the current chain set. September named Mercadona/Supersol/Covirán; the more current August run named ALDI, Carrefour Express/Market, EROSKI Rapid (Burriana) and Iranzo, with Mercadona only partially confirmed. The Supersol→Carrefour rebrand explains much of the gap.

## Decision
Publish only the stable layer — structure, the Lidl anchor and the tourist-zone opening logic — and treat specific chains/addresses as live-check items (open questions), never a frozen list. The daily-life page already ships authored shop copy; this run backs it with a disciplined fact layer.

## Coverage
Facts in `facts/locations/nerja/supermarkets.ts`; sources in `sources/locations/nerjaSupermarketsSources.ts`; open questions in `open-questions/locations/nerja/supermarkets.ts`; page coverage extended in `pages/nerja-supermarkets/manifest.ts`.
