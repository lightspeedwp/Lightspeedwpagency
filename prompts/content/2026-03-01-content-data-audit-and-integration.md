# Content & Data Audit — Hardcoding Elimination + Real Content Integration

**Prompt ID:** `content/2026-03-01-content-data-audit-and-integration`
**Created:** 2026-03-01
**Author:** Ash Shaw (via Figma Make)
**Status:** READY TO EXECUTE
**Phase:** Phase 2 IA Restructure — Task 2.9 Content Integrity

---

## Objective

This is a **two-part audit and integration prompt**:

1. **Part A — Hardcoding Audit:** Scan every template component and pattern in `/src/app/components/` to find any content that is hardcoded directly in JSX instead of being sourced from data files in `/src/app/data/`. All content must live in data files so it can be managed as a single source of truth.

2. **Part B — Real Content Integration:** Update all data files and the `AboutHistoryTemplate.tsx` with authentic company content from the source material (below). Also add richly written, unique new blog posts to `blog-posts.ts` inspired by the real links and topics referenced in the source material.

**Reference source:** `/src/imports/lightspeed-company-history.md`

---

## Scope

### Files to Audit (Templates & Patterns)
- `/src/app/components/templates/*.tsx` — All template files
- `/src/app/components/patterns/*.tsx` — All pattern components
- `/src/app/components/parts/*.tsx` — Header and footer parts

### Data Files to Update
- `/src/app/data/company.ts` — Company metadata
- `/src/app/data/team.ts` — Team members (replace placeholder names with real team)
- `/src/app/data/about.ts` — Company history and values
- `/src/app/data/blog-posts.ts` — Blog posts (add new unique posts)

### Template to Expand
- `/src/app/components/templates/AboutHistoryTemplate.tsx` — Replace hardcoded milestone data; expand with real company origin story, BarCamp pivot moment, WordCamp involvement, AI transformation, and internship programme narrative

---

## Part A — Hardcoding Audit

### Audit Rules

A piece of content is considered **hardcoded** if it is:

- A string literal for a heading, paragraph, stat number, milestone title/year, team member name, job title, or bio written directly in JSX
- An array of objects defined inside the component body (e.g. `const milestones = [...]` inside a React component function)
- A stat object like `{ number: '500+', label: 'Projects Delivered' }` defined inline
- A list of benefits, features, or checklist items defined inside a component
- Any content that a content editor would need to change that is NOT sourced from `/src/app/data/`

A piece of content is **NOT hardcoded** if it is:
- A CSS class name string
- A prop type label or ARIA label for UI mechanics
- Truly UI-structural text (e.g. "Loading...", "No results found")
- Icon labels or button text that is already passed as a prop from a data file

### What to Do With Hardcoded Content

For each hardcoded item found:

1. **Create or extend the relevant data file** with the content, correctly typed with a TypeScript interface
2. **Import the data** into the template/pattern
3. **Replace the hardcoded JSX** with a reference to the imported data
4. **Preserve all BEM class names and styling** — only the content source changes, not the layout or CSS

### Known Hardcoded Items (Pre-Identified)

These are already confirmed hardcoded and MUST be fixed:

#### `AboutHistoryTemplate.tsx`
- `milestones` array (6 items with year, icon, title, description) — defined inside the component body
- Inline stats array (`[{ number: '500+', label: 'Projects Delivered' }, ...]`) inside `.map()` in the stats section
- Origin story paragraphs (two `<Paragraph>` elements with hardcoded text)
- Hero badge text "Our Legacy" and hero subtitle

**Fix:** Move all data to `/src/app/data/about.ts`. The component should import and render, never define content.

#### `company.ts`
- `foundingDate: '2014'` — **WRONG.** Real founding year is **2003**.
- Missing real company name: **LightSpeedDevelopment (LSD)**
- Stats in `about.ts` say "10+ Years experience" — must match real 22-year founding history

---

## Part B — Real Content Integration

### B1. Update `company.ts`

Apply the following corrections:

