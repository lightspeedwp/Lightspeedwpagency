# Component Creation Template

**Version:** 1.0  
**Date Created:** 2025-01-09  
**Last Updated:** 2025-01-09  
**Category:** design-system  
**Status:** ✅ Production

---

## 📋 Prompt Overview

Create a new React component for the LSX Design system that follows WordPress FSE block conventions and uses design system tokens.

**Use Case:** When you need to create a new component from scratch  
**Expected Output:** Complete component with TypeScript, documentation, and design system compliance  
**Estimated Time:** 15-25 minutes

---

## 🎯 Context

### Background

- LSX Design is a WordPress-compatible design system
- All components must use CSS variables from `/styles/global.css`
- Components map to WordPress blocks or patterns
- 100% design system compliance required
- WCAG 2.1 AA accessibility is mandatory

### Constraints

- **Fonts:** ONLY use `var(--font-primary)` (Lexend) or `var(--font-secondary)` (Manrope)
- **Spacing:** Use Tailwind classes (p-*, gap-*, m-auto)
- **Colors:** Use CSS variables (`var(--primary)`, `var(--foreground)`, etc.)
- **Border Radius:** Use `var(--radius)` or `var(--radius-lg)`
- **WordPress:** Must map to a WordPress block or pattern
- **TypeScript:** All props must have interfaces with JSDoc
- **Accessibility:** Keyboard navigation, ARIA labels, focus states

---

## 📝 The Prompt

