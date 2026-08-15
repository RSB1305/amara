/**
 * AMARA global navigation — server-side view model
 *
 * Architectural intent:
 * All link resolution, gating and active-state logic for the header lives here,
 * so the Astro components stay presentational and the desktop and mobile views
 * are guaranteed to describe the same resolved routes.
 */
import { trustLabels } from '../../content/trustLabels';
import { resolveLink, resolveOptionalLink, type LinkToken } from '../../lib/linkResolver';
import { isPublicLinkEnabled } from '../../lib/routeOwnership';
import type { AmaraLanguage } from '../../types/seo';
import {
  createGlobalNavGroups,
  defaultCtaShortLabels,
  forcedEnabledNavTokens,
  navigationLanguages,
  navigationUtilityLabels,
  type GlobalNavItem,
  type NavigationUtilityLabels
} from './globalNavigationContent';

export type ResolvedGlobalNavItem = GlobalNavItem & {
  href: string | null;
  isActive: boolean;
};

export type ResolvedGlobalNavGroup = {
  id: 'locations' | 'stays' | 'aboutAmara';
  label: string;
  dropdownId: string;
  items: ResolvedGlobalNavItem[];
  isActive: boolean;
  hasDescriptions: boolean;
};

export type ResolvedLanguageOption = {
  code: AmaraLanguage;
  label: string;
  href: string;
};

export type ResolvedNavigationCta = {
  label: string;
  shortLabel: string;
  href: string | null;
};

export type GlobalNavigationModel = {
  brandHref: string;
  utilityLabels: NavigationUtilityLabels;
  groups: ResolvedGlobalNavGroup[];
  languageOptions: ResolvedLanguageOption[];
  cta: ResolvedNavigationCta;
};

export type GlobalNavigationModelInput = {
  currentLang: AmaraLanguage;
  currentPath: string;
  currentToken?: LinkToken;
  languageToken?: LinkToken;
  locationAuthorityNav?: boolean;
};

const CTA_TOKEN: LinkToken = 'book';

const normalizePath = (path: string) => {
  if (path === '/') return '/';
  return path.endsWith('/') ? path.slice(0, -1) : path;
};

export function createGlobalNavigationModel({
  currentLang,
  currentPath,
  currentToken,
  languageToken,
  locationAuthorityNav = false
}: GlobalNavigationModelInput): GlobalNavigationModel {
  const languageSwitchToken = currentToken ?? languageToken ?? 'home';

  const getLanguageHref = (token: LinkToken, code: AmaraLanguage) => {
    try {
      return resolveOptionalLink(token, code, { suppressMissing: true });
    } catch {
      return null;
    }
  };

  const languageOptions = navigationLanguages
    .map((language) => {
      const href = getLanguageHref(languageSwitchToken, language.code);
      return href ? { ...language, href } : null;
    })
    .filter((option): option is ResolvedLanguageOption => Boolean(option));

  /** Brand always targets the locale homepage, not the current page’s language-switch canonical. */
  const brandHref =
    resolveOptionalLink('home', currentLang, { suppressMissing: true }) ??
    (currentLang === 'es' ? '/' : `/${currentLang}/`);

  const getIsActive = (token: LinkToken, href: string) => {
    if (languageToken) {
      return token === languageToken;
    }

    return normalizePath(currentPath) === normalizePath(href);
  };

  const resolveGlobalNavItem = (item: GlobalNavItem): ResolvedGlobalNavItem => {
    const canResolve = isPublicLinkEnabled(item.token, {
      forceEnabled: forcedEnabledNavTokens.includes(item.token),
      locationAuthorityNav
    });
    const href = canResolve ? resolveLink(item.token, currentLang) : null;

    return {
      ...item,
      href,
      isActive: href ? getIsActive(item.token, href) : false
    };
  };

  const groups: ResolvedGlobalNavGroup[] = createGlobalNavGroups(currentLang).map((group) => {
    const items = group.items.map(resolveGlobalNavItem);

    return {
      id: group.id,
      label: group.label,
      dropdownId: `am-nav-dropdown-${group.id}`,
      items,
      isActive: items.some((item) => item.isActive),
      hasDescriptions: items.some((item) => Boolean(item.description))
    };
  });

  const cta: ResolvedNavigationCta = {
    label: trustLabels.book[currentLang],
    shortLabel: defaultCtaShortLabels[currentLang],
    href: isPublicLinkEnabled(CTA_TOKEN) ? resolveLink(CTA_TOKEN, currentLang) : null
  };

  return { brandHref, utilityLabels: navigationUtilityLabels[currentLang] ?? navigationUtilityLabels.en, groups, languageOptions, cta };
}
