/**
 * Sticky Timeline Navigation Component
 *
 * Horizontal 6-stage progress bar with IntersectionObserver active state.
 * Adapted from JourneyProgressBar for lifecycle mega page navigation.
 *
 * Features:
 * - Sticky positioning after hero scroll
 * - Active state based on scroll position
 * - Smooth scroll to stage sections
 * - Responsive (horizontal scroll on mobile)
 * - Stage accent colors
 *
 * STRICT DESIGN SYSTEM COMPLIANCE:
 * - Zero Tailwind classes
 * - All styling via CSS
 * - Fonts: var(--font-primary) only
 *
 * @see /src/styles/parts/sticky-timeline-nav.css
 */

import '../../../styles/parts/sticky-timeline-nav.css';
import React, { useState, useEffect, useRef } from 'react';

interface TimelineStage {
  slug: string;
  step: string;
  name: string;
  accent: string;
  icon: React.ComponentType<any>;
}

interface StickyTimelineNavProps {
  stages: TimelineStage[];
  className?: string;
}

export function StickyTimelineNav({ stages, className = '' }: StickyTimelineNavProps) {
  const [activeSlug, setActiveSlug] = useState<string>('');
  const [isSticky, setIsSticky] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Track which stage section is currently in view
    const stageIds = stages.map((stage) => `stage-${stage.slug}`);
    const observerOptions = {
      root: null,
      rootMargin: '-100px 0px -66%',
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const slug = entry.target.id.replace('stage-', '');
          setActiveSlug(slug);
        }
      });
    }, observerOptions);

    // Observe all stage sections
    stageIds.forEach((id) => {
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
  }, [stages]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>, slug: string) => {
    e.preventDefault();
    const targetId = `stage-${slug}`;
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
      className={`sticky-timeline-nav ${isSticky ? 'sticky-timeline-nav--stuck' : ''} ${className}`}
      aria-label="Lifecycle stage navigation"
    >
      <div className="sticky-timeline-nav__inner">
        <div className="sticky-timeline-nav__scroll-container">
          {stages.map((stage, index) => {
            const isActive = activeSlug === stage.slug;
            const Icon = stage.icon;

            return (
              <button
                key={stage.slug}
                className={`sticky-timeline-nav__stage ${isActive ? 'sticky-timeline-nav__stage--active' : ''}`}
                onClick={(e) => handleClick(e, stage.slug)}
                aria-current={isActive ? 'location' : undefined}
                style={{ '--stage-accent': stage.accent } as React.CSSProperties}
              >
                <div className="sticky-timeline-nav__stage-icon">
                  <Icon size={20} weight="duotone" aria-hidden="true" />
                </div>
                <div className="sticky-timeline-nav__stage-label">
                  <span className="sticky-timeline-nav__stage-step">{stage.step}</span>
                  <span className="sticky-timeline-nav__stage-name">{stage.name}</span>
                </div>
                {index < stages.length - 1 && (
                  <div className="sticky-timeline-nav__connector" aria-hidden="true" />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
