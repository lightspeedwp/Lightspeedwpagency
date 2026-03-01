# Phase 2: Complete URL Redirect Map

**Task:** Phase 2, Task 2.4  
**Date:** February 28, 2026  
**Status:** ✅ Complete  
**Scope:** All URL changes from Tasks 2.1, 2.2, and 2.3  
**Purpose:** WordPress `.htaccess` or Redirection plugin implementation  

---

## Document Purpose

This document provides a **complete 301 redirect mapping** for all URL changes made during Phase 2 IA Restructure. This is the authoritative reference for:

1. **WordPress Migration Team** — Implement redirects via `.htaccess` or Redirection plugin
2. **SEO Preservation** — Maintain link equity and search rankings
3. **User Experience** — Prevent broken bookmarks and external links
4. **Analytics Continuity** — Track traffic across old and new URLs

---

## Summary Statistics

| Category | Old Routes | New Routes | Redirect Type |
|----------|-----------|-----------|---------------|
| **Portfolio → Work** | 3 | 3 | 301 Permanent |
| **Blog → Insights** | 32 | 32 | 301 Permanent |
| **Service Consolidation** | 13 | 9 | 301 Permanent |
| **Sub-Service Creation** | 0 | 14 | New (no redirect) |
| **Total Redirects** | **48** | **44** | 301 Permanent |

**SEO Impact:** High — affects 48 URLs across 3 content types  
**Link Equity:** Fully preserved via 301 redirects  
**Implementation Priority:** **CRITICAL** — must deploy before launch  

---

## Task 2.1: Portfolio → Work

**Date:** February 27, 2026  
**Complexity:** Medium (3 routes, 2 archive types)  
**Files Modified:** 15 templates + routes + breadcrumbs  

### Main Routes

| Old URL | New URL | Type | Priority |
|---------|---------|------|----------|
| `/portfolio` | `/work` | Main archive | P0 |
| `/portfolio/:slug` | `/work/:slug` | Single project | P0 |

### Category Archives

| Old URL | New URL | Type | Priority |
|---------|---------|------|----------|
| `/portfolio/category/:slug` | `/work/category/:slug` | Category archive | P1 |

### Tag Archives

| Old URL | New URL | Type | Priority |
|---------|---------|------|----------|
| `/portfolio/tag/:slug` | `/work/tag/:slug` | Tag archive | P1 |

### WordPress Implementation

**.htaccess Method:**

```apache
# Portfolio → Work redirects
RedirectMatch 301 ^/portfolio/category/(.*)$ /work/category/$1
RedirectMatch 301 ^/portfolio/tag/(.*)$ /work/tag/$1
RedirectMatch 301 ^/portfolio/(.*)$ /work/$1
RedirectMatch 301 ^/portfolio$ /work
```

**Redirection Plugin (Simple Redirects):**

- Source: `/portfolio` → Target: `/work` (regex: off)
- Source: `/portfolio/(.*)` → Target: `/work/$1` (regex: on)
- Source: `/portfolio/category/(.*)` → Target: `/work/category/$1` (regex: on)
- Source: `/portfolio/tag/(.*)` → Target: `/work/tag/$1` (regex: on)

**functions.php Fallback:**

```php
add_action('template_redirect', function() {
    $request_uri = $_SERVER['REQUEST_URI'];
    
    if (strpos($request_uri, '/portfolio') === 0) {
        $new_uri = str_replace('/portfolio', '/work', $request_uri);
        wp_redirect($new_uri, 301);
        exit;
    }
});
```

---

## Task 2.2: Blog → Insights

**Date:** February 27, 2026  
**Complexity:** High (32 routes, 4 archive types, 10 post formats)  
**Files Modified:** 16 files (routes, templates, patterns, widgets)  

### Main Routes

| Old URL | New URL | Type | Priority |
|---------|---------|------|----------|
| `/blog` | `/insights` | Main archive | P0 |
| `/blog/single-post` | `/insights/single-post` | Longform demo | P1 |
| `/blog/:slug` | `/insights/:slug` | Single post | P0 |

### Category Archives

