// src/lib/linkResolver.ts
import { linkRegistry } from './linkRegistry';
import type { AmaraLanguage } from '../types/seo';

type AmaraLinkRegistry = typeof linkRegistry;
type RegistryEntry = AmaraLinkRegistry['links'][keyof AmaraLinkRegistry['links']];

interface ResolveLinkOptions {
  fallbackLang?: AmaraLanguage;
  suppressMissing?: boolean;
}

/**
 * AMARA-v3 Safety Guard
 */
if (!linkRegistry || !linkRegistry.links) {
  console.error('[AMARA-v3] Registry Import fehlgeschlagen. Inhalt von linkRegistry:', linkRegistry);
  throw new Error('[AMARA-v3 CRITICAL] linkRegistry konnte nicht geladen werden. PrÃ¼fe Export/Import!');
}

const registry: AmaraLinkRegistry = linkRegistry;

function resolveRegistryKey(token: string): string {
  if (!token) {
    throw new Error('[AMARA-v3 LINK ERROR] Critical: No token provided.');
  }

  if (registry.legacyAliases && registry.legacyAliases[token]) {
    return registry.legacyAliases[token].key;
  }

  return token;
}

function getRegistryEntry(token: string): { finalKey: string; entry: RegistryEntry } {
  const finalKey = resolveRegistryKey(token);
  const entry: RegistryEntry | undefined = registry.links[finalKey];

  if (!entry) {
    throw new Error(`[AMARA-v3 LINK ERROR] Registry Mismatch: Der Token "${token}" existiert nicht.`);
  }

  return { finalKey, entry };
}

// Optional shared surfaces should suppress missing links by default instead of
// hiding cross-language fallback inside registry data.
export function resolveOptionalLink(
  token: string,
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

    throw new Error(`[AMARA-v3 LINK ERROR] Translation Missing: "${finalKey}" fÃ¼r "${lang}".`);
  }

  throw new Error(`[AMARA-v3 LINK ERROR] Invalid Registry Format: "${finalKey}"`);
}

// Structural shell, legal, and required canonical surfaces should stay strict.
export function resolveLink(
  token: string,
  lang: AmaraLanguage,
  options: ResolveLinkOptions = {}
): string {
  const resolved = resolveOptionalLink(token, lang, options);

  if (!resolved) {
    const finalKey = resolveRegistryKey(token);
    throw new Error(`[AMARA-v3 LINK ERROR] Translation Missing: "${finalKey}" fÃ¼r "${lang}".`);
  }

  return resolved;
}
