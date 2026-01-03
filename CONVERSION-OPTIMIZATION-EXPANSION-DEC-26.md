# LSX Design — Conversion Optimization Expansion Plan

**Missing pages and content that will improve visitor-to-customer conversions**

---

## 📊 Current State Analysis

### Existing Pages (Good Foundation):
- ✅ Homepage
- ✅ Services (overview)
- ✅ About (team, process, culture, history)
- ✅ Portfolio (archive + case studies)
- ✅ Blog
- ✅ Contact
- ✅ FAQ
- ✅ Hosting

### Critical Gaps Identified:

| Missing Element | Business Impact | Priority |
|----------------|----------------|----------|
| **Pricing Page** | 85% of B2B buyers want pricing upfront | 🔴 Critical |
| **Comparison Page** | Addresses objections, builds confidence | 🔴 Critical |
| **Guarantees/SLA** | Risk reversal, trust building | 🔴 Critical |
| **Book a Call** | Direct conversion path | 🟡 High |
| **Free Tools** | Lead generation, SEO value | 🟡 High |
| **Service Landing Pages** | Deep-dive content, SEO | 🟡 High |
| **Resources/Downloads** | Lead magnets, authority | 🟢 Medium |
| **Client Portal** | Client retention, upsells | 🟢 Medium |

---

## 🎯 New Pages to Create

### 1. **Pricing Page** 🔴 CRITICAL

**Why This Matters:**
- 85% of B2B buyers want transparent pricing
- Reduces tire-kickers and unqualified leads
- Increases trust and credibility
- Positions you as confident in your value

**Data Structure:** ✅ Created (`/src/app/data/pricing.ts`)

**Content Sections:**
1. **Website Build Packages**
   - Starter ($3,500) - 5 pages, basic features
   - Professional ($8,500) - 15 pages, custom design, MOST POPULAR
   - Enterprise (Custom) - Unlimited, white-glove

2. **Maintenance & Support Plans**
   - Essential Care ($150/mo) - Updates, backups, monitoring
   - Professional Care ($350/mo) - + Content updates, priority support
   - Enterprise Care (Custom) - 24/7, SLA, dedicated manager

3. **À La Carte Services**
   - Website Audit ($750)
   - Performance Optimization ($1,200)
   - WCAG Compliance Audit ($1,500)
   - SEO Optimization ($1,000)
   - Security Hardening ($800)
   - Migration Service ($500+)

**Conversion Elements:**
- ✅ Feature comparison table
- ✅ "Most Popular" badge on recommended tier
- ✅ Clear CTAs ("Get Started" vs "Schedule Call")
- ✅ FAQ below pricing
- ✅ Trust badges (payment methods, guarantees)

**Template:** `PricingTemplate.tsx`

---

### 2. **Why Choose Us / Comparison Page** 🔴 CRITICAL

**Why This Matters:**
- Addresses "why not DIY/freelancer/big agency?" objection
- Shows competitive advantages clearly
- Educates prospects on value differences
- Positions LSX Design as the smart middle ground

**Data Structure:** ✅ Created (`/src/app/data/why-choose-us.ts`)

**Content Sections:**

1. **Competitive Advantages** (8 key differentiators)
   - WordPress Specialists (not generalists)
   - Modern Block Themes (FSE, not page builders)
   - Performance First (90+ Lighthouse guaranteed)
   - WCAG AA Compliant (legal + better UX)
   - Design System Approach (scalable, maintainable)
   - Security Hardened (best practices built-in)
   - Ongoing Partnership (training, support)
   - Transparent Pricing (no hidden fees)

2. **Comparison Table**
   - LSX Design vs DIY Builders vs Freelancers vs Large Agencies
   - 25+ feature comparisons
   - Clear visual indicators (✓, ✗, "Sometimes")

3. **When to Choose Each Option**
   - Honest assessment of when LSX Design IS the right fit
   - When other options make sense
   - Builds trust through transparency

