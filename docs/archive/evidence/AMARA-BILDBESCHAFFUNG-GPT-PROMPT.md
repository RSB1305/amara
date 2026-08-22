# AMARA – Bildbeschaffung für Experience- und Standortseiten

Stand der Codeanalyse: 29. Juli 2026

## 1. Ergebnis der Codeanalyse

Der aktuelle Bildbestand reicht für die Unterkunftsseiten, aber noch nicht für einen glaubwürdigen redaktionellen Experience Hub.

- Im Quellcode werden 69 unterschiedliche lokale Bildpfade verwendet.
- Zusätzlich gibt es 46 unterschiedliche externe Bild-URLs auf `l.icdbcdn.com`.
- Im Projekt liegen 288 lokale Bilddateien, teilweise als verschiedene Größen oder Kopien desselben Motivs.
- Für die Bilder existiert derzeit kein zentrales Rechte- und Herkunftsregister mit Fotograf, Rechteinhaber, Freigabedatum, Nutzungsumfang und vorgeschriebener Creditline.
- Die acht neuen Experience-Detailseiten verwenden überwiegend nur ein Hero-Bild.
- Wandern, Restaurants, Festivals, Tagesausflüge und Wellness verwenden derzeit dasselbe allgemeine Frigiliana-Motiv oder ein AMARA-Innenraumfoto.
- Das Nachtleben wird momentan mit einem Apartment-Innenraum dargestellt.
- Das Strandmotiv stammt aus dem Umfeld der Unterkunft AMARA Playa und deckt die sechs beschriebenen Strände nicht ab.
- Der Experience Hub besitzt eine flexible Bildzuordnung für acht Themen. Mehrere aktuelle Bilder sind jedoch Platzhalter und bilden das jeweilige Erlebnis nicht authentisch ab.
- Die 46 extern eingebundenen CDN-Bilder sollten separat geprüft werden: Gehören die Aufnahmen AMARA, bestehen ausreichende Nutzungsrechte und sollen sie zur Ausfallsicherheit in den eigenen Bildbestand übernommen werden?

### Strategische Empfehlung

Die gleichen authentischen Leitbilder sollten zunächst auf dem Experience Hub und als Hero der zugehörigen Detailseite verwendet werden. Damit werden ohne unnötige Doppelproduktion neun zentrale Bildaufgaben gelöst:

1. Ein übergreifendes Frigiliana-&-Nerja-Leitbild für den Hub
2. Wandern
3. Strände
4. Restaurants
5. Festivals
6. Wochenmarkt
7. Tagesausflüge
8. Wellness
9. Nachtleben

Darüber hinaus sollte für jede konkret empfohlene Firma und für die wichtigsten konkret genannten Orte ein kleiner, sauber lizenzierter Bildsatz beschafft werden. Diese Bilder können später in redaktionelle Karten und Magazinmodule integriert werden.

## 2. Konkreter Bildbedarf

### A. Restaurants – zehn individuelle Anfragen

Pro Restaurant idealerweise drei horizontale Originaldateien:

1. Außenansicht, Terrasse oder charakteristische Atmosphäre
2. Innenraum beziehungsweise gedeckter Tisch
3. Ein repräsentatives Gericht oder eine typische kulinarische Szene

Empfänger und gewünschte Motive:

1. **The Garden Restaurant, Frigiliana**
   - Terrasse bei Abendlicht oder Sonnenuntergang
   - Aussicht über Dorf und Küste
   - Saisonales Gericht beziehungsweise gedeckter Terrassentisch
   - Start-URL: `https://thegardenfrigiliana.com/inicio/`

2. **Gloria Bendita, Frigiliana**
   - Außentische an der Plaza de las Tres Culturas
   - Lebendige, aber hochwertige Abendszene
   - Repräsentatives mediterranes Gericht
   - Start-URL: `https://frigiliana.es/places/gloria-bendita/`

