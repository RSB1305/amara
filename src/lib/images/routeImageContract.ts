import type { LocalizedText } from '../../types/content';

/**
 * Image source per route key (DR-DESIGN-021).
 *
 * One page, one file: `src/content/images/<route-key>.ts` lists every photograph a
 * public route renders, with its role, localized alt text, optional caption, credit
 * and date, and the photographs that are still missing as briefs. The record for a
 * place carries no image itself; a `place` image references the record by id so the
 * photo follows the place wherever the place is shown. Pages read the source through
 * `src/lib/images/routeImages.ts` and never import a photograph of their own.
 *
 * The byte source stays `src/assets/images/content` (registry) and the stable public
 * URL contract stays `stablePublicImages.ts`: an `og` image must be listed there.
 * The raw originals of a route key live in the Drive folder of the same route key.
 */
export type RouteImageRole = 'hero' | 'og' | 'split' | 'card' | 'gallery' | 'panorama' | 'editorial' | 'place' | 'utility';

export type RouteImageSurface = 'public' | 'guide';

export interface RouteImage {
  role: RouteImageRole;
  /** Slot identity when a page holds several images of one role; defaults to the role. */
  id?: string;
  /** Stable path below `/images/`, resolved from `src/assets/images/content` by the registry. */
  src: string;
  /** Localized alt text; an `og` image carries none because it is never rendered inline. */
  alt?: LocalizedText;
  caption?: LocalizedText;
  /** Photographer or source line for surfaces that render credits. */
  credit?: string;
  /** When the photograph was taken, `YYYY-MM` or `YYYY-MM-DD`, for dated first-hand images. */
  takenAt?: string;
  /** Intrinsic width the surface requests; the profile width applies when absent. */
  width?: number;
  sizes?: string;
  focalPoint?: string;
  /** Record id when the image shows one recommended place. */
  recommendationId?: string;
  /** Surfaces allowed to render the image; the public site when absent. */
  surfaces?: readonly RouteImageSurface[];
}

/** A photograph that does not exist yet: the slot keeps its place and names what to shoot. */
export interface RouteImageBrief {
  role: RouteImageRole;
  /** Slot identity; `hero` for the hero slot, otherwise a short name the page uses. */
  id: string;
  /** The motif to shoot or pick from the archive. */
  motif: string;
  /** Orientation and ratio, e.g. "quer 3:2". */
  format: string;
  /** Light or time of day, e.g. "morgens". */
  light?: string;
}

export interface RouteImageSet {
  routeKey: string;
  images: readonly RouteImage[];
  briefs?: readonly RouteImageBrief[];
}

export const defineRouteImages = <const T extends RouteImageSet>(set: T): T => set;
