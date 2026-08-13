import {
  getLocationGuideTopicLabels,
  type LocationGuideTopicId
} from '../location/locationGuideTopics';
import { resolveLink } from '../linkResolver';
import type { AmaraLanguage } from '../../types/seo';

export type NerjaAuthoritySubnavId = 'intro' | LocationGuideTopicId;

export type NerjaAuthoritySubnavItem = {
  id: LocationGuideTopicId;
  label: string;
  href?: string;
  status: 'live' | 'future';
};

export function getNerjaAuthoritySubnav(
  currentLang: AmaraLanguage
): NerjaAuthoritySubnavItem[] {
  const labels = getLocationGuideTopicLabels(currentLang);
  return [
    {
      id: 'arrival-mobility',
      label: labels['arrival-mobility'],
      status: 'live',
      href: resolveLink('getting_to_nerja', currentLang)
    },
    {
      id: 'geography-orientation',
      label: labels['geography-orientation'],
      status: 'future'
    },
    {
      id: 'where-to-stay',
      label: labels['where-to-stay'],
      status: 'live',
      href: resolveLink('nerja_where_to_stay', currentLang)
    },
    {
      id: 'weather-seasons',
      label: labels['weather-seasons'],
      status: 'future'
    },
    {
      id: 'daily-life-services',
      label: labels['daily-life-services'],
      status: 'future'
    }
  ];
}
