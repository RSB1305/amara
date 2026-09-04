# Tarifa-Kitesurf-Cluster — Stand 03.09.2026 (nach Stufe 7, 4, 5 und 6)

Übergabe an Claude Code. Alle inhaltlichen Vorarbeiten liegen in diesem Ordner.

## Was bereits umgesetzt und geprüft ist

### Stufe 1 — Routen (erledigt)

| Route | Rendert | Status |
|---|---|---|
| `tarifa-kitesurfing` | `TarifaKitesurfHubPage` | neu angelegt, fünfsprachig |
| `tarifa-wind-kitesurfing` | `TarifaKitesurfWindPage` | bestehende Route, Ziel gewechselt |
| `tarifa-kitesurf-spots` | `TarifaKitesurfSpotsPage` | unverändert |
| `tarifa-kitesurf-wind-spots` | — | entfernt |

Der Link-Token `tarifa_kitesurf_wind_spots` wurde vollständig durch `tarifa_wind_kitesurfing_authority` ersetzt; der Hub-Token heißt `tarifa_kitesurfing_hub`. Nachtrag: Der zweite „Weiter“-Link der Wind-Seite zeigt auf den Hub; die übrigen Related-Listen waren korrekt.

### Stufe 2 — Redaktion Deutsch (erledigt)

`src/content/tarifaKitesurfWindContent.ts` trägt den freigegebenen deutschen Text. Ermessensentscheidung zum Gegenlesen: Der Halbsatz „dafür braucht ihr eine eigene Rescue-Card“ wurde als Kaufaufforderung im Rescue-Kontext weggelassen; „Beim reinen Materialverleih ist sie es nicht“ steht.

### Stufe 3 — Gestaltung und fehlende Inhalte (erledigt)

Sektionen auf `LocationModule` (Gutter und Flächen in der flush gesetzten Autoritäts-Hülle), Body-Rolle für Fließtext, Hero-Bild im eigenen 3:2-Format. Beschriftete Windguru-Beispielzeile (`src/components/experience/WindguruExampleRow.astro`), Zitatblöcke mit Foto für Robert und Mark, privater Rescue-Block und Notfallblock klar getrennt. Marks drei Zitate, das Rescue-Zitat, der Gezeiten-Absatz und die Schlusszeile in allen fünf Sprachen.

### Stufe 7 — ES, EN, NL, SV (erledigt)

62 Schlüssel nativ neu formuliert; keine Sprache stellt AEMET mehr als Forecast-Quelle des Live-Briefings dar. Paritätstest grün.

### Stufe 4 — Open-Meteo-Gateway (erledigt, Live-Abruf steht aus)

`weather-gateway/open-meteo-kite.mjs` und `functions/api/weather/tarifa-kite.js`, Endpunkt `/api/weather/tarifa-kite`, nach dem Cloudflare-Muster der AEMET-Anbindung (Key aus der Umgebung, Edge-Cache, Key nie im Client).

- Modelle explizit konfiguriert: Wetter `icon_eu` (DWD ICON-EU), Wellen `dwd_ewam` (DWD ICON Wave/EWAM). Kein `best_match`.
- Anfragekoordinate 36.03 / −5.63 (Playa de Los Lances); Rasterkoordinate und Offset je Abruf im Payload, kein publizierter Maximalabstand. `generationtime_ms` wird nicht ausgegeben.
- Felder gemäß Datenmatrix: Wind, Böen, Richtung, Wolkenschichten, Einstrahlung, Gesamtwelle, Windwelle, Swell, Sekundärswell, je Stunde für zwei Tage in Europe/Madrid.
- Fällt das Wellenmodell aus, bleibt das Windbriefing stehen; der Payload weist `marine.status = unavailable` aus. Fällt das Wettermodell aus: 503 ohne Pseudo-Werte.
- Contract-Tests in `tests/contracts/weatherGateway.test.ts` (Normalisierung, Teilausfall, Fehlerfall, Key-Schutz).

**Offen für den Betrieb:** `OPEN_METEO_API_KEY` als Server-Secret in Cloudflare Pages setzen (kommerzielles Open-Meteo-Abo; Customer-Hosts `customer-api` / `customer-marine-api`). Beim ersten Live-Abruf prüfen, dass `dwd_ewam` für die Meerenge Werte liefert; sonst liefert die Seite ehrlich „Wellenmodell ohne Werte“.

### Stufe 5 — Live-Briefing und Erklärschicht (erledigt)

