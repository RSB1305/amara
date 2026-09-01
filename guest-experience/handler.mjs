import { ExperienceAccessDenied, findUniqueEligibleBooking, validateAccessInput } from './bookings.mjs';
import { consumeAccessAttempt } from './rate-limit.mjs';
import { experienceGuideHubHref } from './guide-routes.mjs';
import {
  ExperienceSessionError,
  clearExperienceCookie,
  createExperienceClaims,
  createExperienceCookie,
  getExperienceSecret,
  sealExperienceSession
} from './session.mjs';

const JSON_HEADERS = {
  'Content-Type': 'application/json; charset=utf-8',
  'Cache-Control': 'no-store',
  'X-Content-Type-Options': 'nosniff',
  'Referrer-Policy': 'no-referrer',
  'X-Frame-Options': 'DENY',
  'Permissions-Policy': 'accelerometer=(), camera=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), payment=(), usb=(), browsing-topics=()',
  'Content-Security-Policy': "default-src 'none'; base-uri 'none'; frame-ancestors 'none'"
};

function json(status, code, cookie, payload = {}) {
  const headers = new Headers(JSON_HEADERS);
  if (cookie) headers.append('Set-Cookie', cookie);
  return new Response(JSON.stringify({ ok: status >= 200 && status < 300, code, ...payload }), { status, headers });
}

function sameOrigin(request) {
  const origin = request.headers.get('Origin');
  return origin !== null && origin === new URL(request.url).origin;
}

async function readBoundedJson(request) {
  const contentType = request.headers.get('Content-Type') ?? '';
  const length = Number.parseInt(request.headers.get('Content-Length') ?? '0', 10);
  if (!contentType.toLowerCase().startsWith('application/json') || length > 2048) throw new ExperienceAccessDenied();
  const reader = request.body?.getReader();
  if (!reader) throw new ExperienceAccessDenied();
  const chunks = [];
  let size = 0;
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    size += value.byteLength;
    if (size > 2048) {
      await reader.cancel();
      throw new ExperienceAccessDenied();
    }
    chunks.push(value);
  }
  const bytes = new Uint8Array(size);
  let offset = 0;
  for (const chunk of chunks) { bytes.set(chunk, offset); offset += chunk.byteLength; }
  try {
    return JSON.parse(new TextDecoder().decode(bytes));
  } catch {
    throw new ExperienceAccessDenied();
  }
}

export async function handleExperienceSession(context) {
  const { request, env } = context;
  if (request.method === 'DELETE') {
    if (!sameOrigin(request)) return json(403, 'access_denied');
    return json(200, 'session_closed', clearExperienceCookie());
  }
  if (request.method !== 'POST') {
    return new Response(null, { status: 405, headers: { ...JSON_HEADERS, Allow: 'POST, DELETE' } });
  }
  if (!sameOrigin(request)) return json(403, 'access_denied');

  try {
    const secret = getExperienceSecret(env);
    if (!await consumeAccessAttempt(request, env)) return json(429, 'access_denied');
    const input = validateAccessInput(await readBoundedJson(request));
    const booking = await findUniqueEligibleBooking(env?.LODGIFY_API_KEY, input);
    const claims = createExperienceClaims(booking, input.lang);
    const token = await sealExperienceSession(claims, secret);
    return json(
      200,
      'session_open',
      createExperienceCookie(token, claims.exp),
      { guideHref: experienceGuideHubHref(claims.stay, claims.lang) }
    );
  } catch (error) {
    if (error instanceof ExperienceAccessDenied) return json(401, 'access_denied');
    if (error instanceof ExperienceSessionError) return json(503, 'unavailable');
    return json(503, 'unavailable');
  }
}
