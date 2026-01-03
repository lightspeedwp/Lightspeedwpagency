# Testing Guidelines — LSX Design System

**Version:** 1.0  
**Last Updated:** December 26, 2024  
**Test Framework:** Vitest + React Testing Library

---

## 🎯 Testing Philosophy

The LSX Design prototype uses **Vitest** for fast, modern testing with React Testing Library for component testing. All tests focus on user behavior and accessibility, not implementation details.

**Core Principles:**
- **Test user behavior, not implementation**
- **Accessibility-first** — Test ARIA, keyboard navigation, screen reader support
- **Visual regression** — Ensure design system consistency
- **Integration over unit tests** — Test components as users experience them
- **Fast feedback** — Tests should run in < 5 seconds

---

## 📚 Test Stack

### Core Testing Libraries

```json
{
  "vitest": "^1.0.0",
  "@testing-library/react": "^14.0.0",
  "@testing-library/jest-dom": "^6.0.0",
  "@testing-library/user-event": "^14.0.0",
  "jsdom": "^23.0.0"
}
```

**Why Vitest?**
- ⚡ **Fast** — 10x faster than Jest
- 🔧 **Vite-native** — Works with existing build setup
- 🎯 **Compatible** — Drop-in Jest replacement
- 📦 **Modern** — ESM support, TypeScript out-of-the-box

---

## 🗂️ Test File Structure

### Directory Organization

```txt
src/
├── app/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Button.tsx
│   │   │   └── Button.test.tsx          # Component tests
│   │   ├── patterns/
│   │   │   ├── HeroSection.tsx
│   │   │   └── HeroSection.test.tsx
│   │   └── templates/
│   │       ├── FrontPageTemplate.tsx
│   │       └── FrontPageTemplate.test.tsx
│   ├── utils/
│   │   ├── animations.ts
│   │   └── animations.test.ts           # Utility tests
│   └── contexts/
│       ├── NavigationContext.tsx
│       └── NavigationContext.test.tsx
└── tests/
    ├── setup.ts                          # Global test setup
    ├── integration/                      # Integration tests
    │   ├── navigation.test.tsx
    │   └── dark-mode.test.tsx
    └── accessibility/                    # A11y tests
        ├── wcag-compliance.test.tsx
        └── keyboard-navigation.test.tsx
```

### Naming Convention

- **Component tests:** `ComponentName.test.tsx`
- **Utility tests:** `utilityName.test.ts`
- **Integration tests:** `feature-name.test.tsx`
- **E2E tests:** `user-journey.e2e.test.tsx`

**Rule:** Test files live **next to** the code they test.

---

## 🧪 Test Types

### 1. Component Tests (Unit)

**What to test:**
- ✅ Renders correctly with default props
- ✅ Handles prop variations
- ✅ User interactions (click, hover, focus)
- ✅ Conditional rendering
- ✅ Accessibility attributes
- ✅ Design system token usage

**Example: Button Component**

```tsx
// Button.test.tsx
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from './Button';

describe('Button', () => {
  it('renders with default variant', () => {
    render(<Button>Click me</Button>);
    
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveStyle({
      backgroundColor: 'var(--primary)',
      color: 'var(--primary-foreground)'
    });
  });

  it('handles click events', async () => {
    const handleClick = vi.fn();
    const user = userEvent.setup();
    
    render(<Button onClick={handleClick}>Click me</Button>);
    
    const button = screen.getByRole('button');
    await user.click(button);
    
    expect(handleClick).toHaveBeenCalledOnce();
  });

  it('supports keyboard navigation', async () => {
    const handleClick = vi.fn();
    const user = userEvent.setup();
    
    render(<Button onClick={handleClick}>Click me</Button>);
    
    const button = screen.getByRole('button');
    button.focus();
    
    expect(button).toHaveFocus();
    
    await user.keyboard('{Enter}');
    expect(handleClick).toHaveBeenCalled();
  });

  it('is disabled when disabled prop is true', () => {
    render(<Button disabled>Click me</Button>);
    
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    expect(button).toHaveAttribute('aria-disabled', 'true');
  });
});
```

---

### 2. Accessibility Tests (A11y)

**What to test:**
- ✅ Proper ARIA labels and roles
- ✅ Keyboard navigation (Tab, Enter, Space, Escape)
- ✅ Focus management
- ✅ Color contrast ratios (WCAG 2.1 AA)
- ✅ Semantic HTML
- ✅ Screen reader announcements

**Example: Heading Component**

