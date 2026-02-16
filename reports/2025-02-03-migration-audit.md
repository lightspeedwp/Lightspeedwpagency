# Migration Audit Report - Feb 3, 2026

## 1. Overview
This report details the migration of ShadCN UI components to WordPress Block components and the reorganization of guidelines to match the WordPress Block Editor structure.

## 2. Component Migration
The following components in `/src/app/components/ui/` need to be migrated to `/src/app/components/blocks/`:

### Design Blocks
- `accordion.tsx` → `/src/app/components/blocks/design/Accordion.tsx`
- `button.tsx` → `/src/app/components/blocks/design/Buttons.tsx`
- `separator.tsx` → `/src/app/components/blocks/design/Separator.tsx`
- `aspect-ratio.tsx` → `/src/app/components/blocks/design/AspectRatio.tsx` (if applicable)

### Widget Blocks
- `search-form.tsx` → `/src/app/components/blocks/widgets/Search.tsx`
- `calendar.tsx` → `/src/app/components/blocks/widgets/Calendar.tsx`

### WooCommerce Blocks
- `shopping-cart.tsx` → `/src/app/components/blocks/woocommerce/MiniCart.tsx`

## 3. Guideline Reorganization
The following guidelines need to be moved/renamed:

### Core Blocks -> Specific Categories
- `/guidelines/blocks/core/spacer.md` → `/guidelines/blocks/design/spacer.md`
- `/guidelines/blocks/core/paragraph.md` → `/guidelines/blocks/text/paragraph.md`
- `/guidelines/blocks/core/list.md` → `/guidelines/blocks/text/list.md`
- `/guidelines/blocks/core/image.md` → `/guidelines/blocks/media/image.md`
- `/guidelines/blocks/core/heading.md` → `/guidelines/blocks/text/heading.md`

### Component Guidelines -> Block Guidelines
- `/guidelines/components/Button.md` → `/guidelines/blocks/design/Buttons.md`
- `/guidelines/blocks/ProductCard.md` → `/guidelines/blocks/woocommerce/ProductCard.md`
- `/guidelines/blocks/SearchAutocomplete.md` & `/guidelines/components/SearchInput.md` → `/guidelines/blocks/widgets/Search.md`
- `/guidelines/blocks/Pagination.md` → `/guidelines/blocks/theme/Pagination.md`
- `/guidelines/blocks/SocialLinks.md` → `/guidelines/blocks/widgets/SocialIcons.md`
- `/guidelines/blocks/Accordion.md` → `/guidelines/blocks/design/Accordion.md`

### WooCommerce Guidelines -> `/guidelines/blocks/woocommerce/`
- `/guidelines/blocks/OrderConfirmation.md`
- `/guidelines/blocks/ProductCard.md`
- `/guidelines/blocks/ProductGallery.md`
- `/guidelines/components/ProductCollection.md`
- `/guidelines/components/CartFilled.md`
- `/guidelines/components/CartEmptyState.md`
- `/guidelines/components/CartTable.md`
- `/guidelines/components/CheckoutFormSection.md`
- `/guidelines/components/ProductGrid.md`
- `/guidelines/components/QuantitySelector.md`
- `/guidelines/components/MiniCart.md`
- `/guidelines/components/FilterSidebar.md` (rename to `ProductFilters.md`)

### Parts Guidelines -> `/guidelines/parts/`
- `/guidelines/components/Header.md`
- `/guidelines/components/Footer.md`
- `/guidelines/components/CheckoutHeader.md`
- `/guidelines/components/CheckoutFooter.md`

### Pattern Guidelines -> `/guidelines/patterns/`
- `/guidelines/components/ArchiveCTA.md`
- `/guidelines/components/CategoryShowcaseGrid.md`
- `/guidelines/components/FeaturesComparisonTable.md`
- `/guidelines/components/NewsletterSignup.md`
- `/guidelines/components/PostGrid.md`
- `/guidelines/components/ProductGrid.md` (Note: Duplicate with WC blocks list, need to clarify)
- `/guidelines/components/ProductCard.md` (Note: Duplicate with WC blocks list, need to clarify)

## 4. Next Steps
1. Execute file moves.
2. Update references in `Guidelines.md` and other documentation.
3. Begin component migration one by one.