3. **La Tapería, Frigiliana**
   - Kleiner, intimer Gastraum
   - Mehrere Teller zum Teilen
   - Eingang oder charakteristisches Detail
   - Start-URL: `https://www.lataperiafrigiliana.com/indexesp.html`

4. **Restaurant 34 / Hotel Carabeo, Nerja**
   - Terrasse mit Meerblick
   - Elegantes Dinner-Ambiente
   - Repräsentatives Gericht
   - Start-URL: `https://hotelcarabeo.com/boutique_hotels_esp/boutique_hotels_nerja_restaurant34_esp.asp`

5. **Restaurante Oliva, Nerja**
   - Moderner Gastraum oder Terrasse
   - Ruhige Fine-Dining-Atmosphäre
   - Ein aktuelles repräsentatives Gericht
   - Start-URL: `https://www.restauranteoliva.com/english.html`

6. **Mo Gastrotapas, Nerja**
   - Zeitgemäßer Innenraum
   - Kreative Teller zum Teilen
   - Wein- oder Serviceatmosphäre
   - Start-URL: `https://mogastrotapas.eatbu.com/?lang=es`

7. **La Puntilla, Nerja**
   - Authentischer, lebhafter Gastraum oder Barbereich
   - Frischer Fisch beziehungsweise Tagesauswahl
   - Außenansicht
   - Start-URL: `https://www.lapuntillanerja.es/`

8. **El Pulguilla, Nerja**
   - Tapas an der Bar
   - Fisch beziehungsweise Meeresfrüchte
   - Terrasse oder Außenansicht
   - Start-URL: `https://www.elpulguilla.com/`

9. **Chiringuito AYO, Playa Burriana**
   - Paella über dem Holzfeuer
   - Chiringuito mit Strandbezug
   - Ungezwungene Mittagsatmosphäre
   - Start-URL: `https://chiringuitoayonerja.es/es/`

10. **Restaurante El Acebuchal**
    - Restaurant und restaurierter Weiler
    - Rustikaler Gastraum oder Terrasse
    - Hausgemachtes Brot oder repräsentatives Gericht
    - Start-URL: `https://www.elacebuchal.com/`

### B. Wellness – zwei individuelle Anfragen

Pro Anbieter idealerweise drei horizontale Aufnahmen. Erkennbare Kunden nur mit nachweisbarer Einwilligung.

1. **Frigiliana Wellness**
   - Vorbereitete mobile Behandlung in einer stilvollen Unterkunft
   - Hochwertiges Equipment beziehungsweise Behandlungsdetail
   - Ruhige Wellness-Atmosphäre ohne medizinische Aussage
   - Start-URL: `https://www.frigilianawellness.com/`

2. **Masaje Californiano con Lidia**
   - Behandlungsraum beziehungsweise ländliche Umgebung
   - Ruhige, persönliche Atmosphäre
   - Massage-Detail ohne klar erkennbares Kundengesicht
   - Start-URL: `https://www.masajecalifornianoconlidia.com/`

### C. Frigiliana – zentrale Anfrage an Tourismusbüro und Ayuntamiento

Priorisierte Motive:

- Panorama des weißen Dorfes mit Sierra beziehungsweise Küstenbezug
- Barribarto, Calle Real, Treppengassen, blaue Türen und Blumentöpfe
- Plaza de las Tres Culturas
- Wochenmarkt am Donnerstag mit echten Ständen und Atmosphäre
- El Ingenio / Nuestra Señora del Carmen und Miel de Caña
- Sierra Almijara und Wandermotive
- Cruz de Pinto
- El Fuerte, Aussichtspunkte und Gipfel
- Lizar- und Acequia-Weg
- Río Higuerón
- El Acebuchal und umgebende Wege
- Festival Frigiliana 3 Culturas
- Semana Santa
- San Sebastián
- Día de la Miel de Caña
- Cruces de Mayo
- Feria de San Antonio
- Cabalgata beziehungsweise Weihnachtszeit
- Praktisches Ankunftsmotiv des unteren Dorfes oder der öffentlichen Parkzufahrt

