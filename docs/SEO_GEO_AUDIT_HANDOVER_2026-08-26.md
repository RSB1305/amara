# AMARA SEO/GEO-Audit — Übergabe an Codex Cloud

Stand: 26. August 2026

Ausgangspunkt: lokaler `main` bei `b5c0e6b`, Arbeitsverzeichnis bis auf drei Markdown-Dateien sauber

Analysebasis: gebautes HTML unter `dist/en/` — 22 indexierbare englische Frigiliana-Seiten, 25.014 Wörter Fließtext im `<main>`. Alle Zahlen in diesem Dokument stammen aus dem Build-Output, nicht aus den Quelldateien.

---

## 1. Kurzfazit

Der Frigiliana-Cluster ist redaktionell sauber und algorithmisch schwach. Der Text ist frei von Consensus-Füllfloskeln, praktisch frei von Superlativen und intern kaum redundant — das ist im Reise-Vertical die Ausnahme. Gleichzeitig kann eine Antwortmaschine ihn kaum verwerten: Es gibt keinen einzigen eigenständigen Antwortabsatz, eine Tabelle auf 22 Seiten und kein einziges attributiertes Zitat.

Die entscheidende Erkenntnis kam allerdings erst am Ende der Analyse und stellt die Aufgabe um:

**Das Repository enthält bereits eine vollständige Evidenz-Architektur unter `knowledge/` — 239 strukturierte Fakten, 111 katalogisierte offene Fragen, 24 Page-Manifeste, 10+ dokumentierte Research-Runs. Angebunden ist sie an genau 1 von 78 Content-Dateien.**

Die Arbeit besteht daher nicht darin, zu recherchieren oder ein System zu bauen. Sie besteht darin, vorhandene Fakten an vorhandene Seiten anzuschließen.

---

## 2. Was der Audit gemessen hat

### 2.1 Stärken — nicht anfassen

| Kriterium | Messwert |
|---|---|
| Consensus-Füllphrasen („In der heutigen Zeit", „hidden gem", „nestled", „breathtaking") | **0 Treffer** über 25.014 Wörter |
| Superlative | 1× „perfect", 6× „whitewashed" (deskriptiv) |
| Interne Redundanz, höchste Paar-Überlappung | 5,6 % Jaccard (`frigiliana-experience` ↔ `frigiliana-wellness`) |
| Sätze, die auf ≥3 Seiten wiederholt werden | **0** |

Es gibt keine Kannibalisierung und kein „exaggerated"-Risiko für Quality Rater. Der Tonfall ist objektiv. Diese Qualität darf durch keine Maßnahme beschädigt werden.

### 2.2 Schwächen — Formprobleme, keine Inhaltsprobleme

| Kriterium | Messwert | Bewertung |
|---|---|---|
| Seiten mit eigenständigem Direct-Answer-Absatz (60–130 W) | **0 von 22** | Erste Absätze umfassen 18–47 Wörter und führen ins Thema ein, statt zu antworten |
| `<table>`-Elemente im gesamten Cluster | **1** (`frigiliana-weather`) | `frigiliana-or-nerja` vergleicht zwei Orte über vier Merkmale komplett in Prosa |
| Attributierte Zitate (`<blockquote>` + `<cite>`) | **0** | — |
| Seiten mit `Article`-Schema (Autor + `dateModified`) | 7 von 22 | Bewusste Entscheidung, siehe Abschnitt 4 |
| Sichtbare Autorenzeile im Text | **1 von 22** (`frigiliana-parking`) | — |
| Datenpunkte pro 500 Wörter, Clusterschnitt | 2,08 — ohne `frigiliana-weather` nur **1,17** | 10 Seiten haben null numerische Angaben |

**Der Lehrbuchfall:** `frigiliana-weather` eröffnet mit 22 Wörtern, ohne eine einzige Temperatur zu nennen — während 48 geprüfte Klimawerte aus `src/content/locationClimateData.ts` weiter unten auf derselben Seite stehen. Die Daten sind da. Sie stehen nur an der falschen Stelle.

