/**
 * Search Results Panel
 *
 * Renders recent searches, search results, empty states, and the footer
 * for the GlobalSearchOverlay.
 *
 * @split March 16, 2026
 */

import { MagnifyingGlass as Search, ArrowRight, Clock, ArrowElbowDownLeft as CornerDownLeft } from '@phosphor-icons/react';
import { contentTypeLabels, type SearchResult, type ContentType } from '../../../data/search';
import { highlightText, contentTypeIcons, MAX_PREVIEW_RESULTS } from './search-helpers';

interface SearchResultsPanelProps {
  resultsRef: React.RefObject<HTMLDivElement | null>;
  hasQuery: boolean;
  showRecent: boolean;
  recentSearches: string[];
  results: SearchResult[];
  totalResults: number;
  debouncedQuery: string;
  focusedIndex: number;
  onResultClick: (result: SearchResult) => void;
  onRecentClick: (query: string) => void;
  onClearRecent: () => void;
  onViewAll: () => void;
  setFocusedIndex: (index: number) => void;
}

export function SearchResultsPanel({
  resultsRef,
  hasQuery,
  showRecent,
  recentSearches,
  results,
  totalResults,
  debouncedQuery,
  focusedIndex,
  onResultClick,
  onRecentClick,
  onClearRecent,
  onViewAll,
  setFocusedIndex,
}: SearchResultsPanelProps) {
  return (
    <>
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
              <button className="global-search__recent-clear" onClick={onClearRecent}>
                Clear
              </button>
            </div>
            {recentSearches.map((recent, idx) => (
              <button key={idx} className="global-search__recent-item" onClick={() => onRecentClick(recent)}>
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
            <div className="global-search__empty-title">Search all content</div>
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
                  className={`global-search__result-item ${idx === focusedIndex ? 'global-search__result-item--focused' : ''}`}
                  onClick={() => onResultClick(result)}
                  role="option"
                  aria-selected={idx === focusedIndex}
                  onMouseEnter={() => setFocusedIndex(idx)}
                >
                  <div className="global-search__result-icon">
                    <TypeIcon size={18} />
                  </div>
                  <div className="global-search__result-content">
                    <div className="global-search__result-title">
                      {highlightText(result.title, debouncedQuery)}
                    </div>
                    {result.excerpt && (
                      <div className="global-search__result-excerpt">
                        {highlightText(
                          result.excerpt.length > 120 ? result.excerpt.slice(0, 120) + '...' : result.excerpt,
                          debouncedQuery
                        )}
                      </div>
                    )}
                    <div className="global-search__result-meta">
                      <span className="wp-text-primary">{contentTypeLabels[result.contentType]}</span>
                      {result.meta?.readingTime && <span>{result.meta.readingTime}</span>}
                      {result.meta?.duration && <span>{result.meta.duration}</span>}
                      {result.date && (
                        <span>{new Date(result.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                      )}
                    </div>
                  </div>
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
              We couldn&apos;t find any content matching &quot;{debouncedQuery}&quot;. Try a different search term.
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="global-search__footer">
        <div className="global-search__footer-hints">
          <span className="global-search__footer-hint">
            <kbd className="global-search__footer-kbd"><CornerDownLeft size={10} /></kbd>
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
          <button className="global-search__footer-link" onClick={onViewAll}>
            View all {totalResults} results →
          </button>
        )}
      </div>
    </>
  );
}