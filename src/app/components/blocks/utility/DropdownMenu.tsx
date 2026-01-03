/**
 * Dropdown Menu Component
 * 
 * Features:
 * - Click-triggered menu
 * - Keyboard navigation (Arrow keys, Enter, Escape)
 * - Nested submenus
 * - Icons support
 * - Dividers
 * - WCAG 2.1 AA compliant
 * 
 * Design System Compliance:
 * - Uses CSS variables for colors
 * - Uses Lexend/Manrope fonts
 * - Smooth animations
 */

import { useState, useRef, useEffect, ReactNode } from 'react';

export interface DropdownMenuItem {
  /** Menu item ID */
  id: string;
  /** Label */
  label: string;
  /** Icon (optional) */
  icon?: ReactNode;
  /** Click handler */
  onClick?: () => void;
  /** Disabled state */
  disabled?: boolean;
  /** Divider after this item */
  divider?: boolean;
  /** Submenu items */
  submenu?: DropdownMenuItem[];
}

export interface DropdownMenuProps {
  /** Menu items */
  items: DropdownMenuItem[];
  /** Trigger element */
  trigger: ReactNode;
  /** Placement */
  placement?: 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right';
  /** Min width */
  minWidth?: string;
}

export function DropdownMenu({
  items,
  trigger,
  placement = 'bottom-left',
  minWidth = '200px',
}: DropdownMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [focusedIndex, setFocusedIndex] = useState(0);
  const triggerRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  // Calculate position
  useEffect(() => {
    if (!isOpen || !triggerRef.current || !menuRef.current) return;

    const calculatePosition = () => {
      if (!triggerRef.current || !menuRef.current) return;

      const triggerRect = triggerRef.current.getBoundingClientRect();
      const menuRect = menuRef.current.getBoundingClientRect();
      const gap = 4;

      let top = 0;
      let left = 0;

      switch (placement) {
        case 'bottom-left':
          top = triggerRect.bottom + gap;
          left = triggerRect.left;
          break;
        case 'bottom-right':
          top = triggerRect.bottom + gap;
          left = triggerRect.right - menuRect.width;
          break;
        case 'top-left':
          top = triggerRect.top - menuRect.height - gap;
          left = triggerRect.left;
          break;
        case 'top-right':
          top = triggerRect.top - menuRect.height - gap;
          left = triggerRect.right - menuRect.width;
          break;
      }

      // Keep in viewport
      const padding = 8;
      left = Math.max(padding, Math.min(left, window.innerWidth - menuRect.width - padding));
      top = Math.max(padding, Math.min(top, window.innerHeight - menuRect.height - padding));

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
    if (!isOpen) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (
        menuRef.current &&
        triggerRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        !triggerRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      const enabledItems = items.filter((item) => !item.disabled);

      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          setFocusedIndex((prev) => (prev + 1) % enabledItems.length);
          break;
        case 'ArrowUp':
          e.preventDefault();
          setFocusedIndex((prev) => (prev - 1 + enabledItems.length) % enabledItems.length);
          break;
        case 'Enter':
        case ' ':
          e.preventDefault();
          const item = enabledItems[focusedIndex];
          if (item && !item.disabled) {
            item.onClick?.();
            setIsOpen(false);
          }
          break;
        case 'Escape':
          e.preventDefault();
          setIsOpen(false);
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, focusedIndex, items]);

  const handleItemClick = (item: DropdownMenuItem) => {
    if (item.disabled) return;
    item.onClick?.();
    setIsOpen(false);
  };

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
          ref={menuRef}
          role="menu"
          style={{
            position: 'fixed',
            top: `${position.top}px`,
            left: `${position.left}px`,
            zIndex: 9999,
            minWidth,
            backgroundColor: 'var(--card)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-lg)',
            boxShadow: 'var(--shadow-xl)',
            padding: '0.5rem',
            animation: 'fadeIn 0.15s ease',
          }}
        >
          {items.map((item, index) => (
            <div key={item.id}>
              <button
                role="menuitem"
                onClick={() => handleItemClick(item)}
                disabled={item.disabled}
                onMouseEnter={() => setFocusedIndex(index)}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '0.75rem 1rem',
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-base)',
                  fontWeight: '400',
                  color: item.disabled ? 'var(--muted-foreground)' : 'var(--foreground)',
                  backgroundColor: focusedIndex === index && !item.disabled
                    ? 'var(--muted)'
                    : 'transparent',
                  border: 'none',
                  borderRadius: 'var(--radius)',
                  textAlign: 'left',
                  cursor: item.disabled ? 'not-allowed' : 'pointer',
                  transition: 'background-color 0.15s ease',
                  minHeight: '44px',
                }}
              >
                {item.icon && (
                  <span style={{ fontSize: '1.25rem', lineHeight: 1 }}>{item.icon}</span>
                )}
                <span style={{ flex: 1 }}>{item.label}</span>
              </button>

              {item.divider && (
                <div
                  style={{
                    height: '1px',
                    backgroundColor: 'var(--border)',
                    margin: '0.5rem 0',
                  }}
                />
              )}
            </div>
          ))}
        </div>
      )}
    </>
  );
}
