# Phase 3 Template Migration Plan

**Date:** March 3, 2026  
**Status:** 📋 PLANNING  
**Scope:** 32 remaining templates (from 130 total)  
**Target:** 10-15 high-value templates  
**Expected Impact:** ~800-1,200 lines saved

---

## Executive Summary

After successfully completing Phase 1 (5 templates, ~143 lines) and Phase 2 (5 templates, ~543 lines), we're ready to tackle **Phase 3** with 32 remaining templates identified for migration. This plan identifies **high-value candidates** based on code duplication patterns and proposes **10-15 priority templates** for migration.

**Current State:**
- ✅ **Phase 1 Complete:** 5 templates, ~143 lines saved
- ✅ **Phase 2 Complete:** 5 templates, ~543 lines saved
- 📊 **Total Progress:** 10/42 templates migrated (23.8%)
- 🎯 **Phase 3 Goal:** Migrate 10-15 more templates → 50%+ completion

---

## Audit Findings

### Pattern Detection Summary

**Search Results:**
- **50 inline feature/benefit grids** across 34 templates → FeatureList candidates
- **20 inline stats/metrics grids** across 18 templates → StatsGrid candidates
- **5 inline team member grids** across 4 templates → TeamMemberGrid candidates (new component)

**Overlap Analysis:**
- Some templates have BOTH features AND stats grids (2× migration value)
- Service templates dominate (most already migrated in Phase 2)
- Solution/About/System templates show high migration potential

---

## Phase 3 Priority Templates

### Tier 1: High-Value Targets (8 templates, ~500-600 lines)

#### **Service Templates (5 templates, ~400 lines)**

##### 1. **SEOServiceTemplate** (~80 lines)
**Components:** FeatureList (benefits grid)

**Inline Pattern:**
```tsx
// Lines 149-165: Inline benefits grid (~80 lines)
{benefits.map((benefit, index) => {
  const Icon = benefit.icon;
  return (
    <ScrollReveal key={index} animation="fade-up" delay={index * 100}>
      <div className="seo-service__benefit-card">
        <div className="seo-service__benefit-icon">
          <Icon size={28} />
        </div>
        <h3>{benefit.title}</h3>
        <p>{benefit.description}</p>
      </div>
    </ScrollReveal>
  );
})}
```

**Migration Target:**
```tsx
<FeatureList
  items={benefits.map((benefit) => ({
    icon: benefit.icon as any,
    title: benefit.title,
    description: benefit.description
  }))}
  columns={3}
  variant="glow"
  iconSize="lg"
/>
```

**Expected Savings:** ~80 lines

---

##### 2. **AnalyticsServiceTemplate** (~80 lines)
**Components:** FeatureList (benefits grid)

**Inline Pattern:** Lines 119-135 (benefits.map grid, ~80 lines)

**Expected Savings:** ~80 lines

---

##### 3. **AIEngineServiceTemplate** (~80 lines)
**Components:** FeatureList (benefits grid)

**Inline Pattern:** Lines 118-134 (benefits.map grid, ~80 lines)

**Expected Savings:** ~80 lines

---

##### 4. **AnswerEngineServiceTemplate** (~80 lines)
**Components:** FeatureList (benefits grid)

**Inline Pattern:** Lines 138-154 (benefits.map grid, ~80 lines)

**Expected Savings:** ~80 lines

---

##### 5. **HostingTemplate** (~80 lines)
**Components:** FeatureList (benefits grid) + StatsGrid (hosting stats)

**Inline Patterns:**
- Lines 125-140: Inline stats grid (~50 lines)
- Lines 300-320: Inline benefits grid (~30 lines)

**Expected Savings:** ~80 lines

---

#### **Solution Templates (3 templates, ~100-200 lines)**

##### 6. **MailchimpSolutionTemplate** (~60 lines)
**Components:** FeatureList (already partially migrated)

**Inline Pattern:** Lines 126-145 (benefits.map stats grid, ~60 lines)

**Expected Savings:** ~60 lines

---

##### 7. **WetuImporterTemplate** (~70 lines)
**Components:** FeatureList (benefits grid)

**Inline Pattern:** Lines 147-175 (benefits.map grid, ~70 lines)

**Expected Savings:** ~70 lines

---

##### 8. **LSXSharingTemplate** (~60 lines)
**Components:** FeatureList (benefits grid)

**Inline Pattern:** Lines 142-170 (benefits.map grid, ~60 lines)

**Expected Savings:** ~60 lines

---

### Tier 2: Medium-Value Targets (7 templates, ~300-400 lines)

#### **About Templates (2 templates, ~120 lines)**

##### 9. **TeamTemplate** (~80 lines)
**Components:** TeamMemberGrid (NEW COMPONENT)

