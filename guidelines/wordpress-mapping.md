# WordPress Theme Mapping — Guidelines

**Category:** Development  
**Version:** 1.3.0  
**Last Updated:** 2026-03-15  
**Status:** Active  
**Template Used:** _templates/general-template.md  

---

## Overview

Defines how the LSX Design prototype maps to WordPress block theme architecture. Split into 2 focused sub-files.

---

## Sub-Files

| File | Contents | Approx Lines |
|---|---|---|
| [mapping-artefacts.md](./wordpress-mapping/mapping-artefacts.md) | Purpose, WordPress theme artefacts (templates, template parts, patterns, theme.json, style variations), FSE directory structure | ~200 |
| [mapping-workflow.md](./wordpress-mapping/mapping-workflow.md) | 4-step implementation workflow, 5 page archetypes, block naming conventions, related guidelines | ~210 |

---

## Quick Reference

| Prototype | WordPress |
|-----------|-----------|
| `/src/app/templates/*.tsx` | `templates/*.html` |
| `/src/app/components/parts/*.tsx` | `parts/*.html` |
| `/src/app/components/patterns/*.tsx` | `patterns/*.php` |
| `/src/styles/theme-base.css` | `theme.json` |
| `/src/styles/theme-dark.css` | `styles/dark.json` |

---

**Last Updated:** March 15, 2026  
**WordPress Version:** 6.0+  
**FSE:** Full Site Editing compatible
