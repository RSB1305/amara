# Seitentext DE — `tarifa-wind-kitesurfing`

*Deutsche Fassung zum Gegenlesen. ES, EN, NL und SV werden erst nach deiner Freigabe nativ geschrieben — nicht übersetzt.*
*Stimme: kollektives „wir", Gäste im Plural („ihr/euch"), gemäß `AGENTS.md`.*
*Platzhalter sind mit ⟨…⟩ markiert.*

---

## 1. Hero

**Eyebrow:** Kitesurfen in Tarifa

**H1:** Wind, Wetter und Sicherheit

**Subtitle:** Wie ihr einen Forecast lest, bevor ihr ihn glaubt

**Byline:** Robert Böhmer · Gastgeber bei AMARA · Geprüft im September 2026

### Direkte Antwort (steht unmittelbar unter der H1, vor jedem Bild)

Tarifa hat zwei prägende Windlagen: Poniente aus Westen und Levante aus Osten. Am Wasser fühlen sie sich völlig unterschiedlich an — in den Modellen, die ihr morgens auf Windguru lest, stehen sie nebeneinander in derselben Tabelle. Hier zeigen wir euch, wie man diese Tabelle liest: was Mittelwind und Böen tatsächlich aussagen, warum ein feineres Modellraster nicht automatisch die bessere Vorhersage an eurem Strand bedeutet, und was Welle, Swell und Periode für den Tag bedeuten. Dazu die amtlichen Regeln, die in Tarifa gelten, und die Notrufwege, die im Ernstfall zählen. Die Entscheidung trefft ihr am Strand. Mit besserem Blick auf das, was ihr dort seht.

---

## 2. Amtlicher Wetterkontext (AEMET)

**Eyebrow:** Amtlich

**H2:** Was die spanische Wetterbehörde für heute meldet

Die AEMET ist der offizielle spanische Wetterdienst. Ihre Warnungen und ihre Gemeindevorhersage haben eine eigene Priorität: Sie stehen über jeder Modellrechnung und über allem, was auf dieser Seite folgt. Wenn AEMET eine Warnung für den Estrecho ausgibt, ist das die Information, die zählt.

⟨Bestehender AEMET-Block — beschriftet als amtlicher Wetterkontext, nicht als Kite-Briefing. Zeigt Gemeindevorhersage mit Ausgabezeit und Quellenangabe AEMET, plus Link zur amtlichen Seite.⟩

> Amtliche Warnungen werden hier unverändert wiedergegeben. Wir fassen sie nicht zusammen und rechnen sie nicht gegen andere Modelle auf.

---

## 3. Heute in Tarifa — das Live-Briefing

**Eyebrow:** Heute in Tarifa

**H2:** Was die Modelle gerade rechnen

⟨Stufe 2: Open-Meteo-Briefing. Bis dahin bleibt dieser Abschnitt auf der Seite und erklärt, was er zeigen wird — ohne leere Werteboxen.⟩

**Struktur des Briefings, wenn es steht:**

- **Wind und Böen.** Der Modellwert für 10 Meter Höhe, die berechnete Richtung, und die Böenspitze — die ist das Maximum der vorangegangenen Stunde, nicht ein Wert für einen Moment.
- **Welle und Swell.** Gesamtwelle, der windgetriebene Anteil und der Swell, jeweils mit Richtung und Periode. Windwelle und Swell können gleichzeitig aus verschiedenen Richtungen kommen — das ist der Unterschied zwischen einem geordneten und einem unruhigen Tag.
- **Wolken und Sonne.** Wetterkontext. Ein Sonnen-Icon sagt nichts darüber, ob Thermik einsetzt.
- **Vor dem Wasser.** Tatsächliche Richtung, Böen, Seegang, Bojen, Beschilderung und amtliche Warnungen.

**Provenienz-Zeile unter den Werten:**