```tsx
// Heading.test.tsx
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { Heading } from './Heading';

expect.extend(toHaveNoViolations);

describe('Heading', () => {
  it('uses semantic HTML', () => {
    const { container } = render(<Heading level={1}>Page Title</Heading>);
    
    const h1 = container.querySelector('h1');
    expect(h1).toBeInTheDocument();
    expect(h1).toHaveTextContent('Page Title');
  });

  it('has no accessibility violations', async () => {
    const { container } = render(<Heading level={2}>Section Title</Heading>);
    
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('supports anchor navigation with ID', () => {
    render(<Heading level={2} id="services">Our Services</Heading>);
    
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toHaveAttribute('id', 'services');
  });

  it('uses design system tokens', () => {
    render(<Heading level={1}>Hero Title</Heading>);
    
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveStyle({
      fontFamily: 'Lexend, sans-serif',
      fontSize: 'var(--text-h1)',
      fontWeight: 'var(--font-weight-semibold)'
    });
  });
});
```

---

### 3. Integration Tests

**What to test:**
- ✅ Component interactions (parent → child communication)
- ✅ Navigation flows
- ✅ State management
- ✅ Context providers
- ✅ Data fetching (mocked)

**Example: Navigation Context**

```tsx
// navigation.test.tsx
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { NavigationProvider, useNavigation } from './NavigationContext';

function TestComponent() {
  const { currentPage, navigateTo } = useNavigation();
  
  return (
    <div>
      <p>Current page: {currentPage}</p>
      <button onClick={() => navigateTo('about')}>Go to About</button>
    </div>
  );
}

describe('Navigation', () => {
  it('updates current page on navigation', async () => {
    const user = userEvent.setup();
    
    render(
      <NavigationProvider>
        <TestComponent />
      </NavigationProvider>
    );
    
    expect(screen.getByText(/current page: front-page/i)).toBeInTheDocument();
    
    const button = screen.getByRole('button', { name: /go to about/i });
    await user.click(button);
    
    expect(screen.getByText(/current page: about/i)).toBeInTheDocument();
  });
});
```

---

### 4. Visual Regression Tests

**What to test:**
- ✅ Component rendering consistency
- ✅ Dark mode vs light mode
- ✅ Responsive breakpoints
- ✅ Design system token usage

**Example: Button Visual Tests**

```tsx
// Button.visual.test.tsx
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Button } from './Button';

describe('Button Visual Tests', () => {
  it('renders all variants correctly', () => {
    const { container } = render(
      <div>
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
      </div>
    );
    
    // Snapshot test
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders in dark mode', () => {
    document.documentElement.setAttribute('data-theme', 'dark');
    
    const { container } = render(<Button>Dark Mode Button</Button>);
    
    expect(container.firstChild).toMatchSnapshot();
    
    document.documentElement.removeAttribute('data-theme');
  });
});
```

---

## 🎭 Test Patterns

### Pattern 1: Test User Behavior

**❌ BAD — Testing implementation:**
```tsx
it('sets state correctly', () => {
  const { result } = renderHook(() => useState(false));
  const [, setState] = result.current;
  
  act(() => setState(true));
  
  expect(result.current[0]).toBe(true); // Testing internal state
});
```

**✅ GOOD — Testing user experience:**
```tsx
it('toggles visibility when button is clicked', async () => {
  const user = userEvent.setup();
  
  render(<DropdownMenu />);
  
  const button = screen.getByRole('button', { name: /open menu/i });
  expect(screen.queryByRole('menu')).not.toBeInTheDocument();
  
  await user.click(button);
  
  expect(screen.getByRole('menu')).toBeInTheDocument(); // Testing visible behavior
});
```

---

### Pattern 2: Accessibility-First Testing

**Always test:**
1. **Role attributes** — `getByRole('button')`
2. **Accessible names** — `getByLabelText`, `getByRole(..., { name: /.../ })`
3. **Keyboard navigation** — `Tab`, `Enter`, `Space`, `Escape`
4. **Focus management** — `expect(element).toHaveFocus()`
5. **ARIA attributes** — `aria-label`, `aria-expanded`, `aria-hidden`

**Example:**
```tsx
it('supports keyboard navigation', async () => {
  const user = userEvent.setup();
  
  render(<Modal />);
  
  // Tab to close button
  await user.tab();
  expect(screen.getByRole('button', { name: /close/i })).toHaveFocus();
  
  // Press Escape to close
  await user.keyboard('{Escape}');
  expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
});
```

---

### Pattern 3: Mock External Dependencies

**Mock navigation:**
```tsx
import { vi } from 'vitest';

const mockNavigate = vi.fn();

vi.mock('./NavigationContext', () => ({
  useNavigation: () => ({
    currentPage: 'home',
    navigateTo: mockNavigate
  })
}));
```

**Mock images:**
```tsx
vi.mock('../utils/unsplash', () => ({
  getImageUrl: vi.fn(() => 'https://placeholder.com/800x600')
}));
```

