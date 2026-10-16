import { defineRouteImages } from '../../lib/images/routeImageContract';

const gallerySizes = '(max-width: 639px) calc(100vw - 3rem), (max-width: 767px) calc((100vw - 5rem) / 2), (max-width: 1023px) calc((100vw - 8rem) / 2), (max-width: 1535px) calc((100vw - 10rem) / 3), 459px';

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
      sizes: gallerySizes,
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
      role: "gallery",
      sizes: gallerySizes,
      id: "dried-fruit",
      src: "/images/frigiliana/markt-trockenfruechte-nuesse-2026.webp",
      alt: {
        en: "Dried figs, raisins and nuts at the market in Frigiliana",
        de: "Getrocknete Feigen, Rosinen und Nüsse auf dem Markt in Frigiliana",
        es: "Higos secos, pasas y frutos secos en el mercadillo de Frigiliana",
        nl: "Gedroogde vijgen, rozijnen en noten op de markt in Frigiliana",
        sv: "Torkade fikon, russin och nötter på marknaden i Frigiliana"
      },
      caption: {
        en: "Dried figs, raisins and nuts",
        de: "Getrocknete Feigen, Rosinen und Nüsse",
        es: "Higos secos, pasas y frutos secos",
        nl: "Gedroogde vijgen, rozijnen en noten",
        sv: "Torkade fikon, russin och nötter"
      },
      takenAt: "2026-10-15"
    },
    {
      role: "gallery",
      sizes: gallerySizes,
      id: "jewellery",
      src: "/images/frigiliana/markt-schmuck-2026.webp",
      alt: {
        en: "Colourful bracelets in display trays at the market in Frigiliana",
        de: "Bunte Armbänder in Auslagen auf dem Markt in Frigiliana",
        es: "Pulseras de colores en bandejas del mercadillo de Frigiliana",
        nl: "Kleurrijke armbanden in bakken op de markt in Frigiliana",
        sv: "Färgglada armband på brickor på marknaden i Frigiliana"
      },
      caption: {
        en: "Bracelets with beads and shells",
        de: "Armbänder mit Perlen und Muscheln",
        es: "Pulseras con cuentas y conchas",
        nl: "Armbanden met kralen en schelpen",
        sv: "Armband med pärlor och snäckor"
      },
      takenAt: "2026-10-15"
    },
    {
      role: "gallery",
      sizes: gallerySizes,
      id: "tiles-and-textiles",
      src: "/images/frigiliana/markt-fliesen-textilien-2026.webp",
      alt: {
        en: "Ceramic letter tiles and printed textiles at a market stall in Frigiliana",
        de: "Keramikfliesen mit Buchstaben und bedruckte Textilien an einem Marktstand in Frigiliana",
        es: "Azulejos con letras y textiles estampados en un puesto del mercadillo de Frigiliana",
        nl: "Keramische lettertegels en bedrukte stoffen op een marktkraam in Frigiliana",
        sv: "Keramikplattor med bokstäver och tryckta textilier i ett marknadsstånd i Frigiliana"
      },
      caption: {
        en: "Letter tiles and printed textiles",
        de: "Buchstabenfliesen und bedruckte Textilien",
        es: "Azulejos con letras y textiles estampados",
        nl: "Lettertegels en bedrukte stoffen",
        sv: "Bokstavsplattor och tryckta textilier"
      },
      takenAt: "2026-10-15"
    },
    {
      role: "gallery",
      sizes: gallerySizes,
      id: "lemon-ceramics",
      src: "/images/frigiliana/markt-keramik-zitronen-2026.webp",
      alt: {
        en: "Ceramic bowls and plates with lemon patterns at the market in Frigiliana",
        de: "Keramikschalen und Teller mit Zitronenmotiven auf dem Markt in Frigiliana",
        es: "Cuencos y platos de cerámica con limones en el mercadillo de Frigiliana",
        nl: "Keramische schalen en borden met citroenmotieven op de markt in Frigiliana",
        sv: "Keramikskålar och tallrikar med citronmotiv på marknaden i Frigiliana"
      },
      caption: {
        en: "Lemon patterns on bowls and plates",
        de: "Zitronenmotive auf Schalen und Tellern",
        es: "Limones en cuencos y platos",
        nl: "Citroenmotieven op schalen en borden",
        sv: "Citronmotiv på skålar och tallrikar"
      },
      takenAt: "2026-10-15"
    },
    {
      role: "gallery",
      sizes: gallerySizes,
      id: "cups-and-jugs",
      src: "/images/frigiliana/markt-keramik-tassen-2026.webp",
      alt: {
        en: "Painted ceramic cups, bowls and jugs at the market in Frigiliana",
        de: "Bemalte Keramiktassen, Schalen und Krüge auf dem Markt in Frigiliana",
        es: "Tazas, cuencos y jarras de cerámica pintada en el mercadillo de Frigiliana",
        nl: "Beschilderde keramische kopjes, schalen en kannen op de markt in Frigiliana",
        sv: "Målade keramikkoppar, skålar och kannor på marknaden i Frigiliana"
      },
      caption: {
        en: "Painted cups, bowls and jugs",
        de: "Bemalte Tassen, Schalen und Krüge",
        es: "Tazas, cuencos y jarras pintadas",
        nl: "Beschilderde kopjes, schalen en kannen",
        sv: "Målade koppar, skålar och kannor"
      },
      takenAt: "2026-10-15"
    },
    {
      role: "og",
      src: "/images/amara-frigiliana-pueblo/JPG_Frigiliana_Pueblo/2000px_72dpi_sRGB/06-frigiliana-pueblo.jpg"
    }
  ]
});
