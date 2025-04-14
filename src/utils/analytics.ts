// Google Tag Manager and Analytics utility
// This provides a more robust implementation for tracking

interface AnalyticsEvent {
  category: string;
  action: string;
  label?: string;
  value?: number;
  nonInteraction?: boolean;
}

interface PageViewParams {
  path: string;
  title: string;
  language?: string;
}

// Check if GTM is loaded and available
const isGTMAvailable = (): boolean => {
  return typeof window !== 'undefined' && 
         typeof window.dataLayer !== 'undefined';
};

// Initialize analytics - ensure GTM is properly set up
export const initAnalytics = (): void => {
  if (!isGTMAvailable()) {
    console.warn('Google Tag Manager not detected. Analytics may not work properly.');
    return;
  }
  
  // Set default consent mode if not already set
  if (window.dataLayer) {
    // Check if consent mode is already initialized
    let consentInitialized = false;
    
    for (const item of window.dataLayer) {
      if (item && typeof item === 'object' && 'consent' in item) {
        consentInitialized = true;
        break;
      }
    }
    
    // Only initialize consent if not already done
    if (!consentInitialized) {
      window.dataLayer.push({
        'consent': 'default',
        'ad_personalization': 'denied',
        'ad_storage': 'denied',
        'ad_user_data': 'denied',
        'analytics_storage': 'denied',
        'functionality_storage': 'denied',
        'personalization_storage': 'denied',
        'security_storage': 'granted',
        'wait_for_update': 500
      });
    }
  }
  
  // Push event to confirm analytics is initialized
  trackEvent({
    category: 'System',
    action: 'Analytics Initialized',
    nonInteraction: true
  });
};

// Track page view with enhanced parameters
export const trackPageView = ({ path, title, language = 'nl' }: PageViewParams): void => {
  if (!isGTMAvailable()) {
    console.warn('Google Tag Manager not detected. Page view tracking failed.');
    return;
  }
  
  window.dataLayer.push({
    event: 'pageview',
    page: {
      path,
      title,
      language
    }
  });
};

// Track custom events with enhanced parameters
export const trackEvent = ({ category, action, label, value, nonInteraction = false }: AnalyticsEvent): void => {
  if (!isGTMAvailable()) {
    console.warn('Google Tag Manager not detected. Event tracking failed.');
    return;
  }
  
  window.dataLayer.push({
    event: 'custom_event',
    event_category: category,
    event_action: action,
    event_label: label,
    event_value: value,
    non_interaction: nonInteraction
  });
};

// Track form submissions
export const trackFormSubmission = (formName: string, success: boolean): void => {
  trackEvent({
    category: 'Form',
    action: success ? 'Submission Success' : 'Submission Failure',
    label: formName
  });
};

// Track outbound links
export const trackOutboundLink = (url: string, linkText: string): void => {
  trackEvent({
    category: 'Outbound Link',
    action: 'Click',
    label: `${linkText} - ${url}`
  });
};

// Track internal navigation
export const trackNavigation = (linkName: string): void => {
  trackEvent({
    category: 'Navigation',
    action: 'Click',
    label: linkName
  });
};

// Track user engagement
export const trackEngagement = (action: string, detail: string): void => {
  trackEvent({
    category: 'Engagement',
    action,
    label: detail
  });
};

// Track errors
export const trackError = (errorType: string, errorMessage: string): void => {
  trackEvent({
    category: 'Error',
    action: errorType,
    label: errorMessage,
    nonInteraction: true
  });
};

// Verify GTM is working properly
export const verifyGTM = (): boolean => {
  if (!isGTMAvailable()) {
    console.warn('Google Tag Manager not detected.');
    return false;
  }
  
  // Check if GTM is actually sending data
  const testEvent = {
    event: 'test_event',
    test_data: 'GTM Verification'
  };
  
  try {
    window.dataLayer.push(testEvent);
    console.log('GTM verification event sent successfully.');
    return true;
  } catch (error) {
    console.error('Failed to send GTM verification event:', error);
    return false;
  }
};