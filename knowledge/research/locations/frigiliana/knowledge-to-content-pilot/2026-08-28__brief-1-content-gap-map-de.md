# Brief 1 — Abgleich bestehender Location- und Experience-Inhalte

Stand: 2026-08-28
Status: Änderungsmatrix vor Authoring
Öffentliche Copy geändert: nein

## Ergebnis

Die beiden Seiten besitzen bereits genügend Struktur für den vereinbarten Seitenjob. Es braucht keine neue Seiten-, Komponenten- oder Resolver-Architektur.

Die Hauptprobleme sind:

1. Location enthält mehrere präzise, aber nicht freigegebene Entfernungs-, Zugangs-, Gebäude- und Komfortangaben.
2. Experience wiederholt dieselbe Auswahl als `editorial`, `moods` und `catalog`.
3. Experience bietet noch Themen an, deren Knowledge Owner nicht authoring-ready ist.
4. Der richtige Location→Experience-Übergang existiert technisch bereits als `exploreBridge`, ist aber noch eine Themenliste statt einer echten nächsten Gastfrage.
5. `places` liegt im Experience-Content, wird von der Page Family nicht gerendert und gehört inhaltlich zur Location-Entscheidung.

## Location Hub — Abschnittsentscheidungen

Owner: `src/content/frigilianaLocationContent.ts`
Renderer: `src/page-families/location-authority/FrigilianaLocationPage.astro`

| Bestehender Bereich | Entscheidung | Konkrete Grenze |
|---|---|---|
| SEO, Hero und Intro | **Behalten und fokussieren** | Direkte Antwort auf den Unterschied zwischen Tagesbesuch und mehrtägiger Basis. „Eines der schönsten Dörfer“, allgemeine Ruhe- und Ausblicksversprechen nur verwenden, wenn vom Manifest gedeckt. |
| `orientation` | **Behalten, Präzision bereinigen** | Mentale Lage und Sierra-/Dorfstruktur bleiben. Die ungeprüften 6 km nach Nerja, 50–60 Flughafenminuten und daraus gebildeten Fact-Kacheln entfallen oder werden erst nach eigenem Transportfakt verwendet. |
| `evening` | **Behalten und begrenzen** | Gastgeberbeobachtung als konkrete, begrenzte Erfahrung; keine dorfübergreifende Stille, feste Uhrzeit oder garantierte Atmosphäre. |
| `history` | **Stark kürzen und Eigentum trennen** | Location darf sichtbaren historischen Kontext vorbereiten und zu Old Town führen. Entfernen: 15-Meter-Angabe, 800-Jahre-Mauer, Restaurierungszeitraum, Brunnen-, WLAN-, Klima-, Heizungs-, Badezimmer- und Doppelduschennarrativ. Gebäude- und Inventardetail bleibt Property Owner. |
| `villageLife` — Gelände | **Behalten, an Streets & Stairs übergeben** | Hanglage, gestufte Querwege und Bedeutung des tatsächlichen Alltagswegs bleiben. Entfernen: „vergleichsweise weit unten“, weniger Höhenmeter als andere Unterkünfte sowie 150 m, 30 Höhenmeter, 30 Stufen und 3–5 Minuten. |
| `villageLife` — Casa AMARA | **Behalten in belegter Form** | Erlaubt: Calle Chorruelo als Fortsetzung der Calle Real; ab gemeinsamer Haustür Richtung Dorfkern keine weiteren Stufen. Die gemeinsame Eingangsstufe und internen Wohnungsunterschiede bleiben beim Property Owner. |
| `villageLife` — Parken | **Kürzen und zum Parking Owner führen** | Nur die belegte Unterscheidung zwischen Tages- und Übernachtungsrhythmus sowie keine Verfügbarkeitsgarantie. Keine allgemeinen Parkversprechen. |
| `coast` | **Behalten als Ergänzungslogik** | Frigiliana und Nerja ergänzen sich; Beaches besitzt die Strandwahl. Ungeprüfte Bus-, Taxi-, Mietwagen- und Erreichbarkeitsbehauptungen werden nicht als festes Angebot formuliert. Der Basisvergleich bleibt bei Location, ohne Gewinnerdramaturgie. |
| `arrival` und `faq` | **Auf Hub-Niveau kürzen** | Location erzeugt die Planungsfrage und führt zu Arrival, Parking oder Streets & Stairs. Exakte letzte Wege, Stufen, Transportbetrieb und Gepäckanweisung gehören nicht in den Hub. |
| `seasons` | **Auf eine begrenzte Planungseinordnung reduzieren** | Nur regional belegte Saisonunterschiede und Übergang zu Weather. Keine lokalen Monatswerte und keine vollständigen Heizungs-/Pelletofenbehauptungen im Location Owner. |
| `planning` | **Als Linkverzeichnis entfernen oder stark reduzieren** | Die derzeit elf Ziele wirken als generische Related-Liste. Fachlinks gehören an die Stelle, an der die nächste Gastfrage entsteht. Kein Ersatz durch eine neue N×N-Linkfläche. |
| `journeyBridge` | **Vorläufig entfernen** | Day Trips ist noch nicht authoring-ready; Málaga, Granada, Ronda, Caminito und Reisezeiten gehören nicht in diesen ersten Piloten. |
| `exploreBridge` | **Behalten und zum Hauptübergang machen** | Erst Location-Fazit, dann der narrative Wechsel „Der Ort steht fest – wie soll sich euer Tag anfühlen?“. Der CTA verwendet den bestehenden Experience-Link und ergänzt lokal den Anker der einzigen Auswahlfläche; keine Link-Registry-Änderung und keine Aufzählung sämtlicher Guides. |
| `decision` und Conversion | **Behalten und verkürzen** | Bedingte Eignung von Frigiliana als Basis, danach eine AMARA-Auswahl. Keine Wiederholung von Nerja-Vergleich, Property-Inventar oder mehreren konkurrierenden CTAs. |

