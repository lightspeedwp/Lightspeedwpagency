/**
 * Scroll Down Arrow Component
 * 
 * Animated arrow indicating content below the fold.
 * 100% CSS variables.
 * 
 * @see /src/styles/components/scroll-down-arrow.css
 */

import { ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';
import '@/styles/components/scroll-down-arrow.css';

interface ScrollDownArrowProps {
  targetId?: string;
  className?: string;
}

export function ScrollDownArrow({ targetId, className = '' }: ScrollDownArrowProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Hide when scrolled down more than 100px
      if (window.scrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (targetId) {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Default: scroll down one viewport height
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
      });
    }
  };

  if (!isVisible) return null;

  return (
    <button
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
