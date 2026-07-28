import type { ImageMetadata } from 'astro';

const contentImageModules = import.meta.glob<ImageMetadata>(
  '/src/assets/images/content/**/*.{jpg,jpeg,png,webp,avif}',
  {
    eager: true,
    import: 'default'
  }
);

const contentImagePrefix = '/src/assets/images/content';

const contentImages = new Map<string, ImageMetadata>(
  Object.entries(contentImageModules).map(([modulePath, image]) => [
    `/images${modulePath.slice(contentImagePrefix.length)}`,
    image
  ])
);

export function resolveAmaraImageSource(src: ImageMetadata | string): ImageMetadata {
  if (typeof src !== 'string') {
    return src;
  }

  const image = contentImages.get(src);
  if (!image) {
    throw new Error(
      `[AMARA image] No optimized source registered for "${src}". ` +
        'Copy the source image to src/assets/images/content using the same path below /images/.'
    );
  }

  return image;
}

export function hasAmaraImageSource(src: string): boolean {
  return contentImages.has(src);
}
