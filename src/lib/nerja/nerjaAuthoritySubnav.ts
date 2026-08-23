import {
  buildAuthoritySubnavGroups,
  buildAuthoritySubnavItems,
  type AuthoritySubnavGroup,
  type AuthoritySubnavItem,
  type LocationTopicLinks
} from '../location/authoritySubnav';
import type { LocationGuideTopicId } from '../location/locationGuideTopics';
import type { AmaraLanguage } from '../../types/seo';

export type NerjaAuthoritySubnavId = 'intro' | LocationGuideTopicId;
export type NerjaAuthoritySubnavItem = AuthoritySubnavItem;
export type NerjaAuthoritySubnavGroup = AuthoritySubnavGroup;

/** Nerja publishes all nine topics; three of them share the daily-life page. */
const topicLinks: LocationTopicLinks = {
  'arrival-mobility': 'getting_to_nerja',
  'geography-orientation': 'nerja_geography',
  'where-to-stay': 'nerja_where_to_stay',
  'weather-seasons': 'nerja_weather',
  'winter-stays': 'nerja_winter_stays',
  'parking-accessibility': 'nerja_parking',
  'shopping-markets': 'nerja_daily_life',
  'health-emergency': 'nerja_daily_life',
  'practical-local-rules': 'nerja_daily_life'
};

export function getNerjaAuthoritySubnavGroups(
  currentLang: AmaraLanguage
): NerjaAuthoritySubnavGroup[] {
  return buildAuthoritySubnavGroups(topicLinks, currentLang);
}

export function getNerjaAuthoritySubnav(
  currentLang: AmaraLanguage
): NerjaAuthoritySubnavItem[] {
  return buildAuthoritySubnavItems(topicLinks, currentLang);
}
