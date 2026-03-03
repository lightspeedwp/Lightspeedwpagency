# Service File Extraction Guide

**Purpose:** Quick reference for extracting remaining services from services-detailed.ts  
**Status:** Task 1.1 completion helper  
**Date:** March 2, 2026

---

## Service Export Line Numbers

Based on `grep -n "^export const" services-detailed.ts`:

| Service | Variable Name | Start Line | Est. Lines | File Name |
|---------|---------------|------------|------------|-----------|
| ✅ Security | `securityServiceDetailed` | 83 | ~80 | security-service.ts |
| ✅ SEO | `seoServiceDetailed` | 164 | ~100 | seo-service.ts |
| ✅ Performance | `performanceServiceDetailed` | 265 | ~110 | performance-service.ts |
| Content | `contentServiceDetailed` | 376 | ~100 | content-service.ts |
| Support | `supportServiceDetailed` | 477 | ~100 | support-service.ts |
| Newsletter | `newsletterServiceDetailed` | 582 | ~115 | newsletter-service.ts |
| Design | `designServiceDetailed` | 699 | ~120 | design-service.ts |
| ✅ Development | `developmentServiceDetailed` | 820 | ~110 | development-service.ts |
| Discovery | `discoveryServiceDetailed` | 931 | ~90 | discovery-service.ts |
| Accessibility | `accessibilityServiceDetailed` | 1022 | ~100 | accessibility-service.ts |
| AI Engine | `aiEngineOptimisationDetailed` | 1123 | ~100 | ai-engine-service.ts |
| Answer Engine | `answerEngineOptimisationDetailed` | 1224 | ~100 | answer-engine-service.ts |
| Training | `trainingServiceDetailed` | 1325 | ~100 | training-service.ts |
| Hosting | `hostingServiceDetailed` | 1426 | ~100 | hosting-service.ts |

---

## Quick Extraction Commands

### For Content Service (line 376)
```bash
# Read from services-detailed.ts
sed -n '376,476p' /src/app/data/services-detailed.ts
```

### For Support Service (line 477)
```bash
sed -n '477,582p' /src/app/data/services-detailed.ts
```

### For Newsletter Service (line 582)
```bash
sed -n '582,699p' /src/app/data/services-detailed.ts
```

### For Design Service (line 699)
```bash
sed -n '699,820p' /src/app/data/services-detailed.ts
```

### For Discovery Service (line 931)
```bash
sed -n '931,1022p' /src/app/data/services-detailed.ts
```

### For Accessibility Service (line 1022)
```bash
sed -n '1022,1123p' /src/app/data/services-detailed.ts
```

### For AI Engine Service (line 1123)
```bash
sed -n '1123,1224p' /src/app/data/services-detailed.ts
```

### For Answer Engine Service (line 1224)
```bash
sed -n '1224,1325p' /src/app/data/services-detailed.ts
```

### For Training Service (line 1325)
```bash
sed -n '1325,1426p' /src/app/data/services-detailed.ts
```

### For Hosting Service (line 1426)
```bash
sed -n '1426,1524p' /src/app/data/services-detailed.ts
```

---

## File Template

Each service file should follow this structure:

```typescript
/**
 * [ServiceName] Service - Detailed Content
 * 
 * Real content from: https://lightspeedwp.agency/services/[slug]/
 * 
 * [Brief description]
 */

import { DetailedService } from './types';

/**
 * [ServiceName] Service Detailed Data
 * 
 * Complete [service] service information for the [service] service page template.
 */
export const [variableName]: DetailedService = {
  // Paste extracted content here (id through cta + relatedServices)
};
```

---

## Import Updates Required

After creating all service files, update these templates:

### `/src/app/components/templates/DevelopmentServiceTemplate.tsx`
**Line 31:**
```typescript
// OLD
import { developmentServiceDetailed } from '../../data/services-detailed';

// NEW
import { developmentServiceDetailed } from '../../data/services';
```

### `/src/app/components/templates/DesignServiceTemplate.tsx`
**Line 30:**
```typescript
// OLD
import { designServiceDetailed } from '../../data/services-detailed';

// NEW
import { designServiceDetailed } from '../../data/services';
```

### `/src/app/components/templates/DiscoveryServiceTemplate.tsx`
**Line 38:**
```typescript
// OLD
import { discoveryServiceDetailed } from '../../data/services-detailed';

// NEW
import { discoveryServiceDetailed } from '../../data/services';
```

### `/src/app/components/templates/ContentServiceTemplate.tsx`
**Line 40:**
```typescript
// OLD
import { contentServiceDetailed } from '../../data/services-detailed';

// NEW
import { contentServiceDetailed } from '../../data/services';
```

### `/src/app/components/templates/SecurityServiceTemplate.tsx`
**Line 41:**
```typescript
// OLD
import { securityServiceDetailed } from '../../data/services-detailed';

// NEW
import { securityServiceDetailed } from '../../data/services';
```

### `/src/app/components/templates/HostingTemplate.tsx`
**Line 54:**
```typescript
// OLD
import { hostingServiceDetailed } from '../../data/services-detailed';

// NEW
import { hostingServiceDetailed } from '../../data/services';
```

### `/src/app/components/templates/TrainingTemplate.tsx`
**Line 33:**
```typescript
// OLD
import { trainingServiceDetailed } from '../../data/services-detailed';

// NEW
import { trainingServiceDetailed } from '../../data/services';
```

### `/src/app/components/templates/PerformanceServiceTemplate.tsx`
**Line 47:**
```typescript
// OLD
import { performanceServiceDetailed } from '../../data/services-detailed';

// NEW
import { performanceServiceDetailed } from '../../data/services';
```

---

## Verification Steps

After all files created and imports updated:

1. **Build Test:**
   ```bash
   npm run build
   ```
   Should complete without errors

2. **Import Test:**
   ```typescript
   import { allDetailedServices } from '@/data/services';
   console.log(allDetailedServices.length); // Should be 14
   ```

3. **Helper Function Test:**
   ```typescript
   import { getServiceBySlug } from '@/data/services';
   const security = getServiceBySlug('security');
   console.log(security?.headline); // Should log security headline
   ```

4. **Visual Test:**
   - Navigate to each service page
   - Verify content displays correctly
   - Check for console errors

5. **Delete Original:**
   ```bash
   # Only after all tests pass!
   rm /src/app/data/services-detailed.ts
   ```

---

## Completion Checklist

- [ ] All 10 remaining service files created
- [ ] All 8 template imports updated
- [ ] Build succeeds
- [ ] All service pages render
- [ ] Helper functions work
- [ ] No console errors
- [ ] services-detailed.ts deleted
- [ ] CHANGELOG updated
- [ ] Task list updated

---

**Reference:** `/prompts/memory-optimization-prompt.md`  
**Tasks:** `/tasks/memory-optimization-tasks.md`  
**Progress:** `/tasks/memory-optimization-progress.md`