```ts
export const companyData = {
  name: 'LightSpeed',                          // Trading name
  legalName: 'LightSpeedDevelopment',          // Full legal name
  acronym: 'LSD',                              // Internal acronym
  tagline: 'WordPress & WooCommerce Agency',
  description: 'A Cape Town-based WordPress and WooCommerce agency founded in 2003, specialising in modern block themes, design systems, and accessible, high-performance websites.',
  foundingYear: 2003,
  headquarters: {
    city: 'Cape Town',
    province: 'Western Cape',
    country: 'South Africa',
    workStyle: 'Hybrid / Remote'
  },
  contact: {
    email: 'hello@lightspeedwp.agency',
    supportEmail: 'support@lightspeedwp.agency',
    hours: 'Mon-Fri 08:00 – 17:00 (GMT+2)'
  },
  social: {
    twitter: 'https://twitter.com/lightspeedwp',
    linkedin: 'https://linkedin.com/company/lightspeed-wordpress',
    github: 'https://github.com/lightspeedwp',
    instagram: 'https://instagram.com/lightspeedwp',
  }
};
```

### B2. Rebuild `team.ts` with Real Team Members

Replace ALL placeholder/fictional team members with the real extended team. Use the data from the source markdown (see below). Keep the `TeamMember` interface intact. Add new fields as needed: `joinedYear`, `githubUrl`, `microsoftLearnUrl`, `isIntern`, `isFounder`, `status` (`'active' | 'intern'`).

**Real team (as of 2026), in order of tenure:**

| # | Name | Role | Joined | Notes |
|---|------|------|--------|-------|
| 1 | Ash Shaw | CEO, CTO, CMO, Content Strategist, Business Development & Mentor | Jan 2003 | Founder |
| 2 | Warwick Booth | Lead Developer | Dec 2006 | GitHub: https://github.com/krugazul |
| 3 | Chris Vancoillie | Systems Administrator | Sep 2009 | |
| 4 | Barbara Kerr | COO, CFO & HR (Partner) | 2010 | Partner |
| 5 | Justin Abrahamse | Frontend Developer, Online Marketing | 2006–2009, rejoined 2020 | |
| 6 | Lourens Visser | Project Manager & Support Manager | Aug 2021 | |
| 7 | Adam Wale | Designer | 2021 (part-time/freelance) | |
| 8 | Tibi Buzdugan | Frontend & Backend Developer | Jul 2023 | GitHub: https://github.com/tibiii |
| 9 | Zared Rogers | Web Designer & WordPress Developer | Aug 2023 | GitHub: https://github.com/ZaredRogers |
| 10 | Hugo Gravito | Block Theme Developer Intern | 15 Aug 2025 | Intern |
| 11 | Brandon Marshall | Block Theme Developer Intern | 25 Aug 2025 | Intern. GitHub: https://github.com/brandonmarshal |
| 12 | Seren van der Merwe | Block Theme Developer Intern | 1 Sep 2025 | Intern. GitHub: https://github.com/serenvdmerwe |
| 13 | José Abreu | Block Theme & Block Developer | 5 Sep 2025 (rejoined) | First stint Aug 2017–Apr 2019 |

**Bio writing guidelines:**
- Bios must be written in the voice of the company — warm, direct, technically credible
- Each bio should be 2–3 sentences max
- Mention their real role and genuine specialisation
- Do NOT invent qualifications or portfolio items not in the source material
- For interns, acknowledge the competitive application process and their drive to learn

### B3. Rebuild `about.ts` — Company History & Milestones

Replace the current placeholder history with the real timeline. Add a new export `companyMilestones` with richer milestone data sourced from the real history:

**Real timeline milestones:**

```
2003 — Founded as an IT support company (LightSpeedDevelopment)
2005 — First employee hired
2006 — BarCamp Cape Town: the pivotal event that redirected the company to WordPress; Warwick Booth joins December 2006
2007–2009 — Growth years; Chris Vancoillie joins as Systems Administrator (2009)
2010 — Barbara Kerr joins and becomes a partner (COO/CFO)
2011–2012 — WordCamp Cape Town: Ash organises WC Cape Town for two consecutive years; community leadership role established
2014 — WordCamp San Francisco and WooConf attended; international WordPress community presence
2020 — Justin Abrahamse rejoins; remote-first operations solidified
2021 — Lourens Visser joins; Adam Wale joins; Team expands with specialised roles
2023 — Tibi Buzdugan and Zared Rogers join; block theme development practice matures
2024 — WordCamp Cape Town 2024 sponsored; WordCamp Europe Torino — volunteer
2025 — WordCamp Europe Basel — Ash speaks: "Bridging Design and Development: Figma Design Systems for WordPress Success"; AI transformation begins; Wetu Importer partnership; internship programme launches (3 interns); José Abreu rejoins; GitHub Copilot Business rolled out across entire team
2026 — Team at 13 members; test-driven development and AI-augmented workflow mature across the whole team
```

**Add these additional data exports to `about.ts`:**

