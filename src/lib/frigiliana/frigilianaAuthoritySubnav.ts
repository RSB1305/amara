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
    en: 'Daily Life & Shopping',
    de: 'Alltag & Einkaufen',
    es: 'Vida diaria y compras',
    nl: 'Dagelijks leven & boodschappen',
    sv: 'Vardag & inköp'
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
      'daily-life-essentials': 'In the Village'
    },
    topics: {
      'where-to-stay': 'Where to Stay',
      'parking-accessibility': 'Parking & Access',
      'shopping-markets': 'Daily Life & Shopping',
      'health-emergency': 'Medical Care'
    }
  },
  de: {
    clusters: {
      'orientation-areas': 'Lagen im Bergdorf',
      'climate-seasons': 'Klima & Reisezeit',
      'arrival-parking': 'Ankommen',
      'daily-life-essentials': 'Vor Ort'
    },
    topics: {
      'where-to-stay': 'Wo übernachten',
      'parking-accessibility': 'Parken & Zugang',
      'shopping-markets': 'Alltag & Einkaufen',
      'health-emergency': 'Medizinische Versorgung'
    }
  },
  es: {
    clusters: {
      'orientation-areas': 'Zonas del pueblo',
      'climate-seasons': 'Clima y época de viaje',
      'arrival-parking': 'Cómo llegar',
      'daily-life-essentials': 'En el pueblo'
    },
    topics: {
      'where-to-stay': 'Dónde alojarse',
      'parking-accessibility': 'Aparcamiento y acceso',
      'shopping-markets': 'Vida diaria y compras',
      'health-emergency': 'Atención médica'
    }
  },
  nl: {
    clusters: {
      'orientation-areas': 'Liggingen in het bergdorp',
      'climate-seasons': 'Klimaat & reistijd',
      'arrival-parking': 'Aankomst',
      'daily-life-essentials': 'In het dorp'
    },
    topics: {
      'where-to-stay': 'Waar overnachten',
      'parking-accessibility': 'Parkeren & toegang',
      'shopping-markets': 'Dagelijks leven & boodschappen',
      'health-emergency': 'Medische zorg'
    }
  },
  sv: {
    clusters: {
      'orientation-areas': 'Lägen i bergsbyn',
      'climate-seasons': 'Klimat & restid',
      'arrival-parking': 'Ankomst',
      'daily-life-essentials': 'I byn'
    },
    topics: {
      'where-to-stay': 'Var ska man bo',
      'parking-accessibility': 'Parkering & åtkomst',
      'shopping-markets': 'Vardag & inköp',
      'health-emergency': 'Sjukvård'
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
  'health-emergency': 'frigiliana_daily_life',
  'practical-local-rules': 'frigiliana_daily_life'
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
