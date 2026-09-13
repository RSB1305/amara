# Barribarto — place entity (normalized synthesis)

- **Run:** `2026-09-13__150901__frigiliana-barribarto-entity__research-001`
- **Provider:** Claude web synthesis (ingested). No GPT or Gemini run.
- **Raw:** [10_LOCATIONS/frigiliana/experiences/old-town/…barribarto-entity…](https://drive.google.com/drive/folders/1ChCx1eWhOGx8SJ7GgWF8VUJBhfJ-gE4r) → `2026-09-13__153700__claude__frigiliana-barribarto-entity__raw.md` (findings F1–F24, verbatim decree passages, a 39-point table of streets, plazas and miradores with coordinates and elevations, seven routes, ten conflicts, 47 sources).
- **Prompt:** `knowledge/prompts/locations/2026-09-13__150901__frigiliana-barribarto-entity__research-001.md`
- **Status:** normalized — 18 atomic facts (`facts/locations/frigiliana/barribarto.ts`), 25 sources (`sources/locations/frigilianaBarribartoSources.ts`), 4 open questions, 1 superseded fact, 1 public-content correction candidate.
- **Self-evaluation (Claude):** 30/40 (Experience Depth 2: step counts, surfaces and views deliberately left to the operator).

## Headline

The Barribarto is an official heritage entity: Decreto 183/2014 describes it verbatim as the presumed medieval core beside the castle walls — popular housing on small plots, generally two storeys, vernacular — against the Barribajo along Calle Real (three storeys) and the Ensanche to the east, and defines the adarves as mixed public/private spaces entered openly or through an algorfa. The Ayuntamiento derives the name from "Barrio Alto", names eleven adarves and publishes three itineraries plus the panel route, none with a length or duration. Official street geometry exists for every lane the old-town map needs (IGN CartoCiudad ids and centrelines; OSM steps and viewpoints); stated elevations exist only for four fountains (305–328 m), everything else is EU-DEM and labelled so.

## Correction to the public content (HUMAN INPUT REQUIRED)

The Callejón del Peñón page says the named miradores "at Santo Cristo and the Plaza de las Tres Culturas" catch the same view. The Plaza de las Tres Culturas is in the **lower village** on Avenida Carlos Cano, over the underground car park opposite El Ingenio, outside the BIC, about 200 m from and roughly 45 m below the lane. The true neighbours are the Diputación's "Mirador urbano del Peñón" in the lane itself and the "Mirador C/ Santo Cristo" on Calle Santo Cristo, whose lower end meets the foot of the Callejón (shared CartoCiudad vertices). The fact `frigiliana.callejon-penon.named-miradores` is marked superseded by `frigiliana.barribarto.callejon-penon.mirador-urbano-and-santo-cristo`; the five-language spoke text is a public-content change and waits for the operator's word.

## What the run supports for a Barribarto page

- **Definition and boundary:** above Calle Real, below the castle hill; Calle Real the only vehicle street from which every lane branches; Amargura the quarter's main street per the municipal English page.
- **Adarves:** the decree's definition plus the municipal list of eleven (Zacatín, Túnel, Señor, Huerta, Amargura, Peñón, Batanero, Torreón, Cura Soto, Corralón, Inquisidor); which are entered through an algorfa is open.
- **Walks:** the municipal Barribarto walk (end of Calle Almona → El Garral → El Zacatín with the panels → mirador de Lízar → tajo del Peñón), "Hacia El Torreón" (Callejón del Estanco → Calle Alta → optional mirador del Peñón → bajada de La Huerta → Callejón del Señor → plazuela → Torreón) and the LPMBE six-stop miradores-and-adarves itinerary.
- **Miradores:** Mirador urbano del Peñón (Diputación), Mirador C/ Santo Cristo (LPMBE, festival photocall), Mirador de Lízar (municipal English page), Casa del Apero mirador; platforms are unnamed OSM viewpoint nodes to be fixed on site. A 2021-funded mirador "en la zona alta del Santo Cristo" is not located.
- **Names:** Zacatín = street where clothing was sold (municipal gloss); Callejón del Peñón climbs to the Peñón de la Sabina (the rock), distinct from the lane and from El Fuerte.
- **Daily life and uses:** mules still carry materials up from Calle Real; whitewash kept by habit per the municipal page (basis is an open question against the BIC conditions); Cruces de Mayo crosses in adarves; the Soledad procession by candlelight through the quarter (night disputed between two municipal pages); the festival market stays on the lower plazas.
- **Casa AMARA:** on the Calle Real → Chorruelo axis, about 150 m west of the Zacatín/Garral lanes; not inside the Barribarto — say "at the foot of its lanes".

## Map-ready geometry

CartoCiudad ids: Amargura 290530000083, Zacatín …081, El Garral …102, Santo Cristo …045, Callejón del Peñón …100, del Señor …026, del Inquisidor …094, del Arriero …009, del Estanco …074, Plaza de las Tres Culturas …109, Rosarico la Joaquín …111. Coordinates for 39 points and EU-DEM heights are in the raw file's §4; the heights are ±10–15 m and serve ordering only. OSM step counts (Zacatín 32, La Chorrera 13, Hernando el Darra 29, La Huerta 82, Alta 21, Arriero 20, Santo Cristo 12, Estanco 8) seed the operator's measurement sheet and are not published until counted.

## Conflicts preserved

Fuente Vieja position (OSM/plaza vs inventory UTM, ~90 m); Callejón del Peñón vs "Peñón de la Sabina" naming; Soledad night; Reales Pósitos street (Calle Real 1 vs Hernando el Darra); town-hall location (Cuesta del Apero 10 vs plazuela); Plaza de las Tres Culturas "2008 / 2,000 m²" only in listings; duplicate El Ingenio Wikidata items; unexplained 1976 qualifier on the centro histórico item; castle dating range 9th–11th century; museum coordinates on Wikidata 100 m off.

## Open questions created

In `open-questions/locations/frigiliana/old-town.ts`: adarves in the decree's sense (medium), 2021 Santo Cristo mirador location (low), Soledad night (low); the Fuente Vieja, Reales Pósitos and Ermita positions are shared with the Calle Real run (high).

## First-hand candidates for the operator

Step counts and rises per lane; surfaces and handrails; which lanes are true adarves; actual mirador views and best hours; the walking time of the loop Casa AMARA → Plaza de la Iglesia → Zacatín → Garral → Santa Teresa → Chorrera → Amargura → Santo Cristo → Callejón del Peñón → Hernando el Darra → Calle Real; whether the Fuente del Barrio Alto still runs dry; night lighting in the upper lanes.

## Scorecard (Claude self-evaluation)

Factual Accuracy 4 · Source Quality 4 · Experience Depth 2 · AMARA Guest Relevance 4 · Evidence Discipline 4 · Research Efficiency 3 · Completeness 4 · Uncertainty Handling 5 — **30/40**.

Lesson candidates (PROPOSED): (1) query IGN CartoCiudad first for Spanish street geometry; (2) frigiliana.es, malaga.es and axarquiaplus.es block direct fetches but read through a reader proxy — record the proxy; (3) convert conocetusfuentes UTM and cross-check against OSM before trusting a coordinate.