Offizielle Startpunkte:

- `https://www.turismofrigiliana.es/`
- `https://frigiliana.es/`
- `https://www.turismofrigiliana.es/es/oficina-de-turismo.html`

### D. Nerja und Maro – zentrale Anfrage an Tourismusbüro und Ayuntamiento

Priorisierte Motive:

- Balcón de Europa bei Sonnenuntergang und am Abend
- Altstadtgassen und Terrassen am Abend
- Plaza Tutti Frutti bei tatsächlicher Nachtatmosphäre
- Burriana bei Tag und als entspannter Sommerabend
- Torrecilla und westliches Nerja
- Maro und geschützte Küste
- Playa Carabeíllo
- El Playazo
- Playa de Maro
- Playa Calahonda
- Playa Burriana
- Kommunale Flamenco- oder Kulturveranstaltung
- Carnival und Semana Santa
- Romería de San Isidro
- Noche de San Juan an der Playa Burriana
- Virgen del Carmen
- Fiesta Blanca
- Feria de Nerja
- San Antón und Feria de las Maravillas in Maro
- Weihnachts- beziehungsweise Neujahrsstimmung

Offizielle Startpunkte:

- `https://www.nerja.es/`
- `https://cultura.nerja.es/`

### E. Naturpark und geschützte Küste – Junta de Andalucía

Priorisierte Motive:

- Paraje Natural Acantilados de Maro–Cerro Gordo
- Playa de Cantarriján
- Steilküste und klare Buchten bei Maro
- Kajak- oder Schnorchelszene nur mit geklärten Personenrechten
- Parque Natural Sierras de Tejeda, Almijara y Alhama
- Sierra-Panoramen und offizielle Besucherwege

Offizieller Startpunkt:

- `https://www.juntadeandalucia.es/medioambiente/portal/web/ventanadelvisitante/`

### F. Cueva de Nerja und Kulturprogramm

Priorisierte Motive:

- Zugelassene Innen- oder Außenaufnahme der Cueva de Nerja
- Gelände beziehungsweise charakteristische Umgebung
- Festival- oder Konzertaufnahme aus dem offiziellen Bildbestand
- Romería de San Isidro am Zielbereich nur, wenn die Stiftung die entsprechenden Rechte hält

Offizieller Startpunkt:

- `https://cuevadenerja.es/`

### G. Vier Tagesausflüge – offizielle Stellen

1. **Turismo de Málaga**
   - Stadtpanorama oder Alcazaba mit Stadtbezug
   - Historisches Zentrum
   - Hafen / Muelle Uno
   - Mercado de Atarazanas
   - Start-URL: `https://visita.malaga.eu/`

2. **Turismo de Granada**
   - Albaicín
   - Mirador de San Nicolás mit Alhambra-Panorama
   - Historische Stadtatmosphäre
   - Start-URL: `https://turismo.granada.org/`

3. **Patronato de la Alhambra y Generalife**
   - Offiziell freigegebenes Alhambra-Leitbild
   - Optional Nasridenpaläste oder Generalife, sofern für die beantragte Nutzung zulässig
   - Start-URL: `https://www.alhambra-patronato.es/`
   - Das dortige Formular zur Nutzung von Bildern beziehungsweise Fotografien ausdrücklich prüfen.

4. **Caminito del Rey**
   - Ikonische Stege in der Schlucht
   - Weites Schluchtpanorama
   - Begehungsszene ohne ungeklärte Personenrechte
   - Start-URL: `https://www.caminitodelrey.info/`

5. **Turismo de Ronda**
   - Puente Nuevo und Tajo-Schlucht
   - Altstadt oder Aussichtspunkt
   - Weites Landschaftsmotiv
   - Start-URL: `https://info.turismoderonda.es/`

