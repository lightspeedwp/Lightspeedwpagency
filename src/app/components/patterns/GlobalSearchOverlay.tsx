/**
 * Global Search Overlay
 *
 * WordPress Pattern: lsx-design/nav/global-search
 *
 * Full-screen search overlay with:
 * - Debounced live search results (300ms)
 * - Content-type quick filters
 * - Keyboard navigation (arrow keys, Enter, Escape)
 * - Neon glow focus effects
 * - Search term highlighting
 * - Recent searches (localStorage)
 * - Responsive (mobile full-screen, desktop centered modal)
 *
 * **Data Source:** /src/app/data/search.ts — Unified search index
 *
 * @see /src/styles/patterns/global-search.css — Styles
 * @see /src/app/data/search.ts — Search data
 */

import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { useNavigation } from '../../contexts/NavigationContext';
import {
  searchAllContent,
  getResultCountsByType,
  contentTypeLabels,
  type ContentType,
  type SearchResult,
} from '../../data/search';
import {
  Search,
  X,
  FileText,
  Folder,
  Video,
  Headphones,
  Globe,
  ArrowRight,
  Clock,
  CornerDownLeft,
} from 'lucide-react';
import '@/styles/patterns/global-search.css';

/* ═══════════════════════════════════════════
 * Constants
 * ═══════════════════════════════════════════ */

const CONTENT_TYPES: ContentType[] = ['blog', 'portfolio', 'video', 'podcast', 'page'];
const MAX_PREVIEW_RESULTS = 6;
const DEBOUNCE_MS = 300;
const RECENT_SEARCHES_KEY = 'lsx-recent-searches';
const MAX_RECENT = 5;

const contentTypeIcons: Record<ContentType, typeof FileText> = {
  blog: FileText,
  portfolio: Folder,
  video: Video,
  podcast: Headphones,
  page: Globe,
};

/* ═══════════════════════════════════════════
 * Helpers
 * ═══════════════════════════════════════════ */

