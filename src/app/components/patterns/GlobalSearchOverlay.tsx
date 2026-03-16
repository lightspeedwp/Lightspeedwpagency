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
 * Sub-components:
 * - SearchResultsPanel — Results area + footer
 * - search-helpers — Constants + helpers
 *
 * @see /src/styles/patterns/global-search.css — Styles
 * @split March 16, 2026 — Extracted helpers + results panel (568→~230 lines)
 */

import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router';
import { useFocusManagement } from '../../hooks/useFocusManagement';
import { slugToPath } from '../../utils/route-map';
import {
  searchAllContent,
  getResultCountsByType,
  contentTypeLabels,
  type ContentType,
  type SearchResult,
} from '../../data/search';
import { MagnifyingGlass as Search, X } from '@phosphor-icons/react';

import {
  CONTENT_TYPES,
  MAX_PREVIEW_RESULTS,
  DEBOUNCE_MS,
  contentTypeIcons,
  getRecentSearches,
  saveRecentSearch,
  clearRecentSearches,
} from './search/search-helpers';
import { SearchResultsPanel } from './search/SearchResultsPanel';

interface GlobalSearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  initialQuery?: string;
}

export function GlobalSearchOverlay({
  isOpen,
  onClose,
  initialQuery = '',
}: GlobalSearchOverlayProps) {
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const { trapFocus, restoreFocus } = useFocusManagement();

  const [query, setQuery] = useState(initialQuery);
  const [debouncedQuery, setDebouncedQuery] = useState(initialQuery);
  const [activeTypes, setActiveTypes] = useState<ContentType[]>([]);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);

  // Debounce the query
  useEffect(() => {
    const timer = setTimeout(() => setDebouncedQuery(query), DEBOUNCE_MS);
    return () => clearTimeout(timer);
  }, [query]);

  // Load recent searches on open
  useEffect(() => {
    if (isOpen) {
      setRecentSearches(getRecentSearches());
      requestAnimationFrame(() => inputRef.current?.focus());
      if (overlayRef.current) {
        const cleanup = trapFocus(overlayRef.current);
        return () => { cleanup?.(); restoreFocus(); };
      }
    } else {
      setQuery('');
      setDebouncedQuery('');
      setActiveTypes([]);
      setFocusedIndex(-1);
    }
  }, [isOpen]);

  const results = useMemo(() => {
    if (!debouncedQuery.trim()) return [];
    return searchAllContent({ query: debouncedQuery, contentTypes: activeTypes, sort: 'relevance' }).slice(0, MAX_PREVIEW_RESULTS);
  }, [debouncedQuery, activeTypes]);

  const typeCounts = useMemo(() => {
    if (!debouncedQuery.trim()) return {} as Record<ContentType, number>;
    return getResultCountsByType(searchAllContent({ query: debouncedQuery, contentTypes: [], sort: 'relevance' }));
  }, [debouncedQuery]);

  const totalResults = useMemo(() => {
    if (!debouncedQuery.trim()) return 0;
    return searchAllContent({ query: debouncedQuery, contentTypes: activeTypes, sort: 'relevance' }).length;
  }, [debouncedQuery, activeTypes]);

  useEffect(() => { setFocusedIndex(-1); }, [debouncedQuery, activeTypes]);

  const handleResultClick = useCallback((result: SearchResult) => {
    saveRecentSearch(query);
    const path = result.url;
    const slug = path.startsWith('/') ? path.slice(1) : path;
    navigate(slugToPath(slug || 'front-page'));
    onClose();
  }, [query, navigate, onClose]);

  const handleViewAll = useCallback(() => {
    if (query.trim()) {
      saveRecentSearch(query);
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
      onClose();
    }
  }, [query, navigate, onClose]);

  const toggleType = useCallback((type: ContentType) => {
    setActiveTypes(prev => prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]);
  }, []);

  const handleRecentClick = useCallback((recentQuery: string) => {
    setQuery(recentQuery);
    setDebouncedQuery(recentQuery);
  }, []);

  const handleClearRecent = useCallback(() => {
    clearRecentSearches();
    setRecentSearches([]);
  }, []);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setFocusedIndex(prev => prev < results.length - 1 ? prev + 1 : 0);
        break;
      case 'ArrowUp':
        e.preventDefault();
        setFocusedIndex(prev => prev > 0 ? prev - 1 : results.length - 1);
        break;
      case 'Enter':
        e.preventDefault();
        if (focusedIndex >= 0 && focusedIndex < results.length) handleResultClick(results[focusedIndex]);
        else handleViewAll();
        break;
      case 'Escape':
        e.preventDefault();
        onClose();
        break;
    }
  }, [results, focusedIndex, handleResultClick, handleViewAll, onClose]);

  useEffect(() => {
    if (focusedIndex >= 0 && resultsRef.current) {
      const items = resultsRef.current.querySelectorAll('.global-search__result-item');
      if (items[focusedIndex]) items[focusedIndex].scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    }
  }, [focusedIndex]);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;

  const hasQuery = debouncedQuery.trim().length > 0;
  const showRecent = !hasQuery && recentSearches.length > 0;

  return (
    <div className="global-search-overlay" role="dialog" aria-modal="true" aria-label="Search" onKeyDown={handleKeyDown} ref={overlayRef}>
      <div className="global-search-overlay__backdrop" onClick={onClose} aria-hidden="true" />

      <div className="global-search-overlay__panel">
        {/* Search Input */}
        <div className="global-search__input-area">
          <Search size={20} className={`global-search__input-icon ${hasQuery ? '' : 'global-search__input-icon--pulse'}`} />
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
            aria-activedescendant={focusedIndex >= 0 ? `search-result-${focusedIndex}` : undefined}
          />
          <span className="global-search__kbd-hint">ESC</span>
          <button className="global-search__close" onClick={onClose} aria-label="Close search">
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
                  className={`global-search__filter-chip ${activeTypes.includes(type) ? 'global-search__filter-chip--active' : ''} ${count === 0 && !activeTypes.includes(type) ? 'wp-opacity-40' : ''}`}
                  onClick={() => toggleType(type)}
                  aria-pressed={activeTypes.includes(type)}
                >
                  <Icon size={12} />
                  {contentTypeLabels[type]}
                  <span>({count})</span>
                </button>
              );
            })}
          </div>
        )}

        <SearchResultsPanel
          resultsRef={resultsRef}
          hasQuery={hasQuery}
          showRecent={showRecent}
          recentSearches={recentSearches}
          results={results}
          totalResults={totalResults}
          debouncedQuery={debouncedQuery}
          focusedIndex={focusedIndex}
          onResultClick={handleResultClick}
          onRecentClick={handleRecentClick}
          onClearRecent={handleClearRecent}
          onViewAll={handleViewAll}
          setFocusedIndex={setFocusedIndex}
        />
      </div>
    </div>
  );
}