`src/components/location/KiteBriefingPanel.astro` mit Satzbibliothek `src/content/tarifaKiteBriefingContent.ts` (fünf Sprachen, zur Autorenzeit geschrieben). Deterministische Regeln im Client wählen je Situation eine Variante: Böigkeit (Abstand Böe–Grundwind ≥ 8 kn), Trend (Anstieg/Abfall ≥ 6 kn in den nächsten sechs Stunden), Seegang (Windwelle und Swell ≥ 0,3 m aus Richtungen > 60° auseinander → kreuzend; Gesamtwelle < 0,4 m → klein), Wolken/Einstrahlung beschreibend. Kein Sprachmodell zur Laufzeit; Freigabe, Kitegröße, Spotwahl, Score und Rescue-Zusage existieren in der Bibliothek nicht. Attribution sichtbar am Datenobjekt: Open-Meteo, Modell-ID, Originalquelle DWD, Abrufzeit, Gültigkeitsstunde, Link „Weather data by Open-Meteo.com“, Wellendaten ICON Wave · DWD. Fallback laut Seitentext. Mit Fixture im Browser geprüft (Desktop, Mobile, Fehlerzustand).

### Stufe 6 — AEMET-Warnblock (gebaut; Live-Test mit Warnobjekt steht aus)

**Zonen-Verifikation.** Zwei amtliche Quellen stimmen überein: das Meteoalerta-Zonenverzeichnis (METEOALERTA_ANX2, Version 1, 31.05.2022) führt `611104 Estrecho, Cádiz, Andalucía, mar = 1`; AEMETs eigene Gemeindeseite für Tarifa (id11035) nennt „Zona de avisos: Estrecho“ und verlinkt `avisos?w=hoy&l=611104`. Küstenphänomene tragen laut CAP-Profil (METEOALERTA_ANX3) den Zonencode mit angehängtem `C`, also `611104C`; das Gateway filtert beide.

**Umsetzung.** `weather-gateway/aemet-warnings.mjs`, `functions/api/weather/tarifa-warnings.js`, Endpunkt `/api/weather/tarifa-warnings`: AEMET OpenData `avisos_cap/ultimoelaborado/area/61`, zweistufiger Download, tar (auch gzip) mit CAP-1.2-XML, Filter auf Zone, nur `status Actual` und `msgType Alert/Update`, abgelaufene Meldungen verworfen, `severity Minor` als „Zone gelistet, keine Warnung“. Block `src/components/location/AemetWarningsPanel.astro` oberhalb des Modellbriefings: Warnstufe, Phänomen, Zone, Gültigkeit von–bis, Quelle AEMET, Abrufzeit, Link, Wortlaut von AEMET unverändert (spanisch, englische Fassung falls vorhanden). Keine Zusammenfassung, keine Relativierung, keine Verrechnung mit Open-Meteo. Contract-Tests mit synthetischem CAP-Archiv.

**Noch offen, vor Produktivschaltung:** Der letzte Verifikationsschritt aus dem Contract, ein Test gegen die offizielle API mit aktivem oder historischem Warnobjekt, wurde nicht ausgeführt, weil lokal kein `AEMET_API_KEY` vorliegt. Beim ersten Lauf mit Key zu bestätigen: (1) der Area-Code `61` (Andalucía) wird vom Endpunkt akzeptiert; (2) das Archivformat entspricht dem tar/gzip-Lesepfad; (3) eine echte Meldung für 611104 oder 611104C erscheint im Block. Bis dahin zeigt der Block bei Ausfall ehrlich „Warnstatus konnte nicht abgerufen werden“ und den externen AEMET-Link.

### Nachtrag — Werte-Seite und Windguru-Widget (Operator-Entscheidung vom 03.09.2026)

Die Wind-Seite behält die Erklärung (Windguru-Beispielzeile, Levante/Poniente, Regeln, Rescue, Partner). Die Live-Werte sind auf eine eigene Unterseite gezogen, damit die Wind-Seite schlank bleibt:

| Route | Rendert | Inhalt |
|---|---|---|
| `tarifa-kitesurf-forecast` | `TarifaKiteForecastPage` | AEMET-Warnblock und -Vorhersage, Open-Meteo-Briefing mit Erklärschicht, Windguru-Tabelle, Weiter-Links, Schlusszeile |

Token `tarifa_kitesurf_forecast`; Slug, Registry und Breadcrumb-Label registriert, Slug-Policy grün. Die Wind-Seite verweist mit einem Teaser-Block und einer Weiter-Karte auf die Werte-Seite.

**Windguru-Widget.** Abweichend vom Contract (kein fremdes JavaScript) auf ausdrückliche Anforderung des Operators eingebunden, als Kompromiss per Lazy Load: `src/components/experience/WindguruWidget.astro` lädt das Skript von windguru.cz erst, wenn die Tabelle ins Bild scrollt (IntersectionObserver, 200 px Vorlauf). Vorher geht keine Anfrage an windguru.cz; im Browser geprüft. Spot 43, Modell 37, Knoten, Sprache je Locale (Schwedisch fällt auf Englisch zurück, Windguru bietet kein Schwedisch). CSP in `public/_headers` um `https://www.windguru.cz` für script-src, img-src und connect-src erweitert.

