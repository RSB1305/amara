# Redaktions-Contract — Spoke „Wind, Wetter & Sicherheit beim Kitesurfen in Tarifa"

**Route:** `tarifa-wind-kitesurfing` (bestehender kanonischer flacher Slug, bleibt — die Seite behält ihre URL und rendert künftig die Wind-Seite)
**Rolle:** Spoke des Hubs `tarifa-kitesurfing`
**Hub:** `tarifa-kitesurfing` — neue Route, rendert die bestehende `TarifaKitesurfHubPage`
**Schwester-Spoke:** `tarifa-kitesurf-spots`
**Zu entfernen:** `tarifa-kitesurf-wind-spots` samt Slug- und Registry-Eintrag (Duplikat ohne Navigation)
**Abgrenzung:** `tarifa-weather` ist die Familien-Wetterseite (Sonne, Temperatur, UV) und bleibt unangetastet. Kitesurfen braucht andere Daten; die beiden Seiten überschneiden sich nicht.
**Sprachen:** ES, DE, EN, NL, SV
**Stand der Faktenlage:** 03.09.2026
**Quelle:** Verifikationsdossier „Wind, Wetter & Sicherheit beim Kitesurfen in Tarifa", Google Drive

---

## 0. Wie dieses Dokument zu benutzen ist

Dieses Dokument ist die **einzige** inhaltliche Quelle für die Seite. Was hier nicht steht, kommt nicht auf die Seite — auch dann nicht, wenn es plausibel klingt, in einem Blog steht oder ein Modell es „weiß".

Ausdrücklich **nicht** als Quelle verwenden: das ältere Drive-Dokument „Zusammenfassung der verifizierten Erkenntnisse" (03.09., 08:13). Es enthält vier Aussagen, die durch die spätere Verifikation widerlegt sind — Sea Angels als Anbieter, Windy als Tool-Empfehlung, eine implizite Rescue-Kaufaufforderung und ein Kitegrößen-Beispiel.

---

## 1. Die vier Informationsklassen

Die zentrale Regel der Seite. Jede Aussage gehört genau einer Klasse an, und die Klassen dürfen sprachlich und visuell nicht ineinanderlaufen:

| Klasse | Beispiel | Darf niemals werden |
|---|---|---|
| **Amtliche Regel** | Kitesurf-Verbot in der Lagune | verhandelbar, relativiert |
| **Modellierter Wetterwert** | 18 kn Wind auf 10 m um 14 Uhr | eine Fahrfreigabe |
| **Privates Rescue-Angebot** | New-Angels-Voucher, 35 kn | eine Sicherheitsgarantie |
| **Persönliche Erfahrung (Robert)** | „Poniente ist für mich das Tarifa-Kiten" | eine meteorologische Regel |

Keine dieser Klassen darf semantisch in eine Erlaubnis zum Kiten übersetzt werden.

**Schlusssatz der Seite, sinngemäß immer:**
> Forecasts sind Modellrechnungen, keine Fahrfreigabe. Amtliche Warnungen und lokale Regeln haben eine eigene Priorität. Beschilderung, Bojen und aktuelle Anordnungen vor Ort gehen vor.

---

## 2. Seitenstruktur (freigegeben)

1. **H1 + kurzer Einstieg** — setzt sofort den Rahmen: Prognose ≠ Fahrfreigabe
2. **Amtlicher Warnblock (AEMET)** — steht über dem Modellbriefing; bis zur Zonenverifikation nur externer Link
3. **Heute in Tarifa** — Live-Briefing aus Open-Meteo
4. **Windguru richtig lesen** — Modelle, Raster, Böen, Welle, Swell, Wolken
5. **Levante, Poniente & Thermik** — inklusive Roberts persönlicher Passage
6. **Sicherheit ohne Panik** — Zonen, Lagune, nie allein
7. **Rescue: privat vs. Seenot** — zwei visuell klar getrennte Blöcke
8. **Tarifa Surf Club & AMARA** — Kurse, Material, Kaution (ein Block, nicht zwei)
9. **AMARA-Basecamp** — kompakt, abgesetzt vom redaktionellen Text
10. **Weiter zu Spots / zurück zum Hub**

