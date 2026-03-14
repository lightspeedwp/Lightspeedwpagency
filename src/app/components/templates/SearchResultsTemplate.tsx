/**
 * Search Results Template
 *
 * WordPress template: templates/search.html
 *
 * **Purpose:** Global search results page with multi-content-type
 * filtering, relevance scoring, sort options, and content-type badges.
 *
 * **Design System:**
 * - 100% CSS variables from search.css
 * - var(--font-primary) for headings/body
 * - var(--font-secondary) for meta text
 * - Neon glow focus state on search input
 * - All spacing via CSS variables
 *
 * @see /src/app/data/search.ts — Unified search index
 * @see /src/styles/templates/search.css — Styles
 */

import '../../../styles/templates/search.css';
import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';
import { FunkyCTA } from '../patterns/FunkyCTA';
import { useNavigate } from 'react-router';
import { slugToPath } from '../../utils/route-map';
import {
  searchAllContent,
  getResultCountsByType,
  contentTypeLabels,
  contentTypeColorClass,
  type ContentType,
  type SortOption,
  type SearchResult,
} from '../../data/search';
import { useState, useEffect, useCallback, useMemo } from 'react';
import { useSearchParams } from 'react-router';
import {
  MagnifyingGlass,
  ArrowRight,
  WarningCircle,
  FileText,
  Folder,
  VideoCamera,
  Headphones,
  Globe,
  Clock,
  Eye,
} from '@phosphor-icons/react';

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
          <mark key={i} className="search-highlight">{part}</mark>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}

/* ═══════════════════════════════════════════
 * Component
 * ═══════════════════════════════════════════ */

