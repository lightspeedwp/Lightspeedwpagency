/**
 * Design Blocks - WordPress Core Design Category Blocks
 * 
 * React implementations of WordPress core blocks from the "Design" category.
 * Each component maps to a WordPress block and follows the design system requirements.
 * 
 * @see /guidelines/blocks/design/
 */

// Accordion block
export { Accordion, AccordionItem } from './Accordion';
export type { AccordionProps, AccordionItemProps } from './Accordion';

// Badge block
export { Badge } from './Badge';
export type { BadgeProps } from './Badge';

// Buttons block
export { Buttons, ButtonBlock, Button } from './Buttons';
export type { ButtonsProps, ButtonProps } from './Buttons';

// Card block
export { Card } from './Card';

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

// Separator block
export { Separator } from './Separator';

// Spacer block
export { Spacer } from './Spacer';

// Tabs block
export { Tabs } from './Tabs';
