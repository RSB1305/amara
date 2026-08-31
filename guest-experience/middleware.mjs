import { ExperienceAccessDenied, revalidateEligibleBooking } from './bookings.mjs';
import {
  clearExperienceCookie,
  createExperienceClaims,
  createExperienceCookie,
  getExperienceSecret,
  openExperienceSession,
  readExperienceCookie,
  sealExperienceSession
} from './session.mjs';

const LANGUAGES = new Set(['en', 'de', 'nl', 'sv']);
const GUIDE_CSP = "default-src 'self'; base-uri 'self'; object-src 'none'; frame-ancestors 'none'; form-action 'self'; script-src 'self' 'unsafe-inline'; script-src-attr 'none'; style-src 'self' 'unsafe-inline'; font-src 'self'; img-src 'self' data:; connect-src 'self'; manifest-src 'self'";
const PERMISSIONS_POLICY = 'accelerometer=(), camera=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), payment=(), usb=(), browsing-topics=()';

function routeLanguage(pathname) {
  const first = pathname.split('/').filter(Boolean)[0];
  return LANGUAGES.has(first) ? first : 'es';
}

function landingUrl(request, reason) {
  const url = new URL(request.url);
  const lang = routeLanguage(url.pathname);
  url.pathname = lang === 'es' ? '/amara-experience' : `/${lang}/amara-experience`;
  url.search = `?reason=${encodeURIComponent(reason)}`;
  return url;
}

function redirect(request, reason) {
  const headers = new Headers({
    Location: landingUrl(request, reason).toString(),
    'Cache-Control': 'no-store, private',
    'X-Robots-Tag': 'noindex, nofollow, noarchive',
    'Referrer-Policy': 'no-referrer',
    'X-Frame-Options': 'DENY',
    'Permissions-Policy': PERMISSIONS_POLICY,
    'Content-Security-Policy': GUIDE_CSP
  });
  headers.append('Set-Cookie', clearExperienceCookie());
  return new Response(null, { status: 302, headers });
}

function protectResponse(response, refreshedCookie) {
  const headers = new Headers(response.headers);
  headers.set('Cache-Control', 'no-store, private');
  headers.set('X-Robots-Tag', 'noindex, nofollow, noarchive');
  headers.set('Referrer-Policy', 'no-referrer');
  headers.set('X-Content-Type-Options', 'nosniff');
  headers.set('X-Frame-Options', 'DENY');
  headers.set('Permissions-Policy', PERMISSIONS_POLICY);
  headers.set('Content-Security-Policy', GUIDE_CSP);
  if (refreshedCookie) headers.append('Set-Cookie', refreshedCookie);
  return new Response(response.body, { status: response.status, statusText: response.statusText, headers });
}

export async function handleExperienceGuide(context) {
  const { request, env } = context;
  try {
    const secret = getExperienceSecret(env);
    const token = readExperienceCookie(request);
    if (!token) return redirect(request, 'session');
    const claims = await openExperienceSession(token, secret);
    const now = Math.floor(Date.now() / 1000);
    if (claims.exp < now) return redirect(request, 'session');

    let refreshedCookie;
    if (claims.revalidateAfter <= now) {
      const booking = await revalidateEligibleBooking(env?.LODGIFY_API_KEY, claims.bookingId);
      const refreshedClaims = createExperienceClaims(booking, claims.lang, now);
      refreshedCookie = createExperienceCookie(
        await sealExperienceSession(refreshedClaims, secret),
        refreshedClaims.exp,
      );
    }

    return protectResponse(await context.next(), refreshedCookie);
  } catch (error) {
    return redirect(request, error instanceof ExperienceAccessDenied ? 'session' : 'unavailable');
  }
}
