import type { TarifaGuideId } from '../../content/tarifaGuideContent';
import { resolveLink } from '../linkResolver';
import type { AmaraLanguage } from '../../types/seo';

export type TarifaAuthoritySubnavId = TarifaGuideId | 'experience';
export type TarifaAuthorityBranchId = 'location' | 'experience';
export type TarifaAuthorityChildId =
  | 'arrival-mobility'
  | 'geography-orientation'
  | 'where-to-stay'
  | 'weather-seasons'
  | 'daily-life-services'
  | 'winter-stays'
  | 'beaches'
  | 'wind'
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

export type TarifaAuthorityChild =
  | TarifaAuthorityFutureChild
  | TarifaAuthorityLiveChild;

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
      'weather-seasons': 'Weather & seasons',
      'daily-life-services': 'Daily life & services',
      'winter-stays': 'Winter stays',
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
      'daily-life-services': 'Alltag & Versorgung',
      'winter-stays': 'Winteraufenthalte',
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
      'weather-seasons': 'Tiempo y temporadas',
      'daily-life-services': 'Vida diaria y servicios',
      'winter-stays': 'Estancias de invierno',
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
      'daily-life-services': 'Dagelijks leven & voorzieningen',
      'winter-stays': 'Winterverblijven',
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
      'daily-life-services': 'Vardag & service',
      'winter-stays': 'Vintervistelser',
      beaches: 'Stränder & kust',
      wind: 'Vind & vattensport',
      'food-evening-life': 'Mat & kvällsliv',
      'nature-wildlife': 'Natur & djurliv',
      'old-town-history': 'Gamla stan & historia',
      'bolonia-baelo-claudia': 'Bolonia & Baelo Claudia'
    }
  }
};

export function getTarifaAuthoritySubnav(
  currentLang: AmaraLanguage
): TarifaAuthoritySubnavItem[] {
  const copy = labels[currentLang];

  return [
    {
      id: 'location',
      label: copy.location,
      href: resolveLink('location_tarifa', currentLang),
      children: [
        {
          id: 'arrival-mobility',
          label: copy.children['arrival-mobility'],
          status: 'live',
          href: resolveLink('getting_to_tarifa', currentLang)
        },
        {
          id: 'geography-orientation',
          label: copy.children['geography-orientation'],
          status: 'live',
          href: resolveLink('tarifa_geography', currentLang)
        },
        {
          id: 'where-to-stay',
          label: copy.children['where-to-stay'],
          status: 'live',
          href: resolveLink('tarifa_where_to_stay', currentLang)
        },
        { id: 'weather-seasons', label: copy.children['weather-seasons'], status: 'future' },
        { id: 'daily-life-services', label: copy.children['daily-life-services'], status: 'future' },
        { id: 'winter-stays', label: copy.children['winter-stays'], status: 'future' }
      ]
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
        { id: 'food-evening-life', label: copy.children['food-evening-life'], status: 'future' },
        { id: 'nature-wildlife', label: copy.children['nature-wildlife'], status: 'future' },
        { id: 'old-town-history', label: copy.children['old-town-history'], status: 'future' },
        { id: 'bolonia-baelo-claudia', label: copy.children['bolonia-baelo-claudia'], status: 'future' }
      ]
    }
  ];
}
