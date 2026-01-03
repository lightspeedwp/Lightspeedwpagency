/**
 * Group Block - Component Tests
 * 
 * Tests for the Group container block component.
 * Verifies design system compliance, props, and rendering.
 */

import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Group } from '../Group';

describe('Group Block', () => {
  describe('Rendering', () => {
    it('renders children correctly', () => {
      render(
        <Group>
          <p>Test content</p>
        </Group>
      );
      expect(screen.getByText('Test content')).toBeInTheDocument();
    });

    it('renders as div by default', () => {
      const { container } = render(<Group>Content</Group>);
      expect(container.querySelector('div')).toBeInTheDocument();
    });

    it('renders with custom HTML tag', () => {
      const { container } = render(
        <Group as="section">Content</Group>
      );
      expect(container.querySelector('section')).toBeInTheDocument();
    });

    it('supports all semantic HTML tags', () => {
      const tags: Array<'div' | 'section' | 'article' | 'aside' | 'header' | 'footer' | 'nav' | 'main'> = 
        ['div', 'section', 'article', 'aside', 'header', 'footer', 'nav', 'main'];
      
      tags.forEach(tag => {
        const { container } = render(<Group as={tag}>Content</Group>);
        expect(container.querySelector(tag)).toBeInTheDocument();
      });
    });
  });

  describe('Width Alignment', () => {
    it('applies default width class', () => {
      const { container } = render(<Group align="default">Content</Group>);
      const group = container.querySelector('.wp-block-group');
      expect(group?.className).toContain('max-w-7xl');
      expect(group?.className).toContain('mx-auto');
    });

    it('applies wide width class', () => {
      const { container } = render(<Group align="wide">Content</Group>);
      const group = container.querySelector('.wp-block-group');
      expect(group?.className).toContain('max-w-screen-2xl');
    });

    it('applies full width class', () => {
      const { container } = render(<Group align="full">Content</Group>);
      const group = container.querySelector('.wp-block-group');
      expect(group?.className).toContain('w-full');
    });
  });

  describe('Styling Props', () => {
    it('applies CSS variable background color', () => {
      const { container } = render(
        <Group backgroundColor="var(--surface)">Content</Group>
      );
      const group = container.querySelector('.wp-block-group');
      expect(group).toHaveStyle({ backgroundColor: 'var(--surface)' });
    });

    it('applies CSS variable text color', () => {
      const { container } = render(
        <Group color="var(--foreground)">Content</Group>
      );
      const group = container.querySelector('.wp-block-group');
      expect(group).toHaveStyle({ color: 'var(--foreground)' });
    });

    it('applies Tailwind padding classes', () => {
      const { container } = render(
        <Group padding="p-8">Content</Group>
      );
      const group = container.querySelector('.wp-block-group');
      expect(group?.className).toContain('p-8');
    });

    it('applies Tailwind margin classes', () => {
      const { container } = render(
        <Group margin="my-8">Content</Group>
      );
      const group = container.querySelector('.wp-block-group');
      expect(group?.className).toContain('my-8');
    });

    it('applies CSS variable border radius', () => {
      const { container } = render(
        <Group borderRadius="var(--radius-lg)">Content</Group>
      );
      const group = container.querySelector('.wp-block-group');
      expect(group).toHaveStyle({ borderRadius: 'var(--radius-lg)' });
    });
  });

  describe('Accessibility', () => {
    it('applies ARIA label', () => {
      render(<Group aria-label="Feature section">Content</Group>);
      expect(screen.getByLabelText('Feature section')).toBeInTheDocument();
    });

    it('uses semantic section tag for main sections', () => {
      const { container } = render(
        <Group as="section" aria-label="Features">Content</Group>
      );
      const section = container.querySelector('section');
      expect(section).toHaveAttribute('aria-label', 'Features');
    });
  });

  describe('Design System Compliance', () => {
    it('has wp-block-group class', () => {
      const { container } = render(<Group>Content</Group>);
      expect(container.querySelector('.wp-block-group')).toBeInTheDocument();
    });

    it('combines multiple classes correctly', () => {
      const { container } = render(
        <Group 
          padding="p-8" 
          margin="my-12" 
          className="custom-class"
        >
          Content
        </Group>
      );
      const group = container.querySelector('.wp-block-group');
      expect(group?.className).toContain('wp-block-group');
      expect(group?.className).toContain('p-8');
      expect(group?.className).toContain('my-12');
      expect(group?.className).toContain('custom-class');
    });

    it('accepts custom inline styles', () => {
      const { container } = render(
        <Group style={{ opacity: 0.9 }}>Content</Group>
      );
      const group = container.querySelector('.wp-block-group');
      expect(group).toHaveStyle({ opacity: '0.9' });
    });
  });

  describe('WordPress Parity', () => {
    it('matches core/group block structure', () => {
      const { container } = render(
        <Group 
          as="section" 
          align="wide" 
          backgroundColor="var(--surface)"
          padding="p-12"
        >
          <h2>Heading</h2>
          <p>Paragraph</p>
        </Group>
      );
      
      const group = container.querySelector('.wp-block-group');
      expect(group?.tagName).toBe('SECTION');
      expect(group?.className).toContain('wp-block-group');
      expect(group?.className).toContain('max-w-screen-2xl');
      expect(group?.className).toContain('p-12');
    });
  });
});
