/**
 * Multi-Select Filter Component
 * 
 * WordPress concept: Taxonomy filter with multiple selections
 * Pattern: `lsx-design/filters/multi-select`
 * 
 * Multi-select checkbox filter for categories, tags, and custom taxonomies.
 * Supports search, select all, and clear all functionality.
 * 
 * **Purpose:**
 * - Filter content by multiple criteria
 * - Support WordPress taxonomies
 * - Enable advanced search
 * - Improve user experience
 * 
 * **Features:**
 * - Checkbox selections
 * - Search within options
 * - Select all / Clear all
 * - Collapsible groups
 * - Count badges
 * 
 * **Design System:**
 * - Typography: Lexend for labels, Manrope for options
 * - Colors: var(--primary) for active states
 * - Spacing: Tailwind classes (p-*, gap-*)
 * - Fonts: Lexend/Manrope only
 * 
 * **Accessibility:**
 * - Checkbox semantics
 * - Keyboard navigation
 * - ARIA labels
 * - Screen reader support
 * 
 * **URL State:**
 * - Syncs with query parameters
 * - Shareable URLs
 * - Browser back/forward
 * 
 * @example
 * // Basic usage
 * <MultiSelectFilter
 *   label="Categories"
 *   options={categories}
 *   value={selectedCategories}
 *   onChange={setSelectedCategories}
 * />
 * 
 * @example
 * // With search and counts
 * <MultiSelectFilter
 *   label="Tags"
 *   options={tags}
 *   value={selectedTags}
 *   onChange={setSelectedTags}
 *   searchable
 *   showCounts
 * />
 */

import React, { useState, useMemo } from 'react';
import { Check, Search, ChevronDown, ChevronUp, X } from 'lucide-react';

/**
 * Filter option structure
 */
export interface FilterOption {
  /**
   * Unique option value/ID
   */
  value: string;

  /**
   * Display label
   */
  label: string;

  /**
   * Result count for this option
   */
  count?: number;

  /**
   * Disabled state
   */
  disabled?: boolean;
}

/**
 * Multi-Select Filter component props
 */
interface MultiSelectFilterProps {
  /**
   * Filter label/heading
   * 
   * @example
   * label="Categories"
   */
  label: string;

  /**
   * Available filter options
   */
  options: FilterOption[];

  /**
   * Currently selected values
   */
  value: string[];

  /**
   * Change handler
   */
  onChange: (value: string[]) => void;

  /**
   * Enable search within options
   * 
   * @default false
   */
  searchable?: boolean;

  /**
   * Show result counts
   * 
   * @default false
   */
  showCounts?: boolean;

  /**
   * Show select all button
   * 
   * @default true
   */
  showSelectAll?: boolean;

  /**
   * Show clear all button
   * 
   * @default true
   */
  showClearAll?: boolean;

  /**
   * Collapsible filter group
   * 
   * @default false
   */
  collapsible?: boolean;

  /**
   * Initially collapsed (if collapsible)
   * 
   * @default false
   */
  defaultCollapsed?: boolean;

  /**
   * Maximum height before scrolling
   * 
   * @default "300px"
   */
  maxHeight?: string;

  /**
   * Custom class name
   */
  className?: string;
}

/**
 * Multi-Select Filter Component
 * 
 * Checkbox filter with search and select all/clear all.
 * 
 * @param props - MultiSelectFilterProps
 * @returns Multi-select filter UI
 */
