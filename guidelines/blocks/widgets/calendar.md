# Calendar Block Guidelines

**WordPress Block:** `core/calendar`  
**CSS:** `/src/styles/blocks/widgets/calendar.css`

## Component

```tsx
import '@/styles/blocks/widgets/calendar.css';

export const CalendarBlock = () => (
  <div className="wp-block-calendar">
    <table className="wp-block-calendar__table">
      <caption className="wp-block-calendar__caption">January 2025</caption>
      <thead>
        <tr>
          <th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th>
        </tr>
      </thead>
      <tbody>{/* Calendar days */}</tbody>
    </table>
  </div>
);
```

## CSS

```css
.wp-block-calendar {
  margin-bottom: var(--spacing-6);
}

.wp-block-calendar__table {
  width: 100%;
  border-collapse: collapse;
  font-family: var(--font-primary);
}

.wp-block-calendar__caption {
  font-size: var(--text-lg);
  font-weight: var(--font-weight-medium);
  color: var(--foreground);
  padding: var(--spacing-3);
  caption-side: top;
}

.wp-block-calendar th,
.wp-block-calendar td {
  padding: var(--spacing-2);
  text-align: center;
  font-size: var(--text-sm);
  color: var(--foreground);
  border: 1px solid var(--border);
}

.wp-block-calendar th {
  background: var(--muted);
  font-weight: var(--font-weight-medium);
}

.wp-block-calendar td a {
  color: var(--primary);
  text-decoration: none;
  font-weight: var(--font-weight-medium);
}
```

**Status:** ✅ COMPLETE | **Design System:** 100% Compliant
