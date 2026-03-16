# Prototype Build Rules — Guidelines

**Category:** Development  
**Version:** 1.3.0  
**Last Updated:** 2026-03-15  
**Status:** Active  
**Template Used:** _templates/general-template.md  

---

## Overview

Rules for building the LSX Design prototype, ensuring it maps directly to WordPress block theme architecture. Split into 2 focused sub-files.

---

## Sub-Files

| File | Contents | Approx Lines |
|---|---|---|
| [rules-requirements.md](./build-rules/rules-requirements.md) | MAY/MAY NOT actions, 5 composition rules (pages=patterns, tokens only, WordPress utilities, single CTA, accessibility), file size guidelines | ~170 |
| [rules-examples.md](./build-rules/rules-examples.md) | 2 examples (service page, design tokens), creation checklist, 3 anti-patterns, related guidelines | ~150 |

---

## Quick Reference

**MUST:** Use CSS variables, use patterns, use `.wp-*` utilities, meet accessibility requirements  
**MUST NOT:** Hardcode values, use Tailwind, create one-off layouts, skip a11y

| File Type | Max Lines |
|---|---|
| `.css` | 400 |
| `.tsx` | 300 |
| `.ts` data | 500 |
| `.md` guidelines | 350 |

---

**Enforcement:** Required  
**Last Updated:** March 15, 2026
