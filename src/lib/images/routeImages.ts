import { routeImageSets } from '../../content/images';
import type { LocalizedText } from '../../types/content';
import type { AmaraLanguage } from '../../types/seo';
import type { RouteImage, RouteImageBrief, RouteImageRole, RouteImageSet, RouteImageSurface } from './routeImageContract';

/** One image resolved for a language, ready for `AmaraImage`. */
export interface ResolvedRouteImage {
  src: string;
  alt: string;
  width?: number;
  sizes?: string;
  focalPoint?: string;
  caption?: string;
  credit?: string;
}

/** What a photo-brief slot renders while the photograph is missing. */
export interface PhotoBriefProps {
  motif: string;
  format: string;
  light?: string;
}

/** Props of an experience or topic hero: the image when it exists, otherwise its brief. */
export interface RouteHeroProps {
  imageSrc?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageSizes?: string;
  brief?: PhotoBriefProps;
}

export function getRouteImageSet(routeKey: string): RouteImageSet | undefined {
  return routeImageSets[routeKey];
}

function requireSet(routeKey: string): RouteImageSet {
  const set = routeImageSets[routeKey];
  if (!set) {
    throw new Error(`[AMARA images] No image source for route key "${routeKey}". Add src/content/images/<route-key>.ts.`);
  }
  return set;
}

const allowedOn = (image: RouteImage, surface: RouteImageSurface) => (image.surfaces ?? ['public']).includes(surface);

function resolve(image: RouteImage, lang: AmaraLanguage): ResolvedRouteImage {
  if (!image.alt) throw new Error(`[AMARA images] ${image.src} is rendered inline and needs alt text.`);
  return {
    src: image.src,
    alt: image.alt[lang],
    width: image.width,
    sizes: image.sizes,
    focalPoint: image.focalPoint,
    caption: image.caption?.[lang],
    credit: image.credit
  };
}

/** All images of one role on a route, in authored order. */
export function routeImages(
  routeKey: string,
  role: RouteImageRole,
  lang: AmaraLanguage,
  surface: RouteImageSurface = 'public'
): ResolvedRouteImage[] {
  return requireSet(routeKey)
    .images.filter((image) => image.role === role && allowedOn(image, surface))
    .map((image) => resolve(image, lang));
}

/** The image of one slot (`id`, defaulting to the role) on a route, or undefined while it is missing. */
export function routeImage(
  routeKey: string,
  id: string,
  lang: AmaraLanguage,
  surface: RouteImageSurface = 'public'
): ResolvedRouteImage | undefined {
  const image = requireSet(routeKey).images.find((entry) => (entry.id ?? entry.role) === id && allowedOn(entry, surface));
  return image ? resolve(image, lang) : undefined;
}

export function requireRouteImage(routeKey: string, id: string, lang: AmaraLanguage): ResolvedRouteImage {
  const image = routeImage(routeKey, id, lang);
  if (!image) throw new Error(`[AMARA images] ${routeKey} has no image for slot "${id}".`);
  return image;
}

const briefProps = ({ motif, format, light }: RouteImageBrief): PhotoBriefProps => ({ motif, format, light });

/** The brief of one slot, or undefined when the photograph exists or no brief was written. */
export function routeBrief(routeKey: string, id: string): PhotoBriefProps | undefined {
  const brief = requireSet(routeKey).briefs?.find((entry) => entry.id === id);
  return brief ? briefProps(brief) : undefined;
}

export function requireRouteBrief(routeKey: string, id: string): PhotoBriefProps {
  const brief = routeBrief(routeKey, id);
  if (!brief) throw new Error(`[AMARA images] ${routeKey} has no photo brief for slot "${id}".`);
  return brief;
}

/** Hero props for a route that has its photograph: `{ imageSrc, imageAlt, imageWidth, imageSizes }`. */
export function routeHeroImage(routeKey: string, lang: AmaraLanguage): Required<Pick<RouteHeroProps, 'imageSrc' | 'imageAlt'>> & Pick<RouteHeroProps, 'imageWidth' | 'imageSizes'> {
  const image = requireRouteImage(routeKey, 'hero', lang);
  return { imageSrc: image.src, imageAlt: image.alt, imageWidth: image.width, imageSizes: image.sizes };
}

/** Hero props for an experience route: the image when it exists, otherwise the brief that holds its slot. */
export function routeHero(routeKey: string, lang: AmaraLanguage): RouteHeroProps {
  const image = routeImage(routeKey, 'hero', lang);
  if (image) return { imageSrc: image.src, imageAlt: image.alt, imageWidth: image.width, imageSizes: image.sizes };
  const brief = routeBrief(routeKey, 'hero');
  if (brief) return { brief };
  throw new Error(`[AMARA images] ${routeKey} has neither a hero image nor a hero brief.`);
}

/** The Open Graph image of a route: its `og` entry, otherwise its hero photograph. Must be a stable public path. */
export function routeOgImage(routeKey: string): string {
  const set = requireSet(routeKey);
  const og = set.images.find((image) => image.role === 'og') ?? set.images.find((image) => image.role === 'hero');
  if (!og) throw new Error(`[AMARA images] ${routeKey} has no Open Graph image and no hero photograph to fall back on.`);
  return og.src;
}

/** Stable paths of every image of one role on a route, in authored order (e.g. a stay gallery for JSON-LD). */
export function routeImageSources(routeKey: string, role: RouteImageRole): string[] {
  return requireSet(routeKey).images.filter((image) => image.role === role).map((image) => image.src);
}

/** The stable path of one slot, for consumers that resolve the image themselves. */
export function routeImageSrc(routeKey: string, id: string): string {
  const image = requireSet(routeKey).images.find((entry) => (entry.id ?? entry.role) === id);
  if (!image) throw new Error(`[AMARA images] ${routeKey} has no image for slot "${id}".`);
  return image.src;
}

/** The alt text of one slot in every language, for content that stays localized as a whole. */
export function routeImageAltText(routeKey: string, id: string): LocalizedText {
  const image = requireSet(routeKey).images.find((entry) => (entry.id ?? entry.role) === id);
  if (!image?.alt) throw new Error(`[AMARA images] ${routeKey} has no alt text for slot "${id}".`);
  return image.alt;
}

/** The photograph of one recommended place, wherever the place is shown; undefined while none exists. */
export function placeImage(
  recommendationId: string,
  lang: AmaraLanguage,
  surface: RouteImageSurface = 'public'
): ResolvedRouteImage | undefined {
  for (const set of Object.values(routeImageSets)) {
    const image = set.images.find((entry) => entry.recommendationId === recommendationId && allowedOn(entry, surface));
    if (image) return resolve(image, lang);
  }
  return undefined;
}
