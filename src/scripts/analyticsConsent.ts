const CONSENT_COOKIE = 'amara_cookie_consent';
const CONSENT_MAX_AGE_SECONDS = 60 * 60 * 24 * 180;
const MEASUREMENT_ID = 'G-KJKE3L1HV3';

type ConsentChoice = 'necessary' | 'analytics';

declare global {
  interface Window {
    dataLayer?: unknown[][];
    gtag?: (...args: unknown[]) => void;
    [key: `ga-disable-${string}`]: boolean | undefined;
  }
}

function readConsent(): ConsentChoice | null {
  const prefix = `${CONSENT_COOKIE}=`;
  const stored = document.cookie
    .split(';')
    .map((part) => part.trim())
    .find((part) => part.startsWith(prefix))
    ?.slice(prefix.length);

  return stored === 'necessary' || stored === 'analytics' ? stored : null;
}

function writeConsent(choice: ConsentChoice): void {
  const secure = window.location.protocol === 'https:' ? '; Secure' : '';
  document.cookie = `${CONSENT_COOKIE}=${choice}; Max-Age=${CONSENT_MAX_AGE_SECONDS}; Path=/; SameSite=Lax${secure}`;
}

function deleteAnalyticsCookies(): void {
  document.cookie
    .split(';')
    .map((part) => part.trim().split('=')[0])
    .filter((name) => name === '_ga' || name.startsWith('_ga_'))
    .forEach((name) => {
      document.cookie = `${name}=; Max-Age=0; Path=/; SameSite=Lax`;
      if (window.location.hostname.endsWith('amara-lodging.es')) {
        document.cookie = `${name}=; Max-Age=0; Path=/; Domain=.amara-lodging.es; SameSite=Lax; Secure`;
      }
    });
}

function loadAnalytics(): void {
  if (document.querySelector<HTMLScriptElement>(`script[data-am-ga4="${MEASUREMENT_ID}"]`)) return;

  window[`ga-disable-${MEASUREMENT_ID}`] = false;
  window.dataLayer = window.dataLayer || [];
  window.gtag = (...args: unknown[]) => {
    window.dataLayer?.push(args);
  };
  window.gtag('js', new Date());
  window.gtag('config', MEASUREMENT_ID, {
    cookie_flags: 'SameSite=Lax;Secure',
    cookie_update: true
  });

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(MEASUREMENT_ID)}`;
  script.dataset.amGa4 = MEASUREMENT_ID;
  document.head.append(script);
}

function disableAnalytics(): void {
  window[`ga-disable-${MEASUREMENT_ID}`] = true;
  deleteAnalyticsCookies();
}

export function enhanceAnalyticsConsent(): void {
  const banner = document.querySelector<HTMLElement>('[data-am-analytics-consent]');
  if (!banner) return;

  const showBanner = (): void => {
    banner.hidden = false;
  };

  const hideBanner = (): void => {
    banner.hidden = true;
  };

  const storedChoice = readConsent();
  if (storedChoice === 'analytics') {
    loadAnalytics();
  } else {
    disableAnalytics();
    if (storedChoice === null) showBanner();
  }

  banner.querySelectorAll<HTMLButtonElement>('[data-am-consent-choice]').forEach((button) => {
    button.addEventListener('click', () => {
      const choice = button.dataset.amConsentChoice;
      if (choice !== 'necessary' && choice !== 'analytics') return;

      writeConsent(choice);
      if (choice === 'analytics') loadAnalytics();
      else disableAnalytics();
      hideBanner();
    });
  });

  document.querySelectorAll<HTMLElement>('[data-am-consent-settings]').forEach((trigger) => {
    trigger.addEventListener('click', (event) => {
      event.preventDefault();
      showBanner();
      banner.querySelector<HTMLElement>('[data-am-consent-choice]')?.focus();
    });
  });
}
