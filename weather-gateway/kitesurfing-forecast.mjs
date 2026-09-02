const OPEN_METEO_HOST = 'customer-api.open-meteo.com';
const OPEN_METEO_ROOT = `https://${OPEN_METEO_HOST}`;
const TIMEZONE = 'Europe/Madrid';
const CACHE_SCHEMA_VERSION = 1;
const CACHE_KEY = `tarifa:kitesurfing-forecast:v${CACHE_SCHEMA_VERSION}`;
const FRESH_MAX_AGE_MS = 6 * 60 * 60 * 1000;
const STALE_MAX_AGE_MS = 12 * 60 * 60 * 1000;
const PUBLIC_CACHE_CONTROL = 'public, max-age=300, must-revalidate';
const LOCALES = Object.freeze(['es', 'en', 'de', 'nl', 'sv']);

export const KITESURFING_SPOTS = Object.freeze([
  Object.freeze({ id: 'los-lances', name: 'Los Lances', latitude: 36.0352777778, longitude: -5.6247222222 }),
  Object.freeze({ id: 'valdevaqueros', name: 'Valdevaqueros', latitude: 36.0663888889, longitude: -5.6852777778 })
]);

class KitesurfingForecastError extends Error {
  constructor(step, category, providerHttpStatus) {
    super('Tarifa kitesurfing forecast request failed.');
    this.name = 'KitesurfingForecastError';
    this.step = step;
    this.category = category;
    this.providerHttpStatus = providerHttpStatus;
  }
}

function numericValue(value) {
  if (value === null || value === undefined || value === '') return null;
  const number = Number(value);
  return Number.isFinite(number) ? number : null;
}

function rounded(value, precision = 1) {
  if (value === null) return null;
  const factor = 10 ** precision;
  return Math.round(value * factor) / factor;
}

function arithmeticMean(values) {
  const numbers = values.map(numericValue).filter((value) => value !== null);
  if (numbers.length === 0) return null;
  return rounded(numbers.reduce((sum, value) => sum + value, 0) / numbers.length);
}

export function circularMeanDegrees(values) {
  const directions = values.map(numericValue).filter((value) => value !== null);
  if (directions.length === 0) return null;

  const vector = directions.reduce((result, degrees) => {
    const radians = (degrees * Math.PI) / 180;
    result.sin += Math.sin(radians);
    result.cos += Math.cos(radians);
    return result;
  }, { sin: 0, cos: 0 });

  if (Math.abs(vector.sin) < Number.EPSILON && Math.abs(vector.cos) < Number.EPSILON) return null;
  const degrees = (Math.atan2(vector.sin, vector.cos) * 180) / Math.PI;
  return rounded((degrees + 360) % 360);
}

export function directionLabel(degrees) {
  const value = numericValue(degrees);
  if (value === null) return null;
  const labels = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
  return labels[Math.round((((value % 360) + 360) % 360) / 45) % labels.length];
}

export function calculateGustOffset(windSpeed, windGusts) {
  const speed = numericValue(windSpeed);
  const gusts = numericValue(windGusts);
  if (speed === null || gusts === null) return { knots: null, percent: null };

  const knots = rounded(gusts - speed);
  return {
    knots,
    percent: speed > 0 ? rounded((knots / speed) * 100) : null
  };
}

function providerUrl(pathname, apiKey, fields) {
  const url = new URL(pathname, OPEN_METEO_ROOT);
  url.searchParams.set('latitude', KITESURFING_SPOTS.map((spot) => spot.latitude).join(','));
  url.searchParams.set('longitude', KITESURFING_SPOTS.map((spot) => spot.longitude).join(','));
  url.searchParams.set('hourly', fields.join(','));
  url.searchParams.set('timezone', TIMEZONE);
  url.searchParams.set('forecast_days', '3');
  url.searchParams.set('wind_speed_unit', 'kn');
  url.searchParams.set('apikey', apiKey);
  return url;
}

