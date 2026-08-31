import { resolveLocale, type LocalizedText, type LocalizedTextList } from '../types/content';
import type { AmaraAuthoringSeo, AmaraLanguage } from '../types/seo';

const text = (en: string, de: string, es: string, nl: string, sv: string): LocalizedText => ({
  en, de, es, nl, sv
});

export const amaraExperienceSeo: AmaraAuthoringSeo = {
  version: '2026-08-31-amara-experience-v1.0',
  pageType: 'C',
  entityKey: 'amara-brand',
  languages: {
    en: {
      title: 'AMARA Experience | Your guide after booking',
      description: 'Confirmed AMARA guests can open their private stay guide with the first name and dates on their booking.',
      robots: 'index, follow', canonical: 'auto'
    },
    de: {
      title: 'AMARA Experience | Euer Guide nach der Buchung',
      description: 'Bestätigte AMARA-Gäste öffnen ihren privaten Aufenthaltsguide mit Vorname und Reisedaten aus der Buchung.',
      robots: 'index, follow', canonical: 'auto'
    },
    es: {
      title: 'AMARA Experience | Vuestra guía después de reservar',
      description: 'Los huéspedes con reserva confirmada pueden abrir su guía privada con el nombre y las fechas de la reserva.',
      robots: 'index, follow', canonical: 'auto'
    },
    nl: {
      title: 'AMARA Experience | Jullie gids na het boeken',
      description: 'Gasten met een bevestigde AMARA-boeking openen hun privégids met de voornaam en data uit de boeking.',
      robots: 'index, follow', canonical: 'auto'
    },
    sv: {
      title: 'AMARA Experience | Er guide efter bokningen',
      description: 'Gäster med en bekräftad AMARA-bokning öppnar sin privata vistelseguide med förnamn och bokningsdatum.',
      robots: 'index, follow', canonical: 'auto'
    }
  }
};

