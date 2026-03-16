# Reporting Guidelines — Template, Workflow & Reference

**Category:** Development  
**Version:** 1.2.0  
**Last Updated:** 2026-03-15  
**Status:** Active  
**Parent:** [reporting.md](../reporting.md)  

---

## Standard Report Template

Every report should follow this structure:

```markdown
# [Report Title] — [Date]

## Summary

**Date:** YYYY-MM-DD  
**Status:** Complete / In Progress  
**Category:** [Category Name]  
**Impact:** High / Medium / Low

Brief 1-2 sentence summary of what was accomplished.

---

## What Was Completed

### 1. [Task/Feature Name]

**Details:**
- Bullet point 1
- Bullet point 2

**Result:** Brief description of the outcome

---

## Statistics

| Metric | Before | After | Change |
|--------|--------|-------|--------|
| **Files Created** | 0 | 10 | +10 |
| **Files Modified** | 0 | 5 | +5 |
| **Files Deleted** | 0 | 3 | +3 |
| **Lines Added** | 0 | 1,000 | +1,000 |

---

## Key Benefits

### 1. Benefit Name
**Before:** Description  
**After:** Description  
**Result:** Impact description

---

## Files Created

1. `/path/to/file1.tsx` — Description
2. `/path/to/file2.ts` — Description

## Files Modified

1. `/path/to/file1.tsx` — Changes made

## Files Deleted

1. `/path/to/old-file1.tsx` — Reason

---

## Compliance Scorecard

| Requirement | Status |
|-------------|--------|
| **CSS variables usage** | 100% |
| **Design token compliance** | 100% |
| **WordPress compatibility** | 100% |
| **Accessibility (WCAG 2.1 AA)** | 100% |

---

## Next Steps

### Immediate
- [ ] Task 1
- [ ] Task 2

### Future
- [ ] Task 3

---

**Last Updated:** YYYY-MM-DD  
**Author:** LSX Design Team  
**Production Ready:** Yes / Pending
```

---

## Report Creation Checklist

Before finalizing a report:

- [ ] Stored in correct `/reports/` subdirectory
- [ ] Uses correct naming convention (`YYYY-MM-DD-description.md`)
- [ ] Has date prefix in filename
- [ ] Uses standard template structure
- [ ] Summary section completed
- [ ] Statistics included (if applicable)
- [ ] Files created/modified/deleted listed
- [ ] Benefits documented
- [ ] Compliance scorecard included
- [ ] Next steps defined (if applicable)

---

## Finding Reports

**By Date:**
```bash
find /reports -name "2025-01-*.md"
find /reports -name "2025-01-09-*.md"
```

**By Category:**
```bash
ls /reports/architecture/
ls /reports/wordpress/
```

**By Keyword:**
```bash
find /reports -name "*button*.md"
find /reports -name "*migration*.md"
```

---

## Reports vs Guidelines vs Planning

### Reports = Completed Work
- Documents what WAS completed
- Tracks actual time spent, lists actual changes made
- Stored in `/reports/`

### Guidelines = Permanent Standards
- Defines how to do things
- Permanent reference documentation
- Stored in `/guidelines/`

### Planning = Future Work
- Defines what WILL be built
- Estimates time and complexity
- Stored in `/planning/`

---

## Workflow

```
1. Create Plan (/planning/)
   ↓
2. Implement work
   ↓
3. Create Report (/reports/)
   ↓
4. Update Guidelines (if needed) (/guidelines/)
```

---

## Quick Reference

**Report Location:** `/reports/[category]/YYYY-MM-DD-description.md`

| Category | Purpose |
|----------|---------|
| `architecture/` | System architecture |
| `css-variables/` | Design tokens |
| `wordpress/` | WordPress compatibility |
| `cleanup/` | File cleanup |
| `migration/` | Component migrations |
| `patterns/` | Pattern implementation |
| `compliance/` | Design system compliance |
| `performance/` | Performance optimization |
| `session-summaries/` | End-of-session summaries |

**Where:** `/reports/[category]/` (never root)  
**Naming:** `YYYY-MM-DD-description.md` (date first, always)

---

**See also:** [reporting-standards.md](./reporting-standards.md)
