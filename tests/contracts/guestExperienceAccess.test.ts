import { expect, test } from '@playwright/test';
import {
  ExperienceAccessDenied,
  findUniqueEligibleBooking,
  normalizeGuestName,
  revalidateEligibleBooking
} from '../../guest-experience/bookings.mjs';
import {
  experienceAccessHref,
  experienceGuideHubHref,
  experienceGuideRootHref
} from '../../guest-experience/guide-routes.mjs';
import { handleExperienceGuide } from '../../guest-experience/middleware.mjs';
import {
  createExperienceClaims,
  createExperienceCookie,
  departureExpiryEpoch,
  sealExperienceSession
} from '../../guest-experience/session.mjs';

const SECRET = 'unit-test-amara-experience-secret-1234567890';

test('guest-name normalization tolerates case, accents and surplus whitespace only', () => {
  expect(normalizeGuestName('  RÓBERT   ')).toBe('robert');
  expect(normalizeGuestName('Ro Br Et')).toBe('ro br et');
  expect(normalizeGuestName('Robret')).not.toBe(normalizeGuestName('Robert'));
});

test('a confirmed future booking opens access as soon as it exists', async () => {
  const booking = {
    id: 'booking-future',
    property_id: '408326',
    arrival: '2099-06-10',
    departure: '2099-06-14',
    status: 'booked',
    guest: { first_name: 'Robert' }
  };
  const fetchImpl = async () => new Response(JSON.stringify({ items: [booking], count: 1 }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });

  await expect(findUniqueEligibleBooking('test-key', {
    firstName: 'robert',
    arrival: booking.arrival,
    departure: booking.departure,
    lang: 'de'
  }, fetchImpl)).resolves.toMatchObject({ id: booking.id, stay: 'farah' });
});

test('access expires at 23:59:59 Madrid time on the departure day', () => {
  const departure = '2026-10-25';
  const exp = departureExpiryEpoch(departure);
  const claims = createExperienceClaims({
    id: 'booking-1',
    stay: 'farah',
    destination: 'frigiliana',
    departure
  }, 'de', exp - 7200);

  expect(new Date(exp * 1000).toISOString()).toBe('2026-10-25T22:59:59.000Z');
  expect(claims.exp).toBe(exp);
  expect(claims.revalidateAfter).toBe(exp - 3600);
});

test('a cancelled booking fails the periodic session revalidation', async () => {
  const fetchImpl = async () => new Response(JSON.stringify({
    id: 'booking-cancelled',
    property_id: '408326',
    arrival: '2099-06-10',
    departure: '2099-06-14',
    status: 'cancelled',
    guest: { first_name: 'Robert' }
  }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });

  await expect(revalidateEligibleBooking(
    'test-key',
    'booking-cancelled',
    fetchImpl
  )).rejects.toBeInstanceOf(ExperienceAccessDenied);
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
