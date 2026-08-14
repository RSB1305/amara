# Content-Wartungspunkte

Zeitkritische Aussagen auf öffentlichen Seiten, die veralten können. Jede Zeile nennt die Quelle, an der sich der aktuelle Stand prüfen lässt.

**Regel:** Vor jedem Release prüfen. Wer prüft, trägt Datum und Ergebnis unter „Prüfhistorie" ein.

---

## W-01 · Río Chíllar — Zugang gesperrt

| | |
|---|---|
| **Status** | Gesperrt seit August 2023, kein Öffnungstermin |
| **Betrifft** | [nerjaGeographyContent.ts](src/content/nerjaGeographyContent.ts) — Abschnitt `rio-chillar`, alle 5 Sprachen |
| **Quelle** | https://www.nerja.es/el-acceso-al-rio-chillar-permanece-cerrado/ |
| **Zweitquelle** | https://www.nerja.es/prohibido-el-uso-recreativo-del-chillar-por-la-alarma-sanitaria/ |
| **Prüfintervall** | Vor jedem Release, mindestens quartalsweise |
| **Risiko bei Veralten** | **Hoch.** Gäste planen eine Wanderung zu einer gesperrten Route. Die Polizei kontrolliert den Zugang täglich. |

**Was zu tun ist, wenn sich der Status ändert:**
Andalusien hat 2026 ein Verfahren für kontrollierten Zugang mit Besucherbegrenzung eingeleitet; die Konzession an einen von drei privaten Betreibern war zuletzt noch offen. Sobald die Route wieder öffnet, muss der Satz in allen fünf Sprachen umgeschrieben und die Sperrungs-Quelle im Quellenblock ersetzt werden.

**Prüfhistorie**
- 2026-08-13 — geprüft, weiterhin gesperrt. Aussage und Quellenblock entsprechend gesetzt.

---

## W-02 · Pool AMARA Family & Surf — Saison

| | |
|---|---|
| **Status** | Wetterabhängig, grob Mitte Mai bis Mitte September |
| **Betrifft** | [tarifaLocationContent.ts](src/content/tarifaLocationContent.ts) — Abschnitt `amara`, alle 5 Sprachen |
| **Quelle** | Hausgemeinschaft Las Terrazas de la Marina (keine öffentliche Quelle) |
| **Prüfintervall** | Jährlich vor Saisonbeginn |
| **Risiko bei Veralten** | Mittel. Erwartungslücke beim Gast. |

Die Saison wird von der Hausgemeinschaft je nach Witterung festgelegt und schwankt. Der Text ist bewusst unscharf formuliert („je nach Witterung etwa von…") und sollte das bleiben.

---

## W-03 · Öffnungszeiten Nerja — Markt, Apotheke, Busbahnhof

| | |
|---|---|
| **Status** | Als Muster formuliert, nicht als Zusage |
| **Betrifft** | [nerjaDailyLifeContent.ts](src/content/nerjaDailyLifeContent.ts) — `facts` und Abschnitt `tuesday-market`, alle 5 Sprachen |
| **Quellen** | https://www.sspa.juntadeandalucia.es/servicioandaluzdesalud/el-sas/servicios-y-centros/informacion-por-centros/24887 · https://www.spain.info/en/transport/nerja-bus-station/ |
| **Prüfintervall** | Halbjährlich |
| **Risiko bei Veralten** | Niedrig, weil der Text alle Zeiten ausdrücklich als Muster kennzeichnet. |

---

## W-04 · Klimadaten Nerja und Frigiliana — teilweise geklärt, Zahlen weiter offen

| | |
|---|---|
| **Status** | **Falsche Aussagen entfernt. Endgültige Zahlen fehlen weiterhin.** |
| **Betrifft** | [NerjaWeatherPage.astro](src/page-families/location-authority/NerjaWeatherPage.astro) · [FrigilianaWeatherPage.astro](src/page-families/location-authority/FrigilianaWeatherPage.astro) |
| **Prüfintervall** | Offen bis zur Klärung |
| **Risiko** | Gesenkt. Auf den Seiten stehen keine unbelegten Zahlenpaare mehr. |

### Was die Recherche geklärt hat

Auftrag 1 ergab zwei sich widersprechende Berichte. Belastbar ist nur, was **beide** verwerfen:

- **292 mm Jahresniederschlag** — keine Quelle reproduziert diesen Wert. Verworfen.
- **„Frigiliana tagsüber heißer, 31 gegen 28 °C"** — nicht belegt; unabhängige Kontrolle zeigt eher Gleichstand. **Von der Seite entfernt.**
- **26 °C Wassertemperatur als Monatsmittel** — nur als sommerlicher Einzelwert plausibel. Auf der Seite steht 24.
- **„Mildeste Winter auf dem europäischen Festland"** — kein Ranking-Nachweis, methodisch undefiniert. Wird nicht verwendet.
- **„300+ Sonnentage"** — kein definierter meteorologischer Kennwert. AEMET führt für Málaga 2.905 Sonnenstunden, aber nur 109,1 wolkenlose Tage im Jahr. **Von der Frigiliana-Seite entfernt.**

Zusätzlich geklärt: Station **6213X** liegt auf 169 m und rund 3,4 km von der Ortslage Nerja (20 m) entfernt; ein durchgehender Datenbestand 1991–2020 ist nicht nachgewiesen. Für **Frigiliana** (315 m) gibt es laut AEMET **keine Station im Gemeindegebiet**.

### Was offen bleibt

Die AEMET-Rasterwerte 1991–2020 für beide Ortskoordinaten. Erst damit lassen sich Monatstabellen und ein Zahlenvergleich veröffentlichen.

Siehe [NERJA-FRIGILIANA-KLIMA-RECHERCHE-2_2026-08-14.md](NERJA-FRIGILIANA-KLIMA-RECHERCHE-2_2026-08-14.md).

### Aktueller Stand auf der Seite

Der Vergleichsblock nennt keine Zahlen mehr, sondern die Aussage, die beide Berichte stützen: im Hochsommer tagsüber ähnlich heiß, Nerja nachts milder. Ein sichtbarer Hinweis nennt die laufende Prüfung.

**Prüfhistorie**
- 2026-08-14 — Auftrag 1 ausgewertet, widerlegte Aussagen entfernt, Auftrag 2 gestellt.

---

## W-05 · Bahía Park Algeciras — Saison und Preise

| | |
|---|---|
| **Status** | Bewusst ohne Zahlen verlinkt |
| **Betrifft** | noch nicht veröffentlicht (vorgemerkt für Tarifa-Inhalte) |
| **Quelle** | https://www.bahiapark.com/ |
| **Risiko bei Veralten** | Niedrig, solange keine Preise oder Saisonzeiten genannt werden. |

---

## Grundsatz

Zeitkritische Angaben gehören entweder mit Quelle und Prüfdatum hierher — oder sie werden so unscharf formuliert, dass sie nicht veralten können. Was weder belegt noch unscharf ist, gehört nicht auf eine Seite.
