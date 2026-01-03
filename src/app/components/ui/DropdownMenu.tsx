/**
 * Dropdown Menu Component
 * 
 * Production-grade contextual action menu.
 * 
 * Features:
 * - Click to toggle
 * - Close on outside click
 * - Close on selection
 * - Keyboard navigation (arrow keys, enter, escape)
 * - Multiple positions
 * - Menu items with icons
 * - Dividers
 * - Disabled items
 * - Destructive items
 * - Accessible (ARIA menu)
 * 
 * Design Token Compliance:
 * - Typography: var(--text-*) only
 * - Colors: var(--*) semantic roles
 * - Spacing: Tailwind classes only
 * - Fonts: Lexend (headings), Manrope (body)
 * 
 * @example
 * <DropdownMenu
 *   trigger={<button>Menu</button>}
 *   items={[
 *     { label: 'Edit', icon: Edit, onClick: handleEdit },
 *     { label: 'Delete', icon: Trash, onClick: handleDelete, destructive: true },
 *   ]}
 * />
 */

import { useState, useRef, useEffect } from 'react';
import { Check, LucideIcon } from 'lucide-react';

export interface DropdownMenuItem {
  /** Item label */
  label: string;
  /** Icon */
  icon?: LucideIcon;
  /** Click handler */
  onClick?: () => void;
  /** Disabled */
  disabled?: boolean;
  /** Destructive (red) */
  destructive?: boolean;
  /** Selected (show checkmark) */
  selected?: boolean;
  /** Divider after this item */
  divider?: boolean;
}

export interface DropdownMenuProps {
  /** Trigger element */
  trigger: React.ReactElement;
  /** Menu items */
  items: DropdownMenuItem[];
  /** Position */
  position?: 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right';
  /** Close on select */
  closeOnSelect?: boolean;
  /** Min width */
  minWidth?: string;
}

