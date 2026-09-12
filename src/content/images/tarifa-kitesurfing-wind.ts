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
      role: 'split',
      id: 'partner',
      src: '/images/tarifa/mark-robert-tarifa-surf-club-beach.webp',
      focalPoint: '50% 35%',
      alt: {
        en: "Mark from Tarifa Surf Club and Robert from AMARA sitting on a wall above Los Lances beach",
        de: "Mark vom Tarifa Surf Club und Robert von AMARA auf einer Mauer über dem Strand von Los Lances",
        es: "Mark, de Tarifa Surf Club, y Robert, de AMARA, sentados en un muro sobre la playa de Los Lances",
        nl: "Mark van Tarifa Surf Club en Robert van AMARA op een muurtje boven het strand van Los Lances",
        sv: "Mark från Tarifa Surf Club och Robert från AMARA på en mur ovanför stranden Los Lances"
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
        en: "This is what the table looks like at Windguru; the link opens it live. The rows are explained directly below.",
        de: "So sieht die Tabelle bei Windguru aus; der Link öffnet sie live. Die Zeilen erklären wir direkt darunter.",
        es: "Así se ve la tabla en Windguru; el enlace la abre en directo. Las filas las explicamos justo debajo.",
        nl: "Zo ziet de tabel er bij Windguru uit; de link opent hem live. De rijen leggen we direct hieronder uit.",
        sv: "Så ser tabellen ut hos Windguru; länken öppnar den live. Raderna förklarar vi direkt nedanför."
      }
    },
    {
      role: 'editorial',
      id: 'windguru-sticker',
      src: '/images/tarifa/windguru-tarifa-hero-sticker.webp',
      credit: "Screenshot: windguru.cz, 11.9.2026",
      alt: {
        en: "Cut-out of the Windguru table for Tarifa: two days of wind speed, gusts, direction and temperature",
        de: "Ausschnitt der Windguru-Tabelle für Tarifa: zwei Tage Windstärke, Böen, Richtung und Temperatur",
        es: "Recorte de la tabla de Windguru para Tarifa: dos días de viento, rachas, dirección y temperatura",
        nl: "Uitsnede van de Windguru-tabel voor Tarifa: twee dagen windsterkte, vlagen, richting en temperatuur",
        sv: "Utsnitt ur Windguru-tabellen för Tarifa: två dagar vindstyrka, byar, riktning och temperatur"
      }
    },
    {
      role: 'og',
      src: '/images/robert-amara-host.jpg'
    }
  ]
});
