import type { LocalizedText } from '../types/content';
import type { AmaraLanguage } from '../types/seo';


export const frigilianaPreFooterCopy: {
  eyebrow: LocalizedText;
  intro: LocalizedText;
} = {
  eyebrow: {
    en: 'Plan the stay',
    de: 'Weiter in Frigiliana',
    es: 'Planificar la estancia',
    nl: 'Verblijf plannen',
    sv: 'Planera vistelsen',
  },
  intro: {
    en: 'Use these guides to continue with the practical details of a stay in Frigiliana.',
    de: 'Die nächsten Seiten für euren Aufenthalt im Dorf.',
    es: 'Estas guías ayudan a continuar con los detalles prácticos de una estancia en Frigiliana.',
    nl: 'Deze gidsen helpen bij de volgende praktische stappen voor een verblijf in Frigiliana.',
    sv: 'Dessa guider hjälper er vidare med de praktiska detaljerna inför en vistelse i Frigiliana.',
  },
};

const descriptions = {
  location_frigiliana: {
    en: 'Understand the village layout, where to stay, and what daily movement feels like.',
    de: 'Das Dorf, seine Gassen und der Alltag darin.',
    es: 'Entender la estructura del pueblo, dónde alojarse y cómo son los recorridos diarios.',
    nl: 'Bekijk de dorpsindeling, waar jullie kunnen verblijven en hoe de dagelijkse routes lopen.',
    sv: 'Förstå byns struktur, var ni kan bo och hur de dagliga vägarna känns.',
  },
  frigiliana_parking: {
    en: 'Understand parking options, stairs, and the final walk.',
    de: 'Wo das Auto steht und wie es von dort weitergeht.',
    es: 'Entender las opciones de aparcamiento, las escaleras y el último tramo a pie.',
    nl: 'Begrijp de parkeermogelijkheden, trappen en het laatste stuk lopen.',
    sv: 'Förstå parkeringsalternativen, trapporna och den sista promenaden.',
  },
  frigiliana_stairs: {
    en: 'Understand slopes, stairs, and the routes you will use each day.',
    de: 'Altstadt, neuer Ort oder Campo: was wo liegt.',
    es: 'Entender las cuestas, las escaleras y los recorridos que usaréis cada día.',
    nl: 'Bekijk de hellingen, trappen en routes die jullie dagelijks gebruiken.',
    sv: 'Förstå lutningar, trappor och vägarna ni använder varje dag.',
  },
  getting_to_frigiliana: {
    en: 'Compare rental car, private transfer, and bus connections via Nerja.',
    de: 'Vom Flughafen Málaga ins Dorf, mit Auto, Transfer oder Bus.',
    es: 'Comparar coche de alquiler, traslado privado y autobús vía Nerja.',
    nl: 'Vergelijk huurauto, privétransfer en busverbindingen via Nerja.',
    sv: 'Jämför hyrbil, privat transfer och bussförbindelser via Nerja.',
  },
  arrival_guide: {
    en: 'Find the AMARA address, final route, and arrival steps.',
    de: 'Der letzte Weg zur grünen Haustür von Casa AMARA.',
    es: 'Conocer la dirección de AMARA, el último tramo y los pasos de la llegada.',
    nl: 'Bekijk het AMARA-adres, de laatste route en de stappen bij aankomst.',
    sv: 'Se AMARA-adressen, den sista vägen och stegen vid ankomst.',
  },
  frigiliana_market: {
    en: 'Plan the typical time, stalls, parking, and old-town walk.',
    de: 'Donnerstagvormittag an der Plaza de las Tres Culturas.',
    es: 'Planificar el horario habitual, los puestos, el aparcamiento y el paseo por el casco antiguo.',
    nl: 'Plan de gebruikelijke tijd, kramen, parkeren en wandeling door de oude kern.',
    sv: 'Planera vanlig tid, stånd, parkering och promenad i gamla stan.',
  },
  weather_frigiliana: {
    en: 'Plan terraces, walking hours, and season choice.',
    de: 'Sonne, Wind und Regen im Jahreslauf.',
    es: 'Planificar terrazas, horas de paseo y temporada.',
    nl: 'Plan terrassen, wandeltijden en seizoen.',
    sv: 'Planera terrasser, promenadtider och säsong.',
  },
  faq_general: {
    en: 'Check answers about booking, arrival, house rules, and the stay.',
    de: 'Buchung, Anreise und Aufenthalt bei AMARA.',
    es: 'Consultar respuestas sobre reserva, llegada, normas y estancia.',
    nl: 'Bekijk antwoorden over boeken, aankomst, huisregels en het verblijf.',
    sv: 'Se svar om bokning, ankomst, husregler och vistelsen.',
  },
  romantic_hideaways: {
    en: 'Compare AMARA stays in Frigiliana and Nerja.',
    de: 'Unsere Häuser in Frigiliana und Nerja.',
    es: 'Comparar estancias AMARA en Frigiliana y Nerja.',
    nl: 'Vergelijk AMARA-verblijven in Frigiliana en Nerja.',
    sv: 'Jämför AMARA-boenden i Frigiliana och Nerja.',
  },
  location_nerja: {
    en: 'Compare the beach town, flatter routes, and stays close to the sea.',
    de: 'Der Strandort eine Viertelstunde unterhalb.',
    es: 'Comparar la localidad costera, los recorridos más llanos y los alojamientos junto al mar.',
    nl: 'Vergelijk de badplaats, vlakkere routes en verblijven dicht bij zee.',
    sv: 'Jämför kuststaden, flackare vägar och boenden nära havet.',
  },
} satisfies Record<string, LocalizedText>;

export type FrigilianaPreFooterToken = keyof typeof descriptions;

export function getFrigilianaPreFooterDescription(
  token: FrigilianaPreFooterToken,
  lang: AmaraLanguage,
): string {
  return descriptions[token][lang] ?? descriptions[token].en;
}
