Below is a comprehensive analysis of where the LightSpeed site currently stores and displays numerical “stats” on service pages, along with a Figma Make prompt for updating those stats to reflect the new figures provided by your team.  This response references the codebase to show how existing stats are structured and suggests where to integrate your new metrics.

---

## 📊 Where stats live in the codebase (current usage)

LightSpeed uses **Stats/Results arrays** in its data files to populate metrics on various pages.  Each array contains objects with a `metric` or `value` and a `label` (and sometimes a `description`).  Here are the main locations and the current values:

| Page / Data file                                                                                                        | Current metrics (examples)                                                                                                | Evidence                                                     |
| ----------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| **SEO service page** – `seoServiceResults` in `src/app/data/seo-service-template-data.tsx`                              | `150%` average organic traffic increase, `10x` rankings growth, `85%` CTR improvement, `3–6 mo` to see results.           | This array feeds the metrics panel on the SEO services page. |
| **Analytics service page** – `analyticsServiceResults` in `src/app/data/analytics-service-template-data.tsx`            | `200%` more actionable insights, `45%` better conversion tracking, `10x` faster reporting, `30%` reduction in data silos. | Displayed on the Analytics & Reporting page.                 |
| **AI Engine service page** – `aiEngineServiceResults` in `src/app/data/ai-engine-service-template-data.tsx`             | `250%` increase in AI citations, `3x` more AI‑generated referrals, `90%` accuracy of AI brand info, `6–9 mo` to impact.   | Used on the AI Engine Optimisation service page.             |
| **Answer Engine service page** – `answerEngineServiceResults` in `src/app/data/answer-engine-service-template-data.tsx` | `400%` more featured snippets, `3x` voice search visibility, `85%` answer accuracy, `2–4 mo` to first results.            |                                                              |
| **AI Content Generation sub‑page** – `aiContentStats` in `src/app/data/ai-integrations/content-generation.ts`           | `10x` content output, `80%` time reduction, `95%` brand accuracy, `30+` languages.                                        |                                                              |
| **AI‑Powered SEO sub‑page** – `aiSEOStats` in `src/app/data/ai-integrations/seo.ts`                                     | `156%` organic growth, `3x` keyword rankings, `70%` time saved, `<2 s` analysis speed.                                    |                                                              |
| **AI Chatbots sub‑page** – `aiChatbotsStats` in `src/app/data/ai-integrations/chatbots.ts`                              | `24/7` availability, `3.5x` more leads, `<3 s` response time, `89%` resolution rate.                                      |                                                              |
| **AI Analytics & Insights sub‑page** – `aiAnalyticsStats` in `src/app/data/ai-integrations/analytics.ts`                | `45%` better decisions, `200+` auto insights, `15 h` saved per month, `92%` accuracy.                                     |                                                              |
| **Development service page** – `developmentServiceOverview.stats` in `src/app/data/development-service-page.ts`         | `2.5x` faster than page builders, `99.9%` secure, `10x` scalability, `100%` custom.                                       |                                                              |
| **Performance service page** – `performanceServiceStats` in `src/app/data/performance-service-page.ts`                  | `<1 s` LCP target, `100` Lighthouse score, `50%` average speed boost, `24/7` RUM monitoring.                              |                                                              |

These arrays are imported by the corresponding React templates (e.g., `SEOServiceTemplate.tsx`) and rendered via a `StatsGrid` or similar component.

---

## 📌 New stats to integrate

Your team’s figures can enhance the site’s credibility and tailor messaging toward AI‑driven migrations, support, hosting, design, and development services.  Here’s how to map your metrics to the site:

### Migrations

* **Posts migrated:** 120 000+ (Novus Media), 100 000+ (Alpha Media Holdings).
* **Sites migrated:** 250 production sites now hosted on LightSpeed.
* **Migration types:** custom CMS → WP, Drupal → WP, Joomla → WP, TYPO3 → WP, XML dump → WP, SQL dump → WP.

### Support & Maintenance

* **Tickets resolved:** 10 575+ since 2023 (within Zendesk’s 37‑month retention limit).
* **Support requests:** ~13 per working day, ~68 per week, ~290 per month (clarify variability in a footnote).

### Hosting & Deployments

