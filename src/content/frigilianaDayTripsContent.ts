import type { AmaraAuthoringSeo, AmaraLanguage } from '../types/seo';
import { routeOgImage } from '../lib/images/routeImages';

export interface FrigilianaDayTripsPageCopy {
  footerHighlights: {
    dayTrips: string;
    beaches: string;
    restaurants: string;
  };
  hero: {
    kicker: string;
    title: string;
    paragraphs: string[];
    imageAlt: string;
    availabilityCta: string;
  };
  sectionNav: {
    overview: string;
    malaga: string;
    granada: string;
    caminito: string;
    ronda: string;
    practical: string;
  };
  overview: {
    title: string;
    intro: string;
    rule: string;
    reviewed: string;
    items: {
      title: string;
      text: string;
    }[];
  };
  /** Recommendation record ids; the destination sections are built from the place copy (DR-GUEST-006). */
  destinationIds: readonly string[];
  practical: {
    title: string;
    intro: string;
    items: {
      title: string;
      text: string;
    }[];
  };
  combine: {
    title: string;
    intro: string;
    items: {
      title: string;
      text: string;
      linkToken:
        | 'frigiliana_beaches_authority'
        | 'frigiliana_food_authority';
      linkLabel: string;
    }[];
  };
  closing: {
    title: string;
    lead: string;
    nextCta: string;
  };
}


export const frigilianaDayTripsSeo: AmaraAuthoringSeo = {
  version: '2026-07-29-frigiliana-day-trips-v1.0-B',
  pageType: 'B',
  entityKey: 'amara-brand',
  ogImage: routeOgImage('frigiliana.experience.day-trips'),
  languages: {
    en: {
      title: 'Day Trips from Frigiliana: Málaga, Granada & Ronda',
      description:
        'Plan day trips from Frigiliana to Málaga, Granada, Caminito del Rey and Ronda with realistic drive times, ticket advice and relaxed itineraries.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    de: {
      title: 'Frigiliana: Tagesausflüge Málaga, Granada & Ronda',
      description:
        'Plant Tagesausflüge von Frigiliana nach Málaga, Granada, zum Caminito del Rey und nach Ronda – mit Fahrzeiten, Ticket-Tipps und ruhigen Routen.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    es: {
      title: 'Frigiliana: excursiones a Málaga, Granada y Ronda',
      description:
        'Planificad excursiones desde Frigiliana a Málaga, Granada, Caminito del Rey y Ronda con tiempos orientativos, entradas y rutas sin prisas.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    nl: {
      title: 'Frigiliana: dagtochten naar Málaga, Granada & Ronda',
      description:
        'Plan dagtochten vanuit Frigiliana naar Málaga, Granada, Caminito del Rey en Ronda met rijtijden, ticketadvies en ontspannen routes.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    sv: {
      title: 'Frigiliana: dagsutflykter Málaga, Granada & Ronda',
      description:
        'Planera dagsutflykter från Frigiliana till Málaga, Granada, Caminito del Rey och Ronda med körtider, biljettråd och lugna upplägg.',
      robots: 'index, follow',
      canonical: 'auto'
    }
  }
};

/**
 * English is the semantic source of truth for this page.
 * Every localization preserves the same destinations, planning cautions and
 * practical depth while using natural guest-facing language for its market.
 */
export const frigilianaDayTripsContent: Record<
  AmaraLanguage,
  FrigilianaDayTripsPageCopy
