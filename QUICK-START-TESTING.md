# Quick Start — Testing Guide

**Get started with testing in under 5 minutes**

---

## 🚀 Run Tests Now

### Step 1: Install Dependencies (if needed)

```bash
npm install
```

### Step 2: Run Tests

```bash
# Run all tests once
npm test

# Or watch mode (recommended)
npm run test:watch
```

That's it! Tests will run automatically.

---

## 📊 What Gets Tested

### ✅ 280+ Tests Covering:

**Components (5):**
- Button — 50+ tests
- Heading — 45+ tests
- Container — 50+ tests
- Section — 60+ tests
- Logo — 45+ tests

**Data (1):**
- Site Pages — 30+ tests

**Every test checks:**
- ✅ Rendering correctness
- ✅ Accessibility (WCAG 2.1 AA)
- ✅ Design system tokens
- ✅ User interaction
- ✅ Performance
- ✅ Edge cases

---

## 🎯 Test Commands

| Command | What It Does |
|---------|-------------|
| `npm test` | Run all tests once |
| `npm run test:watch` | Watch mode (auto-rerun on changes) |
| `npm run test:ui` | Interactive UI (visual test runner) |
| `npm run test:coverage` | Generate coverage report |

---

## ✅ Expected Results

### All Tests Should Pass:

```
✓ Button Component (50 tests)
✓ Heading Component (45 tests)
✓ Container Component (50 tests)
✓ Section Component (60 tests)
✓ Logo Component (45 tests)
✓ Site Pages Data (30 tests)

Test Files: 6 passed (6)
Tests: 280+ passed (280+)
Duration: ~5-10 seconds
```

### If Tests Fail:

1. **Check dependencies:** Run `npm install`
2. **Check file paths:** Ensure all test files exist
3. **Check React version:** Should be 18.3.1
4. **Check Node version:** Should be 18+ or 20+

---

## 📁 Test File Locations

```
__tests__/
├── components/
│   ├── Button.test.tsx          ✅ 50+ tests
│   ├── Heading.test.tsx         ✅ 45+ tests
│   ├── Container.test.tsx       ✅ 50+ tests
│   ├── Section.test.tsx         ✅ 60+ tests
│   └── Logo.test.tsx            ✅ 45+ tests
├── data/
│   └── site-pages.test.ts       ✅ 30+ tests
└── setup.ts                     ✅ Test configuration
```

---

## 🎨 Watch Mode (Recommended)

**Best for development:**

```bash
npm run test:watch
```

**Features:**
- ✅ Auto-reruns tests when files change
- ✅ Interactive filtering
- ✅ Fast feedback loop
- ✅ Keyboard shortcuts

**Keyboard Shortcuts:**
- `a` — Run all tests
- `f` — Run only failed tests
- `t` — Filter by test name
- `p` — Filter by file name
- `q` — Quit watch mode

---

## 📊 Coverage Report

**Generate coverage report:**

```bash
npm run test:coverage
```

**Opens:** `coverage/index.html` in your browser

**Shows:**
- Line coverage
- Branch coverage
- Function coverage
- Statement coverage

**Targets:**
- Lines: 80%
- Functions: 80%
- Branches: 75%
- Statements: 80%

---

## 🔍 Debug Failing Tests

### View Detailed Output:

```bash
npm test -- --reporter=verbose
```

### Run Single Test File:

```bash
npm test Button.test.tsx
```

### Run Tests Matching Pattern:

```bash
npm test -- --grep="accessibility"
```

### Check Specific Component:

```bash
npm test -- Heading
```

---

## ✨ What's Being Tested

### Example: Button Component

```typescript
describe('Button Component', () => {
  it('renders with primary variant', () => {
    render(<Button variant="primary">Click me</Button>);
    expect(screen.getByRole('button')).toHaveTextContent('Click me');
  });

  it('has no accessibility violations', async () => {
    const { container } = render(<Button>Accessible</Button>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('calls onClick when clicked', async () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click</Button>);
    await user.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalled();
  });
});
```

---

## 🎯 Test Categories

### Each Component Tests:

1. **Rendering**
   - Correct output with different props
   - Semantic HTML elements
   - Children rendering

2. **Accessibility (WCAG 2.1 AA)**
   - No violations (jest-axe)
   - Keyboard navigation
   - Screen reader support
   - Focus states
   - ARIA labels

3. **Design System**
   - CSS variable usage
   - Font families (Lexend/Manrope)
   - Spacing (Tailwind classes)
   - Colors (semantic roles)

4. **User Interaction**
   - Click events
   - Keyboard events (Enter/Space)
   - Form submissions
   - State changes

5. **Performance**
   - Render time benchmarks
   - Re-render efficiency
   - Memory usage

6. **WordPress Integration**
   - Block classes
   - theme.json mapping
   - Layout compatibility

---

## 💡 Tips

### For Development:

1. **Use watch mode:** `npm run test:watch`
2. **Filter tests:** Press `p` or `t` in watch mode
3. **Focus on one:** Use `it.only()` for single test
4. **Skip tests:** Use `it.skip()` to skip temporarily

### For CI/CD:

1. **Use:** `npm test` (runs once and exits)
2. **Coverage:** `npm run test:coverage`
3. **JUnit output:** Configure in `vitest.config.ts`

### For Debugging:

1. **Use:** `screen.debug()` to see current DOM
2. **Console log:** Available in tests
3. **VS Code:** Set breakpoints in test files

---

## 📚 Documentation

**Complete guides:**
- [TESTING-GUIDE.md](./TESTING-GUIDE.md) — Full testing documentation (5,500+ lines)
- [SESSION-COMPLETE-DEC-26-TESTING.md](./SESSION-COMPLETE-DEC-26-TESTING.md) — Session summary
- [vitest.config.ts](./vitest.config.ts) — Test configuration

**Test examples:**
- `__tests__/components/Button.test.tsx` — Example component test
- `__tests__/data/site-pages.test.ts` — Example data test

---

## ✅ Success Checklist

Before considering tests complete:

- [ ] All 280+ tests pass
- [ ] No accessibility violations
- [ ] Coverage meets targets (80%+ lines)
- [ ] All components render correctly
- [ ] All user interactions work
- [ ] Performance benchmarks pass
- [ ] WordPress integration verified

---

## 🆘 Troubleshooting

### Common Issues:

**"Cannot find module 'vitest'"**
```bash
npm install
```

**"ReferenceError: React is not defined"**
- Check setup.ts is being loaded
- Verify vitest.config.ts has React plugin

**"axe violations found"**
- This is expected - fix the accessibility issue
- Check the violation details in output

**Tests run slowly**
- Use `--reporter=dot` for faster output
- Run fewer tests with filters
- Check performance benchmarks

---

## 🎉 You're Ready!

Run your first test now:

```bash
npm run test:watch
```

Watch the tests pass! 🎉

---

**Quick Links:**
- [Full Testing Guide](./TESTING-GUIDE.md)
- [Test Configuration](./vitest.config.ts)
- [Example Tests](./__tests__/components/)

**Need Help?**
- Read the TESTING-GUIDE.md for comprehensive documentation
- Check test examples in `__tests__/` directory
- Review vitest.config.ts for configuration options
