/**
 * AMARA website Worker: the server-owned routes of the otherwise static site.
 *
 * Astro builds the site into `dist/`, which Cloudflare serves as static assets
 * together with the `_headers` and `_redirects` rules from `public/`. This
 * script runs only for the paths listed under `assets.run_worker_first` in
 * `wrangler.jsonc`: the GET-only booking and weather gateways, the Guest Guide
 * session endpoints and the gated Guest Guide pages, whose static documents are
 * released only after the middleware has verified the session cookie. No other
 * request reaches this script.
 *
 * The gateways and the guest-experience modules keep the Cloudflare Pages
 * Functions calling convention (`handler(context)` with `request`, `env`,
 * `waitUntil` and `next`), so they are unchanged. This file is the dispatch that
 * the former `functions/` directory expressed through its file layout.
 */
import { createBookingRoute } from '../booking-gateway/gateway.mjs';
import { GUEST_GUIDE_SEGMENTS, guestGuideRootHref } from '../guest-experience/guide-routes.mjs';
import { handleExperienceSession } from '../guest-experience/handler.mjs';
import { handleExperienceGuide } from '../guest-experience/middleware.mjs';
import { handleExperienceProfile } from '../guest-experience/profile-handler.mjs';
import { createAemetForecastRoute } from '../weather-gateway/aemet-forecast.mjs';
import { createKiteBriefingRoute } from '../weather-gateway/aemet-kite.mjs';
import { createZoneWarningsRoute } from '../weather-gateway/aemet-warnings.mjs';
import { createGuideForecastRoute } from '../weather-gateway/open-meteo-forecast.mjs';

/** Former `onRequest` functions: the handler decides about the method itself. */
const ANY_METHOD_ROUTES = new Map([
  ['/api/booking/availability', createBookingRoute('availability')],
  ['/api/booking/checkout', createBookingRoute('checkout')],
  ['/api/booking/quote', createBookingRoute('quote')],
  ['/api/booking/rates', createBookingRoute('rates')],
  ['/api/booking/search-calendar', createBookingRoute('search-calendar')],
  ['/api/guest/profile', handleExperienceProfile],
  ['/api/guest/session', handleExperienceSession]
]);

/** Former `onRequestGet` functions: only GET reaches the handler. */
const GET_ONLY_ROUTES = new Map([
  ['/api/weather/frigiliana', createAemetForecastRoute({ destination: 'frigiliana' })],
  ['/api/weather/nerja', createAemetForecastRoute({ destination: 'nerja' })],
  ['/api/weather/tarifa', createAemetForecastRoute({ destination: 'tarifa' })],
  ['/api/weather/guide-forecast', createGuideForecastRoute()],
  ['/api/weather/tarifa-kite', createKiteBriefingRoute({ site: 'tarifa' })],
  ['/api/weather/tarifa-warnings', createZoneWarningsRoute({ zone: 'tarifa' })]
]);

/**
 * The localized Guest Guide roots (`/de/gaesteguide/` and siblings), formerly
 * the `_middleware.js` directories under `functions/`. The middleware itself
 * lets the public landing and access pages through; `run_worker_first` keeps
 * the access pages out of the Worker in the first place.
 */
const GUARDED_GUIDE_PREFIXES = Object.keys(GUEST_GUIDE_SEGMENTS).map(
  (lang) => `${guestGuideRootHref(lang)}/`
);

/** The subset of the Pages Functions `EventContext` the route modules use. */
function functionContext(request, env, ctx) {
  return {
    request,
    env,
    params: {},
    data: {},
    waitUntil: (promise) => ctx.waitUntil(promise),
    passThroughOnException: () => ctx.passThroughOnException(),
    next: () => env.ASSETS.fetch(request)
  };
}

export default {
  async fetch(request, env, ctx) {
    const { pathname } = new URL(request.url);
    const context = functionContext(request, env, ctx);

    const handler = ANY_METHOD_ROUTES.get(pathname);
    if (handler) return handler(context);

    const getHandler = GET_ONLY_ROUTES.get(pathname);
    if (getHandler) {
      if (request.method !== 'GET') {
        return new Response(null, { status: 405, headers: { Allow: 'GET', 'Cache-Control': 'no-store' } });
      }
      return getHandler(context);
    }

    if (GUARDED_GUIDE_PREFIXES.some((prefix) => pathname.startsWith(prefix))) {
      return handleExperienceGuide(context);
    }

    return env.ASSETS.fetch(request);
  }
};
