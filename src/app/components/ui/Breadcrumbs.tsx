/**
 * Breadcrumbs Component
 * 
 * Production-grade navigation breadcrumb trail.
 * 
 * Features:
 * - Clickable navigation links
 * - Custom separator
 * - Icon support
 * - Collapsed mode (show first/last only)
 * - Responsive (mobile truncation)
 * - Accessible (ARIA attributes)
 * 
 * Design Token Compliance:
 * - Typography: var(--text-*) only
 * - Colors: var(--*) semantic roles
 * - Spacing: Tailwind classes only
 * - Fonts: Lexend (headings), Manrope (body)
 * 
 * @example
 * <Breadcrumbs
 *   items={[
 *     { label: 'Home', href: '/' },
 *     { label: 'Products', href: '/products' },
 *     { label: 'Shoes' },
 *   ]}
 * />
 */

import { ChevronRight, Home, MoreHorizontal, LucideIcon } from 'lucide-react';
import { useNavigation } from '../../hooks/useNavigation';

export interface BreadcrumbItem {
  /** Item label */
  label: string;
  /** Item href */
  href?: string;
  /** Icon */
  icon?: LucideIcon;
}

export interface BreadcrumbsProps {
  /** Breadcrumb items */
  items: BreadcrumbItem[];
  /** Custom separator */
  separator?: React.ReactNode;
  /** Show home icon */
  showHomeIcon?: boolean;
  /** Max items to show (collapse middle items) */
  maxItems?: number;
  /** Size */
  size?: 'sm' | 'md' | 'lg';
}

export function Breadcrumbs({
  items,
  separator,
  showHomeIcon = true,
  maxItems,
  size = 'md',
}: BreadcrumbsProps) {
  const { navigateTo } = useNavigation();

  // Font sizes
  const sizes = {
    sm: 'var(--text-small)',
    md: 'var(--text-base)',
    lg: 'var(--text-lg)',
  };

  // Icon sizes
  const iconSizes = {
    sm: 14,
    md: 16,
    lg: 18,
  };

  // Collapse items if maxItems is set
  const displayItems = maxItems && items.length > maxItems
    ? [
        items[0],
        { label: '...', href: undefined, icon: MoreHorizontal },
        ...items.slice(items.length - (maxItems - 1)),
      ]
    : items;

  const handleClick = (href?: string) => {
    if (href) {
      navigateTo(href);
    }
  };

  return (
    <nav aria-label="Breadcrumb">
      <ol
        className="flex items-center flex-wrap gap-2"
        style={{
          listStyle: 'none',
          padding: 0,
          margin: 0,
        }}
      >
        {displayItems.map((item, index) => {
          const isLast = index === displayItems.length - 1;
          const Icon = item.icon;
          const isHome = index === 0 && showHomeIcon;
          const isCollapsed = item.icon === MoreHorizontal;

          return (
            <li
              key={index}
              className="flex items-center gap-2"
            >
              {/* Item */}
              {item.href && !isLast ? (
                <button
                  onClick={() => handleClick(item.href)}
                  className="flex items-center gap-2"
                  style={{
                    fontFamily: 'var(--font-primary)',
                    fontSize: sizes[size],
                    fontWeight: 'var(--font-weight-medium)',
                    color: 'var(--muted-foreground)',
                    backgroundColor: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease',
                    padding: 0,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--primary)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--muted-foreground)';
                  }}
                  aria-label={item.label}
                >
                  {isHome ? (
                    <Home size={iconSizes[size]} />
                  ) : Icon ? (
                    <Icon size={iconSizes[size]} />
                  ) : null}
                  {!isHome && <span>{item.label}</span>}
                </button>
              ) : (
                <span
                  className="flex items-center gap-2"
                  style={{
                    fontFamily: 'var(--font-primary)',
                    fontSize: sizes[size],
                    fontWeight: isLast ? 'var(--font-weight-semibold)' : 'var(--font-weight-medium)',
                    color: isLast ? 'var(--foreground)' : 'var(--muted-foreground)',
                  }}
                  aria-current={isLast ? 'page' : undefined}
                >
                  {isHome ? (
                    <Home size={iconSizes[size]} />
                  ) : Icon ? (
                    <Icon size={iconSizes[size]} />
                  ) : null}
                  {(!isHome || isCollapsed) && <span>{item.label}</span>}
                </span>
              )}

              {/* Separator */}
              {!isLast && (
                <div
                  style={{
                    color: 'var(--muted-foreground)',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                  aria-hidden="true"
                >
                  {separator || <ChevronRight size={iconSizes[size]} />}
                </div>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

/**
 * Auto Breadcrumbs Component
 * 
 * Automatically generate breadcrumbs from current path.
 */
export interface AutoBreadcrumbsProps {
  /** Current path */
  path: string;
  /** Custom labels for paths */
  labels?: Record<string, string>;
  /** Show home icon */
  showHomeIcon?: boolean;
  /** Size */
  size?: 'sm' | 'md' | 'lg';
}

export function AutoBreadcrumbs({
  path,
  labels = {},
  showHomeIcon = true,
  size = 'md',
}: AutoBreadcrumbsProps) {
  // Parse path into segments
  const segments = path.split('/').filter(Boolean);

  // Generate breadcrumb items
  const items: BreadcrumbItem[] = [
    { label: 'Home', href: '/' },
    ...segments.map((segment, index) => {
      const href = '/' + segments.slice(0, index + 1).join('/');
      const label = labels[segment] || segment
        .split('-')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

      return {
        label,
        href: index < segments.length - 1 ? href : undefined,
      };
    }),
  ];

  return (
    <Breadcrumbs
      items={items}
      showHomeIcon={showHomeIcon}
      size={size}
    />
  );
}