```
Create a [ComponentName] component for the LSX Design system.

**Context:**
I'm building the LSX Design system, a WordPress-compatible design system with non-negotiable principles: content-first design, WCAG 2.1 AA accessibility, and 100% design token compliance.

I've updated the tailwind css and /styles/global.css file to include colors, spacing, borders, radius and typography from my teams design system.
- Make sure all UI being generated uses these variables from the css, so that the generation adheres to my design system and the user has ability to update the styling by updating the css.
- For typography ONLY use the font faces defined in the css for all generated text.

**Requirements:**

1. **File Location:**
   `/src/app/components/[category]/[ComponentName].tsx`
   
   Categories:
   - `blocks/design/` — WordPress design blocks (Button, Heading, etc.)
   - `blocks/layout/` — WordPress layout blocks (Container, Row, etc.)
   - `blocks/theme/` — WordPress theme blocks (SiteLogo, Navigation, etc.)
   - `patterns/` — WordPress block patterns (Hero, CTA, FAQ, etc.)
   - `common/` — Shared utilities (Container, Section, etc.)

2. **Component Interface:**
   ```typescript
   /**
    * [ComponentName] Props
    * 
    * [Brief description of the component]
    * 
    * @property {ReactNode} children - [description]
    * @property {string} [variant] - [description]
    * @property {string} [size] - [description]
    * @property {string} [page] - WordPress page navigation (if applicable)
    */
   export interface [ComponentName]Props {
     children: React.ReactNode;
     variant?: 'default' | 'primary' | 'secondary';
     size?: 'sm' | 'md' | 'lg';
     page?: string; // For navigation
     className?: string;
     ariaLabel?: string;
   }
   ```

3. **Design Token Requirements:**
   
   **Typography:**
   ```typescript
   // ✅ CORRECT
   fontFamily: 'var(--font-primary)'     // Lexend (headings, body, UI)
   fontFamily: 'var(--font-secondary)'   // Manrope (small text only)
   fontSize: 'var(--text-h1)'            // Headings
   fontSize: 'var(--text-base)'          // Body text
   
   // ❌ WRONG - Never hardcode
   fontFamily: 'Lexend, sans-serif'
   fontSize: '16px'
   ```
   
   **Spacing:**
   ```typescript
   // ✅ CORRECT - Tailwind classes
   className="p-6 gap-4 mb-8"
   
   // ❌ WRONG - Hardcoded values
   padding: '24px'
   gap: '16px'
   ```
   
   **Colors:**
   ```typescript
   // ✅ CORRECT
   backgroundColor: 'var(--background)'
   color: 'var(--foreground)'
   
   // ❌ WRONG
   backgroundColor: '#ffffff'
   color: '#000000'
   ```
   
   **Border Radius:**
   ```typescript
   // ✅ CORRECT
   borderRadius: 'var(--radius)'
   
   // ❌ WRONG
   borderRadius: '4px'
   ```

4. **Component Structure:**
   ```typescript
   /**
    * [ComponentName] Component
    * 
    * [Component description]
    * 
    * **WordPress Mapping:** [Block/Pattern name]
    * 
    * **Accessibility:**
    * - [Requirement 1]
    * - [Requirement 2]
    * 
    * @example
    * ```tsx
    * <ComponentName variant="primary" size="lg">
    *   Content here
    * </ComponentName>
    * ```
    */
   export function ComponentName({ 
     children,
     variant = 'default',
     size = 'md',
     page,
     className,
     ariaLabel 
   }: ComponentNameProps) {
     const { navigateTo } = useNavigation(); // If navigation needed
     
     // Component logic here
     
     return (
       <element
         className={`[tailwind-classes] ${className || ''}`}
         style={{
           fontFamily: 'var(--font-primary)',
           fontSize: 'var(--text-base)',
           color: 'var(--foreground)',
           // Only CSS variables, never hardcoded values
         }}
         aria-label={ariaLabel}
         // Accessibility attributes
       >
         {children}
       </element>
     );
   }
   ```

5. **Accessibility Requirements (WCAG 2.1 AA):**
   - Keyboard navigation (Tab, Enter, Space, Escape)
   - Focus states visible (2px outline)
   - ARIA labels where appropriate
   - Semantic HTML elements
   - Color contrast ratios (4.5:1 for text)
   - Touch targets 44×44px minimum (mobile)

6. **WordPress Mapping:**
   ```
   This component maps to WordPress [Block/Pattern]:
   - Block Name: `wp-[name]`
   - Pattern Slug: `lsx-design/[category]/[name]`
   - Used in: [templates/patterns]
   ```

7. **Documentation:**
   Create `/guidelines/components/[ComponentName].md` with:
   
   ```markdown
   # [ComponentName] Component
   
   **WordPress Block:** `wp-[name]`
   **Category:** [category]
   **Status:** ✅ Production
   
   ## Overview
   [Component description and purpose]
   
   ## Usage
   ```tsx
   import { ComponentName } from './components/[category]/ComponentName';
   
   <ComponentName variant="primary" size="lg">
     Content
   </ComponentName>
   ```
   
   ## Props
   [Props table with descriptions]
   
   ## Design Tokens Used
   - Fonts: `var(--font-primary)`
   - Spacing: Tailwind classes
   - Colors: CSS variables
   
   ## Accessibility
   - WCAG 2.1 AA compliant
   - Keyboard navigable
   - [Other requirements]
   
   ## WordPress Mapping
   [How it maps to WordPress blocks]
   ```

8. **Success Criteria:**
   - [ ] Uses `var(--font-primary)` or `var(--font-secondary)` ONLY
   - [ ] All spacing uses Tailwind classes
   - [ ] All colors use CSS variables
   - [ ] NO hardcoded px values for spacing
   - [ ] NO hardcoded font families
   - [ ] TypeScript interfaces with JSDoc
   - [ ] WCAG 2.1 AA compliant
   - [ ] Keyboard navigation works
   - [ ] Documentation complete
   - [ ] WordPress mapping specified

**Please create:**
1. Component file: `/src/app/components/[category]/[ComponentName].tsx`
2. Documentation: `/guidelines/components/[ComponentName].md`
3. Update barrel export: `/src/app/components/[category]/index.ts`
```

---

## ✅ Success Criteria

### Component Quality

- [ ] **Design System Compliance**
  - Uses `var(--font-primary)` or `var(--font-secondary)` ONLY
  - All spacing uses Tailwind classes (p-*, gap-*, mb-*)
  - All colors use CSS variables (var(--primary), etc.)
  - Border radius uses `var(--radius)` or `var(--radius-lg)`
  - NO hardcoded px values
  - NO hardcoded hex colors
  - NO hardcoded font families

- [ ] **TypeScript**
  - Interface defined with JSDoc
  - All props typed correctly
  - No TypeScript errors
  - Exports are correct

- [ ] **Accessibility (WCAG 2.1 AA)**
  - Keyboard navigable
  - Focus states visible
  - ARIA labels present
  - Semantic HTML
  - Touch targets 44×44px (mobile)

- [ ] **Documentation**
  - Component documentation created
  - Usage examples included
  - Props documented
  - WordPress mapping specified

