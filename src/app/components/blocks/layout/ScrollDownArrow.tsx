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
      className="scroll-down-arrow"
      aria-label="Scroll to content"
    >
      <ChevronDown className="scroll-down-arrow__icon" strokeWidth={2} />
    </button>
  );
}
