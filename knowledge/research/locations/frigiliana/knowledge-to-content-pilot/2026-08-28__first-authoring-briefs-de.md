# Erste Authoring-Briefs — Frigiliana

Stand: 2026-08-28  
Geltung: deutsche Masterfassung vor Übersetzung  
Status: Briefing, noch keine Freigabe für öffentliche Copy oder Code-Links

## Gemeinsame Regeln

- Jede Seite beantwortet zuerst ihre eigene Gastfrage. Der Übergang entsteht erst aus dem gelösten Seitenjob.
- Die Experience-Auswahl ist eine **variable Speisekarte**, keine feste Tagesroute.
- Eine Zielseite wird nur genannt, wenn der Ausgangstext die passende nächste Gastfrage bereits inhaltlich erzeugt.
- Geteilte Fact IDs erlauben eine begrenzte Projektion, aber keine duplizierte öffentliche Copy.
- AMARA erscheint als konkrete Aufenthaltsfolge aus verifizierter Lage, Zugangssituation oder Ausstattung; nicht als austauschbarer Werbeblock.
- „Wir empfehlen“, „wir gehen“ und ähnliche Gastgeberformulierungen sind nur für echte, datierte Betreibererfahrungen erlaubt.
- Keine neuen Routen, Schemas, Registries, Resolver, Komponentenverträge oder Navigationsgruppen.
- SEO folgt dem Seitenjob: klare Hauptfrage, direkte Antwort, konkrete Entitäten und hilfreiche Konsequenz; keine Keyword-Wiederholungen oder unbelegten Superlative.

## Brief 1 — Location Hub ↔ Experience Hub

**Öffentliche Owner:** `src/content/frigilianaLocationContent.ts` und `src/content/experienceHubContent.ts`

**Gastfrage Location:** Was verändert sich, wenn wir Frigiliana mehrere Nächte als Basis wählen statt den Ort nur kurz zu besuchen?

**Gastfrage Experience:** Wie können wir unsere gemeinsamen Urlaubstage von Frigiliana aus gestalten?

**Erforderliche Erzählfolge:**

1. Location beantwortet Basiswahl, Orientierung, Gelände und Alltagsrhythmus.
2. Location zeigt nur die Bandbreite möglicher Tage; sie enthält keinen Aktivitätskatalog.
3. Daraus entsteht die Frage nach der gewünschten Tagesform.
4. Experience zeigt jede freigegebene Tagesform genau einmal und übergibt Details an Hiking, Beaches, Restaurants oder Old Town.
5. Experience führt erst nach der Kuratierung zur passenden AMARA-Unterkunft.

**Erlaubte Kernfakten:**

- `frigiliana.geography.historic-core.topography-shapes-layout`
- `frigiliana.geography.ingenio.settlement-hinge`
- `frigiliana.geography.sierra.protected-area-context`
- `frigiliana.atmosphere.evening-quiet.observation`
- `frigiliana.climate.regional-proxy.seasonal-contrast`
- `casa-amara.location.calle-chorruelo-calle-real`
- `casa-amara.portfolio.four-stays-three-apartments-one-suite`

**Übergangsgrenze:** Location darf sagen, warum verschiedene Tagesformen von dieser Basis erreichbar oder sinnvoll erscheinen. Experience besitzt Auswahl und Kuratierung. Eine Rückverbindung zu Location ist nur sinnvoll, wenn die Basis oder das Gelände eine konkrete Tageswahl verändert.

**Nicht zulässig:** Gewinnervergleich Frigiliana gegen Nerja, exakte ungeprüfte Fahrzeiten, wiederholte `editorial`-/`moods`-/`catalog`-Auswahl, generisches Wellness- oder Nachtleben, Unterkunftswahl innerhalb des Experience-Katalogs.

## Brief 2 — Geography / Streets & Stairs ↔ Casa AMARA

**Öffentliche Owner:** `src/content/frigilianaGeographyContent.ts`, `src/content/frigilianaStreetsStairsContent.ts`; vollständige Unterkunftsinformation bleibt beim Property Owner.

**Gastfrage:** Welche Ortslage passt zu unserem gewünschten täglichen Weg — und was bedeutet die konkrete Lage von Casa AMARA?

