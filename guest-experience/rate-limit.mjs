import { getExperienceSecret } from './session.mjs';

const WINDOW_SECONDS = 15 * 60;
const MAX_ATTEMPTS = 8;

function hex(bytes) {
  return [...new Uint8Array(bytes)].map((byte) => byte.toString(16).padStart(2, '0')).join('');
}

export async function consumeAccessAttempt(request, env, cache = globalThis.caches?.default) {
  if (!cache) throw new Error('Cloudflare cache is unavailable.');
  const secret = getExperienceSecret(env);
  const address = request.headers.get('CF-Connecting-IP') ?? 'unknown';
  const bucket = Math.floor(Date.now() / 1000 / WINDOW_SECONDS);
  const digest = await crypto.subtle.digest(
    'SHA-256',
    new TextEncoder().encode(`${secret}\n${address}\n${bucket}`),
  );
  const keyUrl = new URL(request.url);
  keyUrl.pathname = `/.amara-internal/experience-attempt/${hex(digest)}`;
  keyUrl.search = '';
  const key = new Request(keyUrl);
  const existing = await cache.match(key);
  const count = existing ? Number.parseInt(await existing.text(), 10) : 0;
  if (Number.isFinite(count) && count >= MAX_ATTEMPTS) return false;
  const response = new Response(String((Number.isFinite(count) ? count : 0) + 1), {
    headers: { 'Cache-Control': `max-age=${WINDOW_SECONDS}` }
  });
  await cache.put(key, response);
  return true;
}
