/**
 * Sticky Anchor Navigation Component
 *
 * Horizontal navigation bar that sticks to the top as user scrolls.
 * Uses IntersectionObserver to track active section.
 *
 * Features:
 * - Sticky positioning after hero scroll
 * - Active state based on scroll position
 * - Smooth scroll to anchor sections
 * - Responsive (horizontal scroll on mobile)
 *
 * STRICT DESIGN SYSTEM COMPLIANCE:
 * - Zero Tailwind classes
 * - All styling via CSS
 * - Fonts: var(--font-primary) only
 *
 * @see /src/styles/parts/sticky-anchor-nav.css
 */

import '../../../styles/parts/sticky-anchor-nav.css';
import React, { useState, useEffect, useRef } from 'react';

interface AnchorNavItem {
  label: string;
  href: string;
}

interface StickyAnchorNavProps {
  items: AnchorNavItem[];
  className?: string;
}

export function StickyAnchorNav({ items, className = '' }: StickyAnchorNavProps) {
  const [activeId, setActiveId] = useState<string>('');
  const [isSticky, setIsSticky] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Track which section is currently in view
    const sectionIds = items.map((item) => item.href.replace('#', ''));
    const observerOptions = {
      root: null,
      rootMargin: '-100px 0px -66%',
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    }, observerOptions);

    // Observe all sections
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    // Track sticky state
    const handleScroll = () => {
      if (navRef.current) {
        const rect = navRef.current.getBoundingClientRect();
        setIsSticky(rect.top <= 0);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [items]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      const navHeight = navRef.current?.offsetHeight || 0;
      const targetPosition = targetElement.offsetTop - navHeight - 20;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav
      ref={navRef}
      className={`sticky-anchor-nav ${isSticky ? 'sticky-anchor-nav--stuck' : ''} ${className}`}
      aria-label="Section navigation"
    >
      <div className="sticky-anchor-nav__inner">
        <div className="sticky-anchor-nav__scroll-container">
          {items.map((item) => {
            const itemId = item.href.replace('#', '');
            const isActive = activeId === itemId;

            return (
              <a
                key={item.href}
                href={item.href}
                className={`sticky-anchor-nav__link ${isActive ? 'sticky-anchor-nav__link--active' : ''}`}
                onClick={(e) => handleClick(e, item.href)}
                aria-current={isActive ? 'location' : undefined}
              >
                {item.label}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
