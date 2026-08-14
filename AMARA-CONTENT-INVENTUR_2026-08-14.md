# AMARA Content-Inventur — Slug, Ort, Thema

**Stand:** 14. August 2026
**Anlass:** Punkt 4.2 der Übergabe vom 14. August; zugleich die repository-weite Duplikatsprüfung, die `AGENTS.md` seit `0e2b26a` vor jeder neuen Seite verlangt.
**Grundlage:** `npm run check:page-duplication` und `npm run check:locale-parity`. Beide Skripte lösen den Import-Graph von jeder Route über ihre Page-Family bis in die Content-Module auf und zählen deterministisch über alle fünf Sprachen. Kein Full Build.

Alle Zahlen in diesem Dokument stammen aus diesen beiden Skripten und lassen sich jederzeit reproduzieren. Es sind Rohtreffer über alle fünf Sprachen zusammen, also grob das Fünffache der Nennungen pro Sprache.

Diese Inventur ersetzt die Seitenliste in `AMARA-ROUTE-MATRIX.md` faktisch, denn die ist vom 8. August und kennt weder die Nerja-Seiten noch die Tarifa-Spokes; außerdem ordnet sie `/nerja-location` noch `nerjaLocationContent.ts` zu, was inzwischen `/nerja-where-to-stay` gehört. Die Route-Matrix bleibt für Redirects, Sitemap-Regeln und hreflang die Referenz.

---

## 1. Das Ergebnis in einem Satz

Die Seiten für Frigiliana und Tarifa sind sauber getrennt. **Nerja ist es nicht:** vier bestehende Seiten tragen einen Frigiliana-Slug, behandeln aber überwiegend Nerja. Das ist kein Schönheitsfehler — es ist der Grund, warum die Nerja-Strandseite gebaut und wieder zurückgenommen wurde, und es betrifft auch die als Nächstes geplanten Seiten.

---

## 2. Vollständige Seitenübersicht

`Typ` ist der im Code hinterlegte `pageType`. „Fremdort" nennt den zweitstärksten Ort, wenn er mindestens 15 % der Ortsnennungen ausmacht.

### Marke, Buchung, Vertrauen

| Route | Typ | Deutscher Titel | Ort | Fremdort |
|---|:--:|---|---|---|
| `/` | A | AMARA \| Individuelle Ferienunterkünfte in Frigiliana, Nerja & Tarifa | Frigiliana | Nerja 26 % |
| `/amara-about-us` | C | Über uns | alle drei gleich | Nerja 33 % |
| `/comfort-amenities` | C | Ausstattung & Aufenthaltsdetails | Frigiliana | Tarifa 35 % |
| `/direct-booking-benefits` | C | Direktbuchung: Vorteile für euren Aufenthalt | — | — |
| `/faq-general` | C | FAQ: Buchung & Anreise | — | — |
| `/guest-reviews` | C | Gästebewertungen – Frigiliana, Nerja, Tarifa | Frigiliana | Nerja 31 % |
| `/romantic-hideaways` | D | AMARA-Unterkünfte in Frigiliana, Nerja & Tarifa | Frigiliana | Tarifa 33 % |
| `/frigiliana-hospitality-property-for-sale` | D | Historische Immobilie in Frigiliana zu verkaufen | Frigiliana | — |
| `/directions-arrival-guide` | — | Anreise- & Parkguide (`noindex`) | Frigiliana | — |
| `/legal-notice`, `/instagram`, `/404` | — | Utility | — | — |

### Frigiliana

