# QA / Acceptance Checklist — Guidelines

**Category:** Development  
**Version:** 1.3.0  
**Last Updated:** 2026-03-15  
**Status:** Active  
**Template Used:** _templates/general-template.md  

---

## Overview

Quality assurance checklist before marking prototype complete. Split into 2 focused sub-files.

---

## Sub-Files

| File | Contents | Approx Lines |
|---|---|---|
| [qa-design-accessibility.md](./qa-checklist/qa-design-accessibility.md) | Architecture & patterns, design tokens & styling, accessibility (WCAG 2.1 AA), WordPress compatibility, components & utilities | ~125 |
| [qa-testing-signoff.md](./qa-checklist/qa-testing-signoff.md) | Responsive design, content resilience, performance, dark mode, cross-browser, documentation, automated tests, conditional requirements, final sign-off, issue tracking | ~183 |

---

## Quick Reference

| Area | Key Requirement |
|------|----------------|
| Tokens | Zero hardcoded values |
| Fonts | Only `var(--font-primary)` / `var(--font-secondary)` |
| Accessibility | WCAG 2.1 AA compliance |
| WordPress | All UI maps to blocks/patterns |
| Responsive | Mobile, tablet, desktop tested |
| Dark Mode | Works on all pages |

---

**Last Updated:** March 15, 2026  
**Enforcement:** Required for sign-off
