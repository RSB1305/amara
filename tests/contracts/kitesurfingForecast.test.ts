import { expect, test } from '@playwright/test';
import { readFileSync } from 'node:fs';
import { onRequestGet } from '../../functions/api/weather/tarifa/kitesurfing.js';
import {
  KITESURFING_CACHE,
  addLocalizedBriefings,
  buildKitesurfingProviderUrls,
  calculateGustOffset,
  circularMeanDegrees,
  createKitesurfingForecastRoute,
  fetchKitesurfingForecast,
  normalizeKitesurfingForecast
} from '../../weather-gateway/kitesurfing-forecast.mjs';

const SECRET = 'unit-test-open-meteo-key-must-not-leak';
const NOW = Date.parse('2026-09-02T10:00:00.000Z');
const times = [
  '2026-09-02T09:00', '2026-09-02T12:00',
  '2026-09-03T09:00', '2026-09-03T12:00',
  '2026-09-04T09:00', '2026-09-04T12:00'
];

function weatherLocation(direction: Array<number | null>, speed: Array<number | null>, gusts: Array<number | null>, model?: string) {
  return {
    ...(model ? { model } : {}),
    hourly: {
      time: times,
      is_day: [1, 1, 1, 1, 1, 1],
      wind_speed_10m: speed,
      wind_gusts_10m: gusts,
      wind_direction_10m: direction
    }
  };
}

function marineLocation(overrides: Record<string, Array<number | null>> = {}) {
  return {
    hourly: {
      time: times,
      wave_height: overrides.wave_height ?? [1, 1.2, 1.4, 1.6, null, null],
      wave_direction: overrides.wave_direction ?? [350, 10, 270, 280, null, null],
      wave_period: overrides.wave_period ?? [6, 8, 7, 9, null, null],
      swell_wave_height: overrides.swell_wave_height ?? [0.5, 0.7, 0.8, 1, null, null],
      swell_wave_direction: overrides.swell_wave_direction ?? [340, 20, 250, 270, null, null],
      swell_wave_period: overrides.swell_wave_period ?? [9, 11, 10, 12, null, null]
    }
  };
}

const weatherPayload = [
  weatherLocation([350, 10, 90, 100, null, null], [10, 14, 20, 20, null, null], [15, 21, 25, 25, null, null], 'best_match'),
  weatherLocation([220, 230, 240, 250, 260, 270], [12, 16, 18, 22, 10, 12], [18, 22, 24, 28, 14, 16])
];
const marinePayload = [marineLocation(), marineLocation()];

function jsonResponse(payload: unknown, status = 200): Response {
  return new Response(JSON.stringify(payload), { status, headers: { 'Content-Type': 'application/json' } });
}

function providerFetch({ fail = false } = {}) {
  const calls: URL[] = [];
  const fetchImpl = (async (input: RequestInfo | URL) => {
    const url = new URL(String(input));
    calls.push(url);
    if (fail) return jsonResponse({ reason: 'unavailable' }, 502);
    return url.pathname === '/v1/forecast' ? jsonResponse(weatherPayload) : jsonResponse(marinePayload);
  }) as typeof fetch;
  return { fetchImpl, calls };
}

class MemoryKv {
  values = new Map<string, string>();
  puts: Array<{ key: string; value: string; options: unknown }> = [];

  async get(key: string, options?: { type?: string }) {
    const value = this.values.get(key) ?? null;
    return options?.type === 'json' && value ? JSON.parse(value) : value;
  }

  async put(key: string, value: string, options: unknown) {
    this.values.set(key, value);
    this.puts.push({ key, value, options });
  }
}

function normalizedForecast() {
  return normalizeKitesurfingForecast(weatherPayload, marinePayload, {
    generatedAt: new Date(NOW).toISOString()
  });
}

function cacheValue(forecast: ReturnType<typeof normalizedForecast>, fetchedAt: number) {
  return JSON.stringify({
    schemaVersion: KITESURFING_CACHE.schemaVersion,
    fetchedAt: new Date(fetchedAt).toISOString(),
    forecast
  });
}

