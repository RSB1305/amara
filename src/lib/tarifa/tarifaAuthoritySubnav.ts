import type { TarifaGuideId } from '../../content/tarifaGuideContent';
import {
  getLocationGuideTopicLabels,
  LOCATION_GUIDE_CLUSTER_IDS,
  LOCATION_GUIDE_CLUSTER_TOPICS,
  type LocationGuideTopicId
} from '../location/locationGuideTopics';
import { resolveLink, type LinkToken } from '../linkResolver';
import type { AmaraLanguage } from '../../types/seo';

export type TarifaAuthorityBranchId = 'location' | 'experience';
export type TarifaAuthorityChildId = LocationGuideTopicId | 'beaches' | 'wind' | 'food-evening-life' | 'nature-wildlife' | 'old-town-history' | 'bolonia-baelo-claudia';

export type TarifaAuthoritySubnavId =
  | TarifaGuideId
  | 'experience'
  | 'food-evening-life'
  | 'nature-wildlife'
  | 'old-town-history'
  | 'bolonia-baelo-claudia';

type TarifaAuthorityFutureChild = {
  id: TarifaAuthorityChildId;
  label: string;
  status: 'future';
};

export type TarifaAuthorityLiveChild = {
  id: TarifaAuthorityChildId;
  label: string;
  status: 'live';
  href: string;
};

export type TarifaAuthorityChild = TarifaAuthorityFutureChild | TarifaAuthorityLiveChild;

export type TarifaAuthoritySubnavItem = {
  id: TarifaAuthorityBranchId;
  label: string;
  href: string;
  children: TarifaAuthorityChild[];
};

type TarifaAuthorityLabels = {
  location: string;
  experience: string;
  children: Record<TarifaAuthorityChildId, string>;
};

const labels: Record<AmaraLanguage, TarifaAuthorityLabels> = {
  en: {
    location: 'Location',
    experience: 'Experience',
    children: {
      'arrival-mobility': 'Arrival & Mobility',
      'geography-orientation': 'Geography & Orientation',
      'where-to-stay': 'Where to stay / areas',
      'weather-seasons': 'Weather & Seasons',
      'winter-stays': 'Winter Stays',
      'parking-accessibility': 'Parking & Accessibility',
      'shopping-markets': 'Shopping & Markets',
      'health-emergency': 'Health & Emergency',
      'practical-local-rules': 'Practical & Local Rules',
      beaches: 'Beaches & coast',
      wind: 'Wind & watersports',
      'food-evening-life': 'Food & evening life',
      'nature-wildlife': 'Nature & wildlife',
      'old-town-history': 'Old Town & history',
      'bolonia-baelo-claudia': 'Bolonia & Baelo Claudia'
    }
  },
  de: {
    location: 'Lage',
    experience: 'Erlebnisse',
    children: {
      'arrival-mobility': 'Anreise & Mobilität',
      'geography-orientation': 'Geografie & Orientierung',
      'where-to-stay': 'Wo übernachten / Lagen',
      'weather-seasons': 'Wetter & Jahreszeiten',
      'winter-stays': 'Winteraufenthalte',
      'parking-accessibility': 'Parken & Erreichbarkeit',
      'shopping-markets': 'Einkaufen & Märkte',
      'health-emergency': 'Gesundheit & Notfälle',
      'practical-local-rules': 'Praktische Regeln & lokale Vorschriften',
      beaches: 'Strände & Küste',
      wind: 'Wind & Wassersport',
      'food-evening-life': 'Essen & Ausgehen',
      'nature-wildlife': 'Natur & Tierwelt',
      'old-town-history': 'Altstadt & Geschichte',
      'bolonia-baelo-claudia': 'Bolonia & Baelo Claudia'
    }
  },
  es: {
    location: 'Ubicación',
    experience: 'Experiencias',
    children: {
      'arrival-mobility': 'Llegada y movilidad',
      'geography-orientation': 'Geografía y orientación',
      'where-to-stay': 'Dónde alojarse / zonas',
      'weather-seasons': 'Tiempo y estaciones',
      'winter-stays': 'Estancias de invierno',
      'parking-accessibility': 'Aparcamiento y acceso',
      'shopping-markets': 'Compras y mercados',
      'health-emergency': 'Salud y emergencia',
      'practical-local-rules': 'Reglas prácticas y locales',
      beaches: 'Playas y costa',
      wind: 'Viento y deportes acuáticos',
      'food-evening-life': 'Gastronomía y vida nocturna',
      'nature-wildlife': 'Naturaleza y fauna',
      'old-town-history': 'Casco antiguo e historia',
      'bolonia-baelo-claudia': 'Bolonia y Baelo Claudia'
    }
  },
  nl: {
    location: 'Locatie',
    experience: 'Ervaringen',
    children: {
      'arrival-mobility': 'Aankomst & mobiliteit',
      'geography-orientation': 'Geografie & oriëntatie',
      'where-to-stay': 'Waar overnachten / gebieden',
      'weather-seasons': 'Weer & seizoenen',
      'winter-stays': 'Winterverblijven',
      'parking-accessibility': 'Parkeren & toegankelijkheid',
      'shopping-markets': 'Winkelen & markten',
      'health-emergency': 'Gezondheid & noodgevallen',
      'practical-local-rules': 'Praktische regels & lokale voorschriften',
      beaches: 'Stranden & kust',
      wind: 'Wind & watersport',
      'food-evening-life': 'Eten & uitgaan',
      'nature-wildlife': 'Natuur & dieren',
      'old-town-history': 'Oude stad & geschiedenis',
      'bolonia-baelo-claudia': 'Bolonia & Baelo Claudia'
    }
  },
  sv: {
    location: 'Läge',
    experience: 'Upplevelser',
    children: {
      'arrival-mobility': 'Ankomst & mobilitet',
      'geography-orientation': 'Geografi & orientering',
      'where-to-stay': 'Var ska man bo / områden',
      'weather-seasons': 'Väder & årstider',
      'winter-stays': 'Vintervistelser',
      'parking-accessibility': 'Parkering & tillgänglighet',
      'shopping-markets': 'Shopping & marknader',
      'health-emergency': 'Hälsa & nödsituation',
      'practical-local-rules': 'Praktiska regler & lokala regler',
      beaches: 'Stränder & kust',
      wind: 'Vind & vattensport',
      'food-evening-life': 'Mat & kvällsliv',
      'nature-wildlife': 'Natur & djurliv',
      'old-town-history': 'Gamla stan & historia',
      'bolonia-baelo-claudia': 'Bolonia & Baelo Claudia'
    }
  }
};

