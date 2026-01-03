/**
 * Columns Block - Component Tests
 * 
 * Tests for the Columns multi-column layout block component.
 * Verifies column layout, responsive stacking, and design system compliance.
 */

import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Columns, Column } from '../Columns';

describe('Columns Block', () => {
  describe('Rendering', () => {
    it('renders children correctly', () => {
      render(
        <Columns>
          <Column><div>Column 1</div></Column>
          <Column><div>Column 2</div></Column>
        </Columns>
      );
      expect(screen.getByText('Column 1')).toBeInTheDocument();
      expect(screen.getByText('Column 2')).toBeInTheDocument();
    });

    it('renders as grid container', () => {
      const { container } = render(<Columns>Content</Columns>);
      const columns = container.querySelector('.wp-block-columns');
      expect(columns?.className).toContain('grid');
    });
  });

  describe('Column Count', () => {
    it('defaults to 2 columns', () => {
      const { container } = render(<Columns>Content</Columns>);
      const columns = container.querySelector('.wp-block-columns');
      expect(columns?.className).toMatch(/md:grid-cols-2/);
    });

    it('applies custom column count', () => {
      const { container } = render(<Columns columns={3}>Content</Columns>);
      const columns = container.querySelector('.wp-block-columns');
      expect(columns?.className).toMatch(/md:grid-cols-3/);
    });

    it('supports 1 to 6 columns', () => {
      for (let cols = 1; cols <= 6; cols++) {
        const { container } = render(<Columns columns={cols}>Content</Columns>);
        const columns = container.querySelector('.wp-block-columns');
        expect(columns?.className).toMatch(new RegExp(`md:grid-cols-${cols}`));
      }
    });
  });

  describe('Gap Spacing', () => {
    it('applies default gap', () => {
      const { container } = render(<Columns>Content</Columns>);
      const columns = container.querySelector('.wp-block-columns');
      expect(columns?.className).toContain('gap-6');
    });

    it('applies custom Tailwind gap', () => {
      const { container } = render(<Columns gap="gap-8">Content</Columns>);
      const columns = container.querySelector('.wp-block-columns');
      expect(columns?.className).toContain('gap-8');
    });
  });

  describe('Equal Width Columns', () => {
    it('uses equal width by default', () => {
      const { container } = render(<Columns columns={3}>Content</Columns>);
      const columns = container.querySelector('.wp-block-columns');
      expect(columns?.className).toContain('grid');
      expect(columns?.className).toMatch(/md:grid-cols-3/);
    });

    it('uses flexbox for variable width', () => {
      const { container } = render(
        <Columns equalWidth={false}>Content</Columns>
      );
      const columns = container.querySelector('.wp-block-columns');
      expect(columns?.className).toContain('flex');
      expect(columns?.className).toContain('flex-col');
      expect(columns?.className).toContain('md:flex-row');
    });
  });

  describe('Vertical Alignment', () => {
    it('defaults to stretch', () => {
      const { container } = render(<Columns>Content</Columns>);
      const columns = container.querySelector('.wp-block-columns');
      expect(columns?.className).toContain('items-stretch');
    });

    it('applies top alignment', () => {
      const { container } = render(
        <Columns verticalAlign="top">Content</Columns>
      );
      const columns = container.querySelector('.wp-block-columns');
      expect(columns?.className).toContain('items-start');
    });

    it('applies center alignment', () => {
      const { container } = render(
        <Columns verticalAlign="center">Content</Columns>
      );
      const columns = container.querySelector('.wp-block-columns');
      expect(columns?.className).toContain('items-center');
    });

    it('applies bottom alignment', () => {
      const { container } = render(
        <Columns verticalAlign="bottom">Content</Columns>
      );
      const columns = container.querySelector('.wp-block-columns');
      expect(columns?.className).toContain('items-end');
    });
  });

  describe('Responsive Stacking', () => {
    it('stacks on mobile (grid-cols-1)', () => {
      const { container } = render(<Columns columns={3}>Content</Columns>);
      const columns = container.querySelector('.wp-block-columns');
      expect(columns?.className).toContain('grid-cols-1');
    });

    it('expands to columns on md breakpoint', () => {
      const { container } = render(<Columns columns={2}>Content</Columns>);
      const columns = container.querySelector('.wp-block-columns');
      expect(columns?.className).toMatch(/md:grid-cols-2/);
    });
  });

  describe('Accessibility', () => {
    it('applies ARIA label to columns container', () => {
      render(<Columns aria-label="Feature columns">Content</Columns>);
      expect(screen.getByLabelText('Feature columns')).toBeInTheDocument();
    });

    it('maintains logical reading order in columns', () => {
      render(
        <Columns>
          <Column><div>First</div></Column>
          <Column><div>Second</div></Column>
          <Column><div>Third</div></Column>
        </Columns>
      );
      
      const content = screen.getAllByText(/First|Second|Third/);
      expect(content[0]).toHaveTextContent('First');
      expect(content[1]).toHaveTextContent('Second');
      expect(content[2]).toHaveTextContent('Third');
    });
  });

  describe('Design System Compliance', () => {
    it('has wp-block-columns class', () => {
      const { container } = render(<Columns>Content</Columns>);
      expect(container.querySelector('.wp-block-columns')).toBeInTheDocument();
    });

    it('combines classes correctly', () => {
      const { container } = render(
        <Columns columns={3} gap="gap-8" className="custom-columns">
          Content
        </Columns>
      );
      const columns = container.querySelector('.wp-block-columns');
      expect(columns?.className).toContain('wp-block-columns');
      expect(columns?.className).toContain('grid');
      expect(columns?.className).toContain('gap-8');
      expect(columns?.className).toMatch(/md:grid-cols-3/);
      expect(columns?.className).toContain('custom-columns');
    });

    it('accepts custom inline styles', () => {
      const { container } = render(
        <Columns style={{ padding: '2rem' }}>Content</Columns>
      );
      const columns = container.querySelector('.wp-block-columns');
      expect(columns).toHaveStyle({ padding: '2rem' });
    });
  });
});

