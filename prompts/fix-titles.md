# Fix Titles — Title Case to Sentence Case Audit & Fix

**Category:** Fix  
**Version:** 1.0.0  
**Last Updated:** 2026-03-18  
**Status:** Active  
**Trigger:** `fix titles`

---

## Purpose

Scan all UI headings, page titles, section titles, and navigation labels across the codebase to identify and fix Title Case violations. All titles must use **sentence case** — capitalise only the first word and proper nouns (including acronyms).

**Design System Rule:** All user-facing headings must follow sentence case. See `/guidelines/Guidelines.md` § Design System Compliance.

---

## What This Prompt Does

1. **Scans** all TSX files for headings (`<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>`, `<h6>`) and title props
2. **Identifies** Title Case violations (e.g., "Performance & Accessibility Features" instead of "Performance & accessibility features")
3. **Fixes** violations inline by converting to sentence case
4. **Preserves** proper nouns, acronyms, and brand names (LSX Design, WebGL, WCAG, AI, WordPress, WooCommerce, etc.)
5. **Writes** a report to `/reports/YYYY-MM/fix-titles-YYYY-MM-DD.md`
6. **Updates** `/tasks/task-list.md` with any manual review items

---

## Scope

### In Scope

- All heading tags (`<h1>` to `<h6>`)
- `pageTitle` props and data file entries
- `sectionTitle` props and pattern titles
- Navigation labels in route configs
- Hero headlines and subheadlines
- Feature list headings
- Stats block labels
- Card titles
- Button labels (where appropriate)
- Tab labels
- Accordion headings

### Out of Scope

- Code comments
- File names
- CSS class names
- Environment variables
- Import paths

---

## Rules

### Sentence Case Definition

**Correct:**
- "Performance & accessibility features"
- "Why choose LSX Design?"
- "AI-powered solutions for modern web"
- "Build with WordPress and WooCommerce"

**Incorrect (Title Case):**
- "Performance & Accessibility Features"
- "Why Choose LSX Design?"
- "AI-Powered Solutions For Modern Web"
- "Build With WordPress And WooCommerce"

### Preserve These

**Acronyms** (always uppercase):
- AI, API, CSS, HTML, JS, JSON, SEO, UX, UI, WCAG, ARIA, MVP, ROI, CTA, SaaS, REST, HTTP, HTTPS, URL, DOM, CMS, CRM, ERP, POS, PDF, FAQ, B2B, B2C, E2E, QA, DevOps, CI/CD, GPU, WebGL

**Proper Nouns** (capitalise as specified):
- LSX Design
- WordPress
- WooCommerce
- Figma
- React
- TypeScript
- Tailwind CSS
- Motion (formerly Framer Motion)
- GitHub
- GitLab
- Stripe
- PayPal
- Google
- Meta
- OpenAI
- Cloudflare
- Vercel
- Netlify
- Shopify
- Elementor
- Gutenberg
- Yoast
- Akismet
- Jetpack
- WPBakery

**Brand Names & Products:**
- LightSpeed WP
- LightSpeed WP Cloud
- LightSpeed WP Backup
- Funky Neon (design style name)

---

## Execution Steps

### Step 1: Read Guidelines

Read `/guidelines/Guidelines.md` § Design System Compliance for sentence case rule.

### Step 2: Scan Codebase

Scan all `.tsx` files in:
- `/src/app/components/blocks/`
- `/src/app/components/patterns/`
- `/src/app/components/parts/`
- `/src/app/components/templates/`
- `/src/app/components/pages/`
- `/src/data/`

Look for:
- Heading elements with Title Case text
- `pageTitle` and `sectionTitle` props
- Navigation labels
- Hero headlines
- Feature headings
- Stats labels

### Step 3: Identify Violations

Flag any heading that:
- Capitalises more than the first word
- Does NOT preserve acronyms or proper nouns

Example violations:
```tsx
<h2>Performance & Accessibility Features</h2>
{/* Should be: Performance & accessibility features */}

<h1>Why Choose LSX Design?</h1>
{/* Should be: Why choose LSX Design? */}

pageTitle: "Build With WordPress And WooCommerce"
{/* Should be: Build with WordPress and WooCommerce */}
```

### Step 4: Fix Violations Inline

Convert to sentence case while preserving:
- First word capitalisation
- Acronyms (AI, SEO, API, etc.)
- Proper nouns (LSX Design, WordPress, etc.)
- Brand names

Use the `fast_apply_tool` to apply fixes.

### Step 5: Write Report

Save findings to `/reports/YYYY-MM/fix-titles-YYYY-MM-DD.md`.

**Report Structure:**

```markdown
# Fix Titles Audit — [Date]

## Summary

- **Total Headings Scanned:** [count]
- **Violations Found:** [count]
- **Violations Fixed:** [count]
- **Manual Review Required:** [count]

## Violations Fixed

### [File Path]

**Before:**
```tsx
<h2>Performance & Accessibility Features</h2>
```

**After:**
```tsx
<h2>Performance & accessibility features</h2>
```

**Reason:** Title Case → Sentence Case

---

## Manual Review Required

### [File Path]

**Current:**
```tsx
<h1>About Our Team Of Experts</h1>
```

**Suggested:**
```tsx
<h1>About our team of experts</h1>
```

**Question:** Is "Experts" a brand term or generic?

---

## Recommendations

- [ ] Update content guidelines to reference sentence case rule
- [ ] Add linting rule to catch Title Case violations
- [ ] Review navigation labels for consistency
```

### Step 6: Update Task List

If any manual review items exist, add them to `/tasks/task-list.md`:

```markdown
- [ ] **Fix Titles Manual Review** — Review flagged headings for proper noun ambiguity (see `/reports/YYYY-MM/fix-titles-YYYY-MM-DD.md`)
```

---

## Environment Reminders

This is **Figma Make**. Never suggest:
- Browser refresh
- Cache clearing
- Terminal commands
- `npm run dev`
- Server restarts

All edits are made via file editing tools. Preview updates automatically.

---

## Design System Compliance

All fixes MUST maintain:
- **CSS variables** for colors, spacing, typography
- **BEM classes** (`.wp-*` prefix)
- **Phosphor icons** only (zero Lucide)
- **Semantic HTML** (proper heading hierarchy)

---

## Expected Outcomes

1. ✅ All headings converted to sentence case
2. ✅ Acronyms and proper nouns preserved
3. ✅ Report generated in `/reports/YYYY-MM/`
4. ✅ Task list updated (if manual review needed)
5. ✅ Zero Title Case violations remaining

---

## Version History

| Version | Date | Changes |
|---|---|---|
| 1.0.0 | 2026-03-18 | Initial creation — scan and fix Title Case violations |
