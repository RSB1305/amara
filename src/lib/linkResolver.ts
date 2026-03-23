// src/lib/linkResolver.ts
import { linkRegistry } from './linkRegistry';
import type { AmaraLanguage } from '../types/seo';

type AmaraLinkRegistry = typeof linkRegistry;
type RegistryEntry = AmaraLinkRegistry['links'][keyof AmaraLinkRegistry['links']];

/**
 * AMARA-v3 Safety Guard
 */
if (!linkRegistry || !linkRegistry.links) {
  console.error('[AMARA-v3] Registry Import fehlgeschlagen. Inhalt von linkRegistry:', linkRegistry);
  throw new Error('[AMARA-v3 CRITICAL] linkRegistry konnte nicht geladen werden. Prüfe Export/Import!');
}

const registry: AmaraLinkRegistry = linkRegistry;

export function resolveLink(token: string, lang: AmaraLanguage): string {
  if (!token) {
    throw new Error('[AMARA-v3 LINK ERROR] Critical: No token provided.');
  }

  let finalKey = token;

  // I. Alias-Resolution
  if (registry.legacyAliases && registry.legacyAliases[token]) {
    finalKey = registry.legacyAliases[token].key;
  }

  // II. Token-Abruf
  const entry: RegistryEntry | undefined = registry.links[finalKey];

  if (!entry) {
    throw new Error(`[AMARA-v3 LINK ERROR] Registry Mismatch: Der Token "${token}" existiert nicht.`);
  }

  if (typeof entry === 'string') {
    return entry;
  }

  if (typeof entry === 'object') {
    const localizedUrl = entry[lang];
    if (!localizedUrl) {
      throw new Error(`[AMARA-v3 LINK ERROR] Translation Missing: "${finalKey}" für "${lang}".`);
    }
    return localizedUrl;
  }

  throw new Error(`[AMARA-v3 LINK ERROR] Invalid Registry Format: "${finalKey}"`);
}
