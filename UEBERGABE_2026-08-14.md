# Übergabe an die nächste Sitzung

**Stand:** 14. August 2026, nach Push `b7291f2` und vier nachfolgenden Codex-Commits.
**Zweck:** Nahtlos weiterarbeiten, ohne den bisherigen Stand neu herzuleiten.

---

## 1. Wo das Repository steht

`main` ist deckungsgleich mit `origin/main`. Nichts hängt.

**Letzte Commits, neueste zuerst:**

| Commit | Von | Inhalt |
|---|---|---|
| `5c59674` | Codex | AMARA GitHub SSOT und FAST-first-Ausführung etabliert |
| `2159802` | Codex | Tarifa-Hub/Spoke-Konsistenz — schließt eine Lücke aus meiner Arbeit |
| `8df03b2` | Codex | Unbelegte Wetteraussagen entfernt |
| `71e67c9` | Codex | Host-Identität und Bilder vereinheitlicht |
| `b7291f2` | Claude | Höhlen von Nerja |
| `a97ac52` | Claude | Unbelegte Erklärung im Klimavergleich gestrichen |
| `d08f474` | Claude | Tarifa Experience als echter Hub statt Zusammenfassung |
| `6a07135` | Claude | Unbelegte Klimaaussagen von beiden Wetterseiten entfernt |
| `e96bdd7` | Claude | Wartungsprotokoll und Rechercheaufträge |
| `b671fa8` | Claude | Die drei fehlenden Nerja-Guides |
| `47a6d2d` | Claude | Tarifa Lage-Guide, alle fünf Sprachen |

**Offen im Arbeitsverzeichnis** (nicht committet, nicht von mir):
`AMARA-SEO-AUDIT_2026-08-11.md`, `AMARA-SEO-AUDIT-2_2026-08-11.md`, `public/images/tarifa/`, `src/pages/tools/design-lab/`

**Letzter verifizierter Produktionsbuild:** 467 Seiten, alle vier Policy-Checks bestanden.
Lokal bricht `npm run build` absichtlich ab, wenn `PUBLIC_SITE_URL` fehlt. Zum Testen:
`PUBLIC_SITE_URL=https://amara-lodging.es npx astro build`

---

## 2. Was Codex an meiner Arbeit geändert hat — und warum das gut war

**Keine Rückabwicklung.** Zwei sinnvolle Ergänzungen:

- **`2159802`** hat den **schwedischen Tageswähler** auf der Tarifa-Experience-Seite nachgezogen. Ich hatte dort nur die Abschnitte ersetzt, nicht den Wähler — `intro: []` und die alten Titel standen noch drin. Echter Fund.
- **`8df03b2`** hat **alle Klimazahlen** von beiden Wetterseiten entfernt: Saison-Temperaturen, Wassertemperatur, Niederschlag. Ich hatte sie mit „≈" abgesichert stehenlassen; Codex hat konsequent umgesetzt, was die Recherche verlangt — dass keiner der beiden Datensätze veröffentlichungsfähig ist.

Erhalten geblieben sind: der Vergleichsblock ohne Zahlen, die 295 Höhenmeter, der Hinweis auf die laufende Prüfung, die entfernte Kompensationsthese, die Struktur der Experience-Seite mit `our-day` und `token: 'casa'`.

Auf der Frigiliana-Seite wurde mein „Verlässlich hell" zu **„Oft hell"** abgeschwächt. Sachlich vorsichtiger, kein Verlust.

---

## 3. Der inhaltliche Rahmen, auf den wir uns geeinigt haben

**Marke:** AMARA ist „Romantic Space" — für Paare. Fünf der sechs Unterkünfte haben nur Doppelzimmer.
**Tarifa** ergänzt zwei Fälle: Paare in der Übergangsphase mit ein bis zwei kleinen Kindern, und Surfer. Daher „Family & Surf".
**Nerja:** Robert und seine Frau waren jahrelang selbst Gäste in genau dieser Wohnung, bevor sie sie kauften.