const locationChildren: Record<LocationGuideTopicId, LinkToken | undefined> = {
  'arrival-mobility': 'getting_to_tarifa',
  'geography-orientation': 'tarifa_geography',
  'where-to-stay': 'tarifa_where_to_stay',
  'weather-seasons': 'tarifa_weather',
  'winter-stays': 'tarifa_winter_stays',
  'parking-accessibility': undefined,
  'shopping-markets': 'tarifa_daily_life',
  'health-emergency': undefined,
  'practical-local-rules': undefined
};

const toLocationChild = (topicId: LocationGuideTopicId, currentLang: AmaraLanguage): TarifaAuthorityChild => {
  const labelsByTopic = getLocationGuideTopicLabels(currentLang);
  const token = locationChildren[topicId];

  return token
    ? {
        id: topicId,
        label: labelsByTopic[topicId],
        status: 'live',
        href: resolveLink(token, currentLang)
      }
    : {
        id: topicId,
        label: labelsByTopic[topicId],
        status: 'future'
      };
};

export function getTarifaAuthoritySubnav(
  currentLang: AmaraLanguage
): TarifaAuthoritySubnavItem[] {
  const copy = labels[currentLang];
  const locationTopicIds = LOCATION_GUIDE_CLUSTER_IDS.flatMap((clusterId) => LOCATION_GUIDE_CLUSTER_TOPICS[clusterId]);

  return [
    {
      id: 'location',
      label: copy.location,
      href: resolveLink('location_tarifa', currentLang),
      children: locationTopicIds.map((topicId) => toLocationChild(topicId, currentLang))
    },
    {
      id: 'experience',
      label: copy.experience,
      href: resolveLink('tarifa_experience_hub', currentLang),
      children: [
        {
          id: 'beaches',
          label: copy.children.beaches,
          status: 'live',
          href: resolveLink('tarifa_beaches_authority', currentLang)
        },
        {
          id: 'wind',
          label: copy.children.wind,
          status: 'live',
          href: resolveLink('tarifa_wind_kitesurfing_authority', currentLang)
        },
        {
          id: 'food-evening-life',
          label: copy.children['food-evening-life'],
          status: 'live',
          href: resolveLink('tarifa_food_evening_life', currentLang)
        },
        {
          id: 'nature-wildlife',
          label: copy.children['nature-wildlife'],
          status: 'live',
          href: resolveLink('tarifa_nature_wildlife', currentLang)
        },
        {
          id: 'old-town-history',
          label: copy.children['old-town-history'],
          status: 'live',
          href: resolveLink('tarifa_old_town_history', currentLang)
        },
        {
          id: 'bolonia-baelo-claudia',
          label: copy.children['bolonia-baelo-claudia'],
          status: 'live',
          href: resolveLink('tarifa_bolonia_baelo_claudia', currentLang)
        }
      ]
    }
  ];
}
