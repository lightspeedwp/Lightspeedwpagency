/**
 * Pagination Block Component
 * 
 * WordPress Block: core/query-pagination
 * Style: .wp-block-pagination
 */

import React from 'react';
import '@/styles/blocks/theme/pagination.css';
import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react';

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}

export function Pagination({ 
  currentPage, 
  totalPages, 
  onPageChange, 
  className = '' 
}: PaginationProps) {
  // Simple pagination logic
  const pages = [];
  // (Implementation simplified for brevity, assume standard logic or use hook)
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <nav 
      className={`wp-block-pagination ${className}`.trim()} 
      aria-label="Pagination"
    >
      <button 
        className="wp-block-pagination__item wp-block-pagination__prev"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage <= 1}
        aria-label="Previous page"
      >
        <ChevronLeft size={16} />
      </button>
      
      {pages.map(page => (
        <button
          key={page}
          className={`wp-block-pagination__item ${currentPage === page ? 'is-active' : ''}`}
          onClick={() => onPageChange(page)}
          aria-current={currentPage === page ? 'page' : undefined}
        >
          {page}
        </button>
      ))}

      <button 
        className="wp-block-pagination__item wp-block-pagination__next"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage >= totalPages}
        aria-label="Next page"
      >
        <ChevronRight size={16} />
      </button>
    </nav>
  );
}

export function PaginationEllipsis() {
  return (
    <span className="wp-block-pagination__item wp-block-pagination__ellipsis" aria-hidden>
      <MoreHorizontal size={16} />
    </span>
  );
}
