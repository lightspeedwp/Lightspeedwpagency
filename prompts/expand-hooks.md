# Expand Hooks — Discover Missing Custom Hooks

**Type:** Discovery + Recommendation  
**Version:** 1.0.0  
**Created:** March 18, 2026  
**Status:** Active  
**Trigger:** `expand hooks`  
**Repeatable:** Yes  
**Estimated Duration:** 10-20 minutes

---

## Purpose

Identify missing custom React hooks that multiple components would benefit from. Reduce duplicated logic by extracting common patterns (local storage, media queries, intersection observer, debounce, etc.) into shared hooks.

---

## Instructions

**Environment Reminder:** You are working inside **Figma Make**. Do NOT suggest browser refresh, cache clearing, or terminal commands.

### Step 1 — Inventory Existing Hooks

1. List all custom hooks in `/src/app/hooks/` (or wherever hooks are stored).
2. Search for `function use` and `const use` patterns across the codebase to find inline hooks.

### Step 2 — Detect Duplicated Hook Logic

1. Scan components for repeated patterns:
   - **`useState` + `useEffect` with `localStorage`** → `useLocalStorage`
   - **`useState` + `useEffect` with `matchMedia`** → `useMediaQuery`
   - **`useRef` + `IntersectionObserver`** → `useIntersectionObserver`
   - **`useState` + `setTimeout` for debounce** → `useDebounce`
   - **`useState` + `useEffect` for fetch** → `useFetch`
   - **`useRef` + scroll position tracking** → `useScrollPosition`
   - **`useState` + `useEffect` for window resize** → `useWindowSize`
   - **`useReducer` for complex form state** → `useFormState`
   - **`useEffect` with `prefers-reduced-motion`** → `useReducedMotion`
   - **`useRef` + click outside detection** → `useClickOutside`

### Step 3 — Recommend New Hooks

| Hook | Replaces | Used By | Priority |
|---|---|---|---|
| `useReducedMotion` | Inline motion checks | WebGL, animations | High |
| `useIntersectionObserver` | Inline scroll detection | Stats counters, lazy load | High |
| `useMediaQuery` | Inline matchMedia | Responsive components | Medium |
| `useLocalStorage` | Inline localStorage | Theme, preferences | Medium |

### Step 4 — User Approval & Creation

Present recommendations. Create approved hooks in `/src/app/hooks/` after approval.

### Step 5 — Report

```
## Expand Hooks — [Today's Date]

| Hook | Duplications Found | Priority | Status |
|---|---|---|---|
| useReducedMotion | 4 components | High | Approved |
| useIntersectionObserver | 6 components | High | Approved |

**Totals:** [N] recommended, [N] approved, [N] deferred
```

---

**Prompt Location:** `/prompts/expand-hooks.md`  
**Category:** Discovery  
**Difficulty:** Medium  
**Repeatable:** Yes
