# Home-capital climate references on 1991–2020 — partial

- Researched: 2026-08-30
- Answers (partially): `frigiliana.climate.question-home-capital-references`
- Status: **PARTIALLY RESOLVED** — London, Berlin and Amsterdam extracted; Stockholm covered for summer at city level; Madrid uses the clearly labelled AEMET 1981–2010 station table for one rounded editorial comparison

## Settled: the period is 1991–2020

All five services use 1991–2020 as the current standard normal period.
AEMET states that 1981–2010 applied only until December 2022 and that
1991–2020 has been in force since January 2023. SMHI, KNMI and the Met Office
publish the same period; DWD maintains a `mean_91-20` CDC dataset.

No service publishes anything more recent as a standard normal period. Current
observations are reported *against* 1991–2020, not as a replacement for it.

> KNMI terminology trap: `decadegemiddelden` means ten-*day* blocks within a
> month, not a rolling ten-year mean. It is not a newer normal period.

## Critical finding: AEMET's own station pages are stale

AEMET's classic "Valores climatológicos normales" station pages — including
Sevilla 5783, Córdoba 5402, Málaga 6155A and Madrid-Retiro 3195 — **still
display 1981–2010 tables**, while AEMET's OpenData and climate-monitoring
products already carry 1991–2020.

This is a publication/versioning problem, not a meteorological disagreement.
Practical consequence: an official source can still be the *wrong period* for
a given purpose. The normal period has to be part of a source's identity, not
a footnote.

The current path for Spanish stations is the OpenData endpoint
`GET /api/valores/climatologicos/normales/estacion/{idema}`.

## Extracted values

### Berlin — Berlin-Dahlem, DWD/WMO 10381, 1991–2020 (temperature complete)

| | Jan | Feb | Mar | Apr | May | Jun | Jul | Aug | Sep | Oct | Nov | Dec |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| Mean daily max °C | **3.4** | 5.1 | 9.1 | 15.4 | 19.7 | 22.8 | 24.8 | 24.6 | 19.7 | 13.9 | 7.8 | 4.2 |

The values are the DWD-published 1991–2020 monthly normals for the mean of
daily maximum air temperature. DWD identifies WMO station 10381 as
Berlin-Dahlem. The public German comparison uses the January values only and
rounds both source values to whole degrees: regional Frigiliana 12 °C and
Berlin-Dahlem 3 °C.

### London — Heathrow, Met Office, 1991–2020 (complete)

| | Jan | Feb | Mar | Apr | May | Jun | Jul | Aug | Sep | Oct | Nov | Dec |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| Mean daily max °C | 8.42 | 8.98 | 11.73 | 15.00 | 18.37 | 21.57 | **23.89** | 23.40 | 20.22 | 15.81 | 11.47 | 8.79 |
| Rainfall mm | 58.83 | 44.96 | 38.78 | 42.31 | 45.91 | 47.25 | **45.80** | 52.78 | 49.61 | 65.07 | 66.63 | 57.05 |
| Sunshine h | 61.09 | 78.81 | 124.45 | 176.67 | 207.49 | 208.39 | **217.81** | 202.12 | 157.11 | 115.17 | 70.74 | 54.96 |

Annual cross-check published alongside: 15.67 °C, 614.98 mm, 1,674.81 h.
The Met Office page names neither a station id nor an elevation; neither was
filled in from another catalogue.

### Stockholm — SMHI, 1991–2020, summer only, city-level

| | Jun | Jul | Aug |
|---|---:|---:|---:|
| Mean daily max °C | 20.5 | **23.5** | 22.0 |
| Rainfall mm | 62 | **62** | 66 |
| Sunshine h | 277 | **280** | 235 |

Published officially by SMHI for "Stockholm". The table names no station id,
so this is a city-level figure, not a station-bound one. SMHI also flags its
1991–2020 download files as preliminary.

### Amsterdam — Schiphol, KNMI 240, 1991–2020 (temperature complete)

| | Jan | Feb | Mar | Apr | May | Jun | Jul | Aug | Sep | Oct | Nov | Dec |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| Mean daily max °C | **6.2** | 6.9 | 10.1 | 14.3 | 17.8 | 20.3 | 22.5 | 22.4 | 19.2 | 14.7 | 10.0 | 6.9 |

The public Dutch comparison uses the January values only and rounds both to
whole degrees: regional Frigiliana 12 °C and Amsterdam 6 °C. The guest-facing
copy names Amsterdam; the KNMI source behind it is Schiphol station 240.

### Madrid — AEMET Madrid-Retiro 3195, 1981–2010 (editorial bridge only)

AEMET's public station table gives a July mean daily maximum of **32.1 °C**.
The Spanish page uses this once as a rounded, familiar comparison with the
regional Frigiliana value of 27 °C. It does not present the two datasets as a
same-period scientific comparison; the purpose is to explain what the monthly
temperature means for a guest moving between coast and inland Spain.

## Not extracted

Madrid (AEMET 3195, 667 m), Sevilla 5783, Córdoba 5402 and Málaga 6155A. For all of these the correct
1991–2020 product was confirmed to exist, but the monthly values sit in
download payloads, XLSX files or API responses that this run could not read.

Deliberately **not** backfilled from the 1981–2010 pages.

## Sunshine hours: no instrumental equivalence

KNMI documents deriving sunshine duration from 10-minute global-radiation
values. No comparable primary definition was secured for DWD, Met Office or
SMHI. Hours are readable across services as the same output unit; the
measurement method must not be described as identical.

## Sources

- AEMET vigilancia del clima — https://www.aemet.es/gl/datos_abiertos/estadisticas/vigilancia_clima
- AEMET OpenData — https://opendata.aemet.es/dist/
- DWD CDC mean_91-20 — https://opendata.dwd.de/climate_environment/CDC/observations_germany/climate/multi_annual/mean_91-20/
- DWD mean of daily maximum air temperature 1991–2020 — https://opendata.dwd.de/climate_environment/CDC/observations_global/CLIMAT/multi_annual/air_temperature_mean_of_daily_max/1991_2020.txt
- DWD station identification 10381 Berlin-Dahlem — https://www.dwd.de/DE/fachnutzer/forschung_lehre/meteorologische_fachverfahren/mosmix_aenderungen/downloads/2025_0604_mosmix_aenderung.pdf?__blob=publicationFile&v=4
- Met Office Heathrow averages — https://www.metoffice.gov.uk/research/climate/maps-and-data/location-specific-long-term-averages/gcpsvg3nc
- AEMET Madrid-Retiro standard values (1981–2010) — https://www.aemet.es/es/serviciosclimaticos/datosclimatologicos/valoresclimatologicos?k=&l=3195
- SMHI normalvärden 1991–2020 — https://www.smhi.se/data/temperatur-och-vind/temperatur/dataserier-med-normalvarden-for-perioden-1991-2020
- SMHI semesterväder — https://www.smhi.se/kunskapsbanken/meteorologi/arstider/semestervader---vad-sager-statistiken
- KNMI klimaatnormalen 1991–2020 — https://www.knmi.nl/kennis-en-datacentrum/achtergrond/achtergrondinformatie-berekening-klimaatnormalen-1991-2020
- KNMI Schiphol station 240, 1991–2020 — https://cdn.knmi.nl/knmi/map/page/klimatologie/klimaatatlas/tabel/stationsdata/klimtab_9120_240.pdf

All accessed 2026-08-30.
