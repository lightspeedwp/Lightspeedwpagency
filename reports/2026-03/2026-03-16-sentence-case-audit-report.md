# Sentence case heading audit report

**Category:** Audit  
**Version:** 1.1.0  
**Last Updated:** 2026-03-16  
**Status:** Active  
**Triggered by:** `audit style` (sentence case rule)

---

## Summary

Audited all `.tsx` templates, patterns, and `.ts` data files for title-cased headings that violate the new sentence case rule (Guidelines v5.7.0). Proper nouns (WordPress, WooCommerce, LightSpeed, Mailchimp, etc.), acronyms (AI, SEO, ROI, FAQ, WCAG), and brand/project names are excluded from violations.

| Category | Files affected | Violations | Status |
|---|---|---|---|
| Template inline headings (high priority) | 10 | 20 | FIXED (Round 2) |
| Template inline headings (dev tools) | 7 | 12 | Round 6 |
| Template prop headings (recurring) | 19 | 17 | FIXED (Round 1) |
| Template prop headings (individual) | 20+ | 30 | FIXED (Round 3) |
| AI sub-page section title props | 4 | 12 | FIXED (Round 4) |
| Pattern default headings | 2 | 2 | FIXED (Round 8) |
| Data file headings | 14 | 95+ | Round 5 |
| Blog post titles | 1 | 20+ | Round 7 |
| **Total** | **~55 unique files** | **180+** | |

---

## Fix progress

| Round | Scope | Fixes | Status |
|---|---|---|---|
| 1 | Recurring patterns (FAQ, Related, Common) | 17 across 19 files | COMPLETE |
| 2 | Template inline headings (high priority) | 20 across 10 templates | COMPLETE |
| 3 | Template prop headings (individual) | 28 across 20+ templates | COMPLETE |
| 4 | AI sub-page section title props | 12 across 4 templates | COMPLETE |
| 5 | Data file headings | 95+ across 14 data files | OPEN |
| 6 | Dev/showcase template headings | 12 across 7 templates | OPEN |
| 7 | Blog post titles | 20+ in blog-posts.ts | OPEN |
| 8 | Pattern default headings | 2 across 2 patterns | COMPLETE |

---

## Remaining violations

### Round 5 — Data file headings (95+ fixes across 14 data files)

- `front-page.ts` — 10 violations
- `service-page.ts` — 16 violations
- `development-service-page.ts` — 16 violations
- `content-service-page.ts` — 12 violations
- `why-choose-us.ts` — 7 violations
- `ai-integrations/` data files — 39 violations across 5 files
- `solutions-detailed.ts` — 9 violations
- `lsx-design-page.ts` — 8 violations
- `wordpress-redesign-page.ts` — 7 violations
- `woocommerce-redesign-page.ts` — 7 violations
- `performance-service-page.ts` — 5+ violations
- `guarantees.ts` — 2 violations
- `process.ts` — 1 violation
- `archive-items.ts` — 12+ violations
- `discovery-service-template-data.tsx` — 4 violations

### Round 6 — Dev/showcase template headings (12 fixes)

| File | Current | Sentence case |
|---|---|---|
| `TemplateTester.tsx` | "WordPress Template Tester" | "WordPress template tester" |
| `DevToolsTemplate.tsx` | "Developer Tools" | "Developer tools" |
| `DesignBlocksShowcase.tsx` | "Design Blocks" | "Design blocks" |
| `DesignBlocksShowcase.tsx` | "Layout Primitives" | "Layout primitives" |
| `ButtonShowcase.tsx` | "Button System" | "Button system" |
| `ButtonShowcase.tsx` | "Style Variants" | "Style variants" |
| `ButtonShowcase.tsx` | "Size Scale" | "Size scale" |
| `ButtonShowcase.tsx` | "Icon Integration" | "Icon integration" |
| `ButtonShowcase.tsx` | "Interactive States" | "Interactive states" |
| `HeaderFooterComparison.tsx` | "Header/Footer Comparison" | "Header/footer comparison" |
| `IconLibrary.tsx` | "Icon Library" | "Icon library" |
| `SectionPresetsShowcase.tsx` | "Section Presets" | "Section presets" |

### Round 7 — Blog post titles (20+ fixes, lowest priority)

Blog titles in `blog-posts.ts`. Traditionally title-cased in publishing; converting for brand consistency.

---

## Excluded from violations (correct / acceptable)

- **Proper nouns** — "WordPress", "WooCommerce", "LightSpeed", "Mailchimp", "Gutenberg", "BugHerd", "Jamstack", "GDPR", "LSX Design" — always capitalised
- **Acronyms** — "AI", "SEO", "ROI", "FAQ", "WCAG", "CSS", "FSE", "CTA" — always capitalised
- **Portfolio project names** — "Kalahari Safaris", "Green Horizons Health", etc. — brand names, leave as-is

---

## Notes

- Two-word compound titles like "Content Strategy" or "Plugin Development" are title-cased but should be "Content strategy" and "Plugin development" per the rule.
- Proper nouns within headings stay capitalised: "Why choose LightSpeed?" not "Why choose lightSpeed?"
- Acronyms within headings stay capitalised: "AI content capabilities" not "Ai content capabilities"

---

## Version history

| Version | Date | Changes |
|---|---|---|
| 1.1.0 | 2026-03-16 | Updated with fix progress for Rounds 1-4, 8. Renamed with date prefix. Restructured remaining violations section |
| 1.0.0 | 2026-03-16 | Initial audit — 180+ violations across ~55 files |
