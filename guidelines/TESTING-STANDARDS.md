# Testing Standards - LSX Design System

**Version:** 1.0  
**Last Updated:** December 25, 2024  
**Status:** 🟢 **ACTIVE STANDARD**  
**Compliance:** Required for all production code

---

## 📋 **TABLE OF CONTENTS**

1. [Overview](#overview)
2. [Testing Philosophy](#testing-philosophy)
3. [Testing Levels](#testing-levels)
4. [Component Testing](#component-testing)
5. [Accessibility Testing](#accessibility-testing)
6. [Visual Regression Testing](#visual-regression-testing)
7. [Performance Testing](#performance-testing)
8. [WordPress Integration Testing](#wordpress-integration-testing)
9. [Testing Tools & Setup](#testing-tools--setup)
10. [Coverage Requirements](#coverage-requirements)
11. [Best Practices](#best-practices)
12. [Examples](#examples)

---

## 🎯 **OVERVIEW**

### **Purpose**

Define comprehensive testing standards for the LSX Design System to ensure:
- Component reliability across all templates
- WCAG 2.1 AA accessibility compliance
- Visual consistency in light/dark modes
- Performance meets targets
- WordPress block compatibility

### **Scope**

These standards apply to:
- All React components (`/src/app/components/`)
- Data models (`/src/app/data/`)
- Context providers (`/src/app/contexts/`)
- Template files (`/src/app/components/templates/`)
- Pattern components (`/src/app/components/patterns/`)

### **Goals**

| Goal | Target | Current | Status |
|------|--------|---------|--------|
| **Unit Test Coverage** | 80% | 0% | 🔴 Not Started |
| **Component Test Coverage** | 90% | 0% | 🔴 Not Started |
| **Accessibility Tests** | 100% | Manual | 🟡 Manual Only |
| **Visual Regression** | 100% | 0% | 🔴 Not Started |
| **Performance Budget** | 100% | 90% | 🟡 Good |

---

## 🧠 **TESTING PHILOSOPHY**

### **Core Principles**

1. **Design System First**
   - Test components, not implementations
   - Verify design token compliance
   - Ensure pattern consistency

2. **Accessibility is Not Optional**
   - Every component must pass axe-core
   - Keyboard navigation required
   - Screen reader compatibility verified

3. **WordPress-Native Thinking**
   - Test block patterns, not HTML
   - Verify theme.json compatibility
   - Ensure editor preview accuracy

4. **User-Focused Testing**
   - Test user journeys, not functions
   - Verify real-world scenarios
   - Prioritize common use cases

5. **Performance Budgets**
   - Measure, don't assume
   - Set budgets per component type
   - Fail builds on regressions

---

## 🏗️ **TESTING LEVELS**

### **1. Unit Tests** (Target: 80% coverage)

**What to test:**
- Utility functions
- Data transformations
- Helper methods
- State management logic

**Tools:**
- Jest
- React Testing Library

**Example:**
```typescript
// getPageBySlug.test.ts
import { getPageBySlug } from '../data/pages';

describe('getPageBySlug', () => {
  it('returns page data for valid slug', () => {
    const page = getPageBySlug('about');
    expect(page).toBeDefined();
    expect(page?.title).toBe('About Us');
  });

  it('returns null for invalid slug', () => {
    const page = getPageBySlug('nonexistent');
    expect(page).toBeNull();
  });
});
```

---

### **2. Component Tests** (Target: 90% coverage)

**What to test:**
- Component rendering
- Props handling
- User interactions
- State changes
- CSS variable usage

**Tools:**
- Jest
- React Testing Library
- @testing-library/user-event

**Example:**
```typescript
// Button.test.tsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from './Button';

describe('Button Component', () => {
  it('renders with correct text', () => {
    render(<Button>Click Me</Button>);
    expect(screen.getByRole('button')).toHaveTextContent('Click Me');
  });

  it('calls onClick when clicked', async () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click</Button>);
    
    await userEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('applies primary variant styles', () => {
    render(<Button variant="primary">Primary</Button>);
    const button = screen.getByRole('button');
    
    expect(button).toHaveStyle({
      backgroundColor: 'var(--primary)',
      color: 'var(--primary-foreground)'
    });
  });

  it('is disabled when disabled prop is true', () => {
    render(<Button disabled>Disabled</Button>);
    expect(screen.getByRole('button')).toBeDisabled();
  });
});
```

---

### **3. Integration Tests** (Target: 70% coverage)

**What to test:**
- Template composition
- Navigation flows
- Context providers
- Data fetching
- Multi-component interactions

**Tools:**
- Jest
- React Testing Library
- Mock Service Worker (MSW)

**Example:**
```typescript
// NavigationContext.test.tsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { NavigationProvider, useNavigation } from './NavigationContext';

function TestComponent() {
  const { navigateTo, currentPage } = useNavigation();
  return (
    <div>
      <p>Current: {currentPage}</p>
      <button onClick={() => navigateTo('about')}>Go to About</button>
    </div>
  );
}

describe('NavigationContext', () => {
  it('navigates to new page', async () => {
    render(
      <NavigationProvider>
        <TestComponent />
      </NavigationProvider>
    );

    expect(screen.getByText('Current: front-page')).toBeInTheDocument();
    
    await userEvent.click(screen.getByText('Go to About'));
    
    expect(screen.getByText('Current: about')).toBeInTheDocument();
  });
});
```

---

### **4. End-to-End Tests** (Target: 50% coverage)

**What to test:**
- Critical user journeys
- Multi-page flows
- Form submissions
- Error states
- Responsive behavior

**Tools:**
- Playwright
- Cypress (alternative)

**Example:**
```typescript
// navigation.spec.ts (Playwright)
import { test, expect } from '@playwright/test';

test.describe('Main Navigation', () => {
  test('navigates through services mega menu', async ({ page }) => {
    await page.goto('/');
    
    // Hover over Services
    await page.hover('[data-menu="services"]');
    
    // Wait for mega menu
    await page.waitForSelector('[data-mega-menu="services"]');
    
    // Click on WordPress Development
    await page.click('text=WordPress Development');
    
    // Verify navigation
    await expect(page).toHaveURL(/.*services/);
    await expect(page.locator('h1')).toContainText('Services');
  });

  test('mobile menu works correctly', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    // Open mobile menu
    await page.click('[aria-label="Open menu"]');
    
    // Verify menu is visible
    await expect(page.locator('[data-mobile-menu]')).toBeVisible();
    
    // Click Services
    await page.click('text=Services');
    
    // Menu should close
    await expect(page.locator('[data-mobile-menu]')).not.toBeVisible();
  });
});
```

---

## ♿ **ACCESSIBILITY TESTING**

### **Automated Testing** (Required for ALL components)

**Tools:**
- jest-axe
- @testing-library/jest-dom
- eslint-plugin-jsx-a11y

**Example:**
```typescript
// Button.a11y.test.tsx
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { Button } from './Button';

expect.extend(toHaveNoViolations);

describe('Button Accessibility', () => {
  it('has no accessibility violations', async () => {
    const { container } = render(
      <Button variant="primary">Accessible Button</Button>
    );
    
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('has correct ARIA attributes when disabled', async () => {
    const { container } = render(
      <Button disabled aria-label="Disabled action">
        Submit
      </Button>
    );
    
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
```

---

### **Keyboard Navigation Testing** (Required for interactive components)

**What to test:**
- Tab order is logical
- Focus visible on all elements
- Enter/Space triggers actions
- Escape closes modals/menus
- Arrow keys work in navigation

**Example:**
```typescript
// MegaMenu.keyboard.test.tsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SiteHeader } from './SiteHeader';

describe('MegaMenu Keyboard Navigation', () => {
  it('opens mega menu on Enter key', async () => {
    render(<SiteHeader />);
    
    const servicesButton = screen.getByRole('button', { name: /services/i });
    servicesButton.focus();
    
    await userEvent.keyboard('{Enter}');
    
    expect(screen.getByRole('navigation', { name: /services menu/i })).toBeVisible();
  });

  it('closes mega menu on Escape key', async () => {
    render(<SiteHeader />);
    
    const servicesButton = screen.getByRole('button', { name: /services/i });
    await userEvent.click(servicesButton);
    
    expect(screen.getByRole('navigation', { name: /services menu/i })).toBeVisible();
    
    await userEvent.keyboard('{Escape}');
    
    expect(screen.queryByRole('navigation', { name: /services menu/i })).not.toBeInTheDocument();
  });

  it('maintains focus trap within mega menu', async () => {
    render(<SiteHeader />);
    
    // Open mega menu
    await userEvent.click(screen.getByRole('button', { name: /services/i }));
    
    // Tab through menu items
    await userEvent.tab();
    await userEvent.tab();
    await userEvent.tab();
    
    // Focus should stay within mega menu
    const focusedElement = document.activeElement;
    const megaMenu = screen.getByRole('navigation', { name: /services menu/i });
    
    expect(megaMenu).toContainElement(focusedElement);
  });
});
```

---

### **Screen Reader Testing** (Manual + Automated)

**Automated:**
```typescript
// FAQSection.screenreader.test.tsx
import { render, screen } from '@testing-library/react';
import { FAQSection } from './FAQSection';

const mockFAQs = [
  { question: 'What is WordPress?', answer: 'A content management system.' }
];

describe('FAQSection Screen Reader', () => {
  it('has correct ARIA expanded state', () => {
    render(<FAQSection faqs={mockFAQs} />);
    
    const button = screen.getByRole('button', { name: /what is wordpress/i });
    
    expect(button).toHaveAttribute('aria-expanded', 'false');
  });

  it('announces expansion to screen readers', async () => {
    render(<FAQSection faqs={mockFAQs} />);
    
    const button = screen.getByRole('button', { name: /what is wordpress/i });
    await userEvent.click(button);
    
    expect(button).toHaveAttribute('aria-expanded', 'true');
    expect(button).toHaveAttribute('aria-controls', 'faq-answer-0');
  });
});
```

**Manual Testing Checklist:**
- [ ] Test with NVDA (Windows)
- [ ] Test with JAWS (Windows)
- [ ] Test with VoiceOver (macOS/iOS)
- [ ] Test with TalkBack (Android)
- [ ] Verify all interactive elements announced
- [ ] Verify state changes announced
- [ ] Verify form labels read correctly

---

## 🎨 **VISUAL REGRESSION TESTING**

### **Tools:**
- Percy (Visual testing platform)
- Chromatic (Storybook visual testing)
- Playwright screenshots

### **What to test:**
- Component appearance in light/dark modes
- Responsive breakpoints (mobile, tablet, desktop)
- Hover/focus/active states
- Long content handling
- Empty states

**Example:**
```typescript
// Button.visual.spec.ts (Playwright)
import { test, expect } from '@playwright/test';

test.describe('Button Visual Regression', () => {
  test('matches snapshot in light mode', async ({ page }) => {
    await page.goto('/test/button');
    await expect(page).toHaveScreenshot('button-light.png');
  });

  test('matches snapshot in dark mode', async ({ page }) => {
    await page.goto('/test/button');
    await page.evaluate(() => {
      document.documentElement.classList.add('dark');
    });
    await expect(page).toHaveScreenshot('button-dark.png');
  });

  test('matches hover state snapshot', async ({ page }) => {
    await page.goto('/test/button');
    await page.hover('[data-testid="primary-button"]');
    await expect(page).toHaveScreenshot('button-hover.png');
  });
});
```

---

## ⚡ **PERFORMANCE TESTING**

### **Performance Budgets**

| Component Type | Bundle Size | First Paint | Interactive |
|---------------|-------------|-------------|-------------|
| **Common Components** | <5KB | <100ms | <200ms |
| **Pattern Components** | <15KB | <200ms | <300ms |
| **Template Pages** | <50KB | <500ms | <1000ms |
| **Full Application** | <200KB | <1000ms | <2000ms |

### **Tools:**
- Lighthouse CI
- Bundle analyzer
- React DevTools Profiler
- WebPageTest

**Example:**
```typescript
// performance.test.ts
import { render } from '@testing-library/react';
import { FrontPageTemplate } from './templates/FrontPageTemplate';

describe('Performance Tests', () => {
  it('renders within performance budget', () => {
    const startTime = performance.now();
    
    render(<FrontPageTemplate />);
    
    const endTime = performance.now();
    const renderTime = endTime - startTime;
    
    // Should render in under 500ms
    expect(renderTime).toBeLessThan(500);
  });

  it('does not cause excessive re-renders', () => {
    const renderSpy = jest.fn();
    
    function TestWrapper() {
      renderSpy();
      return <FrontPageTemplate />;
    }
    
    const { rerender } = render(<TestWrapper />);
    rerender(<TestWrapper />);
    
    // Should only render twice (initial + rerender)
    expect(renderSpy).toHaveBeenCalledTimes(2);
  });
});
```

---

## 🔌 **WORDPRESS INTEGRATION TESTING**

### **Pattern Validation**

Test that React components map correctly to WordPress patterns:

```typescript
// wordpress-patterns.test.ts
describe('WordPress Pattern Mapping', () => {
  it('FAQSection maps to faq-section.php pattern', () => {
    const { container } = render(<FAQSection faqs={mockFAQs} />);
    
    // Verify structure matches WordPress pattern
    expect(container.querySelector('.wp-block-group')).toBeTruthy();
    expect(container.querySelector('h2')).toHaveTextContent('Frequently Asked Questions');
  });

  it('uses only theme.json tokens', () => {
    const { container } = render(<FAQSection faqs={mockFAQs} />);
    
    const button = container.querySelector('button');
    const styles = window.getComputedStyle(button);
    
    // Verify CSS variables used
    expect(styles.backgroundColor).toContain('var(');
    expect(styles.color).toContain('var(');
    expect(styles.fontSize).toContain('var(');
  });
});
```

---

## 🛠️ **TESTING TOOLS & SETUP**

### **Required Dependencies**

```json
{
  "devDependencies": {
    "@testing-library/react": "^14.0.0",
    "@testing-library/jest-dom": "^6.1.0",
    "@testing-library/user-event": "^14.5.0",
    "jest": "^29.7.0",
    "jest-axe": "^8.0.0",
    "jest-environment-jsdom": "^29.7.0",
    "@playwright/test": "^1.40.0",
    "@types/jest": "^29.5.0"
  }
}
```

### **Jest Configuration**

```javascript
// jest.config.js
module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
  },
  collectCoverageFrom: [
    'src/app/components/**/*.{ts,tsx}',
    'src/app/contexts/**/*.{ts,tsx}',
    'src/app/data/**/*.{ts,tsx}',
    '!src/app/**/*.stories.tsx',
    '!src/app/**/*.test.tsx'
  ],
  coverageThresholds: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  }
};
```

### **Jest Setup**

```javascript
// jest.setup.js
import '@testing-library/jest-dom';
import { toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});
```

---

## 📊 **COVERAGE REQUIREMENTS**

### **Minimum Coverage Targets**

| File Type | Statements | Branches | Functions | Lines |
|-----------|-----------|----------|-----------|-------|
| **Common Components** | 90% | 85% | 90% | 90% |
| **Pattern Components** | 85% | 80% | 85% | 85% |
| **Template Components** | 75% | 70% | 75% | 75% |
| **Utility Functions** | 95% | 90% | 95% | 95% |
| **Data Models** | 90% | 85% | 90% | 90% |

### **Coverage Exemptions**

These files are exempt from coverage requirements:
- `*.stories.tsx` - Storybook stories
- `*.test.tsx` - Test files
- `App.tsx` - Application entry point
- `main.tsx` - React entry point

---

## ✅ **BEST PRACTICES**

### **1. Test Behavior, Not Implementation**

**❌ Bad:**
```typescript
it('sets state to true', () => {
  const { result } = renderHook(() => useState(false));
  act(() => {
    result.current[1](true);
  });
  expect(result.current[0]).toBe(true);
});
```

**✅ Good:**
```typescript
it('shows expanded content when clicked', async () => {
  render(<FAQSection faqs={mockFAQs} />);
  
  await userEvent.click(screen.getByRole('button', { name: /question/i }));
  
  expect(screen.getByText(/answer/i)).toBeVisible();
});
```

---

### **2. Use Accessible Queries**

**Priority Order:**
1. `getByRole` - Best for accessibility
2. `getByLabelText` - Form inputs
3. `getByPlaceholderText` - Fallback for inputs
4. `getByText` - Non-interactive content
5. `getByTestId` - Last resort only

**❌ Bad:**
```typescript
const button = container.querySelector('.primary-button');
```

**✅ Good:**
```typescript
const button = screen.getByRole('button', { name: /submit/i });
```

---

### **3. Test User Interactions**

**✅ Always use userEvent:**
```typescript
import userEvent from '@testing-library/user-event';

it('handles click correctly', async () => {
  const handleClick = jest.fn();
  render(<Button onClick={handleClick}>Click</Button>);
  
  await userEvent.click(screen.getByRole('button'));
  
  expect(handleClick).toHaveBeenCalledTimes(1);
});
```

---

### **4. Test CSS Variables**

**✅ Verify design system compliance:**
```typescript
it('uses CSS variables from design system', () => {
  render(<Button variant="primary">Button</Button>);
  
  const button = screen.getByRole('button');
  
  expect(button).toHaveStyle({
    backgroundColor: 'var(--primary)',
    color: 'var(--primary-foreground)',
    fontFamily: 'Lexend, sans-serif',
    fontSize: 'var(--text-base)'
  });
});
```

---

### **5. Test Dark Mode**

**✅ Verify both themes:**
```typescript
describe('Button Dark Mode', () => {
  beforeEach(() => {
    document.documentElement.classList.add('dark');
  });

  afterEach(() => {
    document.documentElement.classList.remove('dark');
  });

  it('uses dark mode colors', () => {
    render(<Button variant="primary">Dark Button</Button>);
    
    const button = screen.getByRole('button');
    
    // CSS variables automatically adapt
    expect(button).toHaveStyle({
      backgroundColor: 'var(--primary)',
      color: 'var(--primary-foreground)'
    });
  });
});
```

---

## 📖 **TESTING CHECKLIST**

### **Before Committing Code:**

- [ ] All new components have unit tests
- [ ] All components pass accessibility tests (jest-axe)
- [ ] Keyboard navigation tested for interactive components
- [ ] Dark mode tested
- [ ] Mobile responsive tested
- [ ] CSS variables verified (no hardcoded values)
- [ ] Coverage meets minimum thresholds
- [ ] All tests pass locally
- [ ] No console errors/warnings

### **Before Deploying:**

- [ ] E2E tests pass
- [ ] Visual regression tests reviewed
- [ ] Performance budgets met
- [ ] Lighthouse score ≥90
- [ ] Manual accessibility testing complete
- [ ] Cross-browser testing complete
- [ ] Mobile device testing complete

---

## 🎯 **IMPLEMENTATION ROADMAP**

### **Phase 1: Foundation** (Week 1)
- [ ] Set up Jest + React Testing Library
- [ ] Configure jest-axe
- [ ] Create test utilities
- [ ] Write first component tests

### **Phase 2: Common Components** (Week 2)
- [ ] Test all 8 common components
- [ ] Achieve 90% coverage
- [ ] Set up visual regression

### **Phase 3: Patterns** (Week 3-4)
- [ ] Test 15 pattern components
- [ ] Achieve 85% coverage
- [ ] Set up E2E tests

### **Phase 4: Templates** (Week 5-6)
- [ ] Test all templates
- [ ] Achieve 75% coverage
- [ ] Complete accessibility audit

---

**Last Updated:** December 25, 2024  
**Version:** 1.0  
**Status:** 🟢 **ACTIVE STANDARD**  
**Next Review:** January 25, 2025

---

## 📚 **RESOURCES**

- [Jest Documentation](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/react)
- [jest-axe](https://github.com/nickcolley/jest-axe)
- [Playwright](https://playwright.dev/)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
