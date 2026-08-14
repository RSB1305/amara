# AMARA – Zweites Audit (adversarial pass)

**HEAD:** `0a89f0ecafae784c883719bc37b8cab0db46f802` · `origin/main` identisch
**Analysebasis:** Neuer Production-Build aus aktuellem HEAD (`PUBLIC_SITE_URL=https://amara-lodging.es npm run build`) — 411 HTML-Dateien, 185 indexierbar, 376 Inhaltsseiten, 35 Redirect-Stubs
**Modus:** Analyse. Keine Dateien geändert, kein Commit, kein Push.

---

## 1. Selbstprüfung des ersten Audits

| Original-Befund | Verdikt | Was richtig war | Was falsch/zu stark war | Methodenlehre |
|---|---|---|---|---|
| **3–5 neue kommerzielle Modifier-Seiten** | **REFUTED** (Diagnose), **SUPERSEDED** (Lösung) | Die Auswahl-Ebene fehlte tatsächlich als *Job*. | Ich habe von Keyword-Mustern auf Seitenbedarf geschlossen, **ohne das Inventar zu prüfen**. Hätte ich `vacationRentalEntities.ts` gelesen, hätte ich gesehen: pet-friendly = 2 Objekte, beach = 1, step-free = **0**. Ich hätte eine Seite für ein Merkmal empfohlen, das kein Objekt erfüllt. | **Inventar vor Keyword.** Eine Landingpage braucht belegbaren Bestand, nicht Suchvolumen. Meine Prüfreihenfolge war invertiert. |
| **`/romantic-hideaways` als Nischenseite eingeordnet** | **REFUTED** | Die Positionierung war zu eng. | Ich habe die Seite **nach Slug und Title klassifiziert, nicht nach Inhalt**. Sie enthielt bereits die vollständige Sechs-Objekt-Auswahl. Ich habe „Nischen-Slug" gelesen und auf „Nischenseite" geschlossen. | **Seiten nach gerendertem Inhalt klassifizieren, nicht nach Metadaten.** Ein Slug ist ein Artefakt der Historie, kein Job-Beschreibung. |
| **Interne Verlinkung sei „100 % Navigation ohne Relevanz-Hierarchie"** | **PARTIALLY CONFIRMED** | Die Beobachtung „44 identische Eingangslinks" war korrekt gemessen. Das *Anchor-Problem* ist real und größer als gedacht (s. NEW-1). | Der **Schluss** war unzulässig. Ich habe aus einer Kennzahl (Linkanzahl) auf eine Architektureigenschaft (fehlende Kontextpfade) geschlossen, **ohne einen einzigen Body-Link zu inspizieren**. Euer 5-Seiten-Pilot hat 4/5 als in Ordnung nachgewiesen — meine Aussage war falsch. | **Zähler ≠ Architektur.** Globale Navigation erzeugt zwangsläufig gleiche Zähler; das sagt nichts über kontextuelle Pfade. Erforderliche Evidenz: Body-Links pro Seite manuell inspiziert, Kontextpfad vorhanden ja/nein. |
| **`aggregateRating` + `Review` implementieren** | **REFUTED** | Dass die Evidenz maschinell unsichtbar ist, stimmt. | Ich habe **Entitätszuordnung nicht analysiert**: 4,94/568 ist host-level, die Objekte haben keine eigene belegbare Aggregation. Ich hätte empfohlen, host-level-Daten an sechs Property-Entities zu hängen — das wäre **faktisch falsches Markup** gewesen. Eure Ablehnung war richtig. | **Vor Schema-Empfehlungen: Welche Entität besitzt die Aussage? Welche Quelle, welches Datum, welcher Zählstand?** Ich habe Schema-Mechanik geprüft, nicht Evidenz-Provenienz. |
| **`offers` / availability** | **REFUTED** | — | `priceRange` ist explizit als „indicative build-time only" annotiert; Lodgify besitzt Preis, Mindestaufenthalt und Verfügbarkeit. Statisches `availability` wäre regelmäßig falsch. Ich habe ein Feld empfohlen, dessen **Datenbesitzer außerhalb des Repos liegt**. | **Feld-Empfehlung nur, wenn das Repo die Wahrheit besitzt.** Sonst produziert Schema Falschaussagen mit Autoritätsanspruch. |
| **`Article` auf 28 weitere Seiten ausrollen** | **REFUTED** | Die Inkonsistenz (4 von 37) war real beobachtet. | Ich habe aus „inkonsistent" auf „zu wenig" geschlossen. Richtig wäre gewesen zu fragen, **welcher Seitentyp überhaupt ein Artikel ist**. Parking, Weather, Streets & Stairs, Stay Selector sind Referenz-/Entscheidungsseiten, keine redaktionellen Artikel. Autorenschaft ohne echte Provenienz wäre E-E-A-T-Theater. | **Inkonsistenz kann in beide Richtungen aufgelöst werden.** Ich habe nur die Ausroll-Richtung geprüft. |
| **FAQPage / llms.txt / `<strong>`** | **PARTIALLY CONFIRMED, niedrig** | FAQ-Paare sind zitierfähiges Format. | Ich habe llms.txt und ai.txt als „GEO-Basics" gerahmt. Es sind **Anbietervorschläge ohne belegte Wirkung**. Ich hatte das relativiert, aber trotzdem in die Maßnahmenliste gesetzt — das ist inkonsistent. | **Nicht empfehlen, was man selbst als unbelegt bezeichnet.** |
| **Markenpräfix global im Resolver ändern** | **PARTIALLY CONFIRMED / teils REFUTED — und euer Gegenbefund ist inzwischen widerlegt** | Die 21 überlangen Titles und die zwei parallelen Muster waren korrekt gemessen. | „Global umstellen" war zu breit; euer 45-Kombinationen-Audit hat das zu Recht auf 11 echte Fälle reduziert. **Aber:** eure Schlussfolgerung „kein Resolver-Eingriff nötig" ist durch Commit `7f5dbf2` überholt — der Resolver zerlegt jetzt deutsche/niederländische/schwedische Komposita (s. **NEW-2**). Es braucht keinen Redesign, aber einen schmalen Guard. | Wir haben beide **authored statt rendered** geprüft. Eure 45 Kombinationen waren die Quelltexte; der Defekt entsteht erst im Resolver. **Immer das Build-Output messen.** |
| **SVG-Sprite für Comfort & Amenities** | **REFUTED** | 328 Inline-SVGs bei 46 Unikaten war korrekt gezählt. | Ich habe **Rohgröße mit Transferkosten verwechselt**. Gemessen: 356 KB roh → **13,0 KB brotli** (27,5×). Die Seite ist über die Leitung *kleiner* als `frigiliana-festivals` (12,6 KB) und kaum größer als die Startseite (8,7 KB). Meine „~140 KB Ersparnis" war schlicht falsch. | **Nie Rohgröße als Performance-Evidenz.** Wiederholtes Markup komprimiert nahezu perfekt — gerade *weil* es wiederholt ist. |

