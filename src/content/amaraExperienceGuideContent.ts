import { resolveLocale, type LocalizedText } from '../types/content';
import type { AmaraLanguage } from '../types/seo';

const text = (en: string, de: string, es: string, nl: string, sv: string): LocalizedText => ({
  en, de, es, nl, sv
});

export const amaraExperienceCategories = [
  { id: 'day-trips', label: text('Day Trips', 'Tagesausflüge', 'Excursiones', 'Dagtrips', 'Dagsutflykter'), items: [] },
  { id: 'beaches', label: text('Beaches', 'Strände', 'Playas', 'Stranden', 'Stränder'), items: [] },
  { id: 'food-drinks', label: text('Food & Drinks', 'Essen & Trinken', 'Comer y beber', 'Eten & drinken', 'Mat & dryck'), items: [] },
  { id: 'nature-walks', label: text('Nature & Walks', 'Natur & Spaziergänge', 'Naturaleza y paseos', 'Natuur & wandelen', 'Natur & promenader'), items: [] },
  { id: 'practical', label: text('Practical', 'Praktisch', 'Información práctica', 'Praktisch', 'Praktiskt'), items: [] },
  { id: 'saved', label: text('Saved', 'Gespeichert', 'Guardado', 'Bewaard', 'Sparat'), items: [] }
] as const;

const guideContent = {
  title: text('AMARA Guest Guide', 'AMARA Gastguide', 'Guía para huéspedes de AMARA', 'AMARA Gastengids', 'AMARA Gästguide'),
  eyebrow: text('Your private stay guide', 'Euer privater Aufenthaltsguide', 'Vuestra guía privada', 'Jullie privégids', 'Er privata vistelseguide'),
  welcomeTitle: text('Welcome — the guide is ready for what comes next', 'Willkommen – der Guide ist bereit für die nächsten Inhalte', 'Bienvenidos: la guía está lista para lo que viene', 'Welkom — de gids staat klaar voor de volgende inhoud', 'Välkomna – guiden är redo för nästa innehåll'),
  emptyCopy: text(
    'Secure access and the guide structure are now in place. We will add checked recommendations in a later content stage; empty categories stay hidden until then.',
    'Der sichere Zugang und die Struktur stehen. Geprüfte Empfehlungen folgen in einer späteren Inhaltsphase; leere Kategorien bleiben bis dahin ausgeblendet.',
    'El acceso seguro y la estructura ya están preparados. Añadiremos recomendaciones comprobadas en una fase posterior; las categorías vacías permanecerán ocultas.',
    'De veilige toegang en gidsstructuur staan klaar. Gecontroleerde aanbevelingen volgen in een latere inhoudsfase; lege categorieën blijven tot die tijd verborgen.',
    'Säker åtkomst och guidens struktur är nu på plats. Kontrollerade rekommendationer läggs till i ett senare innehållssteg; tomma kategorier döljs tills dess.'
  ),
  logout: text('Close guide', 'Guide schließen', 'Cerrar guía', 'Gids sluiten', 'Stäng guiden'),
  logoutError: text('The session could not be closed. Please try again.', 'Die Sitzung konnte nicht beendet werden. Bitte versucht es erneut.', 'No se ha podido cerrar la sesión. Intentadlo de nuevo.', 'De sessie kon niet worden gesloten. Probeer het opnieuw.', 'Sessionen kunde inte stängas. Försök igen.'),
  skip: text('Skip to guide content', 'Zum Guide-Inhalt springen', 'Saltar al contenido de la guía', 'Ga naar de gidsinhoud', 'Hoppa till guidens innehåll')
};

export function getAmaraExperienceGuideContent(lang: AmaraLanguage) {
  return {
    ...resolveLocale(guideContent, lang),
    categories: amaraExperienceCategories.map((category) => ({
      id: category.id,
      label: category.label[lang],
      items: [...category.items]
    }))
  };
}