### H. Tarifa – ergänzende Anfrage für die bestehende Standortseite

Die aktuelle Tarifa-Seite zeigt fast ausschließlich die AMARA-Unterkunft. Für den Destinationsteil fehlen:

- Atlantikküste und weiter Horizont
- Kitesurfen oder Wassersport mit geklärten Personenrechten
- Historische Altstadt
- Strand- und Naturtag
- Ruhige Abendszene

Offizieller Startpunkt:

- `https://turismodetarifa.com/`

### I. Übergreifende Bildarchive als Fallback

- Turismo y Planificación Costa del Sol
- Turismo de Andalucía beziehungsweise dessen Multimedia- oder Pressebereich

Diese Archive sind nur als Ergänzung zu verwenden. Vor jedem Download müssen Nutzungsbedingungen, Mitgliedschaftsvoraussetzungen, Creditline und Zulässigkeit für eine privat betriebene Unterkunftswebsite geprüft werden.

## 3. Technische und rechtliche Mindestanforderungen

Für jedes gelieferte Bild benötigen wir:

- möglichst das Original oder mindestens 3000 Pixel Breite
- JPEG, TIFF oder hochwertiges PNG; keine Screenshots
- keine Wasserzeichen, Logos oder eingebetteten Werbetexte
- bevorzugt horizontales Format
- ausreichend Rand für responsive Zuschnitte auf Desktop und Mobilgeräten
- Motivbeschreibung und Aufnahmeort
- Name des Fotografen
- Name des Rechteinhabers
- verbindliche Creditline oder die Bestätigung, dass keine Creditline erforderlich ist
- schriftliche Erlaubnis für Veröffentlichung, technischen Zuschnitt, Größenanpassung und Weboptimierung
- Information über zeitliche, geografische oder mediale Einschränkungen
- Bestätigung erforderlicher Model Releases bei erkennbaren Personen
- Bestätigung, dass abgebildete Kunstwerke, Marken oder Innenräume verwendet werden dürfen

Gewünschter enger Nutzungsumfang:

- nicht exklusive Verwendung auf `amara-lodging.es` einschließlich fünf Sprachversionen
- Verwendung als Seitenbild und Social-/Open-Graph-Vorschau derselben redaktionellen Inhalte
- technischer Zuschnitt, Größenanpassung, Kompression und leichte Farbkorrektur
- keine Weiterveräußerung
- keine Weitergabe an fremde Unternehmen außer technisch notwendigen Dienstleistern
- keine bezahlte Werbung ohne separate Freigabe
- kein Eindruck einer offiziellen Partnerschaft oder eines Sponsorings

## 4. Kopierfertiger Auftrag für GPT

Den folgenden Block vollständig in einen neuen GPT-Chat kopieren:

---

Du arbeitest als sorgfältiger Recherche- und Outreach-Assistent für **AMARA**, eine kleine Marke für hochwertige Ferienunterkünfte in Frigiliana, Nerja und Tarifa. Die Website ist `https://amara-lodging.es`, die allgemeine Absenderadresse ist `hola@amara-lodging.es`.

## Ziel

Recherchiere die aktuell richtigen Ansprechpartner für Bildmaterial und Bildrechte. Erstelle anschließend individuelle, sofort versandfertige E-Mail-Entwürfe auf Spanisch. Falls Gmail verbunden ist, darfst du die geprüften E-Mails als Entwürfe in Gmail anlegen, aber **niemals versenden**. Wenn Gmail nicht verbunden ist, gib alle Entwürfe vollständig im Chat aus.

## Zwingende Arbeitsregeln