## Experience Hub — Abschnittsentscheidungen

Owner: `src/content/experienceHubContent.ts`
Renderer: `src/page-families/location-authority/ExperienceHubPage.astro`

Aktuell rendert die Page Family nacheinander Hero, eine redaktionelle Dreierauswahl, eine Mood-Auswahl, den vollständigen Katalog und den Abschluss. Das ist die festgestellte Dreifachwiederholung.

| Bestehender Bereich | Entscheidung | Konkrete Grenze |
|---|---|---|
| SEO und Hero | **Behalten und auf die Gastfrage ausrichten** | Direkte Antwort: gemeinsame Urlaubstage aus einer variablen Auswahl gestalten. Keine unvollständig belegte Gesamtliste aus Wandern, Restaurants, Festen, Markt, Wellness und Ausflügen. |
| `editorial` | **Als einzige visuelle Auswahlfläche behalten** | Die vorhandene Magazinfläche bewahrt Bilder und längere redaktionelle Teaser. Sie wird nicht mehr durch Mood- und Grid-Auswahl wiederholt und bezieht ihre sichtbare Reihenfolge aus `catalog.order` statt aus einem zweiten `featuredIds`-Owner. |
| `moods` | **Logik übernehmen, eigene Fläche entfernen** | Die sprachindividuelle Kuratierung (`MARKET_CURATED`) bleibt als redaktionelle Anforderung erhalten. Reihenfolge und Ansprache dürfen pro Sprache variieren, erzeugen aber keine zweite Navigation oder neue `draft`-/`hidden`-Logik. |
| `catalog` | **Zum kanonischen Auswahl- und Reihenfolge-Owner machen** | `catalog.order` darf TypeScript-seitig einzelne `ExperienceId`-Werte auslassen. Die vollständigen Definitionen können zunächst dormant bestehen bleiben; nur Werte in `catalog.order` werden gerendert und von der Destination Context Navigation konsumiert. Im ersten Authoring-Paket sichtbar: Wandern, Strände, Essen/Abend und Old Town. |
| `stories.hiking` | **Behalten und begrenzen** | Wahl nach Einsatz und Bedingungen; vollständige Route und Sicherheit bleiben bei Hiking. |
| `stories.beaches` | **Behalten und begrenzen** | Küstentag nach Zugang, Setting und Rhythmus; Meerzustand, Parken und vollständige Strandwahl bleiben bei Beaches. |
| `stories.restaurants` | **Behalten und bereinigen** | Wahl nach Ort und Anlass. Entfernen: pauschale Gehfähigkeit ab Casa AMARA, Taxi-/Fahrerlogik und persönliche Empfehlung ohne Betreiberbeleg. |
| Old Town | **Aus vorhandener Discovery-Verbindung in die Hauptauswahl aufnehmen** | Experience bereitet den aufmerksamen Rundgang vor; Old Town besitzt sichtbare Route und Geschichte. |
| Markt | **Vorläufig nicht anbieten** | Donnerstag allein reicht nicht. Erst nach Ort, Uhrzeit, Ausfalllogik und verifiziertem Morgenablauf. |
| Festivals, Day Trips und Wellness | **Vorläufig nicht anbieten** | Die erforderlichen Owner-/Coverage-Pakete fehlen oder sind nicht authoring-ready. Bestehende Seiten bleiben unangetastet, sind aber keine freigegebene Hauptauswahl. |
| `stories.nightlife` | **Aus dem Frigiliana-Hub entfernen** | Kein freigegebener Frigiliana Owner; die Nerja-Erzählung gehört nicht in diesen Seitenjob. |
| `places` | **Aus dem Experience-Content entfernen** | Wird aktuell nicht gerendert und besitzt die Basisentscheidung nicht. Frigiliana-/Nerja-Aufenthaltswahl bleibt Location. Hero-Kicker, H1 und Intro müssen den Frigiliana-Kontext für direkte externe Einstiege weiterhin eindeutig nennen. |
| Romantic-Hideaway-Rückkehr | **Einmal als redaktionellen Abschluss integrieren** | Nur Lounis, Zaid und Maha dürfen mit der verifizierten Terrassen-/Außenduschen-/Hängemattenfolge erscheinen. Keine automatische Wiederholung hinter jeder Tagesform. |
| `closing` | **Umschreiben und vereinfachen** | Erst Kuratierung abschließen, dann eine Frage zur passenden Unterkunft und ein Übergang zu Romantic Hideaways. Keine Anweisung, zuerst die Unterkunft und erst danach die Tage zu planen. |

