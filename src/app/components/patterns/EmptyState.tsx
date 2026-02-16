/**
 * Empty State Pattern
 * 
 * WordPress pattern: lsx-design/state/empty
 * 
 * Explicit empty state messaging when no content exists.
 * Prevents confusing blank space and provides next action.
 * 
 * @see {@link /guidelines/patterns/EmptyState.md}
 */

import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { Heading } from '../common/Heading';
import { Button } from '../blocks/design/Buttons';
import '@/styles/patterns/empty-state.css';

interface EmptyStateProps {
  /** Title of the empty state */
  title: string;
  /** Explanatory message */
  message: string;
  /** Optional button text */
  actionText?: string;
  /** Optional button link */
  actionHref?: string;
}

export function EmptyState({ title, message, actionText, actionHref }: EmptyStateProps) {
  return (
    <Section spacing="72" background="neutral-100">
      <Container>
        <div className="empty-state">
          {/* Empty State Icon */}
          <div className="empty-state__icon-wrapper">
            <span className="empty-state__icon" aria-hidden="true">
              ∅
            </span>
          </div>

          {/* Empty State Title */}
          <Heading level={2} className="empty-state__title">
            {title}
          </Heading>

          {/* Empty State Message */}
          <p className="empty-state__message">
            {message}
          </p>

          {/* Optional Action */}
          {actionText && actionHref && (
            <div className="empty-state__actions">
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
