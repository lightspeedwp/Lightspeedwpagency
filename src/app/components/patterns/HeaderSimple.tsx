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
      className="sticky top-0 z-50"
      style={{
        backgroundColor: 'var(--background)',
        borderBottom: '1px solid var(--border-soft)',
      }}
    >
      <Container>
        <div className="flex items-center justify-between py-2">
          {/* Site Logo */}
          <a 
            href="/" 
            aria-label="LSX Design Home"
            style={{ textDecoration: 'none' }}
          >
            <Logo theme="light" />
          </a>

          {/* Primary Navigation */}
          <nav 
            role="navigation" 
            aria-label="Primary navigation"
            style={{
              backgroundColor: 'var(--background)',
            }}
          >
            <ul 
              className="flex items-center gap-2" 
              style={{ listStyle: 'none', padding: 0, margin: 0 }}
            >
              {navItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="flex items-center gap-1 px-3 py-2"
                    style={{
                      fontFamily: 'var(--font-primary)',
                      fontSize: 'var(--text-base)',
                      fontWeight: 'var(--font-weight-bold)',
                      color: item.isActive ? 'var(--primary)' : 'var(--foreground)',
                      textDecoration: item.isActive ? 'underline' : 'none',
                      transition: 'all 0.2s ease',
                      whiteSpace: 'nowrap',
                      borderRadius: 'var(--radius)',
                    }}
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
                        style={{
                          color: item.isActive ? 'var(--primary)' : 'var(--foreground)',
                          transition: 'transform 0.2s ease',
                          transform: hoveredItem === item.label ? 'rotate(180deg)' : 'rotate(0deg)',
                        }}
                      />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
}