* **Sites hosted:** 250+ production sites, spread over ~20 clients.
* **Concurrent sessions:** historical peak of 10 000 (Zimbabwe publications), current typical peak 800 (Nova News), anticipated 100 000 for News24 summit.
* **Deployments:** <12 full‑site deployments per year (e.g., only two in 2026 so far).
* **Hosting hours:** ~4 000 hours logged since 2009.

### Projects & Builds (Xero/Harvest)

* **Projects completed:** ≈1 500 since Sept 2013.
* **Websites built:** ≈300 new builds & rebuilds.
* **Active build projects:** 12 at present.

### Design

* **Design systems:** 10+ (LSX, Tour Operator, Nova, etc.).
* **LSX components:** 112.
* **Design tokens:** 230 variables.
* **Full-site Figma prototypes:** 10.
* **Figma Make prototypes:** 25.
* **Design‑system hours:** 2 000+.

### Development

* **Payment gateway plugins:** 5 (Peach Payments, PayFast for Give, PayStack, and two others).
* **API integrations/plugins:** 50+.
* **Custom plugins:** 150+.
* **Custom themes:** 300+.
* **Open-source themes:** 10+.
* **Open-source plugins:** 30+.

### Service Level Agreements & Retainers

* **Response times:** 24 h urgent, 48 h important, 72 h normal, up to one week for minor tasks.
* **Retainer clients:** 20 clients covering ~100 websites.

### Advanced metrics (optional additions)

Use these to craft “performance delta,” “enterprise scale,” “SEO & continuity,” and “longevity & trust” stats:

* **Speed improvement:** average percentage decrease in LCP/Core‑Web‑Vitals after migration.
* **Database cleanup:** GB of orphaned tables removed over 10 years.
* **Editor efficiency:** average publishing time reduction when switching to block themes.
* **Largest migration:** biggest number of posts/products migrated with 0 metadata loss.
* **Redirect precision:** number of 301 redirects managed per enterprise migration and % achieving SEO parity within 30 days.
* **Evolution & trust:** number of major WordPress eras LightSpeed has guided clients through; % of migration clients still hosting with LightSpeed after 10+ years.

---

## 🛠️ Figma Make prompt – “Update Stats Across Service Pages”

This prompt instructs Figma Make (or the developer editing the data files) to replace the placeholder values shown above with your real metrics and to introduce new stats sections where needed.