**Erforderliche Erzählfolge:**

1. Geography baut die mentale Karte aus historischem Kern, Calle-Real-Achse, Übergangsbereich und späterer Erweiterung.
2. Streets & Stairs übersetzt diese Struktur in tägliche Wege und Zugangskompromisse.
3. Erst danach dient Casa AMARA als konkretes Beispiel innerhalb dieser Lageentscheidung.
4. Die Unterkunftsseite besitzt die vollständige Eingangs- und wohnungsspezifische Zugangserklärung.

**Erlaubte Kernfakten:**

- `frigiliana.geography.historic-core.topography-shapes-layout`
- `frigiliana.geography.historic-core.steps-and-road-access`
- `frigiliana.geography.routes.map-distance-insufficient`
- `frigiliana.stay.barribarto.medieval-core`
- `frigiliana.stay.barribajo.calle-real`
- `frigiliana.stay.historic-mobility`
- `casa-amara.location.calle-chorruelo-calle-real`
- `casa-amara.access.shared-entrance-and-internal-steps`
- `casa-amara.access.village-core-route-after-door`

**AMARA-Projektion:** Publizierbar sind die Lage an Calle Chorruelo als Fortsetzung der Calle Real, die eine gemeinsame Eingangsstufe, die weiteren internen Stufen bei Lounis, Zaid und Maha sowie der stufenfreie Verlauf ab der Haustür in Richtung Dorfkern. Diese Aussagen dürfen nicht zu „Casa AMARA ist barrierefrei“ zusammengezogen werden.

**Nicht zulässig:** ungemessene Meter, Gehzeiten, Höhenvergleiche oder Stufenzahlen; Parkplatz-zur-Tür-Aussagen; „eine der wenigen Unterkünfte“ als Marktbehauptung; die alte ungeprüfte 15-Meter-Angabe zu San Antonio.

## Brief 3 — Experience Hub ↔ Romantic Hideaways

**Ausgangs-Owner:** `src/content/experienceHubContent.ts`  
**Ziel-Owner:** Romantic Hideaways und die jeweiligen Unterkunftsseiten

**Nächste Gastfrage:** Welche Unterkunft unterstützt die Art gemeinsamer Zeit, die wir uns für diese Tage wünschen?

**Erforderlicher Übergang:** Eine Tagesform darf mit der Wahl zwischen einem weiteren öffentlichen Programmpunkt und privater gemeinsamer Zeit enden. Erst dann folgt die Unterkunftsauswahl.

**Erlaubte Kernfakten:**

- `casa-amara.portfolio.four-stays-three-apartments-one-suite`
- `casa-amara.location.calle-chorruelo-calle-real`
- `casa-amara.terraces.shared-amenities`
- `casa-amara.terraces.sunset-observation`

**AMARA-Projektion:** Für Lounis, Zaid und Maha ist eine begrenzte Rückkehr-Szene mit privater Terrasse, Außendusche, Hängematte und zwei Liegen erlaubt. Beobachtete Sonnenuntergänge dürfen nur als persönliche, nicht garantierte Beobachtung erscheinen.

**Eigentumsgrenze:** Experience besitzt den emotionalen Abschluss des Tages. Romantic Hideaways besitzt den Vergleich der vier Unterkünfte. Die jeweilige Property Page besitzt vollständige Ausstattung, Zugang, Eignung und Buchungsargumente.

**Nicht zulässig:** Farah dieselbe Terrasse zuschreiben; jede Aktivität automatisch mit einer Terrassenszene beenden; ungeprüfte Privatsphäre-, Honeymoon- oder Aussichtsgarantien; Inventarlisten im Experience Hub.

## Brief 4 — Burriana Beach ↔ AYO

**Öffentliche Owner:** `src/content/frigilianaBeachesContent.ts` und `src/content/frigilianaRestaurantsContent.ts`

**Gastfrage Beaches:** Welcher Strand passt zu einem unkomplizierten, infrastrukturell gut ausgestatteten Küstentag mit Mittagessen vor Ort?

**Gastfrage Restaurants:** Welches konkrete Tagesrestaurant gehört räumlich und zeitlich zu diesem Burriana-Tag?