> Wetterdaten: Open-Meteo · Modell: ⟨konfigurierte Modell-ID⟩ · Originalquelle: ⟨DWD / ECMWF / Météo-France⟩ · abgerufen: ⟨Zeit⟩ · Vorhersage gültig für: ⟨Zeit⟩

**Wenn keine Daten kommen:**

> Das Live-Briefing ist gerade nicht verfügbar. Wir zeigen an dieser Stelle lieber nichts als einen Wert, für den wir nicht geradestehen können. Die amtliche AEMET-Vorhersage oben bleibt erreichbar.

---

## 4. Windguru richtig lesen

**Eyebrow:** Werkzeug

**H2:** Die Tabelle, auf die morgens alle schauen

Windguru ist in Tarifa das Standardwerkzeug, und es ist ein gutes. Es zeigt mehrere Wettermodelle nebeneinander, in einer sehr dichten Tabelle. Genau diese Dichte macht es am Anfang schwer zu lesen. Wir nehmen die Zeilen deshalb einmal auseinander.

### Die beschriftete Beispielzeile

⟨Gestaltung: nachgebaute Windguru-Zeile mit Beschriftungsfahnen zu jedem Feld. Kein Windguru-Widget, kein fremdes JavaScript — eine eigene, erklärende Darstellung.⟩

| Feld | Was es bedeutet | Worauf ihr achten solltet |
|---|---|---|
| Wind / Mittelwind | Der Grundwind, den das Modell für diese Stunde berechnet | Das ist nicht die Kraft, die ihr am Kite spürt |
| Böen | Die berechneten kurzfristigen Spitzen darüber | Ein großer Abstand zwischen beiden Werten heißt: das Modell rechnet mit viel Schwankung |
| Windrichtung | Wind wird danach benannt, **woher** er kommt — Nordwind kommt aus Norden | Aus der Richtung allein ergibt sich noch keine Aussage über euren Strand |
| Wellenhöhe | Der signifikante Wellenwert des Wellenmodells | Sagt nichts über eine einzelne Welle oder den Shorebreak |
| Periode | Der Zeitabstand in Sekunden zwischen den modellierten Wellen | Hat nichts mit der Höhe zu tun |
| Peak-Periode | Die Periode des energiereichsten Anteils | Kein garantierter Abstand zwischen zwei konkreten Wellen |
| Windwelle | Der Seegang, den der lokale und regionale Wind erzeugt | Nur ein Teil des gesamten Seegangs |
| Swell | Wellenenergie, die von weit her kommt | Kann gleichzeitig aus einer ganz anderen Richtung laufen als die Windwelle |
| Wolkenschichten | Niedrig, mittel, hoch — getrennt ausgewiesen | Wenig Wolken ist kein Beleg für Thermik |
| 1 km / 3 km / 9 km / 13 km | Die ungefähre Rasterweite des Modells | Kleinere Zahl heißt feineres Raster. Sie heißt nicht „genauer" |

### Der Punkt, den die meisten falsch verstehen

Windguru führt für diese Region unter anderem WRF 1 km für Tarifa, WRF 3 km Gibraltar, WRF 9 km Europe, IFS-HRES 9 km und GFS 13 km. Die Kilometerzahl beschreibt, wie fein ein Modell den Raum auflöst — ein feineres Raster kann kleinere Strukturen wie die Meerenge überhaupt erst abbilden. Daraus folgt aber nicht, dass die Vorhersage an eurem Strand richtiger ist. Rasterweite ist eine Eigenschaft von mehreren.

Der brauchbarere Umgang: mehrere Modelle nebeneinander lesen. Wenn zwei oder drei in Richtung, Stärke und zeitlichem Verlauf ungefähr übereinstimmen, ist das Bild konsistent. Wenn sie auseinanderlaufen, seht ihr die Unsicherheit — und das ist eine echte Information, keine Störung.

> Die grünen Sternchen sind ein netter Hinweis. Euer Board tragen sie nicht ins Wasser.

