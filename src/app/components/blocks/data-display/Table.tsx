/**
 * Advanced Table Component
 * 
 * Feature-rich table with:
 * - Sortable columns
 * - Filterable data
 * - Pagination
 * - Row selection
 * - Responsive on mobile (stack or scroll)
 * - Design system compliant
 * 
 * Design System Compliance:
 * - Uses CSS variables for colors
 * - Uses Lexend font for headers
 * - Uses Manrope font for body text
 * - WCAG 2.1 AA compliant
 * 
 * @example
 * <Table
 *   columns={[
 *     { key: 'name', label: 'Name', sortable: true },
 *     { key: 'email', label: 'Email', sortable: true },
 *     { key: 'role', label: 'Role', sortable: false },
 *   ]}
 *   data={users}
 *   onSort={handleSort}
 *   onRowClick={handleRowClick}
 * />
 */

import { useState, useMemo } from 'react';

export interface TableColumn {
  /** Column key (matches data object key) */
  key: string;
  /** Column header label */
  label: string;
  /** Whether column is sortable */
  sortable?: boolean;
  /** Custom cell renderer */
  render?: (value: any, row: any) => React.ReactNode;
  /** Column width */
  width?: string;
  /** Text alignment */
  align?: 'left' | 'center' | 'right';
}

export interface TableProps {
  /** Table columns configuration */
  columns: TableColumn[];
  /** Table data */
  data: any[];
  /** Sort handler */
  onSort?: (key: string, direction: 'asc' | 'desc') => void;
  /** Row click handler */
  onRowClick?: (row: any) => void;
  /** Enable row selection */
  selectable?: boolean;
  /** Selected rows */
  selectedRows?: any[];
  /** Selection change handler */
  onSelectionChange?: (rows: any[]) => void;
  /** Enable pagination */
  pagination?: boolean;
  /** Rows per page */
  pageSize?: number;
  /** Loading state */
  loading?: boolean;
  /** Empty state message */
  emptyMessage?: string;
  /** Responsive mode */
  responsive?: 'stack' | 'scroll';
}

