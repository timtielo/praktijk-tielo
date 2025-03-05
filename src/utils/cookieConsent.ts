import 'vanilla-cookieconsent';
import 'vanilla-cookieconsent/dist/cookieconsent.css';

export function initCookieConsent() {
  // Wait for the DOM to be fully loaded
  if (typeof window === 'undefined' || !document.body) return;

  // Initialize dataLayer for GTM
  window.dataLayer = window.dataLayer || [];

  // Create cookie consent instance
  const cc = window.CookieConsent;

  if (!cc) {
    console.warn('Cookie consent library not loaded');
    return;
  }

  cc.run({
    current_lang: 'nl',
    autoclear_cookies: true,
    page_scripts: true,
    gui_options: {
      consent_modal: {
        layout: 'cloud',
        position: 'bottom center',
        transition: 'slide',
        swap_buttons: false
      },
      settings_modal: {
        layout: 'box',
        transition: 'slide'
      }
    },
    languages: {
      nl: {
        consent_modal: {
          title: 'Wij gebruiken cookies! 🍪',
          description: 'Deze website gebruikt essentiële cookies om zijn werking te garanderen en tracking cookies om te begrijpen hoe u ermee omgaat. Deze laatste worden alleen geplaatst na toestemming.',
          primary_btn: {
            text: 'Accepteer alle',
            role: 'accept_all'
          },
          secondary_btn: {
            text: 'Voorkeuren',
            role: 'settings'
          }
        },
        settings_modal: {
          title: 'Cookie voorkeuren',
          save_settings_btn: 'Voorkeuren opslaan',
          accept_all_btn: 'Accepteer alle',
          reject_all_btn: 'Weiger alle',
          close_btn_label: 'Sluiten',
          cookie_table_headers: [
            {name: 'Naam'},
            {domain: 'Domain'},
            {expiration: 'Vervaldatum'},
            {description: 'Beschrijving'}
          ],
          blocks: [
            {
              title: 'Cookie gebruik 📢',
              description: 'Wij gebruiken cookies om de basisfunctionaliteiten van de website te garanderen en om uw gebruikerservaring te verbeteren.'
            }, {
              title: 'Strikt noodzakelijke cookies',
              description: 'Deze cookies zijn essentieel voor het goed functioneren van deze website. Zonder deze cookies kan de website niet goed werken.',
              toggle: {
                value: 'necessary',
                enabled: true,
                readonly: true
              }
            }, {
              title: 'Analytics cookies',
              description: 'Deze cookies verzamelen informatie over hoe u de website gebruikt, welke pagina\'s u heeft bezocht en op welke links u heeft geklikt. Al deze gegevens zijn geanonimiseerd en kunnen niet gebruikt worden om u te identificeren.',
              toggle: {
                value: 'analytics',
                enabled: false,
                readonly: false
              }
            }
          ]
        }
      },
      en: {
        consent_modal: {
          title: 'We use cookies! 🍪',
          description: 'This website uses essential cookies to ensure its proper operation and tracking cookies to understand how you interact with it. The latter will be set only after consent.',
          primary_btn: {
            text: 'Accept all',
            role: 'accept_all'
          },
          secondary_btn: {
            text: 'Preferences',
            role: 'settings'
          }
        },
        settings_modal: {
          title: 'Cookie preferences',
          save_settings_btn: 'Save settings',
          accept_all_btn: 'Accept all',
          reject_all_btn: 'Reject all',
          close_btn_label: 'Close',
          cookie_table_headers: [
            {name: 'Name'},
            {domain: 'Domain'},
            {expiration: 'Expiration'},
            {description: 'Description'}
          ],
          blocks: [
            {
              title: 'Cookie usage 📢',
              description: 'We use cookies to ensure the basic functionalities of the website and to enhance your online experience.'
            }, {
              title: 'Strictly necessary cookies',
              description: 'These cookies are essential for the proper functioning of this website. Without these cookies, the website would not work properly.',
              toggle: {
                value: 'necessary',
                enabled: true,
                readonly: true
              }
            }, {
              title: 'Analytics cookies',
              description: 'These cookies collect information about how you use the website, which pages you visited and which links you clicked on. All of the data is anonymized and cannot be used to identify you.',
              toggle: {
                value: 'analytics',
                enabled: false,
                readonly: false
              }
            }
          ]
        }
      }
    },
    onAccept: (cookie: any) => {
      // Enable GTM if analytics cookies are accepted
      if (cc.allowedCategory('analytics')) {
        window.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
      }
    },
    onChange: (cookie: any, changed_preferences: any) => {
      // Handle cookie preference changes
      if (!cc.allowedCategory('analytics')) {
        // Optionally disable GTM/analytics when user revokes consent
        window.dataLayer = [];
      }
    }
  });
}

// Add types for global window object
declare global {
  interface Window {
    dataLayer: any[];
    CookieConsent: any;
  }
}