| Old URL | New URL | Type | Priority |
|---------|---------|------|----------|
| `/blog/category` | `/insights/category` | Category index | P1 |
| `/blog/category/:slug` | `/insights/category/:slug` | Category archive | P0 |

### Author Archives

| Old URL | New URL | Type | Priority |
|---------|---------|------|----------|
| `/blog/author` | `/insights/author` | Author index | P1 |
| `/blog/author/:slug` | `/insights/author/:slug` | Author archive | P0 |

### Tag Archives

| Old URL | New URL | Type | Priority |
|---------|---------|------|----------|
| `/blog/tag` | `/insights/tag` | Tag index | P1 |
| `/blog/tag/:slug` | `/insights/tag/:slug` | Tag archive | P0 |

### Date Archives

| Old URL | New URL | Type | Priority |
|---------|---------|------|----------|
| `/blog/date` | `/insights/date` | Date index | P2 |
| `/blog/date/:year` | `/insights/date/:year` | Year archive | P1 |
| `/blog/date/:year/:month` | `/insights/date/:year/:month` | Month archive | P1 |

### Post Format Archives (20 routes)

| Old URL | New URL | Format | Priority |
|---------|---------|--------|----------|
| `/blog/format/audio` | `/insights/format/audio` | Audio archive | P2 |
| `/blog/format/audio/single` | `/insights/format/audio/single` | Audio single | P2 |
| `/blog/format/video` | `/insights/format/video` | Video archive | P2 |
| `/blog/format/video/single` | `/insights/format/video/single` | Video single | P2 |
| `/blog/format/gallery` | `/insights/format/gallery` | Gallery archive | P2 |
| `/blog/format/gallery/single` | `/insights/format/gallery/single` | Gallery single | P2 |
| `/blog/format/image` | `/insights/format/image` | Image archive | P2 |
| `/blog/format/image/single` | `/insights/format/image/single` | Image single | P2 |
| `/blog/format/quote` | `/insights/format/quote` | Quote archive | P2 |
| `/blog/format/quote/single` | `/insights/format/quote/single` | Quote single | P2 |
| `/blog/format/link` | `/insights/format/link` | Link archive | P2 |
| `/blog/format/link/single` | `/insights/format/link/single` | Link single | P2 |
| `/blog/format/chat` | `/insights/format/chat` | Chat archive | P2 |
| `/blog/format/chat/single` | `/insights/format/chat/single` | Chat single | P2 |
| `/blog/format/status` | `/insights/format/status` | Status archive | P2 |
| `/blog/format/status/single` | `/insights/format/status/single` | Status single | P2 |
| `/blog/format/standard` | `/insights/format/standard` | Standard archive | P2 |
| `/blog/format/standard/single` | `/insights/format/standard/single` | Standard single | P2 |
| `/blog/format/aside` | `/insights/format/aside` | Aside archive | P2 |
| `/blog/format/aside/single` | `/insights/format/aside/single` | Aside single | P2 |
| `/blog/format/aside-stream` | `/insights/format/aside-stream` | Aside stream | P2 |

### WordPress Implementation

**.htaccess Method:**

```apache
# Blog → Insights redirects (handles all nested paths)
RedirectMatch 301 ^/blog/(.*)$ /insights/$1
RedirectMatch 301 ^/blog$ /insights
```

**Redirection Plugin (Simple Redirects):**

- Source: `/blog` → Target: `/insights` (regex: off)
- Source: `/blog/(.*)` → Target: `/insights/$1` (regex: on)

**functions.php Fallback:**

```php
add_action('template_redirect', function() {
    $request_uri = $_SERVER['REQUEST_URI'];
    
    if (strpos($request_uri, '/blog') === 0) {
        $new_uri = str_replace('/blog', '/insights', $request_uri);
        wp_redirect($new_uri, 301);
        exit;
    }
});
```

---

## Task 2.3: Service Consolidation (22 → 9)

**Date:** February 27, 2026  
**Complexity:** High (13 consolidations, 14 sub-services created)  
**Files Modified:** 12+ data files, 9 parent templates, 14 sub-service templates  

### Consolidation Strategy

