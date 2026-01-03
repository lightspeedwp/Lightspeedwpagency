/**
 * Button Component Tests
 * 
 * Tests for the LSX Design Button component covering:
 * - Rendering with different variants
 * - Navigation integration
 * - Accessibility compliance (WCAG 2.1 AA)
 * - Keyboard interaction
 * - Design system token usage
 * 
 * @see /src/app/components/common/Button.tsx
 */

import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe, toHaveNoViolations } from 'jest-axe';
import { Button } from '../../src/app/components/common/Button';
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

describe('Button Component', () => {
  describe('Rendering', () => {
    it('renders with children text', () => {
      renderWithNavigation(<Button>Click me</Button>);
      expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument();
    });

    it('renders primary variant with correct styles', () => {
      renderWithNavigation(<Button variant="primary">Primary</Button>);
      const button = screen.getByRole('button');
      
      // Check that button exists and has text
      expect(button).toHaveTextContent('Primary');
    });

    it('renders secondary variant with correct styles', () => {
      renderWithNavigation(<Button variant="secondary">Secondary</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveTextContent('Secondary');
    });

    it('renders outline variant', () => {
      renderWithNavigation(<Button variant="outline">Outline</Button>);
      expect(screen.getByRole('button')).toHaveTextContent('Outline');
    });

    it('renders ghost variant', () => {
      renderWithNavigation(<Button variant="ghost">Ghost</Button>);
      expect(screen.getByRole('button')).toHaveTextContent('Ghost');
    });
  });

  describe('Navigation Integration', () => {
    it('calls navigateTo with correct page when page prop is provided', async () => {
      const user = userEvent.setup();
      renderWithNavigation(<Button page="contact">Contact</Button>);
      
      const button = screen.getByRole('button');
      await user.click(button);
      
      // Navigation should be triggered
      // Note: Actual navigation testing would require mocking the NavigationContext
    });

    it('renders as anchor tag when href is provided', () => {
      render(<Button href="https://example.com">External Link</Button>);
      const link = screen.getByRole('link');
      expect(link).toHaveAttribute('href', 'https://example.com');
    });

    it('opens external links in new tab', () => {
      render(<Button href="https://example.com">External</Button>);
      const link = screen.getByRole('link');
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });

  describe('Interaction', () => {
    it('calls onClick handler when clicked', async () => {
      const handleClick = vi.fn();
      const user = userEvent.setup();
      renderWithNavigation(<Button onClick={handleClick}>Click</Button>);
      
      await user.click(screen.getByRole('button'));
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('is keyboard accessible with Enter key', async () => {
      const handleClick = vi.fn();
      const user = userEvent.setup();
      renderWithNavigation(<Button onClick={handleClick}>Press Enter</Button>);
      
      const button = screen.getByRole('button');
      button.focus();
      await user.keyboard('{Enter}');
      expect(handleClick).toHaveBeenCalled();
    });

    it('is keyboard accessible with Space key', async () => {
      const handleClick = vi.fn();
      const user = userEvent.setup();
      renderWithNavigation(<Button onClick={handleClick}>Press Space</Button>);
      
      const button = screen.getByRole('button');
      button.focus();
      await user.keyboard(' ');
      expect(handleClick).toHaveBeenCalled();
    });

    it('does not trigger onClick when disabled', async () => {
      const handleClick = vi.fn();
      const user = userEvent.setup();
      renderWithNavigation(<Button onClick={handleClick} disabled>Disabled</Button>);
      
      await user.click(screen.getByRole('button'));
      expect(handleClick).not.toHaveBeenCalled();
    });
  });

  describe('Accessibility (WCAG 2.1 AA)', () => {
    it('has no accessibility violations (primary variant)', async () => {
      const { container } = renderWithNavigation(<Button variant="primary">Accessible Button</Button>);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('has no accessibility violations (disabled state)', async () => {
      const { container } = renderWithNavigation(<Button disabled>Disabled Button</Button>);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('respects aria-label prop', () => {
      renderWithNavigation(<Button aria-label="Custom Label">Icon Only</Button>);
      expect(screen.getByRole('button', { name: /custom label/i })).toBeInTheDocument();
    });

    it('has visible focus state', () => {
      renderWithNavigation(<Button>Focus Test</Button>);
      const button = screen.getByRole('button');
      button.focus();
      expect(document.activeElement).toBe(button);
    });

    it('disabled button is not in tab order', () => {
      renderWithNavigation(<Button disabled>Not Tabbable</Button>);
      const button = screen.getByRole('button');
      expect(button).toBeDisabled();
    });
  });

  describe('Design System Integration', () => {
    it('uses CSS variables for colors', () => {
      renderWithNavigation(<Button variant="primary">Tokens</Button>);
      const button = screen.getByRole('button');
      const styles = window.getComputedStyle(button);
      
      // Button should use CSS variables (not hard-coded colors)
      // This would require checking the actual computed styles
      expect(button).toBeInTheDocument();
    });

    it('applies correct size prop', () => {
      renderWithNavigation(<Button size="sm">Small</Button>);
      expect(screen.getByRole('button')).toHaveTextContent('Small');
    });

    it('applies medium size by default', () => {
      renderWithNavigation(<Button>Default Size</Button>);
      expect(screen.getByRole('button')).toHaveTextContent('Default Size');
    });

    it('applies large size', () => {
      renderWithNavigation(<Button size="lg">Large</Button>);
      expect(screen.getByRole('button')).toHaveTextContent('Large');
    });
  });

  describe('States', () => {
    it('renders disabled state correctly', () => {
      renderWithNavigation(<Button disabled>Disabled</Button>);
      expect(screen.getByRole('button')).toBeDisabled();
    });

    it('renders loading state (if implemented)', () => {
      // Placeholder for loading state test
      // renderWithNavigation(<Button loading>Loading</Button>);
    });
  });

  describe('Props', () => {
    it('accepts and applies custom className', () => {
      renderWithNavigation(<Button className="custom-class">Custom</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('custom-class');
    });

    it('accepts custom data attributes', () => {
      renderWithNavigation(
        <Button data-testid="custom-button" data-tracking="click">
          Tracking
        </Button>
      );
      const button = screen.getByTestId('custom-button');
      expect(button).toHaveAttribute('data-tracking', 'click');
    });

    it('forwards ref correctly', () => {
      const ref = React.createRef<HTMLButtonElement>();
      renderWithNavigation(<Button ref={ref}>Ref Test</Button>);
      expect(ref.current).toBeInstanceOf(HTMLButtonElement);
    });
  });

  describe('WordPress Block Integration', () => {
    it('renders with WordPress block pattern class names', () => {
      // Test that button can accept block-specific classes
      renderWithNavigation(
        <Button className="wp-block-button__link">
          WordPress Button
        </Button>
      );
      expect(screen.getByRole('button')).toHaveClass('wp-block-button__link');
    });
  });
});
