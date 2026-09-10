# Tarifa health & emergency — reconciliation (Aug + Sep 2026 runs)

- **Run:** `2026-08-22__064103__health-emergency__research-001` (cross-destination; now `normalized`).
- **Raws (both on Drive, 00_INBOX/02_GPT_RAW):** `2026-08-22__052848__gpt__health-emergency__raw.md` (59 KB, cited, structure-focused) and `2026-09-10__095759__gpt__health-emergency__raw.md` (25 KB, address/contact detail).
- **Status:** normalized — 8 atomic facts, 5 sources, 4 open questions. Health-sensitive: attributed, claim-bounded, no medical advice.

## Reconciled truth (both runs agree)
- **Centro de Salud Tarifa** (SAS, Zona Básica Tarifa) in the Área de Gestión Sanitaria Campo de Gibraltar Oeste; address C/ Amador de los Ríos s/n, phone 956 027 700 (address/phone from the September run, not contradicted).
- Outlying consultorios **Facinas, Tahivilla, Bolonia**.
- Reference hospital **Hospital Universitario Punta de Europa, Algeciras** (~23 km / ~30 min via A-7 — approximate; one run marked the distance an inference).
- **112** for emergencies; **Salud Responde** 902 505 060 / 955 545 060.
- Pharmacy **guardia** via the **Colegio Oficial de Farmacéuticos de Cádiz** live finder; Tarifa is sometimes covered externally → live check.
- **EHIC** free public care + prescription co-pay.

## Differences handled
- **Hours:** the August run flagged the SAS hours string as ambiguous ("08:00–08:00", `DISPUTED`) → hours are **not published**; route to SAS/Salud Responde.
- **Private clinic:** only the August run lists a private **Tarifa Medical Center** (general medicine, traumatology, physiotherapy) → kept as `partially-verified` operator listing, useful as a possible English-language route, with a verify-before-use boundary.
- **Language:** mainly Spanish, no interpreter guarantee (partially-verified).

## Nerja note
Nerja health already has a normalized fact set (`nerja.health.*`: Centro de Salud C/ Carlos Millón, 951 289 662, Hospital de la Axarquía) that is consistent with both runs — no new ingest needed there. Frigiliana health was ingested earlier today.

## Coverage
Facts in `facts/locations/tarifa/health.ts`; sources in `sources/locations/tarifaHealthSources.ts`; open questions in `open-questions/locations/tarifa/health.ts`; page coverage extended in `pages/tarifa-health-emergency/manifest.ts`.
