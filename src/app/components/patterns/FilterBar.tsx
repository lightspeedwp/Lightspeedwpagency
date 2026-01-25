/**
 * Filter Bar Pattern
 * 
 * WordPress pattern: lsx-design/nav/filter-bar
 * 
 * Displays filtering and sorting controls for archive pages.
 * Includes category filters, sort options, search, and view toggles.
 * 
 * All styling in /src/styles/filter-bar.css (user-editable)
 * 
 * **Usage:**
 * ```tsx
 * <FilterBar
 *   categories={['All', 'WordPress', 'Design', 'Development']}
 *   selectedCategory="All"
 *   onCategoryChange={(cat) => setCategory(cat)}
 *   sortOptions={[
 *     { label: 'Latest', value: 'date-desc' },
 *     { label: 'Oldest', value: 'date-asc' }
 *   ]}
 *   selectedSort="date-desc"
 *   onSortChange={(sort) => setSort(sort)}
 *   showSearch
 *   searchValue={search}
 *   onSearchChange={(val) => setSearch(val)}
 * />
 * ```
 * 
 * @see {@link /guidelines/patterns/FilterBar.md}
 */

import { Search, SlidersHorizontal, Grid, List, X } from 'lucide-react';

export interface FilterOption {
  label: string;
  value: string;
  count?: number;
}

export interface SortOption {
  label: string;
  value: string;
  icon?: React.ComponentType<{ size?: number }>;
}

export type ViewMode = 'grid' | 'list';

export interface FilterBarProps {
  /** Category filter options */
  categories?: string[] | FilterOption[];
  /** Selected category */
  selectedCategory?: string;
  /** Category change handler */
  onCategoryChange?: (category: string) => void;
  /** Sort options */
  sortOptions?: SortOption[];
  /** Selected sort option */
  selectedSort?: string;
  /** Sort change handler */
  onSortChange?: (sort: string) => void;
  /** Show search input */
  showSearch?: boolean;
  /** Search value */
  searchValue?: string;
  /** Search change handler */
  onSearchChange?: (value: string) => void;
  /** Search placeholder */
  searchPlaceholder?: string;
  /** Show view mode toggle (grid/list) */
  showViewToggle?: boolean;
  /** Current view mode */
  viewMode?: ViewMode;
  /** View mode change handler */
  onViewModeChange?: (mode: ViewMode) => void;
  /** Show results count */
  showResultsCount?: boolean;
  /** Results count */
  resultsCount?: number;
  /** Total items count */
  totalCount?: number;
  /** Compact layout (less padding) */
  compact?: boolean;
  /** Background color variant */
  variant?: 'default' | 'muted' | 'transparent';
}

export function FilterBar({
  categories = [],
  selectedCategory,
  onCategoryChange,
  sortOptions = [],
  selectedSort,
  onSortChange,
  showSearch = false,
  searchValue = '',
  onSearchChange,
  searchPlaceholder = 'Search...',
  showViewToggle = false,
  viewMode = 'grid',
  onViewModeChange,
  showResultsCount = false,
  resultsCount,
  totalCount,
  compact = false,
  variant = 'muted'
}: FilterBarProps) {
  // Normalize categories to FilterOption format
  const normalizedCategories: FilterOption[] = categories.map(cat => 
    typeof cat === 'string' ? { label: cat, value: cat } : cat
  );

  // Build filter bar classes
  const filterBarClasses = [
    `filter-bar--${variant}`,
    compact ? 'filter-bar--compact' : 'filter-bar--normal'
  ].filter(Boolean).join(' ');

  // Build view button classes
  const gridButtonClasses = [
    'filter-bar__view-button',
    viewMode === 'grid' && 'filter-bar__view-button--active'
  ].filter(Boolean).join(' ');

  const listButtonClasses = [
    'filter-bar__view-button',
    viewMode === 'list' && 'filter-bar__view-button--active'
  ].filter(Boolean).join(' ');

  return (
    <div className={filterBarClasses}>
      <div className="wp-max-w-6xl">
        <div className="filter-bar__content">
          {/* Top Row: Search + Results Count + View Toggle */}
          {(showSearch || showResultsCount || showViewToggle) && (
            <div className="filter-bar__top-row">
              {/* Search */}
              {showSearch && (
                <div className="filter-bar__search">
                  <Search size={18} className="filter-bar__search-icon" />
                  <input
                    type="search"
                    value={searchValue}
                    onChange={(e) => onSearchChange?.(e.target.value)}
                    placeholder={searchPlaceholder}
                    className="filter-bar__search-input"
                  />
                  {searchValue && (
                    <button
                      onClick={() => onSearchChange?.('')}
                      className="filter-bar__search-clear"
                      aria-label="Clear search"
                    >
                      <X size={16} />
                    </button>
                  )}
                </div>
              )}

              {/* Right Side: Results Count + View Toggle */}
              <div className="filter-bar__top-row">
                {/* Results Count */}
                {showResultsCount && (
                  <span className="filter-bar__results">
                    {resultsCount !== undefined && totalCount !== undefined
                      ? `Showing ${resultsCount} of ${totalCount} results`
                      : resultsCount !== undefined
                      ? `${resultsCount} results`
                      : null}
                  </span>
                )}

                {/* View Toggle */}
                {showViewToggle && (
                  <div className="filter-bar__view-toggle">
                    <button
                      onClick={() => onViewModeChange?.('grid')}
                      className={gridButtonClasses}
                      aria-label="Grid view"
                      aria-pressed={viewMode === 'grid'}
                    >
                      <Grid size={18} />
                    </button>
                    <button
                      onClick={() => onViewModeChange?.('list')}
                      className={listButtonClasses}
                      aria-label="List view"
                      aria-pressed={viewMode === 'list'}
                    >
                      <List size={18} />
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Bottom Row: Categories + Sort */}
          {(categories.length > 0 || sortOptions.length > 0) && (
            <div className="filter-bar__bottom-row">
              {/* Category Filters */}
              {categories.length > 0 && (
                <div className="filter-bar__categories">
                  {normalizedCategories.map((category, index) => {
                    const isSelected = selectedCategory === category.value;
                    const buttonClasses = [
                      'filter-bar__category-button',
                      isSelected && 'filter-bar__category-button--active'
                    ].filter(Boolean).join(' ');

                    return (
                      <button
                        key={index}
                        onClick={() => onCategoryChange?.(category.value)}
                        className={buttonClasses}
                        aria-pressed={isSelected}
                      >
                        {category.label}
                        {category.count !== undefined && (
                          <span className="filter-bar__category-count">
                            ({category.count})
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              )}

              {/* Sort Options */}
              {sortOptions.length > 0 && (
                <div className="filter-bar__sort">
                  <SlidersHorizontal size={16} className="filter-bar__sort-icon" />
                  <select
                    value={selectedSort}
                    onChange={(e) => onSortChange?.(e.target.value)}
                    className="filter-bar__sort-select"
                  >
                    {sortOptions.map((option, index) => (
                      <option key={index} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
