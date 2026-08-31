---
research_run_id: 2026-08-31__083109__climate-home-market-comparisons-followup__research-002
title: AMARA Deep Research — amtliche Klimavergleiche für fünf Sprachmärkte
created_at: 2026-08-31T08:31:09+02:00
research_date: 2026-08-31
subjects:
  - frigiliana
  - nerja
  - tarifa
status: DRAFT
follows_up:
  - 2026-08-30__094500__climate-home-capital-references__research-001
answers_open_question: frigiliana.climate.question-home-capital-references
---

# AMARA DEEP RESEARCH — AMTLICHE KLIMAVERGLEICHE FÜR FÜNF SPRACHMÄRKTE

## Auftrag

Du arbeitest als präziser Klimadaten-Researcher für AMARA Lodging. Schließe eine bereits begonnene Recherche ab, indem du die **amtlichen Klimanormalwerte 1991–2020** aus den Originaldateien, Tabellen oder API-Antworten der nationalen Wetterdienste extrahierst.

Das Ergebnis dient später dazu, Wetterdaten für Gäste verständlich einzuordnen. Es ist **Rohrecherche und Faktenbasis, kein fertiger Website- oder Marketingtext**.

Beginne nicht wieder mit einer allgemeinen Websuche. Die richtigen amtlichen Produkte und die meisten Stationen sind bereits bekannt. Der offene Teil ist die belastbare Extraktion, Definition und Normalisierung der Werte aus den offiziellen Downloadformaten.

## Bereits gesicherter Stand

- Die gemeinsame Zielperiode ist **1991–2020**.
- London Heathrow liegt bereits vollständig für zwölf Monate vor.
- Für Stockholm liegen bislang nur amtliche Sommerwerte auf Stadtebene vor; die genaue Station und die übrigen Monate fehlen.
- Berlin, Madrid, Sevilla, Córdoba, Málaga und Schiphol sind als passende amtliche Produkte bestätigt, aber ihre Monatswerte wurden im ersten Lauf nicht aus den Download-, XLSX- oder API-Dateien extrahiert.
- Klassische AEMET-Stationsseiten zeigen teils noch **1981–2010**. Diese Tabellen dürfen für diesen Auftrag nicht verwendet werden.
- Ältere AMARA-Daten auf 1981–2010 dienen höchstens als Plausibilitätskontrolle und dürfen nicht in das Ergebnis übernommen oder mit 1991–2020 vermischt werden.

## Verbindliche Stationen und Dienste

| Rolle | Sprachmarkt | Ort / Station | Kennung | Primärdienst |
|---|---|---|---|---|
| Heimatreferenz | DE | Berlin-Dahlem (FU) | DWD 403 | DWD |
| Heimatreferenz | EN | London Heathrow | amtliche Kennung ermitteln, falls im Produkt genannt | Met Office |
| Heimatreferenz | ES | Madrid-Retiro | AEMET 3195 | AEMET |
| Heimatreferenz | NL | Schiphol | KNMI 240 | KNMI |
| Heimatreferenz | SV | Stockholm | repräsentative Station anhand der SMHI-Quelle eindeutig bestimmen | SMHI |
| andalusisches Binnenland | alle | Sevilla Aeropuerto | AEMET 5783 | AEMET |
| andalusisches Binnenland | alle | Córdoba Aeropuerto | AEMET 5402 | AEMET |
| andalusische Küstenreferenz | alle | Málaga Aeropuerto | AEMET 6155A | AEMET |

Weiche nicht stillschweigend auf eine andere Station aus. Falls eine genannte Station im amtlichen Produkt nicht verfügbar ist, dokumentiere das als offene Lücke. Für Stockholm darfst du eine Station erst dann festlegen, wenn SMHI selbst die Zuordnung trägt; nenne die Auswahlbegründung und die genaue amtliche Bezeichnung.

## Harte Vergleichsregeln

1. Verwende ausschließlich die Normalperiode **1991–2020**.
2. Die Hauptgröße ist für jeden Monat das **mittlere tägliche Maximum der Lufttemperatur in °C** — also der Mittelwert der täglichen Höchsttemperaturen, nicht das Monatsmittel der Temperatur und nicht das absolute Maximum.
3. Ergänze die **normale monatliche Niederschlagssumme in mm**.
4. Ergänze die **monatliche Sonnenscheindauer in Stunden** nur, wenn der jeweilige Dienst sie amtlich für 1991–2020 und für dieselbe Station veröffentlicht.
5. Vermische weder Perioden noch Messgrößen. Rechne keine Normalwerte aus Tagesdaten selbst aus. Interpoliere nicht und führe keine Höhenkorrektur durch.
6. Wenn ein Wert oder seine Definition nicht belastbar vorliegt, markiere ihn als `nicht verfügbar` oder `Definition ungeklärt`. Schätze keinen Wert und ersetze ihn nicht durch ein Wetterportal.
7. Einheiten dürfen nur technisch umgerechnet werden, wenn die Umrechnung eindeutig ist. Dokumentiere jede Umrechnung.

