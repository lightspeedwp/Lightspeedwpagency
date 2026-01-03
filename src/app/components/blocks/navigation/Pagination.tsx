/**
 * Pagination Component
 * 
 * Features:
 * - Previous/Next navigation
 * - Page number buttons
 * - First/Last page buttons
 * - Ellipsis for large page counts
 * - Mobile-responsive (compact on small screens)
 * - WCAG 2.1 AA compliant
 * 
 * Design System Compliance:
 * - Uses CSS variables for all colors
 * - Uses Lexend for buttons
 * - 48×48px touch targets
 * 
 * @example
 * <Pagination
 *   currentPage={5}
 *   totalPages={20}
 *   onPageChange={(page) => setCurrentPage(page)}
 *   showFirstLast={true}
 * />
 */

import { useMemo } from 'react';

export interface PaginationProps {
  /** Current page (1-indexed) */
  currentPage: number;
  /** Total number of pages */
  totalPages: number;
  /** Page change handler */
  onPageChange: (page: number) => void;
  /** Number of page buttons to show */
  siblingCount?: number;
  /** Show first/last buttons */
  showFirstLast?: boolean;
  /** Show page info text */
  showPageInfo?: boolean;
  /** Disabled state */
  disabled?: boolean;
}

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  siblingCount = 1,
  showFirstLast = false,
  showPageInfo = true,
  disabled = false,
}: PaginationProps) {
  // Generate page range with ellipsis
  const pageRange = useMemo(() => {
    const range: (number | 'ellipsis')[] = [];

    // Always show first page
    range.push(1);

    // Calculate start and end of sibling range
    const leftSiblingIndex = Math.max(currentPage - siblingCount, 2);
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages - 1);

    // Show left ellipsis
    if (leftSiblingIndex > 2) {
      range.push('ellipsis');
    }

    // Show sibling pages
    for (let i = leftSiblingIndex; i <= rightSiblingIndex; i++) {
      range.push(i);
    }

    // Show right ellipsis
    if (rightSiblingIndex < totalPages - 1) {
      range.push('ellipsis');
    }

    // Always show last page (if more than 1 page)
    if (totalPages > 1) {
      range.push(totalPages);
    }

    return range;
  }, [currentPage, totalPages, siblingCount]);

  const handlePageChange = (page: number) => {
    if (disabled) return;
    if (page < 1 || page > totalPages) return;
    if (page === currentPage) return;
    onPageChange(page);
  };

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  return (
    <nav
      role="navigation"
      aria-label="Pagination"
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        alignItems: 'center',
      }}
    >
      {/* Page Info */}
      {showPageInfo && (
        <div
          style={{
            fontFamily: 'Manrope, sans-serif',
            fontSize: 'var(--text-small)',
            color: 'var(--muted-foreground)',
          }}
        >
          Page {currentPage} of {totalPages}
        </div>
      )}

      {/* Pagination Buttons */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        {/* First Page Button */}
        {showFirstLast && (
          <PaginationButton
            onClick={() => handlePageChange(1)}
            disabled={disabled || isFirstPage}
            aria-label="Go to first page"
          >
            «
          </PaginationButton>
        )}

        {/* Previous Button */}
        <PaginationButton
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={disabled || isFirstPage}
          aria-label="Go to previous page"
        >
          ‹
        </PaginationButton>

        {/* Page Numbers */}
        {pageRange.map((page, index) => {
          if (page === 'ellipsis') {
            return (
              <span
                key={`ellipsis-${index}`}
                style={{
                  padding: '0 0.5rem',
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-base)',
                  color: 'var(--muted-foreground)',
                  userSelect: 'none',
                }}
                aria-hidden="true"
              >
                …
              </span>
            );
          }

          const isActive = page === currentPage;

          return (
            <PaginationButton
              key={page}
              onClick={() => handlePageChange(page)}
              disabled={disabled}
              active={isActive}
              aria-label={`Go to page ${page}`}
              aria-current={isActive ? 'page' : undefined}
            >
              {page}
            </PaginationButton>
          );
        })}

        {/* Next Button */}
        <PaginationButton
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={disabled || isLastPage}
          aria-label="Go to next page"
        >
          ›
        </PaginationButton>

        {/* Last Page Button */}
        {showFirstLast && (
          <PaginationButton
            onClick={() => handlePageChange(totalPages)}
            disabled={disabled || isLastPage}
            aria-label="Go to last page"
          >
            »
          </PaginationButton>
        )}
      </div>
    </nav>
  );
}

