# Bauaufträge — Tarifa-Kitesurf-Cluster

*Sieben Stufen. Jede einzeln abnehmbar, jede einzeln zurückrollbar. Immer nur eine Stufe pro Lauf beauftragen.*

**Für jeden Lauf gilt, ohne Ausnahme:**

- Nur die unter „Dateien" genannten Dateien anfassen. Alles andere bleibt unberührt.
- Ein lokaler Commit am Ende. Kein Push, kein PR, kein Deployment.
- Keine neuen Dokumentationsdateien, Tests, Audit-Skripte oder Guardrails anlegen.
- Bei einem konkreten Widerspruch zur Architektur: stoppen und melden, statt eine Lösung zu erfinden.
- Inhaltliche Quelle ist ausschließlich der Redaktions-Contract und der freigegebene Seitentext.

---

## Stufe 1 — Routen korrigieren

**Das ist bewusst Class 3.** Route-Ownership, Slug-Liste und Link-Registry-Semantik ändern sich. Diese Stufe ist mit dem Betreiber ausdrücklich abgestimmt und autorisiert; der Agent muss dafür nicht nachfragen.

**Ziel:** Der Hub bekommt seinen eigenen Slug, die Wind-Seite bekommt ihre Route zurück, das Duplikat verschwindet.

**Zielzustand:**

| Route | Rendert | Status |
|---|---|---|
| `tarifa-kitesurfing` | `TarifaKitesurfHubPage` | neu |
| `tarifa-wind-kitesurfing` | `TarifaKitesurfWindPage` | bestehende Route, neues Ziel |
| `tarifa-kitesurf-spots` | `TarifaKitesurfSpotsPage` | unverändert |
| `tarifa-kitesurf-wind-spots` | — | entfällt vollständig |

**Dateien:**

- `src/pages/tarifa-kitesurfing.astro` (neu) und `src/pages/[lang]/tarifa-kitesurfing.astro` (neu) — nach dem Muster der bestehenden Hub-Routen
- `src/pages/tarifa-wind-kitesurfing.astro` und `src/pages/[lang]/tarifa-wind-kitesurfing.astro` — Import auf `TarifaKitesurfWindPage` umstellen
- `src/pages/tarifa-kitesurf-wind-spots.astro` und `src/pages/[lang]/tarifa-kitesurf-wind-spots.astro` — löschen
- `src/lib/canonicalPublicSlugs.mjs` — `tarifa-kitesurfing` aufnehmen, `tarifa-kitesurf-wind-spots` entfernen
- `src/lib/linkRegistry.ts` — Token `tarifa_kitesurfing_hub` auf den neuen Slug; `tarifa_kitesurf_wind_spots` entfernen. `tarifa_wind_kitesurfing_authority` bleibt bestehen und zeigt weiterhin auf `tarifa-wind-kitesurfing`, meint jetzt aber den Wind-Spoke.
- `src/lib/tarifa/tarifaAuthoritySubnav.ts` — die Experience-Kinder bleiben wie sie sind; `wind` zeigt weiter auf den Wind-Spoke. Der Hub gehört nicht in diese Geschwisterliste.
- `src/page-families/location-authority/TarifaKitesurfSpokePage.astro` — der `hubLabel`-Verweis zeigt künftig auf den Hub-Token statt auf `tarifa_wind_kitesurfing_authority`.

**Prüfen:** Kein verwaister Verweis auf `tarifa_kitesurf_wind_spots` im Repo. `npm run build` läuft mit seinen Prebuild-Gates durch, insbesondere die Slug-Policy.

**Fertig wenn:** `/tarifa-kitesurfing` zeigt den Hub, `/tarifa-wind-kitesurfing` zeigt die Wind-Seite, `/tarifa-kitesurf-wind-spots` existiert nicht mehr, und alle fünf Sprachpfade funktionieren.

---

## Stufe 2 — Redaktion Deutsch

**Ziel:** Der freigegebene deutsche Text steht in der Content-Datei.

**Dateien:** `src/content/tarifaKitesurfWindContent.ts`

**Regeln:**

- Der Contract ist die einzige inhaltliche Quelle. Nichts hinzufügen, was dort nicht steht.
- Alle AEMET-als-Forecast-Formulierungen entfernen. Der AEMET-Block wird als amtlicher Wetterkontext beschriftet, nicht als Kite-Briefing.
- Die Zitate von Robert und Mark stehen wörtlich so, wie sie freigegeben sind. Kein Umformulieren, kein Verstärken, keine Adjektive dazu.
- Die vier weiteren Sprachen bleiben in diesem Lauf unverändert. Sie kommen in Stufe 7.
- Der Pflichtsatz zu Beschilderung und Bojen steht unverändert.

**Fertig wenn:** Die deutsche Fassung entspricht dem freigegebenen Text und der Build läuft.

---

## Stufe 3 — Gestaltung

**Ziel:** Die Seite sieht nicht aus wie ein Textdokument. Der Spots-Spoke ist ausdrücklich kein Vorbild.

**Dateien:** `src/page-families/location-authority/TarifaKitesurfWindPage.astro`, bei Bedarf eine neue Komponente unterhalb von `src/components/` für die Windguru-Beispielzeile.

**Was gebaut wird:**

