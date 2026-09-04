import type { LinkToken } from '../lib/linkResolver';
import type { LocalizedText, Resolved } from '../types/content';
import type { AmaraAuthoringSeo } from '../types/seo';


/** One authored string in the five AMARA locales, in EN, DE, ES, NL, SV order. */
const l = (en: string, de: string, es: string, nl: string, sv: string): LocalizedText => ({ en, de, es, nl, sv });




const article = {
  datePublished: '2026-08-13',
  dateModified: '2026-08-21',
  authorName: 'Robert Sebastian Böhmer',
  authorType: 'Person' as const,
  authorRoute: 'about'
};

/**
 * Public, verifiable sources. Shared across locales so a URL change stays a
 * single edit and every language keeps citing exactly the same reference.
 */
const sharedSources = {
  sima: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/sima/ficha.htm?mun=29075',
  populationCentres:
    'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/sima/nucleos.htm?CodMuni=29075',
  sierraPlan: 'https://www.juntadeandalucia.es/boja/1999/95/2',
  chillarLower: 'https://www.nerja.es/el-ayuntamiento-acomete-el-desbroce-y-limpieza-del-rio-chillar/',
  coastline13: 'https://www.nerjaturismo.es/',
  coastline14: 'https://www.nerjaturismo.es/playas/'
};

