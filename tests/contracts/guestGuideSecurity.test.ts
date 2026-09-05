import { expect, test } from '@playwright/test';
import { guestGuideEntries } from '../../src/content/guestGuideEntries';
import { guideHref } from '../../src/lib/guestGuideHref';
import { SUPPORTED_LANGUAGES } from '../../src/lib/routeOwnership';
import { staySearchHref, type StaySearchDestination } from '../../src/lib/staySearchHref';

// Operator decision 2026-09-05: the Wi-Fi password of each accommodation is authored guest
// content again, because the Guest Guide sits behind the booking check. Physical-access
// secrets (doorbells, door and lockbox codes) stay out of the content.
const PUBLIC_GUEST_SECRET_LABELS = [
  /doorbell/i,
  /klingel(?:nummer)?/i,
  /número (?:del )?timbre/i,
  /deurbel/i,
  /dörrklock/i,
  /(?:door|building|entry|access|lockbox|key ?box|alarm) code/i,
  /(?:tür|gebäude|zugangs|schlüsselbox|alarm)code/i
];

function authoredGuestText(value: unknown): string[] {
  if (typeof value === 'string') return [value];
  if (Array.isArray(value)) return value.flatMap(authoredGuestText);
  if (value && typeof value === 'object') {
    return Object.values(value as Record<string, unknown>).flatMap(authoredGuestText);
  }
  return [];
}

test('protected Guest Guide authoring still contains no credential or building-access secret fields', () => {
  const authoredText = authoredGuestText(guestGuideEntries).join('\n');

  for (const forbiddenLabel of PUBLIC_GUEST_SECRET_LABELS) {
    expect(
      authoredText,
      `Guest content matched forbidden field label ${forbiddenLabel}`
    ).not.toMatch(forbiddenLabel);
  }
});

test('all 36 Guest Guide entries publish under the protected route family in all five locales', () => {
  expect(guestGuideEntries).toHaveLength(36);
  expect(new Set(guestGuideEntries.map((entry) => entry.slug)).size).toBe(36);
  expect(SUPPORTED_LANGUAGES).toEqual(['en', 'de', 'es', 'nl', 'sv']);
  expect(guestGuideEntries.length * SUPPORTED_LANGUAGES.length).toBe(180);
  expect(guideHref('guestwelcome-frigiliana-farah', 'es')).toBe(
    '/guia-huesped/farah'
  );
  expect(guideHref('guestwelcome-frigiliana-farah', 'de')).toBe(
    '/de/gaesteguide/farah'
  );
});

test('each accommodation hub exposes the stay, location essentials and personal recommendations', () => {
  const hubs = guestGuideEntries.filter((entry) => entry.type === 'hub');
  expect(hubs).toHaveLength(6);

  for (const hub of hubs) {
    expect(hub.menuLinks).toHaveLength(3);
    expect(hub.menuLinks[1]?.targetSlug).toContain('essentials');
    // Since DR-GUEST-004 the personal recommendations carry the AMARA Experience name inside the Guest Guide.
    expect(hub.menuLinks[2]?.title.en).toBe('AMARA Experience');
  }
});

test('each hub checks availability in the AMARA stay search with its destination preselected', () => {
  const destinationByHub = new Map<string, StaySearchDestination>([
    ['guestwelcome-frigiliana-farah', 'frigiliana'],
    ['guestwelcome-frigiliana-lounis', 'frigiliana'],
    ['guestwelcome-frigiliana-zaid', 'frigiliana'],
    ['guestwelcome-frigiliana-maha', 'frigiliana'],
    ['guestwelcome-nerja-playa', 'nerja'],
    ['guestwelcome-tarifa-family-surf', 'tarifa']
  ]);

  for (const [hubSlug, destination] of destinationByHub) {
    const hub = guestGuideEntries.find((entry) => entry.slug === hubSlug);
    expect(hub?.type).toBe('hub');
    if (hub?.type !== 'hub') continue;
    for (const lang of SUPPORTED_LANGUAGES) {
      // The guest stays on AMARA's own finder; the booking provider only appears at checkout.
      expect(hub.ctaHref[lang]).toBe(staySearchHref(lang, destination));
      expect(hub.ctaHref[lang]).not.toContain('lodgify');
    }
  }
  expect(staySearchHref('de', 'frigiliana')).toBe('/de/unterkuenfte/suche?destination=frigiliana');
  expect(staySearchHref('es', 'nerja')).toBe('/alojamientos/buscar?destination=nerja');
});

test('location essentials use the correct destination page and are not duplicated inside the stay', () => {
  const essentialsByHub = new Map([
    ['guestwelcome-frigiliana-farah', 'frigiliana-guest-essentials'],
    ['guestwelcome-frigiliana-lounis', 'frigiliana-guest-essentials'],
    ['guestwelcome-frigiliana-zaid', 'frigiliana-guest-essentials'],
    ['guestwelcome-frigiliana-maha', 'frigiliana-guest-essentials'],
    ['guestwelcome-nerja-playa', 'nerja-guest-essentials'],
    ['guestwelcome-tarifa-family-surf', 'tarifa-guest-local-essentials']
  ]);

  for (const [hubSlug, essentialsSlug] of essentialsByHub) {
    const hub = guestGuideEntries.find((entry) => entry.slug === hubSlug);
    expect(hub?.type).toBe('hub');
    if (hub?.type !== 'hub') continue;
    expect(hub.menuLinks[1]?.targetSlug).toBe(essentialsSlug);
  }

  const accommodationSlugs = new Set([
    'guesthome-frigiliana-farah',
    'guesthome-frigiliana-lounis',
    'guesthome-frigiliana-zaid',
    'guesthome-frigiliana-maha',
    'guesthome-nerja-playa',
    'tarifa-guest-apartment'
  ]);
  const accommodations = guestGuideEntries.filter((entry) => accommodationSlugs.has(entry.slug));
  expect(accommodations).toHaveLength(6);

  for (const entry of accommodations) {
    expect(entry.type).toBe('detail');
    if (entry.type !== 'detail') continue;
    expect(entry.categories.flatMap((category) => category.items).some((item) => (
      item.kind === 'link' && item.targetSlug.includes('essentials')
    ))).toBe(false);
  }
});

test('Tarifa kitesurfing lives inside AMARA Experience', () => {
  const tarifaExperience = guestGuideEntries.find((entry) => entry.slug === 'tarifa-guest-local-guide');
  expect(tarifaExperience?.type).toBe('detail');
  if (tarifaExperience?.type === 'detail') {
    expect(tarifaExperience.categories.flatMap((category) => category.items).some((item) => (
      item.kind === 'link' && item.targetSlug === 'tarifa-guest-kitesurfing'
    ))).toBe(true);
  }
});