export function MultiSelectFilter({
  label,
  options,
  value = [],
  onChange,
  searchable = false,
  showCounts = false,
  showSelectAll = true,
  showClearAll = true,
  collapsible = false,
  defaultCollapsed = false,
  maxHeight = '300px',
  className = '',
}: MultiSelectFilterProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed);

  // Filter options based on search query
  const filteredOptions = useMemo(() => {
    if (!searchQuery) return options;
    
    const query = searchQuery.toLowerCase();
    return options.filter((option) =>
      option.label.toLowerCase().includes(query)
    );
  }, [options, searchQuery]);

  // Toggle individual option
  const toggleOption = (optionValue: string) => {
    if (value.includes(optionValue)) {
      onChange(value.filter((v) => v !== optionValue));
    } else {
      onChange([...value, optionValue]);
    }
  };

  // Select all options
  const selectAll = () => {
    const allValues = filteredOptions
      .filter((opt) => !opt.disabled)
      .map((opt) => opt.value);
    onChange(allValues);
  };

  // Clear all selections
  const clearAll = () => {
    onChange([]);
  };

  return (
    <div
      className={`rounded border ${className}`}
      style={{
        backgroundColor: 'var(--card)',
        borderColor: 'var(--border)',
        borderRadius: 'var(--radius-lg)',
      }}
    >
      {/* Header */}
      <div
        className="flex items-center justify-between p-4 border-b"
        style={{
          borderBottomColor: 'var(--border)',
        }}
      >
        <div className="flex items-center gap-2">
          {/* Collapse Toggle */}
          {collapsible && (
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="p-1 rounded transition-colors hover:opacity-80"
              style={{
                backgroundColor: 'transparent',
                border: 'none',
                cursor: 'pointer',
              }}
              aria-label={isCollapsed ? 'Expand filter' : 'Collapse filter'}
            >
              {isCollapsed ? (
                <ChevronDown className="w-5 h-5" style={{ color: 'var(--foreground)' }} />
              ) : (
                <ChevronUp className="w-5 h-5" style={{ color: 'var(--foreground)' }} />
              )}
            </button>
          )}

          {/* Label */}
          <h3
            style={{
              fontFamily: 'Lexend, sans-serif',
              fontSize: 'var(--text-base)',
              fontWeight: '600',
              color: 'var(--foreground)',
            }}
          >
            {label}
          </h3>

          {/* Selected Count Badge */}
          {value.length > 0 && (
            <span
              className="px-2 py-1 rounded"
              style={{
                backgroundColor: 'var(--primary)',
                color: 'var(--primary-foreground)',
                fontFamily: 'Manrope, sans-serif',
                fontSize: 'var(--text-small)',
                fontWeight: '600',
              }}
            >
              {value.length}
            </span>
          )}
        </div>

        {/* Action Buttons */}
        {!isCollapsed && (
          <div className="flex items-center gap-2">
            {showSelectAll && (
              <button
                onClick={selectAll}
                className="px-3 py-1 rounded transition-colors hover:opacity-80"
                style={{
                  backgroundColor: 'var(--muted)',
                  color: 'var(--foreground)',
                  border: 'none',
                  borderRadius: 'var(--radius)',
                  fontFamily: 'Manrope, sans-serif',
                  fontSize: 'var(--text-small)',
                  cursor: 'pointer',
                }}
              >
                Select All
              </button>
            )}

            {showClearAll && value.length > 0 && (
              <button
                onClick={clearAll}
                className="px-3 py-1 rounded transition-colors hover:opacity-80"
                style={{
                  backgroundColor: 'var(--destructive)',
                  color: 'var(--destructive-foreground)',
                  border: 'none',
                  borderRadius: 'var(--radius)',
                  fontFamily: 'Manrope, sans-serif',
                  fontSize: 'var(--text-small)',
                  cursor: 'pointer',
                }}
              >
                Clear
              </button>
            )}
          </div>
        )}
      </div>

      {/* Content */}
      {!isCollapsed && (
        <div className="p-4">
          {/* Search */}
          {searchable && (
            <div className="mb-4">
              <div
                className="flex items-center gap-2 px-3 py-2 rounded border"
                style={{
                  backgroundColor: 'var(--input-background)',
                  borderColor: 'var(--border)',
                  borderRadius: 'var(--radius)',
                }}
              >
                <Search className="w-4 h-4" style={{ color: 'var(--muted-foreground)' }} />
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{
                    flex: 1,
                    backgroundColor: 'transparent',
                    border: 'none',
                    outline: 'none',
                    fontFamily: 'Manrope, sans-serif',
                    fontSize: 'var(--text-base)',
                    color: 'var(--foreground)',
                  }}
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="p-1 rounded transition-opacity hover:opacity-80"
                    style={{
                      backgroundColor: 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                    }}
                    aria-label="Clear search"
                  >
                    <X className="w-4 h-4" style={{ color: 'var(--muted-foreground)' }} />
                  </button>
                )}
              </div>
            </div>
          )}

          {/* Options List */}
          <div
            style={{
              maxHeight,
              overflowY: 'auto',
            }}
          >
            {filteredOptions.length === 0 ? (
              <p
                className="text-center py-4"
                style={{
                  fontFamily: 'Manrope, sans-serif',
                  fontSize: 'var(--text-base)',
                  color: 'var(--muted-foreground)',
                }}
              >
                No options found
              </p>
            ) : (
              <div className="space-y-2">
                {filteredOptions.map((option) => (
                  <label
                    key={option.value}
                    className="flex items-center gap-3 p-2 rounded cursor-pointer transition-colors hover:opacity-80"
                    style={{
                      backgroundColor: value.includes(option.value)
                        ? 'var(--muted)'
                        : 'transparent',
                      opacity: option.disabled ? 0.5 : 1,
                      cursor: option.disabled ? 'not-allowed' : 'pointer',
                    }}
                  >
                    {/* Checkbox */}
                    <input
                      type="checkbox"
                      checked={value.includes(option.value)}
                      onChange={() => !option.disabled && toggleOption(option.value)}
                      disabled={option.disabled}
                      className="sr-only"
                    />

                    {/* Custom Checkbox */}
                    <div
                      className="flex items-center justify-center rounded transition-colors"
                      style={{
                        width: '20px',
                        height: '20px',
                        backgroundColor: value.includes(option.value)
                          ? 'var(--primary)'
                          : 'var(--background)',
                        border: `2px solid ${
                          value.includes(option.value) ? 'var(--primary)' : 'var(--border)'
                        }`,
                        borderRadius: 'var(--radius-sm)',
                      }}
                    >
                      {value.includes(option.value) && (
                        <Check
                          className="w-3 h-3"
                          style={{ color: 'var(--primary-foreground)' }}
                        />
                      )}
                    </div>

                    {/* Label */}
                    <span
                      className="flex-1"
                      style={{
                        fontFamily: 'Manrope, sans-serif',
                        fontSize: 'var(--text-base)',
                        color: 'var(--foreground)',
                      }}
                    >
                      {option.label}
                    </span>

                    {/* Count Badge */}
                    {showCounts && option.count !== undefined && (
                      <span
                        className="px-2 py-1 rounded"
                        style={{
                          backgroundColor: 'var(--muted)',
                          fontFamily: 'Manrope, sans-serif',
                          fontSize: 'var(--text-small)',
                          color: 'var(--muted-foreground)',
                        }}
                      >
                        {option.count}
                      </span>
                    )}
                  </label>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

/**
 * WordPress Block Pattern Registration
 * 
 * Pattern slug: lsx-design/filters/multi-select
 * Category: filters
 */
