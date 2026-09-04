/**
 * AEMET kite briefing gateway.
 *
 * Server-side only: the AEMET OpenData key never reaches a browser. The
 * gateway asks two official AEMET products for one configured site and
 * combines them into a single briefing payload:
 *
 * - the hourly municipality forecast (wind, gust peak, direction, sky state,
 *   temperature, precipitation, sunrise and sunset), and
 * - the beach forecast (sea state and water temperature) for the site's beach.
 *
 * Provenance rules (see docs/tarifa-kitesurf/redaktions-contract.md §18):
 * - Both products are the official AEMET forecast for the municipality and the
 *   beach; no model is chosen and none is named beyond AEMET itself.
 * - Wind and gusts are converted from AEMET's km/h to knots; the direction is
 *   AEMET's compass point, kept as the code and as degrees of its centre.
 * - AEMET publishes a gust peak only from roughly 20 km/h of wind. Missing
 *   gusts are reported as missing, never estimated.
 * - The beach forecast is optional: when it fails, the wind briefing stays and
 *   the payload says the sea state is unavailable.
 */

const AEMET_API_ROOT = 'https://opendata.aemet.es/opendata/api';
const AEMET_DATA_HOST = 'opendata.aemet.es';
const PUBLIC_CACHE_CONTROL = 'public, max-age=900, s-maxage=1800, stale-while-revalidate=3600';
const KNOTS_PER_KMH = 0.539957;

/**
 * Sites the gateway may serve. The municipality id drives the hourly forecast,
 * the beach id the beach forecast; both are AEMET's own identifiers.
 */
export const KITE_SITES = Object.freeze({
  tarifa: Object.freeze({
    locationName: 'Tarifa · Playa de Los Lances',
    municipalityId: '11035',
    municipalityName: 'Tarifa',
    beachId: '1103506',
    beachName: 'Playa de Los Lances',
    timezone: 'Europe/Madrid'
  })
});

/** AEMET compass points; the degrees are the centre of each sector. */
const COMPASS_DEGREES = Object.freeze({
  N: 0, NE: 45, E: 90, SE: 135, S: 180, SO: 225, O: 270, NO: 315
});

/** AEMET "estado del cielo" codes, without the night suffix. */
const SKY_CODES = Object.freeze({
  11: 'clear',
  12: 'fewClouds',
  13: 'intervals',
  14: 'cloudy',
  15: 'veryCloudy',
  16: 'overcast',
  17: 'highClouds',
  81: 'fog',
  82: 'mist',
  83: 'haze'
});

function siteConfig(site) {
  const config = KITE_SITES[site];
  if (!config) throw new TypeError(`Unsupported kite briefing site: ${site}`);
  return config;
}

export class AemetKiteError extends Error {
  constructor(providerStep, category, providerHttpStatus) {
    super('AEMET kite briefing request failed.');
    this.name = 'AemetKiteError';
    this.providerStep = providerStep;
    this.category = category;
    this.providerHttpStatus = providerHttpStatus;
  }
}

function numericValue(value) {
  if (Array.isArray(value)) value = value[0];
  if (value === null || value === undefined || value === '') return null;
  const number = Number(value);
  return Number.isFinite(number) ? number : null;
}

function firstString(value) {
  if (Array.isArray(value)) value = value[0];
  return typeof value === 'string' && value.trim() !== '' ? value.trim() : null;
}

const pad = (value) => String(value).padStart(2, '0');

/** Offset of `timeZone` from UTC, in minutes, at the given instant. */
function zoneOffsetMinutes(utcMillis, timeZone) {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone,
    hourCycle: 'h23',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  }).formatToParts(new Date(utcMillis));
  const read = (type) => Number(parts.find((part) => part.type === type)?.value);
  const asUtc = Date.UTC(read('year'), read('month') - 1, read('day'), read('hour'), read('minute'));
  return Math.round((asUtc - utcMillis) / 60000);
}