const content = {
  eyebrow: text('For booked guests', 'Für gebuchte Gäste', 'Para huéspedes con reserva', 'Voor geboekte gasten', 'För bokade gäster'),
  title: text('Your AMARA Experience', 'Eure AMARA Experience', 'Vuestra AMARA Experience', 'Jullie AMARA Experience', 'Er AMARA Experience'),
  directAnswer: text(
    'AMARA Experience is the private companion for your stay after your booking has been confirmed. Enter the first name of the booking holder and the exact arrival and departure dates from the confirmation. You can open the guide immediately after confirmation and until the end of your departure day. Inside, we will gradually bring together useful local ideas and practical orientation for your booked AMARA stay. Access is checked securely against the booking; the page does not display personal booking details, access codes, payment information or keys.',
    'Die AMARA Experience begleitet euch privat, sobald eure Buchung bestätigt ist. Gebt den Vornamen der buchenden Person sowie das genaue An- und Abreisedatum aus der Bestätigung ein. Der Guide ist direkt nach der Bestätigung und bis zum Ende eures Abreisetags erreichbar. Darin bündeln wir nach und nach nützliche Ideen vor Ort und praktische Orientierung für euren gebuchten AMARA-Aufenthalt. Der Zugang wird sicher mit der Buchung abgeglichen; persönliche Buchungsdaten, Zugangscodes, Zahlungsinformationen oder Schlüssel werden dort nicht angezeigt.',
    'AMARA Experience es la guía privada que os acompaña desde que vuestra reserva queda confirmada. Introducid el nombre de la persona titular y las fechas exactas de llegada y salida que figuran en la confirmación. Podéis abrirla inmediatamente después de confirmar y hasta el final del día de salida. Dentro iremos reuniendo ideas locales útiles y orientación práctica para vuestra estancia reservada con AMARA. El acceso se contrasta de forma segura con la reserva; la guía no muestra datos personales de la reserva, códigos de acceso, información de pago ni llaves.',
    'AMARA Experience is jullie privégids zodra de boeking is bevestigd. Vul de voornaam van de hoofdboeker in, samen met de exacte aankomst- en vertrekdatum uit de bevestiging. De gids is direct na bevestiging beschikbaar en blijft open tot het einde van de vertrekdag. We brengen er stap voor stap bruikbare lokale ideeën en praktische oriëntatie voor jullie geboekte AMARA-verblijf samen. De toegang wordt veilig met de boeking gecontroleerd; persoonlijke boekingsgegevens, toegangscodes, betaalinformatie en sleutelinformatie worden niet getoond.',
    'AMARA Experience är er privata följeslagare från det att bokningen har bekräftats. Ange bokningsinnehavarens förnamn och de exakta ankomst- och avresedatumen i bekräftelsen. Guiden kan öppnas direkt efter bekräftelsen och fram till slutet av avresedagen. Där samlar vi stegvis användbara lokala idéer och praktisk orientering för er bokade AMARA-vistelse. Åtkomsten kontrolleras säkert mot bokningen; personliga bokningsuppgifter, portkoder, betalningsinformation eller nyckelinformation visas inte.'
  ),
  formTitle: text('Open your private guide', 'Euren privaten Guide öffnen', 'Abrid vuestra guía privada', 'Open jullie privégids', 'Öppna er privata guide'),
  formIntro: text(
    'Use the details exactly as they appear in the booking confirmation.',
    'Verwendet die Angaben aus eurer Buchungsbestätigung.',
    'Usad los datos tal como aparecen en la confirmación.',
    'Gebruik de gegevens zoals ze in de boekingsbevestiging staan.',
    'Använd uppgifterna precis som de står i bokningsbekräftelsen.'
  ),
  firstNameLabel: text('First name of booking holder', 'Vorname der buchenden Person', 'Nombre de la persona titular', 'Voornaam van de hoofdboeker', 'Bokningsinnehavarens förnamn'),
  arrivalLabel: text('Arrival date', 'Anreisedatum', 'Fecha de llegada', 'Aankomstdatum', 'Ankomstdatum'),
  departureLabel: text('Departure date', 'Abreisedatum', 'Fecha de salida', 'Vertrekdatum', 'Avresedatum'),
  submitLabel: text('Open AMARA Experience', 'AMARA Experience öffnen', 'Abrir AMARA Experience', 'AMARA Experience openen', 'Öppna AMARA Experience'),
  pendingLabel: text('Checking booking…', 'Buchung wird geprüft…', 'Comprobando la reserva…', 'Boeking controleren…', 'Kontrollerar bokningen…'),
  deniedMessage: text(
    'We could not open the guide with these details. Check the booking confirmation or contact us if you need help.',
    'Mit diesen Angaben konnten wir den Guide nicht öffnen. Prüft bitte die Buchungsbestätigung oder meldet euch bei uns.',
    'No hemos podido abrir la guía con estos datos. Revisad la confirmación o contactadnos si necesitáis ayuda.',
    'Met deze gegevens konden we de gids niet openen. Controleer de bevestiging of neem contact met ons op.',
    'Vi kunde inte öppna guiden med de här uppgifterna. Kontrollera bekräftelsen eller kontakta oss om ni behöver hjälp.'
  ),
  unavailableMessage: text(
    'The private guide is not available right now. Please try again later.',
    'Der private Guide ist gerade nicht verfügbar. Bitte versucht es später noch einmal.',
    'La guía privada no está disponible ahora. Intentadlo de nuevo más tarde.',
    'De privégids is nu niet beschikbaar. Probeer het later opnieuw.',
    'Den privata guiden är inte tillgänglig just nu. Försök igen senare.'
  ),
  sessionEndedMessage: text(
    'Your guide session has ended. Enter the booking details again if the stay is still active.',
    'Eure Guide-Sitzung ist beendet. Gebt die Buchungsdaten erneut ein, falls der Aufenthalt noch aktiv ist.',
    'La sesión de la guía ha terminado. Volved a introducir los datos si la estancia sigue activa.',
    'Jullie gidssessie is beëindigd. Vul de boekingsgegevens opnieuw in als het verblijf nog actief is.',
    'Guidesessionen har avslutats. Ange bokningsuppgifterna igen om vistelsen fortfarande är aktiv.'
  ),
  privacyNote: text(
    'We use these details only to verify access against the confirmed booking and to create a necessary encrypted session cookie.',
    'Wir nutzen diese Angaben nur für den Abgleich mit der bestätigten Buchung und ein notwendiges verschlüsseltes Sitzungscookie.',
    'Usamos estos datos únicamente para verificar la reserva confirmada y crear una cookie de sesión cifrada necesaria.',
    'We gebruiken deze gegevens alleen om de bevestigde boeking te controleren en een noodzakelijke versleutelde sessiecookie te maken.',
    'Vi använder uppgifterna endast för att kontrollera den bekräftade bokningen och skapa en nödvändig krypterad sessionscookie.'
  ),
  featureTitle: text('A calm place for the useful parts of your stay', 'Ein ruhiger Ort für das, was euch vor Ort hilft', 'Un lugar tranquilo para lo útil durante la estancia', 'Eén rustige plek voor wat tijdens jullie verblijf helpt', 'En lugn plats för det som hjälper under vistelsen'),
  featureParagraphs: {
    en: ['The first version establishes secure access and the guide structure. Recommendations will appear only after they have been checked and authored for the places where they genuinely apply.', 'The current anonymous Guest Guide remains available separately during the transition.'],
    de: ['Die erste Version schafft den sicheren Zugang und die Struktur des Guides. Empfehlungen erscheinen erst, wenn sie geprüft und für die Orte geschrieben sind, zu denen sie wirklich passen.', 'Der bisherige anonyme Guest Guide bleibt während des Übergangs separat erreichbar.'],
    es: ['La primera versión establece el acceso seguro y la estructura de la guía. Las recomendaciones aparecerán únicamente cuando estén comprobadas y redactadas para los lugares donde realmente sean útiles.', 'La Guest Guide anónima actual seguirá disponible por separado durante la transición.'],
    nl: ['De eerste versie legt de veilige toegang en de structuur van de gids vast. Aanbevelingen verschijnen pas nadat ze zijn gecontroleerd en geschreven voor de plekken waar ze echt van toepassing zijn.', 'De huidige anonieme Guest Guide blijft tijdens de overgang afzonderlijk beschikbaar.'],
    sv: ['Den första versionen skapar säker åtkomst och guidens struktur. Rekommendationer visas först när de har kontrollerats och skrivits för de platser där de faktiskt passar.', 'Den nuvarande anonyma Guest Guide finns kvar separat under övergången.']
  } satisfies LocalizedTextList
};

export function getAmaraExperienceContent(lang: AmaraLanguage) {
  return resolveLocale(content, lang);
}
