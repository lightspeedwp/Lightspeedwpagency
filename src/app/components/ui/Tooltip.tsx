/**
 * Tooltip Component
 * 
 * Production-grade tooltip with smart positioning.
 * 
 * Features:
 * - Hover and focus triggers
 * - Multiple positions (top, right, bottom, left)
 * - Auto-positioning (flips when out of viewport)
 * - Arrow pointer
 * - Delay options
 * - Accessible (aria-describedby)
 * 
 * Design Token Compliance:
 * - Typography: var(--text-*) only
 * - Colors: var(--*) semantic roles
 * - Spacing: Tailwind classes only
 * - Fonts: Lexend (headings), Manrope (body)
 * 
 * @example
 * <Tooltip content="This is a tooltip">
 *   <button>Hover me</button>
 * </Tooltip>
 */

import { useState, useRef, useEffect, useId } from 'react';

export interface TooltipProps {
  /** Tooltip content */
  content: React.ReactNode;
  /** Children (trigger element) */
  children: React.ReactElement;
  /** Position */
  position?: 'top' | 'right' | 'bottom' | 'left';
  /** Show arrow */
  showArrow?: boolean;
  /** Delay before showing (ms) */
  delayShow?: number;
  /** Delay before hiding (ms) */
  delayHide?: number;
  /** Disabled */
  disabled?: boolean;
}

export function Tooltip({
  content,
  children,
  position = 'top',
  showArrow = true,
  delayShow = 200,
  delayHide = 0,
  disabled = false,
}: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [actualPosition, setActualPosition] = useState(position);
  const triggerRef = useRef<HTMLElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const showTimeoutRef = useRef<NodeJS.Timeout>();
  const hideTimeoutRef = useRef<NodeJS.Timeout>();
  const tooltipId = useId();

  // Clear timeouts on unmount
  useEffect(() => {
    return () => {
      if (showTimeoutRef.current) clearTimeout(showTimeoutRef.current);
      if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
    };
  }, []);

  // Calculate position
  useEffect(() => {
    if (!isVisible || !triggerRef.current || !tooltipRef.current) return;

    const trigger = triggerRef.current.getBoundingClientRect();
    const tooltip = tooltipRef.current.getBoundingClientRect();
    const viewport = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    let finalPosition = position;

    // Check if tooltip fits in desired position
    const fits = {
      top: trigger.top - tooltip.height - 8 >= 0,
      right: trigger.right + tooltip.width + 8 <= viewport.width,
      bottom: trigger.bottom + tooltip.height + 8 <= viewport.height,
      left: trigger.left - tooltip.width - 8 >= 0,
    };

    // Flip if doesn't fit
    if (!fits[position]) {
      if (position === 'top' && fits.bottom) finalPosition = 'bottom';
      else if (position === 'bottom' && fits.top) finalPosition = 'top';
      else if (position === 'left' && fits.right) finalPosition = 'right';
      else if (position === 'right' && fits.left) finalPosition = 'left';
    }

    setActualPosition(finalPosition);
  }, [isVisible, position]);

  const handleMouseEnter = () => {
    if (disabled) return;
    if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
    
    showTimeoutRef.current = setTimeout(() => {
      setIsVisible(true);
    }, delayShow);
  };

  const handleMouseLeave = () => {
    if (showTimeoutRef.current) clearTimeout(showTimeoutRef.current);
    
    hideTimeoutRef.current = setTimeout(() => {
      setIsVisible(false);
    }, delayHide);
  };

  const handleFocus = () => {
    if (disabled) return;
    setIsVisible(true);
  };

  const handleBlur = () => {
    setIsVisible(false);
  };

  // Get tooltip position styles
  const getTooltipPosition = () => {
    if (!triggerRef.current) return {};

    const trigger = triggerRef.current.getBoundingClientRect();
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

  // Clone child and add event handlers
  const trigger = children ? (
    <span
      ref={triggerRef as any}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleFocus}
      onBlur={handleBlur}
      aria-describedby={isVisible ? tooltipId : undefined}
      style={{ display: 'inline-block' }}
    >
      {children}
    </span>
  ) : null;

  return (
    <>
      {trigger}
      
      {isVisible && !disabled && (
        <div
          ref={tooltipRef}
          id={tooltipId}
          role="tooltip"
          className="fixed z-50 px-3 py-2"
          style={{
            ...getTooltipPosition(),
            fontFamily: 'Manrope, sans-serif',
            fontSize: 'var(--text-small)',
            color: 'var(--primary-foreground)',
            backgroundColor: 'var(--popover)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-lg)',
            boxShadow: 'var(--shadow-lg)',
            maxWidth: '300px',
            pointerEvents: 'none',
            whiteSpace: 'normal',
            wordWrap: 'break-word',
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
    </>
  );
}
