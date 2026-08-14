# Deep-Research-Auftrag 2: Klimadaten Nerja und Frigiliana — Auflösung des Widerspruchs

**Stand:** 14. August 2026
**Vorgeschichte:** Auftrag 1 hat den ursprünglichen Widerspruch nicht aufgelöst, sondern verdoppelt. Es liegen jetzt **zwei Berichte** vor, die sich gegenseitig widersprechen.
**Wartungspunkt:** W-04

---

## Warum dieser zweite Auftrag nötig ist

Auftrag 1 sollte klären, welcher von zwei Klimadatensätzen für Nerja belastbar ist. Zurück kamen zwei Berichte mit gegensätzlichen Schlüssen:

| Streitpunkt | **Bericht 1** *(mit Quellenverweisen)* | **Bericht 2** *(ohne Quellenverweise)* |
|---|---|---|
| AEMET-Station 6213X | Automatikstation; Archivbeginn laut Infoclimat 28.08.2011 → **keine** durchgehende Reihe 1991–2020 | „Hauptstation", Grundlage des Normdatensatzes |
| Frigiliana | AEMET wörtlich: „No existen estaciones pertenecientes a este municipio" → Rasterpunkt verwenden | Aus 6213X regionalisiert und modelliert |
| Exakte Monatstabellen | **Nicht veröffentlichen**, wäre Scheingenauigkeit | Veröffentlichen, Näherungszeichen entfernen |
| Jahresniederschlag Nerja | ≈450–470 mm plausibel, **nicht final** | **490 mm**, final |
| August, mittleres Tagesmaximum Nerja | zwischen 27 und 30 °C, **nicht bestätigt** | **31,0 °C** |
| Wassertemperatur August | 22,8–24 °C als Monatsmittel; 26 °C nur als Einzelwert | **24,8 °C**, Spitzen 26 °C |
| „300 Sonnentage" | **streichen** — kein definierter Kennwert | behalten, definiert als >60 Min Sonnenschein |
| W-04 | **offen lassen** | schließen |

**Das Kernproblem:** Bericht 2 liefert Zahlen auf die Zehntelstelle für einen Ort, für den Bericht 2 selbst keine durchgehende Messreihe nachweist. Bericht 1 weist genau das als unzulässig zurück.

---

## Der eine Auftrag

Beide Berichte sind sich in **einem** Punkt einig, und darauf zielt dieser Auftrag:

> Die endgültigen Werte müssen aus **einer** Quelle, für **beide** Ortskoordinaten, mit **derselben** Referenzperiode und **derselben** Methode stammen.

Konkret: den **AEMET-Rasterwert der Klimanormalperiode 1991–2020** an zwei Punkten auslesen.

| Ort | Koordinaten | Höhe laut AEMET |
|---|---|---|
| **Nerja**, Ortslage | Gemeindehauptstadt, AEMET-Gemeindeseite Nerja | 20 m |
| **Frigiliana**, Ortslage | 36°47′34″ N / 3°53′55″ W | 315 m |

