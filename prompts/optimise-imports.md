# Optimise Imports — Remove Unused & Consolidate

**Type:** Sub-Trigger  
**Version:** 1.0.0  
**Created:** March 18, 2026  
**Status:** Active  
**Trigger:** `optimise imports`  
**Parent Orchestrator:** `optimise`  
**Repeatable:** Yes  
**Estimated Duration:** 20-30 minutes

---

## Purpose

Optimize import statements by removing unused imports, consolidating multiple imports from the same module, ensuring consistent import order, and flagging broken imports.

---

## Instructions

**Environment Reminder:** You are working inside **Figma Make**. Do NOT suggest browser refresh, cache clearing, or terminal commands.

---

## Audit Scope (5 Areas)

### 1. Remove Unused Imports

**Scan all TSX/TS files for:** Imports that are never referenced in the file

**Example:**

```tsx
// Before: Unused imports
import { Button } from './components/Button';
import { Card } from './components/Card';
import { UnusedComponent } from './components/UnusedComponent'; // ❌ Never used
import { AnotherUnused } from './components/Other'; // ❌ Never used

export function MyPage() {
  return (
    <div>
      <Button />
      <Card />
      {/* UnusedComponent never rendered */}
    </div>
  );
}

// After: Only used imports
import { Button } from './components/Button';
import { Card } from './components/Card';

export function MyPage() {
  return (
    <div>
      <Button />
      <Card />
    </div>
  );
}
```

---

### 2. Consolidate Imports from Same Module

**Scan for:** Multiple import statements from the same module

**Example:**

```tsx
// Before: Separate imports
import { Button } from './components/Button';
import { Card } from './components/Card';
import { Hero } from './components/Hero';
import { CTA } from './components/CTA';

// After: Consolidated (if using barrel exports)
import { Button, Card, Hero, CTA } from './components';
```

**Create barrel exports where missing:**

```tsx
// /src/app/components/index.ts
export { Button } from './blocks/Button';
export { Card } from './blocks/Card';
export { Hero } from './patterns/Hero';
export { CTA } from './patterns/CTA';
// ... all exports
```

---

### 3. Ensure Consistent Import Order

**Standard import order:**

```tsx
// 1. React imports
import React, { useState, useEffect } from 'react';

// 2. Third-party library imports
import { motion } from 'motion/react';
import { IconName } from '@phosphor-icons/react';

// 3. Local component imports (alphabetical)
import { Button } from './components/blocks/Button';
import { Card } from './components/blocks/Card';
import { Hero } from './components/patterns/Hero';

// 4. Data imports
import { servicesData } from './data/services';

// 5. Type imports
import type { Service } from './data/types';

// 6. Style imports (last)
import './styles/MyComponent.css';
```

---

### 4. Convert to Type-Only Imports (Where Applicable)

**For TypeScript types/interfaces:** Use `import type` syntax

```tsx
// Before: Regular import
import { Service } from './data/types';

// After: Type-only import (if only used for types)
import type { Service } from './data/types';
```

**Benefits:**
- Clearer intent (type vs value)
- Better tree-shaking
- Faster compilation

---

### 5. Flag Broken Imports

**Scan for:**
- Imports from non-existent files
- Imports from moved/deleted modules
- Incorrect import paths

**Example:**

```tsx
// ❌ Broken import (file moved)
import { OldComponent } from './components/old/OldComponent';

// ✅ Fixed import (correct path)
import { OldComponent } from './components/blocks/OldComponent';
```

---

## Import Organization Best Practices

### Use Barrel Exports

```tsx
// /src/app/components/blocks/index.ts
export { Button } from './Button';
export { Card } from './Card';
export { Icon } from './Icon';

// /src/app/components/patterns/index.ts
export { Hero } from './Hero';
export { CTA } from './CTA';
export { Stats } from './Stats';

// /src/app/components/index.ts
export * from './blocks';
export * from './patterns';
export * from './parts';
export * from './templates';
```

**Then import:**

```tsx
// Instead of:
import { Button } from './components/blocks/Button';
import { Card } from './components/blocks/Card';
import { Hero } from './components/patterns/Hero';

// Use:
import { Button, Card, Hero } from './components';
```

---

### Avoid Deep Import Paths

```tsx
// ❌ Avoid deep paths
import { Button } from '../../../components/blocks/Button';

// ✅ Use path aliases
import { Button } from '@/components/blocks/Button';

// ✅ Or barrel exports
import { Button } from '@/components';
```

---

## Success Metrics

| Metric | Target |
|---|---|
| Unused imports | 0 |
| Broken imports | 0 |
| Multiple imports from same module | 0 |
| Inconsistent import order | 0 |
| Type-only import opportunities | 100% converted |
| Import line count reduction | 20-30% |

---

## Deliverables

1. **Audit Report:** `/reports/YYYY-MM/import-optimisation-report-[date].md`
2. **Task List:** Add tasks to `/tasks/task-list.md` for manual review
3. **CHANGELOG Entry:** Document import consolidations

---

## Execution Order

1. **Phase 1:** Remove unused imports
2. **Phase 2:** Flag and fix broken imports
3. **Phase 3:** Consolidate imports from same module
4. **Phase 4:** Convert to type-only imports where applicable
5. **Phase 5:** Ensure consistent import order across all files

---

**Prompt Location:** `/prompts/optimise-imports.md`  
**Category:** Optimisation  
**Difficulty:** Low  
**Estimated Duration:** 20-30 minutes
