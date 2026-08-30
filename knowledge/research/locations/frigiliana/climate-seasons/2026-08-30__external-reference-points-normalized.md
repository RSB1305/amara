# External climate reference points for Frigiliana — normalized

- Researched: 2026-08-30
- Answers: `frigiliana.climate.question-external-reference-points`
- Providers: AEMET (Spain), KNMI (Netherlands)
- Common reference period: **1981–2010** for all four stations

## Why these stations

A guest reading a July maximum has no scale for it. These four official station
normals supply one: two Andalusian inland stations for the round trip most
guests make, one coastal station, and one northern European reference.

None of these values describes Frigiliana. Frigiliana has no observing station
of its own, and no value here may be corrected for elevation, interpolated or
relabelled.

## Comparability

| Normalized field | AEMET | KNMI | Assessment |
|---|---|---|---|
| `meanDailyMaximumC` | `TM`, mean of daily maxima | `gemiddeld maximum`, underlying `TX` | comparable |
| `monthlyPrecipitationMm` | `R`, mean monthly precipitation | `som in mm`, underlying `RH` | comparable at monthly-normal level |
| `monthlySunshineHours` | `I`, mean sunshine hours | `in uren`, `SQ` | same output quantity, calculation **not** established as identical — KNMI derives `SQ` from global radiation |

"Same definition" here means the same meteorological statistic and unit over
the same 30-year period. It is not a claim that both services used identical
sensors or national processing rules. For sunshine that stronger claim cannot
be supported and must not be made.

## Stations

| Role | Station | Id | Elevation | Source |
|---|---|---|---:|---|
| Andalusian inland | Sevilla Aeropuerto | 5783 | 34 m | AEMET |
| Andalusian inland | Córdoba Aeropuerto | 5402 | 90 m | AEMET |
| Coast | Málaga Aeropuerto | 6155A | 7 m | AEMET |
| Northern Europe | Schiphol Airport | 240 | −4.18 m (station ground) | KNMI |

Schiphol elevation uses KNMI's cadastral station-ground height, not the AIP
aerodrome elevation of −3.35 m; KNMI specifies the former as representative
for airport stations.

## Monthly normals 1981–2010

Mean daily maximum (°C) / precipitation (mm) / sunshine (h).

| Month | Sevilla | Córdoba | Málaga | Schiphol |
|---|---|---|---|---|
| Jan | 16.0 / 66 / 183 | 14.9 / 66 / 174 | 16.8 / 69 / 180 | 5.8 / 66.6 / 63.2 |
| Feb | 18.1 / 50 / 189 | 17.4 / 55 / 186 | 17.7 / 60 / 180 | 6.3 / 50.6 / 87.5 |
| Mar | 21.9 / 36 / 220 | 21.3 / 49 / 218 | 19.6 / 52 / 222 | 9.6 / 60.6 / 126.3 |
| Apr | 23.4 / 54 / 238 | 22.8 / 55 / 235 | 21.4 / 44 / 244 | 13.5 / 40.9 / 182.7 |
| May | 27.2 / 30 / 293 | 27.4 / 40 / 288 | 24.3 / 20 / 292 | 17.4 / 55.6 / 221.9 |
| Jun | 32.2 / 10 / 317 | 32.8 / 13 / 323 | 28.1 / 6 / 329 | 19.7 / 66.0 / 205.7 |
| **Jul** | **36.0** / 2 / 354 | **36.9** / 2 / 363 | **30.5** / 0 / 347 | **22.0** / 76.5 / 217.0 |
| Aug | 35.5 / 5 / 328 | 36.5 / 5 / 336 | 30.8 / 6 / 316 | 22.1 / 85.9 / 197.0 |
| Sep | 31.7 / 27 / 244 | 31.6 / 35 / 248 | 28.2 / 20 / 255 | 18.8 / 82.4 / 139.4 |
| Oct | 26.0 / 68 / 216 | 25.1 / 86 / 204 | 24.1 / 57 / 215 | 14.5 / 89.6 / 109.1 |
| Nov | 20.2 / 91 / 181 | 19.1 / 80 / 180 | 20.1 / 100 / 172 | 9.7 / 87.2 / 61.7 |
| Dec | 16.6 / 99 / 154 | 15.3 / 111 / 148 | 17.5 / 100 / 160 | 6.4 / 76.3 / 50.5 |

Málaga's July precipitation normal of 0 mm is the published value at whole-mm
precision. It must not be restated as "it never rains there in July".

## Source URLs

- Sevilla 5783 — https://www.aemet.es/es/serviciosclimaticos/datosclimatologicos/valoresclimatologicos?k=and&l=5783
- Córdoba 5402 — https://www.aemet.es/es/serviciosclimaticos/datosclimatologicos/valoresclimatologicos?k=and&l=5402
- Málaga 6155A — https://www.aemet.es/es/serviciosclimaticos/datosclimatologicos/valoresclimatologicos?k=and&l=6155A
- Schiphol 240 table — https://cdn.knmi.nl/knmi/map/page/klimatologie/klimaatatlas/tabel/stationsdata/klimtab_8110_240.pdf
- KNMI variable definitions — https://daggegevens.knmi.nl/
- KNMI station metadata — https://cdn.knmi.nl/knmi/pdf/bibliotheek/knmipubIR/IR2014-03.pdf

All accessed 2026-08-30.

## Still open

Home-country references for the German, English, Spanish and Swedish editions
(Berlin, London, Madrid, Stockholm) are **not** covered here. DWD publishes
1981–2010 long-term means, so a matching period is attainable, but no primary
values have been extracted and none may be published until they are.