⟨Externe Links zu den relevanten Tarifa-Spots auf Windguru, über das bestehende Linksystem.⟩

---

## 5. Levante, Poniente und Thermik

**Eyebrow:** Wind in Tarifa

**H2:** Zwei Windlagen, zwei völlig verschiedene Tage

**Poniente** kommt aus Westen, vom Atlantik her. Er ist an den Hauptstränden side-onshore — schräg auflandig —, läuft meist gleichmäßiger und bringt typischerweise Welle mit.

**Levante** kommt aus Osten. An den Hauptstränden wie Los Lances weht er meist side-offshore — schräg ablandig — und ist für Stärke und Böigkeit bekannt. Das gilt nicht überall gleich; Abschnitte wie Balneario oder Palmones liegen anders. Aus der Windrichtung allein ergibt sich deshalb weder eine Spotwahl noch eine Sicherheitseinschätzung.

**Thermik** ist der Teil, der am häufigsten überschätzt wird. Sonne erwärmt Land und Wasser unterschiedlich stark, und das kann den lokalen Wind beeinflussen oder verstärken. Es ist keine Zahl, die man auf einen Modellwert addiert. Wer morgens rechnet „Prognose plus X Knoten", rechnet sich etwas zurecht.

### Roberts Blick

> **Aus meiner persönlichen Erfahrung:** Tarifa wird mit rund 300 Kitetagen im Jahr beworben, und ja — ein Teil davon sind Levante-Tage. Wer die alle mitnehmen will, muss auch bei Levante kiten können.
>
> Aber das Kitesurfen, das ich meine, das, was die Locals hier machen: das ist Poniente. Los Lances direkt vor der Tür, Welle drin, der Wind nicht brutal, aber stark genug für richtig viel Spaß. Das ist für mich das Tarifa-Erlebnis.
>
> Deshalb wollte ich meine Wohnung auch genau dort haben — mit Blick auf Los Lances. Ich sehe, wann der Wind kommt. Und wenn er kommt, packe ich meine Sachen und gehe raus.
>
> — Robert, AMARA

⟨Bild: Robert. Alt-Text konkret, kein Keyword-Stapel.⟩

---

## 6. Sicherheit ohne Panik

**Eyebrow:** Vor Ort

**H2:** Was in Tarifa amtlich geregelt ist

Grundlage ist der kommunale **Plan de Explotación de Playas 2024–2027** des Ayuntamiento de Tarifa. Er trennt an den Stränden verschiedene Nutzungsbereiche, und diese Trennung wird vor Ort über Markierungen, Bojen und Beschilderung umgesetzt.

**Valdevaqueros:** Der amtliche Plan weist unter anderem Badebereiche, Bereiche für freie Wassersport-Ein- und -Ausfahrt, Schulbereiche sowie gesonderte Kite- und Windsurfbereiche aus. Die genauen Grenzen entstehen vor Ort durch die vorgesehene Markierung und Bojenführung.

**Los Lances Norte:** Im amtlichen Plan ist das keine einheitlich nutzbare Fläche. Es gibt getrennte Bade- und Wassersportbereiche, dazu Schul- und Kanalbereiche sowie ökologische Schutzflächen.

**Die Lagune von Los Lances:** Hier gibt es keinen Spielraum. Im geschützten Lagunenbereich ist Kitesurfen amtlich verboten. Die Junta de Andalucía verweist dafür auf das Schutzgebietsrecht und auf die kommunale Strandordnung.

**Lances Sur:** Für Lances Sur Natural und Lances Sur Urbana zeichnen wir keine eigene Kite-Grenze. Maßgeblich sind der kommunale Strandplan und die Markierung vor Ort.

> **Beschilderung, Bojen und aktuelle Anordnungen vor Ort gehen vor.**

### Der Faktor, der in keinem Forecast steht

