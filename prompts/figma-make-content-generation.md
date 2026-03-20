# Figma Make Content Generation Prompt

## Overview

This prompt is designed to help generate comprehensive, detailed content for each Figma Make prototype in the LightSpeed WP Agency showcase. Use this prompt with AI tools to create rich, contextual content that enhances the showcase experience.

---

## Context

LightSpeed WP Agency has created **11 production-ready prototypes** using Figma Make over a 3+ month period. Each prototype demonstrates:
- AI-generated content and strategy
- Complete user journeys and flows
- Industry-specific design patterns
- Production-ready component architecture

The prototypes span 4 categories:
1. **Tour Operators** (4 sites)
2. **eCommerce** (4 sites)
3. **Digital Publishing** (1 site)
4. **Agency Sites** (2 sites)

---

## Prototype Analysis Framework

For each prototype, analyze and document the following:

### 1. Site Architecture Analysis

Examine each page and route to understand:
- **Page hierarchy**: Homepage, category pages, detail pages, utility pages
- **User journeys**: How users navigate from entry to conversion
- **Content types**: Products, tours, articles, services, etc.
- **Conversion funnels**: Quote requests, bookings, purchases, sign-ups

**Output format:**
```
## Site Architecture

### Total Pages: [number]
### Primary User Journeys:
1. [Journey name]: [Entry point] → [Steps] → [Conversion]
2. [Journey name]: [Entry point] → [Steps] → [Conversion]

### Page Categories:
- Marketing pages: [list]
- Product/service pages: [list]
- Utility pages: [list]
- Account/dashboard pages: [list]
```

---

### 2. Component Inventory

Catalog all reusable components used across the site:
- **Blocks**: Buttons, cards, forms, inputs
- **Patterns**: Hero sections, feature grids, testimonials, pricing tables
- **Parts**: Headers, footers, navigation, sidebars
- **Templates**: Page layouts and template structures

**Output format:**
```
## Component Inventory

### Total Components: [number]

### Blocks (Atomic):
- [Component name]: Used on [pages], Purpose: [description]

### Patterns (Composed):
- [Pattern name]: Used on [pages], Purpose: [description]

### Parts (Template):
- [Part name]: Variants: [list], Used on: [pages]
```

---

### 3. Design System Analysis

Document the visual design approach:
- **Color palette**: Primary, accent, semantic colors
- **Typography**: Font families, hierarchy, sizing
- **Spacing system**: Consistent spacing patterns
- **Visual style**: Modern, retro, minimalist, luxury, etc.
- **Unique design elements**: Distinctive visual treatments

**Output format:**
```
## Design System

### Visual Identity:
- **Style**: [description]
- **Primary colors**: [colors and their purpose]
- **Typography**: [fonts and usage]
- **Distinctive elements**: [unique visual treatments]

### Design Philosophy:
[2-3 sentences describing the design approach and reasoning]
```

---

### 4. Feature Highlights

Identify standout features and functionality:
- **Advanced features**: Search, filtering, comparison, wishlists
- **Interactive elements**: Maps, galleries, calculators, configurators
- **Integrations**: Payment, booking, membership, subscriptions
- **Unique capabilities**: Features that differentiate this prototype

**Output format:**
```
## Feature Highlights

### Core Features:
1. **[Feature name]**: [Description and benefit]
2. **[Feature name]**: [Description and benefit]

### Advanced Functionality:
- [Feature]: [How it works and value provided]

### Unique Capabilities:
- [Distinctive feature that sets this prototype apart]
```

---

### 5. Content Strategy

Analyze the content approach:
- **Content types**: Product descriptions, blog posts, guides, case studies
- **Tone and voice**: Professional, casual, luxury, eco-conscious, etc.
- **SEO considerations**: Content structure, headings, metadata
- **Content depth**: Comprehensive vs. concise approaches

**Output format:**
```
## Content Strategy

### Content Types:
- [Type]: [Purpose and approach]

### Tone & Voice:
[Description of writing style and brand personality]

### Content Depth:
[Analysis of how much content is provided and why]

### SEO Structure:
[Notes on content organization for search optimization]
```

---

### 6. UX & Conversion Optimization

Evaluate user experience and conversion elements:
- **Trust signals**: Reviews, testimonials, certifications, social proof
- **CTAs**: Placement, copy, visual treatment
- **Forms**: Quote requests, contact, booking, checkout
- **Navigation**: Menu structure, breadcrumbs, search

**Output format:**
```
## UX & Conversion

### Trust Building:
- [Element]: [How it builds credibility]

### CTA Strategy:
- Primary CTAs: [List with placement notes]
- Secondary CTAs: [List with placement notes]

### Form Optimization:
- [Form type]: [Steps and friction reduction strategies]

### Navigation Approach:
[Description of how users find content and move through the site]
```

---

