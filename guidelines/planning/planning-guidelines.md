# Planning Guidelines

## 🎯 **PURPOSE**

This document defines the standards for creating, naming, and organizing all planning documents (`.md` files) in the LSX Design system.

**Goals:**
- Structured planning process
- Clear documentation of intentions
- Easy tracking of planned features
- Consistent planning format
- Maintainable planning system

---

## 📁 **MANDATORY LOCATION**

**ALL planning documents MUST be stored in:**

```
/planning/
```

**❌ NEVER store planning documents in:**
- Root directory (`/`)
- `/reports/` (for completed work only)
- `/guidelines/` (for permanent standards)
- Any other location

---

## 📂 **DIRECTORY STRUCTURE**

```
planning/
├── features/                  # Feature planning documents
├── migrations/                # Migration planning documents
├── architecture/              # Architecture planning documents
├── design/                    # Design planning documents
├── optimization/              # Optimization planning documents
├── refactoring/               # Refactoring planning documents
├── testing/                   # Testing planning documents
└── archive/                   # Archived/completed plans
```

---

## 📝 **NAMING CONVENTIONS**

### **Format:**

```
YYYY-MM-DD-planning-[topic].md
```

### **Components:**

1. **Date:** `YYYY-MM-DD` (ISO 8601 format) — **MUST BE FIRST**
2. **Identifier:** `planning` — **MANDATORY**
3. **Topic:** Brief, descriptive, hyphen-separated

### **Examples:**

✅ **CORRECT:**
```
2025-01-09-planning-button-migration.md
2025-01-10-planning-new-feature-modal.md
2025-01-15-planning-performance-optimization.md
```

❌ **INCORRECT:**
```
BUTTON-MIGRATION-PLAN.md              # Missing date
button-migration-plan-jan-9.md        # Date at end
2025-1-9-planning-buttons.md          # Inconsistent date format
ButtonMigrationPlan.md                # Wrong case
plan-button-migration.md              # Missing date
```

---

## 📋 **STANDARD PLANNING TEMPLATE**

### **Template:**

