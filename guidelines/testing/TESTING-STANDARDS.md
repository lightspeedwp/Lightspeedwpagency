# Testing Standards & Test Coverage Requirements

**Category:** Testing & Quality Assurance  
**Status:** ✅ **CANONICAL REFERENCE**  
**Last Updated:** December 27, 2024

---

## 📋 Overview

This document defines **mandatory** testing standards for the LSX Design System. All components, utilities, hooks, and functions **MUST** meet these testing requirements.

**Goals:**
- 100% test coverage for critical components
- Prevent regressions and bugs
- Ensure accessibility compliance
- Validate design token usage
- Document expected behavior
- Support continuous integration

---

## 🎯 Coverage Requirements

### Minimum Coverage Targets

| Component Type | Coverage Target | Current | Status |
|---------------|-----------------|---------|--------|
| **Pattern Components** | 95% | 0% | 🔴 |
| **Common Components** | 90% | 0% | 🔴 |
| **Utility Functions** | 85% | 0% | 🔴 |
| **Custom Hooks** | 90% | 0% | 🔴 |
| **Data Files** | 80% | 0% | 🔴 |
| **Overall Project** | 90% | 0% | 🔴 |

**Critical Components:** Button, Section, Container, Navigation → **100% required**

---

## 🧪 Testing Framework

### Technology Stack

```json
{
  "testing-library/react": "^14.0.0",
  "testing-library/jest-dom": "^6.1.0",
  "testing-library/user-event": "^14.5.0",
  "vitest": "^1.0.0",
  "@vitest/ui": "^1.0.0"
}
```

**Why Vitest:**
- Fast execution (20-50x faster than Jest)
- Native ESM support
- Compatible with Testing Library
- Built-in coverage reporting
- Watch mode with UI

---

## 📝 Test File Structure

### File Naming Convention

```
Component.tsx          → Component logic
Component.test.tsx     → Unit tests
Component.a11y.test.tsx → Accessibility tests (optional)
```

### Test File Location

```
src/app/components/
├── common/
│   ├── Button.tsx
│   └── Button.test.tsx
├── patterns/
│   ├── TestimonialGrid.tsx
│   └── TestimonialGrid.test.tsx
└── templates/
    ├── FrontPageTemplate.tsx
    └── FrontPageTemplate.test.tsx
```

---

## ✅ Required Test Categories

Every component MUST have tests for:

1. **Rendering Tests** - Component renders without errors
2. **Props Tests** - All props work correctly
3. **User Interaction Tests** - Click, keyboard, focus
4. **Accessibility Tests** - ARIA, roles, keyboard nav
5. **Design Token Tests** - CSS variables usage
6. **Edge Case Tests** - Empty states, long text, errors

---

## 🎨 Component Test Template

### Basic Component Test

