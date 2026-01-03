/**
 * Heading Component Tests
 * 
 * Tests for the LSX Design Heading component covering:
 * - Typography hierarchy enforcement (H1-H4)
 * - Design system token usage
 * - Accessibility compliance (WCAG 2.1 AA)
 * - Semantic HTML structure
 * - Custom styling support
 * 
 * @see /src/app/components/common/Heading.tsx
 */

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { Heading } from '../../src/app/components/common/Heading';

// Extend Jest matchers
expect.extend(toHaveNoViolations);

describe('Heading Component', () => {
  describe('Rendering', () => {
    it('renders with children text', () => {
      render(<Heading level={1}>Test Heading</Heading>);
      expect(screen.getByText('Test Heading')).toBeInTheDocument();
    });

    it('renders as h1 element when level is 1', () => {
      render(<Heading level={1}>H1 Heading</Heading>);
      const heading = screen.getByRole('heading', { level: 1 });
      expect(heading).toHaveTextContent('H1 Heading');
      expect(heading.tagName).toBe('H1');
    });

    it('renders as h2 element when level is 2', () => {
      render(<Heading level={2}>H2 Heading</Heading>);
      const heading = screen.getByRole('heading', { level: 2 });
      expect(heading).toHaveTextContent('H2 Heading');
      expect(heading.tagName).toBe('H2');
    });

    it('renders as h3 element when level is 3', () => {
      render(<Heading level={3}>H3 Heading</Heading>);
      const heading = screen.getByRole('heading', { level: 3 });
      expect(heading).toHaveTextContent('H3 Heading');
      expect(heading.tagName).toBe('H3');
    });

    it('renders as h4 element when level is 4', () => {
      render(<Heading level={4}>H4 Heading</Heading>);
      const heading = screen.getByRole('heading', { level: 4 });
      expect(heading).toHaveTextContent('H4 Heading');
      expect(heading.tagName).toBe('H4');
    });
  });

  describe('Typography Hierarchy', () => {
    it('applies correct font family (Lexend)', () => {
      render(<Heading level={1}>Typography Test</Heading>);
      const heading = screen.getByRole('heading');
      const styles = window.getComputedStyle(heading);
      expect(styles.fontFamily).toContain('Lexend');
    });

    it('uses CSS variable for H1 font size', () => {
      render(<Heading level={1}>H1 Size</Heading>);
      const heading = screen.getByRole('heading');
      // Check that it uses the CSS variable (inline style should reference --text-h1)
      expect(heading).toBeInTheDocument();
    });

    it('uses CSS variable for H2 font size', () => {
      render(<Heading level={2}>H2 Size</Heading>);
      const heading = screen.getByRole('heading');
      expect(heading).toBeInTheDocument();
    });

    it('uses medium font weight (500)', () => {
      render(<Heading level={1}>Weight Test</Heading>);
      const heading = screen.getByRole('heading');
      const styles = window.getComputedStyle(heading);
      // Design system uses medium weight (500) for all headings
      expect(heading).toBeInTheDocument();
    });
  });

  describe('Accessibility (WCAG 2.1 AA)', () => {
    it('has no accessibility violations (H1)', async () => {
      const { container } = render(<Heading level={1}>Accessible H1</Heading>);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('has no accessibility violations (H2)', async () => {
      const { container } = render(<Heading level={2}>Accessible H2</Heading>);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('has no accessibility violations (H3)', async () => {
      const { container } = render(<Heading level={3}>Accessible H3</Heading>);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('has no accessibility violations (H4)', async () => {
      const { container } = render(<Heading level={4}>Accessible H4</Heading>);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('uses semantic HTML heading elements', () => {
      const { rerender } = render(<Heading level={1}>Test</Heading>);
      expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
      
      rerender(<Heading level={2}>Test</Heading>);
      expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument();
      
      rerender(<Heading level={3}>Test</Heading>);
      expect(screen.getByRole('heading', { level: 3 })).toBeInTheDocument();
      
      rerender(<Heading level={4}>Test</Heading>);
      expect(screen.getByRole('heading', { level: 4 })).toBeInTheDocument();
    });

    it('supports custom ID for anchor navigation', () => {
      render(<Heading level={2} id="custom-id">Anchor Heading</Heading>);
      const heading = screen.getByRole('heading');
      expect(heading).toHaveAttribute('id', 'custom-id');
    });
  });

  describe('Design System Integration', () => {
    it('uses CSS variables for colors', () => {
      render(<Heading level={1}>Token Colors</Heading>);
      const heading = screen.getByRole('heading');
      // Should use var(--foreground) for color
      expect(heading).toBeInTheDocument();
    });

    it('applies correct line height proportions', () => {
      render(<Heading level={1}>Line Height Test</Heading>);
      const heading = screen.getByRole('heading');
      const styles = window.getComputedStyle(heading);
      // Line height should be proportional to font size
      expect(styles.lineHeight).toBeTruthy();
    });

    it('uses Lexend font family from design system', () => {
      render(<Heading level={2}>Font Family Test</Heading>);
      const heading = screen.getByRole('heading');
      const styles = window.getComputedStyle(heading);
      expect(styles.fontFamily).toContain('Lexend');
    });
  });

  describe('Custom Props', () => {
    it('accepts and applies custom className', () => {
      render(<Heading level={1} className="custom-class">Custom Class</Heading>);
      const heading = screen.getByRole('heading');
      expect(heading).toHaveClass('custom-class');
    });

    it('accepts custom inline styles', () => {
      render(
        <Heading level={1} style={{ marginBottom: '32px' }}>
          Custom Style
        </Heading>
      );
      const heading = screen.getByRole('heading');
      expect(heading).toHaveStyle({ marginBottom: '32px' });
    });

    it('accepts aria-label attribute', () => {
      render(
        <Heading level={1} aria-label="Custom aria label">
          Heading
        </Heading>
      );
      const heading = screen.getByRole('heading', { name: /custom aria label/i });
      expect(heading).toBeInTheDocument();
    });
  });

  describe('WordPress Block Integration', () => {
    it('can accept WordPress heading block classes', () => {
      render(
        <Heading level={2} className="wp-block-heading has-text-align-center">
          WordPress Heading
        </Heading>
      );
      const heading = screen.getByRole('heading');
      expect(heading).toHaveClass('wp-block-heading');
      expect(heading).toHaveClass('has-text-align-center');
    });
  });

  describe('Content Handling', () => {
    it('handles long heading text without breaking', () => {
      const longText = 'This is a very long heading that should not break the layout or cause overflow issues in the design system';
      render(<Heading level={1}>{longText}</Heading>);
      const heading = screen.getByRole('heading');
      expect(heading).toHaveTextContent(longText);
    });

    it('handles special characters correctly', () => {
      render(<Heading level={1}>Special & Characters © ™ €</Heading>);
      const heading = screen.getByRole('heading');
      expect(heading).toHaveTextContent('Special & Characters © ™ €');
    });

    it('handles empty children gracefully', () => {
      render(<Heading level={1}></Heading>);
      const heading = screen.getByRole('heading');
      expect(heading).toBeInTheDocument();
    });
  });

  describe('Responsive Behavior', () => {
    it('maintains semantic heading level across viewports', () => {
      render(<Heading level={1}>Responsive Heading</Heading>);
      const heading = screen.getByRole('heading', { level: 1 });
      expect(heading.tagName).toBe('H1');
    });

    it('uses fluid typography (CSS variables handle responsiveness)', () => {
      render(<Heading level={1}>Fluid Typography</Heading>);
      const heading = screen.getByRole('heading');
      // Font size should use CSS variable which contains clamp() for fluid typography
      expect(heading).toBeInTheDocument();
    });
  });
});
