import { createZoneWarningsRoute } from '../../../weather-gateway/aemet-warnings.mjs';

export const onRequestGet = createZoneWarningsRoute({ zone: 'tarifa' });