```
### 📈 UPDATE SERVICE PAGE STATS

**Objective:** Replace placeholder statistics in our service templates with real figures from the LightSpeed team, and introduce new stats sections for Migrations, Support, Hosting, Projects, Design, Development and SLAs.

**Files to edit:**  
- `src/app/data/seo-service-template-data.tsx` – update `seoServiceResults` array:contentReference[oaicite:10]{index=10}.  
- `src/app/data/analytics-service-template-data.tsx` – update `analyticsServiceResults` array:contentReference[oaicite:11]{index=11}.  
- `src/app/data/ai-engine-service-template-data.tsx` – update `aiEngineServiceResults` array:contentReference[oaicite:12]{index=12}.  
- `src/app/data/answer-engine-service-template-data.tsx` – update `answerEngineServiceResults` array:contentReference[oaicite:13]{index=13}.  
- `src/app/data/ai-integrations/content-generation.ts` – update `aiContentStats` array:contentReference[oaicite:14]{index=14}.  
- `src/app/data/ai-integrations/seo.ts` – update `aiSEOStats` array:contentReference[oaicite:15]{index=15}.  
- `src/app/data/ai-integrations/chatbots.ts` – update `aiChatbotsStats` array:contentReference[oaicite:16]{index=16}.  
- `src/app/data/ai-integrations/analytics.ts` – update `aiAnalyticsStats` array:contentReference[oaicite:17]{index=17}.  
- `src/app/data/development-service-page.ts` – update the `stats` array within `developmentServiceOverview`:contentReference[oaicite:18]{index=18}.  
- `src/app/data/performance-service-page.ts` – update `performanceServiceStats`:contentReference[oaicite:19]{index=19}.  
- Create new data files if necessary (e.g., `migrations-service-template-data.tsx`, `support-service-template-data.tsx`, `hosting-service-template-data.tsx`) to house the new stats arrays.

**Actions:**

1. **Replace existing values** in each array with the new metrics:  
   - Example for SEO service: `{ metric: '150%', label: 'Average organic traffic increase' }` becomes `{ metric: '156%', label: 'Organic traffic increase after migration' }` or another figure reflecting your SEO results.  
   - Analytics, AI Engine, Answer Engine, AI Content, AI Chatbots and AI Analytics stats should all be updated similarly.

2. **Add new stats arrays** where none exist:  
   - **Migrations:** create `migrationsServiceStats` with objects such as `{ value: '220k+', label: 'Posts migrated' }`, `{ value: '250+', label: 'Sites migrated' }`, and `{ value: '6+', label: 'Migration types' }` (custom CMS, Drupal, Joomla, TYPO3, XML, SQL).  
   - **Support & Maintenance:** add `supportServiceStats` with `{ value: '10,575+', label: 'Tickets resolved since 2023' }`, `{ value: '13', label: 'Requests per day (avg)' }`, `{ value: '68', label: 'Requests per week (avg)' }`, `{ value: '290', label: 'Requests per month (avg)' }`. Include a note in the `description` about day‑to‑day variability.  
   - **Hosting & Deployments:** add `hostingServiceStats` with `{ value: '250+', label: 'Sites hosted' }`, `{ value: '10k', label: 'Peak concurrent sessions' }`, `{ value: '<12', label: 'Full deployments per year' }`, `{ value: '4k+', label: 'Hours invested since 2009' }`.  
   - **Projects & Builds:** add `projectsServiceStats` with `{ value: '1,500+', label: 'Projects completed' }`, `{ value: '300+', label: 'Websites built' }`, `{ value: '12', label: 'Active builds today' }`.  
   - **Design:** update the design service to include `{ value: '10+', label: 'Design systems' }`, `{ value: '112', label: 'LSX components' }`, `{ value: '230', label: 'Design tokens' }`, `{ value: '10', label: 'Full prototypes' }`, `{ value: '25', label: 'Figma Make prototypes' }`, `{ value: '2k+', label: 'Hours on design systems' }`.  
   - **Development:** update development stats to `{ value: '5', label: 'Payment gateway plugins' }`, `{ value: '50+', label: 'API integrations' }`, `{ value: '150+', label: 'Custom plugins' }`, `{ value: '300+', label: 'Custom themes' }`, `{ value: '10+', label: 'Open‑source themes' }`, `{ value: '30+', label: 'Open‑source plugins' }`.  
   - **SLAs & Retainers:** create an `slaStats` array showing response times (24h urgent, 48h important, 72h normal, 1 week minor) and number of retainer clients (20, covering ~100 sites).

3. **Use the `StatsGrid` pattern** (already used on existing pages) to display these arrays.  For consistency:  
   - Each stat should have an icon (pick from Phosphor icons like `Database`, `Support`, `Server`, etc.).  
   - Keep values concise (use K/M suffixes or percentages).  
   - Add a short `description` for any stat that needs context (e.g., explain the variability of support requests).

4. **Place the new stats** within the appropriate page templates:  
   - For migrations, insert a stats grid near the top of the migration services page.  
   - For support, hosting, projects, design and development, insert the grid in the “Why it matters/What you achieve” section.  
   - Add an aggregated metrics banner on the homepage or about page summarising overall achievements (e.g., years in business, total data migrated, number of design systems).

5. **Maintain accessibility and responsive design:** ensure stats are announced by screen readers and adapt gracefully on mobile (two columns on small screens, four on desktop).

**Result:** Once these updates are implemented, the site will display real‑world data demonstrating LightSpeed’s scale and expertise, supporting the narrative of being an AI‑driven WordPress engineering partner.
```

---

### ✅ Summary of recommendations

* **Identify current stats** in the codebase using the arrays noted above.
* **Update those arrays** with your latest figures for migrations, support, hosting, projects, design, development, and SLAs.
* **Introduce new stats sections** for areas not yet quantified (migrations, support, hosting, projects, design, development).
* **Leverage the existing StatsGrid component** for consistent styling and responsive layout.
* **Consider optional advanced metrics** (performance delta, enterprise scale, SEO continuity, longevity & trust) to further differentiate LightSpeed’s authority.

By following these steps, your team can ensure that every service page and AI portal reflects the true scale and impact of your work, strengthening LightSpeed’s positioning as an AI‑first WordPress engineering company.