### Stufe 8 — Co-Branding AMARA × Tarifa Surf Club (Operator-Entscheidung vom 03.09.2026)

Hub und Spokes stellen AMARA und den Tarifa Surf Club als zwei gleichwertige Partner dar: Unterkunft und Kiteschule, getrennt buchbar oder zusammen. Inhaltliche Quelle ist ausschließlich `redaktions-contract.md` §17 (Team, Kurse, Camps, Club-Unterkünfte, Bildungsurlaub, Verleih), geprüft am 03.09.2026 auf tarifasurfclub.com und worksurfbalance.com.

| Datei | Rolle |
|---|---|
| `src/content/tarifaKitesurfHubContent.ts` | Hub-Inhalt in fünf Sprachen und `kiteCoBranding` (Band-Texte, Club-Links, WhatsApp-Vorlage) |
| `src/components/experience/KiteCoBrandingBand.astro` | Signaturband: AMARA-Wortmarke × Club-Logo, zwei Kontaktwege; auf Hub, Wind-, Spots-, Werte-Seite und allen Spokes |
| `src/page-families/location-authority/TarifaKitesurfHubPage.astro` | Hub neu: Partnerkarten, fünf Einstiege (Anfänger, Fortgeschrittene, Camp, Bildungsurlaub, Material), Nebensaison, Club-Unterkünfte mit Namen, Wissen, Geschichte |
| `src/content/tarifaKitesurfContent.ts` | Spokes neu: Kiteschule (Semi-privat, Privat, Help 2 Kite), Kitecamp (Kurs, Help 2 Kite, Premium; Nebensaison, Unterkünfte, Bildungsurlaub), Material (Freeride/Wave-Set, Hydrofoil, Verleih + Help 2 Kite, Einzelteile; Kaution, Test & Buy) |
| `src/page-families/location-authority/TarifaKitesurfSpokePage.astro` | Spoke-Layout: Faktenleiste, Angebotskarten mit Preis, Stand und Club-Link, Erklärmodule, Stimme, Band, Weiter-Karten |

Regeln: Preis als Zahl auf der Karte, Einheit und Staffel in der Notiz, Stand „3. September 2026“ unter jeder Preisliste, Buchung und Rechnung laufen über den Club. Club-Unterkünfte mit Namen (TSC Guesthouse, Palomaview Penthouse, Casa Maresia) neben AMARA Family & Surf. Bildungsurlaub verweist auf worksurfbalance.com. Keine Schülerzahlen („Hunderte“), bis Mark eine Zahl freigibt. Das OG-Bild `mark-robert-tarifa-surf-club.webp` ist in den Kontrakt der veröffentlichten Bilder aufgenommen (148 Pfade).

Prüfung: typecheck 0 Fehler, Parität grün, 127 Kontrakttests, voller Build mit allen Gates, Screenshots Desktop und Mobil (Hub, Schule, Camp, Material, Band auf Wind-, Spots- und Werte-Seite).

### Stufe 9 — Hub wiederhergestellt, Partner-Spoke `amara-tarifa-surf-club` (Operator-Entscheidung vom 03.09.2026)

Der Hub aus Stufe 8 stellte die Kooperation ins Zentrum und war damit kein Autoritäts-Hub für „Kitesurfen in Tarifa“ mehr. Beschluss: Die Inhalte von Stufe 8 ziehen eins zu eins auf einen vierten Spoke um, der Hub kehrt zur alten Struktur zurück und bekommt die alten Guide-Abschnitte als Rückgrat.

| Route | Rendert | Inhalt |
|---|---|---|
| `tarifa-kitesurfing` | `TarifaKitesurfHubPage` | H1 „Kitesurfen in Tarifa“, Lead, Faktenleiste, Einstiegskarten (Schule, Camp, Material, Partnerseite), Guide-Abschnitte Windsysteme / wichtige Bereiche / Check vor dem Start mit Weiter-Links auf Wind-, Spots- und Werte-Seite, Sicherheitshinweis, Partnermodul mit Foto und Logo, FAQ, Quellen, Basis-Abschluss |
| `amara-tarifa-surf-club` | `TarifaKitePartnerPage` | Zwei Partner, wer was macht, fünf Einstiege, Nebensaison, Unterkünfte beider Partner mit Namen, Wissen, Geschichte |

