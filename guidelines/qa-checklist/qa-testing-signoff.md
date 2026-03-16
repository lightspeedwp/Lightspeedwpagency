# QA Checklist — Testing, Performance & Sign-Off

**Category:** Development  
**Version:** 1.2.0  
**Last Updated:** 2026-03-15  
**Status:** Active  
**Parent:** [qa-checklist.md](../qa-checklist.md)  

---

## Responsive Design

### Breakpoints

- [ ] Mobile (320px-767px) tested
- [ ] Tablet (768px-1023px) tested
- [ ] Desktop (1024px+) tested
- [ ] All breakpoints functional
- [ ] No horizontal scroll on any breakpoint
- [ ] Touch targets appropriate for each breakpoint

### Fluid Typography

- [ ] Typography scales smoothly across breakpoints
- [ ] No text too small on mobile
- [ ] No text too large on desktop
- [ ] Line lengths comfortable (45-75 characters)

---

## Content Resilience

### Long Content

- [ ] Long titles don't break layout (test with 100+ characters)
- [ ] Long descriptions handled gracefully
- [ ] Text overflow handled (ellipsis or wrap)
- [ ] No overlapping content

### Missing Content

- [ ] Missing fields don't create visual gaps
- [ ] Empty states are explicit (message + next action)
- [ ] Optional sections can be omitted
- [ ] No broken layouts when content missing

---

## Performance

### Bundle Size

- [ ] No unnecessarily large dependencies
- [ ] Images optimized
- [ ] Code split where appropriate
- [ ] Lazy loading for below-fold content

### Render Performance

- [ ] No layout shifts (CLS)
- [ ] Fast initial render
- [ ] Smooth animations (60fps)
- [ ] No memory leaks

---

## Dark Mode

### Theme Switching

- [ ] Dark mode works on all pages
- [ ] All components support dark mode
- [ ] Color contrast maintained in dark mode
- [ ] Images/icons appropriate for both themes
- [ ] Theme preference persists

---

## Cross-Browser Testing

- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)

---

## Documentation

### Guidelines

- [ ] All guidelines files up to date
- [ ] No broken links in documentation
- [ ] Examples accurate and working
- [ ] Version history updated

### Implementation Status

- [ ] `/docs/implementation-status.md` updated
- [ ] Milestone completion documented
- [ ] Known issues listed
- [ ] Next steps identified

---

## Automated Tests

- [ ] Unit tests passing
- [ ] Integration tests passing
- [ ] Accessibility tests passing
- [ ] Visual regression tests passing (if applicable)

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

- 100% of checklist items pass
- Zero critical issues (P0)
- Zero high-priority issues (P1)
- All stakeholders approve
- Documentation complete

---

**See also:** [qa-design-accessibility.md](./qa-design-accessibility.md)
