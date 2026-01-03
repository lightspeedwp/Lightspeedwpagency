# LSX Design System — Testing Guide

**Complete guide to testing the LSX Design prototype with automated tests, accessibility validation, and performance benchmarks.**

**Last Updated:** December 26, 2024  
**Status:** Test infrastructure ready, initial tests written

---

## 📚 Table of Contents

1. [Overview](#overview)
2. [Test Infrastructure](#test-infrastructure)
3. [Running Tests](#running-tests)
4. [Writing Tests](#writing-tests)
5. [Test Categories](#test-categories)
6. [Accessibility Testing](#accessibility-testing)
7. [Coverage Requirements](#coverage-requirements)
8. [CI/CD Integration](#cicd-integration)
9. [Best Practices](#best-practices)

---

## Overview

The LSX Design system uses **Vitest** and **React Testing Library** for comprehensive testing. All tests follow WordPress block patterns and accessibility standards (WCAG 2.1 AA).

### Testing Stack

| Tool | Purpose | Documentation |
|------|---------|---------------|
| **Vitest** | Test runner (faster than Jest) | [vitest.dev](https://vitest.dev) |
| **React Testing Library** | Component testing | [testing-library.com/react](https://testing-library.com/react) |
| **jest-axe** | Accessibility testing | [github.com/nickcolley/jest-axe](https://github.com/nickcolley/jest-axe) |
| **@testing-library/user-event** | User interaction simulation | [testing-library.com/user-event](https://testing-library.com/docs/user-event/intro) |
| **@testing-library/jest-dom** | Custom matchers | [testing-library.com/jest-dom](https://testing-library.com/docs/ecosystem-jest-dom) |

---

## Test Infrastructure

### File Structure

```
lsx-design/
├── __tests__/
│   ├── setup.ts                    # Global test configuration
│   ├── components/
│   │   ├── Button.test.tsx         # Button component tests ✅
│   │   ├── Heading.test.tsx        # Heading component tests (TODO)
│   │   ├── Container.test.tsx      # Container component tests (TODO)
│   │   ├── Section.test.tsx        # Section component tests (TODO)
│   │   └── Logo.test.tsx           # Logo component tests (TODO)
│   ├── data/
│   │   ├── site-pages.test.ts      # Site pages data tests ✅
│   │   ├── portfolio.test.ts       # Portfolio data tests (TODO)
│   │   ├── blog-posts.test.ts      # Blog posts data tests (TODO)
│   │   └── faqs.test.ts            # FAQs data tests (TODO)
│   ├── contexts/
│   │   └── NavigationContext.test.tsx  # Navigation context tests (TODO)
│   └── integration/
│       └── page-rendering.test.tsx # Full page tests (TODO)
├── vitest.config.ts                # Vitest configuration ✅
└── test-results/                   # Generated test reports
```

---

## Running Tests

### Basic Commands

```bash
# Run all tests once
npm test

# Run tests in watch mode (recommended during development)
npm run test:watch

# Run tests with coverage report
npm run test:coverage

# Run tests with Vitest UI (interactive)
npm run test:ui

# Run specific test file
npm test Button.test.tsx

# Run tests matching pattern
npm test -- --grep="Button"
```

### Package.json Scripts

Add these to your `package.json`:

```json
{
  "scripts": {
    "test": "vitest run",
    "test:watch": "vitest",
    "test:coverage": "vitest run --coverage",
    "test:ui": "vitest --ui",
    "test:ci": "vitest run --coverage --reporter=verbose --reporter=junit"
  }
}
```

---

## Writing Tests

### Test File Template

```typescript
/**
 * ComponentName Tests
 * 
 * Tests for [ComponentName] covering:
 * - Rendering with different props/variants
 * - User interaction
 * - Accessibility (WCAG 2.1 AA)
 * - Design system integration
 * 
 * @see /src/app/components/path/to/ComponentName.tsx
 */

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe, toHaveNoViolations } from 'jest-axe';
import { ComponentName } from '../path/to/ComponentName';

// Extend matchers
expect.extend(toHaveNoViolations);

describe('ComponentName', () => {
  describe('Rendering', () => {
    it('renders with default props', () => {
      render(<ComponentName>Content</ComponentName>);
      expect(screen.getByText('Content')).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('has no accessibility violations', async () => {
      const { container } = render(<ComponentName>Accessible</ComponentName>);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });
});
```

---

## Test Categories

### 1. Component Tests

Test individual React components for:
- ✅ **Rendering:** Correct output with various props
- ✅ **Interaction:** User events (click, keyboard, focus)
- ✅ **Accessibility:** WCAG 2.1 AA compliance
- ✅ **Design Tokens:** CSS variable usage
- ✅ **States:** Loading, disabled, error states

**Example:**

```typescript
describe('Button Component', () => {
  it('renders primary variant', () => {
    render(<Button variant="primary">Click me</Button>);
    expect(screen.getByRole('button')).toHaveTextContent('Click me');
  });

  it('calls onClick when clicked', async () => {
    const handleClick = vi.fn();
    const user = userEvent.setup();
    
    render(<Button onClick={handleClick}>Click</Button>);
    await user.click(screen.getByRole('button'));
    
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
```

---

### 2. Data Tests

Test centralized data files for:
- ✅ **Structure:** Required fields present
- ✅ **Integrity:** No duplicates, valid references
- ✅ **Helper Functions:** Correct output
- ✅ **Type Safety:** TypeScript compliance
- ✅ **Performance:** Fast lookups

**Example:**

```typescript
describe('Site Pages Data', () => {
  it('all pages have unique slugs', () => {
    const slugs = sitePages.map(p => p.slug);
    const uniqueSlugs = new Set(slugs);
    expect(slugs.length).toBe(uniqueSlugs.size);
  });

  it('getPageBySlug returns correct page', () => {
    const page = getPageBySlug('about');
    expect(page?.title).toBe('About LSX Design');
  });
});
```

---

### 3. Context Tests

Test React contexts for:
- ✅ **Provider:** Correct value propagation
- ✅ **Hooks:** Custom hooks work correctly
- ✅ **Updates:** State changes propagate
- ✅ **Error Handling:** Graceful failures

**Example:**

```typescript
describe('NavigationContext', () => {
  it('provides navigateTo function', () => {
    const TestComponent = () => {
      const { navigateTo } = useNavigation();
      return <button onClick={() => navigateTo('about')}>Navigate</button>;
    };
    
    render(
      <NavigationProvider>
        <TestComponent />
      </NavigationProvider>
    );
    
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
```

---

### 4. Integration Tests

Test complete page rendering for:
- ✅ **Page Assembly:** All components render together
- ✅ **Navigation:** Links work correctly
- ✅ **Data Flow:** Props passed correctly
- ✅ **Accessibility:** Full page compliance

**Example:**

```typescript
describe('FrontPageTemplate Integration', () => {
  it('renders all sections correctly', () => {
    render(<FrontPageTemplate />);
    
    expect(screen.getByRole('banner')).toBeInTheDocument(); // Header
    expect(screen.getByRole('main')).toBeInTheDocument();   // Main content
    expect(screen.getByRole('contentinfo')).toBeInTheDocument(); // Footer
  });

  it('has no accessibility violations on full page', async () => {
    const { container } = render(<FrontPageTemplate />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
```

---

## Accessibility Testing

### Using jest-axe

Every component should have an accessibility test:

```typescript
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

it('has no accessibility violations', async () => {
  const { container } = render(<Component />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
```

### Manual Accessibility Checks

Beyond automated tests, verify:

1. **Keyboard Navigation**
   - Tab through all interactive elements
   - Enter/Space activate buttons
   - Escape closes modals/menus

2. **Screen Reader Testing**
   - Test with VoiceOver (macOS)
   - Test with NVDA (Windows)
   - All content announced correctly

3. **Color Contrast**
   - Use browser DevTools contrast checker
   - Verify WCAG AA compliance (4.5:1 for text)
   - Check both light and dark modes

4. **Focus Visible**
   - All interactive elements show focus ring
   - Focus order is logical
   - No keyboard traps

---

## Coverage Requirements

### Minimum Coverage Targets

| Metric | Target | Current |
|--------|--------|---------|
| **Lines** | 80% | TBD |
| **Functions** | 80% | TBD |
| **Branches** | 75% | TBD |
| **Statements** | 80% | TBD |

### Generating Coverage Reports

```bash
# Generate coverage report
npm run test:coverage

# Open HTML coverage report
open coverage/index.html  # macOS
xdg-open coverage/index.html  # Linux
start coverage/index.html  # Windows
```

### Coverage Exclusions

The following are excluded from coverage:
- `node_modules/`
- `__tests__/`
- `*.d.ts` (TypeScript definitions)
- `*.config.*` (Configuration files)
- `scripts/` (Build scripts)

---

## CI/CD Integration

### GitHub Actions Example

```yaml
name: Test

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run tests with coverage
        run: npm run test:ci
      
      - name: Upload coverage to Codecov
        uses: codecov/codecov-action@v3
        with:
          files: ./coverage/lcov.info
      
      - name: Upload test results
        uses: actions/upload-artifact@v3
        if: always()
        with:
          name: test-results
          path: test-results/
```

---

## Best Practices

### 1. Test Behavior, Not Implementation

❌ **Bad:**
```typescript
it('calls internal method', () => {
  const component = new Component();
  expect(component._internalMethod).toHaveBeenCalled();
});
```

✅ **Good:**
```typescript
it('updates displayed text when button clicked', async () => {
  render(<Component />);
  await user.click(screen.getByRole('button'));
  expect(screen.getByText('Updated')).toBeInTheDocument();
});
```

---

### 2. Use Testing Library Queries Correctly

**Priority order:**
1. `getByRole()` - Most accessible
2. `getByLabelText()` - For forms
3. `getByPlaceholderText()` - For inputs
4. `getByText()` - For non-interactive content
5. `getByTestId()` - Last resort only

❌ **Bad:**
```typescript
const button = container.querySelector('.button');
```

✅ **Good:**
```typescript
const button = screen.getByRole('button', { name: /submit/i });
```

---

### 3. Test User Interactions Realistically

Use `@testing-library/user-event` instead of `fireEvent`:

❌ **Bad:**
```typescript
fireEvent.click(button);
```

✅ **Good:**
```typescript
const user = userEvent.setup();
await user.click(button);
```

---

### 4. Avoid Testing Implementation Details

Focus on what the user experiences:

❌ **Bad:**
```typescript
it('sets state to true', () => {
  const { result } = renderHook(() => useState(false));
  act(() => result.current[1](true));
  expect(result.current[0]).toBe(true);
});
```

✅ **Good:**
```typescript
it('shows success message after form submission', async () => {
  render(<Form />);
  await user.click(screen.getByRole('button', { name: /submit/i }));
  expect(screen.getByText(/success/i)).toBeInTheDocument();
});
```

---

### 5. Keep Tests Fast and Isolated

- ✅ No network requests (use mocks)
- ✅ No real database access
- ✅ No file system operations
- ✅ Each test is independent
- ✅ Tests can run in parallel

---

### 6. Test Error States

Don't just test happy paths:

```typescript
it('displays error message when API fails', async () => {
  server.use(
    rest.get('/api/data', (req, res, ctx) => {
      return res(ctx.status(500));
    })
  );
  
  render(<Component />);
  await waitFor(() => {
    expect(screen.getByText(/error/i)).toBeInTheDocument();
  });
});
```

---

## Testing Checklist

### For Each Component:

- [ ] Renders with default props
- [ ] Renders with all prop variants
- [ ] Handles user interaction (click, keyboard)
- [ ] Passes accessibility tests (jest-axe)
- [ ] Uses design system tokens (CSS variables)
- [ ] Handles loading/error states
- [ ] Works with different viewport sizes
- [ ] Forwards refs correctly (if applicable)
- [ ] Accepts custom className
- [ ] Has meaningful test descriptions

### For Each Data File:

- [ ] All items have required fields
- [ ] No duplicate IDs/slugs
- [ ] Helper functions return correct results
- [ ] Type definitions are accurate
- [ ] Performance is acceptable
- [ ] References are valid (no broken links)

### For Each Page Template:

- [ ] All sections render
- [ ] Navigation works correctly
- [ ] Data flows to components
- [ ] No accessibility violations
- [ ] Responsive at all breakpoints
- [ ] Semantic HTML structure

---

## Debugging Tests

### Common Issues

**Issue:** Test fails with "Not wrapped in act(...)"

**Solution:** Use `waitFor()` or `await` for async operations:
```typescript
await waitFor(() => {
  expect(screen.getByText('Loaded')).toBeInTheDocument();
});
```

---

**Issue:** Can't find element with `getByRole()`

**Solution:** Use Testing Library's debug helper:
```typescript
screen.debug(); // Prints current DOM
screen.logTestingPlaygroundURL(); // Suggests better queries
```

---

**Issue:** Accessibility test fails

**Solution:** Check the violations object:
```typescript
const results = await axe(container);
console.log(results.violations); // See what's wrong
```

---

## Resources

### Documentation

- [Vitest](https://vitest.dev)
- [React Testing Library](https://testing-library.com/react)
- [jest-axe](https://github.com/nickcolley/jest-axe)
- [Testing Library Queries](https://testing-library.com/docs/queries/about)
- [Common Mistakes](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)

### LSX Design Documentation

- [Testing Checklist](./TESTING-CHECKLIST.md)
- [Accessibility Guide](./guidelines/accessibility.md)
- [Component Documentation](./guidelines/components/)
- [Design System Guide](./DESIGN-SYSTEM-USAGE-GUIDE.md)

---

## Next Steps

### Priority 1: Complete Component Tests

- [ ] Heading.test.tsx
- [ ] Container.test.tsx
- [ ] Section.test.tsx
- [ ] Logo.test.tsx
- [ ] Breadcrumbs.test.tsx

### Priority 2: Complete Data Tests

- [ ] portfolio.test.ts
- [ ] blog-posts.test.ts
- [ ] faqs.test.ts

### Priority 3: Integration Tests

- [ ] FrontPageTemplate.test.tsx
- [ ] AboutTemplate.test.tsx
- [ ] ContactTemplate.test.tsx

### Priority 4: CI/CD Integration

- [ ] Set up GitHub Actions
- [ ] Configure coverage reporting
- [ ] Add status badges to README

---

**Status:** ✅ Test infrastructure complete, initial tests written, ready for expansion.

---

**Last Updated:** December 26, 2024
