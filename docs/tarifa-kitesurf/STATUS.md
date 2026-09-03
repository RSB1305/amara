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

## Was als Nächstes ansteht

- Betrieb: `OPEN_METEO_API_KEY` in Cloudflare Pages setzen; Live-Test des Warnendpunkts mit `AEMET_API_KEY`.
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
