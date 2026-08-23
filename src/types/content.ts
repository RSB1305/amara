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

/**
 * The shape a leaf-localized structure has once one language is chosen: every
 * `LocalizedText` becomes the string for that language and everything around it
 * keeps its shape.
 */
export type Resolved<TValue> = TValue extends LocalizedText
  ? string
  : TValue extends readonly (infer TItem)[]
    ? Resolved<TItem>[]
    : TValue extends object
      ? { [TKey in keyof TValue]: Resolved<TValue[TKey]> }
      : TValue;

const LANGUAGE_KEYS: readonly AmaraLanguage[] = ['en', 'de', 'es', 'nl', 'sv'];

function isLocalizedText(value: object): value is LocalizedText {
  const keys = Object.keys(value);
  return (
    keys.length === LANGUAGE_KEYS.length &&
    LANGUAGE_KEYS.every(
      (lang) => lang in value && typeof (value as Record<string, unknown>)[lang] === 'string'
    )
  );
}

/**
 * Resolve a whole leaf-localized content tree for one language.
 *
 * This is what makes the leaf-level contract cheap to adopt: a page keeps
 * reading a plain structure of strings, exactly as it did when the module
 * carried one copy per language, and the choice of language happens once at the
 * page boundary instead of being threaded through every renderer.
 */
export function resolveLocale<TValue>(
  value: TValue,
  currentLang: AmaraLanguage
): Resolved<TValue> {
  if (Array.isArray(value)) {
    return value.map((item) => resolveLocale(item, currentLang)) as Resolved<TValue>;
  }
  if (value && typeof value === 'object') {
    if (isLocalizedText(value)) {
      return value[currentLang] as Resolved<TValue>;
    }
    const out: Record<string, unknown> = {};
    for (const [key, item] of Object.entries(value)) {
      out[key] = resolveLocale(item, currentLang);
    }
    return out as Resolved<TValue>;
  }
  return value as Resolved<TValue>;
}
