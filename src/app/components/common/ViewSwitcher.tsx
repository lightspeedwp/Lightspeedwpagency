/**
 * ViewSwitcher Component
 *
 * Toggles between 3-column grid, 2-column grid, and single-column list views.
 * Shared by Portfolio Archive and Blog Archive templates.
 *
 * @see /src/styles/components/view-switcher.css
 */

import { LayoutGrid, Columns2, List } from 'lucide-react';

export type ViewMode = 'grid-3' | 'grid-2' | 'list';

export interface ViewSwitcherProps {
  /** Current active view */
  value: ViewMode;
  /** Callback when view changes */
  onChange: (mode: ViewMode) => void;
}

const views: { mode: ViewMode; label: string; Icon: typeof LayoutGrid }[] = [
  { mode: 'grid-3', label: 'Grid', Icon: LayoutGrid },
  { mode: 'grid-2', label: 'Cards', Icon: Columns2 },
  { mode: 'list', label: 'List', Icon: List },
];

export function ViewSwitcher({ value, onChange }: ViewSwitcherProps) {
  return (
    <div className="view-switcher" role="radiogroup" aria-label="Layout view">
      {views.map(({ mode, label, Icon }) => (
        <button
          key={mode}
          type="button"
          role="radio"
          aria-checked={value === mode}
          className={`view-switcher__btn${value === mode ? ' view-switcher__btn--active' : ''}`}
          onClick={() => onChange(mode)}
        >
          <Icon size={16} className="view-switcher__icon" aria-hidden="true" />
          <span className="view-switcher__label">{label}</span>
        </button>
      ))}
    </div>
  );
}