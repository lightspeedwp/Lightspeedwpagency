# About – Team — Page Redesign Prompt

**Category:** AI Services Restructure — About Section  
**Version:** 1.0.0  
**Last Updated:** 2026-03-17  
**Status:** Active  
**Parent Orchestrator:** `/prompts/ai-services-restructure.md`

---

## Purpose

Redesign the Team page to humanise LightSpeed by introducing the people behind the work. Demonstrate the breadth of skills, collaboration and commitment to innovation. Highlight AI expertise and communicate the company's collaborative culture.

---

## Summary

**Value** — Humanises LightSpeed by introducing the people behind the work. It demonstrates the breadth of skills and collaboration that make projects successful.

**Risks** — A static list of names and titles may feel impersonal or dated. It must convey the team's personality, expertise and commitment to innovation.

**Next step** — Revamp the team page with interactive bios, highlight AI expertise and communicate the company's collaborative culture.

---

## Content Audit

### Current Structure

**Existing content:**
- Headline: "A group of awesome humans"
- Emphasises collaborative, qualified team
- Lists team members:
  - Ash Shaw — CEO
  - Barbara Kerr — CFO
  - Warwick Booth — Lead Developer
  - Others with minimal detail

**Required updates:**
- Expand bios to include:
  - Short paragraph (75-100 words)
  - Expertise areas (WordPress, AI, design, etc.)
  - Notable projects or achievements
  - Passions and interests
  - Pronouns (optional)
  - Location and timezone
- Highlight diverse experiences
- Show remote locations on map
- Add photos (high quality, consistent style)

### Detail Level

**Current state:**
- Very brief, title-only listings

**Required updates:**
- **Bio structure:**
  - Name and pronouns
  - Role and expertise
  - Background (75 words)
  - Notable achievements
  - AI-related work
  - Fun fact or personal interest
  - Social links (LinkedIn, GitHub, personal site)
- **Expertise tags:**
  - WordPress Core
  - Block Themes
  - WooCommerce
  - Design Systems
  - AI Integration
  - Performance
  - Accessibility
  - Content Strategy
  - etc.

### AI Skills

**Current state:**
- Not mentioned

**Required updates:**
- Introduce AI-related roles:
  - **AI Researcher** — explores emerging AI tools
  - **Prompt Engineer** — optimizes AI integrations
  - **Data Analyst** — interprets AI metrics
  - **AEO Specialist** — answer engine optimization
- Highlight team members' AI contributions:
  - "Led AI search readiness implementation for 50+ sites"
  - "Developed custom GPT for content auditing"
  - "Integrated ChatGPT API for client chatbots"
- Show cross-functional collaboration:
  - Design + Development + AI = Integrated solutions

### Images & Accessibility

**Current state:**
- Unknown photo quality/availability

**Required updates:**
- **Photo requirements:**
  - High resolution (min 800×800px)
  - Consistent style (same lighting, background)
  - Professional yet personable
  - Diverse representation
- **Accessibility:**
  - Descriptive alt text for each photo
  - Text-based bios readable without images
  - Keyboard-navigable profiles
  - Screen reader-friendly layout
- **Privacy:**
  - Confirm comfort level with personal details
  - Optional last names, locations, photos
  - Respect privacy preferences

---

## WebGL & Interactive Ideas

### 1. 3D Team Sphere

**Concept:**
Rotating sphere with team member portraits mapped onto tiles.

**Implementation:**
- WebGL sphere with photo tiles on surface
- Sphere slowly auto-rotates
- Each tile has team member's photo
- Click-drag to manually rotate
- Clicking tile opens expanded bio card

**Interaction:**
- Desktop: drag to rotate, hover for name preview, click for full bio
- Mobile: swipe to rotate, tap for full bio
- Accessibility: list view toggle

**Bio card content:**
- Photo
- Name and role
- Bio paragraph
- Expertise tags
- Notable projects
- Fun fact
- Social links
- Close button

### 2. Skill Matrix

**Concept:**
Interactive grid showing team members (rows) and skill categories (columns).

**Implementation:**
- Rows: team members
- Columns: Design | Development | AI | Hosting | Strategy | Content
- Cells show proficiency level (1–5 dots or color intensity)
- Hover over cell highlights member's strengths
- Click member to see full bio
- Filter by skill to see all experts

**Interaction:**
- Hover highlights row and column
- Click member jumps to profile
- Filter buttons at top
- Sort by name, role, expertise

### 3. Meet the Team Carousel

**Concept:**
Horizontally scrolling carousel of profile cards.

**Implementation:**
- Card fronts: photo, name, role
- Flip on hover to reveal:
  - Bio snippet
  - Expertise tags
  - Location
  - Favorite tools
  - AI contributions
- Click "Read more" to open full bio

**Interaction:**
- Scroll horizontally or use arrow buttons
- Hover to flip card
- Click to open full bio modal
- Keyboard arrows for navigation

---

## Page Structure

### Sections

1. **Hero**
   - Badge: "20+ experts, 5 continents"
   - Title: "Meet the humans behind the code"
   - Tagline: A diverse team united by curiosity, craft and collaboration
   - CTA: Join the team | View culture
   - Background: Subtle team photo montage

2. **Team Introduction**
   - Who we are
   - What unites us
   - Cross-functional collaboration
   - Remote-first benefits
   - Link to Culture page

3. **Leadership Team**
   - CEO, CFO, Lead Developer
   - Expanded bios
   - Strategic vision
   - Photos and social links