/**
 * Pagination Button Component
 */
interface PaginationButtonProps {
  onClick: () => void;
  disabled?: boolean;
  active?: boolean;
  children: React.ReactNode;
  'aria-label'?: string;
  'aria-current'?: 'page';
}

function PaginationButton({
  onClick,
  disabled = false,
  active = false,
  children,
  'aria-label': ariaLabel,
  'aria-current': ariaCurrent,
}: PaginationButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      aria-current={ariaCurrent}
      style={{
        minWidth: '48px',
        minHeight: '48px',
        padding: '0.75rem 1rem',
        fontFamily: 'Lexend, sans-serif',
        fontSize: 'var(--text-base)',
        fontWeight: active ? '500' : '400',
        color: active
          ? 'var(--primary-foreground)'
          : disabled
          ? 'var(--muted-foreground)'
          : 'var(--foreground)',
        backgroundColor: active
          ? 'var(--primary)'
          : 'transparent',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled && !active ? 0.5 : 1,
        transition: 'all 0.2s ease',
      }}
      onMouseEnter={(e) => {
        if (!disabled && !active) {
          e.currentTarget.style.backgroundColor = 'var(--muted)';
        }
      }}
      onMouseLeave={(e) => {
        if (!disabled && !active) {
          e.currentTarget.style.backgroundColor = 'transparent';
        }
      }}
    >
      {children}
    </button>
  );
}

/**
 * Compact Pagination (Mobile-optimized)
 * 
 * Shows only Previous, current page, and Next.
 */
export interface CompactPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  disabled?: boolean;
}

export function CompactPagination({
  currentPage,
  totalPages,
  onPageChange,
  disabled = false,
}: CompactPaginationProps) {
  return (
    <nav
      role="navigation"
      aria-label="Pagination"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '1rem',
        width: '100%',
        maxWidth: '320px',
        margin: '0 auto',
      }}
    >
      {/* Previous */}
      <button
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={disabled || currentPage === 1}
        style={{
          minWidth: '80px',
          minHeight: '48px',
          padding: '0.75rem 1rem',
          fontFamily: 'Lexend, sans-serif',
          fontSize: 'var(--text-base)',
          fontWeight: '500',
          color: 'var(--foreground)',
          backgroundColor: 'transparent',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius)',
          cursor: disabled || currentPage === 1 ? 'not-allowed' : 'pointer',
          opacity: disabled || currentPage === 1 ? 0.5 : 1,
          transition: 'all 0.2s ease',
        }}
      >
        Previous
      </button>

      {/* Page Info */}
      <div
        style={{
          fontFamily: 'Manrope, sans-serif',
          fontSize: 'var(--text-small)',
          color: 'var(--muted-foreground)',
          textAlign: 'center',
        }}
      >
        {currentPage} / {totalPages}
      </div>

      {/* Next */}
      <button
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={disabled || currentPage === totalPages}
        style={{
          minWidth: '80px',
          minHeight: '48px',
          padding: '0.75rem 1rem',
          fontFamily: 'Lexend, sans-serif',
          fontSize: 'var(--text-base)',
          fontWeight: '500',
          color: 'var(--foreground)',
          backgroundColor: 'transparent',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius)',
          cursor: disabled || currentPage === totalPages ? 'not-allowed' : 'pointer',
          opacity: disabled || currentPage === totalPages ? 0.5 : 1,
          transition: 'all 0.2s ease',
        }}
      >
        Next
      </button>
    </nav>
  );
}