Textbasis des Hubs ist `tarifaGuideContent.wind` (Wind-Thema des Tarifa-Guides), geprüft gegen den Contract: keine Blacklist-Treffer, kein AEMET-als-Forecast. Ergänzt um zwei FAQ aus §17 (Kurstag-Preise mit Stand 3. September 2026; beste Zeit mit Camp-Saison und Spotwegen aus §17b) und den Hinweis, dass auch direkt beim Club gebucht werden kann. Token `amara_tarifa_surf_club`; Slug, Registry, Breadcrumb „AMARA × Tarifa Surf Club“ und Seitenfamilie `experience-tarifa-kite-spoke` registriert. Inhaltsmodul `tarifaKitesurfHubContent.ts` wurde zu `tarifaKitePartnerContent.ts`. Das Band verlinkt zusätzlich die Partnerseite; auf der Partnerseite selbst gibt es kein Band.

Prüfung: typecheck 0 Fehler, Slug-, Fallback-, Bild- und Typografie-Policy grün, 127 Kontrakttests, voller Build mit allen Gates, Screenshots Desktop und Mobil.

### Stufe 10 — Vermittlung: AMARA-Raster für den Cluster, Muster am Hub (Operator-Entscheidung vom 03.09.2026)

Befund: Die Kite-Seiten trugen das Zwei- bis Vierfache an Text gegenüber den bestehenden AMARA-Seiten, wiederholten sieben- bis zwölfmal denselben Block aus Eyebrow, Titel, Einleitung und Kartenraster mit wechselnder Tönung, hatten bis zu 14 Buttons pro Seite, kein Fett, eine eigene FAQ-Variante und eine eigene Quellenliste. Entscheidung: Substanz bleibt, Vermittlung ändert sich. Das Muster ist die AMARA-Themenseite (Strände-Guide): Haarlinien statt Tönungsteppich, Titel links und Text rechts, ein Kartenraster pro Seite, eine Kontaktleiste, der gemeinsame FAQ-Baustein `FaqAccordion`, die kompakte Quellenliste als neuer gemeinsamer Baustein `src/components/editorial/EditorialSources.astro`, und je Absatz eine fett gesetzte Phrase über `InlineEmphasis` (Markierung `**…**` im Inhalt, für den Hub in `tarifaGuideContent.wind` in allen fünf Sprachen gesetzt).

Umgesetzt am Hub `tarifa-kitesurfing`. Reihenfolge der Seiten danach: Wind, Spots, Werte-Seite, Kiteschule, Kitecamp, Material, Partnerseite, jeweils mit Screenshot zur Abnahme. Die freigegebenen Texte bleiben Wort für Wort; Vertiefungen werden eingeklappt, nicht gestrichen. Bilder als eigener Schritt nach Rechtefreigabe.

### Stufe 11 — Durchgezogene Trennlinien projektweit gesperrt (Operator-Meldung vom 03.09.2026)

Befund: Der Hub aus Stufe 10 zeichnete seine Sektionsgrenzen mit Tailwind-Klassen (`border-b`) auf den Außenbändern; die Linie lief bis an den Rahmen des weißen Seitenkörpers statt im Raster zu enden. Der bestehende CSS-Guard griff nicht, weil die Bänder ein eigenes `data-am-section`-Attribut trugen; auf anderen Seiten scheiterte er an Wrapper-Elementen. Gleiche Muster lagen in 38 Außenbändern von 16 Dateien (Nerja, Tarifa, Frigiliana, Experience, Authority-Bausteine).

Maßnahmen: (1) Build-Gate `scripts/check-section-boundary-policy.mjs`, in `prebuild` und `npm run check`; es scheitert für jedes Außenband mit Seitenraster (`px-6 md:px-12`), das `border-t`, `border-b` oder `border-y` trägt, sowie für jeden `AmaraSection`- oder `LocationModule`-Aufruf mit solcher Klasse. (2) CSS-Guard in `global.css` gehärtet: greift jetzt für jedes Kind der Seite unabhängig von Attributen und für jedes Rasterband in beliebiger Tiefe. (3) Alle 38 Außenbänder bereinigt. (4) Hub und `EditorialSources` auf `LocationModule` gestellt; Trennlinien kommen dort vom zentralen Inset-Owner. Register 1.66.0 und `AGENTS.md` ergänzt. Prüfung im Browser: kein rahmenbreites Element mit Rand mehr auf Hub, Strände, Frigiliana Lage, Erlebnisse, Kiteschule, Partnerseite.

### Stufe 12 — Live-Briefing auf AEMET umgestellt, nur Kite-relevante Werte (Operator-Entscheidung vom 04.09.2026)

Entscheidung: kein Open-Meteo-Abo; die kostenlose Open-Meteo-API ist nicht-kommerziell. MET Norway wurde geprüft und liefert für Tarifa keine Böen, deshalb kommt alles aus zwei amtlichen AEMET-Produkten: Stundenvorhersage Tarifa (11035) für Wind, Böen, Richtung, Himmel, Temperatur, Regen und Sonnenuntergang, Strandvorhersage Los Lances (1103506) für Wellengang und Wassertemperatur. Contract §18 hält Quellen, Feldregeln und Attribution fest.

