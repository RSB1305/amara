import type { LinkToken } from '../lib/linkResolver';
import type { LocalizedText } from '../types/content';
import type { AmaraAuthoringSeo } from '../types/seo';

/**
 * The live-values page of the Tarifa kitesurf cluster: official AEMET context,
 * the hourly AEMET briefing and Windguru's own table, each in its own block.
 * The evergreen explanation of wind, wave and swell stays on the wind spoke;
 * this page links back to it. Labels of the data objects themselves live with
 * the wind content and the briefing copy and are reused here.
 */
const l = (en: string, de: string, es: string, nl: string, sv: string): LocalizedText => ({ en, de, es, nl, sv });

const title = l(
  'Tarifa today: wind, gusts, sea state and water | AMARA',
  'Tarifa heute: Wind, Böen, Wellengang und Wasser | AMARA',
  'Tarifa hoy: viento, rachas, oleaje y agua | AMARA',
  'Tarifa vandaag: wind, vlagen, golfslag en water | AMARA',
  'Tarifa i dag: vind, byar, sjögång och vatten | AMARA'
);

const description = l(
  'The current values for kitesurfing in Tarifa: official AEMET warnings and forecast, the hourly AEMET briefing with explanation, and Windguru’s table.',
  'Die aktuellen Werte fürs Kitesurfen in Tarifa: amtliche AEMET-Warnungen und -Vorhersage, das AEMET-Stundenbriefing mit Einordnung und die Windguru-Tabelle.',
  'Los valores actuales para el kitesurf en Tarifa: avisos y previsión oficiales de AEMET, el briefing horario de AEMET con explicación y la tabla de Windguru.',
  'De actuele waarden voor kitesurfen in Tarifa: officiële AEMET-waarschuwingen en -verwachting, de AEMET-uurbriefing met duiding en de tabel van Windguru.',
  'De aktuella värdena för kitesurfing i Tarifa: officiella AEMET-varningar och -prognos, AEMET:s timbriefing med förklaring och Windgurus tabell.'
);

export const tarifaKiteForecastSeo: AmaraAuthoringSeo = {
  version: '2026-09-03-tarifa-kitesurf-forecast-v1.0',
  pageType: 'B',
  entityKey: 'amara-brand',
  ogImage: '/images/robert-amara-host.jpg',
  article: {
    datePublished: '2026-09-03',
    dateModified: '2026-09-03',
    authorName: 'Robert Sebastian Böhmer',
    authorType: 'Person',
    authorRoute: 'about'
  },
  languages: {
    en: { title: title.en, description: description.en, robots: 'index, follow', canonical: 'auto' },
    de: { title: title.de, description: description.de, robots: 'index, follow', canonical: 'auto' },
    es: { title: title.es, description: description.es, robots: 'index, follow', canonical: 'auto' },
    nl: { title: title.nl, description: description.nl, robots: 'index, follow', canonical: 'auto' },
    sv: { title: title.sv, description: description.sv, robots: 'index, follow', canonical: 'auto' }
  }
};

export interface TarifaKiteForecastContent {
  token: LinkToken;
  hero: {
    eyebrow: LocalizedText;
    title: LocalizedText;
    subtitle: LocalizedText;
    lead: LocalizedText;
    updated: LocalizedText;
    note: LocalizedText;
  };
  windguruLive: {
    eyebrow: LocalizedText;
    title: LocalizedText;
    intro: LocalizedText;
    loading: LocalizedText;
    noscript: LocalizedText;
    lazyNote: LocalizedText;
    explainBefore: LocalizedText;
    explainLabel: LocalizedText;
    explainAfter: LocalizedText;
    rowsTitle: LocalizedText;
    rowsIntro: LocalizedText;
    rows: Array<{ id: string; title: LocalizedText; text: LocalizedText }>;
  };
  beaufort: {
    title: LocalizedText;
    intro: LocalizedText;
    columnKnots: LocalizedText;
    columnForce: LocalizedText;
    columnName: LocalizedText;
    columnSea: LocalizedText;
    rows: Array<{ id: string; knots: string; force: string; name: LocalizedText; sea: LocalizedText }>;
    note: LocalizedText;
  };
  related: {
    eyebrow: LocalizedText;
    title: LocalizedText;
    links: Array<{ id: string; token: LinkToken; title: LocalizedText; text: LocalizedText }>;
  };
}

