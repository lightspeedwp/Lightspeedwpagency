# Voice, Tone, and AEO Readiness Audit Report

**Date:** February 25, 2026
**Auditor:** AI (Orchestrator Prompt v1.0)
**Source Prompt:** `/prompts/strategy-audit/07-voice-tone-and-aeo-audit.md`

---

## Executive Summary

Voice and tone compliance is **mixed** — the homepage and about page use systems-first language (ALIGNED), but service detail pages and legacy data files retain generic agency language ("world-class", "cutting-edge", "leverage"). **7 generic language violations** were found across 6 data files. AEO readiness is **PARTIAL** — FAQ sections are well-structured for AI retrieval, but most pages lack definitional headers ("What is X"), answer-first formatting, and schema-ready data structures. Schema potential is **HIGH** — blog posts have author/date data, FAQ sections use accordion patterns, and breadcrumbs exist — but no schema markup is implemented. Internal linking follows a basic hub model but lacks the systematic "Systems → Case Study → Playbook" cross-linking required by the content strategy.

---

## 1. Voice and Tone Assessment

| Data File | Voice Mode | Systems Language | Outcome-Led | Score |
|---|---|---|---|---|
| `front-page.ts` (hero) | Advisory | "Structured Publishing Systems", "governed WordPress systems", "tokenised design" | "publish with confidence", "coherent at scale" | **ALIGNED** |
| `about-page.ts` (hero) | Advisory | "systems engineering team", "WordPress governance, design tokens, editorial safety" | "coherent under scale and compliance" | **ALIGNED** |
| `services-landing-page.ts` | Advisory | "scalable systems" (partial) | "high-performance digital experiences" (generic) | **PARTIAL** |
| `design-service-page.ts` | Technical | Mentions FSE, block themes | Lists capabilities, not outcomes | **PARTIAL** |
| `development-service-page.ts` | Technical | Mentions patterns, theme.json | Mixed — some outcomes, some capabilities | **PARTIAL** |
| `why-choose-us-page.ts` | Advisory | None — "cutting-edge block theme expertise" | "build sites that last" (generic) | **GENERIC** |
| `services-detailed.ts` | Mixed | None — "world-class security services" | Capability-led | **GENERIC** |
| `journey-stage-pages.ts` | Founder | "cutting-edge AI capabilities" | Mixed — AI outcomes + generic hype | **PARTIAL** |
| `contact-page.ts` | Advisory | None — "WordPress website, WooCommerce store" | "we're here to help" (generic) | **GENERIC** |
| `hosting-page.ts` | Technical | Partial — mentions performance | "enterprise hosting" (generic) | **PARTIAL** |

### Score Distribution

| Score | Count | Percentage |
|---|---|---|
| ALIGNED | 2 | 20% |
| PARTIAL | 5 | 50% |
| GENERIC | 3 | 30% |

---

## 2. Generic Language Violations

| File | Line | Text | Issue | Replacement Suggestion |
|---|---|---|---|---|
| `blog-posts.ts` | 225 | "keeps our support quality **world-class**" | Vague superlative | "maintains our support SLA (24-hour response, 99% satisfaction)" |
| `blog-posts.ts` | 252 | "Building **World-Class** Travel Websites" | Vague superlative | "Building High-Performance Travel Booking Systems" |
| `services-detailed.ts` | 91 | "**world-class** security services" | Vague superlative | "security governance: monitoring, patching, incident playbooks" |
| `blog-post-page.ts` | 118 | "**leverage** core blocks" | Vague verb | "use core blocks" or "rely on core blocks" |
| `why-choose-us-page.ts` | 19 | "**cutting-edge** block theme expertise" | Vague adjective | "modern block theme engineering (theme.json v3, FSE)" |
| `tour-operator.ts` | 64 | "**world-class** cuisine" | Content copy (acceptable for tour descriptions) | Low priority — client content |
| `journey-stage-pages.ts` | 458 | "**cutting-edge** AI capabilities" | Vague adjective | "production AI integrations: structured data, content pipelines, search readiness" |

**Total violations: 7** (5 high priority in service/marketing copy, 2 low priority in content)

---

## 3. AEO Formatting Score

| Page | Definitional Headers | Short Paragraphs | Answer-First | FAQ Structured | Score |
|---|---|---|---|---|---|
| **FrontPageTemplate** | No "What is" headers | Mixed — some long sections | No | YES (accordion) | **PARTIAL** |
| **ServicesLandingTemplate** | No definitional headers | Mixed | No | No FAQ | **WEAK** |
| **AboutTemplate** | No "What is" headers | Long narrative paragraphs | No | YES (accordion) | **PARTIAL** |
| **HostingTemplate** | Partial ("How it works") | Good — scannable features | Partial | YES (accordion) | **PARTIAL** |
| **FAQTemplate** | YES (question format) | Good — FAQ answers are concise | YES (Q&A format) | YES (accordion) | **ALIGNED** |

### AEO Gaps

1. **No definitional headers** — No page has "What is structured publishing?" or "What are design tokens?" style headers.
2. **No answer-first formatting** — Most sections lead with context, not answers. AI search prefers answer → context → proof.
3. **Long narrative blocks** — About story, services descriptions use 3-4 paragraph blocks instead of short, scannable sections.
4. **FAQ sections ARE well-structured** — Accordion pattern with question/answer pairs works well for AI retrieval.

