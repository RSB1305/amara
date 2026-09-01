import { expect, test } from '@playwright/test';
import { normalizeGuestName } from '../../guest-experience/bookings.mjs';
import {
  experienceAccessHref,
  experienceGuideHubHref,
  experienceGuideRootHref
} from '../../guest-experience/guide-routes.mjs';
import { handleExperienceGuide } from '../../guest-experience/middleware.mjs';
import { createExperienceCookie, sealExperienceSession } from '../../guest-experience/session.mjs';

const SECRET = 'unit-test-amara-experience-secret-1234567890';

test('guest-name normalization tolerates case, accents and surplus whitespace only', () => {
  expect(normalizeGuestName('  RÓBERT   ')).toBe('robert');
  expect(normalizeGuestName('Ro Br Et')).toBe('ro br et');
  expect(normalizeGuestName('Robret')).not.toBe(normalizeGuestName('Robert'));
});

test('the booking stay maps to its localized protected Guest Welcome hub', () => {
  expect(experienceGuideHubHref('farah', 'de')).toBe(
    '/de/amara-experience/guide/guestwelcome-frigiliana-farah'
  );
  expect(experienceGuideHubHref('playa', 'es')).toBe(
    '/amara-experience/guide/guestwelcome-nerja-playa'
  );
  expect(experienceGuideHubHref('tarifa', 'sv')).toBe(
    '/sv/amara-experience/guide/guestwelcome-tarifa-family-surf'
  );
});

test('an unauthenticated guide request returns to the separate localized access page', async () => {
  const response = await handleExperienceGuide({
    request: new Request('https://amara.test/de/amara-experience/guide'),
    env: { AMARA_EXPERIENCE_SESSION_SECRET: SECRET },
    next: async () => new Response('must not render')
  });

  expect(response.status).toBe(302);
  expect(response.headers.get('location')).toBe('https://amara.test/de/amara-experience/access?reason=session');
  expect(response.headers.get('cache-control')).toBe('no-store, private');
  expect(response.headers.get('x-robots-tag')).toBe('noindex, nofollow, noarchive');
});

test('an authenticated guide-root request resolves to the booked accommodation hub', async () => {
  const now = Math.floor(Date.now() / 1000);
  const claims = {
    v: 1,
    bookingId: 'booking-1',
    stay: 'lounis',
    destination: 'frigiliana',
    lang: 'en',
    exp: now + 3600,
    revalidateAfter: now + 1800
  };
  const token = await sealExperienceSession(claims, SECRET);
  const cookie = createExperienceCookie(token, claims.exp).split(';', 1)[0];
  const response = await handleExperienceGuide({
    request: new Request(`https://amara.test${experienceGuideRootHref('nl')}`, {
      headers: { Cookie: cookie }
    }),
    env: { AMARA_EXPERIENCE_SESSION_SECRET: SECRET },
    next: async () => new Response('must redirect')
  });

  expect(response.status).toBe(302);
  expect(response.headers.get('location')).toBe(experienceGuideHubHref('lounis', 'nl'));
  expect(response.headers.get('cache-control')).toBe('no-store, private');
});

test('the access route remains outside the protected guide root', () => {
  expect(experienceAccessHref('es')).toBe('/amara-experience/access');
  expect(experienceAccessHref('de')).toBe('/de/amara-experience/access');
  expect(experienceGuideRootHref('de')).toBe('/de/amara-experience/guide');
});
