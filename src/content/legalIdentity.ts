export const legalIdentity = {
  name: 'Robert Sebastian Böhmer',
  tradingName: 'AMARA Lodging',
  streetAddress: 'C./ Chorruelo 5',
  postalCode: '29788',
  city: 'Frigiliana',
  countryCode: 'ES',
  email: 'hola@amara-lodging.es'
} as const;

export const legalIdentityAddress =
  `${legalIdentity.streetAddress}, ${legalIdentity.postalCode} ${legalIdentity.city}`;
