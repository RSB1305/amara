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

## W-04 · Klimadaten Nerja und Frigiliana — Widerspruch offen

| | |
|---|---|
| **Status** | **Ungeklärt.** Zwei Datensätze widersprechen sich. |
| **Betrifft** | [NerjaWeatherPage.astro](src/page-families/location-authority/NerjaWeatherPage.astro) · [FrigilianaWeatherPage.astro](src/page-families/location-authority/FrigilianaWeatherPage.astro) |
| **Prüfintervall** | Offen bis zur Klärung |
| **Risiko bei Veralten** | **Hoch.** Die Vergleichstabelle Nerja/Frigiliana steht auf wackligen Zahlen. |

Siehe [NERJA-FRIGILIANA-KLIMA-RECHERCHE_2026-08-13.md](NERJA-FRIGILIANA-KLIMA-RECHERCHE_2026-08-13.md).

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
