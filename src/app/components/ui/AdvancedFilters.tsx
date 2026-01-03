/**
 * Advanced Filters Component
 * 
 * Production-grade filtering system with:
 * - Multi-select filters
 * - Price range sliders
 * - Search input
 * - Active filter badges
 * - Clear all functionality
 * 
 * Design Token Compliance:
 * - Typography: var(--text-*) only
 * - Colors: var(--*) semantic roles
 * - Spacing: Tailwind classes only
 * - Fonts: Lexend (headings), Manrope (body)
 * 
 * @example
 * <AdvancedFilters
 *   filters={filters}
 *   activeFilters={activeFilters}
 *   onFilterChange={handleFilterChange}
 *   onClearAll={handleClearAll}
 * />
 */

import { useState } from 'react';
import { Search, X, ChevronDown, ChevronUp, SlidersHorizontal } from 'lucide-react';
import { Button } from '../blocks/design/Buttons';

export interface FilterOption {
  id: string;
  label: string;
  count?: number;
}

export interface FilterGroup {
  id: string;
  label: string;
  type: 'checkbox' | 'radio' | 'range' | 'search';
  options?: FilterOption[];
  min?: number;
  max?: number;
  value?: string | string[] | [number, number];
}

export interface AdvancedFiltersProps {
  /** Filter groups configuration */
  filters: FilterGroup[];
  /** Active filters state */
  activeFilters: Record<string, any>;
  /** Filter change handler */
  onFilterChange: (filterId: string, value: any) => void;
  /** Clear all filters */
  onClearAll: () => void;
  /** Show search input */
  showSearch?: boolean;
  /** Search placeholder */
  searchPlaceholder?: string;
  /** Mobile variant */
  isMobile?: boolean;
}

