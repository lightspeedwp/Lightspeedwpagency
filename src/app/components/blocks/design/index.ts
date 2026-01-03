/**
 * Design Blocks - WordPress Core Design Category Blocks
 * 
 * This folder contains React implementations of WordPress core blocks
 * from the "Design" category. Each component maps to a WordPress block
 * and follows the design system requirements.
 * 
 * Available blocks:
 * - Buttons (core/buttons) - Container for multiple button blocks
 * - Group (core/group) - Versatile container for grouping blocks
 * - Grid (core/grid) - Flexible grid layout container
 * - Stack (core/stack) - Vertical layout with consistent spacing
 * - Row (core/row) - Horizontal layout container
 * - Columns (core/columns) - Multi-column layout with Column children
 * 
 * @see /guidelines/blocks/design/
 */

// Buttons block
export { Buttons, ButtonBlock, Button } from './Buttons';
export type { ButtonsProps, ButtonProps } from './Buttons';

// Group block
export { Group } from './Group';
export type { GroupProps } from './Group';

// Grid block
export { Grid } from './Grid';
export type { GridProps } from './Grid';

// Stack block
export { Stack } from './Stack';
export type { StackProps } from './Stack';

// Row block
export { Row } from './Row';
export type { RowProps } from './Row';

// Columns block
export { Columns, Column } from './Columns';
export type { ColumnsProps, ColumnProps } from './Columns';