1. Verwende für Kontaktdaten vorrangig die aktuelle offizielle Website des jeweiligen Betriebs oder der jeweiligen Institution.
2. Ergänzend sind verifizierte offizielle Google-Business-Profile oder offizielle Social-Media-Profile zulässig.
3. Erfinde keine E-Mail-Adresse und leite keine Adresse nur aus einem Domainnamen ab.
4. Wenn keine veröffentlichte E-Mail-Adresse existiert, dokumentiere stattdessen Kontaktformular, Telefonnummer und offizielles Instagram-/Facebook-Profil.
5. Prüfe, ob die gefundene Kontaktstelle wirklich für Presse, Marketing, Tourismus, Kommunikation oder Bildrechte geeignet ist. Eine Reservierungsadresse ist nur die letzte Option.
6. Notiere zu jeder Kontaktangabe die genaue Quell-URL und das Prüfdatum.
7. Prüfe bei öffentlichen Bildarchiven die veröffentlichten Nutzungsbedingungen. Ein sichtbares Foto auf einer Website ist keine Nutzungserlaubnis.
8. Prüfe, ob ein Formular, eine Akkreditierung oder ein spezieller Antrag für Bildmaterial erforderlich ist.
9. Unterscheide klar zwischen Eigentümer des Motivs, Fotograf und tatsächlichem Rechteinhaber.
10. Nenne AMARA niemals „Presse“ oder „Journalismus“, wenn das nicht zutrifft. Beschreibe AMARA transparent als privaten Gastgeber mit einem unabhängigen, redaktionellen Guide für Gäste.
11. Behaupte keine Kooperation, keine Reichweite und keine Veröffentlichung, die nicht verifiziert ist.
12. Prüfe vor Aufnahme eines Links in eine E-Mail, ob die neue AMARA-Seite bereits öffentlich erreichbar ist. Falls nicht, schreibe wahrheitsgemäß, dass die mehrsprachige Guide-Seite gerade vorbereitet wird.
13. Bitte nicht um Exklusivität und verspreche keine Gegenleistung, kein Ranking und keine bezahlte Platzierung.
14. Verwende Bilder erst dann als „freigegeben“, wenn eine schriftliche Erlaubnis mit nachvollziehbarem Nutzungsumfang vorliegt.
15. Versende keine E-Mail. Gmail darf ausschließlich für Entwürfe benutzt werden.

## Projektkontext für die E-Mails

AMARA entwickelt einen unabhängigen, mehrsprachigen Experience Guide für Gäste in Frigiliana und Nerja. Die Inhalte erscheinen auf Englisch, Deutsch, Spanisch, Niederländisch und Schwedisch. Empfohlene Betriebe werden redaktionell beschrieben; es handelt sich nicht um ein Ranking und nicht um bezahlte Platzierung.

Gewünscht sind authentische, hochauflösende horizontale Bilder. Die Nutzung soll eng begrenzt sein auf:

- `amara-lodging.es` und seine fünf Sprachversionen
- Social-/Open-Graph-Vorschauen derselben redaktionellen Inhalte
- technischen Zuschnitt, Größenanpassung, Kompression und leichte Farbkorrektur
- nicht exklusive Nutzung
- keine Weiterveräußerung
- keine bezahlte Werbung ohne separate Erlaubnis

Zu jedem Bild müssen Fotograf, Rechteinhaber, Creditline, Einschränkungen und erforderliche Personenfreigaben bekannt sein.

## Zu recherchierende Empfänger

### Restaurants – jeweils eine eigene, personalisierte E-Mail

1. The Garden Restaurant, Frigiliana  
   Start: `https://thegardenfrigiliana.com/inicio/`  
   Motive: Terrasse bei Abendlicht, Aussicht über Dorf/Küste, saisonales Gericht.

2. Gloria Bendita, Frigiliana  
   Start: `https://frigiliana.es/places/gloria-bendita/`  
   Motive: Außentische an der Plaza de las Tres Culturas, Abendszene, repräsentatives Gericht.

3. La Tapería, Frigiliana  
   Start: `https://www.lataperiafrigiliana.com/indexesp.html`  
   Motive: intimer Gastraum, Teller zum Teilen, Eingang oder charakteristisches Detail.

