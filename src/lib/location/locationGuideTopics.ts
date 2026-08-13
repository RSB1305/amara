import type { AmaraLanguage } from '../../types/seo';

export const LOCATION_GUIDE_TOPIC_IDS = [
  'arrival-mobility',
  'geography-orientation',
  'where-to-stay',
  'weather-seasons',
  'daily-life-services',
  'winter-stays'
] as const;

export type LocationGuideTopicId = (typeof LOCATION_GUIDE_TOPIC_IDS)[number];

export type LocationGuideTopicLabels = Record<LocationGuideTopicId, string>;

const labels: Record<AmaraLanguage, LocationGuideTopicLabels> = {
  en: {
    'arrival-mobility': 'Arrival & Mobility',
    'geography-orientation': 'Geography & Orientation',
    'where-to-stay': 'Where to Stay / Areas',
    'weather-seasons': 'Weather & Seasons',
    'daily-life-services': 'Daily Life & Services',
    'winter-stays': 'Winter Stays'
  },
  de: {
    'arrival-mobility': 'Anreise & Mobilität',
    'geography-orientation': 'Geografie & Orientierung',
    'where-to-stay': 'Wo übernachten / Lagen',
    'weather-seasons': 'Wetter & Jahreszeiten',
    'daily-life-services': 'Alltag & Versorgung',
    'winter-stays': 'Winteraufenthalte'
  },
  es: {
    'arrival-mobility': 'Llegada y movilidad',
    'geography-orientation': 'Geografía y orientación',
    'where-to-stay': 'Dónde alojarse / zonas',
    'weather-seasons': 'Tiempo y estaciones',
    'daily-life-services': 'Vida diaria y servicios',
    'winter-stays': 'Estancias de invierno'
  },
  nl: {
    'arrival-mobility': 'Aankomst & mobiliteit',
    'geography-orientation': 'Geografie & oriëntatie',
    'where-to-stay': 'Waar overnachten / gebieden',
    'weather-seasons': 'Weer & seizoenen',
    'daily-life-services': 'Dagelijks leven & voorzieningen',
    'winter-stays': 'Winterverblijven'
  },
  sv: {
    'arrival-mobility': 'Ankomst & mobilitet',
    'geography-orientation': 'Geografi & orientering',
    'where-to-stay': 'Var ska man bo / områden',
    'weather-seasons': 'Väder & årstider',
    'daily-life-services': 'Vardag & service',
    'winter-stays': 'Vintervistelser'
  }
};

export function getLocationGuideTopicLabels(
  currentLang: AmaraLanguage
): LocationGuideTopicLabels {
  return labels[currentLang];
}
