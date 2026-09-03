/**
 * Open-Meteo kite briefing gateway.
 *
 * Server-side only: the customer API key never reaches a browser. The gateway
 * asks two Open-Meteo endpoints for one configured site — the weather forecast
 * API for wind, gusts, cloud layers and radiation, and the marine API for
 * total wave, wind wave and swell — and aligns them hour by hour.
 *
 * Provenance rules (see docs/tarifa-kitesurf/redaktions-contract.md §9):
 * - The model is configured explicitly. `best_match` is never requested, so a
 *   model named in the UI is the model that was actually asked for.
 * - The response coordinate is the centre of the grid cell the provider used.
 *   The offset to the requested coordinate is computed per fetch and kept in
 *   the payload as metadata; no maximum distance is claimed.
 * - `generationtime_ms` is the response generation time, not a model run time,
 *   and is not exposed. The fetch time is recorded as `requestedAt`.
 * - Missing data is reported as missing. Nothing is estimated or filled in.
 */

const FORECAST_ENDPOINT = 'https://customer-api.open-meteo.com/v1/forecast';
const MARINE_ENDPOINT = 'https://customer-marine-api.open-meteo.com/v1/marine';
const PUBLIC_CACHE_CONTROL = 'public, max-age=600, s-maxage=900, stale-while-revalidate=1800';
const FORECAST_DAYS = 2;

const FORECAST_VARIABLES = [
  'wind_speed_10m',
  'wind_direction_10m',
  'wind_gusts_10m',
  'cloud_cover',
  'cloud_cover_low',
  'cloud_cover_mid',
  'cloud_cover_high',
  'shortwave_radiation'
];

const MARINE_VARIABLES = [
  'wave_height',
  'wave_direction',
  'wave_period',
  'wind_wave_height',
  'wind_wave_direction',
  'wind_wave_period',
  'swell_wave_height',
  'swell_wave_direction',
  'swell_wave_period',
  'secondary_swell_wave_height',
  'secondary_swell_wave_direction',
  'secondary_swell_wave_period'
];

/**
 * Sites the gateway may serve. Coordinates are the requested point; the
 * provider answers with the centre of its grid cell, which is recorded
 * separately. Models are named by their Open-Meteo identifier and by the
 * service that runs them, so the attribution line can show both.
 */
export const KITE_SITES = Object.freeze({
  tarifa: Object.freeze({
    locationName: 'Tarifa · Playa de Los Lances',
    latitude: 36.03,
    longitude: -5.63,
    timezone: 'Europe/Madrid',
    forecastModel: Object.freeze({
      id: 'icon_eu',
      label: 'ICON-EU',
      originalSource: 'DWD',
      originalSourceName: 'Deutscher Wetterdienst'
    }),
    marineModel: Object.freeze({
      id: 'dwd_ewam',
      label: 'ICON Wave (EWAM)',
      originalSource: 'DWD',
      originalSourceName: 'Deutscher Wetterdienst'
    })
  })
});

function siteConfig(site) {
  const config = KITE_SITES[site];
  if (!config) throw new TypeError(`Unsupported kite briefing site: ${site}`);
  return config;
}

export class OpenMeteoGatewayError extends Error {
  constructor(providerStep, category, providerHttpStatus) {
    super('Open-Meteo request failed.');
    this.name = 'OpenMeteoGatewayError';
    this.providerStep = providerStep;
    this.category = category;
    this.providerHttpStatus = providerHttpStatus;
  }
}

function numberOrNull(value) {
  return typeof value === 'number' && Number.isFinite(value) ? value : null;
}

/** Great-circle distance in kilometres, rounded to one decimal. */
export function gridOffsetKm(requested, returned) {
  const toRadians = (degrees) => (degrees * Math.PI) / 180;
  const earthRadiusKm = 6371;
  const dLat = toRadians(returned.latitude - requested.latitude);
  const dLon = toRadians(returned.longitude - requested.longitude);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRadians(requested.latitude)) * Math.cos(toRadians(returned.latitude)) * Math.sin(dLon / 2) ** 2;
  return Math.round(earthRadiusKm * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)) * 10) / 10;
}

