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
import {
  experienceAccessHref,
  experienceGuideHubHref,
  experienceGuideRootHref,
  experienceRouteLanguage
} from './guide-routes.mjs';

const GUIDE_CSP = "default-src 'self'; base-uri 'self'; object-src 'none'; frame-ancestors 'none'; form-action 'self'; script-src 'self' 'unsafe-inline'; script-src-attr 'none'; style-src 'self' 'unsafe-inline'; font-src 'self'; img-src 'self' data:; connect-src 'self'; manifest-src 'self'";
const PERMISSIONS_POLICY = 'accelerometer=(), camera=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), payment=(), usb=(), browsing-topics=()';

function accessUrl(request, reason) {
  const url = new URL(request.url);
  const lang = experienceRouteLanguage(url.pathname);
  url.pathname = experienceAccessHref(lang);
  url.search = `?reason=${encodeURIComponent(reason)}`;
  return url;
}

function redirect(request, reason) {
  const headers = new Headers({
    Location: accessUrl(request, reason).toString(),
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

    const lang = experienceRouteLanguage(new URL(request.url).pathname);

    let refreshedCookie;
    if (claims.revalidateAfter <= now) {
      const booking = await revalidateEligibleBooking(env?.LODGIFY_API_KEY, claims.bookingId);
      const refreshedClaims = createExperienceClaims(booking, claims.lang, now);
      refreshedCookie = createExperienceCookie(
        await sealExperienceSession(refreshedClaims, secret),
        refreshedClaims.exp,
      );
    }

    if (new URL(request.url).pathname.replace(/\/$/, '') === experienceGuideRootHref(lang)) {
      return protectResponse(new Response(null, {
        status: 302,
        headers: { Location: experienceGuideHubHref(claims.stay, lang) }
      }), refreshedCookie);
    }

    return protectResponse(await context.next(), refreshedCookie);
  } catch (error) {
    return redirect(request, error instanceof ExperienceAccessDenied ? 'session' : 'unavailable');
  }
}