| Datei | Rolle |
|---|---|
| `weather-gateway/aemet-kite.mjs` | Neues Gateway: zweistufiger OpenData-Abruf beider Produkte, km/h → kn, Kompass → Grad, Himmelscodes → Kategorien, Ortszeit mit Offset, Strandprodukt optional; ersetzt `open-meteo-kite.mjs` |
| `functions/api/weather/tarifa-kite.js` | Route auf das neue Gateway, Schlüssel `AEMET_API_KEY` |
| `src/content/tarifaKiteBriefingContent.ts` | Satzbibliothek neu: fünf Zeilen (Wind, Trend, Wasser, Himmel, Amtlich), Himmels- und Wellenbegriffe, Ausblick morgen, in fünf Sprachen |
| `src/components/location/KiteBriefingPanel.astro` | Panel neu nach dem freigegebenen Muster: Jetzt-Zeile, fünf Zeilen, Tabelle der nächsten sechs Stunden, Morgen-Zeile, Prüfsatz, Attribution; liest zusätzlich den Warnendpunkt |
| `tests/contracts/weatherGateway.test.ts` | Open-Meteo-Tests ersetzt durch neun AEMET-Kite-Tests (Normalisierung, Strand, Zwei-Schritt-Download, Ausfall Strand, Fail-closed, Cache) |

Geprüft: Normalisierung auf einem echten AEMET-Stundenpayload (Home-Assistant-Fixture), Panel im Browser mit Fixture-Daten in DE und EN, typecheck, 130 Kontrakttests, voller Build. **Noch offen:** Live-Abruf der beiden Produkte mit echtem Schlüssel; lokal liegt kein `AEMET_API_KEY`. Erster Lauf auf Staging nach dem nächsten Release, dabei prüfen, dass das Strandprodukt 1103506 antwortet und die Böen ankommen. `OPEN_METEO_API_KEY` ist nicht mehr nötig.

### Stufe 13 — Hub in neuer Stimme (Operator-Auftrag vom 04.09.2026)

Vorlage: `entwurf-hub-stimme.md` (Entwurf vom 04.09.2026), mit einer Änderung des Operators: Überschriften sagen die Sache selbst („Morgens Kaffee auf der Terrasse, mittags Wind, abends Altstadt“) statt sie anzukündigen („So sieht ein Tag hier aus“). Die Ankündigung wandert in die Eyebrow.

Neue Reihenfolge des Hubs: Hero (Ort, H1, Unterzeile, Lead, Pull-Line) · Faktenleiste als Orientierung (Levante, Poniente, Los Lances) · vier Prosa-Abschnitte (Warum Tarifa, Ein Tag, Kiten lernen, Wohnen bei AMARA) · Mark und Robert · Sicherheit einmal · drei Weiter-Karten (Kiten lernen, Wind/Spots/heute, Partnerschaft) · FAQ · Quellen · Basis-Abschluss. Footer-Links: Anreise, Unterkünfte, Strände, Ort, Kitesurf-Spots, Verfügbarkeit.

| Datei | Änderung |
|---|---|
| `src/content/tarifaGuideContent.ts` | `TarifaGuideSection` kann `paragraphs` statt `cards` tragen; Hero hat optional `accent`. Wind-Thema neu: SEO-Titel und -Beschreibung, Hero, Fakten, vier Prosa-Abschnitte, Hinweis, Partnerschaft (Titel, Intro, Notiz, Kontakt), Quelle GKA-Jugend-WM. Alle fünf Sprachen; Deutsch ist die Referenz. FAQ unverändert. Version `2026-09-04-tarifa-kitesurfing-hub-v4.0` |
| `src/page-families/location-authority/TarifaKitesurfHubPage.astro` | Prosa-Abschnitte im Themenraster (Titel links, Text rechts), Partnermodul vor dem Sicherheitsband, drei Karten am Ende, Basis-Abschluss mit eigener Begründung, Footer-Links |
| `src/page-families/location-authority/TarifaGuidePage.astro` | Guard für optionale Karten |

Entscheidungen zu den offenen Fragen des Entwurfs: „Weltmeisterschaften“ ist als **Jugend-Weltmeisterschaft** belegt (GKA Youth Kite World Championships Tarifa 2025 und 2026; auf der Haupttour 2026 ist Tarifa keine Station, deshalb nicht „Stationen der Kite-Weltserie“). „Einer der besten Kitespots Europas“ steht als „gilt als“. Keine Zahlen außer in FAQ-Preisen. Guesthouse: „bucht ihr direkt bei Mark“ statt „vermitteln wir“, weil der Club seine Unterkünfte selbst verkauft. Abweichungen von der Vorlage wegen `AGENTS.md` (kein Wert über Verneinung, Gäste immer im Plural): „Kein Hype“ entfällt zugunsten der Pull-Line, „nicht trotz des Windes, sondern wegen ihm“ und „kein Anfängerteich“ positiv umformuliert, „Wenn du … kannst“ wird „Wer … kann“. „Platz für vier“ wurde „Platz für zwei oder eine kleine Familie“ (Wohnungsdaten: Hochbett, Treppe).

