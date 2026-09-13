# Frigiliana old-town cluster — search intent & SERP landscape (normalized synthesis)

- **Run:** `2026-09-13__150900__frigiliana-old-town-search-intent__research-001`
- **Provider:** Claude web synthesis (ingested). No GPT or Gemini run.
- **Raw:** [10_LOCATIONS/frigiliana/experiences/old-town/…search-intent…](https://drive.google.com/drive/folders/1dtlOM5QLXsA_DU_E9ft67pSkQ2LS5hS6) → `2026-09-13__152100__claude__frigiliana-old-town-search-intent__raw.md`
- **Prompt:** `knowledge/prompts/locations/2026-09-13__150900__frigiliana-old-town-search-intent__research-001.md`
- **Status:** normalized — 0 atomic facts (a demand/SERP study yields decisions, not place facts), 4 new open questions, 1 human decision package.
- **Self-evaluation (Claude):** 31/40 (Experience Depth 3: page structures read from markdown, not rendered).

## Headline

Every language is dominated by travel-blog listicles; official pages (turismofrigiliana.es, frigiliana.es, malaga.es, BOJA) win only the entity-shaped queries (old quarter, Barribarto, panels, single monuments); OTAs sit in the top five for "things to do / Sehenswürdigkeiten". Intent mix across 34 queries: overview ≈ 60 %, one-day itinerary ≈ 15 %, sight-specific ≈ 15 % (mostly Spanish, plus El Ingenio and Casa del Apero hours in every language), history ≈ 10 %. "Walking route / wandelroute / Rundgang" is a **hiking** intent (AllTrails, Komoot, Wikiloc, El Fuerte), not an old-town stroll. Two rental hosts already rank for old-town queries (frigilianaholidayrentals.com in DE/SV, athomecostadelsolrentals.com in EN/ES), so a host page can hold this ground. No search volumes were measured; proxies only.

## What the SERP sets as the bar

Ranking pages beat monument prose on **logistics**: named car parks with prices, driving times from Nerja/Málaga/Granada, a half-day time budget, seasonal museum hours, FAQ blocks ("is it worth it", "how long", "why white", "bus from Nerja") and a route map with the walking order drawn in. They are weak on street-level accuracy, dates and sources. Only the municipal pages carry the street walk through the upper quarter and the **eleven named adarves** (Zacatín, Túnel, Señor, Huerta, Amargura, Peñón, Batanero, Torreón, Cura Soto, Corralón, Inquisidor); no blog reproduces either.

Claims the SERP repeats without a source, to keep off AMARA pages or to attribute:

- "A 1971 law forces white façades" — contradicted by the municipal Barribarto page ("no bye-laws, simply the habit"); no 1971 ordinance found. See open question on the basis of the white-façade rule.
- "El Ingenio is the only cane-honey factory in Europe" — repeated by blogs and by official snippets, never sourced; AMARA's attributed wording ("last of its kind on the peninsula", Diputación) stands.
- Panel installation "1960s" (municipal panels page) vs 1982 (Spanish Wikipedia, AMARA fact) — recorded as an open question; the 1982 fact is not changed by a snippet.
- 11 June 1569 is the date the good pages give; 28 May is the first, failed assault. AMARA's edge is the two-date chronology, not a correction.

## Decisions this run supports (human decision package)

1. **Barribarto: own page, scoped as the upper-quarter street-and-adarve page** that mirrors "Calle Real & Barribajo". Evidence: a dedicated municipal page in EN/ES/DE with a street-by-street walk; the Spanish Wikipedia entity "Conjunto histórico de Frigiliana" (Wikidata Q97633690) defines Barribarto against Barribajo; three dedicated Spanish editorial pages and an aggregator attraction entity rank for the term. Against: no Wikipedia article, no Tripadvisor listing, no DE/SV page ranks. A Barribarto page that repeats the overview would cannibalise the hub. Duplication control: the hub keeps definition, tiles, history summary and route section; the Barribarto page carries the eleven adarves, the Alto/Bajo boundary (above Calle Real, below the castle hill; Amargura as main street; Calle Real the only vehicle street), house typology and daily life; Callejón del Peñón & Miradores keeps the viewpoints. Fallback without a new page: an anchored adarve section on the hub tile, not on the Callejón page.
2. **Hub title/H1 set (brand-free, resolver appends "| AMARA"):** DE "Frigiliana Altstadt: Sehenswürdigkeiten, Rundgang & Geschichte" / H1 "Die Altstadt von Frigiliana"; EN "Frigiliana Old Town: Things to See, Walk & History" / "Frigiliana Old Town"; ES "Casco antiguo de Frigiliana: qué ver, ruta e historia" / "El casco antiguo de Frigiliana"; NL "Oude centrum van Frigiliana: bezienswaardigheden, wandeling & geschiedenis" / "Het oude centrum van Frigiliana"; SV "Frigilianas gamla stadskärna: sevärdheter, promenad & historia" / "Frigilianas gamla stadskärna". NL must say "oude centrum", not "oude stad" (all seven Dutch ranking pages); SV must avoid bare "Gamla stan" (Stockholm entity dominates).
3. **An old-town walk must be titled with the place** ("Altstadt-Rundgang", "old town walk", "paseo por el casco antiguo"); bare "Rundgang/walking route/wandelroute" competes with hiking apps.
4. **Logistics bar for the hub:** parking with names and prices, a "how long" answer, an FAQ block and a route map are what the ranking pages carry and AMARA's hub does not; the map and the route are the planned Location-Authority work, the parking facts belong to the parking page and its knowledge owner.

## Long-tail ownership per sight (which page answers what)

| sight | own demand proxy | owning AMARA page |
|---|---|---|
| Barribarto | municipal page EN/ES/DE, Wikipedia sub-entity, 3 ES editorial pages | new Barribarto page (decision 1) |
| Keramiktafeln | municipal per-panel pages, Tripadvisor listing, forum thread; AMARA PR titles rank in DE | ceramic-panels page (per-panel location, translation) |
| El Ingenio | es.wikipedia article, Tripadvisor listing, official pages | El Ingenio page (visiting rule: cane-honey day only, official snippet, to verify) |
| Casa del Apero | Tripadvisor museum listing, four official pages | Casa del Apero page (seasonal hours as dated current check; sources conflict) |
| San Antonio | Tripadvisor listing, misas.org | San Antonio page |
| Calle Real & Barribajo | no own listing; defined by the Wikipedia entity | Calle Real page |
| Fuente Vieja | Tripadvisor listing, fountain registry, malaga.es | Fuente Vieja page |
| Castillo de Lizar | es.wikipedia article, Tripadvisor listing, Wikiloc | Castillo page ("how much is left", the way up; hill name open) |
| Reales Pósitos | official and association POIs; no Tripadvisor listing | Reales Pósitos page |
| Ermita de Ecce Homo | Tripadvisor listing, official POI | Ermita page ("closed more than open") |
| Callejón del Peñón & Miradores | malaga.es "Mirador urbano del Peñón", LPMBE "Miradores y Adarves" (six stops) | Callejón page |

## Open questions created

`knowledge/open-questions/locations/frigiliana/old-town.ts`: Calle Chorruelo inside the BIC delimitation (high); basis of the white-façade rule — BIC conditions vs "no bye-law" vs the repeated 1971 law (high); panel installation date 1960s vs 1982 vs Navas Acosta 1995 (medium); name of the castle hill, Cerro de Lízar vs Cerro de la Sabina (low).

## Limitations

WebSearch is US-based and language-agnostic; DE/NL/SV rankings are indicative. No "People also ask" data; FAQ blocks on ranking pages were the proxy. Tripadvisor, viajeroscallejeros and malaga.es (history) blocked fetches and are cited at ID/title level only. Not covered: video demand, Google Maps entity strength.

## Scorecard (Claude self-evaluation)

Factual Accuracy 4 · Source Quality 4 · Experience Depth 3 · AMARA Guest Relevance 4 · Evidence Discipline 4 · Research Efficiency 4 · Completeness 4 · Uncertainty Handling 4 — **31/40**.

Lesson candidates (PROPOSED): (1) for sight-level queries fetch the Andalusian official pages first, blogs only to read intent and the logistics bar; (2) title old-town walks with the place or they compete with hiking apps; (3) treat Tripadvisor as ID-level evidence only.