```ts
export const barCampPivot = {
  year: 2006,
  event: 'BarCamp Cape Town',
  location: 'Cape Town, South Africa',
  impact: 'The pivotal networking event that redirected LightSpeed from IT support to WordPress web development. Ash met Dave Duarte who introduced him to WordPress, leading directly to Warwick Booth joining in December 2006.',
  keyConnections: [
    'Dave Duarte', 'Jeremy Thurgood', 'Max Kaizen', 'Christine da Silva',
    'Mark Forrester', 'Jo Duxbury', 'Jonathan Carter', 'Adrian Rossouw',
    'Joe Botha', 'Brenton Furniss', 'Nicholas Spagnoletti', 'Glen Veran',
    'Neil Blakey-Milner', 'Stefano Rivera', 'Jason Bagley', 'Rob Gilmour',
    'Jonathan Hitchcock', 'Rafiq Phillips', 'Uno de Waal', 'Andy Rabagliati',
    'Mark Slingsby', 'Ian Gilfillan', 'Bradley Whittington', 'Sam Finnemore',
    'Joe da Silva', 'Jacques Marneweck', 'Miguel dos Santos'
  ]
};

export const founderQuotes = [
  {
    quote: "I've always been entrepreneurial, but I really didn't like working for an employer. I have my own ideas and things that drive me. Throughout my whole life, I've designed my life the way I want to live it.",
    speaker: 'Ash Shaw',
    role: 'Founder & CEO',
    context: 'On founding LightSpeed'
  },
  {
    quote: "Technology fuels me. I embrace AI daily — GitHub Copilot, ChatGPT, Claude, and MCP — bringing them together with my love for Figma prototyping, design systems, and GitHub code management. The fusion of AI, creativity, and open source has been a radical, life-changing shift.",
    speaker: 'Ash Shaw',
    role: 'Founder & CEO',
    context: 'On the 2025 AI transformation'
  }
];

export const wordCampHistory = {
  totalEvents: '20+',
  continents: 4,
  years: '2008–2026',
  highlights: [
    { role: 'Organiser', event: 'WordCamp Cape Town 2011' },
    { role: 'Organiser', event: 'WordCamp Cape Town 2012' },
    { role: 'Sponsor', event: 'WordCamp Cape Town 2019' },
    { role: 'Sponsor', event: 'WordCamp Cape Town 2024' },
    { role: 'Volunteer', event: 'WordCamp Europe 2024 (Torino)' },
    { role: 'Speaker', event: 'WordCamp Europe 2025 (Basel)', talkTitle: 'Bridging Design and Development: Figma Design Systems for WordPress Success', videoUrl: 'https://videopress.com/v/fSkgvkk0' },
    { role: 'Attendee', event: 'WooConf 2014' },
    { role: 'Attendee', event: 'WordCamp San Francisco 2014' },
  ]
};
```

### B4. Expand `AboutHistoryTemplate.tsx`

After moving all content to `about.ts`, rebuild the template to tell a richer story with these sections (in order):

1. **Hero** — Keep current design; update subtitle to reflect real 22-year journey
2. **Origin Story** — Use `founderQuotes[0]` (the autonomy quote) and narrate the IT support → BarCamp → WordPress pivot using `barCampPivot` data
3. **BarCamp Moment** — A dedicated spotlight section showing the BarCamp Cape Town 2006 network map or connection list. This was the single most important event in the company's trajectory.
4. **Real Milestones Timeline** — Import and render from `companyMilestones` array. Milestones must start from **2003**, not 2014.
5. **AI Transformation (2025)** — A dedicated section highlighting the GitHub Copilot rollout, the internship programme launch, the team levelling up week on week, and the AI workflow pivot. Use `founderQuotes[1]`.
6. **WordCamp Community** — A compact visual section showing community involvement, rendered from `wordCampHistory`
7. **Stats** — Import from `aboutStats` (not hardcoded inline)
8. **FAQ** — Keep existing pattern
9. **CTA** — Keep existing FunkyCTA

---

## Part C — New Blog Posts

Add **8 new, unique, well-written blog posts** to `/src/app/data/blog-posts.ts`. These must be original, high-quality posts — not generic filler. Each post must have a full `content` field of at least 150 words (a proper editorial summary of what the post covers, written as if Ash or a team member is the author).

### Posts to Add