| Route | Typ | Deutscher Titel | Ort | Fremdort |
|---|:--:|---|---|---|
| `/frigiliana-location` | A | In Frigiliana übernachten \| Altstadt & Meer | Frigiliana | Nerja 16 % |
| `/frigiliana-streets-stairs` | A | **Wo in Frigiliana übernachten** \| Lagen & Zugänge | Frigiliana | — |
| `/frigiliana-or-nerja` | A | Frigiliana oder Nerja: Wo übernachten? | Frigiliana | Nerja 32 % |
| `/frigiliana-faq` | A | Frigiliana FAQ: Antworten für euren Besuch | Frigiliana | Nerja 23 % |
| `/frigiliana-parking` | A | Parken in Frigiliana: So plant ihr die Ankunft | Frigiliana | — |
| `/frigiliana-weather` | A | Wetter in Frigiliana: Klima & beste Reisezeit | Frigiliana | Nerja 27 % |
| `/getting-to-frigiliana` | A | Anreise nach Frigiliana: Auto, Transfer & Bus | Frigiliana | Nerja 33 % |
| `/frigiliana-beaches` | B | **Strände bei Frigiliana & Nerja: Küsten-Guide** | **Nerja** | Maro 27 % |
| `/frigiliana-restaurants` | B | **Restaurant-Tipps für Frigiliana & Nerja** | Frigiliana | Nerja 40 % |
| `/frigiliana-festivals` | B | **Feste in Frigiliana & Nerja** | Frigiliana | Nerja 46 % |
| `/frigiliana-day-trips` | B | Frigiliana: Tagesausflüge Málaga, Granada & Ronda | Frigiliana | Málaga 33 % |
| `/frigiliana-hiking` | B | Wandern in Frigiliana: Routen & Natur-Guide | Frigiliana | Nerja 16 % |
| `/frigiliana-market` | B | Wochenmarkt in Frigiliana: Tag, Uhrzeit & Tipps | Frigiliana | — |
| `/frigiliana-wellness` | B | Wellness & Spa bei Frigiliana | Frigiliana | — |
| `/frigiliana-netflix-dos-tumbas` | B | Frigiliana in Dos Tumbas: Die Netflix-Drehorte | Frigiliana | Nerja 20 % |
| `/frigiliana-winter-stays` | D | Winterurlaub in Frigiliana \| Beheizte Unterkünfte | Frigiliana | Tarifa 21 % |
| `/explore-frigiliana-nerja` | B | **Aktivitäten in Frigiliana & Nerja** (Hub) | Frigiliana | Nerja 41 % |

### Nerja

| Route | Typ | Deutscher Titel | Ort | Fremdort |
|---|:--:|---|---|---|
| `/nerja-location` | A | Nerja Lage-Guide: Ort, Strände & Aufenthalt (Hub) | Nerja | — |
| `/nerja-where-to-stay` | A | Wo in Nerja übernachten? Lagen, Wege & Parken | Nerja | Frigiliana 18 % |
| `/nerja-geography` | A | Wo liegt Nerja? Küste, Sierra Almijara und der Río Chíllar | Nerja | — |
| `/nerja-daily-life` | A | Alltag in Nerja: Einkaufen, Markt, Versorgung & Rhythmus | Nerja | — |
| `/nerja-weather` | A | Wetter in Nerja: Klima, Wassertemperatur & beste Reisezeit | Nerja | Frigiliana 26 % |
| `/getting-to-nerja` | A | Anreise nach Nerja & zu AMARA Playa | Nerja | — |
| `/nerja-caves` | B | Höhlen von Nerja: Die Säule, die Malereien und was ihr wirklich seht | Nerja | — |
| `/nerja-nightlife` | B | Nachtleben in Nerja: Viertel, Bars & Abend-Guide | Nerja | — |

### Tarifa

Vierzehn Seiten, alle sauber auf Tarifa fokussiert — kein einziger Fremdort über der Schwelle.

| Route | Typ | Deutscher Titel |
|---|:--:|---|
| `/tarifa-location` | A | In Tarifa übernachten: Balkon zum Atlantik |
| `/tarifa-where-to-stay` | A | Wo in Tarifa übernachten? Altstadt, La Marina oder Strand |
| `/tarifa-geography` | A | Wo liegt Tarifa? Atlantik, Mittelmeer, Meerenge und Afrika |
| `/tarifa-daily-life` | A | Alltag in Tarifa: Einkaufen, Versorgung & Coworking |
| `/tarifa-weather` | A | Wetter & Klima in Tarifa: Jahreszeiten und beste Reisezeit |
| `/tarifa-winter-stays` | A | Tarifa im Winter: Licht, Ruhe & längere Aufenthalte |
| `/getting-to-tarifa` | A | Anreise nach Tarifa & zu AMARA |
| `/tarifa-experience` | B | Tarifa erleben: Strände, Kitesurfen, Natur & Altstadt (Hub) |
| `/tarifa-beaches` | B | Tarifas Strände \| Los Lances, Valdevaqueros & Bolonia |
| `/tarifa-wind-kitesurfing` | B | Tarifa Wind- & Kitesurf-Guide \| Levante und Poniente |
| `/tarifa-food-evening-life` | B | Essen & Ausgehen in Tarifa \| Thunfisch & Altstadt |
| `/tarifa-nature-wildlife` | B | Natur & Tierwelt in Tarifa \| Vogelzug & Meerenge |
| `/tarifa-old-town-history` | B | Tarifas Altstadt & Geschichte \| Burg, Mauern & Gassen |
| `/tarifa-bolonia-baelo-claudia` | B | Bolonia & Baelo Claudia \| Strand, Düne & Römerstadt |

---

## 3. Die Befunde

### B-1 — Vier Frigiliana-Slugs sind in Wahrheit Frigiliana-und-Nerja-Seiten

