# AI Services Restructure — Sub-Prompts Overview

**Parent Orchestrator:** `/prompts/ai-services-restructure.md`  
**Last Updated:** 2026-03-17  
**Status:** Active — In Progress

---

## Purpose

This directory contains detailed page redesign prompts for the AI Services Restructure project. Each sub-prompt provides comprehensive guidance for redesigning a specific page or section of the LightSpeed WordPress Agency site to align with the AI-first positioning.

---

## Prompt Structure

Each sub-prompt follows this consistent structure:

1. **Header**
   - Category
   - Version
   - Last Updated
   - Status
   - Parent Orchestrator

2. **Purpose** — What this page accomplishes

3. **Summary**
   - Value
   - Risks
   - Next step

4. **Content Audit**
   - Current state analysis
   - Required updates
   - Copy direction/suggestions

5. **WebGL & Interactive Ideas**
   - 3 creative concepts per page
   - Implementation details
   - Interaction patterns

6. **Page Structure**
   - Section-by-section breakdown
   - Component recommendations

7. **Design System Requirements**
   - Typography specs
   - Colour palette
   - Spacing rules
   - Component usage

8. **Accessibility Requirements**
   - WCAG compliance checklist
   - Keyboard navigation
   - Screen reader support

9. **Performance Targets**
   - Lighthouse scores
   - Core Web Vitals
   - Load time goals

10. **Content Deliverables**
    - Word count per section
    - Copy specifications

11. **Technical Implementation**
    - Files to create/update
    - Libraries and dependencies

12. **Success Criteria**
    - Measurable goals
    - Quality checklist

13. **Next Steps**
    - Post-completion actions
    - Related pages to update

14. **Clarification Questions**
    - Open questions for decision-making

---

## Completed Prompts

### About Section (4/4)

✅ **about-lightspeed.md** (Main About page)
- Timeline visualisation
- Team mosaic
- Mission constellation
- Stats integration from registry

✅ **about-culture.md** (Culture page)
- World map visualisation
- Team timeline
- Value constellation
- Remote work narrative

✅ **about-process.md** (Process page)
- Interactive process diagram
- Process navigator
- Animated AI overlay
- Six-stage lifecycle details

✅ **about-team.md** (Team page)
- 3D team sphere
- Skill matrix
- Team carousel
- Individual bios with AI expertise

### Services Section (9/9)

✅ **services-training.md** (Training & empowerment)
✅ **services-landing.md** (Services hub)
✅ **services-design.md** (Design service)
✅ **services-development.md** (Development service)
✅ **services-performance.md** (Performance service)
✅ **services-accessibility.md** (Accessibility service)
✅ **services-security.md** (Security service)
✅ **services-support.md** (Support & hosting)
✅ **services-ai-integration.md** (AI services — flagship)

---

## Prompt Inventory

### **Total Prompts Planned:** 12+

| Page | File | Status | Priority | Effort | Dependencies |
|---|---|---|---|---|---|
| About LightSpeed | `about-lightspeed.md` | ✅ Complete | High | 16-20h | Stats registry |
| About Culture | `about-culture.md` | ✅ Complete | Medium | 12-16h | None |
| About Process | `about-process.md` | ✅ Complete | High | 14-18h | None |
| About Team | `about-team.md` | ✅ Complete | Medium | 16-20h | Team data |
| Services – Training | `services-training.md` | ✅ Complete | High | 18-22h | Portal, videos |
| Services Landing | `services-landing.md` | ✅ Complete | High | 12-16h | All services |
| Services – Design | `services-design.md` | ✅ Complete | High | 14-18h | Portfolio |
| Services – Development | `services-development.md` | ✅ Complete | High | 14-18h | Case studies |
| Services – Performance | `services-performance.md` | ✅ Complete | Medium | 12-14h | None |
| Services – Accessibility | `services-accessibility.md` | ✅ Complete | Medium | 10-12h | None |
| Services – Security | `services-security.md` | ✅ Complete | Medium | 10-12h | None |
| Services – Support | `services-support.md` | ✅ Complete | Medium | 12-14h | None |
| Services – AI Integration | `services-ai-integration.md` | ✅ Complete | High | 16-20h | AI solutions |

---

## Common Patterns Across Prompts

### WebGL Interactions

All prompts include **3 WebGL concepts** with:
- Clear concept description
- Implementation details
- Interaction patterns (desktop + mobile)
- Accessibility fallbacks
- Performance considerations

### Design System Compliance

Every prompt enforces:
- ✅ 100% CSS variables
- ✅ BEM methodology
- ✅ Lexend + Manrope typography
- ✅ Sentence case headings
- ✅ Neon colors on dark backgrounds only
- ✅ Semantic spacing tokens

### Stats Integration

Where applicable, prompts reference:
- `/src/app/data/stats/stats-registry.ts`
- Tag-based filtering
- Component mappers (`mapToNeonStats`, `mapToStatsGridStats`)

### Content Specifications

Each prompt includes:
- Word count targets
- Copy direction/examples
- SEO considerations
- Tone and voice guidelines

### Accessibility

All prompts require:
- WCAG 2.1 AA compliance
- Keyboard navigation
- Screen reader support
- Reduced motion respect
- Text alternatives for visuals
- Focus management

---

## Next Steps

### Immediate Actions

