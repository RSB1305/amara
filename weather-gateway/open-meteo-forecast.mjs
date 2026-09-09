const OPEN_METEO_FORECAST = 'https://api.open-meteo.com/v1/forecast';
const REQUEST_TIMEOUT_MS = 6000;
const PUBLIC_CACHE_CONTROL = 'public, max-age=900, s-maxage=1800, stale-while-revalidate=7200';

// The guide weather card renders these fields client-side. Wind values are
// requested unconditionally and simply ignored on non-wind locations, so one
// server-defined field set serves every caller and keeps the cache key to the
// coordinate pair alone.
const CURRENT_FIELDS = 'temperature_2m,weather_code,uv_index,wind_speed_10m';
const HOURLY_FIELDS = 'temperature_2m,weather_code,wind_speed_10m';
const DAILY_FIELDS = 'weather_code,temperature_2m_max,temperature_2m_min,wind_speed_10m_max';

class OpenMeteoGatewayError extends Error {
  constructor(category, providerHttpStatus) {
    super('Open-Meteo forecast request failed.');
    this.name = 'OpenMeteoGatewayError';
    this.category = category;
    this.providerHttpStatus = providerHttpStatus;
  }
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
      message: 'The live forecast is temporarily unavailable.'
    }
  }, 503, 'no-store');
}

// Round to four decimals (~11 m) so nearby callers share a cache entry and the
// endpoint cannot be pinned with unbounded distinct coordinates.
function parseCoordinate(value, limit) {
  const number = Number(value);
  if (!Number.isFinite(number) || number < -limit || number > limit) return null;
  return Math.round(number * 1e4) / 1e4;
}

export function buildOpenMeteoUrl(lat, lon) {
  const url = new URL(OPEN_METEO_FORECAST);
  url.searchParams.set('latitude', String(lat));
  url.searchParams.set('longitude', String(lon));
  url.searchParams.set('current', CURRENT_FIELDS);
  url.searchParams.set('hourly', HOURLY_FIELDS);
  url.searchParams.set('daily', DAILY_FIELDS);
  url.searchParams.set('timezone', 'auto');
  url.searchParams.set('forecast_days', '5');
  return url;
}

async function fetchOpenMeteoForecast({ lat, lon, fetchImpl = fetch }) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);
  let response;
  try {
    response = await fetchImpl(buildOpenMeteoUrl(lat, lon), {
      method: 'GET',
      headers: { Accept: 'application/json' },
      signal: controller.signal
    });
  } catch {
    throw new OpenMeteoGatewayError('network');
  } finally {
    clearTimeout(timeout);
  }

  if (!response.ok) throw new OpenMeteoGatewayError('http', response.status);

  let payload;
  try {
    payload = await response.json();
  } catch {
    throw new OpenMeteoGatewayError('malformed_response');
  }

  if (
    !payload ||
    typeof payload !== 'object' ||
    !payload.current ||
    !payload.hourly ||
    !payload.daily
  ) {
    throw new OpenMeteoGatewayError('normalization');
  }

  // The payload is passed through unchanged; the widget performs its own field
  // validation and sanitization before rendering any provider value.
  return payload;
}

export function createGuideForecastRoute({ fetchImpl = fetch, cache } = {}) {
  return async function handleGuideForecast({ request, waitUntil = undefined }) {
    const requestUrl = new URL(request.url);
    const lat = parseCoordinate(requestUrl.searchParams.get('latitude'), 90);
    const lon = parseCoordinate(requestUrl.searchParams.get('longitude'), 180);
    if (lat === null || lon === null) {
      return jsonResponse({
        error: { code: 'invalid_coordinates', message: 'latitude and longitude are required.' }
      }, 400, 'no-store');
    }

    const edgeCache = cache ?? globalThis.caches?.default;
    const cacheKey = new Request(
      new URL(`/api/weather/guide-forecast?latitude=${lat}&longitude=${lon}`, request.url),
      { method: 'GET' }
    );

    if (edgeCache) {
      const cached = await edgeCache.match(cacheKey);
      if (cached) return cached;
    }

    try {
      const forecast = await fetchOpenMeteoForecast({ lat, lon, fetchImpl });
      const response = jsonResponse(forecast, 200, PUBLIC_CACHE_CONTROL);

      if (edgeCache) {
        const cacheWrite = edgeCache.put(cacheKey, response.clone()).catch(() => undefined);
        if (typeof waitUntil === 'function') waitUntil(cacheWrite);
        else await cacheWrite;
      }

      return response;
    } catch (error) {
      const diagnostic = error instanceof OpenMeteoGatewayError
        ? {
            operation: 'guide-forecast',
            category: error.category,
            ...(error.providerHttpStatus ? { providerHttpStatus: error.providerHttpStatus } : {})
          }
        : { operation: 'guide-forecast', category: 'unexpected' };
      console.error(JSON.stringify(diagnostic));
      return publicFailure();
    }
  };
}