4. **Team Grid/Sphere** (WebGL option)
   - All team members
   - Interactive exploration
   - Click for full bios

5. **Skill Matrix** (WebGL option)
   - Visualize expertise
   - Filter and sort
   - See collaboration patterns

6. **AI Expertise Spotlight**
   - Team members leading AI initiatives
   - AI-related projects
   - Research and experimentation
   - Link to AI services

7. **Team Values**
   - How values show up in work
   - Examples of collaboration
   - Link to Culture page

8. **CTA**
   - "Want to join us?"
   - View open positions
   - Submit application

---

## Design System Requirements

### Typography
- Names: `var(--font-primary)` (Lexend), bold
- Roles: `var(--font-primary)`, regular, uppercase
- Bios: `var(--font-secondary)` (Manrope)
- Tags: small, uppercase, `--letter-spacing-wide`

### Colours
- Profile cards:
  - Light mode: white cards with gray borders
  - Dark mode: dark cards with neon borders
- Expertise tags:
  - Design: `var(--category-pink)`
  - Development: `var(--category-blue)`
  - AI: `var(--wp--preset--color--neon-cyan)`
  - Hosting: `var(--category-green)`
  - Strategy: `var(--category-purple)`
  - Content: `var(--category-yellow)`

### Spacing
- Section padding: `var(--spacing-24)` desktop, `var(--spacing-16)` mobile
- Card gaps: `var(--spacing-6)`
- Profile photo size: 200×200px desktop, 150×150px mobile
- Container max-width: `var(--max-w-7xl)`

### Components
- Use existing: `<Card>`, `<Badge>`, `<Button>`
- Create new: `<TeamSphere>`, `<SkillMatrix>`, `<TeamCarousel>`, `<ProfileCard>`

---

## Team Data Structure

```typescript
interface TeamMember {
  id: string;
  name: string;
  pronouns?: string; // "she/her", "he/him", "they/them"
  role: string;
  team: 'leadership' | 'development' | 'design' | 'strategy' | 'operations';
  location: string; // "Cape Town, South Africa"
  timezone: string; // "GMT+2"
  photo: string; // path to high-res photo
  bio: string; // 75-100 words
  expertise: ExpertiseTag[]; // array of skill tags
  notableProjects?: string[]; // max 3
  aiContributions?: string; // 30 words
  funFact?: string; // 20 words
  social?: {
    linkedin?: string;
    github?: string;
    website?: string;
    twitter?: string;
  };
}

type ExpertiseTag =
  | 'WordPress Core'
  | 'Block Themes'
  | 'WooCommerce'
  | 'Design Systems'
  | 'AI Integration'
  | 'Performance'
  | 'Accessibility'
  | 'Content Strategy'
  | 'Hosting'
  | 'Security'
  | 'SEO/AEO'
  | 'UI/UX'
  | 'Frontend'
  | 'Backend'
  | 'DevOps';
```

---

## Accessibility Requirements

- ✅ All photos have descriptive alt text
- ✅ Keyboard navigation for all profiles
- ✅ Screen reader announces names and roles
- ✅ WebGL has static list fallback
- ✅ Social links have aria-labels
- ✅ Focus states visible on all interactive elements
- ✅ Text contrast meets WCAG AA

---

## Performance Targets

- Lighthouse score: 95+
- LCP: <2.5s (despite multiple photos)
- FID: <100ms
- CLS: <0.1
- Progressive image loading (blur-up)
- WebGL lazy loaded

---

## Content Deliverables

1. **Hero copy** (50 words)
2. **Team introduction** (150 words)
3. **Leadership bios** (3 × 100 words)
4. **Team member bios** (15-20 × 75 words)
5. **AI spotlight** (200 words)
6. **Values section** (150 words)

---

## Technical Implementation

### Files to Create/Update

```
/src/app/components/templates/AboutTeamTemplate.tsx
/src/app/components/blocks/team/TeamSphere.tsx
/src/app/components/blocks/team/SkillMatrix.tsx
/src/app/components/blocks/team/TeamCarousel.tsx
/src/app/components/blocks/team/ProfileCard.tsx
/src/app/data/team-data.ts
/src/styles/templates/about-team.css
```

### WebGL Libraries

- **Three.js** for 3D sphere
- **React Three Fiber**
- **@react-spring/three** for animations
- Fallback to CSS grid

---

## Success Criteria

- [ ] All team members have complete, engaging bios
- [ ] AI expertise is highlighted
- [ ] Interactive elements enhance (don't distract from) content
- [ ] Page humanizes the team
- [ ] Expertise diversity is clear
- [ ] Remote-first culture comes through
- [ ] CTAs drive applications and engagement
- [ ] Page loads in <3s despite photos
- [ ] All elements are accessible

---

## Next Steps After Completion

1. Link from main About page
2. Update LinkedIn profiles to link back
3. Create individual team member pages (optional)
4. Add team blog posts or interviews
5. Update careers page with team culture info

---

**Questions for clarification:**

1. How many team members to feature (all or subset)?
2. Which team members are comfortable with photos/bios?
3. Should we include contractors or only FTEs?
4. Include tenure/join date information?
5. Preferred interaction model: sphere, matrix, or carousel?

---

**Last Updated:** March 17, 2026  
**Total Estimated Effort:** 16-20 hours (design + development + content + photo collection)  
**Priority:** Medium (recruitment and humanization)
