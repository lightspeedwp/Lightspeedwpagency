# Positioning and Messaging Audit Report

**Date:** February 25, 2026
**Auditor:** AI (Orchestrator Prompt v1.0)
**Source Prompt:** `/prompts/strategy-audit/02-positioning-and-messaging-audit.md`

---

## Executive Summary

The homepage hero has been updated to systems-first language ("Structured Publishing Systems for WordPress") with a "Request a Systems Audit" primary CTA — this is **ALIGNED** with the 2026 positioning statement. However, the Services Landing page, Contact page, and several secondary pages still use generic agency language ("Comprehensive WordPress Solutions", "Let's build something amazing together"). The footer and most service detail pages retain the old "services" framing. Approximately **60% of hero messaging is ALIGNED or PARTIAL**, but **40% remains GENERIC/AGENCY-DEFAULT**, requiring targeted rewrites.

---

## 1. Hero Messaging Scores

**Positioning statement benchmark:** "LightSpeed builds structured publishing and commerce systems on WordPress that stay fast, governable, and AI-visible as you scale."

| Template | Headline | Subtitle/Description | Primary CTA | Score |
|---|---|---|---|---|
| **FrontPageTemplate** | "Structured Publishing Systems for WordPress" | "We engineer governed WordPress systems — tokenised design, accessible markup..." | "Request a Systems Audit" | **ALIGNED** |
| **ServicesLandingTemplate** | "Comprehensive WordPress Solutions" | "From custom block themes to complex WooCommerce stores, we build high-performance digital experiences" | "Discuss Your Project" | **GENERIC** |
| **SolutionsTemplate** | Varies (funky neon) | Solutions overview with industry/platform focus | Varies | **PARTIAL** |
| **AboutTemplate** | "We build structured publishing systems" | "A systems engineering team specialising in WordPress governance, design tokens, and editorial safety" | N/A (info page) | **ALIGNED** |
| **ContactPageTemplate** | "Let's build something amazing together" | "Whether you need a new WordPress website, WooCommerce store, or ongoing support" | "Send Message" | **GENERIC** |

### Issue Details

1. **ServicesLandingTemplate** — "Comprehensive WordPress Solutions" is commodity language. Should be: "Publishing System Foundations, Growth, and Enterprise" or similar three-tier framing.
2. **ContactPageTemplate** — "Let's build something amazing together" is the textbook agency cliche. Should be: "Request a Systems Audit" or "Start Your Publishing System Project."
3. **ServicesLandingTemplate intro** — "A Full-Service Agency Approach" is explicitly the frame we're moving away from.

---

## 2. CTA Architecture

**Proposed CTA hierarchy:**
1. "Request a Systems Audit" (mid-funnel, primary)
2. "Book Consultation" (high-commitment)
3. "Explore Systems" (discovery)

| Template | Primary CTA Text | Destination | Mid-Funnel CTA | Score |
|---|---|---|---|---|
| **FrontPageTemplate** | "Request a Systems Audit" | `/contact` | Yes (hero) | **ALIGNED** |
| **ServicesLandingTemplate** | "Discuss Your Project" | `/contact` | No | **GENERIC** |
| **SolutionsTemplate** | Varies per solution | `/contact` | No | **PARTIAL** |
| **AboutTemplate** | N/A | — | No | N/A |
| **ContactPageTemplate** | "Send Message" (form submit) | Form | No systems audit framing | **GENERIC** |
| **HostingTemplate** | "Get Started" / plan-specific | `/contact` | No | **GENERIC** |
| **PricingTemplate** | Plan-specific CTAs | `/contact` | No | **PARTIAL** |
| **WhyChooseUsTemplate** | "Get Started Today" | `/contact` | No | **GENERIC** |
| **GuaranteesTemplate** | "Start Your Project" | `/contact` | No | **GENERIC** |

### CTA Issues

- **Only the homepage** uses "Request a Systems Audit" as primary CTA
- **8+ key landing pages** still use generic CTAs ("Discuss Your Project", "Get Started", "Start Your Project")
- **No mid-funnel systems audit offer** on service/solution detail pages
- **Contact page** doesn't frame the form as a "systems audit request"
- **FunkyCTA pattern** (used on most pages) still uses old CTA text in many instances

---

## 3. Voice and Tone Assessment

### Sample 1: Front Page Hero
> "We engineer governed WordPress systems — tokenised design, accessible markup, and measurable performance — so your editors publish with confidence and your site stays coherent at scale."
**Score: SYSTEMS-FIRST** — Leads with method (tokenised, governed), ties to outcomes (publish with confidence, coherent at scale).

### Sample 2: Services Landing Page Intro
> "A Full-Service Agency Approach — We don't just write code. We partner with you to understand your business goals, designing scalable systems that grow as you do."
**Score: MIXED** — "Full-Service Agency Approach" is agency-default, but "scalable systems" hints at systems language. The "partner with you" framing is agency-default.

### Sample 3: About Page Story
> "Founded in 2010, we started with a simple mission: to make the web a better place. What began as a small duo of freelancers has grown into a full-service digital agency with a global footprint."
**Score: AGENCY-DEFAULT** — Classic origin story language. Should reframe around systems evolution: "We started building WordPress sites; we now engineer publishing systems."

