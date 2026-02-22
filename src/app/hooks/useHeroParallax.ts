import { useEffect, useRef, MutableRefObject } from 'react';

/**
 * Hook for parallax hero effects on scroll.
 * 
 * @param speed - Parallax speed factor (0.0 to 1.0). 0.5 means half scroll speed.
 * @returns Ref to attach to the parallax element (img or div).
 */
export function useHeroParallax(speed: number = 0.5): MutableRefObject<HTMLImageElement | null> {
  const ref = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const scrollY = window.scrollY;
        // Only apply parallax if element is in viewport (basic optimization)
        // For hero, it's at top, so check if scrollY < window.innerHeight
        if (scrollY < window.innerHeight * 1.5) {
          const translateY = scrollY * speed;
          ref.current.style.transform = `translateY(${translateY}px)`;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial call
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [speed]);

  return ref;
}
