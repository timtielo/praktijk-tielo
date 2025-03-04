import { useState, useEffect, useRef, RefObject } from 'react';

interface IntersectionObserverOptions {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
  triggerOnce?: boolean;
}

export function useIntersectionObserver<T extends Element>(
  options: IntersectionObserverOptions = {}
): [RefObject<T>, boolean, IntersectionObserverEntry | null] {
  const { 
    root = null, 
    rootMargin = '0px', 
    threshold = 0,
    triggerOnce = false
  } = options;
  
  const ref = useRef<T>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);
  
  useEffect(() => {
    const node = ref.current;
    
    // If there's no element to observe or IntersectionObserver is not supported, return
    if (!node || typeof IntersectionObserver === 'undefined') {
      return;
    }
    
    // Cleanup function to disconnect the observer
    let observer: IntersectionObserver;
    let unobserved = false;
    
    const observerCallback: IntersectionObserverCallback = (entries) => {
      const [entry] = entries;
      
      // Update state based on intersection
      setIsIntersecting(entry.isIntersecting);
      setEntry(entry);
      
      // If triggerOnce is true and the element is intersecting, unobserve it
      if (triggerOnce && entry.isIntersecting && !unobserved) {
        unobserved = true;
        observer.unobserve(node);
      }
    };
    
    // Create and start observing
    observer = new IntersectionObserver(observerCallback, {
      root,
      rootMargin,
      threshold
    });
    
    observer.observe(node);
    
    // Cleanup on unmount
    return () => {
      observer.disconnect();
    };
  }, [root, rootMargin, threshold, triggerOnce]);
  
  return [ref, isIntersecting, entry];
}