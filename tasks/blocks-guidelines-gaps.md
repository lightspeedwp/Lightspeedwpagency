# Blocks Guidelines Gaps

**Source Audit:** A4 — Blocks Coverage Audit  
**Date:** 2026-02-21  
**Priority:** MEDIUM — Missing block guidelines lead to inconsistent implementations  
**Status:** NOT STARTED

---

## Summary

The project has block components organized in `/src/app/components/blocks/` across 9 subdirectories. The `/guidelines/blocks/` directory has extensive coverage from previous documentation phases, but gaps may exist between the actual component files and the guideline files.

---

## Audit Procedure

1. **List ALL files in `/src/app/components/blocks/` recursively** across all subdirectories
2. **List ALL files in `/guidelines/blocks/` recursively** across all subdirectories
3. **Cross-reference** — Identify blocks without guidelines and guidelines without blocks
4. **Verify each guideline** references correct file paths and follows current BEM/CSS variable standards

---

## Block Subdirectories to Audit

### `/src/app/components/blocks/design/`
Guideline location: `/guidelines/blocks/design/`

- [ ] Audit all design block components (Accordion, Buttons, Columns, Grid, Group, Row, Stack)
- [ ] Cross-reference with 7 existing design block guidelines
- [ ] Identify any new components without guidelines

### `/src/app/components/blocks/text/`
Guideline location: `/guidelines/blocks/text/`

- [ ] Audit all text block components (Paragraph, Heading, List, Quote, Table, Code, Preformatted, Pullquote, Verse, Details)
- [ ] Cross-reference with existing text block guidelines
- [ ] Identify gaps

### `/src/app/components/blocks/media/`
Guideline location: `/guidelines/blocks/media/`

- [ ] Audit all media block components (Image, Gallery, Cover, Video)
- [ ] Cross-reference with 4 existing media block guidelines

### `/src/app/components/blocks/theme/`
Guideline location: `/guidelines/blocks/theme/`

- [ ] Audit all theme block components (Navigation, SiteLogo, SiteTitle, SiteTagline, Search, TemplatePart)
- [ ] Cross-reference with 6 existing theme block guidelines

### `/src/app/components/blocks/feedback/`
Guideline location: `/guidelines/blocks/feedback/`

- [ ] Audit feedback components (Alert, Toast, etc.)
- [ ] Check if guidelines exist

### `/src/app/components/blocks/forms/`
Guideline location: `/guidelines/blocks/forms/`

- [ ] Audit form block components
- [ ] Cross-reference with existing form guidelines

### `/src/app/components/blocks/layout/`
Guideline location: `/guidelines/blocks/design/` (overlaps)

- [ ] Audit layout components
- [ ] Determine if these need separate guidelines or are covered by design blocks

### `/src/app/components/blocks/utility/`
Guideline location: `/guidelines/blocks/utility/`

- [ ] Audit utility components (Separator, Spacer, PageBreak, More)
- [ ] Cross-reference with existing utility guidelines

### `/src/app/components/blocks/dev-tools/`
No guideline directory expected — internal tooling

- [ ] Verify these are dev-only components
- [ ] Document if any are used in production templates

---

## Expected Gaps

Based on project history, these areas likely have gaps:

### Feedback Blocks
- [ ] `Alert` — Has guideline from Jan 22 batch, verify currency
- [ ] `Badge` — Has guideline from Jan 22 batch, verify currency
- [ ] Other feedback components — Check for new additions

### Form Blocks
- [ ] Contact Form 7 — Guideline exists from Jan 22 batch
- [ ] Custom Form — Guideline exists from Jan 22 batch
- [ ] Any new form components since Jan 22

### WooCommerce Blocks
Guideline location: `/guidelines/blocks/woocommerce/`

- [ ] Product Grid — Guideline exists
- [ ] Product Details — Guideline exists
- [ ] Add to Cart — Guideline exists
- [ ] Cart — Guideline exists
- [ ] Checkout — Guideline exists
- [ ] Any new WooCommerce components

### Widget Blocks
Guideline location: `/guidelines/blocks/widgets/`

- [ ] Latest Posts, Categories, Tag Cloud, RSS, Social Icons
- [ ] All guidelines exist from Jan 22 batch

### Embed Blocks
Guideline location: `/guidelines/blocks/embed/`

- [ ] YouTube, Twitter, Instagram, Vimeo, Spotify, SoundCloud, Generic
- [ ] All guidelines exist from Jan 22 batch

---

## Remediation Actions

### Phase 1: Inventory (1 hour)
- [ ] Run file listing across all block subdirectories
- [ ] Create comprehensive cross-reference matrix
- [ ] Identify exact gaps

### Phase 2: Priority Guidelines (2-3 hours)
- [ ] Write guidelines for HIGH-priority missing blocks (used in customer-facing templates)
- [ ] Follow standard guideline template from blocks README

### Phase 3: Completeness (2-3 hours)
- [ ] Write guidelines for remaining gaps
- [ ] Update block overview documentation

---

## Definition of Done

- [ ] Every block component has a corresponding guideline
- [ ] All guidelines reference correct file paths
- [ ] All guidelines document BEM structure and CSS variable usage
- [ ] All guidelines document funky treatments (where applicable)
- [ ] Block overview (`overview-blocks.md`) updated with complete inventory