**Inline Pattern:** Lines 159-195 (team members grid with custom cards, ~80 lines)

**New Component Needed:**
```tsx
interface TeamMemberGridProps {
  members: Array<{
    name: string;
    role: string;
    bio: string;
    image: string;
    social?: {
      linkedin?: string;
      twitter?: string;
      github?: string;
    };
  }>;
  columns?: 2 | 3 | 4;
  variant?: 'default' | 'compact' | 'detailed';
}

export function TeamMemberGrid({ members, columns = 3, variant = 'default' }: TeamMemberGridProps) {
  // Component implementation
}
```

**Expected Savings:** ~80 lines

**Impact:** Creates reusable team member grid for AboutTemplate, CareersTemplate, etc.

---

##### 10. **AboutTemplate** (~40 lines)
**Components:** StatsGrid (company stats)

**Inline Pattern:** Stats section in hero area (~40 lines)

**Expected Savings:** ~40 lines

---

#### **Landing Page Templates (2 templates, ~80 lines)**

##### 11. **AIServicesLandingTemplate** (~40 lines)
**Components:** StatsGrid (AI stats grid)

**Inline Pattern:** Lines 271-290 (stats.map grid, ~40 lines)

**Expected Savings:** ~40 lines

---

##### 12. **ContentServicesLandingTemplate** (~40 lines)
**Components:** FeatureList (content services grid)

**Inline Pattern:** Lines 233-260 (services.map grid with features, ~40 lines)

**Expected Savings:** ~40 lines

---

#### **System Templates (3 templates, ~100 lines)**

##### 13. **DesignTokensSystemTemplate** (~30 lines)
**Components:** CheckList (benefits list)

**Inline Pattern:** Lines 101-115 (benefits.map list, ~30 lines)

**Expected Savings:** ~30 lines

---

##### 14. **PatternGovernanceSystemTemplate** (~30 lines)
**Components:** CheckList (benefits list)

**Inline Pattern:** Lines 70-84 (benefits.map list, ~30 lines)

**Expected Savings:** ~30 lines

---

##### 15. **AISearchReadinessSystemTemplate** (~40 lines)
**Components:** CheckList (benefits list)

**Inline Pattern:** Lines 71-90 (benefits.map list, ~40 lines)

**Expected Savings:** ~40 lines

---

### Tier 3: Lower-Value But Easy Wins (5 templates, ~100-150 lines)

##### 16. **DiscoveryServiceTemplate** (~50 lines)
**Components:** FeatureList (benefits nodes)

**Inline Pattern:** Lines 342-370 (sub-services nodes grid, ~50 lines)

**Expected Savings:** ~50 lines

---

##### 17. **ContentServiceTemplate** (~50 lines)
**Components:** FeatureList (services grid)

**Inline Pattern:** Lines 176-200 (services.map grid, ~50 lines)

**Expected Savings:** ~50 lines

---

##### 18. **DevToolsTemplate** (~30 lines)
**Components:** StatsGrid (stats cards)

**Inline Pattern:** Lines 550-565 (stats.map grid, ~30 lines)

**Expected Savings:** ~30 lines

---

##### 19. **InsightsLandingTemplate** (~20 lines)
**Components:** StatsGrid (insights stats)

**Inline Pattern:** Lines 293-305 (stats.map grid, ~20 lines)

**Expected Savings:** ~20 lines

---

##### 20. **TourOperatorDesignTemplate** (~30 lines)
**Components:** StatsGrid (design results)

**Inline Pattern:** Lines 206-220 (results.map stats grid, ~30 lines)

**Expected Savings:** ~30 lines

---

## Phase 3 Summary

### Migration Targets

| Tier | Templates | Lines Saved | Priority |
|------|-----------|-------------|----------|
| **Tier 1 (High-Value)** | 8 | ~500-600 | 🔴 Immediate |
| **Tier 2 (Medium-Value)** | 7 | ~300-400 | 🟡 Next |
| **Tier 3 (Easy Wins)** | 5 | ~100-150 | 🟢 Optional |
| **TOTAL** | **20** | **~900-1,150** | — |

**Recommended Phase 3 Scope:** Tier 1 (8 templates) + select Tier 2 (3-5 templates) = **10-13 templates**

**Expected Total Savings:** ~700-900 lines

---

## New Component Required: TeamMemberGrid

### Specification

**Purpose:** Reusable team member grid component for About, Careers, and Team pages

**Props:**
```tsx
interface TeamMemberGridProps {
  members: Array<{
    name: string;
    role: string;
    bio?: string;
    image: string;
    email?: string;
    social?: {
      linkedin?: string;
      twitter?: string;
      github?: string;
    };
  }>;
  columns?: 2 | 3 | 4;
  variant?: 'default' | 'compact' | 'detailed';
  showSocial?: boolean;
  showBio?: boolean;
}
```