export function buildKitesurfingProviderUrls(apiKey) {
  return {
    weather: providerUrl('/v1/forecast', apiKey, [
      'wind_speed_10m',
      'wind_gusts_10m',
      'wind_direction_10m',
      'is_day'
    ]),
    marine: providerUrl('/v1/marine', apiKey, [
      'wave_height',
      'wave_direction',
      'wave_period',
      'swell_wave_height',
      'swell_wave_direction',
      'swell_wave_period'
    ])
  };
}

async function readProviderJson(response, step) {
  if (!response.ok) throw new KitesurfingForecastError(step, 'http', response.status);
  try {
    return await response.json();
  } catch {
    throw new KitesurfingForecastError(step, 'malformed_response');
  }
}

function locations(payload, step) {
  const result = Array.isArray(payload) ? payload : [payload];
  if (result.length !== KITESURFING_SPOTS.length || result.some((entry) => !entry?.hourly)) {
    throw new KitesurfingForecastError(step, 'normalization');
  }
  return result;
}

function localDate(time) {
  return typeof time === 'string' && /^\d{4}-\d{2}-\d{2}T/.test(time) ? time.slice(0, 10) : null;
}

function localHour(time) {
  if (typeof time !== 'string') return null;
  const match = time.match(/T(\d{2}):/);
  return match ? Number(match[1]) : null;
}

function isDaytime(hourly, index) {
  if (Array.isArray(hourly.is_day)) return numericValue(hourly.is_day[index]) === 1;
  const hour = localHour(hourly.time?.[index]);
  return hour !== null && hour >= 8 && hour <= 20;
}

function valueAt(hourly, field, index) {
  return Array.isArray(hourly?.[field]) ? numericValue(hourly[field][index]) : null;
}

function modelMetadata(weatherLocations, marineLocations) {
  const candidates = [...weatherLocations, ...marineLocations].flatMap((entry) => {
    const values = [entry?.model, entry?.model_id, entry?.metadata?.model, ...(Array.isArray(entry?.models) ? entry.models : [])];
    return values.filter((value) => typeof value === 'string' && value.trim()).map((value) => value.trim());
  });
  return candidates.length > 0 ? [...new Set(candidates)].join(',') : 'best_match';
}

function deterministicAssessment(spotId, label) {
  if (spotId === 'los-lances' && (label === 'E' || label === 'SE')) {
    return { status: 'avoid', warnings: ['offshore-risk', 'local-check-required'] };
  }
  return { status: 'unknown', warnings: [] };
}

function aggregateSpotDay(spot, weather, marine, date) {
  const weatherIndexes = [];
  const daytimeTimes = new Set();
  for (let index = 0; index < (weather.hourly.time?.length ?? 0); index += 1) {
    const time = weather.hourly.time[index];
    if (localDate(time) === date && isDaytime(weather.hourly, index)) {
      weatherIndexes.push(index);
      daytimeTimes.add(time);
    }
  }

  const marineIndexes = [];
  for (let index = 0; index < (marine.hourly.time?.length ?? 0); index += 1) {
    const time = marine.hourly.time[index];
    if (localDate(time) === date && (daytimeTimes.size > 0 ? daytimeTimes.has(time) : isDaytime(marine.hourly, index))) {
      marineIndexes.push(index);
    }
  }

  const windSpeed = arithmeticMean(weatherIndexes.map((index) => valueAt(weather.hourly, 'wind_speed_10m', index)));
  const windGusts = arithmeticMean(weatherIndexes.map((index) => valueAt(weather.hourly, 'wind_gusts_10m', index)));
  const windDirection = circularMeanDegrees(weatherIndexes.map((index) => valueAt(weather.hourly, 'wind_direction_10m', index)));
  const label = directionLabel(windDirection);
  const assessment = deterministicAssessment(spot.id, label);

  return {
    id: spot.id,
    name: spot.name,
    status: assessment.status,
    warnings: assessment.warnings,
    sampleCount: weatherIndexes.length,
    marineSampleCount: marineIndexes.length,
    wind: {
      speedKnots: windSpeed,
      gustsKnots: windGusts,
      directionDegrees: windDirection,
      direction: label,
      gustOffset: calculateGustOffset(windSpeed, windGusts)
    },
    marine: {
      waveHeightMetres: arithmeticMean(marineIndexes.map((index) => valueAt(marine.hourly, 'wave_height', index))),
      waveDirectionDegrees: circularMeanDegrees(marineIndexes.map((index) => valueAt(marine.hourly, 'wave_direction', index))),
      wavePeriodSeconds: arithmeticMean(marineIndexes.map((index) => valueAt(marine.hourly, 'wave_period', index))),
      swellHeightMetres: arithmeticMean(marineIndexes.map((index) => valueAt(marine.hourly, 'swell_wave_height', index))),
      swellDirectionDegrees: circularMeanDegrees(marineIndexes.map((index) => valueAt(marine.hourly, 'swell_wave_direction', index))),
      swellPeriodSeconds: arithmeticMean(marineIndexes.map((index) => valueAt(marine.hourly, 'swell_wave_period', index)))
    }
  };
}

