# About – Culture — Page Redesign Prompt

**Category:** AI Services Restructure — About Section  
**Version:** 1.0.0  
**Last Updated:** 2026-03-17  
**Status:** Active  
**Parent Orchestrator:** `/prompts/ai-services-restructure.md`

---

## Purpose

Redesign the About Culture page to describe LightSpeed's remote culture, values and work ethos. Give potential clients and prospective hires insight into how the team collaborates, innovates and embraces AI tools to support flexible work.

---

## Summary

**Value** — Describes LightSpeed's remote culture, values and work ethos. It gives potential clients and prospective hires insight into how the team collaborates and innovates.

**Risks** — A generic culture page may fail to convey the unique qualities that attract talent and partners. It should illustrate how the company's culture enables its AI-driven mission.

**Next step** — Refresh the culture page to emphasise remote collaboration, continuous learning and the adoption of AI tools that support flexible work.

---

## Content Audit

### Remote Culture

**Current state:**
- Notes LightSpeed embraced remote work since 2014
- Team members across the globe
- Focus on flexibility, clear communication and meeting goals

**Required updates:**
- Highlight how remote culture fosters:
  - Inclusivity and diversity
  - Work-life balance
  - Sustainability (reduced carbon footprint)
- Explain how AI tools enable remote collaboration:
  - Remote design reviews with AI feedback
  - AI coding assistants for async development
  - AI chatbots for knowledge sharing
  - Automated meeting summaries
- Include team member locations on interactive world map

### Daily, Weekly & Quarterly Rhythm

**Current state:**
- Daily check-ins
- Weekly goal discussions
- Quarterly retreats

**Required updates:**
- Explain how AI productivity tools streamline rhythms:
  - **Daily:** AI summarises overnight work, surfaces blockers
  - **Weekly:** AI tracks goal progress, generates status reports
  - **Quarterly:** AI analyses team metrics, suggests improvements
- Describe retreat activities:
  - Team bonding
  - Strategic planning
  - AI exploration workshops
  - Professional development

### Remote Working Spaces & Retreats

**Current state:**
- Encourages choosing working spaces that suit team members
- Organises retreats to bring team together

**Required updates:**
- Include photos/galleries from retreats
- Highlight sustainability benefits:
  - No daily commute = lower emissions
  - Flexible spaces = lower office overhead
  - Global talent pool = better diversity
- Describe retreat philosophy:
  - In-person connection
  - Cultural immersion
  - Team-building activities
  - Strategic alignment sessions

### Values & Hiring

**Current state:**
- Values: curiosity, self-motivation, friendliness, independence, collaboration

**Required updates:**
- Expand values list:
  - **Curiosity** — continuous learning, experimentation
  - **Adaptability** — embracing change, AI adoption
  - **Independence** — self-directed work, ownership
  - **Collaboration** — cross-functional teams, pair programming
  - **Openness** — transparency, feedback culture
  - **AI Stewardship** — ethical AI use, continuous improvement
- Clarify hiring criteria:
  - Technical skills (WordPress, React, AI tools)
  - Cultural fit (remote-ready, communicative, curious)
  - AI readiness (willingness to learn, experiment)
- Link to open positions or careers page

### Cultural Initiatives

**Current state:**
- Not detailed in current content

**Required updates:**
- Describe programs:
  - **Lunch & learns** — weekly team presentations
  - **Hackathons** — quarterly innovation sprints
  - **AI study groups** — monthly AI research discussions
  - **Remote social events** — virtual game nights, coffee chats
  - **Professional development** — training budgets, conference attendance
  - **Mentorship** — peer learning, knowledge sharing

---

## WebGL & Interactive Ideas

### 1. World Map Visualisation

**Concept:**
Interactive WebGL globe showing team member locations across time zones.

**Implementation:**
- 3D rotating Earth with team member pins
- Pins glow with neon accents (cyan, pink, lime)
- Hover over pin reveals:
  - Name
  - Role
  - Location
  - Time zone
  - Fun fact
- Globe auto-rotates slowly
- Users can click-drag to spin
- Time zones visualised with day/night shading

**Interaction:**
- Desktop: hover to preview, drag to rotate
- Mobile: tap to preview, swipe to rotate
- Accessibility: list view toggle with text-based locations

### 2. Team Timeline

**Concept:**
Timeline of remote work milestones with photos and stories.

**Implementation:**
- Horizontal scrolling timeline
- Milestones:
  - 2014: Remote work adopted
  - 2016: First quarterly retreat (Cape Town)
  - 2018: Team reaches 10 members
  - 2020: COVID proves remote resilience
  - 2022: AI tools integration begins
  - 2024: Full AI-assisted workflows
  - 2026: 20+ team members across 5 continents
