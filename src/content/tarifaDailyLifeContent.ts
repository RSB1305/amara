import {
  dailyLifeGuideContent,
  dailyLifeGuideSeo,
  type DailyLifeGuideLocale,
  type DailyLifeGuideSection
} from './dailyLifeGuideContent';

export type TarifaDailyLifeLocale = DailyLifeGuideLocale;
export type TarifaDailyLifeSection = DailyLifeGuideSection;

export const tarifaDailyLifeSeo = dailyLifeGuideSeo.tarifa['shopping-markets'];
export const tarifaDailyLifeContent = dailyLifeGuideContent.tarifa['shopping-markets'];
