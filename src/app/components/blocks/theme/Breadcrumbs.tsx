/**
 * Breadcrumbs Block Component
 * 
 * WordPress Block: custom (or Yoast/RankMath)
 * Style: .wp-block-breadcrumbs
 */

import React from 'react';
import '@/styles/blocks/theme/breadcrumbs.css';
import { ChevronRight, Home, MoreHorizontal } from 'lucide-react';
import { useNavigation } from '@/app/contexts/NavigationContext';

export interface BreadcrumbItem {
  label: string;
  href?: string;
  page?: string;
  icon?: React.ComponentType<{ size?: number; className?: string }>;
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
  separator?: React.ReactNode;
  showHomeIcon?: boolean;
  maxItems?: number;
}

export function Breadcrumbs({ 
  items, 
  className = '', 
  separator, 
  showHomeIcon = false,
  maxItems 
}: BreadcrumbsProps) {
  const { navigateTo } = useNavigation();

  // Collapse breadcrumbs if maxItems is set
  const displayItems = maxItems && items.length > maxItems
    ? [
        items[0],
        { label: '...', href: undefined, icon: MoreHorizontal },
        ...items.slice(items.length - (maxItems - 1)),
      ]
    : items;

  return (
    <nav 
      className={`wp-block-breadcrumbs ${className}`.trim()} 
      aria-label="Breadcrumb"
    >
      <ol className="wp-block-breadcrumbs__list">
        {displayItems.map((item, index) => {
          const isLast = index === displayItems.length - 1;
          const isHome = index === 0 && showHomeIcon;
          const Icon = item.icon;
          const isCollapsed = item.label === '...';
          
          return (
            <li key={index} className="wp-block-breadcrumbs__item">
              {index > 0 && (
                <span className="wp-block-breadcrumbs__separator" aria-hidden="true">
                  {separator || <ChevronRight size={12} />}
                </span>
              )}
              
              {isLast ? (
                <span className="wp-block-breadcrumbs__current wp-block-breadcrumbs__current-wrapper" aria-current="page">
                  {isHome ? <Home size={14} /> : (Icon && <Icon size={14} />)}
                  {(!isHome || isCollapsed || !showHomeIcon) && item.label}
                </span>
              ) : (
                item.page ? (
                  <button 
                    onClick={() => navigateTo(item.page!)}
                    className="wp-block-breadcrumbs__link"
                  >
                    {isHome ? <Home size={14} /> : (Icon && <Icon size={14} />)}
                    {(!isHome || !showHomeIcon) && item.label}
                  </button>
                ) : (
                  <a href={item.href || '#'} className="wp-block-breadcrumbs__link">
                    {isHome ? <Home size={14} /> : (Icon && <Icon size={14} />)}
                    {(!isHome || !showHomeIcon) && item.label}
                  </a>
                )
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
