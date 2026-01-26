/**
 * Search Form Component
 * 
 * Production-grade search form with advanced filtering.
 * 
 * Features:
 * - Text search with suggestions
 * - Category filter
 * - Date range filter
 * - Sort options
 * - Clear all filters
 * - Keyboard shortcuts (Ctrl+K)
 * - Search history (localStorage)
 * - Mobile-responsive
 * 
 * Design Token Compliance:
 * - Typography: var(--text-*) only
 * - Colors: var(--*) semantic roles
 * - Spacing: Tailwind classes only
 * - Fonts: Lexend (headings), Manrope (body)
 * 
 * @example
 * <SearchForm
 *   onSearch={handleSearch}
 *   categories={['Blog', 'Portfolio', 'Services']}
 * />
 */

import { useState, useEffect, useRef, FormEvent } from 'react';
import { Search, X, Filter, Calendar, SlidersHorizontal, Clock, TrendingUp } from 'lucide-react';
import { Button } from '../blocks/design/Buttons';

export interface SearchFilters {
  query: string;
  category?: string;
  dateRange?: {
    from?: string;
    to?: string;
  };
  sortBy?: 'relevance' | 'date' | 'title';
}

export interface SearchFormProps {
  /** Search handler */
  onSearch: (filters: SearchFilters) => void;
  /** Categories for filter */
  categories?: string[];
  /** Show advanced filters */
  showAdvancedFilters?: boolean;
  /** Placeholder text */
  placeholder?: string;
  /** Initial query */
  initialQuery?: string;
  /** Show search suggestions */
  showSuggestions?: boolean;
  /** Search suggestions */
  suggestions?: string[];
}

