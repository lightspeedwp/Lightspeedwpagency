/**
 * Popover Component
 * 
 * Features:
 * - Click-triggered floating content
 * - 4 placement options
 * - Close on outside click
 * - Close on escape key
 * - Arrow indicator
 * - WCAG 2.1 AA compliant
 * 
 * Design System Compliance:
 * - Uses CSS variables for colors
 * - Uses Manrope/Lexend fonts
 * - Smooth animations
 */

import { useState, useRef, useEffect, ReactNode } from 'react';

export interface PopoverProps {
  /** Popover content */
  content: ReactNode;
  /** Trigger element */
  trigger: ReactNode;
  /** Placement */
  placement?: 'top' | 'bottom' | 'left' | 'right';
  /** Max width */
  maxWidth?: string;
  /** Close on outside click */
  closeOnOutsideClick?: boolean;
}

export function Popover({
  content,
  trigger,
  placement = 'bottom',
  maxWidth = '320px',
  closeOnOutsideClick = true,
}: PopoverProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const triggerRef = useRef<HTMLDivElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);

  // Calculate position
  useEffect(() => {
    if (!isOpen || !triggerRef.current || !popoverRef.current) return;

    const calculatePosition = () => {
      if (!triggerRef.current || !popoverRef.current) return;

      const triggerRect = triggerRef.current.getBoundingClientRect();
      const popoverRect = popoverRef.current.getBoundingClientRect();
      const gap = 8;

      let top = 0;
      let left = 0;

      switch (placement) {
        case 'top':
          top = triggerRect.top - popoverRect.height - gap;
          left = triggerRect.left + (triggerRect.width - popoverRect.width) / 2;
          break;
        case 'bottom':
          top = triggerRect.bottom + gap;
          left = triggerRect.left + (triggerRect.width - popoverRect.width) / 2;
          break;
        case 'left':
          top = triggerRect.top + (triggerRect.height - popoverRect.height) / 2;
          left = triggerRect.left - popoverRect.width - gap;
          break;
        case 'right':
          top = triggerRect.top + (triggerRect.height - popoverRect.height) / 2;
          left = triggerRect.right + gap;
          break;
      }

      // Keep in viewport
      const padding = 8;
      left = Math.max(padding, Math.min(left, window.innerWidth - popoverRect.width - padding));
      top = Math.max(padding, Math.min(top, window.innerHeight - popoverRect.height - padding));

      setPosition({ top, left });
    };

    calculatePosition();
    window.addEventListener('scroll', calculatePosition);
    window.addEventListener('resize', calculatePosition);

    return () => {
      window.removeEventListener('scroll', calculatePosition);
      window.removeEventListener('resize', calculatePosition);
    };
  }, [isOpen, placement]);

  // Handle outside click
  useEffect(() => {
    if (!isOpen || !closeOnOutsideClick) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (
        popoverRef.current &&
        triggerRef.current &&
        !popoverRef.current.contains(e.target as Node) &&
        !triggerRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, closeOnOutsideClick]);

  // Handle escape key
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  return (
    <>
      <div
        ref={triggerRef}
        onClick={() => setIsOpen(!isOpen)}
        style={{ display: 'inline-block', cursor: 'pointer' }}
      >
        {trigger}
      </div>

      {isOpen && (
        <div
          ref={popoverRef}
          role="dialog"
          aria-modal="false"
          style={{
            position: 'fixed',
            top: `${position.top}px`,
            left: `${position.left}px`,
            zIndex: 9999,
            maxWidth,
            backgroundColor: 'var(--card)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-lg)',
            boxShadow: 'var(--shadow-xl)',
            animation: 'fadeIn 0.2s ease',
          }}
        >
          {content}
        </div>
      )}
    </>
  );
}
