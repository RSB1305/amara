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
    explainAfter: l('.', '.', '.', '.', '.')
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
