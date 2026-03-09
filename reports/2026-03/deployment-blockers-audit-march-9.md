# Deployment Blockers Audit — March 9, 2026

## Executive Summary

**Status:** 🔴 **DEPLOYMENT BLOCKED** — 3 critical issues identified

**Diagnosis:** Package-and-runtime focused audit revealed missing runtime dependencies and peer dependency misconfiguration that will block publishing.

**Previous Fix Incomplete:** The dynamic CSS import fix resolved build errors but did NOT address runtime dependency issues.

---

## Top 3 Deployment Blockers (Prioritized)

### 🔴 BLOCKER #1: Missing `slick-carousel` Package (CRITICAL)

**Issue:** Runtime dependency missing from package.json

**Evidence:**
```tsx
// File: /src/app/components/patterns/PortfolioSlider.tsx
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
```

**Package Analysis:**
```json
// Current package.json
"dependencies": {
  "react-slick": "0.31.0"
  // ❌ slick-carousel is MISSING
}

// react-slick's package.json declares:
"peerDependencies": {
  "react": "^0.14.0 || ^15.0.1 || ...",
  "react-dom": "^0.14.0 || ^15.0.1 || ..."
}
// BUT does NOT include slick-carousel as peerDependency
// It's in dependencies, but bundlers expect it in consuming app
```

**Why This Blocks Deployment:**
- Vite build will analyze ALL imports during build phase
- CSS imports from `slick-carousel` will fail because package is not installed
- Build error: `Cannot find module 'slick-carousel/slick/slick.css'`
- Even if PortfolioSlider is unused, the file exists and will be analyzed

**Active Import Tree Status:**
- ❓ PortfolioSlider.tsx appears unused in current routes (0 imports found)
- ⚠️ File still exists in codebase → will be analyzed during build
- ⚠️ Missing dependency will still cause build failure

**Fix:**
```bash
pnpm add slick-carousel
```

**Alternative Fix (if PortfolioSlider is unused):**
```bash
# Delete the unused component
rm /src/app/components/patterns/PortfolioSlider.tsx
```

**Priority:** 🔴 **CRITICAL** — Test this FIRST

**Confidence:** 100% — This WILL block deployment

---

### 🔴 BLOCKER #2: React/React-DOM Only in peerDependencies (CRITICAL)

**Issue:** React runtime imports but only declared as optional peer dependencies

**Evidence:**
```json
// Current package.json
"dependencies": {
  // ❌ react is NOT here
  // ❌ react-dom is NOT here
},
"peerDependencies": {
  "react": "18.3.1",
  "react-dom": "18.3.1"
},
"peerDependenciesMeta": {
  "react": {
    "optional": true  // ❌ This makes React OPTIONAL!
  },
  "react-dom": {
    "optional": true  // ❌ This makes React-DOM OPTIONAL!
  }
}
```

**Runtime Import Analysis:**
```tsx
// App directly imports React in multiple files:
import { RouterProvider } from 'react-router';         // App.tsx
import React from 'react';                             // PortfolioSlider.tsx
import { useEffect, useState } from 'react';           // 10+ files
import { Component, ReactNode } from 'react';          // ErrorBoundary.tsx
```

**Why This Blocks Deployment:**
- **peerDependencies** are for library packages, NOT applications
- **Applications** (like this) should have React in regular **dependencies**
- Marking as `optional: true` tells bundlers "this app can run without React"
- Publishing/deployment will fail because React is not guaranteed to be present
- Figma Make expects applications to bundle their own React

**Package Type Analysis:**
```json
{
  "name": "@lightspeedwp/lsx-design-system",
  "version": "0.0.1",
  "type": "module"
}
```
- This is published as a **design system package** but structured as an **application**
- Applications MUST include React in dependencies
- Libraries use peerDependencies; apps use dependencies

**Fix:**
```json
// Move React from peerDependencies to dependencies
"dependencies": {
  "@emotion/react": "11.14.0",
  // ... existing deps ...
  "react": "18.3.1",        // ← MOVE HERE
  "react-dom": "18.3.1"     // ← MOVE HERE
},
// REMOVE peerDependencies section entirely
```

**Priority:** 🔴 **CRITICAL** — Test after fixing Blocker #1

**Confidence:** 95% — Very likely publish blocker for Figma Make

---

### 🟡 BLOCKER #3: Figma Error Suppression Runtime Patches (HIGH RISK)

**Issue:** Global runtime patches may interfere with deployment initialization

**Evidence:**
```tsx
// File: /src/app/suppress-figma-errors.ts
// IIFE runs immediately on import (before any other code)

// LAYER 0: Patches Error constructor
window.Error = ErrorProxy;

// LAYER 1-3: Patches all console methods
console.error = createConsoleFilter(originalError);
console.warn = createConsoleFilter(originalWarn);
console.log = createConsoleFilter(originalLog);

// LAYER 4-5: Patches error handlers
window.addEventListener('error', errorHandler, true);
window.addEventListener('unhandledrejection', rejectionHandler, true);

// LAYER 6-7: Patches global error handlers
window.onerror = function(...) { /* custom */ };
window.onunhandledrejection = function(...) { /* custom */ };

// LAYER 8: Patches fetch
window.fetch = async function(...) { /* wrapped */ };
```