**Redaktionelles Leitprinzip, Roberts eigene Worte:**
> „Wir gehen offen und ehrlich damit um, was wir bieten und was wir nicht bieten. Deshalb gibt's wenig anstrengende Buchungen."

Ehrliche Nachteile gehören auf die Seiten. Sie sind kein Risiko, sondern der Grund, warum die Erwartungen stimmen.

**Reihenfolge auf jeder Seite:** Sehnsucht → Zugehörigkeit → Absicherung.
Erst warum jemand hier sein will, dann ob er hier richtig ist, dann die Fakten, die die Buchung absichern. Der Supermarkt ist Absicherung, kein Verkaufsargument.

**Typ A gegen Typ B:** Location-Seiten sind Entscheidungsseiten, Erlebnis-Seiten sind Vorfreude-Seiten. Beide müssen konvertieren. Gastronomie und Empfehlungen gehören auf Typ B, nicht auf Typ A. **Beschluss des Operators: Hybrid** — Typ A bleibt faktenführend, trägt aber einen persönlichen Block und einen Buchungsabschluss.

---

## 4. Was als Nächstes ansteht

### 4.1 Outdoor-Seite Nerja (Material liegt vollständig vor)

Aus dem Recherchebericht vom 14. August, noch nicht umgesetzt:

- **Kajak Maro:** Anbieter brauchen Eintrag im Register *Turismo Activo* der Junta und eine Umweltgenehmigung. Besucherobergrenzen, Mindestabstände an Vogelbrutfelsen, Anlanden nur an ausgewiesenen Stränden.
- **Cascada de Maro:** rund 15 m hoch, gespeist vom Arroyo Sanguino. **Nur vom Wasser erreichbar** — der Landweg führt über eingezäuntes Privatgelände und endet in Steilwänden. Wasserführung im Frühjahr am stärksten, im Spätsommer schwach; 2022 und 2023 stellenweise versiegt.
- **Río Chíllar:** seit August 2023 gesperrt. Im **Mai 2026** hat die Junta das Verfahren der *información pública* eingeleitet; zwei Konsortien bewerben sich um die Betreiberkonzession. Kein Öffnungstermin.
- **Vier offene Alternativrouten:** Cueva de Nerja–El Pinarillo (mittel, ~10 km), Pico del Cielo (schwer, 1.508 m, ~1.200 Hm), Río Higuerón ab Frigiliana (leicht–mittel, ~8–12 km, die eigentliche Chíllar-Alternative), Frigiliana–El Acebuchal (mittel, ~12 km).
- **Sicherheit:** Plan INFOCA vom 15. Juni bis 15. Oktober, bei Warnstufe Rot Wegesperrungen. Sturzflutgefahr bei DANA-Lagen.

### 4.2 Bestandsaufnahme über alle Seiten

**Höchste Priorität vor jeder neuen Seite.** Welcher Slug zielt auf welchen Ort und welches Thema, wo überschneiden sich Begriffe standortübergreifend.

Anlass: Ich habe eine Nerja-Strandseite gebaut, die als `frigiliana-beaches` bereits existierte — Titel „Strände bei Frigiliana & Nerja", darin Nerja 99×, Maro 59×, Burriana 26×. Die Seite wurde zurückgenommen. Verdächtig auf ähnliche Überschneidungen: `frigiliana-day-trips`, `frigiliana-or-nerja`, `nerja-nightlife`.

Der gerettete Text liegt in [NERJA-STRAENDE-BAUSTEIN_2026-08-13.md](NERJA-STRAENDE-BAUSTEIN_2026-08-13.md) — Ayo, die Buchten, die Erklärung zum klaren Wasser und der belegte Schutzstatus, fertig in fünf Sprachen.

### 4.3 Weitere Typ-B-Seiten für Nerja

Nach Suchvolumen: **Balcón de Europa** (Material da: Kultstatus, authentisches Spanien, 9. Jahrhundert Batería de la Concepción, Erdbeben 1884, Alfonso XII als Überlieferung kennzeichnen) und **Verano Azul** — nur spanisch, da außerhalb des spanischsprachigen Raums unbekannt.

