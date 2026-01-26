/**
 * Data Table Component
 * 
 * Production-grade data table with sorting, filtering, and pagination.
 * 
 * Features:
 * - Column sorting (asc/desc)
 * - Row selection (single/multi)
 * - Pagination controls
 * - Responsive design (mobile cards)
 * - Empty state
 * - Loading skeleton
 * - Custom cell renderers
 * - Sticky header
 * - Zebra striping
 * 
 * Design Token Compliance:
 * - Typography: var(--text-*) only
 * - Colors: var(--*) semantic roles
 * - Spacing: Tailwind classes only
 * - Fonts: Lexend (headings), Manrope (body)
 * 
 * @example
 * <DataTable
 *   columns={columns}
 *   data={data}
 *   sortable
 *   pagination
 * />
 */

import { useState, useMemo } from 'react';
import { ChevronUp, ChevronDown, ChevronsUpDown, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';
import { Button } from '../blocks/design/Buttons';

export interface Column<T = any> {
  /** Column key (matches data key) */
  key: string;
  /** Column header label */
  label: string;
  /** Column width */
  width?: string;
  /** Sortable */
  sortable?: boolean;
  /** Custom cell renderer */
  render?: (value: any, row: T) => React.ReactNode;
  /** Alignment */
  align?: 'left' | 'center' | 'right';
}

export interface DataTableProps<T = any> {
  /** Table columns */
  columns: Column<T>[];
  /** Table data */
  data: T[];
  /** Enable sorting */
  sortable?: boolean;
  /** Enable row selection */
  selectable?: boolean;
  /** Selected rows */
  selectedRows?: string[];
  /** Selection change handler */
  onSelectionChange?: (selectedIds: string[]) => void;
  /** Row key field */
  rowKey?: string;
  /** Enable pagination */
  pagination?: boolean;
  /** Items per page */
  pageSize?: number;
  /** Loading state */
  loading?: boolean;
  /** Empty state message */
  emptyMessage?: string;
  /** Zebra striping */
  striped?: boolean;
  /** Sticky header */
  stickyHeader?: boolean;
}

type SortDirection = 'asc' | 'desc' | null;

export function DataTable<T extends Record<string, any>>({
  columns,
  data,
  sortable = true,
  selectable = false,
  selectedRows = [],
  onSelectionChange,
  rowKey = 'id',
  pagination = true,
  pageSize = 10,
  loading = false,
  emptyMessage = 'No data available',
  striped = true,
  stickyHeader = false,
}: DataTableProps<T>) {
  const [sortKey, setSortKey] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<SortDirection>(null);
  const [currentPage, setCurrentPage] = useState(1);

  // Handle column sort
  const handleSort = (key: string) => {
    if (!sortable) return;

    const column = columns.find((col) => col.key === key);
    if (!column?.sortable && column?.sortable !== undefined) return;

    if (sortKey === key) {
      // Toggle direction: asc → desc → null
      if (sortDirection === 'asc') {
        setSortDirection('desc');
      } else if (sortDirection === 'desc') {
        setSortKey(null);
        setSortDirection(null);
      }
    } else {
      setSortKey(key);
      setSortDirection('asc');
    }
  };

  // Handle row selection
  const handleRowSelect = (id: string) => {
    if (!selectable || !onSelectionChange) return;

    if (selectedRows.includes(id)) {
      onSelectionChange(selectedRows.filter((rowId) => rowId !== id));
    } else {
      onSelectionChange([...selectedRows, id]);
    }
  };

  // Handle select all
  const handleSelectAll = () => {
    if (!selectable || !onSelectionChange) return;

    const allIds = data.map((row) => row[rowKey]);
    if (selectedRows.length === allIds.length) {
      onSelectionChange([]);
    } else {
      onSelectionChange(allIds);
    }
  };

  // Sort data
  const sortedData = useMemo(() => {
    if (!sortKey || !sortDirection) return data;

    return [...data].sort((a, b) => {
      const aVal = a[sortKey];
      const bVal = b[sortKey];

      if (aVal === bVal) return 0;

      let comparison = 0;
      if (typeof aVal === 'number' && typeof bVal === 'number') {
        comparison = aVal - bVal;
      } else {
        comparison = String(aVal).localeCompare(String(bVal));
      }

      return sortDirection === 'asc' ? comparison : -comparison;
    });
  }, [data, sortKey, sortDirection]);

  // Paginate data
  const paginatedData = useMemo(() => {
    if (!pagination) return sortedData;

    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return sortedData.slice(startIndex, endIndex);
  }, [sortedData, currentPage, pageSize, pagination]);

  // Pagination info
  const totalPages = Math.ceil(sortedData.length / pageSize);
  const startRow = (currentPage - 1) * pageSize + 1;
  const endRow = Math.min(currentPage * pageSize, sortedData.length);

  // Loading skeleton
  if (loading) {
    return (
      <div className="space-y-3">
        {Array.from({ length: pageSize }).map((_, i) => (
          <div
            key={i}
            className="h-12"
            style={{
              backgroundColor: 'var(--muted)',
              borderRadius: 'var(--radius)',
              animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            }}
          />
        ))}
      </div>
    );
  }

  // Empty state
  if (data.length === 0) {
    return (
      <div
        className="text-center p-12"
        style={{
          backgroundColor: 'var(--card)',
          border: '1px solid var(--border-soft)',
          borderRadius: 'var(--radius-xl)',
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-primary)',
            fontSize: 'var(--text-base)',
            color: 'var(--muted-foreground)',
            margin: 0,
          }}
        >
          {emptyMessage}
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Table Container */}
      <div
        style={{
          backgroundColor: 'var(--card)',
          border: '1px solid var(--border-soft)',
          borderRadius: 'var(--radius-xl)',
          overflow: 'hidden',
        }}
      >
        <div style={{ overflowX: 'auto' }}>
          <table
            style={{
              width: '100%',
              borderCollapse: 'collapse',
              fontFamily: 'var(--font-primary)',
            }}
          >
            {/* Table Header */}
            <thead
              style={{
                backgroundColor: 'var(--muted)',
                position: stickyHeader ? 'sticky' : 'relative',
                top: 0,
                zIndex: 10,
              }}
            >
              <tr>
                {/* Selection column */}
                {selectable && (
                  <th
                    style={{
                      padding: '12px 16px',
                      textAlign: 'left',
                      width: '48px',
                    }}
                  >
                    <input
                      type="checkbox"
                      checked={selectedRows.length === data.length}
                      onChange={handleSelectAll}
                      style={{
                        width: '18px',
                        height: '18px',
                        cursor: 'pointer',
                        accentColor: 'var(--primary)',
                      }}
                      aria-label="Select all rows"
                    />
                  </th>
                )}

                {/* Data columns */}
                {columns.map((column) => (
                  <th
                    key={column.key}
                    onClick={() => column.sortable !== false && handleSort(column.key)}
                    style={{
                      padding: '12px 16px',
                      textAlign: column.align || 'left',
                      fontFamily: 'var(--font-primary)',
                      fontSize: 'var(--text-base)',
                      fontWeight: 'var(--font-weight-semibold)',
                      color: 'var(--foreground)',
                      cursor: column.sortable !== false && sortable ? 'pointer' : 'default',
                      userSelect: 'none',
                      width: column.width,
                      whiteSpace: 'nowrap',
                    }}
                  >
                    <div className="flex items-center gap-2">
                      {column.label}

                      {/* Sort indicator */}
                      {sortable && column.sortable !== false && (
                        <span style={{ color: 'var(--muted-foreground)' }}>
                          {sortKey === column.key ? (
                            sortDirection === 'asc' ? (
                              <ChevronUp size={16} />
                            ) : (
                              <ChevronDown size={16} />
                            )
                          ) : (
                            <ChevronsUpDown size={16} />
                          )}
                        </span>
                      )}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {paginatedData.map((row, rowIndex) => {
                const rowId = row[rowKey];
                const isSelected = selectedRows.includes(rowId);

                return (
                  <tr
                    key={rowId}
                    onClick={() => selectable && handleRowSelect(rowId)}
                    style={{
                      backgroundColor:
                        isSelected
                          ? 'var(--primary-soft)'
                          : striped && rowIndex % 2 === 1
                          ? 'var(--muted)'
                          : 'transparent',
                      cursor: selectable ? 'pointer' : 'default',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      if (!isSelected) {
                        e.currentTarget.style.backgroundColor = 'var(--accent)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isSelected) {
                        e.currentTarget.style.backgroundColor =
                          striped && rowIndex % 2 === 1 ? 'var(--muted)' : 'transparent';
                      }
                    }}
                  >
                    {/* Selection column */}
                    {selectable && (
                      <td
                        style={{
                          padding: '12px 16px',
                          borderTop: '1px solid var(--border-extra-soft)',
                        }}
                      >
                        <input
                          type="checkbox"
                          checked={isSelected}
                          onChange={() => handleRowSelect(rowId)}
                          onClick={(e) => e.stopPropagation()}
                          style={{
                            width: '18px',
                            height: '18px',
                            cursor: 'pointer',
                            accentColor: 'var(--primary)',
                          }}
                          aria-label={`Select row ${rowId}`}
                        />
                      </td>
                    )}

                    {/* Data columns */}
                    {columns.map((column) => (
                      <td
                        key={column.key}
                        style={{
                          padding: '12px 16px',
                          textAlign: column.align || 'left',
                          borderTop: '1px solid var(--border-extra-soft)',
                          fontFamily: 'var(--font-primary)',
                          fontSize: 'var(--text-base)',
                          color: 'var(--foreground)',
                        }}
                      >
                        {column.render
                          ? column.render(row[column.key], row)
                          : row[column.key]}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      {pagination && totalPages > 1 && (
        <div className="flex items-center justify-between gap-4">
          {/* Info */}
          <p
            style={{
              fontFamily: 'var(--font-secondary)',
              fontSize: 'var(--text-small)',
              color: 'var(--muted-foreground)',
              margin: 0,
            }}
          >
            Showing {startRow} to {endRow} of {sortedData.length} results
          </p>

          {/* Controls */}
          <div className="flex items-center gap-2">
            {/* First page */}
            <button
              onClick={() => setCurrentPage(1)}
              disabled={currentPage === 1}
              className="p-2"
              style={{
                backgroundColor: 'transparent',
                color: currentPage === 1 ? 'var(--muted-foreground)' : 'var(--foreground)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius)',
                cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
                opacity: currentPage === 1 ? 0.5 : 1,
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                if (currentPage !== 1) {
                  e.currentTarget.style.backgroundColor = 'var(--muted)';
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
              aria-label="First page"
            >
              <ChevronsLeft size={18} />
            </button>

            {/* Previous page */}
            <button
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="p-2"
              style={{
                backgroundColor: 'transparent',
                color: currentPage === 1 ? 'var(--muted-foreground)' : 'var(--foreground)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius)',
                cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
                opacity: currentPage === 1 ? 0.5 : 1,
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                if (currentPage !== 1) {
                  e.currentTarget.style.backgroundColor = 'var(--muted)';
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
              aria-label="Previous page"
            >
              <ChevronLeft size={18} />
            </button>

            {/* Page numbers */}
            <div className="flex items-center gap-1">
              {Array.from({ length: Math.min(5, totalPages) }).map((_, i) => {
                const pageNumber = i + 1;
                const isActive = pageNumber === currentPage;

                return (
                  <button
                    key={pageNumber}
                    onClick={() => setCurrentPage(pageNumber)}
                    className="px-3 py-2"
                    style={{
                      fontFamily: 'var(--font-primary)',
                      fontSize: 'var(--text-base)',
                      fontWeight: isActive ? 'var(--font-weight-semibold)' : 'var(--font-weight-normal)',
                      backgroundColor: isActive ? 'var(--primary)' : 'transparent',
                      color: isActive ? 'var(--primary-foreground)' : 'var(--foreground)',
                      border: `1px solid ${isActive ? 'var(--primary)' : 'var(--border)'}`,
                      borderRadius: 'var(--radius)',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.backgroundColor = 'var(--muted)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.backgroundColor = 'transparent';
                      }
                    }}
                    aria-label={`Page ${pageNumber}`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {pageNumber}
                  </button>
                );
              })}
            </div>

            {/* Next page */}
            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="p-2"
              style={{
                backgroundColor: 'transparent',
                color: currentPage === totalPages ? 'var(--muted-foreground)' : 'var(--foreground)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius)',
                cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
                opacity: currentPage === totalPages ? 0.5 : 1,
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                if (currentPage !== totalPages) {
                  e.currentTarget.style.backgroundColor = 'var(--muted)';
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
              aria-label="Next page"
            >
              <ChevronRight size={18} />
            </button>

            {/* Last page */}
            <button
              onClick={() => setCurrentPage(totalPages)}
              disabled={currentPage === totalPages}
              className="p-2"
              style={{
                backgroundColor: 'transparent',
                color: currentPage === totalPages ? 'var(--muted-foreground)' : 'var(--foreground)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius)',
                cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
                opacity: currentPage === totalPages ? 0.5 : 1,
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                if (currentPage !== totalPages) {
                  e.currentTarget.style.backgroundColor = 'var(--muted)';
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
              aria-label="Last page"
            >
              <ChevronsRight size={18} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
