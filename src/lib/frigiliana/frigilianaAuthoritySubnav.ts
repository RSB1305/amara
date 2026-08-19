import {
  getLocationGuideClusterLabels,
  LOCATION_GUIDE_CLUSTER_IDS,
  LOCATION_GUIDE_CLUSTER_TOPICS,
  getLocationGuideTopicLabels,
  type LocationGuideClusterId,
  type LocationGuideTopicId
} from '../location/locationGuideTopics';
import { resolveLink, type LinkToken } from '../linkResolver';
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

export type FrigilianaAuthorityTopicId = LocationGuideTopicId;

export type FrigilianaAuthoritySubnavItem = {
  id: FrigilianaAuthorityTopicId;
  label: string;
  href?: string;
  status: 'live' | 'future';
};

export type FrigilianaAuthoritySubnavGroup = {
  id: LocationGuideClusterId;
  items: FrigilianaAuthoritySubnavItem[];
  label: string;
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
    en: 'Parking & Accessibility',
    de: 'Parken & Erreichbarkeit',
    es: 'Aparcamiento y acceso',
    nl: 'Parkeren & toegankelijkheid',
    sv: 'Parkering & tillgänglighet'
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

const topicLinks: Record<LocationGuideTopicId, LinkToken | undefined> = {
  'arrival-mobility': 'getting_to_frigiliana',
  'geography-orientation': 'frigiliana_geography',
  'where-to-stay': 'frigiliana_stairs',
  'weather-seasons': 'weather_frigiliana',
  'winter-stays': 'frigiliana_winter_stays',
  'parking-accessibility': 'frigiliana_parking',
  'shopping-markets': 'frigiliana_market',
  'health-emergency': undefined,
  'practical-local-rules': undefined
};

const makeTopicItem = (
  topicId: LocationGuideTopicId,
  currentLang: AmaraLanguage
): FrigilianaAuthoritySubnavItem => {
  const topicLabels = getLocationGuideTopicLabels(currentLang);
  const token = topicLinks[topicId];

  return token
    ? {
        id: topicId,
        label: topicLabels[topicId],
        status: 'live',
        href: resolveLink(token, currentLang)
      }
    : {
        id: topicId,
        label: topicLabels[topicId],
        status: 'future'
      };
};

export function getFrigilianaAuthorityActiveTopic(
  id: FrigilianaAuthoritySubnavId
): FrigilianaAuthorityTopicId | undefined {
  const topicByPage: Partial<Record<FrigilianaAuthoritySubnavId, FrigilianaAuthorityTopicId>> = {
    intro: undefined,
    arrival: 'arrival-mobility',
    geography: 'geography-orientation',
    dailyLife: 'shopping-markets',
    parking: 'parking-accessibility',
    stay: 'where-to-stay',
    weather: 'weather-seasons',
    winter: 'winter-stays',
    oldTown: 'geography-orientation',
    faq: 'practical-local-rules',
    comparison: 'where-to-stay',
    dosTumbas: 'practical-local-rules'
  };

  return topicByPage[id];
}

export function getFrigilianaAuthoritySubnavGroups(
  currentLang: AmaraLanguage
): FrigilianaAuthoritySubnavGroup[] {
  const labels = getLocationGuideClusterLabels(currentLang);
  const topicIdsByCluster = LOCATION_GUIDE_CLUSTER_TOPICS;

  return LOCATION_GUIDE_CLUSTER_IDS.map((clusterId) => ({
    id: clusterId,
    label: labels[clusterId],
    items: topicIdsByCluster[clusterId].map((topicId) => makeTopicItem(topicId, currentLang))
  }));
}

export function getFrigilianaAuthoritySubnav(
  currentLang: AmaraLanguage
): FrigilianaAuthoritySubnavItem[] {
  return getFrigilianaAuthoritySubnavGroups(currentLang).flatMap((group) => group.items);
}

export function getFrigilianaAuthorityCurrentPageLabel(
  id: FrigilianaAuthoritySubnavId,
  currentLang: AmaraLanguage
): string {
  return currentPageLabels[id][currentLang];
}
