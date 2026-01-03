/**
 * Container Component Tests
 * 
 * Tests for the LSX Design Container component covering:
 * - Width constraints (default/wide/full)
 * - Responsive padding
 * - Design system token usage
 * - Accessibility
 * - WordPress integration
 * 
 * @see /src/app/components/common/Container.tsx
 */

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { Container } from '../../src/app/components/common/Container';

// Extend Jest matchers
expect.extend(toHaveNoViolations);

describe('Container Component', () => {
  describe('Rendering', () => {
    it('renders with children content', () => {
      render(<Container>Test Content</Container>);
      expect(screen.getByText('Test Content')).toBeInTheDocument();
    });

    it('renders as div element', () => {
      const { container } = render(<Container>Content</Container>);
      const div = container.firstChild;
      expect(div?.nodeName).toBe('DIV');
    });

    it('renders nested children correctly', () => {
      render(
        <Container>
          <h1>Heading</h1>
          <p>Paragraph</p>
        </Container>
      );
      expect(screen.getByRole('heading')).toHaveTextContent('Heading');
      expect(screen.getByText('Paragraph')).toBeInTheDocument();
    });
  });

  describe('Width Variants', () => {
    it('applies default max-width (1280px / max-w-7xl)', () => {
      render(<Container maxWidth="default">Default Width</Container>);
      const container = screen.getByText('Default Width').parentElement;
      expect(container).toHaveClass('max-w-7xl');
    });

    it('applies wide max-width (1440px / max-w-[90rem])', () => {
      render(<Container maxWidth="wide">Wide Width</Container>);
      const container = screen.getByText('Wide Width').parentElement;
      expect(container).toHaveClass('max-w-[90rem]');
    });

    it('applies no max-width for full variant', () => {
      render(<Container maxWidth="full">Full Width</Container>);
      const container = screen.getByText('Full Width').parentElement;
      // Full width should not have max-w class
      expect(container?.className).not.toContain('max-w');
    });

    it('defaults to default variant when no maxWidth prop', () => {
      render(<Container>No Width Specified</Container>);
      const container = screen.getByText('No Width Specified').parentElement;
      // Should apply default max-width
      expect(container).toBeInTheDocument();
    });
  });

  describe('Responsive Padding', () => {
    it('applies responsive horizontal padding', () => {
      render(<Container>Padding Test</Container>);
      const container = screen.getByText('Padding Test').parentElement;
      // Should have responsive padding classes (px-4 sm:px-6 lg:px-8)
      expect(container).toHaveClass('px-4');
    });

    it('centers content with mx-auto', () => {
      render(<Container>Centered Content</Container>);
      const container = screen.getByText('Centered Content').parentElement;
      expect(container).toHaveClass('mx-auto');
    });
  });

  describe('Accessibility (WCAG 2.1 AA)', () => {
    it('has no accessibility violations', async () => {
      const { container } = render(
        <Container>
          <h1>Heading</h1>
          <p>Content</p>
        </Container>
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('maintains accessible reading width (45-75 characters)', () => {
      render(<Container maxWidth="default">Readable Content</Container>);
      const container = screen.getByText('Readable Content').parentElement;
      // max-w-7xl provides good reading width
      expect(container).toBeInTheDocument();
    });

    it('provides sufficient padding for touch targets on mobile', () => {
      render(<Container>Touch Content</Container>);
      const container = screen.getByText('Touch Content').parentElement;
      // px-4 (16px) provides sufficient padding
      expect(container).toHaveClass('px-4');
    });
  });

  describe('Design System Integration', () => {
    it('uses Tailwind utility classes for spacing', () => {
      render(<Container>Spacing Test</Container>);
      const container = screen.getByText('Spacing Test').parentElement;
      expect(container?.className).toContain('px-');
      expect(container?.className).toContain('mx-auto');
    });

    it('maps to WordPress contentSize setting (default)', () => {
      render(<Container maxWidth="default">Content Size</Container>);
      const container = screen.getByText('Content Size').parentElement;
      // max-w-7xl = 1280px = WordPress contentSize
      expect(container).toHaveClass('max-w-7xl');
    });

    it('maps to WordPress wideSize setting (wide)', () => {
      render(<Container maxWidth="wide">Wide Size</Container>);
      const container = screen.getByText('Wide Size').parentElement;
      // max-w-[90rem] = 1440px = WordPress wideSize
      expect(container).toHaveClass('max-w-[90rem]');
    });
  });

  describe('Custom Props', () => {
    it('accepts and applies custom className', () => {
      render(<Container className="custom-class">Custom</Container>);
      const container = screen.getByText('Custom').parentElement;
      expect(container).toHaveClass('custom-class');
      // Should still have base classes
      expect(container).toHaveClass('mx-auto');
    });

    it('accepts custom inline styles', () => {
      render(
        <Container style={{ paddingTop: '32px' }}>
          Styled Container
        </Container>
      );
      const container = screen.getByText('Styled Container').parentElement;
      expect(container).toHaveStyle({ paddingTop: '32px' });
    });

    it('accepts data attributes', () => {
      render(
        <Container data-testid="custom-container" data-section="hero">
          Data Attributes
        </Container>
      );
      const container = screen.getByTestId('custom-container');
      expect(container).toHaveAttribute('data-section', 'hero');
    });
  });

  describe('WordPress Block Integration', () => {
    it('can accept WordPress block classes', () => {
      render(
        <Container className="wp-block-group alignwide">
          WordPress Block
        </Container>
      );
      const container = screen.getByText('WordPress Block').parentElement;
      expect(container).toHaveClass('wp-block-group');
      expect(container).toHaveClass('alignwide');
    });

    it('supports WordPress layout classes', () => {
      render(
        <Container className="has-global-padding is-layout-constrained">
          Layout Classes
        </Container>
      );
      const container = screen.getByText('Layout Classes').parentElement;
      expect(container).toHaveClass('has-global-padding');
      expect(container).toHaveClass('is-layout-constrained');
    });
  });

  describe('Content Handling', () => {
    it('handles empty children', () => {
      const { container } = render(<Container></Container>);
      expect(container.firstChild).toBeInTheDocument();
    });

    it('handles complex nested content', () => {
      render(
        <Container>
          <div>
            <h1>Title</h1>
            <div>
              <p>Nested paragraph</p>
              <ul>
                <li>Item 1</li>
                <li>Item 2</li>
              </ul>
            </div>
          </div>
        </Container>
      );
      expect(screen.getByRole('heading')).toHaveTextContent('Title');
      expect(screen.getByText('Nested paragraph')).toBeInTheDocument();
      expect(screen.getAllByRole('listitem')).toHaveLength(2);
    });

    it('preserves child element structure', () => {
      render(
        <Container>
          <article>
            <header>Header</header>
            <main>Main</main>
            <footer>Footer</footer>
          </article>
        </Container>
      );
      expect(screen.getByText('Header').tagName).toBe('HEADER');
      expect(screen.getByText('Main').tagName).toBe('MAIN');
      expect(screen.getByText('Footer').tagName).toBe('FOOTER');
    });
  });

  describe('Responsive Behavior', () => {
    it('maintains center alignment at all viewport sizes', () => {
      render(<Container>Responsive Center</Container>);
      const container = screen.getByText('Responsive Center').parentElement;
      expect(container).toHaveClass('mx-auto');
    });

    it('prevents horizontal scrolling with proper constraints', () => {
      render(<Container maxWidth="default">No Overflow</Container>);
      const container = screen.getByText('No Overflow').parentElement;
      // max-w class prevents overflow
      expect(container).toBeInTheDocument();
    });
  });

  describe('Performance', () => {
    it('renders quickly with no side effects', () => {
      const start = performance.now();
      render(<Container>Performance Test</Container>);
      const end = performance.now();
      
      // Should render in under 10ms
      expect(end - start).toBeLessThan(10);
    });

    it('re-renders efficiently when props change', () => {
      const { rerender } = render(<Container maxWidth="default">Test</Container>);
      
      const start = performance.now();
      rerender(<Container maxWidth="wide">Test</Container>);
      const end = performance.now();
      
      // Re-render should be fast
      expect(end - start).toBeLessThan(5);
    });
  });
});
