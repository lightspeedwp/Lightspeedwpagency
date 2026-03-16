# Data Structure Documentation — Guidelines

**Category:** Development  
**Version:** 1.2.0  
**Last Updated:** 2026-03-15  
**Status:** Active  
**Template Used:** _templates/general-template.md  

---

## Overview

The LSX Design prototype uses a **centralized data system** where all mock data is organized in `/src/app/data/` for consistency, reusability, and easy maintenance. This mirrors how WordPress manages content through a database.

This guideline has been split into 3 focused sub-files.

---

## Sub-Files

| File | Contents | Approx Lines |
|---|---|---|
| [data-structure.md](./data-files/data-structure.md) | Overview, core data file reference, system benefits, directory structure, size analysis | ~200 |
| [data-patterns.md](./data-files/data-patterns.md) | Organization patterns (modular/single/barrel), WordPress mapping, splitting strategy | ~250 |
| [data-best-practices.md](./data-files/data-best-practices.md) | TypeScript types, helper functions, validation, optimization strategies, priority matrix | ~230 |

---

## Reading Order

1. **Start with [data-structure.md](./data-files/data-structure.md)** — Understand the data architecture and current state
2. **Then [data-patterns.md](./data-files/data-patterns.md)** — Learn organization patterns and splitting process
3. **Keep [data-best-practices.md](./data-files/data-best-practices.md) handy** — Apply best practices and optimization

---

## Quick Reference

**Key Principles:**
1. Single Source of Truth — Data defined once, imported everywhere
2. TypeScript Interfaces — Type-safe data structures
3. Modular Organization — Split by context
4. Size Limits — Files > 500 lines should be split
5. Helper Functions — Utility functions for data access

**Total Data Lines:** 27,612 across ~27 files  
**Modular Directories:** 4 (services, faqs, ai-integrations, site-pages)

---

**Last Updated:** March 15, 2026  
**Maintained By:** LSX Design Systems Team
