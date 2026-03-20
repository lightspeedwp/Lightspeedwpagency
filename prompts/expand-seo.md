# Expand SEO — Discover SEO and Meta Improvements

**Type:** Discovery + Recommendation  
**Version:** 1.0.0  
**Created:** March 18, 2026  
**Status:** Active  
**Trigger:** `expand seo`  
**Repeatable:** Yes  
**Estimated Duration:** 15-25 minutes

---

## Purpose

Scan templates for missing meta descriptions, Open Graph tags, structured data (JSON-LD schema markup), internal linking opportunities, and semantic HTML improvements that would boost search engine visibility.

---

## Instructions

**Environment Reminder:** You are working inside **Figma Make**. Do NOT suggest browser refresh, cache clearing, or terminal commands.

### Step 1 — Audit Current SEO Implementation

1. Search for `<title>`, `<meta>`, `og:` tags across templates.
2. Check for a shared SEO/Head component.
3. Search for JSON-LD schema markup.
4. Check for canonical URLs, robots meta, sitemap.xml references.

### Step 2 — Identify Missing Meta Data

For each template/page:

| Page | Title Tag | Meta Description | OG Tags | Schema | Priority |
|---|---|---|---|---|---|
| Home | ✅ | ❌ | ❌ | ❌ | High |
| Services Hub | ✅ | ❌ | ❌ | ❌ | High |
| About | ❌ | ❌ | ❌ | ❌ | Medium |

### Step 3 — Identify Internal Linking Gaps

1. Pages that should cross-link but don't (e.g., service pages should link to related services).
2. Hub/index pages missing links to child pages.
3. Content mentioning services/pages without linking to them.

### Step 4 — Recommend SEO Enhancements

| Enhancement | Scope | Complexity | Priority |
|---|---|---|---|
| Create shared SEO component | All pages | Medium | High |
| Add Organization schema | Home page | Low | High |
| Add Service schema | All service pages | Low | Medium |
| Add BreadcrumbList schema | All depth-2+ pages | Low | Medium |
| Internal linking in service descriptions | Service data files | Low | Low |

### Step 5 — User Approval & Task Creation

Present recommendations. Add approved items to `/tasks/task-list.md`.

---

**Prompt Location:** `/prompts/expand-seo.md`  
**Category:** Discovery  
**Difficulty:** Medium  
**Repeatable:** Yes