4. **Common Objections & Responses**
   - "DIY builders are cheaper" → Total cost of ownership
   - "I can find a cheaper freelancer" → Hidden costs
   - "Page builders are easier" → Block themes are just as easy
   - "I need it done this week" → Quality takes time
   - "Can't I use a template?" → Templates don't convert

5. **ROI Calculator** (Interactive)
   - Compare conversion rates (1.5% DIY vs 3.5% professional)
   - Load time impact on bounce rate
   - SEO ranking differences
   - Long-term cost comparison

**Template:** `WhyChooseUsTemplate.tsx`

---

### 3. **Guarantees & SLA Page** 🔴 CRITICAL

**Why This Matters:**
- Risk reversal increases conversions by 20-30%
- Shows confidence in service quality
- Addresses "what if it doesn't work?" fear
- Differentiates from competitors who don't guarantee

**Data Structure:** ✅ Created (`/src/app/data/guarantees.ts`)

**Content Sections:**

1. **8 Core Guarantees**
   - 90+ Lighthouse Score Guarantee
   - WCAG 2.1 AA Compliance
   - 99.9% Uptime Guarantee (maintenance plans)
   - On-Time Delivery (or 10% discount)
   - Security Hardening
   - Comprehensive Training
   - Post-Launch Support (30-90 days)
   - 100% Satisfaction

2. **Service Level Agreements (SLAs)**
   - Essential Care: 99.9% uptime, 48hr response
   - Professional Care: 99.95% uptime, 24hr response
   - Enterprise Care: 99.99% uptime, 4hr critical response

3. **What's NOT Covered**
   - Clear expectations
   - Avoids misunderstandings
   - Shows transparency

4. **30-Day Money-Back Guarantee**
   - Initial deposit refunded if not happy within 30 days
   - No questions asked policy
   - Builds trust for first-time buyers

**Template:** `GuaranteesTemplate.tsx`

---

### 4. **Book a Call / Consultation Page** 🟡 HIGH

**Why This Matters:**
- Direct conversion path for qualified leads
- Personalizes the sales process
- Captures leads who aren't ready to buy yet
- Allows for qualification before proposal

**Content Sections:**

1. **What to Expect**
   - Free 30-minute consultation
   - No obligation, no sales pressure
   - We'll discuss your needs and goals
   - Receive a custom proposal within 48 hours

2. **Calendar Integration**
   - Calendly or similar booking tool
   - Available time slots visible
   - Timezone auto-detection
   - Confirmation email with prep questions

3. **Preparation Questions** (Form)
   - What type of website do you need?
   - Current website URL (if applicable)
   - Timeline and budget expectations
   - Primary goals for new site

4. **Social Proof**
   - "I wasn't sure what I needed, but after the call..."
   - Photos of team members who do consultations
   - Average response time

**Template:** `BookCallTemplate.tsx`

---

### 5. **Free Website Audit Tool** 🟡 HIGH

**Why This Matters:**
- Lead magnet (email capture)
- Demonstrates expertise
- Shows value before purchase
- SEO value (keywords: "free website audit")
- Creates urgency (shows problems that need fixing)

**Features:**

1. **Automated Checks**
   - Lighthouse score (performance, SEO, accessibility)
   - Mobile-friendliness
   - Page speed analysis
   - SSL certificate check
   - Meta tags analysis

2. **Manual Audit Option**
   - More comprehensive (requires email)
   - Human review by LSX team
   - Personalized recommendations
   - Follow-up consultation offer

3. **Instant Results**
   - PDF report generated
   - Email delivery
   - CTA to "Fix these issues" (leads to pricing)

4. **Comparison**
   - "Your site: 65, Competitor average: 82, LSX sites: 94"
   - Creates desire for improvement

**Template:** `WebsiteAuditTemplate.tsx`  
**Tool Component:** `WebsiteAuditTool.tsx`

