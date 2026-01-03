/**
 * Popover Component
 * 
 * Production-grade click-triggered floating content.
 * 
 * Features:
 * - Click to toggle
 * - Close on outside click
 * - Close on escape
 * - Multiple positions
 * - Auto-positioning (flips when out of viewport)
 * - Arrow pointer
 * - Accessible (aria-expanded)
 * 
 * Design Token Compliance:
 * - Typography: var(--text-*) only
 * - Colors: var(--*) semantic roles
 * - Spacing: Tailwind classes only
 * - Fonts: Lexend (headings), Manrope (body)
 * 
 * @example
 * <Popover
 *   trigger={<button>Click me</button>}
 *   content={<div>Popover content</div>}
 * />
 */

import { useState, useRef, useEffect, useId } from 'react';

export interface PopoverProps {
  /** Trigger element */
  trigger: React.ReactElement;
  /** Popover content */
  content: React.ReactNode;
  /** Position */
  position?: 'top' | 'right' | 'bottom' | 'left';
  /** Show arrow */
  showArrow?: boolean;
  /** Close on outside click */
  closeOnOutsideClick?: boolean;
  /** Close on escape */
  closeOnEscape?: boolean;
  /** Controlled open state */
  isOpen?: boolean;
  /** Open change handler */
  onOpenChange?: (open: boolean) => void;
}

export function Popover({
  trigger,
  content,
  position = 'bottom',
  showArrow = true,
  closeOnOutsideClick = true,
  closeOnEscape = true,
  isOpen: controlledIsOpen,
  onOpenChange,
}: PopoverProps) {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const [actualPosition, setActualPosition] = useState(position);
  const triggerRef = useRef<HTMLElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);
  const popoverId = useId();

  const isOpen = controlledIsOpen !== undefined ? controlledIsOpen : internalIsOpen;

  const setIsOpen = (open: boolean) => {
    if (controlledIsOpen === undefined) {
      setInternalIsOpen(open);
    }
    onOpenChange?.(open);
  };

  // Close on outside click
  useEffect(() => {
    if (!isOpen || !closeOnOutsideClick) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (
        triggerRef.current?.contains(e.target as Node) ||
        popoverRef.current?.contains(e.target as Node)
      ) {
        return;
      }
      setIsOpen(false);
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, closeOnOutsideClick]);

  // Close on escape
  useEffect(() => {
    if (!isOpen || !closeOnEscape) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, closeOnEscape]);

  // Calculate position
  useEffect(() => {
    if (!isOpen || !triggerRef.current || !popoverRef.current) return;

    const trigger = triggerRef.current.getBoundingClientRect();
    const popover = popoverRef.current.getBoundingClientRect();
    const viewport = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    let finalPosition = position;

    // Check if popover fits in desired position
    const fits = {
      top: trigger.top - popover.height - 8 >= 0,
      right: trigger.right + popover.width + 8 <= viewport.width,
      bottom: trigger.bottom + popover.height + 8 <= viewport.height,
      left: trigger.left - popover.width - 8 >= 0,
    };

    // Flip if doesn't fit
    if (!fits[position]) {
      if (position === 'top' && fits.bottom) finalPosition = 'bottom';
      else if (position === 'bottom' && fits.top) finalPosition = 'top';
      else if (position === 'left' && fits.right) finalPosition = 'right';
      else if (position === 'right' && fits.left) finalPosition = 'left';
    }

    setActualPosition(finalPosition);
  }, [isOpen, position]);

  const handleTriggerClick = () => {
    setIsOpen(!isOpen);
  };

  // Get popover position styles
  const getPopoverPosition = () => {
    if (!triggerRef.current) return {};

    const offset = 8;

    const positions = {
      top: {
        bottom: `calc(100% + ${offset}px)`,
        left: '50%',
        transform: 'translateX(-50%)',
      },
      bottom: {
        top: `calc(100% + ${offset}px)`,
        left: '50%',
        transform: 'translateX(-50%)',
      },
      left: {
        right: `calc(100% + ${offset}px)`,
        top: '50%',
        transform: 'translateY(-50%)',
      },
      right: {
        left: `calc(100% + ${offset}px)`,
        top: '50%',
        transform: 'translateY(-50%)',
      },
    };

    return positions[actualPosition];
  };

  // Get arrow position styles
  const getArrowPosition = () => {
    const positions = {
      top: {
        bottom: '-4px',
        left: '50%',
        transform: 'translateX(-50%) rotate(45deg)',
      },
      bottom: {
        top: '-4px',
        left: '50%',
        transform: 'translateX(-50%) rotate(45deg)',
      },
      left: {
        right: '-4px',
        top: '50%',
        transform: 'translateY(-50%) rotate(45deg)',
      },
      right: {
        left: '-4px',
        top: '50%',
        transform: 'translateY(-50%) rotate(45deg)',
      },
    };

    return positions[actualPosition];
  };

  return (
    <div style={{ display: 'inline-block', position: 'relative' }}>
      {/* Trigger */}
      <span
        ref={triggerRef as any}
        onClick={handleTriggerClick}
        aria-expanded={isOpen}
        aria-controls={popoverId}
        style={{ display: 'inline-block', cursor: 'pointer' }}
      >
        {trigger}
      </span>

      {/* Popover */}
      {isOpen && (
        <div
          ref={popoverRef}
          id={popoverId}
          role="dialog"
          className="absolute z-50 p-4"
          style={{
            ...getPopoverPosition(),
            backgroundColor: 'var(--popover)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-xl)',
            boxShadow: 'var(--shadow-xl)',
            minWidth: '200px',
            maxWidth: '400px',
          }}
        >
          {content}

          {/* Arrow */}
          {showArrow && (
            <div
              className="absolute w-2 h-2"
              style={{
                ...getArrowPosition(),
                backgroundColor: 'var(--popover)',
                border: '1px solid var(--border)',
                borderTop: actualPosition === 'bottom' ? '1px solid var(--border)' : 'none',
                borderRight: actualPosition === 'left' ? '1px solid var(--border)' : 'none',
                borderBottom: actualPosition === 'top' ? '1px solid var(--border)' : 'none',
                borderLeft: actualPosition === 'right' ? '1px solid var(--border)' : 'none',
              }}
            />
          )}
        </div>
      )}
    </div>
  );
}
