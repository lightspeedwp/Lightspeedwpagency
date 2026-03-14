# Guidelines Reorganization Orchestrator

**Date Created:** March 11, 2026  
**Purpose:** Systematically reorganize and consolidate 500+ guidelines files  
**Target:** Reduce main Guidelines.md to <400 lines, consolidate design-tokens, merge duplicates  
**Status:** READY TO EXECUTE

---

## Executive Summary

The `/guidelines/` directory has grown to 500+ files with significant duplication, inconsistent structure, and unclear organization. This orchestrator provides a systematic approach to:

1. **Consolidate design-tokens** (15 core files from 30+ duplicates)
2. **Reduce Guidelines.md** (<400 lines from current size)
3. **Merge development guidelines** (1 CSS file from 3)
4. **Consolidate interactions** (into animations.md)
5. **Merge mobile guidelines** (into responsive.md + touch-targets.md)
6. **Consolidate routing** (into routes.md)
7. **Create templates** (7 standardized templates)

**Expected Impact:**
- ~300-400 files eliminated through consolidation
- Main Guidelines.md 60-70% smaller
- Clear, predictable file structure
- Zero content loss (moved, not deleted)

---

## Critical Guard Rails

### ⚠️ DELETION RULES (NON-NEGOTIABLE)

**NEVER delete a file BEFORE:**
1. ✅ Creating new target file(s)
2. ✅ Moving ALL content to new location(s)
3. ✅ Updating ALL cross-references
4. ✅ Verifying content preserved
5. ✅ Testing links work

**ALWAYS:**
- Move first, delete second
- Preserve ALL content (even if restructured)
- Update cross-references immediately
- Document what was merged where

---

## Phase 1: Create Templates (2-3 hours)

**Status:** ✅ IN PROGRESS (1/8 complete)

### Tasks

- [x] **Task 1.1:** Create `/guidelines/_templates.md` usage guide
- [x] **Task 1.2:** Create `design-token-template.md`
- [ ] **Task 1.3:** Create `component-template.md`
- [ ] **Task 1.4:** Create `general-template.md`
- [ ] **Task 1.5:** Create `report-template.md`
- [ ] **Task 1.6:** Create `prompt-template.md`
- [ ] **Task 1.7:** Create `task-list-template.md`
- [ ] **Task 1.8:** Create `docs-template.md`

**Deliverables:**
- 7 template files in `/guidelines/_templates/`
- 1 usage guide (`_templates.md`)

---

## Phase 2: Audit Main Guidelines.md (3-4 hours)

**Status:** 🔴 NOT STARTED

### Objective
Reduce `/guidelines/Guidelines.md` from current size to <400 lines

### Tasks

- [ ] **Task 2.1:** Read complete Guidelines.md (count lines, identify sections)
- [ ] **Task 2.2:** Create section inventory (map where each section could move)
- [ ] **Task 2.3:** Identify extraction targets (sections >50 lines that can be separate files)
- [ ] **Task 2.4:** Create extraction plan (list new files to create)
- [ ] **Task 2.5:** Execute extractions (create new files, move content, update references)
- [ ] **Task 2.6:** Verify Guidelines.md <400 lines

**Success Criteria:**
- Guidelines.md <400 lines
- All extracted content in new dedicated files
- All cross-references updated
- Zero content loss

---

## Phase 3: Consolidate Design Tokens (6-8 hours)

**Status:** 🔴 NOT STARTED

### Target Structure (15 Core Files)

**MUST HAVE:**
1. `animations.md` - All animation tokens + interactions merge
2. `borders.md` - Border widths, styles + border-presets merge
3. `buttons.md` - Button tokens, sizes, variants
4. `colors.md` - Color system, semantic colors
5. `dark-light-mode.md` - Theme switching + dark-mode-styles merge
6. `forms.md` - Form field tokens, validation states
7. `funky-design.md` - Neon/funky aesthetic + funky-page-design-system merge
8. `iconography.md` - Icon sizing, spacing, usage
9. `navigation.md` - Nav component tokens
10. `radii.md` - Border radius scale
11. `responsive.md` - Breakpoints, fluid typography + responsive-utilities + viewport-enhancements + mobile merges
12. `shadows.md` - Box shadow scale
13. `spacing.md` - Spacing scale, gap tokens
14. `touch-targets.md` - Minimum sizes, mobile interaction
15. `typography.md` - Font scale, weights, line-height + typography-fittext-update merge

### Files to Merge

**Into animations.md:**
- `/guidelines/interactions/animations.md`
- `/guidelines/interactions/animation-standards.md`
- `/guidelines/interactions/animation-system.md`
- `/guidelines/interactions/reduced-motion-guidelines.md`
- `/guidelines/design-tokens/animation-standards.md` (if exists)