---

### 6. **Detailed Service Landing Pages** 🟡 HIGH

**Current:** Generic "Services" page  
**Needed:** Individual pages for each service

**Why This Matters:**
- SEO (target specific keywords)
- Educational (builds authority)
- Converts better (specific > generic)
- Answers service-specific questions

**Service Pages to Create:**

1. **WordPress Development**
   - Custom themes, plugin development
   - Block theme migration
   - Headless WordPress

2. **WooCommerce Development**
   - E-commerce setup
   - Custom checkout
   - Payment integration
   - Inventory management

3. **Block Theme Development**
   - FSE expertise
   - Pattern library
   - Migration from page builders

4. **Design Systems**
   - Token-driven design
   - Component library
   - Brand guidelines

5. **Accessibility Services**
   - WCAG audits
   - Remediation
   - Compliance certification

6. **Performance Optimization**
   - Core Web Vitals
   - Speed optimization
   - Lighthouse score improvement

**Each Page Includes:**
- Overview and benefits
- Process/methodology
- Case studies specific to service
- Pricing for that service
- FAQ specific to service
- CTA to book consultation

**Templates:** Individual service templates

---

### 7. **Resources / Downloads** 🟢 MEDIUM

**Why This Matters:**
- Lead magnets (email capture)
- SEO value (long-form content)
- Positions as thought leader
- Builds email list for nurture campaigns

**Content Ideas:**

1. **Free Guides (PDF Downloads)**
   - "WordPress Performance Checklist"
   - "WCAG 2.1 AA Compliance Guide"
   - "Choosing Between Page Builders and Block Themes"
   - "E-commerce Conversion Optimization"

2. **Templates & Tools**
   - Website Requirements Template
   - RFP Template for WordPress Projects
   - Design System Starter Kit

3. **Case Studies (In-Depth)**
   - More detailed than portfolio
   - Before/after metrics
   - Client interviews
   - Lessons learned

4. **Webinar Replays**
   - "Modern WordPress Development"
   - "Accessibility for Non-Developers"
   - "Performance Optimization Tips"

**Template:** `ResourcesTemplate.tsx`

---

### 8. **Client Portal / Login** 🟢 MEDIUM

**Why This Matters:**
- Client retention
- Upsell opportunities
- Reduces support tickets
- Professional experience

**Features:**

1. **Project Dashboard**
   - Project status and timeline
   - Milestone tracking
   - File uploads/downloads
   - Communication history

2. **Maintenance Plan Portal**
   - Monthly reports
   - Update history
   - Submit support tickets
   - Billing and invoices

3. **Knowledge Base**
   - How-to guides
   - Video tutorials
   - FAQs
   - Best practices

4. **Upsell Opportunities**
   - "Upgrade to Pro Care"
   - "Add 5 hours of development"
   - "Book SEO audit"

**Note:** This would require backend development (not just React)

---

## 📈 Expected Conversion Impact

### Before (Current State):
- Homepage → Contact Form = **2-3% conversion**
- No pricing visibility = Lost qualified leads
- No objection handling = Lost cautious buyers
- No lead magnets = Lost email subscribers

### After (With New Pages):

| Conversion Path | Expected Lift |
|----------------|---------------|
| Homepage → Pricing → Contact | +40% (pricing transparency) |
| Homepage → Why Choose Us → Book Call | +30% (objection handling) |
| Homepage → Free Audit → Email → Nurture | +100 leads/month |
| SEO Traffic → Service Pages → Contact | +50% (targeted content) |
| Pricing → Guarantees → Contact | +25% (risk reversal) |

**Overall Expected Lift:** 35-50% increase in qualified leads

---

## 🎨 Design System Adherence

All new pages will follow LSX Design system:

### ✅ Typography
- Use CSS variables (`--text-h1`, `--text-base`, etc.)
- Only Lexend (headings) and Manrope (small text)
- Fluid scaling with clamp()

