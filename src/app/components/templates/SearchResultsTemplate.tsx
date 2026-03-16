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
 * @see /src/app/components/templates/search-results/ — Sub-components
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
  type ContentType,
  type SortOption,
  type SearchResult,
} from '../../data/search';
import { useState, useEffect, useCallback, useMemo } from 'react';
import { useSearchParams } from 'react-router';
import { MagnifyingGlass } from '@phosphor-icons/react';
import {
  SearchFilters,
  SearchResultsGrid,
  SearchEmptyState,
} from './search-results/SearchResultsList';

/* ═══════════════════════════════════════════
 * Component
 * ═══════════════════════════════════════════ */

export function SearchResultsTemplate() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

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
    () => searchAllContent({ query, contentTypes: activeTypes, sort }),
    [query, activeTypes, sort]
  );

  const typeCounts = useMemo(
    () => getResultCountsByType(
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
      prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]
    );
  }, []);

  const handleResultClick = useCallback(
    (result: SearchResult) => {
      const path = result.url;
      const slug = path.startsWith('/') ? path.slice(1) : path;
      navigate(slugToPath(slug || 'front-page'));
    },
    [navigate]
  );

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
          <div className="wp-mx-auto wp-max-w-narrow">
            <h1 className="wp-font-primary wp-text-h2 wp-font-bold wp-text-foreground wp-mb-6 wp-text-center">
              {query ? `Search Results for "${query}"` : 'Search'}
            </h1>

            <div className="wp-mx-auto wp-mb-8 wp-relative wp-max-w-content">
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
              <span className="search-kbd wp-absolute wp-right-3 wp-top-1/2 wp--translate-y-1/2">
                Ctrl+K
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* Results Section */}
      <Section spacing="lg" className="wp-bg-background">
        <Container>
          <div className="wp-mx-auto wp-max-w-4xl">
            {/* Filters */}
            {query && (
              <SearchFilters
                activeTypes={activeTypes}
                typeCounts={typeCounts}
                sort={sort}
                totalResults={totalResults}
                onToggleType={toggleType}
                onClearFilters={() => setActiveTypes([])}
                onSortChange={setSort}
              />
            )}

            {/* Results */}
            {totalResults > 0 ? (
              <SearchResultsGrid
                results={paginatedResults}
                query={query}
                onResultClick={handleResultClick}
              />
            ) : (
              <SearchEmptyState query={query} />
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="search-pagination">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`search-pagination__button wp-font-primary wp-text-small ${
                      page === currentPage ? 'search-pagination__button--active' : ''
                    }`}
                  >
                    {page}
                  </button>
                ))}
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
