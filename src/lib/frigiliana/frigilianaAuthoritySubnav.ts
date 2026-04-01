import { resolveLink } from '../linkResolver';
import type { AmaraLanguage } from '../../types/seo';

export type FrigilianaAuthoritySubnavId =
  | 'intro'
  | 'weather'
  | 'comparison'
  | 'structure'
  | 'stay'
  | 'arrival'
  | 'faq';

export type FrigilianaAuthoritySubnavItem = {
  id: FrigilianaAuthoritySubnavId;
  label: string;
  href: string;
};

const labels: Record<
  FrigilianaAuthoritySubnavId,
  Record<AmaraLanguage, string>
> = {
  intro: {
    en: 'Highlights & Orientation',
    de: 'Überblick & Orientierung',
    es: 'Lo esencial y orientación',
    nl: 'Hoogtepunten & oriëntatie',
    sv: 'Höjdpunkter & orientering'
  },
  weather: {
    en: 'Weather & Climate',
    de: 'Wetter & Klima',
    es: 'Tiempo y clima',
    nl: 'Weer & klimaat',
    sv: 'Väder & klimat'
  },
  comparison: {
    en: 'Frigiliana vs Nerja',
    de: 'Frigiliana vs Nerja',
    es: 'Frigiliana vs Nerja',
    nl: 'Frigiliana vs Nerja',
    sv: 'Frigiliana vs Nerja'
  },
  structure: {
    en: 'Village Structure',
    de: 'Dorfstruktur',
    es: 'Estructura del pueblo',
    nl: 'Dorpsstructuur',
    sv: 'Bystruktur'
  },
  stay: {
    en: 'Where to Stay',
    de: 'Unterkunft',
    es: 'Dónde alojarse',
    nl: 'Overnachten',
    sv: 'Boende'
  },
  arrival: {
    en: 'Arrival Guide',
    de: 'Anreise',
    es: 'Llegada',
    nl: 'Aankomst',
    sv: 'Ankomst'
  },
  faq: { en: 'FAQ', de: 'FAQ', es: 'FAQ', nl: 'FAQ', sv: 'FAQ' }
};

const locationAnchors: Record<
  Exclude<FrigilianaAuthoritySubnavId, 'arrival' | 'weather'>,
  string
> = {
  intro: '#intro',
  comparison: '#comparison',
  structure: '#experiences',
  stay: '#where-to-stay',
  faq: '#faq'
};

export function getFrigilianaAuthoritySubnav(
  currentLang: AmaraLanguage
): FrigilianaAuthoritySubnavItem[] {
  const locationBase = resolveLink('location_frigiliana', currentLang);

  const locationItems: FrigilianaAuthoritySubnavItem[] = (
    Object.keys(locationAnchors) as Array<Exclude<FrigilianaAuthoritySubnavId, 'arrival'>>
  ).map((id) => ({
    id,
    label: labels[id][currentLang],
    href: `${locationBase}${locationAnchors[id]}`
  }));

  const arrivalItem: FrigilianaAuthoritySubnavItem = {
    id: 'arrival',
    label: labels.arrival[currentLang],
    href: resolveLink('arrival_guide', currentLang)
  };

  const weatherItem: FrigilianaAuthoritySubnavItem = {
    id: 'weather',
    label: labels.weather[currentLang],
    href: resolveLink('weather_frigiliana', currentLang)
  };

  const ordered: FrigilianaAuthoritySubnavId[] = [
    'intro',
    'weather',
    'comparison',
    'structure',
    'stay',
    'arrival',
    'faq'
  ];

  const byId = new Map<FrigilianaAuthoritySubnavId, FrigilianaAuthoritySubnavItem>([
    ...locationItems.map((i) => [i.id, i] as const),
    ['arrival', arrivalItem],
    ['weather', weatherItem]
  ]);

  return ordered.map((id) => byId.get(id)!).filter(Boolean);
}

