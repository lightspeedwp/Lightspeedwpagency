# QA / Acceptance Checklist — Guidelines

**Category:** Development  
**Version:** 1.1.0  
**Last Updated:** 2026-03-11  
**Status:** Active  
**Template Used:** _templates/general-template.md  

---

## Purpose

**What:** Quality assurance checklist before marking prototype complete

**Why:** Ensure all requirements met before final delivery

**Who:** Developers, QA testers, project leads

---

## Master Checklist

Before you call the prototype "done", verify ALL items:

---

## Architecture & Patterns

### Pattern Composition

- [ ] Every template is composed from patterns
- [ ] Every pattern has a clear purpose and slug
- [ ] No one-off custom layouts found
- [ ] Pattern catalogue is complete and documented
- [ ] Patterns are reusable across multiple templates
- [ ] Empty patterns omitted (no blank space)

**Verification Method:**
```bash
# Search for non-pattern sections
grep -r "custom-section" src/app/templates/
# Should return zero results
```

---

## Design Tokens & Styling

### CSS Variables Compliance

- [ ] Tokens are used everywhere (no raw spacing/font sizes/colours)
- [ ] Zero hardcoded hex colors found
- [ ] Zero hardcoded px spacing values found
- [ ] Zero hardcoded font sizes found
- [ ] Zero hardcoded border radius values found
- [ ] Only approved fonts used (`var(--font-primary)` or `var(--font-secondary)`)
- [ ] No hardcoded font family names (e.g., 'Lexend, sans-serif')
- [ ] All colors use semantic CSS variables

**Verification Method:**
```bash
# Search for hardcoded colors
grep -r "#[0-9a-fA-F]\{6\}" src/app/components/
grep -r "rgb(" src/app/components/

# Search for hardcoded spacing
grep -r "padding.*px" src/app/components/
grep -r "margin.*px" src/app/components/

# Search for hardcoded fonts
grep -r "fontFamily.*Lexend" src/app/components/
grep -r "fontFamily.*Manrope" src/app/components/

# Should return zero results for all
```

**Manual Check:**
1. Open any CSS file in `/src/styles/`
2. Change a color variable value
3. Verify UI updates across all pages

---

## Accessibility (WCAG 2.1 AA)

### Keyboard Navigation

- [ ] All interactive elements reachable by keyboard
- [ ] Tab order is logical
- [ ] Focus states visible on all interactive elements
- [ ] No keyboard traps
- [ ] Skip links present on all pages

**Test:** Navigate entire site using keyboard only (unplug mouse)

### Screen Reader

- [ ] All components have accessible labels
- [ ] ARIA attributes used correctly
- [ ] No redundant ARIA
- [ ] Semantic HTML used (not divs for buttons)
- [ ] Alt text on all images

**Test:** Navigate with screen reader (NVDA/JAWS/VoiceOver)

### Touch Targets

- [ ] Mobile touch targets meet 44x44px minimum
- [ ] Desktop interactive elements meet minimum size
- [ ] Adequate spacing between touch targets

**Test:** Use mobile device or Chrome DevTools mobile view

### Color Contrast

- [ ] Text contrast ≥ 4.5:1 (normal text)
- [ ] Large text contrast ≥ 3:1 (18px+ or 14px+ bold)
- [ ] Interactive elements contrast ≥ 3:1
- [ ] Color not sole indicator of meaning

**Test:** Use axe DevTools or Lighthouse

### Reduced Motion

- [ ] All animations have `prefers-reduced-motion` guards
- [ ] No required animations for understanding
- [ ] Loading states visible in static mode
- [ ] Decorative animations hidden/static in reduced motion

**Test:** Enable "Reduce motion" in OS settings, verify animations disabled

---

## WordPress Compatibility

### WordPress Blocks

- [ ] All UI components map to WordPress blocks or patterns
- [ ] No non-block custom solutions
- [ ] Pattern slugs follow convention: `lsx-design/{category}/{name}`
- [ ] All patterns are editor-realistic (buildable in Gutenberg)

### Theme Integration

- [ ] System remains theme-agnostic
- [ ] Inherits `theme.json` defaults correctly
- [ ] All design tokens in `theme.json` presets
- [ ] No hardcoded theme-specific values

**Verification Method:**
- [ ] Create sample page in WordPress using only blocks/patterns
- [ ] Verify it matches prototype design

---

## Components & Utilities

### Component Documentation

- [ ] All "utility UI" components documented as non-block behaviours
- [ ] Component guidelines files exist for all custom components
- [ ] Props/API documented
- [ ] Usage examples provided

**Check files exist:**
- [ ] `/guidelines/components/ScrollBackToTop.md`
- [ ] `/guidelines/components/ScrollDownArrow.md`
- [ ] `/guidelines/components/StyleSwitcher.md`
- [ ] `/guidelines/components/LayoutSwitcher.md`

### Icons

- [ ] All icons have been verified to exist in phosphor-icons
- [ ] Icon sizes use CSS variables
- [ ] Icons have accessible labels (aria-label or sr-only text)
- [ ] Icon weights consistent (regular/bold/duotone/fill)