**Erlaubte Fakten:**

- `nerja.beaches.burriana.profile-and-listed-services`
- `nerja.beaches.accessibility-points-2026`
- `nerja.beaches.blue-flags-2026`
- `nerja.restaurants.ayo.burriana-daytime-service-2026`

**Erforderlicher Übergang:** Beaches erklärt zunächst Burrianas urbanes Serviceprofil. Die Essensfrage entsteht innerhalb dieses Strandprofils. Restaurants beantwortet anschließend den konkreten Ort und Tageszeit-Kontext von AYO. Restaurants darf auf Burriana zurückführen, wenn der Strandkontext für die Restaurantwahl relevant ist.

**Live-Grenze:** Aktuelle Öffnung, Verfügbarkeit und gegebenenfalls Reservierungslogik werden zeitnah geprüft und nicht als dauerhaft garantiert.

**Nicht zulässig:** persönliche Lieblingsrestaurant-Sprache ohne Betreiberbeleg, garantierte Verfügbarkeit, erfundene Tisch- oder Gerichtsempfehlungen, Übertragung dieser Verbindung auf andere Strände oder Lokale, anschließender Sundowner ohne eigene Kombinationsevidenz.

## Freigabereihenfolge

1. Zuerst Brief 1 strukturell auf die bestehenden Location- und Experience-Inhalte abbilden.
2. Danach Brief 2 auf Geography und Streets & Stairs abbilden.
3. Brief 3 nur an den passenden Experience-Tagesformen einsetzen, nicht als wiederholten CTA.
4. Brief 4 als ersten vollständigen Spoke-zu-Spoke-Pilot verwenden.
5. Deutsche Copy gemeinsam mit den kontextuellen Übergängen reviewen; erst danach fünfsprachig übertragen und lokal rendern.

## Technische Leitplanken für die spätere Umsetzung

| Thema | Bestehende Repository-Realität | Verbindliche Umsetzung | Nicht freigegeben |
|---|---|---|---|
| Farah und die Terrassen-Szene | Die Unterkunftsdaten in `src/content/vacationRentalEntities.ts` unterscheiden Farah bereits ausdrücklich von Lounis, Zaid und Maha; Farah hat dort keinen privaten Außenbereich. Der Knowledge-Fakt `casa-amara.terraces.shared-amenities` gilt ebenfalls nur für Lounis, Zaid und Maha. | Die Projektion nennt oder übergibt die drei berechtigten Einheiten ausdrücklich. Ein generischer Render über alle vier Unterkünfte ist unzulässig. Falls die vorhandene Komponente keine explizite Auswahl erlaubt, wird vor einer technischen Änderung gestoppt. | Kein neues Zod-Schema und kein neuer Collection-Vertrag allein für diese Ausnahme. Eine solche Architekturänderung benötigt separate Freigabe. |
| AYO und volatile Verfügbarkeit | Es gibt derzeit keinen kanonischen `offline`-Status und keinen Live-Verfügbarkeitsresolver für Restaurants. Der öffentliche Ziel-Owner ist die Restaurantseite, nicht eine eigenständige AYO-Route. | Vor Veröffentlichung wird der volatile Betreiberfakt aktuell geprüft. Der Beach-Übergang führt zur weiterhin sinnvollen Restaurantseite und darf nicht als garantierter AYO-CTA formuliert werden. Bei dauerhafter Schließung wird die konkrete Verbindung redaktionell entfernt oder neu belegt. | Kein neuer Offline-Resolver, keine simulierte Live-Verfügbarkeit und kein Fallback-System ohne eigenen Architekturentscheid. |
| SEO-Isolation | `BaseLayout.astro` erzeugt zentral genau einen `data-amara="seo"`-Block. Die Content-Owner besitzen bereits getrennte `AmaraAuthoringSeo`-Objekte mit `en`, `de`, `es`, `nl`, `sv` und `canonical: 'auto'`. | Die bestehenden SEO-Exporte jeder Seite bleiben getrennt und vollständig. Inhaltliche Übergänge verändern weder Zielseiten-Metadaten noch Canonical-Zuordnung. | Keine zusätzlichen SEO-Blöcke pro Übergang und keine neue Resolver-Logik. |
