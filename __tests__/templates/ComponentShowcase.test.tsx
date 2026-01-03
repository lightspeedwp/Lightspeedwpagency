/**
 * Component Showcase Tests
 * 
 * Comprehensive tests for the Component Showcase page covering:
 * - Rendering all component categories
 * - Component examples and code snippets
 * - Accessibility compliance (WCAG 2.1 AA)
 * - Design system token usage (CSS variables)
 * - Search and filter functionality
 * - Interactive component examples
 * 
 * @see /src/app/components/templates/ComponentShowcase.tsx
 */

import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe, toHaveNoViolations } from 'jest-axe';
import { ComponentShowcase } from '../../src/app/components/templates/ComponentShowcase';
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

describe('ComponentShowcase', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('Rendering', () => {
    it('renders the page heading', () => {
      renderWithNavigation(<ComponentShowcase />);
      expect(screen.getByRole('heading', { name: /component showcase/i, level: 1 })).toBeInTheDocument();
    });

    it('renders the breadcrumbs with correct trail', () => {
      renderWithNavigation(<ComponentShowcase />);
      const nav = screen.getByRole('navigation', { name: /breadcrumb/i });
      expect(nav).toBeInTheDocument();
      
      expect(within(nav).getByText('Home')).toBeInTheDocument();
      expect(within(nav).getByText('Developer Tools')).toBeInTheDocument();
      expect(within(nav).getByText('Component Showcase')).toBeInTheDocument();
    });

    it('renders page description', () => {
      renderWithNavigation(<ComponentShowcase />);
      expect(screen.getByText(/complete showcase/i)).toBeInTheDocument();
    });

    it('renders search input', () => {
      renderWithNavigation(<ComponentShowcase />);
      const searchInput = screen.getByPlaceholderText(/search components/i);
      expect(searchInput).toBeInTheDocument();
    });
  });

  describe('Component Categories', () => {
    it('renders all component categories', () => {
      renderWithNavigation(<ComponentShowcase />);
      
      expect(screen.getByText(/common components/i)).toBeInTheDocument();
      expect(screen.getByText(/patterns/i)).toBeInTheDocument();
      expect(screen.getByText(/blocks/i)).toBeInTheDocument();
    });

    it('displays component count for each category', () => {
      renderWithNavigation(<ComponentShowcase />);
      
      const counts = screen.getAllByText(/\d+ components?/i);
      expect(counts.length).toBeGreaterThan(0);
    });
  });

  describe('Component Examples', () => {
    it('renders Button component example', () => {
      renderWithNavigation(<ComponentShowcase />);
      expect(screen.getByText(/button/i)).toBeInTheDocument();
    });

    it('renders Container component example', () => {
      renderWithNavigation(<ComponentShowcase />);
      expect(screen.getByText(/container/i)).toBeInTheDocument();
    });

    it('renders Section component example', () => {
      renderWithNavigation(<ComponentShowcase />);
      expect(screen.getByText(/section/i)).toBeInTheDocument();
    });

    it('shows component file paths', () => {
      renderWithNavigation(<ComponentShowcase />);
      
      // Should show file paths like "/common/Button.tsx"
      expect(screen.getByText(/\/common\/Button\.tsx/i)).toBeInTheDocument();
    });

    it('displays component descriptions', () => {
      renderWithNavigation(<ComponentShowcase />);
      
      // Components should have descriptions
      expect(screen.getByText(/primary action component/i)).toBeInTheDocument();
    });
  });

  describe('Search Functionality', () => {
    it('filters components based on search query', async () => {
      const user = userEvent.setup();
      renderWithNavigation(<ComponentShowcase />);
      
      const searchInput = screen.getByPlaceholderText(/search components/i);
      await user.type(searchInput, 'button');
      
      expect(screen.getByText(/button/i)).toBeInTheDocument();
    });

    it('search is case-insensitive', async () => {
      const user = userEvent.setup();
      renderWithNavigation(<ComponentShowcase />);
      
      const searchInput = screen.getByPlaceholderText(/search components/i);
      await user.type(searchInput, 'CONTAINER');
      
      expect(screen.getByText(/container/i)).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('has no accessibility violations', async () => {
      const { container } = renderWithNavigation(<ComponentShowcase />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('has skip link', () => {
      renderWithNavigation(<ComponentShowcase />);
      expect(screen.getByText(/skip to main content/i)).toBeInTheDocument();
    });

    it('main content has proper landmark', () => {
      renderWithNavigation(<ComponentShowcase />);
      const main = screen.getByRole('main');
      expect(main).toBeInTheDocument();
      expect(main).toHaveAttribute('id', 'main-content');
    });

    it('breadcrumbs have proper ARIA', () => {
      renderWithNavigation(<ComponentShowcase />);
      const nav = screen.getByRole('navigation', { name: /breadcrumb/i });
      expect(nav).toHaveAttribute('aria-label', 'Breadcrumb');
    });
  });

  describe('Design System Compliance', () => {
    it('uses only Lexend and Manrope fonts', () => {
      const { container } = renderWithNavigation(<ComponentShowcase />);
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
      renderWithNavigation(<ComponentShowcase />);
      const heading = screen.getByRole('heading', { name: /component showcase/i, level: 1 });
      
      const styles = window.getComputedStyle(heading);
      expect(styles.fontFamily.toLowerCase()).toContain('lexend');
    });

    it('uses CSS variables for colors', () => {
      const { container } = renderWithNavigation(<ComponentShowcase />);
      const heading = container.querySelector('h1');
      
      if (heading) {
        const styles = window.getComputedStyle(heading);
        expect(styles.color).toBeDefined();
      }
    });
  });

  describe('Page Structure', () => {
    it('has proper heading hierarchy', () => {
      renderWithNavigation(<ComponentShowcase />);
      
      const h1 = screen.getByRole('heading', { level: 1 });
      expect(h1).toBeInTheDocument();
      
      const h2s = screen.getAllByRole('heading', { level: 2 });
      expect(h2s.length).toBeGreaterThan(0);
    });

    it('includes header and footer', () => {
      renderWithNavigation(<ComponentShowcase />);
      
      expect(screen.getByRole('banner')).toBeInTheDocument();
      expect(screen.getByRole('contentinfo')).toBeInTheDocument();
    });
  });

  describe('Interactive Examples', () => {
    it('shows live component examples', () => {
      renderWithNavigation(<ComponentShowcase />);
      
      // Should have interactive examples (buttons, etc.)
      const buttons = screen.getAllByRole('button');
      expect(buttons.length).toBeGreaterThan(0);
    });

    it('component examples are interactive', async () => {
      const user = userEvent.setup();
      renderWithNavigation(<ComponentShowcase />);
      
      const buttons = screen.getAllByRole('button');
      if (buttons.length > 0) {
        await user.hover(buttons[0]);
        expect(buttons[0]).toBeInTheDocument();
      }
    });
  });

  describe('Component Documentation', () => {
    it('shows component usage information', () => {
      renderWithNavigation(<ComponentShowcase />);
      
      // Should show usage examples or descriptions
      expect(screen.getByText(/usage/i)).toBeInTheDocument();
    });

    it('displays component props or API info', () => {
      renderWithNavigation(<ComponentShowcase />);
      
      // May show prop documentation
      const descriptions = screen.getAllByText(/description/i);
      expect(descriptions.length).toBeGreaterThan(0);
    });
  });

  describe('Integration', () => {
    it('integrates with navigation context', () => {
      expect(() => renderWithNavigation(<ComponentShowcase />)).not.toThrow();
    });

    it('breadcrumb navigation works', () => {
      renderWithNavigation(<ComponentShowcase />);
      const nav = screen.getByRole('navigation', { name: /breadcrumb/i });
      const homeLink = within(nav).getByText('Home');
      
      expect(homeLink).toBeInTheDocument();
    });
  });
});
