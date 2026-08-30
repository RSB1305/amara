---
research_run_id: 2026-08-30__094500__climate-home-capital-references__research-001
title: AMARA Deep Research — Heimat-Referenzstationen für den Klimavergleich
created_at: 2026-08-30T09:45:00+02:00
research_date: 2026-08-30
subjects:
  - frigiliana
status: ISSUED
answers_open_question: frigiliana.climate.question-home-capital-references
---

# AMARA DEEP RESEARCH — HEIMAT-REFERENZSTATIONEN

**Zielort:** Frigiliana (die Referenzstationen selbst liegen ausserhalb Spaniens bzw. in Madrid)

**Verwendungszweck:** belastbare Rohrecherche, kein fertiger Marketingtext

## Rolle und Ziel

Du arbeitest als präziser Klimadaten-Researcher für AMARA Lodging. Beschaffe **amtliche Stationsnormalwerte** für vier Hauptstädte, damit Gäste aus vier Sprachmärkten die andalusischen Julizahlen an einem Wert messen können, den sie aus eigener Erfahrung kennen.

Die andalusische Seite dieses Vergleichs ist bereits abgeschlossen. Sie liegt in `knowledge/research/locations/frigiliana/climate-seasons/2026-08-30__external-reference-points-normalized.md` und umfasst Sevilla (5783), Córdoba (5402), Málaga (6155A) und Schiphol (240), alle auf **1981–2010**.

## Gesuchte Stationen

| Sprachmarkt | Hauptstadt | Erwarteter Dienst |
|---|---|---|
| Deutsch | Berlin | DWD |
| Englisch | London | Met Office |
| Spanisch | Madrid | AEMET |
| Schwedisch | Stockholm | SMHI |

Wähle je Stadt **eine** Station und begründe die Wahl. Nenne amtlichen Stationsnamen, Kennung, Höhe und Normalperiode. Nutze möglichst Stationen, die der jeweilige Dienst selbst als repräsentativ für die Stadt führt.

## Harte Bedingung: gemeinsame Periode

Die vorhandene Vergleichsreihe steht auf **1981–2010**. Ein Vergleich über verschiedene Perioden hinweg ist unbrauchbar.

- Der DWD veröffentlicht vieljährige Mittelwerte für 1981–2010. Das ist geprüft und der erwartete Weg für Berlin.
- Für Met Office, AEMET und SMHI ist offen, ob 1981–2010 amtlich vorliegt.

Wenn ein Dienst 1981–2010 **nicht** veröffentlicht: sag das ausdrücklich, nenne die Perioden, die er stattdessen anbietet, und schlage vor, ob wir für alle Stationen auf 1991–2020 umstellen sollten. Das wäre die saubere Alternative, würde aber auch eine neue Extraktion der andalusischen Stationen erfordern — schätze diesen Aufwand kurz ein.

**Niemals** Perioden stillschweigend mischen. **Niemals** Normalwerte selbst aus Tagesdaten berechnen. **Niemals** interpolieren oder höhenkorrigieren.

## Benötigte Grössen

Je Station und je Monat, in der Ergebnisgrösse des Dienstes:

1. **Mittleres tägliches Maximum** in °C — die Hauptgrösse
2. **Monatliche Niederschlagssumme** in mm
3. **Sonnenscheindauer** in Monatsstunden, falls veröffentlicht

Dokumentiere je Dienst, wie er die Grösse definiert. Bei der Sonnenscheindauer ist bereits belegt, dass KNMI sie aus Globalstrahlung berechnet, während AEMET nur die resultierenden Stunden definiert. Prüfe das für DWD, Met Office und SMHI ebenso und **behaupte keine instrumentelle Gleichheit**, die die Primärquellen nicht hergeben.

## Quellenstandard

Ausschliesslich die nationalen Wetterdienste selbst. Keine Wetterportale, keine Aggregatoren, kein Wikipedia, kein Climate-Data.org. Je Wert die direkte Quell-URL und das Abrufdatum.

## Ausgabeformat

Wie beim vorangegangenen Lauf:

1. Executive Summary mit einer Juli-Vergleichstabelle über alle vier Städte
2. Methodikabschnitt mit der Perioden- und Definitionsprüfung
3. Je Station eine Zwölf-Monats-Tabelle
4. Vorschläge für `sourceId`, Fact-ID, `checkedAt` und `claimBoundary` je Eintrag
5. Auflösungsstatus der offenen Frage

## Claim-Grenzen, die in jedem Fakt stehen müssen

- Die Werte gelten **für die genannte Station**, nicht für die Stadt als Ganzes und nicht für Frigiliana.
- Kein Superlativ, kein „bestes Klima", keine Rangliste.
- Keine Tages- oder Wetterprognose.
- Keine Klimawandel-Aussage. Die Reihen sind nicht auf Homogenität geprüft.

## Was ausdrücklich nicht gefragt ist

Kein Vergleich Frigiliana–Nerja. Dafür existiert keine trennende Messreihe; die Frage ist separat als `frigiliana.climate.question-nerja-difference` abgelegt und bleibt offen.
