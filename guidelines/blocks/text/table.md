# Table Block

**WordPress Block:** `core/table`  
**Category:** Text Blocks  
**Component:** `/src/app/components/blocks/text/Table.tsx`  
**CSS File:** `/src/styles/blocks/text/table.css`

---

## Purpose

The Table block displays tabular data in rows and columns. It provides structured presentation of data, comparisons, specifications, and organized information.

**Use this block when:**
- Displaying data in rows and columns
- Showing pricing comparisons
- Listing product specifications
- Creating feature comparison tables
- Presenting statistical data

**Do NOT use this block when:**
- Displaying a simple list (use List block)
- Creating layout grids (use Grid block)
- Building forms (use Form components)
- Showing single data points (use Paragraph block)

---

## Block Structure

### Simple Table
```tsx
import { Table, TableHead, TableBody, TableRow, TableCell } from '@/app/components/blocks/text/Table';

<Table>
  <TableHead>
    <TableRow>
      <TableCell>Header 1</TableCell>
      <TableCell>Header 2</TableCell>
    </TableRow>
  </TableHead>
  <TableBody>
    <TableRow>
      <TableCell>Data 1</TableCell>
      <TableCell>Data 2</TableCell>
    </TableRow>
  </TableBody>
</Table>
```

---

## Props API

```typescript
interface TableProps {
  /** Table content */
  children: React.ReactNode;
  
  /** Table style variant */
  variant?: 'default' | 'striped' | 'bordered';
  
  /** Enable fixed column widths */
  fixedLayout?: boolean;
  
  /** Additional CSS classes */
  className?: string;
  
  /** Caption for accessibility */
  caption?: string;
}

interface TableCellProps {
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
}
```

---

## Variant Examples

### Default Table
```tsx
<Table caption="Pricing comparison">
  <TableHead>
    <TableRow>
      <TableCell>Plan</TableCell>
      <TableCell>Price</TableCell>
      <TableCell>Features</TableCell>
    </TableRow>
  </TableHead>
  <TableBody>
    <TableRow>
      <TableCell>Basic</TableCell>
      <TableCell>$99/mo</TableCell>
      <TableCell>5 pages</TableCell>
    </TableRow>
  </TableBody>
</Table>
```

### Striped Table
```tsx
<Table variant="striped">
  {/* Alternating row backgrounds */}
</Table>
```

### Bordered Table
```tsx
<Table variant="bordered">
  {/* All cells have borders */}
</Table>
```

---

## CSS Variables

```css
/* Typography */
--font-primary     /* Table font family */
--text-sm          /* Table cell text size */
--text-xs          /* Table caption text size */

/* Colors */
--foreground       /* Table text color */
--border           /* Table border color */
--muted            /* Striped row background */

/* Spacing */
--spacing-3        /* Cell padding */
--spacing-4        /* Table margin */

/* Borders */
--radius           /* Table border radius */
```

---

## BEM Class Naming

```css
.wp-block-table               /* Root container */
.wp-block-table--striped      /* Striped variant */
.wp-block-table--bordered     /* Bordered variant */
.wp-block-table--fixed        /* Fixed layout */

.wp-block-table__caption      /* Table caption */
.wp-block-table__head         /* Table header */
.wp-block-table__body         /* Table body */
.wp-block-table__row          /* Table row */
.wp-block-table__cell         /* Table cell */
.wp-block-table__cell--header /* Header cell */
.wp-block-table__cell--left   /* Left aligned */
.wp-block-table__cell--center /* Center aligned */
.wp-block-table__cell--right  /* Right aligned */
```

---

## Accessibility Requirements

### WCAG 2.1 AA Compliance

- ✅ **Semantic HTML:** Use `<table>`, `<thead>`, `<tbody>`, `<tr>`, `<th>`, `<td>`
- ✅ **Table Caption:** Use `<caption>` for table purpose
- ✅ **Header Cells:** Use `<th>` with `scope` attribute
- ✅ **Contrast Ratios:** Minimum 4.5:1 for text
- ✅ **Responsive:** Horizontal scroll on mobile
- ✅ **Keyboard Navigation:** Tab through cells

### Implementation
```tsx
<table className="wp-block-table">
  <caption className="wp-block-table__caption">
    Pricing Comparison
  </caption>
  <thead className="wp-block-table__head">
    <tr className="wp-block-table__row">
      <th className="wp-block-table__cell--header" scope="col">
        Plan
      </th>
      <th className="wp-block-table__cell--header" scope="col">
        Price
      </th>
    </tr>
  </thead>
  <tbody className="wp-block-table__body">
    <tr className="wp-block-table__row">
      <td className="wp-block-table__cell">Basic</td>
      <td className="wp-block-table__cell">$99/mo</td>
    </tr>
  </tbody>
</table>
```

---

## Responsive Behavior

| Breakpoint | Behavior | Font Size |
|------------|----------|-----------|
| **Mobile** (< 768px) | Horizontal scroll | 14px |
| **Tablet** (768px - 1023px) | Full width | 15px |
| **Desktop** (≥ 1024px) | Full width | var(--text-sm) |

```css
/* Mobile: Horizontal scroll wrapper */
@media (max-width: 767px) {
  .wp-block-table {
    display: block;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
}
```

---

## WordPress Mapping

```html
<!-- wp:table -->
<figure class="wp-block-table">
  <table>
    <thead>
      <tr>
        <th>Header 1</th>
        <th>Header 2</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Data 1</td>
        <td>Data 2</td>
      </tr>
    </tbody>
  </table>
</figure>
<!-- /wp:table -->
```

---

## Usage Examples

### Pricing Table
```tsx
<Table variant="bordered" caption="Pricing plans">
  <TableHead>
    <TableRow>
      <TableCell>Feature</TableCell>
      <TableCell align="center">Basic</TableCell>
      <TableCell align="center">Pro</TableCell>
      <TableCell align="center">Enterprise</TableCell>
    </TableRow>
  </TableHead>
  <TableBody>
    <TableRow>
      <TableCell>Pages</TableCell>
      <TableCell align="center">5</TableCell>
      <TableCell align="center">20</TableCell>
      <TableCell align="center">Unlimited</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>Price</TableCell>
      <TableCell align="center">$99/mo</TableCell>
      <TableCell align="center">$299/mo</TableCell>
      <TableCell align="center">Custom</TableCell>
    </TableRow>
  </TableBody>
</Table>
```

---

## Related Components

- **[List](./list.md)** - Ordered/unordered lists
- **[Paragraph](./paragraph.md)** - Body text
- **[Heading](./heading.md)** - Section headings

---

**Last Updated:** January 22, 2025  
**Status:** ✅ Complete  
**Compliance:** 100% CSS Variables, WCAG 2.1 AA, WordPress FSE Ready
