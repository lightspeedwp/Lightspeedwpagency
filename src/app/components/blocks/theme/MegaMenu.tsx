/**
 * Modern Mega Menu Block Component
 * 
 * WordPress Block: theme/mega-menu
 * 
 * Animated mega menu with glassmorphism effects.
 * 
 * @see /src/styles/blocks/theme/mega-menu.css
 */

import React from 'react';
import { ArrowRight } from 'lucide-react';

export interface MegaMenuItem {
  label: string;
  page: string;
  description?: string;
  icon?: React.ReactNode;
}

export interface MegaMenuSection {
  title: string;
  items: MegaMenuItem[];
}

export interface MegaMenuFeatured {
  label: string;
  page: string;
  description: string;
  image: string;
  badge?: string;
}

export interface MegaMenuProps {
  title: string;
  description?: string;
  sections: MegaMenuSection[];
  featured?: MegaMenuFeatured[];
  onNavigate: (page: string) => void;
  onClose: () => void;
  isOpen: boolean;
}

export function MegaMenu({
  title,
  description,
  sections,
  featured,
  onNavigate,
  onClose,
  isOpen
}: MegaMenuProps) {
  if (!isOpen) return null;

  const handleNavigate = (page: string) => {
    onNavigate(page);
    onClose();
  };

  return (
    <div className="wp-block-mega-menu">
      {/* Menu Header */}
      <div className={`wp-block-mega-menu__header ${featured && featured.length > 0 ? 'has-featured' : ''}`}>
        <h3 className="wp-block-mega-menu__title">
          {title}
        </h3>
        {description && (
          <p className="wp-block-mega-menu__description">
            {description}
          </p>
        )}
      </div>

      {/* Featured Items (with images) */}
      {featured && featured.length > 0 && (
        <div 
          className="wp-block-mega-menu__featured"
          style={{ 
            gridTemplateColumns: `repeat(${Math.min(featured.length, 2)}, 1fr)` 
          }}
        >
          {featured.map((item, index) => (
            <button
              key={index}
              onClick={() => handleNavigate(item.page)}
              className="wp-block-mega-menu__featured-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Featured Image */}
              <div 
                className="wp-block-mega-menu__featured-image"
                style={{
                  background: `linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%), url(${item.image})`
                }}
              >
                {item.badge && (
                  <div className="wp-block-mega-menu__badge">
                    {item.badge}
                  </div>
                )}
              </div>

              {/* Featured Content */}
              <div className="wp-block-mega-menu__featured-content">
                <h4 className="wp-block-mega-menu__featured-title">
                  {item.label}
                </h4>
                <p className="wp-block-mega-menu__featured-desc">
                  {item.description}
                </p>
              </div>
            </button>
          ))}
        </div>
      )}

      {/* Menu Sections (columns) */}
      <div 
        className="wp-block-mega-menu__sections"
        style={{ 
          gridTemplateColumns: `repeat(${Math.min(sections.length, 3)}, 1fr)` 
        }}
      >
        {sections.map((section, sectionIndex) => (
          <div key={sectionIndex}>
            {/* Section Title */}
            <h4 className="wp-block-mega-menu__section-title">
              {section.title}
            </h4>

            {/* Section Items */}
            <ul className="wp-block-mega-menu__list">
              {section.items.map((item, itemIndex) => (
                <li
                  key={itemIndex}
                  className="wp-block-mega-menu__item"
                  style={{
                    animationDelay: `${(sectionIndex * 100) + (itemIndex * 50)}ms`
                  }}
                >
                  <button
                    onClick={() => handleNavigate(item.page)}
                    className="wp-block-mega-menu__link"
                  >
                    <div className="wp-block-mega-menu__link-content">
                      <div className="wp-block-mega-menu__link-label">
                        {item.label}
                      </div>
                      {item.description && (
                        <div className="wp-block-mega-menu__link-desc">
                          {item.description}
                        </div>
                      )}
                    </div>
                    <ArrowRight
                      size={16}
                      className="wp-block-mega-menu__arrow"
                    />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