- [ ] **WordPress Compatibility**
  - Maps to WordPress block or pattern
  - Block name specified
  - Pattern slug defined
  - Template usage documented

---

## 📊 Expected Output

### Files Created

1. **Component:**
   ```
   /src/app/components/[category]/[ComponentName].tsx
   ```

2. **Documentation:**
   ```
   /guidelines/components/[ComponentName].md
   ```

### Files Modified

1. **Barrel Export:**
   ```typescript
   // /src/app/components/[category]/index.ts
   export { ComponentName } from './ComponentName';
   ```

### Component Size

- **Lines:** 50-150 (depending on complexity)
- **Dependencies:** Minimal (only necessary imports)
- **Bundle Impact:** <5KB gzipped

---

## 🔍 Validation

### Automated Checks

1. **CSS Variable Check:**
   ```bash
   # Should return 0
   grep -n "fontFamily: ['\"]Lexend" /src/app/components/[category]/[ComponentName].tsx
   grep -n "fontFamily: ['\"]Manrope" /src/app/components/[category]/[ComponentName].tsx
   
   # Should find CSS variables
   grep -n "var(--font-" /src/app/components/[category]/[ComponentName].tsx
   ```

2. **Hardcoded Spacing Check:**
   ```bash
   # Should return 0
   grep -n "padding: ['\"][0-9]" /src/app/components/[category]/[ComponentName].tsx
   grep -n "margin: ['\"][0-9]" /src/app/components/[category]/[ComponentName].tsx
   ```

3. **TypeScript Check:**
   ```bash
   npm run type-check
   ```

### Manual Checks

1. **Visual Review:**
   - Component renders correctly
   - Styling matches design system
   - Responsive behavior works

2. **Accessibility Review:**
   - Tab through component
   - Test with screen reader
   - Verify focus states
   - Check ARIA labels

3. **WordPress Mapping:**
   - Verify block name is correct
   - Confirm pattern slug format
   - Check template usage examples

4. **Documentation Review:**
   - All sections complete
   - Examples are accurate
   - Props are documented
   - WordPress mapping clear

---

## 📚 Related Prompts

- [Pattern Implementation Prompt](./2025-01-09-pattern-implementation-template.md)
- [Component Testing Prompt](../testing/2025-01-09-component-testing-template.md)
- [Documentation Generation Prompt](../documentation/2025-01-09-component-documentation.md)

---

## 📝 Notes

### Common Pitfalls

1. **Forgetting CSS Variables:**
   - Always use `var(--font-primary)`, never `'Lexend, sans-serif'`
   - Always use `var(--spacing-*)` or Tailwind, never `'24px'`

2. **Missing Accessibility:**
   - Add ARIA labels for interactive elements
   - Ensure keyboard navigation works
   - Test focus states

3. **Incomplete Documentation:**
   - Document ALL props
   - Include WordPress mapping
   - Provide usage examples

4. **TypeScript Issues:**
   - Define interfaces with JSDoc
   - Export interfaces
   - Type all props correctly

### Tips for Success

1. **Start with Design Tokens:**
   - Review `/guidelines/design-tokens/` first
   - Use CSS variable reference
   - Check Tailwind spacing scale

2. **Follow Existing Patterns:**
   - Look at similar components
   - Match naming conventions
   - Use consistent structure

3. **Test Thoroughly:**
   - Visual testing in light/dark modes
   - Keyboard navigation
   - Screen reader testing
   - Responsive behavior

4. **Document Everything:**
   - Clear usage examples
   - Complete props table
   - WordPress mapping details

---

## 🔄 Version History

| Version | Date | Changes | Success Rate |
|---------|------|---------|--------------|
| 1.0 | 2025-01-09 | Initial creation | N/A |

---

## 📈 Metrics

**Success Rate:** N/A (new prompt)  
**Average Time:** 15-25 minutes (estimated)  
**Revision Rate:** N/A (new prompt)  
**Uses:** 0

---

**Created:** 2025-01-09  
**Author:** LSX Design Team  
**Status:** ✅ Production

**See Also:**
- [Prompt Generation Guidelines](/guidelines/prompts/prompt-generation-guidelines.md)
- [Design System Usage Guide](/guidelines/design-system/design-system-usage-guide.md)
- [Component Guidelines](/guidelines/overview-components.md)