**Nachtrag 04.09.2026, nur Deutsch (Operator-Entscheidung):** Ab hier wird zuerst der deutsche Text fertig gemacht, die anderen vier Sprachen folgen am Ende in einem Zug. Damit tragen ES, EN, NL und SV vorübergehend den alten Text, wo Deutsch schon neu ist:

- Hub-FAQ `tarifaGuideContent.wind.faq`: acht Antworten in der neuen Stimme, Fragen aus Gästesicht („Können wir …?“). Fakten unverändert aus §17; Pflichtsatz zu Bojen und Beschilderung in der Los-Lances-Antwort.
- Wind-Seite `tarifaKitesurfWindContent.ts`: 78 deutsche Schlüssel neu, H1 jetzt „Wind in Tarifa“, Unterzeile „Levante, Poniente, und die Tabelle, auf die hier morgens alle schauen“. AMARA-Stimme durchgehend wir/ihr, Überschriften sagen die Sache selbst („Bei Flut wird Los Lances schmal“, „1 km ist feiner als 9 km, aber nicht genauer“). Unverändert: Roberts Passage, Marks vier Zitate, der Pflichtsatz, die Bindung der 35 kn an New Angels, die Trennung privat/staatlich, Rescue nur bei Kurs, Camp und Help 2 Kite. Deutsche Labels, die auf die Seite zeigen, auf „Wind in Tarifa“ nachgezogen (Breadcrumb in `resolve-structured-data.ts`, Karten auf Werte- und Partnerseite, Nav-Label in `tarifaKitesurfContent.ts`).
- Offen, vom Operator angesprochen: Die Live-Werte (AEMET-Warnungen, Stundenbriefing, Windguru-Tabelle) wieder auf die Wind-Seite ziehen statt auf `tarifa-kitesurf-forecast`. Das kehrt den Nachtrag vom 03.09. um und ist ein Strukturumbau; vor dem Bauen abstimmen.

### Stufe 14 — Cluster-Leiste unter dem Hero (Operator-Entscheidung vom 04.09.2026)

Befund des Operators: Die Kite-Seiten sind unübersichtlich, es fehlt eine Subnavigation. Entscheidung: eine Leiste direkt unter dem Hero, auf allen acht Seiten des Clusters gleich, aktuelle Seite markiert. Nicht in der Kontextzeile, weil DR-IA-006 dort keine dritte dauerhafte Ebene erlaubt und der Wortlaut der Kontextzeile in Browser-Tests gepinnt ist.

`src/components/experience/KiteClusterNav.astro`: schlankes dunkles Band **über dem Hero**, direkt unter der Kontextzeile, nach drei Operator-Korrekturen am 04.09.: (1) unter dem Hero lag es eine Bildschirmhöhe tief und war in `am-text-nav-context` zu klein; (2) ein blaues Band mit Kolumnentitel war zu laut; (3) endgültig: schwarz statt blau, kleiner, linksbündig, ohne den Themennamen. `AmaraSection` mit `surface="inverse"`, `bg-inverse-surface` und `py-0`; die acht Seiten linksbündig in `am-text-nav-primary` (12 px, wie die Hauptnavigation), aktive Seite in voller Helligkeit mit Linie direkt unter dem Wort, die anderen gedämpft. Kein eigenes Farbtoken, keine eigene Schriftrolle mehr. Reihenfolge Überblick · Wind · Spots · Heute · Kiteschule · Kitecamp · Material · Partnerschaft, Labels in fünf Sprachen im Modul; auf dem Handy horizontal scrollbar. Seit dem 04.09. auf allen acht Seiten (Hub, Wind, Spots, Werte, Kiteschule, Kitecamp, Material, Partnerseite), jeweils direkt nach dem `<article>`-Anfang vor dem Hero; die Spoke-Familie bildet ihre `spoke`-Id auf die Cluster-Id ab. **Die aktuelle Seite fehlt im Band** (Operator-Entscheidung 04.09.: „immer das Aktive rausnehmen“), es zeigt nur die sieben anderen Ziele; das Band trägt `data-am-kite-cluster-current` mit der weggelassenen Seite.

