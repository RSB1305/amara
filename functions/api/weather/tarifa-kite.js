import { createKiteBriefingRoute } from '../../../weather-gateway/aemet-kite.mjs';

export const onRequestGet = createKiteBriefingRoute({ site: 'tarifa' });