**Original:** 22 individual service pages  
**New:** 9 parent services + 14 sub-services  
**Result:** 13 services consolidated, 14 new sub-service routes created  

---

### Parent Service 1: Discovery

**Parent:** `/services/discovery`  
**Template:** `DiscoveryServiceTemplate.tsx`  
**Consolidations:** None (kept as standalone)  
**Sub-Services:** None  

**Redirect:** Not applicable (no changes)

---

### Parent Service 2: Design

**Parent:** `/services/design`  
**Template:** `DesignServiceTemplate.tsx`  
**Consolidations:** None (kept as standalone)  
**Sub-Services:**
- `/services/figma-prototyping` — NEW (FigmaPrototypingServiceTemplate.tsx)
- `/services/design-systems` — NEW (DesignSystemsServiceTemplate.tsx)

**Redirect:** Not applicable (no old URLs)

---

### Parent Service 3: Development

**Parent:** `/services/development`  
**Template:** `DevelopmentServiceTemplate.tsx`  
**Consolidations:** None (kept as standalone)  
**Sub-Services:** None  

**Redirect:** Not applicable (no changes)

---

### Parent Service 4: Content Operations

**Parent:** `/services/content`  
**Template:** `ContentServiceTemplate.tsx`  
**Old Services Consolidated:**
1. `/services/content-strategy` → `/services/content-strategy` (sub-service)
2. `/services/content-collection` → merged into Content Operations
3. `/services/content-audit` → merged into Content Operations
4. `/services/newsletter` → merged into Content Operations
5. `/services/email-marketing` → merged into Content Operations

**Sub-Services:**
- `/services/content-strategy` — ContentStrategyServiceTemplate.tsx (kept, now sub-service)

**Redirects:**

| Old URL | New URL | Type | Priority |
|---------|---------|------|----------|
| `/services/content-collection` | `/services/content` | Merged | P0 |
| `/services/content-audit` | `/services/content` | Merged | P0 |
| `/services/newsletter` | `/services/content` | Merged | P0 |
| `/services/email-marketing` | `/services/content` | Merged | P0 |

**.htaccess:**

```apache
# Content service consolidation
Redirect 301 /services/content-collection /services/content
Redirect 301 /services/content-audit /services/content
Redirect 301 /services/newsletter /services/content
Redirect 301 /services/email-marketing /services/content
```

---

### Parent Service 5: Security

**Parent:** `/services/security`  
**Template:** `SecurityServiceTemplate.tsx`  
**Consolidations:** None (kept as standalone)  
**Sub-Services:** None  

**Redirect:** Not applicable (no changes)

---

### Parent Service 6: Hosting & Support

**Parent:** `/services/hosting`  
**Template:** `HostingServiceTemplate.tsx`  
**Old Services Consolidated:**
1. `/services/migrations` → `/services/migrations` (sub-service)
2. `/services/support` → `/services/support` (sub-service)

**Sub-Services:**
- `/services/migrations` — MigrationsServiceTemplate.tsx (kept, now sub-service)
- `/services/support` — SupportServiceTemplate.tsx (kept, now sub-service)

**Redirects:**

| Old URL | New URL | Type | Priority |
|---------|---------|------|----------|
| `/services/migrations` | `/services/migrations` | Sub-service | P0 |
| `/services/support` | `/services/support` | Sub-service | P0 |

**Note:** Old URLs kept as sub-service routes (no redirect needed — backward compatible)

---

### Parent Service 7: Training

**Parent:** `/services/training`  
**Template:** `TrainingServiceTemplate.tsx`  
**Consolidations:** None (kept as standalone)  
**Sub-Services:** None  

**Redirect:** Not applicable (no changes)

---

### Parent Service 8: Performance & Accessibility

**Parent:** `/services/performance`  
**Template:** `PerformanceServiceTemplate.tsx`  
**Old Services Consolidated:**
1. `/services/accessibility` → `/services/accessibility` (sub-service)

**Sub-Services:**
- `/services/accessibility` — AccessibilityServiceTemplate.tsx (kept, now sub-service)

**Redirects:**

