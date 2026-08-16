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
  | 'geography'
  | 'dailyLife'
  | 'parking'
  | 'weather'
  | 'winter'
  | 'dosTumbas'
  | 'faq';

/**
 * Frigiliana lists two sibling topics the shared location model does not define.
 * Keeping their ids local avoids widening the shared topic contract, which Nerja
 * and Tarifa consume unchanged.
 */
export type FrigilianaAuthoritySubnavTopicId =
  | LocationGuideTopicId
  | 'frigiliana-film-locations'
  | 'frigiliana-faq';

export type FrigilianaAuthoritySubnavItem = {
  id: FrigilianaAuthoritySubnavTopicId;
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
  geography: {
    en: 'Geography & Orientation',
    de: 'Geografie & Orientierung',
    es: 'Geografía y orientación',
    nl: 'Geografie & oriëntatie',
    sv: 'Geografi & orientering'
  },
  dailyLife: {
    en: 'Daily Life & Services',
    de: 'Alltag & Versorgung',
    es: 'Vida diaria y servicios',
    nl: 'Dagelijks leven & voorzieningen',
    sv: 'Vardag & service'
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
): FrigilianaAuthoritySubnavTopicId | undefined {
  const topicByPage: Partial<
    Record<FrigilianaAuthoritySubnavId, FrigilianaAuthoritySubnavTopicId>
  > = {
    arrival: 'arrival-mobility',
    geography: 'geography-orientation',
    dailyLife: 'daily-life-services',
    parking: 'arrival-mobility',
    stay: 'where-to-stay',
    weather: 'weather-seasons',
    winter: 'winter-stays',
    dosTumbas: 'frigiliana-film-locations',
    faq: 'frigiliana-faq'
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
      status: 'live',
      href: resolveLink('frigiliana_geography', currentLang)
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
      status: 'live',
      href: resolveLink('frigiliana_daily_life', currentLang)
    },
    // Both entries reuse the authored breadcrumb labels so the sibling switcher
    // and the breadcrumb name the same page identically in every language.
    {
      id: 'frigiliana-film-locations',
      label: currentPageLabels.dosTumbas[currentLang],
      status: 'live',
      href: resolveLink('frigiliana_netflix_dos_tumbas', currentLang)
    },
    {
      id: 'frigiliana-faq',
      label: currentPageLabels.faq[currentLang],
      status: 'live',
      href: resolveLink('frigiliana_faq', currentLang)
    }
  ];
}
