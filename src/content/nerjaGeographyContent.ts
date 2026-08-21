import type { LinkToken } from '../lib/linkResolver';
import type { AmaraAuthoringSeo, AmaraLanguage } from '../types/seo';

export interface NerjaGeographySection {
  id: string;
  eyebrow: string;
  title: string;
  paragraphs: string[];
}

export interface NerjaGeographyLocale {
  navLabel: string;
  hero: {
    eyebrow: string;
    title: string;
    standfirst: string;
    note: string;
    updated: string;
  };
  facts: Array<{ label: string; value: string }>;
  orientation: {
    eyebrow: string;
    title: string;
    intro: string;
    items: Array<{ label: string; value: string }>;
  };
  sections: NerjaGeographySection[];
  related: {
    eyebrow: string;
    title: string;
    links: Array<{ token: LinkToken; label: string; text: string }>;
  };
  sources: {
    eyebrow: string;
    title: string;
    intro: string;
    checked: string;
    links: Array<{ label: string; text: string; href: string }>;
  };
  closing: {
    eyebrow: string;
    title: string;
    body: string;
    locationLabel: string;
    propertyLabel: string;
  };
}

const article = {
  datePublished: '2026-08-13',
  dateModified: '2026-08-21',
  authorName: 'Robert Sebastian Böhmer',
  authorType: 'Person' as const,
  authorSlug: 'amara-about-us'
};

/**
 * Public, verifiable sources. Shared across locales so a URL change stays a
 * single edit and every language keeps citing exactly the same reference.
 */
const sharedSources = {
  sima: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/sima/ficha.htm?mun=29075',
  simaAltitude: 'https://ws089.juntadeandalucia.es/sima/info.htm?f=a03',
  boundaries:
    'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/dega/delimitaciones-territoriales',
  terrain:
    'https://centrodedescargas.cnig.es/CentroDescargas/modelo-digital-terreno-mdt02-segunda-cobertura',
  naturalPark:
    'https://www.juntadeandalucia.es/medioambiente/portal/areas-tematicas/espacios-protegidos/legislacion-autonomica-nacional/parques-naturales/parque-natural-sierras-de-tejeda-almijara-y-alhama',
  coast:
    'https://www.nerja.es/el-alcalde-reivindica-unidad-de-accion-en-el-consejo-de-turismo/',
  /** MAINTENANCE: Río Chíllar closure. Re-check before each release. */
  chillarClosure: 'https://www.nerja.es/el-acceso-al-rio-chillar-permanece-cerrado/'
};

export const nerjaGeographySeo: AmaraAuthoringSeo = {
  version: '2026-08-21-nerja-geography-v2.1',
  pageType: 'A',
  entityKey: 'amara-brand',
  article,
  languages: {
    en: {
      title: 'Where Is Nerja? Mediterranean, Slopes & Sierra Almijara',
      description:
        'Read Nerja from the Mediterranean to the Sierra Almijara: coastal levels, rising neighbourhoods and what the relief means on foot.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    de: {
      title: 'Wo liegt Nerja? Mittelmeer, Hanglagen & Sierra Almijara',
      description:
        'Nerja geografisch verstehen: vom Mittelmeer über die ansteigenden Wohnlagen bis zur Sierra Almijara – und was das Gefälle zu Fuß bedeutet.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    es: {
      title: 'Dónde está Nerja: Mediterráneo, laderas y Sierra Almijara',
      description:
        'Orientación geográfica de Nerja: desde el Mediterráneo y las cotas costeras hasta las laderas y la Sierra Almijara, con sus efectos al caminar.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    nl: {
      title: 'Waar ligt Nerja? Zee, hellingen & Sierra Almijara',
      description:
        'Lees Nerja van de Middellandse Zee via oplopende woonwijken naar de Sierra Almijara en ontdek wat het hoogteverschil te voet betekent.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    sv: {
      title: 'Var ligger Nerja? Medelhavet & Sierra Almijara',
      description:
        'Förstå Nerjas geografi från Medelhavet via de stigande bostadsområdena till Sierra Almijara och vad höjdskillnaderna betyder till fots.',
      robots: 'index, follow',
      canonical: 'auto'
    }
  }
};

