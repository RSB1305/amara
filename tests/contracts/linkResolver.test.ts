import { expect, test } from '@playwright/test';
import { linkRegistry } from '../../src/lib/linkRegistry';
import {
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

test('keeps site, booking and external links in their respective URL spaces', () => {
  expect(resolveLink('home', 'es')).toBe('/');
  expect(resolveLink('home', 'de')).toBe('/de');
  expect(resolveLink('book', 'es')).toBe('https://amara.lodgify.com/es/book/');
  expect(resolveLink('instagram', 'sv')).toBe(
    'https://www.instagram.com/amaralodging/'
  );
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
