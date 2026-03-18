# Services – Training — Page Redesign Prompt

**Category:** AI Services Restructure — Services Section  
**Version:** 1.0.0  
**Last Updated:** 2026-03-17  
**Status:** Active  
**Parent Orchestrator:** `/prompts/ai-services-restructure.md`

---

## Purpose

Create a comprehensive Training & Empowerment service page that positions LightSpeed as not just a builder of WordPress systems, but a partner that ensures clients can confidently manage, extend and optimize their sites. Emphasize AI proficiency training and demonstrate how proper training reduces dependency, improves outcomes and maximizes ROI.

---

## Summary

**Value** — Empowers clients and their teams to manage, extend and get the most from their WordPress sites and AI integrations. The training service includes workshops, hands-on sessions and documentation tailored to each project.

**Risks** — Without proper training, clients may feel dependent on developers for every change. Poorly trained teams may misuse AI tools, compromise performance or publish inaccessible content.

**Next step** — Build a training page that highlights custom programmes for editors, marketers and developers, and emphasises AI proficiency.

---

## Content Overview

### Hero Messaging

**Copy direction:**
```
"Master your WordPress system — unlock AI superpowers"

Empower your team to create, optimize and grow with confidence. 
From content editors to developers, our training programmes transform 
how you work with WordPress and AI.
```

**CTAs:**
- Book a training session
- Download training catalogue (PDF)
- View sample lessons

**Background:**
- Dark mode: 3D classroom visualization (WebGL)
- Light mode: Clean gradient with subtle grid

### Training Programmes by Audience

Divide offerings into four tracks:

#### 1. Content Editors Track

**Target audience:** Writers, editors, content managers

**Topics:**
- WordPress block editor fundamentals
- Block patterns and reusable blocks
- Content governance and workflows
- AI-assisted content creation
- SEO/AEO best practices for editors
- Accessibility in content (alt text, headings, readability)
- Media library management
- Version control and revisions

**Outcomes:**
- Publish content 3× faster
- Improve SEO rankings
- Ensure accessibility compliance
- Leverage AI for drafting and optimization

**Duration:** 4-6 hours (2 sessions)

#### 2. Designers Track

**Target audience:** UI/UX designers, brand managers

**Topics:**
- Design systems and design tokens
- Figma to WordPress workflow
- Block theme customization
- Accessibility in design (colour contrast, touch targets)
- Responsive design principles
- Brand consistency across templates
- AI-assisted design prototyping

**Outcomes:**
- Maintain brand consistency
- Design accessible interfaces
- Collaborate efficiently with developers
- Use AI tools for rapid prototyping

**Duration:** 6-8 hours (3 sessions)

#### 3. Developers Track

**Target audience:** Front-end/back-end developers, technical leads

**Topics:**
- Block theme development
- Custom block creation
- Plugin development
- API integrations
- Performance optimization
- Security best practices
- AI integration (LLM APIs, vector databases)
- Automated testing and CI/CD

**Outcomes:**
- Build custom blocks and themes
- Integrate AI features safely
- Optimize for Core Web Vitals
- Maintain secure, scalable code

**Duration:** 12-16 hours (6 sessions)

#### 4. Marketers Track

**Target audience:** Marketing managers, growth leads, analysts

**Topics:**
- SEO/AEO fundamentals
- Google Analytics 4 and Search Console
- AI search visibility monitoring
- Conversion optimization
- A/B testing strategies
- Content performance analytics
- AI reporting and insights
- Answer engine optimization tactics

**Outcomes:**
- Track and improve SEO/AEO performance
- Understand AI search visibility
- Make data-driven decisions
- Leverage AI for competitive analysis

**Duration:** 4-6 hours (2 sessions)

### Delivery Formats

**Live workshops:**
- Remote via video conference (default)
- On-site at client location (available)
- Interactive with hands-on exercises
- Q&A throughout

**On-demand videos:**
- Professionally produced lessons
- Chapter markers for easy navigation
- Closed captions for accessibility
- Download for offline viewing