export function SearchForm({
  onSearch,
  categories = [],
  showAdvancedFilters = false,
  placeholder = 'Search...',
  initialQuery = '',
  showSuggestions = true,
  suggestions = [],
}: SearchFormProps) {
  const [query, setQuery] = useState(initialQuery);
  const [category, setCategory] = useState<string>('');
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [sortBy, setSortBy] = useState<'relevance' | 'date' | 'title'>('relevance');
  const [showFilters, setShowFilters] = useState(false);
  const [showSuggestionsList, setShowSuggestionsList] = useState(false);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);

  const searchInputRef = useRef<HTMLInputElement>(null);
  const suggestionsRef = useRef<HTMLDivElement>(null);

  // Load recent searches from localStorage
  useEffect(() => {
    const stored = localStorage.getItem('lsx-recent-searches');
    if (stored) {
      try {
        setRecentSearches(JSON.parse(stored));
      } catch (e) {
        console.error('Failed to parse recent searches');
      }
    }
  }, []);

  // Keyboard shortcut (Ctrl+K or Cmd+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        searchInputRef.current?.focus();
      }

      // Escape to close suggestions
      if (e.key === 'Escape') {
        setShowSuggestionsList(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Click outside to close suggestions
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        suggestionsRef.current &&
        !suggestionsRef.current.contains(e.target as Node) &&
        !searchInputRef.current?.contains(e.target as Node)
      ) {
        setShowSuggestionsList(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Save recent search
  const saveRecentSearch = (searchQuery: string) => {
    if (!searchQuery.trim()) return;

    const updated = [
      searchQuery,
      ...recentSearches.filter((s) => s !== searchQuery),
    ].slice(0, 5); // Keep max 5 recent searches

    setRecentSearches(updated);
    localStorage.setItem('lsx-recent-searches', JSON.stringify(updated));
  };

  // Clear recent searches
  const clearRecentSearches = () => {
    setRecentSearches([]);
    localStorage.removeItem('lsx-recent-searches');
  };

  // Handle search submit
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const filters: SearchFilters = {
      query,
      category: category || undefined,
      dateRange:
        dateFrom || dateTo
          ? {
              from: dateFrom || undefined,
              to: dateTo || undefined,
            }
          : undefined,
      sortBy,
    };

    saveRecentSearch(query);
    setShowSuggestionsList(false);
    onSearch(filters);
  };

  // Clear all filters
  const clearFilters = () => {
    setQuery('');
    setCategory('');
    setDateFrom('');
    setDateTo('');
    setSortBy('relevance');
  };

  // Filter suggestions based on query
  const filteredSuggestions = showSuggestions
    ? suggestions.filter((s) => s.toLowerCase().includes(query.toLowerCase()))
    : [];

  const hasFilters = category || dateFrom || dateTo || sortBy !== 'relevance';

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Main Search Input */}
      <div className="relative">
        <div className="relative">
          <div
            className="absolute left-4 top-1/2"
            style={{
              transform: 'translateY(-50%)',
              color: 'var(--muted-foreground)',
              pointerEvents: 'none',
            }}
          >
            <Search size={20} />
          </div>

          <input
            ref={searchInputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              if (e.target.value) {
                setShowSuggestionsList(true);
              }
            }}
            onFocus={() => {
              if (query || recentSearches.length > 0) {
                setShowSuggestionsList(true);
              }
            }}
            placeholder={placeholder}
            style={{
              width: '100%',
              padding: '14px 120px 14px 48px',
              fontFamily: 'var(--font-primary)',
              fontSize: 'var(--text-base)',
              color: 'var(--foreground)',
              backgroundColor: 'var(--background)',
              border: '2px solid var(--border)',
              borderRadius: 'var(--radius-lg)',
              outline: 'none',
              transition: 'all 0.2s ease',
            }}
            onFocus={(e) => {
              e.target.style.borderColor = 'var(--primary)';
              e.target.style.boxShadow = 'var(--shadow-md)';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = 'var(--border)';
              e.target.style.boxShadow = 'none';
            }}
          />

          {/* Clear button */}
          {query && (
            <button
              type="button"
              onClick={() => {
                setQuery('');
                searchInputRef.current?.focus();
              }}
              className="absolute right-20 top-1/2"
              style={{
                transform: 'translateY(-50%)',
                width: '32px',
                height: '32px',
                backgroundColor: 'transparent',
                color: 'var(--muted-foreground)',
                border: 'none',
                borderRadius: 'var(--radius)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--muted)';
                e.currentTarget.style.color = 'var(--foreground)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = 'var(--muted-foreground)';
              }}
              aria-label="Clear search"
            >
              <X size={16} />
            </button>
          )}

          {/* Keyboard shortcut hint */}
          {!query && (
            <div
              className="absolute right-4 top-1/2 px-2 py-1"
              style={{
                transform: 'translateY(-50%)',
                fontFamily: 'var(--font-secondary)',
                fontSize: 'var(--text-small)',
                color: 'var(--muted-foreground)',
                backgroundColor: 'var(--muted)',
                borderRadius: 'var(--radius)',
                pointerEvents: 'none',
              }}
            >
              ⌘K
            </div>
          )}

          {/* Search button */}
          {query && (
            <Button
              type="submit"
              variant="default"
              size="sm"
              className="absolute right-2 top-1/2"
              style={{
                transform: 'translateY(-50%)',
              }}
            >
              Search
            </Button>
          )}
        </div>

        {/* Suggestions Dropdown */}
        {showSuggestionsList && (query || recentSearches.length > 0) && (
          <div
            ref={suggestionsRef}
            className="absolute top-full left-0 right-0 mt-2 p-2 space-y-1"
            style={{
              backgroundColor: 'var(--card)',
              border: '1px solid var(--border-soft)',
              borderRadius: 'var(--radius-lg)',
              boxShadow: 'var(--shadow-lg)',
              maxHeight: '400px',
              overflowY: 'auto',
              zIndex: 50,
            }}
          >
            {/* Recent Searches */}
            {!query && recentSearches.length > 0 && (
              <>
                <div className="flex items-center justify-between px-3 py-2">
                  <span
                    style={{
                      fontFamily: 'var(--font-primary)',
                      fontSize: 'var(--text-small)',
                      fontWeight: 'var(--font-weight-semibold)',
                      color: 'var(--muted-foreground)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                    }}
                  >
                    Recent Searches
                  </span>

                  <button
                    type="button"
                    onClick={clearRecentSearches}
                    style={{
                      fontFamily: 'var(--font-secondary)',
                      fontSize: 'var(--text-small)',
                      color: 'var(--primary)',
                      backgroundColor: 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                    }}
                  >
                    Clear
                  </button>
                </div>

                {recentSearches.map((search, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => {
                      setQuery(search);
                      setShowSuggestionsList(false);
                      // Auto-submit
                      setTimeout(() => {
                        onSearch({ query: search, sortBy });
                      }, 0);
                    }}
                    className="flex items-center gap-3 w-full px-3 py-2"
                    style={{
                      fontFamily: 'var(--font-primary)',
                      fontSize: 'var(--text-base)',
                      color: 'var(--foreground)',
                      backgroundColor: 'transparent',
                      border: 'none',
                      borderRadius: 'var(--radius)',
                      cursor: 'pointer',
                      textAlign: 'left',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'var(--muted)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }}
                  >
                    <Clock size={16} style={{ color: 'var(--muted-foreground)' }} />
                    {search}
                  </button>
                ))}
              </>
            )}

            {/* Suggestions */}
            {query && filteredSuggestions.length > 0 && (
              <>
                <div className="px-3 py-2">
                  <span
                    style={{
                      fontFamily: 'var(--font-primary)',
                      fontSize: 'var(--text-small)',
                      fontWeight: 'var(--font-weight-semibold)',
                      color: 'var(--muted-foreground)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                    }}
                  >
                    Suggestions
                  </span>
                </div>

                {filteredSuggestions.map((suggestion, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => {
                      setQuery(suggestion);
                      setShowSuggestionsList(false);
                      // Auto-submit
                      setTimeout(() => {
                        onSearch({ query: suggestion, sortBy });
                      }, 0);
                    }}
                    className="flex items-center gap-3 w-full px-3 py-2"
                    style={{
                      fontFamily: 'var(--font-primary)',
                      fontSize: 'var(--text-base)',
                      color: 'var(--foreground)',
                      backgroundColor: 'transparent',
                      border: 'none',
                      borderRadius: 'var(--radius)',
                      cursor: 'pointer',
                      textAlign: 'left',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'var(--muted)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }}
                  >
                    <TrendingUp size={16} style={{ color: 'var(--muted-foreground)' }} />
                    {suggestion}
                  </button>
                ))}
              </>
            )}
          </div>
        )}
      </div>

      {/* Advanced Filters Toggle */}
      {showAdvancedFilters && (
        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 px-3 py-2"
            style={{
              fontFamily: 'var(--font-primary)',
              fontSize: 'var(--text-base)',
              fontWeight: 'var(--font-weight-medium)',
              color: showFilters ? 'var(--primary)' : 'var(--foreground)',
              backgroundColor: showFilters ? 'var(--primary-soft)' : 'transparent',
              border: `1px solid ${showFilters ? 'var(--primary)' : 'var(--border)'}`,
              borderRadius: 'var(--radius-lg)',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              if (!showFilters) {
                e.currentTarget.style.backgroundColor = 'var(--muted)';
              }
            }}
            onMouseLeave={(e) => {
              if (!showFilters) {
                e.currentTarget.style.backgroundColor = 'transparent';
              }
            }}
          >
            <SlidersHorizontal size={18} />
            Advanced Filters
            {hasFilters && (
              <span
                className="flex items-center justify-center"
                style={{
                  width: '20px',
                  height: '20px',
                  fontFamily: 'var(--font-primary)',
                  fontSize: 'var(--text-small)',
                  fontWeight: 'var(--font-weight-bold)',
                  backgroundColor: 'var(--primary)',
                  color: 'var(--primary-foreground)',
                  borderRadius: 'var(--radius-full)',
                }}
              >
                {[category, dateFrom, dateTo, sortBy !== 'relevance'].filter(Boolean).length}
              </span>
            )}
          </button>

          {hasFilters && (
            <button
              type="button"
              onClick={clearFilters}
              style={{
                fontFamily: 'var(--font-primary)',
                fontSize: 'var(--text-base)',
                color: 'var(--destructive)',
                backgroundColor: 'transparent',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              Clear all
            </button>
          )}
        </div>
      )}

      {/* Advanced Filters */}
      {showAdvancedFilters && showFilters && (
        <div
          className="p-4 space-y-4"
          style={{
            backgroundColor: 'var(--muted)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-lg)',
          }}
        >
          {/* Category Filter */}
          {categories.length > 0 && (
            <div>
              <label
                htmlFor="category"
                style={{
                  display: 'block',
                  fontFamily: 'var(--font-primary)',
                  fontSize: 'var(--text-base)',
                  fontWeight: 'var(--font-weight-medium)',
                  color: 'var(--foreground)',
                  marginBottom: '8px',
                }}
              >
                Category
              </label>

              <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  fontFamily: 'var(--font-primary)',
                  fontSize: 'var(--text-base)',
                  color: 'var(--foreground)',
                  backgroundColor: 'var(--background)',
                  border: '2px solid var(--border)',
                  borderRadius: 'var(--radius-lg)',
                  cursor: 'pointer',
                }}
              >
                <option value="">All Categories</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Date Range */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="dateFrom"
                style={{
                  display: 'block',
                  fontFamily: 'var(--font-primary)',
                  fontSize: 'var(--text-base)',
                  fontWeight: 'var(--font-weight-medium)',
                  color: 'var(--foreground)',
                  marginBottom: '8px',
                }}
              >
                From Date
              </label>

              <input
                type="date"
                id="dateFrom"
                value={dateFrom}
                onChange={(e) => setDateFrom(e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  fontFamily: 'var(--font-primary)',
                  fontSize: 'var(--text-base)',
                  color: 'var(--foreground)',
                  backgroundColor: 'var(--background)',
                  border: '2px solid var(--border)',
                  borderRadius: 'var(--radius-lg)',
                  cursor: 'pointer',
                }}
              />
            </div>

            <div>
              <label
                htmlFor="dateTo"
                style={{
                  display: 'block',
                  fontFamily: 'var(--font-primary)',
                  fontSize: 'var(--text-base)',
                  fontWeight: 'var(--font-weight-medium)',
                  color: 'var(--foreground)',
                  marginBottom: '8px',
                }}
              >
                To Date
              </label>

              <input
                type="date"
                id="dateTo"
                value={dateTo}
                onChange={(e) => setDateTo(e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  fontFamily: 'var(--font-primary)',
                  fontSize: 'var(--text-base)',
                  color: 'var(--foreground)',
                  backgroundColor: 'var(--background)',
                  border: '2px solid var(--border)',
                  borderRadius: 'var(--radius-lg)',
                  cursor: 'pointer',
                }}
              />
            </div>
          </div>

          {/* Sort By */}
          <div>
            <label
              htmlFor="sortBy"
              style={{
                display: 'block',
                fontFamily: 'var(--font-primary)',
                fontSize: 'var(--text-base)',
                fontWeight: 'var(--font-weight-medium)',
                color: 'var(--foreground)',
                marginBottom: '8px',
              }}
            >
              Sort By
            </label>

            <select
              id="sortBy"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              style={{
                width: '100%',
                padding: '12px 16px',
                fontFamily: 'var(--font-primary)',
                fontSize: 'var(--text-base)',
                color: 'var(--foreground)',
                backgroundColor: 'var(--background)',
                border: '2px solid var(--border)',
                borderRadius: 'var(--radius-lg)',
                cursor: 'pointer',
              }}
            >
              <option value="relevance">Relevance</option>
              <option value="date">Date (Newest First)</option>
              <option value="title">Title (A-Z)</option>
            </select>
          </div>
        </div>
      )}
    </form>
  );
}