```markdown
# [Feature/Project Name] — Planning

## 🎯 **OVERVIEW**

**Planning Date:** YYYY-MM-DD  
**Status:** 📋 Planning / 🚧 In Progress / ✅ Complete  
**Priority:** High / Medium / Low  
**Complexity:** High / Medium / Low  
**Estimated Time:** X hours/days

**Brief 1-2 sentence description of what will be built.**

---

## 🎯 **GOALS**

### **Primary Goals:**
1. Goal 1
2. Goal 2
3. Goal 3

### **Success Criteria:**
- [ ] Criterion 1
- [ ] Criterion 2
- [ ] Criterion 3

---

## 📊 **REQUIREMENTS**

### **Functional Requirements:**
1. Requirement 1
2. Requirement 2

### **Technical Requirements:**
1. Requirement 1
2. Requirement 2

### **Design Requirements:**
1. Requirement 1
2. Requirement 2

---

## 🏗️ **ARCHITECTURE**

### **Components to Create:**
1. Component 1 (`/path/to/component.tsx`)
2. Component 2 (`/path/to/component.tsx`)

### **Components to Modify:**
1. Component 1 (`/path/to/component.tsx`)
2. Component 2 (`/path/to/component.tsx`)

### **Components to Delete:**
1. Component 1 (`/path/to/component.tsx`)

---

## 📐 **DESIGN SYSTEM COMPLIANCE**

### **Colors:**
```tsx
// Use CSS variables
backgroundColor: 'var(--primary)'
color: 'var(--primary-foreground)'
```

### **Typography:**
```tsx
// Use CSS variables
fontFamily: 'var(--font-primary)'
fontSize: 'var(--text-base)'
```

### **Spacing:**
```tsx
// Use Tailwind classes OR CSS variables
className="p-6 gap-4"
padding: 'var(--spacing-6)'
```

---

## 🔄 **IMPLEMENTATION PHASES**

### **Phase 1: [Name]** (X hours)
- [ ] Task 1
- [ ] Task 2
- [ ] Task 3

### **Phase 2: [Name]** (X hours)
- [ ] Task 1
- [ ] Task 2

### **Phase 3: [Name]** (X hours)
- [ ] Task 1
- [ ] Task 2

---

## 📁 **FILES**

### **Will Create:**
- `/path/to/new-file.tsx` — Description
- `/path/to/new-file.ts` — Description

### **Will Modify:**
- `/path/to/existing-file.tsx` — Description of changes

### **Will Delete:**
- `/path/to/old-file.tsx` — Reason for deletion

---

## 🧪 **TESTING PLAN**

### **Unit Tests:**
- [ ] Test 1
- [ ] Test 2

### **Integration Tests:**
- [ ] Test 1
- [ ] Test 2

### **Manual Testing:**
- [ ] Test 1
- [ ] Test 2

---

## ⚠️ **RISKS & MITIGATIONS**

### **Risk 1:**
**Risk:** Description  
**Impact:** High / Medium / Low  
**Mitigation:** How to mitigate

### **Risk 2:**
**Risk:** Description  
**Impact:** High / Medium / Low  
**Mitigation:** How to mitigate

---

## 📚 **DEPENDENCIES**

### **Requires Completion of:**
1. Dependency 1
2. Dependency 2

### **Blocks:**
1. Task 1
2. Task 2

---

## 🎯 **ACCEPTANCE CRITERIA**

- [ ] Acceptance criterion 1
- [ ] Acceptance criterion 2
- [ ] Acceptance criterion 3
- [ ] All tests pass
- [ ] Design system compliance: 100%
- [ ] Accessibility: WCAG 2.1 AA
- [ ] Performance: No regression
- [ ] Documentation: Complete

---

## 📊 **ESTIMATED TIMELINE**

| Phase | Time | Dependencies |
|-------|------|--------------|
| Phase 1 | X hours | None |
| Phase 2 | X hours | Phase 1 |
| Phase 3 | X hours | Phase 2 |
| **Total** | **X hours** | |

---

## 🚀 **POST-IMPLEMENTATION**

### **Report Location:**
```
/reports/[category]/YYYY-MM-DD-[topic]-complete.md
```

### **Documentation Updates:**
- [ ] Update Guidelines.md
- [ ] Update relevant component docs
- [ ] Update DOCUMENTATION-INDEX.md

---

**Last Updated:** YYYY-MM-DD  
**Planner:** LSX Design Team  
**Status:** 📋 Planning
```

---

## 🗂️ **PLANNING CATEGORIES**

### **1. Features** (`/planning/features/`)

**Purpose:** New feature planning

**Examples:**
- `2025-01-09-planning-user-authentication.md`
- `2025-01-10-planning-dark-mode-toggle.md`
- `2025-01-15-planning-search-functionality.md`

---

### **2. Migrations** (`/planning/migrations/`)

**Purpose:** Component/system migration planning

**Examples:**
- `2025-01-09-planning-button-migration.md`
- `2025-01-10-planning-tailwind-to-css.md`
- `2025-01-15-planning-react-18-upgrade.md`

---

### **3. Architecture** (`/planning/architecture/`)

**Purpose:** System architecture planning

**Examples:**
- `2025-01-09-planning-global-styles-system.md`
- `2025-01-10-planning-state-management.md`
- `2025-01-15-planning-routing-refactor.md`

---

### **4. Design** (`/planning/design/`)

**Purpose:** Design system planning

**Examples:**
- `2025-01-09-planning-color-system-update.md`
- `2025-01-10-planning-typography-scale.md`
- `2025-01-15-planning-component-library.md`

---

### **5. Optimization** (`/planning/optimization/`)

**Purpose:** Performance and optimization planning

**Examples:**
- `2025-01-09-planning-bundle-size-reduction.md`
- `2025-01-10-planning-image-optimization.md`
- `2025-01-15-planning-lazy-loading.md`

---

### **6. Refactoring** (`/planning/refactoring/`)

**Purpose:** Code refactoring planning

**Examples:**
- `2025-01-09-planning-component-cleanup.md`
- `2025-01-10-planning-prop-standardization.md`
- `2025-01-15-planning-type-safety.md`

---

### **7. Testing** (`/planning/testing/`)

**Purpose:** Testing strategy planning

