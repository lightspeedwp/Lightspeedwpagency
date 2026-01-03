/**
 * Archive Header Pattern
 * 
 * WordPress pattern: lsx-design/header/archive
 * 
 * Page header for archive/listing pages (taxonomy, category, blog).
 * Provides context for the content that follows.
 */

import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { Heading } from '../common/Heading';

interface ArchiveHeaderProps {
  title: string;
  description?: string;
  count?: number;
}

export function ArchiveHeader({ title, description, count }: ArchiveHeaderProps) {
  return (
    <Section spacing="60" background="neutral-100">
      <Container>
        <div 
          style={{
            maxWidth: '700px',
          }}
        >
          {/* Archive Title - H1 */}
          <Heading level={1}>
            {title}
          </Heading>

          {/* Optional Description */}
          {description && (
            <p 
              style={{
                fontSize: 'var(--wp--preset--font-size--400)',
                color: 'var(--wp--preset--color--neutral-600)',
                marginTop: 'var(--wp--preset--spacing--30)',
                lineHeight: '1.6',
              }}
            >
              {description}
            </p>
          )}

          {/* Optional Count */}
          {count !== undefined && (
            <p 
              style={{
                fontSize: 'var(--wp--preset--font-size--100)',
                color: 'var(--wp--preset--color--neutral-500)',
                marginTop: 'var(--wp--preset--spacing--20)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}
            >
              {count} {count === 1 ? 'Result' : 'Results'}
            </p>
          )}
        </div>
      </Container>
    </Section>
  );
}