## Verbindliche amtliche Einstiegspunkte

### AEMET

Nutze bevorzugt AEMET OpenData:

`GET /api/valores/climatologicos/normales/estacion/{idema}`

für die Kennungen `3195`, `5783`, `5402` und `6155A`.

Bewahre sowohl die Antwort mit der temporären Download-URL als auch die eigentliche Datenantwort als Rohbeleg auf. Dokumentiere Feldnamen, Einheiten und die Bedeutung des Feldes für das mittlere tägliche Maximum. Falls der Endpoint technisch nicht zugänglich ist, suche ausschließlich innerhalb der offiziellen AEMET-Angebote nach einem gleichwertigen 1991–2020-Produkt und dokumentiere den Blocker.

### DWD

Nutze das CDC-Produkt `mean_91-20`:

`https://opendata.dwd.de/climate_environment/CDC/observations_germany/climate/multi_annual/mean_91-20/`

Bestimme anhand der offiziellen Metadaten, welche Datei und welcher Parameter tatsächlich das **mittlere tägliche Maximum** abbilden. Verwechsle diesen Wert nicht mit der monatlichen Mitteltemperatur. Dokumentiere Dateiname, Parametername, Einheit, Stationskennung und Stationsmetadaten.

### KNMI

Nutze die offiziellen KNMI-Klimanormalen 1991–2020 für Station `240` Schiphol. Extrahiere die Werte aus der amtlichen Tabelle oder Originaldatei und dokumentiere die niederländischen Feldbezeichnungen und Definitionen.

### SMHI

Nutze die offiziellen SMHI-Normalwertdateien 1991–2020. Ordne die bisherige Bezeichnung „Stockholm“ einer konkreten amtlichen Station zu, sofern die Quelle dies erlaubt, und extrahiere alle zwölf Monate. Falls die offizielle Stadtangabe nicht stationsgebunden ist, halte Stadtwert und Stationswert strikt auseinander.

### Met Office

Prüfe die bereits extrahierte Heathrow-Reihe gegen die amtliche 1991–2020-Seite und übernimm alle zwölf Monate mit direkter Quelle. Ergänze Stationskennung und Höhe nur, wenn dieselbe amtliche Quelle oder ein eindeutig verknüpfter amtlicher Met-Office-Datensatz sie nennt.

## Benötigte Rohwerte

Erstelle je Station eine Zwölf-Monats-Tabelle mit:

- amtlichem Stationsnamen;
- Stationskennung;
- Höhe, wenn amtlich belegt;
- Normalperiode;
- Monat;
- mittlerem täglichem Maximum in °C;
- normaler monatlicher Niederschlagssumme in mm;
- monatlichen Sonnenstunden, falls belastbar verfügbar;
- Original-Feldname je Messgröße;
- direkter Quell-URL oder Dateipfad im amtlichen Angebot;
- Dateiname beziehungsweise API-Endpoint;
- Abrufdatum;
- kurzen Definitions- oder Qualitätsanmerkungen.

Erhalte in dieser Rohwerttabelle die veröffentlichte Genauigkeit. Runde dort nichts weg.

## Abgeleitete Vergleichstabellen

Berechne erst nach der vollständigen Quellenprüfung aus den amtlichen Rohwerten:

1. für jeden Monat die Differenz beim mittleren täglichen Maximum zwischen **Málaga Aeropuerto** und Berlin, London Heathrow, Madrid-Retiro, Schiphol sowie der gesicherten Stockholm-Referenz;
2. für jeden Monat die Differenz beim mittleren täglichen Maximum zwischen Málaga Aeropuerto und Sevilla Aeropuerto sowie Córdoba Aeropuerto;
3. eine kompakte Auswahl für Januar, April, Juli und Oktober als redaktionelle Orientierung.

Zeige bei jeder Differenz:

- den exakten Rechenwert auf Basis der veröffentlichten Ausgangswerte;
- eine mögliche gästegeeignete Anzeige in **ganzen Grad**, kaufmännisch gerundet;
- beide verwendeten Stationen und die Periode;
- eine Claim-Grenze.

Wichtig: **Málaga Aeropuerto ist eine amtliche Küstenreferenz, nicht Frigiliana, Nerja oder Tarifa.** Formuliere aus diesen Daten keine Aussage wie „Frigiliana ist X Grad wärmer als Berlin“. Das Ergebnis darf nur zeigen, welche belastbaren Stationsvergleiche möglich sind und wo für eine ortsbezogene Aussage noch eine methodische Brücke fehlt.

## Sprachmarkt-Zuordnung

Dokumentiere diese Zuordnung als redaktionelle Auswahl, nicht als Behauptung meteorologischer Repräsentativität für ein ganzes Land:

