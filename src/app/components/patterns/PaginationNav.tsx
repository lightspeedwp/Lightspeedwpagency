/**
 * Pagination Navigation Pattern
 * 
 * WordPress pattern: lsx-design/nav/pagination
 * 
 * Accessible pagination for archive/listing pages.
 * Keyboard navigable with clear focus states.
 * Modern design with soft borders and smooth transitions.
 * 
 * All styling in /src/styles/pagination-nav.css (user-editable)
 */

import { Container } from '../common/Container';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import '@/styles/patterns/pagination-nav.css';

interface PaginationNavProps {
  currentPage: number;
  totalPages: number;
  onPageChange?: (page: number) => void;
}

export function PaginationNav({ currentPage, totalPages, onPageChange }: PaginationNavProps) {
  const handlePageClick = (page: number) => {
    if (onPageChange && page >= 1 && page <= totalPages) {
      onPageChange(page);
      // Scroll to top of content for better UX
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Generate smart pagination with ellipsis
  const getPageNumbers = () => {
    const pages: (number | 'ellipsis')[] = [];
    const showEllipsis = totalPages > 7;

    if (!showEllipsis) {
      // Show all pages if 7 or fewer
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Always show first page
      pages.push(1);

      if (currentPage <= 3) {
        // Near start: 1 2 3 4 ... 10
        pages.push(2, 3, 4, 'ellipsis', totalPages);
      } else if (currentPage >= totalPages - 2) {
        // Near end: 1 ... 7 8 9 10
        pages.push('ellipsis', totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        // Middle: 1 ... 4 5 6 ... 10
        pages.push('ellipsis', currentPage - 1, currentPage, currentPage + 1, 'ellipsis', totalPages);
      }
    }

    return pages;
  };

  const pageNumbers = getPageNumbers();

  // Build Previous button classes
  const prevButtonClasses = [
    'pagination-nav__prev-next',
    currentPage === 1 ? 'pagination-nav__prev-next--disabled' : 'pagination-nav__prev-next--active'
  ].filter(Boolean).join(' ');

  // Build Next button classes
  const nextButtonClasses = [
    'pagination-nav__prev-next',
    currentPage === totalPages ? 'pagination-nav__prev-next--disabled' : 'pagination-nav__prev-next--active'
  ].filter(Boolean).join(' ');

  return (
    <nav 
      aria-label="Pagination navigation"
      className="pagination-nav"
    >
      <Container>
        <div className="pagination-nav__wrapper">
          {/* Previous Button */}
          <button
            onClick={() => handlePageClick(currentPage - 1)}
            disabled={currentPage === 1}
            aria-label="Previous page"
            className={prevButtonClasses}
          >
            <ChevronLeft size={16} strokeWidth={2.5} />
            <span>Previous</span>
          </button>

          {/* Page Numbers */}
          <ul className="pagination-nav__pages">
            {pageNumbers.map((page, index) => {
              if (page === 'ellipsis') {
                return (
                  <li key={`ellipsis-${index}`} className="pagination-nav__page-item">
                    <span
                      className="pagination-nav__ellipsis"
                      aria-hidden="true"
                    >
                      ...
                    </span>
                  </li>
                );
              }

              const isCurrent = page === currentPage;
              const buttonClasses = [
                'pagination-nav__page-button',
                isCurrent && 'pagination-nav__page-button--current'
              ].filter(Boolean).join(' ');

              return (
                <li key={page} className="pagination-nav__page-item">
                  <button
                    onClick={() => handlePageClick(page)}
                    aria-label={`Page ${page}`}
                    aria-current={isCurrent ? 'page' : undefined}
                    className={buttonClasses}
                  >
                    {page}
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Next Button */}
          <button
            disabled={currentPage === totalPages}
            onClick={() => handlePageClick(currentPage + 1)}
            aria-label="Next page"
            className={nextButtonClasses}
          >
            <span>Next</span>
            <ChevronRight size={16} strokeWidth={2.5} />
          </button>
        </div>

        {/* Page info for screen readers */}
        <div 
          className="sr-only" 
          role="status" 
          aria-live="polite" 
          aria-atomic="true"
        >
          Page {currentPage} of {totalPages}
        </div>
      </Container>
    </nav>
  );
}