**Examples:**
- `2025-01-09-planning-unit-test-coverage.md`
- `2025-01-10-planning-e2e-testing.md`
- `2025-01-15-planning-accessibility-testing.md`

---

## ✅ **PLANNING WORKFLOW**

### **Step 1: Create Plan**

1. Determine category
2. Create file in `/planning/[category]/`
3. Use standard template
4. Fill in all sections

---

### **Step 2: Review Plan**

1. Verify completeness
2. Check design system compliance
3. Validate timeline estimates
4. Review with team (if applicable)

---

### **Step 3: Implement**

1. Follow phases as planned
2. Update status as you progress
3. Track completed tasks

---

### **Step 4: Complete**

1. Verify all acceptance criteria met
2. Create completion report in `/reports/`
3. Move plan to `/planning/archive/`
4. Update documentation

---

## 📊 **STATUS INDICATORS**

Use these status indicators in planning documents:

```markdown
**Status:** 📋 Planning          # Initial planning phase
**Status:** 🚧 In Progress       # Implementation started
**Status:** ✅ Complete          # Fully implemented
**Status:** ⏸️ On Hold           # Temporarily paused
**Status:** ❌ Cancelled         # Plan cancelled
```

---

## 🚫 **COMMON MISTAKES TO AVOID**

### **❌ WRONG: Creating Plans in Root**

```
/MY-PLAN.md  ← WRONG LOCATION
```

### **✅ CORRECT: Creating Plans in /planning/**

```
/planning/features/2025-01-09-planning-my-feature.md  ← CORRECT
```

---

### **❌ WRONG: Missing Date Prefix**

```
planning-button-migration.md
button-migration-plan.md
```

### **✅ CORRECT: Date-First Naming**

```
2025-01-09-planning-button-migration.md
```

---

### **❌ WRONG: Using Reports Folder**

```
/reports/planning/my-plan.md  ← WRONG
```

**Why wrong:** Reports are for completed work, not plans.

---

## 📋 **PLANNING CHECKLIST**

Before finalizing a plan:

- [ ] Stored in correct `/planning/` subdirectory
- [ ] Uses correct naming convention (`YYYY-MM-DD-planning-[topic].md`)
- [ ] Has date prefix
- [ ] Uses standard template
- [ ] All sections completed
- [ ] Goals clearly defined
- [ ] Success criteria measurable
- [ ] Timeline estimated
- [ ] Risks identified
- [ ] Design system compliance noted
- [ ] Testing plan included
- [ ] Acceptance criteria defined

---

## 🔄 **PLAN LIFECYCLE**

```
1. Create Plan (/planning/[category]/
   ↓
2. Review & Refine
   ↓
3. Approve (update status to 🚧)
   ↓
4. Implement (follow phases)
   ↓
5. Complete (all criteria met)
   ↓
6. Create Report (/reports/[category]/)
   ↓
7. Archive Plan (/planning/archive/)
   ↓
8. Update Documentation
```

---

## 📚 **PLANNING vs REPORTING**

### **PLANNING = Future Work**

**Characteristics:**
- ✅ Defines what will be built
- ✅ Estimates time and complexity
- ✅ Identifies risks
- ✅ Stored in `/planning/`
- ✅ Status: 📋 Planning or 🚧 In Progress

**Examples:**
- Feature specifications
- Migration strategies
- Architecture proposals

---

### **REPORTING = Completed Work**

**Characteristics:**
- ✅ Documents what was completed
- ✅ Tracks actual time spent
- ✅ Lists changes made
- ✅ Stored in `/reports/`
- ✅ Status: ✅ Complete

**Examples:**
- Session summaries
- Migration completion reports
- Audit results

---

## 🎯 **DESIGN SYSTEM COMPLIANCE IN PLANS**

### **MANDATORY: Include Design System Section**

Every plan MUST include how it will comply with design system:

```markdown
## 📐 **DESIGN SYSTEM COMPLIANCE**

### **Colors:**
All colors will use CSS variables:
- Primary: `var(--primary)`
- Background: `var(--background)`

### **Typography:**
All typography will use:
- Font family: `var(--font-primary)` (Lexend) or `var(--font-secondary)` (Manrope)
- Font sizes: `var(--text-*)` variables

### **Spacing:**
All spacing will use:
- Tailwind classes: `p-6`, `gap-4`, `mb-8`
- OR CSS variables: `var(--spacing-6)`
```