| Route | Frigiliana | Nerja | Maro | Was die Seite tatsächlich abdeckt |
|---|---:|---:|---:|---|
| `/frigiliana-beaches` | 60 | **117** | 66 | Carabeíllo, El Playazo, **Playa de Maro, Cantarriján, Calahonda, Playa Burriana** — sechs Strände, davon vier bei Nerja |
| `/frigiliana-festivals` | 184 | **173** | 20 | Feste beider Orte, praktisch gleichgewichtig |
| `/frigiliana-restaurants` | 123 | **81** | 0 | Lokale in Frigiliana, Nerja und El Acebuchal |
| `/explore-frigiliana-nerja` | 156 | **110** | 0 | Hub über beide Orte |

`/frigiliana-beaches` ist der klarste Fall: Nerja wird dort **häufiger genannt als Frigiliana**, der Slug sagt aber Frigiliana.

Das ist historisch gewachsen. Als diese Seiten entstanden, war Nerja kein eigener Standort. Inzwischen hat Nerja acht eigene Seiten und einen eigenen Hub — aber die vier Seiten oben halten die Nerja-Themen weiter fest.

### B-2 — Balcón de Europa ist nicht frei, aber als Bauwerk unbesetzt

Die Prüfung `npm run check:page-duplication -- "Balcón de Europa"` meldet drei Eigentümer:

| Route | Treffer | Rolle |
|---|---:|---|
| `/nerja-location` | 25 | Wohnlage „Altstadt & Balcón", Entfernungsangabe „ca. 500 m" |
| `/nerja-nightlife` | 20 | eigener Abschnitt „2. Balcón de Europa & Altstadt — Sonnenuntergang und Cocktails", in allen fünf Sprachen |
| `/nerja-where-to-stay` | 10 | Stadtteil „Altstadt / Balcón de Europa" als Übernachtungslage |

Entscheidend ist aber, **wie** die drei den Begriff nutzen: durchweg als **Orientierungspunkt** — ein Stadtteilname, eine Gehdistanz, ein Abendviertel. Keine Seite behandelt den Balcón als **Bauwerk mit eigener Geschichte**. Batería de la Concepción, das Erdbeben von 1884 und die Alfonso-XII-Überlieferung kommen im gesamten Repository nicht vor.

Eine eigene Seite ist damit möglich, aber nur mit sauber gezogener Grenze: Geschichte und Besuch des Bauwerks — **nicht** „welche Lage zum Übernachten" (gehört `/nerja-where-to-stay`) und **nicht** „wo den Abend verbringen" (gehört `/nerja-nightlife`).

### B-3 — `frigiliana-streets-stairs` trägt den Titel einer anderen Seite

