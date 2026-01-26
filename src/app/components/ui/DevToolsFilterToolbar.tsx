/**
 * DevToolsFilterToolbar Component
 * 
 * Reusable filter toolbar for developer tools pages.
 * Provides consistent filtering UX with desktop inline filters and mobile popover.
 * 
 * **Purpose:**
 * - Standardize filtering across all dev tools
 * - Provide mobile-friendly popover on small screens
 * - Support both category filters and search
 * - Ensure WCAG 2.1 AA accessibility
 * 
 * **Features:**
 * - Desktop: Inline filter buttons
 * - Mobile: Popover with 48×48px touch targets (WCAG AAA)
 * - Optional search input
 * - Keyboard navigation support
 * - Focus management
 * 
 * **Design System:**
 * - Typography: Lexend (buttons), Manrope (labels)
 * - Colors: CSS variables from theme.css
 * - Spacing: Tailwind classes
 * - Border radius: var(--radius-lg)
 * 
 * @example
 * // Basic category filters only
 * <DevToolsFilterToolbar
 *   filterOptions={[
 *     { value: 'all', label: 'All' },
 *     { value: 'patterns', label: 'Patterns' },
 *     { value: 'blocks', label: 'Blocks' }
 *   ]}
 *   selectedFilter="all"
 *   onFilterChange={setFilter}
 * />
 * 
 * @example
 * // With search input
 * <DevToolsFilterToolbar
 *   filterOptions={filterOptions}
 *   selectedFilter={filter}
 *   onFilterChange={setFilter}
 *   searchTerm={searchTerm}
 *   onSearchChange={setSearchTerm}
 *   searchPlaceholder="Search components..."
 * />
 * 
 * @see {@link /guidelines/dev-tools/filtering.md}
 */

import { useState } from 'react';
import { Search } from 'lucide-react';
import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { MobileFilterPopover } from '../common/MobileFilterPopover';

/**
 * Filter option data structure
 */
export interface FilterOption {
  /**
   * Filter value (used programmatically)
   * 
   * @example
   * value: "all"
   * 
   * @example
   * value: "patterns"
   */
  value: string;
  
  /**
   * Filter label (displayed to user)
   * 
   * @example
   * label: "All"
   * 
   * @example
   * label: "Patterns"
   */
  label: string;
}

/**
 * DevToolsFilterToolbar component props
 */
interface DevToolsFilterToolbarProps {
  /**
   * Array of filter options
   * 
   * First option should typically be "All" to show everything.
   * 
   * @example
   * filterOptions={[
   *   { value: 'all', label: 'All' },
   *   { value: 'common', label: 'Common' },
   *   { value: 'patterns', label: 'Patterns' }
   * ]}
   */
  filterOptions: FilterOption[];
  
  /**
   * Currently selected filter value
   * 
   * @example
   * selectedFilter="all"
   */
  selectedFilter: string;
  
  /**
   * Callback when filter changes
   * 
   * @example
   * onFilterChange={(value) => setFilter(value)}
   */
  onFilterChange: (value: string) => void;
  
  /**
   * Optional search term (enables search input)
   * 
   * If provided, search input will be displayed.
   * 
   * @example
   * searchTerm={searchQuery}
   */
  searchTerm?: string;
  
  /**
   * Optional search change callback (required if searchTerm provided)
   * 
   * @example
   * onSearchChange={(value) => setSearchQuery(value)}
   */
  onSearchChange?: (value: string) => void;
  
  /**
   * Optional search input placeholder
   * 
   * @default "Search..."
   * 
   * @example
   * searchPlaceholder="Search components..."
   */
  searchPlaceholder?: string;
  
  /**
   * Optional label for filter section
   * 
   * @default "Filter:"
   * 
   * @example
   * filterLabel="Show:"
   */
  filterLabel?: string;
  
  /**
   * Optional mobile popover button label
   * 
   * @default "Filter"
   * 
   * @example
   * mobileButtonLabel="Filter Tools"
   */
  mobileButtonLabel?: string;
}