### 7. Technical Implementation

Document technical considerations:
- **Page count**: Total pages built
- **Component count**: Total reusable components
- **Route structure**: URL patterns and hierarchy
- **Performance considerations**: Image optimization, lazy loading, etc.

**Output format:**
```
## Technical Implementation

### Build Statistics:
- Total pages: [number]
- Total components: [number]
- Total routes: [number]
- Build time: [estimate]

### Technical Highlights:
- [Notable technical implementation or pattern]

### Performance Optimizations:
- [Optimization strategy used]
```

---

### 8. AI Strategy Insights

Document how AI was used in the creation:
- **Content generation**: Types of content AI wrote
- **Strategic planning**: How AI informed architecture decisions
- **Design decisions**: AI's role in visual and UX choices
- **Efficiency gains**: Time/effort saved through AI

**Output format:**
```
## AI Strategy

### AI-Generated Content:
[Description of content types created by AI]

### Strategic Planning:
[How AI informed site architecture and user flows]

### Design Assistance:
[AI's role in visual design decisions]

### Efficiency Impact:
[Time savings and quality improvements from AI assistance]
```

---

### 9. Industry Context

Position the prototype within its industry:
- **Market segment**: B2B, B2C, D2C, etc.
- **Target audience**: Demographics and psychographics
- **Competitive positioning**: How this stands out
- **Business model**: Revenue streams and monetization

**Output format:**
```
## Industry Context

### Market Segment:
[B2B/B2C/D2C and specific niche]

### Target Audience:
- Demographics: [age, location, income, etc.]
- Psychographics: [values, interests, behaviors]

### Competitive Differentiation:
[How this prototype stands out from competitors]

### Business Model:
[Revenue streams and monetization strategy]
```

---

### 10. Use Case Scenarios

Describe specific scenarios where this prototype excels:
- **Primary use case**: Main purpose and audience
- **Secondary use cases**: Alternative applications
- **Scalability**: How it could grow or adapt
- **Customization potential**: What could be changed for different brands

**Output format:**
```
## Use Case Scenarios

### Primary Use Case:
[Main scenario where this prototype is ideal]

### Secondary Use Cases:
1. [Alternative application scenario]
2. [Alternative application scenario]

### Scalability:
[How this could grow from MVP to enterprise]

### Customization Potential:
[What aspects are easily adapted for different brands]
```

---

## Complete Prompt Template

Use this template to generate comprehensive content for each prototype:

```
Analyze the [PROTOTYPE NAME] Figma Make prototype in detail.

**Prototype Details:**
- Name: [Name]
- Category: [Category]
- Live URL: [Figma Published Site URL]
- Figma File: [Figma Make URL]

**Description:**
[Paste prototype description from data file]

**Analysis Required:**

Please provide a comprehensive analysis covering:

1. **Site Architecture Analysis**: Map all pages, user journeys, and conversion funnels
2. **Component Inventory**: Catalog all blocks, patterns, parts, and templates
3. **Design System Analysis**: Document visual identity, colors, typography, and unique elements
4. **Feature Highlights**: Identify core, advanced, and unique features
5. **Content Strategy**: Analyze content types, tone, depth, and SEO structure
6. **UX & Conversion**: Evaluate trust signals, CTAs, forms, and navigation
7. **Technical Implementation**: Document build statistics and technical highlights
8. **AI Strategy Insights**: Explain how AI contributed to content, strategy, and design
9. **Industry Context**: Position within market segment and competitive landscape
10. **Use Case Scenarios**: Describe primary and secondary use cases

**Output Format:**
Provide detailed markdown formatted output following the frameworks above.

**Additional Context:**
This prototype was built as part of a 3+ month effort to demonstrate Figma Make's capabilities. It should be production-ready and showcase best practices in [category] website design and development.
```

---

## Batch Processing Approach

To analyze all 11 prototypes efficiently:

### Phase 1: Tour Operator Sites (4 prototypes)
1. Tour Operator Plugin
2. Impact Travel
3. Organic Tours
4. Tour Operator Demo

**Focus areas:**
- Booking flow patterns
- Tour/destination content structure
- Travel-specific features (itineraries, availability, reviews)
- Trust-building for high-value purchases

---

### Phase 2: eCommerce Sites (4 prototypes)
1. Retro Shop
2. Constructivism Shop
3. Handcrafted Wines
4. Woo Shop

**Focus areas:**
- Product catalog organization
- Checkout flow optimization
- Advanced eCommerce features (wishlist, comparison, subscriptions)
- Brand differentiation strategies

---

### Phase 3: Publishing & Agency Sites (3 prototypes)
1. Bento News (Publishing)
2. LSX Design (Agency)
3. Lightspeed WP Agency (Agency)

**Focus areas:**
- Content management and organization
- Membership/subscription models
- Portfolio and case study presentation
- Technical credibility demonstration

