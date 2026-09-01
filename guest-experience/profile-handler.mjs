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

function json(status, firstName = 'Guest') {
  return new Response(JSON.stringify({ firstName }), { status, headers: JSON_HEADERS });
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
    return json(200, claims.guestFirstName || 'Guest');
  } catch (error) {
    return json(error instanceof ExperienceSessionError && error.code === 'invalid_session' ? 401 : 503);
  }
}
