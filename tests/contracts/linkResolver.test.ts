import { expect, test } from '@playwright/test';
import { linkRegistry } from '../../src/lib/linkRegistry';
import {
  createRequiredLinkResolver,
  resolveLink,
  resolveOptionalLink,
  type LinkToken
} from '../../src/lib/linkResolver';
import type { AmaraLanguage } from '../../src/types/seo';

const languages: AmaraLanguage[] = ['en', 'de', 'es', 'nl', 'sv'];

test('every localized registry entry resolves in all supported languages', () => {
  for (const [token, entry] of Object.entries(linkRegistry.links)) {
    if (typeof entry === 'string') {
      expect(resolveLink(token as LinkToken, 'es'), token).toBe(entry);
      continue;
    }

    for (const language of languages) {
      expect(resolveLink(token as LinkToken, language), `${token}:${language}`).toBe(
        entry[language]
      );
    }
  }
});

test('keeps site and external links in their respective URL spaces', () => {
  expect(resolveLink('home', 'es')).toBe('/');
  expect(resolveLink('home', 'de')).toBe('/de');
  expect(resolveLink('book', 'es')).toBe('/find-a-stay');
  expect(resolveLink('book', 'de')).toBe('/de/find-a-stay');
  expect(resolveLink('instagram', 'sv')).toBe(
    'https://www.instagram.com/amaralodging/'
  );
});

test('no authored link sends a guest to the booking provider', () => {
  // Editorial calls to action resolve to AMARA's own availability search. The
  // provider is entered only through the validated checkout handoff and the
  // module's fallback link, neither of which is authored in the registry.
  for (const [token, entry] of Object.entries(linkRegistry.links)) {
    const urls = typeof entry === 'string' ? [entry] : Object.values(entry);

    for (const url of urls) {
      expect(url, `${token} must not link to the booking provider`).not.toContain(
        'lodgify.com'
      );
    }
  }
});

test('optional and required resolution agree for a known token', () => {
  expect(resolveOptionalLink('arrival_guide', 'nl')).toBe(
    resolveLink('arrival_guide', 'nl')
  );
});

test('a missing token fails loudly', () => {
  expect(() => resolveLink('missing_contract_token' as LinkToken, 'en')).toThrow(
    'the token "missing_contract_token" does not exist'
  );
});

test('a bound resolver resolves against the language it was created with', () => {
  for (const language of languages) {
    const requiredLink = createRequiredLinkResolver(language, 'Contract probe');

    expect(requiredLink('about'), language).toBe(resolveLink('about', language));
    expect(requiredLink('home'), language).toBe(resolveLink('home', language));
  }
});

test('a bound resolver still fails loudly on an unknown token', () => {
  const requiredLink = createRequiredLinkResolver('en', 'Contract probe');

  expect(() => requiredLink('missing_contract_token' as LinkToken)).toThrow(
    'the token "missing_contract_token" does not exist'
  );
});

test('a bound resolver names its context when a translation is missing', () => {
  const requiredLink = createRequiredLinkResolver('fr' as AmaraLanguage, 'Contract probe');

  expect(() => requiredLink('about')).toThrow('[Contract probe]');
  expect(() => requiredLink('about')).toThrow('Translation missing: "about" for "fr"');
});
