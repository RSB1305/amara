import { expect, test } from '@playwright/test';
import { readFileSync } from 'node:fs';
import {
  createAemetForecastRoute,
  fetchAemetDailyForecast,
  normalizeAemetDailyForecast
} from '../../weather-gateway/aemet-forecast.mjs';
import {
  createKiteBriefingRoute,
  fetchKiteBriefing,
  normalizeKiteBriefing,
  OpenMeteoGatewayError
} from '../../weather-gateway/open-meteo-kite.mjs';

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

/* ---------------------------------------------------------------------------
 * Open-Meteo kite briefing gateway
 * ------------------------------------------------------------------------- */

const OPEN_METEO_SECRET = 'unit-test-open-meteo-key-must-not-leak';
const times = ['2026-09-03T13:00', '2026-09-03T14:00', '2026-09-03T15:00'];

const forecastHourly = {
  latitude: 36.0625,
  longitude: -5.625,
  generationtime_ms: 0.4,
  utc_offset_seconds: 7200,
  timezone: 'Europe/Madrid',
  hourly_units: { wind_speed_10m: 'kn' },
  hourly: {
    time: times,
    wind_speed_10m: [16.2, 18.4, 20.1],
    wind_direction_10m: [265, 270, 272],
    wind_gusts_10m: [22.0, 26.3, 29.9],
    cloud_cover: [10, 20, 30],
    cloud_cover_low: [5, 10, 15],
    cloud_cover_mid: [5, 5, 10],
    cloud_cover_high: [0, 5, 5],
    shortwave_radiation: [650.5, 700.2, 640.0]
  }
};

const marineHourly = {
  latitude: 36.05,
  longitude: -5.65,
  generationtime_ms: 0.2,
  utc_offset_seconds: 7200,
  timezone: 'Europe/Madrid',
  hourly: {
    time: times,
    wave_height: [1.1, 1.2, 1.3],
    wave_direction: [250, 255, 260],
    wave_period: [6.5, 7.0, 7.2],
    wind_wave_height: [0.8, 0.9, 1.0],
    wind_wave_direction: [265, 268, 270],
    wind_wave_period: [5.0, 5.5, 5.8],
    swell_wave_height: [0.6, 0.6, 0.5],
    swell_wave_direction: [230, 232, 235],
    swell_wave_period: [9.0, 9.2, 9.1],
    secondary_swell_wave_height: [null, 0.2, 0.2],
    secondary_swell_wave_direction: [null, 300, 300],
    secondary_swell_wave_period: [null, 12.0, 12.0]
  }
};

test('the kite briefing asks two customer endpoints for explicit models and aligns them by hour', async () => {
  const sequence = fetchSequence(jsonResponse(forecastHourly), jsonResponse(marineHourly));
  const { briefing, marineError } = await fetchKiteBriefing({
    apiKey: OPEN_METEO_SECRET,
    site: 'tarifa',
    fetchImpl: sequence.fetchImpl,
    now: () => new Date('2026-09-03T12:02:00Z')
  });

  expect(marineError).toBeNull();
  expect(sequence.urls).toHaveLength(2);
  const forecastUrl = new URL(sequence.urls[0]);
  const marineUrl = new URL(sequence.urls[1]);
  expect(forecastUrl.host).toBe('customer-api.open-meteo.com');
  expect(marineUrl.host).toBe('customer-marine-api.open-meteo.com');
  expect(forecastUrl.searchParams.get('apikey')).toBe(OPEN_METEO_SECRET);
  expect(forecastUrl.searchParams.get('models')).toBe('icon_eu');
  expect(forecastUrl.searchParams.get('wind_speed_unit')).toBe('kn');
  expect(forecastUrl.searchParams.get('timezone')).toBe('Europe/Madrid');
  expect(marineUrl.searchParams.get('models')).toBe('dwd_ewam');
  expect(forecastUrl.searchParams.get('models')).not.toBe('best_match');

  expect(briefing.source.provider).toBe('Open-Meteo');
  expect(briefing.source.requestedAt).toBe('2026-09-03T12:02:00.000Z');
  expect(briefing.source.validFrom).toBe('2026-09-03T13:00+02:00');
  expect(briefing.source.validTo).toBe('2026-09-03T15:00+02:00');
  expect(briefing.source.forecast).toMatchObject({
    status: 'ok',
    configuredModel: 'icon_eu',
    originalSource: 'DWD',
    requested: { latitude: 36.03, longitude: -5.63 },
    grid: { latitude: 36.0625, longitude: -5.625 }
  });
  expect(briefing.source.forecast.gridOffsetKm).toBeGreaterThan(3);
  expect(briefing.source.forecast.gridOffsetKm).toBeLessThan(4);
  expect(briefing.source.marine).toMatchObject({ status: 'ok', configuredModel: 'dwd_ewam', originalSource: 'DWD' });
  expect(briefing.source).not.toHaveProperty('generationTimeMs');

  expect(briefing.hours).toHaveLength(3);
  expect(briefing.hours[1]).toEqual({
    time: '2026-09-03T14:00+02:00',
    wind: { speed: 18.4, direction: 270, gusts: 26.3 },
    cloud: { total: 20, low: 10, mid: 5, high: 5 },
    radiation: 700.2,
    wave: { height: 1.2, direction: 255, period: 7.0 },
    windWave: { height: 0.9, direction: 268, period: 5.5 },
    swell: { height: 0.6, direction: 232, period: 9.2 },
    secondarySwell: { height: 0.2, direction: 300, period: 12.0 }
  });
  expect(briefing.hours[0].secondarySwell).toEqual({ height: null, direction: null, period: null });
});

