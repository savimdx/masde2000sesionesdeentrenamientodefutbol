// Persistent in-memory cache to prevent re-fetching and ensure instant paint
const imageMemoryCache = new Map<string, HTMLImageElement>();

export const ACTIVE_CATALOG_IMAGES = [
  '/images/hero_pack.webp',
  '/images/sample_1.webp',
  '/images/sample_2.webp',
  '/images/sample_3.webp',
  '/images/sample_4.webp',
  '/images/sample_5.webp',
  '/images/bono_1_custom.webp',
  '/images/bono_2_custom.webp',
  '/images/bono_3_custom.webp',
  '/images/bono_metodologia_barca_custom.webp',
  '/images/bono_2.webp',
  '/images/bono_3.webp',
  '/images/bono_4.webp',
  '/images/bono_5.webp',
  '/images/bono_6.webp',
  '/images/bono_8.webp',
  '/images/author.webp',
  '/images/testimonial_1.webp',
  '/images/testimonial_2.webp',
  '/images/testimonial_3.webp'
];

/**
 * Returns prioritized lists of active WebP application images
 */
export function getAllApplicationImages(): { priorityImages: string[]; secondaryImages: string[] } {
  const priorityImages: string[] = [
    '/images/hero_pack.webp',
    '/images/sample_1.webp',
    '/images/sample_2.webp',
    '/images/sample_3.webp',
    '/images/bono_1_custom.webp',
    '/images/bono_2_custom.webp',
    '/images/bono_3_custom.webp',
    '/images/bono_metodologia_barca_custom.webp'
  ];

  const secondaryImages: string[] = [
    '/images/sample_4.webp',
    '/images/sample_5.webp',
    '/images/bono_2.webp',
    '/images/bono_3.webp',
    '/images/bono_4.webp',
    '/images/bono_5.webp',
    '/images/bono_6.webp',
    '/images/bono_8.webp',
    '/images/author.webp',
    '/images/testimonial_1.webp',
    '/images/testimonial_2.webp',
    '/images/testimonial_3.webp'
  ];

  return {
    priorityImages,
    secondaryImages
  };
}

/**
 * Preload and hardware-decode an image into browser memory
 */
export function preloadImage(src: string): Promise<void> {
  if (!src || typeof window === 'undefined') return Promise.resolve();
  
  if (imageMemoryCache.has(src)) {
    return Promise.resolve();
  }

  return new Promise((resolve) => {
    try {
      const img = new Image();
      img.referrerPolicy = 'no-referrer';
      img.decoding = 'async';
      
      const onDone = () => {
        if ('decode' in img && typeof img.decode === 'function') {
          img.decode().then(() => resolve()).catch(() => resolve());
        } else {
          resolve();
        }
      };

      img.onload = onDone;
      img.onerror = () => resolve();
      img.src = src;
      imageMemoryCache.set(src, img);

      if (img.complete) {
        onDone();
      }
    } catch (e) {
      resolve();
    }
  });
}

/**
 * Initializes ultra-fast non-blocking background preloading
 */
export function initSpeedOptimizer(): void {
  if (typeof window === 'undefined') return;

  try {
    const { priorityImages, secondaryImages } = getAllApplicationImages();

    // 1. Immediately preload critical visible assets in parallel
    for (let i = 0; i < priorityImages.length; i++) {
      preloadImage(priorityImages[i]);
    }

    // 2. Preload remaining local webp assets immediately after
    const loadSecondary = () => {
      for (let i = 0; i < secondaryImages.length; i++) {
        preloadImage(secondaryImages[i]);
      }
    };

    if ('requestIdleCallback' in window) {
      (window as any).requestIdleCallback(loadSecondary, { timeout: 300 });
    } else {
      setTimeout(loadSecondary, 50);
    }
  } catch (err) {
    // Fail gracefully
  }
}
