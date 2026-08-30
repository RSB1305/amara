---
research_run_id: 2026-08-30__094500__climate-home-capital-references__research-001
title: AMARA Deep Research — Vergleichsstationen auf 1991–2020
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

Ein erster Lauf hat Sevilla (5783), Córdoba (5402), Málaga (6155A) und Schiphol (240) auf **1981–2010** erfasst; das Dossier liegt in `knowledge/research/locations/frigiliana/climate-seasons/2026-08-30__external-reference-points-normalized.md`. Diese Periode ist abgelöst — siehe unten. Das Dossier dient nur noch als Formatvorlage und als Gegenprobe für die Plausibilität der neuen Werte.

## Gesuchte Stationen

**Vier Hauptstädte** als Heimatreferenz je Sprachmarkt:

| Sprachmarkt | Hauptstadt | Erwarteter Dienst |
|---|---|---|
| Deutsch | Berlin | DWD |
| Englisch | London | Met Office |
| Spanisch | Madrid | AEMET |
| Schwedisch | Stockholm | SMHI |

**Und die drei bereits erfassten spanischen Stationen erneut**, weil sie auf die neue Periode umgestellt werden müssen:

| Rolle | Station | Kennung |
|---|---|---|
| Binnenland | Sevilla Aeropuerto | 5783 |
| Binnenland | Córdoba Aeropuerto | 5402 |
| Küste | Málaga Aeropuerto | 6155A |

Für Amsterdam/Schiphol (KNMI 240) ebenfalls, falls die Zeit reicht — es ist die einzige bereits belegte Heimatreferenz.

Wähle je Stadt **eine** Station und begründe die Wahl. Nenne amtlichen Stationsnamen, Kennung, Höhe und Normalperiode. Nutze möglichst Stationen, die der jeweilige Dienst selbst als repräsentativ für die Stadt führt.

## Harte Bedingung: Periode 1991–2020

**Zielperiode für alle Stationen ist 1991–2020.**

Ein erster Lauf hatte 1981–2010 verwendet. Das ist verworfen. Gründe:

- AEMET nutzt seit **Januar 2023** 1991–2020 als Standard, gemäss WMO-Resolution 16 (Cg-17). 1981–2010 ist damit die abgelöste Periode.
- Die Klimatabelle auf unseren eigenen Seiten steht auf **1991–2021**. Vergleichswerte aus 1981–2010 danebenzustellen mischt Perioden — genau der Fehler, den diese Recherche verhindern soll.
- Ein Gast plant eine Reise für 2027. Eine Periode, die 2010 endet, beschreibt ein Klima, das es so nicht mehr gibt.

1991–2020 ist der WMO-Standard und sollte bei allen fünf Diensten amtlich vorliegen. Prüfe das je Dienst und belege es.

Falls ein Dienst 1991–2020 **nicht** veröffentlicht: sag das ausdrücklich, nenne die verfügbaren Perioden und schlage vor, wie wir damit umgehen. Nenne die Periode in jedem Fall bei jedem Wert mit.

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

## Zusätzlich erwünscht

Nenne je Dienst, ob er über die Normalperiode hinaus eine **aktuellere amtliche Referenz** anbietet — etwa gleitende Zehnjahresmittel oder veröffentlichte Dekadenauswertungen. Wenn ja: Quelle, Periode und Grösse. Berechne nichts selbst; berichte nur, was amtlich vorliegt.

## Was ausdrücklich nicht gefragt ist

Kein Vergleich Frigiliana–Nerja. Dafür existiert keine trennende Messreihe; die Frage ist separat als `frigiliana.climate.question-nerja-difference` abgelegt und bleibt offen.
