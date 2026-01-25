/**
 * Archive Template
 * 
 * WordPress template: templates/archive.html
 * 
 * Content hub archetype for category/taxonomy archives.
 * Pattern order: Breadcrumbs → Archive Header → Results/Sorting → Card Grid → Pagination → ArchiveCTA
 * 
 * **Data Source:** `/src/app/data/archive-items.ts`
 * 
 * **Patterns Used:**
 * - Breadcrumbs (navigation context)
 * - ArchiveHeader (page title and description)
 * - CardGrid (content display)
 * - PaginationNav (page navigation)
 * - ArchiveCTA (conversion optimization)
 * - EmptyState (no results fallback)
 * 
 * @see {@link /guidelines/templates/archive.md}
 */

import { SkipLink } from '../common/SkipLink';
import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { SiteHeader } from '../parts/SiteHeader';
import { SiteFooter } from '../parts/SiteFooter';
import { Breadcrumbs } from '../patterns/Breadcrumbs';
import { ArchiveHeader } from '../patterns/ArchiveHeader';
import { CardGrid } from '../patterns/CardGrid';
import { PaginationNav } from '../patterns/PaginationNav';
import { EmptyState } from '../patterns/EmptyState';
import { BackToTopButton } from '../blocks/layout/BackToTopButton';
import { useNavigation } from '../../contexts/NavigationContext';
import { ArchiveCTA } from '../patterns/ArchiveCTA';
import { generalArchiveCTA } from '../../data/cta';
import { generalArchiveItems, archiveCategories } from '../../data/archive-items';
import { useState } from 'react';
import { Search } from 'lucide-react';

export function ArchiveTemplate() {
  const { navigateTo } = useNavigation();
  const [currentPage, setCurrentPage] = useState(1);
  const totalResults = generalArchiveItems.length;
  const resultsPerPage = 10;
  const startResult = (currentPage - 1) * resultsPerPage + 1;
  const endResult = Math.min(currentPage * resultsPerPage, totalResults);

  return (
    <>
      <SkipLink />
      <SiteHeader />
      
      <main id="main-content" role="main">
        {/* Archive Content Section */}
        <Section spacing="50">
          <Container>
            <div className="wp-archive-content">
              {/* Breadcrumbs */}
              <Breadcrumbs 
                items={[
                  { label: 'Home', href: '/' },
                  { label: 'Archive' }
                ]}
              />

              {/* Archive Header */}
              <ArchiveHeader
                title="Archive Title"
                description="Archive description"
              />

              {/* Results & Sorting */}
              <div className="wp-archive-results-bar">
                <p className="wp-archive-results-count">
                  Showing {startResult} - {endResult} of {totalResults} results
                </p>
                
                <button
                  className="wp-archive-sort-button"
                  aria-label="Sort results"
                >
                  Sort
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M19.5 8.25L12 15.75L4.5 8.25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>

              {/* Card Grid - 3 columns */}
              <CardGrid
                items={generalArchiveItems.slice((currentPage - 1) * resultsPerPage, currentPage * resultsPerPage)}
                navigateTo={navigateTo}
              />

              {/* Pagination */}
              <PaginationNav
                currentPage={currentPage}
                totalPages={Math.ceil(totalResults / resultsPerPage)}
                onPageChange={setCurrentPage}
              />
            </div>
          </Container>
        </Section>

        {/* Archive CTA Pattern - WordPress Group block with cta-primary section style */}
        <ArchiveCTA ctaData={generalArchiveCTA} />
      </main>

      <SiteFooter />
      <BackToTopButton />
    </>
  );
}