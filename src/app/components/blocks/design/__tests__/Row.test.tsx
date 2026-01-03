/**
 * Row Block - Component Tests
 * 
 * Tests for the Row horizontal layout block component.
 * Verifies flexbox layout, alignment, and wrapping behavior.
 */

import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Row } from '../Row';

describe('Row Block', () => {
  describe('Rendering', () => {
    it('renders children correctly', () => {
      render(
        <Row>
          <button>Button 1</button>
          <button>Button 2</button>
        </Row>
      );
      expect(screen.getByText('Button 1')).toBeInTheDocument();
      expect(screen.getByText('Button 2')).toBeInTheDocument();
    });

    it('renders as flexbox row', () => {
      const { container } = render(<Row>Content</Row>);
      const row = container.querySelector('.wp-block-row');
      expect(row?.className).toContain('flex');
      expect(row?.className).toContain('flex-nowrap');
    });
  });

  describe('Gap Spacing', () => {
    it('applies default gap', () => {
      const { container } = render(<Row>Content</Row>);
      const row = container.querySelector('.wp-block-row');
      expect(row?.className).toContain('gap-4');
    });

    it('applies custom Tailwind gap', () => {
      const { container } = render(<Row gap="gap-6">Content</Row>);
      const row = container.querySelector('.wp-block-row');
      expect(row?.className).toContain('gap-6');
    });

    it('accepts CSS variable gap', () => {
      const { container } = render(
        <Row gap="var(--spacing-sm)">Content</Row>
      );
      const row = container.querySelector('.wp-block-row');
      expect(row?.className).toContain('var(--spacing-sm)');
    });
  });

  describe('Horizontal Justification', () => {
    it('defaults to flex-start', () => {
      const { container } = render(<Row>Content</Row>);
      const row = container.querySelector('.wp-block-row');
      expect(row).toHaveStyle({ justifyContent: 'flex-start' });
    });

    it('applies center justification', () => {
      const { container } = render(<Row justify="center">Content</Row>);
      const row = container.querySelector('.wp-block-row');
      expect(row).toHaveStyle({ justifyContent: 'center' });
    });

    it('applies space-between justification', () => {
      const { container } = render(
        <Row justify="space-between">Content</Row>
      );
      const row = container.querySelector('.wp-block-row');
      expect(row).toHaveStyle({ justifyContent: 'space-between' });
    });

    it('supports all justify values', () => {
      const justifyValues: Array<'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly'> = 
        ['flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly'];
      
      justifyValues.forEach(justify => {
        const { container } = render(<Row justify={justify}>Content</Row>);
        const row = container.querySelector('.wp-block-row');
        expect(row).toHaveStyle({ justifyContent: justify });
      });
    });
  });

  describe('Vertical Alignment', () => {
    it('defaults to center', () => {
      const { container } = render(<Row>Content</Row>);
      const row = container.querySelector('.wp-block-row');
      expect(row).toHaveStyle({ alignItems: 'center' });
    });

    it('applies flex-start alignment', () => {
      const { container } = render(<Row align="flex-start">Content</Row>);
      const row = container.querySelector('.wp-block-row');
      expect(row).toHaveStyle({ alignItems: 'flex-start' });
    });

    it('applies flex-end alignment', () => {
      const { container } = render(<Row align="flex-end">Content</Row>);
      const row = container.querySelector('.wp-block-row');
      expect(row).toHaveStyle({ alignItems: 'flex-end' });
    });

    it('supports all align values', () => {
      const alignValues: Array<'flex-start' | 'center' | 'flex-end' | 'stretch'> = 
        ['flex-start', 'center', 'flex-end', 'stretch'];
      
      alignValues.forEach(align => {
        const { container } = render(<Row align={align}>Content</Row>);
        const row = container.querySelector('.wp-block-row');
        expect(row).toHaveStyle({ alignItems: align });
      });
    });
  });

  describe('Wrapping Behavior', () => {
    it('does not wrap by default', () => {
      const { container } = render(<Row>Content</Row>);
      const row = container.querySelector('.wp-block-row');
      expect(row?.className).toContain('flex-nowrap');
    });

    it('applies flex-wrap when wrap is true', () => {
      const { container } = render(<Row wrap>Content</Row>);
      const row = container.querySelector('.wp-block-row');
      expect(row?.className).toContain('flex-wrap');
    });

    it('applies flex-nowrap when wrap is false', () => {
      const { container } = render(<Row wrap={false}>Content</Row>);
      const row = container.querySelector('.wp-block-row');
      expect(row?.className).toContain('flex-nowrap');
    });
  });

  describe('Accessibility', () => {
    it('applies ARIA label', () => {
      render(<Row aria-label="Button group">Content</Row>);
      expect(screen.getByLabelText('Button group')).toBeInTheDocument();
    });

    it('preserves logical focus order', () => {
      render(
        <Row>
          <button>First</button>
          <button>Second</button>
          <button>Third</button>
        </Row>
      );
      
      const buttons = screen.getAllByRole('button');
      expect(buttons[0]).toHaveTextContent('First');
      expect(buttons[1]).toHaveTextContent('Second');
      expect(buttons[2]).toHaveTextContent('Third');
    });
  });

  describe('Design System Compliance', () => {
    it('has wp-block-row class', () => {
      const { container } = render(<Row>Content</Row>);
      expect(container.querySelector('.wp-block-row')).toBeInTheDocument();
    });

    it('combines classes correctly', () => {
      const { container } = render(
        <Row gap="gap-8" wrap className="custom-row">
          Content
        </Row>
      );
      const row = container.querySelector('.wp-block-row');
      expect(row?.className).toContain('wp-block-row');
      expect(row?.className).toContain('flex');
      expect(row?.className).toContain('flex-wrap');
      expect(row?.className).toContain('gap-8');
      expect(row?.className).toContain('custom-row');
    });

    it('accepts custom inline styles', () => {
      const { container } = render(
        <Row style={{ padding: '1rem' }}>Content</Row>
      );
      const row = container.querySelector('.wp-block-row');
      expect(row).toHaveStyle({ padding: '1rem' });
    });
  });

  describe('WordPress Parity', () => {
    it('matches core/row block structure', () => {
      const { container } = render(
        <Row gap="gap-4" justify="center" align="center">
          <button>Button 1</button>
          <button>Button 2</button>
        </Row>
      );
      
      const row = container.querySelector('.wp-block-row');
      expect(row?.className).toContain('flex');
      expect(row?.className).toContain('gap-4');
      expect(row).toHaveStyle({ 
        justifyContent: 'center',
        alignItems: 'center'
      });
    });
  });

  describe('Responsive Behavior', () => {
    it('maintains horizontal layout on all screens', () => {
      const { container } = render(
        <Row gap="gap-4">
          <div>Item 1</div>
          <div>Item 2</div>
          <div>Item 3</div>
        </Row>
      );
      
      const row = container.querySelector('.wp-block-row');
      expect(row?.className).toContain('flex');
      expect(row?.className).not.toContain('flex-col');
    });

    it('supports wrapping for responsive layouts', () => {
      const { container } = render(
        <Row wrap gap="gap-4">
          {Array.from({ length: 10 }, (_, i) => (
            <button key={i}>Button {i + 1}</button>
          ))}
        </Row>
      );
      
      const row = container.querySelector('.wp-block-row');
      expect(row?.className).toContain('flex-wrap');
    });
  });
});