---

## ⚙️ Test Configuration

### vitest.config.ts

```typescript
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./tests/setup.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        'tests/',
        '**/*.test.{ts,tsx}',
        '**/*.config.{ts,js}',
      ],
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
```

### tests/setup.ts

```typescript
import { expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import matchers from '@testing-library/jest-dom/matchers';

// Extend Vitest's expect with jest-dom matchers
expect.extend(matchers);

// Cleanup after each test
afterEach(() => {
  cleanup();
});

// Mock matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  takeRecords() {
    return [];
  }
  unobserve() {}
};
```

---

## 📋 Test Checklist

### Component Test Checklist

Before marking a component "tested":

- [ ] **Rendering** — Component renders without errors
- [ ] **Props** — All prop variations tested
- [ ] **Interactions** — Click, hover, focus events work
- [ ] **Keyboard navigation** — Tab, Enter, Space, Escape work
- [ ] **Accessibility** — ARIA labels, roles, and semantic HTML
- [ ] **Responsive** — Works at mobile, tablet, desktop breakpoints
- [ ] **Dark mode** — Renders correctly in light and dark themes
- [ ] **Design tokens** — Uses CSS variables (no hard-coded values)
- [ ] **Error states** — Handles missing props gracefully
- [ ] **Loading states** — Shows loading UI when appropriate

---

## 🚀 Running Tests

### Commands

```bash
# Run all tests
npm run test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage

# Run specific test file
npm run test Button.test.tsx

# Run tests matching pattern
npm run test --grep "accessibility"

# Update snapshots
npm run test -- -u
```

### package.json Scripts

```json
{
  "scripts": {
    "test": "vitest run",
    "test:watch": "vitest",
    "test:coverage": "vitest run --coverage",
    "test:ui": "vitest --ui"
  }
}
```

---

## 🎯 Coverage Goals

### Target Coverage

| Metric | Target | Current |
|--------|--------|---------|
| **Statements** | 80% | TBD |
| **Branches** | 75% | TBD |
| **Functions** | 80% | TBD |
| **Lines** | 80% | TBD |

**Priority:**
1. **Critical components** (Button, Heading, Container) — 100%
2. **Template parts** (SiteHeader, SiteFooter) — 90%
3. **Patterns** (HeroSection, CTASection) — 80%
4. **Templates** (FrontPageTemplate) — 70%

---

## ✅ Best Practices

### Do's ✅

- ✅ **Test user behavior** — Not implementation details
- ✅ **Use semantic queries** — `getByRole`, `getByLabelText`
- ✅ **Test accessibility** — Keyboard navigation, ARIA, contrast
- ✅ **Mock external dependencies** — APIs, images, navigation
- ✅ **Keep tests isolated** — Each test should be independent
- ✅ **Write descriptive test names** — "renders heading with correct level"
- ✅ **Test edge cases** — Empty states, error states, long content
- ✅ **Use user-event** — Simulate real user interactions

### Don'ts ❌

- ❌ **Don't test implementation** — Avoid testing internal state
- ❌ **Don't use `.toMatchSnapshot()` everywhere** — Only for visual tests
- ❌ **Don't test third-party libraries** — Trust they're tested
- ❌ **Don't skip accessibility tests** — A11y is non-negotiable
- ❌ **Don't use `data-testid` unless necessary** — Prefer semantic queries
- ❌ **Don't write brittle tests** — Avoid testing exact CSS values
- ❌ **Don't test design system tokens** — They're defined in CSS

---

## 📚 Resources

### Testing Library

- **React Testing Library:** https://testing-library.com/react
- **User Event:** https://testing-library.com/docs/user-event/intro
- **Jest DOM Matchers:** https://github.com/testing-library/jest-dom

### Vitest

- **Vitest Docs:** https://vitest.dev
- **API Reference:** https://vitest.dev/api/
- **Configuration:** https://vitest.dev/config/

### Accessibility Testing

- **jest-axe:** https://github.com/nickcolley/jest-axe
- **WCAG Guidelines:** https://www.w3.org/WAI/WCAG21/quickref/
- **ARIA Practices:** https://www.w3.org/WAI/ARIA/apg/

---

## 🔄 Continuous Integration

### GitHub Actions Workflow

```yaml
name: Tests

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
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run tests
        run: npm run test:coverage
      
      - name: Upload coverage
        uses: codecov/codecov-action@v3
        with:
          files: ./coverage/coverage-final.json
```

---

**Last Updated:** December 26, 2024  
**Test Framework:** Vitest + React Testing Library  
**Coverage Goal:** 80% statements, 75% branches  
**Status:** 🚧 Setup in progress
