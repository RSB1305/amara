import { defineRouteImages } from '../../lib/images/routeImageContract';

export const frigilianaExperienceMarketImages = defineRouteImages({
  routeKey: "frigiliana.experience.market",
  images: [
    {
      role: "hero",
      src: "/images/frigiliana/markt-keramik-2026.webp",
      alt: {
        en: "Painted bowls and ceramics at a market stall in Frigiliana",
        de: "Bemalte Schalen und Keramik an einem Marktstand in Frigiliana",
        es: "Cuencos pintados y cerámica en un puesto del mercadillo de Frigiliana",
        nl: "Beschilderde schalen en keramiek op een marktkraam in Frigiliana",
        sv: "Målade skålar och keramik i ett marknadsstånd i Frigiliana"
      },
      takenAt: "2026-10-15",
      width: 1800
    },
    {
      role: "gallery",
      sizes: "(max-width: 639px) calc(100vw - 3rem), 576px",
      id: "honey",
      src: "/images/frigiliana/markt-honig-2026.webp",
      alt: {
        en: "Honey jars and bottles displayed on a market stall in Frigiliana",
        de: "Honiggläser und Flaschen auf einem Marktstand in Frigiliana",
        es: "Tarros de miel y botellas en un puesto del mercadillo de Frigiliana",
        nl: "Honingpotten en flessen op een marktkraam in Frigiliana",
        sv: "Honungsburkar och flaskor i ett marknadsstånd i Frigiliana"
      },
      caption: {
        en: "Honey jars and bottles displayed on a market stall in Frigiliana",
        de: "Honiggläser und Flaschen auf einem Marktstand in Frigiliana",
        es: "Tarros de miel y botellas en un puesto del mercadillo de Frigiliana",
        nl: "Honingpotten en flessen op een marktkraam in Frigiliana",
        sv: "Honungsburkar och flaskor i ett marknadsstånd i Frigiliana"
      },
      takenAt: "2026-10-15"
    },
    {
      role: "og",
      src: "/images/amara-frigiliana-pueblo/JPG_Frigiliana_Pueblo/2000px_72dpi_sRGB/06-frigiliana-pueblo.jpg"
    }
  ]
});