export function normalizeKitesurfingForecast(weatherPayload, marinePayload, { generatedAt = new Date().toISOString() } = {}) {
  const weatherLocations = locations(weatherPayload, 'weather');
  const marineLocations = locations(marinePayload, 'marine');
  const dates = [];

  for (const [index, time] of (weatherLocations[0].hourly.time ?? []).entries()) {
    const date = localDate(time);
    if (date && isDaytime(weatherLocations[0].hourly, index) && !dates.includes(date)) dates.push(date);
    if (dates.length === 3) break;
  }

  if (dates.length === 0) throw new KitesurfingForecastError('weather', 'normalization');

  return {
    schemaVersion: CACHE_SCHEMA_VERSION,
    generatedAt,
    timezone: TIMEZONE,
    source: {
      provider: 'Open-Meteo.com',
      model: modelMetadata(weatherLocations, marineLocations)
    },
    days: dates.map((date) => ({
      date,
      spots: KITESURFING_SPOTS.map((spot, index) => aggregateSpotDay(
        spot,
        weatherLocations[index],
        marineLocations[index],
        date
      ))
    }))
  };
}

export async function fetchKitesurfingForecast({ apiKey, fetchImpl = fetch, generatedAt = new Date().toISOString() }) {
  if (typeof apiKey !== 'string' || !apiKey.trim()) throw new KitesurfingForecastError('configuration', 'missing_api_key');
  const urls = buildKitesurfingProviderUrls(apiKey.trim());

  let weatherResponse;
  let marineResponse;
  try {
    [weatherResponse, marineResponse] = await Promise.all([
      fetchImpl(urls.weather, { method: 'GET', headers: { Accept: 'application/json' } }),
      fetchImpl(urls.marine, { method: 'GET', headers: { Accept: 'application/json' } })
    ]);
  } catch {
    throw new KitesurfingForecastError('provider', 'network');
  }

  const [weatherPayload, marinePayload] = await Promise.all([
    readProviderJson(weatherResponse, 'weather'),
    readProviderJson(marineResponse, 'marine')
  ]);
  return normalizeKitesurfingForecast(weatherPayload, marinePayload, { generatedAt });
}