/** A local wall-clock hour of `timeZone` as an ISO string with its offset. */
export function localHourIso(date, hour, timeZone) {
  const [year, month, day] = date.split('-').map(Number);
  const guess = Date.UTC(year, month - 1, day, hour);
  const firstOffset = zoneOffsetMinutes(guess, timeZone);
  const offset = zoneOffsetMinutes(guess - firstOffset * 60000, timeZone);
  const sign = offset < 0 ? '-' : '+';
  const absolute = Math.abs(offset);
  return `${date}T${pad(hour)}:00:00${sign}${pad(Math.floor(absolute / 60))}:${pad(absolute % 60)}`;
}

export function knotsFromKmh(value) {
  const kmh = numericValue(value);
  return kmh === null ? null : Math.round(kmh * KNOTS_PER_KMH * 10) / 10;
}

export function skyCategory(code) {
  const text = firstString(code);
  if (!text) return 'unknown';
  const number = Number.parseInt(text, 10);
  if (!Number.isFinite(number)) return 'unknown';
  if (SKY_CODES[number]) return SKY_CODES[number];
  const tens = Math.floor(number / 10);
  if (tens === 2) return 'rain';
  if (tens === 4) return 'lightRain';
  if (tens === 3 || tens === 7) return 'snow';
  if (tens === 5 || tens === 6) return 'thunder';
  return 'unknown';
}

function isoDate(value) {
  if (typeof value === 'number') value = String(value);
  if (typeof value !== 'string') return null;
  const digits = value.replace(/\D/g, '').slice(0, 8);
  if (digits.length !== 8) return null;
  return `${digits.slice(0, 4)}-${digits.slice(4, 6)}-${digits.slice(6, 8)}`;
}

function byHour(entries) {
  const map = new Map();
  for (const entry of Array.isArray(entries) ? entries : []) {
    const hour = Number.parseInt(entry?.periodo, 10);
    if (Number.isFinite(hour)) map.set(hour, entry);
  }
  return map;
}

/**
 * AEMET states precipitation probability per period such as "0713" (07:00 to
 * 13:00) or "1901" (19:00 to 01:00 next day). Returns the value covering the
 * given hour, or null when AEMET left it empty.
 */
function probabilityForHour(entries, hour) {
  for (const entry of Array.isArray(entries) ? entries : []) {
    const period = typeof entry?.periodo === 'string' ? entry.periodo : '';
    if (period.length !== 4) continue;
    const start = Number.parseInt(period.slice(0, 2), 10);
    const end = Number.parseInt(period.slice(2, 4), 10);
    const covers = start < end ? hour >= start && hour < end : hour >= start || hour < end;
    if (covers) return numericValue(entry.value);
  }
  return null;
}

/**
 * Turns the hourly municipality forecast into an hour series and a day list.
 * AEMET delivers the current day from the current hour on, the following day
 * completely and a third day in part; whatever an hour lacks stays null.
 */
export function normalizeHourlyForecast(payload, site = 'tarifa') {
  const config = siteConfig(site);
  const municipality = Array.isArray(payload) ? payload[0] : null;
  const rawDays = municipality?.prediccion?.dia;
  if (!Array.isArray(rawDays) || rawDays.length === 0) {
    throw new AemetKiteError('hourly', 'normalization');
  }

  const days = [];
  const hours = [];
  for (const day of rawDays) {
    const date = isoDate(day?.fecha);
    if (!date) continue;
    days.push({ date, sunrise: firstString(day.orto), sunset: firstString(day.ocaso) });

    const windEntries = Array.isArray(day.vientoAndRachaMax) ? day.vientoAndRachaMax : [];
    const winds = byHour(windEntries.filter((entry) => entry?.velocidad !== undefined));
    const gusts = byHour(windEntries.filter((entry) => entry?.velocidad === undefined && entry?.value !== undefined));
    const temperatures = byHour(day.temperatura);
    const skies = byHour(day.estadoCielo);
    const rain = byHour(day.precipitacion);

    const hourNumbers = [...new Set([...winds.keys(), ...temperatures.keys(), ...skies.keys()])].sort((a, b) => a - b);
    for (const hour of hourNumbers) {
      const wind = winds.get(hour);
      const directionCode = firstString(wind?.direccion);
      const skyCode = firstString(skies.get(hour)?.value);
      hours.push({
        time: localHourIso(date, hour, config.timezone),
        wind: {
          speed: knotsFromKmh(wind?.velocidad),
          directionCode,
          direction: directionCode && directionCode in COMPASS_DEGREES ? COMPASS_DEGREES[directionCode] : null,
          gusts: knotsFromKmh(gusts.get(hour)?.value)
        },
        temperature: numericValue(temperatures.get(hour)?.value),
        sky: {
          code: skyCode,
          category: skyCategory(skyCode),
          night: Boolean(skyCode && /n$/i.test(skyCode))
        },
        precipitation: numericValue(rain.get(hour)?.value),
        precipitationProbability: probabilityForHour(day.probPrecipitacion, hour)
      });
    }
  }

  if (hours.length === 0) throw new AemetKiteError('hourly', 'normalization');

  return {
    issuedAt: firstString(municipality?.elaborado) ?? null,
    days,
    hours
  };
}