**Into borders.md:**
- `/guidelines/design-tokens/border-presets.md`

**Into dark-light-mode.md:**
- `/guidelines/design-tokens/dark-mode-styles.md`
- `/guidelines/design-tokens/light-and-dark-mode-guidelines.md`
- `/guidelines/design-tokens/dark-light-guidelines.md` (if exists)

**Into funky-design.md:**
- `/guidelines/design-tokens/funky-page-design-system.md`
- `/guidelines/design-tokens/funky-theme.md` (if exists)

**Into responsive.md:**
- `/guidelines/design-tokens/responsive-utilities.md`
- `/guidelines/design-tokens/viewport-enhancements.md`
- `/guidelines/mobile/breakpoints.md` (if exists)
- `/guidelines/mobile/fluid-typography.md` (if exists)
- `/guidelines/mobile/responsive.md` (if exists)

**Into typography.md:**
- `/guidelines/design-tokens/typography-fittext-update.md`

**Into touch-targets.md:**
- `/guidelines/mobile/touch-targets.md`
- `/guidelines/accessibility/touch-targets.md` (if exists)

**Distribute wordpress-presets.md:**
- Color presets → `colors.md`
- Spacing presets → `spacing.md`
- Typography presets → `typography.md`
- Other presets → respective token files

### Tasks

- [ ] **Task 3.1:** Inventory all design-tokens files (create complete list)
- [ ] **Task 3.2:** Create merge plan (map source files → target files)
- [ ] **Task 3.3:** Create 15 core token files (use design-token-template.md)
- [ ] **Task 3.4:** Merge animations + interactions (execute merge)
- [ ] **Task 3.5:** Merge borders + border-presets
- [ ] **Task 3.6:** Merge dark-light-mode files
- [ ] **Task 3.7:** Merge funky-design files
- [ ] **Task 3.8:** Merge responsive + mobile files
- [ ] **Task 3.9:** Merge typography files
- [ ] **Task 3.10:** Merge touch-targets files
- [ ] **Task 3.11:** Distribute wordpress-presets.md
- [ ] **Task 3.12:** Delete old files (ONLY after content moved)
- [ ] **Task 3.13:** Update all cross-references
- [ ] **Task 3.14:** Verify 15 core files exist and complete

**Success Criteria:**
- Exactly 15 design-tokens files
- All old files deleted (after content moved)
- All cross-references updated
- Zero content loss
- Each file follows design-token-template.md structure

---

## Phase 4: Consolidate Development Guidelines (2-3 hours)

**Status:** 🔴 NOT STARTED

### Target Structure

**Option A: Single CSS File**
- `/guidelines/design-tokens/css-variables.md` (all development content)

**Option B: Two Files**
- `/guidelines/design-tokens/css-variables.md` (CSS variables, architecture)
- `/guidelines/development/bem-naming.md` (BEM conventions only)

### Files to Merge

**Into css-variables.md (or equivalent):**
- `/guidelines/development/css-guidelines.md`
- `/guidelines/development/css-memory-optimization.md`
- `/guidelines/development/css-architecture.md`
- `/guidelines/development/css-import-strategy.md`
- `/guidelines/development/css-file-structure.md`
- `/guidelines/development/css-variable-compliance-report.md`
- `/guidelines/development/bem-naming-conventions.md` (if merging into one file)

### Tasks

- [ ] **Task 4.1:** Inventory development files
- [ ] **Task 4.2:** Decide structure (1 file vs 2 files)
- [ ] **Task 4.3:** Create target file(s)
- [ ] **Task 4.4:** Merge all development content
- [ ] **Task 4.5:** Delete old files
- [ ] **Task 4.6:** Update cross-references

**Success Criteria:**
- 1-2 development files (down from 7+)
- All content preserved
- Clear BEM guidelines
- CSS variable standards documented

---

## Phase 5: Consolidate Routing (1 hour)

**Status:** 🔴 NOT STARTED

### Target Structure

**Single file:**
- `/guidelines/routes.md`

### Files to Merge

**Into routes.md:**
- `/guidelines/routing/routes.md`
- `/guidelines/site-structure/routes.md` (if exists)
- Any other routing-related files

### Tasks

- [ ] **Task 5.1:** Inventory routing files
- [ ] **Task 5.2:** Create `/guidelines/routes.md`
- [ ] **Task 5.3:** Merge all routing content
- [ ] **Task 5.4:** Delete `/guidelines/routing/` folder
- [ ] **Task 5.5:** Update cross-references

**Success Criteria:**
- 1 routes.md file at guidelines root
- No routing folder
- All routing content consolidated

---

## Phase 6: Update Main Guidelines.md References (2 hours)

**Status:** 🔴 NOT STARTED

### Objective
Update Guidelines.md to reference new consolidated structure

### Tasks

