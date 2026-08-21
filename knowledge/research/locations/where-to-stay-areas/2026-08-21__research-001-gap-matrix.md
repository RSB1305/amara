---
research_run_id: 2026-08-21__130535__where-to-stay-areas__research-001
document_type: pre-research-gap-matrix
created_at: 2026-08-21T13:05:35+02:00
status: NORMALIZED
normalized_at: 2026-08-21T13:39:46+02:00
subjects:
  - frigiliana
  - nerja
  - tarifa
---

# Wo übernachten & Lagen — Bestands- und Gap-Matrix

## Scope

Diese Matrix sichert den vorhandenen Seitenstand vor dem Research. Sie ist weder eine Freigabe bestehender Aussagen noch ein Auftrag zum Umbau der öffentlichen Seiten.

## Gemeinsamer Inhaltsvertrag

Die späteren Seiten verwenden dieselbe semantische Reihenfolge:

1. Entscheidungsprinzip;
2. Lagemodelle;
3. Abwägungen;
4. Wege und Mobilität;
5. Passung zum Aufenthalt;
6. AMARA-Einordnung mit objektspezifischer Beleggrenze.

Die Wissensmenge, Kapitelzahl und lokale Schwerpunktsetzung dürfen je Ort unterschiedlich bleiben.

## Bestandsvergleich

| Ort | Aktueller öffentlicher Owner | Vorhandene Substanz | Hauptlücke | Research-Entscheidung |
|---|---|---|---|---|
| Frigiliana | `src/content/frigilianaStreetsStairsContent.ts` | Vier Lagemodelle; Relief, Stufen, Untergrund, Alltagswege, Zielgruppen und FAQ | Route/Navigation heißt weiterhin „Gassen & Treppen“; Bereichsbegriffe und konkrete 15-m-Aussage sind noch nicht in einer Topic-Knowledge-Base belegt | Modelle und objektspezifische Aussage gezielt prüfen; keine Neurecherche des gesamten Ortes |
| Nerja | `src/content/nerjaLocationContent.ts` | Fünf Bereiche; Strandzugang, Parken, Alltag, Nerja/Frigiliana-Vergleich, AMARA Playa und FAQ | Dominanter Seitenjob ist durch zusätzliche Strand-, Vergleichs- und Objektmodule verwässert; Gebietsgrenzen und Routenbehauptungen sind nicht atomar belegt | Bereiche, Überschneidungen, Relief/Zugänge und Objektgrenze prüfen |
| Tarifa | `src/content/tarifaGuideContent.ts` über `tarifaWhereToStayContent.ts` | Vier Unterkunftssettings; Auto, Wind, Alltag, Aufenthaltstypen und AMARA-Einordnung | Eigener Route fehlt eigener fachlicher Content-Owner; La Marina/Los Lances sowie konkrete AMARA-Wege und Logistik benötigen Beleggrenzen | Modelle und konkrete AMARA-Claims prüfen; vorhandene Tiefe bewahren |

## Coverage vor dem Research

| Gemeinsames Modul | Frigiliana | Nerja | Tarifa | Gemeinsame Lücke |
|---|---|---|---|---|
| Entscheidungsprinzip | vorhanden | vorhanden | vorhanden | keine grundlegende Lücke |
| Lagemodelle | 4 Modelle | 5 Modelle | 4 Modelle | Status und Grenzen der Begriffe nicht einheitlich dokumentiert |
| Abwägungen | pro Modell vorhanden | pro Modell vorhanden | als Übersicht und pro Modell vorhanden | Trennung Fakt/Ableitung/Erfahrung fehlt |
| Wege und Mobilität | stark bei Hang, Stufen und Untergrund | stark, aber über mehrere Module verteilt | Auto und Parkkontext vorhanden | exakte Route, Dynamik und objektspezifische Aussage sauber begrenzen |
| Passung zum Aufenthalt | vorhanden | teilweise in Bereichen und Vergleich verteilt | vorhanden | Ableitungen dürfen nicht als universelle Eignung erscheinen |
| AMARA-Einordnung | Casa AMARA als Straßenbeispiel | AMARA Playa mit eigener Galerie und CTA | AMARA Family & Surf in La Marina | First-Party-Nachweise und allgemeine Ortsfakten getrennt führen |

## Bekannte Claim-Risiken

- nichtamtliche Lagemodelle können fälschlich wie feste Viertelgrenzen wirken;
- „ruhig“, „familienfreundlich“, „einfach“, „zentral“ oder „gut zu Fuß“ brauchen Kontext statt Garantie;
- Gehzeiten benötigen definierten Start, Ziel, Route, Messmethode und Prüfdatum;
- Parkverfügbarkeit, Verkehr, Wind und Lärm sind dynamisch;
- eine Straße oder Unterkunft darf nicht stellvertretend für ein ganzes Gebiet stehen;
- objektspezifische Fakten benötigen First-Party- oder Primärnachweise außerhalb allgemeiner Destinationsquellen.

## Nach Eingang der Rohrecherche

1. GPT- und Gemini-Rohdaten unverändert in die vorgesehenen Drive-Ordner legen.
2. Quellen, Fakten, Konflikte und offene Fragen normalisieren.
3. Pro Ort ein Page-Manifest mit Coverage der sechs Module erstellen.
4. Erst danach die drei öffentlichen Seiten in einem gemeinsamen Implementierungsdurchlauf anpassen.

Kein vorhandener öffentlicher Inhalt wird durch diese Matrix gelöscht oder bereits als verifiziert behandelt.

## Ergebnis des Research-Durchlaufs

- Beide Rohberichte wurden unverändert beziehungsweise als vollständiger Text-Export archiviert.
- Die belastbaren Aussagen wurden in Quellen, Fakten, Claim-Grenzen und offene Fragen normalisiert.
- Die drei Seiten folgen nun demselben sechsmoduligen Inhaltsvertrag; lokale Tiefe bleibt erhalten.
- Nicht belegte Gehzeiten, pauschale Zugänglichkeitsversprechen und zu absolute Gebietsbehauptungen wurden nicht übernommen.