**Step-by-step guides:**
- PDF and interactive web format
- Screenshots and code samples
- Searchable and printable
- Regular updates as WordPress evolves

**Interactive webinars:**
- Live demonstrations
- Screen sharing and co-browsing
- Real-time questions
- Recordings provided

**Office hours:**
- Weekly drop-in sessions
- Ask anything about WordPress or AI
- Troubleshooting support
- Best practices consultation

**AI enhancements:**
- AI summarizes sessions and generates recaps
- Personalized learning paths based on role
- AI chatbot for instant help between sessions
- Automated progress tracking

### Materials & Documentation

**Resources provided:**

**PDF guides:**
- Editor handbook (50+ pages)
- Designer guide (40+ pages)
- Developer documentation (80+ pages)
- Marketer playbook (30+ pages)

**Video recordings:**
- All live sessions recorded
- On-demand course library
- Searchable video transcripts
- Accessibility captions

**Design system docs:**
- Component library
- Token reference
- Pattern catalog
- Brand guidelines

**Code samples:**
- GitHub repository access
- Custom block examples
- Plugin templates
- AI integration snippets

**AI prompt libraries:**
- Content generation prompts
- SEO optimization prompts
- Code generation examples
- Analytics query templates

**Interactive tools:**
- Accessibility checker
- Performance analyzer
- SEO/AEO scorecard
- AI readiness assessment

**All materials:**
- ✅ WCAG 2.1 AA compliant
- ✅ Regularly updated
- ✅ Accessible via client portal
- ✅ Downloadable for offline use

### Outcomes & Benefits

**For organizations:**
- **Reduced support tickets:** 40-60% reduction after training
- **Faster content publishing:** 3× improvement in velocity
- **Improved SEO/AEO:** 25-40% increase in organic visibility
- **Higher AI adoption:** 80%+ feature utilization vs 20% pre-training
- **Better accessibility:** 95%+ compliance post-training
- **Cost savings:** Less dependency on developers for basic tasks

**For individuals:**
- Confidence in WordPress and AI tools
- Career skill development
- Certification of completion
- Community of practice access
- Ongoing support and updates

**Metrics from past engagements:**
- 150+ teams trained
- 500+ individuals certified
- 4.8/5 average satisfaction rating
- 92% would recommend to colleagues

---

## WebGL & Interactive Ideas

### 1. 3D Classroom Visualisation

**Concept:**
Interactive 3D auditorium showing different training tracks as seats/stations.

**Implementation:**
- WebGL scene: semicircular auditorium with floating seats
- Each seat represents a training track:
  - **Editor seat** (neon-cyan): Front-left
  - **Designer seat** (neon-pink): Front-right
  - **Developer seat** (neon-lime): Back-left
  - **Marketer seat** (neon-yellow): Back-right
- Central screen displays current track content
- Hover over seat reveals tooltip with track details
- Click seat to "enroll" and see detailed curriculum

**Interaction:**
- Desktop: hover highlights seat, click to select track
- Mobile: tap to preview track, tap again to select
- Camera slowly orbits classroom
- Particles flow from screen to seats (knowledge transfer)
- Accessibility: Text list toggle with same information

**Visual details:**
- Dark auditorium with neon accent lighting
- Floating holographic screens
- Avatars in seats (optional)
- Progress bars above each seat showing completion

### 2. Interactive Syllabus Carousel

**Concept:**
Rotating carousel of course module cards that flip to reveal content.

**Implementation:**
- 3D card carousel in WebGL
- Each card is a training module
- Card front: module title, duration, icon
- Card back: learning objectives, sample topics
- Drag to rotate carousel
- Click card to flip and see details
- Modules organized by track (color-coded)

**Interaction:**
- Drag horizontally to rotate carousel
- Click/tap card to flip
- Filter by track (Editor, Designer, Developer, Marketer)
- Auto-rotate when idle
- Keyboard arrows for navigation

