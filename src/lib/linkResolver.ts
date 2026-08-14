// src/lib/linkResolver.ts
import { linkRegistry } from './linkRegistry';
import type { AmaraLanguage } from '../types/seo';

type AmaraLinkRegistry = typeof linkRegistry;
type RegistryEntry = AmaraLinkRegistry['links'][keyof AmaraLinkRegistry['links']];

/**
 * Every internal link token AMARA knows, derived from the registry itself.
 * A typo or a retired token is a compile error, not a runtime surprise.
 */
export type LinkToken = keyof AmaraLinkRegistry['links'];

/**
 * A registry link paired with its authored label. Shared by footer highlight
 * groups and related-link lists, which all carry exactly this shape.
 */
export interface LabeledLink {
  token: LinkToken;
  label: string;
}

interface ResolveLinkOptions {
  fallbackLang?: AmaraLanguage;
  suppressMissing?: boolean;
  /** Names the calling surface in error messages, e.g. 'Nerja geography'. */
  context?: string;
}

/**
 * AMARA-v3 Safety Guard
 */
if (!linkRegistry || !linkRegistry.links) {
  console.error('[AMARA-v3] Registry import failed. Contents of linkRegistry:', linkRegistry);
  throw new Error('[AMARA-v3 CRITICAL] linkRegistry could not be loaded. Check export/import.');
}

const registry: AmaraLinkRegistry = linkRegistry;

function describeContext(context?: string): string {
  return context ? `[${context}] ` : '';
}

function getRegistryEntry(token: LinkToken): { finalKey: LinkToken; entry: RegistryEntry } {
  if (!token) {
    throw new Error('[AMARA-v3 LINK ERROR] Critical: No token provided.');
  }

  const entry: RegistryEntry | undefined = registry.links[token];

  if (!entry) {
    throw new Error(`[AMARA-v3 LINK ERROR] Registry mismatch: the token "${token}" does not exist.`);
  }

  return { finalKey: token, entry };
}

// Optional shared surfaces should suppress missing links by default instead of
// hiding cross-language fallback inside registry data.
export function resolveOptionalLink(
  token: LinkToken,
  lang: AmaraLanguage,
  options: ResolveLinkOptions = {}
): string | null {
  const { finalKey, entry } = getRegistryEntry(token);

  if (typeof entry === 'string') {
    return entry;
  }

  if (typeof entry === 'object') {
    const localizedUrl = entry[lang];
    if (localizedUrl) {
      return localizedUrl;
    }

    if (options.fallbackLang) {
      const fallbackUrl = entry[options.fallbackLang];
      if (fallbackUrl) {
        return fallbackUrl;
      }
    }

    if (options.suppressMissing) {
      return null;
    }

    throw new Error(
      `${describeContext(options.context)}[AMARA-v3 LINK ERROR] Translation missing: "${finalKey}" for "${lang}".`
    );
  }

  throw new Error(
    `${describeContext(options.context)}[AMARA-v3 LINK ERROR] Invalid registry format: "${finalKey}"`
  );
}

// Structural shell, legal, and required canonical surfaces should stay strict.
// Pass `context` so a build failure names the surface that needs the link.
export function resolveLink(
  token: LinkToken,
  lang: AmaraLanguage,
  options: ResolveLinkOptions = {}
): string {
  const resolved = resolveOptionalLink(token, lang, options);

  if (!resolved) {
    throw new Error(
      `${describeContext(options.context)}[AMARA-v3 LINK ERROR] Translation missing: "${token}" for "${lang}".`
    );
  }

  return resolved;
}