const FALLBACK_TEXT = Object.freeze({
  es: ({ name, wind, status }) => `${name}: el modelo prevé ${measurementEs(wind)}. ${status === 'avoid' ? 'Con viento E o SE evitad Los Lances por riesgo de viento de tierra y comprobad las zonas vigentes; Valdevaqueros es la alternativa habitual que conviene consultar, no una garantía de condiciones adecuadas.' : 'Comprobad las condiciones reales en la playa y la orientación local antes de entrar al agua.'}`,
  en: ({ name, wind, status }) => `${name}: the model forecasts ${measurementEn(wind)}. ${status === 'avoid' ? 'With E or SE wind, avoid Los Lances because of offshore risk and check the current zones; Valdevaqueros is the usual alternative to check, not a guarantee of suitable conditions.' : 'Check the actual beach conditions and current local guidance before going on the water.'}`,
  de: ({ name, wind, status }) => `${name}: Das Modell prognostiziert ${measurementDe(wind)}. ${status === 'avoid' ? 'Bei Ost- oder Südostwind meidet Los Lances wegen des ablandigen Risikos und prüft die aktuellen Zonen; Valdevaqueros ist die übliche Alternative, die ihr prüfen könnt, keine Garantie für geeignete Bedingungen.' : 'Prüft die tatsächlichen Bedingungen am Strand und die aktuellen lokalen Hinweise, bevor ihr aufs Wasser geht.'}`,
  nl: ({ name, wind, status }) => `${name}: het model verwacht ${measurementNl(wind)}. ${status === 'avoid' ? 'Mijd Los Lances bij O- of ZO-wind vanwege het aflandige risico en controleer de actuele zones; Valdevaqueros is het gebruikelijke alternatief om te controleren, geen garantie op geschikte omstandigheden.' : 'Controleer de werkelijke omstandigheden op het strand en het actuele lokale advies voordat jullie het water op gaan.'}`,
  sv: ({ name, wind, status }) => `${name}: modellen visar ${measurementSv(wind)}. ${status === 'avoid' ? 'Undvik Los Lances vid ostlig eller sydostlig vind på grund av frånlandsrisken och kontrollera aktuella zoner; Valdevaqueros är det vanliga alternativet att kontrollera, ingen garanti för lämpliga förhållanden.' : 'Kontrollera de faktiska strandförhållandena och aktuella lokala råden innan ni går ut på vattnet.'}`
});

function valueOrDash(value, suffix) {
  return value === null ? '—' : `${value} ${suffix}`;
}

function measurementEs(wind) { return `viento ${wind.direction ?? '—'} de ${valueOrDash(wind.speedKnots, 'kn')} y rachas de ${valueOrDash(wind.gustsKnots, 'kn')}`; }
function measurementEn(wind) { return `${wind.direction ?? '—'} wind at ${valueOrDash(wind.speedKnots, 'kn')} with gusts of ${valueOrDash(wind.gustsKnots, 'kn')}`; }
function measurementDe(wind) { return `${wind.direction ?? '—'}-Wind mit ${valueOrDash(wind.speedKnots, 'kn')} und Böen bis ${valueOrDash(wind.gustsKnots, 'kn')}`; }
function measurementNl(wind) { return `${wind.direction ?? '—'}-wind van ${valueOrDash(wind.speedKnots, 'kn')} met vlagen tot ${valueOrDash(wind.gustsKnots, 'kn')}`; }
function measurementSv(wind) { return `${wind.direction ?? '—'}-vind på ${valueOrDash(wind.speedKnots, 'kn')} med byar på ${valueOrDash(wind.gustsKnots, 'kn')}`; }

export function deterministicBriefings(forecast, locale = 'es') {
  const language = LOCALES.includes(locale) ? locale : 'es';
  return forecast.days.flatMap((day) => day.spots.map((spot) => ({
    date: day.date,
    spotId: spot.id,
    text: FALLBACK_TEXT[language](spot)
  })));
}

function parsedAiResponse(result) {
  const candidate = typeof result === 'string' ? result : result?.response;
  if (typeof candidate !== 'string') return null;
  try {
    return JSON.parse(candidate);
  } catch {
    return null;
  }
}

function validateAiBriefings(value, forecast) {
  if (!value || Object.keys(value).length !== 1 || !Array.isArray(value.briefings)) return null;
  const expected = forecast.days.flatMap((day) => day.spots.map((spot) => `${day.date}:${spot.id}`));
  if (value.briefings.length !== expected.length) return null;

  const byKey = new Map();
  for (const item of value.briefings) {
    if (!item || Object.keys(item).sort().join(',') !== 'date,spotId,text') return null;
    if (typeof item.date !== 'string' || typeof item.spotId !== 'string' || typeof item.text !== 'string') return null;
    const text = item.text.trim();
    if (text.length < 20 || text.length > 600 || /kite\s*size|recommendedKiteSize/i.test(text)) return null;
    byKey.set(`${item.date}:${item.spotId}`, text);
  }
  return expected.every((key) => byKey.has(key)) ? byKey : null;
}

