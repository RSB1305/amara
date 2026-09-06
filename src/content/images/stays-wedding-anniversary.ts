import { defineRouteImages } from '../../lib/images/routeImageContract';

export const staysWeddingAnniversaryImages = defineRouteImages({
  routeKey: 'stays.wedding-anniversary',
  images: [
    {
      role: 'hero',
      src: '/images/amara-lounis/15-amara-frigiliana.jpg',
      alt: {
        en: "Private terrace with white walls and palms at AMARA Lounis in Frigiliana",
        de: "Private Terrasse mit weißen Mauern und Palmen bei AMARA Lounis in Frigiliana",
        es: "Terraza privada con paredes blancas y palmeras en AMARA Lounis, Frigiliana",
        nl: "Privéterras met witte muren en palmen bij AMARA Lounis in Frigiliana",
        sv: "Privat terrass med vita väggar och palmer vid AMARA Lounis i Frigiliana"
      }
    },
    {
      role: 'split',
      id: 'choice',
      src: '/images/amara-zaid/cara-rural-frigiliana-amara-said-terraza-5.jpg',
      alt: {
        en: "Outdoor shower and handmade tiles on AMARA Zaid’s private terrace",
        de: "Außendusche und handgefertigte Fliesen auf der privaten Terrasse von AMARA Zaid",
        es: "Ducha exterior y azulejos artesanales en la terraza privada de AMARA Zaid",
        nl: "Buitendouche en handgemaakte tegels op het privéterras van AMARA Zaid",
        sv: "Utedusch och handgjort kakel på AMARA Zaids privata terrass"
      }
    }
  ]
});
