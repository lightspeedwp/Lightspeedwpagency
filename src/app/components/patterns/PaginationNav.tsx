/**
 * Pagination Navigation Pattern
 * 
 * WordPress pattern: lsx-design/nav/pagination
 * 
 * Accessible pagination for archive/listing pages.
 * Keyboard navigable with clear focus states.
 * Modern design with soft borders and smooth transitions.
 */

import { Container } from '../common/Container';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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

  return (
    <nav 
      aria-label="Pagination navigation"
      className="py-12"
    >
      <Container>
        <div 
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '16px',
            flexWrap: 'wrap'
          }}
        >
          {/* Previous Button */}
          <button
                        onClick={() => onPageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        aria-label="Previous page"
                        className="px-1.5"
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          minWidth: '44px',
                          minHeight: '44px',
                          fontSize: 'var(--text-base)',
                          fontFamily: 'Lexend, sans-serif',
                          fontWeight: 'var(--font-weight-bold)',
                          backgroundColor: 'transparent',
                          color: currentPage === 1 ? 'var(--muted-foreground)' : 'var(--primary)',
                          border: 'none',
                          cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
                          textDecoration: currentPage === 1 ? 'none' : 'underline',
                          textUnderlineOffset: '4px',
                          transition: 'all 0.3s ease',
                          opacity: currentPage === 1 ? 0.5 : 1,
                        }}
                        onMouseEnter={(e) => {
                          if (currentPage !== 1) {
                            e.currentTarget.style.gap = '8px';
                          }
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.gap = '4px';
                        }}
          >
            <ChevronLeft size={16} strokeWidth={2.5} />
            <span>Previous</span>
          </button>

          {/* Page Numbers */}
          <ul 
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              listStyle: 'none',
              padding: 0,
              margin: 0,
            }}
          >
            {pageNumbers.map((page, index) => {
              if (page === 'ellipsis') {
                return (
                  <li key={`ellipsis-${index}`}>
                    <span
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '0 6px',
                        minWidth: '44px',
                        minHeight: '44px',
                        fontSize: 'var(--text-base)',
                        fontFamily: 'Lexend, sans-serif',
                        fontWeight: 'var(--font-weight-medium)',
                        color: 'var(--primary)',
                        border: '1px solid var(--border-soft)',
                        borderRadius: 'var(--radius)',
                        backgroundColor: 'transparent',
                        pointerEvents: 'none'
                      }}
                      aria-hidden="true"
                    >
                      ...
                    </span>
                  </li>
                );
              }

              const isCurrent = page === currentPage;
              return (
                <li key={page}>
                  <button
                    onClick={() => handlePageClick(page)}
                    aria-label={`Page ${page}`}
                    aria-current={isCurrent ? 'page' : undefined}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '0 6px',
                      minWidth: '44px',
                      minHeight: '44px',
                      fontSize: 'var(--text-base)',
                      fontFamily: 'Lexend, sans-serif',
                      fontWeight: 'var(--font-weight-medium)',
                      backgroundColor: isCurrent ? 'var(--primary)' : 'transparent',
                      color: isCurrent ? 'var(--primary-foreground)' : 'var(--primary)',
                      border: `1px solid ${isCurrent ? 'var(--primary)' : 'var(--border-soft)'}`,
                      borderRadius: 'var(--radius)',
                      cursor: isCurrent ? 'default' : 'pointer',
                      transition: 'all 0.3s ease',
                      boxShadow: isCurrent ? '0 2px 4px rgba(30, 106, 255, 0.2)' : 'none'
                    }}
                    onMouseEnter={(e) => {
                      if (!isCurrent) {
                        e.currentTarget.style.borderColor = 'var(--primary)';
                        e.currentTarget.style.backgroundColor = 'rgba(30, 106, 255, 0.05)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isCurrent) {
                        e.currentTarget.style.borderColor = 'var(--border-soft)';
                        e.currentTarget.style.backgroundColor = 'transparent';
                      }
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.outline = '2px solid var(--primary)';
                      e.currentTarget.style.outlineOffset = '2px';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.outline = 'none';
                    }}
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
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
              padding: '0',
              minHeight: '44px',
              fontSize: 'var(--text-base)',
              fontFamily: 'Lexend, sans-serif',
              fontWeight: 'var(--font-weight-bold)',
              backgroundColor: 'transparent',
              color: currentPage === totalPages ? 'var(--muted-foreground)' : 'var(--primary)',
              border: 'none',
              cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
              textDecoration: currentPage === totalPages ? 'none' : 'underline',
              textUnderlineOffset: '4px',
              transition: 'all 0.3s ease',
              opacity: currentPage === totalPages ? 0.5 : 1,
            }}
            onMouseEnter={(e) => {
              if (currentPage !== totalPages) {
                e.currentTarget.style.gap = '8px';
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.gap = '4px';
            }}
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