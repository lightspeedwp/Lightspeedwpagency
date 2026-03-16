# BEM compliance audit — round 2

**Category:** Report  
**Version:** 1.0.0  
**Last Updated:** 2026-03-16  
**Status:** Complete  
**Trigger:** `apply bem`

---

## Summary

Round 2 was scoped to fix token violations discovered during `audit tokens` that overlap with BEM scope, and to assess remaining inline style volume across service templates.

- **Token violations fixed this round:** 3 (fontFamily: 'monospace' → var(--font-mono))
- **Token gap filled:** 1 (added `--line-height-comfortable: 1.6`)
- **Service templates with heavy inline styles identified:** 8+ (DesignService, Discovery, Content, Security, Performance, Analytics, AIEngine, Migrations, Support)
- **Estimated remaining inline style violations:** 300+ across service templates

---

## Files Modified

| File | Change | Type |
|---|---|---|
| WooCommerceSolutionTemplate.tsx | `fontFamily: 'monospace'` → `'var(--font-mono)'` (2 instances) | Token fix |
| ServicesLandingTemplate.tsx | `fontFamily: 'monospace'` → `'var(--font-mono)'` (1 instance) | Token fix |
| theme-base-typography-spacing.css | Added `--line-height-comfortable: 1.6` + WP preset alias | Token gap |

---

## Remaining Service Templates Needing BEM (Round 3 Scope)

These service templates have 30-60+ inline style attributes each and need dedicated BEM CSS files:

| Template | Inline Styles | Priority |
|---|---|---|
| DesignServiceTemplate.tsx | 63 | High |
| DiscoveryServiceTemplate.tsx | 50+ | High |
| ContentServiceTemplate.tsx | 30+ | Medium |
| SecurityServiceTemplate.tsx | 30+ | Medium |
| PerformanceServiceTemplate.tsx | 25+ | Medium |
| ServicesLandingTemplate.tsx | 40+ | Medium |
| WooCommerceSolutionTemplate.tsx | 35+ | Medium |
| Content sub-services (6 templates) | 15-20 each | Low |

**Recommended approach for Round 3:** Create a shared `service-hero.css` BEM block for the common hero pattern (badge, h1, gradient text, description, decorative grid/orbs) used across all service templates. Then create per-template CSS only for unique sections.

---

## Common Patterns for Extraction

### Service Hero Pattern (used in 10+ templates)
- Badge/pill with icon + text
- H1 with gradient text span
- Description paragraph
- CTA button group
- Background grid overlay
- Decorative orb/glow

### Section Header Pattern (already partially solved)
- Centered container
- Eyebrow label (uppercase, primary, small)
- H2 heading
- Description paragraph
- Already has `.template-section-header` BEM block — needs wider adoption

### Checklist Pattern (used in 5+ templates)
- 2-column grid
- Check icon + label per item
- Already has `.dev-service__checklist` — should be promoted to shared