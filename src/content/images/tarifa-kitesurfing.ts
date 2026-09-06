import { defineRouteImages } from '../../lib/images/routeImageContract';

export const tarifaKitesurfingImages = defineRouteImages({
  routeKey: 'tarifa.kitesurfing',
  images: [
    {
      role: 'hero',
      src: '/images/tarifa/AM-5788_Andre_Magaro.jpg',
      focalPoint: '50% 45%',
      credit: "Andre Magaro",
      alt: {
        en: "Kitesurfer in the air under a blue sky off Tarifa",
        de: "Kitesurfer in der Luft unter blauem Himmel vor Tarifa",
        es: "Kitesurfista en el aire bajo un cielo azul frente a Tarifa",
        nl: "Kitesurfer in de lucht onder een blauwe hemel voor Tarifa",
        sv: "Kitesurfare i luften under blå himmel utanför Tarifa"
      }
    },
    {
      role: 'panorama',
      id: 'wave',
      src: '/images/tarifa/kite-wave-turn.jpg',
      focalPoint: '50% 45%',
      alt: {
        en: "A kitesurfer carving off the lip of a wave off Tarifa",
        de: "Kitesurfer beim Turn im Wellenkamm vor Tarifa",
        es: "Un kitesurfista trazando un giro en la cresta de una ola frente a Tarifa",
        nl: "Een kitesurfer die een turn maakt op de top van een golf voor Tarifa",
        sv: "En kitesurfare som skär av vågkammen utanför Tarifa"
      },
      caption: {
        en: "When the swell lines up, Tarifa is a wave spot too — not just flat-water freeride.",
        de: "Wenn die Welle steht, ist Tarifa auch ein Wellenspot — nicht nur Flachwasser-Freeride.",
        es: "Cuando entra la ola, Tarifa también es un spot de olas, no solo freeride en agua plana.",
        nl: "Als de deining staat, is Tarifa ook een golfspot — niet alleen flatwater-freeride.",
        sv: "När svallet ligger rätt är Tarifa också en vågspot — inte bara flatwater-freeride."
      }
    },
    {
      role: 'card',
      id: 'jump',
      src: '/images/tarifa/_DCS9847_Sebastian_Lang.jpg',
      focalPoint: '50% 40%',
      credit: "Sebastian Lang",
      alt: {
        en: "Kitesurfer mid-jump over the water off Tarifa",
        de: "Kitesurfer im Sprung über dem Wasser vor Tarifa",
        es: "Kitesurfista en pleno salto sobre el agua frente a Tarifa",
        nl: "Kitesurfer midden in een sprong boven het water voor Tarifa",
        sv: "Kitesurfare mitt i ett hopp över vattnet utanför Tarifa"
      }
    },
    {
      role: 'split',
      id: 'partnership',
      src: '/images/tarifa/mark-robert-tarifa-surf-club.webp',
      focalPoint: '50% 42%',
      alt: {
        en: "Mark from Tarifa Surf Club and Robert from AMARA in Tarifa",
        de: "Mark vom Tarifa Surf Club und Robert von AMARA in Tarifa",
        es: "Mark de Tarifa Surf Club y Robert de AMARA en Tarifa",
        nl: "Mark van Tarifa Surf Club en Robert van AMARA in Tarifa",
        sv: "Mark från Tarifa Surf Club och Robert från AMARA i Tarifa"
      },
      caption: {
        en: "Mark and Robert in Tarifa",
        de: "Mark und Robert in Tarifa",
        es: "Mark y Robert en Tarifa",
        nl: "Mark en Robert in Tarifa",
        sv: "Mark och Robert i Tarifa"
      }
    }
  ]
});
