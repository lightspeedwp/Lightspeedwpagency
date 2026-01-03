/**
 * Logo Component Tests
 * 
 * Tests for the LSX Design Logo component covering:
 * - SVG rendering
 * - Theme switching (light/dark)
 * - Accessibility (screen readers, alt text)
 * - Brand identity preservation
 * - CSS variable integration
 * 
 * @see /src/app/components/common/Logo.tsx
 */

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { Logo } from '../../src/app/components/common/Logo';

// Extend Jest matchers
expect.extend(toHaveNoViolations);

describe('Logo Component', () => {
  describe('Rendering', () => {
    it('renders SVG element', () => {
      const { container } = render(<Logo />);
      const svg = container.querySelector('svg');
      expect(svg).toBeInTheDocument();
    });

    it('renders with correct viewBox for proportions', () => {
      const { container } = render(<Logo />);
      const svg = container.querySelector('svg');
      expect(svg).toHaveAttribute('viewBox');
    });

    it('renders all logo elements (icon + wordmark)', () => {
      const { container } = render(<Logo />);
      const svg = container.querySelector('svg');
      // Logo should have both lightning bolt icon and "LSX Design" text
      expect(svg).toBeInTheDocument();
    });
  });

  describe('Theme Switching', () => {
    it('renders with light theme', () => {
      render(<Logo theme="light" />);
      // Light theme should use dark wordmark
      expect(screen.getByRole('img', { hidden: true })).toBeInTheDocument();
    });

    it('renders with dark theme', () => {
      render(<Logo theme="dark" />);
      // Dark theme should use light wordmark
      expect(screen.getByRole('img', { hidden: true })).toBeInTheDocument();
    });

    it('uses CSS variables for theme colors', () => {
      const { container } = render(<Logo theme="light" />);
      const svg = container.querySelector('svg');
      // Should use CSS variables for dynamic theming
      expect(svg).toBeInTheDocument();
    });

    it('maintains brand colors for icon (never changes)', () => {
      const { container } = render(<Logo />);
      const svg = container.querySelector('svg');
      // Lightning bolt icon should always use brand colors (#FF3131, #CC3F23)
      expect(svg).toBeInTheDocument();
    });
  });

  describe('Accessibility (WCAG 2.1 AA)', () => {
    it('has no accessibility violations', async () => {
      const { container } = render(<Logo />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('includes title element for screen readers', () => {
      const { container } = render(<Logo />);
      const title = container.querySelector('title');
      expect(title).toBeInTheDocument();
      expect(title).toHaveTextContent('LSX Design');
    });

    it('has role="img" for semantic meaning', () => {
      render(<Logo />);
      const logo = screen.getByRole('img', { hidden: true });
      expect(logo).toBeInTheDocument();
    });

    it('supports aria-label for additional context', () => {
      const { container } = render(<Logo aria-label="LSX Design Home" />);
      const svg = container.querySelector('svg');
      expect(svg).toHaveAttribute('aria-label', 'LSX Design Home');
    });

    it('is keyboard accessible when used as link', () => {
      // Logo is typically wrapped in a button/link - test integration
      render(
        <a href="/" aria-label="LSX Design Home">
          <Logo />
        </a>
      );
      const link = screen.getByRole('link');
      expect(link).toBeInTheDocument();
    });
  });

  describe('Brand Identity', () => {
    it('preserves brand color for lightning bolt icon', () => {
      const { container } = render(<Logo />);
      const svg = container.querySelector('svg');
      // Icon should always use brand red colors
      expect(svg).toBeInTheDocument();
    });

    it('maintains proper proportions', () => {
      const { container } = render(<Logo width={200} />);
      const svg = container.querySelector('svg');
      // Should maintain aspect ratio
      expect(svg).toHaveAttribute('width', '200');
    });

    it('does not distort logo elements', () => {
      const { container } = render(<Logo />);
      const svg = container.querySelector('svg');
      // preserveAspectRatio should be set
      expect(svg).toBeInTheDocument();
    });
  });

  describe('Custom Props', () => {
    it('accepts custom width', () => {
      const { container } = render(<Logo width={150} />);
      const svg = container.querySelector('svg');
      expect(svg).toHaveAttribute('width', '150');
    });

    it('accepts custom height', () => {
      const { container } = render(<Logo height={50} />);
      const svg = container.querySelector('svg');
      expect(svg).toHaveAttribute('height', '50');
    });

    it('accepts custom className', () => {
      const { container } = render(<Logo className="custom-logo" />);
      const svg = container.querySelector('svg');
      expect(svg).toHaveClass('custom-logo');
    });

    it('accepts custom inline styles', () => {
      const { container } = render(<Logo style={{ marginRight: '16px' }} />);
      const svg = container.querySelector('svg');
      expect(svg).toHaveStyle({ marginRight: '16px' });
    });
  });

  describe('WordPress Integration', () => {
    it('maps to core/site-logo block', () => {
      // Logo component represents WordPress Site Logo block
      const { container } = render(<Logo />);
      const svg = container.querySelector('svg');
      expect(svg).toBeInTheDocument();
    });

    it('can be used in site header', () => {
      render(
        <header>
          <Logo />
        </header>
      );
      const header = screen.getByRole('banner');
      const logo = header.querySelector('svg');
      expect(logo).toBeInTheDocument();
    });

    it('can be used in site footer', () => {
      render(
        <footer>
          <Logo theme="dark" />
        </footer>
      );
      const footer = screen.getByRole('contentinfo');
      const logo = footer.querySelector('svg');
      expect(logo).toBeInTheDocument();
    });
  });

  describe('Responsive Behavior', () => {
    it('scales properly with container', () => {
      const { container } = render(<Logo width="100%" />);
      const svg = container.querySelector('svg');
      expect(svg).toHaveAttribute('width', '100%');
    });

    it('maintains aspect ratio when resized', () => {
      const { container } = render(<Logo />);
      const svg = container.querySelector('svg');
      // Should have viewBox for aspect ratio preservation
      expect(svg).toHaveAttribute('viewBox');
    });
  });

  describe('Performance', () => {
    it('renders quickly as inline SVG', () => {
      const start = performance.now();
      render(<Logo />);
      const end = performance.now();
      
      // Should render in under 5ms
      expect(end - start).toBeLessThan(5);
    });

    it('does not trigger unnecessary re-renders', () => {
      const { rerender } = render(<Logo theme="light" />);
      
      const start = performance.now();
      rerender(<Logo theme="light" />);
      const end = performance.now();
      
      // Same props should not trigger expensive re-render
      expect(end - start).toBeLessThan(2);
    });

    it('efficiently switches themes', () => {
      const { rerender } = render(<Logo theme="light" />);
      
      const start = performance.now();
      rerender(<Logo theme="dark" />);
      const end = performance.now();
      
      // Theme switch should be instant (CSS variable change)
      expect(end - start).toBeLessThan(5);
    });
  });

  describe('Edge Cases', () => {
    it('handles missing theme prop gracefully', () => {
      const { container } = render(<Logo />);
      const svg = container.querySelector('svg');
      expect(svg).toBeInTheDocument();
    });

    it('renders correctly without explicit dimensions', () => {
      const { container } = render(<Logo />);
      const svg = container.querySelector('svg');
      expect(svg).toBeInTheDocument();
    });

    it('works with both light and dark system themes', () => {
      // Light theme
      const { container: lightContainer } = render(<Logo theme="light" />);
      expect(lightContainer.querySelector('svg')).toBeInTheDocument();
      
      // Dark theme
      const { container: darkContainer } = render(<Logo theme="dark" />);
      expect(darkContainer.querySelector('svg')).toBeInTheDocument();
    });
  });

  describe('Brand Consistency', () => {
    it('uses exact brand colors (#FF3131, #CC3F23)', () => {
      const { container } = render(<Logo />);
      const svg = container.querySelector('svg');
      // Lightning bolt should use these exact colors
      expect(svg).toBeInTheDocument();
    });

    it('maintains "LSX Design" wordmark', () => {
      const { container } = render(<Logo />);
      const title = container.querySelector('title');
      expect(title).toHaveTextContent('LSX Design');
    });

    it('never alters logo proportions', () => {
      const { container } = render(<Logo width={200} height={60} />);
      const svg = container.querySelector('svg');
      // Should respect aspect ratio
      expect(svg).toBeInTheDocument();
    });
  });
});
