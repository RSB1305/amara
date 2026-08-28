---
document_type: raw-research-intake-and-dedup
created_at: 2026-08-28
status: RAW_RECEIVED_EVALUATED
scope:
  - frigiliana
  - nerja
  - casa-amara
public_content_changed: false
---

# Knowledge-to-Content-Pilot — Intake und Deduplizierung der fünf Rohrecherchen

## Zweck und Grenze

Dieses Dokument bewertet die fünf am 28. August 2026 in Google Drive abgelegten GPT-Deep-Research-Berichte gegen den vorhandenen Git-Bestand in `knowledge/`. Es ist weder öffentliche Copy noch eine Quellenverifikation und legt noch keine neuen atomaren Fakten an.

Die Berichte sind Discovery-Inputs. Aussagen werden erst dann als wiederverwendbares AMARA-Wissen normalisiert, wenn die jeweilige Originalquelle geöffnet, der konkrete Claim geprüft und die bestehende Fact-Eigentümerschaft berücksichtigt wurde. Interne Recherche-Zitate wie `turn…search…` sind außerhalb der Ursprungssitzung nicht als dauerhafte Quellenbelege ausreichend.

## Drive-Eingang

| Run-ID | Drive-Run | Prompt | GPT-Rohbericht | Eingangsbewertung |
|---|---|---|---|---|
| `2026-08-28__092355__frigiliana-climate-seasons-decisions__research-001` | [Run](https://drive.google.com/drive/folders/1f78xdTXk9IB5PmHxv24bN7C8wPdVb4h0) | [Prompt](https://drive.google.com/file/d/1t-Tc4j49HsbRyXpL1WGHa0_ntrOLOQmS/view?usp=drivesdk) | [Klima und Jahreszeiten](https://drive.google.com/file/d/1HtuMMmB-Hm73eEg_SDMZEZ1-pTl10ahF/view?usp=drivesdk), 49.185 Bytes | methodisch brauchbar; Quellenprovenienz vor Normalisierung ergänzen |
| `2026-08-28__092356__nerja-frigiliana-beaches-connections__research-001` | [Run](https://drive.google.com/drive/folders/1FxPa56b3GnZt8XwUUcx5qEnlscUbjvA6) | [Prompt](https://drive.google.com/file/d/1Xp8oQ-NVLjgze8CyoVDzAfEn_Obf61Me/view?usp=drivesdk) | [Strände und Verbindungen](https://drive.google.com/file/d/1_GNM5dIvn4IQyHcqLku3GQPZpkUG-0us/view?usp=drivesdk), 76.585 Bytes | stärkster Eingang; Quellenregister und Connection Matrix vorhanden |
| `2026-08-28__092357__frigiliana-hiking-weather-return__research-001` | [Run](https://drive.google.com/drive/folders/1VyecWPTXEgcAwxY5ZRQModN7evS19LmK) | [Prompt](https://drive.google.com/file/d/1TfqtmyXEQjZ8LF8obgL_dQIC_2uUv2jp/view?usp=drivesdk) | [Wandern, Wetter und Rückkehr](https://drive.google.com/file/d/1ymmKLmABRQlkhB0ZNBvdllw0wo4dRJeo/view?usp=drivesdk), 31.399 Bytes | wertvolle Teilfakten; zu stark als Same-Day-Entscheidung geschrieben; keine portablen Quellenlinks |
| `2026-08-28__092358__frigiliana-nerja-restaurants-evenings__research-001` | [Run](https://drive.google.com/drive/folders/1On8Jb0x-_pbWZ4fnl5sA7Wn5SsGbBYMn) | [Prompt](https://drive.google.com/file/d/1ghxaOHjaUmmK3SmoUKMxUVZ1WYvCbXkg/view?usp=drivesdk) | [Restaurants und Abendgestaltung](https://drive.google.com/file/d/1AcEFDi6XSa1SZ0zizg6VpzRHSKmX3iGa/view?usp=drivesdk), 45.933 Bytes | Betriebsfakten teilweise nutzbar; Ranking und „heute Abend“-Urteil nicht kanonisch |
| `2026-08-28__092359__frigiliana-shopping-local-food-cooking__research-001` | [Run](https://drive.google.com/drive/folders/1sgmfPBSOAkhlMnFSJNh8EJLB-edglXek) | [Prompt](https://drive.google.com/file/d/1Jaq3RC4_tsAwqZSIj9cOcJrKhc-h83-V/view?usp=drivesdk) | [Einkaufen, lokale Lebensmittel und Kochen](https://drive.google.com/file/d/140pI7cmts11L0lEfywGmYVJnJZsxf7BZ/view?usp=drivesdk), 50.465 Bytes | sehr guter Eingang; klare Ownership- und Property-Grenzen |

Die Dateinamen wurden zur Nachvollziehbarkeit normalisiert. Die Rohinhalte und stabilen Drive-Datei-IDs blieben unverändert.

## Bestandsabgleich und Eigentumsentscheidungen

### Klima und Jahreszeiten

Bereits vorhanden:

- Die methodische und öffentliche Lücke ist in `knowledge/research/locations/climate-seasons/2026-08-21__research-001-intake.md` und der zugehörigen Gap-Matrix dokumentiert.
- `knowledge/pages/frigiliana-climate/manifest.ts` besitzt bereits die sieben Authoring-Bereiche; alle Bereiche sind noch ungemappt oder als Lücke markiert.
- Frigilianas Höhen- und Reliefgrenze besitzt bereits `knowledge/facts/locations/frigiliana/geography.ts`. Eine zweite Fact-ID nur für dieselbe Höhenangabe wäre unzulässige Duplizierung.
- Property-Komfort, Wintersonne, Heizung und Ausstattung besitzen bereits Facts beziehungsweise offene Fragen in den Frigiliana-Winter- und Casa-AMARA-Ownern.

Neue verwertbare Richtung:

- Klima, Vorhersage, Warnung und Gebäudekomfort werden im Bericht korrekt getrennt.
- Belastbar erscheint die qualitative Saisonstruktur: sommerheiß und stark sommertrocken; Winter milder und niederschlagsreicher; lange exponierte Aktivitäten benötigen eine andere Saison- und Tageszeitlogik als Strandtage.
- Die Aussage „Frigiliana ist genau X °C kühler als Nerja“ wird zu Recht ausgeschlossen.

Intake-Entscheidung:

- Keine neuen Klima-Facts aus dem Bericht allein.
- Zuerst die im Quellenregister benannten AEMET-, Junta-, Copernicus- und IPCC-Originalquellen mit dauerhaften URLs rekonstruieren und claimweise prüfen.
- Bestehende Höhen-, Landwirtschafts- und Property-Facts wiederverwenden; nicht kopieren.
- Eine lokale Monatsreihe bleibt eine echte Lücke. Málaga-Aeropuerto-Werte dürfen nur als regionaler Proxy und niemals als „Frigiliana hat …“ normalisiert werden.

### Strände und Tagesverbindungen

Bereits vorhanden:

- Calahondas Lage am Balcón besitzt bereits `nerja.coast.calahonda.balcon-adjacent`.
- Landschaft, Schutzstatus und räumlicher Umfang von Maro–Cerro Gordo besitzen bereits Facts in `knowledge/facts/locations/nerja/maro-natural-landscape.ts`.
- Der aktuelle Zugang zu einzelnen Buchten ist bereits die offene Frage `nerja.nature.question.current-access-regime`.
- Die Kontinuität der innerstädtischen Strandwege ist bereits die offene Frage `nerja.coast.question.walking-link-continuity-2026`.
- AMARA-Playa-Routen und exakte Wegprofile bleiben durch bestehende offene Fragen ausdrücklich First-Hand-/Messaufgaben.

Neue Fact-Kandidaten nach Originalquellenprüfung:

- Burriana: dokumentierte Größe, hohe Auslastung, Services, PMR-Punkt und Qualitätssiegel 2026.
- El Playazo: Größe, neuer PMR-Punkt 2026 und die getrennt zu modellierende Zertifizierungsbezeichnung „Playazo–Chucho“.
- Maro: 2026-Shuttlezeitraum, Betriebszeit und Preis als hochvolatile, datierte Operation.
- Calahonda: Treppenzugang und aktuelle Zugangsbaustelle beziehungsweise Abschlusslücke.
- Cantarriján: Gemeindezugehörigkeit, saisonales Shuttle und Konflikt zwischen veröffentlichtem Betriebsbeginn.
- Carabeillo: ausdrücklich als Research Gap; keine Services von Carabeo übernehmen.

Intake-Entscheidung:

- Dieser Run ist der erste Normalisierungskandidat.
- Vorhandene Maro-/Calahonda-Facts bleiben kanonische Eigentümer und werden nur ergänzt oder mit neuen datierten Fakten verknüpft.
- Fahrpläne, Shuttlezeiten, Rettungsdienste, Wasserproben, Kiosk- und Chiringuito-Betrieb bleiben hoch volatil und benötigen ein Review-Datum beziehungsweise einen Live-Check-Hinweis.
- Die Connection Matrix bleibt zunächst Research-Synthese. Sie erzeugt noch keine öffentlichen Links und keine neue Route.

### Wandern, Wetter und Rückkehr

Bereits vorhanden:

- `frigiliana.winter.el-fuerte-starts-in-village` besitzt bereits den verifizierten Startkontext von El Fuerte.
- Frigilianas Dorfhöhe und die Grenze bloßer Kartendistanzen besitzen bereits die Geography-Facts.
- Der Live-Zugang zum Río Chíllar ist bereits als `nerja.geography.question.rio-chillar-live-access-owner` offen.
- Die aktuelle Wetterdarstellung besitzt einen getrennten Runtime-Owner; ein Rohbericht darf keine statische Same-Day-Empfehlung in `knowledge/` einfrieren.

Neue mögliche Kandidaten nach Provenienzkorrektur:

- Offizielle Streckenwerte und Rundweg-/Linear-Status für Cruz de Pinto, Cahorros, El Fuerte und GR 249 Frigiliana–Cómpeta.
- Dokumentierte fehlende Versorgungs- und Abbruchpunkte auf der GR-249-Etappe.
- Unterschiedliche Wetterempfindlichkeit von exponierter Bergroute und Fluss-/Schluchtweg als begrenzte Planning-Evidence.

Nicht normalisieren:

- das konkrete GO/NO-GO-Urteil vom 28. August 2026;
- pauschale Wassermengen als allgemeine oder medizinische Empfehlung;
- aus einer Ortsvorhersage abgeleitete Bergsicherheit;
- jede Öffnungs- oder Sperraussage ohne aktuelle offizielle Originalquelle.

Intake-Entscheidung:

- Der Bericht bleibt als Discovery-Input erhalten, ist aber noch nicht normalisierungsbereit.
- Benötigt wird kein neuer breiter Wanderbericht, sondern ein enger Provenienz- und Struktur-Korrekturlauf: Original-URLs, stabile Routenattribute, Konflikte, Volatilität sowie eine variable Connection Matrix für Wetter, Saison, Essen und Rückkehr.

### Restaurants und Abendgestaltung

Bereits vorhanden:

- The Garden besitzt bereits den begrenzten Fact `frigiliana.winter.one-business-winter-listing`; dieser belegt keine allgemeine ganzjährige Restaurantlandschaft.
- Casa AMARA besitzt bereits Lage-, Terrassen- und Sunset-Facts. Diese Property-Facts dürfen kontextuell verwendet, aber nicht in Restaurant-Facts dupliziert werden.
- Die Nerja-Zonen- und Abendrückkehrlogik besitzt bereits Facts und offene Routenfragen im Coast-/Atmosphere-Owner.

Neue mögliche Kandidaten nach Originalquellenprüfung:

- Betreiberbestätigte Adresse, Küchenprofil, Terrasse/Aussicht, Reservierungslogik und aktuelle Betriebsfenster je ausgewähltem Betrieb.
- Ayo und El Acebuchal als begrenzte Negativbefunde für den Seitenjob „Abendessen“, nicht als allgemeine Qualitätsurteile.
- Nachweisbare Lagebeziehungen zwischen Strand, Altstadt, Restaurant und Rückkehrknoten.

Nicht normalisieren:

- „beste“, „stärkste“ oder „erste Wahl“ aus der Berichtssynthese;
- Sternedurchschnitte als dauerhafte Qualitätsfakten;
- aus Reviews abgeleitete objektive Barrierefreiheit, Aussicht oder Atmosphäre;
- externe Erfahrungen als persönliche AMARA-Erfahrung.

Intake-Entscheidung:

- Stabile Betreiberfakten können nach Quellenprüfung normalisiert werden; aktuelle Öffnungszeiten bleiben hoch volatil.
- Eine persönliche AMARA-Empfehlung entsteht erst aus einer separaten Operator-Notiz: eigener Besuch, Zeitpunkt, konkretes Gericht oder Anlass, Anschlussort, Park-/Fußweg und klare Erinnerungsgrenze.
- Restaurant-, Strand-, Sundowner- und AMARA-Rückkehrverbindungen bleiben variabel. Es entsteht keine fest vorgeschriebene Tageskette.

### Einkaufen, lokale Lebensmittel und Kochen

Bereits vorhanden:

- Historische Zuckerrohr-, Terrassen-, Avocado- und Olivenfakten besitzen bereits `knowledge/facts/locations/frigiliana/agriculture-food.ts`.
- Die offene Frage zur heutigen Ingenio-Produktion und Zugänglichkeit besitzt bereits `frigiliana.food.question-ingenio-current-production-and-access`.
- Die offenen Fragen zum aktuellen Einkaufsnetz und zur echten AMARA-Einkaufsroute besitzen bereits `knowledge/open-questions/locations/frigiliana/supermarkets.ts`.
- Lounis, Zaid und Maha besitzen bereits den Property-Fact zu privater Terrasse, Außendusche, Hängematte und zwei Liegen. Farah darf daraus nicht abgeleitet werden.
- Die Eigentumsgrenze Supermarkt als Location und Wochenmarktbesuch als Experience ist bereits durch `DR-IA-005` entschieden.

Neue Fact-Kandidaten nach Originalquellenprüfung:

- EROSKI/city an Plaza Doña Amparo Guerrero 10 als Teil des aktuellen Dorf-Einkaufsnetzes.
- Donnerstag als normaler Markttag und der Markt als gemischter `mercadillo`, nicht als belegter Farmers’ Market.
- Ingenio an Plaza del Ingenio 4 als heutiger Produktionsort von `miel de caña`, ohne unbelegte Aussage zur geografischen Herkunft des gesamten Rohzuckers.
- El Lagar und weitere ausgewählte, belegte Bezugsorte für regionale Produkte.
- Ajoblanco und andere klar regional belegte Gerichte als Food-Wissen, getrennt von Rezept- und Property-Eignung.

Intake-Entscheidung:

- Dieser Run ist gemeinsam mit dem Strand-Run der erste Normalisierungskandidat.
- Der aktuelle Netzwerk-Fact kann die bestehende Supermarktfrage teilweise lösen; die echte Route ab Casa AMARA bleibt First-Hand offen.
- Rezepte werden nur dann AMARA-Aufenthaltswissen, wenn Zutatenherkunft, Zubereitung und die benötigte Ausstattung pro Unterkunft belegt sind.
- Die vorhandene Property-Matrix muss für Farah, Lounis, Zaid und Maha getrennt beantwortet werden; keine Portfolio-Pauschalisierung.

## Deduplizierter Gap-Stand

| Lücke | Warum sie noch offen ist | Kleinster nächster Beleg |
|---|---|---|
| Frigiliana-spezifische lokale Monatsklimadaten | Keine lokale AEMET-Langzeitstation; der neue Bericht vermeidet zu Recht Scheingenauigkeit | Quellen-/Datensatzentscheidung mit nachvollziehbarer Rasterzelle, Referenzperiode und Unsicherheitsgrenze |
| Dauerhafte Climate- und Hiking-Provenienz | Die Rohberichte enthalten überwiegend interne Recherche-Zitate statt portabler Direktlinks | enger Quellenrekonstruktionslauf; keine neue allgemeine Erzählrecherche |
| Vier stabile Wander-Routenrecords | Werte sind im Bericht enthalten, aber Originalquellen und Claim-Grenzen fehlen | offizielle Routenquellen öffnen und pro Route Attribute, Konflikte und Review-Grenze erfassen |
| Carabeillo-Services und Zugang | Carabeillo und Carabeo werden häufig verwechselt | kommunale Primärquelle oder datierter Field Check speziell für Carabeillo |
| Strand-/AMARA-Wegprofile | Kartenplausibilität ersetzt keine echte Route | gemessene Startpunkte, Gehzeit, Stufen, Gefälle und Rückkehrlogik je relevanter Unterkunft |
| Persönliche Restaurant-/Sundowner-Empfehlungen | Externe Reviews sind keine AMARA First-Hand Evidence | kurze Operator-Notizen pro tatsächlich besuchter Kombination |
| Casa-AMARA-Kücheninventar | Terrassen-Facts existieren, Küchenfunktionen aber nicht je Unit | Inventarmatrix für Farah, Lounis, Zaid und Maha mit Foto-/Operatorbeleg |
| Einkauf ab Casa AMARA | Dorfläden sind recherchiert, die Gastgeberroute nicht | datierter Walkthrough mit und ohne Auto; Strecke, Gelände und praktischer Trade-off |

## Nächster Arbeitsbatch

1. **Quellenprüfung und Normalisierung Strände:** Bestehende Nerja-/Maro-Owner wiederverwenden, nur echte neue Facts ergänzen und die Connection Matrix als nicht-öffentliche Synthese erhalten.
2. **Quellenprüfung und Normalisierung Einkauf/Food:** Supermarkt-Facts, Marktgrenze, lokale Produkte und Food-Facts trennen; bestehende Agriculture- und Property-Owner wiederverwenden.
3. **Provenienzkorrektur Klima und Wandern:** nur fehlende Direktquellen und stabile Attribute beschaffen; keine neue breite Deep Research.
4. **Restaurants bereinigen:** Betreiberfakten normalisieren, Ranking-/Review-Synthese ausschließen und Operator-Fragen in `05_OPERATOR_NOTES` vorbereiten.
5. **Erst danach Ownership/Coverage:** Fact-IDs auf narrative Eigentümer und begrenzte Kontextprojektionen verteilen. Die Connection Map entsteht aus dem jeweiligen Seiteninhalt und der echten nächsten Gastfrage, nicht aus einer generischen Linkliste.

## Veröffentlichungsstatus

- `src/content/`: unverändert
- Page Families und Komponenten: unverändert
- Routen, Registry, Resolver, Schema und Verträge: unverändert
- Roharchive in Google Drive: unverändert, abgesehen von den bereits normalisierten Dateinamen
- Fact-Normalisierung: noch nicht begonnen
- Öffentliche Verlinkung: noch nicht begonnen
