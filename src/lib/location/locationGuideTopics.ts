import type { AmaraLanguage } from '../../types/seo';

export const LOCATION_GUIDE_CLUSTER_IDS = [
  'orientation-areas',
  'climate-seasons',
  'arrival-parking',
  'daily-life-essentials'
] as const;

export const LOCATION_GUIDE_TOPIC_IDS = [
  'geography-orientation',
  'where-to-stay',
  'weather-seasons',
  'winter-stays',
  'arrival-mobility',
  'parking-accessibility',
  'shopping-markets',
  'health-emergency',
  'practical-local-rules'
] as const;

export type LocationGuideClusterId = (typeof LOCATION_GUIDE_CLUSTER_IDS)[number];
export type LocationGuideTopicId = (typeof LOCATION_GUIDE_TOPIC_IDS)[number];

export type LocationGuideTopicLabels = Record<LocationGuideTopicId, string>;
export type LocationGuideClusterLabels = Record<LocationGuideClusterId, string>;

const labels: Record<AmaraLanguage, LocationGuideTopicLabels> = {
  en: {
    'arrival-mobility': 'Arrival & Mobility',
    'geography-orientation': 'Geography & Orientation',
    'parking-accessibility': 'Parking & Accessibility',
    'practical-local-rules': 'Practical & Local Rules',
    'shopping-markets': 'Shopping & Markets',
    'health-emergency': 'Health & Emergency',
    'where-to-stay': 'Where to Stay / Areas',
    'weather-seasons': 'Weather & Seasons',
    'winter-stays': 'Winter Stays'
  },
  de: {
    'arrival-mobility': 'Anreise & Mobilität',
    'geography-orientation': 'Geografie & Orientierung',
    'parking-accessibility': 'Parken & Erreichbarkeit',
    'practical-local-rules': 'Praktische Regeln & lokale Vorschriften',
    'shopping-markets': 'Einkauf & Märkte',
    'health-emergency': 'Gesundheit & Notfälle',
    'where-to-stay': 'Wo übernachten / Lagen',
    'weather-seasons': 'Wetter & Jahreszeiten',
    'winter-stays': 'Winteraufenthalte'
  },
  es: {
    'arrival-mobility': 'Llegada y movilidad',
    'geography-orientation': 'Geografía y orientación',
    'parking-accessibility': 'Aparcamiento y acceso',
    'practical-local-rules': 'Normas prácticas y locales',
    'shopping-markets': 'Compras y mercados',
    'health-emergency': 'Salud y emergencia',
    'where-to-stay': 'Dónde alojarse / zonas',
    'weather-seasons': 'Tiempo y estaciones',
    'winter-stays': 'Estancias de invierno'
  },
  nl: {
    'arrival-mobility': 'Aankomst & mobiliteit',
    'geography-orientation': 'Geografie & oriëntatie',
    'parking-accessibility': 'Parkeren & toegankelijkheid',
    'practical-local-rules': 'Praktische regels & lokale voorschriften',
    'shopping-markets': 'Winkelen & markten',
    'health-emergency': 'Gezondheid & noodgevallen',
    'where-to-stay': 'Waar overnachten / gebieden',
    'weather-seasons': 'Weer & seizoenen',
    'winter-stays': 'Winterverblijven'
  },
  sv: {
    'arrival-mobility': 'Ankomst & mobilitet',
    'geography-orientation': 'Geografi & orientering',
    'parking-accessibility': 'Parkering & tillgänglighet',
    'practical-local-rules': 'Praktiska regler & lokala regler',
    'shopping-markets': 'Shopping & marknader',
    'health-emergency': 'Hälsa & nödsituation',
    'where-to-stay': 'Var ska man bo / områden',
    'weather-seasons': 'Väder & årstider',
    'winter-stays': 'Vintervistelser'
  }
};

const clusterLabels: Record<AmaraLanguage, LocationGuideClusterLabels> = {
  en: {
    'orientation-areas': 'Orientation & Areas',
    'climate-seasons': 'Climate & Travel Timing',
    'arrival-parking': 'Arrival & Parking',
    'daily-life-essentials': 'Daily Life & Essentials'
  },
  de: {
    'orientation-areas': 'Orientierung & Lagen',
    'climate-seasons': 'Klima & Reisezeit',
    'arrival-parking': 'Anreise & Parken',
    'daily-life-essentials': 'Alltag & Versorgung'
  },
  es: {
    'orientation-areas': 'Orientación y zonas',
    'climate-seasons': 'Clima y época de viaje',
    'arrival-parking': 'Llegada y aparcamiento',
    'daily-life-essentials': 'Vida diaria y servicios'
  },
  nl: {
    'orientation-areas': 'Oriëntatie & gebieden',
    'climate-seasons': 'Klimaat & reistijd',
    'arrival-parking': 'Aankomst & parkeren',
    'daily-life-essentials': 'Dagelijks leven & voorzieningen'
  },
  sv: {
    'orientation-areas': 'Orientering & områden',
    'climate-seasons': 'Klimat & restid',
    'arrival-parking': 'Ankomst & parkering',
    'daily-life-essentials': 'Vardag & service'
  }
};

export const LOCATION_GUIDE_CLUSTER_TOPICS: Record<
  LocationGuideClusterId,
  readonly LocationGuideTopicId[]
> = {
  'orientation-areas': ['geography-orientation', 'where-to-stay'],
  'climate-seasons': ['weather-seasons', 'winter-stays'],
  'arrival-parking': ['arrival-mobility', 'parking-accessibility'],
  'daily-life-essentials': ['shopping-markets', 'health-emergency', 'practical-local-rules']
};

export function getLocationGuideTopicLabels(
  currentLang: AmaraLanguage
): LocationGuideTopicLabels {
  return labels[currentLang];
}

export function getLocationGuideClusterLabels(
  currentLang: AmaraLanguage
): LocationGuideClusterLabels {
  return clusterLabels[currentLang];
}