1. **Review completed prompts** (about-*.md files)
2. **Approve WebGL concepts** or suggest alternatives
3. **Answer clarification questions** in each prompt
4. **Prioritize services prompts** based on business needs

### Prompt Creation Order (Recommendation)

**Phase 1: Foundation** (Complete ✅)
- About section prompts

**Phase 2: Services Hub**
1. services-landing.md (hub page)
2. services-design.md (most mature offering)
3. services-development.md (core competency)

**Phase 3: Technical Services**
4. services-performance.md
5. services-security.md
6. services-accessibility.md

**Phase 4: AI & Support**
7. services-ai-integration.md (new offering)
8. services-support.md (ongoing retainer)

### Implementation Order

After prompts are complete, implement pages in this order:

1. **About Process** — Foundation for understanding
2. **About LightSpeed** — Main landing page
3. **About Team** — Humanization
4. **About Culture** — Recruitment support
5. **Services Landing** — Hub page
6. **Services pages** — Based on revenue priority

---

## Stats Registry Integration

### Available Collections

All service pages should leverage the stats registry:

```typescript
import { statsRegistry, mapToNeonStats } from '@/data/stats';

// Get service-specific stats
const designStats = statsRegistry.getStatsByCategory('design');
const developmentStats = statsRegistry.getStatsByCategory('development');
const hostingStats = statsRegistry.getStatsByCategory('hosting');

// Map to component format
const neonStats = mapToNeonStats(designStats);
```

### Stats by Category

- **Migration:** 5 stats
- **Support:** 6 stats
- **Hosting:** 6 stats
- **Design:** 7 stats
- **Development:** 8 stats
- **Projects:** 5 stats
- **Business:** 8 stats

**Total:** 45 production-ready stats

---

## Design System Components

### Existing Components

All prompts can use:
- `<NeonStats>` — Neon stat grids (dark mode)
- `<StatsGrid>` — Traditional stats (light mode)
- `<Card>` — Content cards
- `<Badge>` — Labels and tags
- `<Button>` — CTA buttons
- `<Accordion>` — Expandable content
- `<Tabs>` — Content organization

### New Components to Create

Based on prompts:
- `<Timeline>` — Event timeline
- `<TeamMosaic>` — Team member grid
- `<Constellation>` — Value/concept visualization
- `<WorldMap>` — Geographic team distribution
- `<ProcessDiagram>` — Lifecycle visualization
- `<ProcessNavigator>` — Scroll-linked sidebar
- `<TeamSphere>` — 3D team viewer
- `<SkillMatrix>` — Expertise grid
- `<TeamCarousel>` — Scrolling profiles

---

## WebGL Library Stack

All prompts use consistent WebGL stack:

```json
{
  "dependencies": {
    "three": "^0.160.0",
    "@react-three/fiber": "^8.15.0",
    "@react-three/drei": "^9.95.0",
    "@react-spring/three": "^9.7.3"
  }
}
```

**Fallback strategy:**
- Detect WebGL support
- Show CSS-based alternative if unavailable
- Respect `prefers-reduced-motion`
- Lazy load WebGL components

---

## Content Production Workflow

### For Each Page

1. **Review prompt** — Understand requirements
2. **Gather assets** — Photos, logos, data
3. **Write copy** — Follow word count targets
4. **Design mockups** — Figma prototypes
5. **Develop components** — React + CSS
6. **QA testing** — Accessibility + performance
7. **Deploy** — Staging → production

### Copy Approval Process

1. Draft copy based on prompt guidance
2. Review with stakeholders
3. Edit for tone, SEO, accuracy
4. Final approval
5. Add to CMS or codebase

---

## Quality Checklist

Before marking any prompt complete, verify:

- [ ] All sections have clear requirements
- [ ] WebGL concepts are feasible and valuable
- [ ] Design system requirements are specific
- [ ] Content deliverables have word counts
- [ ] Accessibility requirements are comprehensive
- [ ] Performance targets are realistic
- [ ] Success criteria are measurable
- [ ] Clarification questions are answered
- [ ] Technical implementation is specified
- [ ] Next steps are actionable

---

## Contribution Guidelines

### Adding New Prompts

1. Copy template from existing prompt
2. Follow consistent structure
3. Include all required sections
4. Add 3 WebGL concepts minimum
5. Specify design system requirements
6. Define accessibility needs
7. Set performance targets
8. List success criteria
9. Add to this README inventory
10. Update completion statistics

### Updating Existing Prompts

1. Maintain version number
2. Update "Last Updated" date
3. Document changes in git commit
4. Notify team of significant changes
5. Re-validate technical feasibility

---

## Questions & Support

**Questions about prompts?**
- Review parent orchestrator: `/prompts/ai-services-restructure.md`
- Check guidelines: `/guidelines/prompts.md`
- Ask in #ai-services-restructure channel

**Need clarification on requirements?**
- Each prompt has "Questions for clarification" section
- Document answers in prompt or separate decision log

**Technical implementation questions?**
- Review design system docs: `/guidelines/design-tokens/`
- Check component catalog: `/src/app/components/`
- Reference stats registry: `/src/app/data/stats/README.md`

---

**Last Updated:** March 17, 2026  
**Total Prompts Created:** 13/13  
**Completion:** 100% ✅  
**Next Milestone:** Begin implementation (About Process recommended first)