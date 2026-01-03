/**
 * Advanced Filter Example Component
 * 
 * Complete example showing all advanced filtering features working together.
 * Demonstrates multi-select, range sliders, date pickers, presets, and URL state.
 * 
 * **Features:**
 * - All filter types in one interface
 * - URL state synchronization
 * - Filter presets
 * - Active filter display
 * - Reset functionality
 * 
 * **Use Cases:**
 * - Product archives
 * - Blog post filtering
 * - Event search
 * - Service filtering
 * 
 * @example
 * <AdvancedFilterExample
 *   onFilterChange={(filters) => console.log(filters)}
 * />
 */

import React from 'react';
import { X, Filter, RotateCcw } from 'lucide-react';
import { MultiSelectFilter } from './MultiSelectFilter';
import { RangeSlider } from './RangeSlider';
import { DatePicker } from './DatePicker';
import { FilterPresets } from './FilterPresets';
import { useFilterState } from '../../hooks/useFilterState';
import type { FilterOption } from './MultiSelectFilter';
import type { DateRange } from './DatePicker';

/**
 * Filter state structure
 */
interface FilterState {
  categories: string[];
  tags: string[];
  priceRange: [number, number];
  rating: [number, number];
  dateRange: DateRange;
}

/**
 * Advanced Filter Example props
 */
interface AdvancedFilterExampleProps {
  /**
   * Filter change callback
   */
  onFilterChange?: (filters: FilterState) => void;

  /**
   * Show filter presets
   * 
   * @default true
   */
  showPresets?: boolean;

  /**
   * Custom class name
   */
  className?: string;
}

// Mock data
const categories: FilterOption[] = [
  { value: 'web-design', label: 'Web Design', count: 45 },
  { value: 'wordpress', label: 'WordPress', count: 78 },
  { value: 'ecommerce', label: 'E-commerce', count: 34 },
  { value: 'seo', label: 'SEO', count: 56 },
  { value: 'hosting', label: 'Hosting', count: 23 },
  { value: 'maintenance', label: 'Maintenance', count: 12 },
];

const tags: FilterOption[] = [
  { value: 'woocommerce', label: 'WooCommerce', count: 28 },
  { value: 'gutenberg', label: 'Gutenberg', count: 42 },
  { value: 'elementor', label: 'Elementor', count: 19 },
  { value: 'security', label: 'Security', count: 31 },
  { value: 'performance', label: 'Performance', count: 38 },
  { value: 'accessibility', label: 'Accessibility', count: 25 },
  { value: 'responsive', label: 'Responsive', count: 44 },
  { value: 'mobile', label: 'Mobile', count: 33 },
];

/**
 * Advanced Filter Example Component
 * 
 * Demonstrates all filtering features.
 * 
 * @param props - AdvancedFilterExampleProps
 * @returns Complete filter interface
 */