describe('Column Component', () => {
  describe('Rendering', () => {
    it('renders children correctly', () => {
      render(
        <Column>
          <p>Column content</p>
        </Column>
      );
      expect(screen.getByText('Column content')).toBeInTheDocument();
    });

    it('has wp-block-column class', () => {
      const { container } = render(<Column>Content</Column>);
      expect(container.querySelector('.wp-block-column')).toBeInTheDocument();
    });
  });

  describe('Variable Width', () => {
    it('applies custom width', () => {
      const { container } = render(<Column width="40%">Content</Column>);
      const column = container.querySelector('.wp-block-column');
      expect(column).toHaveStyle({ width: '40%' });
    });

    it('works without width (auto)', () => {
      const { container } = render(<Column>Content</Column>);
      const column = container.querySelector('.wp-block-column');
      expect(column).not.toHaveStyle({ width: expect.anything() });
    });
  });

  describe('Design System Compliance', () => {
    it('combines classes correctly', () => {
      const { container } = render(
        <Column className="custom-column">Content</Column>
      );
      const column = container.querySelector('.wp-block-column');
      expect(column?.className).toContain('wp-block-column');
      expect(column?.className).toContain('custom-column');
    });

    it('accepts custom inline styles', () => {
      const { container } = render(
        <Column style={{ padding: '1rem' }}>Content</Column>
      );
      const column = container.querySelector('.wp-block-column');
      expect(column).toHaveStyle({ padding: '1rem' });
    });
  });
});

describe('Columns with Column Integration', () => {
  it('renders complete column layout', () => {
    const { container } = render(
      <Columns columns={3} gap="gap-6">
        <Column>
          <h3>Column 1</h3>
          <p>Content 1</p>
        </Column>
        <Column>
          <h3>Column 2</h3>
          <p>Content 2</p>
        </Column>
        <Column>
          <h3>Column 3</h3>
          <p>Content 3</p>
        </Column>
      </Columns>
    );
    
    expect(screen.getByText('Column 1')).toBeInTheDocument();
    expect(screen.getByText('Column 2')).toBeInTheDocument();
    expect(screen.getByText('Column 3')).toBeInTheDocument();
    
    const columns = container.querySelectorAll('.wp-block-column');
    expect(columns.length).toBe(3);
  });

  it('supports variable width columns', () => {
    const { container } = render(
      <Columns equalWidth={false}>
        <Column width="60%">Wide column</Column>
        <Column width="40%">Narrow column</Column>
      </Columns>
    );
    
    const columns = container.querySelectorAll('.wp-block-column');
    expect(columns[0]).toHaveStyle({ width: '60%' });
    expect(columns[1]).toHaveStyle({ width: '40%' });
  });
});