async function aiBriefings(forecast, locale, ai, model, timeoutMs) {
  if (!ai || typeof ai.run !== 'function' || !model) return null;
  const facts = forecast.days.map((day) => ({
    date: day.date,
    spots: day.spots.map(({ id, name, status, warnings, wind, marine }) => ({ id, name, status, warnings, wind, marine }))
  }));
  const prompt = [
    `Write concise ${locale} briefing text for each supplied date and spot.`,
    'Use only supplied facts. Preserve every status and warning exactly.',
    'Never decide or imply safety, skill suitability, beginner suitability or kite/board size.',
    'Poniente W/SW may be described only as generally more onshore or often more consistent.',
    'Valdevaqueros may be described only as the usual alternative to check, never as guaranteed suitable.',
    'Return JSON only: {"briefings":[{"date":"YYYY-MM-DD","spotId":"...","text":"..."}]}.',
    JSON.stringify(facts)
  ].join('\n');

  const run = ai.run(model, {
    messages: [
      { role: 'system', content: 'The code decides. The AI only formulates deterministic weather facts.' },
      { role: 'user', content: prompt }
    ],
    response_format: { type: 'json_object' }
  });
  const timeout = new Promise((resolve) => setTimeout(() => resolve(null), timeoutMs));
  try {
    const result = await Promise.race([run, timeout]);
    return validateAiBriefings(parsedAiResponse(result), forecast);
  } catch {
    return null;
  }
}

/**
 * @param {any} forecast
 * @param {{ locale?: string, ai?: { run: (...args: any[]) => Promise<any> }, model?: string, timeoutMs?: number }} [options]
 */
export async function addLocalizedBriefings(forecast, options = {}) {
  const { locale = 'es', ai, model, timeoutMs = 1500 } = options;
  const language = LOCALES.includes(locale) ? locale : 'es';
  const fallback = new Map(deterministicBriefings(forecast, language).map((item) => [`${item.date}:${item.spotId}`, item.text]));
  const generated = await aiBriefings(forecast, language, ai, model, timeoutMs);
  const source = generated ? 'ai' : 'deterministic';

  return {
    ...forecast,
    locale: language,
    days: forecast.days.map((day) => ({
      ...day,
      spots: day.spots.map((spot) => ({
        ...spot,
        briefing: (generated ?? fallback).get(`${day.date}:${spot.id}`),
        briefingSource: source
      }))
    }))
  };
}

async function readCache(kv) {
  if (!kv || typeof kv.get !== 'function') return null;
  try {
    const value = await kv.get(CACHE_KEY, { type: 'json' });
    const parsed = typeof value === 'string' ? JSON.parse(value) : value;
    if (parsed?.schemaVersion !== CACHE_SCHEMA_VERSION || typeof parsed?.fetchedAt !== 'string' || !parsed?.forecast) return null;
    return parsed;
  } catch {
    return null;
  }
}

async function writeCache(kv, forecast, fetchedAt) {
  if (!kv || typeof kv.put !== 'function') return;
  await kv.put(CACHE_KEY, JSON.stringify({
    schemaVersion: CACHE_SCHEMA_VERSION,
    fetchedAt,
    forecast
  }), { expirationTtl: 24 * 60 * 60 });
}

async function refreshForecast({ env, fetchImpl, now }) {
  const apiKey = env?.OPEN_METEO_API_KEY?.trim();
  if (!apiKey) throw new KitesurfingForecastError('configuration', 'missing_api_key');
  const fetchedAt = new Date(now()).toISOString();
  const forecast = await fetchKitesurfingForecast({ apiKey, fetchImpl, generatedAt: fetchedAt });
  await writeCache(env?.WIND_FORECAST_KV, forecast, fetchedAt).catch(() => undefined);
  return { forecast, fetchedAt };
}

