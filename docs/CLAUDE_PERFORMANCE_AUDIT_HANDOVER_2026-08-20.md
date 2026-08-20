# AMARA Performance Audit — Umsetzungsbericht für Claude

Stand: 20. August 2026

Arbeitsbranch: `codex/claude-performance-audit`

Ausgangspunkt: lokaler `main` bei `72ca2f1`, zu diesem Zeitpunkt einen Commit hinter `origin/main`

## Kurzfazit

Umgesetzt wurden die Maßnahmen, die im aktuellen Repository reproduzierbar waren, einen klaren Besucher- oder Accessibility-Nutzen haben und sich begrenzt validieren ließen. Breite Architektur- und Markup-Umbauten wurden nicht zusammen mit den kleinen Korrekturen ausgerollt. Einige Auditannahmen waren im aktuellen Stand bereits erledigt oder ließen sich im Browser nicht bestätigen.

Der AVIF-Wechsel wurde bewusst als Opt-in-Pilot statt global eingeführt. Ein globaler Versuch erhöhte die Bildtransformationen von 940 auf 1.407. Der Pilot erzeugt insgesamt 944 Varianten, also nur vier zusätzliche AVIF-Dateien, und behält WebP als Fallback.

## Umgesetzt

### Kontrast und Navigation

- Alle im Audit genannten Kleinschrift-Muster mit zu geringer Alpha-Deckkraft wurden auf das bereits vorhandene, feste `text-muted`-Token umgestellt. Es wurde kein zweites Farbsystem eingeführt.
- Der schlechteste geprüfte Fall, die 8-px-Zeile „Lodging“, erreicht nun 5,14:1 statt 2,46:1 und besteht damit WCAG AA.
- Der Sprachumschalter besitzt nun `aria-controls` und eine passende Popover-ID.
- Hover, Klick, Escape und `aria-expanded` werden aus demselben JavaScript-Zustand gesteuert. Die vorherige rein visuelle CSS-`:hover`-Öffnung wurde entfernt.

Begründung: direkter Nutzen für Lesbarkeit und Screenreader bei kleinem, gut begrenztem Risiko.

### Mobiler Überlauf der Unterkunftsseiten

- Der Full-Bleed-Rahmen und der eigentliche horizontale Galerie-Scroller wurden getrennt.
- Der Hauptbereich der Vacation-Rental-Seiten begrenzt nun ausschließlich den Dokument-Overflow; die Galerie selbst bleibt horizontal scrollbar.
- Im Browser geprüft: fünf Unterkunftsseiten haben bei 375 px Viewport exakt 375 px Dokumentbreite. Der Galerie-Scroller behält 2.592 px scrollbaren Inhalt.

Begründung: reproduzierbarer mobiler Qualitätsfehler ohne Redesign.

### Wetter-Widget

- Nur noch die aktive Sprache wird in das Seitenskript serialisiert.
- Das Inline-Skript sank gemessen von etwa 14,6 KB auf 8,7 KB.
- Die Unterzeile reserviert vor dem Wetter-Fetch bereits zwei Textzeilen. Im verzögerten Browser-Test blieb ihre Höhe vor und nach der Antwort exakt 31,19 px.
- Der Open-Meteo-Laufzeit-Fetch bleibt bestehen.

Begründung: klare Payload- und CLS-Verbesserung. Der Live-Fetch wurde beibehalten, weil der Guest-Utility-Vertrag aktuelle praktische Informationen vorsieht; Build-Zeit-Wetter würde schnell veralten und zusätzliche Deployments erzwingen.

### Guest-Guide-Video

- `preload="metadata"` wurde durch `preload="none"` ersetzt.
- Die echten Videomaße 1280 × 720 sind im Markup hinterlegt.

Begründung: verhindert den potenziellen 2,07-MB-Abruf bei geschlossenem Accordion und reserviert das korrekte Seitenverhältnis.

### AVIF-Pilot

