/**
 * The public URL contract for AMARA's stable image paths.
 *
 * AMARA delivers images through two deliberately separate paths. Visible page
 * imagery goes through `AmaraImage` and Astro's asset pipeline into hashed
 * `/_astro/` variants, whose names change whenever the image or its transform
 * parameters change. Open Graph, Twitter Card and JSON-LD images cannot use
 * those names: a social platform or search engine may hold on to the URL long
 * after the build that produced it. Those references therefore address
 * `/images/...` directly, and this list is the contract for exactly that set.
 *
 * The list is not a second image source. `src/assets/images/content` is the
 * canonical byte source, and every entry names a file below that root. For these
 * images it is now also the only versioned one: the byte-identical copies that
 * used to be kept under `public/images` were retired once this contract's emitter
 * took over their delivery. What the list adds on top of that is a promise about
 * URLs, not about bytes.
 *
 * Three rules follow from that promise:
 *
 * - Only listed paths are emitted from the source root by this contract. That
 *   describes this mechanism, not the whole `/images/` namespace: `public/images`
 *   still carries parked media this contract does not manage, and those files
 *   stay reachable. It is also what keeps the dev server honest, since serving
 *   every source image under `/images/` would make paths resolve locally that no
 *   production build emits.
 * - Nothing derives this list and no build step may drop entries from it. An
 *   entry whose last in-site reference disappears keeps being emitted, because
 *   a URL that was published once can already be indexed, cached or shared.
 * - Removing an entry retires the URL. No second delivery path carries these bytes
 *   any more, so an entry that leaves this list stops being emitted and its URL
 *   resolves nowhere from the next build onwards. Withdrawing a published address
 *   is a decision of its own and must never arrive as a by-product of tidying.
 *
 * Adding a path here declares a guaranteed stable public URL within this
 * contract.
 *
 * A note for whoever edits this prose: Tailwind scans every file under `src` for
 * class-name candidates, including comments. An ordinary English word that also
 * names a utility silently adds a rule to the delivered stylesheet, which is why
 * the wording above avoids one.
 */
