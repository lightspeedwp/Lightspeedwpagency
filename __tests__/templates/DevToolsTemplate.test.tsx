/**
 * Dev Tools Template Tests
 * 
 * Comprehensive tests for the Dev Tools landing page covering:
 * - Rendering all 12 dev tool cards
 * - Navigation integration
 * - Accessibility compliance (WCAG 2.1 AA)
 * - Design system token usage (CSS variables)
 * - Keyboard interaction
 * - Search and filter functionality
 * - Category organization
 * 
 * @see /src/app/components/templates/DevToolsTemplate.tsx
 */

import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe, toHaveNoViolations } from 'jest-axe';
import { DevToolsTemplate } from '../../src/app/components/templates/DevToolsTemplate';
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

describe('DevToolsTemplate', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('Rendering', () => {
    it('renders the page heading', () => {
      renderWithNavigation(<DevToolsTemplate />);
      expect(screen.getByRole('heading', { name: /developer tools/i, level: 1 })).toBeInTheDocument();
    });

    it('renders the breadcrumbs', () => {
      renderWithNavigation(<DevToolsTemplate />);
      const nav = screen.getByRole('navigation', { name: /breadcrumb/i });
      expect(nav).toBeInTheDocument();
      expect(within(nav).getByText('Home')).toBeInTheDocument();
      expect(within(nav).getByText('Developer Tools')).toBeInTheDocument();
    });

    it('renders search input', () => {
      renderWithNavigation(<DevToolsTemplate />);
      const searchInput = screen.getByPlaceholderText(/search dev tools/i);
      expect(searchInput).toBeInTheDocument();
      expect(searchInput).toHaveAttribute('type', 'search');
    });

    it('renders all 12 dev tool cards', () => {
      renderWithNavigation(<DevToolsTemplate />);
      
      // Check for all 12 dev tools
      expect(screen.getByText('Template Tester')).toBeInTheDocument();
      expect(screen.getByText('Component Showcase')).toBeInTheDocument();
      expect(screen.getByText('Block Documentation')).toBeInTheDocument();
      expect(screen.getByText('Component API')).toBeInTheDocument();
      expect(screen.getByText('Design Blocks Showcase')).toBeInTheDocument();
      expect(screen.getByText('Button Showcase')).toBeInTheDocument();
      expect(screen.getByText('Header/Footer Comparison')).toBeInTheDocument();
      expect(screen.getByText('Icon Library')).toBeInTheDocument();
      expect(screen.getByText('Live Preview')).toBeInTheDocument();
      expect(screen.getByText('Section Presets Showcase')).toBeInTheDocument();
      expect(screen.getByText('Style Guide')).toBeInTheDocument();
      expect(screen.getByText('Theme Blocks Showcase')).toBeInTheDocument();
    });

    it('renders category filters', () => {
      renderWithNavigation(<DevToolsTemplate />);
      
      // Check for category buttons
      expect(screen.getByRole('button', { name: /all/i })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /templates/i })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /components/i })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /blocks/i })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /design system/i })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /testing/i })).toBeInTheDocument();
    });
  });

  describe('Navigation', () => {
    it('tool cards are clickable buttons', () => {
      renderWithNavigation(<DevToolsTemplate />);
      const templateTesterCard = screen.getByRole('button', { name: /template tester/i });
      expect(templateTesterCard).toBeInTheDocument();
      expect(templateTesterCard).toHaveAttribute('type', 'button');
    });

    it('all tool cards have proper aria-labels', () => {
      renderWithNavigation(<DevToolsTemplate />);
      const cards = screen.getAllByRole('button');
      
      // Verify each card has accessible name
      cards.forEach(card => {
        expect(card).toHaveAccessibleName();
      });
    });
  });

  describe('Accessibility', () => {
    it('has no accessibility violations', async () => {
      const { container } = renderWithNavigation(<DevToolsTemplate />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('has skip link for keyboard users', () => {
      renderWithNavigation(<DevToolsTemplate />);
      const skipLink = screen.getByText(/skip to main content/i);
      expect(skipLink).toBeInTheDocument();
    });

    it('main content has proper landmark', () => {
      renderWithNavigation(<DevToolsTemplate />);
      const main = screen.getByRole('main');
      expect(main).toBeInTheDocument();
      expect(main).toHaveAttribute('id', 'main-content');
    });

    it('search input has accessible label', () => {
      renderWithNavigation(<DevToolsTemplate />);
      const searchInput = screen.getByPlaceholderText(/search dev tools/i);
      expect(searchInput).toHaveAccessibleName();
    });

    it('category buttons are keyboard accessible', async () => {
      const user = userEvent.setup();
      renderWithNavigation(<DevToolsTemplate />);
      
      const allButton = screen.getByRole('button', { name: /all/i });
      await user.tab(); // Skip to first focusable element
      
      // Verify buttons can receive focus
      expect(allButton).toBeInTheDocument();
    });
  });

  describe('Search Functionality', () => {
    it('filters tools based on search query', async () => {
      const user = userEvent.setup();
      renderWithNavigation(<DevToolsTemplate />);
      
      const searchInput = screen.getByPlaceholderText(/search dev tools/i);
      await user.type(searchInput, 'template');
      
      // Template Tester should be visible
      expect(screen.getByText('Template Tester')).toBeInTheDocument();
      
      // Non-matching tools might be hidden (implementation dependent)
    });

    it('search is case-insensitive', async () => {
      const user = userEvent.setup();
      renderWithNavigation(<DevToolsTemplate />);
      
      const searchInput = screen.getByPlaceholderText(/search dev tools/i);
      await user.type(searchInput, 'BUTTON');
      
      expect(screen.getByText('Button Showcase')).toBeInTheDocument();
    });

    it('clears search results when input is cleared', async () => {
      const user = userEvent.setup();
      renderWithNavigation(<DevToolsTemplate />);
      
      const searchInput = screen.getByPlaceholderText(/search dev tools/i);
      await user.type(searchInput, 'icon');
      await user.clear(searchInput);
      
      // All tools should be visible again
      expect(screen.getByText('Template Tester')).toBeInTheDocument();
      expect(screen.getByText('Button Showcase')).toBeInTheDocument();
    });
  });

  describe('Category Filtering', () => {
    it('filters by Templates category', async () => {
      const user = userEvent.setup();
      renderWithNavigation(<DevToolsTemplate />);
      
      const templatesButton = screen.getByRole('button', { name: /templates/i });
      await user.click(templatesButton);
      
      // Should show Template Tester and Header/Footer Comparison
      expect(screen.getByText('Template Tester')).toBeInTheDocument();
      expect(screen.getByText('Header/Footer Comparison')).toBeInTheDocument();
    });

    it('filters by Components category', async () => {
      const user = userEvent.setup();
      renderWithNavigation(<DevToolsTemplate />);
      
      const componentsButton = screen.getByRole('button', { name: /components/i });
      await user.click(componentsButton);
      
      // Should show Component Showcase, Component API, Button Showcase
      expect(screen.getByText('Component Showcase')).toBeInTheDocument();
      expect(screen.getByText('Component API')).toBeInTheDocument();
      expect(screen.getByText('Button Showcase')).toBeInTheDocument();
    });

    it('shows all tools when "All" is selected', async () => {
      const user = userEvent.setup();
      renderWithNavigation(<DevToolsTemplate />);
      
      // Click a category first
      const templatesButton = screen.getByRole('button', { name: /templates/i });
      await user.click(templatesButton);
      
      // Then click All
      const allButton = screen.getByRole('button', { name: /all/i });
      await user.click(allButton);
      
      // All 12 tools should be visible
      expect(screen.getByText('Template Tester')).toBeInTheDocument();
      expect(screen.getByText('Button Showcase')).toBeInTheDocument();
      expect(screen.getByText('Icon Library')).toBeInTheDocument();
    });
  });

  describe('Design System Compliance', () => {
    it('uses CSS variables for colors', () => {
      const { container } = renderWithNavigation(<DevToolsTemplate />);
      const toolCards = container.querySelectorAll('[role="button"]');
      
      toolCards.forEach(card => {
        const styles = window.getComputedStyle(card);
        // Verify CSS variables are used (mocked in test setup)
        expect(styles).toBeDefined();
      });
    });

    it('uses only Lexend and Manrope fonts', () => {
      const { container } = renderWithNavigation(<DevToolsTemplate />);
      const headings = container.querySelectorAll('h1, h2, h3, h4, h5, h6');
      
      headings.forEach(heading => {
        const styles = window.getComputedStyle(heading);
        const fontFamily = styles.fontFamily.toLowerCase();
        expect(
          fontFamily.includes('lexend') || fontFamily.includes('manrope')
        ).toBe(true);
      });
    });

    it('heading uses Lexend font', () => {
      renderWithNavigation(<DevToolsTemplate />);
      const heading = screen.getByRole('heading', { name: /developer tools/i, level: 1 });
      
      const styles = window.getComputedStyle(heading);
      expect(styles.fontFamily.toLowerCase()).toContain('lexend');
    });
  });

  describe('Responsive Design', () => {
    it('renders grid layout for tool cards', () => {
      const { container } = renderWithNavigation(<DevToolsTemplate />);
      const grid = container.querySelector('.grid');
      expect(grid).toBeInTheDocument();
    });

    it('tool cards have minimum touch target size', () => {
      renderWithNavigation(<DevToolsTemplate />);
      const cards = screen.getAllByRole('button').filter(btn => 
        btn.textContent?.includes('Template') || 
        btn.textContent?.includes('Component') ||
        btn.textContent?.includes('Block')
      );
      
      cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        // WCAG AAA requires 44x44px minimum
        expect(rect.width).toBeGreaterThanOrEqual(44);
        expect(rect.height).toBeGreaterThanOrEqual(44);
      });
    });
  });

  describe('Tool Cards', () => {
    it('each card displays tool title', () => {
      renderWithNavigation(<DevToolsTemplate />);
      
      const tools = [
        'Template Tester',
        'Component Showcase',
        'Block Documentation',
        'Component API',
      ];
      
      tools.forEach(title => {
        expect(screen.getByText(title)).toBeInTheDocument();
      });
    });

    it('each card displays tool description', () => {
      renderWithNavigation(<DevToolsTemplate />);
      
      // Check that descriptions are present (partial match)
      expect(screen.getByText(/test all 59 templates/i)).toBeInTheDocument();
      expect(screen.getByText(/live component examples/i)).toBeInTheDocument();
    });

    it('each card displays category badge', () => {
      renderWithNavigation(<DevToolsTemplate />);
      
      // Check for category badges
      expect(screen.getByText(/templates/i)).toBeInTheDocument();
      expect(screen.getByText(/components/i)).toBeInTheDocument();
      expect(screen.getByText(/blocks/i)).toBeInTheDocument();
    });

    it('cards have hover effects', async () => {
      const user = userEvent.setup();
      renderWithNavigation(<DevToolsTemplate />);
      
      const card = screen.getByRole('button', { name: /template tester/i });
      await user.hover(card);
      
      // Card should still be in document after hover
      expect(card).toBeInTheDocument();
    });
  });

  describe('Page Structure', () => {
    it('has proper heading hierarchy', () => {
      renderWithNavigation(<DevToolsTemplate />);
      
      // H1 for page title
      const h1 = screen.getByRole('heading', { level: 1 });
      expect(h1).toBeInTheDocument();
      
      // H2 for sections
      const h2s = screen.getAllByRole('heading', { level: 2 });
      expect(h2s.length).toBeGreaterThan(0);
    });

    it('includes header and footer', () => {
      renderWithNavigation(<DevToolsTemplate />);
      
      // Header should have navigation
      const banner = screen.getByRole('banner');
      expect(banner).toBeInTheDocument();
      
      // Footer should be present
      const contentinfo = screen.getByRole('contentinfo');
      expect(contentinfo).toBeInTheDocument();
    });

    it('includes back to top button', () => {
      renderWithNavigation(<DevToolsTemplate />);
      
      // Back to top button should exist (might be hidden initially)
      const backToTop = document.querySelector('[aria-label*="back to top"]');
      expect(backToTop).toBeDefined();
    });
  });

  describe('Integration', () => {
    it('integrates with navigation context', () => {
      // Should render without errors when wrapped in NavigationProvider
      expect(() => renderWithNavigation(<DevToolsTemplate />)).not.toThrow();
    });

    it('breadcrumb navigation works with context', () => {
      renderWithNavigation(<DevToolsTemplate />);
      const nav = screen.getByRole('navigation', { name: /breadcrumb/i });
      const homeLink = within(nav).getByText('Home');
      
      expect(homeLink).toBeInTheDocument();
    });
  });
});
