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
  | 'kitesurfing'
  | 'wind'
  | 'kitesurf-spots'
  | 'food-evening-life'
  | 'whale-watching'
  | 'old-town-history'
  | 'bolonia-baelo-claudia'
  | 'yoga'
  | 'family';

export type TarifaAuthorityChildId = LocationGuideTopicId | TarifaExperienceChildId;

export type TarifaAuthoritySubnavId =
  | TarifaGuideId
  | 'experience'
  | 'food-evening-life'
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
      beaches: 'Beaches',
      kitesurfing: 'Kitesurfing',
      wind: 'Wind & watersports',
      'kitesurf-spots': 'Kitesurf spots',
      'food-evening-life': 'Food & evening life',
      'old-town-history': 'Old Town & history',
      'bolonia-baelo-claudia': 'Bolonia & Baelo Claudia',
      yoga: 'Yoga',
      'whale-watching': 'Whale watching',
      family: 'Family holidays'
    }
  },
  de: {
    location: 'Lage',
    experience: 'Erlebnisse',
    children: {
      beaches: 'Strände',
      kitesurfing: 'Kitesurfen',
      wind: 'Wind & Wassersport',
      'kitesurf-spots': 'Kitesurf-Spots',
      'food-evening-life': 'Essen & Ausgehen',
      'old-town-history': 'Altstadt & Geschichte',
      'bolonia-baelo-claudia': 'Bolonia & Baelo Claudia',
      yoga: 'Yoga',
      'whale-watching': 'Whale Watching',
      family: 'Familienurlaub'
    }
  },
  es: {
    location: 'Ubicación',
    experience: 'Experiencias',
    children: {
      beaches: 'Playas',
      kitesurfing: 'Kitesurf',
      wind: 'Viento y deportes acuáticos',
      'kitesurf-spots': 'Spots de kitesurf',
      'food-evening-life': 'Gastronomía y vida nocturna',
      'old-town-history': 'Casco antiguo e historia',
      'bolonia-baelo-claudia': 'Bolonia y Baelo Claudia',
      yoga: 'Yoga',
      'whale-watching': 'Avistamiento de cetáceos',
      family: 'Vacaciones en familia'
    }
  },
  nl: {
    location: 'Locatie',
    experience: 'Ervaringen',
    children: {
      beaches: 'Stranden',
      kitesurfing: 'Kitesurfen',
      wind: 'Wind & watersport',
      'kitesurf-spots': 'Kitesurfspots',
      'food-evening-life': 'Eten & uitgaan',
      'old-town-history': 'Oude stad & geschiedenis',
      'bolonia-baelo-claudia': 'Bolonia & Baelo Claudia',
      yoga: 'Yoga',
      'whale-watching': 'Walvissen spotten',
      family: 'Gezinsvakantie'
    }
  },
  sv: {
    location: 'Läge',
    experience: 'Upplevelser',
    children: {
      beaches: 'Stränder',
      kitesurfing: 'Kitesurfing',
      wind: 'Vind & vattensport',
      'kitesurf-spots': 'Kitesurfspots',
      'food-evening-life': 'Mat & kvällsliv',
      'old-town-history': 'Gamla stan & historia',
      'bolonia-baelo-claudia': 'Bolonia & Baelo Claudia',
      yoga: 'Yoga',
      'whale-watching': 'Valskådning',
      family: 'Familjesemester'
    }
  }
};

const topicLinks: LocationTopicLinks = {
  'arrival-mobility': 'getting_to_tarifa',
  'where-to-stay': 'tarifa_where_to_stay',
  'weather-seasons': 'tarifa_weather',
  'winter-stays': 'tarifa_winter_stays',
  'parking-accessibility': 'tarifa_parking',
  'shopping-markets': 'tarifa_daily_life',
  'health-emergency': 'tarifa_health_emergency'
};

/** Experience children in the order the branch presents them. */
const experienceChildren: readonly (readonly [TarifaExperienceChildId, LinkToken])[] = [
  ['beaches', 'tarifa_beaches_authority'],
  ['kitesurfing', 'tarifa_kitesurfing_hub'],
  ['wind', 'tarifa_wind_kitesurfing_authority'],
  ['kitesurf-spots', 'tarifa_kitesurf_spots'],
  ['food-evening-life', 'tarifa_food_evening_life'],
  ['whale-watching', 'tarifa_whale_watching'],
  ['old-town-history', 'tarifa_old_town_history'],
  ['bolonia-baelo-claudia', 'tarifa_bolonia_baelo_claudia'],
  ['yoga', 'tarifa_yoga'],
  ['family', 'tarifa_family']
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