> = {
  en: {
    footerHighlights: {
      dayTrips: 'Day trips',
      beaches: 'Beach guide',
      restaurants: 'Restaurant guide'
    },
    hero: {
      kicker: 'Andalusia guide',
      title:
        'Day trips from Frigiliana: culture, history and scenic drives',
      paragraphs: [
        'Staying in Frigiliana gives you a rare advantage: you sleep in calm hill air, yet some of Andalusia’s most memorable places are within reach for a day.',
        'Frigiliana remains your base; the day trip is the accent. Pick one main highlight, add a relaxed meal and perhaps one extra stop, then return for a quiet village evening instead of turning the day into a checklist.'
      ],
      imageAlt:
        'Whitewashed Frigiliana in the hills, a calm base for day trips through Andalusia',
      availabilityCta: 'Check availability'
    },
    sectionNav: {
      overview: 'Plan simply',
      malaga: 'Málaga',
      granada: 'Granada',
      caminito: 'Caminito',
      ronda: 'Ronda',
      practical: 'Practical'
    },
    overview: {
      title: 'Choose one memorable focus for the day',
      intro:
        'The best day trips from Frigiliana focus on one main destination and leave the rest of the day flexible.',
      rule:
        'One highlight per day is enough. Leaving around 09:00 is what makes the return to the village calm rather than rushed.',
      reviewed: 'Editorially reviewed: July 2026',
      items: [
        {
          title: 'Easiest cultural day',
          text:
            'Choose Málaga for museums, a walkable historic centre, shopping and lunch by the city or port.'
        },
        {
          title: 'Big history day',
          text:
            'Choose Granada when the Alhambra, Moorish architecture and hilltop viewpoints are the main reason for going.'
        },
        {
          title: 'Active nature day',
          text:
            'Choose Caminito del Rey for a structured outdoor experience with advance booking, walking access and shuttle logistics.'
        },
        {
          title: 'Longest scenic day',
          text:
            'Choose Ronda for its gorge, Puente Nuevo and a slower road journey through changing Andalusian landscapes.'
        }
      ]
    },
    destinationIds: ['frigiliana.day-trips.malaga-city', 'frigiliana.day-trips.granada-alhambra', 'frigiliana.day-trips.caminito-del-rey', 'frigiliana.day-trips.ronda'],
    practical: {
      title: 'Practical essentials',
      intro:
        'A small amount of preparation makes these days much calmer. Treat driving times as estimates and recheck tickets, opening hours, road conditions and public transport close to your date.',
      items: [
        {
          title: 'Car and public transport',
          text:
            'A car is strongly recommended for Granada, Ronda and Caminito del Rey. Málaga may be possible by public transport, but check current connections and the return schedule before relying on it.'
        },
        {
          title: 'Summer heat',
          text:
            'Inland destinations can become extremely hot in summer. Start early, carry water and build shade and rest into the middle of the day.'
        },
        {
          title: 'Sundays and opening hours',
          text:
            'Sunday opening varies by museum, shop and restaurant. Check the exact places you want to visit instead of assuming a general schedule.'
        },
        {
          title: 'A calm return',
          text:
            'Leave margin for traffic, parking and an unhurried meal. Returning before late evening preserves the contrast that makes Frigiliana such a rewarding base.'
        }
      ]
    },
    combine: {
      title: 'Balance the day with the rest of your stay',
      intro:
        'After a day of culture, walking or driving, coming back towards the coast feels restorative. Keep the following day lighter or plan dinner before you leave.',
      items: [
        {
          title: 'Beaches & coast',
          text:
            'Follow a longer excursion with a relaxed beach day around Nerja and the eastern Costa del Sol.',
          linkToken: 'frigiliana_beaches_authority',
          linkLabel: 'See the beach guide'
        },
        {
          title: 'Dining',
          text:
            'Choose a local restaurant for the evening you return, or reserve somewhere near your route home.',
          linkToken: 'frigiliana_food_authority',
          linkLabel: 'See the restaurant guide'
        }
      ]
    },
    closing: {
      title: 'A calm return starts with parking',
      lead:
        'After a long day on the road, the parking choice shapes how calmly you reach the old town. We start with the paid car park below Plaza de las Tres Culturas, save the car’s position and allow time for the final walk uphill.',
      nextCta: 'Plan parking in Frigiliana'
    }
  },
  de: {
    footerHighlights: {
      dayTrips: 'Tagesausflüge',
      beaches: 'Strand-Guide',
      restaurants: 'Restaurant-Guide'
    },
    hero: {
      kicker: 'Andalusien-Guide',
      title:
        'Tagesausflüge ab Frigiliana: Kultur, Geschichte und Panoramastraßen',
      paragraphs: [
        'Ein Aufenthalt in Frigiliana bietet einen seltenen Vorteil: Ihr schlaft in der ruhigen Luft der Hügel und erreicht dennoch einige der eindrucksvollsten Orte Andalusiens innerhalb eines Tages.',
        'Frigiliana bleibt eure Basis; der Ausflug setzt den Akzent. Wählt ein großes Highlight, ergänzt ein entspanntes Essen und vielleicht einen weiteren Stopp und kehrt anschließend zu einem ruhigen Abend im Dorf zurück, statt den Tag in eine Checkliste zu verwandeln.'
      ],
      imageAlt:
        'Das weiße Frigiliana in den Hügeln als ruhiger Ausgangspunkt für Ausflüge durch Andalusien',
      availabilityCta: 'Verfügbarkeit prüfen'
    },
    sectionNav: {
      overview: 'Einfach planen',
      malaga: 'Málaga',
      granada: 'Granada',
      caminito: 'Caminito',
      ronda: 'Ronda',
      practical: 'Praktisch'
    },
    overview: {
      title: 'Ein prägendes Erlebnis pro Tag',
      intro:
        'Die besten Tagesausflüge ab Frigiliana konzentrieren sich auf ein Hauptziel und lassen den Rest des Tages flexibel.',
      rule:
        'Ein Hauptziel pro Tag reicht. Wer gegen 09:00 Uhr losfährt, kommt abends in Ruhe ins Dorf zurück statt in Hektik.',
      reviewed: 'Redaktionell geprüft: Juli 2026',
      items: [
        {
          title: 'Einfachster Kulturtag',
          text:
            'Málaga passt für Museen, eine gut begehbare Altstadt, Shopping und ein Mittagessen in der Stadt oder am Hafen.'
        },
        {
          title: 'Großer Geschichtstag',
          text:
            'Granada ist richtig, wenn Alhambra, maurische Architektur und Aussichtspunkte der eigentliche Grund für den Ausflug sind.'
        },
        {
          title: 'Aktiver Naturtag',
          text:
            'Der Caminito del Rey bietet ein klar geplantes Naturerlebnis mit Reservierung, Zugangswegen und Shuttle.'
        },
        {
          title: 'Längster Panoramatag',
          text:
            'Ronda steht für die Schlucht, den Puente Nuevo und eine langsamere Fahrt durch wechselnde andalusische Landschaften.'
        }
      ]
    },
    destinationIds: ['frigiliana.day-trips.malaga-city', 'frigiliana.day-trips.granada-alhambra', 'frigiliana.day-trips.caminito-del-rey', 'frigiliana.day-trips.ronda'],
    practical: {
      title: 'Praktische Grundlagen',
      intro:
        'Ein wenig Vorbereitung macht diese Tage deutlich ruhiger. Betrachtet Fahrzeiten als Richtwerte und prüft Tickets, Öffnungszeiten, Straßenbedingungen und öffentliche Verbindungen kurz vor eurem Termin erneut.',
      items: [
        {
          title: 'Auto und öffentliche Verkehrsmittel',
          text:
            'Für Granada, Ronda und den Caminito del Rey ist ein Auto sehr zu empfehlen. Málaga kann mit öffentlichen Verkehrsmitteln funktionieren; prüft aber aktuelle Verbindungen und die Rückfahrt, bevor ihr euch darauf verlasst.'
        },
        {
          title: 'Sommerhitze',
          text:
            'Im Landesinneren kann es im Sommer extrem heiß werden. Startet früh, nehmt Wasser mit und plant für die Mittagszeit Schatten und Pausen ein.'
        },
        {
          title: 'Sonntage und Öffnungszeiten',
          text:
            'Sonntags unterscheiden sich die Öffnungszeiten je nach Museum, Geschäft und Restaurant. Prüft eure konkreten Ziele, statt von einem allgemeinen Rhythmus auszugehen.'
        },
        {
          title: 'Ruhige Rückkehr',
          text:
            'Lasst Puffer für Verkehr, Parkplatzsuche und ein entspanntes Essen. Eine Rückkehr vor dem späten Abend bewahrt den Kontrast, der Frigiliana als Basis so angenehm macht.'
        }
      ]
    },
    combine: {
      title: 'Den Ausflug mit dem restlichen Aufenthalt ausbalancieren',
      intro:
        'Nach einem Tag voller Kultur, Bewegung oder Fahrt wirkt die Rückkehr Richtung Küste erholsam. Haltet den Folgetag leichter oder plant das Abendessen schon vor der Abfahrt.',
      items: [
        {
          title: 'Strände & Küste',
          text:
            'Lasst auf einen längeren Ausflug einen entspannten Strandtag rund um Nerja und an der östlichen Costa del Sol folgen.',
          linkToken: 'frigiliana_beaches_authority',
          linkLabel: 'Zum Strand-Guide'
        },
        {
          title: 'Essen gehen',
          text:
            'Wählt für den Abend nach der Rückkehr ein Restaurant im Dorf oder reserviert einen passenden Ort entlang eurer Rückroute.',
          linkToken: 'frigiliana_food_authority',
          linkLabel: 'Zum Restaurant-Guide'
        }
      ]
    },
    closing: {
      title: 'Eine entspannte Rückkehr beginnt beim Parken',
      lead:
        'Nach einem langen Fahrtag prägt die Parkplatzwahl, wie entspannt ihr die Altstadt erreicht. Wir beginnen beim kostenpflichtigen Parkhaus unterhalb der Plaza de las Tres Culturas, speichern die Parkposition und planen Zeit für den letzten Fußweg bergauf ein.',
      nextCta: 'Parken in Frigiliana planen'
    }
  },
  es: {
    footerHighlights: {
      dayTrips: 'Excursiones',
      beaches: 'Guía de playas',
      restaurants: 'Guía de restaurantes'
    },
    hero: {
      kicker: 'Guía de Andalucía',
      title:
        'Excursiones desde Frigiliana: cultura, historia y rutas panorámicas',
      paragraphs: [
        'Alojarse en Frigiliana ofrece una ventaja poco habitual: dormís en la tranquilidad de las colinas y, aun así, podéis llegar en el día a algunos de los lugares más memorables de Andalucía.',
        'Frigiliana sigue siendo vuestra base; la excursión pone el acento. Elegid un gran atractivo, añadid una comida sin prisas y quizá una parada más, y regresad para disfrutar de una noche tranquila en el pueblo en lugar de convertir el día en una lista de obligaciones.'
      ],
      imageAlt:
        'El pueblo blanco de Frigiliana entre colinas como base tranquila para recorrer Andalucía',
      availabilityCta: 'Consultar disponibilidad'
    },
    sectionNav: {
      overview: 'Plan sencillo',
      malaga: 'Málaga',
      granada: 'Granada',
      caminito: 'Caminito',
      ronda: 'Ronda',
      practical: 'Información útil'
    },
    overview: {
      title: 'Un gran motivo para cada día',
      intro:
        'Las mejores excursiones desde Frigiliana no consisten en acumular monumentos. Funcionan cuando os centráis en un destino principal y dejáis flexible el resto de la jornada.',
      rule:
        'Un atractivo principal por día basta. Salir hacia las 09:00 es lo que hace que el regreso al pueblo sea tranquilo y no apresurado.',
      reviewed: 'Revisión editorial: julio de 2026',
      items: [
        {
          title: 'El día cultural más fácil',
          text:
            'Elegid Málaga para combinar museos, un casco histórico cómodo para caminar, compras y una comida en la ciudad o el puerto.'
        },
        {
          title: 'Un gran día de historia',
          text:
            'Elegid Granada cuando la Alhambra, la arquitectura andalusí y los miradores sean el verdadero motivo de la salida.'
        },
        {
          title: 'Un día activo en la naturaleza',
          text:
            'Elegid el Caminito del Rey para una experiencia al aire libre bien estructurada, con reserva, acceso a pie y lanzadera.'
        },
        {
          title: 'La ruta panorámica más larga',
          text:
            'Elegid Ronda por el desfiladero, el Puente Nuevo y un viaje más pausado entre paisajes andaluces cambiantes.'
        }
      ]
    },
    destinationIds: ['frigiliana.day-trips.malaga-city', 'frigiliana.day-trips.granada-alhambra', 'frigiliana.day-trips.caminito-del-rey', 'frigiliana.day-trips.ronda'],
    practical: {
      title: 'Información práctica esencial',
      intro:
        'Un poco de preparación hace que estas jornadas sean mucho más tranquilas. Considerad los tiempos de conducción como orientativos y volved a comprobar entradas, horarios, carreteras y transporte público cerca de vuestra fecha.',
      items: [
        {
          title: 'Coche y transporte público',
          text:
            'El coche es muy recomendable para Granada, Ronda y el Caminito del Rey. Málaga puede ser viable en transporte público, pero comprobad las conexiones actuales y el regreso antes de depender de ellas.'
        },
        {
          title: 'Calor en verano',
          text:
            'Los destinos del interior pueden alcanzar temperaturas extremas en verano. Empezad temprano, llevad agua y reservad sombra y pausas para las horas centrales.'
        },
        {
          title: 'Domingos y horarios',
          text:
            'La apertura dominical cambia según el museo, la tienda o el restaurante. Comprobad los lugares concretos que queréis visitar en lugar de dar por hecho un horario general.'
        },
        {
          title: 'Regreso sin prisas',
          text:
            'Dejad margen para el tráfico, el aparcamiento y una comida tranquila. Volver antes de que sea demasiado tarde conserva el contraste que convierte a Frigiliana en una base tan agradable.'
        }
      ]
    },
    combine: {
      title: 'Equilibrad la excursión con el resto de la estancia',
      intro:
        'Después de un día de cultura, caminata o carretera, volver hacia la costa resulta reparador. Haced más ligero el día siguiente o dejad organizada la cena antes de salir.',
      items: [
        {
          title: 'Playas y costa',
          text:
            'Después de una excursión larga, dedicad el día siguiente a una playa tranquila en torno a Nerja y la Costa del Sol oriental.',
          linkToken: 'frigiliana_beaches_authority',
          linkLabel: 'Ver la guía de playas'
        },
        {
          title: 'Restaurantes',
          text:
            'Elegid un restaurante del pueblo para la noche del regreso o reservad un lugar conveniente en la ruta de vuelta.',
          linkToken: 'frigiliana_food_authority',
          linkLabel: 'Ver la guía de restaurantes'
        }
      ]
    },
    closing: {
      title: 'Un regreso tranquilo empieza con el aparcamiento',
      lead:
        'Después de un día largo en carretera, el aparcamiento marca lo tranquilos que llegáis al casco antiguo. Empezamos por el aparcamiento de pago bajo la Plaza de las Tres Culturas, guardamos la ubicación del coche y dejamos tiempo para el último tramo a pie cuesta arriba.',
      nextCta: 'Organizar el aparcamiento en Frigiliana'
    }
  },
  nl: {
    footerHighlights: {
      dayTrips: 'Dagtochten',
      beaches: 'Strandgids',
      restaurants: 'Restaurantgids'
    },
    hero: {
      kicker: 'Andalusië-gids',
      title:
        'Dagtochten vanuit Frigiliana: cultuur, geschiedenis en mooie autoroutes',
      paragraphs: [
        'Een verblijf in Frigiliana heeft een bijzonder voordeel: jullie slapen in de rustige heuvels, terwijl enkele van de meest indrukwekkende plekken van Andalusië binnen één dag bereikbaar zijn.',
        'Frigiliana blijft jullie uitvalsbasis; de dagtocht legt het accent. Kies één hoofdattractie, voeg een ontspannen maaltijd en eventueel één extra stop toe en keer terug voor een rustige dorpsavond, in plaats van van de dag een checklist te maken.'
      ],
      imageAlt:
        'Het witte dorp Frigiliana in de heuvels als rustige uitvalsbasis voor dagtochten door Andalusië',
      availabilityCta: 'Beschikbaarheid bekijken'
    },
    sectionNav: {
      overview: 'Eenvoudig plannen',
      malaga: 'Málaga',
      granada: 'Granada',
      caminito: 'Caminito',
      ronda: 'Ronda',
      practical: 'Praktisch'
    },
    overview: {
      title: 'Kies één onvergetelijk middelpunt voor de dag',
      intro:
        'De beste dagtochten vanuit Frigiliana draaien niet om zo veel mogelijk bezienswaardigheden. Ze werken wanneer de bestemming het tempo bepaalt en de rest van de dag flexibel blijft.',
      rule:
        'Eén hoofdactiviteit per dag is genoeg. Rond 09.00 uur vertrekken is wat de terugkeer naar het dorp rustig maakt in plaats van gehaast.',
      reviewed: 'Redactioneel gecontroleerd: juli 2026',
      items: [
        {
          title: 'Eenvoudigste cultuurdag',
          text:
            'Kies Málaga voor musea, een goed beloopbaar historisch centrum, winkelen en lunch in de stad of aan de haven.'
        },
        {
          title: 'Grote geschiedenisdag',
          text:
            'Kies Granada wanneer het Alhambra, Moorse architectuur en uitzichtpunten de belangrijkste reden voor de rit zijn.'
        },
        {
          title: 'Actieve natuurdag',
          text:
            'Kies Caminito del Rey voor een gestructureerde buitenervaring met reservering, aanlooproute en shuttle.'
        },
        {
          title: 'Langste panoramadag',
          text:
            'Kies Ronda voor de kloof, de Puente Nuevo en een langzamere rit door wisselende Andalusische landschappen.'
        }
      ]
    },
    destinationIds: ['frigiliana.day-trips.malaga-city', 'frigiliana.day-trips.granada-alhambra', 'frigiliana.day-trips.caminito-del-rey', 'frigiliana.day-trips.ronda'],
    practical: {
      title: 'Praktische basisinformatie',
      intro:
        'Een beetje voorbereiding maakt deze dagen veel rustiger. Zie rijtijden als indicatie en controleer tickets, openingstijden, wegomstandigheden en openbaar vervoer opnieuw vlak voor jullie datum.',
      items: [
        {
          title: 'Auto en openbaar vervoer',
          text:
            'Een auto is sterk aan te raden voor Granada, Ronda en Caminito del Rey. Málaga kan met openbaar vervoer haalbaar zijn, maar controleer actuele verbindingen en de terugreis voordat jullie daarop rekenen.'
        },
        {
          title: 'Zomerhitte',
          text:
            'Bestemmingen landinwaarts kunnen in de zomer extreem heet worden. Begin vroeg, neem water mee en plan schaduw en rust tijdens het heetste deel van de dag.'
        },
        {
          title: 'Zondagen en openingstijden',
          text:
            'Opening op zondag verschilt per museum, winkel en restaurant. Controleer de concrete plekken die jullie willen bezoeken in plaats van uit te gaan van één algemeen schema.'
        },
        {
          title: 'Rustige terugkeer',
          text:
            'Houd marge voor verkeer, parkeren en een ontspannen maaltijd. Terugkeren vóór de late avond bewaart het contrast dat Frigiliana zo prettig maakt als uitvalsbasis.'
        }
      ]
    },
    combine: {
      title: 'Combineer de dagtocht met de rest van jullie verblijf',
      intro:
        'Na een dag vol cultuur, wandelen of autorijden voelt de terugkeer richting kust verfrissend. Houd de volgende dag lichter of regel het diner voordat jullie vertrekken.',
      items: [
        {
          title: 'Stranden & kust',
          text:
            'Laat op een langere uitstap een ontspannen stranddag rond Nerja en aan de oostelijke Costa del Sol volgen.',
          linkToken: 'frigiliana_beaches_authority',
          linkLabel: 'Bekijk de strandgids'
        },
        {
          title: 'Uit eten',
          text:
            'Kies voor de avond na terugkomst een restaurant in het dorp of reserveer een handige plek langs de terugroute.',
          linkToken: 'frigiliana_food_authority',
          linkLabel: 'Bekijk de restaurantgids'
        }
      ]
    },
    closing: {
      title: 'Een rustige terugkeer begint met parkeren',
      lead:
        'Na een lange dag onderweg bepaalt de parkeerkeuze hoe ontspannen jullie de oude kern bereiken. We beginnen bij de betaalde parkeergarage onder Plaza de las Tres Culturas, slaan de locatie van de auto op en nemen tijd voor het laatste stuk bergop.',
      nextCta: 'Parkeren in Frigiliana plannen'
    }
  },
  sv: {
    footerHighlights: {
      dayTrips: 'Dagsutflykter',
      beaches: 'Strandguide',
      restaurants: 'Restaurangguide'
    },
    hero: {
      kicker: 'Andalusienguide',
      title:
        'Dagsutflykter från Frigiliana: kultur, historia och vackra bilvägar',
      paragraphs: [
        'En vistelse i Frigiliana har en ovanlig fördel: ni sover i kullarnas lugna luft men kan ändå nå några av Andalusiens mest minnesvärda platser över dagen.',
        'Frigiliana förblir er bas; utflykten sätter accenten. Välj en huvudupplevelse, lägg till en lugn måltid och möjligen ett extra stopp och återvänd sedan till en stillsam kväll i byn i stället för att göra dagen till en checklista.'
      ],
      imageAlt:
        'Den vita byn Frigiliana bland kullarna som lugn bas för dagsutflykter i Andalusien',
      availabilityCta: 'Kontrollera tillgänglighet'
    },
    sectionNav: {
      overview: 'Planera enkelt',
      malaga: 'Málaga',
      granada: 'Granada',
      caminito: 'Caminito',
      ronda: 'Ronda',
      practical: 'Praktiskt'
    },
    overview: {
      title: 'Välj ett minnesvärt huvudmål för dagen',
      intro:
        'De bästa dagsutflykterna från Frigiliana handlar inte om att samla sevärdheter. De fungerar när ni fokuserar på ett huvudmål och låter resten av dagen vara flexibel.',
      rule:
        'En huvudupplevelse per dag räcker. Att åka omkring 09.00 är det som gör återkomsten till byn lugn i stället för stressad.',
      reviewed: 'Redaktionellt granskad: juli 2026',
      items: [
        {
          title: 'Enklaste kulturdagen',
          text:
            'Välj Málaga för museer, en promenadvänlig gammal stad, shopping och lunch i staden eller vid hamnen.'
        },
        {
          title: 'Stor historiedag',
          text:
            'Välj Granada när Alhambra, morisk arkitektur och utsiktsplatser är den egentliga anledningen till resan.'
        },
        {
          title: 'Aktiv naturdag',
          text:
            'Välj Caminito del Rey för en strukturerad naturupplevelse med bokning, anslutningsväg och transferbuss.'
        },
        {
          title: 'Längsta panoramadagen',
          text:
            'Välj Ronda för ravinen, Puente Nuevo och en långsammare resa genom skiftande andalusiska landskap.'
        }
      ]
    },
    destinationIds: ['frigiliana.day-trips.malaga-city', 'frigiliana.day-trips.granada-alhambra', 'frigiliana.day-trips.caminito-del-rey', 'frigiliana.day-trips.ronda'],
    practical: {
      title: 'Praktiska grunder',
      intro:
        'Lite förberedelse gör dessa dagar betydligt lugnare. Se körtiderna som uppskattningar och kontrollera biljetter, öppettider, vägförhållanden och kollektivtrafik igen nära ert datum.',
      items: [
        {
          title: 'Bil och kollektivtrafik',
          text:
            'Bil rekommenderas starkt för Granada, Ronda och Caminito del Rey. Málaga kan fungera med kollektivtrafik, men kontrollera aktuella anslutningar och hemresan innan ni förlitar er på den.'
        },
        {
          title: 'Sommarvärme',
          text:
            'Resmål inåt landet kan bli extremt varma på sommaren. Börja tidigt, ta med vatten och planera skugga och pauser under dagens hetaste timmar.'
        },
        {
          title: 'Söndagar och öppettider',
          text:
            'Söndagsöppet varierar mellan museer, butiker och restauranger. Kontrollera de konkreta platser ni vill besöka i stället för att anta ett gemensamt schema.'
        },
        {
          title: 'Lugn återkomst',
          text:
            'Lämna marginal för trafik, parkering och en avspänd måltid. En återkomst före sen kväll bevarar kontrasten som gör Frigiliana till en så givande bas.'
        }
      ]
    },
    combine: {
      title: 'Balansera utflykten med resten av vistelsen',
      intro:
        'Efter en dag med kultur, vandring eller bilkörning känns återkomsten mot kusten uppfriskande. Håll nästa dag lättare eller planera middagen innan ni åker.',
      items: [
        {
          title: 'Stränder & kust',
          text:
            'Följ en längre utflykt med en lugn stranddag kring Nerja och den östra delen av Costa del Sol.',
          linkToken: 'frigiliana_beaches_authority',
          linkLabel: 'Se strandguiden'
        },
        {
          title: 'Restauranger',
          text:
            'Välj en lokal restaurang för kvällen när ni återvänder eller boka ett passande ställe längs vägen hem.',
          linkToken: 'frigiliana_food_authority',
          linkLabel: 'Se restaurangguiden'
        }
      ]
    },
    closing: {
      title: 'En lugn återkomst börjar med parkeringen',
      lead:
        'Efter en lång dag på vägen påverkar parkeringen hur lugnt ni når gamla stan. Vi börjar vid betalparkeringen nedanför Plaza de las Tres Culturas, sparar bilens position och lämnar tid för den sista promenaden uppför.',
      nextCta: 'Planera parkeringen i Frigiliana'
    }
  }
};
