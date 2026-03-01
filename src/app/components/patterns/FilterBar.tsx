/**
 * FilterBar Component
 *
 * Complete filter interface with search, categories, sorting
 * Integrates with useFilters hook
 *
 * Features:
 * - Search input with icon
 * - Category chips (multi-select)
 * - Sort dropdown
 * - Clear filters button
 * - Active filter count badge
 * - Responsive design
 *
 * Design System:
 * - 100% CSS variables
 * - WordPress utility classes
 * - BEM naming (.filter-bar)
 * - Dedicated CSS file
 *
 * @see /guidelines/patterns/FilterBar.md
 */

import { Search, X, SlidersHorizontal, ArrowUpDown } from 'lucide-react';

export interface FilterBarProps {
  // Search
  searchTerm: string;
  onSearchChange: (term: string) => void;
  searchPlaceholder?: string;

  // Categories
  availableCategories: string[];
  selectedCategories: string[];
  onCategoryToggle: (category: string) => void;

  // Sorting
  sortBy: string;
  onSortChange: (sort: string) => void;
  sortDirection: 'asc' | 'desc';
  onSortDirectionToggle: () => void;
  sortOptions: Array<{ value: string; label: string }>;

  // Clear
  onClearFilters: () => void;
  activeFilterCount: number;

  // Results
  totalCount: number;
  filteredCount: number;
}

export const FilterBar = ({
  searchTerm,
  onSearchChange,
  searchPlaceholder = 'Search...',
  availableCategories,
  selectedCategories,
  onCategoryToggle,
  sortBy,
  onSortChange,
  sortDirection,
  onSortDirectionToggle,
  sortOptions,
  onClearFilters,
  activeFilterCount,
  totalCount,
  filteredCount,
}: FilterBarProps) => {
  return (
    <div className="filter-bar">
      {/* Top Row: Search + Sort + Clear */}
      <div className="filter-bar__top">
        {/* Search Input */}
        <div className="filter-bar__search">
          <Search className="filter-bar__search-icon" size={20} />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder={searchPlaceholder}
            className="filter-bar__search-input"
            aria-label="Search"
          />
          {searchTerm && (
            <button
              onClick={() => onSearchChange('')}
              className="filter-bar__search-clear"
              aria-label="Clear search"
            >
              <X size={16} />
            </button>
          )}
        </div>

        {/* Sort Dropdown */}
        <div className="filter-bar__sort">
          <SlidersHorizontal
            className="filter-bar__sort-icon"
            size={20}
            aria-hidden="true"
          />
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
            className="filter-bar__sort-select"
            aria-label="Sort by"
          >
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <button
            onClick={onSortDirectionToggle}
            className="filter-bar__sort-direction"
            aria-label={`Sort direction: ${
              sortDirection === 'asc' ? 'ascending' : 'descending'
            }`}
            title={sortDirection === 'asc' ? 'Ascending' : 'Descending'}
          >
            <ArrowUpDown size={20} />
          </button>
        </div>

        {/* Clear Filters Button */}
        {activeFilterCount > 0 && (
          <button onClick={onClearFilters} className="filter-bar__clear">
            Clear Filters
            <span className="filter-bar__clear-badge">{activeFilterCount}</span>
          </button>
        )}
      </div>

      {/* Category Chips */}
      {availableCategories.length > 0 && (
        <div className="filter-bar__categories" role="group" aria-label="Filter by category">
          {availableCategories.map((category) => {
            const isSelected = selectedCategories.includes(category);
            return (
              <button
                key={category}
                onClick={() => onCategoryToggle(category)}
                className={`filter-bar__chip ${
                  isSelected ? 'filter-bar__chip--active' : ''
                }`}
                aria-pressed={isSelected}
              >
                {category}
                {isSelected && <X size={14} aria-hidden="true" />}
              </button>
            );
          })}
        </div>
      )}

      {/* Results Count */}
      <div className="filter-bar__results">
        Showing {filteredCount} of {totalCount} results
      </div>
    </div>
  );
};