4. Restaurant 34 / Hotel Carabeo, Nerja  
   Start: `https://hotelcarabeo.com/boutique_hotels_esp/boutique_hotels_nerja_restaurant34_esp.asp`  
   Motive: Meerblickterrasse, elegantes Dinner-Ambiente, repräsentatives Gericht.

5. Restaurante Oliva, Nerja  
   Start: `https://www.restauranteoliva.com/english.html`  
   Motive: moderner Gastraum/Terrasse, ruhige Dinner-Atmosphäre, aktuelles Gericht.

6. Mo Gastrotapas, Nerja  
   Start: `https://mogastrotapas.eatbu.com/?lang=es`  
   Motive: Innenraum, kreative Teller zum Teilen, Wein- oder Serviceatmosphäre.

7. La Puntilla, Nerja  
   Start: `https://www.lapuntillanerja.es/`  
   Motive: lebhafter Gastraum/Bar, frischer Fisch, Außenansicht.

8. El Pulguilla, Nerja  
   Start: `https://www.elpulguilla.com/`  
   Motive: Tapas an der Bar, Fisch/Meeresfrüchte, Terrasse oder Außenansicht.

9. Chiringuito AYO, Playa Burriana  
   Start: `https://chiringuitoayonerja.es/es/`  
   Motive: Paella über Holzfeuer, Strandbezug, Mittagsatmosphäre.

10. Restaurante El Acebuchal  
    Start: `https://www.elacebuchal.com/`  
    Motive: Restaurant und Weiler, rustikaler Gastraum/Terrasse, Brot oder typisches Gericht.

### Wellness – jeweils eine eigene, personalisierte E-Mail

1. Frigiliana Wellness  
   Start: `https://www.frigilianawellness.com/`  
   Motive: vorbereitete mobile Behandlung, Equipment/Detail, ruhige Atmosphäre.

2. Masaje Californiano con Lidia  
   Start: `https://www.masajecalifornianoconlidia.com/`  
   Motive: Behandlungsraum/ländliche Umgebung, ruhige Atmosphäre, Massage-Detail ohne ungeklärtes Kundengesicht.

### Institutionen und touristische Stellen

1. Oficina de Turismo / Ayuntamiento de Frigiliana  
   Start: `https://www.turismofrigiliana.es/` und `https://frigiliana.es/`  
   Bitte um ein kuratiertes, rechtlich freigegebenes Bildpaket für:
   - Dorfpanorama, Barribarto, Calle Real, Treppengassen, Plaza de las Tres Culturas
   - Donnerstagsmarkt und El Ingenio/Miel de Caña
   - Cruz de Pinto, El Fuerte, Lizar/Acequia, Río Higuerón, El Acebuchal
   - Festival 3 Culturas, Semana Santa, San Sebastián, Día de la Miel de Caña, Cruces de Mayo, Feria de San Antonio und Weihnachtszeit

2. Turismo / Ayuntamiento de Nerja  
   Start: `https://www.nerja.es/` und `https://cultura.nerja.es/`  
   Bitte um freigegebene Bilder für:
   - Balcón de Europa, Altstadt am Abend, Plaza Tutti Frutti, Burriana am Abend
   - Carabeíllo, El Playazo, Maro, Calahonda und Burriana
   - Carnaval, Semana Santa, San Isidro, San Juan, Virgen del Carmen, Fiesta Blanca, Feria de Nerja, San Antón, Feria de las Maravillas und Weihnachtszeit
   - Flamenco- oder Kulturprogramm

3. Zuständige Bild-/Kommunikationsstelle der Junta de Andalucía für den Paraje Natural Acantilados de Maro–Cerro Gordo und den Parque Natural Sierras de Tejeda, Almijara y Alhama  
   Start: `https://www.juntadeandalucia.es/medioambiente/portal/web/ventanadelvisitante/`  
   Motive: Cantarriján, Maro–Cerro Gordo, Steilküste, Sierra-Panorama und Besucherwege.

