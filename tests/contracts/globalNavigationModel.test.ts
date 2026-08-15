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
 * Characterization of the global navigation model.
 *
 * The header exposes a `locationAuthorityNav` flag that is meant to unlock
 * destination links on Type A location authority pages. These tests pin the
 * resolved model down for every language and every page context in which the
 * flag is actually used, so that the flag can be evaluated against observed
 * behaviour rather than against its documented intent.
 */

const ALL_LINK_TOKENS = Object.keys(linkRegistry.links) as LinkToken[];

const KNOWN_DISABLED_TOKENS: LinkToken[] = [
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
  stays: ['romantic_hideaways', 'farah', 'lounis', 'zaid', 'maha', 'playa', 'casa'],
  aboutAmara: ['about', 'reviews_hub', 'direct_booking_benefits', 'amenities', 'faq_general']
};

const EXPECTED_CTA_LABELS: Record<AmaraLanguage, string> = {
  en: 'Check Availability',
  de: 'Verfügbarkeit prüfen',
  es: 'Ver disponibilidad',
  nl: 'Beschikbaarheid bekijken',
  sv: 'Se tillgänglighet'
};

/** The page contexts that currently render the header, including both flag users. */
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
    id: 'ordinary page without the flag',
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

test('resolves the same navigation model with and without the location authority flag', () => {
  for (const language of SUPPORTED_LANGUAGES) {
    for (const scenario of NAVIGATION_SCENARIOS) {
      const input = scenario.input(language);

      const withoutFlag = createGlobalNavigationModel(input);
      const withFlag = createGlobalNavigationModel({ ...input, locationAuthorityNav: true });

      expect(
        withFlag,
        `${scenario.id} (${language}) must not depend on the location authority flag`
      ).toEqual(withoutFlag);
    }
  }
});

test('treats the location authority flag as inert across the whole link token space', () => {
  for (const token of ALL_LINK_TOKENS) {
    for (const forceEnabled of [false, true]) {
      expect(
        isPublicLinkEnabled(token, { forceEnabled, locationAuthorityNav: true }),
        `token ${token} (forceEnabled: ${forceEnabled}) must not depend on the flag`
      ).toBe(isPublicLinkEnabled(token, { forceEnabled }));
    }
  }
});

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
      expect(model.brandHref).toBeTruthy();
    }
  }
});

test('keeps disabled public route tokens disabled regardless of the flag', () => {
  for (const token of KNOWN_DISABLED_TOKENS) {
    expect(isPublicLinkEnabled(token)).toBe(false);
    expect(isPublicLinkEnabled(token, { locationAuthorityNav: true })).toBe(false);
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
