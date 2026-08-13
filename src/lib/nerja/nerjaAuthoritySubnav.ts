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
  const locationBase = resolveLink('location_nerja', currentLang);

  return [
    {
      id: 'arrival-mobility',
      label: labels['arrival-mobility'],
      status: 'live',
      href: `${locationBase}#practical-nerja`
    },
    {
      id: 'geography-orientation',
      label: labels['geography-orientation'],
      status: 'live',
      href: `${locationBase}#key-facts`
    },
    {
      id: 'where-to-stay',
      label: labels['where-to-stay'],
      status: 'live',
      href: `${locationBase}#where-to-stay-in-nerja`
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
    },
    {
      id: 'winter-stays',
      label: labels['winter-stays'],
      status: 'future'
    }
  ];
}
