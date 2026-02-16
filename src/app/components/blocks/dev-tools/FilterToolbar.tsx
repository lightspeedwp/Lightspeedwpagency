/**
 * DevTools Filter Toolbar Block Component
 * 
 * WordPress Block: dev-tools/filter-toolbar
 * 
 * Renders responsive filter toolbar with optional search.
 * Mobile: Shows popover. Desktop: Shows inline buttons.
 * 
 * @see /src/styles/blocks/dev-tools/filter-toolbar.css
 */

import React from 'react';
import { Search } from 'lucide-react';
import { MobileFilterPopover } from '../../common/MobileFilterPopover';
import '@/styles/blocks/dev-tools/filter-toolbar.css';

export interface FilterOption {
  value: string;
  label: string;
}

export interface DevToolsFilterToolbarProps {
  filterOptions: FilterOption[];
  selectedFilter: string;
  onFilterChange: (value: string) => void;
  searchTerm?: string;
  onSearchChange?: (value: string) => void;
  searchPlaceholder?: string;
  filterLabel?: string;
  mobileButtonLabel?: string;
}

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
    <section className="wp-block-devtools-filter-toolbar">
      <div className="wp-block-devtools-filter-toolbar__container">
        {/* Search Input (Optional) */}
        {searchTerm !== undefined && onSearchChange && (
          <div className="wp-block-devtools-filter-toolbar__search">
            <Search className="wp-block-devtools-filter-toolbar__search-icon" />
            <input
              type="text"
              placeholder={searchPlaceholder}
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              role="search"
              aria-label={searchPlaceholder}
              className="wp-block-devtools-filter-toolbar__search-input"
            />
          </div>
        )}

        {/* Mobile: Filter Popover */}
        <div className="wp-block-devtools-filter-toolbar__mobile">
          <MobileFilterPopover
            options={filterOptions}
            selectedValue={selectedFilter}
            onSelect={onFilterChange}
            label={filterLabel}
            buttonLabel={mobileButtonLabel}
          />
        </div>

        {/* Desktop: Inline Filter Buttons */}
        <div className="wp-block-devtools-filter-toolbar__desktop">
          <span className="wp-block-devtools-filter-toolbar__label">
            {filterLabel}
          </span>
          
          {filterOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => onFilterChange(option.value)}
              aria-pressed={selectedFilter === option.value}
              aria-label={`Filter by ${option.label}`}
              className={`wp-block-devtools-filter-toolbar__button ${selectedFilter === option.value ? 'wp-block-devtools-filter-toolbar__button--active' : ''}`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
