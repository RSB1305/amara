export interface PublicImageDimensions {
  width: number;
  height: number;
}

/**
 * Intrinsic dimensions for images served directly from /public.
 *
 * Keeping these values next to the content prevents layout shifts without
 * introducing image-processing logic into the page components.
 */
const PUBLIC_IMAGE_DIMENSIONS: Record<string, PublicImageDimensions> = {
  "/images/amara-entrada/casa-amara-frigiliana-entrada-iii.jpg": { width: 1920, height: 1282 },
  "/images/amara-entrada/casa-amara-frigiliana-entrada.jpg": { width: 1920, height: 1282 },
  "/images/amara-farah/65-amara-frigiliana.jpg": { width: 1920, height: 1281 },
  "/images/amara-farah/66-amara-frigiliana.jpg": { width: 1920, height: 1282 },
  "/images/amara-farah/67-amara-frigiliana.jpg": { width: 1920, height: 1282 },
  "/images/amara-farah/68-amara-frigiliana.jpg": { width: 1920, height: 1282 },
  "/images/amara-farah/69-amara-frigiliana.jpg": { width: 1920, height: 1282 },
  "/images/amara-farah/72-amara-frigiliana.jpg": { width: 1920, height: 1281 },
  "/images/amara-frigiliana-pueblo/JPG_Frigiliana_Pueblo/2000px_72dpi_sRGB/01-frigiliana-pueblo.jpg": {
    width: 1282,
    height: 1920,
  },
  "/images/amara-frigiliana-pueblo/JPG_Frigiliana_Pueblo/2000px_72dpi_sRGB/03-frigiliana-pueblo.jpg": {
    width: 1282,
    height: 1920,
  },
  "/images/amara-frigiliana-pueblo/JPG_Frigiliana_Pueblo/2000px_72dpi_sRGB/04-frigiliana-pueblo.jpg": {
    width: 1920,
    height: 1282,
  },
  "/images/amara-frigiliana-pueblo/JPG_Frigiliana_Pueblo/2000px_72dpi_sRGB/06-frigiliana-pueblo.jpg": {
    width: 1920,
    height: 1282,
  },
  "/images/amara-frigiliana-pueblo/JPG_Frigiliana_Pueblo/2000px_72dpi_sRGB/07-frigiliana-pueblo.jpg": {
    width: 1282,
    height: 1920,
  },
  "/images/amara-frigiliana-pueblo/JPG_Frigiliana_Pueblo/2000px_72dpi_sRGB/08-frigiliana-pueblo.jpg": {
    width: 1920,
    height: 1282,
  },
  "/images/amara-insta-facebook/casa-amara-frigiliana-bonita-purta-de-madeira-farah.jpg": {
    width: 1282,
    height: 1920,
  },
  "/images/amara-lounis/104-amara-frigiliana.jpg": { width: 1920, height: 1282 },
  "/images/amara-lounis/15-amara-frigiliana.jpg": { width: 1920, height: 1282 },
  "/images/amara-lounis/17-amara-frigiliana.jpg": { width: 1920, height: 1282 },
  "/images/amara-lounis/18-amara-frigiliana.jpg": { width: 1920, height: 1281 },
  "/images/amara-lounis/19-amara-frigiliana.jpg": { width: 1920, height: 1282 },
  "/images/amara-lounis/20-amara-frigiliana.jpg": { width: 1920, height: 1282 },
  "/images/amara-lounis/21-amara-frigiliana.jpg": { width: 1920, height: 1283 },
  "/images/amara-lounis/28-amara-frigiliana.jpg": { width: 1920, height: 1282 },
  "/images/amara-maha/29-amara-frigiliana.jpg": { width: 1920, height: 1282 },
  "/images/amara-maha/30-amara-frigiliana.jpg": { width: 1920, height: 1282 },
  "/images/amara-maha/31-amara-frigiliana.jpg": { width: 1920, height: 1282 },
  "/images/amara-maha/35-amara-frigiliana.jpg": { width: 1920, height: 1283 },
  "/images/amara-maha/38-amara-frigiliana.jpg": { width: 1920, height: 1281 },
  "/images/amara-maha/40-amara-frigiliana.jpg": { width: 1920, height: 1282 },
  "/images/amara-maha/42-amara-frigiliana.jpg": { width: 1920, height: 1282 },
  "/images/amara-maha/91-amara-frigiliana.jpg": { width: 1920, height: 1282 },
  "/images/amara-playa/apartment/chaparril-01.webp": { width: 1920, height: 1281 },
  "/images/amara-playa/apartment/chaparril-02.webp": { width: 1920, height: 1283 },
  "/images/amara-playa/apartment/chaparril-03.webp": { width: 1920, height: 1282 },
  "/images/amara-playa/apartment/chaparril-04.webp": { width: 1920, height: 1283 },
  "/images/amara-playa/apartment/chaparril-05.webp": { width: 1920, height: 1282 },
  "/images/amara-playa/apartment/chaparril-06.webp": { width: 1920, height: 1282 },
  "/images/amara-playa/apartment/chaparril-07.webp": { width: 1920, height: 1282 },
  "/images/amara-playa/apartment/chaparril-13.webp": { width: 1920, height: 1282 },
  "/images/amara-playa/apartment/chaparril-15.webp": { width: 1920, height: 1281 },
  "/images/amara-playa/apartment/chaparril-22.webp": { width: 1920, height: 1279 },
  "/images/amara-playa/apartment/chaparril-24.webp": { width: 1920, height: 1279 },
  "/images/amara-tarifa/amara-tarifa-apartment01.webp": { width: 1920, height: 1200 },
  "/images/amara-tarifa/amara-tarifa-apartment02.webp": { width: 1920, height: 1200 },
  "/images/amara-tarifa/amara-tarifa-apartment03.webp": { width: 1920, height: 1200 },
  "/images/amara-tarifa/amara-tarifa-apartment04.webp": { width: 1920, height: 1200 },
  "/images/amara-tarifa/amara-tarifa-apartment05.webp": { width: 1920, height: 1200 },
  "/images/amara-tarifa/amara-tarifa-apartment06.webp": { width: 1920, height: 1200 },
  "/images/amara-tarifa/amara-tarifa-apartment07.webp": { width: 1920, height: 1200 },
  "/images/amara-tarifa/amara-tarifa-apartment08.webp": { width: 1920, height: 1200 },
  "/images/amara-tarifa/amara-tarifa-apartment16.webp": { width: 1920, height: 1200 },
  "/images/amara-tarifa/amara-tarifa-apartment22.webp": { width: 1920, height: 1200 },
  "/images/amara-zaid/cara-rural-frigiliana-amara-said-bano-2.jpg": { width: 1920, height: 1281 },
  "/images/amara-zaid/cara-rural-frigiliana-amara-said-bano.jpg": { width: 1920, height: 1282 },
  "/images/amara-zaid/cara-rural-frigiliana-amara-said-cocina-2.jpg": { width: 1920, height: 1282 },
  "/images/amara-zaid/cara-rural-frigiliana-amara-said-cocina.jpg": { width: 1920, height: 1282 },
  "/images/amara-zaid/cara-rural-frigiliana-amara-said-dormitorio-2.jpg": { width: 1920, height: 1281 },
  "/images/amara-zaid/cara-rural-frigiliana-amara-said-dormitorio.jpg": { width: 1920, height: 1282 },
  "/images/amara-zaid/cara-rural-frigiliana-amara-said-terraza-5.jpg": { width: 1920, height: 1282 },
  "/images/amara-zaid/cara-rural-frigiliana-amara-said-terraza.jpg": { width: 1920, height: 1282 },
  "/images/robert-amara-founder-host.jpg": { width: 2644, height: 3966 },
};

export function getPublicImageDimensions(src: string): PublicImageDimensions {
  const dimensions = PUBLIC_IMAGE_DIMENSIONS[src];

  if (!dimensions) {
    throw new Error(`[AMARA image dimensions] Missing intrinsic dimensions for "${src}".`);
  }

  return dimensions;
}