export function SearchResultsTemplate() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  // Read initial query from URL
  const initialQuery = searchParams.get('q') || '';

  const [query, setQuery] = useState(initialQuery);
  const [activeTypes, setActiveTypes] = useState<ContentType[]>([]);
  const [sort, setSort] = useState<SortOption>('relevance');
  const [currentPage, setCurrentPage] = useState(1);
  const resultsPerPage = 8;

  // Sync query to URL
  useEffect(() => {
    if (query) {
      setSearchParams({ q: query }, { replace: true });
    }
  }, [query, setSearchParams]);

  // Run search
  const allResults = useMemo(
    () =>
      searchAllContent({
        query,
        contentTypes: activeTypes,
        sort,
      }),
    [query, activeTypes, sort]
  );

  const typeCounts = useMemo(
    () =>
      getResultCountsByType(
        searchAllContent({ query, contentTypes: [], sort: 'relevance' })
      ),
    [query]
  );

  const totalResults = allResults.length;
  const totalPages = Math.ceil(totalResults / resultsPerPage);
  const paginatedResults = allResults.slice(
    (currentPage - 1) * resultsPerPage,
    currentPage * resultsPerPage
  );

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [query, activeTypes, sort]);

  const toggleType = useCallback((type: ContentType) => {
    setActiveTypes(prev =>
      prev.includes(type)
        ? prev.filter(t => t !== type)
        : [...prev, type]
    );
  }, []);

  const handleResultClick = useCallback(
    (result: SearchResult) => {
      // Use navigate for internal routing
      const path = result.url;
      // Strip leading slash for slug
      const slug = path.startsWith('/') ? path.slice(1) : path;
      navigate(slugToPath(slug || 'front-page'));
    },
    [navigate]
  );

  const allContentTypes: ContentType[] = [
    'blog',
    'portfolio',
    'video',
    'podcast',
    'page',
  ];

  return (
    <>
      {/* Breadcrumbs */}
      <BreadcrumbPart
        items={[
          { label: 'Home', page: 'front-page' },
          { label: 'Search Results' },
        ]}
      />

      {/* Search Hero */}
      <section className="search-header">
        <Container>
          <div
            className="wp-mx-auto wp-max-w-narrow"
          >
            <h1
              className="wp-font-primary wp-text-h2 wp-font-bold wp-text-foreground wp-mb-6 wp-text-center"
            >
              {query ? `Search Results for "${query}"` : 'Search'}
            </h1>

            {/* Enhanced Search Input */}
            <div
              className="wp-mx-auto wp-mb-8 wp-relative wp-max-w-content"
            >
              <MagnifyingGlass
                size={22}
                className="wp-text-muted-foreground wp-absolute wp-left-4 wp-top-1/2 wp--translate-y-1/2 wp-pointer-events-none"
              />
              <input
                type="search"
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Search all content..."
                className="search-input--enhanced"
                aria-label="Search all content"
              />
              <span
                className="search-kbd wp-absolute wp-right-3 wp-top-1/2 wp--translate-y-1/2"
              >
                Ctrl+K
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* Results Section */}
      <Section
        spacing="lg"
        className="wp-bg-background"
      >
        <Container>
          <div className="wp-mx-auto wp-max-w-4xl">
            {/* Filters Bar */}
            {query && (
              <>
                <div className="search-filters">
                  <span className="search-filters__label">Filter:</span>
                  <div className="search-filters__chips wp-flex wp-flex-wrap wp-gap-2">
                    {allContentTypes.map(type => {
                      const Icon = contentTypeIcons[type];
                      const count = typeCounts[type];
                      const isActive =
                        activeTypes.length === 0 ||
                        activeTypes.includes(type);
                      return (
                        <button
                          key={type}
                          onClick={() => toggleType(type)}
                          className={`search-filters__chip ${
                            activeTypes.includes(type)
                              ? 'search-filters__chip--active'
                              : ''
                          } ${count === 0 ? 'wp-opacity-50' : ''}`}
                          aria-pressed={activeTypes.includes(type)}
                        >
                          <Icon size={14} />
                          {contentTypeLabels[type]}
                          <span className="search-filters__chip-count">
                            {count}
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Sort */}
                  <div className="search-sort">
                    <label
                      htmlFor="search-sort"
                      className="search-sort__label"
                    >
                      Sort:
                    </label>
                    <select
                      id="search-sort"
                      value={sort}
                      onChange={e =>
                        setSort(e.target.value as SortOption)
                      }
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
                  Number of results:{' '}
                  <strong>{totalResults}</strong>
                  {activeTypes.length > 0 && (
                    <>
                      {' '}
                      in{' '}
                      {activeTypes
                        .map(t => contentTypeLabels[t])
                        .join(', ')}
                      {' — '}
                      <button
                        onClick={() => setActiveTypes([])}
                        className="wp-bg-none wp-border-none wp-text-primary wp-cursor-pointer wp-font-secondary wp-text-small wp-underline wp-p-0"
                      >
                        Clear filters
                      </button>
                    </>
                  )}
                </div>
              </>
            )}

            {/* Results */}
            {totalResults > 0 ? (
              <div className="search-results-grid">
                {paginatedResults.map(result => {
                  const TypeIcon = contentTypeIcons[result.contentType];
                  return (
                    <button
                      key={`${result.contentType}-${result.id}`}
                      className="search-result-card wp-text-left wp-w-full"
                      onClick={() => handleResultClick(result)}
                    >
                      {/* Meta Row */}
                      <div className="search-result-card__meta">
                        <span
                          className={`search-result-card__badge ${contentTypeColorClass[result.contentType]}`}
                        >
                          <TypeIcon size={10} />
                          {contentTypeLabels[result.contentType]}
                        </span>

                        {result.date && (
                          <>
                            <Calendar size={12} />
                            <span>
                              {new Date(
                                result.date
                              ).toLocaleDateString('en-GB', {
                                day: 'numeric',
                                month: 'short',
                                year: 'numeric',
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
                            <span>
                              {result.meta.views} views
                            </span>
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
                        View{' '}
                        {contentTypeLabels[result.contentType]}
                        <ArrowRight size={14} />
                      </div>
                    </button>
                  );
                })}
              </div>
            ) : query ? (
              /* No Results */
              <div className="search-no-results">
                <WarningCircle
                  size={48}
                  className="search-no-results__icon"
                />
                <h2
                  className="search-no-results__title wp-font-primary"
                >
                  No results found
                </h2>
                <p
                  className="search-no-results__text wp-font-primary wp-mb-4"
                >
                  We couldn&apos;t find any content matching &quot;
                  {query}&quot;. Try a different search term or browse
                  our content below.
                </p>
              </div>
            ) : (
              /* Empty State */
              <div className="search-no-results">
                <MagnifyingGlass
                  size={48}
                  className="search-no-results__icon"
                />
                <h2
                  className="search-no-results__title wp-font-primary"
                >
                  Start searching
                </h2>
                <p
                  className="search-no-results__text wp-font-primary"
                >
                  Search across blog posts, portfolio projects,
                  videos, podcasts, and pages.
                </p>
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="search-pagination">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  page => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`search-pagination__button wp-font-primary wp-text-small ${
                        page === currentPage
                          ? 'search-pagination__button--active'
                          : ''
                      }`}
                    >
                      {page}
                    </button>
                  )
                )}
              </div>
            )}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <FunkyCTA
        title="Can't find what you're looking for?"
        description="Get in touch with our team and we'll help you find exactly what you need."
        buttonText="Contact Us"
        buttonPage="contact"
        benefits={[
          'Personalised help from our team',
          'Quick response times',
          'Browse our full service catalogue',
          'Free initial consultation'
        ]}
      />
    </>
  );
}