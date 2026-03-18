# Services – Support & Hosting — Funky Redesign Prompt

**Category:** AI Services Restructure — Services Section  
**Version:** 1.0.0  
**Last Updated:** 2026-03-17  
**Status:** Active  
**Parent Orchestrator:** `/prompts/ai-services-restructure.md`

---

## Purpose

Create a Support & Hosting service page with Funky neon aesthetic demonstrating LightSpeed's commitment to ongoing care, proactive maintenance and responsive support. Show hosting infrastructure and support systems through visually striking WebGL network visualizations.

---

## Summary

**Value** — Provides ongoing assistance to keep websites running smoothly. Support service includes maintenance, updates, bug fixes, training and helpdesk access, ensuring clients get the most from their investment.

**Risks** — Without reliable support, small issues become critical outages. Delayed updates expose sites to security breaches. Generic support pages fail to differentiate from commodity hosting.

**Next step** — Create support page with Funky WebGL network visualizations, live uptime dashboards and AI-powered helpdesk demonstrations.

---

## Funky Design Philosophy

**Support as connected network:**

- **Hero:** Network of glowing nodes (servers + clients) with flowing data
- **Uptime dashboard** with real-time neon status indicators
- **Support tiers** as stacked service levels with neon glow
- **Maintenance calendar** with animated task completion
- **Ticket resolution** flow visualization

---

## WebGL Concepts

### 1. Support Network Hero

**Concept:** Network visualization showing central server nodes connected to client nodes.

**Implementation:**
- Central server cluster (glowing purple/cyan core)
- Client nodes arranged in circle around core
- Neon lines connecting server to each client
- Data packets (particles) flow bidirectionally
- Hover client node: shows site name, uptime, last update
- Lines pulse with activity:
  - Green: healthy connection
  - Yellow: maintenance in progress
  - Red: issue detected
  - Blue: backup running
- Central node glows brighter when multiple services active

**Animation:**
- Network assembles on load
- Packets continuously flow
- Nodes pulse with activity
- Smooth rotation of entire network

### 2. SLA Dashboard

**Concept:** Interactive gauge showing response times and resolution statistics.

**Implementation:**
- Circular gauges for metrics:
  - Uptime: 99.9% (neon-green)
  - Avg response time: 15min (neon-cyan)
  - Ticket resolution: 95% same-day (neon-lime)
  - Customer satisfaction: 4.8/5 (neon-yellow)
- Slide timeline to see historical data
- Compare service tiers
- Neon fills show progress toward SLA targets
- AI chatbot resolution rate highlighted

**Interaction:**
- Hover gauge: see detailed breakdown
- Drag timeline: see metrics over time
- Toggle between tiers
- Click metric: see case examples

### 3. Maintenance Calendar

**Concept:** 3D calendar that shows scheduled and completed maintenance tasks.

**Implementation:**
- Calendar pages flip as user scrolls
- Each day shows task icons:
  - Updates (plugin, core, theme)
  - Backups
  - Security scans
  - Performance checks
  - AI analysis
- Completed tasks glow green with checkmark
- Upcoming tasks pulse yellow
- Hover day: expand to show task details
- Filter by task type

**Visual:**
- 3D page-flip animation
- Neon task indicators
- Task icons with glow effects
- Progress bars for ongoing tasks

---

## Page Structure

1. **Hero** (Support network WebGL)
   - Badge: "Always on, always ready"
   - Title: "WordPress hosting and support that never sleeps"
   - Subtitle: Proactive maintenance, rapid response, AI-powered helpdesk
   - CTAs: View plans | Chat with support

2. **Value Proposition**
   - Why LightSpeed support & hosting:
     - Proactive (not reactive)
     - AI-enhanced helpdesk
     - Expert human support
     - Managed WordPress specialists
     - Guaranteed uptime
   - Stats: uptime %, ticket resolution time, customer satisfaction

3. **Service Tiers** (3 cards)
   - **Foundation:** Essential support
     - Monthly updates
     - Security scans
     - Daily backups
     - Email support (48h response)
     - $500/month
   - **Growth:** Priority support
     - Weekly updates
     - Performance monitoring
     - Priority support (4h response)
     - AI helpdesk access
     - Office hours
     - $1,200/month
   - **Enterprise:** Dedicated support
     - Real-time monitoring
     - Dedicated account manager
     - 24/7 emergency support (15min response)
     - Custom SLA
     - Quarterly reviews
     - Custom pricing
   - Visual: stacked layers with neon glow
   - Most popular badge (pulsing neon)

