/**
 * Search Results — Results List & Filters
 *
 * Extracted from SearchResultsTemplate.tsx for file size compliance.
 * Contains filter chips, sort controls, result cards, and pagination.
 *
 * @see /src/app/components/templates/SearchResultsTemplate.tsx
 */

import {
  ArrowRight,
  WarningCircle,
  MagnifyingGlass,
  FileText,
  Folder,
  VideoCamera,
  Headphones,
  Globe,
  Clock,
  Eye,
  CalendarBlank,
} from '@phosphor-icons/react';
import {
  contentTypeLabels,
  contentTypeColorClass,
  type ContentType,
  type SortOption,
  type SearchResult,
} from '../../../data/search';

/* ═══════════════════════════════════════════
 * Content-type icon map
 * ═══════════════════════════════════════════ */

const contentTypeIcons: Record<ContentType, typeof FileText> = {
  blog: FileText,
  portfolio: Folder,
  video: VideoCamera,
  podcast: Headphones,
  page: Globe,
};

/* ═══════════════════════════════════════════
 * Highlight Helper
 * ═══════════════════════════════════════════ */

function highlightText(text: string, query: string): JSX.Element {
  if (!query.trim()) return <>{text}</>;

  const escapedQuery = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(`(${escapedQuery})`, 'gi');
  const parts = text.split(regex);

  return (
    <>
      {parts.map((part, i) =>
        regex.test(part) ? (
          <mark key={i} className="search-highlight">{part}</mark>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}

/* ═══════════════════════════════════════════
 * Filter Bar
 * ═══════════════════════════════════════════ */

const allContentTypes: ContentType[] = ['blog', 'portfolio', 'video', 'podcast', 'page'];

interface SearchFiltersProps {
  activeTypes: ContentType[];
  typeCounts: Record<ContentType, number>;
  sort: SortOption;
  totalResults: number;
  onToggleType: (type: ContentType) => void;
  onClearFilters: () => void;
  onSortChange: (sort: SortOption) => void;
}

export function SearchFilters({
  activeTypes,
  typeCounts,
  sort,
  totalResults,
  onToggleType,
  onClearFilters,
  onSortChange,
}: SearchFiltersProps) {
  return (
    <>
      <div className="search-filters">
        <span className="search-filters__label">Filter:</span>
        <div className="search-filters__chips wp-flex wp-flex-wrap wp-gap-2">
          {allContentTypes.map(type => {
            const Icon = contentTypeIcons[type];
            const count = typeCounts[type];
            return (
              <button
                key={type}
                onClick={() => onToggleType(type)}
                className={`search-filters__chip ${
                  activeTypes.includes(type) ? 'search-filters__chip--active' : ''
                } ${count === 0 ? 'wp-opacity-50' : ''}`}
                aria-pressed={activeTypes.includes(type)}
              >
                <Icon size={14} />
                {contentTypeLabels[type]}
                <span className="search-filters__chip-count">{count}</span>
              </button>
            );
          })}
        </div>

        {/* Sort */}
        <div className="search-sort">
          <label htmlFor="search-sort" className="search-sort__label">Sort:</label>
          <select
            id="search-sort"
            value={sort}
            onChange={e => onSortChange(e.target.value as SortOption)}
            className="search-sort__select"
          >
            <option value="relevance">Relevance</option>
            <option value="recent">Most Recent</option>
            <option value="popular">Popular</option>
            <option value="featured">Featured</option>
          </select>
        </div>
      </div>

      {/* Result Count */}
      <div className="search-result-count">
        Number of results: <strong>{totalResults}</strong>
        {activeTypes.length > 0 && (
          <>
            {' '}in {activeTypes.map(t => contentTypeLabels[t]).join(', ')}
            {' — '}
            <button
              onClick={onClearFilters}
              className="wp-bg-none wp-border-none wp-text-primary wp-cursor-pointer wp-font-secondary wp-text-small wp-underline wp-p-0"
            >
              Clear filters
            </button>
          </>
        )}
      </div>
    </>
  );
}

/* ═══════════════════════════════════════════
 * Results Grid
 * ═══════════════════════════════════════════ */

interface SearchResultsGridProps {
  results: SearchResult[];
  query: string;
  onResultClick: (result: SearchResult) => void;
}

export function SearchResultsGrid({ results, query, onResultClick }: SearchResultsGridProps) {
  return (
    <div className="search-results-grid">
      {results.map(result => {
        const TypeIcon = contentTypeIcons[result.contentType];
        return (
          <button
            key={`${result.contentType}-${result.id}`}
            className="search-result-card wp-text-left wp-w-full"
            onClick={() => onResultClick(result)}
          >
            {/* Meta Row */}
            <div className="search-result-card__meta">
              <span className={`search-result-card__badge ${contentTypeColorClass[result.contentType]}`}>
                <TypeIcon size={10} />
                {contentTypeLabels[result.contentType]}
              </span>

              {result.date && (
                <>
                  <CalendarBlank size={12} />
                  <span>
                    {new Date(result.date).toLocaleDateString('en-GB', {
                      day: 'numeric', month: 'short', year: 'numeric',
                    })}
                  </span>
                </>
              )}

              {result.meta?.duration && (
                <>
                  <Clock size={12} />
                  <span>{result.meta.duration}</span>
                </>
              )}

              {result.meta?.views && (
                <>
                  <Eye size={12} />
                  <span>{result.meta.views} views</span>
                </>
              )}

              {result.meta?.readingTime && (
                <span>{result.meta.readingTime}</span>
              )}
            </div>

            {/* Title */}
            <h3 className="search-result-card__title">
              {highlightText(result.title, query)}
            </h3>

            {/* Excerpt */}
            <p className="search-result-card__excerpt">
              {highlightText(
                result.excerpt.length > 180
                  ? result.excerpt.slice(0, 180) + '...'
                  : result.excerpt,
                query
              )}
            </p>

            {/* Footer */}
            <div className="search-result-card__footer">
              View {contentTypeLabels[result.contentType]}
              <ArrowRight size={14} />
            </div>
          </button>
        );
      })}
    </div>
  );
}

/* ═══════════════════════════════════════════
 * Empty / No Results States
 * ═══════════════════════════════════════════ */

export function SearchEmptyState({ query }: { query: string }) {
  if (query) {
    return (
      <div className="search-no-results">
        <WarningCircle size={48} className="search-no-results__icon" />
        <h2 className="search-no-results__title wp-font-primary">No results found</h2>
        <p className="search-no-results__text wp-font-primary wp-mb-4">
          We couldn&apos;t find any content matching &quot;{query}&quot;. Try a different search term or browse our content below.
        </p>
      </div>
    );
  }

  return (
    <div className="search-no-results">
      <MagnifyingGlass size={48} className="search-no-results__icon" />
      <h2 className="search-no-results__title wp-font-primary">Start searching</h2>
      <p className="search-no-results__text wp-font-primary">
        Search across blog posts, portfolio projects, videos, podcasts, and pages.
      </p>
    </div>
  );
}