Der Live-Block sitzt bewusst weit oben: wer die Seite morgens öffnet, will die aktuelle Antwort, keine Windtheorie. Die Seite geht auch ohne ihn live — die Position wird jetzt festgelegt, der Block rutscht bei technischer Fertigstellung an seinen Platz. Kein Platzhalter, keine leere Box.

---

## 3. Ton

Hilfreich, glaubwürdig, persönlich, locker — wie unter Freunden am Frühstückstisch vor der Session. Kein Lehrervortrag, keine Textwüste, keine künstliche Coolness, keine SEO-Floskeln. Kurze humorvolle Sätze sind erwünscht, solange sie sachlich bleiben.

Tonbeispiele (Haltung, nicht wörtlich zu übernehmen):
- „Die grünen Sternchen bei Windguru sind nett. Sie übernehmen aber nicht dein Board."
- „Ein Sonnen-Icon ist kein Thermik-Versprechen."
- „Eine Rescue-Card ist Plan B — kein Freifahrtschein."

**Autorenblock:** Robert Böhmer · Gastgeber bei AMARA — Standardfoto und Standardverlinkung, kein Sonder-Hero.

**Zwei Stimmen.** Die Seite ist ein gemeinsamer Auftritt von Robert (AMARA) und Mark (Eigentümer Tarifa Surf Club). Beide erscheinen mit Gesicht und mit eigenen, wörtlich zitierten Aussagen — Robert für die Gastgeber- und Poniente-Perspektive, Mark für die lokale Kite-Perspektive. Zitate sind als Zitate ausgezeichnet, mit Name und Rolle, und stehen nie im Fließtext der amtlichen oder meteorologischen Abschnitte.

Der Kitesurf-Auftritt unterstützt den Tarifa Surf Club sichtbar, so wie der Club AMARA auf seiner Seite unterstützt. Das wird als das benannt, was es ist: eine Partnerschaft und eine Freundschaft, keine anonyme Empfehlung.

Wo Robert oder Mark aus eigener Erfahrung sprechen, muss das erkennbar sein. Wo amtliche Regeln oder Modellwerte beschrieben werden, ebenfalls.

---

## 3a. Gestaltungsanspruch

Der Spots-Spoke ist ausdrücklich **kein** Vorbild: er wirkt wie ein abgesetztes Textdokument. Für diesen Spoke und alle weiteren gilt:

- Kein Stapel gleichförmiger Textabschnitte. Jede Inhaltsklasse bekommt eine eigene visuelle Form — Live-Briefing als eigenständiges Datenobjekt, Windguru-Erklärung als beschriftetes Beispiel, Sicherheit und Notruf als klar abgesetzte Blöcke, Zitate als Zitate mit Gesicht.
- Die Windguru-Erklärung ist der Ort, an dem die Seite sichtbar mehr leistet als andere: eine beschriftete Beispielzeile, an der Mittelwind, Böen, Richtung, Welle, Periode und Modellzeile erklärt werden — nicht ein Absatz über Windguru.
- Bestehende AMARA-Komponenten, Tokens und Sektionsrhythmus. Kein neues Designsystem, aber auch keine Aneinanderreihung von `AuthorityTextSection`.
- Mobile-first, wie in `AGENTS.md` festgelegt.

---

## 4. Freigegebene Claims — amtliche Regeln und Zonen

| Claim | Zulässige Formulierung | Grenze |
|---|---|---|
| Kommunaler Strandplan | „Grundlage ist der kommunale Plan de Explotación de Playas 2024–2027." | Nicht „bis Ende 2027 unveränderlich" |
| Valdevaqueros | „Der amtliche Strandplan trennt in Valdevaqueros unter anderem Badebereiche, Bereiche für freie Wassersport-Ein-/Ausfahrt, Schulbereiche und gesonderte Kite-/Windsurfbereiche. Die genauen Grenzen werden vor Ort über Markierung und Bojenführung umgesetzt." | Keine selbst gezeichneten GPS-Grenzen |
| Los Lances Norte | „Los Lances Norte ist im amtlichen Plan nicht als einheitlich nutzbare Fläche dargestellt. Es gibt getrennte Bade- und Wassersportbereiche, dazu Schul-/Kanalbereiche und ökologische Schutzflächen." | Nicht „Los Lances Norte ist der Kitestrand" |
| **Lagune Los Lances** | „Im geschützten Lagunenbereich von Playa de Los Lances ist Kitesurfen amtlich verboten." Rechtsgrundlage (Decreto 262/2007 Abschnitt 4.g, Art. 61.7 Strandordnung) darf kurz genannt werden. | Verbot nicht auf unklar definierte andere Strandabschnitte ausweiten |
| Lances Sur Natural / Urbana | „AMARA zeigt hier keine selbst rekonstruierte Kite-Grenze. Maßgeblich sind der kommunale Strandplan und die Markierung vor Ort." | Keine Zonenkarte, keine Sommer-/Wintergrenzen aus alten Spot-Guides |