**Card structure:**
```
Front:
- Icon (track-specific)
- Module number
- Title
- Duration

Back:
- Learning objectives (3-5 bullets)
- Sample lesson link
- Prerequisites
- CTA: "Enroll now"
```

**Animation:**
- Smooth 3D rotation
- Flip animation on click
- Stagger effect when filtering
- Neon glow on active card

### 3. Training Progress Simulator

**Concept:**
Interactive dashboard showing how training completion affects key metrics.

**Implementation:**
- Slider control: 0% → 100% training completion
- Real-time metric updates as slider moves
- Metrics visualized:
  - Support tickets (decreases)
  - Content velocity (increases)
  - SEO score (increases)
  - AI adoption (increases)
  - Accessibility score (increases)
- WebGL charts animate changes
- Comparison view: "Before training" vs "After training"

**Interaction:**
- Drag slider to see metric changes
- Hover metrics for detailed explanations
- Toggle between metric views
- Export projection as PDF

**Metrics displayed:**
```
Support Tickets
├─ Before: 50/month
└─ After: 20/month (-60%)

Content Velocity
├─ Before: 5 posts/week
└─ After: 15 posts/week (+200%)

SEO Visibility
├─ Before: 60/100
└─ After: 85/100 (+42%)

AI Adoption
├─ Before: 20% features used
└─ After: 85% features used (+325%)

Accessibility
├─ Before: 72% compliant
└─ After: 96% compliant (+33%)
```

**Visual treatment:**
- Animated line charts
- Neon gradient fills
- Particle effects on metric improvements
- Celebration animation at 100% completion

---

## Page Structure

### Sections

1. **Hero**
   - Badge: "Transform your team's capabilities"
   - Title: "Master your WordPress system — unlock AI superpowers"
   - Tagline: From content creation to AI integration, learn to work smarter
   - CTAs: Book training | Download catalogue
   - Background: 3D classroom (WebGL) or clean gradient

2. **Problem Statement**
   - Why training matters
   - Cost of untrained teams
   - Dependency vs empowerment
   - Link to case studies

3. **Training Tracks** (4 cards)
   - Content Editors
   - Designers
   - Developers
   - Marketers
   - Each card: audience, topics, outcomes, duration, CTA

4. **Interactive Syllabus** (WebGL)
   - Module carousel
   - Filter by track
   - Flip cards for details
   - Sample lessons

5. **Delivery Formats**
   - Live workshops
   - On-demand videos
   - Guides & documentation
   - Webinars & office hours
   - AI enhancements

6. **Progress Simulator** (WebGL)
   - Show ROI of training
   - Interactive metric dashboard
   - Before/after comparisons

7. **Materials & Resources**
   - PDF guides
   - Video library
   - Code samples
   - AI prompt libraries
   - All WCAG compliant

8. **Outcomes & Benefits**
   - Organizational benefits
   - Individual benefits
   - Metrics from past trainings
   - Stats integration (from registry)

9. **Training Process**
   - Discovery: assess team needs
   - Customization: tailor curriculum
   - Delivery: workshops & materials
   - Support: office hours & Q&A
   - Evolution: ongoing updates

10. **Testimonials**
    - Quotes from trained teams
    - Before/after stories
    - Photos/videos (optional)
    - Company logos

11. **Pricing & Packages**
    - Per-track pricing
    - Team packages (5-20 people)
    - Enterprise programs (20+ people)
    - Ongoing subscription options
    - Custom training development

12. **FAQs**
    - How long are sessions?
    - Can we customize curriculum?
    - What if we miss a session?
    - Are materials updated?
    - Is certification provided?
    - How do we measure success?

13. **CTA**
    - "Ready to empower your team?"
    - Book discovery call
    - Download training catalogue
    - Schedule demo lesson

---

## Design System Requirements

### Typography

- **Headings:** `var(--font-primary)` (Lexend) — sentence case
- **Body:** `var(--font-secondary)` (Manrope)
- **Track labels:** Uppercase, `var(--letter-spacing-wide)`, bold
- **Module cards:** Mixed hierarchy

