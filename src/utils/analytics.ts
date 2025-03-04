// Simple analytics utility that respects user privacy
// This is a placeholder - replace with your actual analytics implementation

interface AnalyticsEvent {
  category: string;
  action: string;
  label?: string;
  value?: number;
}

// Check if the user has opted out of analytics
const hasOptedOut = () => {
  return localStorage.getItem('analytics-opt-out') === 'true';
};

// Set analytics opt-out preference
export const setAnalyticsOptOut = (optOut: boolean) => {
  localStorage.setItem('analytics-opt-out', optOut.toString());
};

// Initialize analytics
export const initAnalytics = () => {
  if (hasOptedOut()) {
    console.log('Analytics disabled by user preference');
    return;
  }
  
  // This would be where you initialize your analytics service
  console.log('Analytics initialized');
};

// Track page view
export const trackPageView = (path: string, title: string) => {
  if (hasOptedOut()) return;
  
  // This would send the page view to your analytics service
  console.log(`Page view: ${path} - ${title}`);
};

// Track event
export const trackEvent = ({ category, action, label, value }: AnalyticsEvent) => {
  if (hasOptedOut()) return;
  
  // This would send the event to your analytics service
  console.log(`Event: ${category} - ${action} - ${label || ''} - ${value || ''}`);
};