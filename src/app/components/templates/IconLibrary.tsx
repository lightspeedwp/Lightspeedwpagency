/**
 * Icon Library
 * 
 * Browse and search the complete Phosphor icon library.
 * Features:
 * - Live search
 * - Copy-to-clipboard (JSX)
 * - Funky neon styling
 * 
 * **Design System:**
 * - 100% CSS variables from theme.css
 * - WCAG 2.1 AA compliant
 * 
 * @see /src/styles/templates/icon-library.css
 */

import '../../../styles/templates/icon-library.css';
import { useState } from 'react';
import { Container } from '../common/Container';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';
import { ScrollReveal } from '../../hooks/useScrollReveal';
import * as PhosphorIcons from '@phosphor-icons/react';
import { MagnifyingGlass, Check } from '@phosphor-icons/react';


export function IconLibrary() {
  const [search, setSearch] = useState('');
  const [copied, setCopied] = useState<string | null>(null);

  // Filter icons based on search — exclude non-icon exports
  const icons = Object.keys(PhosphorIcons)
    .filter((name) =>
      name !== 'IconContext' &&
      name !== 'IconBase' &&
      name !== 'SSR' &&
      name !== 'default' &&
      typeof (PhosphorIcons as Record<string, unknown>)[name] === 'object'
    )
    .filter((name) => name.toLowerCase().includes(search.toLowerCase()))
    .sort();

  const handleCopy = (name: string) => {
    const importStatement = `import { ${name} } from '@phosphor-icons/react';`;
    navigator.clipboard.writeText(importStatement);
    setCopied(name);
    setTimeout(() => setCopied(null), 2000);
  };

  const breadcrumbs = [
    { label: 'Home', page: 'home' as const },
    { label: 'Developer Tools', page: 'dev-tools' as const },
    { label: 'Icon Library' },
  ];

  return (
    <div className="icon-lib">
      <BreadcrumbPart items={breadcrumbs} />

      {/* Hero */}
      <section className="icon-lib__hero">
        <Container>
          <ScrollReveal animation="fade-up">
            <h1 className="icon-lib__hero-title">Icon Library</h1>
            <p className="icon-lib__hero-desc">
              Complete Phosphor icon set. Click any icon to copy the import statement.
              Use icons sparingly and semantically.
            </p>
          </ScrollReveal>
        </Container>
      </section>

      <Container>
        {/* Search */}
        <div className="icon-lib__search-wrapper">
          <div className="icon-lib__search">
            <MagnifyingGlass className="icon-lib__search-icon" size={20} />
            <input
              type="text"
              className="icon-lib__input"
              placeholder="Search icons..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              aria-label="Search icons"
            />
          </div>
        </div>

        {/* Grid */}
        <div className="icon-lib__grid">
          {icons.length > 0 ? (
            icons.map((name) => {
              // @ts-ignore - Dynamic access to icon components
              const IconComponent = (PhosphorIcons as Record<string, unknown>)[name] as React.FC<{ className?: string; size?: number }>;
              if (!IconComponent) return null;

              return (
                <div 
                  key={name} 
                  className="icon-lib__card"
                  onClick={() => handleCopy(name)}
                  title={`Copy: import { ${name} } from '@phosphor-icons/react';`}
                >
                  <IconComponent className="icon-lib__icon" size={32} />
                  <span className="icon-lib__name">{name}</span>
                </div>
              );
            })
          ) : (
            <div className="icon-lib__empty">
              No icons found matching &quot;{search}&quot;
            </div>
          )}
        </div>
      </Container>

      {/* Toast */}
      {copied && (
        <div className="icon-lib__toast">
          <Check size={16} />
          Copied {copied} import
        </div>
      )}
    </div>
  );
}