function buildUrl(endpoint, { apiKey, site, variables, model, windSpeedUnit }) {
  const url = new URL(endpoint);
  url.searchParams.set('latitude', String(site.latitude));
  url.searchParams.set('longitude', String(site.longitude));
  url.searchParams.set('hourly', variables.join(','));
  url.searchParams.set('models', model);
  url.searchParams.set('timezone', site.timezone);
  url.searchParams.set('forecast_days', String(FORECAST_DAYS));
  url.searchParams.set('timeformat', 'iso8601');
  if (windSpeedUnit) url.searchParams.set('wind_speed_unit', windSpeedUnit);
  url.searchParams.set('apikey', apiKey);
  return url;
}

async function fetchJson(fetchImpl, url, providerStep) {
  let response;
  try {
    response = await fetchImpl(url, { method: 'GET', headers: { Accept: 'application/json' } });
  } catch {
    throw new OpenMeteoGatewayError(providerStep, 'network');
  }
  if (!response.ok) throw new OpenMeteoGatewayError(providerStep, 'http', response.status);
  try {
    return await response.json();
  } catch {
    throw new OpenMeteoGatewayError(providerStep, 'malformed_response');
  }
}

function validateHourly(payload, variables, providerStep) {
  const hourly = payload?.hourly;
  const times = hourly?.time;
  if (!Array.isArray(times) || times.length === 0) {
    throw new OpenMeteoGatewayError(providerStep, 'normalization');
  }
  for (const variable of variables) {
    if (!Array.isArray(hourly[variable]) || hourly[variable].length !== times.length) {
      throw new OpenMeteoGatewayError(providerStep, 'normalization');
    }
  }
  const latitude = numberOrNull(payload.latitude);
  const longitude = numberOrNull(payload.longitude);
  if (latitude === null || longitude === null) {
    throw new OpenMeteoGatewayError(providerStep, 'normalization');
  }
  return { hourly, grid: { latitude, longitude }, utcOffsetSeconds: numberOrNull(payload.utc_offset_seconds) };
}

function provenance(model, site, grid, utcOffsetSeconds) {
  const requested = { latitude: site.latitude, longitude: site.longitude };
  return {
    status: 'ok',
    configuredModel: model.id,
    modelLabel: model.label,
    originalSource: model.originalSource,
    originalSourceName: model.originalSourceName,
    requested,
    grid,
    gridOffsetKm: gridOffsetKm(requested, grid),
    utcOffsetSeconds
  };
}

function utcOffsetSuffix(utcOffsetSeconds) {
  if (utcOffsetSeconds === null) return '';
  const sign = utcOffsetSeconds < 0 ? '-' : '+';
  const absolute = Math.abs(utcOffsetSeconds);
  const hours = String(Math.floor(absolute / 3600)).padStart(2, '0');
  const minutes = String(Math.floor((absolute % 3600) / 60)).padStart(2, '0');
  return `${sign}${hours}:${minutes}`;
}

/**
 * Turns the two provider payloads into one hourly series. Marine data is
 * optional: when the wave model failed, every sea field is null and the marine
 * provenance says so, rather than the whole briefing disappearing with it.
 */