**Pflichtsatz, unverändert, in jedem Zonenkontext:**
> Beschilderung, Bojen und aktuelle Anordnungen vor Ort gehen vor.

Nicht durch „normalerweise gilt …" abschwächen.

---

## 5. Freigegebene Claims — Rescue und Notruf

### 5a. Private Wassersport-Rescue

Überschrift sinngemäß: **„Private Wassersport-Rescue — kommerzieller Anbieter, Bedingungen beachten"**

**Tarifa Rescue / New Angels** (tarifarescue.com, Stand 03.09.2026)
- Voucher: 1 Rescue 30 €, 2 Rescues 40 €, 5 Rescues 60 €
- Geltungsbereich laut Betreiber: Los Lances Norte und Valdevaqueros, bis 2 Meilen von der Küste
- Voucher-Bedingung des Anbieters: Wind nicht stärker als 35 kn
- Kontakt: +34 647 395 781 / +34 664 512 350, Polígono Industrial La Vega, Nave 602–603
- Auf der Website genannte Zeiten 10–14 und 17–20 Uhr sind **Abholzeiten am Standort**, keine Boots-Einsatzzeiten

**Sea Rescue** (searescue.es, Stand 03.09.2026)
- Karten: 1 × 30 €, 2 × 40 €, 5 × 60 €. Ohne Karte laut Betreiber 50/100/150 € je nach Entfernung und Suchaufwand; außerhalb regulärer Zeiten Materialabholung ab Hafen 300 €
- Stationen: Los Lances Norte nahe Chiringuito Agua und Valdevaqueros; angegebene Zone bis 1 km vom Strand
- Zeiten: Juni–September 11:00–20:00, Oktober 11:00–19:00, nach Zeitumstellung 11:00–18:00; Betreiber bezeichnet den Dienst als ganzjährig
- Eigener Rescue-Kanal VHF 76 und Telefon +34 633 95 31 88 — **ausschließlich** im privaten Anbieterblock

**Bindungsregel für die 35 kn.** Immer grammatisch an den Anbieter gebunden:
> „New Angels nennt für seinen Voucher aktuell eine eigene Bedingung von höchstens 35 kn Wind."

Niemals: „Rescue funktioniert bis 35 kn."

### 5b. Seenot / akuter Notfall

Eigener, visuell klar abgesetzter Block:
> **Seenot / akuter Notfall:** Salvamento Marítimo **900 202 202** · europaweiter Notruf **112** · Seefunk **VHF 16**

Private VHF-Kanäle dürfen niemals als amtliche Notrufkanäle erscheinen. Keine Aussage über Eintreffzeit, verfügbares Rettungsmittel oder Erfolg eines Einsatzes.

---

## 6. Verbotene Aussagen (Blacklist)

Diese Sätze und alles inhaltlich Gleichwertige dürfen nicht auf die Seite — nicht im Text, nicht im Schema, nicht in einem KI-generierten Abschnitt:

- „Ab 25 Knoten zahlt die Versicherung nicht mehr." (keine belastbare Quelle)
- „Die Bootsrettung kostet ohne Karte 240–280 €." (widerlegt)
- „Hubschrauber fliegen ab X Knoten nicht mehr." (Einsatzgrenzen sind Crew- und Einsatzleitungsentscheidung)
- „Rescue funktioniert bis 35 kn." / jede Verallgemeinerung der New-Angels-Grenze
- „Sea Angels" als eigenständiger aktueller Anbieter mit Preisen, Zone oder Leistungsversprechen
- „In Tarifa immer WRF 1 km nehmen." / „1 km ist genauer als 3 km."
- „Bei Sonne kommt automatisch mehr Wind."
- „18 kn Forecast entsprechen real 22–23 kn." / jede feste Forecast-Korrektur
- Jede Kitegrößen-Angabe in AMARAs eigener Stimme, in der Datenschicht oder als Empfehlung an die Leser (Ausnahme siehe §6a)
- „Heute ist es sicher" / „geeignet für Anfänger" / „du kannst fahren"
- „Bei Levante zwingend ein Rescue-Ticket kaufen" (Kaufaufforderung im Sicherheitskontext)
- „Los Lances Norte ist der Kitestrand"
- Modellierter Meeresspiegel als lokale Gezeiten-/Wasserstandsangabe
- Ein Safety-Score, ein Ampelsystem oder ein Eignungs-Rating in beliebiger Form

---

## 6a. Was ein zugeschriebenes Zitat darf

Ein Zitat ist etwas anderes als eine Regel der Seite. Es steht in Anführungszeichen, trägt Namen und Rolle, und es ist erkennbar die Erfahrung dieser Person — nicht AMARAs Anweisung an die Leser. Deshalb darf ein namentlich zugeschriebenes Zitat einer qualifizierten lokalen Fachperson Dinge sagen, die AMARA selbst nicht sagt: eigene Materialwahl einschließlich Kitegrößen, eigene Faustregeln, eigene Beobachtungen.

Drei Bedingungen, ohne die es nicht geht:

1. **Erste Person, eigene Praxis.** „Bei richtigem Levante fahre ich hier 5er bis 7er" ist zulässig. „Ein Levante verlangt 5er bis 7er" ist es nicht — das wäre eine Regel.
2. **Kein Imperativ an die Leser** in Sicherheits-, Material- oder Kauffragen. Was die Person selbst tut, ja. Was die Leser tun sollen, nein.
3. **Keine Sicherheitszusage.** Kein Ort, kein Ausrüstungsgegenstand und keine Rescue-Karte wird als „sicher" beschrieben.

AMARAs eigene Stimme wiederholt eine Zitataussage nicht als Empfehlung und leitet aus ihr keine Regel ab.

---

## 7. Roberts persönliche Passage (freigegeben)

Als klar markierte persönliche Erfahrung, im Abschnitt Levante/Poniente:

> **Aus meiner persönlichen Erfahrung:** Tarifa wird mit rund 300 Kitetagen im Jahr beworben, und ja — ein Teil davon sind Levante-Tage. Wer die alle mitnehmen will, muss auch bei Levante kiten können.
>
> Aber das Kitesurfen, das ich meine, das, was die Locals hier machen: das ist Poniente. Los Lances direkt vor der Tür, Welle drin, der Wind nicht brutal, aber stark genug für richtig viel Spaß. Das ist für mich das Tarifa-Erlebnis.
>
> Deshalb wollte ich meine Wohnung auch genau dort haben — mit Blick auf Los Lances. Ich sehe, wann der Wind kommt. Und wenn er kommt, packe ich meine Sachen und gehe raus.

Die 300 Kitetage sind ausdrücklich als **Werbeversprechen** gekennzeichnet, nicht als gemessene Zahl. Aus dieser Passage darf keine Regel, keine Spotempfehlung und keine Forecast-Korrektur abgeleitet werden.

---

## 8. Windguru-Abschnitt

Windguru ist **Lern- und Vergleichswerkzeug**, nicht Datenquelle des Live-Briefings und kein Sicherheitsorakel. Keine Drittanbieter-Einbettung, kein fremdes JavaScript — externe Links zu den relevanten Tarifa-Spots über das bestehende Linksystem.

**Glossar (freigegeben):**