4. Fundación Pública de Servicios Cueva de Nerja  
   Start: `https://cuevadenerja.es/`  
   Motive: freigegebene Höhlenaufnahme, Außenbereich und Kultur-/Musikprogramm. Prüfe, ob ein spezieller Bild- oder Filmfreigabeprozess gilt.

5. Área de Turismo del Ayuntamiento de Málaga  
   Start: `https://visita.malaga.eu/`  
   Motive: Stadtpanorama/Alcazaba, historisches Zentrum, Muelle Uno und Mercado de Atarazanas.

6. Turismo de Granada / Ayuntamiento de Granada  
   Start: `https://turismo.granada.org/`  
   Motive: Albaicín, Mirador de San Nicolás mit Alhambra-Panorama und historische Stadtatmosphäre. Prüfe ausdrücklich den dortigen Antrag für Fotomaterial.

7. Patronato de la Alhambra y Generalife  
   Start: `https://www.alhambra-patronato.es/`  
   Motiv: ein offiziell freigegebenes Alhambra-Leitbild. Prüfe und dokumentiere den offiziellen Antrag zur Nutzung von Bildern oder Fotografien.

8. Caminito del Rey  
   Start: `https://www.caminitodelrey.info/`  
   Motive: ikonische Stege, Schluchtpanorama und eine rechtlich nutzbare Begehungsszene.

9. Turismo de Ronda  
   Start: `https://info.turismoderonda.es/`  
   Motive: Puente Nuevo/Tajo, Altstadt oder Aussichtspunkt und Landschaft. Prüfe die vorhandene Bildergalerie und ihre Nutzungsbedingungen.

10. Oficina Municipal de Turismo de Tarifa  
    Start: `https://turismodetarifa.com/`  
    Motive: Atlantikküste, Kitesurfen, historische Altstadt, Strand-/Naturtag und ruhige Abendszene.

11. Turismo y Planificación Costa del Sol sowie Turismo de Andalucía  
    Recherchiere Bildbanken nur als ergänzende Quelle. Prüfe Zugangsvoraussetzungen, Mitgliedschaft, Lizenz, Creditline und Eignung für eine privat betriebene Unterkunftswebsite.

## Inhalt der Restaurant- und Wellness-E-Mails

Jeder Entwurf soll:

- auf Spanisch geschrieben sein
- eine persönliche, sachliche Betreffzeile besitzen
- den Betrieb exakt benennen
- erklären, dass AMARA den Betrieb bereits in einem unabhängigen Guide empfiehlt beziehungsweise die Veröffentlichung vorbereitet
- in einem Satz konkret wiedergeben, wofür der Betrieb im Guide empfohlen wird
- um zwei bis drei aktuelle horizontale Originalfotos bitten
- die gewünschten Motive konkret nennen
- um schriftliche Bestätigung von Fotograf, Rechteinhaber, Creditline und Nutzungsumfang bitten
- um Bestätigung bitten, dass erkennbare Personen für diese Nutzung freigegeben sind
- anbieten, die Bildauswahl und Namensschreibweise vor Veröffentlichung zu bestätigen
- freundlich klarstellen, dass dies keine bezahlte Platzierung und kein Ranking ist
- ungefähr 130 bis 190 Wörter lang sein
- keine übertriebene Werbesprache verwenden

## Inhalt der institutionellen E-Mails

Jeder Entwurf soll:

- auf Spanisch geschrieben sein
- AMARA transparent als privaten Gastgeber mit mehrsprachigem redaktionellem Gästeguide vorstellen
- nur die für diese Institution relevanten Motive nennen
- nach Presse-/Multimediaarchiv, Downloadlink oder zuständiger Kommunikationsstelle fragen
- den genauen erlaubten Nutzungsumfang erfragen
- nach Creditline, Fotograf, Ablaufdatum, Bearbeitungsrecht und Personenrechten fragen
- bei Alhambra, Naturparks und Cueva ausdrücklich nach dem vorgeschriebenen Antrags- oder Genehmigungsverfahren fragen
- keine kostenlose Lizenz als selbstverständlich voraussetzen
- ungefähr 150 bis 220 Wörter lang sein

