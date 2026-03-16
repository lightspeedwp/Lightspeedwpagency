# Components vs Patterns — Philosophy

**Category:** Architecture  
**Version:** 1.1.0  
**Last Updated:** 2026-03-15  
**Status:** Active  
**Template Used:** _templates/general-template.md  

---

## Overview

Defines when to use components vs patterns and how they map to WordPress FSE. Split into 2 focused sub-files.

---

## Sub-Files

| File | Contents | Approx Lines |
|---|---|---|
| [architecture.md](./components-vs-patterns/architecture.md) | Purpose, core philosophy, decision tree, React directory structure, 5 component categories (common/parts/patterns/templates/ui) | ~200 |
| [implementation.md](./components-vs-patterns/implementation.md) | WordPress mapping rules, 3 real-world examples, 3 anti-patterns, creation checklist | ~210 |

---

## Quick Reference

| Question | Answer | Type |
|----------|--------|------|
| Do editors need to place it? | Yes | Pattern |
| Is it part of global chrome? | Yes | Template Part |
| Is it behavioral/utility? | Yes | UI Component |
| Is it a token wrapper? | Yes | Common Component |
| Does it compose patterns? | Yes | Template |

| Type | Prototype Location | WordPress Mapping |
|------|-------------------|-------------------|
| Common | `/src/app/components/common/` | CSS classes |
| Parts | `/src/app/components/parts/` | `parts/*.html` |
| Patterns | `/src/app/components/patterns/` | `patterns/*.php` |
| Templates | `/src/app/components/templates/` | `templates/*.html` |
| UI | `/src/app/components/ui/` | `assets/js/*.js` |

---

**Last Updated:** March 15, 2026  
**Philosophy:** WordPress-First
