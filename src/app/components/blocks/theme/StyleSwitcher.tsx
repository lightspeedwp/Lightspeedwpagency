/**
 * Style Switcher Block Component
 * 
 * WordPress Block: theme/style-switcher
 * 
 * Allows users to switch between style variations (light/dark themes).
 * 
 * @see /src/styles/blocks/theme/style-switcher.css
 */

import { useEffect, useState } from 'react';
import '@/styles/blocks/theme/style-switcher.css';

type StyleVariation = 'light' | 'dark';

export interface StyleSwitcherProps {
  className?: string;
}

export function StyleSwitcher({ className = '' }: StyleSwitcherProps) {
  const [currentStyle, setCurrentStyle] = useState<StyleVariation>('light');
  const [mounted, setMounted] = useState(false);

  // Hydration fix: only show UI after mount
  useEffect(() => {
    setMounted(true);
    
    // Check localStorage for saved preference
    const savedStyle = localStorage.getItem('style-variation') as StyleVariation;
    if (savedStyle) {
      setCurrentStyle(savedStyle);
      applyStyleVariation(savedStyle);
    } else {
      // Check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const initialStyle = prefersDark ? 'dark' : 'light';
      setCurrentStyle(initialStyle);
      applyStyleVariation(initialStyle);
    }
  }, []);

  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = (e: MediaQueryListEvent) => {
      const savedStyle = localStorage.getItem('style-variation');
      if (!savedStyle) {
        const newStyle = e.matches ? 'dark' : 'light';
        setCurrentStyle(newStyle);
        applyStyleVariation(newStyle);
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const applyStyleVariation = (style: StyleVariation) => {
    const root = document.documentElement;
    
    if (style === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  };

  const switchStyle = (newStyle: StyleVariation) => {
    setCurrentStyle(newStyle);
    applyStyleVariation(newStyle);
    localStorage.setItem('style-variation', newStyle);
  };

  // Don't render until mounted (prevents hydration mismatch)
  if (!mounted) {
    return (
      <div className={`wp-block-style-switcher ${className}`}>
        <div style={{ width: 'var(--spacing-32)', height: 'var(--spacing-9)' }} />
      </div>
    );
  }

  return (
    <div 
      className={`wp-block-style-switcher ${className}`}
      role="group"
      aria-label="Style variation switcher"
    >
      {/* Light button */}
      <button
        onClick={() => switchStyle('light')}
        aria-label="Switch to light style"
        aria-pressed={currentStyle === 'light'}
        className={`wp-block-style-switcher__button ${currentStyle === 'light' ? 'wp-block-style-switcher__button--active' : ''}`}
      >
        {/* Sun icon */}
        <svg 
          viewBox="0 0 24 24" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          className="wp-block-style-switcher__icon"
        >
          <circle cx="12" cy="12" r="4"/>
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>
        </svg>
        Light
      </button>

      {/* Dark button */}
      <button
        onClick={() => switchStyle('dark')}
        aria-label="Switch to dark style"
        aria-pressed={currentStyle === 'dark'}
        className={`wp-block-style-switcher__button ${currentStyle === 'dark' ? 'wp-block-style-switcher__button--active' : ''}`}
      >
        {/* Moon icon */}
        <svg 
          viewBox="0 0 24 24" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          className="wp-block-style-switcher__icon"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
        </svg>
        Dark
      </button>
    </div>
  );
}