**Variants:**
- `default` — Card with image, name, role, bio
- `compact` — Smaller card, no bio, just image/name/role
- `detailed` — Full card with bio, email, social links

**Usage:**
```tsx
<TeamMemberGrid
  members={teamPageMembers}
  columns={3}
  variant="default"
  showSocial={true}
  showBio={true}
/>
```

**Impact:** Eliminates ~80-150 lines across 3-4 templates (Team, About, Careers, Author Archive)

---

## Pattern Component Usage Forecast

### After Phase 3 (Projected)

| Component | Current | After Phase 3 | Growth |
|-----------|---------|---------------|--------|
| **FeatureList** | 4 | 13-15 | +225% 🚀 |
| **StatsGrid** | 2 | 7-9 | +350% 🚀 |
| **ProcessTimeline** | 3 | 3-4 | +33% |
| **PostCard** | 4 | 4 | — |
| **CheckList** | 1 | 3-4 | +300% |
| **TestimonialCard** | 1 | 1-2 | +100% |
| **TeamMemberGrid** (NEW) | 0 | 3-4 | NEW ✨ |

**FeatureList will dominate** with 13-15 templates using it (45-50% adoption!)

---

## Implementation Strategy

### Phase 3 Sub-Phases

#### **Phase 3.1: Service Templates (5 templates, ~400 lines)**
**Duration:** 1-2 hours  
**Templates:** SEO, Analytics, AIEngine, AnswerEngine, Hosting

**Tasks:**
1. Migrate SEOServiceTemplate (FeatureList)
2. Migrate AnalyticsServiceTemplate (FeatureList)
3. Migrate AIEngineServiceTemplate (FeatureList)
4. Migrate AnswerEngineServiceTemplate (FeatureList)
5. Migrate HostingTemplate (FeatureList + StatsGrid)

---

#### **Phase 3.2: Solution Templates (3 templates, ~190 lines)**
**Duration:** 1 hour  
**Templates:** Mailchimp, WetuImporter, LSXSharing

**Tasks:**
1. Migrate MailchimpSolutionTemplate (FeatureList)
2. Migrate WetuImporterTemplate (FeatureList)
3. Migrate LSXSharingTemplate (FeatureList)

---

#### **Phase 3.3: NEW TeamMemberGrid Component + Templates (2-3 templates, ~120 lines)**
**Duration:** 1.5 hours  
**Templates:** Team, About, (optional: Careers)

**Tasks:**
1. **Create TeamMemberGrid component** (/src/app/components/patterns/TeamMemberGrid.tsx)
2. Create TeamMemberGrid CSS (/src/styles/patterns/team-member-grid.css)
3. Migrate TeamTemplate (TeamMemberGrid)
4. Migrate AboutTemplate (StatsGrid)
5. OPTIONAL: Migrate CareersTemplate if time permits

---

#### **Phase 3.4: Landing + System Templates (5 templates, ~180 lines)**
**Duration:** 1 hour  
**Templates:** AI Services Landing, Content Services Landing, 3 System templates

**Tasks:**
1. Migrate AIServicesLandingTemplate (StatsGrid)
2. Migrate ContentServicesLandingTemplate (FeatureList)
3. Migrate DesignTokensSystemTemplate (CheckList)
4. Migrate PatternGovernanceSystemTemplate (CheckList)
5. Migrate AISearchReadinessSystemTemplate (CheckList)

---

### Total Phase 3 Timeline

| Sub-Phase | Templates | Duration | Lines Saved |
|-----------|-----------|----------|-------------|
| 3.1 Service | 5 | 1-2h | ~400 |
| 3.2 Solution | 3 | 1h | ~190 |
| 3.3 Team + Component | 2-3 | 1.5h | ~120 |
| 3.4 Landing + System | 5 | 1h | ~180 |
| **TOTAL** | **15-16** | **4.5-5.5h** | **~890** |

**Expected Completion:** 1 day (with breaks)

---

## Success Metrics

### Phase 3 Goals

- ✅ Migrate **15-16 templates** (realistic target)
- ✅ Save **~890 lines** of duplicated code
- ✅ Create **1 new pattern component** (TeamMemberGrid)
- ✅ Achieve **60%+ migration progress** (25/42 templates)
- ✅ Zero build errors, zero visual regressions
- ✅ 100% CSS variable compliance maintained

### Quality Checkpoints

**After Each Sub-Phase:**
1. Build verification (zero errors)
2. Visual regression testing (all routes render correctly)
3. Design system compliance check (CSS variables only)
4. Documentation update (JSDoc, task list, progress report)

---

## Risk Assessment