- **Die beschriftete Windguru-Beispielzeile.** Eine eigene, erklärende Darstellung einer Forecast-Zeile mit Beschriftungen an den Feldern. Kein Windguru-Widget, kein fremdes JavaScript. Das ist das Herzstück der Seite — hier lernt jemand etwas.
- **Zitatblöcke mit Gesicht** für Robert und Mark, klar als Zitat erkennbar, mit Name und Rolle.
- **Der Notfallblock** visuell deutlich abgesetzt vom privaten Rescue-Block. Die Verwechslung dieser beiden ist das Risiko, das die Gestaltung ausschließen muss.
- **Das Live-Briefing** als eigenständiges Datenobjekt, nicht als weiterer Textabschnitt.

**Regeln:** Bestehende AMARA-Komponenten, Tokens und Sektionsrhythmus. Kein neues Designsystem. Mobile-first. Keine Aneinanderreihung von `AuthorityTextSection`.

**Fertig wenn:** Desktop und Mobile geprüft, Build grün.

---

## Stufe 4 — Open-Meteo-Gateway

**Ziel:** Serverseitige Wetteranbindung. **Keine Seitenänderung in diesem Lauf.**

**Dateien:** `weather-gateway/`, `functions/`, Konfiguration

**Regeln:**

- Explizite Modellkonfiguration. Kein `models=auto` mit anschließender Modellbehauptung im UI.
- Request- und Response-Koordinate speichern, Offset je Abruf berechnen. Keinen maximalen Abstand publizieren.
- Abrufzeit, Gültigkeitszeit, Quelle und konfiguriertes Modell mitspeichern. `generationtime_ms` ist nicht die Modelllaufzeit.
- Cache und Key serverseitig, nach dem bestehenden Cloudflare-Muster. Kein Key im Client.
- Ehrlicher Fehlerzustand. Keine Pseudo-Werte.
- Felder gemäß Datenmatrix im Contract.

**Fertig wenn:** Der Endpunkt liefert die Felder mit vollständigen Metadaten, und der Fehlerfall ist getestet.

---

## Stufe 5 — Live-Briefing und Erklärschicht

**Ziel:** „Heute in Tarifa" zeigt echte Werte und ordnet sie ein.

**Dateien:** `src/page-families/location-authority/TarifaKitesurfWindPage.astro`, die Briefing-Komponente, eine neue Satzbibliothek unter `src/content/`

**So funktioniert die Erklärschicht:**

- Die Satzvarianten werden **zur Autorenzeit** geschrieben und einmal redaktionell freigegeben, je Situation und je Sprache.
- **Zur Laufzeit** wählen deterministische Regeln aus den Werten die passende Variante. Kein Sprachmodell erzeugt Text zur Laufzeit.
- Beispiele für Regeln: großer Abstand zwischen Grundwind und Böe → Böigkeits-Satz. Windwelle und Swell aus deutlich verschiedenen Richtungen → Seegangs-Satz. Deutlicher Anstieg über den Tagesverlauf → Timing-Satz.

**Verboten, technisch erzwungen:** Freigabe oder Untersagung einer Session, Kitegröße, Spotwahl, Sicherheitsbewertung, Score, Rescue-Zusage, Modellauswahl.

**Pflicht:** Open-Meteo-Attribution sichtbar an der Datenanzeige, mit Modell, Originalquelle, Abrufzeit und Gültigkeitszeit.

**Fertig wenn:** Werte, Einordnung, Attribution und Fallback stehen und die verbotenen Ausgaben strukturell unmöglich sind.

---

## Stufe 6 — AEMET-Warnblock

**Voraussetzung:** Die maschinenlesbare Warnzonen-Zuordnung für Tarifa ist gegen die offizielle AEMET-Quelle verifiziert und getestet. Ohne diese Verifikation wird diese Stufe nicht gestartet — bis dahin bleibt der externe AEMET-Link.

**Ziel:** Amtlicher Warnblock oberhalb des Modellbriefings.

**Regeln:** Warnstufe, Phänomen, Zone, Gültigkeit von–bis, Quelle AEMET, Abrufzeit, Link zur amtlichen Seite. Über AEMET OpenData, kein Scraping. Warnungen werden weder zusammengefasst noch relativiert noch gegen Open-Meteo aufgerechnet.

---

## Stufe 7 — ES, EN, NL, SV

**Ziel:** Die vier übrigen Sprachen auf dem Stand der deutschen Fassung.

**Regeln:**

- Nativ schreiben, nicht übersetzen. Der Contract nennt die Fakten, die Ansprache und die Grenzen; die Formulierung entsteht in jeder Sprache neu.
- Die Semantik-Parität gilt: jeder Schlüssel in jeder Sprache, gleiche Anzahl Listeneinträge, gleiche Identität wo IDs vorhanden sind.
- Prosa darf sich in der Absatzstruktur unterscheiden. Das ist ausdrücklich erlaubt.
- Zitate von Robert und Mark: übersetzt, aber nicht ausgeschmückt. Kein Adjektiv dazu, das im Original nicht steht.
- Die Ihr-Ansprache und die kollektive Gastgeberstimme gelten in allen Sprachen.

**Fertig wenn:** Alle fünf Sprachen vollständig, Parität-Test grün, Build grün.

---

## Reihenfolge und Release

Stufen 1 bis 3 bilden ein sinnvolles erstes Release: eine korrekte Routenstruktur und eine fertige, gut aussehende deutsche Seite. Stufe 7 kann danach folgen, Stufen 4 bis 6 laufen unabhängig.

Gesammelt lokal committen, einmal am Batch-Ende die vollständige Release-Validierung, dann ein Push, ein Pull Request, ein Merge — gemäß dem Cloudflare-Build-Budget in `AGENTS.md`.
