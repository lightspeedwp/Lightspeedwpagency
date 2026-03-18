# Services – Accessibility — Funky Redesign Prompt

**Category:** AI Services Restructure — Services Section  
**Version:** 1.0.0  
**Last Updated:** 2026-03-17  
**Status:** Active  
**Parent Orchestrator:** `/prompts/ai-services-restructure.md`

---

## Purpose

Create an Accessibility service page with Funky neon aesthetic that demonstrates inclusive design expertise. Show how accessibility enhances user experience for everyone, improves AI discoverability and ensures WCAG compliance — all while looking visually stunning.

---

## Summary

**Value** — Ensures every user can access and interact with your website regardless of ability. Accessibility service provides audits, remediation and training to achieve WCAG compliance and inclusive design.

**Risks** — Inaccessible websites exclude users, risk legal liability and undercut search visibility including AI search. Generic accessibility pages feel like checkbox compliance rather than genuine commitment.

**Next step** — Build page showcasing accessibility as design excellence with Funky WebGL visualizations of inclusive user journeys, interactive WCAG checkers and celebration of universal design.

---

## Funky Design Philosophy

**Accessibility made visible and beautiful:**

- **Hero:** Bridge visualization connecting diverse user avatars with neon paths
- **WCAG compliance** displayed as achievement badges with neon glow
- **Color contrast checker** with real-time neon pass/fail indicators
- **User journey maps** showing accessible paths with particle trails
- **Screen reader simulator** with animated text highlighting

**Demonstrate:** Accessible design can be stunning design.

---

## WebGL Concepts

### 1. Accessibility Bridges Hero

**Concept:** Series of glowing bridges connecting diverse user avatars.

**Implementation:**
- Different user avatars: wheelchair user, visually impaired, smartphone user, elderly user
- Neon bridges (cyan, pink, lime, yellow) connecting all avatars to central website
- Hover avatar shows accessibility practice tooltip:
  - "High contrast for low vision"
  - "Keyboard navigation for motor disabilities"
  - "ARIA labels for screen readers"
  - "Touch targets for mobile users"
- Particles flow across bridges representing inclusive access
- All paths lead to same destination (equality)

### 2. Interactive Color Contrast Checker

**Concept:** Live tool demonstrating WCAG color contrast compliance.

**Implementation:**
- 3D cube split into two colors (foreground/background)
- User inputs color values or uses sliders
- Cube faces update in real-time
- Pass/fail indicator glows:
  - Green (AAA): neon-lime glow
  - Yellow (AA): neon-yellow glow
  - Red (Fail): neon-red pulse
- Shows contrast ratio numerically
- Suggests adjustments to pass
- Examples: text, icons, UI elements

### 3. Screen Reader Simulator

**Concept:** Animated visualization of how screen readers interpret content.

**Implementation:**
- Sample webpage layout
- Click "Play" to start screen reader simulation
- Text highlights in neon as it's "read"
- Playback speed controls
- Shows heading hierarchy with neon outline
- Demonstrates alt text for images
- Shows ARIA labels on interactive elements
- Pause to inspect any element
- Educational tooltips explain semantic markup

---

## Page Structure

1. **Hero** (Accessibility bridges WebGL)
   - Badge: "Design for everyone"
   - Title: "Accessibility is not optional — it's essential"
   - Subtitle: WCAG compliant, AI-ready, beautifully inclusive
   - CTAs: Request audit | Learn about WCAG

2. **Why Accessibility Matters**
   - Legal obligations (ADA, Equality Act)
   - Moral imperative
   - Business benefits (larger audience, better SEO/AEO)
   - AI discoverability connection
   - Stats: % of users with disabilities, lawsuits avoided

3. **Services Offered** (8 cards with neon icons)
   - Accessibility audits (manual + automated)
   - WCAG compliance remediation
   - Accessible design systems
   - Keyboard & screen reader testing
   - Captioning & transcripts
   - PDF remediation
   - Accessibility training
   - Ongoing monitoring

4. **WCAG Compliance Levels**
   - A, AA, AAA explained
   - Visual progress bars with neon fill
   - What each level requires
   - Our standard: AA minimum, AAA where possible

5. **Color Contrast Checker** (WebGL interactive)
   - Live demo tool
   - Educational resource
   - Shows LightSpeed's commitment to contrast
   - Link to full tool

6. **Screen Reader Simulator** (WebGL)
   - Demonstrates importance of semantic markup
   - Educational and engaging
   - Shows good vs bad examples

7. **Accessibility Process**
   - Audit → Remediate → Train → Monitor
   - Each step with deliverables
   - AI assistance highlighted
   - Timeline estimates

8. **Technology & Tools**
   - Axe DevTools
   - WAVE
   - Lighthouse accessibility audit
   - Screen readers (NVDA, JAWS, VoiceOver)
   - Keyboard testing
   - AI-powered scanners

9. **Case Studies**
   - Sites made accessible
   - Before/after metrics
   - Engagement improvements
   - Legal risk mitigation
   - Neon cards with stats

10. **Common Issues**
    - Missing alt text
    - Poor color contrast
    - Keyboard traps
    - Missing ARIA labels
    - Non-semantic HTML
    - How we fix each (with examples)

11. **FAQs**
    - Accessibility questions
    - WCAG levels, costs, timelines
    - Neon accordion

12. **CTA** (Funky)
    - "Make your site accessible to all"
    - Book accessibility audit
    - Download WCAG checklist
    - Dark background, neon gradient

---

## Design System

**Typography:** Lexend (headings), Manrope (body), sentence case

**Colors:**
- Success (pass): `var(--wp--preset--color--neon-lime)`
- Warning (AA): `var(--wp--preset--color--neon-yellow)`
- Error (fail): `var(--wp--preset--color--neon-red)`
- Info: `var(--wp--preset--color--neon-cyan)`

**Spacing:** Standard spacing tokens

**Accessibility features of the page itself:**
- ✅ WCAG AAA compliant
- ✅ Full keyboard navigation
- ✅ Screen reader optimized
- ✅ High contrast mode
- ✅ Reduced motion respected
- ✅ Clear focus indicators

**Irony note:** This page must be the MOST accessible page on the site.

---

## Stats Integration

```typescript
const a11yStats = [
  { id: 'sites-audited', value: 200, suffix: '+', label: 'Sites audited' },
  { id: 'wcag-compliance', value: 98, suffix: '%', label: 'WCAG AA compliance' },
  { id: 'issues-fixed', value: 5000, suffix: '+', label: 'Issues remediated' },
  { id: 'lawsuits-avoided', value: 15, suffix: '+', label: 'Legal risks mitigated' }
];
```

---

## Content Deliverables

1. Hero copy (75 words)
2. Why it matters (250 words)
3. Service descriptions (8 × 100 words)
4. WCAG levels explanation (200 words)
5. Process steps (4 × 150 words)
6. Common issues (6 × 100 words)
7. Case studies (3 × 150 words)
8. FAQs (10 × 75 words)

**Total:** ~3,000 words

---

## Success Criteria

- [ ] Page demonstrates accessibility commitment
- [ ] Tools are educational and functional
- [ ] WCAG compliance clearly explained
- [ ] Legal and business case made
- [ ] Process inspires confidence
- [ ] Page itself is AAA compliant
- [ ] Funky aesthetic doesn't compromise accessibility

---

**Last Updated:** March 17, 2026  
**Estimated Effort:** 12-14 hours  
**Priority:** Medium (demonstrates values)