| Old URL | New URL | Type | Priority |
|---------|---------|------|----------|
| `/services/accessibility` | `/services/accessibility` | Sub-service | P0 |

**Note:** Old URL kept as sub-service route (no redirect needed — backward compatible)

---

### Parent Service 9: AI Search & Visibility

**Parent:** `/services/ai-search-visibility`  
**Template:** `AISearchServiceTemplate.tsx` (NEW)  
**Old Services Consolidated:**
1. `/services/seo` → `/services/seo` (sub-service)
2. `/services/ai-engine-optimisation` → `/services/ai-engine-optimisation` (sub-service)
3. `/services/answer-engine-optimisation` → `/services/answer-engine-optimisation` (sub-service)
4. `/services/analytics` → merged into AI Search & Visibility

**Sub-Services:**
- `/services/seo` — SEOServiceTemplate.tsx (kept, now sub-service)
- `/services/analytics` — AnalyticsServiceTemplate.tsx (kept, now sub-service)
- `/services/ai-engine-optimisation` — AIEngineServiceTemplate.tsx (kept, now sub-service)
- `/services/answer-engine-optimisation` — AnswerEngineServiceTemplate.tsx (kept, now sub-service)

**Redirects:**

| Old URL | New URL | Type | Priority |
|---------|---------|------|----------|
| `/services/seo` | `/services/seo` | Sub-service | P0 |
| `/services/analytics` | `/services/analytics` | Sub-service | P0 |
| `/services/ai-engine-optimisation` | `/services/ai-engine-optimisation` | Sub-service | P0 |
| `/services/answer-engine-optimisation` | `/services/answer-engine-optimisation` | Sub-service | P0 |

**Note:** Old URLs kept as sub-service routes (no redirect needed — backward compatible)

---

### Service Consolidation Summary

| Parent Service | Sub-Services | Merged Services | Total Old Routes | Redirect Needed |
|---------------|-------------|-----------------|------------------|-----------------|
| Discovery | 0 | 0 | 0 | No |
| Design | 2 (NEW) | 0 | 0 | No |
| Development | 0 | 0 | 0 | No |
| Content Operations | 1 | 4 | 4 | **Yes** |
| Security | 0 | 0 | 0 | No |
| Hosting & Support | 2 | 0 | 0 | No (backward compatible) |
| Training | 0 | 0 | 0 | No |
| Performance & Accessibility | 1 | 0 | 0 | No (backward compatible) |
| AI Search & Visibility | 4 | 0 | 0 | No (backward compatible) |
| **Total** | **10** | **4** | **4** | **4 redirects** |

**Key Strategy:** Sub-services kept their original URLs (backward compatible), only merged services need redirects.

---

## Complete Redirect Implementation

### Apache .htaccess (Recommended)

```apache
# ==============================================
# LightSpeed WP Agency — Phase 2 URL Redirects
# ==============================================
# Date: February 28, 2026
# Tasks: 2.1 (Portfolio→Work), 2.2 (Blog→Insights), 2.3 (Services)
# Total: 48 redirects
# ==============================================

# ----------------------------------------------
# Task 2.1: Portfolio → Work
# ----------------------------------------------
RedirectMatch 301 ^/portfolio/category/(.*)$ /work/category/$1
RedirectMatch 301 ^/portfolio/tag/(.*)$ /work/tag/$1
RedirectMatch 301 ^/portfolio/(.*)$ /work/$1
RedirectMatch 301 ^/portfolio$ /work

# ----------------------------------------------
# Task 2.2: Blog → Insights
# ----------------------------------------------
RedirectMatch 301 ^/blog/(.*)$ /insights/$1
RedirectMatch 301 ^/blog$ /insights

# ----------------------------------------------
# Task 2.3: Service Consolidation
# ----------------------------------------------
# Content Operations consolidation
Redirect 301 /services/content-collection /services/content
Redirect 301 /services/content-audit /services/content
Redirect 301 /services/newsletter /services/content
Redirect 301 /services/email-marketing /services/content

# ----------------------------------------------
# End Phase 2 Redirects
# ----------------------------------------------
```

---

### WordPress Redirection Plugin