**Der zweite Lehrbuchfall:** `frigiliana-hiking` besitzt vollständige Routendaten — „3–3,5 h / +480 m / 7–8 km / moderate" für Cruz de Pinto. Ausgeliefert werden sie als `<span aria-label="Duration: 3–3.5 hrs">` in Layout-Divs. Kein `<table>`, kein `<dl>`, kein Microdata. Die redaktionelle Arbeit ist geleistet, die maschinenlesbare Ernte fehlt.

---

## 3. Der eigentliche Befund: `knowledge/` ist nicht verkabelt

```
knowledge/facts/            239 Fakten
knowledge/open-questions/   111 offene Fragen, mit Priorität und preferredEvidence
knowledge/pages/             24 Page-Manifeste mit Coverage-Status
knowledge/research-runs/     10+ Runs mit Google-Drive-Referenzen
knowledge/schema.ts          vollständiges Schema

src/content/*.ts                     78 Dateien
davon an knowledge/ angebunden        1   ← frigilianaParkingContent.ts
```

`knowledge/schema.ts` enthält bereits alles, was ein Faktenlayer braucht: `volatility` (low/medium/high), `checkedAt`, `reviewAfter`, `claimBoundary`, `status` (verified / first-party-observation / partially-verified / disputed / superseded), `sourceIds` mit voller Quellenprovenienz sowie `KnowledgeDriveFolder`/`KnowledgeDriveFile` für die Drive-Anbindung.

Statusverteilung der 239 Fakten: 177 `verified`, 28 `first-party-observation`, 26 `partially-verified`, 4 `disputed`, 3 `unverified`, 1 `superseded`. Fällige Reviews zum 26.08.2026: **0**.

### Warum das das Kernproblem ist

Der Operator beschreibt den Prozessfehler so: Es wird recherchiert, die Seite wird geschrieben, optimiert und gekürzt — am Ende steht der Inhalt nicht mehr auf der Seite und die Recherche ist verloren. Beim nächsten Mal wird dasselbe erneut recherchiert.

`DR-EVIDENCE-002` verbietet genau das bereits wörtlich:

> „Redesigning, shortening or removing public copy must not delete its underlying evidence."

Die Regel existiert. Sie greift nur nicht, weil 77 von 78 Content-Dateien gar nicht erst an die Evidenz gebunden sind.

**Belegfall:** In `knowledge/facts/locations/frigiliana/parking.ts` steht unter `frigiliana.parking.central-garage.tariff-2026-08` eine First-Party-Beobachtung vom 19.08.2026 mit Tagesdeckel 15 €. Eine Woche später nannte der Operator aus dem Gedächtnis 10 €. Der Widerspruch ist inhaltlich belanglos — für einen Urlaub mit 2.000–3.000 € Budget ändert er nichts — aber er zeigt exakt den Mechanismus: Eigene, dokumentierte Arbeit war nicht auffindbar.

---

## 4. Was bereits geprüft und verworfen wurde — nicht erneut vorschlagen

`docs/archive/evidence/AMARA-SEO-AUDIT-2_2026-08-11.md` (adversarialer Zweitdurchgang, 11.08.2026) hat mehrere naheliegende Maßnahmen mit guter Begründung abgelehnt. Diese Entscheidungen stehen:

| Maßnahme | Verdikt | Begründung |
|---|---|---|
| `Article`-Schema auf alle Guide-Seiten ausrollen | **REFUTED** | „Parking, Weather, Streets & Stairs sind Referenz-/Entscheidungsseiten, keine redaktionellen Artikel. Autorenschaft ohne echte Provenienz wäre E-E-A-T-Theater." |
| `FAQPage`-Schema | **abgelehnt** | „Schema ohne Evidenz ist schlechter als kein Schema." |
| `AggregateRating`, `Review`, `Offer` | **abgelehnt** | dieselbe Begründung |
| `llms.txt` / `ai.txt` | **abgelehnt** | „Anbietervorschläge ohne belegte Wirkung" |

