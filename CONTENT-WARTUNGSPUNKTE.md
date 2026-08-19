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

## W-04 · Klimadaten Nerja und Frigiliana — OPEN, amtliche Vergleichsbasis weiter offen

| | |
|---|---|
| **Status** | **OPEN — Lokale Frigiliana-Orientierungswerte transparent veröffentlicht; amtliche Vergleichsbasis fehlt weiterhin.** |
| **Betrifft** | [NerjaWeatherPage.astro](src/page-families/location-authority/NerjaWeatherPage.astro) · [FrigilianaWeatherPage.astro](src/page-families/location-authority/FrigilianaWeatherPage.astro) |
| **Prüfintervall** | Offen bis zur Klärung |
| **Risiko** | Gesenkt. Frigiliana nutzt einen sichtbar als modelliert gekennzeichneten Punktdatensatz; ein numerischer Nerja-Vergleich bleibt bis zur gemeinsamen amtlichen Basis gesperrt. |

### Was die Recherche geklärt hat

Auftrag 1 ergab zwei sich widersprechende Berichte. Belastbar ist nur, was **beide** verwerfen:

- **292 mm Jahresniederschlag** — keine Quelle reproduziert diesen Wert. Verworfen.
- **„Frigiliana tagsüber heißer, 31 gegen 28 °C"** — nicht belegt; unabhängige Kontrolle zeigt eher Gleichstand. **Von der Seite entfernt.**
- **26 °C Wassertemperatur als Monatsmittel** — nur als sommerlicher Einzelwert plausibel. Der zuvor veröffentlichte Bereich bis 24 °C wurde im Containment-Patch ebenfalls entfernt.
- **„Mildeste Winter auf dem europäischen Festland"** — kein Ranking-Nachweis, methodisch undefiniert. Wird nicht verwendet.
- **„300+ Sonnentage"** — kein definierter meteorologischer Kennwert. AEMET führt für Málaga 2.905 Sonnenstunden, aber nur 109,1 wolkenlose Tage im Jahr. Die Aussage war entgegen der früheren Dokumentation vor diesem Patch noch in allen fünf Locales live und wurde mit dem Weather Evidence Containment Patch entfernt.

Zusätzlich geklärt: Station **6213X** liegt auf 169 m und rund 3,4 km von der Ortslage Nerja (20 m) entfernt; ein durchgehender Datenbestand 1991–2020 ist nicht nachgewiesen. Für **Frigiliana** (315 m) gibt es laut AEMET **keine Station im Gemeindegebiet**.

Zusätzlich aus Recherche 2 geklärt:

- **Die Kompensationsthese** — die Sonneneinstrahlung am Südhang gleiche den Höhenunterschied aus — ist **eine Annahme ohne Messnachweis**. Sie stand als Begründung auf der Seite und ist entfernt. Zwei Sekundärquellen mit gemeinsamer Methode zeigen entweder Gleichstand oder Nerja tagsüber geringfügig wärmer; „Frigiliana ist tagsüber heißer" ist damit endgültig verworfen.
- **Höhendifferenz:** maßgeblich sind die Ortskerne, **20 m gegen 315 m = 295 m**. Nicht die Station 6213X (169 m), die ein anderer geografischer Punkt ist.

### Was offen bleibt

Die AEMET-Rasterwerte 1991–2020 für beide Ortskoordinaten. Erst damit lassen sich Nerja und Frigiliana numerisch auf einer gemeinsamen amtlichen Basis vergleichen. Eine quantitative Vergleichsaussage erfordert für beide Orte dieselbe belastbare Quelle, denselben Referenzzeitraum und eine klar definierte meteorologische Kennzahl. Lokale Planungswerte dürfen bis dahin nur mit sichtbarer Quelle, Referenzperiode und Modellkennzeichnung erscheinen.

**Konkreter Beschaffungsweg** (aus Recherche 2):

1. Stations-Normalwerte für 6213X gegenprüfen, mit kostenlosem OpenData-Key:
   `GET https://opendata.aemet.es/opendata/api/valores/climatologicos/normales/estacion/6213X?api_key={KEY}`
   Der Original-Response ist zu archivieren — bislang liegt weder ein amtliches „hier sind die Werte" noch ein amtliches „keine Daten" vor.