export function AdvancedFilters({
  filters,
  activeFilters,
  onFilterChange,
  onClearAll,
  showSearch = true,
  searchPlaceholder = 'Search...',
  isMobile = false,
}: AdvancedFiltersProps) {
  const [expandedGroups, setExpandedGroups] = useState<Set<string>>(
    new Set(filters.map(f => f.id))
  );
  const [searchQuery, setSearchQuery] = useState('');

  const toggleGroup = (groupId: string) => {
    setExpandedGroups(prev => {
      const next = new Set(prev);
      if (next.has(groupId)) {
        next.delete(groupId);
      } else {
        next.add(groupId);
      }
      return next;
    });
  };

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    onFilterChange('search', value);
  };

  const getActiveFilterCount = () => {
    return Object.keys(activeFilters).filter(key => {
      const value = activeFilters[key];
      if (Array.isArray(value)) return value.length > 0;
      if (typeof value === 'string') return value !== '';
      return value !== null && value !== undefined;
    }).length;
  };

  const activeCount = getActiveFilterCount();

  return (
    <div
      className={isMobile ? 'p-6' : 'p-8'}
      style={{
        backgroundColor: 'var(--card)',
        border: '1px solid var(--border-soft)',
        borderRadius: 'var(--radius-xl)',
        boxShadow: 'var(--shadow-md)',
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <SlidersHorizontal
            size={24}
            style={{ color: 'var(--primary)' }}
          />
          <h3
            style={{
              fontFamily: 'Lexend, sans-serif',
              fontSize: 'var(--text-h4)',
              fontWeight: 'var(--font-weight-semibold)',
              color: 'var(--foreground)',
              margin: 0,
            }}
          >
            Filters
          </h3>
          {activeCount > 0 && (
            <span
              className="px-2 py-1"
              style={{
                fontFamily: 'Lexend, sans-serif',
                fontSize: 'var(--text-small)',
                fontWeight: 'var(--font-weight-medium)',
                backgroundColor: 'var(--primary)',
                color: 'var(--primary-foreground)',
                borderRadius: 'var(--radius)',
              }}
            >
              {activeCount}
            </span>
          )}
        </div>

        {activeCount > 0 && (
          <button
            onClick={onClearAll}
            style={{
              fontFamily: 'Lexend, sans-serif',
              fontSize: 'var(--text-small)',
              fontWeight: 'var(--font-weight-medium)',
              color: 'var(--destructive)',
              textDecoration: 'underline',
              background: 'none',
              border: 'none',
              padding: 0,
              cursor: 'pointer',
              transition: 'opacity 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = '0.7';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = '1';
            }}
          >
            Clear all
          </button>
        )}
      </div>

      {/* Search Input */}
      {showSearch && (
        <div className="mb-6">
          <div
            className="flex items-center gap-3 px-4 py-3"
            style={{
              backgroundColor: 'var(--input-background)',
              border: '1px solid var(--border-soft)',
              borderRadius: 'var(--radius-lg)',
              transition: 'all 0.2s ease',
            }}
          >
            <Search
              size={20}
              style={{ color: 'var(--muted-foreground)' }}
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
              placeholder={searchPlaceholder}
              style={{
                fontFamily: 'Lexend, sans-serif',
                fontSize: 'var(--text-base)',
                color: 'var(--foreground)',
                background: 'none',
                border: 'none',
                outline: 'none',
                width: '100%',
              }}
            />
            {searchQuery && (
              <button
                onClick={() => handleSearchChange('')}
                style={{
                  background: 'none',
                  border: 'none',
                  padding: 0,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <X
                  size={20}
                  style={{
                    color: 'var(--muted-foreground)',
                    transition: 'color 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--foreground)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--muted-foreground)';
                  }}
                />
              </button>
            )}
          </div>
        </div>
      )}

      {/* Filter Groups */}
      <div className="space-y-6">
        {filters.map((group) => (
          <div key={group.id}>
            {/* Group Header */}
            <button
              onClick={() => toggleGroup(group.id)}
              className="flex items-center justify-between w-full mb-3"
              style={{
                background: 'none',
                border: 'none',
                padding: 0,
                cursor: 'pointer',
              }}
            >
              <h4
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-base)',
                  fontWeight: 'var(--font-weight-semibold)',
                  color: 'var(--foreground)',
                  margin: 0,
                }}
              >
                {group.label}
              </h4>
              {expandedGroups.has(group.id) ? (
                <ChevronUp size={20} style={{ color: 'var(--muted-foreground)' }} />
              ) : (
                <ChevronDown size={20} style={{ color: 'var(--muted-foreground)' }} />
              )}
            </button>

            {/* Group Content */}
            {expandedGroups.has(group.id) && (
              <div className="space-y-2">
                {group.type === 'checkbox' && group.options && (
                  <CheckboxFilterGroup
                    group={group}
                    activeFilters={activeFilters}
                    onFilterChange={onFilterChange}
                  />
                )}

                {group.type === 'radio' && group.options && (
                  <RadioFilterGroup
                    group={group}
                    activeFilters={activeFilters}
                    onFilterChange={onFilterChange}
                  />
                )}

                {group.type === 'range' && (
                  <RangeFilterGroup
                    group={group}
                    activeFilters={activeFilters}
                    onFilterChange={onFilterChange}
                  />
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Active Filters */}
      {activeCount > 0 && (
        <div className="mt-6 pt-6" style={{ borderTop: '1px solid var(--border-extra-soft)' }}>
          <p
            className="mb-3"
            style={{
              fontFamily: 'Lexend, sans-serif',
              fontSize: 'var(--text-small)',
              fontWeight: 'var(--font-weight-semibold)',
              color: 'var(--muted-foreground)',
              margin: 0,
            }}
          >
            Active Filters
          </p>
          <div className="flex flex-wrap gap-2">
            {Object.entries(activeFilters).map(([key, value]) => {
              if (!value || (Array.isArray(value) && value.length === 0)) return null;

              const displayValue = Array.isArray(value) 
                ? value.join(', ') 
                : String(value);

              return (
                <button
                  key={key}
                  onClick={() => onFilterChange(key, null)}
                  className="flex items-center gap-2 px-3 py-2"
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-small)',
                    fontWeight: 'var(--font-weight-medium)',
                    color: 'var(--foreground)',
                    backgroundColor: 'var(--muted)',
                    border: '1px solid var(--border-soft)',
                    borderRadius: 'var(--radius-lg)',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--accent)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--muted)';
                  }}
                >
                  <span>{displayValue}</span>
                  <X size={14} />
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

/**
 * Checkbox Filter Group
 */
function CheckboxFilterGroup({
  group,
  activeFilters,
  onFilterChange,
}: {
  group: FilterGroup;
  activeFilters: Record<string, any>;
  onFilterChange: (filterId: string, value: any) => void;
}) {
  const selectedValues = activeFilters[group.id] || [];

  const handleToggle = (optionId: string) => {
    const newValues = selectedValues.includes(optionId)
      ? selectedValues.filter((id: string) => id !== optionId)
      : [...selectedValues, optionId];

    onFilterChange(group.id, newValues);
  };

  return (
    <>
      {group.options?.map((option) => (
        <label
          key={option.id}
          className="flex items-center gap-3 py-2 cursor-pointer"
          style={{
            transition: 'background-color 0.2s ease',
          }}
        >
          <input
            type="checkbox"
            checked={selectedValues.includes(option.id)}
            onChange={() => handleToggle(option.id)}
            style={{
              width: '18px',
              height: '18px',
              cursor: 'pointer',
              accentColor: 'var(--primary)',
            }}
          />
          <span
            style={{
              fontFamily: 'Lexend, sans-serif',
              fontSize: 'var(--text-base)',
              color: 'var(--foreground)',
              flex: 1,
            }}
          >
            {option.label}
          </span>
          {option.count !== undefined && (
            <span
              style={{
                fontFamily: 'Manrope, sans-serif',
                fontSize: 'var(--text-small)',
                color: 'var(--muted-foreground)',
              }}
            >
              ({option.count})
            </span>
          )}
        </label>
      ))}
    </>
  );
}

/**
 * Radio Filter Group
 */
function RadioFilterGroup({
  group,
  activeFilters,
  onFilterChange,
}: {
  group: FilterGroup;
  activeFilters: Record<string, any>;
  onFilterChange: (filterId: string, value: any) => void;
}) {
  const selectedValue = activeFilters[group.id];

  return (
    <>
      {group.options?.map((option) => (
        <label
          key={option.id}
          className="flex items-center gap-3 py-2 cursor-pointer"
        >
          <input
            type="radio"
            name={group.id}
            checked={selectedValue === option.id}
            onChange={() => onFilterChange(group.id, option.id)}
            style={{
              width: '18px',
              height: '18px',
              cursor: 'pointer',
              accentColor: 'var(--primary)',
            }}
          />
          <span
            style={{
              fontFamily: 'Lexend, sans-serif',
              fontSize: 'var(--text-base)',
              color: 'var(--foreground)',
              flex: 1,
            }}
          >
            {option.label}
          </span>
          {option.count !== undefined && (
            <span
              style={{
                fontFamily: 'Manrope, sans-serif',
                fontSize: 'var(--text-small)',
                color: 'var(--muted-foreground)',
              }}
            >
              ({option.count})
            </span>
          )}
        </label>
      ))}
    </>
  );
}

/**
 * Range Filter Group (Price slider)
 */
function RangeFilterGroup({
  group,
  activeFilters,
  onFilterChange,
}: {
  group: FilterGroup;
  activeFilters: Record<string, any>;
  onFilterChange: (filterId: string, value: any) => void;
}) {
  const [min, max] = activeFilters[group.id] || [group.min || 0, group.max || 1000];

  const handleMinChange = (value: number) => {
    onFilterChange(group.id, [value, max]);
  };

  const handleMaxChange = (value: number) => {
    onFilterChange(group.id, [min, value]);
  };

  return (
    <div className="space-y-4">
      {/* Value Display */}
      <div className="flex items-center justify-between">
        <span
          style={{
            fontFamily: 'Lexend, sans-serif',
            fontSize: 'var(--text-base)',
            fontWeight: 'var(--font-weight-medium)',
            color: 'var(--foreground)',
          }}
        >
          ${min.toLocaleString()}
        </span>
        <span
          style={{
            fontFamily: 'Manrope, sans-serif',
            fontSize: 'var(--text-small)',
            color: 'var(--muted-foreground)',
          }}
        >
          to
        </span>
        <span
          style={{
            fontFamily: 'Lexend, sans-serif',
            fontSize: 'var(--text-base)',
            fontWeight: 'var(--font-weight-medium)',
            color: 'var(--foreground)',
          }}
        >
          ${max.toLocaleString()}
        </span>
      </div>

      {/* Sliders */}
      <div className="space-y-3">
        <input
          type="range"
          min={group.min || 0}
          max={group.max || 1000}
          value={min}
          onChange={(e) => handleMinChange(Number(e.target.value))}
          style={{
            width: '100%',
            accentColor: 'var(--primary)',
          }}
        />
        <input
          type="range"
          min={group.min || 0}
          max={group.max || 1000}
          value={max}
          onChange={(e) => handleMaxChange(Number(e.target.value))}
          style={{
            width: '100%',
            accentColor: 'var(--primary)',
          }}
        />
      </div>
    </div>
  );
}
