/**
 * Grid Block - Component Tests
 * 
 * Tests for the Grid layout block component.
 * Verifies grid layout, responsive behavior, and design system compliance.
 */

import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Grid } from '../Grid';

describe('Grid Block', () => {
  describe('Rendering', () => {
    it('renders children correctly', () => {
      render(
        <Grid>
          <div>Item 1</div>
          <div>Item 2</div>
          <div>Item 3</div>
        </Grid>
      );
      expect(screen.getByText('Item 1')).toBeInTheDocument();
      expect(screen.getByText('Item 2')).toBeInTheDocument();
      expect(screen.getByText('Item 3')).toBeInTheDocument();
    });

    it('renders as grid container', () => {
      const { container } = render(<Grid>Content</Grid>);
      const grid = container.querySelector('.wp-block-grid');
      expect(grid).toHaveStyle({ display: 'grid' });
    });

    it('has ARIA role of grid', () => {
      const { container } = render(<Grid>Content</Grid>);
      const grid = container.querySelector('[role="grid"]');
      expect(grid).toBeInTheDocument();
    });
  });

  describe('Fixed Column Layout', () => {
    it('applies fixed column count', () => {
      const { container } = render(<Grid columns={3}>Content</Grid>);
      const grid = container.querySelector('.wp-block-grid');
      expect(grid).toHaveStyle({ gridTemplateColumns: 'repeat(3, 1fr)' });
    });

    it('supports 1 to 12 columns', () => {
      for (let cols = 1; cols <= 12; cols++) {
        const { container } = render(<Grid columns={cols}>Content</Grid>);
        const grid = container.querySelector('.wp-block-grid');
        expect(grid).toHaveStyle({ gridTemplateColumns: `repeat(${cols}, 1fr)` });
      }
    });
  });

  describe('Auto-Fill Layout', () => {
    it('uses auto-fill when no column count provided', () => {
      const { container } = render(
        <Grid minWidth="250px">Content</Grid>
      );
      const grid = container.querySelector('.wp-block-grid');
      expect(grid).toHaveStyle({ 
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))' 
      });
    });

    it('uses custom minimum width', () => {
      const { container } = render(
        <Grid minWidth="300px">Content</Grid>
      );
      const grid = container.querySelector('.wp-block-grid');
      expect(grid).toHaveStyle({ 
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))' 
      });
    });

    it('defaults to 250px minWidth', () => {
      const { container } = render(<Grid>Content</Grid>);
      const grid = container.querySelector('.wp-block-grid');
      expect(grid).toHaveStyle({ 
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))' 
      });
    });
  });

  describe('Gap Spacing', () => {
    it('applies Tailwind gap class', () => {
      const { container } = render(<Grid gap="gap-6">Content</Grid>);
      const grid = container.querySelector('.wp-block-grid');
      expect(grid?.className).toContain('gap-6');
    });

    it('applies CSS variable gap', () => {
      const { container } = render(
        <Grid rowGap="var(--spacing-md)" columnGap="var(--spacing-md)">
          Content
        </Grid>
      );
      const grid = container.querySelector('.wp-block-grid');
      expect(grid).toHaveStyle({ gap: 'var(--spacing-md) var(--spacing-md)' });
    });

    it('uses gap shorthand over row/column gaps', () => {
      const { container } = render(
        <Grid gap="gap-8" rowGap="1rem" columnGap="2rem">
          Content
        </Grid>
      );
      const grid = container.querySelector('.wp-block-grid');
      expect(grid?.className).toContain('gap-8');
    });
  });

  describe('Sticky Positioning', () => {
    it('applies sticky class when sticky prop is true', () => {
      const { container } = render(<Grid sticky>Content</Grid>);
      const grid = container.querySelector('.wp-block-grid');
      expect(grid?.className).toContain('sticky');
      expect(grid?.className).toContain('top-0');
    });

    it('does not apply sticky class by default', () => {
      const { container } = render(<Grid>Content</Grid>);
      const grid = container.querySelector('.wp-block-grid');
      expect(grid?.className).not.toContain('sticky');
    });
  });

  describe('Accessibility', () => {
    it('applies ARIA label', () => {
      render(<Grid aria-label="Product grid">Content</Grid>);
      expect(screen.getByLabelText('Product grid')).toBeInTheDocument();
    });

    it('has role="grid" for screen readers', () => {
      const { container } = render(<Grid>Content</Grid>);
      const grid = container.querySelector('[role="grid"]');
      expect(grid).toBeInTheDocument();
    });
  });

  describe('Design System Compliance', () => {
    it('has wp-block-grid class', () => {
      const { container } = render(<Grid>Content</Grid>);
      expect(container.querySelector('.wp-block-grid')).toBeInTheDocument();
    });

    it('combines custom classes correctly', () => {
      const { container } = render(
        <Grid className="custom-grid">Content</Grid>
      );
      const grid = container.querySelector('.wp-block-grid');
      expect(grid?.className).toContain('wp-block-grid');
      expect(grid?.className).toContain('custom-grid');
    });

    it('accepts custom inline styles', () => {
      const { container } = render(
        <Grid style={{ padding: '2rem' }}>Content</Grid>
      );
      const grid = container.querySelector('.wp-block-grid');
      expect(grid).toHaveStyle({ padding: '2rem' });
    });
  });

  describe('WordPress Parity', () => {
    it('matches core/grid block structure', () => {
      const { container } = render(
        <Grid columns={3} gap="gap-6">
          <div>Item 1</div>
          <div>Item 2</div>
          <div>Item 3</div>
        </Grid>
      );
      
      const grid = container.querySelector('.wp-block-grid');
      expect(grid).toHaveStyle({ 
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)'
      });
      expect(grid?.className).toContain('gap-6');
    });
  });

  describe('Responsive Behavior', () => {
    it('maintains grid layout with auto-fill', () => {
      const { container } = render(
        <Grid minWidth="200px" gap="gap-4">
          {Array.from({ length: 6 }, (_, i) => (
            <div key={i}>Item {i + 1}</div>
          ))}
        </Grid>
      );
      
      const grid = container.querySelector('.wp-block-grid');
      expect(grid).toHaveStyle({ 
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))' 
      });
    });
  });
});