## Gewünschte Ausgabe

Arbeite in dieser Reihenfolge:

### 1. Kontaktmatrix

Eine Tabelle mit:

- laufender Nummer
- Betrieb/Institution
- Kategorie
- Kontaktperson oder Abteilung
- verifizierte E-Mail
- alternatives Kontaktformular
- Telefon
- offizielles Social-Media-Profil
- Quell-URL
- Prüfdatum
- Vertrauensstatus: „verifiziert“, „nur allgemeiner Kontakt“ oder „unklar“
- Besonderheit des Rechteprozesses

### 2. Priorisierung

Teile die Empfänger ein in:

- Priorität A: direkte, unverzichtbare Motive
- Priorität B: wichtige Ergänzungen
- Priorität C: Bildarchive/Fallback

### 3. Individuelle E-Mail-Entwürfe

Für jeden Empfänger:

- Empfängeradresse
- Betreff
- vollständiger spanischer Nachrichtentext
- angefragte Motive
- erforderliche Anlage oder Formular
- empfohlene Versandart

Unterschrift mit:

`AMARA`  
`https://amara-lodging.es`  
`hola@amara-lodging.es`

### 4. Follow-up

Erstelle zusätzlich:

- eine kurze spanische Erinnerung nach sieben Werktagen
- eine zweite, letzte Erinnerung nach weiteren zehn Werktagen

### 5. Rechte- und Dateitracker

Erstelle eine leere Tracking-Tabelle mit:

- Empfänger
- Bilddatei
- Motiv
- Fotograf
- Rechteinhaber
- Creditline
- Freigabe erhalten am
- erlaubte Kanäle
- Bearbeitung erlaubt
- Personenfreigabe bestätigt
- Ablaufdatum
- Einschränkungen
- Speicherort der schriftlichen Freigabe
- Status: angefragt / erhalten / Rückfrage / abgelehnt / freigegeben

### 6. Gmail-Entwürfe

Wenn Gmail verbunden ist:

- Lege erst nach Abschluss und Anzeige der Kontaktmatrix je Empfänger genau einen Entwurf an.
- Verwende ausschließlich verifizierte Adressen.
- Füge keine großen Dateien an.
- Sende nichts.
- Berichte abschließend, wie viele Entwürfe angelegt wurden und welche Kontakte wegen fehlender sicherer E-Mail nicht als Entwurf angelegt werden konnten.

Beginne jetzt mit der Recherche. Stelle nur dann eine Rückfrage, wenn Absendername oder ein zwingender rechtlicher Parameter für die Entwürfe wirklich fehlt. Andernfalls arbeite mit den oben genannten AMARA-Angaben und markiere offene Felder sichtbar.

---

## 5. Interne Prüfung vor dem tatsächlichen Versand

Vor Versand der von GPT erstellten Entwürfe sollte AMARA noch entscheiden:

- Soll als persönlicher Absender zusätzlich ein Name genannt werden?
- Sind die neuen Guide-Seiten bereits öffentlich erreichbar?
- Soll die Nutzung nur Website und Social Preview umfassen oder zusätzlich organische Social-Media-Posts?
- Welche Credit-Darstellung ist gestalterisch vorgesehen?
- Wo werden Freigabe-E-Mails und Lizenzbedingungen dauerhaft archiviert?
- Gehören die vorhandenen professionellen Frigiliana-Pueblo-Aufnahmen vollständig AMARA?
- Dürfen die 46 externen `l.icdbcdn.com`-Bilder dauerhaft genutzt und lokal gespeichert werden?

Ohne diese letzte Prüfung sollten die E-Mails als Entwürfe gespeichert, aber noch nicht versendet werden.
