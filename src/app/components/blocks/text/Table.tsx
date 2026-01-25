/**
 * Table Block Component
 * 
 * WordPress Block: core/table
 * Category: Text Blocks
 * 
 * @see /guidelines/blocks/text/table.md
 * @see /src/styles/blocks/text/table.css
 * 
 * CRITICAL REQUIREMENTS:
 * - 100% CSS variables (NO hardcoded values)
 * - WordPress BEM class naming (.wp-block-table)
 * - Dedicated CSS file for ALL styling
 * - WCAG 2.1 AA compliant
 * - Approved fonts only (var(--font-primary))
 */

import '@/styles/blocks/text/table.css';
import React from 'react';

export interface TableProps {
  /** Table content */
  children: React.ReactNode;
  
  /** Table style variant */
  variant?: 'default' | 'striped' | 'bordered';
  
  /** Enable fixed column widths */
  fixedLayout?: boolean;
  
  /** Caption for accessibility */
  caption?: string;
  
  /** Additional CSS classes */
  className?: string;
}

export interface TableRowProps {
  /** Row cells */
  children: React.ReactNode;
  
  /** Additional CSS classes */
  className?: string;
}

export interface TableCellProps {
  /** Cell content */
  children: React.ReactNode;
  
  /** Cell type */
  as?: 'th' | 'td';
  
  /** Column span */
  colSpan?: number;
  
  /** Row span */
  rowSpan?: number;
  
  /** Text alignment */
  align?: 'left' | 'center' | 'right';
  
  /** Additional CSS classes */
  className?: string;
  
  /** Scope attribute for header cells */
  scope?: 'col' | 'row' | 'colgroup' | 'rowgroup';
}

/**
 * Table Block
 * 
 * Displays tabular data in rows and columns.
 * Uses 100% CSS variables for complete user control.
 * 
 * @example
 * ```tsx
 * <Table caption="Pricing comparison">
 *   <TableHead>
 *     <TableRow>
 *       <TableCell>Plan</TableCell>
 *       <TableCell>Price</TableCell>
 *     </TableRow>
 *   </TableHead>
 *   <TableBody>
 *     <TableRow>
 *       <TableCell>Basic</TableCell>
 *       <TableCell>$99/mo</TableCell>
 *     </TableRow>
 *   </TableBody>
 * </Table>
 * ```
 */
export function Table({
  children,
  variant = 'default',
  fixedLayout = false,
  caption,
  className = ''
}: TableProps) {
  // Build BEM classes
  const blockClass = 'wp-block-table';
  const variantClass = variant !== 'default' ? `${blockClass}--${variant}` : '';
  const layoutClass = fixedLayout ? `${blockClass}--fixed` : '';
  const classes = [blockClass, variantClass, layoutClass, className]
    .filter(Boolean)
    .join(' ');

  return (
    <div className="wp-block-table-wrapper">
      <table className={classes}>
        {caption && (
          <caption className={`${blockClass}__caption`}>
            {caption}
          </caption>
        )}
        {children}
      </table>
    </div>
  );
}

/**
 * TableHead Component
 * 
 * Table header section.
 */
export function TableHead({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const classes = ['wp-block-table__head', className]
    .filter(Boolean)
    .join(' ');

  return (
    <thead className={classes}>
      {children}
    </thead>
  );
}

/**
 * TableBody Component
 * 
 * Table body section.
 */
export function TableBody({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const classes = ['wp-block-table__body', className]
    .filter(Boolean)
    .join(' ');

  return (
    <tbody className={classes}>
      {children}
    </tbody>
  );
}

/**
 * TableRow Component
 * 
 * Table row containing cells.
 */
export function TableRow({
  children,
  className = ''
}: TableRowProps) {
  const classes = ['wp-block-table__row', className]
    .filter(Boolean)
    .join(' ');

  return (
    <tr className={classes}>
      {children}
    </tr>
  );
}

/**
 * TableCell Component
 * 
 * Table cell (data or header).
 */
export function TableCell({
  children,
  as = 'td',
  colSpan,
  rowSpan,
  align = 'left',
  scope,
  className = ''
}: TableCellProps) {
  const blockClass = 'wp-block-table__cell';
  const headerClass = as === 'th' ? `${blockClass}--header` : '';
  const alignClass = `${blockClass}--${align}`;
  const classes = [blockClass, headerClass, alignClass, className]
    .filter(Boolean)
    .join(' ');

  const CellElement = as;

  return (
    <CellElement
      className={classes}
      colSpan={colSpan}
      rowSpan={rowSpan}
      scope={as === 'th' ? scope : undefined}
    >
      {children}
    </CellElement>
  );
}
