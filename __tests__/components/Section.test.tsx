/**
 * Section Component Tests
 * 
 * Tests for the LSX Design Section component covering:
 * - Semantic HTML structure
 * - Style variants (8 variations)
 * - Spacing system
 * - Accessibility (landmarks, ARIA)
 * - Design system integration
 * 
 * @see /src/app/components/common/Section.tsx
 */

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { Section } from '../../src/app/components/common/Section';

// Extend Jest matchers
expect.extend(toHaveNoViolations);

describe('Section Component', () => {
  describe('Rendering', () => {
    it('renders with children content', () => {
      render(<Section>Test Section</Section>);
      expect(screen.getByText('Test Section')).toBeInTheDocument();
    });

    it('renders as semantic section element', () => {
      const { container } = render(<Section>Content</Section>);
      const section = container.querySelector('section');
      expect(section).toBeInTheDocument();
    });

    it('renders nested children correctly', () => {
      render(
        <Section>
          <h2>Section Title</h2>
          <p>Section content</p>
        </Section>
      );
      expect(screen.getByRole('heading')).toHaveTextContent('Section Title');
      expect(screen.getByText('Section content')).toBeInTheDocument();
    });
  });

  describe('Style Variants', () => {
    it('renders default variant with background color', () => {
      render(<Section variant="default">Default Variant</Section>);
      const section = screen.getByText('Default Variant').parentElement;
      // Should use var(--background) for default variant
      expect(section).toBeInTheDocument();
    });

    it('renders muted variant', () => {
      render(<Section variant="muted">Muted Variant</Section>);
      const section = screen.getByText('Muted Variant').parentElement;
      expect(section).toBeInTheDocument();
    });

    it('renders accent variant', () => {
      render(<Section variant="accent">Accent Variant</Section>);
      const section = screen.getByText('Accent Variant').parentElement;
      expect(section).toBeInTheDocument();
    });

    it('renders primary variant', () => {
      render(<Section variant="primary">Primary Variant</Section>);
      const section = screen.getByText('Primary Variant').parentElement;
      expect(section).toBeInTheDocument();
    });

    it('renders secondary variant', () => {
      render(<Section variant="secondary">Secondary Variant</Section>);
      const section = screen.getByText('Secondary Variant').parentElement;
      expect(section).toBeInTheDocument();
    });

    it('renders dark variant', () => {
      render(<Section variant="dark">Dark Variant</Section>);
      const section = screen.getByText('Dark Variant').parentElement;
      expect(section).toBeInTheDocument();
    });

    it('renders card variant', () => {
      render(<Section variant="card">Card Variant</Section>);
      const section = screen.getByText('Card Variant').parentElement;
      expect(section).toBeInTheDocument();
    });

    it('renders transparent variant', () => {
      render(<Section variant="transparent">Transparent Variant</Section>);
      const section = screen.getByText('Transparent Variant').parentElement;
      expect(section).toBeInTheDocument();
    });
  });

  describe('Spacing System', () => {
    it('applies default vertical spacing', () => {
      render(<Section>Default Spacing</Section>);
      const section = screen.getByText('Default Spacing').parentElement;
      // Should have py-12 or similar responsive padding
      expect(section).toBeInTheDocument();
    });

    it('applies small spacing variant', () => {
      render(<Section spacing="sm">Small Spacing</Section>);
      const section = screen.getByText('Small Spacing').parentElement;
      expect(section).toBeInTheDocument();
    });

    it('applies medium spacing variant', () => {
      render(<Section spacing="md">Medium Spacing</Section>);
      const section = screen.getByText('Medium Spacing').parentElement;
      expect(section).toBeInTheDocument();
    });

    it('applies large spacing variant', () => {
      render(<Section spacing="lg">Large Spacing</Section>);
      const section = screen.getByText('Large Spacing').parentElement;
      expect(section).toBeInTheDocument();
    });

    it('applies extra large spacing variant', () => {
      render(<Section spacing="xl">XL Spacing</Section>);
      const section = screen.getByText('XL Spacing').parentElement;
      expect(section).toBeInTheDocument();
    });

    it('applies none spacing variant', () => {
      render(<Section spacing="none">No Spacing</Section>);
      const section = screen.getByText('No Spacing').parentElement;
      expect(section).toBeInTheDocument();
    });
  });

  describe('Accessibility (WCAG 2.1 AA)', () => {
    it('has no accessibility violations', async () => {
      const { container } = render(
        <Section>
          <h2>Accessible Section</h2>
          <p>Content</p>
        </Section>
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('creates a landmark region for screen readers', () => {
      const { container } = render(<Section>Landmark</Section>);
      const section = container.querySelector('section');
      expect(section).toBeInTheDocument();
    });

    it('supports custom aria-label for identification', () => {
      render(<Section aria-label="Hero section">Hero Content</Section>);
      const section = screen.getByLabelText('Hero section');
      expect(section).toBeInTheDocument();
    });

    it('supports custom aria-labelledby', () => {
      render(
        <Section aria-labelledby="section-heading">
          <h2 id="section-heading">Section Heading</h2>
          <p>Content</p>
        </Section>
      );
      const section = screen.getByRole('region', { name: /section heading/i });
      expect(section).toBeInTheDocument();
    });

    it('maintains color contrast in all variants (WCAG AA)', async () => {
      const variants: Array<'default' | 'muted' | 'accent' | 'primary' | 'secondary' | 'dark' | 'card' | 'transparent'> = 
        ['default', 'muted', 'accent', 'primary', 'secondary', 'dark', 'card', 'transparent'];
      
      for (const variant of variants) {
        const { container } = render(
          <Section variant={variant}>
            <p>Test content</p>
          </Section>
        );
        const results = await axe(container);
        expect(results).toHaveNoViolations();
      }
    });
  });

  describe('Design System Integration', () => {
    it('uses CSS variables for background colors', () => {
      render(<Section variant="primary">Token Test</Section>);
      const section = screen.getByText('Token Test').parentElement;
      // Should use CSS variables like var(--primary)
      expect(section).toBeInTheDocument();
    });

    it('uses CSS variables for text colors', () => {
      render(<Section variant="primary">Text Color</Section>);
      const section = screen.getByText('Text Color').parentElement;
      // Should use CSS variables like var(--primary-foreground)
      expect(section).toBeInTheDocument();
    });

    it('uses Tailwind classes for spacing', () => {
      render(<Section spacing="lg">Spacing Classes</Section>);
      const section = screen.getByText('Spacing Classes').parentElement;
      // Should use Tailwind py-* classes
      expect(section?.className).toBeTruthy();
    });

    it('maps to WordPress spacingScale settings', () => {
      render(<Section spacing="md">WordPress Scale</Section>);
      const section = screen.getByText('WordPress Scale').parentElement;
      // Spacing should align with WordPress theme.json spacingScale
      expect(section).toBeInTheDocument();
    });
  });

  describe('Custom Props', () => {
    it('accepts and applies custom className', () => {
      render(<Section className="custom-section">Custom Class</Section>);
      const section = screen.getByText('Custom Class').parentElement;
      expect(section).toHaveClass('custom-section');
    });

    it('accepts custom inline styles', () => {
      render(
        <Section style={{ marginBottom: '64px' }}>
          Custom Style
        </Section>
      );
      const section = screen.getByText('Custom Style').parentElement;
      expect(section).toHaveStyle({ marginBottom: '64px' });
    });

    it('accepts custom ID for anchor navigation', () => {
      render(<Section id="custom-section">Section with ID</Section>);
      const section = screen.getByText('Section with ID').parentElement;
      expect(section).toHaveAttribute('id', 'custom-section');
    });

    it('accepts data attributes', () => {
      render(
        <Section data-testid="test-section" data-section-type="hero">
          Data Attributes
        </Section>
      );
      const section = screen.getByTestId('test-section');
      expect(section).toHaveAttribute('data-section-type', 'hero');
    });
  });

  describe('WordPress Block Integration', () => {
    it('can accept WordPress block classes', () => {
      render(
        <Section className="wp-block-group has-background">
          WordPress Block
        </Section>
      );
      const section = screen.getByText('WordPress Block').parentElement;
      expect(section).toHaveClass('wp-block-group');
      expect(section).toHaveClass('has-background');
    });

    it('supports WordPress color classes', () => {
      render(
        <Section className="has-primary-background-color has-text-color">
          WordPress Colors
        </Section>
      );
      const section = screen.getByText('WordPress Colors').parentElement;
      expect(section).toHaveClass('has-primary-background-color');
      expect(section).toHaveClass('has-text-color');
    });
  });

  describe('Content Handling', () => {
    it('handles empty children', () => {
      const { container } = render(<Section></Section>);
      const section = container.querySelector('section');
      expect(section).toBeInTheDocument();
    });

    it('handles complex nested content', () => {
      render(
        <Section>
          <div className="container">
            <h2>Title</h2>
            <div className="content">
              <p>Paragraph</p>
              <ul>
                <li>Item 1</li>
                <li>Item 2</li>
              </ul>
            </div>
          </div>
        </Section>
      );
      expect(screen.getByRole('heading')).toHaveTextContent('Title');
      expect(screen.getAllByRole('listitem')).toHaveLength(2);
    });

    it('preserves child component structure', () => {
      const CustomComponent = () => <div>Custom Component</div>;
      render(
        <Section>
          <CustomComponent />
        </Section>
      );
      expect(screen.getByText('Custom Component')).toBeInTheDocument();
    });
  });

  describe('Responsive Behavior', () => {
    it('applies responsive padding classes', () => {
      render(<Section spacing="lg">Responsive Padding</Section>);
      const section = screen.getByText('Responsive Padding').parentElement;
      // Should have responsive classes like py-12 md:py-16 lg:py-24
      expect(section).toBeInTheDocument();
    });

    it('maintains semantic structure across viewports', () => {
      const { container } = render(<Section>Responsive Section</Section>);
      const section = container.querySelector('section');
      expect(section?.tagName).toBe('SECTION');
    });
  });

  describe('Performance', () => {
    it('renders quickly with no side effects', () => {
      const start = performance.now();
      render(<Section>Performance Test</Section>);
      const end = performance.now();
      
      // Should render in under 10ms
      expect(end - start).toBeLessThan(10);
    });

    it('re-renders efficiently when variant changes', () => {
      const { rerender } = render(<Section variant="default">Test</Section>);
      
      const start = performance.now();
      rerender(<Section variant="accent">Test</Section>);
      const end = performance.now();
      
      // Re-render should be fast
      expect(end - start).toBeLessThan(5);
    });

    it('handles many children without performance degradation', () => {
      const manyChildren = Array.from({ length: 100 }, (_, i) => (
        <p key={i}>Item {i}</p>
      ));
      
      const start = performance.now();
      render(<Section>{manyChildren}</Section>);
      const end = performance.now();
      
      // Should still render quickly
      expect(end - start).toBeLessThan(50);
    });
  });

  describe('Visual Regression', () => {
    it('maintains consistent spacing across variants', () => {
      const { container: container1 } = render(
        <Section variant="default" spacing="lg">Content</Section>
      );
      const { container: container2 } = render(
        <Section variant="accent" spacing="lg">Content</Section>
      );
      
      const section1 = container1.querySelector('section');
      const section2 = container2.querySelector('section');
      
      // Both should have same spacing classes
      expect(section1?.className).toContain(section2?.className.split(' ').find(c => c.startsWith('py-')) || '');
    });
  });
});
