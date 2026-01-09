# Test Organization Guidelines

## 🎯 **PURPOSE**

This document defines where tests should be located and how to organize test files in the LSX Design system.

**Goals:**
- Clear test organization
- Consistent file structure
- Easy test discovery
- Logical co-location with source code

---

## 📁 **TEST LOCATION**

### **CORRECT: Tests in Source Directory**

```
/src/app/__tests__/
├── components/           # Component tests
├── data/                 # Data layer tests
├── templates/            # Template tests
├── patterns/             # Pattern tests
├── hooks/                # Hook tests
├── utils/                # Utility tests
└── setup.ts              # Test setup file
```

**Why this location?**
- ✅ Co-located with source code
- ✅ Mirrors source structure
- ✅ Easy to find tests
- ✅ Follows React best practices
- ✅ Better for imports

---

### **WRONG: Tests in Root**

```
❌ /__tests__/            # Root-level tests (wrong location)
❌ /tests/                # Root-level tests (wrong location)
```

**Why wrong?**
- ❌ Separated from source code
- ❌ Harder to find related tests
- ❌ Longer import paths
- ❌ Not standard React structure

---

## 📝 **TEST FILE NAMING**

### **Co-located Tests (Preferred):**

```
/src/app/components/
├── Button/
│   ├── Button.tsx
│   └── Button.test.tsx       # Test next to component
```

**Benefits:**
- Easier to find
- Clear relationship
- Better maintainability

---

### **Directory Tests (Alternative):**

```
/src/app/__tests__/
└── components/
    └── Button.test.tsx       # Test in __tests__
```

**Use when:**
- Multiple test files per component
- Integration tests
- Test utilities needed

---

## 🗂️ **DIRECTORY STRUCTURE**

### **Recommended Structure:**

```
/src/app/
├── components/
│   ├── Button/
│   │   ├── Button.tsx
│   │   └── Button.test.tsx
│   └── Card/
│       ├── Card.tsx
│       └── Card.test.tsx
│
├── __tests__/
│   ├── setup.ts              # Test setup
│   ├── components/           # Additional component tests
│   ├── integration/          # Integration tests
│   └── e2e/                  # End-to-end tests
│
├── data/
│   ├── pages.ts
│   └── pages.test.ts         # Data tests co-located
│
└── templates/
    ├── FrontPage.tsx
    └── FrontPage.test.tsx    # Template tests co-located
```

---

## 📋 **TEST TYPES & LOCATIONS**

### **1. Unit Tests**

**Location:** Co-located with component

```
/src/app/components/Button/Button.test.tsx
```

**Example:**
```tsx
import { Button } from './Button';

describe('Button', () => {
  it('renders correctly', () => {
    // Test implementation
  });
});
```

---

### **2. Integration Tests**

**Location:** `/src/app/__tests__/integration/`

```
/src/app/__tests__/integration/navigation.test.tsx
```

**Example:**
```tsx
import { render } from '@testing-library/react';
import { SiteHeader } from '../../components/parts/SiteHeader';

describe('Navigation Integration', () => {
  it('navigates between pages', () => {
    // Test implementation
  });
});
```

---

### **3. Data Layer Tests**

**Location:** Co-located with data files

```
/src/app/data/pages.test.ts
/src/app/data/portfolio.test.ts
```

---

### **4. Hook Tests**

**Location:** Co-located with hooks

```
/src/app/hooks/useNavigation.test.ts
/src/app/hooks/useIsMobile.test.ts
```

---

### **5. Utility Tests**

**Location:** Co-located with utilities

```
/src/app/utils/cn.test.ts
```

---

### **6. E2E Tests (if needed)**

**Location:** `/src/app/__tests__/e2e/`

```
/src/app/__tests__/e2e/user-flows.test.tsx
```

---

## 📁 **TEST SETUP FILE**

### **Location:** `/src/app/__tests__/setup.ts`

**Purpose:** Configure test environment

**Example:**
```tsx
import '@testing-library/jest-dom';

// Global test setup
beforeAll(() => {
  // Setup code
});

afterAll(() => {
  // Cleanup code
});
```

---

## 🔄 **MIGRATION PLAN**

### **Moving Tests from Root to /src/app/**

**Current (Wrong):**
```
/__tests__/
├── components/
├── data/
├── templates/
└── setup.ts
```

**Target (Correct):**
```
/src/app/__tests__/
├── components/
├── data/
├── templates/
└── setup.ts
```

**Migration Steps:**

1. **Create target directory:**
   ```bash
   mkdir -p /src/app/__tests__
   ```

2. **Move test files:**
   ```bash
   mv /__tests__/* /src/app/__tests__/
   ```

3. **Update imports in test files:**
   ```tsx
   // Before
   import { Button } from '../../../src/app/components/Button';
   
   // After
   import { Button } from '../../components/Button';
   ```

4. **Update test config (if needed):**
   ```json
   // jest.config.js or vitest.config.ts
   {
     "testMatch": [
       "**/src/app/**/*.test.{ts,tsx}"
     ]
   }
   ```