Die Gezeiten. Bei Flut wird der Strand in Los Lances deutlich schmaler, und damit auch der Platz zum Starten und Landen. Das taucht in keiner Wind-App auf, und die modellierte Meereshöhe, die manche Wetter-APIs mitliefern, ist für die Küste ausdrücklich nicht geeignet — sie ersetzt keine Gezeitentabelle. Rechnet den Tidenstand also getrennt mit ein, so wie ihr es mit dem Wind macht.

### Was wir euch mitgeben

Ein Forecast beschreibt Modellwerte. Was ihr am Wasser vorfindet, entscheidet ihr selbst — und zwar am Strand, mit Blick auf Wind, Seegang und die Lage.

Geht nicht allein raus, besonders nicht bei anspruchsvollen oder ablandigen Bedingungen. Wenn ihr unsicher seid, sprecht mit einer qualifizierten lokalen Schule oder mit dem Tarifa Surf Club und geht begleitet oder in der Gruppe aufs Wasser. Für die Spots und Zonen im Detail haben wir eine eigene Seite.

⟨Verlinkung zum Spots-Spoke über die Link Registry.⟩

---

## 7. Rescue und Notruf

**Eyebrow:** Im Ernstfall

**H2:** Zwei verschiedene Systeme, die oft verwechselt werden

### Private Wassersport-Rescue — kommerzielle Anbieter mit eigenen Bedingungen

Das sind Unternehmen mit eigenen Zonen, Zeiten und Vertragsbedingungen. Prüft die aktuelle Verfügbarkeit und die Konditionen direkt beim Anbieter.

**Tarifa Rescue / New Angels** — Der Betreiber nennt für seinen Voucher Los Lances Norte und Valdevaqueros, bis zwei Meilen vor der Küste, bei Wind bis höchstens 35 kn. Das ist eine Bedingung dieses Vouchers, keine allgemeine Grenze für Tarifa und kein Einsatzversprechen. Stand: 03.09.2026.

**Sea Rescue** — Der Betreiber beschreibt seinen Dienst als ganzjährig, mit Stationen bei Los Lances Norte und Valdevaqueros und einer angegebenen Zone bis einen Kilometer vom Strand. Von Juni bis September nennt er 11 bis 20 Uhr. Der Anbieter führt einen eigenen Funkkanal für sein System. Stand: 03.09.2026.

**Was Mark dazu sagt**, und das steht so auf keiner Website:

> Die Zeiten, die ihr online seht, sind Ladenöffnungszeiten. Die Boote fahren raus, wenn Levante steht. Und sie nehmen euch mitsamt Material mit — das ist der Unterschied zur staatlichen Rettung.
>
> — Mark, Tarifa Surf Club

Das ist der praktische Grund, warum es diese Anbieter überhaupt gibt: Die staatliche Seenotrettung holt im Ernstfall die Person. Das Material bleibt im Wasser.

> Eine Rescue-Card ist Plan B. Sie ändert die Bedingungen auf dem Wasser nicht.

### Seenot und akuter Notfall

Das ist ein anderes System, staatlich, und es hat mit den Vouchers oben nichts zu tun.

**Salvamento Marítimo: 900 202 202 · Europaweiter Notruf: 112 · Seefunk: VHF Kanal 16**

Nennt eure Position, was passiert ist und wie viele Menschen Hilfe brauchen. Private Funkkanäle einzelner Anbieter sind keine amtlichen Notrufkanäle.

---

## 8. Tarifa Surf Club und AMARA

**Eyebrow:** Gemeinsam

**H2:** Warum wir euch zum Tarifa Surf Club schicken

Der Tarifa Surf Club ist offizieller AMARA-Partner, und Robert und Mark sind persönlich befreundet. Was das für euch praktisch bedeutet:

