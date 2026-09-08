import type { LocalizedText } from '../types/content';
import type { AmaraLanguage } from '../types/seo';


export const frigilianaPreFooterCopy: {
  eyebrow: LocalizedText;
  intro: LocalizedText;
} = {
  eyebrow: {
    en: 'On through Frigiliana',
    de: 'Weiter in Frigiliana',
    es: 'Seguir por Frigiliana',
    nl: 'Verder in Frigiliana',
    sv: 'Vidare i Frigiliana',
  },
  intro: {
    en: 'The next pages for your stay in the village.',
    de: 'Die nächsten Seiten für euren Aufenthalt im Dorf.',
    es: 'Las siguientes páginas para vuestra estancia en el pueblo.',
    nl: 'De volgende pagina’s voor jullie verblijf in het dorp.',
    sv: 'Nästa sidor för er vistelse i byn.',
  },
};

const descriptions = {
  location_frigiliana: {
    en: 'The village, its lanes and everyday life in them.',
    de: 'Das Dorf, seine Gassen und der Alltag darin.',
    es: 'El pueblo, sus callejuelas y el día a día en ellas.',
    nl: 'Het dorp, zijn steegjes en het dagelijks leven daarin.',
    sv: 'Byn, dess gränder och vardagen i dem.',
  },
  frigiliana_parking: {
    en: 'Where the car goes and how it continues from there.',
    de: 'Wo das Auto steht und wie es von dort weitergeht.',
    es: 'Dónde se deja el coche y cómo se sigue desde allí.',
    nl: 'Waar de auto staat en hoe het van daar verdergaat.',
    sv: 'Var bilen står och hur det fortsätter därifrån.',
  },
  frigiliana_stairs: {
    en: 'Old town, newer village or campo: what lies where.',
    de: 'Altstadt, neuer Ort oder Campo: was wo liegt.',
    es: 'Casco antiguo, parte nueva o campo: qué hay dónde.',
    nl: 'Oude kern, nieuwer deel of campo: wat waar ligt.',
    sv: 'Gamla byn, nya delen eller campo: vad som ligger var.',
  },
  getting_to_frigiliana: {
    en: 'From Málaga airport to the village, by car, transfer or bus.',
    de: 'Vom Flughafen Málaga ins Dorf, mit Auto, Transfer oder Bus.',
    es: 'Del aeropuerto de Málaga al pueblo, en coche, traslado o autobús.',
    nl: 'Van de luchthaven Málaga naar het dorp, met auto, transfer of bus.',
    sv: 'Från Málagas flygplats till byn, med bil, transfer eller buss.',
  },
  arrival_guide: {
    en: 'The last stretch to the green front door of Casa AMARA.',
    de: 'Der letzte Weg zur grünen Haustür von Casa AMARA.',
    es: 'El último tramo hasta la puerta verde de Casa AMARA.',
    nl: 'De laatste meters naar de groene voordeur van Casa AMARA.',
    sv: 'Den sista biten till Casa AMARAs gröna ytterdörr.',
  },
  frigiliana_market: {
    en: 'Thursday morning at Plaza de las Tres Culturas.',
    de: 'Donnerstagvormittag an der Plaza de las Tres Culturas.',
    es: 'Jueves por la mañana en la Plaza de las Tres Culturas.',
    nl: 'Donderdagochtend op Plaza de las Tres Culturas.',
    sv: 'Torsdag förmiddag vid Plaza de las Tres Culturas.',
  },
  weather_frigiliana: {
    en: 'Sun, wind and rain through the year.',
    de: 'Sonne, Wind und Regen im Jahreslauf.',
    es: 'Sol, viento y lluvia a lo largo del año.',
    nl: 'Zon, wind en regen door het jaar.',
    sv: 'Sol, vind och regn genom året.',
  },
  faq_general: {
    en: 'Booking, arrival and your stay with AMARA.',
    de: 'Buchung, Anreise und Aufenthalt bei AMARA.',
    es: 'Reserva, llegada y estancia con AMARA.',
    nl: 'Boeking, aankomst en verblijf bij AMARA.',
    sv: 'Bokning, ankomst och vistelse hos AMARA.',
  },
  romantic_hideaways: {
    en: 'Our houses in Frigiliana and Nerja.',
    de: 'Unsere Häuser in Frigiliana und Nerja.',
    es: 'Nuestras casas en Frigiliana y Nerja.',
    nl: 'Onze huizen in Frigiliana en Nerja.',
    sv: 'Våra hus i Frigiliana och Nerja.',
  },
  location_nerja: {
    en: 'The beach town a quarter of an hour below.',
    de: 'Der Strandort eine Viertelstunde unterhalb.',
    es: 'El pueblo de playa, un cuarto de hora más abajo.',
    nl: 'De strandplaats een kwartier lager.',
    sv: 'Strandorten en kvart nedanför.',
  },
} satisfies Record<string, LocalizedText>;

export type FrigilianaPreFooterToken = keyof typeof descriptions;

export function getFrigilianaPreFooterDescription(
  token: FrigilianaPreFooterToken,
  lang: AmaraLanguage,
): string {
  return descriptions[token][lang] ?? descriptions[token].en;
}