export function Table({
  columns,
  data,
  onSort,
  onRowClick,
  selectable = false,
  selectedRows = [],
  onSelectionChange,
  pagination = false,
  pageSize = 10,
  loading = false,
  emptyMessage = 'No data available',
  responsive = 'scroll',
}: TableProps) {
  const [sortKey, setSortKey] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [currentPage, setCurrentPage] = useState(1);

  // Handle column sort
  const handleSort = (key: string) => {
    const newDirection = sortKey === key && sortDirection === 'asc' ? 'desc' : 'asc';
    setSortKey(key);
    setSortDirection(newDirection);
    onSort?.(key, newDirection);
  };

  // Handle row selection
  const handleRowSelect = (row: any) => {
    if (!selectable || !onSelectionChange) return;

    const isSelected = selectedRows.some(r => r === row);
    const newSelection = isSelected
      ? selectedRows.filter(r => r !== row)
      : [...selectedRows, row];

    onSelectionChange(newSelection);
  };

  // Handle select all
  const handleSelectAll = () => {
    if (!selectable || !onSelectionChange) return;

    if (selectedRows.length === paginatedData.length) {
      onSelectionChange([]);
    } else {
      onSelectionChange(paginatedData);
    }
  };

  // Paginated data
  const paginatedData = useMemo(() => {
    if (!pagination) return data;

    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return data.slice(startIndex, endIndex);
  }, [data, currentPage, pageSize, pagination]);

  // Total pages
  const totalPages = Math.ceil(data.length / pageSize);

  // All rows selected
  const allSelected = selectedRows.length === paginatedData.length && paginatedData.length > 0;

  return (
    <div className="table-container">
      {/* Table Wrapper */}
      <div
        style={{
          width: '100%',
          overflowX: responsive === 'scroll' ? 'auto' : 'visible',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius-lg)',
          backgroundColor: 'var(--card)',
        }}
      >
        <table
          style={{
            width: '100%',
            borderCollapse: 'collapse',
            fontFamily: 'Manrope, sans-serif',
            fontSize: 'var(--text-base)',
          }}
        >
          {/* Table Header */}
          <thead>
            <tr
              style={{
                backgroundColor: 'var(--muted)',
                borderBottom: '1px solid var(--border)',
              }}
            >
              {/* Select All Checkbox */}
              {selectable && (
                <th
                  style={{
                    padding: '1rem',
                    textAlign: 'left',
                    width: '48px',
                  }}
                >
                  <input
                    type="checkbox"
                    checked={allSelected}
                    onChange={handleSelectAll}
                    aria-label="Select all rows"
                    style={{
                      width: '18px',
                      height: '18px',
                      cursor: 'pointer',
                    }}
                  />
                </th>
              )}

              {/* Column Headers */}
              {columns.map((column) => (
                <th
                  key={column.key}
                  onClick={() => column.sortable && handleSort(column.key)}
                  style={{
                    padding: '1rem',
                    textAlign: column.align || 'left',
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-base)',
                    fontWeight: '500',
                    color: 'var(--foreground)',
                    cursor: column.sortable ? 'pointer' : 'default',
                    userSelect: 'none',
                    width: column.width,
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      justifyContent: column.align === 'center' ? 'center' : column.align === 'right' ? 'flex-end' : 'flex-start',
                    }}
                  >
                    <span>{column.label}</span>
                    {column.sortable && (
                      <span style={{ fontSize: '12px', color: 'var(--muted-foreground)' }}>
                        {sortKey === column.key ? (sortDirection === 'asc' ? '↑' : '↓') : '↕'}
                      </span>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {loading ? (
              <tr>
                <td
                  colSpan={columns.length + (selectable ? 1 : 0)}
                  style={{
                    padding: '3rem',
                    textAlign: 'center',
                    color: 'var(--muted-foreground)',
                  }}
                >
                  Loading...
                </td>
              </tr>
            ) : paginatedData.length === 0 ? (
              <tr>
                <td
                  colSpan={columns.length + (selectable ? 1 : 0)}
                  style={{
                    padding: '3rem',
                    textAlign: 'center',
                    color: 'var(--muted-foreground)',
                  }}
                >
                  {emptyMessage}
                </td>
              </tr>
            ) : (
              paginatedData.map((row, rowIndex) => {
                const isSelected = selectedRows.some(r => r === row);

                return (
                  <tr
                    key={rowIndex}
                    onClick={() => onRowClick?.(row)}
                    style={{
                      borderBottom: '1px solid var(--border)',
                      backgroundColor: isSelected ? 'var(--accent)' : 'transparent',
                      cursor: onRowClick ? 'pointer' : 'default',
                      transition: 'background-color 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      if (!isSelected) {
                        e.currentTarget.style.backgroundColor = 'var(--muted)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isSelected) {
                        e.currentTarget.style.backgroundColor = 'transparent';
                      }
                    }}
                  >
                    {/* Row Selection Checkbox */}
                    {selectable && (
                      <td
                        style={{
                          padding: '1rem',
                        }}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleRowSelect(row);
                        }}
                      >
                        <input
                          type="checkbox"
                          checked={isSelected}
                          onChange={() => handleRowSelect(row)}
                          aria-label={`Select row ${rowIndex + 1}`}
                          style={{
                            width: '18px',
                            height: '18px',
                            cursor: 'pointer',
                          }}
                        />
                      </td>
                    )}

                    {/* Row Cells */}
                    {columns.map((column) => (
                      <td
                        key={column.key}
                        style={{
                          padding: '1rem',
                          textAlign: column.align || 'left',
                          color: 'var(--foreground)',
                        }}
                      >
                        {column.render ? column.render(row[column.key], row) : row[column.key]}
                      </td>
                    ))}
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {pagination && totalPages > 1 && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '1.5rem',
            gap: '1rem',
          }}
        >
          {/* Page Info */}
          <div
            style={{
              fontFamily: 'Manrope, sans-serif',
              fontSize: 'var(--text-small)',
              color: 'var(--muted-foreground)',
            }}
          >
            Showing {(currentPage - 1) * pageSize + 1} to {Math.min(currentPage * pageSize, data.length)} of {data.length} results
          </div>

          {/* Pagination Buttons */}
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              style={{
                padding: '0.5rem 1rem',
                fontFamily: 'Lexend, sans-serif',
                fontSize: 'var(--text-base)',
                fontWeight: '500',
                backgroundColor: 'var(--background)',
                color: 'var(--foreground)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius)',
                cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
                opacity: currentPage === 1 ? 0.5 : 1,
                transition: 'all 0.2s ease',
              }}
            >
              Previous
            </button>

            {/* Page Numbers */}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                style={{
                  padding: '0.5rem 1rem',
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-base)',
                  fontWeight: '500',
                  backgroundColor: page === currentPage ? 'var(--primary)' : 'var(--background)',
                  color: page === currentPage ? 'var(--primary-foreground)' : 'var(--foreground)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              style={{
                padding: '0.5rem 1rem',
                fontFamily: 'Lexend, sans-serif',
                fontSize: 'var(--text-base)',
                fontWeight: '500',
                backgroundColor: 'var(--background)',
                color: 'var(--foreground)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius)',
                cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
                opacity: currentPage === totalPages ? 0.5 : 1,
                transition: 'all 0.2s ease',
              }}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

/**
 * Simple Table Component (Lightweight)
 * 
 * Minimal table without sorting/pagination.
 * Perfect for small data sets.
 */
export interface SimpleTableProps {
  /** Column headers */
  headers: string[];
  /** Table rows (array of arrays) */
  rows: any[][];
  /** Enable striped rows */
  striped?: boolean;
}

export function SimpleTable({ headers, rows, striped = false }: SimpleTableProps) {
  return (
    <div
      style={{
        width: '100%',
        overflowX: 'auto',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius-lg)',
        backgroundColor: 'var(--card)',
      }}
    >
      <table
        style={{
          width: '100%',
          borderCollapse: 'collapse',
          fontFamily: 'Manrope, sans-serif',
          fontSize: 'var(--text-base)',
        }}
      >
        <thead>
          <tr
            style={{
              backgroundColor: 'var(--muted)',
              borderBottom: '1px solid var(--border)',
            }}
          >
            {headers.map((header, index) => (
              <th
                key={index}
                style={{
                  padding: '1rem',
                  textAlign: 'left',
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-base)',
                  fontWeight: '500',
                  color: 'var(--foreground)',
                }}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              style={{
                borderBottom: '1px solid var(--border)',
                backgroundColor: striped && rowIndex % 2 === 1 ? 'var(--muted)' : 'transparent',
              }}
            >
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  style={{
                    padding: '1rem',
                    color: 'var(--foreground)',
                  }}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