Der Slug sagt „Straßen und Treppen", der deutsche Titel sagt **„Wo in Frigiliana übernachten | Lagen & Zugänge"**. Damit besetzt die Seite dieselbe Suchabsicht wie `/frigiliana-location` („In Frigiliana übernachten | Altstadt & Meer").

Für Nerja und Tarifa ist dieselbe Aufteilung sauber gelöst und jeweils im Code begründet:

| Ort | Entscheidungsseite (Lagenvergleich) | Objektseite (AMARA-geführt) |
|---|---|---|
| Nerja | `/nerja-where-to-stay` | `/nerja-location` |
| Tarifa | `/tarifa-where-to-stay` | `/tarifa-location` |
| Frigiliana | `/frigiliana-streets-stairs` ← Slug passt nicht | `/frigiliana-location` |

Inhaltlich ist die Trennung also da. Nur der Frigiliana-Slug benennt sie nicht.

### B-4 — Die fünf Sprachen sind strukturell sauber

`npm run check:locale-parity` prüft alle **25 handgeschriebenen Fünf-Sprachen-Blöcke** in `src/content/`: **keine Abweichung** bei Abschnitten, Fakten, Links, Routen und FAQ-Einträgen. Der schwedische Tageswähler, den Codex in `2159802` nachgezogen hat, war der letzte offene Fall.

Die übrigen Module nutzen den `l(en, de, es, nl, sv)`-Helfer, bei dem eine fehlende Sprache ein TypeScript-Fehler wäre. Diese Fehlerklasse ist dort strukturell ausgeschlossen.

Drei Absatzunterschiede meldet der Check zur **Ansicht**, nicht als Fehler — Sprachen dürfen Absätze zusammenziehen, solange die Bedeutung bleibt (`TR-CONTENT-002`):

| Modul | Absätze en/de/es/nl/sv |
|---|---|
| `tarifaExperienceContent.ts` | 9 / 8 / 8 / 8 / 8 |
| `tarifaGuideContent.ts` (`paragraphs`) | 46 / 45 / 37 / 35 / 35 |
| `tarifaGuideContent.ts` (`lead`) | 3 / 5 / 4 / 4 / 4 |

Der erste Fall ist geprüft und unbedenklich: Der Tanger-Abschnitt zieht auf Englisch drei Absätze, in den anderen Sprachen sind Punkt 2 und 3 zu einem zusammengefasst, ohne Informationsverlust. **Die Spreizung bei `tarifaGuideContent.ts` (46 gegen 35) ist nicht geprüft** und gehört angesehen.

---

## 4. Preflight für die geplante Nerja-Outdoor-Seite (Punkt 4.1)

Ergebnis der repository-weiten Suche nach dem Material aus dem Recherchebericht:

| Geplanter Inhalt | Existiert bereits in | Status |
|---|---|---|
| Kajak Maro, Schnorcheln | `/frigiliana-beaches`, Abschnitt „Natur, Schnorcheln & Kajaktage" | **belegt** |
| Cascada de Maro, Saisonalität | `/frigiliana-beaches`, Abschnitt „Maros Wasserfälle sind saisonal" | **belegt** |
| Río Chíllar, Sperrung seit 08/2023 | `/nerja-geography`, Abschnitt `rio-chillar` — inklusive „einen Öffnungstermin gibt es bislang nicht" | **belegt** |
| Río Higuerón ab Frigiliana | `/frigiliana-hiking`, eigener Routeneintrag | **belegt** |
| Frigiliana–El Acebuchal | `/frigiliana-hiking`, „El Acebuchal-Runde" | **belegt** |
| Cueva de Nerja – El Pinarillo | nirgends | **frei** |
| Pico del Cielo | nirgends | **frei** |
| Plan INFOCA, Sturzflutgefahr | nirgends | **frei** |
| Turismo-Activo-Register, Genehmigungen | nirgends | **frei** |

Fünf von neun Themen sind vergeben, davon die drei reichweitenstärksten. Eine Seite „Outdoor in Nerja" im geplanten Zuschnitt wäre zu gut der Hälfte Dublette.

`AGENTS.md:107` verlangt an dieser Stelle: *„On probable duplication or ownership overlap, stop and report before creating the page."* Deshalb ist die Seite nicht gebaut.

Der Guest Guide (`guestGuideFrigiliana.ts`) führt zusätzlich eine Sektion „Wassersport — Kajak & Jetski" mit Maro-Cerro Gordo und Cascada de Maro. Der Guide ist `noindex` und damit kein SEO-Konflikt, aber inhaltlich dieselbe Substanz.

---

## 5. Was daraus folgt

Die Reihenfolge ist wichtiger als die einzelne Maßnahme: **Solange die vier Doppelseiten aus B-1 nicht zugeordnet sind, erzeugt jede neue Nerja-Seite denselben Konflikt erneut.**

Die Zuordnung selbst ist eine Slug- und Route-Ownership-Frage. `AGENTS.md` behandelt die als Infrastruktur, und `DR-URL-002/003/004` halten das aktuelle Slug-Verhalten ausdrücklich geschützt, bis eine eigene Class-3-Migration abgestimmt ist. Diese Inventur trifft deshalb keine Entscheidung, sondern legt die Grundlage dafür vor.

**Offen und nicht von dieser Inventur berührt:** W-04 Klimadaten bleibt der einzige echte Blocker im Wartungsprotokoll. Die AEMET-Abfrage und die Rasterwerte für die beiden Punktkoordinaten stehen weiterhin aus.

---

## Anhang — die beiden Prüfungen

`0e2b26a` hat die Duplikats- und die Locale-Regel in `AGENTS.md` und den Governance-Ordner geschrieben, aber kein ausführbares Skript hinterlegt. Beide sind jetzt Code:

```bash
npm run check:locale-parity
```

Vergleicht alle Fünf-Sprachen-Blöcke Position für Position. Abschnitte, Fakten, Links, Routen und FAQ-Einträge müssen exakt übereinstimmen; ein Array, das in einer Sprache leer und in einer anderen gefüllt ist, schlägt fehl — genau der Fall des schwedischen Tageswählers. Absatzzahlen werden nur zur Ansicht gemeldet.

```bash
npm run check:page-duplication -- "Balcón de Europa" "mirador"
```

Durchsucht jede öffentliche Route über ihren Import-Graph. Eine Route, die den Begriff in einem Titel führt oder ihn in Substanz abdeckt, gilt als Eigentümer und lässt die Prüfung fehlschlagen. Ohne Argument gibt das Skript die Route/Ort-Karte aus, aus der Abschnitt 2 stammt.

Beide sind bewusst **nicht** in `prebuild` verdrahtet. Codex' Commit hält ausdrücklich fest, dass keine neue Build-Hürde entstehen soll; die Prüfungen laufen dort, wo die Regel greift — vor einer neuen Seite und nach einer Mehrsprachen-Änderung.
