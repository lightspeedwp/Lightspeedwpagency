/**
 * Stack Block - Component Tests
 * 
 * Tests for the Stack vertical layout block component.
 * Verifies flexbox layout, alignment, and spacing.
 */

import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Stack } from '../Stack';

describe('Stack Block', () => {
  describe('Rendering', () => {
    it('renders children correctly', () => {
      render(
        <Stack>
          <div>Item 1</div>
          <div>Item 2</div>
        </Stack>
      );
      expect(screen.getByText('Item 1')).toBeInTheDocument();
      expect(screen.getByText('Item 2')).toBeInTheDocument();
    });

    it('renders as flexbox column', () => {
      const { container } = render(<Stack>Content</Stack>);
      const stack = container.querySelector('.wp-block-stack');
      expect(stack?.className).toContain('flex');
      expect(stack?.className).toContain('flex-col');
    });
  });

  describe('Gap Spacing', () => {
    it('applies default gap', () => {
      const { container } = render(<Stack>Content</Stack>);
      const stack = container.querySelector('.wp-block-stack');
      expect(stack?.className).toContain('gap-4');
    });

    it('applies custom Tailwind gap', () => {
      const { container } = render(<Stack gap="gap-8">Content</Stack>);
      const stack = container.querySelector('.wp-block-stack');
      expect(stack?.className).toContain('gap-8');
    });

    it('accepts CSS variable gap', () => {
      const { container } = render(
        <Stack gap="var(--spacing-md)">Content</Stack>
      );
      const stack = container.querySelector('.wp-block-stack');
      expect(stack?.className).toContain('var(--spacing-md)');
    });
  });

  describe('Vertical Justification', () => {
    it('defaults to flex-start', () => {
      const { container } = render(<Stack>Content</Stack>);
      const stack = container.querySelector('.wp-block-stack');
      expect(stack).toHaveStyle({ justifyContent: 'flex-start' });
    });

    it('applies center justification', () => {
      const { container } = render(<Stack justify="center">Content</Stack>);
      const stack = container.querySelector('.wp-block-stack');
      expect(stack).toHaveStyle({ justifyContent: 'center' });
    });

    it('applies space-between justification', () => {
      const { container } = render(
        <Stack justify="space-between">Content</Stack>
      );
      const stack = container.querySelector('.wp-block-stack');
      expect(stack).toHaveStyle({ justifyContent: 'space-between' });
    });

    it('supports all justify values', () => {
      const justifyValues: Array<'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly'> = 
        ['flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly'];
      
      justifyValues.forEach(justify => {
        const { container } = render(<Stack justify={justify}>Content</Stack>);
        const stack = container.querySelector('.wp-block-stack');
        expect(stack).toHaveStyle({ justifyContent: justify });
      });
    });
  });

  describe('Horizontal Alignment', () => {
    it('defaults to stretch', () => {
      const { container } = render(<Stack>Content</Stack>);
      const stack = container.querySelector('.wp-block-stack');
      expect(stack).toHaveStyle({ alignItems: 'stretch' });
    });

    it('applies center alignment', () => {
      const { container } = render(<Stack align="center">Content</Stack>);
      const stack = container.querySelector('.wp-block-stack');
      expect(stack).toHaveStyle({ alignItems: 'center' });
    });

    it('supports all align values', () => {
      const alignValues: Array<'flex-start' | 'center' | 'flex-end' | 'stretch'> = 
        ['flex-start', 'center', 'flex-end', 'stretch'];
      
      alignValues.forEach(align => {
        const { container } = render(<Stack align={align}>Content</Stack>);
        const stack = container.querySelector('.wp-block-stack');
        expect(stack).toHaveStyle({ alignItems: align });
      });
    });
  });

  describe('Width Constraints', () => {
    it('has auto width by default', () => {
      const { container } = render(<Stack>Content</Stack>);
      const stack = container.querySelector('.wp-block-stack');
      expect(stack?.className).not.toContain('max-w-');
    });

    it('applies default width constraint', () => {
      const { container } = render(<Stack width="default">Content</Stack>);
      const stack = container.querySelector('.wp-block-stack');
      expect(stack?.className).toContain('max-w-7xl');
      expect(stack?.className).toContain('mx-auto');
    });

    it('applies wide width constraint', () => {
      const { container } = render(<Stack width="wide">Content</Stack>);
      const stack = container.querySelector('.wp-block-stack');
      expect(stack?.className).toContain('max-w-screen-2xl');
    });

    it('applies full width', () => {
      const { container } = render(<Stack width="full">Content</Stack>);
      const stack = container.querySelector('.wp-block-stack');
      expect(stack?.className).toContain('w-full');
    });
  });

  describe('Sticky Positioning', () => {
    it('applies sticky class when sticky prop is true', () => {
      const { container } = render(<Stack sticky>Content</Stack>);
      const stack = container.querySelector('.wp-block-stack');
      expect(stack?.className).toContain('sticky');
      expect(stack?.className).toContain('top-0');
    });

    it('does not apply sticky class by default', () => {
      const { container } = render(<Stack>Content</Stack>);
      const stack = container.querySelector('.wp-block-stack');
      expect(stack?.className).not.toContain('sticky');
    });
  });

  describe('Accessibility', () => {
    it('applies ARIA label', () => {
      render(<Stack aria-label="Feature list">Content</Stack>);
      expect(screen.getByLabelText('Feature list')).toBeInTheDocument();
    });
  });

  describe('Design System Compliance', () => {
    it('has wp-block-stack class', () => {
      const { container } = render(<Stack>Content</Stack>);
      expect(container.querySelector('.wp-block-stack')).toBeInTheDocument();
    });

    it('combines classes correctly', () => {
      const { container } = render(
        <Stack gap="gap-6" width="default" className="custom-stack">
          Content
        </Stack>
      );
      const stack = container.querySelector('.wp-block-stack');
      expect(stack?.className).toContain('wp-block-stack');
      expect(stack?.className).toContain('flex');
      expect(stack?.className).toContain('flex-col');
      expect(stack?.className).toContain('gap-6');
      expect(stack?.className).toContain('max-w-7xl');
      expect(stack?.className).toContain('custom-stack');
    });

    it('accepts custom inline styles', () => {
      const { container } = render(
        <Stack style={{ padding: '1rem' }}>Content</Stack>
      );
      const stack = container.querySelector('.wp-block-stack');
      expect(stack).toHaveStyle({ padding: '1rem' });
    });
  });

  describe('WordPress Parity', () => {
    it('matches core/stack block structure', () => {
      const { container } = render(
        <Stack gap="gap-8" justify="center" align="center">
          <div>Item 1</div>
          <div>Item 2</div>
        </Stack>
      );
      
      const stack = container.querySelector('.wp-block-stack');
      expect(stack?.className).toContain('flex-col');
      expect(stack?.className).toContain('gap-8');
      expect(stack).toHaveStyle({ 
        justifyContent: 'center',
        alignItems: 'center'
      });
    });
  });
});