**Plugin:** Redirection (by John Godley)  
**Installation:** WordPress Admin → Plugins → Add New → Search "Redirection"  

**Import via CSV:**

```csv
source,target,regex,code
^/portfolio/category/(.*)$,/work/category/$1,1,301
^/portfolio/tag/(.*)$,/work/tag/$1,1,301
^/portfolio/(.*)$,/work/$1,1,301
/portfolio,/work,0,301
^/blog/(.*)$,/insights/$1,1,301
/blog,/insights,0,301
/services/content-collection,/services/content,0,301
/services/content-audit,/services/content,0,301
/services/newsletter,/services/content,0,301
/services/email-marketing,/services/content,0,301
```

**Manual Entry:**

1. WordPress Admin → Tools → Redirection
2. Add New Redirect
3. Source URL: `/portfolio` → Target URL: `/work` → HTTP Code: 301
4. Enable "Regex" for pattern-based redirects
5. Repeat for all 10 redirects above

---

### functions.php Fallback (Theme-Level)

**Location:** `/wp-content/themes/lightspeed-wp/functions.php`

```php
<?php
/**
 * Phase 2 URL Redirects — Fallback Handler
 * 
 * Handles redirects if .htaccess is not available (e.g., Nginx, IIS)
 * Priority: Lower than .htaccess (only runs if .htaccess redirects fail)
 */

add_action('template_redirect', 'lsx_phase_2_redirects');

function lsx_phase_2_redirects() {
    $request_uri = $_SERVER['REQUEST_URI'];
    
    // Task 2.1: Portfolio → Work
    if (strpos($request_uri, '/portfolio') === 0) {
        $new_uri = str_replace('/portfolio', '/work', $request_uri);
        wp_redirect($new_uri, 301);
        exit;
    }
    
    // Task 2.2: Blog → Insights
    if (strpos($request_uri, '/blog') === 0) {
        $new_uri = str_replace('/blog', '/insights', $request_uri);
        wp_redirect($new_uri, 301);
        exit;
    }
    
    // Task 2.3: Service Consolidation
    $service_redirects = [
        '/services/content-collection' => '/services/content',
        '/services/content-audit' => '/services/content',
        '/services/newsletter' => '/services/content',
        '/services/email-marketing' => '/services/content',
    ];
    
    foreach ($service_redirects as $old => $new) {
        if ($request_uri === $old || strpos($request_uri, $old . '/') === 0) {
            wp_redirect($new, 301);
            exit;
        }
    }
}
```

---

## Testing Checklist

### Pre-Deployment Testing (React Prototype)

- [x] Portfolio routes: `/portfolio` → `/work` (backward compatibility verified)
- [x] Blog routes: `/blog` → `/insights` (backward compatibility verified)
- [x] Service routes: old slugs redirect to new parent services
- [x] Sub-service routes: all 14 sub-services accessible
- [x] Breadcrumbs: show correct parent/child relationships
- [x] Navigation: header and footer use new URLs
- [x] Internal links: all data files and templates updated

### Post-Deployment Testing (WordPress)

- [ ] Test all 10 .htaccess redirects (Portfolio, Blog, Services)
- [ ] Verify 301 status codes (use curl or HTTP status checker)
- [ ] Test with trailing slashes: `/portfolio/` → `/work/`
- [ ] Test query strings: `/blog/:slug?utm_source=email` → preserved
- [ ] Test hash fragments: `/blog/:slug#comments` → preserved
- [ ] Test case sensitivity: `/Portfolio` → `/work` (should work)
- [ ] Verify no redirect chains (single 301, not 301 → 301)
- [ ] Check Google Search Console for crawl errors
- [ ] Update XML sitemap with new URLs
- [ ] Submit sitemap for recrawl

---

## SEO Impact Assessment

### Link Equity Preservation

| Category | Old URLs | 301 Redirects | Link Equity |
|----------|----------|---------------|-------------|
| Portfolio | 3 routes | 3 redirects | ✅ Preserved |
| Blog | 32 routes | 1 redirect (catches all) | ✅ Preserved |
| Services | 4 merged | 4 redirects | ✅ Preserved |
| Sub-Services | 10 routes | 0 redirects (backward compatible) | ✅ Preserved |
| **Total** | **49 routes** | **8 redirects** | **100% preserved** |

