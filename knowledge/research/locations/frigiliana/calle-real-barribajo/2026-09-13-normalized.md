# Calle Real & Barribajo — lower old town (normalized synthesis)

- **Run:** `2026-09-13__150902__frigiliana-calle-real-barribajo__research-001`
- **Provider:** Claude web synthesis (ingested). No GPT or Gemini run.
- **Raw:** [10_LOCATIONS/frigiliana/experiences/old-town/…calle-real-barribajo…](https://drive.google.com/drive/folders/17IaYlwtdXb4kbgMao8z8lPldydN8J9Hu) → `2026-09-13__153600__claude__frigiliana-calle-real-barribajo__raw.md` (findings F1–F26, verbatim decree passages incl. the western boundary and the parcel list, a 30-point table with coordinates and EU-DEM heights, nine conflicts, 35 sources). The decree text was extracted from the Junta PDF with pdftotext; the PDF is public and stable and is not re-archived.
- **Prompt:** `knowledge/prompts/locations/2026-09-13__150902__frigiliana-calle-real-barribajo__research-001.md`
- **Status:** normalized — 19 atomic facts (`facts/locations/frigiliana/calle-real-barribajo.ts`), 20 sources (`sources/locations/frigilianaCalleRealSources.ts`), 4 open questions, 1 disputed fact, 2 public-content correction candidates.
- **Self-evaluation (Claude):** 30/40 (Completeness 3: town-hall seat, Fuente Vieja position and Chorruelo etymology stay open).

## Headline

**Casa AMARA stands inside the protected Conjunto Histórico.** Its parcel (Catastro 9925509VF2792N, block 99255 parcel 09) is in the decree's parcel list for the Bien; the western boundary runs along the rear of that block and then crosses the Plaza de la Fuente. The same block holds El Torreón (Calle Real 109, parcel 41), which the decree names as a building of special interest subject to municipal pre-emption. The municipality confirms the host fact: Calle Real is the only vehicle street, and "a partir de la plaza de la Iglesia toma el nombre de calle Chorruelo"; the 2006 sculpture stands at Chorruelo's end, the Ermita about 300 m further. The decree adds the Barribajo typology (wealthier, three storeys, larger plots), the Ensanche as the shop area, and the 1640 villa title with independence from Vélez-Málaga and the founding of the Ayuntamiento. The 1982 award is a first prize of the state "Premios Nacionales de Turismo de Embellecimiento y Mejora de los Pueblos Españoles" (BOE 1979 order); the resolution naming Frigiliana was not found.

## Corrections to the public content (HUMAN INPUT REQUIRED)

1. **Reales Pósitos.** The knowledge fact and every official source say Calle Real (no. 1, just before the Hernando el Darra junction; OSM 36.7914771, -3.8956076). The spoke says "Calle Hernando el Darra, im unteren Barribarto" and carries a coordinate about 100 m to the west. Corner building; the frontage is Calle Real.
2. **Ermita del Ecce Homo.** The chapel is at the far end of Calle Chorruelo by Calle Rosarico la Joaquín (OSM 36.7953972, -3.9006033), about 300 m beyond the sculpture per the municipality. The spoke's coordinate (36.793750, -3.898850) sits near the church, about 250 m away, and its "three minutes on the flat from Casa AMARA" is not supported. The Fuente Vieja spoke's "beside the Ermita" inherits the problem.
3. **Fuente Vieja coordinate fact.** `frigiliana.fuente-vieja.location.coordinates` claimed the inventory's UTM matched the operator pin; the UTM converts about 90 m north. The fact is marked disputed; the pin itself (which matches OSM, the Wikidata plaza item, the ficha's own text and the decree's "cruza la plaza de la Fuente") is probably right and needs one GPS fix.

These are content changes in five languages and wait for the operator; the knowledge layer records the evidence.

## What the run supports for the Calle Real & Barribajo page and the stay pages

- Inside the protected ensemble, western edge (publishable); on the Calle Real → Chorruelo axis; one-way traffic per OSM Ingenio → church → Chorruelo northwards (first-hand check); sett surface; Calle Real about half a kilometre long; house numbers rising from the Pósitos (1) to the church-side block (74, 109).
- El Torreón: mid-18th-century pósito site, not Arab, coastal-watch type; the vessel with three-religion symbols as origin of the "Villa de las 3 Culturas" slogan; hotel since July 2017 (named only as current use).
- Town hall: official seat Cuesta del Apero 10 by the Casa del Apero; the historic Casa Consistorial on the Calle Real plazuela (no. 80) opposite the Torreón per tourism copy and Wikipedia (≤1844) — open which is which today.
- Plaza del Ingenio as bus drop-off and start of the municipal walk; car park of the Plaza de las Tres Culturas about 50 m away (parking terms belong to the parking page).
- Stepped lanes leaving Calle Real, with OSM step counts, as the seed of the measurement sheet.
- Fuente de las Tres Culturas (305 m) between the Callejón del Inquisidor and the Callejón de las Ánimas, near the church square: a new, citable point beside the Fuente Vieja.

## Map-ready geometry

Casa AMARA 36.793171, -3.899107 (≈307 m EU-DEM); Plaza de la Iglesia 36.792972, -3.898984; Calle Real from 36.7917814, -3.8959983 (Ingenio side) to 36.7930558, -3.8989230 (church); Calle Chorruelo from 36.7934886, -3.8991042 to 36.7944708, -3.8991193; Plaza del Ingenio 36.7912704, -3.8951590; Plaza de las Tres Culturas 36.7907458, -3.8956141; Ayuntamiento (seat) 36.7904071, -3.8946592; Casa del Apero 36.7903783, -3.8947074; Reales Pósitos 36.7914771, -3.8956076; Ermita 36.7953972, -3.9006033; Fuente de las Tres Culturas 36.793488, -3.898760. Wikidata: Calle Real Q110656460, Plaza de la Iglesia Q110063124, church Q98504857, Ayuntamiento Q126817250, Fuente Vieja Q126054962, Plaza de la Fuente Vieja Q110063117, Fuente de las Tres Culturas Q126068393, Museo Q6033136, El Ingenio Q6058379. No item for El Torreón, the Plaza del Ingenio or the Plaza de las Tres Culturas. Heights are EU-DEM ±5–10 m, never for step or gradient claims.

## Conflicts preserved

Town-hall location; Fuente Vieja position; El Torreón position (hotel pin 125 m east of the cadastral block); Reales Pósitos street; Ermita street; shops (Ensanche per decree vs Calle Real per a tourism blog); decree parcel tables overlapping for block 99255 parcels 56–64; elevations (ficha vs DEM vs SRTM); church completion date phrasing.

## Open questions created

In `open-questions/locations/frigiliana/old-town.ts`: Fuente Vieja position (high), Reales Pósitos position (high), Ermita position (high), town-hall seat vs Casa Consistorial (medium), Chorruelo etymology (low); the Calle Chorruelo-inside-BIC question is resolved by this run.

## First-hand candidates for the operator

No steps from the door along Chorruelo → Plaza de la Iglesia → Calle Real → Plaza del Ingenio, and where the surface changes; direction of house numbering on Chorruelo; which fountain guests see first; where the plazuela opens and whether the Calle El Torreón passage under the building is walkable; which building is the public front desk; the view from the door; which bus stop the Nerja bus uses; night lighting of the sculpture and the Fuente de las Tres Culturas.

## Scorecard (Claude self-evaluation)

Factual Accuracy 4 · Source Quality 4 · Experience Depth 3 · AMARA Guest Relevance 4 · Evidence Discipline 4 · Research Efficiency 3 · Completeness 3 · Uncertainty Handling 5 — **30/40**.

Lesson candidates (PROPOSED): (1) when a BOJA/BOE page is truncated, save the PDF and run pdftotext, then grep — the parcel-list check was only possible that way; (2) convert a conocetusfuentes ficha's own UTM rather than reading a map pin; (3) treat "Ayuntamiento" as two entities (seat vs historic Casa Consistorial) until a source states the move.
