import { expect, test } from '@playwright/test';
import { guestGuideEntries } from '../../src/content/guestGuideEntries';
import { guideHref } from '../../src/lib/guestGuideHref';
import { SUPPORTED_LANGUAGES } from '../../src/lib/routeOwnership';

const PUBLIC_GUEST_SECRET_LABELS = [
  /(?:wi-?fi )?password\s*:/i,
  /wlan-passwort\s*:/i,
  /contraseña(?: del wi-?fi)?\s*:/i,
  /wifiwachtwoord\s*:/i,
  /wi-?fi-lösenord\s*:/i,
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
    '/amara-experience/guide/guestwelcome-frigiliana-farah'
  );
  expect(guideHref('guestwelcome-frigiliana-farah', 'de')).toBe(
    '/de/amara-experience/guide/guestwelcome-frigiliana-farah'
  );
});

test('each accommodation hub exposes only the stay and AMARA Experience', () => {
  const hubs = guestGuideEntries.filter((entry) => entry.type === 'hub');
  expect(hubs).toHaveLength(6);

  for (const hub of hubs) {
    expect(hub.menuLinks).toHaveLength(2);
    expect(hub.menuLinks[1]?.title.en).toBe('AMARA Experience');
  }
});

test('practical essentials live inside the stay and Tarifa kitesurfing lives inside AMARA Experience', () => {
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
    ))).toBe(true);
  }

  const tarifaExperience = guestGuideEntries.find((entry) => entry.slug === 'tarifa-guest-local-guide');
  expect(tarifaExperience?.type).toBe('detail');
  if (tarifaExperience?.type === 'detail') {
    expect(tarifaExperience.categories.flatMap((category) => category.items).some((item) => (
      item.kind === 'link' && item.targetSlug === 'tarifa-guest-kitesurfing'
    ))).toBe(true);
  }
});
