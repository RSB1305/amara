import { createBookingRoute } from '../../../booking-gateway/gateway.mjs';

export const onRequest = createBookingRoute('checkout');
