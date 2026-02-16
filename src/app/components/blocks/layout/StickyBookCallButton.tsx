/**
 * Sticky Book Call Button
 * 
 * Non-WordPress component: UI utility for conversion optimization.
 * 
 * Floating CTA button that appears after user scrolls past hero section.
 * Mobile-optimized with WCAG AAA touch targets (48×48px).
 * 
 * Features:
 * - Appears after 400px scroll
 * - Sticky positioning (bottom-right on desktop, bottom-center on mobile)
 * - Smooth fade-in animation
 * - Respects reduced motion
 * - WCAG AAA compliant (48×48px touch target)
 * - Keyboard accessible
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone } from 'lucide-react';
import '@/styles/components/sticky-book-call.css';

export function StickyBookCallButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button after scrolling 400px
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    
    // Check initial scroll position
    toggleVisibility();

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Check if user prefers reduced motion
  const prefersReducedMotion = 
    typeof window !== 'undefined' && 
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="desktop-sticky-button"
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="sticky-book-call sticky-book-call--desktop"
        >
          <a
            href="/contact"
            className="sticky-book-call__link sticky-book-call__link--desktop"
            aria-label="Book a free consultation call"
          >
            <Phone size={20} />
            <span>Book Free Call</span>
          </a>
        </motion.div>
      )}

      {/* Mobile version (bottom-center, full-width on small screens) */}
      {isVisible && (
        <motion.div
          key="mobile-sticky-button"
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="sticky-book-call--mobile"
        >
          <a
            href="/contact"
            className="sticky-book-call__link sticky-book-call__link--mobile"
            aria-label="Book a free consultation call"
          >
            <Phone size={20} />
            <span>Book Free Call</span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}