### Colours

**Track color system:**
- **Editor track:** `var(--wp--preset--color--neon-cyan)`
- **Designer track:** `var(--wp--preset--color--neon-pink)`
- **Developer track:** `var(--wp--preset--color--neon-lime)`
- **Marketer track:** `var(--wp--preset--color--neon-yellow)`

**Light mode:**
- White/gray backgrounds
- Track colors as accents (borders, badges)
- Professional blue primary color

**Dark mode:**
- Black background
- Full neon aesthetic
- Track colors for glows and highlights

### Spacing

- Section padding: `var(--spacing-24)` desktop, `var(--spacing-16)` mobile
- Card gaps: `var(--spacing-8)`, `var(--spacing-6)`
- Container max-width: `var(--max-w-7xl)`
- Module cards: `var(--spacing-6)` padding

### Components

**Use existing:**
- `<Card>` — Track cards
- `<Badge>` — Track labels, difficulty levels
- `<Button>` — CTAs
- `<Accordion>` — FAQ section
- `<Tabs>` — Switch between tracks

**Create new:**
- `<TrainingClassroom>` — 3D auditorium (WebGL)
- `<SyllabusCarousel>` — Module cards (WebGL)
- `<ProgressSimulator>` — Metric dashboard (WebGL)
- `<TrackCard>` — Training track display
- `<ModuleCard>` — Individual module display

---

## Stats Integration

### From Stats Registry

```typescript
import { statsRegistry } from '@/data/stats';

// Training-related stats
const trainingStats = [
  {
    id: 'teams-trained',
    value: 150,
    label: 'Teams trained',
    suffix: '+',
    category: 'training',
    trend: 'up'
  },
  {
    id: 'individuals-certified',
    value: 500,
    label: 'Individuals certified',
    suffix: '+',
    category: 'training',
    trend: 'up'
  },
  {
    id: 'satisfaction-rating',
    value: 4.8,
    label: 'Satisfaction rating',
    suffix: '/5',
    category: 'training',
    trend: 'stable'
  },
  {
    id: 'ticket-reduction',
    value: 60,
    label: 'Reduction in support tickets',
    suffix: '%',
    category: 'training',
    trend: 'up'
  }
];
```

**Featured metrics:**
- Teams trained (150+)
- Individuals certified (500+)
- Satisfaction rating (4.8/5)
- Support ticket reduction (40-60%)
- Content velocity improvement (200%+)
- AI adoption increase (325%+)

---

## Accessibility Requirements

- ✅ 3D classroom has text-based list fallback
- ✅ Syllabus carousel keyboard navigable
- ✅ Progress simulator has static table alternative
- ✅ All training materials WCAG 2.1 AA compliant
- ✅ Video content has captions and transcripts
- ✅ Interactive elements have ARIA labels
- ✅ Focus states visible on all controls
- ✅ Respects `prefers-reduced-motion`
- ✅ Color-blind friendly track colors
- ✅ Sufficient contrast ratios (4.5:1 minimum)

---

## Performance Targets

- **Lighthouse score:** 95+
- **LCP:** <2.5s
- **FID:** <100ms
- **CLS:** <0.1
- **WebGL:** Lazy loaded, mobile-optimized
- **Videos:** Progressive loading
- **PDFs:** Compressed, fast download

---

## Content Deliverables

1. **Hero copy** (75 words)
2. **Problem statement** (150 words)
3. **Track descriptions** (4 × 150 words)
4. **Delivery formats** (300 words)
5. **Materials section** (200 words)
6. **Outcomes & benefits** (300 words)
7. **Training process** (200 words)
8. **Testimonials** (4 × 75 words)
9. **FAQs** (10 × 75 words)
10. **Pricing copy** (200 words)

**Total:** ~2,700 words

---

## Technical Implementation

### Files to Create/Update

