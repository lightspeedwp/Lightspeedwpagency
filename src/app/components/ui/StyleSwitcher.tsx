/**
 * StyleSwitcher Component
 * 
 * WordPress concept: Style Variation Switcher
 * 
 * Allows users to switch between style variations (light/dark themes).
 * In WordPress, this maps to theme.json style variations that change
 * colors, typography, and spacing globally.
 * 
 * WordPress equivalent: styles/*.json files
 */

import { useEffect, useState } from 'react';

type StyleVariation = 'light' | 'dark';

interface StyleSwitcherProps {
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
      <div 
        className={`${className} inline-flex items-center gap-2 p-1`}
        style={{
          borderRadius: 'var(--radius)',
          backgroundColor: 'var(--muted)',
          border: '1px solid var(--border)'
        }}
      >
        <div style={{ width: '64px', height: '32px' }} />
      </div>
    );
  }

  return (
    <div 
      className={`${className} inline-flex items-center gap-1 p-1`}
      role="group"
      aria-label="Style variation switcher"
      style={{
        borderRadius: 'var(--radius)',
        backgroundColor: 'var(--muted)',
        border: '1px solid var(--border)'
      }}
    >
      {/* Light button */}
      <button
        onClick={() => switchStyle('light')}
        aria-label="Switch to light style"
        aria-pressed={currentStyle === 'light'}
        className="px-3 py-1.5"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 'var(--radius-sm)',
          backgroundColor: currentStyle === 'light' ? 'var(--background)' : 'transparent',
          color: currentStyle === 'light' ? 'var(--foreground)' : 'var(--muted-foreground)',
          border: 'none',
          cursor: 'pointer',
          transition: 'all 0.2s ease',
          fontFamily: 'var(--font-primary)',
          fontSize: 'var(--text-base)',
          fontWeight: currentStyle === 'light' ? 'var(--font-weight-medium)' : 'var(--font-weight-regular)',
          boxShadow: currentStyle === 'light' ? 'var(--elevation-sm)' : 'none',
          outline: 'none'
        }}
        onFocus={(e) => {
          e.currentTarget.style.outline = '2px solid var(--ring)';
          e.currentTarget.style.outlineOffset = '2px';
        }}
        onBlur={(e) => {
          e.currentTarget.style.outline = 'none';
        }}
      >
        {/* Sun icon */}
        <svg 
          width="16" 
          height="16" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          style={{ marginRight: '6px' }}
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
        className="px-3 py-1.5"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 'var(--radius-sm)',
          backgroundColor: currentStyle === 'dark' ? 'var(--background)' : 'transparent',
          color: currentStyle === 'dark' ? 'var(--foreground)' : 'var(--muted-foreground)',
          border: 'none',
          cursor: 'pointer',
          transition: 'all 0.2s ease',
          fontFamily: 'var(--font-primary)',
          fontSize: 'var(--text-base)',
          fontWeight: currentStyle === 'dark' ? 'var(--font-weight-medium)' : 'var(--font-weight-regular)',
          boxShadow: currentStyle === 'dark' ? 'var(--elevation-sm)' : 'none',
          outline: 'none'
        }}
        onFocus={(e) => {
          e.currentTarget.style.outline = '2px solid var(--ring)';
          e.currentTarget.style.outlineOffset = '2px';
        }}
        onBlur={(e) => {
          e.currentTarget.style.outline = 'none';
        }}
      >
        {/* Moon icon */}
        <svg 
          width="16" 
          height="16" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          style={{ marginRight: '6px' }}
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
        </svg>
        Dark
      </button>
    </div>
  );
}