| Begriff | Erklärung | Grenze |
|---|---|---|
| Wind / Mittelwind | Der vom Modell berechnete Grundwind der jeweiligen Zeile | Nicht mit der Kraft am Kite gleichsetzen |
| Böen / Gusts | Modellierte kurzfristige Spitzen über dem Grundwind; großer Abstand = mehr modellierte Schwankungsbreite | Weder Böe noch Zeitpunkt sind garantiert |
| Windrichtung | Wind wird danach benannt, **woher** er kommt: Nordwind kommt aus Norden | Aus der Richtung allein keine Fahrbarkeit ableiten |
| Bewölkung | Getrennte Wolkenschichten; hilft, Himmel und Modellunterschiede zu verstehen | Wenig Wolken beweist keine Thermik |
| Wellenhöhe | Signifikanter Wellenwert des Wellenmodells | Keine Aussage über einzelne Wellen oder Shorebreak |
| Periode | Zeitabstand in Sekunden der modellierten Wellenkomponente | Nicht gleichbedeutend mit Höhe |
| Peak-Periode | Periode des energetisch dominanten Spektralbereichs | Kein garantierter Abstand zweier Wellen |
| Windwelle | Seegang, der wesentlich vom lokalen/regionalen Wind erzeugt wird | Nur ein Teil des Seegangs |
| Swell | Wellenenergie aus dem Entstehungsgebiet, unabhängig von der lokalen Windwelle | Swell und Windwelle können gleichzeitig aus verschiedenen Richtungen kommen |
| 1 / 3 / 9 / 13 km | Ungefähre horizontale Modellauflösung; kleinere Zahl = feineres Raster | **Nicht** „kleiner = verlässlicher" |

**Kernsatz:**
> 3 km oder 1 km beschreibt vereinfacht die horizontale Rasterweite des Modells. Ein feineres Raster kann kleinere räumliche Strukturen darstellen. Es bedeutet aber nicht automatisch, dass die Vorhersage an deinem Strand genauer ist.

**Modelle, die genannt werden dürfen:** WRF* 1 km (Tarifa), WRF 3 km Gibraltar, WRF 9 km Europe, IFS-HRES 9 km, GFS 13 km — als Beispiele, nicht als fester Katalog (Windguru zeigt je nach Spot und Account unterschiedliche Zeilen, teils PRO-abhängig).

**Bei Modellstreuung:**
> Die Modelle sind sich über Stärke bzw. Timing derzeit nicht einig. Das ist ein Zeichen für erhöhte Vorhersageunsicherheit — nicht dafür, dass eines der Modelle automatisch falsch sein muss.

---

## 9. Live-Briefing: Open-Meteo

### Technische Regeln

- **Keine Modellidentität aus `models=auto`.** Open-Meteo kombiniert bei Best-Match mehrere Modelle, und das dokumentierte JSON-Schema enthält kein Feld mit der tatsächlich verwendeten Modellbezeichnung. Wenn das UI ein Modell nennt, muss serverseitig ein explizites Modell konfiguriert sein.
- **Rasterzelle:** Response-Koordinate ist das Zentrum der tatsächlich verwendeten Modellzelle und kann einige Kilometer von der Anfrage abweichen. Offset je Abruf selbst berechnen und intern protokollieren. **Keinen maximalen Abstand publizieren** — die offizielle Doku nennt keinen.
- **`generationtime_ms` ist nicht die Modelllaufzeit**, sondern die Antwortgenerierungszeit. Abrufzeit niemals als Modelllauf bezeichnen.
- **Cache und Key serverseitig.** Der Customer-Endpunkt nutzt `customer-`-Prefix und API-Key; der Key gehört nie in den Client.
- **Fallback ehrlich:** bei fehlenden oder veralteten Daten sichtbarer Fallback-Zustand, keine Pseudo-Werte, keine erfundene Interpretation.

### Zu speichernde Metadaten je Abruf

```
source              = "Open-Meteo Customer API"
configured_model    = <explizite Modell-ID>
requested_lat/lon   = ...
returned_grid_lat/lon = ...
grid_offset_km      = berechnet
requested_at        = ...
forecast_valid_at   = ...
```

### Attribution — sichtbar an der Datenanzeige, nicht im Impressum

> **Wetterdaten:** Open-Meteo · **Modell:** [konfigurierte Modell-ID] · **Originalquelle:** [DWD / ECMWF / Météo-France / …] · **abgerufen:** [Datum/Uhrzeit] · **Vorhersage gültig für:** [Datum/Uhrzeit]

Open-Meteo-Daten stehen unter CC BY 4.0; bei ICON-Wave-Daten müssen DWD **und** Open-Meteo genannt werden.