```tsx
/**
 * Button Component Tests
 * 
 * Test coverage for the Button component including:
 * - Rendering with different variants
 * - Navigation integration
 * - Accessibility (keyboard, focus, ARIA)
 * - Design token compliance
 * - User interactions
 */

import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from './Button';
import { NavigationProvider } from '../../contexts/NavigationContext';

describe('Button', () => {
  // Helper to render with navigation context
  const renderButton = (props = {}) => {
    return render(
      <NavigationProvider>
        <Button {...props}>Click Me</Button>
      </NavigationProvider>
    );
  };

  describe('Rendering', () => {
    it('renders without errors', () => {
      renderButton();
      expect(screen.getByText('Click Me')).toBeInTheDocument();
    });

    it('renders as button element by default', () => {
      renderButton();
      expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('renders as anchor when href provided', () => {
      renderButton({ href: 'https://example.com' });
      expect(screen.getByRole('link')).toBeInTheDocument();
    });
  });

  describe('Variants', () => {
    it('applies primary variant styles', () => {
      renderButton({ variant: 'primary' });
      const button = screen.getByRole('button');
      
      expect(button).toHaveStyle({
        backgroundColor: 'var(--primary)',
        color: 'var(--primary-foreground)'
      });
    });

    it('applies outline variant styles', () => {
      renderButton({ variant: 'outline' });
      const button = screen.getByRole('button');
      
      expect(button).toHaveStyle({
        backgroundColor: 'transparent',
        border: '1px solid var(--border)'
      });
    });

    it('applies destructive variant styles', () => {
      renderButton({ variant: 'destructive' });
      const button = screen.getByRole('button');
      
      expect(button).toHaveStyle({
        backgroundColor: 'var(--destructive)',
        color: 'var(--destructive-foreground)'
      });
    });
  });

  describe('Navigation', () => {
    it('calls navigateTo when page prop provided', async () => {
      const user = userEvent.setup();
      renderButton({ page: 'contact' });
      
      const button = screen.getByRole('button');
      await user.click(button);
      
      // Navigation context would be mocked in real test
      // expect(mockNavigateTo).toHaveBeenCalledWith('contact');
    });

    it('navigates to external URL when href provided', () => {
      renderButton({ href: 'https://wordpress.org' });
      const link = screen.getByRole('link');
      
      expect(link).toHaveAttribute('href', 'https://wordpress.org');
    });
  });

  describe('User Interactions', () => {
    it('handles onClick events', async () => {
      const handleClick = vi.fn();
      const user = userEvent.setup();
      
      renderButton({ onClick: handleClick });
      await user.click(screen.getByRole('button'));
      
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('does not trigger onClick when disabled', async () => {
      const handleClick = vi.fn();
      const user = userEvent.setup();
      
      renderButton({ onClick: handleClick, disabled: true });
      await user.click(screen.getByRole('button'));
      
      expect(handleClick).not.toHaveBeenCalled();
    });
  });

  describe('Accessibility', () => {
    it('is keyboard accessible with Enter key', async () => {
      const handleClick = vi.fn();
      const user = userEvent.setup();
      
      renderButton({ onClick: handleClick });
      const button = screen.getByRole('button');
      
      button.focus();
      await user.keyboard('{Enter}');
      
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('is keyboard accessible with Space key', async () => {
      const handleClick = vi.fn();
      const user = userEvent.setup();
      
      renderButton({ onClick: handleClick });
      const button = screen.getByRole('button');
      
      button.focus();
      await user.keyboard(' ');
      
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('has proper ARIA attributes when disabled', () => {
      renderButton({ disabled: true });
      const button = screen.getByRole('button');
      
      expect(button).toHaveAttribute('aria-disabled', 'true');
    });

    it('supports custom aria-label', () => {
      renderButton({ 'aria-label': 'Submit form' });
      
      expect(screen.getByLabelText('Submit form')).toBeInTheDocument();
    });
  });

  describe('Design Token Compliance', () => {
    it('uses CSS variables for colors', () => {
      renderButton({ variant: 'primary' });
      const button = screen.getByRole('button');
      
      const styles = window.getComputedStyle(button);
      expect(styles.backgroundColor).toContain('var(--primary)');
    });

    it('uses Lexend font family', () => {
      renderButton();
      const button = screen.getByRole('button');
      
      expect(button).toHaveStyle({
        fontFamily: 'Lexend, sans-serif'
      });
    });

    it('uses design token for border radius', () => {
      renderButton();
      const button = screen.getByRole('button');
      
      expect(button).toHaveStyle({
        borderRadius: 'var(--radius)'
      });
    });
  });

  describe('Edge Cases', () => {
    it('handles very long text content', () => {
      const longText = 'A'.repeat(200);
      render(<Button>{longText}</Button>);
      
      expect(screen.getByText(longText)).toBeInTheDocument();
    });

    it('handles empty children gracefully', () => {
      render(<Button>{''}</Button>);
      expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('prevents multiple rapid clicks', async () => {
      const handleClick = vi.fn();
      const user = userEvent.setup();
      
      renderButton({ onClick: handleClick });
      const button = screen.getByRole('button');
      
      // Rapid clicks
      await user.click(button);
      await user.click(button);
      await user.click(button);
      
      // Should handle all clicks
      expect(handleClick).toHaveBeenCalledTimes(3);
    });
  });
});
```

