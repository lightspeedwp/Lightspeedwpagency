# Authority and Proof Placement Audit Report

**Date:** February 25, 2026
**Auditor:** AI (Orchestrator Prompt v1.0)
**Source Prompt:** `/prompts/strategy-audit/06-authority-proof-placement-audit.md`

---

## Executive Summary

The homepage has **strong proof placement** — a ProofStrip in VP2 and inline stats in the hero (VP1) — aligning with the framework's requirement for "one metric strip near the hero." However, **service and solution landing pages lack early proof entirely**, burying testimonials and case study references deep in the page. The Automattic testimonial — the single highest-value proof asset — is not strategically placed on key conversion pages. The mid-funnel "Request a Systems Audit" CTA exists only on the homepage; all other pages use generic CTAs. **4 proof patterns from the framework are missing** as components (proof chips, method cards, authority quotes, metric callouts).

---

## 1. Homepage Conversion Path

### Section-by-Section Analysis

| Viewport | Section | Content | Proof? | CTA? |
|---|---|---|---|---|
| VP1 | Hero | "Structured Publishing Systems for WordPress" + stats (130+ projects, 100% satisfaction, WCAG AA) | **YES** (inline stats) | **YES** ("Request a Systems Audit") |
| VP2 | ProofStrip | Client count, avg rating, years experience | **YES** (metric strip) | No |
| VP3 | Why Choose LightSpeed | 6 feature cards (speed, design, experience, security, support, results) | No (persuasion) | No |
| VP4 | Services Grid | Service categories with icons | No | Per-card links |
| VP5 | Featured Projects | Portfolio highlights | **YES** (work samples) | "View All Work" |
| VP6 | Stats Section | Key metrics (projects, clients, satisfaction) | **YES** (stats) | No |
| VP7 | Process | Step-by-step workflow | No (methodology) | No |
| VP8 | Testimonials | Client testimonials grid | **YES** (social proof) | No |
| VP9 | Blog Preview | Recent posts | No | "Read More" |
| VP10 | FAQ | Common questions | No | No |
| VP11 | CTA Section | Final conversion prompt | No | **YES** (CTA) |

### Assessment

- **Proof before persuasion:** YES — VP1 (stats) and VP2 (ProofStrip) are before VP3 (features).
- **Metric strip near hero:** YES — ProofStrip in VP2.
- **CTA layering:** Primary "Request a Systems Audit" (VP1) → "View Our Work" (VP5) → bottom CTA (VP11).
- **Automattic testimonial:** NOT strategically placed — appears in generic testimonials grid (VP8), not as a standalone authority block.

**Score: STRATEGIC** (VP1-2 proof placement is correct, but Automattic testimonial needs elevation)

---

## 2. Proof Element Inventory

### Proof Pattern Usage Across Templates

| Template | StatsSection | Testimonials | ClientLogos | CaseStudy | ProofStrip | Score |
|---|---|---|---|---|---|---|
| FrontPageTemplate | VP6 | VP8 | — | VP5 (featured) | VP2 | **STRATEGIC** |
| ServicesLandingTemplate | — | — | — | — | — | **MISSING** |
| SolutionsTemplate | — | — | — | — | — | **MISSING** |
| AboutTemplate | VP1 (hero stats) | VP5+ | — | — | — | **PARTIAL** |
| ContactPageTemplate | VP1 (hero stats) | — | — | — | — | **PARTIAL** |
| HostingTemplate | — | VP5+ | — | — | — | **BURIED** |
| PricingTemplate | — | — | — | — | — | **MISSING** |
| WhyChooseUsTemplate | VP3 | VP5+ | — | — | — | **BURIED** |
| GuaranteesTemplate | VP2 | — | — | — | — | **PARTIAL** |
| BlogIndexTemplate | — | — | — | — | — | **MISSING** |
| PortfolioArchiveTemplate | — | — | — | — | — | **MISSING** |
| WordPressSolutionTemplate | — | Testimonial section | — | — | — | **BURIED** |
| WooCommerceSolutionTemplate | — | Testimonial section | — | — | — | **BURIED** |
| TourOperatorTemplate | — | Testimonial section | — | — | — | **BURIED** |
| DiscoveryServiceTemplate | — | ServiceTestimonial | — | ServiceCaseStudies | — | **PARTIAL** |
| DesignServiceTemplate | — | ServiceTestimonial | — | ServiceCaseStudies | — | **PARTIAL** |
| DevelopmentServiceTemplate | — | ServiceTestimonial | — | ServiceCaseStudies | — | **PARTIAL** |
| PerformanceServiceTemplate | — | ServiceTestimonial | — | — | — | **BURIED** |
| SEOServiceTemplate | — | ServiceTestimonial | — | — | — | **BURIED** |

### Score Summary

| Score | Count | Templates |
|---|---|---|
| STRATEGIC | 1 | FrontPageTemplate |
| PARTIAL | 5 | About, Contact, Guarantees, Discovery, Design, Development |
| BURIED | 6 | Hosting, WhyChooseUs, WordPress, WooCommerce, TourOperator, Performance, SEO |
| MISSING | 5 | ServicesLanding, Solutions, Pricing, Blog, Portfolio |
| **Total** | **17** sampled | |