---

## ✅ **QUALITY CHECKLIST**

Before implementation:

- [ ] Plan is complete and detailed
- [ ] Timeline is realistic
- [ ] Dependencies identified
- [ ] Risks documented
- [ ] Testing strategy defined
- [ ] Design system compliance clear
- [ ] Acceptance criteria measurable
- [ ] File locations specified
- [ ] Post-implementation steps defined

---

## 📖 **EXAMPLE PLAN**

See below for a complete example plan:

```markdown
# Button Migration to WordPress FSE — Planning

## 🎯 **OVERVIEW**

**Planning Date:** 2025-01-09  
**Status:** 📋 Planning  
**Priority:** High  
**Complexity:** Medium  
**Estimated Time:** 4-6 hours

Migrate all buttons from `onClick` navigation to WordPress FSE-compatible pattern using `page` and `href` props.

---

## 🎯 **GOALS**

### **Primary Goals:**
1. Convert all buttons to WordPress FSE pattern
2. Maintain 100% functionality
3. Zero breaking changes

### **Success Criteria:**
- [ ] All buttons use `page` or `href` props
- [ ] Zero `onClick` navigation handlers
- [ ] All navigation functional
- [ ] SEO-friendly (crawlable links)

---

## 📊 **REQUIREMENTS**

### **Functional Requirements:**
1. All buttons must navigate correctly
2. External links must open in new tab
3. Internal navigation must update route

### **Technical Requirements:**
1. Use `useNavigation()` hook for navigation
2. Use `page` prop for internal routes
3. Use `href` prop for external links
4. Maintain icon support

### **Design Requirements:**
1. No visual changes to buttons
2. Maintain hover states
3. Keep accessibility (WCAG 2.1 AA)

---

## 🏗️ **ARCHITECTURE**

### **Components to Modify:**
1. `/src/app/components/blocks/theme/Buttons.tsx`
2. All templates using buttons (49 buttons across 14 templates)

---

## 🔄 **IMPLEMENTATION PHASES**

### **Phase 1: Update Button Component** (1 hour)
- [ ] Add `page` prop support
- [ ] Add `href` prop support
- [ ] Implement navigation logic
- [ ] Test button component

### **Phase 2: Migrate Templates** (3 hours)
- [ ] Service templates (6 templates)
- [ ] Solution templates (3 templates)
- [ ] Industry templates (5 templates)

### **Phase 3: Verification** (1 hour)
- [ ] Test all navigation
- [ ] Verify SEO compliance
- [ ] Check accessibility
- [ ] Document changes

---

## 📁 **FILES**

### **Will Modify:**
- `/src/app/components/blocks/theme/Buttons.tsx` — Add page/href props
- 14 template files — Replace onClick with page prop

---

## 🧪 **TESTING PLAN**

### **Manual Testing:**
- [ ] Test all button navigation
- [ ] Verify external links
- [ ] Check mobile responsiveness
- [ ] Test keyboard navigation

---

## 🎯 **ACCEPTANCE CRITERIA**

- [ ] All buttons use page/href props
- [ ] Zero onClick handlers for navigation
- [ ] 100% navigation functional
- [ ] SEO-friendly (crawlable links)
- [ ] Accessibility: WCAG 2.1 AA
- [ ] Zero breaking changes

---

**Last Updated:** 2025-01-09  
**Planner:** LSX Design Team  
**Status:** 📋 Planning
```

---

## 🎉 **SUMMARY**

**Where to create plans:**
```
✅ /planning/[category]/
❌ / (root)
❌ /reports/
```

**How to name plans:**
```
✅ YYYY-MM-DD-planning-[topic].md
❌ plan-[topic].md
❌ [topic]-plan.md
```

**What to include:**
```
✅ Overview with status
✅ Goals and success criteria
✅ Requirements
✅ Architecture
✅ Implementation phases
✅ Testing plan
✅ Risks and mitigations
✅ Acceptance criteria
✅ Design system compliance
```

---

**Last Updated:** 2025-01-09  
**Status:** ✅ Active  
**Enforcement:** Mandatory for all planning documents