---

## 🎯 Pattern Component Test Template

### TestimonialGrid Test Example

```tsx
/**
 * TestimonialGrid Pattern Tests
 * 
 * Test coverage for TestimonialGrid pattern including:
 * - Grid layout rendering
 * - Testimonial card display
 * - Rating stars rendering
 * - Avatar display logic
 * - Responsive columns
 * - Hover interactions
 */

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TestimonialGrid } from './TestimonialGrid';

describe('TestimonialGrid', () => {
  const mockTestimonials = [
    {
      id: '1',
      quote: 'Excellent service and support!',
      author: 'John Doe',
      role: 'CEO',
      company: 'TechCorp',
      rating: 5
    },
    {
      id: '2',
      quote: 'Highly recommend LSX Design.',
      author: 'Jane Smith',
      role: 'CTO',
      company: 'StartupHub',
      rating: 5
    }
  ];

  describe('Rendering', () => {
    it('renders heading and description', () => {
      render(
        <TestimonialGrid 
          heading="Client Testimonials"
          description="What our clients say"
          testimonials={mockTestimonials}
        />
      );
      
      expect(screen.getByText('Client Testimonials')).toBeInTheDocument();
      expect(screen.getByText('What our clients say')).toBeInTheDocument();
    });

    it('renders all testimonials', () => {
      render(<TestimonialGrid testimonials={mockTestimonials} />);
      
      expect(screen.getByText('Excellent service and support!')).toBeInTheDocument();
      expect(screen.getByText('Highly recommend LSX Design.')).toBeInTheDocument();
    });

    it('renders author information', () => {
      render(<TestimonialGrid testimonials={mockTestimonials} />);
      
      expect(screen.getByText('John Doe')).toBeInTheDocument();
      expect(screen.getByText('CEO at TechCorp')).toBeInTheDocument();
    });
  });

  describe('Ratings', () => {
    it('displays 5-star ratings when showRatings is true', () => {
      render(
        <TestimonialGrid 
          testimonials={mockTestimonials}
          showRatings={true}
        />
      );
      
      const stars = screen.getAllByTestId('star-icon');
      expect(stars).toHaveLength(10); // 5 stars × 2 testimonials
    });

    it('hides ratings when showRatings is false', () => {
      render(
        <TestimonialGrid 
          testimonials={mockTestimonials}
          showRatings={false}
        />
      );
      
      expect(screen.queryByTestId('star-icon')).not.toBeInTheDocument();
    });
  });

  describe('Avatars', () => {
    it('displays avatar images when provided', () => {
      const testimonialsWithAvatars = [
        {
          ...mockTestimonials[0],
          avatar: 'https://example.com/avatar.jpg'
        }
      ];
      
      render(
        <TestimonialGrid 
          testimonials={testimonialsWithAvatars}
          showAvatars={true}
        />
      );
      
      const avatar = screen.getByAltText('John Doe');
      expect(avatar).toHaveAttribute('src', 'https://example.com/avatar.jpg');
    });

    it('displays initials fallback when no avatar', () => {
      render(
        <TestimonialGrid 
          testimonials={mockTestimonials}
          showAvatars={true}
        />
      );
      
      expect(screen.getByText('J')).toBeInTheDocument(); // John Doe initial
    });

    it('hides avatars when showAvatars is false', () => {
      render(
        <TestimonialGrid 
          testimonials={mockTestimonials}
          showAvatars={false}
        />
      );
      
      expect(screen.queryByAltText('John Doe')).not.toBeInTheDocument();
    });
  });

  describe('Grid Layout', () => {
    it('applies correct grid columns', () => {
      const { container } = render(
        <TestimonialGrid 
          testimonials={mockTestimonials}
          columns={{ mobile: 1, tablet: 2, desktop: 3 }}
        />
      );
      
      const grid = container.querySelector('.grid');
      expect(grid).toHaveClass('grid-cols-1');
      expect(grid).toHaveClass('md:grid-cols-2');
      expect(grid).toHaveClass('lg:grid-cols-3');
    });
  });

  describe('Design Token Compliance', () => {
    it('uses CSS variables for card background', () => {
      const { container } = render(
        <TestimonialGrid testimonials={mockTestimonials} />
      );
      
      const card = container.querySelector('[style*="backgroundColor"]');
      expect(card).toHaveStyle({
        backgroundColor: 'var(--card)'
      });
    });

    it('uses Lexend font for author names', () => {
      render(<TestimonialGrid testimonials={mockTestimonials} />);
      const authorName = screen.getByText('John Doe');
      
      expect(authorName).toHaveStyle({
        fontFamily: 'Lexend, sans-serif'
      });
    });
  });

  describe('Edge Cases', () => {
    it('handles empty testimonials array', () => {
      render(<TestimonialGrid testimonials={[]} />);
      expect(screen.queryByRole('article')).not.toBeInTheDocument();
    });

    it('handles very long quotes', () => {
      const longQuote = {
        ...mockTestimonials[0],
        quote: 'A'.repeat(500)
      };
      
      render(<TestimonialGrid testimonials={[longQuote]} />);
      expect(screen.getByText('A'.repeat(500))).toBeInTheDocument();
    });

    it('handles missing optional fields', () => {
      const minimalTestimonial = [{
        id: '1',
        quote: 'Great!',
        author: 'Test',
        role: 'User',
        company: 'Co'
      }];
      
      render(<TestimonialGrid testimonials={minimalTestimonial} />);
      expect(screen.getByText('Great!')).toBeInTheDocument();
    });
  });
});
```