---

## 3. CTA Architecture

### CTA Inventory

| Template | CTA Text | Position | Type | Mid-Funnel "Systems Audit"? |
|---|---|---|---|---|
| FrontPageTemplate | "Request a Systems Audit" | Hero (VP1) | audit | **YES** |
| FrontPageTemplate | "View Our Work" | Hero (VP1) secondary | explore | No |
| ServicesLandingTemplate | "Discuss Your Project" | Hero | consultation | **No** |
| SolutionsTemplate | Varies per solution | End of page | consultation | **No** |
| AboutTemplate | N/A | — | — | **No** |
| ContactPageTemplate | "Send Message" | Form | contact | **No** |
| HostingTemplate | "Get Started" | Per-plan | consultation | **No** |
| PricingTemplate | Plan-specific | Per-plan | consultation | **No** |
| WhyChooseUsTemplate | "Get Started Today" | Bottom | consultation | **No** |
| GuaranteesTemplate | "Start Your Project" | Bottom | consultation | **No** |
| Service detail pages (x10+) | "Discuss Your Project" / "Get Started" | Bottom | consultation | **No** |
| Solution detail pages (x8+) | "Get In Touch" / "Request Quote" | Bottom | consultation | **No** |
| BlogIndexTemplate | "Subscribe" | Sidebar/bottom | newsletter | **No** |
| PortfolioArchiveTemplate | "View Project" | Per-card | explore | **No** |

### CTA Issues

- **Only 1 of 17+ key pages** uses "Request a Systems Audit"
- **0 service/solution detail pages** have mid-funnel systems audit CTA
- **Generic "Discuss Your Project"** is the dominant CTA across services
- **No tiered CTA structure** (audit → consultation → explore) on any page except homepage

---

## 4. Conversion Funnel Map

### User Journey: Homepage → Services

```
Homepage (VP1: "Request a Systems Audit") 
  → Services Landing ("Comprehensive WordPress Solutions" — no proof, generic CTA)
    → Service Detail (proof buried at VP5+, "Discuss Your Project" CTA)
      → Contact ("Let's build something amazing" — generic)
```

**Issue:** The systems-first messaging is abandoned after the homepage. Users entering via Services see a traditional agency experience.

### User Journey: Homepage → Portfolio

```
Homepage (VP5: "View Our Work")
  → Portfolio Archive (cards only, no proof strip, no testimonials)
    → Single Project (case study format — proof present but not structured per framework)
```

**Issue:** Portfolio has no proof context (no metrics, no testimonials before browsing). Case studies don't follow the "obstacle → system → result" template.

### User Journey: Homepage → Solutions

```
Homepage → Solutions (feature grid, no proof, no metrics)
  → Solution Detail (testimonial buried, no case study link in first VP)
    → Contact (generic form)
```

**Issue:** No proof in first 2 viewports of any solution page.

---

## 5. Missing Proof Patterns

| Pattern | Status | Description | Priority |
|---|---|---|---|
| **Proof Chips** | MISSING | Single-line evidence: "Migrated X posts with zero downtime" + link | P0 |
| **Method Cards** | MISSING | Short method statement + link to playbook | P0 |
| **Authority Quotes** | MISSING | Standalone blockquote with photo, role, company logo (for Automattic testimonial) | P0 |
| **Metric Callouts** | MISSING | Inline proof card (single stat + context) for editorial content | P1 |
| **Case Study Anatomy** | PARTIAL | Exists but doesn't follow "obstacle → system → result" structure | P1 |
| **Proof Strip** | EXISTS | ProofStrip.tsx — already created and used on homepage | — |

---

## 6. Priority Actions

### P0 — Critical

1. **Add ProofStrip to Services Landing, Solutions, and Pricing pages** — Every conversion page needs metrics in the first 2 viewports.
2. **Create AuthorityQuote pattern** — For strategic Automattic testimonial placement on homepage (VP3-4), Services, and Solutions pages.
3. **Create ProofChip pattern** — Single-line evidence blocks for inline placement.
4. **Standardise "Request a Systems Audit" as default CTA** across all service/solution pages.

### P1 — High

5. **Create MethodCard pattern** — For methodology display on Systems hub pages.
6. **Create MetricCallout pattern** — Inline proof for editorial content.
7. **Restructure case study template** — Adopt "Context → Diagnosis → System → Outcomes → Transfer" anatomy.
8. **Add testimonial to first 3 sections** of all service detail pages.

### P2 — Medium

9. **Create conversion funnel tracking** — Map CTA click paths to identify drop-offs.
10. **Add proof to Portfolio archive** — Metrics or testimonial before card grid.
11. **Create "proof-before-persuasion" checklist** — Enforce proof in VP1-2 as a pattern rule.

---

## Estimated Effort

| Action | Estimated Hours |
|---|---|
| ProofStrip rollout (5 pages) | 3-4h |
| AuthorityQuote pattern (create + integrate) | 4-6h |
| ProofChip + MethodCard + MetricCallout (3 patterns) | 6-8h |
| CTA standardisation (20+ pages) | 4-6h |
| Case study restructure (template + data) | 6-8h |
| **Total** | **23-32h** |

---

**END OF AUDIT 06**
