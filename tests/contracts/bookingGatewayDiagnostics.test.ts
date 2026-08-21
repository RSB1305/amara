import { expect, test } from '@playwright/test';
import { createBookingRoute } from '../../booking-gateway/gateway.mjs';

type BookingOperation = 'availability' | 'rates' | 'quote';

const SECRET = 'unit-test-api-key-must-not-log';
const PROPERTY_ID = 'provider-property-id-must-not-log';
const ROOM_ID = 'provider-room-id-must-not-log';
const PROVIDER_BODY = 'provider-response-body-must-not-log';

function isoDay(daysFromToday: number): string {
  const date = new Date();
  date.setUTCDate(date.getUTCDate() + daysFromToday);
  return date.toISOString().slice(0, 10);
}

function jsonResponse(payload: unknown, status = 200): Response {
  return new Response(JSON.stringify(payload), {
    status,
    headers: { 'Content-Type': 'application/json' }
  });
}

function resolvedProperty(): Response {
  return jsonResponse([{ id: PROPERTY_ID, name: 'Maha' }]);
}

function resolvedRoom(): Response {
  return jsonResponse([{ id: ROOM_ID, name: 'Only room' }]);
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
  const arrival = isoDay(10);
  const departure = isoDay(12);
  const params = operation === 'quote'
    ? new URLSearchParams({
        stay: 'maha',
        arrival,
        departure,
        adults: '2',
        children: '0',
        pets: '0'
      })
    : new URLSearchParams({ stay: 'maha', start: arrival, end: isoDay(11) });
  return new Request(`https://amara.test/api/booking/${operation}?${params}`);
}

async function runRoute(operation: BookingOperation, fetchImpl: typeof fetch) {
  const originalFetch = globalThis.fetch;
  const originalConsoleError = console.error;
  const logs: unknown[][] = [];
  globalThis.fetch = fetchImpl;
  console.error = (...args: unknown[]) => {
    logs.push(args);
  };

  try {
    const response = await createBookingRoute(operation)({
      request: bookingRequest(operation),
      env: { LODGIFY_API_KEY: SECRET }
    });
    return { response, logs };
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
  for (const forbidden of [SECRET, PROPERTY_ID, ROOM_ID, PROVIDER_BODY, 'X-ApiKey', 'guest']) {
    expect(serialized).not.toContain(forbidden);
  }
  return JSON.parse(serialized) as Record<string, unknown>;
}

async function expectGenericProviderFailure(response: Response) {
  expect(response.status).toBe(502);
  expect(await response.json()).toEqual({
    error: {
      code: 'booking_data_unavailable',
      message: 'Live booking data is temporarily unavailable.'
    }
  });
}

test('logs a safe properties HTTP diagnostic without changing the public response', async () => {
  const { response, logs } = await runRoute(
    'availability',
    fetchSequence(jsonResponse({ message: PROVIDER_BODY }, 401))
  );

  await expectGenericProviderFailure(response);
  expect(diagnosticFrom(logs)).toEqual({
    operation: 'availability',
    providerStep: 'properties',
    providerHttpStatus: 401,
    category: 'http'
  });
});

test('logs a safe rooms network diagnostic', async () => {
  const { response, logs } = await runRoute(
    'availability',
    fetchSequence(resolvedProperty(), new Error(`${PROVIDER_BODY} ${PROPERTY_ID}`))
  );

  await expectGenericProviderFailure(response);
  expect(diagnosticFrom(logs)).toEqual({
    operation: 'availability',
    providerStep: 'rooms',
    category: 'network'
  });
});

test('logs malformed availability JSON without exposing provider context', async () => {
  const { response, logs } = await runRoute(
    'availability',
    fetchSequence(resolvedProperty(), resolvedRoom(), new Response(PROVIDER_BODY))
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
    fetchSequence(resolvedProperty(), resolvedRoom(), jsonResponse({ body: PROVIDER_BODY }))
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
    fetchSequence(
      resolvedProperty(),
      resolvedRoom(),
      jsonResponse({ error: { code: 'private-code', message: PROVIDER_BODY } }, 422)
    )
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