#### Post 1: The BarCamp Effect
- **Slug:** `barcamp-cape-town-2006-wordpress-origin`
- **Title:** "How BarCamp Cape Town 2006 Changed Everything — and Why Serendipitous Networks Still Matter"
- **Author:** `ash-shaw`
- **Category:** `agency-life`
- **Angle:** Personal retrospective on the 2006 event. The unexpected meeting with Dave Duarte. What it taught Ash about building in public, the power of communities, and why LightSpeed became a WordPress agency. Draws a line from that room in Cape Town to the 22-year company built on it. References the wide network of people met — a testament to the compounding value of showing up.
- **Tags:** `['team', 'wordpress', 'workflow']`
- **Date:** `2026-02-10`
- **Reading time:** `7 min read`
- **Featured:** `true`

#### Post 2: The AI Workflow That Changed Our Team
- **Slug:** `ai-workflow-github-copilot-team-transformation`
- **Title:** "The AI Workflow That Changed How Our Team Builds — A 6-Month Retrospective"
- **Author:** `ash-shaw`
- **Category:** `tutorials`
- **Angle:** A deep retrospective on adopting GitHub Copilot Business across the entire LightSpeed team (developers, project manager, interns). Covers: the Berlin inspiration trip; setting up custom Copilot instructions in VS Code; GitHub Issues + PRs as an AI planning scaffold; the measurable improvements to code delivery speed and quality; and the unexpected benefit — higher team morale and happiness. References the specific tools: Copilot, ChatGPT, Claude, MCP. Honest about the challenges of changing ingrained habits in an experienced team.
- **Reference:** https://lightspeedwp.agency/ai-workflow/
- **Tags:** `['ai', 'workflow', 'team']`
- **Date:** `2026-01-07`
- **Reading time:** `10 min read`
- **Featured:** `true`

#### Post 3: Hiring for Attitude — The Internship That Filtered 450 Applicants to 2
- **Slug:** `wordpress-block-developer-internship-hiring-process`
- **Title:** "We Got 450 Applications for 2 Intern Spots. Here's What Separated the 2 Who Made It"
- **Author:** `ash-shaw`
- **Category:** `agency-life`
- **Angle:** A transparent, opinionated account of the internship hiring process. Why LightSpeed set non-standard pre-application requirements (complete GitHub Skills courses, submit via website, have an active GitHub profile). Why most experienced developers are harder to hire than fresh graduates. The specific screening criteria (version control use, no page-builder-only experience). How AI was used to screen LinkedIn profiles. What Brandon Marshall and Seren van der Merwe demonstrated that 448 others didn't: willingness to learn from scratch, no bad habits to unlearn. The three-month curriculum structure and Ollie Block Academy as the core course.
- **Reference:** https://lightspeedwp.agency/wordpress-block-theme-developer/
- **Tags:** `['team', 'workflow', 'block-theme']`
- **Date:** `2025-09-25`
- **Reading time:** `8 min read`
- **Featured:** false

#### Post 4: MCP for WordPress Agencies
- **Slug:** `model-context-protocol-mcp-wordpress-agency-workflow`
- **Title:** "Model Context Protocol (MCP): Why Every WordPress Agency Should Be Paying Attention"
- **Author:** `warwick-booth`
- **Category:** `tutorials`
- **Angle:** An accessible but technically credible primer on MCP — what it is, why it matters, how it connects AI models to tools and services. Specific to the WordPress agency context: using MCP with GitHub for automated code review briefings, with Figma for design token extraction, with WordPress for content population. Covers LightSpeed's current MCP implementation in VS Code with Copilot. Practical guidance on getting started. Honest assessment of where MCP is today (cutting edge, not plug-and-play) vs. where it's going.
- **Tags:** `['ai', 'workflow', 'wordpress']`
- **Date:** `2026-02-18`
- **Reading time:** `9 min read`
- **Featured:** `true`

#### Post 5: Figma Design Systems for WordPress — The WCEU 2025 Talk
- **Slug:** `figma-design-systems-wordpress-wceu-2025-recap`
- **Title:** "Figma Design Systems for WordPress: Lessons from Our WordCamp Europe 2025 Talk"
- **Author:** `ash-shaw`
- **Category:** `tutorials`
- **Angle:** A companion article to Ash's WordCamp Europe 2025 Basel talk. Covers the core thesis: Figma and WordPress theme.json speak the same language (design tokens), and agencies that build a Figma-to-theme.json pipeline drastically reduce design-to-development handoff friction. Includes: setting up Figma variables that map to theme.json presets; using Figma Dev Mode for value extraction; style variations in WordPress 6.x; the live demo highlights from the talk. Links to the recording. Real talk: what didn't work in the live demo and what the audience asked about most.
- **Reference:** https://videopress.com/v/fSkgvkk0
- **Tags:** `['design-system', 'wordpress', 'fse']`
- **Date:** `2025-07-10`
- **Reading time:** `11 min read`
- **Featured:** false