/**
 * DevToolsFilterToolbar Component
 * 
 * Renders responsive filter toolbar with optional search.
 * Mobile: Shows popover. Desktop: Shows inline buttons.
 * 
 * @param props - DevToolsFilterToolbarProps
 * @returns Filter toolbar section
 */
export function DevToolsFilterToolbar({
  filterOptions,
  selectedFilter,
  onFilterChange,
  searchTerm,
  onSearchChange,
  searchPlaceholder = 'Search...',
  filterLabel = 'Filter:',
  mobileButtonLabel = 'Filter'
}: DevToolsFilterToolbarProps) {
  return (
    <Section variant="default" spacing="30">
      <Container>
        <div className="flex flex-col gap-6">
          {/* Search Input (Optional) */}
          {searchTerm !== undefined && onSearchChange && (
            <div className="relative">
              <Search
                size={20}
                style={{
                  position: 'absolute',
                  left: '16px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: 'var(--muted-foreground)'
                }}
                aria-hidden="true"
              />
              <input
                type="text"
                placeholder={searchPlaceholder}
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                role="search"
                aria-label={searchPlaceholder}
                style={{
                  width: '100%',
                  padding: '12px 16px 12px 48px',
                  backgroundColor: 'var(--background)',
                  border: '1px solid var(--border-soft)',
                  borderRadius: 'var(--radius-lg)',
                  fontFamily: 'var(--font-primary)',
                  fontSize: 'var(--text-base)',
                  color: 'var(--foreground)',
                  outline: 'none',
                  transition: 'border-color 0.2s ease'
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = 'var(--primary)';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-soft)';
                }}
              />
            </div>
          )}

          {/* Mobile: Filter Popover */}
          <div className="md:hidden">
            <MobileFilterPopover
              options={filterOptions}
              selectedValue={selectedFilter}
              onSelect={onFilterChange}
              label={filterLabel}
              buttonLabel={mobileButtonLabel}
            />
          </div>

          {/* Desktop: Inline Filter Buttons */}
          <div className="hidden md:flex flex-wrap items-center gap-3">
            <span
              style={{
                fontSize: 'var(--text-base)',
                fontFamily: 'var(--font-secondary)',
                fontWeight: 'var(--font-weight-regular)',
                color: 'var(--foreground)'
              }}
            >
              {filterLabel}
            </span>
            
            {filterOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => onFilterChange(option.value)}
                aria-pressed={selectedFilter === option.value}
                aria-label={`Filter by ${option.label}`}
                style={{
                  padding: '8px 16px',
                  backgroundColor: selectedFilter === option.value 
                    ? 'var(--primary)' 
                    : 'var(--background)',
                  color: selectedFilter === option.value 
                    ? 'var(--primary-foreground)' 
                    : 'var(--foreground)',
                  border: `1px solid ${
                    selectedFilter === option.value 
                      ? 'var(--primary)' 
                      : 'var(--border-soft)'
                  }`,
                  borderRadius: 'var(--radius-lg)',
                  fontFamily: 'var(--font-primary)',
                  fontSize: 'var(--text-base)',
                  fontWeight: 'var(--font-weight-medium)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  textTransform: 'capitalize'
                }}
                onMouseEnter={(e) => {
                  if (selectedFilter !== option.value) {
                    e.currentTarget.style.borderColor = 'var(--primary)';
                    e.currentTarget.style.backgroundColor = 'var(--card)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (selectedFilter !== option.value) {
                    e.currentTarget.style.borderColor = 'var(--border-soft)';
                    e.currentTarget.style.backgroundColor = 'var(--background)';
                  }
                }}
                onFocus={(e) => {
                  e.currentTarget.style.outline = '2px solid var(--ring)';
                  e.currentTarget.style.outlineOffset = '2px';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.outline = 'none';
                }}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

/**
 * WordPress Integration
 * 
 * This is a utility component for dev tools, not a WordPress block.
 * Used within developer tools templates only.
 */
