import type { ImageMetadata } from 'astro';
import type { VacationRentalToken } from '../../content/vacationRentalEntities';
import imgFarah from '../../assets/images/home/amara-farah-67-amara-frigiliana.jpg';
import imgLounis from '../../assets/images/home/amara-lounis-15-amara-frigiliana.jpg';
import imgZaid from '../../assets/images/home/amara-zaid-terraza-5.jpg';
import imgMaha from '../../assets/images/home/amara-maha-29-amara-frigiliana.jpg';
import imgPlaya from '../../assets/images/home/amara-playa-chaparril-13.webp';
import imgTarifa from '../../assets/images/home/amara-tarifa-apartment01.webp';

/**
 * One identifying photograph per stay.
 *
 * The home cards established which frame stands for which apartment, and a
 * guest who has seen it there should recognise the same apartment on any other
 * surface that lists the six. Holding the mapping once is what makes that true:
 * a page that imports its own file can drift from the home page without anyone
 * noticing. Pages that need a different frame for editorial reasons still
 * import their own; this map is for identification, not decoration.
 */
export const stayCardImageByToken: Record<VacationRentalToken, ImageMetadata> = {
  farah: imgFarah,
  lounis: imgLounis,
  zaid: imgZaid,
  maha: imgMaha,
  playa: imgPlaya,
  tarifa: imgTarifa
};
