#!/bin/bash

# =============================================================================
# LSX Design — Contrast Audit Script
# =============================================================================
# 
# This script audits all template files for potential contrast issues.
# 
# Focus areas:
# - Text on backgrounds (especially light mode)
# - Text on glassmorphism overlays
# - Text on gradient backgrounds
# - Button text contrast
# - Muted/metadata text
# - Category badge text
# 
# WCAG 2.1 AA Requirements:
# - Normal text: 4.5:1 minimum
# - Large text (18px+): 3:1 minimum
# - AAA: 7:1 for normal, 4.5:1 for large
# 
# Usage: bash scripts/contrast-audit.sh
# =============================================================================

echo "========================================"
echo "LSX Design — Contrast Audit"
echo "========================================"
echo ""
echo "Scanning templates for potential contrast issues..."
echo ""

# Find all template files
TEMPLATE_DIR="src/app/templates"

# Patterns to check for potential contrast issues
echo "Checking for potential contrast issues:"
echo ""

# 1. Check for hardcoded colors that might have contrast issues
echo "1. Hardcoded color values (should use CSS variables):"
grep -r "color: #" "$TEMPLATE_DIR" --include="*.tsx" | grep -v "var(--" | head -20
echo ""

# 2. Check for glassmorphism usage (potential overlay contrast issues)
echo "2. Glassmorphism overlays (check text readability):"
grep -r "glass-bg\|glassmorphism" "$TEMPLATE_DIR" --include="*.tsx" | head -20
echo ""

# 3. Check for gradient backgrounds with text
echo "3. Gradient backgrounds with text overlays:"
grep -r "gradient-\|linear-gradient" "$TEMPLATE_DIR" --include="*.tsx" | head -20
echo ""

# 4. Check for muted text usage (verify contrast)
echo "4. Muted text usage (verify 7:1 contrast):"
grep -r "muted-foreground\|text-muted" "$TEMPLATE_DIR" --include="*.tsx" | head -20
echo ""

# 5. Check for category badge usage
echo "5. Category badges (verify text contrast):"
grep -r "category-\|badge" "$TEMPLATE_DIR" --include="*.tsx" | head -20
echo ""

# 6. Check for overlay text (hero sections)
echo "6. Hero section overlays (verify text contrast):"
grep -r "hero-overlay\|overlay" "$TEMPLATE_DIR" --include="*.tsx" | head -20
echo ""

echo "========================================"
echo "Audit complete"
echo "========================================"
echo ""
echo "Next steps:"
echo "1. Review findings above"
echo "2. Test each template in both light and dark modes"
echo "3. Use browser DevTools to verify actual contrast ratios"
echo "4. Fix any issues found"
echo ""