---

## ♿ Accessibility Test Template

### Accessibility-Specific Tests

```tsx
import { axe, toHaveNoViolations } from 'jest-axe';
expect.extend(toHaveNoViolations);

describe('Accessibility', () => {
  it('has no accessibility violations', async () => {
    const { container } = render(<Component />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('supports keyboard navigation', async () => {
    const user = userEvent.setup();
    render(<Component />);
    
    // Tab to component
    await user.tab();
    expect(screen.getByRole('button')).toHaveFocus();
    
    // Activate with Enter
    await user.keyboard('{Enter}');
    // Assert expected behavior
  });

  it('announces changes to screen readers', () => {
    render(<Component />);
    const liveRegion = screen.getByRole('status');
    expect(liveRegion).toHaveAttribute('aria-live', 'polite');
  });

  it('has sufficient color contrast', () => {
    const { container } = render(<Component />);
    const element = container.firstChild;
    
    // Check computed styles
    const styles = window.getComputedStyle(element);
    // Assert contrast ratio >= 4.5:1
  });
});
```

---

## 🔧 Utility Function Test Template

```tsx
/**
 * getPageBySlug Utility Tests
 */

import { describe, it, expect } from 'vitest';
import { getPageBySlug } from './pages';

describe('getPageBySlug', () => {
  it('returns page when slug exists', () => {
    const page = getPageBySlug('contact');
    
    expect(page).toBeDefined();
    expect(page?.slug).toBe('contact');
    expect(page?.title).toBe('Contact');
  });

  it('returns undefined when slug does not exist', () => {
    const page = getPageBySlug('non-existent-slug');
    expect(page).toBeUndefined();
  });

  it('handles empty string slug', () => {
    const page = getPageBySlug('');
    expect(page).toBeUndefined();
  });

  it('is case-sensitive', () => {
    const page = getPageBySlug('CONTACT');
    expect(page).toBeUndefined(); // Should not match 'contact'
  });
});
```

---

## 🪝 Custom Hook Test Template