**Verification Method:**
```bash
# Check for non-existent icons
grep -r "import.*from 'phosphor-react'" src/
# Manually verify each import exists in phosphor-icons docs
```

---

## Responsive Design

### Breakpoints

- [ ] Mobile (320px-767px) tested
- [ ] Tablet (768px-1023px) tested
- [ ] Desktop (1024px+) tested
- [ ] All breakpoints functional
- [ ] No horizontal scroll on any breakpoint
- [ ] Touch targets appropriate for each breakpoint

**Test:** Use Chrome DevTools responsive mode for all breakpoints

### Fluid Typography

- [ ] Typography scales smoothly across breakpoints
- [ ] No text too small on mobile
- [ ] No text too large on desktop
- [ ] Line lengths comfortable (45-75 characters)

**Test:** Resize browser from 320px to 1920px, observe smooth scaling

---

## Content Resilience

### Long Content

- [ ] Long titles don't break layout (test with 100+ characters)
- [ ] Long descriptions handled gracefully
- [ ] Text overflow handled (ellipsis or wrap)
- [ ] No overlapping content

**Test:** Replace content with very long strings

### Missing Content

- [ ] Missing fields don't create visual gaps
- [ ] Empty states are explicit (message + next action)
- [ ] Optional sections can be omitted
- [ ] No broken layouts when content missing

**Test:** Remove optional content, verify layout intact

---

## Performance

### Bundle Size

- [ ] No unnecessarily large dependencies
- [ ] Images optimized
- [ ] Code split where appropriate
- [ ] Lazy loading for below-fold content

**Test:** Run Lighthouse performance audit

### Render Performance

- [ ] No layout shifts (CLS)
- [ ] Fast initial render
- [ ] Smooth animations (60fps)
- [ ] No memory leaks

**Test:** Chrome DevTools Performance tab

---

## Dark Mode

### Theme Switching

- [ ] Dark mode works on all pages
- [ ] All components support dark mode
- [ ] Color contrast maintained in dark mode
- [ ] Images/icons appropriate for both themes
- [ ] Theme preference persists

**Test:** Toggle dark mode on every page

---

## Cross-Browser Testing

### Browsers

- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)

**Test:** Visual review in all browsers

---

## Documentation

### Guidelines

- [ ] All guidelines files up to date
- [ ] No broken links in documentation
- [ ] Examples accurate and working
- [ ] Version history updated

**Verification Method:**
```bash
# Check for broken markdown links
find guidelines/ -name "*.md" -exec grep -l "\[.*\](.*)" {} \;
# Manually verify each link works
```

### Implementation Status

- [ ] `/docs/implementation-status.md` updated
- [ ] Milestone completion documented
- [ ] Known issues listed
- [ ] Next steps identified

---

## Automated Tests

### Test Suites

- [ ] Unit tests passing
- [ ] Integration tests passing
- [ ] Accessibility tests passing
- [ ] Visual regression tests passing (if applicable)

**Run:**
```bash
npm test
npm run test:a11y
```

---

## Final Sign-Off

### Project Leads

- [ ] Design lead approval
- [ ] Development lead approval
- [ ] Accessibility audit passed
- [ ] Client/stakeholder approval

### Documentation

- [ ] Handoff documentation complete
- [ ] WordPress implementation guide ready
- [ ] Design system documentation ready
- [ ] Training materials prepared (if applicable)

---

## Conditional Requirements

### If Using External APIs

- [ ] Mock data provided
- [ ] API error states handled
- [ ] Loading states implemented
- [ ] API keys documented (placeholder values)

### If Using Forms

- [ ] Form validation working
- [ ] Error messages accessible
- [ ] Success states implemented
- [ ] Form submission handled (mock or real)

### If Using Animations

- [ ] All animations have reduced-motion guards
- [ ] No flashing content >3x/second
- [ ] Animations enhance (not required for) understanding

---

## Issue Tracking

**If ANY checklist item fails:**

1. Create issue in task list
2. Document failure details
3. Assign owner
4. Set priority (P0-P3)
5. Track until resolved

**Location:** `/tasks/task-list.md`

---

## Acceptance Criteria

**Prototype is "DONE" when:**

- ✅ 100% of checklist items pass
- ✅ Zero critical issues (P0)
- ✅ Zero high-priority issues (P1)
- ✅ All stakeholders approve
- ✅ Documentation complete

---

## Related Guidelines

**See Also:**
- [build-rules.md](./build-rules.md) - Prototype build rules
- [project-goals.md](./project-goals.md) - Project goals & success criteria
- [accessibility.md](./accessibility.md) - WCAG 2.1 AA requirements
- [/docs/implementation-status.md](/docs/implementation-status.md) - Current status

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | March 11, 2026 | Extracted from Guidelines.md |

---

**Category:** Quality Assurance  
**Enforcement:** Required for sign-off  
**Last Updated:** March 11, 2026
