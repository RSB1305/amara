const EXPERIENCE_HUB_BY_STAY = Object.freeze({
  farah: 'guestwelcome-frigiliana-farah',
  lounis: 'guestwelcome-frigiliana-lounis',
  zaid: 'guestwelcome-frigiliana-zaid',
  maha: 'guestwelcome-frigiliana-maha',
  playa: 'guestwelcome-nerja-playa',
  tarifa: 'guestwelcome-tarifa-family-surf'
});

const LANGUAGE_PREFIXES = new Set(['en', 'de', 'nl', 'sv']);

export function experienceAccessHref(lang) {
  return lang === 'es' ? '/amara-experience/access' : `/${lang}/amara-experience/access`;
}

export function experienceGuideRootHref(lang) {
  return lang === 'es' ? '/amara-experience/guide' : `/${lang}/amara-experience/guide`;
}

export function experienceGuideEntryHref(slug, lang) {
  return `${experienceGuideRootHref(lang)}/${slug}`;
}

export function experienceGuideHubHref(stay, lang) {
  const slug = EXPERIENCE_HUB_BY_STAY[stay];
  if (!slug) throw new Error(`Unknown AMARA stay: ${stay}`);
  return experienceGuideEntryHref(slug, lang);
}

export function experienceRouteLanguage(pathname) {
  const first = pathname.split('/').filter(Boolean)[0];
  return LANGUAGE_PREFIXES.has(first) ? first : 'es';
}