Abnahme 04.09. mit zwei Korrekturen: Band von 52 auf 44 px (nur noch die Linkhöhe, kein Außenabstand), und deutsche Begriffe präziser, ohne dass jedes Wort mit „Kite“ beginnt: Überblick · Windsysteme · Kitespots · Windvorhersage · Kiteschule · Kitecamp · Material & Verleih · AMARA × Tarifa Surf Club. Die vier anderen Sprachen sind am 04.09. nachgezogen (Kite spots · Wind & forecast · Kite school · Kitecamps · Gear rental & shop · AMARA × Tarifa Surf Club und die Entsprechungen in ES, NL, SV); Bildungsurlaub bleibt nur im deutschen Band. Offen laut Operator: Das Band nutzt die Schriftrolle der Hauptnavigation, sitzt aber unterhalb der Kontextzeile; die Hierarchie wird später geklärt.

Vierte Korrektur 04.09. (abgestimmt): neue Reihenfolge und Begriffe, deutsch: Überblick · Kitespots · Wind & Vorhersage · Kiteschule · Kitecamps · Bildungsurlaub · Materialverleih & Shop · AMARA × Tarifa Surf Club. Windsysteme und Windvorhersage sind ein Eintrag auf die Wind-Seite; die Werte-Seite bleibt über den Teaser erreichbar, bis der Zusammenzug der Seiten entschieden ist. **Bildungsurlaub** ist eine eigene Route `tarifa-bildungsurlaub` (Token `tarifa_bildungsurlaub`, Slug-Liste, Registry, Breadcrumb-Label, Familie `TarifaBildungsurlaubPage`), auf Wunsch des Operators vorerst ein Platzhalter mit den §17a-Fakten und Links auf Kitecamp-Abschnitt und Work Surf Balance, `robots: noindex, follow` bis der Text steht; im Band nur auf Deutsch, in den anderen Sprachen per URL erreichbar. Das Band trägt dafür ein `languages`-Feld je Eintrag.

Dritte Korrektur 04.09.: Die fette Versalschrift auf Schwarz war noch zu mächtig. Neuer Modifikator `am-text-nav-primary--quiet` in `global.css` (gleiche Schrift, Größe, Laufweite und Versalien, Gewicht 400 statt 700); ein heller Hintergrund wurde kurz probiert und verworfen, das Band bleibt schwarz (`bg-inverse-surface`).

### Stufe 15 — Partner-Logo-Band über dem Footer (Operator-Entscheidung vom 04.09.2026)

Gegenstück zum Cluster-Band oben: `src/components/experience/KitePartnerLogoBand.astro`, schwarzes `LocationModule` (inverse, compact) als letztes Element jeder der acht Kite-Seiten, direkt über dem Footer. WSB und Airush links, das runde Club-Logo größer in der Mitte (verlinkt auf tarifasurfclub.com), Vaerial und Core rechts; VDWS bewusst weggelassen (Verband, keine Marke). Auf Wunsch des Operators so flach wie beim Club: `AmaraSection` inverse mit `py-0`, innen 20–24 px Abstand, flache Logos nach Breite gesetzt, damit die fünf als eine Familie wirken (WSB und Airush 160 px, Vaerial 192 px, Core 208 px breit), Club-Logo 112 px, Band am Desktop 136 px hoch, am Handy 246 px mit Club-Logo oben und den vier flachen in zwei Reihen. Die Zeile „Partner des Tarifa Surf Club“ ist nur noch für Screenreader vorhanden (`sr-only`), sichtbar sind allein die Logos. Alle fünf Logos verlinken extern (Operator, 04.09.): worksurfbalance.com, airush.com, tarifasurfclub.com, vaerial-kiteboarding.com, ridecore.com. Logos vom Operator geliefert (weiß auf transparent), abgelegt unter `src/assets/images/content/tarifa/logos/` in Kleinschreibung (`airush`, `core`, `tarifa-surf-club`, `vaerial`, `wsb`, alle WebP; das PNG von WSB verlustfrei umgewandelt), als importierte Assets über `AmaraImage`. Das Co-Branding-Band `KiteCoBrandingBand` ist entfernt; die Kontaktknöpfe stehen auf jeder Seite im Partner- oder Schlussmodul, `kiteCoBranding` bleibt als Inhalt für die Partnerseite. „Tarifa Surf Club Logo.jpg“ (mit Leerzeichen, opak) bleibt unversioniert liegen.

### Stufe 16 — Bildungsurlaub-Seite mit Inhalt, deutsch (Operator-Auftrag vom 04.09.2026)

