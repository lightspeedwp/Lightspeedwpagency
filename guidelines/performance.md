# Performance Standards — Guidelines

**Category:** Development  
**Version:** 1.2.0  
**Last Updated:** 2026-03-15  
**Status:** Active  
**Template Used:** _templates/general-template.md  

---

## Overview

Comprehensive performance standards for the LSX Design System ensuring fast loads, smooth interactions, and efficient bundles. This guideline has been split into 3 focused sub-files.

---

## Sub-Files

| File | Contents | Approx Lines |
|---|---|---|
| [performance-budgets.md](./performance/performance-budgets.md) | Overview, philosophy, budgets (app + component + network), Core Web Vitals (LCP, FID, CLS) | ~200 |
| [performance-optimization.md](./performance/performance-optimization.md) | Bundle optimization (code splitting, tree shaking), image optimization, CSS/token performance, React performance (memo, useMemo, virtualization) | ~270 |
| [performance-wordpress.md](./performance/performance-wordpress.md) | WordPress block pattern performance, asset loading, Lighthouse CI, monitoring tools, deployment checklist | ~160 |

---

## Reading Order

1. **Start with [performance-budgets.md](./performance/performance-budgets.md)** — Understand targets and Core Web Vitals
2. **Then [performance-optimization.md](./performance/performance-optimization.md)** — Apply optimization techniques
3. **Keep [performance-wordpress.md](./performance/performance-wordpress.md) handy** — WordPress-specific patterns and monitoring

---

## Quick Reference

| Metric | Target | Current |
|--------|--------|---------|
| Lighthouse Score | >=90 | 85 |
| Bundle Size | <200KB | 180KB |
| LCP | <2.5s | 2.1s |
| FID | <100ms | 45ms |
| CLS | <0.1 | 0.05 |

---

**Last Updated:** March 15, 2026  
**Status:** Active Standard
