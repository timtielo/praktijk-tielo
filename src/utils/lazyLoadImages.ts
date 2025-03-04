export function setupLazyLoading() {
  if ('loading' in HTMLImageElement.prototype) {
    // Browser supports native lazy loading
    const images = document.querySelectorAll('img:not([loading])');
    images.forEach(img => {
      img.setAttribute('loading', 'lazy');
    });
  } else {
    // Fallback for browsers that don't support native lazy loading
    setupIntersectionObserver();
  }
}

export function setupIntersectionObserver() {
  // This is a simple implementation of lazy loading using Intersection Observer
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const image = entry.target as HTMLImageElement;
          const dataSrc = image.getAttribute('data-src');
          
          if (dataSrc) {
            image.src = dataSrc;
            image.removeAttribute('data-src');
          }
          
          observer.unobserve(image);
        }
      });
    }, {
      rootMargin: '50px 0px',
      threshold: 0.01
    });
    
    const images = document.querySelectorAll('img[data-src]');
    images.forEach(image => imageObserver.observe(image));
  }
}

// Add support for responsive images
export function setupResponsiveImages() {
  const images = document.querySelectorAll('img[data-srcset]');
  
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const image = entry.target as HTMLImageElement;
          const dataSrcset = image.getAttribute('data-srcset');
          const dataSizes = image.getAttribute('data-sizes');
          
          if (dataSrcset) {
            image.srcset = dataSrcset;
            image.removeAttribute('data-srcset');
          }
          
          if (dataSizes) {
            image.sizes = dataSizes;
            image.removeAttribute('data-sizes');
          }
          
          observer.unobserve(image);
        }
      });
    }, {
      rootMargin: '50px 0px',
      threshold: 0.01
    });
    
    images.forEach(image => imageObserver.observe(image));
  }
}