- Each milestone has photo gallery and story
- Neon accent lines connect milestones

**Interaction:**
- Scroll horizontally to navigate
- Click milestone to expand story and photos
- Swipe on mobile
- Keyboard arrows for navigation

### 3. Value Constellation

**Concept:**
Company values as stars connected by lines showing relationships.

**Implementation:**
- Values as glowing orbs:
  - Curiosity → Hackathons, AI research
  - Adaptability → Continuous learning, AI adoption
  - Independence → Self-directed work, ownership
  - Collaboration → Pair programming, code reviews
  - Openness → Transparency, feedback
  - AI Stewardship → Ethical AI, governance
- Lines connect related values
- Colour scale represents how values align with AI adoption
- Hover reveals examples and links

**Interaction:**
- Constellation slowly rotates
- Hover pauses rotation, highlights value
- Click opens modal with detailed examples
- Links to blog posts or case studies demonstrating value

---

## Page Structure

### Sections

1. **Hero**
   - Badge: "Remote-first since 2014"
   - Title: "Building the future from anywhere"
   - Tagline: A global team united by curiosity, collaboration and AI
   - CTA: Join the team | View open positions
   - Background: Animated world map with team locations

2. **Remote Culture**
   - Why remote works for us
   - Benefits: flexibility, diversity, sustainability
   - AI tools that enable async collaboration
   - Link to blog posts about remote culture

3. **World Map** (WebGL)
   - Interactive globe with team locations
   - Hover to see team member info
   - Day/night cycle visualisation

4. **Our Rhythm**
   - Daily check-ins
   - Weekly goals
   - Quarterly retreats
   - AI productivity tools
   - Photos from recent retreat

5. **Timeline** (WebGL)
   - Remote work milestones 2014–2026
   - Photo galleries and stories
   - Cultural evolution

6. **Values** (WebGL)
   - Constellation visualisation
   - How values manifest in work
   - Links to examples

7. **Cultural Initiatives**
   - Lunch & learns
   - Hackathons
   - AI study groups
   - Social events
   - Professional development

8. **Team Testimonials**
   - Quotes from team members
   - What they love about working at LightSpeed
   - How AI has changed their work
   - Photos and names

9. **CTA**
   - "Ready to join our team?"
   - View open positions
   - Learn about our process

---

## Design System Requirements

### Light/Dark Mode Implementation (WCAG 2.2 AA/AAA Compliant)

**CRITICAL:** All color implementations must meet WCAG 2.2 standards for accessibility.

#### Light Mode Styles

**Background hierarchy:**
- Primary surface: `var(--color-white)` or `var(--color-gray-50)`
- Secondary surface: `var(--color-gray-100)`
- Card backgrounds: `var(--color-white)` with `var(--color-gray-300)` border

**Foreground colors:**
- Primary text: `var(--color-gray-900)` (AAA: 15.3:1 contrast on white)
- Secondary text: `var(--color-gray-700)` (AAA: 7.2:1 contrast on white)
- Tertiary text: `var(--color-gray-600)` (AA: 4.6:1 contrast on white)
- Link text: Professional blue (minimum AA: 4.5:1)

**Accent colors (light mode):**
- Neon colors as borders/badges ONLY — never primary text
- World map pins: Professional blue with neon border on hover
- Timeline: Gray-900 text with neon accent borders
- Buttons: Professional blue background, white text (AAA: 7:1)

**Stats display (light mode):**
- Use `<StatsGrid>` component
- Numbers: `var(--color-gray-900)` — large, bold
- Labels: `var(--color-gray-700)`
- Icons: `var(--color-gray-600)` with professional blue accent

**WCAG 2.2 AA:** Normal text 4.5:1, Large text 3:1, UI 3:1 ✅  
**WCAG 2.2 AAA:** Normal text 7:1, Large text 4.5:1 ✅

#### Dark Mode Styles (Funky Neon Aesthetic)

**Background hierarchy:**
- Primary surface: `var(--color-black)` or `var(--color-gray-900)`
- Secondary surface: `var(--color-gray-800)`
- Card backgrounds: `rgba(255, 255, 255, 0.05)` glassmorphism + neon borders

**Foreground colors:**
- Primary text: `var(--color-white)` (AAA: 21:1 on black)
- Secondary text: `var(--color-gray-300)` (AAA: 9.7:1 on black)
- Link text: `var(--wp--preset--color--neon-cyan)` (AA: 5.2:1 on black)

**Neon accent colors (dark mode ONLY):**
- World map pins: `var(--wp--preset--color--neon-cyan)` with glow
- Timeline events: `var(--wp--preset--color--neon-pink)`
- Values: `var(--wp--preset--color--neon-lime)`
- Initiatives: `var(--wp--preset--color--neon-yellow)`
- Glow effects: `box-shadow` with neon color at 50% opacity

