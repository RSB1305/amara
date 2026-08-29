import { expect, test } from '@playwright/test';
import { guestGuideEntries } from '../../src/content/guestGuideEntries';
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

test('public Guest Guide authoring contains no credential or building-access secret fields', () => {
  const authoredText = authoredGuestText(guestGuideEntries).join('\n');

  for (const forbiddenLabel of PUBLIC_GUEST_SECRET_LABELS) {
    expect(
      authoredText,
      `Guest content matched forbidden field label ${forbiddenLabel}`
    ).not.toMatch(forbiddenLabel);
  }
});

test('all 36 Guest Guide slugs still publish in all five locales', () => {
  expect(guestGuideEntries).toHaveLength(36);
  expect(new Set(guestGuideEntries.map((entry) => entry.slug)).size).toBe(36);
  expect(SUPPORTED_LANGUAGES).toEqual(['en', 'de', 'es', 'nl', 'sv']);
  expect(guestGuideEntries.length * SUPPORTED_LANGUAGES.length).toBe(180);
});