5. **Delete old directory:**
   ```bash
   rmdir /__tests__
   ```

---

## 🚫 **COMMON MISTAKES**

### **❌ WRONG: Tests in Root**

```
/__tests__/components/Button.test.tsx  # Too far from source
```

### **✅ CORRECT: Tests with Source**

```
/src/app/components/Button/Button.test.tsx  # Co-located
/src/app/__tests__/components/Button.test.tsx  # Or in __tests__
```

---

### **❌ WRONG: Long Import Paths**

```tsx
// From /__tests__/components/Button.test.tsx
import { Button } from '../../../src/app/components/Button';
```

### **✅ CORRECT: Short Import Paths**

```tsx
// From /src/app/__tests__/components/Button.test.tsx
import { Button } from '../../components/Button';

// Or from /src/app/components/Button/Button.test.tsx
import { Button } from './Button';
```

---

## 📖 **QUICK REFERENCE**

### **Where to Put Tests:**

| Test Type | Location | Example |
|-----------|----------|---------|
| **Component Unit** | Co-located | `/src/app/components/Button/Button.test.tsx` |
| **Component Integration** | `__tests__` | `/src/app/__tests__/integration/` |
| **Data Tests** | Co-located | `/src/app/data/pages.test.ts` |
| **Hook Tests** | Co-located | `/src/app/hooks/useNavigation.test.ts` |
| **Utility Tests** | Co-located | `/src/app/utils/cn.test.ts` |
| **E2E Tests** | `__tests__` | `/src/app/__tests__/e2e/` |
| **Test Setup** | `__tests__` | `/src/app/__tests__/setup.ts` |

---

### **Naming Convention:**

```
Component.test.tsx        # Component tests
Component.spec.tsx        # Also acceptable
utils.test.ts            # Utility tests
integration.test.tsx     # Integration tests
```

---

## ✅ **TEST ORGANIZATION CHECKLIST**

- [ ] All tests in `/src/app/` directory
- [ ] Component tests co-located (preferred)
- [ ] Integration tests in `/src/app/__tests__/integration/`
- [ ] Test setup in `/src/app/__tests__/setup.ts`
- [ ] Import paths are short and relative
- [ ] Test naming convention followed
- [ ] No tests in root `/__tests__/` or `/tests/`

---

## 🎯 **BEST PRACTICES**

### **1. Co-locate When Possible**

```
✅ GOOD:
/src/app/components/Button/
├── Button.tsx
└── Button.test.tsx

❌ BAD:
/src/app/components/Button/Button.tsx
/__tests__/components/Button.test.tsx
```

---

### **2. Use Descriptive Test Names**

```tsx
// ✅ GOOD
describe('Button', () => {
  it('renders with primary variant', () => {});
  it('calls onClick when clicked', () => {});
  it('applies custom className', () => {});
});

// ❌ BAD
describe('Button', () => {
  it('works', () => {});
  it('test 2', () => {});
});
```

---

### **3. Group Related Tests**

```tsx
describe('Button', () => {
  describe('variants', () => {
    it('renders primary variant', () => {});
    it('renders secondary variant', () => {});
  });
  
  describe('sizes', () => {
    it('renders small size', () => {});
    it('renders medium size', () => {});
  });
});
```

---

### **4. Use Design System CSS Variables in Tests**

```tsx
import { render } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  it('uses design system colors', () => {
    const { container } = render(<Button variant="primary" />);
    const button = container.firstChild as HTMLElement;
    
    // ✅ Test uses CSS variables
    expect(button.style.backgroundColor).toBe('var(--primary)');
    expect(button.style.color).toBe('var(--primary-foreground)');
  });
  
  it('uses design system fonts', () => {
    const { container } = render(<Button />);
    const button = container.firstChild as HTMLElement;
    
    // ✅ Test verifies CSS variable usage
    expect(button.style.fontFamily).toBe('var(--font-primary)');
  });
});
```

---

## 📚 **RELATED GUIDELINES**

**See also:**
- **[testing-guidelines.md](./testing-guidelines.md)** — General testing standards
- **[TESTING-STANDARDS.md](./TESTING-STANDARDS.md)** — Complete testing requirements
- **[design-tokens/colors.md](../design-tokens/colors.md)** — CSS variables for colors
- **[design-tokens/typography.md](../design-tokens/typography.md)** — CSS variables for fonts

---

## 🎉 **SUMMARY**

**Correct Location:**
```
✅ /src/app/__tests__/
✅ /src/app/components/Component/Component.test.tsx
```

**Wrong Location:**
```
❌ /__tests__/
❌ /tests/
```

**Key Rules:**
1. ✅ Tests in `/src/app/` directory
2. ✅ Co-locate tests with components (preferred)
3. ✅ Use `__tests__` for integration/e2e tests
4. ✅ Keep import paths short and relative
5. ✅ Use design system CSS variables in tests
6. ❌ Never put tests in root `/__tests__/` or `/tests/`

---

**Last Updated:** 2025-01-09  
**Status:** ✅ Active  
**Enforcement:** Mandatory for all tests