export const tarifaKiteForecastContent: TarifaKiteForecastContent = {
  token: 'tarifa_kitesurf_forecast',
  hero: {
    eyebrow: l('Today in Tarifa', 'Heute in Tarifa', 'Hoy en Tarifa', 'Vandaag in Tarifa', 'I dag i Tarifa'),
    title: l('The current values', 'Die aktuellen Werte', 'Los valores actuales', 'De actuele waarden', 'De aktuella värdena'),
    subtitle: l('Wind, gusts, sea state and water: what AEMET’s hourly forecast says right now', 'Wind, Böen, Wellengang und Wasser: was die AEMET-Stundenvorhersage gerade sagt', 'Viento, rachas, oleaje y agua: qué dice ahora mismo la previsión horaria de AEMET', 'Wind, vlagen, golfslag en water: wat de AEMET-uurverwachting nu zegt', 'Vind, byar, sjögång och vatten: vad AEMET:s timprognos säger just nu'),
    lead: l(
      'Three blocks, in a fixed order. First the official word of AEMET, the Spanish weather service: its warnings and forecast rank above everything that follows. Then the kite briefing from AEMET’s hourly forecast, read for you by fixed rules. Finally Windguru’s own table, to compare.',
      'Drei Blöcke, in fester Reihenfolge. Zuerst das amtliche Wort der AEMET, des spanischen Wetterdienstes: Ihre Warnungen und ihre Vorhersage stehen über allem, was folgt. Dann das Kite-Briefing aus der AEMET-Stundenvorhersage, nach festen Regeln für euch eingeordnet. Zum Schluss Windgurus eigene Tabelle, zum Vergleichen.',
      'Tres bloques, en un orden fijo. Primero la palabra oficial de AEMET, el servicio meteorológico español: sus avisos y su previsión están por encima de todo lo que sigue. Después, el briefing de kite a partir de la previsión horaria de AEMET, leído para vosotros con reglas fijas. Por último, la tabla de Windguru, para comparar.',
      'Drie blokken, in vaste volgorde. Eerst het officiële woord van AEMET, de Spaanse weerdienst: zijn waarschuwingen en verwachting staan boven alles wat volgt. Dan de kitebriefing uit de AEMET-uurverwachting, met vaste regels voor jullie geduid. Tot slot de tabel van Windguru, om te vergelijken.',
      'Tre block, i fast ordning. Först det officiella ordet från AEMET, den spanska vädertjänsten: dess varningar och prognos står över allt som följer. Sedan kitebriefingen ur AEMET:s timprognos, tolkad åt er med fasta regler. Sist Windgurus egen tabell, för jämförelse.',
    ),
    updated: l('Checked September 2026', 'Geprüft im September 2026', 'Revisado en septiembre de 2026', 'Gecontroleerd in september 2026', 'Kontrollerat i september 2026'),
    note: l('Official warnings, model values and a third-party table are kept visibly apart.', 'Amtliche Warnungen, Modellwerte und eine Fremdtabelle bleiben sichtbar getrennt.', 'Avisos oficiales, valores de modelo y una tabla de terceros se mantienen visiblemente separados.', 'Officiële waarschuwingen, modelwaarden en een externe tabel blijven zichtbaar gescheiden.', 'Officiella varningar, modellvärden och en extern tabell hålls synligt åtskilda.')
  },
  windguruLive: {
    eyebrow: l('Comparison', 'Vergleich', 'Comparación', 'Vergelijking', 'Jämförelse'),
    title: l('Windguru’s table for Tarifa', 'Die Windguru-Tabelle für Tarifa', 'La tabla de Windguru para Tarifa', 'De Windguru-tabel voor Tarifa', 'Windgurus tabell för Tarifa'),
    intro: l(
      'Windguru shows its own model rows for the Tarifa spot here. This is Windguru’s table, delivered by Windguru: its models, its presentation, its star rating. We use it to compare, not as the source of the briefing above.',
      'Windguru zeigt hier seine eigenen Modellzeilen für den Spot Tarifa. Das ist Windgurus Tabelle, geliefert von Windguru: seine Modelle, seine Darstellung, seine Sternchen. Wir nutzen sie zum Vergleichen, nicht als Quelle des Briefings oben.',
      'Windguru muestra aquí sus propias filas de modelos para el spot de Tarifa. Es la tabla de Windguru, servida por Windguru: sus modelos, su presentación, sus estrellas. La usamos para comparar, no como fuente del briefing de arriba.',
      'Windguru toont hier zijn eigen modelrijen voor de spot Tarifa. Dit is de tabel van Windguru, geleverd door Windguru: zijn modellen, zijn weergave, zijn sterren. We gebruiken hem om te vergelijken, niet als bron van de briefing hierboven.',
      'Windguru visar här sina egna modellrader för spoten Tarifa. Det är Windgurus tabell, levererad av Windguru: dess modeller, dess presentation, dess stjärnor. Vi använder den för att jämföra, inte som källa till briefingen ovan.'
    ),
    loading: l('The Windguru table loads when it scrolls into view.', 'Die Windguru-Tabelle lädt, sobald sie ins Bild kommt.', 'La tabla de Windguru se carga cuando entra en pantalla.', 'De Windguru-tabel laadt zodra hij in beeld komt.', 'Windguru-tabellen laddas när den kommer in i bild.'),
    noscript: l('The Windguru table needs JavaScript. Open the Tarifa spot directly at Windguru instead.', 'Die Windguru-Tabelle braucht JavaScript. Öffnet stattdessen den Spot Tarifa direkt bei Windguru.', 'La tabla de Windguru necesita JavaScript. Abrid el spot de Tarifa directamente en Windguru.', 'De Windguru-tabel heeft JavaScript nodig. Open in plaats daarvan de spot Tarifa rechtstreeks bij Windguru.', 'Windguru-tabellen kräver JavaScript. Öppna i stället spoten Tarifa direkt hos Windguru.'),
    lazyNote: l('The table is loaded from windguru.cz only once you scroll to it. Availability, models and presentation are Windguru’s.', 'Die Tabelle wird erst von windguru.cz geladen, wenn ihr bis hierher scrollt. Verfügbarkeit, Modelle und Darstellung liegen bei Windguru.', 'La tabla solo se carga desde windguru.cz cuando llegáis hasta aquí. Disponibilidad, modelos y presentación son de Windguru.', 'De tabel wordt pas van windguru.cz geladen zodra jullie tot hier scrollen. Beschikbaarheid, modellen en weergave liggen bij Windguru.', 'Tabellen laddas från windguru.cz först när ni skrollar hit. Tillgänglighet, modeller och presentation ligger hos Windguru.'),
    explainBefore: l('How to read the rows — mean wind, gusts, direction, wave, period, grid width — is on the', 'Wie ihr die Zeilen lest — Mittelwind, Böen, Richtung, Welle, Periode, Rasterweite — steht auf der', 'Cómo se leen las filas (viento medio, rachas, dirección, ola, periodo, malla) está en la', 'Hoe je de rijen leest — gemiddelde wind, vlagen, richting, golf, periode, rasterbreedte — staat op de', 'Hur ni läser raderna – medelvind, byar, riktning, våg, period, rutnätsbredd – finns på'),
    explainLabel: l('wind page with the annotated example row', 'Wind-Seite mit der beschrifteten Beispielzeile', 'página del viento con la fila de ejemplo comentada', 'windpagina met de voorbeeldrij', 'vindsidan med den märkta exempelraden'),
    explainAfter: l('.', '.', '.', '.', '.'),
    rowsTitle: l('Row by row: what you do with it', 'Zeile für Zeile: was ihr damit anfangt', 'Fila por fila: qué hacer con cada dato', 'Rij voor rij: wat je ermee doet', 'Rad för rad: vad ni gör med det'),
    rowsIntro: l(
      'A quick reference for the seven rows the table shows, for anyone new to this. The full explanation of how a forecast table is read — mean wind, gusts, direction, wave, period, grid width — is the annotated example row on the wind page.',
      'Ein Spickzettel zu den sieben Zeilen, die die Tabelle zeigt, für alle, die neu dabei sind. Die ausführliche Erklärung, wie man eine Forecast-Tabelle liest — Mittelwind, Böen, Richtung, Welle, Periode, Rasterweite — ist die beschriftete Beispielzeile auf der Wind-Seite.',
      'Una chuleta de las siete filas que muestra la tabla, para quien empieza. La explicación completa de cómo se lee una tabla de previsión (viento medio, rachas, dirección, ola, periodo, malla) es la fila de ejemplo comentada de la página del viento.',
      'Een spiekbriefje bij de zeven rijen die de tabel toont, voor wie nieuw is. De volledige uitleg hoe je een forecasttabel leest — gemiddelde wind, vlagen, richting, golf, periode, rasterbreedte — is de voorbeeldrij op de windpagina.',
      'En lathund för de sju rader tabellen visar, för alla som är nya. Den fullständiga förklaringen av hur en prognostabell läses – medelvind, byar, riktning, våg, period, rutnätsbredd – är den märkta exempelraden på vindsidan.'
    ),
    rows: [
      {
        id: 'wind',
        title: l('Wind speed (knots)', 'Windstärke (Knoten)', 'Velocidad del viento (nudos)', 'Windsterkte (knopen)', 'Vindstyrka (knop)'),
        text: l('The mean wind the model calculates for that hour, not the force you feel in the kite. The Beaufort table below turns the number into a picture of the sea.', 'Der Mittelwind, den das Modell für diese Stunde berechnet, nicht die Kraft, die ihr am Kite spürt. Die Beaufort-Tabelle unten macht aus der Zahl ein Bild vom Meer.', 'El viento medio que el modelo calcula para esa hora, no la fuerza que sentís en la cometa. La tabla Beaufort de abajo convierte la cifra en una imagen del mar.', 'De gemiddelde wind die het model voor dat uur berekent, niet de kracht die je in de kite voelt. De Beaufort-tabel hieronder maakt van het getal een beeld van de zee.', 'Medelvinden som modellen beräknar för den timmen, inte kraften ni känner i kiten. Beaufort-tabellen nedan gör siffran till en bild av havet.')
      },
      {
        id: 'gusts',
        title: l('Gusts (knots)', 'Windböen (Knoten)', 'Rachas (nudos)', 'Windvlagen (knopen)', 'Vindbyar (knop)'),
        text: l('Read the gap to the mean wind: in Tarifa it says more than the mean itself.', 'Lest den Abstand zum Mittelwind: In Tarifa sagt er mehr als der Mittelwert selbst.', 'Mirad la diferencia con el viento medio: en Tarifa dice más que la propia media.', 'Lees het verschil met de gemiddelde wind: in Tarifa zegt het meer dan het gemiddelde zelf.', 'Läs avståndet till medelvinden: i Tarifa säger det mer än medelvärdet självt.')
      },
      {
        id: 'direction',
        title: l('Wind direction', 'Windrichtung', 'Dirección del viento', 'Windrichting', 'Vindriktning'),
        text: l('The arrow points where the wind blows to: left means from the east, Levante; right means from the west, Poniente.', 'Der Pfeil zeigt, wohin der Wind weht: nach links heißt aus Osten, Levante; nach rechts heißt aus Westen, Poniente.', 'La flecha señala hacia dónde sopla el viento: a la izquierda viene del este, levante; a la derecha viene del oeste, poniente.', 'De pijl wijst waarheen de wind waait: naar links betekent uit het oosten, levante; naar rechts uit het westen, poniente.', 'Pilen visar vart vinden blåser: åt vänster betyder från öst, levante; åt höger från väst, poniente.')
      },
      {
        id: 'temperature',
        title: l('Temperature (°C)', 'Temperatur (°C)', 'Temperatura (°C)', 'Temperatuur (°C)', 'Temperatur (°C)'),
        text: l('Air temperature. Together with the wind it decides how thick a wetsuit you want; the water stays cooler than the air for most of the year.', 'Lufttemperatur. Zusammen mit dem Wind entscheidet sie, wie dick der Neo sein soll; das Wasser bleibt den größten Teil des Jahres kühler als die Luft.', 'Temperatura del aire. Junto con el viento decide el grosor del neopreno; el agua está más fría que el aire la mayor parte del año.', 'Luchttemperatuur. Samen met de wind bepaalt ze hoe dik het wetsuit moet zijn; het water blijft het grootste deel van het jaar koeler dan de lucht.', 'Lufttemperatur. Tillsammans med vinden avgör den hur tjock våtdräkt ni vill ha; vattnet är svalare än luften större delen av året.')
      },
      {
        id: 'cloud',
        title: l('Cloud cover (%)', 'Bewölkung (%)', 'Nubosidad (%)', 'Bewolking (%)', 'Molnighet (%)'),
        text: l('Weather context for the day. Little cloud is no proof of thermal wind.', 'Wetterkontext für den Tag. Wenig Wolken sind kein Beleg für Thermik.', 'Contexto meteorológico del día. Pocas nubes no demuestran que haya térmica.', 'Weercontext voor de dag. Weinig bewolking is geen bewijs voor thermiek.', 'Väderkontext för dagen. Lite moln är inget bevis för termik.')
      },
      {
        id: 'rain',
        title: l('Precipitation (mm/h)', 'Niederschlag (mm/h)', 'Precipitación (mm/h)', 'Neerslag (mm/h)', 'Nederbörd (mm/h)'),
        text: l('Modelled rain per hour. A dash means none. Showers often come with sudden wind shifts, which is worth knowing when you plan a session.', 'Modellierter Regen pro Stunde. Ein Strich heißt keiner. Schauer bringen oft plötzliche Winddreher mit, und das ist gut zu wissen, wenn ihr eine Session plant.', 'Lluvia modelizada por hora. Un guion significa nada. Los chubascos suelen traer cambios bruscos de viento, algo que conviene saber al planear una sesión.', 'Gemodelleerde regen per uur. Een streepje betekent geen. Buien brengen vaak plotselinge winddraaiingen mee, goed om te weten als je een sessie plant.', 'Modellerat regn per timme. Ett streck betyder inget. Skurar för ofta med sig plötsliga vindvridningar, bra att veta när ni planerar ett pass.')
      },
      {
        id: 'rating',
        title: l('Windguru rating', 'Windguru-Wertung', 'Valoración de Windguru', 'Windguru-beoordeling', 'Windguru-betyg'),
        text: l('The stars are Windguru’s own rating of the wind for its users, based on speed alone. They are not a safety judgement and know nothing about zones, gusts on the beach or your level. A friendly hint, no more.', 'Die Sternchen sind Windgurus eigene Bewertung des Winds für seine Nutzer, allein nach Stärke. Sie sind kein Sicherheitsurteil und wissen nichts über Zonen, Böen am Strand oder euer Niveau. Ein netter Hinweis, mehr nicht.', 'Las estrellas son la valoración propia de Windguru del viento para sus usuarios, solo por la fuerza. No son un juicio de seguridad y no saben nada de zonas, rachas en la playa ni de vuestro nivel. Una pista simpática, nada más.', 'De sterren zijn Windguru’s eigen beoordeling van de wind voor zijn gebruikers, alleen op basis van kracht. Ze zijn geen veiligheidsoordeel en weten niets van zones, vlagen op het strand of jullie niveau. Een vriendelijke hint, meer niet.', 'Stjärnorna är Windgurus eget betyg på vinden för sina användare, enbart efter styrka. De är inget säkerhetsomdöme och vet inget om zoner, byar på stranden eller er nivå. En vänlig hint, inget mer.')
      }
    ]
  },
  beaufort: {
    title: l('Putting the knots in proportion: the Beaufort scale', 'Die Knoten ins Verhältnis setzen: die Beaufort-Skala', 'Poner los nudos en proporción: la escala Beaufort', 'De knopen in verhouding: de Beaufort-schaal', 'Sätt knopen i proportion: Beaufort-skalan'),
    intro: l('The Beaufort scale is the official way of turning a wind speed into a picture of the sea. It describes the water, not your session.', 'Die Beaufort-Skala ist der amtliche Weg, aus einer Windgeschwindigkeit ein Bild vom Meer zu machen. Sie beschreibt das Wasser, nicht eure Session.', 'La escala Beaufort es la forma oficial de convertir una velocidad de viento en una imagen del mar. Describe el agua, no vuestra sesión.', 'De Beaufort-schaal is de officiële manier om van een windsnelheid een beeld van de zee te maken. Ze beschrijft het water, niet jullie sessie.', 'Beaufort-skalan är det officiella sättet att göra en vindhastighet till en bild av havet. Den beskriver vattnet, inte ert pass.'),
    columnKnots: l('Knots', 'Knoten', 'Nudos', 'Knopen', 'Knop'),
    columnForce: l('Beaufort', 'Beaufort', 'Beaufort', 'Beaufort', 'Beaufort'),
    columnName: l('Name', 'Bezeichnung', 'Nombre', 'Benaming', 'Benämning'),
    columnSea: l('What the sea looks like', 'So sieht das Meer aus', 'Cómo se ve el mar', 'Zo ziet de zee eruit', 'Så ser havet ut'),
    rows: [
      { id: 'bft3', knots: '7–10', force: '3', name: l('Gentle breeze', 'Schwache Brise', 'Flojo', 'Matige bries', 'Lätt bris'), sea: l('Small wavelets, crests begin to break', 'Kleine Wellen, Kämme beginnen zu brechen', 'Olas pequeñas, las crestas empiezan a romper', 'Kleine golfjes, kammen beginnen te breken', 'Små vågor, kammarna börjar brytas') },
      { id: 'bft4', knots: '11–16', force: '4', name: l('Moderate breeze', 'Mäßige Brise', 'Bonancible', 'Matige wind', 'Måttlig bris'), sea: l('Small waves, fairly frequent white horses', 'Kleine Wellen, ziemlich häufig Schaumköpfe', 'Olas pequeñas, borregos bastante frecuentes', 'Kleine golven, vrij veel schuimkoppen', 'Små vågor, ganska många vita gäss') },
      { id: 'bft5', knots: '17–21', force: '5', name: l('Fresh breeze', 'Frische Brise', 'Fresquito', 'Vrij krachtige wind', 'Frisk bris'), sea: l('Moderate waves, many white horses, some spray', 'Mäßige Wellen, viele Schaumköpfe, etwas Gischt', 'Olas moderadas, muchos borregos, algo de rociones', 'Matige golven, veel schuimkoppen, wat buiswater', 'Måttliga vågor, många vita gäss, lite stänk') },
      { id: 'bft6', knots: '22–27', force: '6', name: l('Strong breeze', 'Starker Wind', 'Fresco', 'Krachtige wind', 'Frisk vind'), sea: l('Large waves form, white foam crests everywhere, more spray', 'Größere Wellen, überall Schaumkämme, mehr Gischt', 'Se forman olas grandes, crestas de espuma por todas partes, más rociones', 'Grotere golven, overal schuimkammen, meer buiswater', 'Större vågor, skumkammar överallt, mer stänk') },
      { id: 'bft7', knots: '28–33', force: '7', name: l('Near gale', 'Steifer Wind', 'Frescachón', 'Harde wind', 'Styv kuling'), sea: l('Sea heaps up, foam blown in streaks along the wind', 'Die See türmt sich auf, Schaum legt sich in Streifen in den Wind', 'La mar se encrespa, la espuma forma estelas en dirección del viento', 'De zee stapelt op, schuim in strepen in de windrichting', 'Sjön tornar upp sig, skummet lägger sig i strimmor i vindens riktning') },
      { id: 'bft8', knots: '34–40', force: '8', name: l('Gale', 'Stürmischer Wind', 'Temporal', 'Stormachtige wind', 'Hård kuling'), sea: l('Moderately high waves, crests break into spindrift', 'Mäßig hohe Wellen, Gischt weht von den Kämmen', 'Olas de altura media, las crestas se rompen en rociones', 'Matig hoge golven, buiswater waait van de kammen', 'Måttligt höga vågor, stänk blåser från kammarna') }
    ],
    note: l('Ranges as used by the World Meteorological Organization. Which force is fun and which is too much is a question for your level, the beach and the day — and for the school if you are unsure.', 'Bereiche nach der Weltorganisation für Meteorologie. Welche Stärke Spaß macht und welche zu viel ist, hängt an eurem Niveau, dem Strand und dem Tag — und an der Schule, wenn ihr unsicher seid.', 'Rangos según la Organización Meteorológica Mundial. Qué fuerza es divertida y cuál es demasiada depende de vuestro nivel, de la playa y del día, y de la escuela si tenéis dudas.', 'Bereiken volgens de Wereld Meteorologische Organisatie. Welke kracht leuk is en welke te veel, hangt af van jullie niveau, het strand en de dag — en van de school als jullie twijfelen.', 'Intervall enligt Meteorologiska världsorganisationen. Vilken styrka som är rolig och vilken som är för mycket beror på er nivå, stranden och dagen – och på skolan om ni är osäkra.')
  },
  related: {
    eyebrow: l('Next', 'Weiter', 'Seguir', 'Verder', 'Vidare'),
    title: l('The explanation, the spots and the overview', 'Die Erklärung, die Spots und der Überblick', 'La explicación, los spots y la visión de conjunto', 'De uitleg, de spots en het overzicht', 'Förklaringen, spotsen och översikten'),
    links: [
      {
        id: 'wind',
        token: 'tarifa_wind_kitesurfing_authority',
        title: l('Wind, weather and safety', 'Wind in Tarifa', 'Viento, tiempo y seguridad', 'Wind, weer en veiligheid', 'Vind, väder och säkerhet'),
        text: l('How to read a forecast before you believe it: Windguru, Levante and Poniente, the official rules and the emergency channels.', 'Wie ihr einen Forecast lest, bevor ihr ihn glaubt: Windguru, Levante und Poniente, die amtlichen Regeln und die Notrufwege.', 'Cómo leer un parte antes de creérselo: Windguru, levante y poniente, las normas oficiales y las vías de emergencia.', 'Hoe je een forecast leest voordat je hem gelooft: Windguru, levante en poniente, de officiële regels en de noodkanalen.', 'Hur ni läser en prognos innan ni tror på den: Windguru, levante och poniente, de officiella reglerna och nödvägarna.')
      },
      {
        id: 'spots',
        token: 'tarifa_kitesurf_spots',
        title: l('Kitesurf spots in Tarifa', 'Kitesurf-Spots in Tarifa', 'Spots de kitesurf en Tarifa', 'Kitesurfspots in Tarifa', 'Kitesurfspots i Tarifa'),
        text: l('Which stretch works in which conditions, and where the zones run.', 'Welcher Abschnitt bei welcher Lage funktioniert und wo die Zonen verlaufen.', 'Qué tramo funciona con cada situación y por dónde van las zonas.', 'Welk deel bij welke situatie werkt en waar de zones lopen.', 'Vilken sträcka som fungerar i vilket läge och var zonerna går.')
      },
      {
        id: 'hub',
        token: 'tarifa_kitesurfing_hub',
        title: l('Kitesurfing in Tarifa', 'Kitesurfen in Tarifa', 'Kitesurf en Tarifa', 'Kitesurfen in Tarifa', 'Kitesurfing i Tarifa'),
        text: l('The overview: school, kitecamp, equipment and everything around them.', 'Der Überblick über Schule, Kitecamp, Material und den Rest.', 'La visión de conjunto: escuela, kitecamp, material y todo lo demás.', 'Het overzicht: school, kitecamp, materiaal en de rest.', 'Översikten: skola, kitecamp, utrustning och resten.')
      }
    ]
  }
};