**Zusammenfassung meiner Fehlerklasse:** Von 9 Hauptempfehlungen waren 5 widerlegt, 3 teilweise. Das gemeinsame Muster: Ich habe **an Oberflächen gemessen (Metadaten, Zähler, Rohgrößen) und daraus auf Substanz geschlossen (Job, Architektur, Performance)**, ohne die jeweils darunterliegende Quelle zu öffnen — Inventar, Body-Links, Evidenzherkunft, Kompression. Die Messungen stimmten fast alle; die Schlüsse nicht.

---

## 2. Systemgesundheit (0–10)

| Dimension | Score | Begründung |
|---|---|---|
| **Architektur** | **8** | Rentals-SSOT ist echt und wird von Schema, Property-Seiten und Comfort & Amenities konsumiert. Route-Ownership, Prebuild-Policies, `check-structured-data.mjs` als Gate. Abzug: Label-Vokabular liegt in **5 unabhängigen Dateien** (NEW-1); Homepage und Stay Selector überlappen im Job (NEW-5). |
| **Technical SEO** | **9** | **0 kaputte interne Links, 0 Links in Redirect-Stubs, 0 fehlende Canonicals, 0 hreflang-Selbstreferenzfehler, 0 Duplikat-Titles/-Descriptions, 0 JSON-LD-Parse-Fehler.** Sitemap exakt = 185 indexierbare Seiten. Abzug: 1 Title >70 (NEW-3), kein `lastmod`, redundante zweite Sitemap. |
| **Commercial intent** | **6** | Property-Titles sind modifier-geführt und stark (48–62 Zeichen, jeweils mit Unterscheidungsmerkmal). Selector-Repositionierung inhaltlich sauber. Abzug: Navigationsvokabular sagt weiterhin „Apartments" für eine Sammlung, die ein Haus und eine Suite enthält (NEW-1); Destinationswahl fehlt im Homepage-Funnel (NEW-6). |
| **Internal linking** | **6** | Integrität perfekt; Kontextpfade auf den Pilotseiten belegt vorhanden; der Beaches→Playa-Link ist korrekt implementiert (verifiziert im Build). Abzug: **12–16 verschiedene Ankertexte pro Sprache** auf eine URL; 150 Seiten mit ≥3 Links auf dasselbe Ziel (NEW-1). |
| **Structured data** | **8** | Graph kohärent, `@id`-Verkettung sauber, ItemList resolver-eigen und mit `WebPage.mainEntity` verbunden, Portfolio-`priceRange` wird jetzt aus dem SSOT abgeleitet statt hartkodiert. Abzug: ItemList-`item` ohne `@type` (NEW-7); 5 Startseiten ohne BreadcrumbList. |
| **Multilingual** | **8** | Stichprobe Stay Selector in 5 Sprachen: **idiomatisch, keine Übersetzungsartefakte**, Wortzahlen 730–844 plausibel gestreut. Komposita korrekt gebildet. Abzug: DE-Startseite trägt veraltete Bewertungszahl (NEW-4); NL/SV-Titles gerendert defekt (NEW-2). |
| **Top funnel** | **5** | Homepage-`<main>` hat eine saubere Progression (Selector → Guides → 6 Objekte → CTA → Reviews). Abzug: Orientierungsblock ist **zu 100 % Frigiliana**, obwohl das Portfolio drei Destinationen umfasst (NEW-6). |
| **Conversion** | **5** | Journey 2 funktioniert jetzt. Journey 1 und 3 haben je einen Bruch (Abschnitt 6). |
| **Trust** | **6** | Evidenz ist real, zentralisiert (`reviewEvidence.ts`), mit Prüfdatum und bewusst abgerundetem Label („550+"). Das ist vorbildlich gebaut. Abzug: **der Beleg-Link widerspricht seinem eigenen Label** (NEW-8) — und das auf der Trust-Seite. |
| **Performance** | **9** | Gemessen: alle geprüften Seiten 8,7–13,1 KB brotli. PageSpeed 100/100, CLS 0, TBT 8 ms. Abzug ausschließlich für DOM-Knotenzahl (NEW-9), die aktuell nichts kostet. |

---

## 3. NEUE Befunde

| Prio | Befund | Beobachtete Evidenz | Inferenz | Konfidenz | Auswirkung |
|---|---|---|---|---|---|
| **P0** | **NEW-1: Das Navigationsvokabular widerspricht der neuen Sammlungs-Identität** | Build-weite Ankertext-Analyse auf `/romantic-hideaways`: **DE 12, EN 14, NL 15, SV 16** verschiedene inhaltliche Ankertexte (ohne Sprachumschalter). Drei Label-Systeme wurden im Konsistenz-Sweep **nicht** erfasst: `homeCinematicCopy.ts:244` `navApartments` = „Apartments/Apartamentos/Appartementen/Lägenheter" (verwendet auf Homepage `HomePage.astro:113` **und allen 6 Property-Seiten** `VacationRentalPage.astro:596,602`); `VacationRentalPage.astro:46-50` „Back to apartment overview/Zur Apartment-Übersicht"; `experienceHubContent.ts:412,575,735,897,1058` „Romantic stays for two" in **allen 5 Sprachen** auf dem Explore-Hub. Verifiziert im Build: `de/la-amara-family-and-surf.html` verlinkt die Sammlung u. a. mit „Zur Apartment-Übersicht" und „Apartments". | Die Repositionierung hat den *Seiten-Job* geändert, aber nicht das *Vokabular, mit dem der Rest der Site auf sie zeigt*. „Apartment" ist jetzt **faktisch falsch**: Family & Surf ist `additionalType: 'House'` (2 SZ, 4 Gäste), Farah ist eine Suite ohne Küche. Der Widerspruch steht ausgerechnet auf der Seite des Objekts, das kein Apartment ist. Zusätzlich stehen auf dem Explore-Hub **vier Links auf dieselbe URL mit drei verschiedenen Labels**, eines davon noch „romantisch". | **HIGH** (alles im Build verifiziert) | Nutzer: widersprüchliche Benennung desselben Ziels auf jeder Property-Seite. SEO: der Ankertext ist das stärkste interne Relevanzsignal — bei 12–16 Varianten entsteht keins. Faktisch: eine belegbar falsche Kategoriebezeichnung. |
| **P1** | **NEW-2: Der Title-Resolver zerlegt deutsche/niederländische/schwedische Komposita** | `resolve-seo-head.ts:71` strippt `^AMARA(?:\s*(?:\|\|-\|–\|—\|:)\s*\|\s+)`. Der Bindestrich matcht **ohne umgebende Leerzeichen**, also auch im Kompositum. Gerendert: DE `AMARA-Unterkünfte …` → `AMARA \| Unterkünfte …`; NL `AMARA-verblijven …` → **`AMARA \| verblijven …`**; SV `AMARA-boenden …` → **`AMARA \| boenden …`**. NL und SV zeigen damit **Kleinbuchstaben direkt hinter dem Pipe** — im SERP sichtbar defekt. Betroffen: genau die 3 Stay-Selector-Seiten. Die `<h1>` derselben Seiten ist korrekt (`AMARA-Unterkünfte …`) — **Title und H1 widersprechen sich jetzt**. | Regression aus `7f5dbf2`. Euer 45-Kombinationen-Audit prüfte die **authored** Titles; der Defekt entsteht erst im Resolver. Damit ist die Schlussfolgerung „kein Resolver-Eingriff nötig" widerlegt — es braucht keinen Redesign, sondern einen Guard: Bindestrich nur als Trenner behandeln, wenn Leerzeichen umgeben (`\s+[-–—]\s+`). | **HIGH** (Build-Output, alle 5 Sprachen geprüft) | Sichtbar beschädigter SERP-Title auf der wichtigsten kommerziellen Seite in 2 von 5 Sprachen. |
| **P1** | **NEW-3: Faktisch korrigierter ES-Title überschreitet das SERP-Budget** | `fce9388` änderte `vacationRentalEntities.ts:325` von `Lounis: apartamento en Frigiliana sin escalones \| AMARA` (54 Z.) auf `Lounis: apartamento en Frigiliana, ruta al centro sin escalones \| AMARA` (**71 Z.**). Das ist der **einzige Title >70 Zeichen** im gesamten Build; die anderen 29 Property-Titles liegen bei 48–62. | Die inhaltliche Korrektur war **richtig** — „sin escalones" implizierte fälschlich eine stufenlose Wohnung (real: 1 Eingangsstufe + Stufen nach unten). Aber die präzisere Formulierung sprengt die Länge. Die anderen vier Sprachen lösen dasselbe Problem kompakt („stufenlos ins Dorf", „trapvrij naar het dorp"). ES sollte demselben Muster folgen, z. B. `Lounis: apartamento en Frigiliana, centro sin escalones \| AMARA` (62). | **HIGH** | ES-SERP-Title wird abgeschnitten — auf der Money-Page mit dem stärksten Alleinstellungsmerkmal. |
| **P1** | **NEW-4: DE-Startseite trägt als einzige Seite eine veraltete Bewertungszahl** | `HomePage.astro:83` (DE-Description): „mit über 500 Gästebewertungen und durchschnittlich **4,95/5**". SSOT `reviewEvidence.ts`: `rating: 4.94`, `reviewCountLabel: '550+'`. Grep über `src/content/` und `src/page-families/`: **das ist die einzige Fundstelle** für 4,95 bzw. „über 500". Die übrigen vier Startseiten machen gar keine Bewertungsaussage. | Die SSOT-Rekonsolidierung hat Meta-Descriptions nicht erfasst. Die deutsche SERP-Snippet — der erste Eindruck im wichtigsten Quellmarkt — nennt einen Wert, den keine andere Fläche der Site bestätigt, und unterschätzt die Bewertungszahl. | **HIGH** | Widersprüchliche Zahlen zwischen Snippet und Landingpage. Zugleich: DE ist die einzige Sprache, die Social Proof im Snippet nutzt — nach der Korrektur wäre das Muster für die anderen vier prüfenswert. |
| **P2** | **NEW-5: Homepage und Stay Selector haben denselben Job** | DE-Homepage `<main>`: 430 Wörter, H2 „**Welche passt zu euch?**" + 6 Property-H3 in fester Reihenfolge. DE-Stay-Selector `<main>`: 761 Wörter, H2 „**Welche Unterkunft passt zu euch?**" + dieselben 6 Property-H3 in derselben Reihenfolge. Zusätzlich trägt der Selector zwei fast identische H2 („Welche AMARA-Unterkunft passt zu eurer Reise?" / „Welche Unterkunft passt zu euch?") — in allen 5 Sprachen. | Vor der Repositionierung war die Überschneidung unkritisch (der Selector bediente ein Teilsegment). Jetzt beantworten beide Seiten dieselbe Frage mit demselben Raster. Der Selector differenziert sich nur über ~330 Wörter Entscheidungshilfe. Das ist **kein Fehler, aber eine ungeklärte Zuständigkeit**. | **HIGH** (Beobachtung) / **MEDIUM** (dass es gelöst werden muss) | Nutzer erlebt dieselbe Auswahl zweimal. Ein Homepage-Teaser mit 2–3 Objekten plus klarem Weiterweg wäre trennschärfer. |
| **P2** | **NEW-6: Der Homepage-Orientierungsblock ist reines Frigiliana** | DE-Homepage `<main>`-Links in Reihenfolge: Selector, `frigiliana-location`, `frigiliana-parking`, `frigiliana-weather`, dann die 6 Objekte. **`nerja-location` und `tarifa-location` kommen im `<main>` nicht vor** — nur im Navigations-Dropdown. | Das Portfolio umfasst 3 Destinationen (4× Frigiliana, 1× Nerja, 1× Tarifa), der Homepage-Orientierungsblock nur eine. Wer „wohin?" noch nicht entschieden hat und Nerja oder Tarifa erwägt, findet im Hauptinhalt keinen Einstieg. Laut vorheriger Diagnose hat **Nerja höhere Nachfrage als Frigiliana** — genau diese Destination fehlt. | **HIGH** | Fehlender Destinationseinstieg vor der Objektwahl; betrifft die nachfragestärkere Destination. |
| **P3** | **NEW-7: ItemList-Einträge sind nicht selbstbeschreibend** | `resolve-structured-data.ts:530-540`: `item` trägt `@id`, `name`, `url` — **kein `@type`**. Die referenzierten `@id` (`…/#amara-lodging-408326`) sind auf der Selector-Seite **nicht im Graph definiert** (dort nur WebPage, BreadcrumbList, LodgingBusiness, ItemList). | Als Linked Data korrekt — die Knoten existieren auf den Property-Seiten, und die bewusste Nicht-Duplikation ist die richtige Entscheidung. Aber Parser arbeiten **seitenweise**; auf dieser Seite ist `item` ein unbestimmtes Ding mit Name und URL. Ein reines `"@type": "VacationRental"` (kein Datenfeld, keine Duplikation) macht es selbstbeschreibend. | **MEDIUM** | Gering. Kein Rich-Result-Verlust (Vacation-Rental-Carousels sind ohnehin Partner-gated), aber schwächere maschinelle Lesbarkeit für LLMs. |
| **P1** | **NEW-8: Der Beleg-Link auf der Trust-Seite widerlegt sein eigenes Label** | `reviewEvidence.ts:18`: `sourceUrl: 'https://www.airbnb.com/rooms/52229175'`. Dieselbe ID steht in `vacationRentalEntities.ts:165` als **Airbnb-Listing von AMARA Farah**. Gerendert (`GuestReviewsPage.astro:85`) als Linktext: DE „Quelle: öffentliches Airbnb-**Gastgeberprofil** · geprüft am 4. August 2026", ES „perfil público de **anfitrión**", EN „public Airbnb **host profile**". | Der Link verspricht ein Gastgeberprofil (Aggregat über alle Objekte) und liefert das Inserat **eines einzelnen Apartments**. Wer klickt, sieht die Bewertungen von Farah — nicht 550+. Ein Host-Profil hat die Form `airbnb.com/users/show/<id>`. Ihr habt die Provenienz-Lücke in Teil 1 selbst benannt; sie ist an HEAD **unverändert**. | **HIGH** | Das stärkste Vertrauensasset der Site trägt einen Beleg, der die Aussage nicht stützt — auf genau der Seite, die Vertrauen herstellen soll. Prüfbar durch jeden Besucher. |
| **P3** | **NEW-9: DOM-Last statt Transferlast bei Comfort & Amenities** | Gemessen: 356 KB roh → **13,0 KB brotli**. Aber: 3.049 Elemente gesamt, davon **1.612 (53 %) innerhalb von Inline-SVG**, aus 46 Unikaten in 331 Instanzen. | Nach eurer Taxonomie: **kein** User-Transfer-Impact (mein erster Befund war falsch), sondern ein moderater Parsing-/DOM-Kostenpunkt und Wartungsthema. Bei TBT 8 ms und PageSpeed 100/100 kostet das **aktuell nichts**. Nur relevant, falls die Seite künftig interaktiv wird. | **HIGH** (gemessen) | Derzeit keine. Kein Handlungsbedarf. |

---

## 4. Offene Punkte aus dem ersten Audit

Nur was noch wirklich zählt:

- **5 Startseiten ohne `BreadcrumbList`** (`index`, `de`, `en`, `nl`, `sv`) — die einzigen indexierbaren Seiten ohne. Konsistenzlücke, P3.
- **`vacation-rentals-sitemap.xml`**: 6 URLs, alle bereits in `sitemap-0.xml`, nur ES-Varianten, ohne hreflang, in `robots.txt` referenziert aber **nicht** in `sitemap-index.xml`. Entweder integrieren oder streichen. P3.
- **Kein `<lastmod>`** in der Sitemap (0 von 185 Einträgen). Hilft der Crawl-Priorisierung, besonders nach dem Cutover. P3.
- **15 Bilder ohne `alt`** auf den 5 Instagram-Seiten. P3.

Alles andere aus Audit 1 ist entweder erledigt, widerlegt oder von euch bewusst und begründet abgelehnt.

---

## 5. Top-Funnel-Audit

**Aktuelle Erstbesucher-Reise (DE-Homepage, `<main>`-Reihenfolge im Build):**

```
H1  AMARA — Ferienunterkünfte in Andalusien
 ↓
H2  Jede Unterkunft ist individuell.        → [Unterkünfte vergleichen] → Stay Selector
 ↓
H2  Damit ihr vor der Buchung wisst …       → Frigiliana / Parken / Wetter   ← nur Frigiliana
 ↓
H2  Welche passt zu euch?                   → 6 Objektkarten                  ← dupliziert den Selector
 ↓
    CTA „Verfügbarkeit prüfen"              → amara.lodgify.com (extern)
 ↓
H2  „Unsere Gäste können AMARA besser …"    → 550+ Bewertungen
```

**Was funktioniert:** Die Reihenfolge ist richtig gedacht — Orientierung, dann Auswahl, dann Buchung, dann Beleg. Der Selector steht als erster Link im Hauptinhalt. Die Objektkarten tragen echte Unterscheidungsmerkmale.

**Die zwei konkreten Reibungspunkte:**

1. **Destinationsentscheidung fehlt (NEW-6).** Der Orientierungsblock beantwortet ausschließlich Frigiliana-Fragen. Ein Besucher, der noch zwischen Küste und Bergdorf schwankt — die häufigste erste Frage in dieser Region — findet Nerja und Tarifa im Hauptinhalt nicht. Die H1 verspricht „Andalusien", der Inhalt liefert ein Dorf.

2. **Die Auswahlfrage wird zweimal gestellt (NEW-5).** „Welche passt zu euch?" auf der Homepage und „Welche Unterkunft passt zu euch?" auf dem Selector, jeweils mit demselben Sechser-Raster. Der Besucher trifft dieselbe Entscheidung zweimal oder überspringt den Selector — dann geht dessen Entscheidungshilfe verloren.

**Nicht redesignen.** Beide Punkte sind durch Umsortierung und Kürzung lösbar, nicht durch Neubau.

---

## 6. Conversion-Journey-Audit

**Journey 1 — Homepage → Frigiliana → Selector → Objekt → Verfügbarkeit**
Funktioniert bis zum Objekt. **Bruch:** Zwischen Homepage und Selector wird dieselbe Auswahl doppelt präsentiert (NEW-5) → *wiederholte Entscheidung*. Zusätzlich sitzt der externe CTA „Verfügbarkeit prüfen" ab dem ersten Seitenaufruf permanent im Header — vor jeder Objektwahl → *vorzeitiger Buchungsdruck* für Erstbesucher. Auf der Objektseite ist der CTA dagegen genau richtig platziert.

**Journey 2 — Google-Info-Landing → Authority/Explore → Unterkunft → Objekt → Verfügbarkeit**
**Der am besten funktionierende Pfad.** Der neue Beaches→Playa-Link ist im Build verifiziert (`/de/la-amara-playa` im Fließtext: „liegt AMARA Playa in Nerja 100 m vom Strand Torrecilla entfernt") — kontextuell, begründet, an der richtigen Stelle. **Bruch:** Auf dem Explore-Hub führen vier Links zum selben Ziel, einer davon mit „Romantische Auszeiten zu zweit" (NEW-1) — der Besucher kann nicht erkennen, dass alle vier dasselbe meinen, und der romantische Label filtert Familien und Alleinreisende gedanklich aus.

**Journey 3 — Brandsuche → Home/Reviews → Selector/Objekt → Verfügbarkeit**
**Bruch:** Wer über eine deutsche Brandsuche kommt, liest im Snippet „4,95/5, über 500 Bewertungen" und findet auf der Zielseite „4,94 · 550+" (NEW-4). Klickt er weiter auf die Bewertungsseite und dort auf den Beleg-Link, landet er auf dem Inserat *eines* Apartments statt auf dem versprochenen Gastgeberprofil (NEW-8) — genau in dem Moment, in dem er die Zahl verifizieren wollte. **Das ist der teuerste Bruch der drei**, weil er einen bereits überzeugten Interessenten an der Verifikationsstelle trifft.

*Keine Sackgassen gefunden. Keine kaputten Links, keine Redirect-Ketten aus Inhaltsseiten (0 von 411 geprüft).*

---

## 7. Multilingual-Audit

**Grundbefund: die Übersetzungsqualität ist gut.** Stichprobe Stay Selector über alle 5 Sprachen: idiomatisch, keine wörtlichen Übertragungen, korrekte Komposita, natürliche Unterkunftsterminologie. Wortzahlen 730 (SV) bis 844 (ES) — die Streuung entspricht der normalen Sprachdichte, kein Hinweis auf gekürzte Inhalte. Auch die SSOT-Texte (`accessNote`, `petsNote`, `description`) sind in allen fünf Sprachen eigenständig formuliert, nicht übersetzt.

**Konkret zu behandeln:**

| Locale | Seite | Problem |
|---|---|---|
| **NL** | `nl/romantic-hideaways` | Title gerendert `AMARA \| verblijven …` — Kleinschreibung hinter dem Pipe, sichtbar defekt (NEW-2) |
| **SV** | `sv/romantic-hideaways` | Title gerendert `AMARA \| boenden …` — dito (NEW-2) |
| **DE** | `de/romantic-hideaways` | Title-Kompositum zerlegt; H1 und Title widersprechen sich (NEW-2) |
| **DE** | `de` (Startseite) | Veraltete Bewertungszahl 4,95 / „über 500" (NEW-4) |
| **ES** | `la-amara-lounis` | Title 71 Zeichen, wird abgeschnitten (NEW-3) |
| **alle 5** | `explore-frigiliana-nerja` | „Romantic stays for two" & Entsprechungen, veraltet nach Repositionierung (NEW-1) |
| **alle 5** | 6 Property-Seiten + Homepage | „Apartments"-Vokabular für eine Sammlung mit Haus und Suite (NEW-1) |

**Schwächste Edition: Niederländisch und Schwedisch** — nicht wegen der Übersetzung, sondern weil bei ihnen der Resolver-Defekt sichtbar durchschlägt. Inhaltlich sind beide auf dem Niveau von DE und EN.

---

## 8. Structured-Data-Audit nach ItemList

**Ist der Graph kohärent? Ja.**

Verifiziert über alle 411 Seiten: 0 JSON-LD-Parse-Fehler. Typverteilung: `WebPage` 376, `BreadcrumbList` 371, `LodgingBusiness` 185, `VacationRental` 30, `Article` 20, `ItemList` 5, `WebSite` 1. Das entspricht exakt der Architektur (6 Objekte × 5 Sprachen = 30; Selector × 5 = 5; WebSite nur auf `/`). Der projekteigene Gate `check-structured-data.mjs` bestätigt das im Postbuild.

Positiv hervorzuheben:
- `WebPage.mainEntity` → ItemList korrekt verknüpft
- ItemList-Reihenfolge = sichtbare Kartenreihenfolge (Farah, Lounis, Zaid, Maha, Playa, Family & Surf)
- Identität kommt aus dem SSOT, URLs über Route-Ownership lokalisiert
- **Keine** duplizierten VacationRental-Knoten — die richtige Entscheidung
- `buildPortfolioPriceRange()` leitet den Marken-`priceRange` jetzt aus dem SSOT ab statt hartkodiert. Damit ist eine echte Drift-Quelle geschlossen.

**Begründete nächste Schritte — nur diese zwei:**
1. `"@type": "VacationRental"` in `ItemList.itemListElement[].item` ergänzen (NEW-7). Kein zusätzliches Feld, keine Duplikation.
2. `BreadcrumbList` auf die 5 Startseiten ergänzen — Konsistenz, nicht Volumen.

**Ausdrücklich nicht:** kein AggregateRating, kein Review, kein Offer, kein FAQPage, kein weiterer Article-Rollout. Die Evidenzlage trägt sie nicht, und Schema ohne Evidenz ist schlechter als kein Schema.

---

## 9. Technical-SEO-Ist-Zustand

Gemessen am frischen Build aus HEAD. **Nur echte Defekte:**

| Defekt | Umfang |
|---|---|
| Title >70 Zeichen | 1 (`la-amara-lounis` ES, 71) — NEW-3 |
| Title vom Resolver beschädigt | 3 (`de/nl/sv romantic-hideaways`) — NEW-2 |
| Meta Description >175 Zeichen | 6 (`direct-booking-benefits` in 4 Sprachen, `de`, `nl/frigiliana-location`) |
| Startseiten ohne BreadcrumbList | 5 |
| Bilder ohne `alt` | 15 (alle auf Instagram-Seiten) |
| Sitemap ohne `lastmod` | 185 von 185 |
| Redundante zweite Sitemap | 1 (`vacation-rentals-sitemap.xml`) |

**Ohne Befund geprüft (= sauber):** Canonicals 411/411 · hreflang-Selbstreferenz 195/195 · x-default 195/195 · Duplikat-Titles 0 · Duplikat-Descriptions 0 · fehlende H1 auf Inhaltsseiten 0 · mehrfache H1 0 · Bilder ohne `width`/`height` 0 · Bilder ohne `loading` 0 · JSON-LD-Fehler 0 · **kaputte interne Links 0** · **interne Links in Redirect-Stubs 0** · Sitemap-Deckung 185/185 · Indexierungssteuerung (191 Guest-Guides `noindex, follow`, 35 Stubs `noindex`) korrekt.

**Cloudflare:** Eure manuelle Prüfung ist die belastbarere Evidenz. Apex und www stehen auf DNS-only, also läuft kein Traffic durch Cloudflare — AI Crawl Control kann den Live-Pfad derzeit gar nicht sehen. Meine ursprüngliche Vermutung war unbelegt; ich wiederhole sie nicht. **Offene Aufgabe für nach dem Cutover:** GPTBot ist geblockt. Solange DNS-only gilt, wirkungslos; sobald der Traffic proxied läuft, wirksam. Vor dem Cutover entscheiden, ob das gewollt ist (OAI-SearchBot bedient ChatGPT-Search, GPTBot das Training — die Blockade betrifft also nicht die Sichtbarkeit in ChatGPT, sondern das Training. Das kann eine bewusste Entscheidung sein).

---

## 10. Was NICHT angefasst werden sollte

Diese Systeme sind gesund. Optimierung daran erzeugt Risiko ohne Ertrag:

1. **Der Rentals-SSOT** (`vacationRentalEntities.ts`). Die Faktenrekonziliation ist präzise: Playa 5+5 Stufen vor dem Aufzug, Farah eine Eingangsstufe mit stufenloser Route ins Dorf, Maha ohne Waschmaschine mit ausdrücklichem Hinweis im Fließtext, Hunde nur bei Lounis und Maha. Ich habe die Zugangs-, Küchen-, Haustier- und Ausstattungsangaben gegen Beschreibungstexte, Highlights und Schema-Output geprüft — **keine Widersprüche gefunden**. Das ist selten.
2. **Die Zurückhaltung bei Bewertungs-, Preis- und Verfügbarkeits-Schema.** Diese Entscheidung ist fachlich korrekt und sollte gegen künftige Beratungsempfehlungen verteidigt werden.
3. **Das Article-Kriterium.** Vier Slugs mit echter redaktioneller Autorenschaft, der Rest ohne. Diese Trennschärfe ist wertvoller als flächendeckendes Markup.
4. **Die technische Indexierungssteuerung.** 191 Guest-Guides auf `noindex, follow`, 35 Stubs auf `noindex`, Sitemap exakt deckungsgleich, keine Links in Stubs. Fehlerfrei.
5. **Die Bildpipeline.** 840 Bilder, alle mit Dimensionen und `loading`, CLS 0, durchgesetzt per `check-image-policy.mjs`.
6. **Comfort & Amenities Inline-SVG.** 13 KB über die Leitung. Kein Sprite-Refactor. Mein erster Befund war falsch.
7. **Der Frigiliana-Beaches→Playa-Kontextlink.** Genau die richtige Form: begründet, im Fließtext, an der Entscheidungsstelle. Muster für künftige Kontextlinks — aber nur dort, wo eine echte Lücke nachgewiesen ist.
8. **Die mehrsprachige Textqualität.** Fünf eigenständig formulierte Sprachfassungen auf diesem Niveau sind ein Aktivposten.

---

## 11. Empfohlene Workstreams (max. 5)

| Prio | Workstream | Warum jetzt | Erwarteter Wert | Risiko | Umfang |
|---|---|---|---|---|---|
| **1** | **Sammlungs-Vokabular vereinheitlichen** — ein Label-Token für „AMARA-Unterkünfte" statt fünf konkurrierender Quellen; `navApartments`, „Back to apartment overview" und die Explore-Discovery-Links darauf umstellen | Die Repositionierung ist erst dann abgeschlossen, wenn die Site die Sammlung auch so benennt. Aktuell steht auf der Seite eines Hauses „Zur Apartment-Übersicht". | Widerspruchsfreie Benennung auf Homepage + 6 Property-Seiten + Explore-Hub × 5 Sprachen; ein klares internes Relevanzsignal statt 12–16 | Niedrig — reine Label-Ebene, keine Routen | 3 Dateien, 5 Sprachen |
| **2** | **Trust-Evidenz reparieren** — Host-Profil-URL statt Farah-Listing; DE-Startseiten-Description auf SSOT-Werte ziehen | Beides trifft Besucher, die bereits überzeugt sind und nur noch verifizieren. Das ist der teuerste Moment für einen Widerspruch. | Der stärkste Vermögenswert der Site wird belegbar statt widerlegbar | Sehr niedrig | 2 Dateien |
| **3** | **Title-Resolver-Guard + zwei Einzeltitles** — Bindestrich nur mit Leerzeichen als Trenner; ES-Lounis kürzen | 3 Titles sind im Build sichtbar beschädigt, einer wird abgeschnitten. Der Guard verhindert die Wiederholung bei jedem künftigen Kompositum-Title. | Korrekte SERP-Darstellung auf der wichtigsten kommerziellen Seite in DE/NL/SV | Niedrig, **aber** resolver-weit — mit Vorher/Nachher-Diff über alle 196 Titles absichern | 2 Dateien + Verifikation |
| **4** | **Homepage-Zuständigkeit schärfen** — Destinationseinstieg für Nerja und Tarifa ergänzen; Objektraster auf Teaser reduzieren und den Selector als Weiterweg setzen | Behebt beide Funnel-Reibungspunkte in einem Schritt. Nerja ist laut Diagnose die nachfragestärkere Destination und fehlt im Hauptinhalt. | Destinationswahl wird möglich; die doppelte Auswahlfrage entfällt; der Selector bekommt seinen Job zurück | Mittel — inhaltliche Entscheidung, kein Redesign | 1 Page-Family, 5 Sprachen |
| **5** | **Kleine technische Restarbeiten** — `@type` in ItemList-Items, BreadcrumbList auf 5 Startseiten, `lastmod` in der Sitemap, zweite Sitemap konsolidieren, 15 `alt`-Attribute | Sammelpaket. Einzeln je zu klein, gemeinsam vor dem Cutover sinnvoll abzuräumen. | Konsistenz und Crawl-Effizienz zum Launch | Sehr niedrig | 4–5 Dateien |

---

## 12. Die eine wichtigste Empfehlung

**Workstream 1: das Vokabular der Sammlung vereinheitlichen.**

Nicht weil es der technisch anspruchsvollste Punkt ist, sondern weil er der einzige ist, bei dem **die bereits geleistete Arbeit sonst nicht ankommt**.

Die Belege aus dem aktuellen Repository:

- Die Repositionierung selbst ist inhaltlich sauber gelungen. Der Selector trägt in allen fünf Sprachen eine korrekte, idiomatische H1, drei echte Entscheidungsblöcke und eine ehrliche Einordnung des Paar-Aspekts als sekundäre Stärke.
- Aber die Site zeigt weiterhin mit dem alten Vokabular darauf. `navApartments` in `homeCinematicCopy.ts:244` steht auf der Startseite **und auf allen sechs Objektseiten**. „Zur Apartment-Übersicht" steht auf `de/la-amara-family-and-surf` — der Seite eines Objekts, das im SSOT als `additionalType: 'House'` mit vier Gästen geführt wird. Und der Explore-Hub bewirbt die allgemeine Sechser-Auswahl in allen fünf Sprachen weiter als „Romantische Auszeiten zu zweit".
- Gemessen ergibt das 12 (DE) bis 16 (SV) verschiedene inhaltliche Ankertexte auf eine einzige URL, und 150 Seiten mit mindestens drei Links auf dasselbe Ziel.

Damit ist der Zustand schlechter als vor der Repositionierung: vorher war die Benennung wenigstens **konsistent falsch**. Jetzt ist sie **inkonsistent** — und an mindestens einer Stelle nachweislich sachlich falsch.

Der Aufwand ist klein: drei Dateien, ein gemeinsames Label-Token, fünf Sprachen. Kein Routenwechsel, kein Redesign, kein Risiko für die gesunden Systeme. Es ist der letzte fehlende Schritt einer Änderung, die zu 80 % bereits gemacht ist.

---

## 13. Repository-Status

- **Keine Dateien geändert.**
- **Kein Commit.**
- **Kein Push.**
- HEAD unverändert: `0a89f0ecafae784c883719bc37b8cab0db46f802`, identisch mit `origin/main`.
- Untracked-Einträge unangetastet: `AMARA-SEO-AUDIT_2026-08-11.md`, `src/pages/tools/design-lab/`.
- Einzige Nebenwirkung: `dist/` wurde durch den Verifikations-Build aus aktuellem HEAD neu erzeugt (`dist/` ist nicht versioniert). Dieses Dokument kommt als zusätzliche untracked Datei hinzu.

---

*Alle Zahlen stammen aus dem Build des aktuellen HEAD. Beobachtung und Schlussfolgerung sind je Befund getrennt ausgewiesen.*
