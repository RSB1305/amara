import { expect, test } from '@playwright/test';
import { createBookingRoute } from '../../booking-gateway/gateway.mjs';
import { createLodgifyClient } from '../../booking-gateway/lodgify-adapter.mjs';
import {
  AMARA_STAY_KEYS,
  getLodgifyDiscoveryMapping,
  getLodgifyStayMapping
} from '../../booking-gateway/stays.mjs';

type BookingOperation = 'availability' | 'rates' | 'quote';

const SECRET = 'unit-test-api-key-must-not-log';
const PROVIDER_BODY = 'provider-response-body-must-not-log';
const MAHA_MAPPING = getLodgifyStayMapping('maha');

function isoDay(daysFromToday: number): string {
  const date = new Date();
  date.setUTCDate(date.getUTCDate() + daysFromToday);
  return date.toISOString().slice(0, 10);
}

const CALENDAR_START = isoDay(10);
const CALENDAR_END = isoDay(11);
const QUOTE_DEPARTURE = isoDay(12);

function jsonResponse(payload: unknown, status = 200): Response {
  return new Response(JSON.stringify(payload), {
    status,
    headers: { 'Content-Type': 'application/json' }
  });
}

function fetchSequence(...steps: Array<Response | Error>): typeof fetch {
  let index = 0;
  return (async () => {
    const step = steps[index++];
    if (step instanceof Error) throw step;
    if (!step) throw new Error('Unexpected provider request in diagnostics test.');
    return step;
  }) as typeof fetch;
}

function bookingRequest(operation: BookingOperation): Request {
  const params = operation === 'quote'
    ? new URLSearchParams({
        stay: 'maha',
        arrival: CALENDAR_START,
        departure: QUOTE_DEPARTURE,
        adults: '2',
        children: '0',
        pets: '0'
      })
    : new URLSearchParams({ stay: 'maha', start: CALENDAR_START, end: CALENDAR_END });
  return new Request(`https://amara.test/api/booking/${operation}?${params}`);
}

async function runRoute(operation: BookingOperation, fetchImpl: typeof fetch) {
  const originalFetch = globalThis.fetch;
  const originalConsoleError = console.error;
  const logs: unknown[][] = [];
  const providerUrls: string[] = [];
  globalThis.fetch = (async (input: RequestInfo | URL, init?: RequestInit) => {
    providerUrls.push(String(input));
    return fetchImpl(input, init);
  }) as typeof fetch;
  console.error = (...args: unknown[]) => {
    logs.push(args);
  };

  try {
    const response = await createBookingRoute(operation)({
      request: bookingRequest(operation),
      env: { LODGIFY_API_KEY: SECRET }
    });
    return { response, logs, providerUrls };
  } finally {
    globalThis.fetch = originalFetch;
    console.error = originalConsoleError;
  }
}

function diagnosticFrom(logs: unknown[][]): Record<string, unknown> {
  expect(logs).toHaveLength(1);
  expect(logs[0]).toHaveLength(1);
  expect(typeof logs[0][0]).toBe('string');
  const serialized = String(logs[0][0]);
  for (const forbidden of [
    SECRET,
    MAHA_MAPPING.propertyId,
    MAHA_MAPPING.roomTypeId,
    PROVIDER_BODY,
    'X-ApiKey',
    'guest'
  ]) {
    expect(serialized).not.toContain(forbidden);
  }
  return JSON.parse(serialized) as Record<string, unknown>;
}

async function expectGenericProviderFailure(response: Response) {
  expect(response.status).toBe(502);
  const body = await response.text();
  expect(body).not.toContain(MAHA_MAPPING.propertyId);
  expect(body).not.toContain(MAHA_MAPPING.roomTypeId);
  expect(JSON.parse(body)).toEqual({
    error: {
      code: 'booking_data_unavailable',
      message: 'Live booking data is temporarily unavailable.'
    }
  });
}

test('uses the verified Maha mapping directly and logs a safe availability HTTP diagnostic', async () => {
  const { response, logs, providerUrls } = await runRoute(
    'availability',
    fetchSequence(jsonResponse({ message: PROVIDER_BODY }, 401))
  );

  await expectGenericProviderFailure(response);
  expect(providerUrls).toHaveLength(1);
  expect(new URL(providerUrls[0]).pathname).toBe(
    `/v2/availability/${MAHA_MAPPING.propertyId}/${MAHA_MAPPING.roomTypeId}`
  );
  expect(providerUrls[0]).not.toContain('/v2/properties');
  expect(providerUrls[0]).not.toContain('/rooms');
  expect(diagnosticFrom(logs)).toEqual({
    operation: 'availability',
    providerStep: 'availability',
    providerHttpStatus: 401,
    category: 'http'
  });
});

