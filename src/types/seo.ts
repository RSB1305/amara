export type AmaraLanguage = 'en' | 'de' | 'es' | 'nl' | 'sv';
export type AmaraPageType = 'A' | 'B' | 'C' | 'D';

export type AmaraSchemaType =
  | 'none'
  | 'brand'
  | 'lodging';

export interface AmaraSeoLanguageEntry {
  title: string;
  description: string;
  robots: string;
  canonical: 'auto';
}

export interface AmaraAuthoringSeo {
  version: string;
  pageType: AmaraPageType;
  languages: Record<AmaraLanguage, AmaraSeoLanguageEntry>;
  ogImage?: string;

  /**
   * Explicit entity selection keeps schema assignment stable.
   * This avoids fragile pathname heuristics inside the resolver layer.
   */
  entityKey?: AmaraEntityKey;
}

export type AmaraEntityKey =
  | 'amara-brand'
  | 'amara-farah'
  | 'amara-lounis'
  | 'amara-zaid'
  | 'amara-maha'
  | 'amara-playa'
  | 'amara-family-surf';