- [ ] **Task 6.1:** Update design-tokens references (point to 15 core files)
- [ ] **Task 6.2:** Update development references (point to css-variables.md or equivalent)
- [ ] **Task 6.3:** Update routing references (point to routes.md)
- [ ] **Task 6.4:** Update reading order (reflect new structure)
- [ ] **Task 6.5:** Verify all links work

**Success Criteria:**
- All internal links work
- Reading order makes sense
- References point to correct new locations

---

## Phase 7: Verification & Cleanup (2-3 hours)

**Status:** 🔴 NOT STARTED

### Tasks

- [ ] **Task 7.1:** Verify file count reduction (before vs after)
- [ ] **Task 7.2:** Verify Guidelines.md <400 lines
- [ ] **Task 7.3:** Verify 15 design-tokens files exist
- [ ] **Task 7.4:** Verify all old files deleted
- [ ] **Task 7.5:** Verify zero broken links
- [ ] **Task 7.6:** Create completion report
- [ ] **Task 7.7:** Update DOCUMENTATION-INDEX.md

**Success Criteria:**
- 300-400 files eliminated
- Guidelines.md <400 lines
- Clean file structure
- Zero broken links
- Comprehensive completion report

---

## Implementation Strategy

### Execution Order

**Week 1:**
1. Phase 1: Create Templates (Day 1)
2. Phase 2: Audit Guidelines.md (Days 2-3)

**Week 2:**
3. Phase 3: Consolidate Design Tokens (Days 1-4)
4. Phase 4: Consolidate Development (Day 5)

**Week 3:**
5. Phase 5: Consolidate Routing (Day 1)
6. Phase 6: Update References (Days 2-3)
7. Phase 7: Verification (Days 4-5)

**Total Time:** 18-26 hours across 3 weeks

---

## Risk Mitigation

### Risk 1: Content Loss
**Mitigation:** Always move before delete, create merge reports documenting source → target

### Risk 2: Broken Links
**Mitigation:** Update cross-references immediately after each merge, verify before deletion

### Risk 3: Duplicate Work
**Mitigation:** Complete file inventory before any merges, use checklist to track progress

### Risk 4: Unclear Structure
**Mitigation:** Follow templates strictly, maintain consistent file naming

---

## Success Metrics

### Quantitative

| Metric | Before | Target | Status |
|--------|--------|--------|--------|
| **Total Guidelines Files** | ~500 | ~200 | 🔴 TBD |
| **Design Tokens Files** | ~30 | 15 | 🔴 TBD |
| **Development Files** | ~7 | 1-2 | 🔴 TBD |
| **Guidelines.md Lines** | ~2000+ | <400 | 🔴 TBD |
| **Broken Links** | Unknown | 0 | 🔴 TBD |

### Qualitative

- ✅ Clear, predictable file structure
- ✅ Easy to find specific guidelines
- ✅ Consistent formatting across all files
- ✅ Zero content duplication
- ✅ All templates used correctly

---

## Completion Checklist

**Phase 1: Templates**
- [ ] 7 template files created
- [ ] _templates.md usage guide created

**Phase 2: Guidelines.md Audit**
- [ ] Section inventory complete
- [ ] Extraction plan created
- [ ] New files created
- [ ] Content moved
- [ ] Guidelines.md <400 lines

**Phase 3: Design Tokens**
- [ ] 15 core token files created
- [ ] All interactions merged into animations.md
- [ ] All mobile merged into responsive.md + touch-targets.md
- [ ] All old files deleted
- [ ] Cross-references updated

**Phase 4: Development**
- [ ] CSS guidelines consolidated (1-2 files)
- [ ] BEM guidelines accessible
- [ ] Old files deleted

**Phase 5: Routing**
- [ ] routes.md created at guidelines root
- [ ] All routing content merged
- [ ] Routing folder deleted

**Phase 6: References**
- [ ] All Guidelines.md links updated
- [ ] Reading order updated
- [ ] Zero broken links

**Phase 7: Verification**
- [ ] File count reduction verified
- [ ] All success criteria met
- [ ] Completion report created
- [ ] DOCUMENTATION-INDEX.md updated

---

## Next Steps

**Immediate (Current Session):**
1. Complete Phase 1 (create remaining templates)
2. Begin Phase 2 (audit Guidelines.md)

**Short-Term (This Week):**
3. Complete Phase 2 (extract sections from Guidelines.md)
4. Begin Phase 3 (consolidate design-tokens)

**Medium-Term (Next 2 Weeks):**
5. Complete Phase 3-7 (all consolidation + verification)

---

**Orchestrator Status:** READY TO EXECUTE  
**Created:** March 11, 2026  
**Last Updated:** March 11, 2026  
**Estimated Completion:** 3 weeks (18-26 hours)
