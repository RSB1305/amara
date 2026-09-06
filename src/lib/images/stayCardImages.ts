import { vacationRentalEntities, type VacationRentalToken } from '../../content/vacationRentalEntities';
import { routeImageSrc } from './routeImages';

/**
 * One identifying photograph per stay: the `card` entry of the stay's image
 * source (`src/content/images/<slug>.ts`, DR-DESIGN-021). The home cards
 * established which frame stands for which apartment, and a guest who has seen
 * it there should recognise the same apartment on any other surface that lists
 * the six. Pages that need a different frame for editorial reasons take it from
 * the same source; this map is for identification, not decoration.
 */
export const stayCardImageByToken: Record<VacationRentalToken, string> = Object.fromEntries(
  vacationRentalEntities.map((rental) => [rental.token, routeImageSrc(rental.slug, 'card')])
) as Record<VacationRentalToken, string>;