const WAVE_STATES = Object.freeze({ 1: 'weak', 2: 'moderate', 3: 'strong' });

function waveState(code, description) {
  const number = numericValue(code);
  if (number !== null && WAVE_STATES[number]) return WAVE_STATES[number];
  const text = (firstString(description) ?? '').toLowerCase();
  if (/d[eé]bil/.test(text)) return 'weak';
  if (/moderad/.test(text)) return 'moderate';
  if (/fuerte/.test(text)) return 'strong';
  return null;
}

/**
 * Turns the beach forecast into one entry per day: sea state for the morning
 * and the afternoon, water temperature, daily maximum and UV index. Fields
 * AEMET did not deliver stay null.
 */
export function normalizeBeachForecast(payload) {
  const beach = Array.isArray(payload) ? payload[0] : null;
  const rawDays = beach?.prediccion?.dia;
  if (!Array.isArray(rawDays) || rawDays.length === 0) {
    throw new AemetKiteError('beach', 'normalization');
  }

  const days = [];
  for (const day of rawDays) {
    const date = isoDate(day?.fecha);
    if (!date) continue;
    days.push({
      date,
      wave: {
        morning: waveState(day?.oleaje?.f1, day?.oleaje?.descripcion1),
        afternoon: waveState(day?.oleaje?.f2, day?.oleaje?.descripcion2)
      },
      waterTemperature: numericValue(day?.tAgua?.valor1),
      temperatureMax: numericValue(day?.tMaxima?.valor1),
      uvMax: numericValue(day?.uvMax?.valor1)
    });
  }

  if (days.length === 0) throw new AemetKiteError('beach', 'normalization');

  return {
    issuedAt: firstString(beach?.elaborado) ?? null,
    beachName: firstString(beach?.nombre),
    days
  };
}

export function buildKiteBriefing({ hourlyPayload, beachPayload, site = 'tarifa', requestedAt }) {
  const config = siteConfig(site);
  const hourly = normalizeHourlyForecast(hourlyPayload, site);
  let beach = null;
  if (beachPayload) beach = normalizeBeachForecast(beachPayload);

  return {
    site,
    locationName: config.locationName,
    timezone: config.timezone,
    units: { windSpeed: 'kn', temperature: '°C', precipitation: 'mm' },
    source: {
      provider: 'AEMET',
      attributionUrl: 'https://www.aemet.es/',
      requestedAt,
      hourly: {
        status: 'ok',
        product: `Predicción horaria por municipios · ${config.municipalityName} (${config.municipalityId})`,
        issuedAt: hourly.issuedAt,
        validFrom: hourly.hours[0].time,
        validTo: hourly.hours[hourly.hours.length - 1].time
      },
      beach: beach
        ? {
            status: 'ok',
            product: `Predicción de playas · ${config.beachName} (${config.beachId})`,
            issuedAt: beach.issuedAt
          }
        : { status: 'unavailable', product: `Predicción de playas · ${config.beachName} (${config.beachId})` }
    },
    days: hourly.days,
    hours: hourly.hours,
    beach: beach ? beach.days : null
  };
}

async function readJson(response, providerStep) {
  if (!response.ok) throw new AemetKiteError(providerStep, 'http', response.status);
  try {
    return await response.json();
  } catch {
    throw new AemetKiteError(providerStep, 'malformed_response');
  }
}

function validateDataUrl(value, providerStep) {
  let url;
  try {
    url = new URL(value);
  } catch {
    throw new AemetKiteError(providerStep, 'malformed_response');
  }
  if (url.protocol !== 'https:' || url.hostname !== AEMET_DATA_HOST) {
    throw new AemetKiteError(providerStep, 'untrusted_url');
  }
  return url;
}

