export const legalIdentity = {
  name: 'Robert Sebastian Böhmer',
  tradingName: 'AMARA Lodging',
  streetAddress: 'C./ Chorruelo 5',
  postalCode: '29788',
  city: 'Frigiliana',
  countryCode: 'ES',
  taxId: 'Y 77 66 788 R',
  email: 'hola@amara-lodging.es',
  phoneDisplay: '+34 604 440 964',
  phoneHref: '+34604440964'
} as const;

export const legalIdentityAddress =
  `${legalIdentity.streetAddress}, ${legalIdentity.postalCode} ${legalIdentity.city}`;