```
/src/app/components/templates/ServicesTrainingTemplate.tsx
/src/app/components/blocks/training/TrainingClassroom.tsx
/src/app/components/blocks/training/SyllabusCarousel.tsx
/src/app/components/blocks/training/ProgressSimulator.tsx
/src/app/components/blocks/training/TrackCard.tsx
/src/app/components/blocks/training/ModuleCard.tsx
/src/app/data/training/tracks.ts
/src/app/data/training/modules.ts
/src/styles/templates/services-training.css
```

### Data Structure

```typescript
interface TrainingTrack {
  id: string;
  name: string;
  audience: string[];
  color: string; // CSS variable
  icon: string; // Phosphor icon name
  description: string;
  topics: string[];
  outcomes: string[];
  duration: {
    hours: number;
    sessions: number;
  };
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  prerequisites?: string[];
  modules: Module[];
  pricing: {
    individual: number;
    team: number; // per person (5-20)
    enterprise: number; // per person (20+)
  };
}

interface Module {
  id: string;
  trackId: string;
  number: number;
  title: string;
  description: string;
  duration: number; // minutes
  objectives: string[];
  topics: string[];
  resources: Resource[];
  sampleLessonUrl?: string;
}

interface Resource {
  type: 'pdf' | 'video' | 'code' | 'tool';
  title: string;
  url: string;
  size?: string; // "2.5 MB"
  duration?: string; // "15 minutes"
  accessible: boolean;
}
```

### WebGL Libraries

```json
{
  "dependencies": {
    "three": "^0.160.0",
    "@react-three/fiber": "^8.15.0",
    "@react-three/drei": "^9.95.0",
    "@react-spring/three": "^9.7.3",
    "recharts": "^2.10.0"
  }
}
```

**Fallback strategy:**
- Detect WebGL support
- Show CSS-based alternatives
- Lazy load 3D components
- Respect reduced motion preference

---

## Success Criteria

- [ ] Four training tracks clearly differentiated
- [ ] Syllabus is comprehensive and well-organized
- [ ] Interactive elements enhance understanding
- [ ] ROI of training is demonstrated
- [ ] Materials and resources are accessible
- [ ] Pricing is transparent and competitive
- [ ] Testimonials build credibility
- [ ] CTAs drive session bookings
- [ ] Page loads in <3s on 3G
- [ ] All WebGL has accessible alternatives
- [ ] Stats integrated from registry
- [ ] Copy emphasizes AI proficiency training

---

## Unique Value Propositions

### Differentiators

1. **AI-first training** — Not just WordPress, but AI integration mastery
2. **Customized curriculum** — Tailored to your tech stack and workflows
3. **Ongoing support** — Office hours and updates included
4. **Measurable outcomes** — Track ticket reduction, velocity improvements
5. **Multi-format delivery** — Learn your way (live, video, guides)
6. **Accessible materials** — WCAG 2.1 AA compliant resources
7. **Real project examples** — Train on your actual site (optional)
8. **Certification** — Proof of expertise for team members

---

## Training Packages

### Individual Tracks

- **Editor Essentials:** $1,200 (4-6 hours)
- **Designer Deep Dive:** $1,800 (6-8 hours)
- **Developer Bootcamp:** $3,200 (12-16 hours)
- **Marketer Masterclass:** $1,200 (4-6 hours)

### Team Packages (5-20 people)

- **Foundation Package:** All 4 tracks + materials — $8,000
- **Custom Package:** Pick tracks + custom modules — Quote
- **Enterprise Program:** 20+ people, ongoing training — Quote

### Subscription Options

- **Monthly updates:** New lessons as WordPress evolves — $500/month
- **Quarterly workshops:** Advanced topics and AI updates — $2,000/quarter
- **Office hours access:** Weekly drop-in support — $800/month

### Add-ons

- **On-site training:** Travel + facilitation — +$3,000/day
- **Custom module development:** Specific workflow training — $2,500/module
- **Train-the-trainer:** Certify internal trainers — $5,000/person
- **Certification exam:** Formal assessment and certificate — $200/person

