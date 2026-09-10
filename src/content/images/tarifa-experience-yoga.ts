import { defineRouteImages } from '../../lib/images/routeImageContract';

/**
 * Yoga spoke (tarifa.experience.yoga).
 *
 * Three photographs illustrate yoga in Tarifa — a morning beach practice, an aerial
 * class and a private session. All three come from Mandalablue Yoga, one of the five
 * studios the page lists; they sit as a topic gallery (not beside a single operator),
 * with a 'Fotos: Mandalablue Yoga' credit rendered once on the spoke page.
 */
export const tarifaExperienceYogaImages = defineRouteImages({
  routeKey: 'tarifa.experience.yoga',
  images: [
    {
      role: 'gallery',
      id: 'beach-morning',
      src: '/images/tarifa/yoga/Mandalablue_yoga_beach_playa_tarifa_morning_hatha_vinyasa.webp',
      credit: 'Mandalablue Yoga',
      focalPoint: '50% 50%',
      alt: {
        en: 'Three people in an upward-facing pose on the sand, facing the sea at a Tarifa beach',
        de: 'Drei Menschen in einer aufgerichteten Haltung im Sand, mit Blick aufs Meer an einem Strand in Tarifa',
        es: 'Tres personas en una postura hacia arriba sobre la arena, de cara al mar en una playa de Tarifa',
        nl: 'Drie mensen in een opwaartse houding op het zand, met de zee voor zich op een strand in Tarifa',
        sv: 'Tre personer i en uppåtvänd position i sanden, med havet framför sig på en strand i Tarifa'
      },
      caption: {
        en: 'A morning practice on the beach, facing the sea.',
        de: 'Morgenpraxis am Strand, mit Blick aufs Meer.',
        es: 'Práctica matinal en la playa, de cara al mar.',
        nl: 'Ochtendpraktijk op het strand, met zicht op zee.',
        sv: 'Morgonpraktik på stranden, med utsikt mot havet.'
      }
    },
    {
      role: 'gallery',
      id: 'aerial',
      src: '/images/tarifa/yoga/Mandalablue_yoga_beach_playa_tarifa_aerial_flyhigh.webp',
      credit: 'Mandalablue Yoga',
      focalPoint: '50% 45%',
      alt: {
        en: 'A group in aerial-yoga hammocks, hanging upside down under a bamboo roof by the beach',
        de: 'Eine Gruppe in Aerial-Yoga-Tüchern, kopfüber unter einem Bambusdach am Strand',
        es: 'Un grupo en columpios de yoga aéreo, boca abajo bajo un techo de bambú junto a la playa',
        nl: 'Een groep in aerial-yogadoeken, ondersteboven onder een bamboedak bij het strand',
        sv: 'En grupp i aerialyoga-hängmattor, upp och ner under ett bambutak vid stranden'
      },
      caption: {
        en: 'Aerial yoga under a bamboo roof.',
        de: 'Aerial-Yoga unter dem Bambusdach.',
        es: 'Yoga aéreo bajo un techo de bambú.',
        nl: 'Aerial yoga onder een bamboedak.',
        sv: 'Aerialyoga under ett bambutak.'
      }
    },
    {
      role: 'gallery',
      id: 'private',
      src: '/images/tarifa/yoga/Privateclass_Mandalablueyoga.webp',
      credit: 'Mandalablue Yoga',
      focalPoint: '50% 40%',
      alt: {
        en: 'A teacher guiding a student through a seated forward fold in warm evening light',
        de: 'Eine Lehrerin führt einen Schüler in einer sitzenden Vorbeuge, im warmen Abendlicht',
        es: 'Una profesora guía a un alumno en una flexión sentada hacia delante, con cálida luz de tarde',
        nl: 'Een docente begeleidt een leerling in een zittende voorwaartse buiging, in warm avondlicht',
        sv: 'En lärare vägleder en elev i en sittande framåtfällning i varmt kvällsljus'
      },
      caption: {
        en: 'A private session, one on one.',
        de: 'Eine Privatstunde, eins zu eins.',
        es: 'Una sesión privada, uno a uno.',
        nl: 'Een privésessie, één op één.',
        sv: 'Ett privat pass, en mot en.'
      }
    }
  ]
});
