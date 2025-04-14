/**
 * GTM Debug Utility
 * 
 * This file contains utility functions to help debug Google Tag Manager
 * and Google Analytics integration. It should be used during development
 * and testing only.
 */

// Check if GTM container is loaded
export const isGTMLoaded = (): boolean => {
  return typeof window !== 'undefined' && 
         typeof window.google_tag_manager !== 'undefined' &&
         typeof window.google_tag_manager['GTM-N6XD9MQP'] !== 'undefined';
};

// Check if GA4 is loaded
export const isGA4Loaded = (): boolean => {
  return typeof window !== 'undefined' && 
         typeof window.gtag !== 'undefined';
};

// Check if dataLayer exists and has content
export const checkDataLayer = (): { exists: boolean, eventCount: number } => {
  if (typeof window === 'undefined' || !window.dataLayer) {
    return { exists: false, eventCount: 0 };
  }
  
  return { 
    exists: true, 
    eventCount: window.dataLayer.length 
  };
};

// Check if Cookiebot is loaded and functioning
export const isCookiebotLoaded = (): boolean => {
  return typeof window !== 'undefined' && 
         typeof window.Cookiebot !== 'undefined';
};

// Check consent status
export const getConsentStatus = (): Record<string, boolean | undefined> => {
  if (typeof window === 'undefined' || !window.Cookiebot) {
    return {
      marketing: undefined,
      statistics: undefined,
      preferences: undefined
    };
  }
  
  return {
    marketing: window.Cookiebot.consent.marketing,
    statistics: window.Cookiebot.consent.statistics,
    preferences: window.Cookiebot.consent.preferences
  };
};

// Run a comprehensive check of all tracking components
export const runTrackingDiagnostics = (): Record<string, any> => {
  const diagnostics = {
    timestamp: new Date().toISOString(),
    url: window.location.href,
    gtm: {
      loaded: isGTMLoaded(),
      containerId: 'GTM-N6XD9MQP'
    },
    ga4: {
      loaded: isGA4Loaded(),
      measurementId: 'G-52P9ESFK7X'
    },
    dataLayer: checkDataLayer(),
    cookiebot: {
      loaded: isCookiebotLoaded(),
      consent: getConsentStatus()
    },
    metaPixel: {
      loaded: typeof window !== 'undefined' && typeof window.fbq !== 'undefined',
      pixelId: '1425072805570049'
    },
    browser: {
      userAgent: navigator.userAgent,
      language: navigator.language,
      cookiesEnabled: navigator.cookieEnabled,
      doNotTrack: navigator.doNotTrack === '1' || window.doNotTrack === '1'
    }
  };
  
  console.table({
    'GTM Loaded': diagnostics.gtm.loaded,
    'GA4 Loaded': diagnostics.ga4.loaded,
    'DataLayer Events': diagnostics.dataLayer.eventCount,
    'Cookiebot Loaded': diagnostics.cookiebot.loaded,
    'Meta Pixel Loaded': diagnostics.metaPixel.loaded,
    'Marketing Consent': diagnostics.cookiebot.consent.marketing,
    'Statistics Consent': diagnostics.cookiebot.consent.statistics
  });
  
  return diagnostics;
};

// Send a test event to verify tracking
export const sendTestEvent = (eventName: string = 'test_event'): void => {
  if (typeof window === 'undefined') return;
  
  // Send to dataLayer
  if (window.dataLayer) {
    window.dataLayer.push({
      event: eventName,
      test_data: 'This is a test event',
      timestamp: new Date().toISOString()
    });
    console.log(`Test event "${eventName}" sent to dataLayer`);
  } else {
    console.warn('dataLayer not found, cannot send test event');
  }
  
  // Send to GA4 directly
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, {
      test_data: 'This is a direct GA4 test event',
      timestamp: new Date().toISOString()
    });
    console.log(`Test event "${eventName}" sent directly to GA4`);
  } else {
    console.warn('gtag not found, cannot send direct GA4 test event');
  }
  
  // Send to Meta Pixel
  if (typeof window.fbq === 'function') {
    window.fbq('trackCustom', eventName, {
      test_data: 'This is a Meta Pixel test event',
      timestamp: new Date().toISOString()
    });
    console.log(`Test event "${eventName}" sent to Meta Pixel`);
  } else {
    console.warn('fbq not found, cannot send Meta Pixel test event');
  }
};

// Add a debug panel to the page (development only)
export const addDebugPanel = (): void => {
  if (process.env.NODE_ENV !== 'development') return;
  
  const panel = document.createElement('div');
  panel.style.position = 'fixed';
  panel.style.bottom = '10px';
  panel.style.right = '10px';
  panel.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
  panel.style.color = 'white';
  panel.style.padding = '10px';
  panel.style.borderRadius = '5px';
  panel.style.zIndex = '9999';
  panel.style.fontSize = '12px';
  panel.style.maxWidth = '300px';
  
  const updatePanel = () => {
    const diagnostics = runTrackingDiagnostics();
    panel.innerHTML = `
      <div style="font-weight: bold; margin-bottom: 5px;">Tracking Debug</div>
      <div>GTM: ${diagnostics.gtm.loaded ? '✅' : '❌'}</div>
      <div>GA4: ${diagnostics.ga4.loaded ? '✅' : '❌'}</div>
      <div>DataLayer: ${diagnostics.dataLayer.exists ? '✅' : '❌'} (${diagnostics.dataLayer.eventCount} events)</div>
      <div>Cookiebot: ${diagnostics.cookiebot.loaded ? '✅' : '❌'}</div>
      <div>Meta Pixel: ${diagnostics.metaPixel.loaded ? '✅' : '❌'}</div>
      <div style="margin-top: 5px;">
        <button id="gtm-test-event" style="background: #4285f4; border: none; color: white; padding: 3px 6px; border-radius: 3px; margin-right: 5px; cursor: pointer;">Send Test Event</button>
        <button id="gtm-refresh" style="background: #34a853; border: none; color: white; padding: 3px 6px; border-radius: 3px; cursor: pointer;">Refresh</button>
      </div>
    `;
    
    // Add event listeners
    const testButton = document.getElementById('gtm-test-event');
    if (testButton) {
      testButton.addEventListener('click', () => sendTestEvent());
    }
    
    const refreshButton = document.getElementById('gtm-refresh');
    if (refreshButton) {
      refreshButton.addEventListener('click', updatePanel);
    }
  };
  
  updatePanel();
  document.body.appendChild(panel);
};

// Initialize debug tools if in development mode
export const initDebugTools = (): void => {
  if (process.env.NODE_ENV === 'development') {
    console.log('GTM Debug Tools initialized');
    
    // Wait for GTM to load
    setTimeout(() => {
      runTrackingDiagnostics();
      
      // Uncomment to add visual debug panel
      // addDebugPanel();
    }, 2000);
  }
};