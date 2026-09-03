import { createKiteBriefingRoute } from '../../../weather-gateway/open-meteo-kite.mjs';

export const onRequestGet = createKiteBriefingRoute({ site: 'tarifa' });
