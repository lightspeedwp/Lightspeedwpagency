/**
 * Taxonomy Filter Pattern
 * 
 * Filter UI for taxonomy terms (categories, tags, post formats).
 * Maps to WordPress pattern: lsx-design/nav/taxonomy-filter
 * 
 * **Design Token Compliance:**
 * - Uses /src/styles/patterns/taxonomy-filter.css
 * - 100% CSS variables
 * - BEM naming
 */

import { useState } from 'react';
import { Funnel as Filter, X, Sliders as SlidersHorizontal } from '@phosphor-icons/react';

export interface TaxonomyItem {
  slug: string;
  name: string;
  count?: number;
}

export interface TaxonomyFilterProps {
  /** Available categories/terms to filter by */
  categories: TaxonomyItem[];
  /** Currently selected category slugs */
  selectedCategories: string[];
  /** Toggle a category on/off */
  onCategoryToggle: (slug: string) => void;
  /** Clear all selected categories */
  onClearAll?: () => void;
  /** Total result count after filtering */
  resultCount?: number;
  /** Sort value */
  sortValue?: string;
  /** Sort change handler */
  onSortChange?: (value: string) => void;
  /** Sort options */
  sortOptions?: { label: string; value: string }[];
  /** Label for the filter section */
  label?: string;
  /** Whether to show the "All" chip */
  showAll?: boolean;
}

export function TaxonomyFilter({
  categories,
  selectedCategories,
  onCategoryToggle,
  onClearAll,
  resultCount,
  sortValue = 'recent',
  onSortChange,
  sortOptions = [
    { label: 'Most Recent', value: 'recent' },
    { label: 'Popular', value: 'popular' },
    { label: 'Featured', value: 'featured' }
  ],
  label = 'Filter by Category',
  showAll = true
}: TaxonomyFilterProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSelections, setMobileSelections] = useState<string[]>([]);

  const isAllSelected = selectedCategories.length === 0;

  const handleAllClick = () => {
    if (onClearAll) onClearAll();
  };

  const openMobile = () => {
    setMobileSelections([...selectedCategories]);
    setMobileOpen(true);
  };

  const applyMobile = () => {
    if (onClearAll) onClearAll();
    mobileSelections.forEach(slug => onCategoryToggle(slug));
    setMobileOpen(false);
  };

  const toggleMobileChip = (slug: string) => {
    setMobileSelections(prev =>
      prev.includes(slug) ? prev.filter(s => s !== slug) : [...prev, slug]
    );
  };

  return (
    <div className="taxonomy-filter">
      {/* Mobile trigger */}
      <button
        className="taxonomy-filter__mobile-trigger"
        onClick={openMobile}
        aria-label="Open filters"
      >
        <SlidersHorizontal size={18} />
        {label}
        {selectedCategories.length > 0 && (
          <span className="taxonomy-filter__chip-count">
            ({selectedCategories.length})
          </span>
        )}
      </button>

      {/* Desktop filters */}
      <div className="taxonomy-filter__desktop-filters">
        <div className="taxonomy-filter__row">
          {/* Chips area */}
          <div className="taxonomy-filter__chips-area">
            <div className="taxonomy-filter__chips" role="group" aria-label={label}>
              {showAll && (
                <button
                  className={`taxonomy-filter__chip ${isAllSelected ? 'taxonomy-filter__chip--active' : ''}`}
                  onClick={handleAllClick}
                  aria-pressed={isAllSelected}
                >
                  All
                </button>
              )}
              {categories.map(cat => (
                <button
                  key={cat.slug}
                  className={`taxonomy-filter__chip ${selectedCategories.includes(cat.slug) ? 'taxonomy-filter__chip--active' : ''}`}
                  onClick={() => onCategoryToggle(cat.slug)}
                  aria-pressed={selectedCategories.includes(cat.slug)}
                >
                  {cat.name}
                  {cat.count !== undefined && (
                    <span className="taxonomy-filter__chip-count">({cat.count})</span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Active filters panel */}
          {selectedCategories.length > 0 && (
            <div className="taxonomy-filter__active-panel">
              <div className="taxonomy-filter__active-label">Active Filters</div>
              <div className="taxonomy-filter__active-tags">
                {selectedCategories.map(slug => {
                  const cat = categories.find(c => c.slug === slug);
                  return (
                    <button
                      key={slug}
                      className="taxonomy-filter__active-tag"
                      onClick={() => onCategoryToggle(slug)}
                      aria-label={`Remove filter: ${cat?.name || slug}`}
                    >
                      {cat?.name || slug}
                      <X size={12} />
                    </button>
                  );
                })}
              </div>
              <button className="taxonomy-filter__clear-all" onClick={onClearAll}>
                Clear all
              </button>
            </div>
          )}
        </div>

        {/* Controls row */}
        <div className="taxonomy-filter__controls">
          {resultCount !== undefined && (
            <div className="taxonomy-filter__result-count">
              Number of results: <strong>{resultCount}</strong>
            </div>
          )}
          {onSortChange && (
            <div className="taxonomy-filter__sort">
              <span className="taxonomy-filter__sort-label">Sort by:</span>
              <select
                className="taxonomy-filter__sort-select"
                value={sortValue}
                onChange={e => onSortChange(e.target.value)}
                aria-label="Sort results"
              >
                {sortOptions.map(opt => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>
      </div>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="taxonomy-filter__mobile-overlay" role="dialog" aria-label="Filter options">
          <div className="taxonomy-filter__mobile-header">
            <h2 className="taxonomy-filter__mobile-title">{label}</h2>
            <button
              className="taxonomy-filter__mobile-close"
              onClick={() => setMobileOpen(false)}
              aria-label="Close filters"
            >
              <X size={24} />
            </button>
          </div>
          <div className="taxonomy-filter__mobile-body">
            <div className="taxonomy-filter__mobile-chips">
              {categories.map(cat => (
                <button
                  key={cat.slug}
                  className={`taxonomy-filter__mobile-chip ${mobileSelections.includes(cat.slug) ? 'taxonomy-filter__mobile-chip--active' : ''}`}
                  onClick={() => toggleMobileChip(cat.slug)}
                  aria-pressed={mobileSelections.includes(cat.slug)}
                >
                  {cat.name}
                  {cat.count !== undefined && (
                    <span className="taxonomy-filter__chip-count">({cat.count})</span>
                  )}
                </button>
              ))}
            </div>
          </div>
          <div className="taxonomy-filter__mobile-footer">
            <button
              className="taxonomy-filter__mobile-clear"
              onClick={() => setMobileSelections([])}
            >
              Clear
            </button>
            <button
              className="taxonomy-filter__mobile-apply"
              onClick={applyMobile}
            >
              Apply Filters
            </button>
          </div>
        </div>
      )}
    </div>
  );
}