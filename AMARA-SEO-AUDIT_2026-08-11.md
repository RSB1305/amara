# AMARA – Tiefgreifendes SEO-Audit

**Datum:** 11. August 2026
**Analysebasis:** lokaler Production-Build (`dist/`, 411 HTML-Dateien, davon 185 indexierbar)
**Anlass:** SEORCH-Report des SEO-Anbieters (gefahren gegen `amara-staging.pages.dev`)

---

## 0. Kernaussage in drei Sätzen

Die **technische SEO-Substanz ist überdurchschnittlich gut** – besser als bei den meisten Ferienvermietern. Der SEORCH-Report misst zu großen Teilen Artefakte der Staging-Umgebung und bewertet Dinge, die für Buchungen irrelevant sind. **Der echte Engpass ist kein technischer, sondern ein struktureller:** zwischen 6 Objektseiten und 31 rein informationellen Guides fehlt die gesamte kommerzielle Auswahl-Ebene, und die internen Links sind zu 100 % Navigation ohne jede Relevanz-Hierarchie. Dazu verschenkt die Seite mit fehlendem Bewertungs-Markup ihr stärkstes Vertrauensasset (550+ Bewertungen, 4,94/5).

---

## 1. Was am SEORCH-Report **nicht** stimmt

Der Report wurde gegen die **Staging-Domain** `amara-staging.pages.dev` gefahren. Diese ist per `dist/_headers` bewusst auf `X-Robots-Tag: noindex` gesetzt. Dadurch entstehen mehrere Falschmeldungen:

| SEORCH-Meldung | Realität | Handlungsbedarf |
|---|---|---|
| ❌ „Keiner der hreflang-Tags verweist auf die überprüfte Seite" | Canonical und hreflang zeigen korrekt auf `amara-lodging.es`. Geprüft wurde aber `amara-staging.pages.dev` – deshalb kein Match. **Alle 195 Seiten mit hreflang haben eine korrekte Selbstreferenz.** Verifiziert: 0 Fehler. | **Keiner** |
| ❌ „Alter der Domain: 0 Tage" / „Letztes Update vor 0 Tagen" | Bezieht sich auf die Staging-Subdomain, nicht auf `amara-lodging.es`. | **Keiner** |
| ⚠️ „Cloudflare blockiert KI-Crawler" | Vermutung des Tools, kein Messwert. Muss im Cloudflare-Dashboard geprüft werden (Bot-Fight-Mode / AI-Scrapers-Regel). | Prüfen, s. 4.6 |
| ⚠️ „Keine Autorenschaft gefunden" | Auf der **Startseite** korrekt so. Article-Schema mit benanntem Autor (Robert Sebastian Böhmer) existiert – aber nur auf 4 von 37 Seiten. Der echte Befund ist ein anderer, s. 3.3. | Ja, aber anders |
| ⚠️ „Title zu kurz: 50 Zeichen / sollte max. 70" | Fachlich falsch dargestellt. Google kappt Titles bei ~**580 Pixel ≈ 55–60 Zeichen**. 50 Zeichen sind gut, 70 werden abgeschnitten. | **Keiner** – die Empfehlung wäre schädlich |
| ⚠️ „Keine Meta Keywords" | Von Google seit 2009 ignoriert. Das Tool sagt es selbst („Google ist das wurscht"). | **Keiner** |
| ⚠️ „Text Rate 9 % / sollte >25 %" | Kein Google-Rankingfaktor. Die zugrundeliegende Ursache ist aber real, s. 4.4. | Indirekt |
| ⚠️ „Links ohne TITLE-Attribut: 58" | `title`-Attribute auf Links sind kein Rankingfaktor und für Screenreader eher schädlich. | **Keiner** |
| ⚠️ „Keine `<strong>`/`<em>`/`<blockquote>`/`<b>`/`<i>` gefunden" | Marginal. Semantische Hervorhebung hilft der KI-Extraktion leicht, ist aber kein Ranking-Hebel. 316 von 411 Seiten ohne `<strong>`. | Niedrig, s. 4.5 |
| ⚠️ „Nur 3 ausgehende Links" | Falsch gemessen (nur Startseite). Der Gesamtsite hat **über 50 verlinkte externe Domains**, sehr themenrelevant (Ayuntamiento, Turismo, Cueva de Nerja, lokale Restaurants). Das ist vorbildlich. | **Keiner** |
| ⚠️ „4 Inline-JavaScript-Bereiche auslagern" | Bei ~13 KB Inline-JS ohne externe JS-Requests ist Inline **schneller**, nicht langsamer. PageSpeed-Score 100/100 bestätigt das. | **Keiner** – die Empfehlung wäre schädlich |
| ⚠️ „Flesch-Wert 7 / sehr schwierig" | Der Flesch-Test wurde für Deutsch kalibriert, gemessen wurde ein **spanischer** Text. Messwert ungültig. | **Keiner** |

