# Phase 8: AEO and Schema

**Status:** PENDING
**Dependencies:** Phase 4 (content and messaging)
**Estimated Effort:** 28-41 hours
**Populated From:** Report 07

---

## Critical Tasks (Must Complete)

- [ ] **8.1 Implement JSON-LD schema utility** — Create a reusable utility in `/src/app/utils/schema.ts` that generates Article, Organisation, FAQ, and BreadcrumbList JSON-LD markup. Render as `<script type="application/ld+json">` in `<head>`. (Audit 07)
- [ ] **8.2 Add Article schema to blog posts** — Use blog post data (title, author, date, excerpt, image) to generate Article schema. Add `dateModified` to blog post data. (Audit 07)
- [ ] **8.3 Add Organisation schema to About page** — Use company data to generate Organisation schema with name, URL, logo, description, address, contacts, social profiles. (Audit 07)

## High Priority (Should Complete)

- [ ] **8.4 Add FAQ schema to all FAQ sections** — 13 FAQ collections are structured correctly — add JSON-LD output. Note: Google limits FAQ rich results, but schema still aids AI retrieval. (Audit 07)
- [ ] **8.5 Add BreadcrumbList schema** — Generate from breadcrumb component path segments. (Audit 07)
- [ ] **8.6 Add definitional headers to 10 key pages** — "What is X", "How X works", "Why X matters" headers for entity reinforcement. (Audit 07) — *Also in Phase 4*
- [ ] **8.7 Implement answer-first formatting** — Rewrite opening paragraphs of 10 key pages to lead with the answer. (Audit 07) — *Also in Phase 4*

## Medium Priority (Nice to Have)

- [ ] **8.8 Create schema testing suite** — Validate JSON-LD output against Google's structured data guidelines. Test with Google Rich Results Test. (Audit 07)
- [ ] **8.9 Implement crawl policy** — Decide on OAI-Searchbot allowance for ChatGPT search. Document decision. Implement in robots.txt. (Audit 07)
- [ ] **8.10 Add internal cross-linking** — Systems → Case Study → Playbook → Insights hub-and-spoke linking model across 10+ templates. (Audit 07)
- [ ] **8.11 Create citation-ready formatting guidelines** — Short paragraphs, clear sourcing, consistent claims-to-proof linking. Add to voice/tone guidelines. (Audit 07)

## Schema Utility Design

```typescript
// /src/app/utils/schema.ts

interface ArticleSchema {
  headline: string;
  author: { name: string; url?: string };
  datePublished: string;
  dateModified?: string;
  image?: string;
  description: string;
}

interface OrganisationSchema {
  name: string;
  url: string;
  logo: string;
  description: string;
  address: { streetAddress: string; city: string; country: string };
  contactPoint: { email: string; telephone?: string };
  sameAs: string[]; // social profiles
}

interface FAQSchema {
  questions: { question: string; answer: string }[];
}

// Generate JSON-LD string for <script> tag
export function generateArticleSchema(data: ArticleSchema): string;
export function generateOrganisationSchema(data: OrganisationSchema): string;
export function generateFAQSchema(data: FAQSchema): string;
export function generateBreadcrumbSchema(items: { name: string; url: string }[]): string;
```

## Implementation Notes

- Schema markup is invisible to users but critical for search engines and AI features.
- All required data already exists in data files — this is primarily a utility creation task.
- FAQ schema: Google restricts FAQ rich results to specific authoritative domains, but schema still aids AI retrieval and structured data signals.
- Crawl policy decision (OAI-Searchbot) is a business decision, not a technical one — document the decision and implement accordingly.
- Cross-linking is content work that depends on Systems hub pages existing (Phase 1).
