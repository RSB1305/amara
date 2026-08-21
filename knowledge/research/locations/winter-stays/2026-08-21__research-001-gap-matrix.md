---
research_run_id: 2026-08-21__161609__winter-stays__research-001
document_type: pre-research-gap-matrix
created_at: 2026-08-21T16:16:09+02:00
status: AWAITING_RAW
subjects:
  - frigiliana
  - nerja
  - tarifa
---

# Winteraufenthalte — Bestands- und Gap-Matrix

## Scope

Diese Matrix sichert den vorhandenen Seitenstand vor dem Research. Sie ist weder eine Freigabe bestehender Aussagen noch ein Auftrag zum Umbau der öffentlichen Seiten. Der separate Klima-&-Jahreszeiten-Run bleibt der fachliche Owner für langfristige Klimadaten und Monatswerte.

## Gemeinsamer Inhaltsvertrag

Die späteren Seiten sollen dieselbe semantische Reihenfolge verwenden:

1. SEO-H1 und Seitenauftrag;
2. dunkler Appetizerblock;
3. Winterreisemotive;
4. lokales Wintergefühl;
5. realistischer Wintertag;
6. kurze Wetterrealität mit Verweis auf Klima & Jahreszeiten;
7. längerer Aufenthalt und Alltag;
8. belegter Unterkunftskomfort;
9. Passung und Gegenindikationen;
10. persönliche Gastgeberperspektive und Planung;
11. Conversion und nächster Schritt.

Identische Struktur bedeutet weder identische Aussagen noch identische Textlänge. Recherche, First-Party-Erfahrung, objektspezifische Nachweise und öffentliches Authoring bleiben getrennte Evidenzklassen.

## Bestandsvergleich

| Ort | Aktueller öffentlicher Owner | Vorhandene Substanz | Hauptlücke | Research-Entscheidung |
|---|---|---|---|---|
| Frigiliana | `src/content/frigilianaWinterStaysContent.ts` | Frühe Verfügbarkeits-CTA, konkrete Unterkünfte und winterrelevante Ausstattungsargumente | Weniger dokumentierte Orts- und Motivtiefe; persönliche Erfahrung, Quellen und Property-Nachweise sind nicht als eigene Knowledge-Schicht erfasst | Conversion-Stärke bewahren, Motive und Ortsrhythmus vertiefen, Property-Claims separat verifizieren |
| Nerja | noch kein Winter-Content-Owner | Klima-, Geografie- und Unterkunftslagenwissen existieren in anderen Seitenfamilien | Eigene Winterseite, Seitenjob, Suchintention, persönlicher Input und objektspezifische Wintereignung fehlen | Eigenständiges Dossier aufbauen; keine bloße Küstenvariante von Frigiliana erzeugen |
| Tarifa | `src/content/tarifaWinterStaysContent.ts` | Starke persönliche Stimme, redaktioneller Winterrhythmus, Quellen und Claim-Grenzen | Sehr lange mobile Lesestrecke; Unterkunft und Conversion erscheinen spät; bestehende Belege sind noch nicht in der Topic-Knowledge-Base normalisiert | Redaktionelle Benchmark bewahren, Evidenz atomisieren und frühere Entscheidungs-/Conversion-Priorität prüfen |

## Coverage vor dem Research

