---
Category: Report
Version: 1.0.0
Last Updated: 2026-03-16
Status: Active
---

# QueryLoop Consolidation Audit — P4.1

## Summary

Audit of 12 QueryLoop files (1 base + 11 variants) to consolidate from 12 → 7 files.

## Current Inventory

| File | Lines | Template Imports | Status |
|---|---|---|---|
| QueryLoop.tsx (base) | 72 | 0 (used by variants) | KEEP |
| QueryLoopTestimonials.tsx | 122 | 5 templates | KEEP (actively used) |
| QueryLoopPosts.tsx | 84 | 0 | KEEP (core blog pattern) |
| QueryLoopPortfolio.tsx | 85 | 0 | MERGE → Posts (similar card) |
| QueryLoopAudio.tsx | 105 | 0 | MERGE → Media |
| QueryLoopVideo.tsx | 100 | 0 | MERGE → Media |
| QueryLoopGallery.tsx | 112 | 0 | MERGE → Media |
| QueryLoopChat.tsx | 96 | 0 | MERGE → Media |
| QueryLoopServices.tsx | 71 | 0 | MERGE → Offerings |
| QueryLoopSolutions.tsx | 92 | 0 | MERGE → Offerings |
| QueryLoopCTAs.tsx | 105 | 0 | KEEP (unique CTA) |
| QueryLoopFAQs.tsx | 75 | 0 | KEEP (unique accordion) |

**Total: 1,119 lines across 12 files**

## Consolidation Plan (12 → 7)

### Merges

1. **QueryLoopMedia.tsx** — Merge Audio + Video + Chat + Gallery (4 → 1)
   - Discriminated via `variant: 'audio' | 'video' | 'chat' | 'gallery'`
   - All use WPPost type, all share image/overlay/badge/meta structure
   - Audio + Video are 90% identical (different icons only)
   - Chat adds chat-bubble preview, Gallery adds thumbnail strip

2. **QueryLoopOfferings.tsx** — Merge Services + Solutions (2 → 1)
   - Discriminated via `variant: 'services' | 'solutions'`
   - Both use icon-card pattern with features/benefits list

3. **QueryLoopPosts.tsx** — Absorb Portfolio variant
   - Add `variant: 'posts' | 'portfolio'` prop
   - Both are card-with-image patterns, portfolio adds overlay + tech tags

### Result (7 files)

| # | File | Consolidates |
|---|---|---|
| 1 | QueryLoop.tsx | Base wrapper (unchanged) |
| 2 | QueryLoopTestimonials.tsx | Unchanged (5 active imports) |
| 3 | QueryLoopPosts.tsx | Posts + Portfolio |
| 4 | QueryLoopMedia.tsx | Audio + Video + Chat + Gallery |
| 5 | QueryLoopOfferings.tsx | Services + Solutions |
| 6 | QueryLoopCTAs.tsx | Unchanged |
| 7 | QueryLoopFAQs.tsx | Unchanged |

### Files to Delete After Consolidation

- QueryLoopPortfolio.tsx (absorbed into Posts)
- QueryLoopAudio.tsx (absorbed into Media)
- QueryLoopVideo.tsx (absorbed into Media)
- QueryLoopChat.tsx (absorbed into Media)
- QueryLoopGallery.tsx (absorbed into Media)
- QueryLoopServices.tsx (absorbed into Offerings)
- QueryLoopSolutions.tsx (absorbed into Offerings)

**Net reduction: 5 files deleted, 2 new files created**

## Backward Compatibility

All merged files will re-export named exports from the original interfaces for backward compatibility. No template changes required since only QueryLoopTestimonials has active imports.