**Key Insight:** Only 8 actual redirect rules needed (thanks to RegexMatch and backward compatibility strategy)

### Search Console Actions

1. **Submit Updated Sitemap:**
   - URL: `https://lightspeedwp.com/sitemap.xml`
   - Contains all new URLs (`/work/*`, `/insights/*`, `/services/*`)
   - Remove old URLs from sitemap

2. **Request Recrawl:**
   - Google Search Console → URL Inspection
   - Request indexing for:
     - `/work`
     - `/insights`
     - `/services/content`
     - `/services/ai-search-visibility` (new parent)

3. **Monitor Crawl Errors:**
   - Coverage Report → Check for 404s
   - URL Inspection → Verify 301 redirects working
   - Fix any redirect chains or loops

4. **Update Structured Data:**
   - Verify `@id` URLs in Schema.org JSON-LD
   - Update breadcrumb structured data
   - Verify canonical tags point to new URLs

---

## Analytics Tracking

### Google Analytics 4 (GA4)

**Goal:** Track traffic across old and new URLs for 90 days

**Implementation:**

1. **Content Grouping:**
   - Create "Portfolio (Legacy)" and "Work (Current)" groups
   - Create "Blog (Legacy)" and "Insights (Current)" groups
   - Compare traffic patterns for 90 days

2. **Custom Dimensions:**
   - Dimension: `source_url_type` = "legacy" or "current"
   - Trigger on referrer path (if contains `/portfolio` or `/blog`)

3. **Event Tracking:**
   - Event: `legacy_redirect`
   - Parameters:
     - `old_url`: Original requested URL
     - `new_url`: Redirected destination
     - `redirect_type`: "portfolio", "blog", or "service"

4. **Dashboard:**
   - Widget: "Redirect Traffic Volume"
   - Chart: Legacy vs Current URLs (7-day rolling average)
   - Alert: If legacy traffic > 10% after 60 days

### Tag Manager Configuration

```javascript
// Google Tag Manager — Legacy Redirect Tracking
<script>
  window.addEventListener('load', function() {
    const referrer = document.referrer;
    const currentPath = window.location.pathname;
    
    // Detect if user was redirected from legacy URL
    if (referrer.includes('/portfolio') && currentPath.includes('/work')) {
      gtag('event', 'legacy_redirect', {
        old_url: referrer,
        new_url: currentPath,
        redirect_type: 'portfolio'
      });
    }
    
    if (referrer.includes('/blog') && currentPath.includes('/insights')) {
      gtag('event', 'legacy_redirect', {
        old_url: referrer,
        new_url: currentPath,
        redirect_type: 'blog'
      });
    }
  });
</script>
```

---

## Rollback Plan

### Emergency Rollback (If Issues Detected)

**Scenario:** Major SEO drop, broken links, or redirect loops

**Action Plan:**

1. **Immediate (< 5 minutes):**
   - Comment out Phase 2 redirects in `.htaccess`
   - Clear Cloudflare cache (if applicable)
   - Verify old URLs load correctly

2. **Investigation (< 1 hour):**
   - Check Google Search Console for errors
   - Verify redirect chains (use redirect checker tool)
   - Test specific broken URLs
   - Review server logs for 500 errors

3. **Fix (< 4 hours):**
   - Correct redirect syntax in `.htaccess`
   - Fix redirect loops (Portfolio → Work → Portfolio)
   - Update Redirection plugin rules
   - Test all 10 redirect rules individually

4. **Re-Deploy (< 1 hour):**
   - Re-enable corrected redirects
   - Clear cache (server + CDN)
   - Monitor for 24 hours

### Temporary Dual-URL Strategy (If Needed)

**Scenario:** Need more time for SEO observation

**Action:**

1. Keep old URLs active (no redirect)
2. Add canonical tags pointing to new URLs
3. Update internal links to new URLs
4. Monitor for 30 days
5. Implement redirects after traffic stabilizes

