import { resolveLink } from '../linkResolver';
import type { AmaraLanguage } from '../../types/seo';

export type FrigilianaAuthoritySubnavId =
  | 'intro'
  | 'stay'
  | 'comparison'
  | 'arrival'
  | 'parking'
  | 'weather'
  | 'dosTumbas'
  | 'faq';

export type FrigilianaAuthoritySubnavItem = {
  id: FrigilianaAuthoritySubnavId;
  label: string;
  href: string;
};

type VisibleFrigilianaAuthoritySubnavId = Exclude<
  FrigilianaAuthoritySubnavId,
  'intro' | 'dosTumbas' | 'faq'
>;

const visibleLabels: Record<
  VisibleFrigilianaAuthoritySubnavId,
  Record<AmaraLanguage, string>
> = {
  stay: {
    en: 'Where to Stay',
    de: 'Wo übernachten',
    es: 'Dónde alojarse',
    nl: 'Waar overnachten',
    sv: 'Var ska man bo'
  },
  comparison: {
    en: 'Frigiliana & Nerja',
    de: 'Frigiliana & Nerja',
    es: 'Frigiliana y Nerja',
    nl: 'Frigiliana en Nerja',
    sv: 'Frigiliana och Nerja'
  },
  arrival: {
    en: 'Getting Here',
    de: 'Anreise',
    es: 'Cómo llegar',
    nl: 'Erheen reizen',
    sv: 'Resa hit'
  },
  parking: {
    en: 'Parking',
    de: 'Parken',
    es: 'Aparcamiento',
    nl: 'Parkeren',
    sv: 'Parkering'
  },
  weather: {
    en: 'Weather & Seasons',
    de: 'Wetter & Jahreszeiten',
    es: 'Clima y estaciones',
    nl: 'Weer & seizoenen',
    sv: 'Väder & årstider'
  }
};

const currentPageLabels: Record<
  FrigilianaAuthoritySubnavId,
  Record<AmaraLanguage, string>
> = {
  intro: {
    en: 'Frigiliana',
    de: 'Frigiliana',
    es: 'Frigiliana',
    nl: 'Frigiliana',
    sv: 'Frigiliana'
  },
  ...visibleLabels,
  arrival: {
    en: 'Arrival Guide',
    de: 'Anreise',
    es: 'Llegada',
    nl: 'Aankomst',
    sv: 'Ankomst'
  },
  dosTumbas: {
    en: 'Netflix Locations',
    de: 'Netflix-Drehorte',
    es: 'Localizaciones Netflix',
    nl: 'Netflix-locaties',
    sv: 'Netflix-platser'
  },
  faq: {
    en: 'FAQ',
    de: 'FAQ',
    es: 'FAQ',
    nl: 'FAQ',
    sv: 'FAQ'
  }
};

export function getFrigilianaAuthorityCurrentPageLabel(
  id: FrigilianaAuthoritySubnavId,
  currentLang: AmaraLanguage
): string {
  return currentPageLabels[id][currentLang];
}

export function getFrigilianaAuthoritySubnav(
  currentLang: AmaraLanguage
): FrigilianaAuthoritySubnavItem[] {
  return [
    {
      id: 'arrival',
      label: visibleLabels.arrival[currentLang],
      href: resolveLink('getting_to_frigiliana', currentLang)
    },
    {
      id: 'stay',
      label: visibleLabels.stay[currentLang],
      href: resolveLink('frigiliana_stairs', currentLang)
    },
    {
      id: 'parking',
      label: visibleLabels.parking[currentLang],
      href: resolveLink('frigiliana_parking', currentLang)
    },
    {
      id: 'weather',
      label: visibleLabels.weather[currentLang],
      href: resolveLink('weather_frigiliana', currentLang)
    },
    {
      id: 'comparison',
      label: visibleLabels.comparison[currentLang],
      href: resolveLink('nerja_vs_frigiliana', currentLang)
    }
  ];
}