### Low Risk ✅
- **FeatureList migrations** — Pattern proven across 4 templates already
- **StatsGrid migrations** — Pattern proven across 2 templates already
- **CheckList migrations** — Pattern proven across 1 template already

### Medium Risk ⚠️
- **TeamMemberGrid creation** — New component, needs design system alignment
- **Multi-component templates** (e.g., Hosting with FeatureList + StatsGrid)

### Mitigation Strategies
1. **Create TeamMemberGrid component FIRST** before migrating templates
2. **Test TeamMemberGrid standalone** with sample data
3. **Migrate one template at a time** with immediate build verification
4. **Roll back if issues detected** (git commit after each successful migration)

---

## Post-Phase 3 Vision

### Expected State After Phase 3

**Templates:**
- **Migrated:** 25-26/42 (60-62%)
- **Remaining:** 16-17 templates

**Pattern Components:**
- **Total:** 7 components (6 existing + 1 new)
- **Most Used:** FeatureList (45-50% adoption!)
- **Newest:** TeamMemberGrid

**Code Savings:**
- **Total:** ~1,576 lines saved (~686 + ~890)
- **Average:** ~63 lines per template

**Multiplier Effect:**
- Update FeatureList → affects **13-15 templates** ✨
- Update StatsGrid → affects **7-9 templates** ✨
- Update TeamMemberGrid → affects **3-4 templates** ✨

---

## Next Steps

### Immediate Actions (Today)

1. ✅ **Review Phase 3 plan** with stakeholder
2. ✅ **Create Phase 3.1 task list** (5 service templates)
3. ✅ **Begin Phase 3.1 migrations** starting with SEOServiceTemplate

### Medium-Term (This Week)

1. Create TeamMemberGrid component (Phase 3.3)
2. Complete all Phase 3 sub-phases (3.1, 3.2, 3.3, 3.4)
3. Create Phase 3 completion report
4. Plan Phase 4 (remaining 16-17 templates)

### Long-Term (This Month)

1. Achieve 80%+ migration (34/42 templates)
2. Extract 2-3 additional pattern components as needed
3. Document complete pattern component library
4. Optimize existing pattern components based on usage data

---

## Appendix: Complete Template Inventory

### Migrated (10 templates ✅)

**Phase 1:**
1. ✅ BlogIndexTemplate
2. ✅ CategoryArchiveTemplate
3. ✅ TagArchiveTemplate
4. ✅ SinglePostTemplate
5. ✅ AboutCultureTemplate

**Phase 2:**
6. ✅ DevelopmentServiceTemplate
7. ✅ SecurityServiceTemplate
8. ✅ PerformanceServiceTemplate
9. ✅ DesignServiceTemplate
10. ✅ ServicesLandingTemplate

---

### Phase 3 Candidates (20 templates 🎯)

**Tier 1 (High Priority - 8 templates):**
1. 🎯 SEOServiceTemplate
2. 🎯 AnalyticsServiceTemplate
3. 🎯 AIEngineServiceTemplate
4. 🎯 AnswerEngineServiceTemplate
5. 🎯 HostingTemplate
6. 🎯 MailchimpSolutionTemplate
7. 🎯 WetuImporterTemplate
8. 🎯 LSXSharingTemplate

**Tier 2 (Medium Priority - 7 templates):**
9. 🟡 TeamTemplate
10. 🟡 AboutTemplate
11. 🟡 AIServicesLandingTemplate
12. 🟡 ContentServicesLandingTemplate
13. 🟡 DesignTokensSystemTemplate
14. 🟡 PatternGovernanceSystemTemplate
15. 🟡 AISearchReadinessSystemTemplate

**Tier 3 (Easy Wins - 5 templates):**
16. 🟢 DiscoveryServiceTemplate
17. 🟢 ContentServiceTemplate
18. 🟢 DevToolsTemplate
19. 🟢 InsightsLandingTemplate
20. 🟢 TourOperatorDesignTemplate

---

### Remaining (12 templates - Phase 4+)

**Complex/Unique Templates:**
- FrontPageTemplate (already has CardGrid component)
- PortfolioSingleTemplate
- ServiceDetailTemplate
- PricingTemplate (complex pricing tables)
- FeatureShowcaseTemplate (animation demos)
- TestimonialsTemplate (already has StatsGrid)
- WhyChooseUsTemplate (already has StatsGrid)
- SystemsHubTemplate
- SnippetGeneratorTemplate (1,897 lines - needs special handling)
- JourneyStageTemplate
- LSXSearchTemplate (partially migrated)
- PublishersTemplate (already has FeatureList)

---

**Report Created:** March 3, 2026  
**Author:** AI Assistant  
**Project:** LightSpeed WP Agency — LSX Design  
**Status:** Phase 3 Planning Complete — Ready to Execute 🚀
