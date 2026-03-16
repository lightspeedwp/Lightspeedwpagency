# Accessibility Guidelines — Guidelines

**Category:** Development  
**Version:** 1.3.0  
**Last Updated:** 2026-03-15  
**Status:** Active  
**Template Used:** _templates/general-template.md  
**Compliance Level:** WCAG 2.1 AA  

---

## Overview

Accessibility requirements for all UI components and templates. Ensures WCAG 2.1 AA compliance. Split into 2 focused sub-files.

---

## Sub-Files

| File | Contents | Approx Lines |
|---|---|---|
| [a11y-requirements.md](./accessibility/a11y-requirements.md) | Scope, requirements (structure, interaction, content tolerance, motion), 4 code examples (semantic structure, keyboard nav, touch targets, reduced motion) | ~140 |
| [a11y-checklist-patterns.md](./accessibility/a11y-checklist-patterns.md) | Component checklist (8 categories), 3 common patterns (skip link, form field, modal), do's and don'ts, testing tools | ~180 |

---

## Quick Reference

| Area | Key Requirement |
|------|----------------|
| Structure | One H1, logical heading order, semantic landmarks |
| Keyboard | All elements focusable, visible focus states |
| Touch | 44x44px minimum touch targets |
| Contrast | 4.5:1 normal text, 3:1 large text |
| Motion | `prefers-reduced-motion` guard on all animations |
| ARIA | Labels where needed, accurate states, no redundancy |

---

**Last Updated:** March 15, 2026  
**Compliance:** WCAG 2.1 AA