test('a failing wave model leaves the wind briefing intact and says the sea state is unavailable', async () => {
  const sequence = fetchSequence(jsonResponse(forecastHourly), jsonResponse({ error: true, reason: 'boom' }, 500));
  const { briefing, marineError } = await fetchKiteBriefing({ apiKey: OPEN_METEO_SECRET, fetchImpl: sequence.fetchImpl });

  expect(marineError).toBeInstanceOf(OpenMeteoGatewayError);
  expect(briefing.source.marine).toMatchObject({ status: 'unavailable', configuredModel: 'dwd_ewam' });
  expect(briefing.hours[0].wind.speed).toBe(16.2);
  expect(briefing.hours[0].wave).toEqual({ height: null, direction: null, period: null });
});

test('the kite briefing rejects a forecast payload whose hourly arrays do not line up', () => {
  const broken = { ...forecastHourly, hourly: { ...forecastHourly.hourly, wind_gusts_10m: [22.0] } };
  expect(() => normalizeKiteBriefing({ forecastPayload: broken, marinePayload: null, site: 'tarifa', requestedAt: 'x' })).toThrow(OpenMeteoGatewayError);
});

test('the kite briefing route keeps the Open-Meteo key and provider details out of public failures', async () => {
  const sequence = fetchSequence(jsonResponse({ error: true, reason: 'Invalid API key' }, 401));
  const logs: string[] = [];
  const originalConsoleError = console.error;
  console.error = (message) => logs.push(String(message));

  try {
    const response = await createKiteBriefingRoute({ fetchImpl: sequence.fetchImpl })({
      request: new Request('https://amara.test/api/weather/tarifa-kite'),
      env: { OPEN_METEO_API_KEY: OPEN_METEO_SECRET }
    });
    expect(response.status).toBe(503);
    expect(response.headers.get('cache-control')).toBe('no-store');
    expect(await response.json()).toEqual({
      error: { code: 'kite_briefing_unavailable', message: 'The kite briefing is temporarily unavailable.' }
    });
  } finally {
    console.error = originalConsoleError;
  }

  expect(logs).toHaveLength(1);
  expect(logs[0]).not.toContain(OPEN_METEO_SECRET);
  expect(JSON.parse(logs[0])).toEqual({
    operation: 'kite-briefing',
    providerStep: 'forecast',
    providerHttpStatus: 401,
    category: 'http'
  });
});

test('the kite briefing route fails closed when the server-side Open-Meteo key is absent', async () => {
  let calls = 0;
  const response = await createKiteBriefingRoute({
    fetchImpl: (async () => {
      calls += 1;
      return jsonResponse({});
    }) as typeof fetch
  })({
    request: new Request('https://amara.test/api/weather/tarifa-kite'),
    env: {}
  });

  expect(response.status).toBe(503);
  expect(calls).toBe(0);
});

test('the kite briefing route serves a successful payload with public caching', async () => {
  const sequence = fetchSequence(jsonResponse(forecastHourly), jsonResponse(marineHourly));
  const response = await createKiteBriefingRoute({ fetchImpl: sequence.fetchImpl, cache: undefined })({
    request: new Request('https://amara.test/api/weather/tarifa-kite'),
    env: { OPEN_METEO_API_KEY: OPEN_METEO_SECRET }
  });

  expect(response.status).toBe(200);
  expect(response.headers.get('cache-control')).toBe('public, max-age=600, s-maxage=900, stale-while-revalidate=1800');
  const payload = await response.json();
  expect(payload.site).toBe('tarifa');
  expect(payload.hours).toHaveLength(3);
  expect(JSON.stringify(payload)).not.toContain(OPEN_METEO_SECRET);
});