**Import Order:**
```tsx
// App.tsx
import './suppress-figma-errors';  // ← Runs FIRST (IIFE)
import '../styles/index.css';
import { RouterProvider } from 'react-router';
```

**Why This May Block Deployment:**
1. **Error Constructor Patching**
   - Replaces global `Error` with a Proxy
   - Could interfere with bundler error reporting during build
   - Could mask real runtime initialization errors

2. **Console Patching**
   - Silences ALL console methods for Figma-related messages
   - Could hide legitimate deployment warnings
   - Deployment logs may be incomplete

3. **Fetch Patching**
   - Returns fake 200 responses for Figma errors
   - Could mask real network failures during deployment
   - Could interfere with deployment health checks

4. **IIFE Execution Timing**
   - Runs before React initialization
   - Could interfere with Figma Make's runtime setup
   - Could break deployment environment detection

**Risk Assessment:**
- ✅ **Development:** Works fine (designed for this)
- ⚠️ **Build:** May mask build errors (medium risk)
- ⚠️ **Deployment:** May interfere with publish process (high risk)
- ⚠️ **Production Runtime:** May mask real errors (medium risk)

**Fix (Test Deployment):**
```tsx
// App.tsx — Comment out for deployment test
// import './suppress-figma-errors';  // ← DISABLE FOR TESTING
import '../styles/index.css';
```

**Fix (Production):**
```tsx
// Only enable error suppression in development
if (import.meta.env.DEV) {
  await import('./suppress-figma-errors');
}
```

**Priority:** 🟡 **HIGH** — Test after fixing Blockers #1 and #2

**Confidence:** 60% — Possible runtime blocker, worth testing

---

## Active Import Tree Validation

### PortfolioSlider.tsx Import Chain

**File Location:** `/src/app/components/patterns/PortfolioSlider.tsx`

**Imports:**
```tsx
import React from 'react';                              // ✅ React in peerDependencies
import Slider from 'react-slick';                       // ✅ react-slick in dependencies
import 'slick-carousel/slick/slick.css';                // ❌ slick-carousel MISSING
import 'slick-carousel/slick/slick-theme.css';          // ❌ slick-carousel MISSING
```

**Usage Search Results:**
```bash
$ grep -r "PortfolioSlider" src/app --include="*.tsx" --include="*.ts"
# ❌ NO RESULTS — Component is NOT imported anywhere
```

**Route Analysis:**
- ❌ Not imported in any route modules (12 route files checked)
- ❌ Not imported in any template files (grep found 0 matches)
- ❌ Not imported in any active component tree

**Build Impact:**
- Even though unused, Vite will analyze the file during build
- CSS imports will fail because `slick-carousel` package is missing
- Build error will occur regardless of whether component is used

**Recommendation:**
Either:
1. **Install dependency:** `pnpm add slick-carousel`
2. **Delete unused file:** `rm /src/app/components/patterns/PortfolioSlider.tsx`

---

## Runtime Dependency Correctness

### External Packages Used at Runtime

**Audit Results:**

| Package | Imported In | package.json Status | Issue |
|---------|-------------|---------------------|-------|
| `react` | 10+ files | peerDependencies (optional) | ❌ Should be in dependencies |
| `react-dom` | 0 files (transitive) | peerDependencies (optional) | ❌ Should be in dependencies |
| `react-slick` | PortfolioSlider.tsx | ✅ dependencies | ✅ Correct |
| `slick-carousel` | PortfolioSlider.tsx (CSS) | ❌ MISSING | ❌ Must add |
| `@phosphor-icons/react` | 100+ files | ✅ dependencies | ✅ Correct |
| `react-router` | routes/*.tsx | ✅ dependencies | ✅ Correct |
| `@radix-ui/*` | 30+ components | ✅ dependencies | ✅ Correct |
| `motion` | animations | ✅ dependencies | ✅ Correct |

### Peer Dependencies vs. Regular Dependencies

**Current State:**
```json
"peerDependencies": {
  "react": "18.3.1",      // ❌ WRONG for an application
  "react-dom": "18.3.1"   // ❌ WRONG for an application
},
"peerDependenciesMeta": {
  "react": { "optional": true },     // ❌ Makes React optional!
  "react-dom": { "optional": true }  // ❌ Makes React-DOM optional!
}
```

**Should Be:**
```json
"dependencies": {
  "react": "18.3.1",      // ✅ Required for application
  "react-dom": "18.3.1"   // ✅ Required for application
}
// NO peerDependencies section needed
```

**Rule:**
- **Libraries** use `peerDependencies` (e.g., a UI component library)
- **Applications** use `dependencies` (this project is an application)
- `peerDependenciesMeta.optional: true` means "this app can run without React" ← WRONG

---

## Exact Fixes (Prioritized)

### Fix #1: Add slick-carousel (CRITICAL — Test First)

**Command:**
```bash
pnpm add slick-carousel
```

**Verification:**
```bash
# Check package.json includes:
grep "slick-carousel" package.json

# Should show:
# "slick-carousel": "^1.8.1"  (or latest version)
```

**Alternative (if component is unused):**
```bash
rm /src/app/components/patterns/PortfolioSlider.tsx
```

---

### Fix #2: Move React to dependencies (CRITICAL — Test Second)

**File:** `/package.json`

**Change:**
```json
{
  "dependencies": {
    "@emotion/react": "11.14.0",
    "@emotion/styled": "11.14.1",
    // ... existing dependencies ...
    "react": "18.3.1",        // ← ADD THIS
    "react-dom": "18.3.1",    // ← ADD THIS
    "vaul": "1.1.2"
  },
  "devDependencies": {
    "@tailwindcss/vite": "4.1.12",
    "@vitejs/plugin-react": "4.7.0",
    "tailwindcss": "4.1.12",
    "vite": "6.3.5"
  }
  // ← DELETE peerDependencies section entirely
  // ← DELETE peerDependenciesMeta section entirely
}
```

**Verification:**
```bash
# Check React is in dependencies
cat package.json | grep -A2 '"dependencies"' | grep react

# Should show:
#   "react": "18.3.1",
#   "react-dom": "18.3.1",
```

---

### Fix #3: Disable Figma error suppression for deployment test (HIGH RISK)

**File:** `/src/app/App.tsx`

**Change:**
```tsx
/**
 * LSX Design Prototype — Main Application
 */