Zur Abgrenzung, **nicht** als Datenquelle: Die Station AEMET **6213X** („Nerja, Cuevas de Nerja") liegt auf **169 m**, rund 3,4 km von der Ortslage entfernt. Sie ist nicht die Ortslage Nerja und erst recht nicht Frigiliana.

---

## Fragen

### A — Die Datengrundlage

**A1** Existiert in **AEMET OpenData** unter der Ressource „Climatologías normales (1991–2020)" eine vollständige Normalreihe für die Station **6213X**? Bitte Ja oder Nein mit Beleg — nicht mit Vermutung. Falls ja: die zwölf Monatswerte ausgeben. Falls nein: das ausdrücklich feststellen.

**A2** Welche Werte liefert das AEMET-Produkt **„Mapas climáticos de España (1991–2020)"** beziehungsweise der entsprechende Rasterdatensatz an den beiden oben genannten Ortskoordinaten? Gesucht sind je Ort und je Monat:
- mittleres Tagesmaximum (AEMET-Kürzel `TM`)
- mittleres Nachtminimum (`Tm`)
- Niederschlagssumme
- Sonnenstunden, falls im Raster enthalten

**A3** Falls sich A2 aus den öffentlich zugänglichen Oberflächen nicht maschinenlesbar auslesen lässt: **Sagt das bitte klar.** „Nicht extrahierbar" ist eine akzeptable und nützliche Antwort. Nennt in dem Fall den Weg, auf dem die Werte beschafft werden könnten — API-Endpunkt, Datensatzkennung, Antragsverfahren, Kosten.

> **Wichtig:** Eine erfundene oder aus Nachbarstationen hochgerechnete Tabelle ist schädlicher als gar keine. Wenn die Werte nicht vorliegen, wollen wir das wissen, nicht eine plausible Schätzung.

### B — Die strittigen Einzelwerte

Bitte je Wert: welcher stimmt, mit Quelle und Referenzperiode.

**B1 Jahresniederschlag Nerja.** Im Umlauf sind 292 mm, 471 mm (Climate-Data, 1991–2021), 490 mm (Bericht 2) und 534 mm (AEMET Málaga Aeropuerto 1981–2010, anderer Ort). Welcher Wert gilt für die Ortslage Nerja?

**B2 August, mittleres Tagesmaximum Nerja.** Im Umlauf sind 27,0 °C (Climate-Data), 27,5 °C (Weather Atlas), 30,0 °C (WeatherSpark), 31,0 °C und 32 °C. Welcher gilt?

**B3 Der Tageshitze-Vergleich Nerja gegen Frigiliana.** Bericht 1 sagt, die Behauptung „Frigiliana tagsüber heißer" sei die am schlechtesten abgesicherte Aussage überhaupt; WeatherSpark zeige eher Gleichstand mit leichtem Vorteil für Nerja. Bericht 2 behauptet 31,5 gegen 31,0 °C zugunsten Frigilianas.
**Ist im Hochsommer tagsüber ein Unterschied messbar — und wenn ja, in welche Richtung und wie groß?**

**B4 Der Nachtunterschied.** Beide Berichte deuten in dieselbe Richtung: Nerja bleibt nachts milder. Bericht 2 beziffert August mit 21,5 gegen 20,1 °C, Januar mit 8,5 gegen 7,2 °C. **Lässt sich diese Differenz aus einer gemeinsamen Quelle belegen?**

**B5 Wassertemperatur.** Gesucht ist das langjährige **Monatsmittel** der Meeresoberflächentemperatur vor Nerja, alle zwölf Monate, mit Quelle und Referenzperiode. Bitte ausdrücklich trennen von sommerlichen Spitzen- oder Vorhersagewerten.

**B6 Sonnenschein.** AEMET führt für Málaga Aeropuerto (1981–2010) **2.905 Sonnenstunden**, aber nur **109,1 „días despejados"** pro Jahr. Climate-Data nennt für Nerja rund 3.457 Stunden bei Referenzperiode 1999–2019.
- Welche Sonnenstundenzahl gilt für Nerja, mit welcher Referenzperiode?
- **Gibt es überhaupt einen definierten meteorologischen Kennwert, der „Sonnentage" heißt?** Falls nein, bitte das feststellen — wir streichen die Aussage dann.

### C — Der Höhenunterschied

**C1** Die Ortslagen unterscheiden sich um **295 m** (20 m zu 315 m), die Station 6213X von Frigiliana nur um **146 m**. Welcher Unterschied ist für den Vergleich der beiden Orte maßgeblich?

**C2** Bericht 2 wendet einen Höhengradienten an und argumentiert zugleich, die Südhang-Einstrahlung kompensiere ihn vollständig. Bericht 1 hält pauschale Höhenkorrekturen für methodisch unzulässig.
**Ist die Kompensationsthese durch Messdaten gestützt oder ist sie eine Annahme?**

---

## Anforderungen an die Antwort

1. **Quelle pro Wert.** Link, Herausgeber, Referenzperiode, Stations-ID oder Rasterkennung. Ein Wert ohne Herkunft ist für uns unbrauchbar — das war der Auslöser dieses gesamten Vorgangs.
2. **Trennt Messung, Interpolation und Schätzung sichtbar.** Wenn ein Wert modelliert oder abgeleitet ist, muss das am Wert selbst stehen, nicht nur in einer Fußnote.
3. **„Nicht ermittelbar" ist eine gültige Antwort.** Wir bevorzugen eine ehrliche Lücke gegenüber einer plausiblen Erfindung.
4. **Keine Marketingaussagen.** Superlative wie „mildeste Winter" prüfen wir nur, wenn eine definierte Metrik und eine Vergleichsgrundgesamtheit genannt werden.
5. **Widersprüche stehen lassen.** Wenn zwei seriöse Quellen sich unterscheiden, wollen wir beide sehen, nicht einen Mittelwert.

## Ausgabeformat

**Teil 1 — Verdikt zu jedem Streitpunkt aus der Tabelle oben.** Je eine Zeile: Aussage, Urteil, Quelle.

**Teil 2 — Falls A2 gelingt:** zwei Monatstabellen, je zwölf Zeilen, mit einer gemeinsamen Quellenzeile.
**Falls A2 nicht gelingt:** ausdrücklich feststellen und den Beschaffungsweg beschreiben.

**Teil 3 — Formulierungsvorschlag für den Vergleichsblock**, sprachlich vorsichtig genug, dass er auch dann trägt, wenn die exakten Zahlen noch fehlen.

**Teil 4 — Liste der Angaben, die binnen zwölf Monaten veralten.**

---

## Was wir mit dem Ergebnis machen

- Vergleichstabelle Nerja/Frigiliana auf die belegte Aussage umstellen, alle fünf Sprachen
- Nerja- und Frigiliana-Wetterseite auf **dieselbe** Datengrundlage bringen
- Quellenzeile sichtbar auf beiden Seiten
- Sprachlich durchgängig „mittleres Tagesmaximum" statt „Tagesmaximum", damit der Wert nicht als typischer Tageshöchstwert missverstanden wird
- W-04 schließen — oder begründet offen lassen

## Was wir bis dahin tun

Die Aussage „Frigiliana ist tagsüber heißer (31 gegen 28 °C)" wird entfernt, weil beide Berichte sie verwerfen. An ihre Stelle tritt die qualitative Aussage, die beide stützen: **im Hochsommer tagsüber ähnlich heiß, Nerja nachts milder.** Ohne Zahlenpaare, bis diese Recherche vorliegt.
