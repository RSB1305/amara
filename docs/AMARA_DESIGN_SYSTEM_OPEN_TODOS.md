# AMARA Design System — offene Arbeiten

**Stand:** 2026-08-25

**Gesamtstatus:** IN ARBEIT

**Ausgangspunkt:** Ausnahmebasierter Silo-Querschnitt auf Repository-Stand `3b9fb6c`

Diese Datei ist eine operative Statusliste und kein neuer Architekturvertrag. Die Punkte bleiben Kontext, bis der Betreiber sie als konkreten Arbeitsauftrag auswählt.

## Offene Punkte

| ID | Status | Thema | Ziel / Erledigt, wenn |
|---|---|---|---|
| DS-01 | **OFFEN** | Mobile-First- und Conversion-Prüfung | Die wichtigsten Gästewege — Home, Themen-/Trust-Seite, Unterkunft, Verfügbarkeit und Übergang zu Lodgify — sind auf realistischen Smartphone-Viewports systematisch geprüft. Festgestellte Reibungspunkte sind priorisiert und die kritischen Punkte behoben. |
| DS-02 | **OFFEN** | Messbare Performance-Basis | Für repräsentative Seitentypen liegen reproduzierbare mobile Messwerte einschließlich Core Web Vitals vor. Erst danach kann belastbar bewertet werden, ob die Umstellung die reale Geschwindigkeit verbessert hat und welche Optimierungen tatsächlich notwendig sind. |
| DS-03 | **IN ARBEIT** | Lebender AMARA-Styleguide | Der Typografie-Restbestand ist vollständig geschlossen: Der Ratchet steht bei 0. Der Styleguide rendert für Typografie, Actions, Links, Chips, Status und die freigegebenen Hero-Familien ausschließlich Produktionsowner; weitere Modulcluster werden bei ihrer Freigabe ergänzt. |
| DS-04 | **OFFEN** | Verbleibende Sonderlösungen der Location-Seiten | Die großen individuellen Location-Renderer sind auf tatsächlich wiederkehrende Inhalts- und Präsentationsmuster geprüft. Nur echte Wiederholungen werden konsolidiert; unterschiedliche Seitenaufgaben und Inhalte bleiben erhalten. |
| DS-05 | **OFFEN** | Lodgify-Übergang und Checkout-Gestaltung | Die technischen Möglichkeiten und die Empfehlung von Lodgify zur Einbindung, insbesondere iFrame versus externer Checkout, sind geklärt. Danach sind Buchungsarchitektur, Datenschutz, mobile Bedienung und der visuelle Übergang verbindlich entschieden und umgesetzt. |
| DS-06 | **IN ARBEIT** | Cross-Silo-Ausnahmen und Baukasten | Gleiche UI-Aufgaben in Trust, Stay, Location und Experience sind als Cluster klassifiziert. Jedes Cluster ist `canonical`, bewusste `family`-Variante, `experimental`, `legacy` oder `retired`; neue lokale Varianten entstehen nicht neben einem bereits identifizierten gemeinsamen Job. |

## Aktive Ausnahmebasis

| Cluster | Aktueller Befund | Nächste Entscheidung |
|---|---|---|
| Typografie | Alle 32 Legacy-Vorkommen in 14 Dateien sind nach UI-Job aufgelöst. Vorhandene Rollen wurden wiederverwendet; Marken-Tagline, Hero-Markierung, Datenhinweis und Grafikwert besitzen begründete gemeinsame Rollen. Der Ratchet steht bei 0 und verhindert jeden neuen typografischen Einzelwert. | Abgeschlossen. Neue Größen-, Gewicht-, Laufweiten-, Schreibweisen- und Zeilenhöhenentscheidungen müssen in einer benannten Rolle im Produktionsowner getroffen werden. |
| Actions und Links | Der ausführbare Vertrag ist vollständig: `AmaraActionLink` besitzt Primary-/Secondary-, Editorial-, Inline-, Guide- und Card-Varianten sowie sichere External-, Inverse- und nicht-interaktive Disabled-Semantik; `AmaraActionButton` besitzt Disabled- und Loading-Semantik. Gemeinsame Owner aus Navigation, Home, Trust, Stay, Location, Experience und Editorial sind migriert; der Styleguide zeigt ausschließlich diese Produktionskomponenten und Zustände. | Verbleibende direkte Klassen in großen Page-Family-Renderern werden bei deren materieller Überarbeitung auf den Owner migriert. Die dynamisch vom Buchungsskript befüllte Checkout-Fläche und ein visuelles Inline-Label innerhalb einer bereits verlinkten Experience-Card bleiben bewusst als Familienanwendungen klassifiziert. |
| Passive Pills und Status | Die neun früheren Location-Rezepte sind klassifiziert und migriert: `AmaraMetaChip` besitzt neutrale und akzentuierte passive Information; `AmaraStatusBadge` ist auf echte Festival-Datumszustände begrenzt. Icon-Flächen bleiben ausdrücklich außerhalb dieses Clusters. | Abgeschlossen. Neue passive Fakten verwenden den Meta-Chip; dekorative Hervorhebung darf nicht als Status-Badge ausgegeben werden. |
| Interaktive Chips | Der Amenities-Filter verwendet `AmaraFilterChip` als kanonischen Toggle-Button mit zugänglichem Selected- und Disabled-Zustand. Der zuvor lokale CSS-Owner ist entfernt; der Styleguide rendert die Produktionskomponente. | Abgeschlossen. Weitere Filter dürfen den Owner wiederverwenden, aber passive Labels und Navigation bleiben semantisch getrennt. |
| Hero-Familien | `heroContract.ts` klassifiziert alle freigegebenen Owner maschinenlesbar; Trust, Stay, Location/Experience Media Authority, Experience Editorial Authority und Campaign Media sind bewusste `family`-Varianten. Der Stay-Entscheidungs-Hero ist aus dem großen Seitenrenderer in `StayHero` überführt. Der Styleguide rendert reale Produktionsowner. | Abgeschlossen für den aktiven Cluster. Verbleibende direkte Hero-Kompositionen sind Legacy und werden bei materieller Überarbeitung ihrer Page Family einem bestehenden Owner zugeordnet oder als neuer Job explizit klassifiziert. |
| Interne Designansichten | Styleguide, Component Library und Design Lab zeigen nicht durchgehend denselben Implementierungsstand; Styleguide-only Badges sind keine öffentlichen Komponenten. | Styleguide auf Produktionsowner umstellen; Bestandsanzeige zusammenführen oder klar trennen. |
| Scoped Styles | 39 Produktions-Astrodateien besitzen component-owned Styles. Das ist vertragskonform; nur siloübergreifend wiederholte UI-Jobs sind Konsolidierungskandidaten. | Nicht pauschal zentralisieren, sondern ausnahme- und jobbezogen prüfen. |

## Bereits erreichte Ausgangslage

Die zentralen öffentlichen Seitenfamilien verwenden inzwischen deutlich mehr gemeinsame Layout-, Section- und Typografie-Steuerung. Die verbleibenden Arbeiten sind daher eine gezielte Professionalisierung des neuen gemeinsamen Systems und kein Anlass für einen vollständigen Neuaufbau. Der normative Steuerungsrahmen für diese Arbeit steht in Astro & Design Architecture Contract 4.5.0; diese Datei hält nur Arbeitsstand und Ausnahmebasis.