| Locale | Heimatreferenz | Zweck |
|---|---|---|
| `de` | Berlin-Dahlem (FU) | vertrauter Winter- und Sommervergleich für deutschsprachige Gäste |
| `en` | London Heathrow | vertrauter Vergleich für englischsprachige Gäste |
| `es` | Madrid-Retiro | Vergleich zwischen spanischem Binnenland und Küste |
| `nl` | Schiphol | vertrauter Vergleich für niederländischsprachige Gäste |
| `sv` | gesicherte Stockholm-Referenz | vertrauter Vergleich für schwedischsprachige Gäste |

Sevilla und Córdoba bilden zusätzlich einen gemeinsamen, sprachübergreifenden Binnenlandvergleich für Andalusien-Rundreisen. Málaga ist dabei ausschließlich die amtliche Küstenreferenz.

## Quellenstandard

- Nur Primärquellen der nationalen Wetterdienste: AEMET, DWD, KNMI, SMHI und Met Office.
- Keine Wetterportale, Aggregatoren, Wikipedia, Climate-Data.org oder automatisch erzeugte Zusammenfassungsseiten Dritter.
- Verlinke möglichst direkt auf die konkrete Tabelle, Originaldatei, API-Dokumentation und den Daten-Endpunkt.
- Halte Rohdateien und Rohantworten unverändert fest. Eine normalisierte Tabelle ersetzt niemals den Originalbeleg.
- Notiere für jede Quelle das Abrufdatum und die ausgewiesene Normalperiode.

## Gefordertes Ergebnisformat

Liefere einen strukturierten Bericht mit genau diesen Teilen:

1. **Executive Summary**: Was wurde vollständig gelöst, was bleibt offen?
2. **Methodik und Definitionsprüfung**: Periode, Messgröße, Einheiten und bekannte Unterschiede der Dienste.
3. **Quellenregister**: `sourceId`, Dienst, Station, Produkt, direkte URL, Dateiname oder Endpoint, Abrufdatum, Normalperiode.
4. **Normalisierte Zwölf-Monats-Rohwerttabellen** je Station mit veröffentlichter Genauigkeit.
5. **Vergleichstabellen** mit exakten Differenzen und separat gerundeten redaktionellen Anzeigen.
6. **Locale-Zuordnung** für `de`, `en`, `es`, `nl` und `sv` sowie den gemeinsamen Andalusien-Vergleich.
7. **Claim-Grenzen** je Faktenblock.
8. **Vorschläge für Fact-IDs** und Angabe, welche Fakten die offene Frage `frigiliana.climate.question-home-capital-references` vollständig oder teilweise beantworten.
9. **Offene Lücken und konkrete nächste Quelle**: keine allgemeinen Empfehlungen, sondern exakter fehlender Datensatz, Parameter oder Zugriff.

Gib die normalisierten Monatswerte zusätzlich in einem maschinenlesbaren CSV- oder JSON-Block aus. Verwende stabile Stations- und Messgrößen-IDs.

## Claim-Grenzen

- Jeder Wert gilt für die genannte Station, nicht pauschal für eine Stadt, Region oder Unterkunft.
- Málaga Aeropuerto darf nicht als Messstation für Frigiliana, Nerja oder Tarifa bezeichnet werden.
- Die Stationsvergleiche beschreiben Klimanormalwerte, keine Vorhersage für einen konkreten Reisetermin.
- Kein Superlativ, keine Rangliste und keine Aussage über das „beste Klima“.
- Keine Klimawandel-Aussage; die Reihen werden in diesem Auftrag nicht auf Homogenität oder Trends geprüft.
- Sonnenstunden verschiedener Dienste dürfen nicht als instrumentell identisch beschrieben werden, solange die Methoden nicht amtlich als vergleichbar belegt sind.

## Nicht Teil dieses Auftrags

- Kein fertiger Website-Text und keine Übersetzung.
- Keine Reisezeit-Empfehlung ohne zusätzliche orts- und aktivitätsbezogene Evidenz.
- Kein exakter Vergleich Frigiliana–Nerja und kein lokaler Wettervergleich für Tarifa.
- Keine Übernahme der öffentlichen AMARA-Monatstabelle als amtlicher Stationsdatensatz.
- Keine Recherche über Unterkünfte, Ausstattung, Strände, Wandern oder Experiences.

## Abschlussprüfung vor Abgabe

Bestätige am Ende ausdrücklich:

- dass jede verglichene Temperatur dieselbe Messgröße und dieselbe Periode verwendet;
- dass keine 1981–2010-Werte eingeflossen sind;
- dass keine Normalwerte aus Tagesdaten selbst berechnet wurden;
- dass jede Lücke sichtbar blieb und nicht geschätzt wurde;
- dass Originalbelege, normalisierte Daten und redaktionell gerundete Anzeigen klar voneinander getrennt sind.