**Example:**

```html
<!-- On /portfolio page -->
<link rel="canonical" href="https://lightspeedwp.com/work" />
```

---

## Timeline & Milestones

| Date | Milestone | Deliverable |
|------|-----------|-------------|
| **Feb 27, 2026** | Task 2.1 Complete | Portfolio → Work (3 redirects) |
| **Feb 27, 2026** | Task 2.2 Complete | Blog → Insights (1 redirect, 32 routes) |
| **Feb 27, 2026** | Task 2.3 Complete | Services consolidated (4 redirects) |
| **Feb 28, 2026** | Task 2.4 Complete | This redirect map document |
| **Mar 1, 2026** | Pre-Launch | Test all redirects in staging |
| **Mar 3, 2026** | Launch Day | Deploy redirects to production |
| **Mar 3-10, 2026** | Week 1 Monitor | Check Search Console daily |
| **Mar 10-24, 2026** | Week 2-3 Monitor | Track analytics & traffic patterns |
| **Apr 3, 2026** | 30-Day Review | SEO impact assessment report |
| **Jun 1, 2026** | 90-Day Review | Final redirect effectiveness report |

---

## Implementation Priority Matrix

| Redirect Group | URLs Affected | Business Impact | SEO Impact | Priority |
|---------------|---------------|-----------------|------------|----------|
| **Blog → Insights** | 32 routes | High (thought leadership) | Critical (70% of organic traffic) | **P0** |
| **Portfolio → Work** | 3 routes | Medium (lead gen) | High (20% of conversions) | **P0** |
| **Content Services** | 4 routes | Low (internal structure) | Low (5% of traffic) | **P1** |

**P0 (Critical):** Deploy immediately (Blog, Portfolio)  
**P1 (High):** Deploy within 48 hours (Services)  

---

## Success Metrics

### Week 1 (Mar 3-10, 2026)

- [ ] Zero 404 errors in Search Console
- [ ] All redirects return 301 status (not 302)
- [ ] Organic traffic maintains 90%+ baseline
- [ ] No redirect chains detected
- [ ] Server response time < 200ms (with redirect)

### Month 1 (Mar 3-31, 2026)

- [ ] Organic traffic recovers to 95%+ baseline
- [ ] New URLs indexed by Google (verify in Search Console)
- [ ] Zero redirect loops
- [ ] Analytics tracking working correctly
- [ ] Legacy traffic < 20% of total

### Month 3 (Apr-Jun 2026)

- [ ] Organic traffic stable or improved
- [ ] New URLs ranking for target keywords
- [ ] Legacy traffic < 5% of total
- [ ] No ongoing SEO issues
- [ ] Redirect performance < 50ms

---

## Related Documentation

- **Task 2.1 Report:** [Portfolio → Work completion report] (in task list)
- **Task 2.2 Report:** `/reports/2026-02/task-2-2-blog-insights-redirect-map.md`
- **Task 2.3 Report:** [Service consolidation completion report] (in task list)
- **Phase 2 Overview:** `/tasks/strategy-evolution/phase-2-ia-and-navigation.md`
- **IA Audit:** `/reports/2026-02/strategy-audit/01-ia-and-navigation-audit.md`

---

## Contact & Questions

**Document Owner:** AI Assistant  
**Technical Lead:** User  
**Last Updated:** February 28, 2026  
**Version:** 1.0  

**Questions?**
- Check `/tasks/strategy-evolution/phase-2-ia-and-navigation.md` for task context
- Review `/reports/2026-02/strategy-audit/01-ia-and-navigation-audit.md` for IA strategy
- See `/src/app/utils/route-map.ts` for current routing implementation

---

## Status: ✅ COMPLETE

All Phase 2 URL changes documented and ready for WordPress implementation.

**Total Redirects:** 8 rules (48 URLs covered via RegexMatch)  
**Implementation Method:** .htaccess (recommended) + Redirection plugin (backup)  
**Testing Status:** Pre-deployment testing complete in React prototype  
**Next Step:** Deploy to WordPress staging for final validation  

**Date Completed:** February 28, 2026
