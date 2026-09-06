import { defineRouteImages } from '../../lib/images/routeImageContract';

/** Guest Guide page `guesthome-frigiliana-lounis`: private surface, never rendered on the public site. */
export const guesthomeFrigilianaLounisImages = defineRouteImages({
  routeKey: 'guesthome-frigiliana-lounis',
  images: [
    {
      role: 'utility',
      id: 'hob-zones',
      src: '/images/amara-lounis/induction-hob-zones.jpg',
      surfaces: ['guide'],
      alt: {
        en: "Induction hob control panel showing zone selection and On/Off button",
        de: "Bedienfeld des Induktionsherds mit Kochzonenauswahl und Ein/Aus-Taste",
        es: "Panel de control de la placa de inducción con selección de zona y botón de encendido/apagado",
        nl: "Bedieningspaneel van de inductiekookplaat met zone-selectie en aan/uit-knop",
        sv: "Induktionshällens kontrollpanel med zonval och På/Av-knapp"
      },
      caption: {
        en: "Zone selection and On/Off button",
        de: "Kochzonenauswahl und Ein/Aus-Taste",
        es: "Selección de zona y botón de encendido/apagado",
        nl: "Zone-selectie en aan/uit-knop",
        sv: "Zonval och På/Av-knapp"
      }
    },
    {
      role: 'utility',
      id: 'hob-child-lock',
      src: '/images/amara-lounis/induction-hob-child-lock.jpg',
      surfaces: ['guide'],
      alt: {
        en: "Induction hob control panel with the child lock button highlighted",
        de: "Bedienfeld des Induktionsherds mit hervorgehobener Kindersicherungstaste",
        es: "Panel de control de la placa de inducción con el botón de bloqueo infantil resaltado",
        nl: "Bedieningspaneel van de inductiekookplaat met de kinderslotknop gemarkeerd",
        sv: "Induktionshällens kontrollpanel med barnspärrsknappen markerad"
      },
      caption: {
        en: "Child lock button",
        de: "Kindersicherungstaste",
        es: "Botón de bloqueo infantil",
        nl: "Kinderslotknop",
        sv: "Barnspärrsknapp"
      }
    },
    {
      role: 'utility',
      id: 'hob-power-levels',
      src: '/images/amara-lounis/induction-hob-power-levels.jpg',
      surfaces: ['guide'],
      alt: {
        en: "Induction hob control panel showing the power level slider (1-9)",
        de: "Bedienfeld des Induktionsherds mit dem Regler für die Leistungsstufen (1–9)",
        es: "Panel de control de la placa de inducción con el control deslizante de potencia (1-9)",
        nl: "Bedieningspaneel van de inductiekookplaat met de vermogensschuif (1-9)",
        sv: "Induktionshällens kontrollpanel med reglaget för effektnivå (1–9)"
      },
      caption: {
        en: "Power level (1–9)",
        de: "Leistungsstufe (1–9)",
        es: "Nivel de potencia (1–9)",
        nl: "Vermogensniveau (1–9)",
        sv: "Effektnivå (1–9)"
      }
    }
  ]
});
