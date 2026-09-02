import {
  dailyLifeGuideContent,
  dailyLifeGuideSeo,
  type DailyLifeGuideLocale,
  type DailyLifeGuideSection
} from './dailyLifeGuideContent';

export type NerjaDailyLifeLocale = DailyLifeGuideLocale;
export type NerjaDailyLifeSection = DailyLifeGuideSection;

export const nerjaDailyLifeSeo = dailyLifeGuideSeo.nerja['shopping-markets'];
export const nerjaDailyLifeContent = dailyLifeGuideContent.nerja['shopping-markets'];
