/**
 * Back to Top Button
 * 
 * Non-WordPress component: Theme UI utility for progressive enhancement.
 * Helps users return to top of long pages (accessibility + UX).
 * 
 * In WordPress: Implemented as small theme script (assets/js/back-to-top.js)
 * @see /src/app/utils/icon-map.ts
 */

import { useState, useEffect } from 'react';
import { CaretUp } from '@phosphor-icons/react';

export function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const buttonClasses = [
    'back-to-top',
    isVisible && 'back-to-top--visible'
  ].filter(Boolean).join(' ');

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className={buttonClasses}
    >
      <CaretUp size={24} weight="bold" />
    </button>
  );
}
