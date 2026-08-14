import {
  overview as tarifaOverviewGuide,
  type TarifaLocationGuideContent
} from './tarifaGuideContent';

/**
 * The former Location overview already owns the approved deep area-comparison
 * copy. This named export transfers that material to the focused A3 route
 * without creating a second authoring source.
 */
export const tarifaWhereToStayContent: TarifaLocationGuideContent = {
  ...tarifaOverviewGuide,
  token: 'tarifa_where_to_stay'
};
