/**
 * Style Guide Template Tests
 * 
 * Comprehensive tests for the Style Guide page covering:
 * - Typography scale display
 * - Color system showcase
 * - Spacing scale examples
 * - Border radius tokens
 * - Accessibility compliance (WCAG 2.1 AA)
 * - Design system token usage (CSS variables)
 * - Component examples (buttons, forms, badges)
 * 
 * @see /src/app/components/templates/StyleGuideTemplate.tsx
 */

import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { StyleGuideTemplate } from '../../src/app/components/templates/StyleGuideTemplate';
import { NavigationProvider } from '../../src/app/contexts/NavigationContext';

// Extend Jest matchers
expect.extend(toHaveNoViolations);

// Helper to render with Navigation context
const renderWithNavigation = (ui: React.ReactElement) => {
  return render(
    <NavigationProvider>
      {ui}
    </NavigationProvider>
  );
};

describe('StyleGuideTemplate', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('Rendering', () => {
    it('renders the page heading', () => {
      renderWithNavigation(<StyleGuideTemplate />);
      expect(screen.getByRole('heading', { name: /design system style guide/i, level: 1 })).toBeInTheDocument();
    });

    it('renders the breadcrumbs with correct trail', () => {
      renderWithNavigation(<StyleGuideTemplate />);
      const nav = screen.getByRole('navigation', { name: /breadcrumb/i });
      expect(nav).toBeInTheDocument();
      
      expect(within(nav).getByText('Home')).toBeInTheDocument();
      expect(within(nav).getByText('Developer Tools')).toBeInTheDocument();
      expect(within(nav).getByText('Style Guide')).toBeInTheDocument();
    });

    it('renders page description', () => {
      renderWithNavigation(<StyleGuideTemplate />);
      expect(screen.getByText(/comprehensive showcase/i)).toBeInTheDocument();
    });
  });

  describe('Typography Section', () => {
    it('renders Typography heading', () => {
      renderWithNavigation(<StyleGuideTemplate />);
      expect(screen.getByRole('heading', { name: /^typography$/i, level: 2 })).toBeInTheDocument();
    });

    it('displays Lexend font family', () => {
      renderWithNavigation(<StyleGuideTemplate />);
      expect(screen.getByText(/lexend \(primary\)/i)).toBeInTheDocument();
    });

    it('displays Manrope font family', () => {
      renderWithNavigation(<StyleGuideTemplate />);
      expect(screen.getByText(/manrope \(secondary\)/i)).toBeInTheDocument();
    });

    it('shows all heading levels', () => {
      renderWithNavigation(<StyleGuideTemplate />);
      
      expect(screen.getByText(/heading 1/i)).toBeInTheDocument();
      expect(screen.getByText(/heading 2/i)).toBeInTheDocument();
      expect(screen.getByText(/heading 3/i)).toBeInTheDocument();
      expect(screen.getByText(/heading 4/i)).toBeInTheDocument();
    });

    it('displays text size tokens', () => {
      renderWithNavigation(<StyleGuideTemplate />);
      
      // Should show CSS variables like --text-h1, --text-h2
      expect(screen.getByText(/--text-h1/i)).toBeInTheDocument();
      expect(screen.getByText(/--text-h2/i)).toBeInTheDocument();
      expect(screen.getByText(/--text-base/i)).toBeInTheDocument();
    });

    it('shows font weight tokens', () => {
      renderWithNavigation(<StyleGuideTemplate />);
      
      expect(screen.getByText(/--font-weight-regular/i)).toBeInTheDocument();
      expect(screen.getByText(/--font-weight-medium/i)).toBeInTheDocument();
      expect(screen.getByText(/--font-weight-bold/i)).toBeInTheDocument();
    });

    it('displays sample text for each size', () => {
      renderWithNavigation(<StyleGuideTemplate />);
      
      // Should show "The quick brown fox" for each typography example
      const samples = screen.getAllByText(/the quick brown fox/i);
      expect(samples.length).toBeGreaterThan(0);
    });
  });

  describe('Color System Section', () => {
    it('renders Color System heading', () => {
      renderWithNavigation(<StyleGuideTemplate />);
      expect(screen.getByRole('heading', { name: /color system/i, level: 2 })).toBeInTheDocument();
    });

    it('displays primary color token', () => {
      renderWithNavigation(<StyleGuideTemplate />);
      expect(screen.getByText(/--primary/i)).toBeInTheDocument();
    });

    it('displays background color token', () => {
      renderWithNavigation(<StyleGuideTemplate />);
      expect(screen.getByText(/--background/i)).toBeInTheDocument();
    });

    it('displays foreground color token', () => {
      renderWithNavigation(<StyleGuideTemplate />);
      expect(screen.getByText(/--foreground/i)).toBeInTheDocument();
    });

    it('shows color usage descriptions', () => {
      renderWithNavigation(<StyleGuideTemplate />);
      
      // Each color should have usage description
      expect(screen.getByText(/primary actions/i)).toBeInTheDocument();
      expect(screen.getByText(/page background/i)).toBeInTheDocument();
    });

    it('displays color swatches', () => {
      const { container } = renderWithNavigation(<StyleGuideTemplate />);
      
      // Color swatches should be rendered (divs with background colors)
      const colorSwatches = container.querySelectorAll('[style*="background"]');
      expect(colorSwatches.length).toBeGreaterThan(0);
    });

    it('shows all semantic color tokens', () => {
      renderWithNavigation(<StyleGuideTemplate />);
      
      expect(screen.getByText(/--primary/i)).toBeInTheDocument();
      expect(screen.getByText(/--secondary/i)).toBeInTheDocument();
      expect(screen.getByText(/--muted/i)).toBeInTheDocument();
      expect(screen.getByText(/--border/i)).toBeInTheDocument();
    });
  });

  describe('Spacing Scale Section', () => {
    it('renders Spacing Scale heading', () => {
      renderWithNavigation(<StyleGuideTemplate />);
      expect(screen.getByRole('heading', { name: /spacing scale/i, level: 2 })).toBeInTheDocument();
    });

    it('displays Tailwind spacing classes', () => {
      renderWithNavigation(<StyleGuideTemplate />);
      
      // Should show p-2, p-4, p-6, etc.
      expect(screen.getByText(/p-2/i)).toBeInTheDocument();
      expect(screen.getByText(/p-4/i)).toBeInTheDocument();
      expect(screen.getByText(/p-6/i)).toBeInTheDocument();
    });

    it('shows spacing values in rem/px', () => {
      renderWithNavigation(<StyleGuideTemplate />);
      
      // Should show values like "0.5rem (8px)"
      expect(screen.getByText(/0\.5rem/i)).toBeInTheDocument();
      expect(screen.getByText(/1rem/i)).toBeInTheDocument();
    });

    it('displays visual spacing examples', () => {
      const { container } = renderWithNavigation(<StyleGuideTemplate />);
      
      // Should have visual boxes showing spacing
      const spacingExamples = container.querySelectorAll('.p-2, .p-4, .p-6');
      expect(spacingExamples.length).toBeGreaterThan(0);
    });
  });

  describe('Border Radius Section', () => {
    it('renders Border Radius heading', () => {
      renderWithNavigation(<StyleGuideTemplate />);
      expect(screen.getByRole('heading', { name: /border radius/i, level: 2 })).toBeInTheDocument();
    });

    it('displays radius tokens', () => {
      renderWithNavigation(<StyleGuideTemplate />);
      
      expect(screen.getByText(/--radius/i)).toBeInTheDocument();
      expect(screen.getByText(/--radius-lg/i)).toBeInTheDocument();
    });

    it('shows radius values', () => {
      renderWithNavigation(<StyleGuideTemplate />);
      
      // Should show values like "Small (4px)", "Large (8px)"
      expect(screen.getByText(/4px/i)).toBeInTheDocument();
      expect(screen.getByText(/8px/i)).toBeInTheDocument();
    });

    it('displays visual radius examples', () => {
      const { container } = renderWithNavigation(<StyleGuideTemplate />);
      
      // Should have boxes with different border radius
      const radiusExamples = container.querySelectorAll('[style*="border-radius"]');
      expect(radiusExamples.length).toBeGreaterThan(0);
    });
  });

  describe('Buttons Section', () => {
    it('renders Buttons heading', () => {
      renderWithNavigation(<StyleGuideTemplate />);
      expect(screen.getByRole('heading', { name: /^buttons$/i, level: 2 })).toBeInTheDocument();
    });

    it('displays primary button examples', () => {
      renderWithNavigation(<StyleGuideTemplate />);
      expect(screen.getByText(/primary button/i)).toBeInTheDocument();
    });

    it('displays secondary button examples', () => {
      renderWithNavigation(<StyleGuideTemplate />);
      expect(screen.getByText(/secondary button/i)).toBeInTheDocument();
    });

    it('displays outline button examples', () => {
      renderWithNavigation(<StyleGuideTemplate />);
      expect(screen.getByText(/outline button/i)).toBeInTheDocument();
    });

    it('shows button variants', () => {
      renderWithNavigation(<StyleGuideTemplate />);
      
      // Should have multiple button examples
      const buttons = screen.getAllByRole('button');
      expect(buttons.length).toBeGreaterThan(5);
    });

    it('displays disabled button states', () => {
      renderWithNavigation(<StyleGuideTemplate />);
      
      const disabledButtons = screen.getAllByRole('button', { name: /disabled/i });
      expect(disabledButtons.length).toBeGreaterThan(0);
    });

    it('shows buttons with icons', () => {
      const { container } = renderWithNavigation(<StyleGuideTemplate />);
      
      // Should have buttons with icon SVGs
      const iconsInButtons = container.querySelectorAll('button svg');
      expect(iconsInButtons.length).toBeGreaterThan(0);
    });
  });

  describe('Form Elements Section', () => {
    it('renders Form Elements heading', () => {
      renderWithNavigation(<StyleGuideTemplate />);
      expect(screen.getByRole('heading', { name: /form elements/i, level: 2 })).toBeInTheDocument();
    });

    it('displays text input example', () => {
      renderWithNavigation(<StyleGuideTemplate />);
      
      const textInput = screen.getByLabelText(/text input/i);
      expect(textInput).toBeInTheDocument();
      expect(textInput).toHaveAttribute('type', 'text');
    });

    it('displays textarea example', () => {
      renderWithNavigation(<StyleGuideTemplate />);
      
      const textarea = screen.getByLabelText(/textarea/i);
      expect(textarea).toBeInTheDocument();
    });

    it('displays select dropdown example', () => {
      renderWithNavigation(<StyleGuideTemplate />);
      
      const select = screen.getByLabelText(/select dropdown/i);
      expect(select).toBeInTheDocument();
    });

    it('displays search input example', () => {
      renderWithNavigation(<StyleGuideTemplate />);
      
      const searchInput = screen.getByLabelText(/search input/i);
      expect(searchInput).toBeInTheDocument();
      expect(searchInput).toHaveAttribute('type', 'search');
    });

    it('form inputs have accessible labels', () => {
      renderWithNavigation(<StyleGuideTemplate />);
      
      const textInput = screen.getByLabelText(/text input/i);
      expect(textInput).toHaveAccessibleName();
    });
  });

  describe('Badges & Pills Section', () => {
    it('renders Badges & Pills heading', () => {
      renderWithNavigation(<StyleGuideTemplate />);
      expect(screen.getByRole('heading', { name: /badges & pills/i, level: 2 })).toBeInTheDocument();
    });

    it('displays badge examples', () => {
      renderWithNavigation(<StyleGuideTemplate />);
      
      // Should show different badge styles
      expect(screen.getByText(/^primary$/i)).toBeInTheDocument();
      expect(screen.getByText(/^secondary$/i)).toBeInTheDocument();
      expect(screen.getByText(/^muted$/i)).toBeInTheDocument();
    });

    it('displays outline badge', () => {
      renderWithNavigation(<StyleGuideTemplate />);
      expect(screen.getByText(/^outline$/i)).toBeInTheDocument();
    });
  });

  describe('Icons Section', () => {
    it('renders Icons heading', () => {
      renderWithNavigation(<StyleGuideTemplate />);
      expect(screen.getByRole('heading', { name: /icons \(lucide react\)/i, level: 2 })).toBeInTheDocument();
    });

    it('displays icon examples', () => {
      const { container } = renderWithNavigation(<StyleGuideTemplate />);
      
      // Should have multiple icon SVGs
      const icons = container.querySelectorAll('svg');
      expect(icons.length).toBeGreaterThan(5);
    });

    it('shows icon labels', () => {
      renderWithNavigation(<StyleGuideTemplate />);
      
      // Should show labels like "Check", "X", "Alert"
      expect(screen.getByText(/check/i)).toBeInTheDocument();
      expect(screen.getByText(/alert/i)).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('has no accessibility violations', async () => {
      const { container } = renderWithNavigation(<StyleGuideTemplate />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('has skip link', () => {
      renderWithNavigation(<StyleGuideTemplate />);
      expect(screen.getByText(/skip to main content/i)).toBeInTheDocument();
    });

    it('main content has proper landmark', () => {
      renderWithNavigation(<StyleGuideTemplate />);
      const main = screen.getByRole('main');
      expect(main).toBeInTheDocument();
      expect(main).toHaveAttribute('id', 'main-content');
    });

    it('breadcrumbs have proper ARIA', () => {
      renderWithNavigation(<StyleGuideTemplate />);
      const nav = screen.getByRole('navigation', { name: /breadcrumb/i });
      expect(nav).toHaveAttribute('aria-label', 'Breadcrumb');
    });

    it('form inputs have labels', () => {
      renderWithNavigation(<StyleGuideTemplate />);
      
      const inputs = screen.getAllByRole('textbox');
      inputs.forEach(input => {
        expect(input).toHaveAccessibleName();
      });
    });

    it('buttons have accessible names', () => {
      renderWithNavigation(<StyleGuideTemplate />);
      
      const buttons = screen.getAllByRole('button');
      buttons.forEach(button => {
        expect(button).toHaveAccessibleName();
      });
    });
  });

  describe('Design System Compliance', () => {
    it('uses only Lexend and Manrope fonts', () => {
      const { container } = renderWithNavigation(<StyleGuideTemplate />);
      const headings = container.querySelectorAll('h1, h2, h3');
      
      headings.forEach(heading => {
        const styles = window.getComputedStyle(heading);
        const fontFamily = styles.fontFamily.toLowerCase();
        expect(
          fontFamily.includes('lexend') || fontFamily.includes('manrope')
        ).toBe(true);
      });
    });

    it('page title uses Lexend font', () => {
      renderWithNavigation(<StyleGuideTemplate />);
      const heading = screen.getByRole('heading', { name: /design system style guide/i, level: 1 });
      
      const styles = window.getComputedStyle(heading);
      expect(styles.fontFamily.toLowerCase()).toContain('lexend');
    });

    it('uses CSS variables for colors', () => {
      const { container } = renderWithNavigation(<StyleGuideTemplate />);
      
      // Check that color variables are used
      const colorExamples = container.querySelectorAll('[style*="var(--"]');
      expect(colorExamples.length).toBeGreaterThan(0);
    });

    it('displays CSS variable names as code', () => {
      renderWithNavigation(<StyleGuideTemplate />);
      
      // CSS variables should be shown in code tags
      const codeElements = screen.getAllByText(/--/i);
      expect(codeElements.length).toBeGreaterThan(5);
    });
  });

  describe('Page Structure', () => {
    it('has proper heading hierarchy', () => {
      renderWithNavigation(<StyleGuideTemplate />);
      
      const h1 = screen.getByRole('heading', { level: 1 });
      expect(h1).toBeInTheDocument();
      
      const h2s = screen.getAllByRole('heading', { level: 2 });
      expect(h2s.length).toBeGreaterThan(5);
    });

    it('includes header and footer', () => {
      renderWithNavigation(<StyleGuideTemplate />);
      
      expect(screen.getByRole('banner')).toBeInTheDocument();
      expect(screen.getByRole('contentinfo')).toBeInTheDocument();
    });

    it('includes back to top button', () => {
      renderWithNavigation(<StyleGuideTemplate />);
      
      const backToTop = document.querySelector('[aria-label*="back to top"]');
      expect(backToTop).toBeDefined();
    });
  });

  describe('Integration', () => {
    it('integrates with navigation context', () => {
      expect(() => renderWithNavigation(<StyleGuideTemplate />)).not.toThrow();
    });

    it('breadcrumb navigation works', () => {
      renderWithNavigation(<StyleGuideTemplate />);
      const nav = screen.getByRole('navigation', { name: /breadcrumb/i });
      const homeLink = within(nav).getByText('Home');
      
      expect(homeLink).toBeInTheDocument();
    });
  });

  describe('Visual Examples', () => {
    it('displays visual examples for each token type', () => {
      const { container } = renderWithNavigation(<StyleGuideTemplate />);
      
      // Should have visual examples (boxes, cards, etc.)
      const visualExamples = container.querySelectorAll('[style]');
      expect(visualExamples.length).toBeGreaterThan(20);
    });

    it('color swatches show actual colors', () => {
      const { container } = renderWithNavigation(<StyleGuideTemplate />);
      
      // Color swatches should have background colors applied
      const swatches = container.querySelectorAll('[style*="backgroundColor"]');
      expect(swatches.length).toBeGreaterThan(0);
    });

    it('typography examples show different sizes', () => {
      const { container } = renderWithNavigation(<StyleGuideTemplate />);
      
      // Typography examples should have different font sizes
      const typographyExamples = container.querySelectorAll('[style*="fontSize"]');
      expect(typographyExamples.length).toBeGreaterThan(0);
    });
  });
});
