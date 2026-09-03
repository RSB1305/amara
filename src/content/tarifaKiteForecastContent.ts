import type { LinkToken } from '../lib/linkResolver';
import type { LocalizedText } from '../types/content';
import type { AmaraAuthoringSeo } from '../types/seo';

/**
 * The live-values page of the Tarifa kitesurf cluster: official AEMET context,
 * the Open-Meteo briefing and Windguru's own table, each in its own block.
 * The evergreen explanation of wind, wave and swell stays on the wind spoke;
 * this page links back to it. Labels of the data objects themselves live with
 * the wind content and the briefing copy and are reused here.
 */
const l = (en: string, de: string, es: string, nl: string, sv: string): LocalizedText => ({ en, de, es, nl, sv });

const title = l(
  'Tarifa today: wind, gusts, wave and swell | AMARA',
  'Tarifa heute: Wind, Böen, Welle und Swell | AMARA',
  'Tarifa hoy: viento, rachas, ola y mar de fondo | AMARA',
  'Tarifa vandaag: wind, vlagen, golf en swell | AMARA',
  'Tarifa i dag: vind, byar, våg och swell | AMARA'
);

const description = l(
  'The current values for kitesurfing in Tarifa: official AEMET warnings and forecast, the Open-Meteo model briefing with explanation, and Windguru’s table.',
  'Die aktuellen Werte fürs Kitesurfen in Tarifa: amtliche AEMET-Warnungen und -Vorhersage, das Open-Meteo-Modellbriefing mit Einordnung und die Windguru-Tabelle.',
  'Los valores actuales para el kitesurf en Tarifa: avisos y previsión oficiales de AEMET, el briefing del modelo Open-Meteo con explicación y la tabla de Windguru.',
  'De actuele waarden voor kitesurfen in Tarifa: officiële AEMET-waarschuwingen en -verwachting, de Open-Meteo-modelbriefing met duiding en de tabel van Windguru.',
  'De aktuella värdena för kitesurfing i Tarifa: officiella AEMET-varningar och -prognos, Open-Meteo-modellbriefingen med förklaring och Windgurus tabell.'
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
    authorSlug: 'staying-with-us'
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
    subtitle: l('Wind, gusts, wave and swell: what the models are calculating right now', 'Wind, Böen, Welle und Swell: was die Modelle gerade rechnen', 'Viento, rachas, ola y mar de fondo: qué calculan los modelos ahora mismo', 'Wind, vlagen, golf en swell: wat de modellen nu berekenen', 'Vind, byar, våg och swell: vad modellerna räknar just nu'),
    lead: l(
      'Three blocks, in a fixed order. First the official word of AEMET, the Spanish weather service: its warnings and forecast rank above everything that follows. Then the model briefing from Open-Meteo, read for you by fixed rules. Finally Windguru’s own table, so you can compare. All of it describes model hours; none of it is a riding approval. How to read these tables, and what Levante and Poniente do on the beaches, we explain on the wind page.',
      'Drei Blöcke, in fester Reihenfolge. Zuerst das amtliche Wort der AEMET, des spanischen Wetterdienstes: Ihre Warnungen und ihre Vorhersage stehen über allem, was folgt. Dann das Modellbriefing aus Open-Meteo, nach festen Regeln für euch eingeordnet. Zuletzt die Windguru-Tabelle selbst, zum Vergleichen. Alles davon beschreibt Modellstunden; nichts davon ist eine Fahrfreigabe. Wie man diese Tabellen liest und was Levante und Poniente an den Stränden machen, erklären wir auf der Wind-Seite.',
      'Tres bloques, en un orden fijo. Primero la palabra oficial de AEMET, el servicio meteorológico español: sus avisos y su previsión están por encima de todo lo que sigue. Después, el briefing del modelo de Open-Meteo, leído para vosotros con reglas fijas. Por último, la propia tabla de Windguru, para comparar. Todo describe horas de modelo; nada de ello es una autorización para navegar. Cómo se leen estas tablas y qué hacen el levante y el poniente en las playas lo explicamos en la página del viento.',
      'Drie blokken, in vaste volgorde. Eerst het officiële woord van AEMET, de Spaanse weerdienst: zijn waarschuwingen en verwachting staan boven alles wat volgt. Dan de modelbriefing van Open-Meteo, met vaste regels voor jullie geduid. Tot slot de tabel van Windguru zelf, om te vergelijken. Alles beschrijft modeluren; niets ervan is een toestemming om te varen. Hoe je deze tabellen leest en wat levante en poniente op de stranden doen, leggen we uit op de windpagina.',
      'Tre block, i fast ordning. Först det officiella ordet från AEMET, den spanska vädertjänsten: dess varningar och prognos står över allt som följer. Sedan modellbriefingen från Open-Meteo, tolkad åt er med fasta regler. Sist Windgurus egen tabell, för jämförelse. Allt beskriver modelltimmar; inget av det är ett godkännande att köra. Hur man läser tabellerna och vad levante och poniente gör på stränderna förklarar vi på vindsidan.'
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
      'The table shows only the rows a kiter actually reads. If you are new to this, use them as vocabulary for the conversation with the school or the people on the beach — not as a decision.',
      'Die Tabelle zeigt nur die Zeilen, die ein Kiter tatsächlich liest. Wenn ihr neu dabei seid, nutzt sie als Vokabular für das Gespräch mit der Schule oder den Leuten am Strand — nicht als Entscheidung.',
      'La tabla muestra solo las filas que un kiter lee de verdad. Si empezáis ahora, usadlas como vocabulario para la conversación con la escuela o con la gente de la playa, no como una decisión.',
      'De tabel toont alleen de rijen die een kiter echt leest. Zijn jullie nieuw, gebruik ze dan als vocabulaire voor het gesprek met de school of de mensen op het strand — niet als beslissing.',
      'Tabellen visar bara de rader en kitare faktiskt läser. Är ni nya, använd dem som vokabulär för samtalet med skolan eller folk på stranden – inte som ett beslut.'
    ),
    rows: [
      {
        id: 'wind',
        title: l('Wind speed (knots)', 'Windstärke (Knoten)', 'Velocidad del viento (nudos)', 'Windsterkte (knopen)', 'Vindstyrka (knop)'),
        text: l('The mean wind the model calculates for that hour. Knots are nautical miles per hour; the Beaufort table below turns the number into a picture of the sea. Not the force you feel in the kite.', 'Der Mittelwind, den das Modell für diese Stunde berechnet. Knoten sind Seemeilen pro Stunde; die Beaufort-Tabelle unten macht aus der Zahl ein Bild vom Meer. Nicht die Kraft, die ihr am Kite spürt.', 'El viento medio que el modelo calcula para esa hora. Los nudos son millas náuticas por hora; la tabla Beaufort de abajo convierte la cifra en una imagen del mar. No es la fuerza que sentís en la cometa.', 'De gemiddelde wind die het model voor dat uur berekent. Knopen zijn zeemijlen per uur; de Beaufort-tabel hieronder maakt van het getal een beeld van de zee. Niet de kracht die je in de kite voelt.', 'Medelvinden som modellen beräknar för den timmen. Knop är sjömil per timme; Beaufort-tabellen nedan gör siffran till en bild av havet. Inte kraften ni känner i kiten.')
      },
      {
        id: 'gusts',
        title: l('Gusts (knots)', 'Windböen (Knoten)', 'Rachas (nudos)', 'Windvlagen (knopen)', 'Vindbyar (knop)'),
        text: l('The calculated peaks above the mean. Read the gap: a small gap means steadier wind, a wide gap means the model expects a lot of variation. In Tarifa the gap matters more than the mean.', 'Die berechneten Spitzen über dem Mittelwind. Lest den Abstand: kleiner Abstand heißt gleichmäßigerer Wind, großer Abstand heißt, das Modell rechnet mit viel Schwankung. In Tarifa zählt der Abstand mehr als der Mittelwert.', 'Los picos calculados por encima de la media. Mirad la diferencia: pequeña significa viento más regular; grande significa que el modelo prevé mucha variación. En Tarifa la diferencia importa más que la media.', 'De berekende pieken boven het gemiddelde. Lees het verschil: klein betekent gelijkmatiger wind, groot betekent dat het model met veel schommeling rekent. In Tarifa telt het verschil meer dan het gemiddelde.', 'De beräknade topparna över medelvinden. Läs avståndet: litet avstånd betyder jämnare vind, stort avstånd betyder att modellen räknar med mycket variation. I Tarifa betyder avståndet mer än medelvärdet.')
      },
      {
        id: 'direction',
        title: l('Wind direction', 'Windrichtung', 'Dirección del viento', 'Windrichting', 'Vindriktning'),
        text: l('The arrow points where the wind blows to. An arrow pointing left comes from the east: that is Levante. An arrow pointing right comes from the west: Poniente. What each of them does on the beaches is explained on the wind page.', 'Der Pfeil zeigt, wohin der Wind weht. Ein Pfeil nach links kommt aus Osten: das ist Levante. Ein Pfeil nach rechts kommt aus Westen: Poniente. Was beide an den Stränden machen, steht auf der Wind-Seite.', 'La flecha señala hacia dónde sopla el viento. Una flecha hacia la izquierda viene del este: eso es levante. Una flecha hacia la derecha viene del oeste: poniente. Lo que hace cada uno en las playas está en la página del viento.', 'De pijl wijst waarheen de wind waait. Een pijl naar links komt uit het oosten: dat is levante. Een pijl naar rechts komt uit het westen: poniente. Wat beide op de stranden doen, staat op de windpagina.', 'Pilen visar vart vinden blåser. En pil åt vänster kommer från öst: det är levante. En pil åt höger kommer från väst: poniente. Vad de gör på stränderna står på vindsidan.')
      },
      {
        id: 'temperature',
        title: l('Temperature (°C)', 'Temperatur (°C)', 'Temperatura (°C)', 'Temperatuur (°C)', 'Temperatur (°C)'),
        text: l('Air temperature. Together with the wind it decides how thick a wetsuit you want; the water stays cooler than the air for most of the year.', 'Lufttemperatur. Zusammen mit dem Wind entscheidet sie, wie dick der Neo sein soll; das Wasser bleibt den größten Teil des Jahres kühler als die Luft.', 'Temperatura del aire. Junto con el viento decide el grosor del neopreno; el agua está más fría que el aire la mayor parte del año.', 'Luchttemperatuur. Samen met de wind bepaalt ze hoe dik het wetsuit moet zijn; het water blijft het grootste deel van het jaar koeler dan de lucht.', 'Lufttemperatur. Tillsammans med vinden avgör den hur tjock våtdräkt ni vill ha; vattnet är svalare än luften större delen av året.')
      },
      {
        id: 'cloud',
        title: l('Cloud cover (%)', 'Bewölkung (%)', 'Nubosidad (%)', 'Bewolking (%)', 'Molnighet (%)'),
        text: l('How much of the sky the model covers with cloud. Weather context for the day. Little cloud is no proof of thermal wind.', 'Wie viel vom Himmel das Modell mit Wolken bedeckt. Wetterkontext für den Tag. Wenig Wolken sind kein Beleg für Thermik.', 'Cuánto cielo cubre el modelo con nubes. Contexto meteorológico del día. Pocas nubes no demuestran que haya térmica.', 'Hoeveel van de lucht het model met wolken bedekt. Weercontext voor de dag. Weinig bewolking is geen bewijs voor thermiek.', 'Hur mycket av himlen modellen täcker med moln. Väderkontext för dagen. Lite moln är inget bevis för termik.')
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
        title: l('Wind, weather and safety', 'Wind, Wetter und Sicherheit', 'Viento, tiempo y seguridad', 'Wind, weer en veiligheid', 'Vind, väder och säkerhet'),
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