export function DropdownMenu({
  trigger,
  items,
  position = 'bottom-right',
  closeOnSelect = true,
  minWidth = '200px',
}: DropdownMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState<number>(-1);
  const triggerRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (
        triggerRef.current?.contains(e.target as Node) ||
        menuRef.current?.contains(e.target as Node)
      ) {
        return;
      }
      setIsOpen(false);
      setFocusedIndex(-1);
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      const enabledItems = items.filter((item) => !item.disabled);
      const currentEnabledIndex = enabledItems.findIndex(
        (item) => items.indexOf(item) === focusedIndex
      );

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        const nextIndex = currentEnabledIndex < enabledItems.length - 1
          ? items.indexOf(enabledItems[currentEnabledIndex + 1])
          : items.indexOf(enabledItems[0]);
        setFocusedIndex(nextIndex);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        const prevIndex = currentEnabledIndex > 0
          ? items.indexOf(enabledItems[currentEnabledIndex - 1])
          : items.indexOf(enabledItems[enabledItems.length - 1]);
        setFocusedIndex(prevIndex);
      } else if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        if (focusedIndex >= 0) {
          handleItemClick(items[focusedIndex]);
        }
      } else if (e.key === 'Escape') {
        e.preventDefault();
        setIsOpen(false);
        setFocusedIndex(-1);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, focusedIndex, items]);

  const handleTriggerClick = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      // Focus first enabled item when opening
      const firstEnabled = items.findIndex((item) => !item.disabled);
      setFocusedIndex(firstEnabled);
    }
  };

  const handleItemClick = (item: DropdownMenuItem) => {
    if (item.disabled) return;

    item.onClick?.();

    if (closeOnSelect) {
      setIsOpen(false);
      setFocusedIndex(-1);
    }
  };

  // Get menu position styles
  const getMenuPosition = () => {
    const positions = {
      'bottom-left': {
        top: 'calc(100% + 4px)',
        left: '0',
      },
      'bottom-right': {
        top: 'calc(100% + 4px)',
        right: '0',
      },
      'top-left': {
        bottom: 'calc(100% + 4px)',
        left: '0',
      },
      'top-right': {
        bottom: 'calc(100% + 4px)',
        right: '0',
      },
    };

    return positions[position];
  };

  return (
    <div style={{ display: 'inline-block', position: 'relative' }}>
      {/* Trigger */}
      <span
        ref={triggerRef as any}
        onClick={handleTriggerClick}
        aria-haspopup="menu"
        aria-expanded={isOpen}
        style={{ display: 'inline-block', cursor: 'pointer' }}
      >
        {trigger}
      </span>

      {/* Menu */}
      {isOpen && (
        <div
          ref={menuRef}
          role="menu"
          className="absolute z-50 py-2"
          style={{
            ...getMenuPosition(),
            minWidth,
            backgroundColor: 'var(--popover)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-xl)',
            boxShadow: 'var(--shadow-xl)',
          }}
        >
          {items.map((item, index) => (
            <div key={index}>
              {/* Menu Item */}
              <button
                onClick={() => handleItemClick(item)}
                onMouseEnter={() => !item.disabled && setFocusedIndex(index)}
                disabled={item.disabled}
                role="menuitem"
                className="w-full px-3 py-2 flex items-center gap-3"
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-base)',
                  color: item.destructive
                    ? 'var(--destructive)'
                    : item.disabled
                    ? 'var(--muted-foreground)'
                    : 'var(--foreground)',
                  backgroundColor:
                    focusedIndex === index && !item.disabled
                      ? 'var(--accent)'
                      : 'transparent',
                  border: 'none',
                  textAlign: 'left',
                  cursor: item.disabled ? 'not-allowed' : 'pointer',
                  opacity: item.disabled ? 0.5 : 1,
                  transition: 'background-color 0.15s ease',
                }}
              >
                {/* Icon or Checkmark */}
                <div
                  style={{
                    width: '20px',
                    height: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  {item.selected ? (
                    <Check size={16} />
                  ) : item.icon ? (
                    <item.icon size={16} />
                  ) : null}
                </div>

                {/* Label */}
                <span className="flex-1">{item.label}</span>
              </button>

              {/* Divider */}
              {item.divider && (
                <div
                  className="my-1 mx-2"
                  style={{
                    height: '1px',
                    backgroundColor: 'var(--border)',
                  }}
                />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/**
 * Dropdown Menu with Groups
 * 
 * Organize menu items into labeled groups.
 */
export interface DropdownMenuGroup {
  /** Group label */
  label?: string;
  /** Group items */
  items: DropdownMenuItem[];
}

export interface DropdownMenuWithGroupsProps {
  /** Trigger element */
  trigger: React.ReactElement;
  /** Menu groups */
  groups: DropdownMenuGroup[];
  /** Position */
  position?: 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right';
  /** Close on select */
  closeOnSelect?: boolean;
  /** Min width */
  minWidth?: string;
}

export function DropdownMenuWithGroups({
  trigger,
  groups,
  position = 'bottom-right',
  closeOnSelect = true,
  minWidth = '200px',
}: DropdownMenuWithGroupsProps) {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (
        triggerRef.current?.contains(e.target as Node) ||
        menuRef.current?.contains(e.target as Node)
      ) {
        return;
      }
      setIsOpen(false);
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const handleItemClick = (item: DropdownMenuItem) => {
    if (item.disabled) return;

    item.onClick?.();

    if (closeOnSelect) {
      setIsOpen(false);
    }
  };

  // Get menu position styles
  const getMenuPosition = () => {
    const positions = {
      'bottom-left': { top: 'calc(100% + 4px)', left: '0' },
      'bottom-right': { top: 'calc(100% + 4px)', right: '0' },
      'top-left': { bottom: 'calc(100% + 4px)', left: '0' },
      'top-right': { bottom: 'calc(100% + 4px)', right: '0' },
    };

    return positions[position];
  };

  return (
    <div style={{ display: 'inline-block', position: 'relative' }}>
      {/* Trigger */}
      <span
        ref={triggerRef as any}
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="menu"
        aria-expanded={isOpen}
        style={{ display: 'inline-block', cursor: 'pointer' }}
      >
        {trigger}
      </span>

      {/* Menu */}
      {isOpen && (
        <div
          ref={menuRef}
          role="menu"
          className="absolute z-50 py-2"
          style={{
            ...getMenuPosition(),
            minWidth,
            backgroundColor: 'var(--popover)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-xl)',
            boxShadow: 'var(--shadow-xl)',
          }}
        >
          {groups.map((group, groupIndex) => (
            <div key={groupIndex}>
              {/* Group Label */}
              {group.label && (
                <div
                  className="px-3 py-2"
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-small)',
                    fontWeight: 'var(--font-weight-semibold)',
                    color: 'var(--muted-foreground)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                  }}
                >
                  {group.label}
                </div>
              )}

              {/* Group Items */}
              {group.items.map((item, itemIndex) => (
                <button
                  key={itemIndex}
                  onClick={() => handleItemClick(item)}
                  disabled={item.disabled}
                  role="menuitem"
                  className="w-full px-3 py-2 flex items-center gap-3"
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-base)',
                    color: item.destructive
                      ? 'var(--destructive)'
                      : item.disabled
                      ? 'var(--muted-foreground)'
                      : 'var(--foreground)',
                    backgroundColor: 'transparent',
                    border: 'none',
                    textAlign: 'left',
                    cursor: item.disabled ? 'not-allowed' : 'pointer',
                    opacity: item.disabled ? 0.5 : 1,
                    transition: 'background-color 0.15s ease',
                  }}
                  onMouseEnter={(e) => {
                    if (!item.disabled) {
                      e.currentTarget.style.backgroundColor = 'var(--accent)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }}
                >
                  <div
                    style={{
                      width: '20px',
                      height: '20px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    {item.selected ? (
                      <Check size={16} />
                    ) : item.icon ? (
                      <item.icon size={16} />
                    ) : null}
                  </div>
                  <span className="flex-1">{item.label}</span>
                </button>
              ))}

              {/* Group Divider */}
              {groupIndex < groups.length - 1 && (
                <div
                  className="my-1 mx-2"
                  style={{
                    height: '1px',
                    backgroundColor: 'var(--border)',
                  }}
                />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