`src/content/tarifaBildungsurlaubContent.ts` (nur Deutsch, Übersetzung am Ende) und `TarifaBildungsurlaubPage.astro`: Deutsch rendert die volle Seite und ist `index`, die vier anderen Sprachen behalten den Platzhalter mit `noindex`. Quelle ausschließlich worksurfbalance.com (Angebot, Seminarseiten KI Kompakt, KI Advanced, MH Reset, Anerkennung, Team) und tarifasurfclub.com, abgerufen am 04.09.2026. Abschnitte: Die Woche (Mo–Fr Seminar, neun Stunden Kiten an zwei bis drei Tagen), die vier Seminare mit Kombiterminen, Anerkennung in 13 Bundesländern mit den Regeln für NRW, Bayern und Sachsen, Preise 790 / 1.090 / 1.390 € plus 50 € je weitere Nacht mit Stand, alle Termine 2026 laut Anbieter ausgebucht, Wohnen bei AMARA (Work Surf Balance führt „Amara Apartment“ selbst als Unterkunft), Team (Lukas, Mark, Mona, Stefano; ISO 9001:2015), Anfrageformular, Quellen, Basis-Abschluss. **Formular:** Vorname, Nachname, E-Mail, Telefon, Nachricht & Terminwunsch, Bundesland (16), Seminarthema (6) wie beim Anbieter; „Nachricht erstellen“ öffnet das Mailprogramm mit der Vorlage des Operators („Hallo, liebes Work Surf Balance Team, wir sind über die AMARA-Webseite auf euch aufmerksam geworden …“) an bildungsurlaub@worksurfbalance.com plus den Feldwerten; ohne JavaScript postet das Formular als text/plain an dieselbe Adresse. Nichts wird bei AMARA gespeichert. Offen: eine Kopie an AMARA (`cc`) ist bewusst nicht gesetzt, Entscheidung des Operators.

## Was als Nächstes ansteht

- Betrieb: nach dem nächsten Release den Kite-Endpunkt auf Staging live prüfen (Stundenwerte, Böen, Strandprodukt).
- Bildstrecke Kite-Vibes: nach Rechteklärung 8 bis 12 Motive aus den Rohordnern auswählen, optimieren, in Hub-Galerie und Spoke-Heros einbauen.
- Release-Grenze gemäß `AGENTS.md`: gesammelte lokale Commits, einmal volle Validierung, dann ein Push, ein Pull Request, ein Merge.

## Dateien in diesem Ordner

- `redaktions-contract.md` — die einzige inhaltliche Quelle für die Wind-Seite.
- `seitentext-wind-de.md` — der freigegebene deutsche Seitentext.
- `bauauftraege.md` — sieben Stufen, einzeln abnehmbar, jede mit fester Dateiliste.

## Offene Punkte

- „Sea Angels“ wurde laut Mark umbenannt; welcher der beiden heutigen Anbieter daraus hervorging, ist ungeklärt. Der Name erscheint bis dahin nicht auf der Seite.
- Aufnahmeort für den Alt-Text von `mark-tarifa-surf-club.webp`: Der Alt-Text nennt bewusst keinen Ort.
- `npm run build` verlangt lokal `PUBLIC_SITE_URL`; der Lauf gemäß `AGENTS.md`: `ASTRO_TELEMETRY_DISABLED=1 PUBLIC_SITE_URL=https://amara-lodging.es npm run build`.
- Mark hat keine Schülerzahl freigegeben; „Hunderte“ oder Ähnliches bleibt bis dahin draußen.
- Fotos: Unter `src/assets/images/content/tarifa/` liegen acht unversionierte Rohordner (Twintip, Big Air, Control Bar, Mark, Rider Profiles, Surf Directionals, Yellow Kite Focus, Guest House; rund 450 Dateien, etwa 4,7 GB; Fotografen laut Drive Sebastian Lang, Max Gifted, Andre Magaro). Bewusst nicht committet: Nutzungsrechte nicht dokumentiert, Rohgröße nicht repo-tauglich. Vor Nutzung: schriftliche Freigabe von Club und Fotografen, Auswahl von 8 bis 12 Motiven, Umwandlung nach WebP, dann Hub-Galerie und Spoke-Heros.
- Hub-Hero: Board-Foto `tarifa-kite-board-sand.webp` (Quelle `_DCS1448_Sebastian_Lang.jpg`, Fotograf laut Dateiname Sebastian Lang, Einsatz auf Anweisung des Operators vom 03.09.2026). Schriftliche Freigabe des Fotografen noch nicht dokumentiert; vor dem Release nachtragen.
- Release: PR #66 am 03.09.2026 per Merge-Commit `b945d1c` auf `main`, CI grün (Build-Job mit 127 Kontrakttests, Browser-Job mit 84 Tests), Staging-Deployment `a2788303` live.
- AEMET-Warnblock: Live-Test bestanden am 03.09.2026 auf Staging. `/api/weather/tarifa-warnings` antwortet 200 mit Zone 611104 „Estrecho“, Area-Code 61 wird akzeptiert, das Archivformat wird gelesen; zum Testzeitpunkt 0 aktive Meldung(en). Damit ist der offene Punkt aus Stufe 6 geschlossen.
- Open-Meteo entfällt (Stufe 12); der Kite-Endpunkt läuft nach dem nächsten Release über AEMET mit dem vorhandenen Schlüssel.
