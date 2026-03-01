# Phase 5: Patterns and Blocks

**Status:** PENDING
**Dependencies:** Phase 3 (design system compliance for new patterns)
**Estimated Effort:** 34-48 hours
**Populated From:** Report 04

---

## Critical Tasks (Must Complete)

- [ ] **5.1 Create DefinitionBlock pattern** — "What / Why / How / Proof" structure for Systems pages. Component + CSS + docs. Maps to `wp:group` with constrained editing. (Audit 04) — *Note: Also listed in Phase 1 for urgency*
- [ ] **5.2 Create CaseStudyAnatomy pattern** — Standardised case study structure: Challenge → System → Outcomes → Proof. Component + CSS + docs. (Audit 04)

## High Priority (Should Complete)

- [ ] **5.3 Create MethodCard pattern** — Methodology display with numbered steps and artefact outputs. For "System Architecture Sprint" pages. (Audit 04)
- [ ] **5.4 Create AuthorityQuote pattern** — Standalone blockquote with attribution photo, role, company logo. Primary use: Automattic testimonial. (Audit 04, 06)
- [ ] **5.5 Create MetricCallout pattern** — Inline proof card: single stat + context sentence + optional link. For embedding within editorial content. (Audit 04, 06)
- [ ] **5.6 Create ProofChip pattern** — Single-line evidence: "Migrated X posts with zero downtime" + "See method" link. (Audit 06)

## Medium Priority (Nice to Have)

- [ ] **5.7 Create UpdateLog pattern** — Changelog/update tracking for Systems pages. Shows what changed, when, why. (Audit 04)
- [ ] **5.8 Create InsightCard pattern** — Card variant for Insights listing with category badge, reading time, author avatar. (Audit 04)
- [ ] **5.9 Create RelatedSystemsRail pattern** — Sidebar rail linking to relevant Systems, Case Studies, Insights pages. (Audit 04)
- [ ] **5.10 Formalise pattern registry** — Document all 95+ patterns with: intent, constraints, allowed edits, semantic rules, test checklist. (Audit 04)

## Pattern Creation Checklist

For each new pattern:
- [ ] Component file in `/src/app/components/patterns/`
- [ ] CSS file in `/src/styles/patterns/`
- [ ] BEM naming (`.pattern-name__element--modifier`)
- [ ] 100% CSS variables (no hardcoded values)
- [ ] WordPress block class alignment (`.wp-block-*` where applicable)
- [ ] WCAG 2.1 AA accessible
- [ ] Keyboard navigable
- [ ] Reduced motion support
- [ ] JSDoc documentation
- [ ] Guideline documentation in `/guidelines/patterns/`

## Implementation Notes

- DefinitionBlock is the highest priority — it's the primary pattern for all 5 Systems child pages.
- CaseStudyAnatomy replaces the current generic case study template with a framework-aligned structure.
- AuthorityQuote should be a standalone component, distinct from TestimonialGrid/TestimonialInline — it's for strategic placement of high-value testimonials.
- All new patterns must follow the existing CSS architecture (dedicated CSS file, BEM, CSS variables only).