/** Highlight query terms in text */
function highlightText(text: string, query: string): JSX.Element {
  if (!query.trim()) return <>{text}</>;

  const escapedQuery = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(`(${escapedQuery})`, 'gi');
  const parts = text.split(regex);

  return (
    <>
      {parts.map((part, i) =>
        regex.test(part) ? (
          <mark key={i} className="global-search__highlight">
            {part}
          </mark>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}

/** Recent searches persistence */
function getRecentSearches(): string[] {
  try {
    const raw = localStorage.getItem(RECENT_SEARCHES_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveRecentSearch(query: string) {
  try {
    const recent = getRecentSearches().filter(q => q !== query);
    recent.unshift(query);
    localStorage.setItem(
      RECENT_SEARCHES_KEY,
      JSON.stringify(recent.slice(0, MAX_RECENT))
    );
  } catch {
    // Silently fail if localStorage unavailable
  }
}

function clearRecentSearches() {
  try {
    localStorage.removeItem(RECENT_SEARCHES_KEY);
  } catch {
    // Silently fail
  }
}

/* ═══════════════════════════════════════════
 * Props
 * ═══════════════════════════════════════════ */

interface GlobalSearchOverlayProps {
  /** Whether the overlay is visible */
  isOpen: boolean;
  /** Callback to close the overlay */
  onClose: () => void;
  /** Optional initial query to populate */
  initialQuery?: string;
}

/* ═══════════════════════════════════════════
 * Component
 * ═══════════════════════════════════════════ */

export function GlobalSearchOverlay({
  isOpen,
  onClose,
  initialQuery = '',
}: GlobalSearchOverlayProps) {
  const { navigateTo } = useNavigation();
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  const [query, setQuery] = useState(initialQuery);
  const [debouncedQuery, setDebouncedQuery] = useState(initialQuery);
  const [activeTypes, setActiveTypes] = useState<ContentType[]>([]);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);

  // Debounce the query
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
    }, DEBOUNCE_MS);
    return () => clearTimeout(timer);
  }, [query]);

  // Load recent searches on open
  useEffect(() => {
    if (isOpen) {
      setRecentSearches(getRecentSearches());
      // Auto-focus input
      requestAnimationFrame(() => {
        inputRef.current?.focus();
      });
    } else {
      // Reset state when closing
      setQuery('');
      setDebouncedQuery('');
      setActiveTypes([]);
      setFocusedIndex(-1);
    }
  }, [isOpen]);

  // Search results
  const results = useMemo(() => {
    if (!debouncedQuery.trim()) return [];
    return searchAllContent({
      query: debouncedQuery,
      contentTypes: activeTypes,
      sort: 'relevance',
    }).slice(0, MAX_PREVIEW_RESULTS);
  }, [debouncedQuery, activeTypes]);

  // Type counts for filter badges
  const typeCounts = useMemo(() => {
    if (!debouncedQuery.trim()) return {} as Record<ContentType, number>;
    const allResults = searchAllContent({
      query: debouncedQuery,
      contentTypes: [],
      sort: 'relevance',
    });
    return getResultCountsByType(allResults);
  }, [debouncedQuery]);

  const totalResults = useMemo(() => {
    if (!debouncedQuery.trim()) return 0;
    return searchAllContent({
      query: debouncedQuery,
      contentTypes: activeTypes,
      sort: 'relevance',
    }).length;
  }, [debouncedQuery, activeTypes]);

  // Reset focused index when results change
  useEffect(() => {
    setFocusedIndex(-1);
  }, [debouncedQuery, activeTypes]);

  // Navigate to result
  const handleResultClick = useCallback(
    (result: SearchResult) => {
      saveRecentSearch(query);
      const path = result.url;
      const slug = path.startsWith('/') ? path.slice(1) : path;
      navigateTo(slug || 'front-page');
      onClose();
    },
    [query, navigateTo, onClose]
  );

  // Navigate to full search page
  const handleViewAll = useCallback(() => {
    if (query.trim()) {
      saveRecentSearch(query);
      navigateTo(`/search?q=${encodeURIComponent(query.trim())}`);
      onClose();
    }
  }, [query, navigateTo, onClose]);

  // Toggle content type filter
  const toggleType = useCallback((type: ContentType) => {
    setActiveTypes(prev =>
      prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]
    );
  }, []);

  // Use recent search
  const handleRecentClick = useCallback(
    (recentQuery: string) => {
      setQuery(recentQuery);
      setDebouncedQuery(recentQuery);
    },
    []
  );

  // Clear recent searches
  const handleClearRecent = useCallback(() => {
    clearRecentSearches();
    setRecentSearches([]);
  }, []);

  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          setFocusedIndex(prev => {
            const max = results.length - 1;
            return prev < max ? prev + 1 : 0;
          });
          break;
        case 'ArrowUp':
          e.preventDefault();
          setFocusedIndex(prev => {
            return prev > 0 ? prev - 1 : results.length - 1;
          });
          break;
        case 'Enter':
          e.preventDefault();
          if (focusedIndex >= 0 && focusedIndex < results.length) {
            handleResultClick(results[focusedIndex]);
          } else {
            handleViewAll();
          }
          break;
        case 'Escape':
          e.preventDefault();
          onClose();
          break;
      }
    },
    [results, focusedIndex, handleResultClick, handleViewAll, onClose]
  );

  // Scroll focused item into view
  useEffect(() => {
    if (focusedIndex >= 0 && resultsRef.current) {
      const items = resultsRef.current.querySelectorAll(
        '.global-search__result-item'
      );
      if (items[focusedIndex]) {
        items[focusedIndex].scrollIntoView({
          block: 'nearest',
          behavior: 'smooth',
        });
      }
    }
  }, [focusedIndex]);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const hasQuery = debouncedQuery.trim().length > 0;
  const showRecent = !hasQuery && recentSearches.length > 0;

  return (
    <div
      className="global-search-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Search"
      onKeyDown={handleKeyDown}
    >
      {/* Backdrop */}
      <div
        className="global-search-overlay__backdrop"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div className="global-search-overlay__panel">
        {/* Search Input */}
        <div className="global-search__input-area">
          <Search
            size={20}
            className={`global-search__input-icon ${
              hasQuery ? '' : 'global-search__input-icon--pulse'
            }`}
          />
          <input
            ref={inputRef}
            type="text"
            className="global-search__input"
            placeholder="Search pages, blog posts, portfolio, videos, podcasts..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            aria-label="Search all content"
            aria-autocomplete="list"
            aria-controls="global-search-results"
            aria-activedescendant={
              focusedIndex >= 0 ? `search-result-${focusedIndex}` : undefined
            }
          />
          <span className="global-search__kbd-hint">ESC</span>
          <button
            className="global-search__close"
            onClick={onClose}
            aria-label="Close search"
          >
            <X size={18} />
          </button>
        </div>

        {/* Quick Filters */}
        {hasQuery && (
          <div className="global-search__filters" role="group" aria-label="Filter by content type">
            {CONTENT_TYPES.map(type => {
              const Icon = contentTypeIcons[type];
              const count = typeCounts[type] || 0;
              return (
                <button
                  key={type}
                  className={`global-search__filter-chip ${
                    activeTypes.includes(type) ? 'global-search__filter-chip--active' : ''
                  }`}
                  onClick={() => toggleType(type)}
                  aria-pressed={activeTypes.includes(type)}
                  style={{ opacity: count === 0 && !activeTypes.includes(type) ? 0.4 : 1 }}
                >
                  <Icon size={12} />
                  {contentTypeLabels[type]}
                  <span>({count})</span>
                </button>
              );
            })}
          </div>
        )}

        {/* Results */}
        <div
          ref={resultsRef}
          className="global-search__results"
          id="global-search-results"
          role="listbox"
        >
          {/* Recent Searches */}
          {showRecent && (
            <>
              <div className="global-search__recent-header">
                <span className="global-search__recent-label">Recent Searches</span>
                <button
                  className="global-search__recent-clear"
                  onClick={handleClearRecent}
                >
                  Clear
                </button>
              </div>
              {recentSearches.map((recent, idx) => (
                <button
                  key={idx}
                  className="global-search__recent-item"
                  onClick={() => handleRecentClick(recent)}
                >
                  <Clock size={14} className="global-search__recent-icon" />
                  {recent}
                </button>
              ))}
            </>
          )}

          {/* Empty state (no query, no recent) */}
          {!hasQuery && !showRecent && (
            <div className="global-search__empty">
              <Search size={40} className="global-search__empty-icon" />
              <div className="global-search__empty-title">
                Search all content
              </div>
              <div className="global-search__empty-text">
                Search across blog posts, portfolio projects, videos, podcasts, and pages.
              </div>
            </div>
          )}

          {/* Search Results */}
          {hasQuery && results.length > 0 && (
            <>
              <div className="global-search__group-header">
                <span className="global-search__group-label">
                  {totalResults} result{totalResults !== 1 ? 's' : ''}
                </span>
              </div>

              {results.map((result, idx) => {
                const TypeIcon = contentTypeIcons[result.contentType];
                return (
                  <button
                    key={`${result.contentType}-${result.id}`}
                    id={`search-result-${idx}`}
                    className={`global-search__result-item ${
                      idx === focusedIndex ? 'global-search__result-item--focused' : ''
                    }`}
                    onClick={() => handleResultClick(result)}
                    role="option"
                    aria-selected={idx === focusedIndex}
                    onMouseEnter={() => setFocusedIndex(idx)}
                  >
                    {/* Icon */}
                    <div className="global-search__result-icon">
                      <TypeIcon size={18} />
                    </div>

                    {/* Content */}
                    <div className="global-search__result-content">
                      <div className="global-search__result-title">
                        {highlightText(result.title, debouncedQuery)}
                      </div>
                      {result.excerpt && (
                        <div className="global-search__result-excerpt">
                          {highlightText(
                            result.excerpt.length > 120
                              ? result.excerpt.slice(0, 120) + '...'
                              : result.excerpt,
                            debouncedQuery
                          )}
                        </div>
                      )}
                      <div className="global-search__result-meta">
                        <span
                          style={{ color: `var(--primary)` }}
                        >
                          {contentTypeLabels[result.contentType]}
                        </span>
                        {result.meta?.readingTime && (
                          <span>{result.meta.readingTime}</span>
                        )}
                        {result.meta?.duration && (
                          <span>{result.meta.duration}</span>
                        )}
                        {result.date && (
                          <span>
                            {new Date(result.date).toLocaleDateString('en-GB', {
                              day: 'numeric',
                              month: 'short',
                              year: 'numeric',
                            })}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Arrow */}
                    <div className="global-search__result-arrow">
                      <ArrowRight size={16} />
                    </div>
                  </button>
                );
              })}
            </>
          )}

          {/* No results */}
          {hasQuery && results.length === 0 && (
            <div className="global-search__empty">
              <Search size={40} className="global-search__empty-icon" />
              <div className="global-search__empty-title">No results found</div>
              <div className="global-search__empty-text">
                We couldn&apos;t find any content matching &quot;{debouncedQuery}
                &quot;. Try a different search term.
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="global-search__footer">
          <div className="global-search__footer-hints">
            <span className="global-search__footer-hint">
              <kbd className="global-search__footer-kbd">
                <CornerDownLeft size={10} />
              </kbd>
              Select
            </span>
            <span className="global-search__footer-hint">
              <kbd className="global-search__footer-kbd">↑</kbd>
              <kbd className="global-search__footer-kbd">↓</kbd>
              Navigate
            </span>
            <span className="global-search__footer-hint">
              <kbd className="global-search__footer-kbd">ESC</kbd>
              Close
            </span>
          </div>
          {hasQuery && totalResults > MAX_PREVIEW_RESULTS && (
            <button
              className="global-search__footer-link"
              onClick={handleViewAll}
            >
              View all {totalResults} results →
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
