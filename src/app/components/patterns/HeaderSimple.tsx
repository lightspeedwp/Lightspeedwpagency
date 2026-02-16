/**
 * Header Simple Pattern
 * 
 * WordPress concept: Block pattern — lsx-design/layout/header-simple
 * 
 * Simple horizontal navigation header with dropdown support.
 * Uses design system tokens for all styling.
 */

import { Logo } from '../common/Logo';
import { Container } from '../common/Container';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import '@/styles/header-simple.css';

interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
  isActive?: boolean;
}

interface HeaderSimpleProps {
  navItems?: NavItem[];
}

export function HeaderSimple({ 
  navItems = [
    { label: 'Home', href: '/', isActive: true },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio', hasDropdown: true },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact', hasDropdown: false },
  ]
}: HeaderSimpleProps) {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <header 
      role="banner"
      className="header-simple"
    >
      <Container>
        <div className="header-simple__inner">
          {/* Site Logo */}
          <a 
            href="/" 
            aria-label="LSX Design Home"
            className="header-simple__logo-link"
          >
            <Logo theme="light" />
          </a>

          {/* Primary Navigation */}
          <nav 
            role="navigation" 
            aria-label="Primary navigation"
            className="header-simple__nav"
          >
            <ul className="header-simple__list">
              {navItems.map((item, index) => {
                const isHovered = hoveredItem === item.label;
                const linkClasses = [
                  'header-simple__link',
                  item.isActive && 'header-simple__link--active',
                  isHovered && 'header-simple__link--hovered'
                ].filter(Boolean).join(' ');

                const chevronClasses = [
                  'header-simple__chevron',
                  item.isActive && 'header-simple__chevron--active'
                ].filter(Boolean).join(' ');

                return (
                  <li key={index}>
                    <a
                      href={item.href}
                      className={linkClasses}
                      onMouseEnter={() => setHoveredItem(item.label)}
                      onMouseLeave={() => setHoveredItem(null)}
                      onFocus={() => setHoveredItem(item.label)}
                      onBlur={() => setHoveredItem(null)}
                    >
                      <span>{item.label}</span>
                      {item.hasDropdown && (
                        <ChevronDown 
                          size={20} 
                          strokeWidth={2}
                          className={chevronClasses}
                        />
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
}