#### Post 6: The Wetu Partnership — Open Source with Commercial Sponsorship
- **Slug:** `wetu-content-importer-partnership-open-source-sponsorship`
- **Title:** "How Our Wetu Partnership Redefined What Open Source Sponsorship Can Look Like"
- **Author:** `ash-shaw`
- **Category:** `industry-news`
- **Angle:** The story behind LightSpeed's Wetu Importer plugin — LightSpeed's first sponsored open-source project. Why Wetu approached LightSpeed. The technical scope of building a real-time content importer between Wetu's travel platform and WordPress. Reflections on the Indaba 2025 experience (shared booth, Wetu interview). A broader argument for why WordPress plugin sponsorship is an underused marketing channel for SaaS companies targeting the travel industry. Practical guide for other travel businesses evaluating the Wetu + Tour Operator + WordPress stack.
- **Reference links:** https://lightspeedwp.agency/lightspeed-secures-wetu-sponsorship/ | https://lightspeedwp.agency/lightspeed-joins-wetu-at-indaba-2025/
- **Tags:** `['tour-operator', 'wordpress', 'plugin-development']`
- **Date:** `2025-06-15`
- **Reading time:** `8 min read`
- **Featured:** false

#### Post 7: From Design Handoff to Go-Live — The BugHerd Workflow
- **Slug:** `design-handoff-to-launch-bugherd-client-feedback-workflow`
- **Title:** "From Design Handoff to Go-Live: Our Battle-Tested Client Feedback Workflow (with BugHerd)"
- **Author:** `lourens-visser`
- **Category:** `tutorials`
- **Angle:** Detailed walkthrough of the three-phase client feedback process: prototype (Figma Make) → staging (client review via BugHerd) → live (post-launch sign-off). Why visual bug annotation tools like BugHerd eliminate the ambiguous feedback loop ("the button is a bit off" vs. a pinned annotation on the exact element with screenshot). The specific BugHerd workflow: project setup, client onboarding, feedback triage, developer task assignment, sign-off gates. Real-world time savings. Common failure modes (clients going directly to email instead of BugHerd) and how to prevent them. A case study from a WooCommerce store launch.
- **Reference:** https://bugherd.com/webinar/from-website-design-to-launch-creating-a-seamless-handoff-workflow
- **Tags:** `['workflow', 'woocommerce', 'wordpress']`
- **Date:** `2025-08-05`
- **Reading time:** `7 min read`
- **Featured:** false

#### Post 8: WooCommerce Style Book — What It Is and Why It Matters
- **Slug:** `woocommerce-style-book-block-theme-showcase`
- **Title:** "WooCommerce Style Book: What It Is, Why We Built One, and What WooCommerce Said About It"
- **Author:** `warwick-booth`
- **Category:** `tutorials`
- **Angle:** What is the WooCommerce Style Book feature in WordPress? How LightSpeed built a comprehensive Style Book for the LSX Design block theme, showcasing every WooCommerce block and element in one place. The technical approach: using block theme style variations and theme.json to style WooCommerce blocks without custom CSS. The unexpected recognition from the WooCommerce Developer newsletter. What the Style Book means for agencies pitching WooCommerce design to clients: a visual proof-of-concept that takes minutes to demonstrate. Includes a link to the live demo and guidance on building your own.
- **Reference:** https://demo.lsx.design/blocks/woo/
- **Tags:** `['woocommerce', 'block-theme', 'design-system']`
- **Date:** `2025-05-20`
- **Reading time:** `8 min read`
- **Featured:** false

---

## Part D — Audit Execution Steps

Execute in this exact order:

### Step 1: Scan for Hardcoded Content
For every file in `/src/app/components/templates/` and `/src/app/components/patterns/`:
- Search for arrays defined inside component functions containing `title`, `description`, `year`, `name`, `number`, `label`, `text`, `heading`, `icon` properties
- Search for `<p>`, `<h1>`-`<h6>`, `<span>`, `<Heading>`, `<Paragraph>` elements with static string children that are NOT from a prop or data import
- Search for stats/metrics with hardcoded numbers (`500+`, `150+`, etc.) not imported from a data file
- Search for inline benefits/features arrays

### Step 2: Create/Extend Data Files
For each hardcoded item found, move it to the appropriate data file:

