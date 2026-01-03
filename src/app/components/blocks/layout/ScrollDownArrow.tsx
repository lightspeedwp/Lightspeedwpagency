/**
 * Scroll Down Arrow Component
 * 
 * Non-WordPress UI utility for hero sections.
 * Provides visual affordance for scrolling.
 */

import { ChevronDown } from 'lucide-react';

interface ScrollDownArrowProps {
  targetId: string;
}

export function ScrollDownArrow({ targetId }: ScrollDownArrowProps) {
  const handleClick = () => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button
      onClick={handleClick}
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce p-2"
      aria-label="Scroll to content"
      style={{
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        color: 'var(--primary-foreground)',
        opacity: 0.8,
        transition: 'opacity 0.3s ease'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.opacity = '1';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.opacity = '0.8';
      }}
    >
      <ChevronDown size={32} strokeWidth={2} />
    </button>
  );
}
