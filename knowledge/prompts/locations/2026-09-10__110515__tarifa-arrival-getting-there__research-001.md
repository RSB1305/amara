# AMARA Deep Research — Tarifa arrival and getting there

## Mission
Build a reliable arrival and onward-mobility model for a guest travelling to Tarifa: which airport to choose, the road and coach options, the reality of the car-free old town and parking, and onward movement along a wind-exposed coast (beaches, Bolonia, the Tangier ferry). Public job: answer the durable "how do I get to Tarifa and get around" question. AMARA Experience job: give a booked guest an exact, stay-specific arrival and parking plan.

## What we already have (do not re-deliver)
- `knowledge/facts/locations/tarifa/geography.ts` (14), `parking.ts` (6), `where-to-stay.ts` (6): orientation, the old-town layout and parking context.
- No transport/arrival facts topic exists — airport choice, distances, journey times, coach operators and the ferry option are currently unbacked, although the arrival page already carries authored copy.

## Concrete open gaps (research brief)
1. Airport choice: realistic trade-offs between Málaga, Jerez, Gibraltar and Seville for reaching Tarifa (rough drive distance/time each, how volatile), and which suits most guests.
2. Road approach (A-7/N-340 along the coast) and the realistic door-to-door picture by car or pre-booked transfer.
3. Coach options: which operators serve Tarifa (e.g. Comes/Avanza, ALSA) and the nature of the service as a frequency band, not a timetable; where the bus station sits relative to the old town.
4. The final approach: the car-free/restricted old town, where a visitor can legally stop/unload, and where to leave the car (public car parks vs street).
5. Onward mobility: reaching the spread-out beaches (Los Lances, Valdevaqueros, Bolonia) and the Tarifa–Tangier ferry — including how strong Levante wind can disrupt the ferry.
6. Accessibility reality of the old town for guests with mobility limits or heavy luggage.

## "More than the official source" bar
- Name the official sources (Ayuntamiento de Tarifa, the airports, the ferry and coach operators) and go demonstrably beyond them: the decision a traveller faces (which airport, car vs coach), the trade-offs, and a Plan B when a connection or the ferry falls through. What the official pages do not answer is the target value.

## Evidence and safety rules
- Never promise timetables, prices, frequencies, ferry operation or that a bus runs on a given day; mark all high volatility and route to a live source. Treat the Tangier ferry as weather-dependent.
- Official and operator sources first; commercial transfer/ferry resellers may only evidence that a service exists.
- Preserve disagreements between sources; never silently pick one.
- No public copy, no slugs, no page text — evidence only.

## Required outputs (fixed format)
1. Atomic facts: statement · status · source(s) · checkedAt · volatility · claimBoundary.
2. Source register: title · publisher · type · url · accessedAt · limitations.
3. Open questions: what stays unresolved + the evidence it would need.
4. Guest synthesis: a public arrival decision model (airport choice + mode) + an internal stay-specific arrival/parking note.

## Self-evaluation (0–5 each; max 40)
Factual Accuracy; Source Quality; Experience Depth; AMARA Guest Relevance; Evidence Discipline; Research Efficiency; Completeness; Uncertainty Handling. End with no more than three lessons.