- `AmaraImage` unterstützt jetzt opt-in AVIF mit WebP-Fallback.
- Eigene AVIF-Qualitäten wurden in die vorhandenen Bildprofile aufgenommen.
- Aktiviert ist der Pilot ausschließlich für das Host-Porträt auf „About Us“.
- Vier AVIF-Varianten sind zusammen rund 21,7 % kleiner als die entsprechenden WebP-Varianten.
- Chromium wählte im Browser tatsächlich die AVIF-Quelle; die Darstellung wurde visuell geprüft.

Begründung: reale Einsparung mit kontrollierter Build-Zeit und sehr kleiner Markup-Reichweite. Eine globale Aktivierung wäre aktuell unverhältnismäßig teuer im Build.

### Tote Tailwind-Konfiguration

- `tailwind.config.mjs` wurde entfernt.

Begründung: Tailwind 4 lädt diese Datei ohne `@config` nicht. Typecheck und Build blieben nach der Löschung unverändert erfolgreich.

## Nicht oder nur teilweise umgesetzt

| Auditpunkt | Entscheidung | Kurze Begründung |
|---|---|---|
| 01 SVG-Sprite für Amenities | Zurückgestellt | Der Befund ist plausibel und bleibt ein sinnvoller eigener Run. Der Umbau betrifft 46 Glyphen und die Seitenstruktur, senkt den DOM laut Audit aber weiterhin nicht unter 1.400 Knoten. Deshalb nicht mit den risikoarmen Korrekturen vermischt. |
| 02 AVIF global | Teilweise umgesetzt | Technische Unterstützung und Pilot sind vorhanden. Global entstanden 1.407 statt 940 Transformationen; daher kein siteweiter Rollout ohne eigene Build-Zeit- und Qualitätsentscheidung. |
| 03 Utility-Klassen bündeln | Nicht umgesetzt | Repository-weiter Markup-/CSS-Umbau mit hoher Diff-Reichweite. Wiederholte Klassen komprimieren sich zudem gut per gzip. Sinnvoll nur vorlagenweise und mit HTML-/CSS-Messung. |
| 04 CSS vollständig inlinen | Nicht umgesetzt | Hängt ausdrücklich von Punkt 03 ab. Bei derzeit rund 17,8 KB gzip würde `always` das CSS in jedes HTML-Dokument duplizieren. |
| 05 Hero-Blur ersetzen | Nicht umgesetzt | Visuelle Designänderung ohne gemessenen Gerätegewinn. Benötigt einen isolierten Vorher-/Nachher-Vergleich. |
| 06 About-Porträt eager laden | Nicht umgesetzt | Die Auditannahme bestätigte sich nicht: Das Bild begann im 1280 × 800-Browsertest erst bei y ≈ 914 und lag damit unterhalb des Falzes. `loading="lazy"` bleibt korrekt. |
| 07 Wetter zur Build-Zeit laden | Nicht umgesetzt | Würde aktuelle Gästeinformationen an Deploy-Zeitpunkte koppeln und widerspricht dem Live-Utility-Zweck. Locale-Payload und CLS wurden stattdessen behoben. |
| 08 Poster und MP4-Dublette | Teilweise umgesetzt | Preload und Maße sind korrigiert. Es existiert kein freigegebenes Poster. Die zweite Datei unter einem stabilen `/images/`-Pfad wurde wegen des Public-Image-Vertrags nicht gelöscht. |
| 09 Font-Ladeplan | Nicht umgesetzt | Newsreader-Gewichte sind eine sichtbare Typografieentscheidung. WOFF-Dateien im Deploy verursachen ohne Request keinen PSI-Laufzeitaufwand. Kein sicherer Micro-Fix. |
| 10 `data-amara="seo"` entfernen | Nicht umgesetzt | Teil des SEO-/Structured-Data-Vertrags und daher kein Performance-Cleanup ohne eindeutige Consumer- und Owner-Prüfung. |
| 11 Redirects entdoppeln | Nicht umgesetzt | Benötigt zuerst eine Messung gegen Cloudflare. Ohne bestätigte Edge-Priorität wäre das Entfernen einer Redirect-Schicht riskant. |
| 12 stabile Bilder entfernen | Nicht umgesetzt | Die stabilen `/images/`-URLs sind ein expliziter Vertrag für OG, JSON-LD und bereits geteilte Adressen. Deploy-Größe allein rechtfertigt keinen Vertragsbruch. |
| 13 Header-Höhe zentralisieren | Nicht umgesetzt | Siteweiter Layoutvertrag, kein direkter Performancegewinn und hohe visuelle Reichweite. Gehört in einen eigenen Class-3-Run. |
| 14 Tailwind-v3-Konfiguration | Umgesetzt | Datei war nachweislich wirkungslos. |
| A1 Kontrast | Umgesetzt | Bestehendes geprüftes Token statt neuer globaler Farbrolle verwendet. |
| A2 Horizontaler Überlauf | Teilweise umgesetzt | Alle betroffenen Unterkunftsseiten wurden korrigiert. `tarifa-location` maß im aktuellen Build bereits 375 px bei 375 px Viewport und benötigte keine Änderung. |
| A3 Sprachumschalter-ARIA | Umgesetzt | Sichtbarer Zustand und Accessibility-Zustand sind nun synchron. |
| A4 Touch-Ziele/Lightbox-Alt | Nicht umgesetzt | Touch-Ziele waren im Audit nur ein Prüfauftrag, kein reproduzierter Lighthouse-Fehler. Der Lightbox-Alternativtext wird im aktuellen Code bereits beim Öffnen mit `image.alt = current.alt` gesetzt. |
| A5 `noopener` | Bereits erledigt | Die aktuellen `target="_blank"`-Links der geprüften Location-Authority-Seiten besitzen bereits `rel="noopener noreferrer"`; keine Änderung nötig. |

