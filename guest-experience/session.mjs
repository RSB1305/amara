const COOKIE_NAME = '__Host-amara_experience';
const TOKEN_VERSION = 'v1';
const TOKEN_AAD = new TextEncoder().encode('AMARA Experience session v1');
const SESSION_REVALIDATION_SECONDS = 60 * 60;
const MADRID_TIME_ZONE = 'Europe/Madrid';

export class ExperienceSessionError extends Error {
  constructor(code) {
    super(code);
    this.name = 'ExperienceSessionError';
    this.code = code;
  }
}

export function getExperienceSecret(env) {
  const secret = typeof env?.AMARA_EXPERIENCE_SESSION_SECRET === 'string'
    ? env.AMARA_EXPERIENCE_SESSION_SECRET.trim()
    : '';
  if (secret.length < 32) throw new ExperienceSessionError('session_unavailable');
  return secret;
}

function encodeBase64Url(bytes) {
  let binary = '';
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return btoa(binary).replaceAll('+', '-').replaceAll('/', '_').replace(/=+$/g, '');
}

function decodeBase64Url(value) {
  if (typeof value !== 'string' || !/^[A-Za-z0-9_-]+$/.test(value)) {
    throw new ExperienceSessionError('invalid_session');
  }
  const padded = value.replaceAll('-', '+').replaceAll('_', '/') + '='.repeat((4 - value.length % 4) % 4);
  try {
    return Uint8Array.from(atob(padded), (character) => character.charCodeAt(0));
  } catch {
    throw new ExperienceSessionError('invalid_session');
  }
}

async function importSessionKey(secret) {
  const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(secret));
  return crypto.subtle.importKey('raw', digest, { name: 'AES-GCM' }, false, ['encrypt', 'decrypt']);
}

export async function sealExperienceSession(claims, secret) {
  const key = await importSessionKey(secret);
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const plaintext = new TextEncoder().encode(JSON.stringify(claims));
  const ciphertext = await crypto.subtle.encrypt(
    { name: 'AES-GCM', iv, additionalData: TOKEN_AAD },
    key,
    plaintext,
  );
  return `${TOKEN_VERSION}.${encodeBase64Url(iv)}.${encodeBase64Url(new Uint8Array(ciphertext))}`;
}

export async function openExperienceSession(token, secret) {
  const parts = typeof token === 'string' ? token.split('.') : [];
  if (parts.length !== 3 || parts[0] !== TOKEN_VERSION) {
    throw new ExperienceSessionError('invalid_session');
  }
  try {
    const key = await importSessionKey(secret);
    const plaintext = await crypto.subtle.decrypt(
      { name: 'AES-GCM', iv: decodeBase64Url(parts[1]), additionalData: TOKEN_AAD },
      key,
      decodeBase64Url(parts[2]),
    );
    const claims = JSON.parse(new TextDecoder().decode(plaintext));
    if (!isValidClaims(claims)) throw new ExperienceSessionError('invalid_session');
    return claims;
  } catch (error) {
    if (error instanceof ExperienceSessionError) throw error;
    throw new ExperienceSessionError('invalid_session');
  }
}

function isValidClaims(claims) {
  return claims
    && claims.v === 1
    && typeof claims.bookingId === 'string'
    && typeof claims.stay === 'string'
    && typeof claims.destination === 'string'
    && ['en', 'de', 'es', 'nl', 'sv'].includes(claims.lang)
    && (claims.guestFirstName === undefined || (
      typeof claims.guestFirstName === 'string'
      && claims.guestFirstName.length >= 1
      && claims.guestFirstName.length <= 80
    ))
    && Number.isInteger(claims.exp)
    && Number.isInteger(claims.revalidateAfter);
}

export function readExperienceCookie(request) {
  const header = request.headers.get('Cookie') ?? '';
  for (const part of header.split(';')) {
    const separator = part.indexOf('=');
    if (separator < 0) continue;
    if (part.slice(0, separator).trim() === COOKIE_NAME) {
      return part.slice(separator + 1).trim();
    }
  }
  return undefined;
}

export function createExperienceCookie(token, expiresAtEpochSeconds) {
  const maxAge = Math.max(0, expiresAtEpochSeconds - Math.floor(Date.now() / 1000));
  return `${COOKIE_NAME}=${token}; Path=/; Max-Age=${maxAge}; HttpOnly; Secure; SameSite=Lax`;
}

export function clearExperienceCookie() {
  return `${COOKIE_NAME}=; Path=/; Max-Age=0; HttpOnly; Secure; SameSite=Lax`;
}

function timeZoneParts(date) {
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone: MADRID_TIME_ZONE,
    year: 'numeric', month: '2-digit', day: '2-digit',
    hour: '2-digit', minute: '2-digit', second: '2-digit', hourCycle: 'h23'
  }).formatToParts(date);
  return Object.fromEntries(parts.filter((part) => part.type !== 'literal').map((part) => [part.type, Number(part.value)]));
}

function zonedLocalTimeToEpoch({ year, month, day, hour = 0, minute = 0, second = 0 }) {
  const targetUtc = Date.UTC(year, month - 1, day, hour, minute, second);
  let candidate = targetUtc;
  for (let attempt = 0; attempt < 3; attempt += 1) {
    const actual = timeZoneParts(new Date(candidate));
    const representedUtc = Date.UTC(actual.year, actual.month - 1, actual.day, actual.hour, actual.minute, actual.second);
    candidate += targetUtc - representedUtc;
  }
  return candidate;
}

export function madridDateString(date = new Date()) {
  const parts = timeZoneParts(date);
  return `${String(parts.year).padStart(4, '0')}-${String(parts.month).padStart(2, '0')}-${String(parts.day).padStart(2, '0')}`;
}

export function departureExpiryEpoch(departure) {
  const [year, month, day] = departure.split('-').map(Number);
  const nextDay = new Date(Date.UTC(year, month - 1, day + 1));
  return Math.floor(zonedLocalTimeToEpoch({
    year: nextDay.getUTCFullYear(),
    month: nextDay.getUTCMonth() + 1,
    day: nextDay.getUTCDate()
  }) / 1000) - 1;
}

export function createExperienceClaims(booking, lang, nowEpochSeconds = Math.floor(Date.now() / 1000)) {
  const exp = departureExpiryEpoch(booking.departure);
  const explicitFirstName = typeof booking.explicitFirstName === 'string'
    ? booking.explicitFirstName
    : '';
  const fullNameFirstPart = typeof booking.fullName === 'string'
    ? booking.fullName.trim().split(/\s+/u)[0]
    : '';
  const guestFirstName = (explicitFirstName || fullNameFirstPart)
    .normalize('NFC')
    .replace(/[\p{Cc}\p{Cf}]/gu, '')
    .trim()
    .replace(/\s+/gu, ' ')
    .slice(0, 80) || 'Guest';
  return {
    v: 1,
    bookingId: String(booking.id),
    stay: booking.stay,
    destination: booking.destination,
    lang,
    guestFirstName,
    exp,
    revalidateAfter: Math.min(exp, nowEpochSeconds + SESSION_REVALIDATION_SECONDS)
  };
}
