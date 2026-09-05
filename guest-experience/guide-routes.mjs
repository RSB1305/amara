/**
 * AMARA Guest Guide routes (de AMARA Gästeguide). The protected guest area is
 * file-routed and intentionally outside the public route manifest; this module is
 * the single owner of its localized path system for the Astro pages, the Cloudflare
 * Functions, the language switcher, the route policy, the structured-data audit and
 * the tests alike.
 *
 * Path system since 2026-09-05 (DR-GUEST-004), mirroring the public site:
 *
 *   /de/gaesteguide                      public landing (manifest route `amara-experience`)
 *   /de/gaesteguide/zugang               access page (first name + arrival date)
 *   /de/gaesteguide/zaid                 the stay's Guest Welcome hub
 *   /de/gaesteguide/zaid/unterkunft      the stay's home information
 *   /de/gaesteguide/frigiliana/straende  a destination topic
 *   /de/gaesteguide/frigiliana/experience the personal recommendations (AMARA Experience)
 *
 * The root and every segment below it are localized; the stay and destination
 * names are identities and stay the same in every language. Entry slugs remain the
 * internal ids of the content modules; only the rendered paths change.
 */
import { buildPublicRoutePath } from '../src/lib/publicRouteManifest.mjs';

export const GUEST_GUIDE_SEGMENTS = Object.freeze({
  es: 'guia-huesped',
  en: 'guest-guide',
  de: 'gaesteguide',
  nl: 'gastengids',
  sv: 'gastguide'
});

export const GUEST_GUIDE_ACCESS_SEGMENTS = Object.freeze({
  es: 'acceso',
  en: 'access',
  de: 'zugang',
  nl: 'toegang',
  sv: 'atkomst'
});

const STAY_HOME_SEGMENTS = Object.freeze({
  es: 'alojamiento',
  en: 'apartment',
  de: 'unterkunft',
  nl: 'accommodatie',
  sv: 'boende'
});

const TOPIC_SEGMENTS = Object.freeze({
  essentials: { es: 'esencial', en: 'essentials', de: 'wichtiges', nl: 'praktisch', sv: 'praktiskt' },
  experience: { es: 'experience', en: 'experience', de: 'experience', nl: 'experience', sv: 'experience' },
  beaches: { es: 'playas', en: 'beaches', de: 'straende', nl: 'stranden', sv: 'strander' },
  breakfast: { es: 'desayuno', en: 'breakfast', de: 'fruehstueck', nl: 'ontbijt', sv: 'frukost' },
  'day-trips': { es: 'excursiones', en: 'day-trips', de: 'ausfluege', nl: 'uitstapjes', sv: 'utflykter' },
  festivals: { es: 'fiestas', en: 'festivals', de: 'feste', nl: 'feesten', sv: 'fester' },
  hiking: { es: 'senderismo', en: 'hiking', de: 'wandern', nl: 'wandelen', sv: 'vandring' },
  restaurants: { es: 'restaurantes', en: 'restaurants', de: 'restaurants', nl: 'restaurants', sv: 'restauranger' },
  sightseeing: { es: 'que-ver', en: 'sightseeing', de: 'sehenswertes', nl: 'bezienswaardigheden', sv: 'sevardheter' },
  wellness: { es: 'wellness', en: 'wellness', de: 'wellness', nl: 'wellness', sv: 'wellness' },
  adventure: { es: 'aventura', en: 'adventure', de: 'abenteuer', nl: 'avontuur', sv: 'aventyr' },
  activities: { es: 'actividades', en: 'activities', de: 'aktivitaeten', nl: 'activiteiten', sv: 'aktiviteter' },
  'food-drink': { es: 'comer-y-beber', en: 'food-and-drink', de: 'essen-und-trinken', nl: 'eten-en-drinken', sv: 'mat-och-dryck' },
  kitesurfing: { es: 'kitesurf', en: 'kitesurfing', de: 'kitesurfen', nl: 'kitesurfen', sv: 'kitesurfing' },
  nightlife: { es: 'vida-nocturna', en: 'nightlife', de: 'nachtleben', nl: 'nachtleven', sv: 'nattliv' },
  'flamenco-bachata': { es: 'flamenco-bachata', en: 'flamenco-bachata', de: 'flamenco-bachata', nl: 'flamenco-bachata', sv: 'flamenco-bachata' }
});

