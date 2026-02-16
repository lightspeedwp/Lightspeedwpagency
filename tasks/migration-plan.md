# Migration Task Plan

## Phase 1: Directory Structure & Organization
- [ ] Rename `/planning` to `/tasks` (Done)
- [ ] Create block category folders in `/guidelines/blocks/`
  - [ ] `woocommerce`
  - [ ] `text`
  - [ ] `media`
  - [ ] `design`
  - [ ] `widgets`
  - [ ] `theme`
  - [ ] `embed`

## Phase 2: Guideline Relocation
- [ ] Move Core Blocks to Categories
- [ ] Move Component Guidelines to Blocks
- [ ] Move WooCommerce Guidelines
- [ ] Move Parts Guidelines
- [ ] Move Pattern Guidelines
- [ ] Create/Update Menu Designer Guidelines (`/guidelines/parts/menus/`)

## Phase 3: Component Migration
- [ ] Migrate `Accordion` (Design)
- [ ] Migrate `Button` (Design)
- [ ] Migrate `Separator` (Design)
- [ ] Migrate `Search` (Widget)
- [ ] Migrate `SocialIcons` (Widget)
- [ ] Migrate `MiniCart` (WooCommerce)
- [ ] ... (Continue for all ShadCN components)

## Phase 4: CSS Architecture
- [ ] Ensure every block has a dedicated CSS file in `/src/styles/blocks/{category}/{block}.css`
- [ ] Verify no Tailwind classes remain in block components
- [ ] Verify all styles use CSS variables

## Phase 5: Verification
- [ ] Verify all links in documentation are updated
- [ ] Verify React Component Diagram is updated
- [ ] Verify build passes