### Felder und zulässige Formulierung

| Feld | Zulässig | Grenze |
|---|---|---|
| `wind_speed_10m` | „Das Modell berechnet für 14 Uhr 18 kn Wind auf 10 m." | Nicht „du wirst 18 kn am Kite haben" |
| `wind_direction_10m` | „Der berechnete Wind kommt aus …" | Keine Spot-Eignung aus der Richtung |
| `wind_gusts_10m` | „Für dieses Stundenintervall liegt die modellierte Böenspitze bei …" | Ist das **Maximum der vorangehenden Stunde**, kein Instantwert, keine garantierte Böe |
| `cloud_cover` (+ low/mid/high) | rein beschreibend, in Prozent | Kein Schluss „wenig Wolken = Thermik" |
| `shortwave_radiation` | „Die modellierte Einstrahlung liegt im Stundenmittel bei …" | Wetterkontext, **kein** Thermikbeweis; Mittel der Vorstunde |
| `wave_height` | „Das Wellenmodell berechnet etwa … m Gesamtwelle." | Keine Aussage über einzelne Wellen oder Shorebreak |
| `wave_direction` / `wave_period` | rein beschreibend | Periode ≠ Peak-Periode |
| `wind_wave_*` | „Der windgetriebene Anteil liegt modelliert bei …" | Nur ein Teil des Seegangs |
| `swell_wave_*` | „Primärer Swell … m", Richtung und Periode beschreibend | Keine Aussage über einzelne Sets, kein Qualitätslabel |
| `secondary_swell_wave_*` | nur wenn es dem Verständnis dient | Kein Sekundär-Peak-Feld erfinden |
| Gesamt-`wave_peak_period` | nur ausgeben, wenn der eingesetzte Endpunkt das Feld dokumentiert zurückgibt | Nicht blind codieren |
| `ocean_current_*` | allenfalls als großräumiger Modellwert; Richtung ist die **Zielrichtung** | Nicht für operative Sicherheitslogik — die Straße von Gibraltar ist küstennah und komplex |
| `sea_level_height_msl` | allenfalls Kontext | Laut Open-Meteo **nicht für Küstennavigation geeignet**; keine Gezeitentabelle |

### Datenquelle: entschieden

**Open-Meteo, nicht Windy und nicht Windguru.** Windy scheidet aus, weil seine Einbindung auf Drittanbieter-JavaScript beruht und die API-Bedingungen kommerzielle Wetterdarstellung einschränken. Windguru liefert keine für diesen Zweck nutzbare offene Schnittstelle und bleibt das erklärte Vergleichswerkzeug. Open-Meteo liefert serverseitig genau die benötigten Felder — Wind, Böen, Richtung, Wolkenschichten, Einstrahlung sowie Gesamtwelle, Windwelle, Swell und Sekundärswell — unter CC BY 4.0 mit sichtbarer Attribution.

### Die Erklärschicht — der eigentliche Unterschied

Das Ziel ist ausdrücklich nicht „hier sind Zahlen", sondern: Gäste verstehen danach, was die Zahlen bedeuten und wie man einen Forecast liest. Zwei Ebenen:

1. **Evergreen-Erklärung.** Wie man Windguru liest — dauerhafter, redaktioneller Teil der Seite, unabhängig vom Tageswert.
2. **Aktuelle Einordnung.** Was die heutigen Werte im Modell bedeuten — erzeugt aus den abgerufenen Open-Meteo-Werten.

**Wie die aktuelle Einordnung entsteht — hybrid, und das ist bewusst so:**

- Formulierungen werden **zur Autorenzeit** erstellt: eine geprüfte Bibliothek von Satzvarianten je Situation, in allen fünf Sprachen. Ein Sprachmodell darf beim Schreiben dieser Bibliothek helfen; jede Variante wird einmal redaktionell freigegeben.
- **Zur Laufzeit** wählen deterministische Regeln aus den Werten die passenden Varianten aus — etwa: großer Abstand zwischen Grundwind und Böe → Böigkeits-Satz; Windwelle und Swell aus verschiedenen Richtungen → Seegangs-Satz; Modellwerte über Tagesverlauf stark ansteigend → Timing-Satz.
- **Kein Sprachmodell erzeugt Text zur Laufzeit.** Damit sind die folgenden Grenzen technisch erzwungen und nicht nur angewiesen.