---

## Case Study: Publishing Company Training

**Client:** Global Publishing Network  
**Challenge:** 50-person content team struggling with WordPress block editor and new AI tools  
**Solution:** Custom 3-month training programme

**Programme structure:**
- Week 1-2: Editor Essentials (all 50 staff)
- Week 3-4: Advanced AI content tools (editors only)
- Week 5-6: SEO/AEO for marketers (10 staff)
- Week 7-8: Developer bootcamp (5 developers)
- Week 9-12: Office hours and certification

**Results:**
- **80% reduction** in support tickets (50/month → 10/month)
- **250% increase** in content velocity (20 posts/week → 50 posts/week)
- **40% improvement** in SEO rankings (avg position 15 → 9)
- **90% AI adoption** (vs 15% pre-training)
- **98% WCAG compliance** (vs 65% pre-training)
- **4.9/5 satisfaction** rating from participants
- **ROI:** Training costs recovered in 3 months via reduced support needs

**Testimonial:**
> "LightSpeed's training transformed our team from WordPress novices to power users. The AI tools training alone has tripled our content output while improving quality. Best investment we've made." — Chief Content Officer

---

## FAQ Content

### How long are training sessions?

Sessions typically run 2-4 hours with breaks. We recommend splitting longer tracks into multiple sessions to avoid fatigue. All sessions are recorded for later review.

### Can we customize the curriculum?

Absolutely. We tailor every programme to your team's needs, tech stack and workflows. We can focus on specific features, skip basics or add custom modules.

### What if team members miss a session?

All sessions are recorded with captions. Participants can review missed content and join office hours for catch-up support.

### Are materials regularly updated?

Yes. As WordPress and AI tools evolve, we update all materials quarterly. Subscription packages include automatic access to new content.

### Is certification provided?

Yes. Participants who complete a track and pass an optional assessment receive a certificate of completion. Train-the-trainer programmes include formal certification.

### How do we measure training success?

We track metrics before and after training: support tickets, content velocity, SEO performance, AI adoption and accessibility compliance. Most clients see measurable improvements within 30 days.

### Do you offer on-site training?

Yes. We can deliver training at your location for an additional fee. Remote training is default and equally effective with screen sharing and co-browsing tools.

### What's included in office hours?

Weekly drop-in sessions where your team can ask questions, troubleshoot issues and get best practice guidance. Sessions are informal and recorded.

### Can we train just one person to train others?

Yes. Our train-the-trainer programme certifies internal staff to deliver LightSpeed training to your organization. Includes materials, certification and ongoing support.

### What if we're not ready for AI training?

No problem. We start where you are. AI modules are optional and can be added later as your team's proficiency grows.

---

## Next Steps After Completion

1. **Link from Services landing page**
2. **Create booking flow** for training sessions
3. **Build client portal** for materials access
4. **Develop certification exam** for each track
5. **Record sample lessons** for preview
6. **Create training catalogue PDF** for download
7. **Update case studies** with training outcomes
8. **Add training to service packages** (bundle with Build/Grow)
9. **Promote via blog posts** and social media
10. **Track and report** training metrics

---

## Clarification Questions

1. **Pricing structure:** Should prices be public or quote-based?
2. **Certification:** Formal exam required or completion-based?
3. **Materials access:** Time-limited or lifetime access?
4. **Office hours:** Included in all packages or add-on only?
5. **Custom curriculum:** Minimum engagement size/cost?
6. **Train-the-trainer:** How many internal trainers per client?
7. **Video hosting:** Vimeo/YouTube or self-hosted?
8. **Client portal:** Build custom or use existing LMS?
9. **Track prerequisites:** Should some tracks require completion of others?
10. **Testimonials:** Permission to use client names and logos?

---

**Last Updated:** March 17, 2026  
**Total Estimated Effort:** 18-22 hours (design + development + content + materials prep)  
**Priority:** High (revenue enabler, client empowerment)  
**Dependencies:** Client portal, video hosting, certification system
