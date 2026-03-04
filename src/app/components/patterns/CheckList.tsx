/**
 * CheckList Pattern Component
 * 
 * WordPress pattern: lsx-design/content/checklist
 * 
 * Simple checklist component for benefits, features, deliverables.
 * Displays a vertical list of items with check icons.
 * 
 * Features:
 * - Inline display (no Section/Container wrappers)
 * - Check icon + text
 * - Optional custom icon
 * - 100% CSS variable compliance (colors, spacing, typography)
 * - ONLY uses var(--font-primary) and var(--font-secondary)
 * 
 * Variants:
 *   - default: Standard checklist with primary color checks
 *   - compact: Smaller sizing for tight spaces
 *   - large: Larger sizing for emphasis
 * 
 * @see /src/styles/patterns/checklist.css
 */

import '@/styles/patterns/checklist.css';
import { CheckCircle } from '@phosphor-icons/react';
import type { UniversalIcon } from '../../utils/icon-map';

export interface CheckListProps {
  /** Array of items (strings or objects with text + optional icon) */
  items: (string | { text: string; icon?: UniversalIcon })[];
  /** Visual variant */
  variant?: 'default' | 'compact' | 'large';
  /** Custom icon to use instead of CheckCircle */
  icon?: UniversalIcon;
  /** Optional CSS class name */
  className?: string;
}

/**
 * CheckList Component
 * 
 * Renders a simple vertical checklist with icons.
 * Perfect for benefits, features, deliverables sections.
 * 
 * @example
 * ```tsx
 * <CheckList
 *   items={[
 *     'Custom WordPress themes',
 *     'Block-based development',
 *     'FSE compatibility',
 *     'WCAG 2.1 AA accessible'
 *   ]}
 * />
 * 
 * // With custom icon
 * <CheckList
 *   items={['Benefit 1', 'Benefit 2']}
 *   icon={Award}
 *   variant="large"
 * />
 * 
 * // With mixed icons
 * <CheckList
 *   items={[
 *     { text: 'Feature 1', icon: Zap },
 *     { text: 'Feature 2', icon: Shield },
 *     'Feature 3' // Uses default icon
 *   ]}
 * />
 * ```
 */
export function CheckList({
  items,
  variant = 'default',
  icon: DefaultIcon = CheckCircle,
  className = ''
}: CheckListProps) {
  return (
    <ul 
      className={`checklist checklist--${variant} ${className}`}
      role="list"
    >
      {items.map((item, index) => {
        const text = typeof item === 'string' ? item : item.text;
        const Icon = typeof item === 'object' && item.icon ? item.icon : DefaultIcon;
        
        return (
          <li key={index} className="checklist__item">
            <Icon 
              className="checklist__icon" 
              aria-hidden="true"
            />
            <span className="checklist__text">
              {text}
            </span>
          </li>
        );
      })}
    </ul>
  );
}