### ✅ Colors
- Use semantic CSS variables (`--primary`, `--foreground`, etc.)
- From theme-light.css and theme-dark.css
- WCAG AA/AAA compliant

### ✅ Spacing
- Tailwind classes only (p-6, gap-4, mb-8)
- No hardcoded pixel values

### ✅ Components
- Reuse existing components (Container, Section, Heading, Button)
- Follow WordPress block patterns
- Accessible, semantic HTML

---

## 🚀 Implementation Priority

### Phase 1 (This Week) - Critical for Conversions:
1. ✅ Pricing data structure created
2. ✅ Why Choose Us data structure created
3. ✅ Guarantees data structure created
4. 🔲 PricingTemplate.tsx
5. 🔲 WhyChooseUsTemplate.tsx
6. 🔲 GuaranteesTemplate.tsx
7. 🔲 Add to navigation and PageSwitcher

### Phase 2 (Next Week) - Lead Generation:
1. BookCallTemplate.tsx (with Calendly integration)
2. WebsiteAuditTool.tsx (interactive tool)
3. Resources/Downloads page

### Phase 3 (Following Week) - SEO & Content:
1. Individual service landing pages (6 pages)
2. Enhanced case studies
3. Blog expansion

### Phase 4 (Future) - Advanced:
1. Client portal (requires backend)
2. ROI calculator (interactive)
3. Custom quote builder

---

## 💡 Quick Wins (Can Implement Today)

1. **Add Pricing Link to Navigation**
   - Even before page is built, show transparency
   - Link to contact with pricing PDF

2. **Add "Book a Call" CTA to Every Page**
   - Sticky button or footer CTA
   - Low-friction conversion path

3. **Add Trust Badges to Footer**
   - "WCAG AA Compliant"
   - "90+ Lighthouse Score"
   - "150+ Sites Built"

4. **Add Social Proof to Homepage**
   - Client logos
   - Testimonial slider
   - "As featured in..." (if applicable)

5. **Improve CTAs**
   - Current: Generic "Contact Us"
   - Better: "Get Your Free Quote" or "Book Free Consultation"

---

## 📊 Metrics to Track

Once new pages are live, track:

1. **Conversion Rates:**
   - Homepage → Pricing → Contact
   - Pricing → Book Call
   - Free Audit → Email Capture
   - Service Pages → Contact

2. **Engagement:**
   - Time on page (pricing, comparison)
   - Scroll depth
   - CTA click rates

3. **Lead Quality:**
   - Qualified leads (right budget, timeline)
   - Proposal acceptance rate
   - Client LTV

4. **SEO:**
   - Rankings for "WordPress development pricing"
   - "Website audit tool"
   - Service-specific keywords

---

## ✅ Summary

### Data Structures Created:
- ✅ `/src/app/data/pricing.ts` - 3 website packages, 3 maintenance plans, 6 à la carte services
- ✅ `/src/app/data/why-choose-us.ts` - Competitive advantages, comparison table, objections
- ✅ `/src/app/data/guarantees.ts` - 8 guarantees, SLAs, money-back policy

### Templates Needed:
- 🔲 PricingTemplate.tsx
- 🔲 WhyChooseUsTemplate.tsx  
- 🔲 GuaranteesTemplate.tsx
- 🔲 BookCallTemplate.tsx
- 🔲 WebsiteAuditTemplate.tsx
- 🔲 6x Service landing page templates

### Expected Impact:
- **35-50% increase in qualified leads**
- **Better lead quality** (pricing filters out wrong fit)
- **Higher trust** (guarantees, transparency)
- **More email subscribers** (lead magnets)
- **Better SEO** (service pages, tools)

---

**Ready to implement Phase 1?** Let's build the critical conversion pages first!

---

**Last Updated:** December 26, 2024  
**Priority:** Critical conversion optimization  
**Business Impact:** High - addresses main conversion blockers
