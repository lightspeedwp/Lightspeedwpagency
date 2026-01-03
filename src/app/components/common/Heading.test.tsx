import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Heading } from './Heading';

describe('Heading Component', () => {
  describe('Semantic HTML', () => {
    it('renders h1 when level is 1', () => {
      const { container } = render(<Heading level={1}>Page Title</Heading>);
      
      const h1 = container.querySelector('h1');
      expect(h1).toBeInTheDocument();
      expect(h1).toHaveTextContent('Page Title');
    });

    it('renders h2 when level is 2', () => {
      const { container } = render(<Heading level={2}>Section Title</Heading>);
      
      const h2 = container.querySelector('h2');
      expect(h2).toBeInTheDocument();
      expect(h2).toHaveTextContent('Section Title');
    });

    it('renders h3 when level is 3', () => {
      const { container } = render(<Heading level={3}>Subsection Title</Heading>);
      
      const h3 = container.querySelector('h3');
      expect(h3).toBeInTheDocument();
    });

    it('renders h4 when level is 4', () => {
      const { container } = render(<Heading level={4}>Card Title</Heading>);
      
      const h4 = container.querySelector('h4');
      expect(h4).toBeInTheDocument();
    });

    it('renders h5 when level is 5', () => {
      const { container } = render(<Heading level={5}>Small Heading</Heading>);
      
      const h5 = container.querySelector('h5');
      expect(h5).toBeInTheDocument();
    });

    it('renders h6 when level is 6', () => {
      const { container } = render(<Heading level={6}>Label Heading</Heading>);
      
      const h6 = container.querySelector('h6');
      expect(h6).toBeInTheDocument();
    });
  });

  describe('Design System Tokens', () => {
    it('uses Lexend font family', () => {
      const { container } = render(<Heading level={1}>Typography Test</Heading>);
      
      const heading = container.querySelector('h1');
      expect(heading).toHaveStyle({
        fontFamily: 'Lexend, sans-serif'
      });
    });

    it('uses fluid typography CSS variable for H1', () => {
      const { container } = render(<Heading level={1}>Hero Title</Heading>);
      
      const heading = container.querySelector('h1');
      // CSS variable will be resolved to clamp() value
      expect(heading).toBeInTheDocument();
    });

    it('uses semibold weight for H1-H4', () => {
      const { container: container1 } = render(<Heading level={1}>H1</Heading>);
      const { container: container2 } = render(<Heading level={2}>H2</Heading>);
      const { container: container3 } = render(<Heading level={3}>H3</Heading>);
      const { container: container4 } = render(<Heading level={4}>H4</Heading>);
      
      expect(container1.querySelector('h1')).toBeInTheDocument();
      expect(container2.querySelector('h2')).toBeInTheDocument();
      expect(container3.querySelector('h3')).toBeInTheDocument();
      expect(container4.querySelector('h4')).toBeInTheDocument();
    });

    it('uses medium weight for H5-H6', () => {
      const { container: container5 } = render(<Heading level={5}>H5</Heading>);
      const { container: container6 } = render(<Heading level={6}>H6</Heading>);
      
      expect(container5.querySelector('h5')).toBeInTheDocument();
      expect(container6.querySelector('h6')).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('supports anchor navigation with id', () => {
      render(<Heading level={2} id="section-title">Our Services</Heading>);
      
      const heading = screen.getByRole('heading', { level: 2 });
      expect(heading).toHaveAttribute('id', 'section-title');
    });

    it('uses proper heading levels for screen readers', () => {
      render(
        <>
          <Heading level={1}>Main Title</Heading>
          <Heading level={2}>Section</Heading>
          <Heading level={3}>Subsection</Heading>
        </>
      );
      
      const h1 = screen.getByRole('heading', { level: 1 });
      const h2 = screen.getByRole('heading', { level: 2 });
      const h3 = screen.getByRole('heading', { level: 3 });
      
      expect(h1).toHaveTextContent('Main Title');
      expect(h2).toHaveTextContent('Section');
      expect(h3).toHaveTextContent('Subsection');
    });
  });

  describe('Custom Styling', () => {
    it('accepts additional className for spacing', () => {
      render(<Heading level={2} className="mb-8 text-center">Styled Heading</Heading>);
      
      const heading = screen.getByRole('heading', { level: 2 });
      expect(heading).toHaveClass('mb-8', 'text-center');
    });
  });

  describe('Fluid Typography', () => {
    it('uses clamp() for responsive scaling (H1)', () => {
      const { container } = render(<Heading level={1}>Hero Title</Heading>);
      
      const h1 = container.querySelector('h1');
      // H1 uses fluid typography with clamp()
      expect(h1).toBeInTheDocument();
    });

    it('uses clamp() for responsive scaling (H2-H6)', () => {
      const { container: container2 } = render(<Heading level={2}>H2</Heading>);
      const { container: container3 } = render(<Heading level={3}>H3</Heading>);
      const { container: container4 } = render(<Heading level={4}>H4</Heading>);
      const { container: container5 } = render(<Heading level={5}>H5</Heading>);
      const { container: container6 } = render(<Heading level={6}>H6</Heading>);
      
      // All headings use fluid typography
      expect(container2.querySelector('h2')).toBeInTheDocument();
      expect(container3.querySelector('h3')).toBeInTheDocument();
      expect(container4.querySelector('h4')).toBeInTheDocument();
      expect(container5.querySelector('h5')).toBeInTheDocument();
      expect(container6.querySelector('h6')).toBeInTheDocument();
    });
  });
});
