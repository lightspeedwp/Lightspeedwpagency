/**
 * Back to Top Button
 * 
 * Non-WordPress component: Theme UI utility for progressive enhancement.
 * Helps users return to top of long pages (accessibility + UX).
 * 
 * In WordPress: Implemented as small theme script (assets/js/back-to-top.js)
 */

import { useState, useEffect } from 'react';

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

  if (!isVisible) {
    return null;
  }

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      style={{
        position: 'fixed',
        bottom: 'var(--wp--preset--spacing--30)',
        left: 'var(--wp--preset--spacing--30)',
        zIndex: 1000,
        width: '48px',
        height: '48px',
        borderRadius: '50%',
        backgroundColor: 'var(--wp--preset--color--primary)',
        color: 'var(--wp--preset--color--primary-foreground)',
        border: 'none',
        cursor: 'pointer',
        boxShadow: 'var(--shadow-md)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 'var(--wp--preset--font-size--400)',
        transition: 'opacity 0.3s ease',
      }}
    >
      ↑
    </button>
  );
}
