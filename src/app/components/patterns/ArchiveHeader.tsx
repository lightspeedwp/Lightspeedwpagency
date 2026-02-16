/**
 * Archive Header Pattern
 * 
 * WordPress pattern: lsx-design/header/archive
 * 
 * Page header for archive/listing pages (taxonomy, category, blog).
 * Provides context for the content that follows.
 * 
 * All styling in /src/styles/archive-header.css (user-editable)
 */

import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { Heading } from '../common/Heading';
import '@/styles/patterns/archive-header.css';

interface ArchiveHeaderProps {
  title: string;
  description?: string;
  count?: number;
}

export function ArchiveHeader({ title, description, count }: ArchiveHeaderProps) {
  return (
    <Section spacing="60" background="neutral-100">
      <Container>
        <div className="archive-header__content">
          {/* Archive Title - H1 */}
          <Heading level={1}>
            {title}
          </Heading>

          {/* Optional Description */}
          {description && (
            <p className="archive-header__description">
              {description}
            </p>
          )}

          {/* Optional Count */}
          {count !== undefined && (
            <p className="archive-header__count">
              {count} {count === 1 ? 'Result' : 'Results'}
            </p>
          )}
        </div>
      </Container>
    </Section>
  );
}
