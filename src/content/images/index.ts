import type { RouteImageSet } from '../../lib/images/routeImageContract';
import { frigilianaExperienceBeachesImages } from './frigiliana-experience-beaches';
import { frigilianaExperienceDayTripsImages } from './frigiliana-experience-day-trips';
import { frigilianaExperienceFestivalsImages } from './frigiliana-experience-festivals';
import { frigilianaExperienceHikingImages } from './frigiliana-experience-hiking';
import { frigilianaExperienceMarketImages } from './frigiliana-experience-market';
import { frigilianaExperienceOldTownImages } from './frigiliana-experience-old-town';
import { frigilianaExperienceRestaurantsImages } from './frigiliana-experience-restaurants';
import { frigilianaExperienceWeddingsImages } from './frigiliana-experience-weddings';
import { frigilianaExperienceWellnessImages } from './frigiliana-experience-wellness';
import { frigilianaExperienceImages } from './frigiliana-experience';
import { frigilianaFaqImages } from './frigiliana-faq';
import { frigilianaOrNerjaImages } from './frigiliana-or-nerja';
import { frigilianaImages } from './frigiliana';
import { guesthomeFrigilianaFarahImages } from './guesthome-frigiliana-farah';
import { guesthomeFrigilianaLounisImages } from './guesthome-frigiliana-lounis';
import { guestwelcomeFrigilianaFarahImages } from './guestwelcome-frigiliana-farah';
import { guestwelcomeFrigilianaLounisImages } from './guestwelcome-frigiliana-lounis';
import { guestwelcomeFrigilianaMahaImages } from './guestwelcome-frigiliana-maha';
import { guestwelcomeFrigilianaZaidImages } from './guestwelcome-frigiliana-zaid';
import { guestwelcomeNerjaPlayaImages } from './guestwelcome-nerja-playa';
import { guestwelcomeTarifaFamilySurfImages } from './guestwelcome-tarifa-family-surf';
import { laAmaraFamilyAndSurfImages } from './la-amara-family-and-surf';
import { laAmaraFarahImages } from './la-amara-farah';
import { laAmaraLounisImages } from './la-amara-lounis';
import { laAmaraMahaImages } from './la-amara-maha';
import { laAmaraPlayaImages } from './la-amara-playa';
import { laAmaraZaidImages } from './la-amara-zaid';
import { nerjaExperienceBeachesImages } from './nerja-experience-beaches';
import { nerjaExperienceDayTripsImages } from './nerja-experience-day-trips';
import { nerjaExperienceFoodImages } from './nerja-experience-food';
import { nerjaExperienceNightlifeImages } from './nerja-experience-nightlife';
import { nerjaExperienceImages } from './nerja-experience';
import { nerjaImages } from './nerja';
import { staysCasaAmaraImages } from './stays-casa-amara';
import { staysHoneymoonImages } from './stays-honeymoon';
import { staysWeddingAnniversaryImages } from './stays-wedding-anniversary';
import { staysImages } from './stays';
import { tarifaExperienceBeachesImages } from './tarifa-experience-beaches';
import { tarifaExperienceImages } from './tarifa-experience';
import { tarifaKitesurfingBeginnerGuideImages } from './tarifa-kitesurfing-beginner-guide';
import { tarifaKitesurfingBildungsurlaubImages } from './tarifa-kitesurfing-bildungsurlaub';
import { tarifaKitesurfingEquipmentImages } from './tarifa-kitesurfing-equipment';
import { tarifaKitesurfingKitecampImages } from './tarifa-kitesurfing-kitecamp';
import { tarifaKitesurfingSchoolImages } from './tarifa-kitesurfing-school';
import { tarifaKitesurfingSpotsImages } from './tarifa-kitesurfing-spots';
import { tarifaKitesurfingSurfClubImages } from './tarifa-kitesurfing-surf-club';
import { tarifaKitesurfingWindImages } from './tarifa-kitesurfing-wind';
import { tarifaKitesurfingImages } from './tarifa-kitesurfing';
import { tarifaWhereToStayImages } from './tarifa-where-to-stay';
import { tarifaImages } from './tarifa';

const sets: readonly RouteImageSet[] = [
  frigilianaExperienceBeachesImages,
  frigilianaExperienceDayTripsImages,
  frigilianaExperienceFestivalsImages,
  frigilianaExperienceHikingImages,
  frigilianaExperienceMarketImages,
  frigilianaExperienceOldTownImages,
  frigilianaExperienceRestaurantsImages,
  frigilianaExperienceWeddingsImages,
  frigilianaExperienceWellnessImages,
  frigilianaExperienceImages,
  frigilianaFaqImages,
  frigilianaOrNerjaImages,
  frigilianaImages,
  guesthomeFrigilianaFarahImages,
  guesthomeFrigilianaLounisImages,
  guestwelcomeFrigilianaFarahImages,
  guestwelcomeFrigilianaLounisImages,
  guestwelcomeFrigilianaMahaImages,
  guestwelcomeFrigilianaZaidImages,
  guestwelcomeNerjaPlayaImages,
  guestwelcomeTarifaFamilySurfImages,
  laAmaraFamilyAndSurfImages,
  laAmaraFarahImages,
  laAmaraLounisImages,
  laAmaraMahaImages,
  laAmaraPlayaImages,
  laAmaraZaidImages,
  nerjaExperienceBeachesImages,
  nerjaExperienceDayTripsImages,
  nerjaExperienceFoodImages,
  nerjaExperienceNightlifeImages,
  nerjaExperienceImages,
  nerjaImages,
  staysCasaAmaraImages,
  staysHoneymoonImages,
  staysWeddingAnniversaryImages,
  staysImages,
  tarifaExperienceBeachesImages,
  tarifaExperienceImages,
  tarifaKitesurfingBeginnerGuideImages,
  tarifaKitesurfingBildungsurlaubImages,
  tarifaKitesurfingEquipmentImages,
  tarifaKitesurfingKitecampImages,
  tarifaKitesurfingSchoolImages,
  tarifaKitesurfingSpotsImages,
  tarifaKitesurfingSurfClubImages,
  tarifaKitesurfingWindImages,
  tarifaKitesurfingImages,
  tarifaWhereToStayImages,
  tarifaImages
];

/** Every route key with an image source, keyed by route key (DR-DESIGN-021). */
export const routeImageSets: Readonly<Record<string, RouteImageSet>> = Object.fromEntries(
  sets.map((set) => [set.routeKey, set])
);

if (Object.keys(routeImageSets).length !== sets.length) {
  throw new Error('[AMARA images] Duplicate route key in src/content/images');
}
