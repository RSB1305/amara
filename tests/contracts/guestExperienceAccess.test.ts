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
import { handleExperienceProfile } from '../../guest-experience/profile-handler.mjs';
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

test('first name and arrival date open exactly one confirmed future booking', async () => {
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

  const matchedBooking = await findUniqueEligibleBooking('test-key', {
    firstName: 'robert',
    arrival: booking.arrival,
    lang: 'de'
  }, fetchImpl);
  expect(matchedBooking).toMatchObject({
    id: booking.id,
    stay: 'farah',
    explicitFirstName: 'Robert'
  });
  expect(createExperienceClaims(matchedBooking, 'de').guestFirstName).toBe('Robert');

  const ambiguousFetch = async () => new Response(JSON.stringify({
    items: [booking, { ...booking, id: 'booking-second', departure: '2099-06-15' }],
    count: 2
  }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
  await expect(findUniqueEligibleBooking('test-key', {
    firstName: 'robert',
    arrival: booking.arrival,
    lang: 'de'
  }, ambiguousFetch)).rejects.toBeInstanceOf(ExperienceAccessDenied);
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
  expect(claims.guestFirstName).toBe('Guest');
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
    '/de/gaesteguide/farah'
  );
  expect(experienceGuideHubHref('playa', 'es')).toBe(
    '/guia-huesped/playa'
  );
  expect(experienceGuideHubHref('tarifa', 'sv')).toBe(
    '/sv/gastguide/family-surf'
  );
});

test('an unauthenticated guide request returns to the separate localized access page', async () => {
  const response = await handleExperienceGuide({
    request: new Request('https://amara.test/de/gaesteguide/farah'),
    env: { AMARA_EXPERIENCE_SESSION_SECRET: SECRET },
    next: async () => new Response('must not render')
  });

  expect(response.status).toBe(302);
  expect(response.headers.get('location')).toBe('https://amara.test/de/gaesteguide/zugang?reason=session');
  expect(response.headers.get('cache-control')).toBe('no-store, private');
  expect(response.headers.get('x-robots-tag')).toBe('noindex, nofollow, noarchive');
});

test('the public landing passes through the guard while an authenticated hub request is protected', async () => {
  const now = Math.floor(Date.now() / 1000);
  const claims = {
    v: 1,
    bookingId: 'booking-1',
    stay: 'lounis',
    destination: 'frigiliana',
    lang: 'en',
    guestFirstName: 'Robert',
    exp: now + 3600,
    revalidateAfter: now + 1800
  };
  const token = await sealExperienceSession(claims, SECRET);
  const cookie = createExperienceCookie(token, claims.exp).split(';', 1)[0];
  // The root of the guide is its public landing (DR-GUEST-004): the guard hands it on untouched.
  const landingResponse = await handleExperienceGuide({
    request: new Request(`https://amara.test${experienceGuideRootHref('nl')}`, {
      headers: { Cookie: cookie }
    }),
    env: { AMARA_EXPERIENCE_SESSION_SECRET: SECRET },
    next: async () => new Response('landing renders')
  });
  expect(landingResponse.status).toBe(200);
  expect(await landingResponse.text()).toBe('landing renders');
  expect(landingResponse.headers.get('cache-control')).toBeNull();

  // The booked stay's hub renders through the guard with the protection headers.
  const response = await handleExperienceGuide({
    request: new Request(`https://amara.test${experienceGuideHubHref('lounis', 'nl')}`, {
      headers: { Cookie: cookie }
    }),
    env: { AMARA_EXPERIENCE_SESSION_SECRET: SECRET },
    next: async () => new Response('hub renders')
  });

  expect(response.status).toBe(200);
  expect(await response.text()).toBe('hub renders');
  expect(response.headers.get('cache-control')).toBe('no-store, private');
  expect(response.headers.get('x-robots-tag')).toBe('noindex, nofollow, noarchive');

  const profileResponse = await handleExperienceProfile({
    request: new Request('https://amara.test/api/guest/profile', {
      headers: { Cookie: cookie }
    }),
    env: { AMARA_EXPERIENCE_SESSION_SECRET: SECRET }
  });
  expect(profileResponse.status).toBe(200);
  expect(profileResponse.headers.get('cache-control')).toBe('no-store, private');
  expect(await profileResponse.json()).toEqual({ firstName: 'Robert' });
});

test('the access route remains outside the protected guide root', () => {
  expect(experienceAccessHref('es')).toBe('/guia-huesped/acceso');
  expect(experienceAccessHref('de')).toBe('/de/gaesteguide/zugang');
  expect(experienceGuideRootHref('de')).toBe('/de/gaesteguide');
});

test('the profile adds the booked stay Wi-Fi from the server-side table and nothing else', async () => {
  const now = Math.floor(Date.now() / 1000);
  const claims = {
    v: 1,
    bookingId: 'booking-1',
    stay: 'lounis',
    destination: 'frigiliana',
    lang: 'de',
    guestFirstName: 'Robert',
    exp: now + 3600,
    revalidateAfter: now + 1800
  };
  const cookie = createExperienceCookie(await sealExperienceSession(claims, SECRET), claims.exp).split(';', 1)[0];
  const profile = async (env: Record<string, string>) => {
    const response = await handleExperienceProfile({
      request: new Request('https://amara.test/api/guest/profile', { headers: { Cookie: cookie } }),
      env: { AMARA_EXPERIENCE_SESSION_SECRET: SECRET, ...env }
    });
    expect(response.status).toBe(200);
    expect(response.headers.get('cache-control')).toBe('no-store, private');
    return response.json();
  };
  const table = JSON.stringify({
    lounis: { network: 'AMARA', password: 'unit-wifi-1234' },
    playa: { network: 'HUAWEI-2.4G-aB3Y', password: 'unit-wifi-5678' }
  });

  // Only the stay of the session, never the whole table.
  expect(await profile({ AMARA_GUEST_WIFI: table })).toEqual({
    firstName: 'Robert',
    wifi: { network: 'AMARA', password: 'unit-wifi-1234' }
  });
  // No table, a stay outside it, or a broken table: the guide keeps its support fallback.
  expect(await profile({})).toEqual({ firstName: 'Robert' });
  expect(await profile({ AMARA_GUEST_WIFI: JSON.stringify({ playa: { network: 'X', password: 'y' } }) })).toEqual({
    firstName: 'Robert'
  });
  expect(await profile({ AMARA_GUEST_WIFI: '{not json' })).toEqual({ firstName: 'Robert' });
  expect(await profile({ AMARA_GUEST_WIFI: JSON.stringify({ lounis: { network: 'AMARA', password: '' } }) })).toEqual({
    firstName: 'Robert'
  });
});