export function normalizeKiteBriefing({ forecastPayload, marinePayload, site: siteId, requestedAt }) {
  const site = siteConfig(siteId);
  const forecast = validateHourly(forecastPayload, FORECAST_VARIABLES, 'forecast');
  const suffix = utcOffsetSuffix(forecast.utcOffsetSeconds);

  let marine = null;
  let marineProvenance = { status: 'unavailable', configuredModel: site.marineModel.id, modelLabel: site.marineModel.label, originalSource: site.marineModel.originalSource, originalSourceName: site.marineModel.originalSourceName };
  if (marinePayload) {
    marine = validateHourly(marinePayload, MARINE_VARIABLES, 'marine');
    marineProvenance = provenance(site.marineModel, site, marine.grid, marine.utcOffsetSeconds);
  }
  const marineIndex = new Map((marine?.hourly.time ?? []).map((time, index) => [time, index]));

  const hours = forecast.hourly.time.map((time, index) => {
    const value = (variable) => numberOrNull(forecast.hourly[variable][index]);
    const marineAt = marineIndex.get(time);
    const sea = (variable) => (marine && marineAt !== undefined ? numberOrNull(marine.hourly[variable][marineAt]) : null);
    return {
      time: `${time}${suffix}`,
      wind: {
        speed: value('wind_speed_10m'),
        direction: value('wind_direction_10m'),
        gusts: value('wind_gusts_10m')
      },
      cloud: {
        total: value('cloud_cover'),
        low: value('cloud_cover_low'),
        mid: value('cloud_cover_mid'),
        high: value('cloud_cover_high')
      },
      radiation: value('shortwave_radiation'),
      wave: { height: sea('wave_height'), direction: sea('wave_direction'), period: sea('wave_period') },
      windWave: { height: sea('wind_wave_height'), direction: sea('wind_wave_direction'), period: sea('wind_wave_period') },
      swell: { height: sea('swell_wave_height'), direction: sea('swell_wave_direction'), period: sea('swell_wave_period') },
      secondarySwell: {
        height: sea('secondary_swell_wave_height'),
        direction: sea('secondary_swell_wave_direction'),
        period: sea('secondary_swell_wave_period')
      }
    };
  });

  return {
    site: siteId,
    locationName: site.locationName,
    timezone: site.timezone,
    units: {
      windSpeed: 'kn',
      direction: '°',
      cloud: '%',
      radiation: 'W/m²',
      waveHeight: 'm',
      wavePeriod: 's'
    },
    source: {
      provider: 'Open-Meteo',
      endpoint: 'Open-Meteo Customer API',
      licence: 'CC BY 4.0',
      attributionUrl: 'https://open-meteo.com/',
      requestedAt,
      validFrom: hours[0].time,
      validTo: hours[hours.length - 1].time,
      forecast: provenance(site.forecastModel, site, forecast.grid, forecast.utcOffsetSeconds),
      marine: marineProvenance
    },
    hours
  };
}

export async function fetchKiteBriefing({ apiKey, site: siteId = 'tarifa', fetchImpl = fetch, now = () => new Date() }) {
  const site = siteConfig(siteId);
  const requestedAt = now().toISOString();

  const forecastPayload = await fetchJson(
    fetchImpl,
    buildUrl(FORECAST_ENDPOINT, { apiKey, site, variables: FORECAST_VARIABLES, model: site.forecastModel.id, windSpeedUnit: 'kn' }),
    'forecast'
  );

  // The sea state is a separate product from a separate model. Its failure is
  // logged and reported inside the payload, but it does not take the wind
  // briefing down with it.
  let marinePayload = null;
  let marineError = null;
  try {
    marinePayload = await fetchJson(
      fetchImpl,
      buildUrl(MARINE_ENDPOINT, { apiKey, site, variables: MARINE_VARIABLES, model: site.marineModel.id }),
      'marine'
    );
    validateHourly(marinePayload, MARINE_VARIABLES, 'marine');
  } catch (error) {
    marinePayload = null;
    marineError = error;
  }

  const briefing = normalizeKiteBriefing({ forecastPayload, marinePayload, site: siteId, requestedAt });
  return { briefing, marineError };
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
  return error instanceof OpenMeteoGatewayError
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
    const apiKey = env?.OPEN_METEO_API_KEY?.trim();
    if (!apiKey) return publicFailure();

    const edgeCache = cache ?? globalThis.caches?.default;
    const cacheKey = new Request(new URL(`/api/weather/${site}-kite`, request.url), { method: 'GET' });

    if (edgeCache) {
      const cached = await edgeCache.match(cacheKey);
      if (cached) return cached;
    }

    try {
      const { briefing, marineError } = await fetchKiteBriefing({ apiKey, site, fetchImpl, ...(now ? { now } : {}) });
      if (marineError) console.error(JSON.stringify(diagnostic(marineError, 'kite-briefing-marine')));

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
