# Tarifa-Kitesurf-Cluster — Stand 03.09.2026 (nach Stufe 3)

Übergabe an Claude Code. Alle inhaltlichen Vorarbeiten liegen in diesem Ordner.

## Was bereits umgesetzt und geprüft ist

### Stufe 1 — Routen (erledigt)

Routenstruktur korrigiert, `npm run build` grün, alle Prebuild-Gates bestanden:

| Route | Rendert | Status |
|---|---|---|
| `tarifa-kitesurfing` | `TarifaKitesurfHubPage` | neu angelegt, fünfsprachig |
| `tarifa-wind-kitesurfing` | `TarifaKitesurfWindPage` | bestehende Route, Ziel gewechselt |
| `tarifa-kitesurf-spots` | `TarifaKitesurfSpotsPage` | unverändert |
| `tarifa-kitesurf-wind-spots` | — | entfernt |

Der Link-Token `tarifa_kitesurf_wind_spots` wurde vollständig durch `tarifa_wind_kitesurfing_authority` ersetzt; der neue Hub-Token heißt `tarifa_kitesurfing_hub`.

Nachtrag: Der zweite „Weiter“-Link der Wind-Seite zeigte nach der Token-Zusammenführung auf die Kiteschule statt auf den Hub. Korrigiert; die übrigen Related-Listen (Hub-Spokes untereinander, Spots-Spoke → Wind-Seite) waren korrekt.

### Stufe 2 — Redaktion Deutsch (erledigt)

`src/content/tarifaKitesurfWindContent.ts` trägt den freigegebenen deutschen Text. AEMET ist als amtlicher Wetterkontext beschriftet, nicht als Forecast-Quelle des Live-Briefings; die Provenienz-Labels zeigen auf Open-Meteo. Roberts Passage steht wörtlich.

Ermessensentscheidung aus Stufe 2, zum Gegenlesen: Der Halbsatz „dafür braucht ihr eine eigene Rescue-Card“ (Partner-Block) wurde weggelassen, weil er als Kaufaufforderung im Rescue-Kontext unter die Blacklist fällt. Der Satz „Beim reinen Materialverleih ist sie es nicht“ steht.

### Stufe 3 — Gestaltung und fehlende Inhalte (erledigt)

**Layout-Audit, Ursachen und Fixes.** Die Seite lief in der flush gesetzten Autoritäts-Hülle (`AmaraPageShell flush whiteCanvas`), aber ihre Sektionen saßen direkt auf `AmaraSection` ohne eigenen Seitenrand. Folge: plain-Sektionen ohne Gutter, tint/inverse-Sektionen mit negativem Rand 48 px über den weißen Rahmen hinaus, und `surface="tint"` war farblich identisch mit dem Rahmen. Alle Sektionen sitzen jetzt auf `LocationModule` (Gutter, Abstände und Flächen wie bei den Geschwister-Spokes); Tint ist damit `surface-container-low` und sichtbar. Intro-Absätze tragen die Body-Rolle; Subtitle nur noch für Statements (Pflichtsatz, Lagune, Plan B). Das 5/7-Raster im Briefing ist durch Kopf plus vierteiliges Datenband ersetzt. Das Hero-Bild (Teamfoto, Querformat 3:2) wurde vom Standard-Hero in ein 3:4-Porträt beschnitten; es läuft jetzt über den `visual`-Slot in seinem eigenen Seitenverhältnis. Alt-Text entsprechend korrigiert.

**Neue Inhalte, in allen fünf Sprachen nativ angelegt:** Marks drei Zitate (`partner.voice`), das Rescue-Zitat (`safety.rescueQuote`), der Gezeiten-Absatz (`safety.tides`), die Schlusszeile (`closing.finalLine`), die Beispielzeile mit zehn Glossar-Einträgen (`windguru.example`, `windguru.terms`), die Briefing-Struktur (`live.windText` etc.) sowie Eyebrows/Überschriften für Briefing und Rescue-Sektion. Roberts Zitat ist von einem String auf drei Absätze (`localWind.quote.paragraphs`) umgestellt; ES/EN/NL/SV tragen dafür jetzt die übersetzte, nicht ausgeschmückte Fassung statt des veralteten Alt-Zitats.

**Gebaut:** `src/components/experience/WindguruExampleRow.astro` (beschriftete Beispielzeile, nummerierte Legende, kein fremdes Widget), Zitatblöcke mit Foto für Robert und Mark, privater Rescue-Block (heller Kasten) und Notfallblock (dunkle Fläche) klar getrennt.

## Was als Nächstes ansteht

**Stufe 7 — ES, EN, NL, SV** ist jetzt sinnvoll, weil die Struktur steht. Die vier Sprachen tragen bei den Stufe-2-Schlüsseln noch den Vor-Redaktions-Text (z. B. Hero-Lead, Windguru-Intro, Sicherheits-Intro, Rescue-Intro, Partner-Intro); nur die in Stufe 3 neu angelegten Schlüssel sind bereits nativ.

Stufen 4 bis 6 (Open-Meteo-Gateway, Live-Briefing, AEMET-Warnblock) laufen unabhängig. Die Briefing-Sektion erklärt bis dahin, was sie zeigen wird, ohne leere Werteboxen; die Attributionszeile ist als Labels vorbereitet, aber nicht gerendert.

## Dateien in diesem Ordner

- `redaktions-contract.md` — die einzige inhaltliche Quelle für die Wind-Seite.
- `seitentext-wind-de.md` — der freigegebene deutsche Seitentext.
- `bauauftraege.md` — sieben Stufen, einzeln abnehmbar, jede mit fester Dateiliste.

## Offene Punkte

- „Sea Angels“ wurde laut Mark umbenannt; welcher der beiden heutigen Anbieter daraus hervorging, ist ungeklärt. Der Name erscheint bis dahin nicht auf der Seite.
- Aufnahmeort für den Alt-Text von `mark-tarifa-surf-club.webp`: Der Alt-Text nennt bewusst keinen Ort, obwohl der Seitentext „Los Lances“ vorschlägt. Sobald der Ort bestätigt ist, kann er ergänzt werden.
- AEMET-Warnzonen-ID für Tarifa: Deployment-Blocker für die automatische Warnbox.
- Open-Meteo-Gateway existiert noch nicht. Im Repo liegt nur `weather-gateway/aemet-forecast.mjs`.
- `npm run build` verlangt lokal `PUBLIC_SITE_URL`; der Lauf gemäß `AGENTS.md`: `ASTRO_TELEMETRY_DISABLED=1 PUBLIC_SITE_URL=https://amara-lodging.es npm run build`.
