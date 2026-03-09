import { useEffect, useRef, MutableRefObject } from 'react';

/**
 * Hook for parallax hero effects on scroll.
 * 
 * Creates a smooth parallax effect where the background image scrolls
 * at a different speed than the content, creating depth perception.
 * 
 * @param speed - Parallax speed factor (0.0 to 1.0). 0.5 means half scroll speed.
 *                Lower values = slower background movement (more dramatic effect)
 * @returns Ref to attach to the parallax element (img or div).
 */
export function useHeroParallax(speed: number = 0.5): MutableRefObject<HTMLImageElement | null> {
  const ref = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      // Don't apply parallax if user prefers reduced motion
      return;
    }

    const handleScroll = () => {
      if (ref.current) {
        const scrollY = window.scrollY;
        const heroHeight = ref.current.parentElement?.offsetHeight || window.innerHeight;
        
        // Only apply parallax while hero is in viewport
        // Add extra buffer (2x hero height) for smoother transition
        if (scrollY < heroHeight * 2) {
          // Calculate parallax offset
          // Negative value moves background up as you scroll down
          // This creates the "slower movement" parallax effect
          const translateY = -(scrollY * speed);
          
          // Use translate3d for better performance (GPU acceleration)
          ref.current.style.transform = `translate3d(0, ${translateY}px, 0)`;
        }
      }
    };

    // Use requestAnimationFrame for smoother animation
    let ticking = false;
    const optimizedScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', optimizedScroll, { passive: true });
    
    // Initial call
    handleScroll();

    return () => {
      window.removeEventListener('scroll', optimizedScroll);
    };
  }, [speed]);

  return ref;
}
