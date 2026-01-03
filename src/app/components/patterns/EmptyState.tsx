/**
 * Empty State Pattern
 * 
 * WordPress pattern: lsx-design/state/empty
 * 
 * Explicit empty state messaging when no content exists.
 * Prevents confusing blank space and provides next action.
 */

import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { Heading } from '../common/Heading';
import { Button } from '../blocks/design/Buttons';

interface EmptyStateProps {
  title: string;
  message: string;
  actionText?: string;
  actionHref?: string;
}

export function EmptyState({ title, message, actionText, actionHref }: EmptyStateProps) {
  return (
    <Section spacing="72" background="neutral-100">
      <Container>
        <div 
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            maxWidth: '500px',
            margin: '0 auto',
          }}
        >
          {/* Empty State Icon */}
          <div 
            style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              backgroundColor: 'var(--wp--preset--color--neutral-300)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 'var(--wp--preset--spacing--40)',
            }}
          >
            <span 
              style={{
                fontSize: 'var(--wp--preset--font-size--700)',
                color: 'var(--wp--preset--color--neutral-500)',
              }}
            >
              ∅
            </span>
          </div>

          {/* Empty State Title */}
          <Heading level={2}>
            {title}
          </Heading>

          {/* Empty State Message */}
          <p 
            style={{
              fontSize: 'var(--wp--preset--font-size--300)',
              color: 'var(--wp--preset--color--neutral-600)',
              marginTop: 'var(--wp--preset--spacing--20)',
              lineHeight: '1.6',
            }}
          >
            {message}
          </p>

          {/* Optional Action */}
          {actionText && actionHref && (
            <div 
              style={{
                marginTop: 'var(--wp--preset--spacing--40)',
              }}
            >
              <Button variant="primary" href={actionHref}>
                {actionText}
              </Button>
            </div>
          )}
        </div>
      </Container>
    </Section>
  );
}