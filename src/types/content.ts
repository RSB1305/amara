import type { AmaraLanguage } from './seo';

/**
 * AMARA content localization contract.
 *
 * The binding structure is language at the leaf: a content module describes the
 * page once and each authored string carries its five locales. The alternative
 * — one whole copy of the page shape per language — was in use across roughly
 * half the content modules and is being retired, because it forces a renderer
 * to be written against a single language's copy and so prevents one renderer
 * from serving a page family.
 *
 * Leaf-level localization is what lets a shared renderer exist at all: the
 * renderer reads the structure, and the language is resolved at the point where
 * a string is actually printed.
 *
 * This is a structural contract, not an editorial one. Every locale stays a
 * natural, market-native translation; nothing here licenses deriving one
 * language from another or shortening a locale to fit a shape.
 */

/** One authored string in every AMARA locale. */
export type LocalizedText = Record<AmaraLanguage, string>;

/** One authored sequence of paragraphs or list items in every AMARA locale. */
export type LocalizedTextList = Record<AmaraLanguage, string[]>;

/**
 * Any authored value that varies by locale. Use the named aliases above where
 * they fit; this is for the cases that carry something other than text, such as
 * a locale-specific image alt set or a locale-specific ordering.
 */
export type Localized<TValue> = Record<AmaraLanguage, TValue>;

/**
 * The recurring authority text section: an anchor id, an optional eyebrow, a
 * title and its paragraphs. Eleven content modules had independently declared
 * this same shape before it was named here.
 */
export interface LocalizedTextSection {
  id: string;
  eyebrow?: LocalizedText;
  title: LocalizedText;
  paragraphs: LocalizedTextList;
}

/** Resolve a localized value for the language currently being rendered. */
export function localized<TValue>(
  value: Localized<TValue>,
  currentLang: AmaraLanguage
): TValue {
  return value[currentLang];
}
