import { defineRouteImages } from '../../lib/images/routeImageContract';

export const tarifaKitesurfingWindImages = defineRouteImages({
  routeKey: 'tarifa.kitesurfing.wind',
  images: [
    {
      role: 'hero',
      src: '/images/tarifa/Airush_Valentin_Tadzio-Rurka_DSC_3203.jpg',
      credit: "Tadzio Rurka / Airush",
      alt: {
        en: "A kitesurfer high above the waves in front of Tarifa’s old tuna-fishery buildings",
        de: "Kitesurfer hoch über den Wellen vor den alten Almadraba-Gebäuden bei Tarifa",
        es: "Un kitesurfista muy alto sobre las olas frente a las antiguas naves de la almadraba de Tarifa",
        nl: "Een kitesurfer hoog boven de golven voor de oude almadraba-gebouwen bij Tarifa",
        sv: "En kitesurfare högt över vågorna framför Tarifas gamla tonfiskeribyggnader"
      }
    },
    {
      role: 'panorama',
      id: 'sunset',
      src: '/images/tarifa/_DCS2079_Sebastian_Lang.jpg',
      focalPoint: '50% 45%',
      credit: "Sebastian Lang",
      alt: {
        en: "A kitesurfer jumping against the setting sun over the sea at Tarifa",
        de: "Kitesurfer im Sprung vor der untergehenden Sonne über dem Meer bei Tarifa",
        es: "Un kitesurfista saltando contra el sol poniente sobre el mar en Tarifa",
        nl: "Een kitesurfer die springt tegen de ondergaande zon boven de zee bij Tarifa",
        sv: "En kitesurfare i ett hopp mot den nedgående solen över havet vid Tarifa"
      },
      caption: {
        en: "The Levante often eases at dusk — the last session of the day is frequently the cleanest.",
        de: "Der Levante lässt zum Abend oft nach — die letzte Session des Tages ist häufig die sauberste.",
        es: "El levante suele amainar al anochecer: la última sesión del día es a menudo la más limpia.",
        nl: "De levante zwakt tegen de avond vaak af — de laatste sessie van de dag is vaak de schoonste.",
        sv: "Levanten mojnar ofta mot kvällen — dagens sista pass är ofta det renaste."
      }
    },
    {
      role: 'split',
      id: 'partner',
      src: '/images/tarifa/mark-robert-tarifa-surf-club.webp',
      alt: {
        en: "Mark from Tarifa Surf Club and Robert from AMARA in Tarifa",
        de: "Mark vom Tarifa Surf Club und Robert von AMARA in Tarifa",
        es: "Mark de Tarifa Surf Club y Robert de AMARA en Tarifa",
        nl: "Mark van Tarifa Surf Club en Robert van AMARA in Tarifa",
        sv: "Mark från Tarifa Surf Club och Robert från AMARA i Tarifa"
      },
      caption: {
        en: "Mark and Robert: direct coordination in Tarifa",
        de: "Mark und Robert in Tarifa",
        es: "Mark y Robert: coordinación directa en Tarifa",
        nl: "Mark en Robert: directe afstemming in Tarifa",
        sv: "Mark och Robert: direkt samordning i Tarifa"
      }
    },
    {
      role: 'editorial',
      id: 'windguru',
      src: '/images/tarifa/windguru-tarifa-vorhersage-tabelle.webp',
      credit: "Screenshot: windguru.cz, 11.9.2026",
      alt: {
        en: "The Windguru forecast table for Tarifa: wind speed, gusts, direction, temperature, cloud, rain and rating over several days, with the model tabs below",
        de: "Die Windguru-Vorhersagetabelle für Tarifa: Windstärke, Böen, Richtung, Temperatur, Bewölkung, Regen und Wertung über mehrere Tage, darunter die Modell-Reiter",
        es: "La tabla de previsión de Windguru para Tarifa: viento, rachas, dirección, temperatura, nubes, lluvia y valoración durante varios días, con las pestañas de modelos debajo",
        nl: "De Windguru-verwachtingstabel voor Tarifa: windsterkte, vlagen, richting, temperatuur, bewolking, regen en beoordeling over meerdere dagen, met de modeltabs eronder",
        sv: "Windgurus prognostabell för Tarifa: vindstyrka, byar, riktning, temperatur, moln, regn och betyg över flera dagar, med modellflikarna under"
      },
      caption: {
        en: "This is what the table looks like at Windguru; the link opens it live. The rows are explained in chapter 3.",
        de: "So sieht die Tabelle bei Windguru aus; der Link öffnet sie live. Die Zeilen erklären wir in Kapitel 3.",
        es: "Así se ve la tabla en Windguru; el enlace la abre en directo. Las filas las explicamos en el capítulo 3.",
        nl: "Zo ziet de tabel er bij Windguru uit; de link opent hem live. De rijen leggen we uit in hoofdstuk 3.",
        sv: "Så ser tabellen ut hos Windguru; länken öppnar den live. Raderna förklarar vi i kapitel 3."
      }
    },
    {
      role: 'og',
      src: '/images/robert-amara-host.jpg'
    }
  ]
});
