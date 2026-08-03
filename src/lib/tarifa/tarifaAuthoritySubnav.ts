import {
  tarifaGuideContent,
  type TarifaGuideId
} from '../../content/tarifaGuideContent';
import { resolveLink } from '../linkResolver';
import type { AmaraLanguage } from '../../types/seo';

export type TarifaAuthoritySubnavId = TarifaGuideId;

export type TarifaAuthoritySubnavItem = {
  id: TarifaAuthoritySubnavId;
  label: string;
  href: string;
};

export function getTarifaAuthoritySubnav(
  currentLang: AmaraLanguage
): TarifaAuthoritySubnavItem[] {
  return Object.values(tarifaGuideContent).map((guide) => ({
    id: guide.id,
    label: guide.navLabel[currentLang],
    href: resolveLink(guide.token, currentLang)
  }));
}
