import {
  tarifaGuideContent,
  type TarifaGuideId
} from '../../content/tarifaGuideContent';
import { tarifaExperienceContent } from '../../content/tarifaExperienceContent';
import { resolveLink } from '../linkResolver';
import type { AmaraLanguage } from '../../types/seo';

export type TarifaAuthoritySubnavId = TarifaGuideId | 'experience';

export type TarifaAuthoritySubnavItem = {
  id: TarifaAuthoritySubnavId;
  label: string;
  href: string;
};

export function getTarifaAuthoritySubnav(
  currentLang: AmaraLanguage
): TarifaAuthoritySubnavItem[] {
  return [
    {
      id: 'overview',
      label: tarifaGuideContent.overview.navLabel[currentLang],
      href: resolveLink(tarifaGuideContent.overview.token, currentLang)
    },
    {
      id: 'experience',
      label: tarifaExperienceContent[currentLang].navLabel,
      href: resolveLink('tarifa_experience_hub', currentLang)
    },
    {
      id: 'beaches',
      label: tarifaGuideContent.beaches.navLabel[currentLang],
      href: resolveLink(tarifaGuideContent.beaches.token, currentLang)
    },
    {
      id: 'wind',
      label: tarifaGuideContent.wind.navLabel[currentLang],
      href: resolveLink(tarifaGuideContent.wind.token, currentLang)
    }
  ];
}
