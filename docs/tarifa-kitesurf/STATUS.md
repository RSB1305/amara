# Tarifa-Kitesurf-Cluster — Stand 03.09.2026

Übergabe an Claude Code. Alle inhaltlichen Vorarbeiten liegen in diesem Ordner.

## Was bereits umgesetzt und geprüft ist (Stufe 1)

Routenstruktur korrigiert, `npm run build` grün, alle Prebuild-Gates bestanden:

| Route | Rendert | Status |
|---|---|---|
| `tarifa-kitesurfing` | `TarifaKitesurfHubPage` | neu angelegt, fünfsprachig |
| `tarifa-wind-kitesurfing` | `TarifaKitesurfWindPage` | bestehende Route, Ziel gewechselt |
| `tarifa-kitesurf-spots` | `TarifaKitesurfSpotsPage` | unverändert |
| `tarifa-kitesurf-wind-spots` | — | entfernt |

Geänderte Dateien: `src/lib/canonicalPublicSlugs.mjs`, `src/lib/linkRegistry.ts`, `src/lib/seo/resolve-structured-data.ts`, `src/content/tarifaKitesurfContent.ts`, `src/content/tarifaKitesurfSpotsContent.ts`, `src/content/tarifaKitesurfWindContent.ts`, `src/page-families/location-authority/TarifaKitesurfHubPage.astro`, `src/page-families/location-authority/TarifaKitesurfSpokePage.astro`, die vier Routendateien. Neu: `src/assets/images/content/tarifa/mark-tarifa-surf-club.webp`.

Der Link-Token `tarifa_kitesurf_wind_spots` wurde vollständig durch `tarifa_wind_kitesurfing_authority` ersetzt; der neue Hub-Token heißt `tarifa_kitesurfing_hub`.

## Warum das nötig war

Der vorherige Lauf hatte `tarifa-wind-kitesurfing` zum Hub umgewidmet und daneben eine zweite Route `tarifa-kitesurf-wind-spots` angelegt — mit dem generischen Spoke-Template, ohne Navigationseintrag und mit Suchintent-Überschneidung zu `tarifa-kitesurf-spots`. Die eigentliche Wind-Seite (`TarifaKitesurfWindPage.astro`, 15,7 KB, plus 58,8 KB Content) existierte, hing aber an keiner Route und wurde nie gerendert.

## Was als Nächstes ansteht

**Stufe 2 — Redaktion Deutsch.** `src/content/tarifaKitesurfWindContent.ts` auf den freigegebenen Text bringen (`seitentext-wind-de.md`). Wichtig: alle Formulierungen entfernen, die AEMET als Forecast-Quelle des Live-Briefings darstellen. AEMET liefert amtlichen Wetterkontext und Warnungen; die Prognose kommt später aus Open-Meteo.

Danach Stufen 3 bis 7 gemäß `bauauftraege.md`.

## Dateien in diesem Ordner

- `redaktions-contract.md` — die einzige inhaltliche Quelle für die Wind-Seite. Freigegebene Claims mit Quelle und Stand, Blacklist verbotener Aussagen, Open-Meteo-Datenmatrix, Windguru-Glossar, Zitatregeln.
- `seitentext-wind-de.md` — der freigegebene deutsche Seitentext.
- `bauauftraege.md` — sieben Stufen, einzeln abnehmbar, jede mit fester Dateiliste.

## Offene Punkte

- „Sea Angels" wurde laut Mark umbenannt; welcher der beiden heutigen Anbieter daraus hervorging, ist ungeklärt. Der Name erscheint bis dahin nicht auf der Seite.
- Aufnahmeort für den Alt-Text von `mark-tarifa-surf-club.webp`.
- AEMET-Warnzonen-ID für Tarifa: Deployment-Blocker für die automatische Warnbox.
- Open-Meteo-Gateway existiert noch nicht. Im Repo liegt nur `weather-gateway/aemet-forecast.mjs`.
