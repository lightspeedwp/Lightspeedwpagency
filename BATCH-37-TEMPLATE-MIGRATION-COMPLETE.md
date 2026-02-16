# Batch 37: Template Migration & Fixes

**Date:** February 9, 2026
**Status:** ✅ Complete

## Overview
Migrated remaining legacy templates to use WordPress blocks and corrected utility class usage across key templates.

## Completed Tasks

### 1. CareersTemplate Migration
- **Status:** ✅ Complete
- **Changes:**
  - Replaced inline styles with `Heading`, `Paragraph`, `Badge`, `Card` blocks.
  - Replaced legacy `Section` props (`variant="canvas"`) with modern props (`background="muted"`).
  - Implemented `RouteAnnouncer` and `SkipLink`.

### 2. TrainingTemplate Migration
- **Status:** ✅ Complete
- **Changes:**
  - Replaced inline styles with `Heading`, `Paragraph`, `Badge`, `Card` blocks.
  - Replaced legacy `Section` props.
  - Implemented `RouteAnnouncer` and `SkipLink`.

### 3. FrontPageTemplate Fixes
- **Status:** ✅ Complete
- **Changes:**
  - Fixed invalid utility classes (`wp-p-6` → `p-6`, `wp-rounded-lg` → `rounded-lg`).
  - Corrected `bg-card` usage.
  - Ensured correct mixing of `wp-*` and standard utility classes.

### 4. AboutProcessTemplate Enhancement
- **Status:** ✅ Complete
- **Changes:**
  - Replaced manual CTA implementation with standard `CTASection` pattern.
  - Improved maintainability and consistency.

### 5. Verification
- **Verified Modern Templates:**
  - `TourOperatorTemplate` (✅ Good)
  - `PublishersTemplate` (✅ Good)
  - `WetuImporterTemplate` (✅ Good)
  - `AboutHistoryTemplate` (✅ Good)
  - `AboutCultureTemplate` (✅ Good)
  - `ArchiveWithFiltersTemplate` (✅ Good)

## Next Steps
- Continue auditing remaining templates in `/src/app/components/templates/`.
- Check `Legal` templates (`PrivacyPolicy`, `TermsOfService`) for any remaining inline styles (mostly good but worth a final pass).