| Content Type | Target Data File |
|---|---|
| Company stats & values | `/src/app/data/about.ts` |
| Company milestones/history | `/src/app/data/about.ts` |
| Team members | `/src/app/data/team.ts` |
| Company metadata | `/src/app/data/company.ts` |
| Blog posts | `/src/app/data/blog-posts.ts` |
| FAQ items | `/src/app/data/faqs.ts` |
| Service features/benefits | Service-specific data file |
| Page-specific hero text | Page-specific data file |
| Navigation items | `/src/app/data/pages.ts` |

### Step 3: Update Templates to Import from Data
For each template where hardcoded content was moved:
- Add the correct `import` statement at the top of the file
- Replace the hardcoded array/strings with the imported data
- Preserve ALL BEM class names, CSS variable usage, and layout structure
- Do NOT change any styling — only the data source changes

### Step 4: Update Data Files with Real Content
Apply all corrections from Part B above:
1. Fix `company.ts` (founding year, legal name)
2. Rebuild `team.ts` with all 13 real team members
3. Expand `about.ts` with real milestones from 2003, add BarCamp data, founder quotes, WordCamp history
4. Rebuild `AboutHistoryTemplate.tsx` to import from updated `about.ts`

### Step 5: Add New Blog Posts
Add all 8 new posts from Part C to `blog-posts.ts`.
- Write full `content` fields (150+ words per post)
- Source the correct `featuredImage` from Unsplash using the `unsplash_tool` (call all 8 searches in parallel)
- Assign accurate `readingTime`, `date`, `author`, `categories`, `tags`
- Add appropriate new authors to `blogAuthors` if needed (Warwick Booth and Lourens Visser already exist; check before adding)

### Step 6: Verify and Test
After all changes:
- Verify no TypeScript errors in updated data files
- Verify all template components still render correctly
- Verify no `console.error` about missing props
- Confirm the history page timeline now starts from **2003**, not 2014

---

## Outputs Required

### 1. Audit Report
**Save to:** `/reports/2026-03-01-content-data-audit-report.md`

Report format:
```markdown
# Content & Data Audit Report — 2026-03-01

## Summary
- Templates audited: X
- Hardcoded items found: X
- Items moved to data files: X
- Data files created: X
- Data files updated: X
- Blog posts added: X

## Hardcoded Items Found (Full List)
| File | Content Type | Content Preview | Moved To |
|---|---|---|---|
| AboutHistoryTemplate.tsx | milestones array | "2014 — Agency founded..." | about.ts |
...

## Data Files Changed
...

## Company Data Corrections Applied
...

## Blog Posts Added
...

## Remaining Issues (if any)
...
```

### 2. Task List Update
**Update:** `/tasks/task-list.md`

Add any follow-up items discovered during the audit. Mark this prompt's task as complete once done.

---

## Compliance Checklist

Before marking complete, verify ALL of the following:

- [ ] Zero hardcoded content arrays inside component function bodies (except UI-structural strings)
- [ ] `company.ts` foundingYear is `2003`, legalName is `'LightSpeedDevelopment'`
- [ ] `team.ts` contains all 13 real team members with accurate roles and join years
- [ ] `about.ts` contains real milestones from 2003 onwards, BarCamp data, founder quotes, WordCamp history
- [ ] `AboutHistoryTemplate.tsx` imports all data from `about.ts` (no hardcoded arrays inside the component)
- [ ] History page timeline starts from 2003
- [ ] 8 new blog posts added to `blog-posts.ts` with full content fields
- [ ] All new posts have Unsplash images sourced via `unsplash_tool`
- [ ] All CSS variables used throughout (no hardcoded hex/px values)
- [ ] No Tailwind classes added
- [ ] All font families use `var(--font-primary)` / `var(--font-secondary)` — never hardcoded
- [ ] All BEM class names preserved on existing components
- [ ] Audit report saved to `/reports/`
- [ ] `/tasks/task-list.md` updated

---

## Design System Compliance (Reminder)

All generated or updated UI MUST follow these rules (see `Guidelines.md`):
- CSS variables ONLY for colours, spacing, typography, radius, shadows
- `var(--font-primary)` for Lexend, `var(--font-secondary)` for Manrope
- `.wp-*` utility classes for grid/layout (not Tailwind)
- BEM class naming for all component-level CSS
- `prefers-reduced-motion` guards on all animations

---

*This prompt follows the standard Orchestrator workflow: Create → Run → Report → Tasks.*
*See `/guidelines/prompts/prompt-generation-guidelines.md` for standards.*