export const STABLE_PUBLIC_IMAGE_PATHS = [
  '/images/amara-entrada/casa-amara-frigiliana-entrada.jpg',
  '/images/amara-farah/65-amara-frigiliana.jpg',
  '/images/amara-farah/66-amara-frigiliana.jpg',
  '/images/amara-farah/67-amara-frigiliana.jpg',
  '/images/amara-farah/68-amara-frigiliana.jpg',
  '/images/amara-farah/69-amara-frigiliana.jpg',
  '/images/amara-farah/72-amara-frigiliana.jpg',
  '/images/amara-frigiliana-pueblo/JPG_Frigiliana_Pueblo/2000px_72dpi_sRGB/01-frigiliana-pueblo.jpg',
  '/images/amara-frigiliana-pueblo/JPG_Frigiliana_Pueblo/2000px_72dpi_sRGB/02-frigiliana-pueblo.jpg',
  '/images/amara-frigiliana-pueblo/JPG_Frigiliana_Pueblo/2000px_72dpi_sRGB/05-frigiliana-pueblo.jpg',
  '/images/amara-frigiliana-pueblo/JPG_Frigiliana_Pueblo/2000px_72dpi_sRGB/06-frigiliana-pueblo.jpg',
  '/images/amara-frigiliana-pueblo/JPG_Frigiliana_Pueblo/2000px_72dpi_sRGB/08-frigiliana-pueblo.jpg',
  '/images/amara-frigiliana-pueblo/nerja-coast-aerial.jpeg',
  '/images/amara-insta-facebook/casa-amara-frigiliana-bonita-purta-de-madeira-farah.jpg',
  '/images/amara-lounis/09-amara-frigiliana.jpg',
  '/images/amara-lounis/104-amara-frigiliana.jpg',
  '/images/amara-lounis/15-amara-frigiliana.jpg',
  '/images/amara-lounis/17-amara-frigiliana.jpg',
  '/images/amara-lounis/18-amara-frigiliana.jpg',
  '/images/amara-lounis/19-amara-frigiliana.jpg',
  '/images/amara-lounis/20-amara-frigiliana.jpg',
  '/images/amara-lounis/21-amara-frigiliana.jpg',
  '/images/amara-lounis/28-amara-frigiliana.jpg',
  '/images/amara-maha/29-amara-frigiliana.jpg',
  '/images/amara-maha/30-amara-frigiliana.jpg',
  '/images/amara-maha/31-amara-frigiliana.jpg',
  '/images/amara-maha/35-amara-frigiliana.jpg',
  '/images/amara-maha/38-amara-frigiliana.jpg',
  '/images/amara-maha/40-amara-frigiliana.jpg',
  '/images/amara-maha/42-amara-frigiliana.jpg',
  '/images/amara-maha/91-amara-frigiliana.jpg',
  '/images/amara-playa/apartment/chaparril-01.webp',
  '/images/amara-playa/apartment/chaparril-02.webp',
  '/images/amara-playa/apartment/chaparril-03.webp',
  '/images/amara-playa/apartment/chaparril-04.webp',
  '/images/amara-playa/apartment/chaparril-05.webp',
  '/images/amara-playa/apartment/chaparril-06.webp',
  '/images/amara-playa/apartment/chaparril-07.webp',
  '/images/amara-playa/apartment/chaparril-13.webp',
  '/images/amara-playa/apartment/chaparril-22.webp',
  '/images/amara-tarifa/amara-tarifa-apartment01.webp',
  '/images/amara-tarifa/amara-tarifa-apartment02.webp',
  '/images/amara-tarifa/amara-tarifa-apartment03.webp',
  '/images/amara-tarifa/amara-tarifa-apartment04.webp',
  '/images/amara-tarifa/amara-tarifa-apartment05.webp',
  '/images/amara-tarifa/amara-tarifa-apartment06.webp',
  '/images/amara-tarifa/amara-tarifa-apartment07.webp',
  '/images/amara-tarifa/amara-tarifa-apartment08.webp',
  '/images/amara-tarifa/amara-tarifa-apartment10.webp',
  '/images/amara-tarifa/amara-tarifa-apartment11.webp',
  '/images/amara-tarifa/amara-tarifa-apartment13.webp',
  '/images/amara-zaid/cara-rural-frigiliana-amara-said-bano-2.jpg',
  '/images/amara-zaid/cara-rural-frigiliana-amara-said-bano.jpg',
  '/images/amara-zaid/cara-rural-frigiliana-amara-said-cocina-2.jpg',
  '/images/amara-zaid/cara-rural-frigiliana-amara-said-cocina.jpg',
  '/images/amara-zaid/cara-rural-frigiliana-amara-said-dormitorio-2.jpg',
  '/images/amara-zaid/cara-rural-frigiliana-amara-said-dormitorio.jpg',
  '/images/amara-zaid/cara-rural-frigiliana-amara-said-terraza-5.jpg',
  '/images/amara-zaid/cara-rural-frigiliana-amara-said-terraza.jpg',
  '/images/hero-frigiliana.jpg',
  '/images/robert-amara-host.jpg'
] as const;

/** URL prefix every stable public image path starts with. */
export const STABLE_PUBLIC_IMAGE_URL_PREFIX = '/images/';

/** Repository-relative root holding the bytes for every listed path. */
export const STABLE_PUBLIC_IMAGE_SOURCE_ROOT = 'src/assets/images/content';

const stablePublicImagePaths: ReadonlySet<string> = new Set(STABLE_PUBLIC_IMAGE_PATHS);

/** Whether a normalized `/images/...` path is part of the published URL contract. */
export function isStablePublicImagePath(path: string): boolean {
  return stablePublicImagePaths.has(path);
}

/**
 * The path of a listed URL relative to the source root, using POSIX separators.
 * Returns `undefined` for anything outside the contract.
 */
export function toStablePublicImageSourcePath(path: string): string | undefined {
  return isStablePublicImagePath(path)
    ? path.slice(STABLE_PUBLIC_IMAGE_URL_PREFIX.length)
    : undefined;
}
