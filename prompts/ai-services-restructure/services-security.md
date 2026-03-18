# Services – Security — Funky Redesign Prompt

**Category:** AI Services Restructure — Services Section  
**Version:** 1.0.0  
**Last Updated:** 2026-03-17  
**Status:** Active  
**Parent Orchestrator:** `/prompts/ai-services-restructure.md`

---

## Purpose

Create a Security service page with Funky neon aesthetic demonstrating LightSpeed's expertise in protecting WordPress sites. Show layered security defenses, AI-powered threat detection and proactive monitoring through visually striking WebGL visualizations.

---

## Summary

**Value** — Protects WordPress sites from threats with layered security. Security service encompasses vulnerability assessments, hardening, monitoring and rapid response, augmented by AI threat detection.

**Risks** — Outdated plugins, weak credentials and misconfigured servers expose sites to malware, data breaches and reputational damage. Generic security pages fail to inspire confidence or demonstrate expertise.

**Next step** — Launch security page with Funky WebGL shield visualizations, interactive attack simulators and real-time threat intelligence displays.

---

## Funky Design Philosophy

**Security visualized as protective force fields:**

- **Hero:** 3D shield with interlocking polygons and neon glow
- **Threat landscape** as dark space with incoming attack vectors
- **Defense layers** as transparent neon barriers
- **Attack simulator** showing threats being deflected
- **Threat dashboard** with live intelligence feeds and neon alerts

---

## WebGL Concepts

### 1. Layered Shield Hero

**Concept:** 3D shield composed of interlocking polygons representing security layers.

**Implementation:**
- Each polygon represents a security measure:
  - Firewall (neon-cyan)
  - Malware scanner (neon-pink)
  - Login protection (neon-lime)
  - SSL/TLS (neon-yellow)
  - Backup system (neon-purple)
  - AI threat detection (gradient)
- Polygons light up with neon glow
- Behind shield: code streams and threat icons approach but dissolve
- Hover polygon: tooltip with security measure details
- Particles flow across shield surface (active protection)

**Animation:**
- Shield assembles on page load
- Threats approach from edges
- Shield polygons pulse when deflecting
- Continuous subtle rotation

### 2. Attack Simulator

**Concept:** Interactive simulation of common attacks and defense responses.

**Implementation:**
- Dark canvas with website icon at center
- User triggers attack types:
  - SQL injection
  - Brute force login
  - XSS attack
  - Malware upload
  - DDoS
- Attack visualized as colored projectile
- Defense layers intercept and neutralize
- Neon explosion on impact
- Explanation panel shows how defense works
- Success counter: "Attacks blocked: 0"

**Educational value:**
- Shows layered defense strategy
- Explains each attack type
- Demonstrates AI anomaly detection
- Builds understanding and confidence

### 3. Threat Intelligence Dashboard

**Concept:** Rotating globe or network graph showing real-time threat feeds.

**Implementation:**
- 3D globe or network visualization
- Threat sources highlighted by region
- Threat types color-coded:
  - Malware: red
  - Brute force: orange
  - Vulnerabilities: yellow
- Zoom into regions for details
- Filter by threat type
- AI threat intelligence highlighted
- Connect to global security networks

**Data source:**
- Real (sanitized) threat intelligence feeds
- Or simulated for demonstration
- Update frequency shown

---

## Page Structure

1. **Hero** (Layered shield WebGL)
   - Badge: "Proactive protection"
   - Title: "Secure your WordPress site — before threats strike"
   - Subtitle: Layered defense, AI monitoring, rapid response
   - CTAs: Request security audit | View threat report

2. **Threat Landscape**
   - Common WordPress attack vectors
   - Statistics: attacks per day, data breach costs
   - Why security matters
   - Connection to reputation and SEO

3. **Security Services** (8 cards with neon icons)
   - Security audits & penetration testing
   - Vulnerability patching & updates
   - Firewall & intrusion detection
   - Malware scanning & removal
   - Two-factor authentication
   - Secure coding & code review
   - Backup & disaster recovery
   - AI anomaly detection

4. **Attack Simulator** (WebGL interactive)
   - Try different attack types
   - See defenses in action
   - Educational tooltips

5. **Security Process**
   - Audit → Harden → Monitor → Respond
   - Each step with deliverables
   - AI contributions highlighted
   - SLA for incident response

6. **Defense Layers**
   - Visualize security stack:
     - Application layer (WAF)
     - WordPress core (hardening)
     - Server layer (configuration)
     - Network layer (firewall)
     - AI layer (threat intelligence)
   - Each layer explained
   - Neon diagram with connections

7. **Threat Dashboard** (WebGL)
   - Live threat intelligence
   - Regional threat heat map
   - Filter by attack type
   - AI-powered insights

8. **Technology & Tools**
   - Wordfence / Sucuri
   - Cloudflare WAF
   - 2FA plugins
   - Security scanners
   - AI threat detection
   - Backup solutions

9. **Compliance & Standards**
   - OWASP Top 10
   - PCI DSS (for e-commerce)
   - GDPR considerations
   - WordPress security best practices
   - Badges and certifications

10. **Case Studies**
    - Attack prevention stories
    - Incident response success
    - Metrics: attacks blocked, zero downtime
    - Neon cards with stats

11. **Security Checklist**
    - Free downloadable checklist
    - Essential security measures
    - Priority levels
    - Implementation difficulty

12. **FAQs**
    - Security questions
    - Costs, maintenance, incident response
    - Neon accordion

13. **CTA** (Funky)
    - "Protect your site today"
    - Book security audit
    - Get free security report
    - Dark background, neon gradient

---

## Design System

**Typography:** Lexend (headings), Manrope (body), sentence case

**Colors:**
- Shield/defense: `var(--wp--preset--color--neon-cyan)`
- Threat/attack: `var(--wp--preset--color--neon-red)`
- Warning: `var(--wp--preset--color--neon-yellow)`
- Success: `var(--wp--preset--color--neon-lime)`
- AI: gradient (all colors)

**Spacing:** Standard spacing tokens

---

## Stats Integration

```typescript
const securityStats = [
  { id: 'attacks-blocked', value: 50000, suffix: '+', label: 'Attacks blocked' },
  { id: 'sites-secured', value: 250, suffix: '+', label: 'Sites secured' },
  { id: 'zero-breaches', value: 0, suffix: '', label: 'Data breaches' },
  { id: 'response-time', value: 15, suffix: 'min', label: 'Avg incident response' }
];
```

---

## Content Deliverables

1. Hero copy (75 words)
2. Threat landscape (200 words)
3. Service descriptions (8 × 100 words)
4. Process steps (4 × 150 words)
5. Defense layers (5 × 100 words)
6. Compliance section (200 words)
7. Case studies (3 × 150 words)
8. Security checklist (20 items with descriptions)
9. FAQs (10 × 75 words)

**Total:** ~3,200 words

---

## Success Criteria

- [ ] Security expertise clearly demonstrated
- [ ] Layered defense strategy explained
- [ ] AI monitoring emphasized
- [ ] Attack simulator is educational
- [ ] Threat dashboard builds confidence
- [ ] Compliance badges displayed
- [ ] Free audit CTA drives conversions
- [ ] Page feels secure and trustworthy

---

**Last Updated:** March 17, 2026  
**Estimated Effort:** 12-14 hours  
**Priority:** Medium (trust builder)