## Technische Dateigrenze des späteren Auftrags

Der erste Implementierungsauftrag darf ausschließlich folgende Owner verändern:

- `src/content/frigilianaLocationContent.ts`
- `src/page-families/location-authority/FrigilianaLocationPage.astro`
- `src/content/experienceHubContent.ts`
- `src/page-families/location-authority/ExperienceHubPage.astro`
- nur direkt betroffene bestehende Tests

`src/lib/location/destinationContextNavigation.ts` konsumiert `experienceHubContent[lang].catalog.order`. Die Datei bleibt unverändert, ihr resultierendes Menü muss aber in der Validierung geprüft werden.

`planning` und `journeyBridge` liegen innerhalb des bestehenden `seasons`-Slots. Sie sind keine Werte von `FrigilianaLocationSectionId`. Deshalb bleiben `src/lib/frigiliana/frigilianaLocationSectionOrder.ts` und `src/page-families/location-authority/OrderedFrigilianaLocationSections.astro` unverändert im ausgeschlossenen Scope.

`ExperienceHubTopicGrid.astro` unterstützt Eyebrow, Titel, Text und Link, aber kein Bild. Da die erste Auswahl visuell bleiben soll, wird die vorhandene redaktionelle Magazinfläche in `ExperienceHubPage.astro` zur einzigen Auswahlfläche und aus `catalog.order` gespeist. Die Grid-Komponente selbst wird nicht verändert.

Für die sprachindividuelle Auswahl wandert der vorhandene Marker `curation: MARKET_CURATED` innerhalb desselben lokalen Content-Owners von `moods` zu `catalog`. Old Town darf als einziger neuer lokaler `ExperienceId` mit dem bereits vorhandenen Link-Token `frigiliana_old_town` ergänzt werden. Das schafft weder eine neue Route noch einen neuen globalen Vertrag; die fünf Sprachobjekte müssen dabei strukturell vollständig bleiben.

Nicht im Auftrag: Link Registry, SEO Resolver, Structured-Data Resolver, globale Navigation, neue Content Collections, Zod-Schema, Property Entities, andere Destinationen oder öffentliche Spokes.

## Freigabepunkt vor Cloud

Vor dem Cloud-Auftrag ist nur noch die Abschnittsmatrix zu bestätigen. Danach werden die lokalen Knowledge-Commits auf ausdrückliche Operatorfreigabe zum benannten Remote-Basiscommit synchronisiert und ein einzelner Cloud-Auftrag für Location **und** Experience formuliert. Die deutsche Masterfassung wird zuerst lokal geprüft; fünfsprachige Übertragung folgt erst nach ihrer inhaltlichen Freigabe.
