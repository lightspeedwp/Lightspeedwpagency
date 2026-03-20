Here’s a structured plan and draft prompt to help you turn your 11 AI‑generated Figma Make prototypes into a cohesive showcase, along with a brief for the landing page and a reusable block for service and solution pages. Where I was able to load the live Figma sites, I’ve referenced key navigation terms for accuracy.

### Summary – value, risks, next steps

* **Value:** Creating structured data files for each prototype enables automated display on WordPress, efficient updates and consistent branding. The dedicated landing page and dynamic block will showcase your AI‑generated design work, drive traffic to individual case studies and highlight LightSpeed’s expertise in scalable WordPress solutions.
* **Risks:** Gathering detailed page‑level data requires manual scanning of each Figma prototype; if some pages are inaccessible or JavaScript‑heavy, you may need to rely on high‑level descriptions and navigation labels. Without consistent naming conventions, data may become messy; standardised slugs and tags are essential.
* **Next steps:** (1) Finalise the fields and taxonomy for each data file (see below). (2) Use Figma Make’s automation to collect page names, colours and imagery suggestions, then output JSON/YAML files. (3) Build the landing page and block with WordPress’s block editor using the generated data.

### 1. Draft Figma Make prompt for data‑file generation

Use this prompt as a guide when running Figma Make (adapt field names as needed for your preferred data format). The goal is to scan each prototype, extract key information and generate a structured data file (e.g. JSON) per entry.

1. **Define the schema.** The data file for each prototype should include:

   * `slug`: URL‑friendly identifier (e.g. `tour-operator-plugin`).
   * `title`: human‑readable name (e.g. “Tour Operator Plugin”).
   * `category`: broad category (Travel, Media, E‑Commerce, Winery, Agency, Design).
   * `summary`: 1‑2 sentence description of the concept.
   * `description`: detailed overview (from your descriptions).
   * `figma_file_url` and `published_site_url`.
   * `colour_palette`: array of hex codes drawn from primary/secondary colours in the design.
   * `icon_or_graphic`: suggestion for an icon/WebGL graphic representing the theme (e.g. compass for travel, newspaper for news, wine bottle for winery).
   * `feature_image`: URL or placeholder for the showcase card; instruct Figma Make to capture a hero section or design a custom image with immersive text and colour effects.
   * `page_list`: list of primary pages (e.g. tours, destinations, accommodation; expeditions, territories and sanctuaries; services, portfolio, pricing, resources).
   * `features`: key functional highlights (booking flow, search/filtering, memberships, design system, etc.).
   * `tags`: keywords to aid filtering (e.g. “eco‑tourism”, “news platform”, “retro”, “AI strategy”).

2. **Automated collection steps:**

   * For each prototype, iterate through the top navigation and side menus to build `page_list`. For example, **Impact Travel** includes Tours, Destinations, Accommodation, Discover and About, while **Organic Tours** uses Expeditions, Territories, Sanctuaries, Chronicles, Conservation and The Studio.
   * Capture the primary colour palette from design tokens or CSS variables. If unavailable, sample the hero and accent colours manually.
   * Generate or reference an appropriate icon from a consistent icon set (FontAwesome or custom WebGL). Match icons to categories: e.g., globe for travel, shopping bag for shops, wine bottle for Handcrafted Wines, rocket or cog for LSX Design and LightSpeed WP Agency.
   * Take a screenshot or extract a hero section to serve as `feature_image`. Apply a subtle gradient overlay and motion effect if possible.

3. **Output format:**

   * Save each prototype’s data as a separate JSON/YAML file in a designated folder (e.g. `/content/showcase/`). Name the file with the slug, e.g. `tour-operator-plugin.json`.
   * Ensure consistent indentation, keys and quoting. Validate the files with a linter.

4. **Repeat for all prototypes:**

   * Tour Operator Plugin – tour‑operator‑plugin
   * Impact Travel – impact-travel
   * Organic Tours – organic-tours
   * Tour Operator Demo – tour-operator-demo
   * LSX Design – lsx-design
   * Bento News – bento-news
   * Retro Shop – retro-shop
   * Constructivism Shop – constructivism-shop
   * Handcrafted Wines – handcrafted-wines
   * Lightspeed WP Agency – lightspeed-wp-agency
   * Woo Shop – woo-shop

### 2. Brief for the dedicated landing page

1. **Purpose and tone:** Introduce the collection as a curated showcase of AI‑generated prototypes demonstrating LightSpeed’s mastery of WordPress block themes, WooCommerce, design systems and AI‑driven strategy. Emphasise measurable outcomes, accessibility, performance and scalability.
2. **Hero section:** Use an eye‑catching headline (e.g. “Experience the Future of Web Experiences”), a concise subheading explaining that all sites were built with AI strategy and Figma Make, and a call‑to‑action button (“Explore the Showcase”). Consider a background WebGL animation or collage of hero images from multiple prototypes.
3. **Grid or carousel of showcase cards:** Use the data files to dynamically generate a grid. Each card should display the feature image, title, summary and tags, plus buttons to view the live Figma site and read the in‑depth blog post (case study). Provide filters or tabs for categories (Travel, Media, Commerce, Winery, Agency, Design) to improve discovery.
4. **AI strategy section:** Briefly explain how generative AI and Figma Make were used to produce these prototypes, highlighting systems thinking, automation and LightSpeed’s commitment to innovation.
5. **Call‑to‑action and trust signals:** End with a section inviting prospects to discuss their project, linking to the contact or consultation page. Include testimonials or logos of clients, certifications and WordCamp involvement to reinforce credibility.

### 3. Dynamic showcase block for service/solution pages

1. **Structure:** A reusable block built as a WordPress custom block or ACF block that accepts a list of prototype slugs or categories. It fetches the corresponding data files and renders cards inline on the service or solution page.
2. **Design:**

   * Each card features a feature image with a subtle gradient overlay and the category colour, the title and a short tagline. On hover (or tap), reveal a deeper description and buttons (“View Example” and “Read Case Study”).
   * Use micro‑interactions: parallax effect on hover, scale‑in animation, and subtle drop shadow. Ensure accessibility (high contrast, focus states, ARIA labels).
   * Provide variations: a compact horizontal slider for narrow spaces (three cards visible) and a vertical list for sidebars.
3. **Configuration:** Content editors should be able to select which prototypes appear (by slug or category), set the maximum number of cards, and choose between grid or slider layout. Styles should inherit global theme colours and typography.

### 4. Additional notes

* **Content for blog posts:** For each prototype, draft a blog post or case study covering the problem it solves, the AI‑driven design process, key features, lessons learned and benefits for clients. Link back to both the live Figma site and the data file.
* **Governance:** Maintain the data files in a version‑controlled repository (e.g. `content/showcase/` in your GitHub repo) so updates are tracked. Use a simple pipeline or WP‑CLI script to import new entries into WordPress.
* **Visual assets:** Where possible, use high‑quality images that match the site’s mood; for example, safari imagery for the travel prototypes and vintage product photography for Retro Shop. Respect licensing or use AI‑generated assets if appropriate.

By following this structured approach, you’ll have a scalable system for showcasing your AI‑generated prototypes, with a landing page and dynamic block that align with LightSpeed’s emphasis on modularity, performance and real‑world results.