export const nerjaGeographySeo: AmaraAuthoringSeo = {
  version: '2026-08-21-nerja-geography-v3.0',
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

export const nerjaGeographyContent = {
  navLabel: l("Geography & orientation", "Geografie & Orientierung", "Geografía y orientación", "Geografie & oriëntatie", "Geografi & orientering"),
  hero: {
    eyebrow: l("Nerja · Geography & orientation", "Nerja · Geografie & Orientierung", "Nerja · Geografía y orientación", "Nerja · Geografie & oriëntatie", "Nerja · Geografi & orientering"),
    title: l("Where is Nerja?", "Wo liegt Nerja?", "¿Dónde está Nerja?", "Waar ligt Nerja?", "Var ligger Nerja?"),
    subtitle: l("Between the Mediterranean and Sierra Almijara", "Zwischen Mittelmeer und Sierra Almijara", "Entre el Mediterráneo y la Sierra Almijara", "Tussen de Middellandse Zee en Sierra Almijara", "Mellan Medelhavet och Sierra Almijara"),
    standfirst: l("Nerja is an **85.07 km² coastal municipality with four statistical population centres**. Its principal settlement has an official 22-metre reference, while the Sierra Almijara rises close behind the coast and Navachica reaches 1,832 metres in the wider mountain system.", "Nerja ist eine **85,07 km² große Küstengemeinde mit vier statistischen Siedlungskernen**. Der Hauptort hat einen amtlichen Höhenbezug von 22 Metern; dicht hinter der Küste steigt die Sierra Almijara an, in deren größerem Gebirgssystem die Navachica 1.832 Meter erreicht.", "Nerja es un **municipio costero de 85,07 km² con cuatro núcleos estadísticos de población**. El núcleo principal tiene una referencia oficial de 22 metros; muy cerca de la costa se eleva la Sierra Almijara, donde Navachica alcanza 1.832 metros dentro del sistema montañoso más amplio.", "Nerja is een **kustgemeente van 85,07 km² met vier statistische woonkernen**. De hoofdplaats heeft een officiële referentie van 22 meter; vlak achter de kust rijst de Sierra Almijara op, waar Navachica in het bredere bergsysteem 1.832 meter bereikt.", "Nerja är en **kustkommun på 85,07 km² med fyra statistiska befolkningskärnor**. Huvudorten har en officiell referens på 22 meter; nära kusten reser sig Sierra Almijara, där Navachica når 1 832 meter i det större bergssystemet."),
    note: l("The 22-metre figure refers to the main settlement. Individual routes differ in gradient and surface.", "Die 22 Meter sind eine Hauptortreferenz. Exakte Wegsteigungen und die Lage der Navachica innerhalb der Gemeindegrenze brauchen eigene Nachweise.", "Los 22 metros son una referencia del núcleo principal. Las pendientes concretas y la posición de Navachica respecto al límite municipal requieren pruebas propias.", "De 22 meter is een referentie voor de hoofdplaats. Afzonderlijke routes verschillen in helling en ondergrond.", "22 meter är en referens för huvudorten. Exakta väglutningar och Navachicas läge mot kommungränsen kräver egna belägg."),
    updated: l("Reviewed August 2026", "Geprüft im August 2026", "Revisado en agosto de 2026", "Gecontroleerd in augustus 2026", "Granskad i augusti 2026")
  },
  facts: [
    {
      label: l("Municipality", "Gemeindegebiet", "Municipio", "Gemeente", "Kommun"),
      value: l("85.07 km²", "85,07 km²", "85,07 km²", "85,07 km²", "85,07 km²")
    },
    {
      label: l("Principal-settlement reference", "Hauptortreferenz", "Referencia del núcleo principal", "Referentie hoofdplaats", "Huvudortsreferens"),
      value: l("22 m", "22 m", "22 m", "22 m", "22 m")
    },
    {
      label: l("Population centres", "Siedlungskerne", "Núcleos de población", "Woonkernen", "Befolkningskärnor"),
      value: l("Nerja · Maro · Imaroga · Macaca", "Nerja · Maro · Imaroga · Macaca", "Nerja · Maro · Imaroga · Macaca", "Nerja · Maro · Imaroga · Macaca", "Nerja · Maro · Imaroga · Macaca")
    },
    {
      label: l("Coastline figures", "Küstenangaben", "Cifras de costa", "Kustcijfers", "Kustuppgifter"),
      value: l("13–14 km · official sources differ", "13–14 km · amtliche Quellen weichen ab", "13–14 km · las fuentes oficiales difieren", "13–14 km · officiële bronnen verschillen", "13–14 km · officiella källor skiljer sig")
    }
  ],
  orientation: {
    eyebrow: l("Read the municipality as a sequence", "Die Gemeinde als Abfolge lesen", "Leer el municipio como una secuencia", "Lees de gemeente als een reeks", "Läs kommunen som en följd"),
    title: l("Four anchors connect coast, settlement, river and Sierra", "Vier Anker verbinden Küste, Orte, Fluss und Sierra", "Cuatro referencias unen costa, núcleos, río y sierra", "Vier ankers verbinden kust, woonkernen, rivier en Sierra", "Fyra ankare binder samman kust, orter, flod och Sierra"),
    intro: l("Nerja is not one beach strip or one elevation. The official record separates the principal settlement from Maro and two smaller nuclei, while the Río Chíllar and Sierra provide inland orientation.", "Nerja ist weder ein einziger Küstenstreifen noch eine einzige Höhenlage. Die Statistik trennt den Hauptort von Maro und zwei kleineren Kernen; Río Chíllar und Sierra geben die Richtung ins Landesinnere.", "Nerja no es una sola franja de playa ni una única cota. La estadística separa el núcleo principal de Maro y otros dos núcleos; el Río Chíllar y la sierra orientan hacia el interior.", "Nerja is niet één strandstrook of één hoogte. De statistiek onderscheidt de hoofdplaats van Maro en twee kleinere kernen; Río Chíllar en de Sierra geven richting naar het binnenland.", "Nerja är inte en enda strandremsa eller en enda höjd. Statistiken skiljer huvudorten från Maro och två mindre kärnor; Río Chíllar och Sierran ger riktning inåt land."),
    items: [
      {
        label: l("Principal settlement", "Hauptort", "Núcleo principal", "Hoofdplaats", "Huvudort"),
        value: l("Nerja · official reference 22 m", "Nerja · amtlicher Bezug 22 m", "Nerja · referencia oficial 22 m", "Nerja · officiële referentie 22 m", "Nerja · officiell referens 22 m")
      },
      {
        label: l("Eastern nucleus", "Östlicher Kern", "Núcleo oriental", "Oostelijke kern", "Östlig kärna"),
        value: l("Maro · distinct statistical population centre", "Maro · eigener statistischer Siedlungskern", "Maro · núcleo estadístico propio", "Maro · eigen statistische woonkern", "Maro · egen statistisk befolkningskärna")
      },
      {
        label: l("River corridor", "Flusskorridor", "Corredor fluvial", "Riviercorridor", "Flodkorridor"),
        value: l("Lower Río Chíllar · mouth to quarry about 3.6 km", "Unterer Río Chíllar · Mündung bis Steinbruch etwa 3,6 km", "Río Chíllar inferior · desembocadura a cantera, unos 3,6 km", "Benedenloop Río Chíllar · monding tot groeve circa 3,6 km", "Nedre Río Chíllar · mynning till stenbrott cirka 3,6 km")
      },
      {
        label: l("Mountain system", "Gebirgssystem", "Sistema montañoso", "Bergsysteem", "Bergssystem"),
        value: l("Sierra Almijara · peaks above 1,500 m; Navachica 1,832 m", "Sierra Almijara · Gipfel über 1.500 m; Navachica 1.832 m", "Sierra Almijara · cumbres sobre 1.500 m; Navachica 1.832 m", "Sierra Almijara · toppen boven 1.500 m; Navachica 1.832 m", "Sierra Almijara · toppar över 1 500 m; Navachica 1 832 m")
      }
    ]
  },
  sections: [
    {
      id: "coast",
      eyebrow: l("The coast", "Die Küste", "La costa", "De kust", "Kusten"),
      title: l("The coastline is important, but false precision is not", "Die Küste ist wichtig, falsche Genauigkeit nicht", "La costa importa, pero la falsa precisión no", "De kust telt, schijnprecisie niet", "Kusten är viktig, falsk precision är det inte"),
      paragraphs: [
        l("Official tourism material in the research pool gives both 13 and 14 kilometres for Nerja’s coastline. Until the endpoints and measurement method are known, neither number should be presented as an exact canonical length.", "Amtliches Tourismusmaterial im Research-Pool nennt für Nerjas Küste sowohl 13 als auch 14 Kilometer. Solange Endpunkte und Messmethode nicht geklärt sind, sollte keine der Zahlen als exakte kanonische Länge erscheinen.", "El material turístico oficial de la investigación cita 13 y 14 kilómetros para la costa de Nerja. Hasta conocer los extremos y el método de medición, ninguna cifra debe presentarse como longitud canónica exacta.", "Officieel toerismemateriaal in het onderzoek noemt zowel 13 als 14 kilometer kust. Zolang eindpunten en meetmethode onbekend zijn, is geen van beide een exacte canonieke lengte.", "Officiellt turistmaterial i forskningen anger både 13 och 14 kilometer kust. Innan ändpunkter och mätmetod är kända bör ingen siffra användas som exakt kanonisk längd."),
        l("The durable orientation is the municipal structure: Nerja and Maro are distinct population centres in the same coastal municipality. Specific beach approaches still need route-level evidence rather than a universal statement about steps or climbs.", "Belastbar ist die Siedlungsstruktur: Nerja und Maro sind eigenständige statistische Kerne derselben Küstengemeinde. Konkrete Strandzugänge brauchen Wegdaten statt einer pauschalen Aussage über Steigungen oder Stufen.", "Sí es estable la estructura municipal: Nerja y Maro son núcleos diferenciados del mismo municipio costero. Cada acceso a playa necesita datos de ruta y no una regla universal sobre escaleras o subidas.", "De gemeentelijke structuur is wel stabiel: Nerja en Maro zijn afzonderlijke kernen binnen dezelfde kustgemeente. Een strandtoegang vraagt routespecifiek bewijs, geen algemene regel over trappen of klimmen.", "Kommunstrukturen är däremot stabil: Nerja och Maro är egna kärnor i samma kustkommun. Varje strandtillfart behöver ruttdata, inte en allmän regel om trappor eller stigning.")
      ]
    },
    {
      id: "built-up-relief",
      eyebrow: l("The built-up town", "Der bebaute Ort", "El casco urbano", "De bebouwde kom", "Den bebyggda orten"),
      title: l("One official altitude cannot describe the built-up town", "Eine amtliche Höhenzahl beschreibt nicht den bebauten Ort", "Una sola altitud oficial no describe el casco urbano", "Eén officiële hoogte beschrijft de bebouwde kom niet", "En officiell höjd beskriver inte hela den bebyggda orten"),
      paragraphs: [
        l("SIMA’s 22-metre value belongs to the principal settlement reference; it is not the elevation of every beach, central street or residential area. The nearby Sierra confirms a large regional relief span without supplying route gradients inside town.", "Der SIMA-Wert von 22 Metern gehört zur Hauptortreferenz; er ist nicht die Höhe jedes Strandes, jeder zentralen Straße oder jedes Wohngebiets. Die nahe Sierra belegt eine große regionale Reliefspanne, liefert aber keine Wegsteigungen im Ort.", "Los 22 metros de SIMA corresponden a la referencia del núcleo principal, no a todas las playas, calles céntricas o zonas residenciales. La sierra próxima confirma un gran relieve regional, pero no da pendientes dentro del pueblo.", "De 22 meter van SIMA hoort bij de hoofdplaatsreferentie, niet bij elk strand, elke centrumstraat of woonwijk. De nabije Sierra bevestigt groot regionaal reliëf maar levert geen hellingen in de stad.", "SIMA:s 22 meter hör till huvudortsreferensen, inte till varje strand, centrumgata eller bostadsområde. Den närliggande Sierran visar stort regionalt relief men ger inga lokala väglutningar."),
        l("Two addresses that look equally close to the centre or coast can therefore involve different walking effort. The responsible conclusion is to verify the exact street and route, not to assign one height or accessibility profile to an entire district.", "Zwei ähnlich zentral wirkende Adressen können daher zu Fuß sehr verschieden sein. Verantwortlich ist es, konkrete Straße und Route zu prüfen, statt einem ganzen Viertel eine Höhe oder ein Zugänglichkeitsprofil zuzuschreiben.", "Dos direcciones igualmente cercanas al centro o a la costa pueden exigir esfuerzos distintos. Hay que verificar calle y ruta concretas, no asignar una altura o accesibilidad a todo un barrio.", "Twee adressen die even dicht bij centrum of kust lijken, kunnen te voet verschillen. Controleer straat en route en ken niet één hoogte of toegankelijkheid toe aan een hele wijk.", "Två adresser som ser lika nära centrum eller kust ut kan skilja sig till fots. Kontrollera den exakta gatan och rutten i stället för att ge ett helt område en höjd eller tillgänglighetsprofil.")
      ]
    },
    {
      id: "sierra",
      eyebrow: l("The Sierra", "Die Sierra", "La sierra", "De Sierra", "Sierran"),
      title: l("Mountain terrain begins close to the coast", "Hochgebirge beginnt nahe der Küste", "La alta montaña comienza cerca de la costa", "Hooggebergte begint dicht bij de kust", "Högfjäll börjar nära kusten"),
      paragraphs: [
        l("The official natural-resources plan describes numerous summits above 1,500 metres in this coastal mountain system and gives Navachica an elevation of 1,832 metres. The closeness of high relief to the coast is one of Nerja’s defining geographic relationships.", "Der amtliche Naturressourcenplan beschreibt in diesem küstennahen Gebirgssystem zahlreiche Gipfel über 1.500 Metern und gibt für die Navachica 1.832 Meter an. Die Nähe hohen Reliefs zur Küste prägt Nerjas Geografie.", "El plan oficial de recursos naturales describe numerosas cumbres de más de 1.500 metros en este sistema próximo al litoral y fija Navachica en 1.832 metros. La cercanía entre costa y gran relieve define la geografía de Nerja.", "Het officiële natuurplan beschrijft in dit kustnabije systeem veel toppen boven 1.500 meter en geeft Navachica een hoogte van 1.832 meter. De nabijheid van hoog reliëf bepaalt Nerja’s geografie.", "Den officiella naturresursplanen beskriver många toppar över 1 500 meter i detta kustnära system och anger Navachica till 1 832 meter. Närheten mellan kust och hög relief präglar Nerja."),
        l("The evidence does not yet prove that Navachica is the highest point inside the current Nerja municipal polygon. That boundary question remains explicit instead of being turned into an attractive but unsupported superlative.", "Noch nicht belegt ist, dass die Navachica der höchste Punkt innerhalb der heutigen Gemeindegrenze Nerjas ist. Diese Grenzfrage bleibt sichtbar, statt zu einem attraktiven, aber unbelegten Superlativ zu werden.", "La evidencia aún no demuestra que Navachica sea el punto más alto dentro del actual límite municipal de Nerja. La cuestión queda abierta en vez de convertirse en un superlativo sin probar.", "Nog niet bewezen is dat Navachica het hoogste punt binnen de huidige gemeentegrens is. Die vraag blijft open in plaats van een onbewezen superlatief te worden.", "Det är ännu inte bevisat att Navachica är högsta punkten inom dagens kommungräns. Frågan förblir öppen i stället för att bli en obelagd superlativ.")
      ]
    },
    {
      id: "rio-chillar",
      eyebrow: l("The valley corridor", "Der Talkorridor", "El corredor del valle", "De valleicorridor", "Dalgången"),
      title: l("The Río Chíllar links mountain relief with the coast", "Der Río Chíllar verbindet Gebirgsrelief und Küste", "El río Chíllar enlaza el relieve de la sierra con la costa", "De Río Chíllar verbindt het bergreliëf met de kust", "Río Chíllar binder samman bergsreliefen med kusten"),
      paragraphs: [
        l("The lower Río Chíllar provides a stable inland axis from its mouth toward the quarry. A municipal source describes this lower section as approximately 3.6 kilometres, giving the river a useful scale without turning it into a walking itinerary.", "Der untere Río Chíllar bildet eine stabile Achse von seiner Mündung landeinwärts zum Steinbruch. Eine Gemeindequelle beschreibt diesen unteren Abschnitt mit rund 3,6 Kilometern und gibt dem Korridor damit Maßstab, ohne ihn zur Wanderroute zu machen.", "El tramo inferior del Río Chíllar crea un eje estable desde la desembocadura hacia la cantera. Una fuente municipal describe este tramo con unos 3,6 kilómetros, una escala útil que no lo convierte en itinerario.", "De benedenloop van de Río Chíllar vormt een vaste as vanaf de monding richting groeve. Een gemeentelijke bron beschrijft dit deel als circa 3,6 kilometer, zonder er een wandelroute van te maken.", "Nedre Río Chíllar bildar en stabil axel från mynningen mot stenbrottet. En kommunal källa beskriver sträckan som cirka 3,6 kilometer utan att göra den till en vandringsled."),
        l("Location is stable geography; access, closure, safety and environmental restrictions are operational information. They require a current official notice and cannot be inferred from a dated maintenance report.", "Die Lage ist stabile Geografie; Zugang, Sperrung, Sicherheit und Naturschutzauflagen sind operative Informationen. Sie brauchen eine aktuelle amtliche Mitteilung und lassen sich nicht aus einem älteren Pflegebericht ableiten.", "La ubicación es geografía estable; acceso, cierre, seguridad y restricciones ambientales son datos operativos. Exigen un aviso oficial vigente y no se deducen de una noticia de mantenimiento.", "Ligging is stabiele geografie; toegang, sluiting, veiligheid en natuurbescherming zijn operationeel. Daarvoor is een actuele officiële mededeling nodig.", "Läget är stabil geografi; tillträde, stängning, säkerhet och miljöregler är operativa uppgifter. De kräver ett aktuellt officiellt besked.")
      ]
    },
    {
      id: "what-it-means",
      eyebrow: l("What it means for a stay", "Was das für den Aufenthalt bedeutet", "Qué significa para una estancia", "Wat dit betekent voor een verblijf", "Vad det betyder för en vistelse"),
      title: l("Combine distance with gradient", "Entfernung und Steigung zusammen betrachten", "Combinar distancia y pendiente", "Combineer afstand met helling", "Väg samman avstånd och lutning"),
      paragraphs: [
        l("A short line on a map does not establish an equally easy walk. The 22-metre town reference and the high Sierra context are useful at municipal scale, but neither replaces the gradient, surface and steps of a specific route.", "Eine kurze Linie auf der Karte garantiert keinen gleich leichten Fußweg. Die 22-Meter-Referenz des Hauptortes und die hohe Sierra helfen im Maßstab der Gemeinde, ersetzen aber weder Gefälle noch Oberfläche und Stufen einer konkreten Route.", "Una línea corta en el mapa no garantiza un paseo igual de sencillo. La referencia de 22 metros y la sierra alta orientan a escala municipal, pero no sustituyen pendiente, superficie y escalones de una ruta concreta.", "Een korte lijn op de kaart garandeert geen even gemakkelijke wandeling. De 22-meterreferentie en de hoge Sierra helpen op gemeentelijke schaal, maar vervangen geen helling, ondergrond of trappen van een route.", "En kort linje på kartan garanterar inte en lika lätt promenad. Huvudortens 22 meter och den höga Sierran hjälper på kommunskala, men ersätter inte lutning, underlag och trappor på en viss väg."),
        l("For repeated returns, summer heat, luggage or a pushchair, check the exact origin and destination before you book.", "Prüft bei wiederholten Wegen, Sommerhitze, Gepäck oder Kinderwagen den genauen Start und das Ziel. Diese Seite erklärt, warum das nötig ist; Unterkunfts- und Lagenwahl gehören in den Guide „Wo übernachten“.", "Con vueltas repetidas, calor, equipaje o carrito, comprobad origen y destino exactos. Esta página explica por qué; la elección de alojamiento y zona corresponde a la guía Dónde alojarse.", "Controleer bij herhaalde wegen, hitte, bagage of kinderwagen exact begin en eind. Deze pagina verklaart waarom; accommodatie en gebiedskeuze horen in de gids Waar overnachten.", "Kontrollera exakt start och mål vid upprepade vägar, värme, bagage eller barnvagn. Denna sida förklarar varför; boende- och områdesval hör hemma i guiden Var ska man bo.")
      ]
    }
  ],
  related: {
    eyebrow: l("Continue", "Weiterlesen", "Continuar", "Lees verder", "Läs vidare"),
    title: l("Turn the terrain into a practical plan", "Vom Gelände zum praktischen Plan", "Del relieve al plan práctico", "Van het terrein naar een praktisch plan", "Från terrängen till en praktisk plan"),
    links: [
      {
        token: "getting_to_nerja" as LinkToken,
        label: l("Arrival & mobility", "Anreise & Mobilität", "Llegada y movilidad", "Aankomst & mobiliteit", "Ankomst & mobilitet"),
        text: l("Airports, coach connections and the final route into Nerja.", "Flughäfen, Busverbindungen und die letzte Etappe nach Nerja.", "Aeropuertos, conexiones en autobús y el último tramo hasta Nerja.", "Luchthavens, busverbindingen en het laatste traject naar Nerja.", "Flygplatser, bussförbindelser och sista sträckan in till Nerja.")
      },
      {
        token: "nerja_where_to_stay" as LinkToken,
        label: l("Where to stay in Nerja", "Wo in Nerja übernachten", "Dónde alojarse en Nerja", "Waar overnachten in Nerja", "Var man bor i Nerja"),
        text: l("Compare the centre, coastal areas and higher residential slopes.", "Zentrum, Küstenlagen und höhere Wohnhänge im Vergleich.", "Comparación entre el centro, las zonas costeras y las laderas residenciales.", "Vergelijk het centrum, kustgebieden en hogere woonhellingen.", "Jämför centrum, kustområden och högre bostadssluttningar.")
      }
    ]
  },
  sources: {
    eyebrow: l("Behind this guide", "Belege hinter dem Guide", "Fuentes de la guía", "Bronnen van deze gids", "Källorna bakom guiden"),
    title: l("Official geography and explicit evidence limits", "Amtliche Geografie und klare Beleggrenzen", "Geografía oficial y límites de evidencia claros", "Officiële geografie en duidelijke bewijsgrenzen", "Officiell geografi och tydliga bevisgränser"),
    intro: l("SIMA supplies municipal scale and population references. The Junta plan supplies the mountain context; the Nerja council supplies the lower Chíllar corridor. Conflicting official coastline figures remain visible.", "SIMA liefert Gemeinde- und Siedlungsreferenzen. Der Junta-Plan beschreibt das Gebirge; die Gemeinde Nerja den unteren Chíllar-Korridor. Widersprüchliche amtliche Küstenangaben bleiben sichtbar.", "SIMA aporta la escala municipal y los núcleos. El plan de la Junta aporta la montaña; el Ayuntamiento de Nerja, el corredor inferior del Chíllar. La contradicción oficial sobre la costa permanece visible.", "SIMA levert gemeentelijke schaal en woonkernen. Het Junta-plan beschrijft de bergen; Nerja’s gemeente de benedenloop van de Chíllar. Tegenstrijdige officiële kustcijfers blijven zichtbaar.", "SIMA ger kommunskala och befolkningskärnor. Junta-planen ger bergskontexten; Nerjas kommun nedre Chíllar. Motstridiga officiella kustsiffror förblir synliga."),
    checked: l("Sources checked in August 2026.", "Quellen geprüft im August 2026.", "Fuentes comprobadas en agosto de 2026.", "Bronnen gecontroleerd in augustus 2026.", "Källor kontrollerade i augusti 2026."),
    links: [
      {
        label: l("SIMA · Nerja", "SIMA · Nerja", "SIMA · Nerja", "SIMA · Nerja", "SIMA · Nerja"),
        text: l("Official municipal area and reference data.", "Amtliche Fläche und Referenzdaten der Gemeinde.", "Superficie y datos oficiales de referencia del municipio.", "Officiële oppervlakte en referentiegegevens van de gemeente.", "Officiell kommunyta och referensuppgifter."),
        href: sharedSources.sima
      },
      {
        label: l("SIMA · Population centres", "SIMA · Siedlungskerne", "SIMA · Núcleos de población", "SIMA · Woonkernen", "SIMA · Befolkningskärnor"),
        text: l("Official list of Nerja, Maro, Imaroga and Macaca.", "Amtliche Liste von Nerja, Maro, Imaroga und Macaca.", "Lista oficial de Nerja, Maro, Imaroga y Macaca.", "Officiële lijst van Nerja, Maro, Imaroga en Macaca.", "Officiell lista över Nerja, Maro, Imaroga och Macaca."),
        href: sharedSources.populationCentres
      },
      {
        label: l("BOJA · Sierra plan", "BOJA · Sierra-Plan", "BOJA · Plan de la sierra", "BOJA · Sierraplan", "BOJA · Sierraplan"),
        text: l("Official coastal-mountain relief and Navachica elevation.", "Amtliches Küstengebirge und Höhenangabe der Navachica.", "Relieve litoral oficial y altitud de Navachica.", "Officieel kustgebergte en hoogte van Navachica.", "Officiellt kustberg och Navachicas höjd."),
        href: sharedSources.sierraPlan
      },
      {
        label: l("Ayuntamiento de Nerja · Lower Río Chíllar", "Ayuntamiento de Nerja · Unterer Río Chíllar", "Ayuntamiento de Nerja · Río Chíllar inferior", "Ayuntamiento de Nerja · Benedenloop Río Chíllar", "Ayuntamiento de Nerja · Nedre Río Chíllar"),
        text: l("Municipal orientation from the mouth to the quarry.", "Gemeindeorientierung von der Mündung bis zum Steinbruch.", "Orientación municipal desde la desembocadura hasta la cantera.", "Oriëntatie van monding tot groeve.", "Orientering från mynning till stenbrott."),
        href: sharedSources.chillarLower
      },
      {
        label: l("Nerja Turismo · Coastline", "Nerja Turismo · Küste", "Nerja Turismo · Costa", "Nerja Turismo · Kust", "Nerja Turismo · Kust"),
        text: l("Official tourism source reporting 13 kilometres.", "Amtliche Tourismusquelle mit 13 Kilometern.", "Fuente turística oficial que indica 13 kilómetros.", "Officiële toerismebron met 13 kilometer.", "Officiell turistkälla med 13 kilometer."),
        href: sharedSources.coastline13
      },
      {
        label: l("Nerja Turismo · Beaches", "Nerja Turismo · Strände", "Nerja Turismo · Playas", "Nerja Turismo · Stranden", "Nerja Turismo · Stränder"),
        text: l("Official tourism source reporting 14 kilometres.", "Amtliche Tourismusquelle mit 14 Kilometern.", "Fuente turística oficial que indica 14 kilómetros.", "Officiële toerismebron met 14 kilometer.", "Officiell turistkälla med 14 kilometer."),
        href: sharedSources.coastline14
      }
    ]
  },
  closing: {
    eyebrow: l("Back to the stay", "Zurück zum Aufenthalt", "Volver a la estancia", "Terug naar het verblijf", "Tillbaka till vistelsen"),
    title: l("A better map includes the climb.", "Eine gute Karte zeigt auch den Anstieg.", "Un buen mapa también incluye la subida.", "Een betere kaart laat ook de klim zien.", "En bättre karta visar också stigningen."),
    body: l("Once the sea-to-Sierra structure is clear, choosing routes and a base becomes much more realistic.", "Wenn die Struktur vom Meer zur Sierra klar ist, werden Wege und die Wahl der passenden Basis realistischer.", "Al comprender la estructura del mar a la sierra, resulta más fácil valorar rutas y elegir una base realista.", "Zodra de structuur van zee naar Sierra duidelijk is, worden routes en de keuze van een uitvalsbasis realistischer.", "När strukturen från havet till Sierran är tydlig blir det lättare att bedöma vägar och välja en realistisk bas."),
    locationLabel: l("Back to the Nerja location guide", "Zurück zum Nerja Lage-Guide", "Volver a la guía de ubicación de Nerja", "Terug naar de locatiegids van Nerja", "Tillbaka till Nerjas lägesguide"),
    propertyLabel: l("View AMARA Playa", "AMARA Playa ansehen", "Ver AMARA Playa", "Bekijk AMARA Playa", "Visa AMARA Playa")
  }
};

/**
 * Leaf-localized copy: the page is described once and every authored string
 * carries its five locales (`DR-CONTENT-STRUCT-001`). A page resolves the whole
 * tree at its boundary with `resolveLocale`, so the renderers below it keep
 * receiving plain strings.
 */
export type NerjaGeographyLocale = Resolved<typeof nerjaGeographyContent>;
export type NerjaGeographySection = NerjaGeographyLocale['sections'][number];
