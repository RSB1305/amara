# AMARA — Audit der Unterkunftsseiten

**Datum:** 2026-08-18
**Prüfumfang:** Seitenfamilie `vacation-rental` (6 Unterkünfte × 5 Sprachen = 30 URLs)
**Kontextseiten:** `/romantic-hideaways` (Sammelseite), `/casa-amara-4-8-guests` (Gruppenseite)
**Leitfrage:** Überzeugt die Seite am Ende zu buchen?

---

## 0. Prüfmethode

| Schritt | Umfang |
| --- | --- |
| Quellcode | `VacationRentalPage.astro` (1.325 Z.), `vacationRentalEntities.ts` (1.464 Z.), `vacationRentalImageAlts.ts`, `RentalPhotoGallery.astro`, `directBooking.ts`, `resolve-structured-data.ts` |
| Gerendert | Dev-Server (`astro dev`), 16 Seiten abgerufen (DE/EN aller sechs Unterkünfte, ES/NL/SV Stichproben, Sammelseite) |
| Gemessen im DOM | Schriftgrößen, Zeilenhöhen, Sektionsabstände, CTA-Positionen, Dokumenthöhen, Viewport 1280 px und 394 px |
| Berechnet | WCAG-Kontrastverhältnisse aller Textrollen gegen `--surface` |
| Extrahiert | JSON-LD-Graph, `<title>`/Description-Längen, hreflang-Sets, Ausstattungslisten sichtbar vs. eingeklappt |
| Verglichen | Fünf Sprachen gegen Feldparität, englische Reste, Formatkonventionen |

Bewusst **nicht** angefasst: Routen-Semantik, globale Navigation, Buchungs-/Checkout-Architektur (Class 3).

---

## 1. Gesamturteil

Die Seitenfamilie ist **technisch und redaktionell überdurchschnittlich sauber gebaut** — ein Template, eine SSOT, sechs Seiten ohne Drift, fünf Sprachen ohne englische Reste, ehrliche Zugänglichkeitsangaben in einer Detailtiefe, die in dieser Branche selten ist.

Sie ist aber **als Verkaufsseite deutlich schwächer als als Informationsseite.** Der zentrale Befund lässt sich in einem Satz sagen:

> **Die Sammelseite verkauft die Unterkünfte besser als die Unterkunftsseite selbst.**
> Küche, Waschmaschine, Außenbereich und Zugang stehen auf der Übersichtskarte im Klartext — auf der Detailseite, einen Klick näher an der Buchung, sind genau diese Fakten entweder eingeklappt oder gar nicht vorhanden.

Der Trichter wird zur Buchung hin **informationsärmer statt reicher**. Das ist die wichtigste Erkenntnis dieses Audits, und sie ist mit lokalen Änderungen an einer einzigen Komponente behebbar.

---

## 2. Positive Befunde

Diese Punkte sind belastbar geprüft und sollten bei allen Änderungen erhalten bleiben.

### 2.1 Architektur und Datenmodell

**P-01 · Eine Komponente, sechs Seiten, null Drift.**
Alle sechs Unterkünfte rendern durch `VacationRentalPage.astro`. Gemessene Sektionsrhythmik ist auf allen Seiten identisch: 64 px oben/unten, 1 px `border-bottom`, letzte Sektion randlos. Es gibt keine abweichenden Einzelseiten, keine Copy-Paste-Varianten, keine verwaisten Layouts. Das ist die Voraussetzung dafür, dass jede der unten vorgeschlagenen Verbesserungen sechsfach wirkt.

**P-02 · Striktes, ehrliches Entity-Modell.**
`VacationRentalEntity` ist vollständig typisiert. Bemerkenswert: `pricing.lastVerified`, `accessFacts` mit exakten Stufenzahlen statt Marketingfloskeln, `routeToVillageCore: 'step-free' | 'not-verified'` — das Modell kennt den Unterschied zwischen „geprüft" und „nicht geprüft" und erlaubt keine Behauptung dazwischen.

**P-03 · Belegdisziplin bei Bewertungen.**
`reviewEvidence.ts` hält Plattform, Wert, Zähldatum und eine bewusst **abgerundete** öffentliche Zahl (`550+` statt 568) an einer Stelle, mit Begründung im Kommentar: „Rounded down so the claim stays true as reviews accumulate." Das ist genau die Art von Sorgfalt, die eine Direktbuchungsmarke tragfähig macht.

**P-04 · Saubere Buchungsgrenze.**
Alle Buchungslinks leiten sich aus einer Konstante in `directBooking.ts` ab. Kein hartkodierter Host irgendwo sonst. Deep-Links pro Unterkunft **und** pro Sprache. Der Kommentarblock dokumentiert die Domainentscheidung inklusive offener Lodgify-Rückfrage — nachvollziehbar für den nächsten Bearbeiter.