/**
 * AEMET OpenData answers every product in two steps: first an envelope with a
 * `datos` URL, then the data itself. Both hosts must be AEMET's own.
 */
async function downloadProduct(fetchImpl, path, apiKey, providerStep) {
  const initialUrl = new URL(`${AEMET_API_ROOT}${path}`);
  initialUrl.searchParams.set('api_key', apiKey);

  let initialResponse;
  try {
    initialResponse = await fetchImpl(initialUrl, { method: 'GET', headers: { Accept: 'application/json' } });
  } catch {
    throw new AemetKiteError(providerStep, 'network');
  }
  const envelope = await readJson(initialResponse, providerStep);
  if (envelope?.estado !== 200 || typeof envelope?.datos !== 'string') {
    throw new AemetKiteError(providerStep, 'normalization', envelope?.estado);
  }

  const dataUrl = validateDataUrl(envelope.datos, providerStep);
  let dataResponse;
  try {
    dataResponse = await fetchImpl(dataUrl, { method: 'GET', headers: { Accept: 'application/json' } });
  } catch {
    throw new AemetKiteError(providerStep, 'network');
  }
  return readJson(dataResponse, providerStep);
}

export async function fetchKiteBriefing({ apiKey, site = 'tarifa', fetchImpl = fetch, now = () => new Date() }) {
  const config = siteConfig(site);
  const requestedAt = now().toISOString();

  const hourlyPayload = await downloadProduct(
    fetchImpl,
    `/prediccion/especifica/municipio/horaria/${config.municipalityId}`,
    apiKey,
    'hourly'
  );

  // The beach forecast is a separate product. Its failure is logged and
  // reported inside the payload; it does not take the wind briefing down.
  let beachPayload = null;
  let beachError = null;
  try {
    beachPayload = await downloadProduct(fetchImpl, `/prediccion/especifica/playa/${config.beachId}`, apiKey, 'beach');
    normalizeBeachForecast(beachPayload);
  } catch (error) {
    beachPayload = null;
    beachError = error;
  }

  const briefing = buildKiteBriefing({ hourlyPayload, beachPayload, site, requestedAt });
  return { briefing, beachError };
}

function jsonResponse(payload, status, cacheControl) {
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
      code: 'kite_briefing_unavailable',
      message: 'The kite briefing is temporarily unavailable.'
    }
  }, 503, 'no-store');
}

function diagnostic(error, operation) {
  return error instanceof AemetKiteError
    ? {
        operation,
        providerStep: error.providerStep,
        ...(error.providerHttpStatus ? { providerHttpStatus: error.providerHttpStatus } : {}),
        category: error.category
      }
    : { operation, providerStep: 'unknown', category: 'unexpected' };
}

export function createKiteBriefingRoute({ site = 'tarifa', fetchImpl = fetch, cache, now } = {}) {
  siteConfig(site);
  return async function handleKiteBriefing({ request, env, waitUntil = undefined }) {
    const apiKey = env?.AEMET_API_KEY?.trim();
    if (!apiKey) return publicFailure();

    const edgeCache = cache ?? globalThis.caches?.default;
    const cacheKey = new Request(new URL(`/api/weather/${site}-kite`, request.url), { method: 'GET' });

    if (edgeCache) {
      const cached = await edgeCache.match(cacheKey);
      if (cached) return cached;
    }

    try {
      const { briefing, beachError } = await fetchKiteBriefing({ apiKey, site, fetchImpl, ...(now ? { now } : {}) });
      if (beachError) console.error(JSON.stringify(diagnostic(beachError, 'kite-briefing-beach')));

      const response = jsonResponse(briefing, 200, PUBLIC_CACHE_CONTROL);
      if (edgeCache) {
        const cacheWrite = edgeCache.put(cacheKey, response.clone()).catch(() => undefined);
        if (typeof waitUntil === 'function') waitUntil(cacheWrite);
        else await cacheWrite;
      }
      return response;
    } catch (error) {
      console.error(JSON.stringify(diagnostic(error, 'kite-briefing')));
      return publicFailure();
    }
  };
}
