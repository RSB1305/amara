import { useState } from "react";
import { MapPin, Info, Navigation } from "lucide-react";

type Poi = {
  id: string;
  name: string;
  category: string;
  description: string;
  coords: { x: string; y: string };
  image: string;
};

const pois: Poi[] = [
  {
    id: "plaza",
    name: "Plaza de las Tres Culturas",
    category: "Social Heart",
    description:
      "The central meeting point of Frigiliana, celebrating the peaceful co-existence of Christian, Muslim, and Jewish cultures.",
    coords: { x: "50%", y: "60%" },
    image: "/images/hero-frigiliana.jpg",
  },
  {
    id: "factory",
    name: "Miel de Caña Factory",
    category: "Industrial Heritage",
    description:
      "The only factory in Europe that still produces traditional cane honey, housed in the historic Palacio de los Condes.",
    coords: { x: "30%", y: "45%" },
    image: "/images/hero-frigiliana.jpg",
  },
  {
    id: "church",
    name: "Church of San Antonio",
    category: "Architecture",
    description:
      "A Renaissance landmark built on the site of a former mosque, with a calm presence that still shapes the upper village.",
    coords: { x: "70%", y: "40%" },
    image: "/images/hero-frigiliana.jpg",
  },
  {
    id: "fuerte",
    name: "El Fuerte Peak",
    category: "Nature",
    description:
      "The mountain backdrop above the village, tied to one of the decisive final chapters of the region’s Moorish history.",
    coords: { x: "85%", y: "20%" },
    image: "/images/hero-frigiliana.jpg",
  },
  {
    id: "fountain",
    name: "Fuente Vieja",
    category: "History",
    description:
      "The old fountain that once served the village and its animals, and still feels like a quiet anchor of daily life.",
    coords: { x: "20%", y: "75%" },
    image: "/images/hero-frigiliana.jpg",
  },
];

export default function VillageMap() {
  const [activePoi, setActivePoi] = useState<Poi>(pois[0]);

  return (
    <section className="max-w-screen-2xl mx-auto px-12 py-24 border-t border-outline-variant/10">
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
        <div className="max-w-3xl">
          <span className="label-md text-primary mb-5 block font-bold uppercase tracking-[0.18em]">
            Spatial Narrative
          </span>

          <h2 className="font-headline italic text-4xl md:text-5xl leading-[1.02] tracking-tight text-on-surface">
            Village Explorer
          </h2>
        </div>

        <p className="text-sm uppercase tracking-[0.18em] text-on-surface-variant leading-relaxed max-w-md">
          Navigate the vertical rhythm of Frigiliana and discover a few of the
          places that quietly shape its story.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-8">
          <div className="relative aspect-[16/10] overflow-hidden rounded-[24px] border border-outline-variant/15 bg-surface-container-low shadow-sm">
            <svg
              className="absolute inset-0 w-full h-full opacity-[0.14] text-on-surface pointer-events-none"
              viewBox="0 0 1000 600"
              aria-hidden="true"
            >
              <path
                d="M100,100 Q300,50 500,150 T900,100"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M50,500 Q250,450 450,550 T850,500"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M200,50 Q150,300 250,550"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeDasharray="5,5"
              />
              <path
                d="M800,50 Q850,300 750,550"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeDasharray="5,5"
              />
            </svg>

            <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-black/[0.02] pointer-events-none" />

            {pois.map((poi) => {
              const isActive = activePoi.id === poi.id;

              return (
                <button
                  key={poi.id}
                  type="button"
                  onClick={() => setActivePoi(poi)}
                  className={`absolute z-20 -translate-x-1/2 -translate-y-1/2 rounded-full p-3 transition-all duration-300 ${
                    isActive
                      ? "bg-primary text-on-primary shadow-lg"
                      : "bg-white text-primary border border-primary/20 hover:bg-primary/5"
                  }`}
                  style={{ left: poi.coords.x, top: poi.coords.y }}
                  aria-label={poi.name}
                >
                  <MapPin size={18} />

                  {isActive && (
                    <span className="absolute inset-[-10px] rounded-full border-2 border-primary/20" />
                  )}
                </button>
              );
            })}

            <div className="absolute bottom-7 right-7 opacity-40 flex flex-col items-center pointer-events-none">
              <Navigation className="text-primary mb-2" size={26} />
              <span className="text-[10px] uppercase tracking-[0.32em] font-bold text-on-surface-variant">
                Tramontana
              </span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-4">
          <div className="rounded-[24px] border border-outline-variant/15 bg-surface-container-low p-8 md:p-10 shadow-sm">
            <span className="text-[11px] uppercase tracking-[0.18em] text-primary font-bold mb-4 block">
              {activePoi.category}
            </span>

            <h3 className="font-headline italic text-3xl md:text-4xl leading-[1.05] tracking-tight text-on-surface mb-6">
              {activePoi.name}
            </h3>

            <div className="aspect-[4/3] overflow-hidden rounded-[18px] border border-outline-variant/10 mb-6 bg-white">
              <img
                src={activePoi.image}
                alt={activePoi.name}
                className="w-full h-full object-cover"
              />
            </div>

            <p className="text-on-surface-variant leading-relaxed mb-8">
              {activePoi.description}
            </p>

            <button
              type="button"
              className="w-full border border-primary/30 text-primary px-8 py-4 text-[11px] uppercase tracking-[0.2em] font-bold hover:bg-primary hover:text-on-primary transition-all flex items-center justify-center gap-3"
            >
              <Info size={14} />
              View Historical Context
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}