2. Rasterwerte aus *Mapas climáticos de España (1991–2020)* für genau diese zwei Punkte anfordern:
   - **Nerja:** 36.74484684 N, −3.87667655 · 20 m
   - **Frigiliana:** 36.79299972 N, −3.89875687 · 315 m
   Variablen: mittlere Tagesmaxima, mittlere Tagesminima, Monatsniederschlag, Sonnenscheindauer.
   Ausdrücklich **keine** Nachbarstationswerte und **keine** manuelle Regionalisierung.
3. Danach Punktabfrage im GIS, Zellwerte ohne zusätzliche Höhenkorrektur übernehmen.

**Ebenfalls vor jeder Umsetzung neu prüfen:** ob der öffentliche AEMET-Webviewer „Valores climatológicos normales" noch auf 1981–2010 steht oder inzwischen auf 1991–2020 umgestellt wurde.

Siehe [NERJA-FRIGILIANA-KLIMA-RECHERCHE-2_2026-08-14.md](NERJA-FRIGILIANA-KLIMA-RECHERCHE-2_2026-08-14.md).

### Aktueller Stand auf der Seite

- **Frigiliana:** Eine 12-Monats-Tabelle zeigt wieder Temperatur, Niederschlag, Regentage und Sonnenstunden. Zahlenquelle ist das Climate-Data.org-Punktmodell für Frigiliana (Temperatur/Niederschlag 1991–2021, Sonnenschein 1999–2019); die Seite kennzeichnet Modellstatus und Zeitraum sichtbar und verweist zusätzlich auf den amtlichen AEMET-Methodenrahmen 1991–2020. Die Werte werden nicht für einen numerischen Nerja-Vergleich verwendet. `300+ Sonnentage` und unbelegte Hangabkühlungs-Erklärungen bleiben entfernt.
- **Nerja:** `15–24 °C` Meerestemperatur, Mai–September als exakt abgegrenzte Trockenzeit, `≈ 450 mm`, die Monatswerte für August, Januar, Sommernächte und Dezember sowie die Saisonpaare `21/12`, `28/21`, `24/16` und `17/10 °C` sind entfernt. Aussagen zu Wärmespeicherung und deutlich langsamerer Abkühlung wurden neutralisiert.
- **Vergleich:** Der sichtbare Vergleich bleibt bewusst qualitativ: Im Hochsommer können beide Orte tagsüber ähnlich heiß sein; Nerja kann nachts milder bleiben und Frigiliana sich frischer anfühlen. Ein sichtbarer Hinweis nennt die laufende Prüfung gegen AEMET-Normalwerte 1991–2020.
- Bis zur amtlichen Klärung werden keine ortsübergreifenden Ersatzwerte oder numerischen Klima-Vergleiche eingeführt.

**Prüfhistorie**
- 2026-08-19 — Frigiliana-Wetterseite als belastbare Local-Authority-Seite vertieft: transparente Punktmodelldaten und Monatsmatrix veröffentlicht; amtlicher Nerja-Vergleich bleibt offen.
- 2026-08-14 — Weather Evidence Containment umgesetzt; alle ungeklärten veröffentlichten Präzisionswerte entfernt oder neutralisiert. W-04 bleibt OPEN.
- 2026-08-14 — Auftrag 1 ausgewertet, widerlegte Aussagen entfernt, Auftrag 2 gestellt.

---

## W-06 · Cueva de Nerja — Preise, Zeiten, Festival

| | |
|---|---|
| **Status** | Bewusst **nicht** auf der Seite genannt |
| **Betrifft** | [nerjaCavesContent.ts](src/content/nerjaCavesContent.ts) |
| **Quelle** | https://cuevadenerja.es |
| **Prüfintervall** | Jährlich |
| **Risiko** | Niedrig, solange keine Zahlen genannt werden. |

Ticketpreise, Öffnungszeiten, Zeitfenster, Parkgebühr und das Festival-Programm ändern sich jährlich. Die Seite verweist deshalb auf den Betreiber, statt Zahlen zu nennen.

**Nicht volatil und deshalb auf der Seite:** Entdeckung 12.01.1959, Systemlänge 4.823 m, Säule 32 m mit Basis 13 × 7 m, Guinness-Rekord seit **1989** (die oft zitierte Jahreszahl 1994 ist falsch), Rundgang 45–60 Min über mehr als 458 Stufen, keine Barrierefreiheit, gesperrte Galerien.

**Ebenfalls festgehalten:** Das Festival findet seit 2022 **nicht mehr in der Höhle** statt, sondern im Freiluft-Auditorium — Beschluss der Stiftung von Dezember 2019 aus konservatorischen Gründen. Falls das je wieder anders wird, muss die Seite nachgezogen werden.

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