Der aktuelle Audit hatte `Article`-Rollout und `FAQPage` erneut vorgeschlagen, ohne diese Vorentscheidung zu prüfen. **Beide Punkte sind gestrichen.** Das ist selbst ein Beispiel des Prozessfehlers aus Abschnitt 3: eine bereits beantwortete Frage wurde erneut gestellt.

Aktiv bleibt `DR-RUNTIME-002`: `resolveStructuredData()` in `src/lib/seo/resolve-structured-data.ts` ist alleiniger JSON-LD-Owner. Und `DR-SCHEMA-001`: Collection/ItemList-Schema ist nicht verpflichtend und muss sichtbare reale Elemente abbilden.

---

## 5. Was am 26.08.2026 am Vertrag geändert wurde

Class-3-Änderung mit ausdrücklicher Operator-Freigabe. Drei Dateien, lokal, kein Push.

### `TR-CONTENT-006` — Direct Answer bekommt eine Form

Eine öffentliche Seite, deren dominanter Job eine klare Suchintention beantwortet, eröffnet mit einem **eigenständigen Antwortblock**: rund 60–130 Wörter, unmittelbar nach der H1, vor Hero-Medien und vor jeder Sektion. Er muss ohne den Rest der Seite verständlich sein und die entscheidungsrelevanten Werte tragen, soweit `knowledge/` sie deckt. Ein nicht gedeckter Wert wird weggelassen, nicht geschätzt. Die Wortspanne ist ein Autorenziel, kein geprüfter Schwellwert — `TR-CONTENT-002` gilt weiter, jede Sprache schreibt nativ und darf in der Länge abweichen. Utility-, Legal-, System-, Entry- und sicherheitskritische Flächen sind ausgenommen.

### `TR-CONTENT-007` — Vergleiche werden strukturiert

Wo eine Seite zwei oder mehr Optionen, Orte, Routen oder Objekte anhand **derselben benannten Merkmale** vergleicht, wird der Vergleich als Tabelle oder identifizierte Liste ausgegeben — ein Eintrag je Option, ein Merkmal je Spalte — statt als Fließtext. Die Regel betrifft nur den Vergleich, nicht die umgebende redaktionelle Prosa. Sie erzwingt keine Vollständigkeit: Ein Merkmal ohne Evidenz wird weggelassen oder als unbekannt markiert, niemals geschätzt, damit eine Zeile fertig aussieht.

### Ablageorte

| Datei | Änderung |
|---|---|
| `docs/AMARA_REGISTER.md` | 1.36.0 → **1.37.0**; TR-CONTENT-006/007 in der Content/localization-Tabelle; Change-History-Eintrag |
| `docs/interim/10_AMARA_Content_Production_and_Localization_Playbook_V1_2.md` | 1.5.0 → **1.6.0**; neue Abschnitte 24–27 mit Begründung, Ge- und Verboten und dem „Retrievable-answer pass" |
| `AGENTS.md` | Tageszusammenfassung beider Regeln im Content-Abschnitt |

### Die Begründung, warum das eine SEO-Maßnahme ist

Aus Playbook-Abschnitt 24:

> Eine Suchmaschine oder Antwortmaschine extrahiert eine Passage; sie liest keine Seite bis zum Ende und fasst wohlwollend zusammen. Eine Antwort, die sich erst aus fünf verstreuten Absätzen ergibt, kann die Retrieval-Ebene nicht herausheben, nicht zuordnen und wird sie nicht zitieren — während der schwächere, aber in sich geschlossene Absatz eines Wettbewerbers stattdessen genommen wird.

Und die Abgrenzung, die den Rahmen setzt:

> Sie verlangt weder mehr Recherche noch mehr Präzision noch mehr Text. Sie verlangt, dass bereits geleistete Arbeit dort steht, wo sie gefunden werden kann.

---

## 6. Redaktionelle Leitplanken — vom Operator ausdrücklich gesetzt

Diese Punkte sind nicht verhandelbar und haben im Verlauf des Audits mehrere Vorschläge gekippt. Sie stehen als Verbote in Playbook-Abschnitt 25.

