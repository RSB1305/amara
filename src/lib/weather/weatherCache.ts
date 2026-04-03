/**
 * Server-side weather cache (preparation layer).
 *
 * Persists the last known weather snapshot as JSON so a future integration
 * can read/write without touching the UI or adding client JS.
 *
 * Contract: read/write never throw — failures fall back to defaults or no-op
 * so Astro pages and builds stay stable even when /tmp is missing or unwritable.
 */
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname } from 'node:path';

/** Canonical shape for a cached weather snapshot (API wiring comes later). */
export type WeatherData = {
  temperature: number;
  humidity: number;
  wind: string;
  uv: string;
  sunset: string;
  timestamp: number;
};

/** Fixed path per product spec (deployment target is expected to provide /tmp). */
const CACHE_FILE_PATH = '/tmp/amara-weather-cache.json';

/** Neutral placeholder used when no cache exists or data is invalid. */
export const DEFAULT_WEATHER: WeatherData = Object.freeze({
  temperature: 22,
  humidity: 55,
  wind: '—',
  uv: '—',
  sunset: '—',
  timestamp: 0,
});

function cloneDefault(): WeatherData {
  return { ...DEFAULT_WEATHER };
}

function isWeatherData(value: unknown): value is WeatherData {
  if (value === null || typeof value !== 'object') return false;
  const o = value as Record<string, unknown>;
  return (
    typeof o.temperature === 'number' &&
    Number.isFinite(o.temperature) &&
    typeof o.humidity === 'number' &&
    Number.isFinite(o.humidity) &&
    typeof o.wind === 'string' &&
    typeof o.uv === 'string' &&
    typeof o.sunset === 'string' &&
    typeof o.timestamp === 'number' &&
    Number.isFinite(o.timestamp)
  );
}

/**
 * Returns cached weather if the file is valid JSON matching {@link WeatherData};
 * otherwise returns a fresh copy of {@link DEFAULT_WEATHER}.
 */
export function readCachedWeather(): WeatherData {
  try {
    if (!existsSync(CACHE_FILE_PATH)) {
      return cloneDefault();
    }
    const raw = readFileSync(CACHE_FILE_PATH, 'utf8');
    const parsed: unknown = JSON.parse(raw);
    if (!isWeatherData(parsed)) {
      return cloneDefault();
    }
    return {
      temperature: parsed.temperature,
      humidity: parsed.humidity,
      wind: parsed.wind,
      uv: parsed.uv,
      sunset: parsed.sunset,
      timestamp: parsed.timestamp,
    };
  } catch {
    return cloneDefault();
  }
}

/**
 * Writes the snapshot to disk. Swallows all errors (permissions, full disk, etc.)
 * so callers never need try/catch and rendering cannot be interrupted.
 */
export function writeCachedWeather(data: WeatherData): void {
  try {
    const dir = dirname(CACHE_FILE_PATH);
    if (!existsSync(dir)) {
      mkdirSync(dir, { recursive: true });
    }
    const payload: WeatherData = {
      temperature: data.temperature,
      humidity: data.humidity,
      wind: data.wind,
      uv: data.uv,
      sunset: data.sunset,
      timestamp: data.timestamp,
    };
    writeFileSync(CACHE_FILE_PATH, `${JSON.stringify(payload)}\n`, 'utf8');
  } catch {
    /* intentionally empty */
  }
}
