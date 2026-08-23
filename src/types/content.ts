import type { AmaraLanguage } from './seo';

/**
 * AMARA content localization contract.
 *
 * The binding structure is language at the leaf: a content module describes the
 * page once and each authored value carries its five locales. The alternative —
 * one whole copy of the page shape per language — is being retired.
 *
 * The reason is not that a shared renderer is otherwise impossible. It is not:
 * AMARA resolves the language at the page boundary and hands renderers plain
 * strings, so a renderer can be shared under either structure. The reasons are
 * these, and they are worth stating precisely because the wrong reason was
 * written here first:
 *
 * - **One structure definition.** The page shape exists once instead of five
 *   times, so a change to it is one edit rather than five that must agree.
 * - **Less duplication.** The thirteen modules migrated so far went from 8,252
 *   lines to 3,395 without a word of copy being removed.
 * - **Visible semantic parity.** With the locales side by side at each value, a
 *   missing translation is a hole you can see, and for a required value it is a
 *   type error. Under the old structure a locale could quietly lose an entire
 *   block and still build.
 * - **Safer maintenance.** Editing one sentence means editing one place, not
 *   finding the same sentence in five distant parts of the file.
 *
 * This is a structural contract, not an editorial one. Every locale stays a
 * natural, market-native translation; nothing here licenses deriving one
 * language from another or shortening a locale to fit a shape. In particular,
 * see `LocalizedTextList`: prose segmentation is deliberately allowed to differ
 * between languages.
 */

/** One authored string in every AMARA locale. */
export type LocalizedText = Record<AmaraLanguage, string>;

/**
 * One authored sequence of paragraphs or list items in every AMARA locale.
 *
 * The sequences may differ in length. A German sentence that reads better as
 * two paragraphs than as the English one is a translation doing its job, not a
 * missing paragraph, and `AGENTS.md` explicitly allows it. Use this type for
 * prose. For a list whose entries are semantic units in their own right — FAQ
 * entries, cards, themes, sections — use an array of objects with stable ids
 * instead, which the parity contract does hold to the same shape in every
 * locale.
 */
export type LocalizedTextList = Record<AmaraLanguage, string[]>;

/**
 * Any authored value that varies by locale: a list, a record, a number, an
 * ordering. Use the named aliases above where they fit.
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

/** Resolve a single localized value for the language currently being rendered. */
export function localized<TValue>(
  value: Localized<TValue>,
  currentLang: AmaraLanguage
): TValue {
  return value[currentLang];
}

/**
 * The shape a leaf-localized structure has once one language is chosen.
 *
 * Any `Localized<T>` collapses to `T` — that covers `LocalizedText` to `string`
 * and `LocalizedTextList` to `string[]` as the two named cases — and everything
 * around it keeps its shape.
 */
export type Resolved<TValue> = TValue extends Localized<infer TItem>
  ? Resolved<TItem>
  : TValue extends readonly (infer TElement)[]
    ? Resolved<TElement>[]
    : TValue extends object
      ? { [TKey in keyof TValue]: Resolved<TValue[TKey]> }
      : TValue;

export const LANGUAGE_KEYS: readonly AmaraLanguage[] = ['en', 'de', 'es', 'nl', 'sv'];

/**
 * Is this object a localized container rather than an ordinary content object?
 *
 * The test is deliberately narrow: the object's keys must be exactly the five
 * AMARA locales and nothing else, none of the five may be `undefined`, and all
 * five must hold the same kind of value. An ordinary content object does not
 * have precisely those five keys and no others, so it cannot be mistaken for a
 * localized one; a partially authored container — four locales filled, one
 * missing — is not silently treated as localized either, it simply is not one
 * and the missing locale surfaces as a type error at the call site.
 *
 * The one shape that satisfies this test without wanting to be resolved is the
 * `languages` block of the SEO head contract. That block belongs to
 * `AmaraAuthoringSeo` and is consumed per locale by the head resolver; it is
 * never passed through here, and the seo export is kept separate from the
 * content export for exactly that reason.
 */
export function isLocalizedContainer(value: object): value is Localized<unknown> {
  const keys = Object.keys(value);
  if (keys.length !== LANGUAGE_KEYS.length) return false;
  if (!LANGUAGE_KEYS.every((lang) => keys.includes(lang))) return false;

  const entries = LANGUAGE_KEYS.map((lang) => (value as Record<string, unknown>)[lang]);
  if (entries.some((entry) => entry === undefined)) return false;

  const kindOf = (entry: unknown) =>
    entry === null ? 'null' : Array.isArray(entry) ? 'array' : typeof entry;
  const kinds = new Set(entries.map(kindOf));
  return kinds.size === 1;
}

/**
 * Resolve a whole leaf-localized content tree for one language.
 *
 * This is what makes the leaf-level contract cheap to adopt: a page keeps
 * reading a plain structure of strings, exactly as it did when the module
 * carried one copy per language, and the choice of language happens once at the
 * page boundary instead of being threaded through every renderer.
 *
 * Resolution is recursive on both sides: the container is unwrapped for the
 * requested locale, and whatever it held is resolved in turn, so a localized
 * list of localized records resolves all the way down.
 */
export function resolveLocale<TValue>(
  value: TValue,
  currentLang: AmaraLanguage
): Resolved<TValue> {
  if (Array.isArray(value)) {
    return value.map((item) => resolveLocale(item, currentLang)) as Resolved<TValue>;
  }
  if (value !== null && typeof value === 'object') {
    if (isLocalizedContainer(value)) {
      return resolveLocale(
        (value as Record<string, unknown>)[currentLang],
        currentLang
      ) as Resolved<TValue>;
    }
    const out: Record<string, unknown> = {};
    for (const [key, item] of Object.entries(value)) {
      out[key] = resolveLocale(item, currentLang);
    }
    return out as Resolved<TValue>;
  }
  return value as Resolved<TValue>;
}