---

## Output Organization

For each prototype, create:

### 1. Enhanced Data File
Update `/src/app/data/figma-prototypes.ts` with enriched content:
- Expanded descriptions
- More detailed features array
- Additional stats
- Richer key highlights

### 2. Individual Prototype Pages (Optional)
Create dedicated detail pages at:
- `/showcase/[prototype-slug]`
- Full case study format
- Screenshots and visual examples
- Detailed feature walkthroughs

### 3. Category Landing Pages (Optional)
Create category overview pages:
- `/showcase/tour-operators`
- `/showcase/ecommerce`
- `/showcase/publishing`
- `/showcase/agency`

---

## Visual Content Generation

For each prototype, generate ideas for:

### Feature Images
- **Immersive text effects**: Kinetic typography, gradient text, glow effects
- **Color schemes**: Match prototype's brand colors
- **WebGL graphics**: Assign appropriate WebGL component (see registry)
- **Icons**: Phosphor duotone icons representing key features

### Screenshot Recommendations
- Hero section (first impression)
- Key feature in action (booking flow, product page, etc.)
- Mobile responsive view
- Unique design element close-up

### Card Visual Treatment
- Gradient overlay direction and colors
- Icon selection for category badge
- Stats visualization approach
- Tag styling and color coding

---

## WebGL Graphic Assignments

Match each prototype with an appropriate WebGL component:

### Available Graphics (from registry):
1. NeonGrid - Technical/agency sites
2. RippleWave - Travel/flow-based sites
3. ParticleField - Nature/organic themes
4. FloatingShapes - Modern/abstract
5. GradientOrbs - Premium/luxury
6. NeuralNetwork - AI/tech focus
7. GeometricGrid - Structure/publishing
8. ColorWaves - Vibrant/retro
9. AngularShapes - Bold/constructivist
10. LiquidGradient - Fluid/wine/premium
11. HolographicFoil - Modern/tech/commerce

**Assignment criteria:**
- Match prototype's visual style
- Complement brand personality
- Appropriate complexity level
- Performance considerations

---

## Stats Generation Guidelines

For each prototype, calculate/estimate:

### Page Statistics
- Marketing pages (homepage, about, etc.)
- Product/service pages
- Utility pages (contact, FAQ, etc.)
- Account/dashboard pages
- **Total**: Sum all pages

### Component Statistics
- Atomic blocks
- Composed patterns
- Template parts
- **Total**: Unique reusable components

### Route Statistics
- Public routes
- Protected routes (account pages)
- Dynamic routes (product pages, etc.)
- **Total**: All route definitions

### Performance Metrics
- AI generation percentage (100% for all)
- Estimated build time
- Reusability score
- Complexity level

---

## Content Enhancement Examples

### Before (Basic):
```typescript
description: 'Tour operator website with booking functionality'
```

### After (Enhanced):
```typescript
description: 'This comprehensive tour operator platform serves as both a travel marketing website and a functional booking solution. Visitors can explore curated tours across 12+ destinations, view detailed itineraries with day-by-day breakdowns, read authentic traveler reviews, and complete bookings through an integrated payment system. The platform includes customer account management, wishlist functionality, and a quote request system for custom trip planning.',

challenge: 'Tour operators struggle to balance inspirational marketing content with practical booking functionality, often requiring multiple systems that create friction in the customer journey.',

solution: 'Built a unified platform where discovery, research, and booking happen seamlessly in one experience. AI-generated content creates compelling tour descriptions while structured data enables advanced filtering and search.',

outcome: 'A production-ready platform reducing booking abandonment through streamlined flows while increasing average order value via related tour suggestions and upsells.',
```

---

## Next Steps

1. **Choose a prototype** to start with (recommend starting with #1: Tour Operator Plugin)
2. **Visit the live site** and explore all pages systematically
3. **Use the prompt template** above with your AI tool
4. **Document findings** using the output formats provided
5. **Generate visual concepts** for showcase presentation
6. **Repeat** for all 11 prototypes

---

## Timeline Estimate

- **Per prototype analysis**: 2-3 hours
- **Total for 11 prototypes**: 22-33 hours
- **Visual content creation**: +10-15 hours
- **Data integration**: +5-8 hours
- **Total project**: 40-60 hours

---

## Success Metrics

The completed showcase should demonstrate:
- ✅ Comprehensive understanding of each prototype
- ✅ Clear value proposition for each use case
- ✅ Technical depth showing implementation quality
- ✅ Strategic insights into AI's role
- ✅ Visual appeal through immersive card designs
- ✅ Reusability of showcase components across site

---

**Document Version**: 1.0.0  
**Created**: March 18, 2026  
**Purpose**: Guide AI-assisted content generation for Figma Make prototype showcase  
**Maintainer**: LightSpeed WP Agency
