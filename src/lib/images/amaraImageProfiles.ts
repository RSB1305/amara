import type { ImageMetadata } from 'astro';
import { getImage } from 'astro:assets';
import { resolveAmaraImageSource } from './amaraImageRegistry';

export type AmaraImageProfile = 'hero' | 'card' | 'gallery' | 'background';

interface AmaraImageProfileConfig {
  width: number;
  widths: number[];
  sizes: string;
  quality: number;
}

export const amaraImageProfiles: Record<AmaraImageProfile, AmaraImageProfileConfig> = {
  hero: {
    // 768 closes the gap between 640 and 960: a full-width hero on a mid-density
    // phone needs just over 640 device pixels, which previously forced the browser
    // up to the 960 variant. The background profile keeps its wider steps, because
    // its images sit behind content where the extra step buys no visible fidelity.
    width: 1920,
    widths: [480, 640, 768, 960, 1280, 1536, 1920],
    sizes: '100vw',
    quality: 70
  },
  card: {
    width: 900,
    widths: [320, 480, 600, 900],
    sizes: '(max-width: 767px) calc(100vw - 3rem), (max-width: 1535px) 50vw, 720px',
    quality: 72
  },
  gallery: {
    width: 1200,
    widths: [320, 480, 640, 900, 1200],
    sizes: '(max-width: 639px) calc(100vw - 3rem), (max-width: 1023px) 50vw, 25vw',
    quality: 72
  },
  background: {
    width: 1920,
    widths: [480, 640, 960, 1280, 1536, 1920],
    sizes: '100vw',
    quality: 62
  }
};

export function getAmaraImageProfile(profile: AmaraImageProfile) {
  return amaraImageProfiles[profile];
}

export async function createAmaraImage(
  src: ImageMetadata | string,
  profile: AmaraImageProfile,
  overrides: Partial<Pick<AmaraImageProfileConfig, 'quality'>> = {}
) {
  const preset = getAmaraImageProfile(profile);

  return getImage({
    src: resolveAmaraImageSource(src),
    width: preset.width,
    widths: preset.widths,
    sizes: preset.sizes,
    quality: overrides.quality ?? preset.quality,
    format: 'webp'
  });
}
