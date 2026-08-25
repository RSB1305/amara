import { expect, test } from '@playwright/test';
import { forcedEnabledNavTokens } from '../../src/components/navigation/globalNavigationContent';
import {
  createGlobalNavigationModel,
  type GlobalNavigationModelInput
} from '../../src/components/navigation/globalNavigationModel';
import { linkRegistry } from '../../src/lib/linkRegistry';
import type { LinkToken } from '../../src/lib/linkResolver';
import {
  SUPPORTED_LANGUAGES,
  buildOwnedLocalizedPath,
  isPublicLinkEnabled
} from '../../src/lib/routeOwnership';
import type { AmaraLanguage } from '../../src/types/seo';

/**
 * Contract for the global navigation model.
 *
 * These assertions pin the resolved header down for every language and every
 * page context that renders it, so that group order, link targets, active
 * state, CTA and language options cannot drift silently. Link gating is owned
 * by the disabled route token set plus the forced destination tokens, and
 * nothing else may re-open a gated route.
 */

const ALL_LINK_TOKENS = Object.keys(linkRegistry.links) as LinkToken[];

const DISABLED_TOKENS: LinkToken[] = [
  'locations_hub',
  'weather_frigiliana',
  'journal',
  'contact',
  'archive'
];

const DESTINATION_SLUGS: Record<string, string> = {
  location_frigiliana: 'frigiliana-location',
  location_nerja: 'nerja-location',
  location_tarifa: 'tarifa-location'
};

const EXPECTED_GROUP_TOKENS: Record<string, LinkToken[]> = {
  locations: ['location_frigiliana', 'location_nerja', 'location_tarifa'],
  stays: ['romantic_hideaways', 'farah', 'lounis', 'zaid', 'maha', 'playa', 'tarifa', 'last_minute_stays'],
  aboutAmara: ['about', 'reviews_hub', 'direct_booking_benefits', 'amenities', 'faq_general']
};

const EXPECTED_CTA_LABELS: Record<AmaraLanguage, string> = {
  en: 'Find a stay',
  de: 'Unterkunft finden',
  es: 'Buscar alojamiento',
  nl: 'Verblijf zoeken',
  sv: 'Hitta boende'
};

/** The page contexts that currently render the header. */
const NAVIGATION_SCENARIOS: {
  id: string;
  activeToken: LinkToken | null;
  input: (currentLang: AmaraLanguage) => GlobalNavigationModelInput;
}[] = [
  {
    id: 'homepage',
    activeToken: null,
    input: (currentLang) => ({
      currentLang,
      currentPath: buildOwnedLocalizedPath('', currentLang)
    })
  },
  {
    id: 'ordinary page',
    activeToken: 'about',
    input: (currentLang) => ({
      currentLang,
      currentPath: buildOwnedLocalizedPath('amara-about-us', currentLang)
    })
  },
  {
    id: 'location authority page',
    activeToken: null,
    input: (currentLang) => ({
      currentLang,
      currentPath: buildOwnedLocalizedPath('frigiliana-parking', currentLang),
      languageToken: 'frigiliana_parking'
    })
  },
  {
    id: 'location authority experience hub',
    activeToken: null,
    input: (currentLang) => ({
      currentLang,
      currentPath: buildOwnedLocalizedPath('frigiliana-experience', currentLang),
      currentToken: 'frigiliana_experience_hub',
      languageToken: 'frigiliana_experience_hub'
    })
  }
];

test('keeps the three destination tokens resolvable in every language', () => {
  for (const language of SUPPORTED_LANGUAGES) {
    for (const scenario of NAVIGATION_SCENARIOS) {
      const model = createGlobalNavigationModel(scenario.input(language));
      const locations = model.groups.find((group) => group.id === 'locations');

      expect(locations, `${scenario.id} (${language}) must render the destinations group`).toBeTruthy();
      expect(locations?.items.map((item) => item.token)).toEqual(
        EXPECTED_GROUP_TOKENS.locations
      );

      for (const item of locations?.items ?? []) {
        expect(item.href, `${item.token} (${language}) must resolve`).toBe(
          buildOwnedLocalizedPath(DESTINATION_SLUGS[item.token] ?? '', language)
        );
      }
    }
  }
});

test('keeps navigation groups, order, active state, CTA and language options stable', () => {
  for (const language of SUPPORTED_LANGUAGES) {
    for (const scenario of NAVIGATION_SCENARIOS) {
      const model = createGlobalNavigationModel(scenario.input(language));

      expect(model.groups.map((group) => group.id)).toEqual([
        'locations',
        'stays',
        'aboutAmara'
      ]);

      for (const group of model.groups) {
        expect(group.dropdownId).toBe(`am-nav-dropdown-${group.id}`);
        expect(group.items.map((item) => item.token)).toEqual(
          EXPECTED_GROUP_TOKENS[group.id]
        );

        for (const item of group.items) {
          expect(item.href, `${item.token} (${language}) must stay enabled`).not.toBeNull();
          expect(item.isActive).toBe(item.token === scenario.activeToken);
        }

        expect(group.isActive).toBe(
          group.items.some((item) => item.token === scenario.activeToken)
        );
      }

      expect(model.languageOptions.map((option) => option.code)).toEqual([
        'en',
        'de',
        'es',
        'nl',
        'sv'
      ]);
      expect(model.cta.label).toBe(EXPECTED_CTA_LABELS[language]);
      expect(model.cta.href).not.toBeNull();
      // The global call to action opens AMARA's own stay search. A registry
      // change that sent it back to an external booking host would silently
      // hand the entry point of every page to a third party.
      expect(model.cta.href?.startsWith('/')).toBe(true);
      expect(model.brandHref).toBeTruthy();
    }
  }
});

test('gates every registry token strictly by the disabled route token set', () => {
  for (const token of ALL_LINK_TOKENS) {
    expect(isPublicLinkEnabled(token), `token ${token} gating`).toBe(
      !DISABLED_TOKENS.includes(token)
    );
  }

  for (const token of DISABLED_TOKENS) {
    expect(isPublicLinkEnabled(token)).toBe(false);
    expect(isPublicLinkEnabled(token, { forceEnabled: true })).toBe(true);
  }
});

test('keeps forcedEnabledNavTokens as the owner of the destination tokens', () => {
  expect(forcedEnabledNavTokens).toEqual([
    'location_frigiliana',
    'location_nerja',
    'location_tarifa'
  ]);

  for (const token of forcedEnabledNavTokens) {
    expect(isPublicLinkEnabled(token, { forceEnabled: true })).toBe(true);
    expect(isPublicLinkEnabled(token, { forceEnabled: true, disabled: true })).toBe(false);
  }
});
