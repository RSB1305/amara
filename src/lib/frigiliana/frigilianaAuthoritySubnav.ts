import {
  getLocationGuideTopicLabels,
  type LocationGuideTopicId
} from '../location/locationGuideTopics';
import { resolveLink } from '../linkResolver';
import type { AmaraLanguage } from '../../types/seo';

export type FrigilianaAuthoritySubnavId =
  | 'intro'
  | 'stay'
  | 'comparison'
  | 'arrival'
  | 'parking'
  | 'weather'
  | 'winter'
  | 'dosTumbas'
  | 'faq';

export type FrigilianaAuthoritySubnavItem = {
  id: LocationGuideTopicId;
  label: string;
  href?: string;
  status: 'live' | 'future';
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
  stay: {
    en: 'Where to Stay / Areas',
    de: 'Wo übernachten / Lagen',
    es: 'Dónde alojarse / zonas',
    nl: 'Waar overnachten / gebieden',
    sv: 'Var ska man bo / områden'
  },
  comparison: {
    en: 'Frigiliana & Nerja',
    de: 'Frigiliana & Nerja',
    es: 'Frigiliana y Nerja',
    nl: 'Frigiliana en Nerja',
    sv: 'Frigiliana och Nerja'
  },
  arrival: {
    en: 'Arrival & Mobility',
    de: 'Anreise & Mobilität',
    es: 'Llegada y movilidad',
    nl: 'Aankomst & mobiliteit',
    sv: 'Ankomst & mobilitet'
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
    es: 'Tiempo y estaciones',
    nl: 'Weer & seizoenen',
    sv: 'Väder & årstider'
  },
  winter: {
    en: 'Winter Stays',
    de: 'Winteraufenthalte',
    es: 'Estancias de invierno',
    nl: 'Winterverblijven',
    sv: 'Vintervistelser'
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

export function getFrigilianaAuthorityActiveTopic(
  id: FrigilianaAuthoritySubnavId
): LocationGuideTopicId | undefined {
  const topicByPage: Partial<
    Record<FrigilianaAuthoritySubnavId, LocationGuideTopicId>
  > = {
    arrival: 'arrival-mobility',
    parking: 'arrival-mobility',
    stay: 'where-to-stay',
    weather: 'weather-seasons',
    winter: 'winter-stays'
  };

  return topicByPage[id];
}

export function getFrigilianaAuthoritySubnav(
  currentLang: AmaraLanguage
): FrigilianaAuthoritySubnavItem[] {
  const labels = getLocationGuideTopicLabels(currentLang);

  return [
    {
      id: 'arrival-mobility',
      label: labels['arrival-mobility'],
      status: 'live',
      href: resolveLink('getting_to_frigiliana', currentLang)
    },
    {
      id: 'geography-orientation',
      label: labels['geography-orientation'],
      status: 'future'
    },
    {
      id: 'where-to-stay',
      label: labels['where-to-stay'],
      status: 'live',
      href: resolveLink('frigiliana_stairs', currentLang)
    },
    {
      id: 'weather-seasons',
      label: labels['weather-seasons'],
      status: 'live',
      href: resolveLink('weather_frigiliana', currentLang)
    },
    {
      id: 'daily-life-services',
      label: labels['daily-life-services'],
      status: 'future'
    },
    {
      id: 'winter-stays',
      label: labels['winter-stays'],
      status: 'live',
      href: resolveLink('frigiliana_winter_stays', currentLang)
    }
  ];
}
