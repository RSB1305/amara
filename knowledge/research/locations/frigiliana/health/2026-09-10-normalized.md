# Frigiliana health & emergency — normalized synthesis

- **Run:** `2026-09-10__085530__frigiliana-health-consultorio-emergency__research-001`
- **Provider:** GPT Deep Research (ingested). No Gemini run.
- **Raw:** [10_LOCATIONS/frigiliana/health](https://drive.google.com/drive/folders/1EIWhrXY6f__IPTheQNeFWR7gLzSOGKd1) → `2026-09-10__071038__gpt__frigiliana-health-consultorio-emergency__raw`
- **Prompt:** `knowledge/prompts/locations/2026-09-10__085530__frigiliana-health-consultorio-emergency__research-001.md`
- **Status:** normalized — 9 atomic facts, 6 sources, 5 open questions. Smaller dossier, but it fills the Frigiliana-specific gap the manifest previously covered with borrowed Nerja facts.

## Headline
The Frigiliana-specific pathway is now evidenced: **Consultorio Frigiliana** (primary care, SAS, Calle Príncipe de Asturias s/n, 951 03 64 15, cita previa via ClicSalud+/Salud Responde), **two pharmacies** (Plaza del Ingenio; Plaza Doña Amparo Guerrero), **112/061** emergency routing with a documented Guardia Civil SEREIM mountain evacuation, and the receiving hospital **Hospital de la Axarquía** (Torre del Mar, ~22 km, ~20–25 min). The coast-level hospital/emergency layer stays owned by the existing Nerja health facts; this run does not re-research Nerja.

## Health-sensitive discipline
- Everything is attributed and claim-bounded; nothing reads as medical advice.
- Hours (consultorio and pharmacy) are **high volatility** → route to SAS / Salud Responde / the on-site sign, never publish as a guarantee.
- **Source conflict preserved:** a private directory flags Farmacia Germán Sánchez Maldonado as "permanently closed" (Dec 2022). The second pharmacy must be confirmed on site before it is relied on (open question).
- Pharmacy contacts come from private directories (may be outdated); the consultorio and hospital facts rest on the official SAS source.

## Public vs AMARA Experience split
- **Public decision model:** mild illness → try the consultorio (appointment via phone/app) or the local pharmacy; out of hours → farmacia de guardia or 112. Real emergency → **112**, describe your location, ambulance to Hospital de la Axarquía. This goes beyond a directory line by giving the actual decision path and the honest mountain-access reality.
- **AMARA Experience (internal):** a stay-specific, address-level health note (nearest pharmacy from the stay, consultorio contact, 112 script, hospital route), with the pharmacy-open status and duty rota checked live near the stay. EHIC/insurance kept as general context, not advice.

## Coverage note
Facts in `knowledge/facts/locations/frigiliana/health.ts`; sources in `knowledge/sources/locations/frigilianaHealthSources.ts`; open questions in `knowledge/open-questions/locations/frigiliana/health.ts`. The existing `frigiliana-health-emergency` manifest (publicContentPath `src/content/dailyLifeGuideContent.ts`) is extended additively with this run; the Nerja-owned hospital/emergency facts remain as the shared coast layer.
