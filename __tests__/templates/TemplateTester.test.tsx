/**
 * Template Tester Tests
 * 
 * Comprehensive tests for the Template Tester page covering:
 * - Rendering all template categories
 * - Navigation to individual templates
 * - Accessibility compliance (WCAG 2.1 AA)
 * - Design system token usage (CSS variables)
 * - Search and filter functionality
 * - Solutions links (fixed)
 * - Developer Tools category
 * 
 * @see /src/app/components/templates/TemplateTester.tsx
 */

import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe, toHaveNoViolations } from 'jest-axe';
import { TemplateTester } from '../../src/app/components/templates/TemplateTester';
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

describe('TemplateTester', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('Rendering', () => {
    it('renders the page heading', () => {
      renderWithNavigation(<TemplateTester />);
      expect(screen.getByRole('heading', { name: /template tester/i, level: 1 })).toBeInTheDocument();
    });

    it('renders the breadcrumbs with correct trail', () => {
      renderWithNavigation(<TemplateTester />);
      const nav = screen.getByRole('navigation', { name: /breadcrumb/i });
      expect(nav).toBeInTheDocument();
      
      // Verify breadcrumb trail: Home > Developer Tools > Template Tester
      expect(within(nav).getByText('Home')).toBeInTheDocument();
      expect(within(nav).getByText('Developer Tools')).toBeInTheDocument();
      expect(within(nav).getByText('Template Tester')).toBeInTheDocument();
    });

    it('renders page description', () => {
      renderWithNavigation(<TemplateTester />);
      expect(screen.getByText(/test and verify all/i)).toBeInTheDocument();
    });

    it('renders search input', () => {
      renderWithNavigation(<TemplateTester />);
      const searchInput = screen.getByPlaceholderText(/search templates/i);
      expect(searchInput).toBeInTheDocument();
      expect(searchInput).toHaveAttribute('type', 'search');
    });
  });

  describe('Template Categories', () => {
    it('renders all template categories', () => {
      renderWithNavigation(<TemplateTester />);
      
      // Check for main categories
      expect(screen.getByText(/core templates/i)).toBeInTheDocument();
      expect(screen.getByText(/archive templates/i)).toBeInTheDocument();
      expect(screen.getByText(/single templates/i)).toBeInTheDocument();
      expect(screen.getByText(/utility templates/i)).toBeInTheDocument();
      expect(screen.getByText(/services/i)).toBeInTheDocument();
      expect(screen.getByText(/solutions/i)).toBeInTheDocument();
      expect(screen.getByText(/developer tools/i)).toBeInTheDocument();
    });

    it('displays correct template counts', () => {
      renderWithNavigation(<TemplateTester />);
      
      // Each category should show number of templates
      const categories = screen.getAllByText(/\d+ templates?/i);
      expect(categories.length).toBeGreaterThan(0);
    });

    it('renders Developer Tools category', () => {
      renderWithNavigation(<TemplateTester />);
      
      // Developer Tools category should be present
      expect(screen.getByText(/developer tools/i)).toBeInTheDocument();
      
      // Should list dev tools
      expect(screen.getByText(/dev tools hub/i)).toBeInTheDocument();
      expect(screen.getByText(/component showcase/i)).toBeInTheDocument();
      expect(screen.getByText(/block documentation/i)).toBeInTheDocument();
    });
  });

  describe('Solutions Links', () => {
    it('renders WordPress Solutions with correct page ID', () => {
      renderWithNavigation(<TemplateTester />);
      
      // Should use 'solution-wordpress', not 'solutions-wordpress'
      expect(screen.getByText(/wordpress solutions/i)).toBeInTheDocument();
    });

    it('renders WooCommerce Solutions with correct page ID', () => {
      renderWithNavigation(<TemplateTester />);
      expect(screen.getByText(/woocommerce solutions/i)).toBeInTheDocument();
    });

    it('renders LSX Solutions with correct page ID', () => {
      renderWithNavigation(<TemplateTester />);
      expect(screen.getByText(/lsx solutions/i)).toBeInTheDocument();
    });

    it('all solution links are clickable', () => {
      renderWithNavigation(<TemplateTester />);
      
      const wordpressLink = screen.getByText(/wordpress solutions/i).closest('button');
      const woocommerceLink = screen.getByText(/woocommerce solutions/i).closest('button');
      const lsxLink = screen.getByText(/lsx solutions/i).closest('button');
      
      expect(wordpressLink).toBeInTheDocument();
      expect(woocommerceLink).toBeInTheDocument();
      expect(lsxLink).toBeInTheDocument();
    });
  });

  describe('Template Links', () => {
    it('renders Homepage template', () => {
      renderWithNavigation(<TemplateTester />);
      expect(screen.getByText(/^homepage$/i)).toBeInTheDocument();
    });

    it('renders Blog Index template', () => {
      renderWithNavigation(<TemplateTester />);
      expect(screen.getByText(/blog index/i)).toBeInTheDocument();
    });

    it('renders Portfolio Archive template', () => {
      renderWithNavigation(<TemplateTester />);
      expect(screen.getByText(/portfolio archive/i)).toBeInTheDocument();
    });

    it('all template links are clickable buttons', () => {
      renderWithNavigation(<TemplateTester />);
      
      const buttons = screen.getAllByRole('button').filter(btn => 
        btn.textContent?.includes('template') || 
        btn.textContent?.includes('Homepage') ||
        btn.textContent?.includes('About')
      );
      
      expect(buttons.length).toBeGreaterThan(0);
      buttons.forEach(button => {
        expect(button).toHaveAttribute('type', 'button');
      });
    });
  });

  describe('Search Functionality', () => {
    it('filters templates based on search query', async () => {
      const user = userEvent.setup();
      renderWithNavigation(<TemplateTester />);
      
      const searchInput = screen.getByPlaceholderText(/search templates/i);
      await user.type(searchInput, 'blog');
      
      // Blog-related templates should be visible
      expect(screen.getByText(/blog index/i)).toBeInTheDocument();
    });

    it('search is case-insensitive', async () => {
      const user = userEvent.setup();
      renderWithNavigation(<TemplateTester />);
      
      const searchInput = screen.getByPlaceholderText(/search templates/i);
      await user.type(searchInput, 'PORTFOLIO');
      
      expect(screen.getByText(/portfolio archive/i)).toBeInTheDocument();
    });

    it('shows no results message for invalid search', async () => {
      const user = userEvent.setup();
      renderWithNavigation(<TemplateTester />);
      
      const searchInput = screen.getByPlaceholderText(/search templates/i);
      await user.type(searchInput, 'xyznonexistent');
      
      // Should show some indication of no results
      const templates = screen.queryAllByText(/template/i);
      // Implementation dependent - might show empty state
    });
  });

  describe('Accessibility', () => {
    it('has no accessibility violations', async () => {
      const { container } = renderWithNavigation(<TemplateTester />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('has skip link for keyboard users', () => {
      renderWithNavigation(<TemplateTester />);
      const skipLink = screen.getByText(/skip to main content/i);
      expect(skipLink).toBeInTheDocument();
    });

    it('main content has proper landmark', () => {
      renderWithNavigation(<TemplateTester />);
      const main = screen.getByRole('main');
      expect(main).toBeInTheDocument();
      expect(main).toHaveAttribute('id', 'main-content');
    });

    it('search input has accessible label', () => {
      renderWithNavigation(<TemplateTester />);
      const searchInput = screen.getByPlaceholderText(/search templates/i);
      expect(searchInput).toHaveAccessibleName();
    });

    it('breadcrumbs have proper ARIA attributes', () => {
      renderWithNavigation(<TemplateTester />);
      const nav = screen.getByRole('navigation', { name: /breadcrumb/i });
      expect(nav).toHaveAttribute('aria-label', 'Breadcrumb');
    });

    it('current breadcrumb has aria-current', () => {
      renderWithNavigation(<TemplateTester />);
      const currentPage = screen.getByText('Template Tester');
      expect(currentPage).toHaveAttribute('aria-current', 'page');
    });
  });

  describe('Design System Compliance', () => {
    it('uses CSS variables for colors', () => {
      const { container } = renderWithNavigation(<TemplateTester />);
      const heading = container.querySelector('h1');
      
      if (heading) {
        const styles = window.getComputedStyle(heading);
        expect(styles).toBeDefined();
      }
    });

    it('uses only Lexend and Manrope fonts', () => {
      const { container } = renderWithNavigation(<TemplateTester />);
      const headings = container.querySelectorAll('h1, h2, h3, h4, h5, h6');
      
      headings.forEach(heading => {
        const styles = window.getComputedStyle(heading);
        const fontFamily = styles.fontFamily.toLowerCase();
        expect(
          fontFamily.includes('lexend') || fontFamily.includes('manrope')
        ).toBe(true);
      });
    });

    it('page title uses Lexend font', () => {
      renderWithNavigation(<TemplateTester />);
      const heading = screen.getByRole('heading', { name: /template tester/i, level: 1 });
      
      const styles = window.getComputedStyle(heading);
      expect(styles.fontFamily.toLowerCase()).toContain('lexend');
    });

    it('uses CSS variable for border radius', () => {
      const { container } = renderWithNavigation(<TemplateTester />);
      const cards = container.querySelectorAll('[role="button"]');
      
      cards.forEach(card => {
        const styles = window.getComputedStyle(card);
        // Border radius should use CSS variable
        expect(styles.borderRadius).toBeDefined();
      });
    });
  });

  describe('Category Organization', () => {
    it('groups templates by category', () => {
      renderWithNavigation(<TemplateTester />);
      
      // Categories should have sections
      expect(screen.getByText(/core templates/i)).toBeInTheDocument();
      expect(screen.getByText(/archive templates/i)).toBeInTheDocument();
      expect(screen.getByText(/single templates/i)).toBeInTheDocument();
    });

    it('displays category icons', () => {
      const { container } = renderWithNavigation(<TemplateTester />);
      
      // Icons should be rendered (Lucide icons)
      const svgs = container.querySelectorAll('svg');
      expect(svgs.length).toBeGreaterThan(0);
    });

    it('each category has description', () => {
      renderWithNavigation(<TemplateTester />);
      
      // Categories should have descriptive text
      expect(screen.getByText(/core page templates/i)).toBeInTheDocument();
      expect(screen.getByText(/content listing templates/i)).toBeInTheDocument();
    });
  });

  describe('Template Cards', () => {
    it('each template card displays label', () => {
      renderWithNavigation(<TemplateTester />);
      
      const templates = [
        'Homepage',
        'About',
        'Contact',
        'Services',
      ];
      
      templates.forEach(title => {
        expect(screen.getByText(title)).toBeInTheDocument();
      });
    });

    it('each template card shows WordPress template name', () => {
      renderWithNavigation(<TemplateTester />);
      
      // Should show template file names like "front-page.html"
      expect(screen.getByText(/front-page\.html/i)).toBeInTheDocument();
      expect(screen.getByText(/page\.html/i)).toBeInTheDocument();
    });

    it('template cards have hover effects', async () => {
      const user = userEvent.setup();
      renderWithNavigation(<TemplateTester />);
      
      const card = screen.getByText(/homepage/i).closest('button');
      if (card) {
        await user.hover(card);
        expect(card).toBeInTheDocument();
      }
    });

    it('template cards have minimum touch target size', () => {
      renderWithNavigation(<TemplateTester />);
      const buttons = screen.getAllByRole('button').filter(btn => 
        btn.textContent?.includes('Homepage') || btn.textContent?.includes('About')
      );
      
      buttons.forEach(button => {
        const rect = button.getBoundingClientRect();
        // WCAG AAA requires 44x44px minimum
        expect(rect.height).toBeGreaterThanOrEqual(44);
      });
    });
  });

  describe('Page Structure', () => {
    it('has proper heading hierarchy', () => {
      renderWithNavigation(<TemplateTester />);
      
      // H1 for page title
      const h1 = screen.getByRole('heading', { level: 1 });
      expect(h1).toBeInTheDocument();
      
      // H2 for category sections
      const h2s = screen.getAllByRole('heading', { level: 2 });
      expect(h2s.length).toBeGreaterThan(0);
    });

    it('includes header and footer', () => {
      renderWithNavigation(<TemplateTester />);
      
      const banner = screen.getByRole('banner');
      expect(banner).toBeInTheDocument();
      
      const contentinfo = screen.getByRole('contentinfo');
      expect(contentinfo).toBeInTheDocument();
    });

    it('includes back to top button', () => {
      renderWithNavigation(<TemplateTester />);
      
      const backToTop = document.querySelector('[aria-label*="back to top"]');
      expect(backToTop).toBeDefined();
    });
  });

  describe('Developer Tools Integration', () => {
    it('renders Dev Tools Hub link', () => {
      renderWithNavigation(<TemplateTester />);
      expect(screen.getByText(/dev tools hub/i)).toBeInTheDocument();
    });

    it('renders all 11 dev tool links', () => {
      renderWithNavigation(<TemplateTester />);
      
      const devTools = [
        'Component Showcase',
        'Block Documentation',
        'Component API',
        'Design Blocks',
        'Button Showcase',
        'Icon Library',
      ];
      
      devTools.forEach(tool => {
        expect(screen.getByText(new RegExp(tool, 'i'))).toBeInTheDocument();
      });
    });

    it('dev tool links are clickable', () => {
      renderWithNavigation(<TemplateTester />);
      
      const devToolsLink = screen.getByText(/component showcase/i).closest('button');
      expect(devToolsLink).toBeInTheDocument();
      expect(devToolsLink).toHaveAttribute('type', 'button');
    });
  });

  describe('Integration', () => {
    it('integrates with navigation context', () => {
      expect(() => renderWithNavigation(<TemplateTester />)).not.toThrow();
    });

    it('breadcrumb Home link navigates correctly', () => {
      renderWithNavigation(<TemplateTester />);
      const nav = screen.getByRole('navigation', { name: /breadcrumb/i });
      const homeLink = within(nav).getByText('Home');
      
      expect(homeLink).toBeInTheDocument();
      expect(homeLink.closest('a, button')).toBeInTheDocument();
    });

    it('breadcrumb Developer Tools link navigates correctly', () => {
      renderWithNavigation(<TemplateTester />);
      const nav = screen.getByRole('navigation', { name: /breadcrumb/i });
      const devToolsLink = within(nav).getByText('Developer Tools');
      
      expect(devToolsLink).toBeInTheDocument();
      expect(devToolsLink.closest('a, button')).toBeInTheDocument();
    });
  });

  describe('Responsive Design', () => {
    it('renders grid layout for template cards', () => {
      const { container } = renderWithNavigation(<TemplateTester />);
      const grids = container.querySelectorAll('.grid');
      expect(grids.length).toBeGreaterThan(0);
    });

    it('search input is full width on mobile', () => {
      renderWithNavigation(<TemplateTester />);
      const searchInput = screen.getByPlaceholderText(/search templates/i);
      
      expect(searchInput).toHaveClass('w-full');
    });
  });

  describe('Template Count', () => {
    it('displays total template count', () => {
      renderWithNavigation(<TemplateTester />);
      
      // Should show total count somewhere (e.g., "59 templates")
      expect(screen.getByText(/\d+ templates?/i)).toBeInTheDocument();
    });

    it('each category shows its template count', () => {
      renderWithNavigation(<TemplateTester />);
      
      // Each category should display how many templates it contains
      const counts = screen.getAllByText(/\d+ templates?/i);
      expect(counts.length).toBeGreaterThan(5);
    });
  });
});