Die Einordnung darf **nicht**: eine Session freigeben oder untersagen, eine Kitegröße nennen, eine Spotwahl treffen, eine Sicherheitsbewertung oder einen Score erzeugen, Rescue-Verfügbarkeit versprechen, ein Modell auswählen oder die Auswahl nachträglich optimieren, AEMET-Warnungen zusammenfassen, relativieren oder gegen Open-Meteo aufrechnen.

**Stufenplan:** Bis das Open-Meteo-Gateway steht, bleibt der vorhandene AEMET-Block auf der Seite — aber ehrlich beschriftet als amtlicher Wetterkontext, nicht als Kite-Briefing. Er ersetzt das Briefing nicht und darf nicht so wirken.

### Struktur des Briefings

- Das Modell sieht aktuell …
- Was das für Wind und Böen bedeutet
- Was Welle und Swell dazu sagen
- Wolken und Sonne: Wetterkontext, kein Thermik-Versprechen
- Vor dem Wasser prüfen: tatsächliche Richtung, Böen, Seegang, Bojen, Beschilderung und amtliche Warnungen

---

## 10. AEMET

- Amtliche Warnungen haben Vorrang vor der Modellinterpretation und stehen **über** dem Open-Meteo-Briefing.
- Integration über AEMET OpenData (REST, API-Key, Quellenangabe „AEMET" verpflichtend) — **kein Screen-Scraping**.
- **Deployment-Blocker:** Die maschinenlesbare Warnzonen-Zuordnung für Tarifa ist nicht verifiziert. „Tarifa = Estrecho" darf nicht geraten oder hartcodiert werden. Bis zur Verifikation: schlichter externer AEMET-Link statt automatischer Warnbox.
- Verifikationsschritt vor Produktivschaltung: Tarifa-Koordinate → aktueller AEMET-Zonendatensatz → offizieller Zonenname → Zonen-ID → Test mit aktivem oder historischem Warnobjekt.
- Eine amtliche Küstenprognose ist sinnvoll, aber nur als AEMET-Produkt in der Rolle „amtliche Information" — nicht als zweiter Live-Wetteranbieter. Open-Meteo bleibt die einzige Forecast-Quelle des Briefings.

---

## 11. Tarifa Surf Club und AMARA

Der Tarifa Surf Club ist offizieller AMARA-Partner. Robert und Mark verbindet darüber hinaus eine persönliche Freundschaft. Das wird natürlich und transparent geschrieben, nicht wie eine anonyme Affiliate-Empfehlung.

**Freigegebene konkrete Vorteile:**
- Kitesurf-Material kann vor der Anreise über den Tarifa Surf Club gekauft oder geliehen werden
- Die Abstimmung erfolgt vorab
- Das Material wird direkt in der AMARA-Unterkunft bereitgestellt
- Wer Material leiht, hinterlegt normalerweise eine Kaution beim Anbieter — für AMARA-Gäste hinterlegt AMARA diese Kaution beim Tarifa Surf Club
- Kurse, Kitecamp und begleitete Sessions sind die sinnvolle Option für Gäste, die noch unsicher sind oder nicht allein aufs Wasser möchten
- **Bei Help to Kite, allen Kitekursen und allen Aktivitäten in Abstimmung mit der Tarifa Surf Group ist die Rescue enthalten** (von Robert bestätigt; darf betont werden)

**Nicht behaupten:**
- Gäste seien dadurch „automatisch sicher"
- unbewiesene Superlative wie „bestes Paket"
- eine bestimmte Rescue-Leistung außerhalb der oben freigegebenen Formulierung

---

## 12. Basecamp und Conversion

Erst am Ende, klar abgegrenzt, kompakt, nicht mit dem redaktionellen Text vermischt. Ausschließlich verifizierte Fakten aus den bestehenden Property-Daten. Verweise auf Unterkunft und Verfügbarkeit nur über die Link Registry und den vorhandenen CTA-/Booking-Mechanismus.

Schwerpunkt: Tarifa einfacher organisieren, Material bei Ankunft, persönliche Koordination, Nähe zum Kitesurf-Alltag. Keine erfundenen Gehzeiten, Lageversprechen oder Infrastruktur.

---

## 13. Bilder

- Nur vorhandene, freigegebene AMARA-/Projektbilder
- Bilder mit Robert, Mark und Simone dürfen als persönliche Bildwelt verwendet werden
- Bei AIRUSH-Material keine Nutzungsrechte unterstellen — nur verwenden, wenn eine Veröffentlichungserlaubnis in den Asset-Metadaten dokumentiert ist
- Kein Stock-Look, keine generierten Bilder
- Konkrete Alt-Texte, keine Keyword-Listen

---

## 14. SEO und Technik

- H1, Meta, Einleitung, interne Verlinkung und strukturierte Daten über die bestehenden zentralen AMARA-Systeme
- Sichtbare Inhalte und Schema müssen übereinstimmen
- Kein `Course`-Schema, solange keine zentral verifizierten Kursdaten vorliegen
- Keine versteckten GEO-Texte, keine aufgeblähten FAQ-Blöcke
- Keine hartcodierten internen URLs — ausschließlich Link Resolver
- Bidirektionale Verlinkung zu Hub und Spots-Spoke, sobald diese in der Registry existieren. Keine Platzhalterroute anlegen.
- Umfassend im Inhalt, aber nicht auf eine Wortzahl getrieben

---

## 15. Offene Punkte

| Punkt | Status | Wer |
|---|---|---|
| AEMET-Warnzonen-ID für Tarifa | Deployment-Blocker für die automatische Warnbox | Implementierung, gegen offizielle API |
| New Angels: Personentransport gedeckt? | **Geklärt 03.09.2026 durch Mark.** Schlauchboote nehmen Person und Material mit. Auf der Seite als Marks Auskunft ausgewiesen, nicht als Vertragszusage des Betreibers | — |
| Echte Rescue-Betriebszeiten New Angels | **Geklärt 03.09.2026 durch Mark.** Publizierte Zeiten sind Ladenöffnungszeiten; die Boote fahren bei Levante | — |
| „Staatliche Rettung birgt kein Material" | **Geklärt 03.09.2026 durch Mark.** Salvamento Marítimo nimmt die Person mit, Material bleibt im Wasser | — |
| Rescue-Einschluss beim Tarifa Surf Club | **Präzisiert 03.09.2026 durch Mark.** Enthalten bei gebuchten Leistungen — Kurs, Kitecamp, Help to Kite. **Nicht** beim reinen Materialverleih | — |
| „Sea Angels" | Mark: derselbe Dienst, nur umbenannt. Welcher der beiden heutigen Anbieter daraus hervorging, ist noch offen — bis dahin taucht der Name auf der Seite nicht auf | Mark |
| Kite-Zonierung Lances Sur Natural / Urbana | Nicht rekonstruierbar; keine Karte | ggf. Delegación de Playas |
| Exakte Bildauswahl | offen, kein Blocker | Robert |
| Marks Zitate und Foto | **Erledigt 03.09.2026.** Drei Zitate von Mark freigegeben, Umformulierungen von ihm persönlich bestätigt; Porträt liegt als `mark-tarifa-surf-club.webp` im Repo | — |
| Hub-Route `tarifa-kitesurfing` | Slug entschieden; Route noch anzulegen, Hub-Page zieht dorthin um | Implementierung, Stufe 1 |

---

## 16. Quellen

- Ayuntamiento de Tarifa — Plan de Explotación de Playas 2024–2027, inkl. Planblätter Valdevaqueros und Lances Norte
- Junta de Andalucía — Playa de Los Lances, Ventana del Visitante (Lagunen-Verbot, Decreto 262/2007, Art. 61.7)
- Salvamento Marítimo — amtliche Notrufwege
- tarifarescue.com — New Angels / Tarifa Rescue, Stand 03.09.2026
- searescue.es — Sea Rescue, Stand 03.09.2026
- open-meteo.com/en/docs, /docs/marine-weather-api, /en/licence
- micro.windguru.cz/help.php — Modellliste und Auflösungserklärung
- opendata.aemet.es — OpenData, Nutzungsbedingungen
- Robert Böhmer — persönliche Erfahrung, freigegeben am 03.09.2026
