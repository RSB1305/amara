export type AmaraLanguage = 'en' | 'de' | 'es' | 'nl' | 'sv';
export type AmaraPageType = 'A' | 'B' | 'C' | 'D' | 'utility';

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
  schemaType?: AmaraSchemaType;
  languages: Record<AmaraLanguage, AmaraSeoLanguageEntry>;
  ogImage?: string;
  collection?: {
    entityKeys: readonly Exclude<AmaraEntityKey, 'amara-brand'>[];
  };
  article?: {
    datePublished: string;
    dateModified: string;
    authorName: string;
    authorType?: 'Person' | 'Organization';
    authorRoute?: string;
  };

  /**
   * Optional physical landmark that a page documents as its subject. When
   * present, the central structured-data resolver emits one TouristAttraction
   * node inside the page @graph — with real geo-coordinates, a postal locality
   * and public-access flags — and links it from the WebPage as its `about`
   * entity. Reserved for pages whose subject is a real, visitable place.
   */
  landmark?: {
    name: Record<AmaraLanguage, string>;
    latitude: number;
    longitude: number;
    elevation?: number;
    addressLocality?: string;
    addressRegion?: string;
    addressCountry?: string;
    isAccessibleForFree?: boolean;
    sameAs?: readonly string[];
  };

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