export function AdvancedFilterExample({
  onFilterChange,
  showPresets = true,
  className = '',
}: AdvancedFilterExampleProps) {
  const initialFilters: FilterState = {
    categories: [],
    tags: [],
    priceRange: [0, 10000],
    rating: [1, 5],
    dateRange: { from: null, to: null },
  };

  const [filters, setFilters, utils] = useFilterState(initialFilters, {
    syncWithUrl: true,
    debounceMs: 300,
  });

  // Notify parent of filter changes
  React.useEffect(() => {
    onFilterChange?.(filters);
  }, [filters, onFilterChange]);

  // Remove single filter
  const removeFilter = (key: keyof FilterState) => {
    utils.updateFilter(key, initialFilters[key]);
  };

  return (
    <div className={`grid grid-cols-1 lg:grid-cols-4 gap-8 ${className}`}>
      {/* Filters Sidebar */}
      <div className="lg:col-span-1 space-y-6">
        {/* Filter Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Filter className="w-5 h-5" style={{ color: 'var(--primary)' }} />
            <h2
              style={{
                fontFamily: 'Lexend, sans-serif',
                fontSize: 'var(--text-h4)',
                fontWeight: '600',
                color: 'var(--foreground)',
              }}
            >
              Filters
            </h2>
          </div>

          {/* Reset Button */}
          {utils.hasActiveFilters() && (
            <button
              onClick={utils.resetFilters}
              className="flex items-center gap-2 px-3 py-1 rounded transition-colors hover:opacity-80"
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
              <RotateCcw className="w-4 h-4" />
              Reset All
            </button>
          )}
        </div>

        {/* Filter Presets */}
        {showPresets && (
          <FilterPresets
            currentFilters={filters}
            onApplyPreset={(preset) => setFilters(preset as FilterState)}
          />
        )}

        {/* Category Filter */}
        <MultiSelectFilter
          label="Categories"
          options={categories}
          value={filters.categories}
          onChange={(value) => utils.updateFilter('categories', value)}
          searchable
          showCounts
        />

        {/* Tags Filter */}
        <MultiSelectFilter
          label="Tags"
          options={tags}
          value={filters.tags}
          onChange={(value) => utils.updateFilter('tags', value)}
          searchable
          showCounts
          collapsible
          defaultCollapsed
        />

        {/* Price Range */}
        <div
          className="p-4 rounded border"
          style={{
            backgroundColor: 'var(--card)',
            borderColor: 'var(--border)',
            borderRadius: 'var(--radius-lg)',
          }}
        >
          <RangeSlider
            label="Price Range"
            min={0}
            max={10000}
            step={100}
            value={filters.priceRange}
            onChange={(value) => utils.updateFilter('priceRange', value)}
            formatValue={(v) => `R ${v.toLocaleString()}`}
          />
        </div>

        {/* Rating Filter */}
        <div
          className="p-4 rounded border"
          style={{
            backgroundColor: 'var(--card)',
            borderColor: 'var(--border)',
            borderRadius: 'var(--radius-lg)',
          }}
        >
          <RangeSlider
            label="Minimum Rating"
            min={1}
            max={5}
            step={0.5}
            value={filters.rating}
            onChange={(value) => utils.updateFilter('rating', value)}
            formatValue={(v) => `${v} ★`}
          />
        </div>

        {/* Date Range */}
        <DatePicker
          label="Date Range"
          mode="range"
          rangeValue={filters.dateRange}
          onRangeChange={(value) => utils.updateFilter('dateRange', value)}
          showPresets
        />
      </div>

      {/* Results Area */}
      <div className="lg:col-span-3">
        {/* Active Filters */}
        {utils.hasActiveFilters() && (
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <h3
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-base)',
                  fontWeight: '600',
                  color: 'var(--foreground)',
                }}
              >
                Active Filters ({utils.getFilterCount()})
              </h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {/* Category Pills */}
              {filters.categories.map((cat) => {
                const option = categories.find((c) => c.value === cat);
                return (
                  <button
                    key={cat}
                    onClick={() =>
                      utils.updateFilter(
                        'categories',
                        filters.categories.filter((c) => c !== cat)
                      )
                    }
                    className="flex items-center gap-2 px-3 py-1 rounded transition-colors hover:opacity-80"
                    style={{
                      backgroundColor: 'var(--primary)',
                      color: 'var(--primary-foreground)',
                      border: 'none',
                      borderRadius: 'var(--radius)',
                      fontFamily: 'Manrope, sans-serif',
                      fontSize: 'var(--text-small)',
                      cursor: 'pointer',
                    }}
                  >
                    {option?.label || cat}
                    <X className="w-3 h-3" />
                  </button>
                );
              })}

              {/* Tag Pills */}
              {filters.tags.map((tag) => {
                const option = tags.find((t) => t.value === tag);
                return (
                  <button
                    key={tag}
                    onClick={() =>
                      utils.updateFilter(
                        'tags',
                        filters.tags.filter((t) => t !== tag)
                      )
                    }
                    className="flex items-center gap-2 px-3 py-1 rounded transition-colors hover:opacity-80"
                    style={{
                      backgroundColor: 'var(--secondary)',
                      color: 'var(--secondary-foreground)',
                      border: 'none',
                      borderRadius: 'var(--radius)',
                      fontFamily: 'Manrope, sans-serif',
                      fontSize: 'var(--text-small)',
                      cursor: 'pointer',
                    }}
                  >
                    {option?.label || tag}
                    <X className="w-3 h-3" />
                  </button>
                );
              })}

              {/* Price Range */}
              {(filters.priceRange[0] !== 0 || filters.priceRange[1] !== 10000) && (
                <button
                  onClick={() => removeFilter('priceRange')}
                  className="flex items-center gap-2 px-3 py-1 rounded transition-colors hover:opacity-80"
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
                  Price: R {filters.priceRange[0].toLocaleString()} - R{' '}
                  {filters.priceRange[1].toLocaleString()}
                  <X className="w-3 h-3" />
                </button>
              )}

              {/* Date Range */}
              {filters.dateRange.from && filters.dateRange.to && (
                <button
                  onClick={() => removeFilter('dateRange')}
                  className="flex items-center gap-2 px-3 py-1 rounded transition-colors hover:opacity-80"
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
                  {filters.dateRange.from.toLocaleDateString()} -{' '}
                  {filters.dateRange.to.toLocaleDateString()}
                  <X className="w-3 h-3" />
                </button>
              )}
            </div>
          </div>
        )}

        {/* Results */}
        <div
          className="p-8 rounded border"
          style={{
            backgroundColor: 'var(--card)',
            borderColor: 'var(--border)',
            borderRadius: 'var(--radius-lg)',
          }}
        >
          <p
            className="text-center"
            style={{
              fontFamily: 'Manrope, sans-serif',
              fontSize: 'var(--text-lg)',
              color: 'var(--muted-foreground)',
            }}
          >
            Results will appear here based on active filters.
          </p>
          <p
            className="text-center mt-4"
            style={{
              fontFamily: 'Manrope, sans-serif',
              fontSize: 'var(--text-base)',
              color: 'var(--muted-foreground)',
            }}
          >
            Filter count: {utils.getFilterCount()} | URL synced: ✅
          </p>
        </div>
      </div>
    </div>
  );
}

/**
 * WordPress Block Pattern Registration
 * 
 * Pattern slug: lsx-design/filters/advanced-filter-example
 * Category: filters
 */
