/**
 * Page Switcher Block Component
 * 
 * WordPress Block: dev-tools/page-switcher
 * 
 * UI utility for prototype navigation.
 * Allows switching between different template examples.
 * 
 * @see /src/styles/blocks/dev-tools/page-switcher.css
 */

import { useState } from 'react';
import '@/styles/blocks/dev-tools/page-switcher.css';
import { pageSwitcherGroups } from '../../../../data/page-switcher';

export interface PageSwitcherProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

export function PageSwitcher({ currentPage, onPageChange }: PageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Flatten all pages for finding current page label
  const allPages = pageSwitcherGroups.flatMap(group => group.pages);
  const currentPageLabel = allPages.find(p => p.id === currentPage)?.label || 'View Templates';

  return (
    <div className="wp-block-page-switcher">
      {/* Page Selector Dropdown - Opens UPWARD */}
      {isOpen && (
        <div className="wp-block-page-switcher__dropdown">
          {pageSwitcherGroups.map((group, groupIndex) => (
            <div key={groupIndex} className="wp-block-page-switcher__group">
              {/* Group Label */}
              <div className="wp-block-page-switcher__group-label">
                {group.label}
              </div>

              {/* Group Pages */}
              {group.pages.map((page) => (
                <button
                  key={page.id}
                  onClick={() => {
                    onPageChange(page.id);
                    setIsOpen(false);
                  }}
                  className={`wp-block-page-switcher__item ${currentPage === page.id ? 'wp-block-page-switcher__item--active' : ''}`}
                >
                  {page.label}
                </button>
              ))}
            </div>
          ))}
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Select template to view"
        aria-expanded={isOpen}
        className="wp-block-page-switcher__toggle"
      >
        <span className="wp-block-page-switcher__label">
          {currentPageLabel}
        </span>
        <span className={`wp-block-page-switcher__arrow ${isOpen ? 'wp-block-page-switcher__arrow--open' : ''}`}>
          ▼
        </span>
      </button>
    </div>
  );
}
