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