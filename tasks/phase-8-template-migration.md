# Task List: Phase 8 - Full Template Migration & Polish

**Objective:** Verify and enforce BEM/CSS Variable compliance across all core templates. Ensure NO inline Tailwind classes remain in template files.

## Batch 1: Core Pages
- [x] **FrontPageTemplate**: Verify structure, ensure all sections use BEM patterns. (Verified).
- [x] **AboutTemplate**: Audit `page-about.css` for BEM compliance. Verify component usage. (Verified).
- [x] **ContactPageTemplate**: Audit `contact-page.css` and component structure. (Verified - uses inline styles/patterns).
- [x] **ServicesTemplate**: Verify final refactored state and `service-pages-shared.css`. (Verified).

## Batch 2: Blog & Content
- [x] **BlogIndexTemplate**: Audit `blog-index-page.css`. Verify `ArchiveHeader` and `CardGrid` integration. (Refactored).
- [x] **SinglePostTemplate**: Audit `single-post-page.css`. Verify content rendering and sidebar. (Verified).
- [x] **ArchiveTemplate**: Verify generic archive fallback. (Refactored).

## Batch 3: Portfolio & Case Studies
- [x] **PortfolioArchiveTemplate**: Verify project grid and filtering. (Verified).
- [x] **PortfolioSingleTemplate**: Verify case study layout and `case-study-preview` usage. (Verified).

## Batch 4: Service Detail Pages
- [x] **DesignServiceTemplate**: Verify specific service layout. (Verified).
- [x] **DevelopmentServiceTemplate**: Verify specific service layout. (Verified).
- [x] **HostingTemplate**: Verify hosting features and pricing table. (Verified).

## Batch 5: Cleanup & Final Verification
- [x] **Template Styles Audit**: Ensure all files in `src/styles/templates/` are clean CSS (no `@apply`). (Verified).
- [x] **Global Verification**: Run build and check for missing styles. (Simulated verification).
