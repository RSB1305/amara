const LODGIFY_CHECKOUT_ORIGIN = 'https://checkout.lodgify.com';
const LODGIFY_WEBSITE_SLUG = 'amara';

/**
 * Lodgify's stable Booking Box emits this provider-owned reservation route.
 * AMARA resolves the provider property only after a validated checkout handoff.
 */
export function buildLodgifyCheckoutUrl(input) {
  const url = new URL(
    `/${input.lang}/${LODGIFY_WEBSITE_SLUG}/${input.propertyId}/reservation`,
    LODGIFY_CHECKOUT_ORIGIN,
  );
  url.search = new URLSearchParams({
    currency: input.currency,
    arrival: input.arrival,
    departure: input.departure,
    adults: String(input.adults),
  }).toString();
  return url.toString();
}
