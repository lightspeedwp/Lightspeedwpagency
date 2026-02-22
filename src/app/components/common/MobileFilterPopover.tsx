/**
 * Mobile Filter Popover Component
 * 
 * WordPress concept: Mobile-friendly filter interface
 * Pattern: Accessible popover menu for archive filtering
 * 
 * **Purpose:**
 * - Mobile-first filter interface
 * - WCAG AAA touch targets (48×48px minimum)
 * - Smooth animations
 * - Accessible keyboard navigation
 * - Close on selection or outside click
 * 
 * **Accessibility:**
 * - ARIA labels and roles
 * - Focus management
 * - Escape key to close
 * - Screen reader announcements
 * - High contrast in both light/dark modes
 * 
 * **Design System:**
 * - Uses CSS variables for colors
 * - Proper spacing with Tailwind
 * - Smooth transitions
 * - Backdrop blur effect
 */

import { X } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { Button } from '../blocks/design/Buttons';

export interface FilterOption {
  id: string;
  label: string;
  count?: number;
}

interface MobileFilterPopoverProps {
  /**
   * Whether the popover is open
   */
  isOpen: boolean;
  
  /**
   * Callback to close the popover
   */
  onClose: () => void;
  
  /**
   * Filter title (e.g., "Categories", "Industries")
   */
  title: string;
  
  /**
   * Available filter options
   */
  options: FilterOption[];
  
  /**
   * Currently selected option ID (single select mode)
   */
  selectedOption?: string;

  /**
   * Currently selected option IDs (multi select mode)
   */
  selectedOptions?: string[];

  /**
   * Whether to allow multiple selections
   */
  multiple?: boolean;
  
  /**
   * Callback when option is selected
   */
  onSelect: (optionId: string) => void;
  
  /**
   * Optional "All" option label
   */
  allLabel?: string;
}

/**
 * Mobile Filter Popover Component
 * 
 * Displays filters in a mobile-friendly popover menu with:
 * - Backdrop overlay
 * - Slide-up animation
 * - Touch-optimized buttons (48×48px)
 * - Close button and outside click handling
 */
export function MobileFilterPopover({
  isOpen,
  onClose,
  title,
  options,
  selectedOption,
  selectedOptions = [],
  multiple = false,
  onSelect,
  allLabel = 'All'
}: MobileFilterPopoverProps) {
  const popoverRef = useRef<HTMLDivElement>(null);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when popover is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  // Handle outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      // Delay to avoid immediate close on button click
      setTimeout(() => {
        document.addEventListener('mousedown', handleClickOutside);
      }, 100);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  const handleSelect = (optionId: string) => {
    onSelect(optionId);
    if (!multiple) {
      onClose();
    }
  };

  const isSelected = (id: string) => {
    if (multiple) {
      return selectedOptions.includes(id);
    }
    return selectedOption === id;
  };

  if (!isOpen) return null;

  return (
    <div
      className="mobile-filter-popover"
      role="dialog"
      aria-modal="true"
      aria-label={`Filter by ${title}`}
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="mobile-filter-popover__backdrop"
      />

      {/* Popover Content */}
      <div
        ref={popoverRef}
        className="mobile-filter-popover__content"
      >
        {/* Header */}
        <div className="mobile-filter-popover__header">
          <h2 className="mobile-filter-popover__title">
            {title}
          </h2>

          <button
            onClick={onClose}
            aria-label="Close filter menu"
            className="mobile-filter-popover__close"
          >
            <X size={24} />
          </button>
        </div>

        {/* Filter Options */}
        <div className="mobile-filter-popover__list">
          {/* All option (only show if not multi-select or specialized logic) */}
          {!multiple && (
            <button
              onClick={() => handleSelect('all')}
              className={`mobile-filter-popover__option ${isSelected('all') ? 'mobile-filter-popover__option--selected' : ''}`}
            >
              <span>{allLabel}</span>
              {isSelected('all') && (
                <span className="mobile-filter-popover__check">
                  ✓
                </span>
              )}
            </button>
          )}

          {/* Individual options */}
          {options.map((option) => (
            <button
              key={option.id}
              onClick={() => handleSelect(option.id)}
              className={`mobile-filter-popover__option ${isSelected(option.id) ? 'mobile-filter-popover__option--selected' : ''}`}
            >
              <span>{option.label}</span>
              <div className="mobile-filter-popover__option-content">
                {option.count !== undefined && (
                  <span className="mobile-filter-popover__count">
                    ({option.count})
                  </span>
                )}
                {isSelected(option.id) && (
                  <span className="mobile-filter-popover__check">
                    ✓
                  </span>
                )}
              </div>
            </button>
          ))}
        </div>

        {/* Footer (optional close button) */}
        <div className="mobile-filter-popover__footer">
          <Button
            variant="secondary"
            size="lg"
            onClick={onClose}
            className="wp-w-full"
          >
            Close Filters
          </Button>
        </div>
      </div>
    </div>
  );
}