test('constructs one paired weather request and one paired marine request without selecting a named model', async () => {
  const urls = buildKitesurfingProviderUrls(SECRET);
  for (const [kind, url] of Object.entries(urls)) {
    expect(url.protocol).toBe('https:');
    expect(url.hostname).toBe('customer-api.open-meteo.com');
    expect(url.pathname).toBe(kind === 'weather' ? '/v1/forecast' : '/v1/marine');
    expect(url.searchParams.get('latitude')).toBe('36.0352777778,36.0663888889');
    expect(url.searchParams.get('longitude')).toBe('-5.6247222222,-5.6852777778');
    expect(url.searchParams.get('timezone')).toBe('Europe/Madrid');
    expect(url.searchParams.get('wind_speed_unit')).toBe('kn');
    expect(url.searchParams.get('apikey')).toBe(SECRET);
    expect(url.searchParams.has('models')).toBe(false);
  }
  expect(urls.weather.searchParams.get('hourly')).toBe('wind_speed_10m,wind_gusts_10m,wind_direction_10m,is_day');
  expect(urls.marine.searchParams.get('hourly')).toBe('wave_height,wave_direction,wave_period,swell_wave_height,swell_wave_direction,swell_wave_period');

  const provider = providerFetch();
  await fetchKitesurfingForecast({ apiKey: SECRET, fetchImpl: provider.fetchImpl });
  expect(provider.calls).toHaveLength(2);
});

test('normalizes three daytime days for both spots, preserves nulls and retains provider model metadata', () => {
  const forecast = normalizedForecast();
  expect(forecast.days).toHaveLength(3);
  expect(forecast.days.every((day) => day.spots.map((spot) => spot.id).join(',') === 'los-lances,valdevaqueros')).toBe(true);
  expect(forecast.days[0].spots[0].sampleCount).toBe(2);
  expect(forecast.days[0].spots[0].wind.speedKnots).toBe(12);
  expect(forecast.days[2].spots[0].wind).toEqual({
    speedKnots: null,
    gustsKnots: null,
    directionDegrees: null,
    direction: null,
    gustOffset: { knots: null, percent: null }
  });
  expect(forecast.days[2].spots[0].marine.waveHeightMetres).toBeNull();
  expect(forecast.source).toEqual({ provider: 'Open-Meteo.com', model: 'best_match' });
});

test('aggregates directions across north circularly instead of averaging them to south', () => {
  expect(circularMeanDegrees([350, 10])).toBe(0);
  expect(normalizedForecast().days[0].spots[0].wind.direction).toBe('N');
});

test('calculates gust offset in knots and percent while preserving unknown values', () => {
  expect(calculateGustOffset(12, 18)).toEqual({ knots: 6, percent: 50 });
  expect(calculateGustOffset(null, 18)).toEqual({ knots: null, percent: null });
  expect(calculateGustOffset(0, 6)).toEqual({ knots: 6, percent: null });
});

test('applies only the approved Los Lances E/SE offshore rule', () => {
  const forecast = normalizedForecast();
  const losLancesEast = forecast.days[1].spots[0];
  const valdevaqueros = forecast.days[1].spots[1];
  expect(losLancesEast.wind.direction).toBe('E');
  expect(losLancesEast.status).toBe('avoid');
  expect(losLancesEast.warnings).toEqual(['offshore-risk', 'local-check-required']);
  expect(valdevaqueros.status).toBe('unknown');
  expect(valdevaqueros.warnings).toEqual([]);
  expect(forecast.days[0].spots[0].status).toBe('unknown');
});

test('AI cannot override deterministic status or warnings', async () => {
  const forecast = normalizedForecast();
  const invalidOverride = {
    response: JSON.stringify({
      briefings: forecast.days.flatMap((day) => day.spots.map((spot) => ({
        date: day.date,
        spotId: spot.id,
        text: 'A sufficiently long generated briefing that contains only presentation text.',
        status: 'favourable'
      })))
    })
  };
  const localized = await addLocalizedBriefings(forecast, {
    locale: 'en',
    model: 'test-model',
    ai: { run: async () => invalidOverride }
  });
  const losLancesEast = localized.days[1].spots[0];
  expect(losLancesEast.status).toBe('avoid');
  expect(losLancesEast.warnings).toEqual(['offshore-risk', 'local-check-required']);
  expect(losLancesEast.briefingSource).toBe('deterministic');
});

test('uses native deterministic fallback briefings when AI is absent or invalid', async () => {
  const forecast = normalizedForecast();
  const absent = await addLocalizedBriefings(forecast, { locale: 'de' });
  expect(absent.days[1].spots[0].briefingSource).toBe('deterministic');
  expect(absent.days[1].spots[0].briefing).toContain('meidet Los Lances');

  const invalid = await addLocalizedBriefings(forecast, {
    locale: 'sv', model: 'test-model', ai: { run: async () => ({ response: '{bad json' }) }
  });
  expect(invalid.days[0].spots[0].briefingSource).toBe('deterministic');
  expect(invalid.days[0].spots[0].briefing).toContain('modellen visar');
});

