/**
 * Live weather fetch + cache refresh (server-only).
 *
 * Uses Open-Meteo’s free forecast API (no key) for Frigiliana, maps the payload into
 * {@link WeatherData}, and persists via {@link writeCachedWeather}. Any failure leaves
 * the on-disk cache untouched so {@link readCachedWeather} remains the safe fallback.
 */
import {
  readCachedWeather,
  writeCachedWeather,
  type WeatherData,
} from './weatherCache';

/** AMARA location — Open-Meteo expects WGS84 decimal degrees. */
const FRIGILIANA_LAT = 36.7915;
const FRIGILIANA_LON = -3.8956;

type WeatherPayload = Omit<WeatherData, 'timestamp'>;

function buildOpenMeteoForecastUrl(): string {
  const u = new URL('https://api.open-meteo.com/v1/forecast');
  u.searchParams.set('latitude', String(FRIGILIANA_LAT));
  u.searchParams.set('longitude', String(FRIGILIANA_LON));
  u.searchParams.set(
    'current',
    'temperature_2m,relative_humidity_2m,wind_speed_10m,uv_index',
  );
  u.searchParams.set('daily', 'sunset');
  u.searchParams.set('forecast_days', '1');
  u.searchParams.set('timezone', 'Europe/Madrid');
  return u.toString();
}

/** Extract HH:MM for display from Open-Meteo’s ISO8601 sunset string (timezone already applied). */
function formatSunsetLocal(iso: string): string {
  const t = iso.indexOf('T');
  if (t === -1) return iso.length >= 5 ? iso.slice(0, 5) : iso;
  const time = iso.slice(t + 1);
  return time.length >= 5 ? time.slice(0, 5) : time;
}

/**
 * Maps Open-Meteo `/v1/forecast` JSON into our cache shape.
 * Returns null if required current fields are missing or non-numeric.
 */
function mapOpenMeteoToWeather(body: unknown): WeatherPayload | null {
  if (body === null || typeof body !== 'object') return null;
  const root = body as Record<string, unknown>;
  const current = root.current;
  if (current === null || typeof current !== 'object') return null;
  const c = current as Record<string, unknown>;

  const temp = c.temperature_2m;
  const hum = c.relative_humidity_2m;
  const windKmh = c.wind_speed_10m;
  if (typeof temp !== 'number' || !Number.isFinite(temp)) return null;
  if (typeof hum !== 'number' || !Number.isFinite(hum)) return null;
  if (typeof windKmh !== 'number' || !Number.isFinite(windKmh)) return null;

  let sunset = '—';
  const daily = root.daily;
  if (daily !== null && typeof daily === 'object') {
    const d = daily as Record<string, unknown>;
    const sunsets = d.sunset;
    if (Array.isArray(sunsets) && typeof sunsets[0] === 'string') {
      sunset = formatSunsetLocal(sunsets[0]);
    }
  }

  const uvRaw = c.uv_index;
  let uv: string;
  if (typeof uvRaw === 'number' && Number.isFinite(uvRaw)) {
    uv = uvRaw % 1 === 0 ? String(uvRaw) : uvRaw.toFixed(1);
  } else {
    uv = '—';
  }

  return {
    temperature: temp,
    humidity: Math.round(hum),
    wind: `${Math.round(windKmh)} km/h`,
    uv,
    sunset,
  };
}

/**
 * Attempts one fetch + cache write. Never throws; on failure the previous cache file remains.
 */
export async function updateWeatherCache(): Promise<void> {
  try {
    const res = await fetch(buildOpenMeteoForecastUrl());
    if (!res.ok) return;
    const json: unknown = await res.json();
    const mapped = mapOpenMeteoToWeather(json);
    if (!mapped) return;
    writeCachedWeather({
      ...mapped,
      timestamp: Date.now(),
    });
  } catch {
    /* network, parse, or validation failure — keep existing cache */
  }
}

/**
 * Best-effort refresh, then always returns whatever {@link readCachedWeather} resolves
 * (live snapshot, stale file, or in-memory default). Safe for page-level orchestration later.
 */
export async function getWeatherWithFallback(): Promise<WeatherData> {
  await updateWeatherCache();
  return readCachedWeather();
}