export const nerjaGeographyContent: Record<AmaraLanguage, NerjaGeographyLocale> = {
  en: {
    navLabel: 'Geography & orientation',
    hero: {
      eyebrow: 'Nerja · Geography & orientation',
      title: 'Where is Nerja? Between the Mediterranean and Sierra Almijara',
      standfirst:
        'Nerja combines beaches close to sea level, an elevated central coast, rising residential slopes and high Sierra Almijara terrain. The municipality climbs from the Mediterranean to around 1,830 metres in the Navachica area, so elevation changes how even short distances feel.',
      note: 'Official reference figures and rounded terrain-based orientation values are identified separately below.',
      updated: 'Reviewed August 2026'
    },
    facts: [
      { label: 'Municipality', value: '85.07 km²' },
      { label: 'Official altitude reference', value: '22 m at the Town Hall' },
      { label: 'Municipal relief', value: 'Sea level to around 1,830 m' },
      { label: 'Coast', value: 'Around 14 km' }
    ],
    orientation: {
      eyebrow: 'Read the terrain',
      title: 'Four levels from sea to Sierra',
      intro:
        'This vertical model is more useful than treating Nerja as uniformly flat or uniformly cliff-edged. The figures within the built-up area are rounded orientation values from official terrain data, not official neighbourhood altitudes.',
      items: [
        { label: 'Coastal level', value: 'Beaches and shore close to 0 m' },
        { label: 'Central coastal edge', value: 'Balcón area about 20 m; Parador edge about 35 m' },
        { label: 'Residential slopes', value: 'Representative upper areas about 60–150 m' },
        { label: 'High Sierra', value: 'Municipal terrain to around 1,830 m' }
      ]
    },
    sections: [
      {
        id: 'coast',
        eyebrow: 'The coast',
        title: 'Fourteen kilometres, with several different relationships to the sea',
        paragraphs: [
          'Nerja has around 14 kilometres of coastline, but it is not one continuous geographic situation. Some beaches meet the built-up town close to sea level; central sections such as the Balcón de Europa stand above the water; farther along are coves, rocky edges and open beaches.',
          'That variety is the useful orientation point. A route to the coast may be almost level, may descend from an elevated central edge or may use a stepped access. It is therefore safer to read the specific beach and street than to assume that every beach lies below the whole town.'
        ]
      },
      {
        id: 'built-up-relief',
        eyebrow: 'The built-up town',
        title: 'The map stays compact while the ground rises',
        paragraphs: [
          'Rounded terrain readings place the Balcón de Europa area at about 20 metres and the Parador or upper central coastal edge at about 35 metres. The residential terrain then rises: roughly 60 metres around Oasis de Capistrano, about 100 metres around Capistrano Village and about 150 metres around San Juan de Capistrano.',
          'These are representative points derived from official IECA boundary data and CNIG MDT02 terrain, not legally defined elevations for whole neighbourhoods. Their value is practical: two addresses that look equally close to the centre or beach can require very different effort on foot.'
        ]
      },
      {
        id: 'sierra',
        eyebrow: 'The Sierra',
        title: 'Mountain terrain is part of Nerja, not a distant backdrop',
        paragraphs: [
          'Across the municipal polygon, official terrain data shows a rise from sea level to around 1,830 metres in the Navachica area. Because the boundary crosses the summit area, this is a robust description of municipal relief rather than a claim that one precisely measured summit is wholly Nerja’s highest point.',
          'Nerja and Frigiliana are both included in the Sierras de Tejeda, Almijara y Alhama Natural Park, a protected landscape of approximately 40,657 hectares across Málaga and Granada. The short visual distance between coast and high mountains is one of the defining facts of this landscape.'
        ]
      },
      {
        id: 'rio-chillar',
        eyebrow: 'The valley corridor',
        title: 'The Río Chíllar links mountain relief with the coast',
        paragraphs: [
          'The Chíllar valley cuts through the Sierra toward the Mediterranean and makes the coast-to-mountain structure visible in one corridor. It is an important geographic line, but it is not Nerja’s western municipal boundary: both municipal territory and developed areas continue west of it.',
          'The well-known river walking access remains closed under the current municipal notice. That operational status is not the page’s main subject, but it matters when the valley is mentioned so geographic orientation is not mistaken for a route recommendation.'
        ]
      },
      {
        id: 'what-it-means',
        eyebrow: 'What it means for a stay',
        title: 'Combine distance with gradient',
        paragraphs: [
          'Many everyday central-Nerja days work well without a car. AMARA Playa, for example, is approximately 200 metres from Torrecilla beach and approximately 500 metres from the Balcón de Europa; these are useful guest distances, not survey measurements.',
          'Across Nerja more broadly, a short line on a map does not guarantee an equally easy walk. Check whether the route starts at coastal level, crosses the central edge or climbs toward the residential slopes—especially for repeated returns, summer heat, luggage or a pushchair. The detailed area choice belongs in the Where to Stay guide.'
        ]
      }
    ],
    related: {
      eyebrow: 'Continue',
      title: 'Turn the terrain into a practical plan',
      links: [
        {
          token: 'getting_to_nerja',
          label: 'Arrival & mobility',
          text: 'Airports, coach connections and the final route into Nerja.'
        },
        {
          token: 'nerja_where_to_stay',
          label: 'Where to stay in Nerja',
          text: 'Compare the centre, coastal areas and higher residential slopes.'
        }
      ]
    },
    sources: {
      eyebrow: 'Behind this guide',
      title: 'Official sources and terrain methodology',
      intro:
        'Area and the Town Hall altitude reference are official SIMA values. Municipal relief and built-up orientation values are rounded readings derived from the official IECA boundary and CNIG MDT02 terrain data; they are not official neighbourhood altitudes.',
      checked: 'Sources checked in August 2026.',
      links: [
        { label: 'SIMA · Nerja', text: 'Official municipal area and reference data.', href: sharedSources.sima },
        { label: 'SIMA · Altitude definition', text: 'Defines municipal altitude at the Town Hall of the principal settlement.', href: sharedSources.simaAltitude },
        { label: 'IECA · Territorial boundaries', text: 'Official municipal polygon used for the relief analysis.', href: sharedSources.boundaries },
        { label: 'CNIG · MDT02', text: 'Official two-metre terrain model used for rounded orientation readings.', href: sharedSources.terrain },
        { label: 'Junta de Andalucía · Natural Park', text: 'Official protected-area extent and included municipalities.', href: sharedSources.naturalPark },
        { label: 'Ayuntamiento de Nerja · Coast', text: 'Municipal source for around 14 kilometres of coastline.', href: sharedSources.coast },
        { label: 'Ayuntamiento de Nerja · Río Chíllar access', text: 'Current municipal notice that access to the river route remains closed.', href: sharedSources.chillarClosure }
      ]
    },
    closing: {
      eyebrow: 'Back to the stay',
      title: 'A better map includes the climb.',
      body: 'Once the sea-to-Sierra structure is clear, choosing routes and a base becomes much more realistic.',
      locationLabel: 'Back to the Nerja location guide',
      propertyLabel: 'View AMARA Playa'
    }
  },
  de: {
    navLabel: 'Geografie & Orientierung',
    hero: {
      eyebrow: 'Nerja · Geografie & Orientierung',
      title: 'Wo liegt Nerja? Zwischen Mittelmeer und Sierra Almijara',
      standfirst:
        'Nerja verbindet Strände nahe dem Meeresspiegel, eine erhöhte zentrale Küstenlage, ansteigende Wohngebiete und das Hochgebirge der Sierra Almijara. Das Gemeindegebiet reicht vom Meer bis auf rund 1.830 Meter im Bereich der Navachica – deshalb verändert die Höhe selbst kurze Wege.',
      note: 'Amtliche Referenzwerte und gerundete Orientierungswerte aus Geländedaten werden unten klar getrennt.',
      updated: 'Geprüft im August 2026'
    },
    facts: [
      { label: 'Gemeindegebiet', value: '85,07 km²' },
      { label: 'Amtlicher Höhenbezug', value: '22 m am Rathaus' },
      { label: 'Relief der Gemeinde', value: 'Meeresspiegel bis rund 1.830 m' },
      { label: 'Küste', value: 'Rund 14 km' }
    ],
    orientation: {
      eyebrow: 'Das Gelände lesen',
      title: 'Vier Höhenstufen vom Meer zur Sierra',
      intro:
        'Dieses vertikale Modell ist hilfreicher, als Nerja pauschal für flach oder durchgehend von Klippen geprägt zu halten. Die Werte im bebauten Gebiet sind gerundete Orientierungswerte aus amtlichen Geländedaten, keine amtlichen Höhen ganzer Viertel.',
      items: [
        { label: 'Küstenniveau', value: 'Strände und Ufer nahe 0 m' },
        { label: 'Zentrale Küstenkante', value: 'Balcón etwa 20 m; Parador-Kante etwa 35 m' },
        { label: 'Wohnhänge', value: 'Repräsentative obere Lagen etwa 60–150 m' },
        { label: 'Hohe Sierra', value: 'Gemeindegebiet bis rund 1.830 m' }
      ]
    },
    sections: [
      {
        id: 'coast',
        eyebrow: 'Die Küste',
        title: 'Vierzehn Kilometer mit unterschiedlichen Beziehungen zum Meer',
        paragraphs: [
          'Nerja hat rund 14 Kilometer Küste, aber nicht überall dieselbe geografische Situation. Manche Strände treffen nahe dem Meeresspiegel auf den bebauten Ort; zentrale Abschnitte wie der Balcón de Europa liegen erhöht; daneben gibt es Buchten, Felskanten und offene Strände.',
          'Genau diese Vielfalt hilft bei der Orientierung. Ein Weg zur Küste kann beinahe eben sein, von einer erhöhten zentralen Kante absteigen oder über Stufen führen. Sinnvoller ist daher, den konkreten Strand und die konkrete Straße zu prüfen, statt alle Strände unterhalb des gesamten Ortes zu vermuten.'
        ]
      },
      {
        id: 'built-up-relief',
        eyebrow: 'Der bebaute Ort',
        title: 'Die Karte bleibt kompakt, während das Gelände steigt',
        paragraphs: [
          'Gerundete Geländewerte verorten den Bereich des Balcón de Europa bei etwa 20 Metern und die Parador- beziehungsweise obere zentrale Küstenkante bei etwa 35 Metern. Danach steigen die Wohnlagen an: ungefähr 60 Meter bei Oasis de Capistrano, etwa 100 Meter bei Capistrano Village und rund 150 Meter bei San Juan de Capistrano.',
          'Das sind repräsentative Punkte, abgeleitet aus der amtlichen IECA-Gemeindegrenze und dem CNIG-Geländemodell MDT02 – keine rechtlich definierten Höhen ganzer Viertel. Praktisch zeigen sie, warum zwei Adressen mit ähnlicher Kartenentfernung zu Zentrum oder Strand zu Fuß sehr unterschiedlich wirken können.'
        ]
      },
      {
        id: 'sierra',
        eyebrow: 'Die Sierra',
        title: 'Das Hochgebirge gehört zu Nerja und ist nicht nur Kulisse',
        paragraphs: [
          'Für das Gemeindegebiet zeigen die amtlichen Geländedaten einen Anstieg vom Meeresspiegel bis auf rund 1.830 Meter im Bereich der Navachica. Da die Grenze durch den Gipfelbereich verläuft, ist dies eine belastbare Reliefbeschreibung – keine Behauptung, ein exakt vermessener Gipfel liege vollständig in Nerja und sei zweifelsfrei dessen höchster Punkt.',
          'Nerja und Frigiliana liegen beide im Naturpark Sierras de Tejeda, Almijara y Alhama, einem rund 40.657 Hektar großen Schutzgebiet in den Provinzen Málaga und Granada. Die geringe sichtbare Distanz zwischen Küste und Hochgebirge prägt diese Landschaft.'
        ]
      },
      {
        id: 'rio-chillar',
        eyebrow: 'Der Talkorridor',
        title: 'Der Río Chíllar verbindet Gebirgsrelief und Küste',
        paragraphs: [
          'Das Chíllar-Tal schneidet durch die Sierra zum Mittelmeer und macht die Struktur zwischen Küste und Gebirge in einem einzigen Korridor sichtbar. Es ist eine wichtige geografische Linie, aber nicht Nerjas westliche Gemeindegrenze: Gemeindegebiet und Bebauung setzen sich westlich davon fort.',
          'Der bekannte Zugang zur Flusswanderung bleibt laut aktueller Mitteilung der Gemeinde gesperrt. Dieser Betriebszustand ist nicht das Hauptthema der Seite, gehört aber zur Erwähnung des Tals, damit geografische Orientierung nicht als Routenempfehlung verstanden wird.'
        ]
      },
      {
        id: 'what-it-means',
        eyebrow: 'Was das für den Aufenthalt bedeutet',
        title: 'Entfernung und Steigung zusammen betrachten',
        paragraphs: [
          'Viele gewöhnliche Urlaubstage im Zentrum von Nerja funktionieren gut ohne Auto. Von AMARA Playa sind es zum Beispiel ungefähr 200 Meter zum Strand Torrecilla und etwa 500 Meter zum Balcón de Europa; das sind praktische Gästeangaben, keine Vermessungswerte.',
          'Für Nerja insgesamt garantiert eine kurze Linie auf der Karte keinen gleich leichten Fußweg. Prüft, ob der Weg auf Küstenniveau beginnt, die zentrale Kante quert oder zu den Wohnhängen ansteigt – besonders bei mehreren Rückwegen, Sommerhitze, Gepäck oder Kinderwagen. Die detaillierte Lagenwahl gehört in den Guide „Wo übernachten“.'
        ]
      }
    ],
    related: {
      eyebrow: 'Weiterlesen',
      title: 'Vom Gelände zum praktischen Plan',
      links: [
        { token: 'getting_to_nerja', label: 'Anreise & Mobilität', text: 'Flughäfen, Busverbindungen und die letzte Etappe nach Nerja.' },
        { token: 'nerja_where_to_stay', label: 'Wo in Nerja übernachten', text: 'Zentrum, Küstenlagen und höhere Wohnhänge im Vergleich.' }
      ]
    },
    sources: {
      eyebrow: 'Belege hinter dem Guide',
      title: 'Amtliche Quellen und Geländemethodik',
      intro:
        'Fläche und Höhenbezug am Rathaus sind amtliche SIMA-Werte. Das Relief der Gemeinde und die Orientierungswerte im Ort sind gerundete Ableitungen aus der amtlichen IECA-Grenze und dem CNIG-Geländemodell MDT02; sie sind keine amtlichen Viertelhöhen.',
      checked: 'Quellen geprüft im August 2026.',
      links: [
        { label: 'SIMA · Nerja', text: 'Amtliche Fläche und Referenzdaten der Gemeinde.', href: sharedSources.sima },
        { label: 'SIMA · Definition der Höhenangabe', text: 'Definiert die Gemeindehöhe am Rathaus des Hauptortes.', href: sharedSources.simaAltitude },
        { label: 'IECA · Verwaltungsgrenzen', text: 'Amtliche Gemeindegrenze für die Reliefanalyse.', href: sharedSources.boundaries },
        { label: 'CNIG · MDT02', text: 'Amtliches Zwei-Meter-Geländemodell für die gerundeten Orientierungswerte.', href: sharedSources.terrain },
        { label: 'Junta de Andalucía · Naturpark', text: 'Amtliche Fläche des Schutzgebiets und beteiligte Gemeinden.', href: sharedSources.naturalPark },
        { label: 'Ayuntamiento de Nerja · Küste', text: 'Gemeindequelle für rund 14 Kilometer Küste.', href: sharedSources.coast },
        { label: 'Ayuntamiento de Nerja · Zugang Río Chíllar', text: 'Aktuelle Gemeindemitteilung zur fortbestehenden Sperrung des Flusszugangs.', href: sharedSources.chillarClosure }
      ]
    },
    closing: {
      eyebrow: 'Zurück zum Aufenthalt',
      title: 'Eine gute Karte zeigt auch den Anstieg.',
      body: 'Wenn die Struktur vom Meer zur Sierra klar ist, werden Wege und die Wahl der passenden Basis realistischer.',
      locationLabel: 'Zurück zum Nerja Lage-Guide',
      propertyLabel: 'AMARA Playa ansehen'
    }
  },
  es: {
    navLabel: 'Geografía y orientación',
    hero: {
      eyebrow: 'Nerja · Geografía y orientación',
      title: '¿Dónde está Nerja? Entre el Mediterráneo y la Sierra Almijara',
      standfirst:
        'Nerja reúne playas próximas al nivel del mar, un frente costero central elevado, zonas residenciales que suben por la ladera y la alta Sierra Almijara. El municipio asciende desde el Mediterráneo hasta unos 1.830 metros en el entorno de Navachica; por eso el desnivel transforma incluso los trayectos cortos.',
      note: 'A continuación se distinguen los datos oficiales de referencia y las cotas orientativas redondeadas obtenidas del terreno.',
      updated: 'Revisado en agosto de 2026'
    },
    facts: [
      { label: 'Municipio', value: '85,07 km²' },
      { label: 'Referencia oficial de altitud', value: '22 m en el Ayuntamiento' },
      { label: 'Relieve municipal', value: 'Del nivel del mar a unos 1.830 m' },
      { label: 'Costa', value: 'Alrededor de 14 km' }
    ],
    orientation: {
      eyebrow: 'Leer el terreno',
      title: 'Cuatro niveles desde el mar hasta la sierra',
      intro:
        'Este modelo vertical resulta más útil que imaginar Nerja como un lugar completamente llano o como un único acantilado. Las cotas del casco urbano son referencias redondeadas basadas en datos oficiales del terreno, no altitudes oficiales de barrios enteros.',
      items: [
        { label: 'Nivel costero', value: 'Playas y orilla cerca de 0 m' },
        { label: 'Borde costero central', value: 'Balcón, unos 20 m; entorno del Parador, unos 35 m' },
        { label: 'Laderas residenciales', value: 'Zonas altas representativas, unos 60–150 m' },
        { label: 'Alta sierra', value: 'Terreno municipal hasta unos 1.830 m' }
      ]
    },
    sections: [
      {
        id: 'coast',
        eyebrow: 'La costa',
        title: 'Catorce kilómetros con distintas relaciones con el mar',
        paragraphs: [
          'Nerja tiene alrededor de 14 kilómetros de costa, pero no responde a una única situación geográfica. Algunas playas se encuentran con el casco urbano cerca del nivel del mar; tramos centrales como el Balcón de Europa se elevan sobre el agua; y en otros puntos aparecen calas, bordes rocosos y playas abiertas.',
          'Esa variedad es la clave para orientarse. El camino hacia la costa puede ser casi llano, descender desde el borde central elevado o incluir escaleras. Conviene leer cada playa y cada calle en concreto, en vez de suponer que todas las playas quedan debajo de todo el pueblo.'
        ]
      },
      {
        id: 'built-up-relief',
        eyebrow: 'El casco urbano',
        title: 'El mapa sigue siendo compacto mientras el terreno asciende',
        paragraphs: [
          'Las lecturas redondeadas del terreno sitúan el entorno del Balcón de Europa en unos 20 metros y el Parador o borde costero central superior en unos 35 metros. Después suben las zonas residenciales: aproximadamente 60 metros en Oasis de Capistrano, unos 100 en Capistrano Village y unos 150 en San Juan de Capistrano.',
          'Son puntos representativos derivados del límite municipal oficial del IECA y del modelo del terreno MDT02 del CNIG, no cotas legalmente definidas para barrios completos. Su utilidad es práctica: dos direcciones igual de próximas al centro o a la playa sobre el mapa pueden exigir esfuerzos muy distintos a pie.'
        ]
      },
      {
        id: 'sierra',
        eyebrow: 'La sierra',
        title: 'La alta montaña forma parte de Nerja, no es un telón de fondo lejano',
        paragraphs: [
          'En el polígono municipal, los datos oficiales del terreno muestran un ascenso desde el nivel del mar hasta unos 1.830 metros en el entorno de Navachica. Como el límite atraviesa la zona de cumbre, esta es una descripción sólida del relieve municipal, no la afirmación de que una cima medida con precisión sea íntegramente el punto más alto de Nerja.',
          'Nerja y Frigiliana están incluidos en el Parque Natural Sierras de Tejeda, Almijara y Alhama, un espacio protegido de aproximadamente 40.657 hectáreas entre Málaga y Granada. La escasa distancia visual entre la costa y la alta montaña define este paisaje.'
        ]
      },
      {
        id: 'rio-chillar',
        eyebrow: 'El corredor del valle',
        title: 'El río Chíllar enlaza el relieve de la sierra con la costa',
        paragraphs: [
          'El valle del Chíllar corta la sierra en dirección al Mediterráneo y permite ver en un solo corredor la estructura entre montaña y mar. Es una línea geográfica importante, pero no constituye el límite occidental del municipio: tanto el término como las zonas urbanizadas continúan al oeste.',
          'El conocido acceso al recorrido fluvial sigue cerrado según el aviso municipal vigente. Ese estado operativo no es el tema central de la página, pero debe acompañar la mención del valle para que una explicación geográfica no se interprete como recomendación de ruta.'
        ]
      },
      {
        id: 'what-it-means',
        eyebrow: 'Qué significa para una estancia',
        title: 'Combinar distancia y pendiente',
        paragraphs: [
          'Muchos días cotidianos en el centro de Nerja funcionan bien sin coche. AMARA Playa, por ejemplo, está aproximadamente a 200 metros de la playa de Torrecilla y a unos 500 metros del Balcón de Europa; son distancias orientativas para huéspedes, no mediciones topográficas.',
          'En el conjunto de Nerja, una línea corta en el mapa no garantiza un paseo igual de fácil. Conviene comprobar si el trayecto parte de la cota costera, cruza el borde central o sube hacia las laderas residenciales, sobre todo al repetir el camino, con calor, equipaje o carrito. La elección detallada de zona corresponde a la guía Dónde alojarse.'
        ]
      }
    ],
    related: {
      eyebrow: 'Continuar',
      title: 'Del relieve al plan práctico',
      links: [
        { token: 'getting_to_nerja', label: 'Llegada y movilidad', text: 'Aeropuertos, conexiones en autobús y el último tramo hasta Nerja.' },
        { token: 'nerja_where_to_stay', label: 'Dónde alojarse en Nerja', text: 'Comparación entre el centro, las zonas costeras y las laderas residenciales.' }
      ]
    },
    sources: {
      eyebrow: 'Fuentes de la guía',
      title: 'Fuentes oficiales y metodología del terreno',
      intro:
        'La superficie y la referencia de altitud en el Ayuntamiento son datos oficiales de SIMA. El relieve municipal y las cotas orientativas del casco urbano son lecturas redondeadas derivadas del límite oficial del IECA y del MDT02 del CNIG; no son altitudes oficiales de barrios.',
      checked: 'Fuentes comprobadas en agosto de 2026.',
      links: [
        { label: 'SIMA · Nerja', text: 'Superficie y datos oficiales de referencia del municipio.', href: sharedSources.sima },
        { label: 'SIMA · Definición de altitud', text: 'Define la altitud municipal en el Ayuntamiento del núcleo principal.', href: sharedSources.simaAltitude },
        { label: 'IECA · Delimitaciones territoriales', text: 'Polígono municipal oficial utilizado para analizar el relieve.', href: sharedSources.boundaries },
        { label: 'CNIG · MDT02', text: 'Modelo oficial del terreno de dos metros usado para las referencias redondeadas.', href: sharedSources.terrain },
        { label: 'Junta de Andalucía · Parque Natural', text: 'Extensión oficial del espacio protegido y municipios incluidos.', href: sharedSources.naturalPark },
        { label: 'Ayuntamiento de Nerja · Costa', text: 'Fuente municipal para los aproximadamente 14 kilómetros de costa.', href: sharedSources.coast },
        { label: 'Ayuntamiento de Nerja · Acceso al río Chíllar', text: 'Aviso municipal vigente sobre el cierre del acceso al recorrido fluvial.', href: sharedSources.chillarClosure }
      ]
    },
    closing: {
      eyebrow: 'Volver a la estancia',
      title: 'Un buen mapa también incluye la subida.',
      body: 'Al comprender la estructura del mar a la sierra, resulta más fácil valorar rutas y elegir una base realista.',
      locationLabel: 'Volver a la guía de ubicación de Nerja',
      propertyLabel: 'Ver AMARA Playa'
    }
  },
  nl: {
    navLabel: 'Geografie & oriëntatie',
    hero: {
      eyebrow: 'Nerja · Geografie & oriëntatie',
      title: 'Waar ligt Nerja? Tussen de Middellandse Zee en Sierra Almijara',
      standfirst:
        'Nerja combineert stranden rond zeeniveau, een verhoogde centrale kuststrook, oplopende woonwijken en het hoge terrein van de Sierra Almijara. De gemeente stijgt van de zee tot ongeveer 1.830 meter in de omgeving van Navachica, waardoor hoogteverschil zelfs korte afstanden anders laat aanvoelen.',
      note: 'Officiële referentiewaarden en afgeronde oriëntatiewaarden uit terreingegevens worden hieronder duidelijk onderscheiden.',
      updated: 'Gecontroleerd in augustus 2026'
    },
    facts: [
      { label: 'Gemeente', value: '85,07 km²' },
      { label: 'Officiële hoogtereferentie', value: '22 m bij het stadhuis' },
      { label: 'Reliëf van de gemeente', value: 'Zeeniveau tot ongeveer 1.830 m' },
      { label: 'Kust', value: 'Ongeveer 14 km' }
    ],
    orientation: {
      eyebrow: 'Lees het terrein',
      title: 'Vier niveaus van zee naar Sierra',
      intro:
        'Dit verticale model is nuttiger dan Nerja als overal vlak of als één doorlopende klif te zien. De waarden in de bebouwde kom zijn afgeronde oriëntatiepunten uit officiële terreingegevens, geen officiële hoogtes van complete wijken.',
      items: [
        { label: 'Kustniveau', value: 'Stranden en oever dicht bij 0 m' },
        { label: 'Centrale kustrand', value: 'Balcón circa 20 m; Paradorrand circa 35 m' },
        { label: 'Woonhellingen', value: 'Representatieve hogere zones circa 60–150 m' },
        { label: 'Hoge Sierra', value: 'Gemeentelijk terrein tot circa 1.830 m' }
      ]
    },
    sections: [
      {
        id: 'coast',
        eyebrow: 'De kust',
        title: 'Veertien kilometer met verschillende relaties tot de zee',
        paragraphs: [
          'Nerja heeft ongeveer 14 kilometer kust, maar die vormt niet overal dezelfde geografische situatie. Sommige stranden sluiten rond zeeniveau aan op de bebouwde kom; centrale delen zoals het Balcón de Europa liggen boven het water; elders liggen baaien, rotsranden en open stranden.',
          'Juist die afwisseling helpt bij de oriëntatie. Een route naar de kust kan bijna vlak zijn, vanaf de verhoogde centrale rand dalen of via trappen lopen. Kijk daarom naar het concrete strand en de concrete straat, in plaats van aan te nemen dat elk strand onder het hele dorp ligt.'
        ]
      },
      {
        id: 'built-up-relief',
        eyebrow: 'De bebouwde kom',
        title: 'De kaart blijft compact terwijl het terrein oploopt',
        paragraphs: [
          'Afgeronde terreinmetingen plaatsen de omgeving van het Balcón de Europa op ongeveer 20 meter en de Parador of hogere centrale kustrand op ongeveer 35 meter. Daarna lopen de woongebieden op: circa 60 meter bij Oasis de Capistrano, ongeveer 100 meter bij Capistrano Village en circa 150 meter bij San Juan de Capistrano.',
          'Dit zijn representatieve punten, afgeleid van de officiële IECA-gemeentegrens en het CNIG-terreinmodel MDT02, geen wettelijk vastgestelde hoogtes van hele wijken. Praktisch laten ze zien waarom twee adressen die op de kaart even dicht bij centrum of strand liggen te voet heel anders kunnen voelen.'
        ]
      },
      {
        id: 'sierra',
        eyebrow: 'De Sierra',
        title: 'Het hooggebergte hoort bij Nerja en is geen verre achtergrond',
        paragraphs: [
          'Binnen de gemeentegrens tonen officiële terreingegevens een stijging van zeeniveau tot ongeveer 1.830 meter in de omgeving van Navachica. Omdat de grens door het topgebied loopt, is dit een betrouwbare beschrijving van het gemeentelijke reliëf en geen claim dat één exact gemeten top volledig Nerja’s hoogste punt vormt.',
          'Nerja en Frigiliana liggen beide in het natuurpark Sierras de Tejeda, Almijara y Alhama, een beschermd landschap van ongeveer 40.657 hectare in Málaga en Granada. De korte zichtafstand tussen kust en hooggebergte bepaalt het karakter van dit landschap.'
        ]
      },
      {
        id: 'rio-chillar',
        eyebrow: 'De valleicorridor',
        title: 'De Río Chíllar verbindt het bergreliëf met de kust',
        paragraphs: [
          'De Chíllarvallei snijdt vanuit de Sierra naar de Middellandse Zee en maakt de structuur tussen bergen en kust in één corridor zichtbaar. Het is een belangrijke geografische lijn, maar niet de westelijke gemeentegrens van Nerja: zowel het grondgebied als bebouwing loopt ten westen ervan door.',
          'De bekende toegang tot de rivierwandeling blijft volgens de huidige gemeentelijke mededeling gesloten. Die operationele status is niet het hoofdonderwerp van deze pagina, maar hoort bij de vermelding van de vallei zodat geografische uitleg niet als routeadvies wordt opgevat.'
        ]
      },
      {
        id: 'what-it-means',
        eyebrow: 'Wat dit betekent voor een verblijf',
        title: 'Combineer afstand met helling',
        paragraphs: [
          'Veel gewone dagen in het centrum van Nerja werken prima zonder auto. AMARA Playa ligt bijvoorbeeld op ongeveer 200 meter van het strand van Torrecilla en circa 500 meter van het Balcón de Europa; dit zijn praktische afstanden voor gasten, geen landmeetkundige waarden.',
          'In Nerja als geheel staat een korte lijn op de kaart niet automatisch voor een even gemakkelijke wandeling. Controleer of de route op kustniveau begint, de centrale rand kruist of naar de woonhellingen klimt, vooral bij herhaalde terugwegen, zomerhitte, bagage of een kinderwagen. De gedetailleerde gebiedskeuze hoort in de gids Waar overnachten.'
        ]
      }
    ],
    related: {
      eyebrow: 'Lees verder',
      title: 'Van het terrein naar een praktisch plan',
      links: [
        { token: 'getting_to_nerja', label: 'Aankomst & mobiliteit', text: 'Luchthavens, busverbindingen en het laatste traject naar Nerja.' },
        { token: 'nerja_where_to_stay', label: 'Waar overnachten in Nerja', text: 'Vergelijk het centrum, kustgebieden en hogere woonhellingen.' }
      ]
    },
    sources: {
      eyebrow: 'Bronnen van deze gids',
      title: 'Officiële bronnen en terreinmethode',
      intro:
        'Oppervlakte en de hoogtereferentie bij het stadhuis zijn officiële SIMA-waarden. Het gemeentelijke reliëf en de oriëntatiewaarden in de bebouwde kom zijn afgeronde afleidingen uit de officiële IECA-grens en het CNIG-terreinmodel MDT02; het zijn geen officiële wijkhoogtes.',
      checked: 'Bronnen gecontroleerd in augustus 2026.',
      links: [
        { label: 'SIMA · Nerja', text: 'Officiële oppervlakte en referentiegegevens van de gemeente.', href: sharedSources.sima },
        { label: 'SIMA · Definitie van hoogte', text: 'Definieert de gemeentehoogte bij het stadhuis van de hoofdplaats.', href: sharedSources.simaAltitude },
        { label: 'IECA · Territoriale grenzen', text: 'Officiële gemeentegrens voor de reliëfanalyse.', href: sharedSources.boundaries },
        { label: 'CNIG · MDT02', text: 'Officieel terreinmodel van twee meter voor de afgeronde oriëntatiewaarden.', href: sharedSources.terrain },
        { label: 'Junta de Andalucía · Natuurpark', text: 'Officiële omvang van het beschermde gebied en deelnemende gemeenten.', href: sharedSources.naturalPark },
        { label: 'Ayuntamiento de Nerja · Kust', text: 'Gemeentelijke bron voor ongeveer 14 kilometer kust.', href: sharedSources.coast },
        { label: 'Ayuntamiento de Nerja · Toegang Río Chíllar', text: 'Actuele gemeentelijke mededeling dat de rivierroute gesloten blijft.', href: sharedSources.chillarClosure }
      ]
    },
    closing: {
      eyebrow: 'Terug naar het verblijf',
      title: 'Een betere kaart laat ook de klim zien.',
      body: 'Zodra de structuur van zee naar Sierra duidelijk is, worden routes en de keuze van een uitvalsbasis realistischer.',
      locationLabel: 'Terug naar de locatiegids van Nerja',
      propertyLabel: 'Bekijk AMARA Playa'
    }
  },
  sv: {
    navLabel: 'Geografi & orientering',
    hero: {
      eyebrow: 'Nerja · Geografi & orientering',
      title: 'Var ligger Nerja? Mellan Medelhavet och Sierra Almijara',
      standfirst:
        'Nerja förenar stränder nära havsnivån, ett upphöjt centralt kustparti, stigande bostadsområden och Sierra Almijaras höga terräng. Kommunen reser sig från Medelhavet till omkring 1 830 meter i Navachicaområdet, så höjdskillnaden påverkar även hur korta sträckor känns.',
      note: 'Officiella referensvärden och avrundade orienteringsvärden från terrängdata skiljs tydligt åt nedan.',
      updated: 'Granskad i augusti 2026'
    },
    facts: [
      { label: 'Kommun', value: '85,07 km²' },
      { label: 'Officiell höjdreferens', value: '22 m vid stadshuset' },
      { label: 'Kommunens relief', value: 'Havsnivå till omkring 1 830 m' },
      { label: 'Kust', value: 'Omkring 14 km' }
    ],
    orientation: {
      eyebrow: 'Läs terrängen',
      title: 'Fyra nivåer från hav till Sierra',
      intro:
        'Denna vertikala modell är mer användbar än att se Nerja som helt platt eller som en sammanhängande klippkant. Värdena i den bebyggda orten är avrundade orienteringspunkter från officiella terrängdata, inte officiella höjder för hela bostadsområden.',
      items: [
        { label: 'Kustnivå', value: 'Stränder och strandlinje nära 0 m' },
        { label: 'Centrala kustkanten', value: 'Balcón cirka 20 m; Paradorområdet cirka 35 m' },
        { label: 'Bostadssluttningar', value: 'Representativa högre områden cirka 60–150 m' },
        { label: 'Höga Sierran', value: 'Kommunal terräng till omkring 1 830 m' }
      ]
    },
    sections: [
      {
        id: 'coast',
        eyebrow: 'Kusten',
        title: 'Fjorton kilometer med olika förhållanden till havet',
        paragraphs: [
          'Nerja har omkring 14 kilometer kust, men den består inte av en enda geografisk situation. Vissa stränder möter bebyggelsen nära havsnivån; centrala partier som Balcón de Europa ligger ovanför vattnet; på andra håll finns vikar, klippkanter och öppna stränder.',
          'Variationen är själva orienteringsnyckeln. En väg till kusten kan vara nästan plan, gå ned från den upphöjda centrala kanten eller innehålla trappor. Läs därför den aktuella stranden och gatan i stället för att anta att alla stränder ligger nedanför hela orten.'
        ]
      },
      {
        id: 'built-up-relief',
        eyebrow: 'Den bebyggda orten',
        title: 'Kartan förblir kompakt medan marken stiger',
        paragraphs: [
          'Avrundade terrängvärden placerar området kring Balcón de Europa på omkring 20 meter och Parador eller den övre centrala kustkanten på omkring 35 meter. Därefter stiger bostadsområdena: ungefär 60 meter vid Oasis de Capistrano, cirka 100 meter vid Capistrano Village och omkring 150 meter vid San Juan de Capistrano.',
          'Detta är representativa punkter som härletts från IECA:s officiella kommungräns och CNIG:s terrängmodell MDT02, inte juridiskt definierade höjder för hela områden. De visar praktiskt varför två adresser som ser lika nära centrum eller stranden ut kan kännas mycket olika till fots.'
        ]
      },
      {
        id: 'sierra',
        eyebrow: 'Sierran',
        title: 'Högfjällsterrängen tillhör Nerja och är inte bara en avlägsen fond',
        paragraphs: [
          'Inom kommungränsen visar officiella terrängdata en stigning från havsnivån till omkring 1 830 meter i Navachicaområdet. Eftersom gränsen går genom toppområdet är detta en robust beskrivning av kommunens relief, inte ett påstående att en exakt uppmätt topp helt och hållet är Nerjas högsta punkt.',
          'Både Nerja och Frigiliana ingår i naturparken Sierras de Tejeda, Almijara y Alhama, ett skyddat landskap på cirka 40 657 hektar i Málaga och Granada. Det korta synliga avståndet mellan kust och högfjäll präglar landskapet.'
        ]
      },
      {
        id: 'rio-chillar',
        eyebrow: 'Dalgången',
        title: 'Río Chíllar binder samman bergsreliefen med kusten',
        paragraphs: [
          'Chíllardalen skär genom Sierran mot Medelhavet och gör strukturen mellan berg och kust synlig i en enda korridor. Den är en viktig geografisk linje, men inte Nerjas västra kommungräns: både kommunalt område och bebyggelse fortsätter väster om den.',
          'Den välkända tillfarten till flodvandringen är fortsatt stängd enligt kommunens aktuella besked. Den operativa statusen är inte sidans huvudämne, men behöver nämnas så att geografisk orientering inte uppfattas som en rekommendation att följa leden.'
        ]
      },
      {
        id: 'what-it-means',
        eyebrow: 'Vad det betyder för en vistelse',
        title: 'Väg samman avstånd och lutning',
        paragraphs: [
          'Många vanliga dagar i centrala Nerja fungerar bra utan bil. AMARA Playa ligger till exempel ungefär 200 meter från Torrecillastranden och cirka 500 meter från Balcón de Europa; det är praktiska gästavstånd, inte exakta lantmäterimått.',
          'I Nerja som helhet garanterar en kort linje på kartan inte en lika lätt promenad. Kontrollera om vägen börjar på kustnivå, korsar den centrala kanten eller klättrar mot bostadssluttningarna, särskilt vid upprepade hemvägar, sommarvärme, bagage eller barnvagn. Det detaljerade områdesvalet hör hemma i guiden Var ska man bo.'
        ]
      }
    ],
    related: {
      eyebrow: 'Läs vidare',
      title: 'Från terrängen till en praktisk plan',
      links: [
        { token: 'getting_to_nerja', label: 'Ankomst & mobilitet', text: 'Flygplatser, bussförbindelser och sista sträckan in till Nerja.' },
        { token: 'nerja_where_to_stay', label: 'Var man bor i Nerja', text: 'Jämför centrum, kustområden och högre bostadssluttningar.' }
      ]
    },
    sources: {
      eyebrow: 'Källorna bakom guiden',
      title: 'Officiella källor och terrängmetod',
      intro:
        'Ytan och höjdreferensen vid stadshuset är officiella SIMA-värden. Kommunens relief och orienteringsvärdena i den bebyggda orten är avrundade härledningar från IECA:s officiella gräns och CNIG:s terrängmodell MDT02; de är inte officiella områdeshöjder.',
      checked: 'Källor kontrollerade i augusti 2026.',
      links: [
        { label: 'SIMA · Nerja', text: 'Officiell kommunyta och referensuppgifter.', href: sharedSources.sima },
        { label: 'SIMA · Definition av höjd', text: 'Definierar kommunhöjden vid huvudortens stadshus.', href: sharedSources.simaAltitude },
        { label: 'IECA · Territoriella gränser', text: 'Officiell kommungräns som användes för reliefanalysen.', href: sharedSources.boundaries },
        { label: 'CNIG · MDT02', text: 'Officiell terrängmodell med två meters upplösning för avrundade orienteringsvärden.', href: sharedSources.terrain },
        { label: 'Junta de Andalucía · Naturpark', text: 'Officiell omfattning för det skyddade området och ingående kommuner.', href: sharedSources.naturalPark },
        { label: 'Ayuntamiento de Nerja · Kusten', text: 'Kommunal källa för omkring 14 kilometer kust.', href: sharedSources.coast },
        { label: 'Ayuntamiento de Nerja · Tillträde till Río Chíllar', text: 'Aktuellt kommunalt besked att tillträdet till flodleden förblir stängt.', href: sharedSources.chillarClosure }
      ]
    },
    closing: {
      eyebrow: 'Tillbaka till vistelsen',
      title: 'En bättre karta visar också stigningen.',
      body: 'När strukturen från havet till Sierran är tydlig blir det lättare att bedöma vägar och välja en realistisk bas.',
      locationLabel: 'Tillbaka till Nerjas lägesguide',
      propertyLabel: 'Visa AMARA Playa'
    }
  }
};
