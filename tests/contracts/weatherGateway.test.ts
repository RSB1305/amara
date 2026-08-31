import { expect, test } from '@playwright/test';
import { readFileSync } from 'node:fs';
import {
  createAemetForecastRoute,
  fetchAemetDailyForecast,
  normalizeAemetDailyForecast
} from '../../weather-gateway/aemet-forecast.mjs';

const SECRET = 'unit-test-aemet-key-must-not-leak';
const destinations = [
  { destination: 'frigiliana', locationName: 'Frigiliana', municipalityId: '29053' },
  { destination: 'nerja', locationName: 'Nerja', municipalityId: '29075' },
  { destination: 'tarifa', locationName: 'Tarifa', municipalityId: '11035' }
] as const;

test('Cloudflare Pages dispatches server-owned function and private guide routes', () => {
  const routes = JSON.parse(readFileSync(new URL('../../public/_routes.json', import.meta.url), 'utf8'));
  expect(routes.include).toEqual([
    '/api/booking/*',
    '/api/weather/*',
    '/api/guest/*',
    '/amara-experience/guide*',
    '/en/amara-experience/guide*',
    '/de/amara-experience/guide*',
    '/nl/amara-experience/guide*',
    '/sv/amara-experience/guide*'
  ]);
});

function jsonResponse(payload: unknown, status = 200): Response {
  return new Response(JSON.stringify(payload), {
    status,
    headers: { 'Content-Type': 'application/json' }
  });
}

function fetchSequence(...steps: Array<Response | Error>) {
  let index = 0;
  const urls: string[] = [];
  const fetchImpl = (async (input: RequestInfo | URL) => {
    urls.push(String(input));
    const step = steps[index++];
    if (step instanceof Error) throw step;
    if (!step) throw new Error('Unexpected AEMET request.');
    return step;
  }) as typeof fetch;
  return { fetchImpl, urls };
}

const forecastPayload = [{
  nombre: 'Frigiliana',
  elaborado: '2026-08-27T11:20:00',
  prediccion: {
    dia: [
      {
        fecha: '2026-08-27T00:00:00',
        temperatura: { maxima: 31, minima: 21 },
        probPrecipitacion: [{ value: 5 }, { value: 15 }]
      },
      {
        fecha: '2026-08-28T00:00:00',
        temperatura: { maxima: '29', minima: '20' },
        probPrecipitacion: [{ value: 20 }]
      },
      {
        fecha: '2026-08-29T00:00:00',
        temperatura: { maxima: 28, minima: 19 },
        probPrecipitacion: []
      }
    ]
  }
}];

for (const config of destinations) {
  test(`normalizes the two-step AEMET municipality forecast for ${config.locationName}`, async () => {
    const sequence = fetchSequence(
      jsonResponse({
        descripcion: 'exito',
        estado: 200,
        datos: 'https://opendata.aemet.es/opendata/sh/temporary-data'
      }),
      jsonResponse(forecastPayload)
    );

    await expect(fetchAemetDailyForecast({
      apiKey: SECRET,
      destination: config.destination,
      fetchImpl: sequence.fetchImpl
    })).resolves.toEqual({
      destination: config.destination,
      locationName: config.locationName,
      source: { provider: 'AEMET', issuedAt: '2026-08-27T11:20:00' },
      days: [
        { date: '2026-08-27', temperatureMax: 31, temperatureMin: 21, precipitationProbability: 15 },
        { date: '2026-08-28', temperatureMax: 29, temperatureMin: 20, precipitationProbability: 20 },
        { date: '2026-08-29', temperatureMax: 28, temperatureMin: 19, precipitationProbability: null }
      ]
    });

    expect(sequence.urls).toHaveLength(2);
    expect(new URL(sequence.urls[0]).pathname).toBe(
      `/opendata/api/prediccion/especifica/municipio/diaria/${config.municipalityId}`
    );
    expect(new URL(sequence.urls[0]).searchParams.get('api_key')).toBe(SECRET);
    expect(sequence.urls[1]).toBe('https://opendata.aemet.es/opendata/sh/temporary-data');
  });
}

test('keeps the AEMET key and provider details out of public failures', async () => {
  const sequence = fetchSequence(jsonResponse({ descripcion: 'Unauthorized', estado: 401 }, 401));
  const logs: string[] = [];
  const originalConsoleError = console.error;
  console.error = (message) => logs.push(String(message));

  try {
    const response = await createAemetForecastRoute({ fetchImpl: sequence.fetchImpl })({
      request: new Request('https://amara.test/api/weather/frigiliana'),
      env: { AEMET_API_KEY: SECRET }
    });
    expect(response.status).toBe(503);
    expect(response.headers.get('cache-control')).toBe('no-store');
    expect(await response.json()).toEqual({
      error: {
        code: 'weather_data_unavailable',
        message: 'The official forecast is temporarily unavailable.'
      }
    });
  } finally {
    console.error = originalConsoleError;
  }

  expect(logs).toHaveLength(1);
  expect(logs[0]).not.toContain(SECRET);
  expect(JSON.parse(logs[0])).toEqual({
    operation: 'daily-forecast',
    providerStep: 'request_url',
    providerHttpStatus: 401,
    category: 'http'
  });
});

test('fails closed when the server-side AEMET key is absent', async () => {
  let calls = 0;
  const response = await createAemetForecastRoute({
    fetchImpl: (async () => {
      calls += 1;
      return jsonResponse({});
    }) as typeof fetch
  })({
    request: new Request('https://amara.test/api/weather/frigiliana'),
    env: {}
  });

  expect(response.status).toBe(503);
  expect(calls).toBe(0);
});

const dayEntry = (fecha: string, maxima: number | null, minima: number | null) => ({
  fecha,
  temperatura: { maxima, minima },
  probPrecipitacion: [{ value: 0 }]
});

const municipality = (dia: unknown[]) => [{ elaborado: '2026-08-30T10:09:10', prediccion: { dia } }];

test('the normalizer skips days AEMET delivered incomplete and keeps the rest', () => {
  // A gap in the middle of the window used to discard the whole forecast,
  // which is what left Tarifa showing "currently unavailable" all afternoon.
  const forecast = normalizeAemetDailyForecast(municipality([
    dayEntry('2026-08-30', 28, 20),
    { fecha: '2026-08-31', temperatura: {}, probPrecipitacion: [] },
    dayEntry('2026-09-01', 29, 21),
    dayEntry('2026-09-02', 29, 21)
  ]), 'tarifa');

  expect(forecast.days.map((day) => day.date)).toEqual(['2026-08-30', '2026-09-01', '2026-09-02']);
});

test('the normalizer drops today once AEMET stops publishing its temperatures', () => {
  const forecast = normalizeAemetDailyForecast(municipality([
    dayEntry('2026-08-30', null, null),
    dayEntry('2026-08-31', 29, 21),
    dayEntry('2026-09-01', 29, 21)
  ]), 'tarifa');

  expect(forecast.days.map((day) => day.date)).toEqual(['2026-08-31', '2026-09-01']);
});

test('the normalizer still fails when no day is usable', () => {
  expect(() => normalizeAemetDailyForecast(municipality([
    dayEntry('2026-08-30', null, null)
  ]), 'tarifa')).toThrow();
});