**Keine Scheingenauigkeit.** Ein früherer Vorschlag, Gehzeiten sekundengenau und Parkplatzauslastungen prozentgenau zu erheben, wurde zurückgewiesen. Begründung des Operators: Gäste sind 22 und 75 Jahre alt — ein Punktwert ist für die meisten Leser schlicht falsch, und der Datums-plus-Stoppuhr-Duktus hat mit dem, was Gäste suchen, nichts zu tun. Was schwankt, kommt als **Spanne** oder als **Konsequenzsatz** auf die Seite:

> Nicht: „6 min 43 s vom Parkplatz, gemessen am 14.08.2026 mit zwei Koffern."
> Sondern: „Rund 40 Stufen bergauf. Mit Rollkoffer machbar, mit Gehhilfe nicht — sagt uns vorher Bescheid, dann nehmen wir das Gepäck."

**Keine Cent-Genauigkeit bei Preisen.** Ob eine Busfahrt 5,50 € oder 6,12 € kostet, ändert bei einem Urlaubsbudget von 2.000–3.000 € nichts und erzeugt jährlichen Pflegeaufwand. Richtig ist die stabile Spanne („rund 5–7 €"). Der präzise Wert gehört mit Quelle und Datum in `knowledge/`, nicht in den Fließtext — dann muss die Seite bei der nächsten Preiserhöhung nicht angefasst werden.

**Es ist Urlaub, keine Doktorarbeit.** Widersprüche in Nebensächlichkeiten werden nicht zum Vorgang gemacht. Spanne hinschreiben, weiter.

**Nichts erfinden.** `TR-CONTENT-004/005` und `AGENTS.md` verbieten es bereits: „Do not invent atmosphere or first-party experience." Recherche darf nicht als eigene Beobachtung ausgegeben werden. Ein vom Modell erzeugter Buspreis unter dem Namen des Gastgebers ist schlimmer als keine Angabe.

---

## 7. Wohin wir wollen — die Zielrichtung

Zwei Arbeitspakete, danach ist Schluss. Es gibt kein drittes.

### Paket A — `knowledge/` an die Seiten anschließen

Das ist die eigentliche Arbeit und sie erzeugt keinen Rechercheaufwand für den Operator.

1. Die 239 Fakten den 22 öffentlichen Seiten zuordnen: Welche Seite bleibt vage, obwohl ein passender, geprüfter Fakt bereits daneben liegt?
2. Pro Treffer eine Ja/Nein-Vorlage an den Operator: *„Seite X sagt vage A. Fakt Y sagt es genau, Stand Z, Quelle W. Rein damit?"*
3. Freigegebene Fakten einbauen — nach dem Muster, das `src/content/frigilianaParkingContent.ts` bereits vorführt (Import von `EvidenceReferenceMap` und den Fact-IDs).
4. Direct-Answer-Blöcke nach `TR-CONTENT-006` bauen, gespeist aus denselben Fakten.
5. Vergleichsseiten nach `TR-CONTENT-007` auf Tabellen umstellen — beginnend bei `frigiliana-hiking` (Routendaten vorhanden) und `frigiliana-or-nerja` (Vergleich vorhanden, unstrukturiert).

**Sofort möglich, ohne jede neue Information:**
- `frigiliana-weather` — 48 Klimawerte liegen fertig in `src/content/locationClimateData.ts` und müssen nur nach oben in den Antwortblock
- `frigiliana-hiking` — Routendaten vorhanden, brauchen nur eine Tabelle
- `frigiliana-geography`, `frigiliana-streets-stairs`, `getting-to-frigiliana` — enthalten bereits Zahlen im Fließtext, die in den Antwortblock gehören

### Paket B — Autorenzeile

Sichtbare Autorenschaft steht auf 1 von 22 Seiten. Sie ist eine Systemeinstellung, kein Messwert, und die billigste Verbesserung im Projekt. **Aber:** nur dort, wo echte Provenienz existiert — das Verdikt aus Abschnitt 4 gilt. Referenz- und Entscheidungsseiten ohne redaktionelle Autorschaft bekommen keine.

### Was ausdrücklich nicht dazugehört

- Keine neue Feldrecherche, keine Messtouren, keine Zitat-Akquise. Ein entsprechender Vorschlag wurde erstellt und wieder verworfen.
- Kein `Article`-Rollout, kein `FAQPage`, kein `citation`/`reviewedBy` — siehe Abschnitt 4.
- Keine Kürzung, keine Umschreibung bestehender Prosa über das hinaus, was die zwei neuen Formregeln verlangen. Der Tonfall ist die Stärke des Clusters.

---

## 8. Offene Punkte

| Punkt | Status |
|---|---|
| `frigiliana.es/horario-autobuses/` liefert HTTP **403** | Fahrplan Frigiliana–Nerja konnte nicht geprüft werden. Braucht einen Screenshot oder einen Abruf aus dem Browser des Operators. |
| Parkhaus-Tagessatz | 15 € (dokumentierte Beobachtung 19.08.2026) gegen 10 € (Operator-Erinnerung 26.08.2026). Bewusste Entscheidung: **Spanne oder gar kein Tagessatz auf der Seite**, kein Klärungsvorgang. |
| Tiefgaragen-Öffnung | Ayuntamiento-Mitteilung nennt Öffnung „bis Ende August". Falls saisonal, wäre eine pauschale Parkhaus-Empfehlung riskant. Ungeklärt. |
| Festival 3 Culturas | **27.–30.08.2026**, 14. Ausgabe, Quelle `frigiliana.es`. Lichtinstallation an der Iglesia de San Antonio ab 22:00. Offizieller Parkplatz- und Shuttle-Service existiert. Läuft ab morgen — vier Tage Gelegenheit für First-Party-Beobachtungen zu Sperrungen, Lärmfenster und Parkdruck ohne Zusatzaufwand. |
| Río Chíllar | Weiterhin gesperrt seit August 2023 (Brandschutz, Besucherlenkung). Junta de Andalucía arbeitet 2026 an kontrolliertem Zugang, **kein Wiedereröffnungsdatum**. Bestehender Seitentext ist korrekt, ihm fehlt nur das Prüfdatum. |

---

## 9. Arbeitsstand und Koordination

**Korrigiert am 26.08.2026 nach Rückmeldung von Codex Cloud.** Eine frühere Fassung dieses Abschnitts behauptete, `main` stehe bei `b5c0e6b`. Das war falsch und hat einen berechtigten Koordinationsstopp ausgelöst.

Tatsächliche Topologie:

| Ort | Stand |
|---|---|
| `origin/main` | `1071a76` |
| Lokaler Arbeitsbranch (Claude/Codex Desktop) | `codex/experience-hub-visual-rhythm` @ `ee8f4d6` |
| Darauf | 4 Design-Commits (`1d24add`, `a4bd824`, `b5c0e6b`, `ee8f4d6`), alles `.astro`, **nicht gepusht** |

Die Design-Arbeit von Codex Desktop liegt also auf einem lokalen, ungepushten Feature-Branch — nicht auf `main`. Wer von `origin/main` auscheckt, sieht sie nicht.

Die Vertragsänderung aus Abschnitt 5 lag zunächst uncommitted auf demselben Design-Branch, was der falsche Ort für eine Class-3-Vertragsänderung ist. Sie gehört auf einen eigenen Branch direkt über `origin/main`, unabhängig von der Design-Arbeit. Bis das geschehen und gepusht ist, gilt für jeden anderen Checkout weiterhin Register 1.36.0 und Playbook 1.5.0 — `TR-CONTENT-006/007` sind dort **nicht** wirksam.
- Saubere Trennung für die Weiterarbeit: Design arbeitet in `src/page-families/**/*.astro`, Content in `src/content/*.ts`, Evidenz in `knowledge/`.
- `AGENTS.md` Zeile 122: Cloudflare-Limit von 500 Builds ist hartes Budget. Class-0–2-Änderungen lokal halten und zu bewussten Release-Punkten bündeln.
