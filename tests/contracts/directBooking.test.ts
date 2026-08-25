import { expect, test } from '@playwright/test';
import { readdir, readFile } from 'node:fs/promises';
import { extname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  DIRECT_BOOKING_ORIGIN,
  buildBookingLandingUrl,
  buildCheckoutHandoffUrl,
  buildRentalBookingUrl
} from '../../src/lib/directBooking';
import type { AmaraLanguage } from '../../src/types/seo';

const languages: AmaraLanguage[] = ['en', 'de', 'es', 'nl', 'sv'];
const sourceRoot = fileURLToPath(new URL('../../src/', import.meta.url));
const allowedLiteralOwners = new Set([
  'lib/directBooking.ts',
  'page-families/legal-notice/LegalNoticePage.astro'
]);

async function collectSourceFiles(directory: string): Promise<string[]> {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(
    entries.map((entry) => {
      const path = join(directory, entry.name);
      return entry.isDirectory() ? collectSourceFiles(path) : [path];
    })
  );

  return files.flat();
}

test('the booking boundary uses the approved HTTPS origin', () => {
  const origin = new URL(DIRECT_BOOKING_ORIGIN);

  expect(origin.protocol).toBe('https:');
  expect(origin.host).toBe('amara.lodgify.com');
  expect(origin.pathname).toBe('/');
});

test('the booking host is not hard-coded outside its owner and legal disclosure', async () => {
  const sourceFiles = (await collectSourceFiles(sourceRoot)).filter((path) =>
    ['.astro', '.js', '.mjs', '.ts', '.tsx'].includes(extname(path))
  );
  const offenders: string[] = [];

  for (const path of sourceFiles) {
    const repositoryPath = relative(sourceRoot, path).replaceAll('\\', '/');
    if (allowedLiteralOwners.has(repositoryPath)) continue;

    if ((await readFile(path, 'utf8')).includes(DIRECT_BOOKING_ORIGIN)) {
      offenders.push(repositoryPath);
    }
  }

  expect(offenders).toEqual([]);
});

test('builds a provider-neutral checkout handoff without exposing a provider ID', () => {
  const href = buildCheckoutHandoffUrl({
    stay: 'maha',
    lang: 'de',
    arrival: '2026-11-16',
    departure: '2026-11-22',
    adults: 2,
    currency: 'EUR'
  });

  expect(href).toBe(
    '/api/booking/checkout?stay=maha&lang=de&arrival=2026-11-16&departure=2026-11-22&adults=2&currency=EUR'
  );
  expect(href).not.toContain('408325');
  expect(href).not.toContain('lodgify');
});

for (const language of languages) {
  test(`builds the ${language} booking landing URL`, () => {
    expect(buildBookingLandingUrl(language)).toBe(
      `${DIRECT_BOOKING_ORIGIN}/${language}/book/`
    );
  });

  test(`builds the ${language} rental deep link`, () => {
    expect(buildRentalBookingUrl('amara-farah', language)).toBe(
      `${DIRECT_BOOKING_ORIGIN}/${language}/amara-farah`
    );
  });
}
