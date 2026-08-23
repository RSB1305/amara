import type { TarifaGuideId } from '../../content/tarifaGuideContent';
import {
  buildAuthoritySubnavItems,
  type LocationTopicLinks
} from '../location/authoritySubnav';
import type { LocationGuideTopicId } from '../location/locationGuideTopics';
import { resolveLink, type LinkToken } from '../linkResolver';
import type { AmaraLanguage } from '../../types/seo';

export type TarifaAuthorityBranchId = 'location' | 'experience';

export type TarifaExperienceChildId =
  | 'beaches'
  | 'wind'
  | 'food-evening-life'
  | 'nature-wildlife'
  | 'old-town-history'
  | 'bolonia-baelo-claudia';

export type TarifaAuthorityChildId = LocationGuideTopicId | TarifaExperienceChildId;

export type TarifaAuthoritySubnavId =
  | TarifaGuideId
  | 'experience'
  | 'food-evening-life'
  | 'nature-wildlife'
  | 'old-town-history'
  | 'bolonia-baelo-claudia';

export type TarifaAuthorityChild = {
  id: TarifaAuthorityChildId;
  label: string;
  status: 'live' | 'future';
  href?: string;
};

export type TarifaAuthoritySubnavItem = {
  id: TarifaAuthorityBranchId;
  label: string;
  href: string;
  children: TarifaAuthorityChild[];
};

/**
 * Tarifa is the one destination whose authority navigation has two branches:
 * the shared location guide, and an experience branch that is Tarifa's own.
 * Only the branch names and the experience children are authored here — the
 * location branch takes its labels from the shared topic model, which is why
 * this file no longer carries a second copy of the nine topic names.
 */
type TarifaAuthorityLabels = {
  location: string;
  experience: string;
  children: Record<TarifaExperienceChildId, string>;
};

const labels: Record<AmaraLanguage, TarifaAuthorityLabels> = {
  en: {
    location: 'Location',
    experience: 'Experience',
    children: {
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
      beaches: 'Stränder & kust',
      wind: 'Vind & vattensport',
      'food-evening-life': 'Mat & kvällsliv',
      'nature-wildlife': 'Natur & djurliv',
      'old-town-history': 'Gamla stan & historia',
      'bolonia-baelo-claudia': 'Bolonia & Baelo Claudia'
    }
  }
};

const topicLinks: LocationTopicLinks = {
  'arrival-mobility': 'getting_to_tarifa',
  'geography-orientation': 'tarifa_geography',
  'where-to-stay': 'tarifa_where_to_stay',
  'weather-seasons': 'tarifa_weather',
  'winter-stays': 'tarifa_winter_stays',
  'parking-accessibility': 'tarifa_parking',
  'shopping-markets': 'tarifa_daily_life',
  'health-emergency': 'tarifa_daily_life',
  'practical-local-rules': 'tarifa_daily_life'
};

/** Experience children in the order the branch presents them. */
const experienceChildren: readonly (readonly [TarifaExperienceChildId, LinkToken])[] = [
  ['beaches', 'tarifa_beaches_authority'],
  ['wind', 'tarifa_wind_kitesurfing_authority'],
  ['food-evening-life', 'tarifa_food_evening_life'],
  ['nature-wildlife', 'tarifa_nature_wildlife'],
  ['old-town-history', 'tarifa_old_town_history'],
  ['bolonia-baelo-claudia', 'tarifa_bolonia_baelo_claudia']
];

export function getTarifaAuthoritySubnav(
  currentLang: AmaraLanguage
): TarifaAuthoritySubnavItem[] {
  const copy = labels[currentLang];

  return [
    {
      id: 'location',
      label: copy.location,
      href: resolveLink('location_tarifa', currentLang),
      children: buildAuthoritySubnavItems(topicLinks, currentLang)
    },
    {
      id: 'experience',
      label: copy.experience,
      href: resolveLink('tarifa_experience_hub', currentLang),
      children: experienceChildren.map(([id, token]) => ({
        id,
        label: copy.children[id],
        status: 'live' as const,
        href: resolveLink(token, currentLang)
      }))
    }
  ];
}
