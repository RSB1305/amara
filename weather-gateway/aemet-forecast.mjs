const AEMET_API_ROOT = 'https://opendata.aemet.es/opendata/api';
const AEMET_DATA_HOST = 'opendata.aemet.es';
const PUBLIC_CACHE_CONTROL = 'public, max-age=900, s-maxage=3600, stale-while-revalidate=21600';

export const AEMET_DESTINATIONS = Object.freeze({
  frigiliana: Object.freeze({ municipalityId: '29053', locationName: 'Frigiliana' }),
  nerja: Object.freeze({ municipalityId: '29075', locationName: 'Nerja' }),
  tarifa: Object.freeze({ municipalityId: '11035', locationName: 'Tarifa' })
});

function destinationConfig(destination) {
  const config = AEMET_DESTINATIONS[destination];
  if (!config) throw new TypeError(`Unsupported AEMET destination: ${destination}`);
  return config;
}

class AemetGatewayError extends Error {
  constructor(providerStep, category, providerHttpStatus) {
    super('AEMET forecast request failed.');
    this.name = 'AemetGatewayError';
    this.providerStep = providerStep;
    this.category = category;
    this.providerHttpStatus = providerHttpStatus;
  }
}

function numericValue(value) {
  if (value === null || value === undefined || value === '') return null;
  const number = Number(value);
  return Number.isFinite(number) ? number : null;
}

function precipitationMaximum(entries) {
  if (!Array.isArray(entries)) return null;
  const values = entries
    .map((entry) => numericValue(entry?.value))
    .filter((value) => value !== null);
  return values.length > 0 ? Math.max(...values) : null;
}

async function readJson(response, providerStep) {
  if (!response.ok) {
    throw new AemetGatewayError(providerStep, 'http', response.status);
  }

  try {
    return await response.json();
  } catch {
    throw new AemetGatewayError(providerStep, 'malformed_response');
  }
}

function validateDataUrl(value) {
  let url;
  try {
    url = new URL(value);
  } catch {
    throw new AemetGatewayError('data_url', 'malformed_response');
  }

  if (url.protocol !== 'https:' || url.hostname !== AEMET_DATA_HOST) {
    throw new AemetGatewayError('data_url', 'untrusted_url');
  }

  return url;
}

export function normalizeAemetDailyForecast(payload, destination = 'frigiliana') {
  const config = destinationConfig(destination);
  const municipality = Array.isArray(payload) ? payload[0] : null;
  const rawDays = municipality?.prediccion?.dia;

  if (!Array.isArray(rawDays) || rawDays.length === 0) {
    throw new AemetGatewayError('forecast', 'normalization');
  }

  // AEMET routinely omits values: the current day loses its temperatures late
  // in the afternoon, and days further out can arrive incomplete. Skip what is
  // unusable and keep the rest, rather than discarding a good forecast because
  // one field is missing.
  const days = [];
  for (const day of rawDays) {
    if (days.length === 3) break;

    const maximum = numericValue(day?.temperatura?.maxima);
    const minimum = numericValue(day?.temperatura?.minima);
    if (typeof day?.fecha !== 'string' || maximum === null || minimum === null) continue;

    days.push({
      date: day.fecha.slice(0, 10),
      temperatureMax: Math.round(maximum),
      temperatureMin: Math.round(minimum),
      precipitationProbability: precipitationMaximum(day.probPrecipitacion)
    });
  }

  if (days.length === 0) {
    throw new AemetGatewayError('forecast', 'normalization');
  }

  return {
    destination,
    locationName: config.locationName,
    source: {
      provider: 'AEMET',
      issuedAt: municipality?.elaborado ?? municipality?.elaborada ?? null
    },
    days
  };
}

export async function fetchAemetDailyForecast({ apiKey, destination = 'frigiliana', fetchImpl = fetch }) {
  const config = destinationConfig(destination);
  const initialUrl = new URL(
    `${AEMET_API_ROOT}/prediccion/especifica/municipio/diaria/${config.municipalityId}`
  );
  initialUrl.searchParams.set('api_key', apiKey);

  let initialResponse;
  try {
    initialResponse = await fetchImpl(initialUrl, {
      method: 'GET',
      headers: { Accept: 'application/json' }
    });
  } catch {
    throw new AemetGatewayError('request_url', 'network');
  }

  const envelope = await readJson(initialResponse, 'request_url');
  if (envelope?.estado !== 200 || typeof envelope?.datos !== 'string') {
    throw new AemetGatewayError('request_url', 'normalization', envelope?.estado);
  }

  const dataUrl = validateDataUrl(envelope.datos);
  let dataResponse;
  try {
    dataResponse = await fetchImpl(dataUrl, {
      method: 'GET',
      headers: { Accept: 'application/json' }
    });
  } catch {
    throw new AemetGatewayError('forecast', 'network');
  }

  return normalizeAemetDailyForecast(await readJson(dataResponse, 'forecast'), destination);
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
      code: 'weather_data_unavailable',
      message: 'The official forecast is temporarily unavailable.'
    }
  }, 503, 'no-store');
}

export function createAemetForecastRoute({ destination = 'frigiliana', fetchImpl = fetch, cache } = {}) {
  destinationConfig(destination);
  return async function handleAemetForecast({ request, env, waitUntil = undefined }) {
    const apiKey = env?.AEMET_API_KEY?.trim();
    if (!apiKey) return publicFailure();

    const edgeCache = cache ?? globalThis.caches?.default;
    const cacheKey = new Request(new URL(`/api/weather/${destination}`, request.url), {
      method: 'GET'
    });

    if (edgeCache) {
      const cached = await edgeCache.match(cacheKey);
      if (cached) return cached;
    }

    try {
      const forecast = await fetchAemetDailyForecast({ apiKey, destination, fetchImpl });
      const response = jsonResponse(forecast, 200, PUBLIC_CACHE_CONTROL);

      if (edgeCache) {
        const cacheWrite = edgeCache.put(cacheKey, response.clone()).catch(() => undefined);
        if (typeof waitUntil === 'function') waitUntil(cacheWrite);
        else await cacheWrite;
      }

      return response;
    } catch (error) {
      const diagnostic = error instanceof AemetGatewayError
        ? {
            operation: 'daily-forecast',
            providerStep: error.providerStep,
            ...(error.providerHttpStatus ? { providerHttpStatus: error.providerHttpStatus } : {}),
            category: error.category
          }
        : {
            operation: 'daily-forecast',
            providerStep: 'unknown',
            category: 'unexpected'
          };
      console.error(JSON.stringify(diagnostic));
      return publicFailure();
    }
  };
}