test('serves KV values through fresh and stale windows and refreshes stale data in the background', async () => {
  const kv = new MemoryKv();
  const forecast = normalizedForecast();
  kv.values.set(KITESURFING_CACHE.key, cacheValue(forecast, NOW - 2 * 60 * 60 * 1000));
  const freshProvider = providerFetch();
  const handler = createKitesurfingForecastRoute({ fetchImpl: freshProvider.fetchImpl, now: () => NOW });
  const fresh = await handler({
    request: new Request('https://amara.test/api/weather/tarifa/kitesurfing?lang=en'),
    env: { WIND_FORECAST_KV: kv }
  });
  expect(fresh.status).toBe(200);
  expect((await fresh.json()).cache.state).toBe('fresh');
  expect(freshProvider.calls).toHaveLength(0);

  kv.values.set(KITESURFING_CACHE.key, cacheValue(forecast, NOW - 7 * 60 * 60 * 1000));
  const staleProvider = providerFetch();
  const background: Promise<unknown>[] = [];
  const stale = await createKitesurfingForecastRoute({ fetchImpl: staleProvider.fetchImpl, now: () => NOW })({
    request: new Request('https://amara.test/api/weather/tarifa/kitesurfing?lang=nl'),
    env: { WIND_FORECAST_KV: kv, OPEN_METEO_API_KEY: SECRET },
    waitUntil: (promise: Promise<unknown>) => background.push(promise)
  });
  expect(stale.status).toBe(200);
  expect(stale.headers.get('warning')).toContain('Response is stale');
  expect((await stale.json()).cache.state).toBe('stale');
  expect(background).toHaveLength(1);
  await background[0];
  expect(staleProvider.calls).toHaveLength(2);
  expect(kv.puts.at(-1)?.key).toBe(KITESURFING_CACHE.key);
});

test('does not present an expired KV value as current and fails safely when the provider is unavailable', async () => {
  const kv = new MemoryKv();
  kv.values.set(KITESURFING_CACHE.key, cacheValue(normalizedForecast(), NOW - 13 * 60 * 60 * 1000));
  const provider = providerFetch({ fail: true });
  const logs: string[] = [];
  const original = console.error;
  console.error = (message) => logs.push(String(message));
  try {
    const response = await createKitesurfingForecastRoute({ fetchImpl: provider.fetchImpl, now: () => NOW })({
      request: new Request('https://amara.test/api/weather/tarifa/kitesurfing'),
      env: { WIND_FORECAST_KV: kv, OPEN_METEO_API_KEY: SECRET }
    });
    expect(response.status).toBe(503);
    expect(response.headers.get('cache-control')).toBe('no-store');
    expect(JSON.stringify(await response.json())).not.toContain(SECRET);
  } finally {
    console.error = original;
  }
  expect(logs.join('')).not.toContain(SECRET);
});

test('the Pages function is thin, GET-only and fails closed on missing runtime configuration', async () => {
  const source = readFileSync(new URL('../../functions/api/weather/tarifa/kitesurfing.js', import.meta.url), 'utf8');
  expect(source).toContain('createKitesurfingForecastRoute');
  expect(source).not.toContain('customer-api.open-meteo.com');

  const post = await createKitesurfingForecastRoute()({
    request: new Request('https://amara.test/api/weather/tarifa/kitesurfing', { method: 'POST' }),
    env: {}
  });
  expect(post.status).toBe(405);
  expect(post.headers.get('cache-control')).toBe('no-store');

  const original = console.error;
  console.error = () => undefined;
  try {
    const unavailable = await onRequestGet({
      request: new Request('https://amara.test/api/weather/tarifa/kitesurfing'),
      env: {}
    } as never);
    expect(unavailable.status).toBe(503);
  } finally {
    console.error = original;
  }
});

test('the component has an initial static fallback and enhances it with safe same-origin DOM work', () => {
  const component = readFileSync(new URL('../../src/components/TarifaWindBriefing.astro', import.meta.url), 'utf8');
  const pageFamily = readFileSync(new URL('../../src/page-families/location-authority/TarifaKitesurfSpokePage.astro', import.meta.url), 'utf8');
  expect(component).toContain('/api/weather/tarifa/kitesurfing?lang=');
  expect(component).toContain('data-tarifa-wind-briefing');
  expect(component).toContain('Los Lances');
  expect(component).toContain('Weather data by Open-Meteo.com');
  expect(component).toContain('document.createElement');
  expect(component).not.toContain('innerHTML');
  expect(component).not.toContain('recommendedKiteSize');
  expect((pageFamily.match(/<TarifaWindBriefing /g) ?? [])).toHaveLength(1);
  expect(pageFamily).toContain("spoke === 'wind-spots-safety'");
});