/** Every guest-guide entry slug (content id) and its place in the path system. */
export const GUEST_GUIDE_PAGES = Object.freeze({
  'guestwelcome-frigiliana-farah': { kind: 'hub', stay: 'farah' },
  'guestwelcome-frigiliana-lounis': { kind: 'hub', stay: 'lounis' },
  'guestwelcome-frigiliana-zaid': { kind: 'hub', stay: 'zaid' },
  'guestwelcome-frigiliana-maha': { kind: 'hub', stay: 'maha' },
  'guestwelcome-nerja-playa': { kind: 'hub', stay: 'playa' },
  'guestwelcome-tarifa-family-surf': { kind: 'hub', stay: 'family-surf' },
  'guesthome-frigiliana-farah': { kind: 'stay-home', stay: 'farah' },
  'guesthome-frigiliana-lounis': { kind: 'stay-home', stay: 'lounis' },
  'guesthome-frigiliana-zaid': { kind: 'stay-home', stay: 'zaid' },
  'guesthome-frigiliana-maha': { kind: 'stay-home', stay: 'maha' },
  'guesthome-nerja-playa': { kind: 'stay-home', stay: 'playa' },
  'tarifa-guest-apartment': { kind: 'stay-home', stay: 'family-surf' },
  'frigiliana-guest-essentials': { kind: 'topic', destination: 'frigiliana', topic: 'essentials' },
  'frigiliana-guest-recommendations': { kind: 'topic', destination: 'frigiliana', topic: 'experience' },
  'frigiliana-guest-beaches': { kind: 'topic', destination: 'frigiliana', topic: 'beaches' },
  'frigiliana-guest-breakfast': { kind: 'topic', destination: 'frigiliana', topic: 'breakfast' },
  'frigiliana-guest-day-trips': { kind: 'topic', destination: 'frigiliana', topic: 'day-trips' },
  'frigiliana-guest-festivals': { kind: 'topic', destination: 'frigiliana', topic: 'festivals' },
  'frigiliana-guest-hiking': { kind: 'topic', destination: 'frigiliana', topic: 'hiking' },
  'frigiliana-guest-restaurants': { kind: 'topic', destination: 'frigiliana', topic: 'restaurants' },
  'frigiliana-guest-sightseeing': { kind: 'topic', destination: 'frigiliana', topic: 'sightseeing' },
  'frigiliana-guest-wellness': { kind: 'topic', destination: 'frigiliana', topic: 'wellness' },
  'frigiliana-guest-flamenco-bachata': { kind: 'topic', destination: 'frigiliana', topic: 'flamenco-bachata' },
  'nerja-guest-essentials': { kind: 'topic', destination: 'nerja', topic: 'essentials' },
  'nerja-guest-adventure': { kind: 'topic', destination: 'nerja', topic: 'adventure' },
  'nerja-guest-breakfast': { kind: 'topic', destination: 'nerja', topic: 'breakfast' },
  'nerja-guest-restaurants': { kind: 'topic', destination: 'nerja', topic: 'restaurants' },
  'nerja-guest-nightlife': { kind: 'topic', destination: 'nerja', topic: 'nightlife' },
  'tarifa-guest-local-essentials': { kind: 'topic', destination: 'tarifa', topic: 'essentials' },
  'tarifa-guest-local-guide': { kind: 'topic', destination: 'tarifa', topic: 'experience' },
  'tarifa-guest-activities': { kind: 'topic', destination: 'tarifa', topic: 'activities' },
  'tarifa-guest-beaches': { kind: 'topic', destination: 'tarifa', topic: 'beaches' },
  'tarifa-guest-food-drink': { kind: 'topic', destination: 'tarifa', topic: 'food-drink' },
  'tarifa-guest-kitesurfing': { kind: 'topic', destination: 'tarifa', topic: 'kitesurfing' },
  'tarifa-guest-nightlife': { kind: 'topic', destination: 'tarifa', topic: 'nightlife' },
  'tarifa-guest-sightseeing': { kind: 'topic', destination: 'tarifa', topic: 'sightseeing' }
});

/** Segment used before 2026-09-05; every old path is redirected in public/_redirects. */
export const LEGACY_GUEST_GUIDE_SEGMENT = 'amara-experience';

const DEFAULT_LANGUAGE = 'es';
const LANGUAGES = Object.freeze(['es', 'en', 'de', 'nl', 'sv']);
const LANGUAGE_PREFIXES = new Set(['en', 'de', 'nl', 'sv']);

/** Booking stay id (session claims) → the stay's Guest Welcome hub slug. */
const EXPERIENCE_HUB_BY_STAY = Object.freeze({
  farah: 'guestwelcome-frigiliana-farah',
  lounis: 'guestwelcome-frigiliana-lounis',
  zaid: 'guestwelcome-frigiliana-zaid',
  maha: 'guestwelcome-frigiliana-maha',
  playa: 'guestwelcome-nerja-playa',
  tarifa: 'guestwelcome-tarifa-family-surf'
});

function languageOf(lang) {
  return LANGUAGES.includes(lang) ? lang : DEFAULT_LANGUAGE;
}

export function guestGuideSegment(lang) {
  return GUEST_GUIDE_SEGMENTS[languageOf(lang)];
}

export function guestGuideAccessSegment(lang) {
  return GUEST_GUIDE_ACCESS_SEGMENTS[languageOf(lang)];
}

/**
 * The gated Guest Guide root: /de/gaesteguide and its localized siblings. The
 * access page and every entry are composed from it, so it stays put even though
 * the public marketing landing now lives under About. Booked-guest links in
 * booking e-mails point below this root and are unaffected.
 */
