---
research_run_id: 2026-08-21__112650__geography-orientation__research-001
topic: geography-orientation
subjects: [frigiliana, nerja, tarifa]
record_type: normalization-synthesis
status: normalized
created: 2026-08-21T12:01:15+02:00
public: false
---

# Geography & Orientation research 001 — normalization synthesis

## Purpose

This document records how the GPT and Gemini Deep Research outputs were converted into AMARA’s versioned knowledge layer. The raw reports remain unchanged in Google Drive. They are discovery inputs, not evidence by themselves; reusable claims in Git cite the underlying sources and carry explicit claim boundaries.

No public content file was changed during this normalization.

## Provider assessment

### GPT Deep Research

The GPT report supplied the stronger evidence framework. It separated stable geography, practical implications, conflicts and open questions, and usually linked claims to official sources. Its most useful contributions were:

- official municipal reference data for all three destinations;
- Frigiliana’s legally documented historic morphology;
- Nerja’s coastal-mountain context, Río Chíllar corridor and coastline-length conflict;
- Tarifa’s Punta de Tarifa coordinates, causeway history, Strait dimensions, water exchange and Europe–Africa distance;
- explicit warning that property-level, access, gradient and visibility claims need separate evidence.

Even these claims were not copied automatically. Primary sources were opened and checked where technically accessible, and each accepted fact now states what the source does not prove.

### Gemini Deep Research

The Gemini report supplied useful mental-map models and guest-intent questions, but it repeatedly converted plausible tendencies into universal statements. The following claim groups were retained only as research leads, not normalized facts:

- Barribarto is categorically unreachable by vehicle or categorically unsuitable for wheeled luggage;
- guests with mobility or medical limitations must always stay in Frigiliana’s lower village;
- almost every Nerja beach return requires a climb;
- all northern Nerja accommodation has panoramic views;
- La Marina is universally wind-exposed while Tarifa’s old town is universally sheltered;
- Levante or Poniente makes named beaches categorically usable, unusable or dangerous;
- the Atlantic and Mediterranean form a permanently visible dividing line at the causeway.

These formulations are too broad for an authority page and could produce unsafe or insulting guidance. The useful underlying questions—route effort, exact access, local exposure, beach approach and property relationship—are preserved in the destination open-question files.

## Normalization rules applied

1. Official primary sources take precedence over research-report prose.
2. A municipal reference altitude is not a town-wide elevation.
3. Municipality inclusion in a protected area is not proof that every built address is inside it.
4. Regional dimensions are not property distances or view promises.
5. Stable geography and volatile operational advice have separate owners.
6. A practical implication is retained only when its inference is narrow and its route/property boundary is explicit.
7. Conflicts remain visible; they are not silently averaged or resolved by editorial preference.

## Important conflicts preserved

- Frigiliana official reference altitude: SIMA 318 m; AEMET 315 m. Both are reference values, not a conflict about every street elevation.
- Nerja coastline length: official tourism formulations of 13 km and 14 km remain disputed until method and boundary are identified.
- Tarifa municipal area: SIMA 419.93 km²; the emergency plan rounds to 419.6 km². SIMA governs the canonical municipal-area fact.
- Tarifa superlative: “southernmost mainland city in Europe” is retained as carefully bounded wording; “southernmost point of Europe” is rejected as unqualified because European islands extend farther south.
- Tarifa’s two-seas story: the causeway is retained as a local orientation convention, while MITECO’s marine evidence governs the physical description of a dynamic water-exchange zone.

## Output

Normalized records now exist for each destination under:

- `knowledge/sources/locations/*GeographySources.ts`
- `knowledge/facts/locations/*/geography.ts`
- `knowledge/open-questions/locations/*/geography.ts`
- `knowledge/research/locations/*/geography/2026-08-21-normalized.md`
- `knowledge/pages/*-geography/manifest.ts`

The structured fact files are canonical. This synthesis explains judgment and preserves rejected generalizations so that future work does not accidentally reintroduce them.
