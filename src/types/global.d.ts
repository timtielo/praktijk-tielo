// Global type definitions for window objects

interface Window {
  dataLayer: any[];
  google_tag_manager?: Record<string, any>;
  gtag?: (...args: any[]) => void;
  Cookiebot?: {
    consent: {
      marketing: boolean;
      statistics: boolean;
      preferences: boolean;
    };
    renew: () => void;
    show: () => void;
    hide: () => void;
    withdraw: () => void;
  };
  fbq?: (...args: any[]) => void;
  doNotTrack?: string;
}

// Declare global variables
declare global {
  interface Window {
    dataLayer: any[];
    google_tag_manager?: Record<string, any>;
    gtag?: (...args: any[]) => void;
    Cookiebot?: {
      consent: {
        marketing: boolean;
        statistics: boolean;
        preferences: boolean;
      };
      renew: () => void;
      show: () => void;
      hide: () => void;
      withdraw: () => void;
    };
    fbq?: (...args: any[]) => void;
    doNotTrack?: string;
  }
}

export {};