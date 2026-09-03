import {
  buildAuthoritySubnavGroups,
  type AuthoritySubnavGroup,
  type AuthoritySubnavItem,
  type LocationTopicLinks
} from '../location/authoritySubnav';
import type {
  LocationGuideClusterId,
  LocationGuideTopicId
} from '../location/locationGuideTopics';
import type { AmaraLanguage } from '../../types/seo';

export type FrigilianaAuthoritySubnavId =
  | 'intro'
  | 'stay'
  | 'comparison'
  | 'arrival'
  | 'geography'
  | 'dailyLife'
  | 'health'
  | 'parking'
  | 'weather'
  | 'winter'
  | 'dosTumbas'
  | 'oldTown'
  | 'faq';

export type FrigilianaAuthorityTopicId = LocationGuideTopicId;
export type FrigilianaAuthoritySubnavItem = AuthoritySubnavItem;
export type FrigilianaAuthoritySubnavGroup = AuthoritySubnavGroup;

/**
 * Frigiliana names its own pages in the breadcrumb rather than reusing the
 * topic labels, because several of its pages carry a narrative job that the
 * generic topic name does not describe.
 */
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
    en: 'Supermarkets & Shopping',
    de: 'Supermärkte & Einkaufen',
    es: 'Supermercados y compras',
    nl: 'Supermarkten & boodschappen',
    sv: 'Matbutiker & inköp'
  },
  health: {
    en: 'Health & Emergency',
    de: 'Gesundheit & Notfälle',
    es: 'Salud y emergencia',
    nl: 'Gezondheid & noodgevallen',
    sv: 'Hälsa & nödsituation'
  },
  parking: {
    en: 'Parking & Access',
    de: 'Parken & Zugang',
    es: 'Aparcamiento y acceso',
    nl: 'Parkeren & toegang',
    sv: 'Parkering & åtkomst'
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

type FrigilianaNavigationCopy = {
  clusters: Record<LocationGuideClusterId, string>;
  topics: Partial<Record<LocationGuideTopicId, string>>;
};

const navigationCopy: Record<AmaraLanguage, FrigilianaNavigationCopy> = {
  en: {
    clusters: {
      'orientation-areas': 'Hill-Village Areas',
      'climate-seasons': 'Climate & Travel Timing',
      'arrival-parking': 'Getting Here',
      'daily-life-essentials': 'Daily Life & Essentials'
    },
    topics: {
      'where-to-stay': 'Where to Stay',
      'parking-accessibility': 'Parking & Access',
      'shopping-markets': 'Supermarkets & Shopping',
      'health-emergency': 'Health & Emergency'
    }
  },
  de: {
    clusters: {
      'orientation-areas': 'Lagen im Bergdorf',
      'climate-seasons': 'Klima & Reisezeit',
      'arrival-parking': 'Ankommen',
      'daily-life-essentials': 'Alltag & Versorgung'
    },
    topics: {
      'where-to-stay': 'Wo übernachten',
      'parking-accessibility': 'Parken & Zugang',
      'shopping-markets': 'Supermärkte & Einkaufen',
      'health-emergency': 'Gesundheit & Notfälle'
    }
  },
  es: {
    clusters: {
      'orientation-areas': 'Zonas del pueblo',
      'climate-seasons': 'Clima y época de viaje',
      'arrival-parking': 'Cómo llegar',
      'daily-life-essentials': 'Vida diaria y servicios'
    },
    topics: {
      'where-to-stay': 'Dónde alojarse',
      'parking-accessibility': 'Aparcamiento y acceso',
      'shopping-markets': 'Supermercados y compras',
      'health-emergency': 'Salud y emergencia'
    }
  },
  nl: {
    clusters: {
      'orientation-areas': 'Liggingen in het bergdorp',
      'climate-seasons': 'Klimaat & reistijd',
      'arrival-parking': 'Aankomst',
      'daily-life-essentials': 'Dagelijks leven & voorzieningen'
    },
    topics: {
      'where-to-stay': 'Waar overnachten',
      'parking-accessibility': 'Parkeren & toegang',
      'shopping-markets': 'Supermarkten & boodschappen',
      'health-emergency': 'Gezondheid & noodgevallen'
    }
  },
  sv: {
    clusters: {
      'orientation-areas': 'Lägen i bergsbyn',
      'climate-seasons': 'Klimat & restid',
      'arrival-parking': 'Ankomst',
      'daily-life-essentials': 'Vardag & service'
    },
    topics: {
      'where-to-stay': 'Var ska man bo',
      'parking-accessibility': 'Parkering & åtkomst',
      'shopping-markets': 'Matbutiker & inköp',
      'health-emergency': 'Hälsa & nödsituation'
    }
  }
};
/**
 * Frigiliana publishes all nine topics. `where-to-stay` points at the streets
 * and stairs page, which is where the village's own areas are explained.
 */
const topicLinks: LocationTopicLinks = {
  'arrival-mobility': 'getting_to_frigiliana',
  'geography-orientation': 'frigiliana_geography',
  'where-to-stay': 'frigiliana_stairs',
  'weather-seasons': 'weather_frigiliana',
  'winter-stays': 'frigiliana_winter_stays',
  'parking-accessibility': 'frigiliana_parking',
  'shopping-markets': 'frigiliana_daily_life',
  'health-emergency': 'frigiliana_health_emergency'
};

export function getFrigilianaAuthorityActiveTopic(
  id: FrigilianaAuthoritySubnavId
): FrigilianaAuthorityTopicId | undefined {
  const topicByPage: Partial<Record<FrigilianaAuthoritySubnavId, FrigilianaAuthorityTopicId>> = {
    intro: undefined,
    arrival: 'arrival-mobility',
    geography: 'geography-orientation',
    dailyLife: 'shopping-markets',
    health: 'health-emergency',
    parking: 'parking-accessibility',
    stay: 'where-to-stay',
    weather: 'weather-seasons',
    winter: 'winter-stays',
    oldTown: 'geography-orientation',
    faq: undefined,
    comparison: 'where-to-stay',
    dosTumbas: undefined
  };

  return topicByPage[id];
}

export function getFrigilianaAuthoritySubnavGroups(
  currentLang: AmaraLanguage
): FrigilianaAuthoritySubnavGroup[] {
  const copy = navigationCopy[currentLang];

  return buildAuthoritySubnavGroups(topicLinks, currentLang).map((group) => ({
    ...group,
    label: copy.clusters[group.id],
    items: group.items.map((item) => ({
      ...item,
      label: copy.topics[item.id] ?? item.label
    }))
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
