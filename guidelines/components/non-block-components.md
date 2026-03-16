# Non-Block Components (UI Utilities)

**Category:** Components  
**Version:** 1.1.0  
**Last Updated:** 2026-03-15  
**Status:** Active  
**Template Used:** _templates/general-template.md  

---

## Overview

UI components that live outside the WordPress block system — behavioral utilities and progressive enhancements. Split into 2 focused sub-files.

---

## Sub-Files

| File | Contents | Approx Lines |
|---|---|---|
| [catalog.md](./non-block-components/catalog.md) | Complete list of 10 non-block components (ScrollBackToTop, ScrollDownArrow, StyleSwitcher, LayoutSwitcher, SkipLink, FocusRing, TokenWrappers, SmoothScroll, LoadingStates, ModalDialog) | ~220 |
| [guidelines.md](./non-block-components/guidelines.md) | Progressive enhancement, accessibility requirements, design system compliance, WordPress integration, creation checklist | ~140 |

---

## Philosophy

Non-block components are:
- **NOT placed by editors** in the block editor
- **Progressive enhancements** that work without JavaScript
- **Theme-level scripts** loaded via `wp_enqueue_script()`
- **Outside the block system** but still use design system tokens

**WordPress Mapping:** `assets/js/*.js` (Theme enhancement scripts)

---

**Last Updated:** March 15, 2026  
**WordPress Mapping:** `assets/js/*.js`
