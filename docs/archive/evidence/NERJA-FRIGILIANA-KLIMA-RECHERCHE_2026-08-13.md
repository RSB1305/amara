# Deep-Research-Auftrag: Klimadaten Nerja und Frigiliana

**Stand:** 13. August 2026
**Anlass:** Zwei Datensätze für Nerja widersprechen sich. Solange das ungeklärt ist, stehen die Wetterseite Nerja und die Vergleichstabelle Nerja/Frigiliana auf unsicherem Fundament.
**Wartungspunkt:** W-04 in [CONTENT-WARTUNGSPUNKTE.md](../../../CONTENT-WARTUNGSPUNKTE.md)

---

## Der Widerspruch

Beide Datensätze beschreiben angeblich dasselbe: Monatsmittel für Nerja.

| Kennzahl | Datensatz A *(Strategiepapier)* | Datensatz B *(aktuell auf der Seite)* | Abweichung |
|---|---|---|---|
| August, Tagesmaximum | **32 °C** | 27 °C | 5 K |
| August, Nachtminimum | **23 °C** | 21 °C | 2 K |
| Juli, Tagesmaximum | **31 °C** | — | — |
| Januar, Tagesmaximum | 16 °C | 15 °C | 1 K |
| Januar, Nachtminimum | **8 °C** | 10 °C | 2 K |
| Jahresniederschlag | **292 mm** *(Summe der Monatswerte)* | ≈ 450 mm | **158 mm** |
| Wassertemperatur, Maximum | **26 °C** | 24 °C | 2 K |
| Nassester Monat | Dezember, 50 mm | Dezember, ≈ 90 mm | 40 mm |

**Herkunft Datensatz A:** Monatstabelle aus dem internen Strategiepapier zur Nerja-Content-Architektur. Quelle dort nicht benannt.
**Herkunft Datensatz B:** Aggregierte öffentliche Klimaübersichten (climate-data.org, weather-atlas, weatherspark). Keine amtliche Primärquelle.

**Keiner der beiden Datensätze ist gegen eine Primärquelle geprüft.**

## Warum das inhaltlich zählt

Die Nerja-Wetterseite trägt einen Vergleichsblock gegen Frigiliana. Er lautet aktuell sinngemäß: *Frigiliana ist tagsüber heißer (31 °C gegen 28 °C), Nerja ist nachts wärmer.*

Mit Datensatz A kippt die erste Hälfte dieser Aussage: Nerja läge mit 31–32 °C gleichauf oder darüber. Die Kernaussage würde dann lauten: **gleiche Tageshitze, aber Nerja-Nächte 3–4 K wärmer.** Das ist eine andere Geschichte — und sie ist sogar sauberer, weil sie auf einer einzigen Variable beruht.

Zusätzlich stehen die Frigiliana-Werte selbst ungeprüft im Raum. Sie stammen aus der bestehenden Frigiliana-Wetterseite und wurden nie gegen eine Quelle validiert:

| Jahreszeit | Frigiliana Tag | Frigiliana Nacht |
|---|---|---|
| Frühling (Mär–Mai) | 22 °C | 12 °C |
| Sommer (Jun–Aug) | 31 °C | 19 °C |
| Herbst (Sep–Nov) | 26 °C | 15 °C |
| Winter (Dez–Feb) | 16 °C | 8 °C |

---

# Rechercheauftrag

## Ziel

Ein einziger, belegter Datensatz je Ort, aus dem sich beide Wetterseiten und die Vergleichstabelle speisen.

## Anforderungen an die Quellen

1. **Primärquellen bevorzugt.** AEMET (Agencia Estatal de Meteorología) ist die zuständige Behörde. Relevant sind die *Valores climatológicos normales* der Referenzperiode 1991–2020.
2. **Stationsbezug angeben.** Für Nerja existiert die AEMET-Station **6213X** auf 169 m Höhe, Koordinaten 36°45′46″N / 3°50′43″W. Zu klären: Ist das eine vollwertige Klimastation mit Normalwerten oder nur eine automatische Messstation ohne Langzeitreihe? Falls Letzteres — welche Referenzstation ist die nächstgelegene geeignete?
3. **Für Frigiliana** existiert vermutlich keine eigene AEMET-Station. Zu klären: Welche Station ist repräsentativ, und wie groß ist der Höhenunterschied zur Ortslage (Frigiliana liegt auf rund 300 m)? Falls interpoliert werden muss, ist das offenzulegen.
4. **Sekundärquellen nur mit Kennzeichnung.** Kommerzielle Wetterportale sind zulässig, wenn keine amtliche Reihe vorliegt — dann aber ausdrücklich als solche benennen.

## Zu liefernde Daten, je Ort

- Monatsmittel **Tagesmaximum** und **Nachtminimum**, alle zwölf Monate
- Monatliche **Niederschlagssumme** und daraus die Jahressumme
- **Sonnenstunden** pro Tag oder pro Monat, falls verfügbar
- **Wassertemperatur** monatlich — nur für Nerja, mit eigener Quelle, da AEMET das nicht führt
- Referenzperiode und Stations-ID zu jedem Wert

## Zu klärende Einzelfragen

1. **Welcher der beiden Datensätze für Nerja ist belastbar** — oder sind beide falsch?
2. **Jahresniederschlag Nerja:** 292 mm oder 450 mm? Die Differenz ist zu groß für Rundungseffekte und deutet auf unterschiedliche Referenzperioden oder Stationen hin.
3. **Höhenunterschied Nerja/Frigiliana:** Wie groß ist der klimatische Effekt der rund 300 Höhenmeter tatsächlich? Gibt es dazu belastbare Werte oder nur die übliche Faustformel?
4. **Superlativ prüfen:** Das Strategiepapier behauptet, die Wintermonate Nerjas seien „die mildesten auf dem europäischen Festland". Das ist ein Wettbewerbssuperlativ und braucht eine belastbare Quelle — oder er fliegt raus. Vergleichswerte für Konkurrenzstandorte (u. a. Almería, Málaga, Motril, Algarve, Sizilien) wären nötig.
5. **300 Sonnentage:** Ebenfalls im Strategiepapier. Wie ist „Sonnentag" dort definiert, und lässt sich die Zahl belegen? Die Frigiliana-Seite nennt bereits „300+ Tage" — auch ungeprüft.

## Ausgabeformat

Zwei Tabellen (Nerja, Frigiliana) mit zwölf Monatszeilen, dazu je eine Quellenzeile mit Stations-ID, Referenzperiode und Link. Anschließend eine kurze Einschätzung, welche der oben genannten Aussagen sich halten lassen und welche gestrichen werden müssen.

---

## Was danach passiert

1. Nerja-Wetterseite auf den geprüften Datensatz umstellen, alle fünf Sprachen.
2. Vergleichstabelle Nerja/Frigiliana neu rechnen; falls sich die Aussage dreht, den Deutungssatz darunter mit anpassen.
3. Frigiliana-Wetterseite auf denselben Datensatz umstellen — sonst widersprechen sich zwei eigene Seiten.
4. Quellenangabe und Referenzperiode auf beiden Seiten sichtbar machen, so wie es die Geografie- und Alltagsseiten bereits tun.
5. W-04 in den Wartungspunkten schließen.

## Bis dahin

Die Nerja-Wetterseite kennzeichnet alle Werte mit „≈" und enthält den Hinweis, dass es sich um gerundete Langzeitmittel und nicht um eine Vorhersage handelt, mit Verweis auf AEMET. Damit ist die Seite bis zur Klärung vertretbar — aber nicht endgültig.
