---
research_run_id: 2026-08-21__142423__climate-seasons__research-001
document_type: pre-research-gap-matrix
created_at: 2026-08-21T14:24:23+02:00
status: BASELINE
subjects:
  - frigiliana
  - nerja
  - tarifa
---

# Klima & Jahreszeiten — Bestands- und Gap-Matrix

## Scope

Diese Matrix konserviert den vorhandenen Seitenstand vor dem Research. Sie bestätigt weder die verwendeten Klimawerte noch die lokalen Ableitungen und ändert keine öffentliche Seite.

## Gemeinsamer Inhaltsvertrag

Die späteren Seiten verwenden dieselbe semantische Reihenfolge:

1. Klima auf einen Blick;
2. monatliche Datengrundlage;
3. Frühling, Sommer, Herbst und Winter;
4. lokale Klimadifferenz mit Mikroklima-Grenze;
5. Reisedaten und Tagesplanung;
6. AMARA nach Jahreszeit mit objektspezifischer Beleggrenze;
7. Quellen, Methode und aktuelle Vorhersage.

Die Wissensmenge, lokale Schwerpunkte und öffentliche Textlänge dürfen je Ort unterschiedlich bleiben.

## Bestandsvergleich

| Ort | Aktueller öffentlicher Owner | Vorhandene Substanz | Hauptlücke | Research-Entscheidung |
|---|---|---|---|---|
| Frigiliana | `src/page-families/location-authority/FrigilianaWeatherPage.astro` | Klimaüberblick, Monatswerte, vier Jahreszeiten, Hangkontext, praktische Planung, Übernachtungs- und Winterhinweise | Climate-Data.org liefert dieselben Monatswerte wie für Nerja; Aussagen zu frischeren Abenden, Hang-/Schatteneffekten und lokalem Komfort sind nicht atomar belegt | Gemeinsame Datenbasis und Frigiliana-Nerja-Differenz gezielt prüfen; vorhandene Saisonlogik bewahren |
| Nerja | `src/page-families/location-authority/NerjaWeatherPage.astro` | Umfangreiche Monats- und Saisoninformationen, Meer-/Strandkontext, Frigiliana-Vergleich, Lagenbezug, AEMET-Hinweis und AMARA-Playa-Einordnung | Identische Nerja-/Frigiliana-Werte trotz lokaler Unterschiede; Luft-, Wasser-, Klima-, Lage- und Objektclaims sind noch nicht getrennt bewertet | Datenrepräsentativität, Meerestemperatur, Küsteneinfluss und Vergleichbarkeit prüfen; Objektclaims separat halten |
| Tarifa | `src/content/tarifaWeatherContent.ts` | Eigenständiger Content-Owner, Monatswerte, Levante/Poniente, vier Jahreszeiten, Reisezeitwahl, AMARA nach Saison und Quellenblock | Sekundäre Punktmodelldaten und regionale Windquellen tragen teils lokale Aussagen; Stadt-, Strand-, Wind- und Objektkontext können zu nah zusammenrücken | Stations-/Meeres-/Windbasis prüfen, technische Windthemen begrenzen und objektspezifische Aussagen separat nachweisen |

## Coverage vor dem Research

| Gemeinsames Modul | Frigiliana | Nerja | Tarifa | Gemeinsame Lücke |
|---|---|---|---|---|
| Klima auf einen Blick | vorhanden | vorhanden | vorhanden | Klima, Wetter und lokale Ableitung sind noch nicht einheitlich klassifiziert |
| Monatliche Datengrundlage | 12 Monatswerte | 12 Monatswerte | 12 Monatswerte | Quelle ist sekundär; Nerja und Frigiliana sind identisch; Stations-/Rasterbezug und Vergleichbarkeit fehlen |
| Vier Jahreszeiten | vorhanden | vorhanden | vorhanden | Saisontexte sind nicht vollständig auf atomare Fakten und Variabilität gemappt |
| Lokale Klimadifferenz | Hang, Höhe, Schatten | Küste, Meer, Lagen und Frigiliana-Vergleich | Meerenge, Levante/Poniente und exponierte Küste | Lokale Differenzen werden teils aus Geografie abgeleitet, ohne geeignete lokale Messbasis |
| Reisedaten und Tagesplanung | Gehen, Hitze, Winter | Strand, Wege, Meer und Vorhersage | Wind, Küste, Stadt und Flexibilität | „Beste Reisezeit“ benötigt bedingte Passung statt universeller Wertung |
| AMARA nach Jahreszeit | Casa-AMARA-Komfort und Winterbezug | AMARA Playa, Terrasse, Ruhe, Meerblick und Entfernung | AMARA La Marina, Heizung/Kühlung, Kamin, Parken, Einkauf und Wege | allgemeine Klimafakten und objektspezifische First-Party-Nachweise sind noch nicht sauber getrennt |
| Quellen und Methode | Climate-Data.org | Climate-Data.org plus AEMET-Hinweis | Climate-Data.org plus Junta-Quellen | gemeinsame Primärquellenstrategie, Variablendefinitionen und Claim-Grenzen fehlen |

## Bekannte Claim-Risiken

- identische Nerja-/Frigiliana-Modellwerte können als identisches lokales Klima missverstanden werden;
- ein Monatsmittel ist weder eine Tagesvorhersage noch ein möglicher Extremwert;
- „mild“, „heiß“, „windig“, „sonnig“ oder „beste Reisezeit“ brauchen Variable, Zeitraum und Entscheidungskontext;
- Höhenlage, Küstennähe oder Exposition belegen ohne passende Messdaten keine genaue Temperatur- oder Komfortdifferenz;
- Windrichtung und regionale Häufigkeit garantieren keine Bedingung an einem konkreten Strand, Haus oder Tag;
- Luft- und Meerestemperatur, Niederschlagssumme und Regentage sowie mittlere und absolute Extremwerte dürfen nicht vermischt werden;
- objektspezifische Ausstattung, Orientierung, Gehzeiten, Ruhe, Aussicht und Innenkomfort benötigen First-Party- oder Primärnachweise;
- A-2325, Warnlagen und kurzfristige Wind-/Regenbedingungen sind dynamisch und gehören nicht als dauerhaftes Saisonversprechen in die Seite.

## Research-Ziel

Der neue Research-Lauf muss keine vierte allgemeine Klimabeschreibung erzeugen. Er soll:

1. eine belastbare und möglichst vergleichbare Datenbasis auswählen oder die Grenzen fehlender Vergleichbarkeit dokumentieren;
2. vorhandene Klima-, Saison- und Mikroklima-Claims klassifizieren;
3. Frigiliana, Nerja und Tarifa lokal differenzieren, ohne Scheingenauigkeit;
4. First-Party-Nachweise von Destinationswissen trennen;
5. verifizierte Fakten den sieben öffentlichen Modulen zuordnen;
6. offene Fragen für spätere Messung oder Betreiberbestätigung erhalten.

## Nach Eingang der Rohrecherche

1. GPT- und Gemini-Ergebnisse unverändert in die vorgesehenen Drive-Ordner legen.
2. Quellen, Fakten, Konflikte, Variablendefinitionen und offene Fragen in Git normalisieren.
3. Die drei Page-Manifeste mit konkreten Fact-IDs und Coverage-Status aktualisieren.
4. Erst danach die öffentlichen Klima-&-Jahreszeiten-Seiten in einem gemeinsamen Implementierungsdurchlauf angleichen.

Kein vorhandener öffentlicher Inhalt wird durch diese Matrix gelöscht oder bereits als verifiziert behandelt.
