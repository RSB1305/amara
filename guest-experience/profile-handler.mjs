import {
  ExperienceSessionError,
  getExperienceSecret,
  openExperienceSession,
  readExperienceCookie
} from './session.mjs';

const JSON_HEADERS = {
  'Content-Type': 'application/json; charset=utf-8',
  'Cache-Control': 'no-store, private',
  'X-Content-Type-Options': 'nosniff',
  'Referrer-Policy': 'no-referrer',
  'X-Frame-Options': 'DENY',
  'Permissions-Policy': 'accelerometer=(), camera=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), payment=(), usb=(), browsing-topics=()',
  'Content-Security-Policy': "default-src 'none'; base-uri 'none'; frame-ancestors 'none'"
};

function json(status, payload = { firstName: 'Guest' }) {
  return new Response(JSON.stringify(payload), { status, headers: JSON_HEADERS });
}

/**
 * Wi-Fi credentials of the booked stay, read from the server-side table in the
 * `AMARA_GUEST_WIFI` secret: JSON keyed by stay id, each `{ network, password }`.
 * The table never enters the repository or the static guide pages; the guide
 * shows the password only through this authenticated, no-store response and
 * only for the stay the session was opened for. Any malformed or missing entry
 * leaves the response without Wi-Fi, so the guide keeps its support fallback.
 */
function readGuestWifi(env, stay) {
  const raw = env?.AMARA_GUEST_WIFI;
  if (typeof raw !== 'string' || !raw.trim() || typeof stay !== 'string') return undefined;
  try {
    const table = JSON.parse(raw);
    const entry = table && typeof table === 'object' ? table[stay] : undefined;
    if (!entry || typeof entry.network !== 'string' || typeof entry.password !== 'string') return undefined;
    if (!entry.network.trim() || !entry.password) return undefined;
    return { network: entry.network.trim(), password: entry.password };
  } catch {
    return undefined;
  }
}

function isSameOriginRequest(request) {
  const origin = request.headers.get('Origin');
  if (origin !== null && origin !== new URL(request.url).origin) return false;
  const fetchSite = request.headers.get('Sec-Fetch-Site');
  return fetchSite === null || fetchSite === 'same-origin';
}

export async function handleExperienceProfile(context) {
  const { request, env } = context;
  if (request.method !== 'GET') {
    return new Response(null, { status: 405, headers: { ...JSON_HEADERS, Allow: 'GET' } });
  }
  if (!isSameOriginRequest(request)) return json(403);

  try {
    const secret = getExperienceSecret(env);
    const token = readExperienceCookie(request);
    if (!token) return json(401);
    const claims = await openExperienceSession(token, secret);
    if (claims.exp < Math.floor(Date.now() / 1000)) return json(401);
    const wifi = readGuestWifi(env, claims.stay);
    return json(200, { firstName: claims.guestFirstName || 'Guest', ...(wifi ? { wifi } : {}) });
  } catch (error) {
    return json(error instanceof ExperienceSessionError && error.code === 'invalid_session' ? 401 : 503);
  }
}