---

## 5. Offene Wartungspunkte

Vollständig in [CONTENT-WARTUNGSPUNKTE.md](CONTENT-WARTUNGSPUNKTE.md).

| | Punkt | Status |
|---|---|---|
| W-01 | Río Chíllar gesperrt | aktiv, quartalsweise prüfen |
| W-02 | Pool-Saison Tarifa | jährlich |
| W-03 | Öffnungszeiten Nerja | halbjährlich |
| **W-04** | **Klimadaten** | **offen** — siehe unten |
| W-05 | Bahía Park | niedrig |
| W-06 | Cueva de Nerja: Preise, Zeiten, Festival | jährlich |

**W-04 ist der einzige echte Blocker.** Zwei Rechercherunden haben geklärt, was falsch ist, aber nicht, was stimmt. Der offene Schritt:

1. `GET https://opendata.aemet.es/opendata/api/valores/climatologicos/normales/estacion/6213X?api_key={KEY}` — Original-Response archivieren
2. Rasterwerte aus *Mapas climáticos de España 1991–2020* für genau zwei Punkte anfordern:
   **Nerja** 36.74484684 N, −3.87667655 (20 m) · **Frigiliana** 36.79299972 N, −3.89875687 (315 m)
3. Ausdrücklich keine Nachbarstationen, keine manuelle Regionalisierung, keine Höhenkorrektur

Verworfen und nie wieder aufnehmen: 292 mm Jahresniederschlag, „Frigiliana tagsüber heißer (31 gegen 28)", 26 °C Wassertemperatur als Monatsmittel, „mildeste Winter auf dem europäischen Festland", „300 Sonnentage", die Südhang-Kompensationsthese.

---

## 6. Arbeitsweise — was sich bewährt hat und was nicht

**Bewährt:**
- Erst Deutsch, Freigabe abwarten, dann in die vier anderen Sprachen. Bei der Tarifa-Location-Seite hat das funktioniert; bei Nerja bin ich direkt fünfsprachig gestartet und habe beim Strand-Fehler entsprechend viel verloren.
- Gezielte Prüfung statt Full Build: Routen per `curl`, die vier Policy-Skripte. Der echte Build gehört vor den Push.
- Zeitkritische Aussagen ins Wartungsprotokoll statt in den Fließtext.
- Recherche nur mit Quellenangabe pro Aussage annehmen. Zweimal kamen Berichte in zwei widersprüchlichen Fassungen; die mit Belegen war beide Male die richtige.

**Zwei Gewohnheiten, die zwei Fehler verhindert hätten:**
1. **Vor jeder neuen Seite standortübergreifend grepen**, nicht nur im betroffenen Cluster.
2. **Nach Mehrsprachen-Änderungen alle fünf Locales zählen**, nicht stichprobenartig prüfen.

**Zur Governance:** `AGENTS.md` mit seinen 121 Zeilen und der FAST-first-Regel ist gut und sollte so bleiben. `CLAUDE.md` als Türsteher zu den 2.625 Zeilen unter `docs/` funktioniert, solange wirklich nur die für die Aufgabe relevanten Owner gelesen werden. Der aufwendige Teil ist der SSOT-Apply-Prozess unter `SSOT_IMPORT_DO_NOT_COMMIT/` — elf Governance-Dokumente für eine Whitespace-Korrektur. Dort liegt der Zeitverbrauch, nicht in den Projektregeln.

**Codex arbeitet parallel im selben Repository.** Vor jeder Sitzung `git fetch` und den Stand prüfen. Bisher hat Codex nichts zerstört, aber einmal beim Committen Formulierungen abgeschwächt, die wir bewusst konkret gesetzt hatten.

---

## 7. Ansprache und Ton

Deutsch, „ihr/euch". Persönlich, konkret, ohne Marketingsprache. Keine Meta-Sätze über den Guide selbst. Zahlen nur mit Beleg. Nachteile werden benannt, nicht weggeschrieben — sie sind der Grund, warum der Rest glaubwürdig ist.