```tsx
/**
 * useNavigation Hook Tests
 */

import { describe, it, expect } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useNavigation } from './NavigationContext';

describe('useNavigation', () => {
  it('initializes with front-page', () => {
    const { result } = renderHook(() => useNavigation());
    expect(result.current.currentPage).toBe('front-page');
  });

  it('navigates to new page', () => {
    const { result } = renderHook(() => useNavigation());
    
    act(() => {
      result.current.navigateTo('contact');
    });
    
    expect(result.current.currentPage).toBe('contact');
  });

  it('throws error for invalid page', () => {
    const { result } = renderHook(() => useNavigation());
    
    expect(() => {
      act(() => {
        result.current.navigateTo('invalid-page');
      });
    }).toThrow();
  });
});
```

---

## 📊 Coverage Reporting

### Run Tests with Coverage

```bash
# Run all tests with coverage
npm run test:coverage

# Run specific test file
npm run test Button.test.tsx

# Run tests in watch mode
npm run test:watch

# Run tests with UI
npm run test:ui
```

### Coverage Output

```
File                 | % Stmts | % Branch | % Funcs | % Lines |
---------------------|---------|----------|---------|---------|
All files            |   90.5  |   85.3   |   92.1  |   91.2  |
 components/         |   95.2  |   88.7   |   96.3  |   94.8  |
  Button.tsx         |  100.0  |  100.0   |  100.0  |  100.0  |
  Section.tsx        |   98.5  |   95.2   |  100.0  |   98.1  |
 patterns/           |   88.3  |   82.1   |   89.4  |   87.9  |
  TestimonialGrid    |   92.1  |   85.3   |   91.2  |   91.8  |
```

---

## ✅ Pre-Commit Testing Checklist

Before committing code:

- [ ] All new components have test files
- [ ] Test coverage >= 90% for new code
- [ ] All tests pass locally
- [ ] No accessibility violations
- [ ] Design token compliance verified
- [ ] Edge cases tested
- [ ] TypeScript errors resolved
- [ ] ESLint warnings fixed

---

## 🚀 Continuous Integration

### GitHub Actions Workflow

```yaml
name: Test

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm ci
      - run: npm run test:coverage
      - run: npm run test:a11y
      
      - name: Upload coverage
        uses: codecov/codecov-action@v3
```

---

## 📚 Testing Best Practices

### DO:
✅ Test user behavior, not implementation  
✅ Use semantic queries (getByRole, getByLabelText)  
✅ Test accessibility (keyboard, screen reader)  
✅ Mock external dependencies  
✅ Keep tests simple and focused  
✅ Use descriptive test names  
✅ Test edge cases and errors  

### DON'T:
❌ Test implementation details  
❌ Use getByClassName or getByTestId (unless necessary)  
❌ Make tests dependent on each other  
❌ Skip accessibility tests  
❌ Ignore warnings in test output  
❌ Write redundant tests  
❌ Test third-party libraries  

---

## 🎯 Testing Priorities

### High Priority (Test First):
1. Button component
2. Navigation system
3. Form components
4. Pattern components (FAQ, CTA, Testimonials)
5. Data utilities (getPageBySlug, etc.)

### Medium Priority:
1. Template components
2. Layout components (Section, Container)
3. Custom hooks
4. Context providers

### Low Priority:
1. Purely presentational components
2. Simple wrapper components
3. Static content components

---

## 📖 References

**Official Documentation:**
- [Testing Library Docs](https://testing-library.com/docs/)
- [Vitest Documentation](https://vitest.dev/)
- [jest-axe (Accessibility)](https://github.com/nickcolley/jest-axe)

**LSX Design Related:**
- [JSDoc Standards](/guidelines/code-documentation/JSDOC-STANDARDS.md)
- [Accessibility Guide](/guidelines/ACCESSIBILITY-COMPLETE-GUIDE.md)
- [Component Architecture](/guidelines/overview-components.md)

---

**Created:** December 27, 2024  
**Status:** ✅ Canonical Reference  
**Target Coverage:** 90%  
**Current Coverage:** 0% (Initial baseline)