4. **SLA Dashboard** (WebGL)
   - Live metrics
   - Historical performance
   - Tier comparison

5. **Hosting Infrastructure**
   - Server specs and locations
   - CDN coverage (global map)
   - Caching layers
   - Redundancy and failover
   - Auto-scaling
   - Neon network diagram

6. **Maintenance Tasks**
   - Monthly checklist:
     - WordPress core updates
     - Plugin/theme updates
     - Security patching
     - Database optimization
     - Backup verification
     - Uptime monitoring
     - Performance analysis
     - AI health checks
   - Each with frequency and importance
   - Neon checkboxes

7. **Maintenance Calendar** (WebGL)
   - Visualize ongoing care
   - See tasks completed
   - Builds trust in proactive approach

8. **AI Helpdesk**
   - How it works:
     - Instant responses to common issues
     - Knowledge base search
     - Ticket routing to right expert
     - Automated diagnostics
     - Human escalation when needed
   - Stats: 60% issues resolved instantly
   - Demo chatbot (live on page)

9. **Support Channels**
   - Email ticketing
   - Live chat
   - Office hours (video call)
   - Emergency hotline (Enterprise)
   - AI chatbot (24/7)
   - Knowledge base
   - Each with response time SLA

10. **Hosting Features**
    - Managed WordPress (automatic updates)
    - Free SSL certificates
    - Daily backups (30-day retention)
    - Staging environments
    - Git integration
    - WP-CLI access
    - SSH access (on request)
    - Email hosting (optional)

11. **Case Studies**
    - Support success stories
    - Crisis aversion examples
    - Metrics: uptime maintained, issues resolved, downtime prevented
    - Neon cards

12. **Training & Resources**
    - Link to training service
    - Knowledge base access
    - Video tutorials
    - Monthly webinars
    - Client portal tour

13. **FAQs**
    - Support questions
    - Tiers, response times, upgrades
    - Neon accordion

14. **CTA** (Funky)
    - "Get the support your site deserves"
    - Choose plan
    - Book consultation
    - Start free trial (if offered)
    - Dark background, neon gradient

---

## Design System

**Typography:** Lexend (headings), Manrope (body), sentence case

**Colors:**
- Uptime/healthy: `var(--wp--preset--color--neon-lime)`
- Maintenance: `var(--wp--preset--color--neon-yellow)`
- Issue/alert: `var(--wp--preset--color--neon-red)`
- Backup/secure: `var(--wp--preset--color--neon-cyan)`
- AI assistance: gradient

**Spacing:** Standard spacing tokens

---

## Stats Integration

```typescript
const supportStats = statsRegistry.getStatsByCategory('hosting');

// Featured stats
- sites-hosted (250+)
- avg-uptime (99.9%)
- tickets-resolved (10,575+)
- avg-response-time (15min)
- customer-satisfaction (4.8/5)
- ai-resolution-rate (60%)
```

---

## Content Deliverables

1. Hero copy (75 words)
2. Value proposition (200 words)
3. Tier descriptions (3 × 200 words)
4. Infrastructure overview (300 words)
5. Maintenance tasks (12 × 50 words)
6. AI helpdesk explanation (200 words)
7. Support channels (6 × 75 words)
8. Hosting features (15 × 30 words)
9. Case studies (3 × 150 words)
10. FAQs (10 × 75 words)

**Total:** ~3,500 words

---

## Success Criteria

- [ ] Support network visualization builds confidence
- [ ] Service tiers clearly differentiated
- [ ] SLA commitments transparently displayed
- [ ] Proactive maintenance emphasized
- [ ] AI helpdesk demonstrated
- [ ] Hosting infrastructure impressive
- [ ] Plans drive subscription conversions
- [ ] Page conveys reliability and expertise

---

**Last Updated:** March 17, 2026  
**Estimated Effort:** 14-16 hours  
**Priority:** High (recurring revenue driver)
