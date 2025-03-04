import { useState, useEffect } from 'react';
import { throttle } from '../utils/performance';

export function useMediaQuery(query: string): boolean {
  // Default to false for SSR
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    // Check if window is available (client-side)
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia(query);
      
      // Set initial value
      setMatches(mediaQuery.matches);

      // Define a throttled handler for resize events
      const handleResize = throttle(() => {
        setMatches(mediaQuery.matches);
      }, 100);

      // Add event listener using the correct API based on browser support
      if (mediaQuery.addEventListener) {
        mediaQuery.addEventListener('change', handleResize);
      } else {
        // Fallback for older browsers
        mediaQuery.addListener(handleResize);
      }

      // Clean up
      return () => {
        if (mediaQuery.removeEventListener) {
          mediaQuery.removeEventListener('change', handleResize);
        } else {
          // Fallback for older browsers
          mediaQuery.removeListener(handleResize);
        }
      };
    }
  }, [query]);

  return matches;
}