### Sample 4: Contact Page Hero
> "Whether you need a new WordPress website, WooCommerce store, or ongoing support - we're here to help."
**Score: AGENCY-DEFAULT** — This is the most generic sentence possible. Should reframe: "Tell us about your publishing goals and we'll scope a systems audit."

### Sample 5: Why Choose Us Features
> "Fastest Development — Streamlined processes and modern tooling let us deliver high-quality WordPress sites faster than industry averages."
**Score: AGENCY-DEFAULT** — "Fastest development" is a speed claim with no systems context. Should be: "Governed Development — Token-driven architecture means fewer defects, faster iteration, and predictable delivery."

### Summary

| Score | Count | Percentage |
|---|---|---|
| SYSTEMS-FIRST | 2 (homepage hero, about hero) | 20% |
| MIXED | 3 (services intro, some solution pages, some CTA sections) | 30% |
| AGENCY-DEFAULT | 5 (contact, why choose us, about story, services landing hero, most CTAs) | 50% |

---

## 4. Authority Sequencing

### Homepage (FrontPageTemplate)

| Viewport | Content | Proof Present? |
|---|---|---|
| VP1 | Hero: headline + CTA + stats (130+ projects, 100% satisfaction, WCAG AA) | **YES** (inline stats) |
| VP2 | ProofStrip (client count, avg rating, years experience) | **YES** (added Task 1.2) |
| VP3 | Why Choose LightSpeed (6 features) | No (persuasion, not proof) |
| VP4 | Services grid | No |
| VP5+ | Stats, Process, Testimonials, FAQ, CTA | Testimonials at VP7+ |

**Assessment:** Proof is placed early (VP1-2) which is ALIGNED with the framework. However, the Automattic testimonial is buried deep in the page (VP7+). It should be elevated to VP3-4 for maximum credibility.

### Services Landing Page

| Position | Content | Proof? |
|---|---|---|
| Hero | "Comprehensive WordPress Solutions" | No |
| Section 2 | Intro paragraph | No |
| Section 3 | Tech stack | No |
| Section 4+ | Service categories | No |

**Assessment: MISALIGNED** — No proof in first 3 viewports. No testimonials, metrics, or case study references visible early.

### About Page

| Position | Content | Proof? |
|---|---|---|
| Hero | Stats (15+ years, 50+ team, Global) | **YES** |
| Section 2 | Story (origin narrative) | Partial (history is implicit proof) |
| Section 3 | Mission/Vision | No |
| Section 4 | Values | No |
| Section 5+ | Timeline, Expertise | Partial |

**Assessment: PARTIAL** — Stats in hero are good, but no client testimonials or case study references in first 3 sections.

### Contact Page

| Position | Content | Proof? |
|---|---|---|
| Hero | Stats (22+ years, 120+ websites, 24hrs response) | **YES** |
| Section 2 | Contact form + methods | No |

**Assessment: PARTIAL** — Stats are present but no testimonial or case study reference to build confidence before the form.

---

## 5. Priority Rewrites

### P0 — Critical (do first)

1. **Rewrite ServicesLandingTemplate hero** — Replace "Comprehensive WordPress Solutions" with three-tier model framing. Replace "Discuss Your Project" CTA with "Request a Systems Audit."
2. **Rewrite ContactPageTemplate hero** — Replace "Let's build something amazing together" with "Request a Systems Audit" and frame the form as an audit request.
3. **Update FunkyCTA pattern** — Ensure all instances use "Request a Systems Audit" as default primary CTA text.

### P1 — High (pre-launch)

4. **Rewrite About story section** — Replace agency origin narrative with systems evolution framing.
5. **Update all "Why Choose" features** — Replace speed/experience claims with systems/governance outcomes.
6. **Elevate Automattic testimonial** — Move to VP3-4 on homepage and services landing page.
7. **Add proof to Services Landing** — Insert a ProofStrip or testimonial in the first 2 viewports.

### P2 — Medium

8. **Update all service detail page CTAs** — Replace "Discuss Your Project" / "Get Started" with "Request a Systems Audit."
9. **Update hosting/pricing CTAs** — Add systems audit as a secondary CTA alongside plan-specific CTAs.
10. **Create "systems audit" page content** — Define what a systems audit includes and expected outcomes.

### P3 — Low (enhancement)

11. **Rewrite all "Why Choose Us" page content** — Full systems-first rewrite.
12. **Create ICP-specific messaging variants** — Government, education, healthcare, publishing verticals.
13. **Add definitional headers** — "What is a structured publishing system?" on homepage for AI search.

---

## Estimated Effort

| Action | Estimated Hours |
|---|---|
| Hero messaging rewrites (5 templates) | 3-4h |
| CTA standardisation (20+ pages) | 4-6h |
| Voice/tone rewrites (10+ data files) | 6-8h |
| Authority sequencing (testimonial moves) | 2-3h |
| **Total** | **15-21h** |

---

**END OF AUDIT 02**