- Kitesurf-Material könnt ihr vor der Anreise über den Tarifa Surf Club kaufen oder leihen. Die Abstimmung läuft vorab.
- Das Material steht bei eurer Ankunft direkt in der Unterkunft.
- Wer Material leiht, hinterlegt normalerweise eine Kaution beim Anbieter. Für AMARA-Gäste hinterlegen wir diese Kaution beim Tarifa Surf Club.
- Bei gebuchten Leistungen des Tarifa Surf Club — Kitekurs, Kitecamp, Help to Kite — ist die Seerettung enthalten. Beim reinen Materialverleih ist sie es nicht; dafür braucht ihr eine eigene Rescue-Card.
- Wer noch unsicher ist oder nicht allein rauswill: Kurs, Kitecamp oder eine begleitete Session sind dafür da.

### Marks Blick

**Was er Gästen sagt, die zum ersten Mal bei Levante rauswollen:**

> Beim ersten Levante schicke ich die Leute nach Valdevaqueros. Der Wind steht dort etwas auflandiger, und die große Düne im Rücken macht einen Unterschied. Wer bei ablandigem Wind am Hauptstrand in Los Lances rausgeht, hat bei mir eine Rescue-Karte im Neo — ohne die fahre ich da nicht. Und ich baue draußen fast immer eine Nummer kleiner auf, als es am Ufer aussieht. Die Böen haben es hier wirklich in sich.
>
> — Mark, Tarifa Surf Club

**Woran er sieht, dass ein Tag anders läuft als der Forecast:**

> Ich schaue eigentlich nur auf die Berge. Hängt diese dicke Levante-Wolke über Gibraltar, bleibt der Wind stabil. Löst die Wolke sich auf, bricht der Wind meist kurz danach zusammen. Noch ein guter Indikator: Wenn draußen plötzlich alle Höhe verlieren, zieht die Gezeitenströmung gerade in Windrichtung ab. Das klaut dir sofort den Druck im Schirm, egal was die App sagt.
>
> — Mark, Tarifa Surf Club

**Was in Tarifa am häufigsten übersehen wird:**

> Das Material. Bei einem richtigen Levante fahre ich hier 5er bis 7er. Wer nur den 9er dabeihat, steht an starken Tagen am Strand. Und die Gezeiten blendet fast jeder aus: Bei Flut wird der Strand in Los Lances extrem schmal. Beim Starten und Landen bleibt dann kaum Platz.
>
> — Mark, Tarifa Surf Club

**Bild:** `src/assets/images/content/tarifa/mark-tarifa-surf-club.webp`
**Alt-Text:** Mark vom Tarifa Surf Club sitzt auf einer Mauer am Strandzugang von Los Lances, im Hintergrund der Sand und die Dünenlandschaft.

⟨Für den gemeinsamen Auftritt steht zusätzlich `mark-robert-tarifa-surf-club.webp` im Repo bereit.⟩

---

## 9. AMARA Basecamp

**Eyebrow:** Bleiben

**H2:** Vom Bett zum Wasser, ohne Umweg

⟨Kompakter, klar abgesetzter Block. Ausschließlich verifizierte Fakten aus den Property-Daten. CTA über die Link Registry und den bestehenden Booking-Mechanismus. Schwerpunkt: Tarifa einfacher organisieren, Material bei Ankunft, persönliche Koordination, Nähe zum Kitesurf-Alltag. Keine erfundenen Gehzeiten oder Lageversprechen.⟩

---

## 10. Weiter

- **Kitesurf-Spots in Tarifa** — welcher Abschnitt bei welcher Lage funktioniert und wo die Zonen verlaufen
- **Kitesurfen in Tarifa** — der Überblick über Schule, Kitecamp, Material und den Rest

⟨Beide über die Link Registry, bidirektional.⟩

---

## Schlusszeile der Seite

> Forecasts sind Modellrechnungen. Amtliche Warnungen und lokale Regeln haben eine eigene Priorität. Beschilderung, Bojen und aktuelle Anordnungen vor Ort gehen vor.