test('returns public availability without provider IDs after one direct provider request', async () => {
  const { response, logs, providerUrls } = await runRoute(
    'availability',
    fetchSequence(jsonResponse([{
      property_id: MAHA_MAPPING.propertyId,
      room_type_id: MAHA_MAPPING.roomTypeId,
      periods: [{
        start: CALENDAR_START,
        end: CALENDAR_END,
        available: true,
        closed_period: null
      }]
    }]))
  );

  expect(response.status).toBe(200);
  const body = await response.text();
  expect(body).not.toContain(MAHA_MAPPING.propertyId);
  expect(body).not.toContain(MAHA_MAPPING.roomTypeId);
  expect(JSON.parse(body)).toEqual({
    stay: 'maha',
    start: CALENDAR_START,
    end: CALENDAR_END,
    days: [
      { date: CALENDAR_START, available: true },
      { date: CALENDAR_END, available: true }
    ]
  });
  expect(providerUrls).toHaveLength(1);
  expect(logs).toHaveLength(0);
});

test('keeps dynamic property and room discovery available to the sandbox', async () => {
  const client = createLodgifyClient({
    apiKey: SECRET,
    fetchImpl: fetchSequence(
      jsonResponse([{ id: 'sandbox-property', name: 'Maha' }]),
      jsonResponse([{ id: 'sandbox-room', name: 'Only room' }])
    )
  });

  await expect(client.resolveStay(getLodgifyDiscoveryMapping('maha'))).resolves.toEqual({
    propertyId: 'sandbox-property',
    propertyName: 'Maha',
    roomTypeId: 'sandbox-room',
    roomTypeName: 'Only room'
  });
});

test('keeps discovery selectors and verified production mappings for all stays', () => {
  expect(AMARA_STAY_KEYS).toEqual(['maha', 'lounis', 'zaid', 'farah', 'playa', 'tarifa']);
  for (const stay of AMARA_STAY_KEYS) {
    expect(getLodgifyDiscoveryMapping(stay)).toMatchObject({ roomStrategy: 'single' });
    expect(getLodgifyStayMapping(stay)).toEqual({
      propertyId: expect.stringMatching(/^\d+$/),
      roomTypeId: expect.stringMatching(/^\d+$/)
    });
  }
});

test('identifies every Lodgify request with the central server-side user agent', async () => {
  const requests: RequestInit[] = [];
  const client = createLodgifyClient({
    apiKey: SECRET,
    fetchImpl: (async (input: RequestInfo | URL, init?: RequestInit) => {
      requests.push(init ?? {});
      const pathname = new URL(String(input)).pathname;
      if (pathname === '/v2/properties') {
        return jsonResponse([{ id: 'sandbox-property', name: 'Maha' }]);
      }
      if (pathname.endsWith('/rooms')) {
        return jsonResponse([{ id: 'sandbox-room', name: 'Only room' }]);
      }
      return jsonResponse({});
    }) as typeof fetch
  });

  await client.resolveStay(getLodgifyDiscoveryMapping('maha'));
  await client.getAvailability('property', 'room', CALENDAR_START, CALENDAR_END);
  await client.getRates('property', 'room', CALENDAR_START, CALENDAR_END);
  await client.getQuote('property', 'room', CALENDAR_START, QUOTE_DEPARTURE);

  expect(requests).toHaveLength(5);
  for (const request of requests) {
    expect(request.method).toBe('GET');
    expect(request.headers).toEqual({
      'X-ApiKey': SECRET,
      Accept: 'application/json',
      'User-Agent': 'AMARA-Booking-Gateway/1.0'
    });
  }
});

test('logs a safe rates network diagnostic', async () => {
  const { response, logs } = await runRoute(
    'rates',
    fetchSequence(new Error(PROVIDER_BODY))
  );

  await expectGenericProviderFailure(response);
  expect(diagnosticFrom(logs)).toEqual({
    operation: 'rates',
    providerStep: 'rates',
    category: 'network'
  });
});

test('logs malformed availability JSON without exposing provider context', async () => {
  const { response, logs } = await runRoute(
    'availability',
    fetchSequence(new Response(PROVIDER_BODY))
  );

  await expectGenericProviderFailure(response);
  expect(diagnosticFrom(logs)).toEqual({
    operation: 'availability',
    providerStep: 'availability',
    category: 'malformed_response'
  });
});

test('logs a rates normalization diagnostic', async () => {
  const { response, logs } = await runRoute(
    'rates',
    fetchSequence(jsonResponse({ body: PROVIDER_BODY }))
  );

  await expectGenericProviderFailure(response);
  expect(diagnosticFrom(logs)).toEqual({
    operation: 'rates',
    providerStep: 'rates',
    category: 'normalization'
  });
});

test('keeps quote-unavailable public while logging only the safe quote status', async () => {
  const { response, logs } = await runRoute(
    'quote',
    fetchSequence(jsonResponse({ error: { code: 'private-code', message: PROVIDER_BODY } }, 422))
  );

  expect(response.status).toBe(409);
  expect(await response.json()).toEqual({
    error: {
      code: 'quote_unavailable',
      message: 'A current quote is unavailable for this stay.'
    }
  });
  expect(diagnosticFrom(logs)).toEqual({
    operation: 'quote',
    providerStep: 'quote',
    providerHttpStatus: 422,
    category: 'http'
  });
});
