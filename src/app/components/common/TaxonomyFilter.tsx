import { useState } from 'react';
import { Funnel as Filter, Check, CaretDown as ChevronDown } from '@phosphor-icons/react';
import { MobileFilterPopover, FilterOption } from './MobileFilterPopover';

export interface SortOption {
  id: string;
  label: string;
}

export interface TaxonomyFilterProps {
  /**
   * Filter title (e.g., "Categories")
   */
  title?: string;
  
  /**
   * Available filter options
   */
  options: FilterOption[];
  
  /**
   * Currently selected values (array of IDs)
   */
  selectedValues: string[];
  
  /**
   * Callback when selection changes
   */
  onChange: (values: string[]) => void;
  
  /**
   * Whether to allow multiple selections
   */
  multiple?: boolean;
  
  /**
   * Available sort options
   */
  sortOptions?: SortOption[];
  
  /**
   * Currently selected sort option ID
   */
  currentSort?: string;
  
  /**
   * Callback when sort option changes
   */
  onSortChange?: (sortId: string) => void;
  
  /**
   * Result count to display
   */
  resultCount?: number;
  
  /**
   * Label for result count (e.g., "projects", "posts")
   */
  resultLabel?: string;
  
  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * Taxonomy Filter Component
 * 
 * Reusable filter component for archive pages.
 * Supports desktop chips and mobile popover.
 * 
 * Features:
 * - Desktop: Horizontal scrollable chips
 * - Mobile: Popover with multi-select support
 * - Sorting controls
 * - Result count display
 * - Neon glow on active states
 */
export function TaxonomyFilter({
  title = 'Filters',
  options,
  selectedValues,
  onChange,
  multiple = false,
  sortOptions,
  currentSort,
  onSortChange,
  resultCount,
  resultLabel = 'results',
  className = ''
}: TaxonomyFilterProps) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const handleSelect = (optionId: string) => {
    if (multiple) {
      if (selectedValues.includes(optionId)) {
        onChange(selectedValues.filter(v => v !== optionId));
      } else {
        onChange([...selectedValues, optionId]);
      }
    } else {
      // Single select: toggle or switch
      // If clicking same item, keep it selected (unless allow unselect?)
      // Usually radio behavior for single select filters
      onChange([optionId]);
    }
  };
  
  const handleMobileSelect = (optionId: string) => {
    handleSelect(optionId);
    // Don't close on multi-select to allow multiple selections
    // Close on single select is handled by MobileFilterPopover if not multiple
    if (!multiple) setIsMobileOpen(false);
  };
  
  const isSelected = (optionId: string) => selectedValues.includes(optionId);
  
  return (
    <div className={`taxonomy-filter ${className}`}>
      <div className="taxonomy-filter__header">
        {/* Mobile Toggle */}
        <button 
          className="taxonomy-filter__mobile-toggle"
          onClick={() => setIsMobileOpen(true)}
          aria-label="Open filters"
        >
          <Filter size={16} />
          <span>Filters</span>
          {selectedValues.length > 0 && (selectedValues[0] !== 'all' && selectedValues[0] !== 'All') && (
            <span className="wp-bg-primary wp-text-primary-foreground wp-text-xs wp-rounded-full wp-w-5 wp-h-5 wp-flex wp-items-center wp-justify-center" style={{ marginLeft: 'var(--spacing-2)' }}>
              {selectedValues.length}
            </span>
          )}
        </button>

        {/* Result Count (Desktop) */}
        {resultCount !== undefined && (
          <span className="taxonomy-filter__count wp-hide-mobile">
            Showing {resultCount} {resultLabel}
          </span>
        )}
        
        <div className="taxonomy-filter__controls">
          {/* Sort Dropdown */}
          {sortOptions && onSortChange && (
            <div className="taxonomy-filter__sort">
              <span className="wp-mr-2 wp-text-sm wp-text-muted-foreground">Sort by:</span>
              <div style={{ position: 'relative', display: 'inline-flex', alignItems: 'center' }}>
                <select
                  value={currentSort}
                  onChange={(e) => onSortChange(e.target.value)}
                  className="taxonomy-filter__sort-select"
                  aria-label="Sort by"
                  style={{ paddingRight: 'var(--spacing-6)', cursor: 'pointer', appearance: 'none', background: 'transparent', border: 'none', color: 'var(--foreground)', fontWeight: 'var(--font-weight-medium)', fontSize: 'var(--text-sm)' }}
                >
                  {sortOptions.map(opt => (
                    <option key={opt.id} value={opt.id}>{opt.label}</option>
                  ))}
                </select>
                <ChevronDown size={14} className="taxonomy-filter__sort-icon" style={{ position: 'absolute', right: 0, pointerEvents: 'none', color: 'var(--muted-foreground)' }} />
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Desktop Chips */}
      <div className="taxonomy-filter__chips">
        {options.map((option) => {
          const active = isSelected(option.id);
          return (
            <button
              key={option.id}
              onClick={() => handleSelect(option.id)}
              className={`taxonomy-filter__chip ${active ? 'taxonomy-filter__chip--active' : ''}`}
              aria-pressed={active}
            >
              {active && <Check size={14} style={{ marginRight: 'var(--spacing-1-5)' }} />}
              {option.label}
              {option.count !== undefined && (
                <span className="taxonomy-filter__chip-count">{option.count}</span>
              )}
            </button>
          );
        })}
      </div>
      
      {/* Mobile Popover */}
      <MobileFilterPopover
        isOpen={isMobileOpen}
        onClose={() => setIsMobileOpen(false)}
        title={title}
        options={options}
        selectedOptions={selectedValues}
        selectedOption={!multiple && selectedValues.length > 0 ? selectedValues[0] : undefined}
        onSelect={handleMobileSelect}
        multiple={multiple}
        allLabel="All" 
      />
    </div>
  );
}