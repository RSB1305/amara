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
  | 'oldTown'
  | 'faq';

export type FrigilianaAuthorityTopicId =
  | LocationGuideTopicId
  | 'history-architecture';

export type FrigilianaAuthoritySubnavItem = {
  id: FrigilianaAuthorityTopicId;
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
  oldTown: {
    en: 'History & Architecture',
    de: 'Geschichte & Baukultur',
    es: 'Historia y arquitectura',
    nl: 'Geschiedenis & architectuur',
    sv: 'Historia & arkitektur'
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
): FrigilianaAuthorityTopicId | undefined {
  const topicByPage: Partial<
    Record<FrigilianaAuthoritySubnavId, FrigilianaAuthorityTopicId>
  > = {
    arrival: 'arrival-mobility',
    geography: 'geography-orientation',
    dailyLife: 'daily-life-services',
    parking: 'arrival-mobility',
    stay: 'where-to-stay',
    weather: 'weather-seasons',
    winter: 'winter-stays',
    oldTown: 'history-architecture'
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
      id: 'history-architecture',
      label: currentPageLabels.oldTown[currentLang],
      status: 'live',
      href: resolveLink('frigiliana_old_town', currentLang)
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
    }
  ];
}
