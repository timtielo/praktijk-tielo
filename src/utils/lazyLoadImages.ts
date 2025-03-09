// Image loading error handler
function handleImageError(img: HTMLImageElement) {
  console.warn(`Failed to load image: ${img.src}`);
  img.src = '/assets/logos/praktijktielotransparent.svg';
  img.classList.add('image-load-error');
  img.setAttribute('alt', 'Fallback image');
}

export function setupLazyLoading() {
  if ('loading' in HTMLImageElement.prototype) {
    // Browser supports native lazy loading
    const images = document.querySelectorAll('img:not([loading])');
    images.forEach(img => {
      img.setAttribute('loading', 'lazy');
      img.addEventListener('error', () => handleImageError(img as HTMLImageElement));
    });
  } else {
    // Fallback for browsers that don't support native lazy loading
    setupIntersectionObserver();
  }
}

export function setupIntersectionObserver() {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const image = entry.target as HTMLImageElement;
          const dataSrc = image.getAttribute('data-src');
          
          if (dataSrc) {
            image.src = dataSrc;
            image.addEventListener('error', () => handleImageError(image));
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
            image.addEventListener('error', () => handleImageError(image));
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

// Preload critical images
export function preloadCriticalImages() {
  const criticalImages = [
    '/assets/logos/praktijktielotransparent.svg'
  ];

  criticalImages.forEach(src => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
  });
}