## Validierung

- Astro-Build: 521 Seiten erfolgreich erzeugt
- Bildvarianten: 944 insgesamt, davon exakt vier AVIF-Pilotvarianten
- Typecheck: 0 Fehler, 0 Warnungen, sechs bestehende Hinweise
- Contract-Tests: 66/66 bestanden
- Browser-Suite: 54 unveränderte Tests bestanden; nach Korrektur des Hover-/Klick-Randfalls 13/13 Navigationstests bestanden
- AMARA Image Policy: Quellcode- und Dist-Audit bestanden
- Mobile Browsermessung: fünf Rental-Seiten ohne Dokument-Overflow
- Wetter-Mocktest: keine Höhenänderung der nachgeladenen Unterzeile
- Browserkonsole bei der finalen Sichtprüfung: 0 Fehler, 0 Warnungen
- Git-Arbeitsbaum: sauber

Der vollständige `npm test`-Lauf fand zunächst einen Sprachmenü-Randfall beim Klick nach Pointer-Hover. Dieser wurde anschließend korrigiert; die gesamte Navigationstestdatei lief danach mit 13/13 Tests grün.

## Lokale Commits

1. `4ed13db` — Improve navigation accessibility and text contrast
2. `216d846` — Reduce guest guide runtime payload
3. `27dfb4e` — Fix mobile rental gallery overflow
4. `0aad0d2` — Add opt-in AVIF image delivery pilot
5. `3a515ea` — Remove unused Tailwind v3 configuration

Es wurde nichts gepusht und kein externer Build ausgelöst.

## Bekannter Git-/Postbuild-Hinweis

Der Arbeitsbranch basiert einen Commit hinter `origin/main`. Der fehlende Remote-Commit `ce63a89` korrigiert ausschließlich den Structured-Data-Audit für die responsive Experience-Navigation. Deshalb war der Astro-Build erfolgreich, während der nachgelagerte lokale Structured-Data-Check auf dem älteren Stand noch den bereits remote behobenen Navigation-Zählfehler meldete. Dieser Fehler stammt nicht aus den hier dokumentierten Änderungen.
