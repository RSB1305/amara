import {
  getLocationGuideClusterLabels,
  getLocationGuideTopicLabels,
  LOCATION_GUIDE_CLUSTER_IDS,
  LOCATION_GUIDE_CLUSTER_TOPICS,
  type LocationGuideClusterId,
  type LocationGuideTopicId
} from './locationGuideTopics';
import { resolveLink, type LinkToken } from '../linkResolver';
import type { AmaraLanguage } from '../../types/seo';

/**
 * Shared assembly for the destination authority subnavigation.
 *
 * Every destination answers the same question — which of the nine location
 * guide topics does this destination publish, and where does each one point —
 * and differs only in that answer. The clusters, their order, the topic labels
 * and the section anchors are properties of the topic model, not of the
 * destination, so they live here and each destination module contributes its
 * link map alone.
 *
 * A topic without a link token is not omitted. It stays in the navigation as a
 * `future` item so the reader sees the full shape of the guide and the gap is
 * visible rather than silently absent.
 */

export type AuthoritySubnavItem = {
  id: LocationGuideTopicId;
  label: string;
  href?: string;
  status: 'live' | 'future';
};

export type AuthoritySubnavGroup = {
  id: LocationGuideClusterId;
  label: string;
  items: AuthoritySubnavItem[];
};

/**
 * Per-destination answer: the page that owns each topic, or `undefined` where
 * the destination has not published it yet.
 */
export type LocationTopicLinks = Record<LocationGuideTopicId, LinkToken | undefined>;

export function buildAuthorityTopicItem(
  topicId: LocationGuideTopicId,
  links: LocationTopicLinks,
  currentLang: AmaraLanguage
): AuthoritySubnavItem {
  const label = getLocationGuideTopicLabels(currentLang)[topicId];
  const token = links[topicId];

  if (!token) {
    return { id: topicId, label, status: 'future' };
  }

  return {
    id: topicId,
    label,
    status: 'live',
    href: resolveLink(token, currentLang)
  };
}

export function buildAuthoritySubnavGroups(
  links: LocationTopicLinks,
  currentLang: AmaraLanguage
): AuthoritySubnavGroup[] {
  const clusterLabels = getLocationGuideClusterLabels(currentLang);

  return LOCATION_GUIDE_CLUSTER_IDS.map((clusterId) => ({
    id: clusterId,
    label: clusterLabels[clusterId],
    items: LOCATION_GUIDE_CLUSTER_TOPICS[clusterId].map((topicId) =>
      buildAuthorityTopicItem(topicId, links, currentLang)
    )
  }));
}

/**
 * The same items in cluster order, flattened. Consumers that group the topics
 * themselves take this and keep the grouping in their own layer.
 */
export function buildAuthoritySubnavItems(
  links: LocationTopicLinks,
  currentLang: AmaraLanguage
): AuthoritySubnavItem[] {
  return buildAuthoritySubnavGroups(links, currentLang).flatMap((group) => group.items);
}