---

## 4. Schema Readiness

### Article Schema (Blog Posts)

| Requirement | Status | Data Available |
|---|---|---|
| `headline` | YES | `post.title` in `blog-posts.ts` |
| `author.name` | YES | `post.author.name` with bio |
| `datePublished` | YES | `post.date` |
| `dateModified` | MISSING | Not tracked in data |
| `image` | YES | `post.featuredImage` |
| `description` | YES | `post.excerpt` |
| `articleBody` | PARTIAL | Mock content only |

**Assessment: 85% ready** — Add `dateModified` to blog post data.

### Organisation Schema (About)

| Requirement | Status | Data Available |
|---|---|---|
| `name` | YES | "LightSpeed" |
| `url` | YES | Site URL |
| `logo` | YES | Logo component |
| `description` | YES | About page hero description |
| `foundingDate` | YES | Timeline data |
| `address` | YES | Contact page data |
| `contactPoint` | YES | Contact methods |
| `sameAs` (socials) | YES | Footer social links |

**Assessment: 95% ready** — All data exists.

### FAQ Schema

| Requirement | Status | Data Available |
|---|---|---|
| `mainEntity` array | YES | FAQ data in `faqs.ts` + `faqs-extended.ts` |
| `name` (question) | YES | `faq.question` |
| `acceptedAnswer.text` | YES | `faq.answer` |

**Assessment: 100% ready** — 13 FAQ collections with proper Q&A structure.

### BreadcrumbList Schema

| Requirement | Status | Data Available |
|---|---|---|
| `itemListElement` | YES | Breadcrumb component generates path segments |
| `name` per item | YES | Page titles from route data |
| `item` (URL) per item | YES | Route paths |

**Assessment: 90% ready** — Component exists, needs schema output.

### Schema Implementation Status

**No schema markup is currently implemented.** All data structures exist to support JSON-LD, but the prototype doesn't generate `<script type="application/ld+json">` blocks.

---

## 5. Internal Linking Model

### Hub-and-Spoke Analysis

| Page Type | Links to Case Studies? | Links to Methodology? | Links to Related Insights? | Cross-Link Score |
|---|---|---|---|---|
| Homepage | YES (Featured Projects) | NO | YES (Blog Preview) | **PARTIAL** |
| Service Detail Pages | YES (ServiceCaseStudies) | NO | NO | **PARTIAL** |
| Solution Detail Pages | NO | NO | NO | **WEAK** |
| About Page | NO | YES (Process link) | NO | **WEAK** |
| Portfolio Single | NO (only related projects) | NO | NO | **WEAK** |
| Blog Posts | NO | NO | YES (Related Posts) | **PARTIAL** |

### Issues

1. **No Systems → Case Study links** — Systems pages don't exist yet, so this link type is impossible.
2. **No Case Study → Methodology links** — Portfolio singles show results but don't link back to the system/method that achieved them.
3. **No "Proof chain"** — Users can't follow: System page → How we do it → Case study → Results → Related insights.
4. **Service pages have case study links** — ServiceCaseStudies pattern exists and is used, which is good.
5. **Blog posts lack cross-linking** — No links to relevant service/solution/system pages.

---

## 6. Priority Actions

### P0 — Critical (AEO foundation)

1. **Add definitional headers to key pages** — "What is a structured publishing system?", "What are design tokens?", "How pattern governance works" — these are the entities to reinforce.
2. **Implement answer-first formatting** — Rewrite top paragraphs of 10 key pages to lead with the answer, then context, then proof.
3. **Rewrite 5 generic language violations** — Replace "world-class", "cutting-edge", "leverage" with specific systems language.

### P1 — High (Schema)

4. **Implement JSON-LD schema generation** — Create a schema utility that outputs Article, Organisation, FAQ, and BreadcrumbList markup.
5. **Add `dateModified` to blog post data** — Required for Article schema.
6. **Create definitional pages** — 4 entity-anchoring pages for AI search reinforcement.

### P2 — Medium (Linking)

7. **Add cross-links to case study template** — Link back to methodology and system pages.
8. **Add "Related System" links to blog posts** — Connect insights to system/service pages.
9. **Create proof chain navigation** — System → Method → Case Study → Results pathway.

### P3 — Low (Enhancement)

10. **Implement crawl policy** — Decide on OAI-Searchbot allowance, implement in robots.txt.
11. **Create schema testing suite** — Validate JSON-LD output against Google's structured data guidelines.
12. **Add FAQ schema to all FAQ sections** — 13 FAQ collections ready for schema markup.

---

## Estimated Effort

| Action | Estimated Hours |
|---|---|
| Generic language rewrites (5 files) | 2-3h |
| Definitional headers + answer-first rewrites (10 pages) | 6-8h |
| JSON-LD schema utility + integration | 8-12h |
| Internal cross-linking enhancement (10+ templates) | 4-6h |
| Definitional pages creation (4 pages) | 8-12h |
| **Total** | **28-41h** |

---

**END OF AUDIT 07**