### 2.2 Inhalt und Vertrauen

**P-05 · Zugänglichkeit als Verkaufsargument statt Kleingedrucktes.**
„Eine Stufe am Haupteingang, sechs weitere bis zur Wohnung" — pro Unterkunft, in fünf Sprachen, mit Zufahrtszeiten für die Altstadt („Bis 11:00 Uhr und ab 17:00 Uhr"). Für Frigiliana, wo Treppen der häufigste Enttäuschungsgrund sind, ist diese Offenheit ein echter Wettbewerbsvorteil.

**P-06 · Ehrliche Negativaussagen.**
„Kein privater Außenbereich" (Farah), „und eine Waschmaschine gibt es nicht" (Maha), „keine voll ausgestattete Küche" (Farah). Die Texte verschweigen Schwächen nicht — das erhöht die Glaubwürdigkeit aller anderen Aussagen und senkt die Beschwerdequote nach Anreise.

**P-07 · Erzählerische Qualität, wo sie hingehört.**
Der Lounis-Text (Brunnen, „Höhle", maurisches Mauerwerk, Restaurierung 2020–2022) ist echtes Storytelling mit Substanz und keine Floskelkette. Das ist genau der Inhalt, der eine Direktbuchung gegen eine OTA gewinnt.

**P-08 · Gastgeber sichtbar und belegt.**
Das Trust-Modul zeigt Foto und Namen und verlinkt per Deep-Link auf `#host` statt auf den Seitenkopf. Der Codekommentar begründet das explizit: „the claim 'direct contact with the host' is only worth as much as its evidence." Richtige Haltung.

### 2.3 Lokalisierung

**P-09 · Fünf Sprachen, marktnativ.**
Geprüft: keine englischen UI-Reste in ES/NL/SV. Durchgängig informelle Anrede (ihr / vosotros). Korrekte Dezimaltrennung (`4,94` in DE/ES/NL/SV, `4.94` in EN). Sprachgerechte Währungsstellung (`€90` in EN/NL, `90 €` in DE/ES/SV). Zeitangaben lokalisiert (`11.00 uur`, `kl. 11.00`).

**P-10 · Sechs hreflang-Alternates pro Seite**, auf allen zwölf geprüften Seiten vollständig.

### 2.4 Technik, Bild, Barrierefreiheit

**P-11 · Bild-Alt-Texte aus einem Motivkatalog.**
`vacationRentalImageAlts.ts` pflegt ~45 Motive × 5 Sprachen und mappt sie pro Unterkunft auf die Bildreihenfolge — mit **Build-Time-Guard**, der bei Anzahl-Abweichung wirft. Kein generisches „Apartment in Frigiliana" über 24 Bildern.

**P-12 · Bildperformance.**
Hero `loading="eager"` + `fetchpriority="high"` + responsive `sizes`; Galerie lazy; JSON-LD bewusst auf acht Bilder begrenzt. Der Kommentar erklärt die Kopplung von sichtbarem Set und Schema-Set.

**P-13 · Galerie barrierefrei umgesetzt.**
Natives `<dialog>`, `aria-haspopup="dialog"`, `aria-live="polite"` für den Zähler, `focus-visible`-Outlines, `motion-reduce`-Varianten, sprachlokalisiertes Dialog-Label.

**P-14 · Kontraste durchgehend über AA.**
Gemessen gegen `rgb(245,242,237)`: Fließtext **15,3 : 1**, gedämpfter Text **8,4 : 1**, Goldakzent **6,0 : 1**. Auch die 10-px-Fußnote liegt bei 8,4 : 1.

**P-15 · Saubere Überschriftenhierarchie.**
H1 → H2 → H3 ohne Sprünge, auf allen Seiten. Skip-Link vorhanden, `main` mit `tabindex="-1"` und `scroll-mt`.

**P-16 · Strukturierte Daten mit Absicht gebaut.**
`VacationRental` mit Breadcrumb, Adresse, Geo, Check-in/-out, `containsPlace`/`Accommodation`. Die Ausstattungsliste ist **bewusst** auf Googles dokumentierte Taxonomie gefiltert (`GOOGLE_VACATION_RENTAL_BOOLEAN_AMENITIES`), inklusive Mapping `privatePatio → patio`. Das ist keine Lücke, sondern eine begründete Entscheidung — bitte so lassen.

---

## 3. Negative Befunde

### 3.A Konversion — hier liegt der Hebel

---

#### **A-01 · Die Ausstattungsliste zeigt bei allen sechs Unterkünften dasselbe** ⚠️ kritisch

Sichtbar sind immer nur die ersten vier Einträge (`visibleAmenities.slice(0, 4)`, Reihenfolge = Datenreihenfolge). Ergebnis, gemessen im gerenderten DOM:

| Unterkunft | **Sichtbar** | **Eingeklappt** |
| --- | --- | --- |
| Farah | Glasfaser · Klimaanlage · 40″ TV · Regendusche | Fußbodenheizung |
| Lounis | Glasfaser · Klimaanlage · 40″ TV · Doppeldusche | **Küche · Private Terrasse · Privater Patio · Waschmaschine · Hängematte · Außendusche** · Sonnenliegen · Pelletofen · Fußbodenheizung |
| Zaid | Glasfaser · Klimaanlage · 40″ TV · Doppeldusche | **Küche · Private Terrasse · Waschmaschine · Hängematte · Außendusche** · Sonnenliegen · Pelletofen · Fußbodenheizung |
| Maha | Glasfaser · Klimaanlage · 40″ TV · Regendusche | **Küche · Private Terrasse · Außenküche/Grill · Hängematte · Außendusche** · Sonnenliegen · Pelletofen · Fußbodenheizung |
| Playa | Glasfaser · Klimaanlage · 50″ TV · Regendusche | **Küche · Balkon · Waschmaschine · Strandnähe · Aufzug** |
| Family & Surf | Glasfaser · Klimaanlage · 60″ TV · Regendusche | **Küche · Pool · Aufzug · Waschmaschine · Kamin** · Patio · Pooltyp · Familienfreundlich |

Der einzige sichtbare Unterschied zwischen sechs sehr verschiedenen Unterkünften ist die **Fernsehergröße**. Jedes buchungsrelevante Unterscheidungsmerkmal — Küche, private Terrasse, Pool, Aufzug, Waschmaschine, Außenküche, Strandnähe — steht hinter einem geschlossenen Akkordeon.

Besonders schmerzhaft bei Family & Surf: Der SEO-Title verspricht „**mit Pool & Garage**". Auf der Seite ist der Pool eingeklappt und der Tiefgaragenstellplatz steht in einem **zweiten**, ebenfalls geschlossenen Akkordeon.

---

#### **A-02 · Küche und Außenbereich fehlen auf der Detailseite vollständig** ⚠️ kritisch

`kitchenNote` und `outdoorNote` sind pro Unterkunft in fünf Sprachen sorgfältig ausformuliert („64 m² Terrasse mit Außenküche", „Teeküche mit Kühlschrank", „Kein privater Außenbereich"). Auf der Unterkunftsseite werden sie **null Mal referenziert** — sie erscheinen ausschließlich auf den Karten der Sammelseite.

Das ist der Kern des Trichter-Problems: Die Übersichtskarte sagt „Voll ausgestattete Küche · Waschmaschine · Privater Patio und private Terrasse". Klickt der Gast auf „Lounis ansehen", verschwindet genau diese Information.

---

#### **A-03 · Bettgröße, Aussicht, Stufen, Haustiere, Parken hinter einem geschlossenen Akkordeon** ⚠️ hoch

„Betten, Zugang, Parken & mehr" ist standardmäßig zu. Darin: Bettart und -größe, Aussicht, Zugänglichkeit, Zufahrt, Haustiere, Sprachen, Parken.

Die Bettgröße ist eines der drei häufigsten Buchungskriterien. Bei Zaid und Playa ist sie sogar das **Hauptversprechen der Seite** — „das breiteste Bett im Haus, 180 × 200", „mit 200 × 200 das größte Bett aller AMARA-Unterkünfte" — und trotzdem muss der Gast klicken, um es bestätigt zu bekommen.

---

#### **A-04 · Keine einzige Gästestimme auf der Unterkunftsseite** ⚠️ hoch

Vorhanden ist nur eine aggregierte Zeile: „Gastgeberbewertung: 4,94/5 · 550+ Airbnb-Bewertungen". Das ist eine **Gastgeber**-Bewertung, keine Objektbewertung — korrekt und ehrlich, aber schwach.

In `guestReviewsContent.ts` liegen bereits drei übersetzte Gästezitate. Sie werden nur auf dem Bewertungs-Hub verwendet. Auf der Seite, auf der die Buchungsentscheidung fällt, steht kein einziges Wort eines Gastes.

---

#### **A-05 · Der Preis ist nicht verstehbar** ⚠️ hoch

Sichtbar: „Ab 90 €* / pro Nacht" und „* zzgl. Reinigungskosten und Servicegebühr".

Nicht auffindbar auf der gesamten Website:
- **Wie hoch** die Reinigungspauschale ist
- Ob es einen **Mindestaufenthalt** gibt
- Wann die Spanne 90 € und wann 180 € gilt (**Saison-Logik**)
- **Wann der Preis zuletzt geprüft wurde** — obwohl `pricing.lastVerified: '2026-08-17'` im Datenmodell steht und nie ausgegeben wird

Der Gast muss die Domain verlassen, um eine preisrelevante Angabe zu erfahren. Genau an dieser Stelle brechen Direktbuchungen ab — und genau hier ist die Marke sonst so belegorientiert (siehe P-03).

---

#### **A-06 · Vier Unterkünfte mit identischer Preisspanne** ⚠️ mittel

Lounis, Zaid, Maha und Playa stehen alle bei **90–180 €**. Die Texte differenzieren diese vier stark (größter Innenraum / breitestes Bett / 64 m² Terrasse / Strandnähe) — der Preis sagt, sie seien austauschbar.

Entweder ist das gewollt (dann sollte die Seite es erklären), oder die Werte sind veraltet. So wirkt die Angabe wie ein Platzhalter und schwächt die Preisglaubwürdigkeit aller sechs Seiten.

---

#### **A-07 · Der immer sichtbare CTA verwirft den Objektkontext** ⚠️ hoch

Der Header ist `position: fixed` und enthält dauerhaft „Verfügbarkeit prüfen". Dieser Button zeigt auf `https://amara.lodgify.com/de/book/` — die **generische** Suchseite, nicht auf die Unterkunft.

Gemessen an Family & Surf, Mobil (394 px):

| | Position |
| --- | --- |
| Dokumenthöhe | 7.696 px |
| Objektspezifischer CTA #1 | 1.812 px |
| Objektspezifischer CTA #2 | 7.138 px |
| **Strecke ohne objektspezifischen CTA** | **≈ 5.300 px ≈ 7 Bildschirmhöhen** |

Auf dieser gesamten Strecke ist der einzige verfügbare Button derjenige, der die Objektauswahl wegwirft. Der Gast liest sechs Bildschirme über Maha und landet dann in einer leeren Suchmaske.

> Die globale Navigation zu ändern wäre Class 3. Die richtige Lösung ist eine **seitenfamilien-lokale Sticky-Buchungsleiste** (Class 2) — siehe Maßnahme M-03.

---

#### **A-08 · Kein Querverkauf zwischen den vier Unterkünften im selben Haus** ⚠️ mittel

Farah, Lounis, Zaid und Maha liegen unter einem Dach in der Calle Chorruelo 5. Ein Gast auf der Farah-Seite, der beim Lesen merkt „ich hätte doch gern eine Küche", findet als einzigen Ausweg „Zur Übersicht aller AMARA-Unterkünfte" — zurück an den Anfang des Trichters.

Es fehlt: ein Modul „Weitere Unterkünfte in diesem Haus" mit den drei Geschwistern, und ein Verweis auf `/casa-amara-4-8-guests` für Gruppen. Beide Inhalte existieren bereits vollständig.

---

#### **A-09 · Buchungsbedingungen und Aufenthalts-FAQ sind nirgends verlinkt** ⚠️ mittel

`booking-stay-terms` (Stornierung, Zahlung, Belegung, Hausregeln — juristisch vollständig) und `faq-general` existieren und sind gut. Von keiner der sechs Unterkunftsseiten führt ein Link dorthin. Die Footer-Highlights der Unterkunftsseite sind: Unterkünfte, Ausstattung, Direktbuchungsvorteile.

---

#### **A-10 · Der Domainwechsel geschieht unangekündigt** ⚠️ niedrig

```html
<a class="am-btn am-btn--primary …" href="https://amara.lodgify.com/de/la-amara-maha">
```

Kein `rel`, kein Hinweis, kein beruhigender Satz. Der Gast verlässt `amara-lodging.es` und landet auf `amara.lodgify.com`. Die Architekturentscheidung ist dokumentiert und richtig — dem Gast wird sie nur nicht erklärt. Ein Satz genügt.

---

### 3.B Konsistenz

#### **B-01 · Family & Surf bricht das Muster an fünf Stellen**

| Merkmal | Fünf Unterkünfte | Family & Surf |
| --- | --- | --- |
| Eyebrow | beschreibt die Unterkunft („Historisches Apartment", „Küste von Nerja") | Markenkategorie: „AMARA Romantic Stays · Tarifa" |
| Title-Muster | `Name: Nutzen \| AMARA` (48–60 Z.) | `Name \| Nutzen \| AMARA` (**77 Z. in DE**) |
| Highlights | einzeilige Kurzphrasen | zweizeilig (Titel + Erklärung) via `whitespace-pre-line` |
| Lead / Beschreibung | ein Absatz | zwei Absätze |
| Sektionen | 6 | 7 (zusätzlicher Surf-Block) |

#### **B-02 · Der Name widerspricht der Positionierung — bei Family & Surf**

- **Name:** „Family & Surf"
- **Daten:** `occupancy: 4`, `childFriendly: true`
- **DE-Title:** „**Romantisch** wohnen in Tarifa mit Pool & Garage"
- **Lead:** „die wunderbar **für zwei** funktioniert"
- **Beschreibung:** „passt die Wohnung besonders gut zu einem **Paar**"
- **Aside:** „Wir möchten sie dennoch **nicht als klassische Unterkunft für vier Erwachsene** positionieren."

Die Seite argumentiert zweimal gegen ihren eigenen Namen und einmal gegen ihren eigenen Titel. Eine Familie, die über „Family" hierher findet, liest, dass sie eigentlich nicht gemeint ist. Ein Paar, das „Romantisch" sucht, liest „Family & Surf". Das ist eine **Positionierungsentscheidung, die der Betreiber treffen muss** — technisch lösbar ist sie erst danach.

#### **B-03 · Farah heißt an vier Stellen vier verschiedene Dinge**

| Ort | Bezeichnung |
| --- | --- |
| SEO-Title / Lead | „gemütliches **Doppelzimmer**" |
| Highlight | „Zwei getrennte **Räume**" |
| Sammelseiten-Karte | „**Suite** mit zwei Räumen" |
| Bild-Alt-Text | „Abgeschlossene **Boutique-Suite**" |
| Schema | `additionalType: 'VacationRental'` (die anderen fünf: `Apartment`/`House`) |

#### **B-04 · „Apartmentbilder" über Farahs Galerie** — Farah ist laut eigener Beschreibung kein Apartment. Die Überschrift ist im Template fest verdrahtet.

#### **B-05 · „Praktische Details" enthält den erzählerischen Text — auf allen sechs Seiten**

Unter dieser Überschrift steht bei Lounis ein 1.100-Zeichen-Text über einen Brunnen, Hühner und maurisches Mauerwerk. Der Text ist gut — er steht nur unter der falschen Überschrift. Die tatsächlich praktischen Angaben stehen darunter (Check-in/-out) bzw. im geschlossenen Akkordeon daneben (A-03). Sektionsname und Sektionsinhalt divergieren systematisch.

#### **B-06 · ES / NL / SV bekommen einen Absatzblock ohne Überschrift**

`familySurfConversionContent.family.title` ist nur für `en` und `de` gepflegt. Im gerenderten DOM bestätigt:

| Sprache | H3 im Aside |
| --- | --- |
| DE | „Ihr reist inzwischen mit kleineren Kindern?" |
| EN | „Travelling with younger children?" |
| **ES / NL / SV** | **keine** |

Drei Sprachversionen zeigen neben dem Surf-Block einen unbeschrifteten Textkasten.

#### **B-07 · Preis zweimal, in zwei Formaten, mit zweifacher Fußnote**

Im selben Scrollbereich: „**Ab 90 €\***" (Hero, 40 px, gold, linksbündig) und „**90 € – 180 €\***" (Eckdaten). Die Fußnote „* zzgl. Reinigungskosten und Servicegebühr" erscheint zweimal — einmal linksbündig, einmal rechtsbündig (`text-right`).

#### **B-08 · Bettformat unterscheidet sich zwischen Seitenfamilien**
Unterkunftsseite: „Queensize-Bett · 160 × 200 cm". Gruppenseite: roh „160 x 200" (kleines x, keine Einheit). Dieselbe Quelle, zwei Formatierungen.

#### **B-09 · Interne Datenschlüssel erreichen den Gästetext**
`formatAmenity` erzeugt bei String-Werten `Label: Wert`. Sichtbares Ergebnis: „**Pooltyp: Im Freien**", „**Sonnenliegen: 2**", „**Patio oder Terrasse**". Das liest sich wie ein Datenbankexport, nicht wie AMARA-Sprache.

#### **B-10 · Breadcrumb-Label und Route stimmen nicht überein**
Breadcrumb (sichtbar und in JSON-LD): „Unterkünfte" → `/de/romantic-hideaways`. Legacy-Slug. *Reine Feststellung — eine Routenänderung wäre Class 3 und ist hier nicht empfohlen.*

---

### 3.C Design und Typografie

#### **C-01 · Flache Hierarchie: acht Elemente auf derselben Größe**

`am-text-title` = `clamp(2.5rem, 5vw, 4.25rem)` wird auf der Unterkunftsseite **doppelt belegt** — für das Nutzenversprechen im Hero *und* für jede Sektionsüberschrift.

Gemessen bei Family & Surf:

| Viewport | H1 | Headline-Absatz | Preis | 6 × H2 |
| --- | --- | --- | --- | --- |
| 1280 px | 120 px | **64 px** | **64 px** | **64 px** |
| 394 px | 56 px | **40 px** | **40 px** | **40 px** |

Acht Elemente teilen sich eine Stufe. Das zentrale Versprechen der Unterkunft („Atlantik-Sonnenuntergänge und Freiheit fürs Kitesurfen") hat exakt dasselbe visuelle Gewicht wie das Wort „Eckdaten".

> Zur Einordnung: `am-text-title` als H2 ist site-weite Konvention (219 Verwendungen). Das Problem ist nicht die Konvention, sondern die **Doppelbelegung** derselben Stufe für Hero-Versprechen und Utility-Label. `am-text-subtitle` existiert und wird auf dieser Seite gar nicht genutzt.

#### **C-02 · Utility-Überschriften in Editorial-Größe**
„Eckdaten", „Ausstattung", „Apartmentbilder" bei 64 px. Diese Wörter tragen keine Botschaft; sie sind Wegweiser. Auf Display-Größe verlangsamen sie das Scannen, statt es zu unterstützen.

#### **C-03 · Der Detailbereich ist zweispaltig unausgewogen**
`lg:grid-cols-[0.9fr_1.1fr]`: links ein bis zu 1.100 Zeichen langer Fließtext plus Zeitentabelle, rechts eine einzelne geschlossene Akkordeon-Zeile mit `self-start`. Auf Desktop entsteht rechts eine große Leerfläche neben dem dichtesten Textblock der Seite.

#### **C-04 · Zwei Plus-Zeichen mit zwei Bedeutungen, nebeneinander**
Die Highlight-Liste nutzt das Lucide-`Plus`-Icon als Aufzählungszeichen (liest sich wie „hinzufügen"). Wenige hundert Pixel darunter nutzt das Akkordeon ein Text-„+" als Aufklapp-Indikator. Gleiche Form, unterschiedliche Semantik.

#### **C-05 · 10-px-Typografie**
„/ pro Nacht" und die Gebührenfußnote sind 10 px. Kontrast ist mit 8,4 : 1 unkritisch, die Größe liegt aber unter der üblichen 12-px-Untergrenze — ausgerechnet bei der Kostenangabe.

#### **C-06 · Der Preis- und CTA-Block hat keinen visuellen Anker**
Preis, Fußnote und beide Buttons stehen als linksbündige Elemente im normalen Textfluss, ohne Karte, Rahmen oder Fixierung. Der Gast vergleicht diese Seite mit Airbnb und Booking.com, wo der Buchungsblock ein eigenständiges, mitlaufendes Panel ist. Der Kontrast wirkt hier nicht ruhig, sondern unverbindlich.

---

### 3.D SEO und strukturierte Daten

| ID | Befund |
| --- | --- |
| **D-01** | **Kein `aggregateRating`** im Schema, obwohl „4,94/5" sichtbar auf der Seite steht. *(Vorsicht: nur objektbezogen und richtlinienkonform umsetzen — eine Gastgeberbewertung darf nicht als Objektbewertung ausgezeichnet werden.)* |
| **D-02** | **`floorSize` fehlt** in `containsPlace`, obwohl `interiorAreaSqm` für alle sechs gepflegt ist. |
| **D-03** | **Bettgröße fehlt im Schema** — `bed.label` („160 x 200") wird nicht nach `BedDetails` übertragen. |
| **D-04** | **Meta-Descriptions ungleich ausgenutzt:** Maha 114 (EN) / 115 (DE) Zeichen und Farah EN 121 — gegenüber 137–158 bei den übrigen. |
| **D-05** | **Family-&-Surf-Title 77 Zeichen (DE)** → sichere SERP-Kürzung. |
| **D-06** | **H1 enthält nur den Markennamen** („AMARA Lounis"). Weder Typ noch Ort. Der eigentliche Suchbegriff („Ferienwohnung Frigiliana") steht nur im `<title>` und in einem `<p>`. |

---

### 3.E Code-Hygiene

| ID | Befund |
| --- | --- |
| **E-01** | **11 ungenutzte `ui.labels.*`-Einträge** (`rooms`, `beds`, `airConditioning`, `pelletStove`, `hammock`, `outdoorShower`, `sunLoungers`, `coolingHeating`, `included`, `kitchen`, `outdoor`) × 5 Sprachen = **55 tote Strings**. |
| **E-02** | `shortName` und `pricing.lastVerified` werden auf der Seite nie gelesen. |
| **E-03** | `rooms` wird in JSON-LD ausgegeben, hat ein fertiges Label — wird aber nirgends sichtbar dargestellt. |

---

## 4. Priorisierte Abarbeitung

Klassifikation nach `AGENTS.md`. Alle P0–P2-Maßnahmen bleiben **lokal in der Seitenfamilie `vacation-rental` bzw. in der Content-SSOT** — kein Eingriff in geschützte Verträge.

---

### 🔴 P0 — Konversionskern
*Ein Arbeitspaket, eine Komponente, sechsfache Wirkung.*

| # | Maßnahme | Behebt | Klasse | Aufwand |
| --- | --- | --- | --- | --- |
| **M-01** | **Ausstattung neu kuratieren.** `slice(0, 4)` durch eine kuratierte Sichtbarkeitsreihenfolge ersetzen: Küche und Außenbereich aus `kitchenNote`/`outdoorNote` als erste zwei Zeilen, danach die zwei stärksten objektspezifischen Merkmale. Commodity-Merkmale (Internet, Klima, TV) ins Akkordeon. | A-01, A-02 | 2 | ~2 h |
| **M-02** | **Eckdaten von 6 auf 8 Zeilen erweitern:** Bettart/-größe und Zugänglichkeit aus dem Akkordeon nach oben holen. Das Akkordeon behält Aussicht, Zufahrt, Haustiere, Sprachen, Parken. | A-03 | 2 | ~1 h |
| **M-03** | **Objektspezifische Sticky-Buchungsleiste** in der Seitenfamilie: Unterkunftsname + „ab X €" + „Verfügbarkeit prüfen" → Deep-Link. Ab Scrollposition unterhalb des Hero-CTA einblenden. **Globale Navigation nicht anfassen.** | A-07, C-06 | 2 | ~3 h |

**Erwartete Wirkung:** Nach M-01/M-02 unterscheiden sich die sechs Seiten erstmals sichtbar voneinander, ohne dass der Gast klicken muss. M-03 schließt die 7-Bildschirm-Lücke ohne Buchungsangebot.

---

### 🟠 P1 — Vertrauen und Entscheidungsinformation

| # | Maßnahme | Behebt | Klasse | Aufwand |
| --- | --- | --- | --- | --- |
| **M-04** | **Gästestimmen-Modul** auf jeder Unterkunftsseite. Stufe 1: vorhandene drei Zitate aus `guestReviewsContent.ts` einbinden. Stufe 2 (empfohlen): ein Zitat je Unterkunft in die SSOT aufnehmen. | A-04 | 2 | ~2 h + Redaktion |
| **M-05** | **Preisblock vervollständigen:** Reinigungspauschale als Betrag, Mindestaufenthalt, Saisonhinweis, `pricing.lastVerified` als sichtbarer „Preisstand". Das Datenfeld existiert bereits. | A-05 | 1–2 | ~2 h + Datenpflege |
| **M-06** | **Buchungsbedingungen und Aufenthalts-FAQ** in die `footerHighlights` der Unterkunftsseite aufnehmen. | A-09 | 1 | ~30 min |
| **M-07** | **Reassurance-Satz am CTA** („Buchung über unser Buchungssystem — bester verfügbarer Preis, direkte Bestätigung"), fünfsprachig. | A-10 | 1 | ~1 h |
| **M-08** | **Modul „Weitere Unterkünfte"**: für die vier Frigiliana-Objekte die drei Geschwister im selben Haus plus Link auf `/casa-amara-4-8-guests`; für Playa und Family & Surf die Sammelseite. | A-08 | 2 | ~3 h |

---

### 🟡 P2 — Konsistenz und Wording
*Überwiegend reine Content-/SSOT-Arbeit ohne Layoutrisiko.*

| # | Maßnahme | Behebt | Klasse | Aufwand |
| --- | --- | --- | --- | --- |
| **M-09** | **Farah-Terminologie auf einen Begriff festlegen** und in Title, Lead, Highlight, Sammelseiten-Label und Bild-Alt durchziehen. `additionalType` mit den anderen fünf abgleichen. | B-03 | 1 | ~1 h |
| **M-10** | **Galerie-Überschrift unterkunftstyp-neutral** formulieren („Bilder der Unterkunft"), fünfsprachig. | B-04 | 1 | ~30 min |
| **M-11** | **Sektion umbenennen:** „Praktische Details" → z. B. „Die Unterkunft" für den erzählerischen Teil; die tatsächlich praktischen Daten bekommen die praktische Überschrift. | B-05 | 1 | ~1 h |
| **M-12** | **Family & Surf an das Muster angleichen:** Eyebrow objektbeschreibend, Title auf `Name: Nutzen \| AMARA` kürzen, Highlights einzeilig. | B-01, D-05 | 1 | ~1,5 h |
| **M-13** | **`family.title` für ES / NL / SV ergänzen.** | B-06 | 1 | ~20 min |
| **M-14** | **Preisdarstellung vereinheitlichen:** eine Darstellungsform, Fußnote einmal, konsistente Ausrichtung. | B-07 | 1–2 | ~1 h |
| **M-15** | **Bettformatierung teilen** — `formatBed` als gemeinsame Funktion für Unterkunfts- und Gruppenseite. | B-08 | 2 | ~1 h |
| **M-16** | **Ausstattungs-Wording ausformulieren** statt `Label: Wert` („Außenpool" statt „Pooltyp: Im Freien", „Zwei Sonnenliegen", „Private Terrasse"). | B-09 | 1 | ~1,5 h |
| **M-17** | **Preisspannen prüfen** und ggf. differenzieren; falls bewusst identisch, auf der Sammelseite erklären. | A-06 | 1 | Betreiber |
| **M-18** | ⚠️ **Betreiberentscheidung: Positionierung Family & Surf.** Name, Title und Fließtext senden drei verschiedene Signale. Erst nach dieser Entscheidung sind M-12 und die Meta-Daten sinnvoll final zu setzen. | B-02 | — | Betreiber |

---

### 🟢 P3 — SEO und strukturierte Daten

| # | Maßnahme | Behebt | Klasse | Aufwand |
| --- | --- | --- | --- | --- |
| **M-19** | **H1 um Typ und Ort erweitern** („AMARA Lounis — Ferienwohnung in Frigilianas Altstadt"), fünfsprachig aus vorhandenen Feldern ableitbar. | D-06 | 2 | ~1,5 h |
| **M-20** | **Meta-Descriptions auf 140–158 Zeichen angleichen** (Maha ×2, Farah EN). | D-04 | 1 | ~45 min |
| **M-21** | **`floorSize` und Bettgröße ins Schema** aufnehmen. | D-02, D-03 | 2 | ~1 h |
| **M-22** | **`aggregateRating` prüfen** — nur umsetzen, wenn objektbezogene Bewertungen vorliegen und die Auszeichnung richtlinienkonform ist. Sonst bewusst weglassen. | D-01 | 2 | Prüfung |

---

### ⚪ P4 — Design und Hygiene

| # | Maßnahme | Behebt | Klasse | Aufwand |
| --- | --- | --- | --- | --- |
| **M-23** | **Hierarchie wiederherstellen:** Sektionsüberschriften der Unterkunftsseite auf `am-text-subtitle`, Hero-Headline behält `am-text-title`. Rein lokale Klassenwahl — die Typografie-Tokens selbst bleiben unangetastet. | C-01, C-02 | 2 | ~1,5 h |
| **M-24** | **Zweispalten-Detailbereich neu ausbalancieren** (nach M-02 ist das Akkordeon ohnehin kürzer). | C-03 | 2 | ~1,5 h |
| **M-25** | **Ein Plus-Zeichen-Konzept:** Highlight-Bullet auf ein neutrales Zeichen umstellen, „+" bleibt dem Akkordeon vorbehalten. | C-04 | 0–2 | ~30 min |
| **M-26** | **10-px-Text auf 12 px anheben** (Preiseinheit, Gebührenfußnote). | C-05 | 2 | ~30 min |
| **M-27** | **Tote Strings und Felder entfernen** (55 ungenutzte Labels, `shortName`). | E-01, E-02 | 0 | ~30 min |

---

### 🚫 Bewusst nicht empfohlen

| Thema | Begründung |
| --- | --- |
| Route `romantic-hideaways` umbenennen | Class 3 (Routen-Ownership, Canonical/hreflang, Link-Registry). Der Label-Route-Bruch (B-10) ist kosmetisch; die Umbenennungskosten sind es nicht. |
| Booking-CTA in der globalen Navigation objektspezifisch machen | Class 3 mit Blast Radius über alle Seitenfamilien. M-03 löst dasselbe Problem lokal. |
| JSON-LD-Ausstattungsliste erweitern | Die Filterung auf Googles dokumentierte Taxonomie ist eine bewusste, kommentierte Entscheidung (P-16). Sie soll so bleiben. |
| Aggregierte Gastgeberbewertung als Objektbewertung auszeichnen | Richtlinienrisiko und Widerspruch zur Belegdisziplin aus P-03. |

---

## 5. Zusammenfassung in drei Sätzen

1. **Was gut ist:** Ein Template, eine SSOT, fünf marktnative Sprachen, ehrliche Zugänglichkeitsdaten, belegte Bewertungszahlen, saubere Barrierefreiheit und Kontraste über AA — die Substanz stimmt.
2. **Was fehlt:** Die Seite *informiert* auf hohem Niveau, aber sie *verkauft* nicht — die sechs Unterkünfte sehen im entscheidenden Ausstattungsblock identisch aus, Küche und Außenbereich fehlen ganz, es gibt keine Gästestimme, keinen verstehbaren Preis und auf sieben Bildschirmhöhen keinen objektspezifischen Buchungsbutton.
3. **Was zuerst zu tun ist:** M-01 bis M-03 — sie liegen alle in einer Datei, kosten zusammen etwa einen Arbeitstag und beheben genau die drei Punkte, an denen die Seite heute aufhört zu überzeugen.
