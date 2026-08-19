import {
  getLocationGuideClusterLabels,
  getLocationGuideTopicLabels,
  LOCATION_GUIDE_CLUSTER_IDS,
  LOCATION_GUIDE_CLUSTER_TOPICS,
  type LocationGuideClusterId,
  type LocationGuideTopicId
} from '../location/locationGuideTopics';
import { resolveLink, type LinkToken } from '../linkResolver';
import type { AmaraLanguage } from '../../types/seo';

export type NerjaAuthoritySubnavId = 'intro' | LocationGuideTopicId;

export type NerjaAuthoritySubnavItem = {
  id: LocationGuideTopicId;
  label: string;
  href?: string;
  status: 'live' | 'future';
};

export type NerjaAuthoritySubnavGroup = {
  id: LocationGuideClusterId;
  items: NerjaAuthoritySubnavItem[];
  label: string;
};

const topicLinks: Record<LocationGuideTopicId, LinkToken | undefined> = {
  'arrival-mobility': 'getting_to_nerja',
  'geography-orientation': 'nerja_geography',
  'where-to-stay': 'nerja_where_to_stay',
  'weather-seasons': 'nerja_weather',
  'winter-stays': undefined,
  'parking-accessibility': undefined,
  'shopping-markets': 'nerja_daily_life',
  'health-emergency': undefined,
  'practical-local-rules': undefined
};

const makeTopicItem = (
  topicId: LocationGuideTopicId,
  currentLang: AmaraLanguage
): NerjaAuthoritySubnavItem => {
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

export function getNerjaAuthoritySubnavGroups(
  currentLang: AmaraLanguage
): NerjaAuthoritySubnavGroup[] {
  const labels = getLocationGuideClusterLabels(currentLang);
  const topicIdsByCluster = LOCATION_GUIDE_CLUSTER_TOPICS;

  return LOCATION_GUIDE_CLUSTER_IDS.map((clusterId) => ({
    id: clusterId,
    label: labels[clusterId],
    items: topicIdsByCluster[clusterId].map((topicId) => makeTopicItem(topicId, currentLang))
  }));
}

export function getNerjaAuthoritySubnav(
  currentLang: AmaraLanguage
): NerjaAuthoritySubnavItem[] {
  return getNerjaAuthoritySubnavGroups(currentLang).flatMap((group) => group.items);
}
