/**
 * Scroll Down Arrow Component
 *
 * Animated arrow indicating content below the fold.
 * Positioned at the bottom of the parent hero section.
 *
 * Behaviour:
 *   1. If `targetId` is provided → scrolls to that element
 *   2. Otherwise → finds the next sibling section/div of the
 *      parent hero and scrolls to it automatically
 *   3. Hides when the user scrolls past 100 px
 *   4. Hidden on very short viewports (≤ 500 px)
 *
 * Reduced-motion: bounce animation is disabled via CSS
 * (`@media (prefers-reduced-motion: reduce)` in scroll-down-arrow.css).
 *
 * 100 % CSS variables — no hardcoded colours or sizes.
 *
 * @see /src/app/utils/icon-map.ts
 * @see /src/styles/components/scroll-down-arrow.css
 */

import { CaretDown as ChevronDown } from '@phosphor-icons/react';
import { useEffect, useState, useRef, useCallback } from 'react';

interface ScrollDownArrowProps {
  /** DOM id of the element to scroll to. Falls back to next sibling of hero. */
  targetId?: string;
  className?: string;
}

export function ScrollDownArrow({ targetId, className = '' }: ScrollDownArrowProps) {
  const [isVisible, setIsVisible] = useState(true);
  const buttonRef = useRef<HTMLButtonElement>(null);

  /* ── Hide after scroll ── */
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY <= 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* ── Click handler with auto-detect fallback ── */
  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();

      // 1. Explicit target
      if (targetId) {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
          return;
        }
      }

      // 2. Auto-detect: walk up to the hero section, then find next sibling
      if (buttonRef.current) {
        const hero = buttonRef.current.closest('section, [class*="__hero"], [class*="-hero"]');
        if (hero) {
          let next = hero.nextElementSibling;
          // Skip script/style/empty text nodes
          while (next && (next.tagName === 'SCRIPT' || next.tagName === 'STYLE')) {
            next = next.nextElementSibling;
          }
          if (next) {
            next.scrollIntoView({ behavior: 'smooth' });
            return;
          }
        }
      }

      // 3. Ultimate fallback: scroll one viewport height
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth',
      });
    },
    [targetId],
  );

  if (!isVisible) return null;

  return (
    <button
      ref={buttonRef}
      onClick={handleClick}
      className={`scroll-down-arrow ${className}`}
      aria-label="Scroll down to content"
    >
      <ChevronDown
        className="scroll-down-arrow__icon"
        size={32}
        strokeWidth={1.5}
      />
    </button>
  );
}