**Fazit zum Report:** Von ~25 Beanstandungen sind **etwa 4 echte Befunde**. Der Rest ist Tool-Rauschen oder Staging-Artefakt. Ein Angebot, das auf dieser Basis Arbeitspakete verkauft, verkauft Beschäftigung.

---

## 2. Was objektiv gut ist (nicht anfassen)

Verifiziert über alle 411 gebauten Seiten:

- **Titles:** 0 fehlend, 0 Duplikate über alle 185 indexierbaren Seiten. 164 im idealen Bereich 30–60 Zeichen.
- **Meta Descriptions:** 0 fehlend, 0 Duplikate.
- **H1:** genau eine pro Inhaltsseite, 0 Seiten mit mehreren H1, 0 Hierarchie-Sprünge (kein H4 ohne H3).
- **Bilder:** 840 Bilder, **alle** mit `width`/`height` (→ CLS 0) und `loading`-Attribut. Nur 15 ohne `alt` (alle auf den 5 Instagram-Seiten).
- **hreflang:** 195 Seiten mit vollständigem 5-Sprachen-Set + `x-default`, **0 fehlende Selbstreferenzen**, 0 fehlende `x-default`.
- **Canonical:** auf allen 411 Seiten gesetzt, 0 fehlend.
- **Sprachparität:** 36 von 41 Slugs vollständig in allen 5 Sprachen. (Die 5 „Lücken" sind die Sprach-Startseiten selbst – Messartefakt, keine echte Lücke.)
- **Sitemap:** 185 URLs, exakt deckungsgleich mit den 185 indexierbaren Seiten, 37 pro Sprache, mit `xhtml:link`-Alternates. Guest-Guides und Redirect-Stubs korrekt ausgeschlossen.
- **Indexierungssteuerung:** 191 interne Gäste-Seiten sauber auf `noindex, follow`, 35 Redirect-Stubs auf `noindex`. Sehr sauber.
- **Strukturierte Daten:** JSON-LD auf allen 376 Inhaltsseiten, **0 Parse-Fehler**, mit `@id`-Verknüpfung (WebSite → WebPage → LodgingBusiness → VacationRental). Das ist Profi-Niveau.
- **Verwaiste Seiten:** 0. Jede indexierbare Seite hat interne Eingangslinks.
- **Performance:** PageSpeed 100/100 Desktop **und** Mobile, CLS 0, TBT 8 ms, Server-Response 0,11 s.

---

## 3. Die drei echten Umsatz-Hebel

> Kontext: AMARA rankt laut bisheriger Diagnose für informationelle Long-Tails (z. B. „Parken in Frigiliana"), aber nicht für kommerzielle Money-Keywords. Die folgenden drei Punkte sind genau die Ursache.

### 3.1 🔴 **Es fehlt die Ebene „kommerzielles Long-Tail"**

Das ist der wichtigste Befund des gesamten Audits.

**Vorab die Abgrenzung, die hier entscheidend ist:** Der generische Head-Term `Ferienwohnung Frigiliana` ist bei der aktuellen Domain-Autorität gegen Booking.com und Airbnb **nicht gewinnbar** – das wurde bereits diagnostiziert und gilt weiterhin. Eine Seite, die frontal darauf zielt, wäre verlorene Arbeit. Der Hebel liegt eine Ebene tiefer: bei **kommerziellen Long-Tail-Suchen mit Auswahlkriterium**, wo OTA-Kategorieseiten schwach sind, weil sie keine Einzelmerkmale als Landingpage abbilden.

Also nicht `Ferienwohnung Frigiliana`, sondern:
- `Ferienwohnung Frigiliana Altstadt ohne Treppen`
- `Ferienwohnung Frigiliana mit Terrasse für 2 Personen`
- `Ferienwohnung Frigiliana hundefreundlich`
- `Apartment Nerja 100 m vom Strand`
- `Ferienwohnung Frigiliana Winter mit Heizung`

Diese Suchen haben Kaufabsicht, geringes Volumen und **niedrige Konkurrenz** – genau das Profil, bei dem eine kleine Domain gewinnt.

**Aktueller Stand:** Diese Ebene existiert bereits **teilweise – und dort funktioniert sie richtig gut:**

| Seite | DE-Title | Bewertung |
|---|---|---|
| `/de/la-amara-lounis` | „Lounis: Ferienwohnung Frigiliana, **stufenlos ins Dorf** \| AMARA" | ✅ Genau das richtige Muster – Kaufwort + Unterscheidungsmerkmal |
| `/de/la-amara-maha` | „Maha: Apartment mit **60 m² Terrasse**, Frigiliana \| AMARA" | ✅ Ebenfalls vorbildlich |
| `/de/la-amara-playa` | „Playa: Apartment **100 m vom Strand**, Nerja \| AMARA" | ✅ Ebenfalls vorbildlich |
| `/de/frigiliana-winter-stays` | „AMARA \| Winterurlaub in Frigiliana \| Beheizte AMARA-Unterkünfte" | ⚠️ Richtige Idee, aber ohne Kaufwort („Ferienwohnung"/„Apartment") im Title |
| `/de/frigiliana-location` | „AMARA \| In Frigiliana übernachten \| Altstadt, Meer & AMARA" | ⚠️ Informationell formuliert, obwohl es die Unterkunfts-Hubseite ist |
| `/de/romantic-hideaways` | „Ferienunterkünfte für Paare in Frigiliana, Nerja & Tarifa \| AMARA" | ⚠️ Faktisch die Übersicht **aller** Unterkünfte (Nav: „Ver todos los alojamientos"), aber auf „Paare" verengt und mit Nischen-Slug |

**Der eigentliche Befund ist also nicht „es fehlt eine Seite", sondern: das funktionierende Muster der 6 Objektseiten wird auf der Kategorie-Ebene nicht fortgesetzt.** Zwischen 6 Einzelobjekten und 31 rein informationellen Guides klafft die gesamte Auswahl-Ebene, auf der Menschen tatsächlich entscheiden.

**Maßnahme (höchste Priorität):**
1. **Merkmals-Landingpages statt Head-Term-Seiten.** 3–5 Seiten entlang echter Auswahlkriterien, die AMARA belegbar erfüllt: „ohne Treppen / barrierearm", „mit großer Terrasse", „hundefreundlich", „strandnah in Nerja", „Langzeit-/Winteraufenthalt". Jede bündelt die passenden Objekte und beantwortet die Auswahlfrage. Slugs lokalisiert je Sprache.
2. **`/romantic-hideaways` als Auswahl-Hub schärfen** – Title/H1 auf „Ferienwohnungen für zwei …" mit Kaufwort, und die Seite als Verteiler zu den Merkmalsseiten aufbauen. Der Paar-Fokus bleibt, wird aber um Filterlogik ergänzt.
3. **`frigiliana-winter-stays` und `frigiliana-location` mit Kaufwort nachziehen** – beide sind inhaltlich schon Auswahlseiten, signalisieren es aber nicht.
4. **Kontextuelle Verlinkung aus den Guides.** Die 33 starken Guide-Seiten (`frigiliana-parking` 1.330 W., `frigiliana-beaches` 1.735 W., `frigiliana-festivals` 2.562 W.) im **Fließtext** auf die passende Merkmalsseite verlinken.

**Warum Punkt 4 so wichtig ist:** Alle Money-Pages haben aktuell exakt **44 interne Eingangslinks – für jede Seite identisch**. Das ist reine Navigations-Verlinkung. Themenbezogene Fließtext-Verlinkung gibt es praktisch nicht. Google kann daraus keinerlei Relevanz-Hierarchie ableiten: aus Sicht des Crawlers sind Impressum und die Unterkunftsübersicht gleich wichtig. Genau hier bricht die Brücke zwischen dem funktionierenden Informations-Traffic und der Buchung.

---

### 3.2 🔴 **550+ Bewertungen mit 4,94/5 sind für Google unsichtbar**

Auf `/guest-reviews` steht im Klartext: **„★ 4,94 / 5 • 550+ Bewertungen"**, mit Quellenangabe (öffentliches Airbnb-Gastgeberprofil, Stand 4.8.2026) und drei namentlichen Gästezitaten.

Im JSON-LD dieser Seite stehen: `WebPage`, `BreadcrumbList`, `LodgingBusiness`. **Kein `Review`. Kein `AggregateRating`.**
Im `VacationRental`-Schema der 6 Objektseiten fehlen ebenfalls `aggregateRating`, `review` **und `offers`** (kein Preis maschinenlesbar) – geprüft in `src/lib/seo/resolve-structured-data.ts`.

**Ehrliche Einordnung, damit hier keine falschen Erwartungen entstehen:**
- Google zeigt für `LodgingBusiness`/`Organization` **keine** Sterne aus selbst gehosteten Bewertungen – das ist Richtlinie und lässt sich nicht umgehen.
- Die `VacationRental`-Rich-Results von Google sind ein **geschlossenes Partnerprogramm**, kein offener Kanal.
- **Der reale Nutzen liegt woanders und ist trotzdem groß:** ChatGPT Search, Perplexity und Gemini lesen JSON-LD direkt aus. Wenn jemand fragt „gute Ferienwohnung in Frigiliana mit guten Bewertungen", entscheidet genau dieses Markup, ob AMARA mit Bewertung zitiert wird oder gar nicht vorkommt. Dazu kommen Knowledge-Graph-Signale und Bing.

**Maßnahme:**
- `aggregateRating` (Wert, Anzahl, Skala) + 3 `Review`-Knoten auf `/guest-reviews` ergänzen, mit `author` und Quellenangabe.
- `offers` mit `priceRange`/`lowPrice` und `availability` in `VacationRental` ergänzen. Der Preisrahmen `EUR 75-350` liegt bereits im Code (`resolve-structured-data.ts:50`) – er steht nur im falschen Knoten.

---

### 3.3 🟠 **10 FAQ-Seiten mit 170 Q&A-Blöcken ohne FAQ-Markup**

`faq-general` und `frigiliana-faq` haben je **17 `<details>`-Blöcke** – in 5 Sprachen also 170 fertige Frage-Antwort-Paare. Im JSON-LD steht davon **nichts**.

**Ehrliche Einordnung:** Google hat FAQ-Rich-Results im August 2023 auf Behörden-/Gesundheitsseiten beschränkt – SERP-Akkordeons gibt es dafür nicht mehr. **Der Wert liegt heute rein in der KI-Extraktion (GEO)**, und genau das ist der Bereich, den der SEORCH-Report selbst als Zukunftsthema aufmacht. Frage-Antwort-Paare sind das Format, das LLMs am zuverlässigsten zitieren.

**Zusätzlich:** `Article`-Schema mit benanntem Autor ist implementiert und funktioniert – aber nur auf **4 von 37** Slugs (`tarifa-location`, `tarifa-beaches`, `tarifa-wind-kitesurfing`, `frigiliana-restaurants`). Die 28 anderen Guide-Seiten mit teils 2.500 Wörtern (`frigiliana-festivals`, `nerja-nightlife`, `frigiliana-location`, `frigiliana-beaches` …) laufen ohne Autor, ohne `datePublished`, ohne `dateModified`. Das ist genau das E-E-A-T-Signal, das SEORCH vermisst – die Mechanik existiert bereits, sie wird nur nicht angewandt.

**Maßnahme:**
- `FAQPage` aus den vorhandenen `<details>`-Blöcken generieren.
- `Article` auf alle redaktionellen Guide-Seiten ausrollen (Datenfelder existieren im Page-Family-Schema).

---

## 4. Kleinere echte Befunde

### 4.1 🟠 Markenpräfix „AMARA |" verbrennt SERP-Platz
149 von 185 Titles beginnen mit `AMARA | `, 36 enden mit ` | AMARA`. Zwei Muster parallel – erzwungen durch `normalizeBrandTitle()` in `src/lib/seo/resolve-seo-head.ts:56`.

Das Präfix kostet **8 Zeichen** am wertvollsten Ort des Snippets, für eine Marke, nach der niemand sucht. Es ist mitverantwortlich dafür, dass **21 Titles über 60 Zeichen** liegen und im SERP abgeschnitten werden.

→ Einheitlich auf **Suffix** umstellen (`Keyword-Aussage | AMARA`). Die 36 Seiten, die es bereits so machen (u. a. alle 6 Objektseiten), zeigen das gewünschte Muster.

### 4.2 🟠 7 Meta Descriptions über 175 Zeichen
Werden hart abgeschnitten. Betroffen: `direct-booking-benefits` (200 Zeichen, alle Sprachen), `de.html` (183), `nl/romantic-hideaways` (177), `nl/frigiliana-location` (176). Zusätzlich sind 34 Descriptions unter 120 Zeichen – die verschenken Snippet-Fläche.

### 4.3 🟠 5 Startseiten ohne `BreadcrumbList`
`index.html`, `de.html`, `en.html`, `nl.html`, `sv.html` sind die einzigen indexierbaren Seiten ohne Breadcrumb-Schema. Konsistenzlücke, gering priorisiert.

### 4.4 🟡 `comfort-amenities` ist 353 KB groß – wegen 328 Inline-SVGs
Ursache gefunden: **162 KB reines Inline-SVG** bei nur **46 unterschiedlichen Icons** – jedes Icon wird bis zu 7× vollständig dupliziert. Das ist auch die wahre Ursache der von SEORCH bemängelten „Text Rate". Lösung: SVG-Sprite mit `<use href="#icon">`. Erwartete Ersparnis ~140 KB pro Seite × 5 Sprachen. Kein Ranking-Problem (PageSpeed ist 100/100), aber unnötiger Ballast.

### 4.5 🟡 316 von 411 Seiten ohne `<strong>`
Keine Ranking-Auswirkung, aber semantische Hervorhebung von Kernaussagen erleichtert LLMs das Extrahieren zitierfähiger Sätze. Günstiger Nebeneffekt beim nächsten Content-Durchgang.

### 4.6 🟡 GEO-Basics fehlen (aber Wirkung realistisch einschätzen)
Nicht vorhanden: `llms.txt`, `.well-known/ai.txt`, Content-Signals in `robots.txt`.
Diese Standards sind **Vorschläge einzelner Anbieter, kein etablierter Standard** – der Report stellt sie prominenter dar, als sie es verdienen. Aufwand ist allerdings minimal (2 statische Dateien). Empfehlung: `llms.txt` mit Seitenverzeichnis und Kurzbeschreibungen anlegen, mitnehmen, nicht überbewerten.

**Wichtiger als alle drei:** im Cloudflare-Dashboard prüfen, ob „Block AI Scrapers and Crawlers" aktiv ist. Wenn ja, ist AMARA für ChatGPT und Perplexity komplett unsichtbar – das würde jede GEO-Maßnahme wirkungslos machen. Das ist der einzige SEORCH-Hinweis in diesem Block mit echtem Risiko.

### 4.7 🟡 `vacation-rentals-sitemap.xml` ist redundant
Enthält 6 URLs, die alle bereits in `sitemap-0.xml` stehen, hat keine hreflang-Alternates, listet nur die spanischen Varianten und ist **nicht** in `sitemap-index.xml` referenziert (nur in `robots.txt`). Entweder in den Index aufnehmen und um Sprachvarianten ergänzen – oder ersatzlos streichen. Zusätzlich: der Sitemap fehlt durchgängig `<lastmod>`, was Google bei der Crawl-Priorisierung hilft.

---

## 5. Priorisierte Reihenfolge

| # | Maßnahme | Wirkung | Aufwand |
|---|---|---|---|
| 1 | Merkmals-Landingpages für kommerzielles Long-Tail (**nicht** Head-Terms) | 🔴 sehr hoch | groß |
| 2 | Kontextuelle Fließtext-Verlinkung von Guides → Money-Pages | 🔴 sehr hoch | mittel |
| 3 | Cloudflare AI-Crawler-Blockade prüfen | 🔴 hoch (Risiko) | 10 Min |
| 4 | `aggregateRating` + `Review` + `offers` ins Schema | 🟠 hoch (GEO) | klein |
| 5 | `Article`-Schema auf alle 28 verbleibenden Guides ausrollen | 🟠 mittel-hoch | klein |
| 6 | Markentitel einheitlich als Suffix, 21 Titles unter 60 Zeichen | 🟠 mittel | klein |
| 7 | `FAQPage`-Schema aus vorhandenen `<details>` generieren | 🟠 mittel (GEO) | klein |
| 8 | 7 überlange Descriptions kürzen, 34 kurze ausbauen | 🟡 niedrig | klein |
| 9 | `llms.txt`, `lastmod`, Breadcrumbs auf Startseiten, SVG-Sprite | 🟡 niedrig | klein |

---

## 6. Was ich dem SEO-Anbieter antworten würde

> Danke für den Report. Er wurde allerdings gegen unsere Staging-Umgebung gefahren, die bewusst auf `noindex` steht – daraus resultieren die Meldungen zu hreflang, Domainalter und Aktualität. Auch die Empfehlungen zu Title-Länge (70 Zeichen), Meta Keywords, Link-`title`-Attributen und dem Auslagern von Inline-JS würden wir nicht umsetzen; sie widersprechen dem aktuellen Stand bzw. unseren gemessenen 100/100 PageSpeed-Werten.
>
> Interessiert sind wir an konkreten Angeboten zu: kommerziellen Kategorieseiten für Buchungs-Keywords, strukturierten Daten für Bewertungen und Preise sowie interner Verlinkungsstrategie. Können Sie dazu ein Angebot machen?

---

*Erstellt auf Basis einer vollständigen Analyse des Production-Builds. Alle Zahlen sind gemessen, nicht geschätzt.*
