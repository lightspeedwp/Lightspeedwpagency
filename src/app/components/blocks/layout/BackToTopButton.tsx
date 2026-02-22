/**
 * Back to Top Button
 * 
 * Non-WordPress component: Theme UI utility for progressive enhancement.
 * Helps users return to top of long pages (accessibility + UX).
 * 
 * In WordPress: Implemented as small theme script (assets/js/back-to-top.js)
 */

import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react'; // Better than text arrow

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
      <ChevronUp size={24} />
    </button>
  );
}