function cacheProjection(forecast, fetchedAt, state, now) {
  return {
    ...forecast,
    cache: {
      state,
      fetchedAt,
      ageSeconds: Math.max(0, Math.floor((now - Date.parse(fetchedAt)) / 1000))
    }
  };
}

async function currentForecast({ env, fetchImpl, now, waitUntil }) {
  const cached = await readCache(env?.WIND_FORECAST_KV);
  const nowValue = now();
  const age = cached ? nowValue - Date.parse(cached.fetchedAt) : Number.POSITIVE_INFINITY;

  if (cached && Number.isFinite(age) && age >= 0 && age <= FRESH_MAX_AGE_MS) {
    return cacheProjection(cached.forecast, cached.fetchedAt, 'fresh', nowValue);
  }

  if (cached && Number.isFinite(age) && age > FRESH_MAX_AGE_MS && age <= STALE_MAX_AGE_MS) {
    if (typeof waitUntil === 'function' && env?.OPEN_METEO_API_KEY?.trim()) {
      waitUntil(refreshForecast({ env, fetchImpl, now }).catch(() => undefined));
    }
    return cacheProjection(cached.forecast, cached.fetchedAt, 'stale', nowValue);
  }

  const refreshed = await refreshForecast({ env, fetchImpl, now });
  return cacheProjection(refreshed.forecast, refreshed.fetchedAt, 'fresh', nowValue);
}

function jsonResponse(payload, status, cacheControl = PUBLIC_CACHE_CONTROL) {
  return new Response(JSON.stringify(payload), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': cacheControl,
      'X-Content-Type-Options': 'nosniff'
    }
  });
}

function publicFailure() {
  return jsonResponse({
    error: {
      code: 'wind_forecast_unavailable',
      message: 'The Tarifa wind forecast is temporarily unavailable.'
    }
  }, 503, 'no-store');
}

export function createKitesurfingForecastRoute({ fetchImpl = fetch, now = () => Date.now(), aiTimeoutMs = 1500 } = {}) {
  /** @param {any} context */
  return async function handleKitesurfingForecast(context) {
    const { request, env = {}, waitUntil } = context;
    if (request.method !== 'GET') {
      return jsonResponse({ error: { code: 'method_not_allowed', message: 'Method not allowed.' } }, 405, 'no-store');
    }

    let locale = 'es';
    try {
      const requestedLocale = new URL(request.url).searchParams.get('lang');
      if (requestedLocale && LOCALES.includes(requestedLocale)) locale = requestedLocale;
    } catch {
      return publicFailure();
    }

    try {
      const forecast = await currentForecast({ env, fetchImpl, now, waitUntil });
      const localized = await addLocalizedBriefings(forecast, {
        locale,
        ai: env.AI,
        model: env.WIND_BRIEFING_AI_MODEL?.trim(),
        timeoutMs: aiTimeoutMs
      });
      const response = jsonResponse(localized, 200);
      if (forecast.cache.state === 'stale') response.headers.set('Warning', '110 - "Response is stale"');
      return response;
    } catch (error) {
      const diagnostic = error instanceof KitesurfingForecastError
        ? {
            operation: 'tarifa-kitesurfing-forecast',
            step: error.step,
            category: error.category,
            ...(error.providerHttpStatus ? { providerHttpStatus: error.providerHttpStatus } : {})
          }
        : { operation: 'tarifa-kitesurfing-forecast', step: 'unknown', category: 'unexpected' };
      console.error(JSON.stringify(diagnostic));
      return publicFailure();
    }
  };
}

export const KITESURFING_CACHE = Object.freeze({
  key: CACHE_KEY,
  schemaVersion: CACHE_SCHEMA_VERSION,
  freshMaxAgeMs: FRESH_MAX_AGE_MS,
  staleMaxAgeMs: STALE_MAX_AGE_MS
});