| Gemeinsames Modul | Frigiliana | Nerja | Tarifa | Gemeinsame Lücke |
|---|---|---|---|---|
| SEO-H1 und Seitenauftrag | vorhanden | fehlt | vorhanden | gemeinsame Query-/Intent-Logik fehlt |
| Dunkler Appetizerblock | nicht als gemeinsamer Wintervertrag | fehlt | nicht als gemeinsamer Wintervertrag | belastbare Inhaltspriorität statt Banalstatistik fehlt |
| Winterreisemotive | teilweise implizit | fehlt | redaktionell vorhanden | aktuelle Nachfrage- und Motivbelege fehlen |
| Lokales Wintergefühl | teilweise | fehlt | stark | Fakten, Ableitungen und persönliche Erfahrung sind nicht einheitlich getrennt |
| Realistischer Wintertag | begrenzt | fehlt | vorhanden | Schlechtwetter- und Variabilitätsgrenzen fehlen einheitlich |
| Wetterrealität | teilweise | fehlt | vorhanden | darf Klima-Run nicht duplizieren; Coverage-Verknüpfung fehlt |
| Längerer Aufenthalt und Alltag | produktbezogen | fehlt | redaktionell vorhanden | Aufenthaltsdauer und Alltagsclaims brauchen Nachweise |
| Unterkunftskomfort | stark behauptet | fehlt | spät und teilweise behauptet | First-Party-Objektnachweise fehlen als eigene Evidenzschicht |
| Passung und Gegenindikationen | teilweise | fehlt | vorhanden | bedürfnisbasierte, nicht altersbasierte Segmentierung fehlt |
| Gastgeberperspektive | gering | fehlt | stark | strukturierter First-Party-Fragenkatalog fehlt |
| Conversion | früh und wiederholt | fehlt | sehr spät | gemeinsamer Mobile-First-Entscheidungsweg fehlt |

## Bekannte Claim-Risiken

- „mild“, „sonnig“ und „warm“ dürfen nicht gleichgesetzt werden;
- Wintermittelwerte sind keine Garantie für einen konkreten Aufenthalt;
- Torrox’ Werbeclaim „bestes Klima Europas“ ist nicht ohne Methoden- und Übertragbarkeitsprüfung auf Nerja oder Frigiliana anwendbar;
- „Überwintern“, längerer Ferienaufenthalt und Wohnraummiete sind unterschiedliche Angebote und Suchintentionen;
- Öffnungszeiten, Veranstaltungen und saisonale Schließungen sind volatil;
- Gesundheit, Gelenke oder psychisches Wohlbefinden dürfen nicht ohne geeignete Evidenz versprochen werden;
- Heizung, Kamin, WLAN, Wäsche, Arbeitsplatz, Wintersonne, Ruhe, Parken, Gehzeiten und maximale Aufenthaltsdauer sind objektspezifische Claims;
- persönliche Erfahrungen dürfen nicht als Klimastatistik oder allgemeine Gästegarantie erscheinen;
- die fehlende Nerja-Seite darf nicht durch Duplikation der Frigiliana- oder Tarifa-Erzählung geschlossen werden.

## Abhängigkeit vom Klima-Run

Der Run `2026-08-21__142423__climate-seasons__research-001` bleibt für Klimanormalwerte, Referenzperioden, Stations-/Rasterrepräsentativität, Meerestemperatur und Windklimatologie zuständig. Der Winter-Run darf diese Fakten später referenzieren, aber nicht mit einer parallelen oder methodisch abweichenden Datenbasis überschreiben.

## Nach Eingang der Rohrecherche

1. GPT-Rohbericht unverändert in `02_GPT_RAW` archivieren und den Eingang im Run-Manifest dokumentieren.
2. Zusätzliche Provider- oder Operator-Eingaben als eigene Artefakte erhalten; nichts überschreiben.
3. Markt-, SEO-, Orts-, Klima-Verweis- und Property-Quellen getrennt normalisieren.
4. Atomare Fakten, Konflikte, Claim-Grenzen und First-Party-Fragen je Ort anlegen.
5. Drei Page-Manifeste mit Coverage der elf Module erstellen; für Nerja den geplanten öffentlichen Owner erst bei tatsächlicher Implementierung festlegen.
6. Klima-Fakten über bestehende Fact-IDs referenzieren, nicht duplizieren.
7. Erst nach abgestimmter Synthese öffentliche Inhalte oder Routen ändern.

Kein vorhandener öffentlicher Inhalt wird durch diese Matrix gelöscht oder bereits als verifiziert behandelt.
