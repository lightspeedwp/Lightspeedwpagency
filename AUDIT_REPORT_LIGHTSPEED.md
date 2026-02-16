# Audit Report: LightSpeed Design System Migration

## 1. Architectural Violations
*   `src/app/components/templates/FrontPageTemplate.tsx`: "Features Section" is implemented inline using `Section`, `Container`, and raw divs/components instead of importing a reusable Pattern.
    *   **Suggested Fix**: Extract to `src/app/components/patterns/FeaturesGrid.tsx`.

## 2. BEM & CSS Import Issues
*   `src/styles/hero-home.css`: Usage of hardcoded hex values (`#ffffff`) instead of WordPress presets.
*   `src/app/components/patterns/HeroHome.tsx`: Badge implementation uses a simple `span` without a leading Icon component, violating the Smart Badge requirement.

## 3. Accessibility Risks
*   `hero-home.css`: Hardcoded `#ffffff` backgrounds/borders might fail contrast checks in Dark Mode if variable overrides aren't handled correctly (though currently they seem to be for a specific "on primary" context).
    *   **Scenario**: White text on White background if variables fail.

## 4. Interaction & Motion Gaps
*   `src/styles/blocks/design/button.css`: Button hover states use simple `opacity: 0.9` or `transform`, missing the "Glow Protocol" (border-color transition + colored box-shadow glow).
*   `src/app/components/patterns/HeroHome.tsx`: Badge icon missing entirely, thus no hover animation possible.
*   `src/styles/hero-home.css`: Badge hover animation logic missing.

## 5. Implementation Plan (Top 3 Critical Fixes)

### Fix 1: HeroHome Badge & Hardcoded Colors
Update `HeroHome.tsx` to include a `Sparkles` icon in the badge. Update `hero-home.css` to use `var(--wp--preset--color--white)` and implement the badge icon animation (`transform: rotate(15deg)` on group hover).

### Fix 2: Global Button Glow Protocol
Update `src/styles/blocks/design/button.css` to implement the "Glow Protocol":
```css
.wp-block-button__link:hover {
  box-shadow: 0 0 15px var(--primary);
  border-color: var(--primary);
}
```

### Fix 3: Refactor Features Section
Extract the features section from `FrontPageTemplate` into a new pattern `FeaturesGrid`.
