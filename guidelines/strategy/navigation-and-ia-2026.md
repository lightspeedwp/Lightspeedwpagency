# Navigation and Information Architecture Proposal 2026

**Category:** Strategy  
**Version:** 1.0.0  
**Last Updated:** 2026-03-15  
**Status:** Active  
**Template Used:** _templates/general-template.md

---

## Primary navigation

**Proposed top nav:**
- Work
- Solutions
- Systems
- Insights
- About
- Contact

**Rationale:**
"Systems" becomes the differentiator container (design systems, publishing systems, performance systems, AI governance), which is more defensible than "Services" as a commodity label. This aligns to WordPress's roadmap direction (AI integrated into workflows) and the reality of AI-first builders commoditising page assembly.

## Secondary navigation

### Work
- Case studies
- Patterns and playbooks (selected)
- Results metrics index

### Solutions
- Publishing systems
- WooCommerce systems
- Block themes and design systems
- Migrations and rescue

### Systems
- Design tokens and theme.json
- Pattern library and governance
- Editorial workflow engineering
- AI search readiness and structured data
- Performance and reliability

### Insights
- Research (forward trends)
- Build notes (engineering)
- Editorial systems (content ops)
- AI and governance

## Footer IA

### Company
- About
- Culture
- Community
- Policies

### Systems
- Design tokens
- Pattern library
- AI governance
- Performance standards

### Proof
- Case studies
- Testimonials
- Open source
- Partnerships

### Contact
- Consultation
- Email
- Social

## URL hierarchy proposal

**Principles:**
- Keep nouns stable; avoid year-based URLs except research posts.
- Use "systems" as a hub for AI visibility (definitional pages and deep topic coverage).

**Proposed structure:**
```
/
/work/
/work/case-studies/{client}/
/solutions/
/solutions/publishing-systems/
/solutions/woocommerce-systems/
/systems/
/systems/design-tokens-theme-json/
/systems/pattern-library-governance/
/systems/editorial-workflow-engineering/
/systems/ai-search-readiness/
/systems/performance-reliability/
/insights/
/insights/research/
/insights/build-notes/
/about/
/contact/
```

## Internal linking model

**Hub-and-spoke:**
Each Systems page links to: relevant case studies, relevant patterns/playbooks, and the matching topic cluster in Insights.

**Entity reinforcement:**
Every key term gets a definitional page anchor and consistent naming across page titles, H2 sections, and structured data contexts. This supports inclusion in AI features where classic SEO best practices still apply.