export function guestGuideRootHref(lang) {
  const language = languageOf(lang);
  const segment = GUEST_GUIDE_SEGMENTS[language];
  return LANGUAGE_PREFIXES.has(language) ? `/${language}/${segment}` : `/${segment}`;
}

/**
 * The public marketing landing of the Guest Guide. It is a normal route in the
 * manifest under About (route `amara-experience`, e.g. /de/ueber-uns/gaesteguide),
 * separate from the gated root above. Used for the "back to the guide page" link
 * on the access screen and as the guide's language-switch landing target.
 */
export function guestGuideLandingHref(lang) {
  return buildPublicRoutePath('amara-experience', languageOf(lang));
}

export function experienceAccessHref(lang) {
  return `${guestGuideRootHref(lang)}/${guestGuideAccessSegment(lang)}`;
}

/** Fallback target of the access form when the session cannot resolve a stay hub. */
export function experienceGuideRootHref(lang) {
  return guestGuideLandingHref(lang);
}

/** Path parts of one entry below the localized root, e.g. ['zaid', 'unterkunft']. */
export function guestGuideEntryPathParts(slug, lang) {
  const page = GUEST_GUIDE_PAGES[slug];
  if (!page) throw new Error(`Unknown Guest Guide entry: ${slug}`);
  const language = languageOf(lang);
  if (page.kind === 'hub') return [page.stay];
  if (page.kind === 'stay-home') return [page.stay, STAY_HOME_SEGMENTS[language]];
  return [page.destination, TOPIC_SEGMENTS[page.topic][language]];
}

export function experienceGuideEntryHref(slug, lang) {
  return `${guestGuideRootHref(lang)}/${guestGuideEntryPathParts(slug, lang).join('/')}`;
}

export function experienceGuideHubHref(stay, lang) {
  const slug = EXPERIENCE_HUB_BY_STAY[stay];
  if (!slug) throw new Error(`Unknown AMARA stay: ${stay}`);
  return experienceGuideEntryHref(slug, lang);
}

export function experienceRouteLanguage(pathname) {
  const first = pathname.split('/').filter(Boolean)[0];
  return LANGUAGE_PREFIXES.has(first) ? first : DEFAULT_LANGUAGE;
}

/** True for the current root segments and the legacy one. */
export function isGuestGuideSegment(segment) {
  return segment === LEGACY_GUEST_GUIDE_SEGMENT || Object.values(GUEST_GUIDE_SEGMENTS).includes(segment);
}

/** The legacy path of an entry (before 2026-09-05), used only to author redirects. */
export function legacyGuestGuideEntryHref(slug, lang) {
  const language = languageOf(lang);
  const root = LANGUAGE_PREFIXES.has(language)
    ? `/${language}/${LEGACY_GUEST_GUIDE_SEGMENT}`
    : `/${LEGACY_GUEST_GUIDE_SEGMENT}`;
  return `${root}/guide/${slug}`;
}

/**
 * What a pathname means inside the Guest Guide, or null outside it:
 * { lang, kind: 'landing' | 'access' | 'entry' | 'unknown', slug? }.
 * The legacy segment is understood too, so old links can be re-localized.
 */
export function resolveGuestGuidePath(pathname) {
  const parts = pathname.split('/').filter(Boolean);
  const lang = LANGUAGE_PREFIXES.has(parts[0]) ? parts.shift() : DEFAULT_LANGUAGE;
  const root = parts.shift();
  if (!root || !isGuestGuideSegment(root)) return null;
  if (root === LEGACY_GUEST_GUIDE_SEGMENT) {
    if (parts.length === 0) return { lang, kind: 'landing' };
    if (parts[0] === 'access') return { lang, kind: 'access' };
    if (parts[0] === 'guide' && parts[1] && GUEST_GUIDE_PAGES[parts[1]]) return { lang, kind: 'entry', slug: parts[1] };
    return { lang, kind: 'unknown' };
  }
  if (parts.length === 0) return { lang, kind: 'landing' };
  if (parts.length === 1 && parts[0] === GUEST_GUIDE_ACCESS_SEGMENTS[lang]) return { lang, kind: 'access' };
  const wanted = parts.join('/');
  for (const slug of Object.keys(GUEST_GUIDE_PAGES)) {
    if (guestGuideEntryPathParts(slug, lang).join('/') === wanted) return { lang, kind: 'entry', slug };
  }
  return { lang, kind: 'unknown' };
}

/** The same Guest Guide page in another language, or null when the path is not part of the guide. */
export function localizeGuestGuidePath(pathname, lang) {
  const resolved = resolveGuestGuidePath(pathname);
  if (!resolved) return null;
  if (resolved.kind === 'landing') return guestGuideLandingHref(lang);
  if (resolved.kind === 'access') return experienceAccessHref(lang);
  if (resolved.kind === 'entry') return experienceGuideEntryHref(resolved.slug, lang);
  return guestGuideLandingHref(lang);
}