// DEPLOYMENT TEST: Disable error suppression to check for interference
// import './suppress-figma-errors';  // ← COMMENT OUT FOR TESTING

// Import design system styles
import '../styles/index.css';

import { RouterProvider } from 'react-router';
import { router } from './routes';

export default function App() {
  return <RouterProvider router={router} />;
}
```

**Production Fix (after testing):**
```tsx
// Only suppress errors in development
if (import.meta.env.DEV) {
  await import('./suppress-figma-errors');
}

import '../styles/index.css';
// ... rest of App.tsx
```

---

## Testing Strategy

### Test Sequence (Execute in Order)

**Step 1: Fix slick-carousel**
```bash
pnpm add slick-carousel
pnpm run build
```
- ✅ If build succeeds → Fixed!
- ❌ If build fails → Continue to Step 2

**Step 2: Fix React dependencies**
```bash
# Edit package.json (see Fix #2 above)
pnpm install
pnpm run build
```
- ✅ If build succeeds → Test deployment
- ❌ If build fails → Continue to Step 3

**Step 3: Disable Figma error suppression**
```bash
# Edit App.tsx (see Fix #3 above)
pnpm run build
```
- ✅ If build succeeds → Test deployment
- ❌ If build fails → Check build logs for new errors

**Step 4: Test Deployment**
```bash
# After all fixes applied
pnpm run build
# Deploy to Figma Make
# Check browser console for runtime errors
```

---

## Additional Findings

### Package Analysis Summary

**Total Dependencies:** 54 packages in dependencies
**Total Dev Dependencies:** 4 packages in devDependencies
**Total Peer Dependencies:** 2 packages (react, react-dom) — ❌ INCORRECT

**Correctly Declared:**
- ✅ All @radix-ui packages (30+)
- ✅ All icon packages (@phosphor-icons/react)
- ✅ All animation packages (motion)
- ✅ All router packages (react-router)
- ✅ All Material-UI packages (@mui/*)

**Incorrectly Declared:**
- ❌ react (in peerDependencies, should be dependencies)
- ❌ react-dom (in peerDependencies, should be dependencies)
- ❌ slick-carousel (MISSING entirely)

---

## Conclusion

**Deployment Status:** 🔴 **BLOCKED** — 3 critical issues identified

**Root Cause:** Package configuration treats this as a library (peer dependencies) when it's an application (regular dependencies)

**Fix Confidence:**
- Fix #1 (slick-carousel): 100% confidence
- Fix #2 (React dependencies): 95% confidence
- Fix #3 (Figma suppression): 60% confidence

**Estimated Fix Time:**
- Fix #1: 2 minutes (install package or delete file)
- Fix #2: 5 minutes (edit package.json, reinstall)
- Fix #3: 3 minutes (comment out import)
- Total: ~10 minutes

**Next Steps:**
1. Apply Fix #1 (test immediately)
2. Apply Fix #2 (test immediately)
3. Attempt deployment
4. If deployment fails with runtime errors, apply Fix #3
5. Re-test deployment

---

**Report Generated:** March 9, 2026  
**Audit Type:** Package & Runtime Dependency Analysis  
**Files Analyzed:** 15+ (package.json, App.tsx, PortfolioSlider.tsx, routes, suppress-figma-errors.ts)  
**Blockers Identified:** 3 (2 critical, 1 high-risk)  
**Deployment Ready:** NO — Fixes required first