**Stats display (dark mode):**
- Use `<NeonStats>` component with forced dark background
- Numbers: Neon cyan/pink/lime rotation with glow
- Labels: `var(--color-gray-300)`
- Card backgrounds: Glassmorphism with neon borders

**WCAG 2.2 AA:** All neon colors meet 4.5:1+ for large text ✅  
**WCAG 2.2 AAA:** White/gray-300 for body text (7:1+) ✅

#### Implementation Pattern

```css
/* Light mode default */
.culture-hero {
  background: var(--color-white);
  color: var(--color-gray-900);
}

/* Dark mode - Funky neon */
@media (prefers-color-scheme: dark) {
  .culture-hero {
    background: var(--color-black);
    color: var(--color-white);
  }
  
  .culture-hero__title {
    text-shadow: 0 0 20px var(--wp--preset--color--neon-cyan);
  }
}

/* Force dark sections */
.section--force-dark {
  background: var(--color-black) !important;
  color: var(--color-white) !important;
}
```

#### Accessibility Checklist

**Light mode:**
- [ ] All text meets 4.5:1 minimum (7:1 preferred)
- [ ] Links distinguishable without color
- [ ] Focus indicators visible (3:1 minimum)
- [ ] Form inputs have visible borders

**Dark mode:**
- [ ] Neon colors for large text/accents only
- [ ] White/gray-300 for body text (7:1+ ratio)
- [ ] Neon glows don't obscure readability
- [ ] Focus indicators bright and clear

### Typography
- Headings: `var(--font-primary)` (Lexend) — sentence case
- Body: `var(--font-secondary)` (Manrope)
- Quotes: italic, larger size

### Spacing
- Section padding: `var(--spacing-24)` desktop, `var(--spacing-16)` mobile
- Element gaps: `var(--spacing-8)`, `var(--spacing-6)`, `var(--spacing-4)`
- Container max-width: `var(--max-w-7xl)`

### Components
- Use existing: `<Card>`, `<Badge>`, `<Button>`
- Create new: `<WorldMap>`, `<TeamTimeline>`, `<ValueConstellation>`

---

## Accessibility Requirements

- ✅ World map has text-based list view toggle
- ✅ Timeline keyboard navigable
- ✅ Constellation has static fallback
- ✅ All quotes have proper semantic markup
- ✅ Photos have descriptive alt text
- ✅ WebGL respects `prefers-reduced-motion`
- ✅ Focus states on all interactive elements

---

## Performance Targets

- Lighthouse score: 95+
- LCP: <2.5s
- FID: <100ms
- CLS: <0.1
- WebGL optimised for mobile (lazy load)

---

## Content Deliverables

1. **Hero copy** (50 words)
2. **Remote culture narrative** (200 words)
3. **Rhythm descriptions** (3 × 100 words)
4. **Milestone descriptions** (7 × 50 words)
5. **Value descriptions** (6 × 75 words)
6. **Initiative descriptions** (5 × 100 words)
7. **Team testimonials** (6 × 50 words)

---

## Technical Implementation

### Files to Create/Update

```
/src/app/components/templates/AboutCultureTemplate.tsx
/src/app/components/blocks/culture/WorldMap.tsx
/src/app/components/blocks/culture/TeamTimeline.tsx
/src/app/components/blocks/culture/ValueConstellation.tsx
/src/styles/templates/about-culture.css
```

### WebGL Libraries

- **Three.js** for 3D Earth rendering
- **React Three Fiber** for React integration
- **@react-spring/three** for animations
- CSS fallback for non-WebGL devices

---

## Success Criteria

- [ ] Page clearly communicates remote-first culture
- [ ] World map is interactive and engaging
- [ ] Timeline shows cultural evolution
- [ ] Values constellation demonstrates principles
- [ ] Initiatives section shows investment in team
- [ ] Testimonials humanise the team
- [ ] CTAs drive applications and engagement
- [ ] Page loads in <3s on 3G
- [ ] All WebGL elements have accessible alternatives

---

## Next Steps After Completion

1. Link from main About page
2. Update careers page to reference culture
3. Create blog posts expanding on cultural initiatives
4. Update team page with individual bios
5. Add culture video or photo gallery

---

**Questions for clarification:**

1. How many team members should appear on world map?
2. Which retreat photos are approved for public use?
3. Should testimonials include full names and photos?
4. Link to careers page or embed job listings?
5. Include salary ranges or benefits information?

---

**Last Updated:** March 17, 2026  
**Total Estimated Effort:** 12-16 hours (design + development + content)  
**Priority:** Medium (supports recruitment and brand)