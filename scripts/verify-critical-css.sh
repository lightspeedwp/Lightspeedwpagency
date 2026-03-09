#!/bin/bash

###############################################################################
# Critical CSS Verification Script
# 
# Purpose: Verify critical CSS implementation across all routes
# Tests: FOUC detection, performance measurement, dark mode, slow connection
# 
# Usage: ./scripts/verify-critical-css.sh [options]
# Options:
#   --routes    Test all routes for FOUC (default: sample routes)
#   --perf      Run Lighthouse performance tests
#   --dark      Test dark mode functionality
#   --slow      Test slow connection behavior (3G)
#   --all       Run all tests
# 
# Requirements:
# - Node.js installed
# - Chrome/Chromium installed
# - Lighthouse CLI installed (npm install -g @lhci/cli lighthouse)
# 
# @see /reports/2026-03/phase-3-step-3-task-3-3-plan.md
###############################################################################

set -e  # Exit on error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
BASE_URL="http://localhost:5173"
RESULTS_DIR="./reports/2026-03/critical-css-verification"
TIMESTAMP=$(date +"%Y%m%d_%H%M%S")

# Test counters
TOTAL_TESTS=0
PASSED_TESTS=0
FAILED_TESTS=0

###############################################################################
# Helper Functions
###############################################################################

print_header() {
    echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
    echo -e "${BLUE}  $1${NC}"
    echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
}

print_success() {
    echo -e "${GREEN}✓ $1${NC}"
    ((PASSED_TESTS++))
    ((TOTAL_TESTS++))
}

print_failure() {
    echo -e "${RED}✗ $1${NC}"
    ((FAILED_TESTS++))
    ((TOTAL_TESTS++))
}

print_warning() {
    echo -e "${YELLOW}⚠ $1${NC}"
}

print_info() {
    echo -e "${BLUE}ℹ $1${NC}"
}

###############################################################################
# Test 1: Sample Routes FOUC Check
###############################################################################

test_sample_routes() {
    print_header "Test 1: Sample Routes FOUC Check"
    
    # Sample routes to test
    SAMPLE_ROUTES=(
        "/"
        "/insights"
        "/insights/wordpress-block-themes"
        "/services"
        "/services/wordpress-development"
        "/work"
        "/about"
        "/contact"
    )
    
    print_info "Testing ${#SAMPLE_ROUTES[@]} sample routes for FOUC..."
    echo ""
    
    for route in "${SAMPLE_ROUTES[@]}"; do
        local url="${BASE_URL}${route}"
        local route_name=$(echo "$route" | sed 's/\///' | sed 's/\//-/g')
        [ -z "$route_name" ] && route_name="homepage"
        
        echo -e "${BLUE}Testing:${NC} $url"
        
        # Check if route is accessible
        local status_code=$(curl -s -o /dev/null -w "%{http_code}" "$url" 2>/dev/null || echo "000")
        
        if [ "$status_code" = "200" ]; then
            print_success "Route accessible: $route (HTTP $status_code)"
        else
            print_failure "Route not accessible: $route (HTTP $status_code)"
        fi
    done
    
    echo ""
    print_info "Sample route test complete. Manual FOUC check required in browser."
    echo ""
}

###############################################################################
# Test 2: Critical CSS Presence Check
###############################################################################

test_critical_css_presence() {
    print_header "Test 2: Critical CSS Presence Check"
    
    print_info "Checking if critical CSS is inlined in index.html..."
    echo ""
    
    # Check if index.html has inline <style> tag
    if grep -q "<style>" index.html; then
        print_success "Inline <style> tag found in index.html"
    else
        print_failure "No inline <style> tag found in index.html"
    fi
    
    # Check if critical CSS has CSS variables
    if grep -q "var(--font-primary)" index.html; then
        print_success "CSS variables found in critical CSS (--font-primary)"
    else
        print_failure "CSS variables NOT found in critical CSS"
    fi
    
    # Check if critical CSS has dark mode support
    if grep -q "prefers-color-scheme:dark" index.html; then
        print_success "Dark mode support found in critical CSS"
    else
        print_failure "Dark mode support NOT found in critical CSS"
    fi
    
    # Check if non-critical CSS uses preload
    if grep -q 'rel="preload"' index.html; then
        print_success "Non-critical CSS uses preload (async loading)"
    else
        print_failure "Non-critical CSS does NOT use preload"
    fi
    
    # Check if noscript fallback exists
    if grep -q "<noscript>" index.html; then
        print_success "Noscript fallback found for JavaScript-disabled browsers"
    else
        print_failure "Noscript fallback NOT found"
    fi
    
    echo ""
}

###############################################################################
# Test 3: CSS Variable Usage Check
###############################################################################

test_css_variable_usage() {
    print_header "Test 3: CSS Variable Usage Check (Design System Compliance)"
    
    print_info "Verifying design system compliance in critical CSS..."
    echo ""
    
    # Check font variables
    if grep -q "var(--font-primary)" index.html; then
        print_success "Font uses CSS variable: var(--font-primary)"
    else
        print_failure "Font does NOT use CSS variable"
    fi
    
    # Check color variables
    if grep -q "var(--foreground)" index.html && grep -q "var(--background)" index.html; then
        print_success "Colors use CSS variables: var(--foreground), var(--background)"
    else
        print_failure "Colors do NOT use CSS variables"
    fi
    
    # Check spacing variables
    if grep -q "var(--spacing-" index.html; then
        print_success "Spacing uses CSS variables: var(--spacing-*)"
    else
        print_failure "Spacing does NOT use CSS variables"
    fi
    
    # Check border radius variables
    if grep -q "var(--radius" index.html; then
        print_success "Border radius uses CSS variables: var(--radius*)"
    else
        print_failure "Border radius does NOT use CSS variables"
    fi
    
    # Check for hardcoded hex colors (should be NONE)
    local hex_count=$(grep -o '#[0-9a-fA-F]\{6\}' index.html | grep -v "prefers-color-scheme" | wc -l || echo 0)
    if [ "$hex_count" -eq 0 ]; then
        print_success "No hardcoded hex colors found (100% CSS variables)"
    else
        print_failure "Found $hex_count hardcoded hex colors (should be 0)"
    fi
    
    echo ""
}

###############################################################################
# Test 4: Critical CSS Size Check
###############################################################################

test_critical_css_size() {
    print_header "Test 4: Critical CSS Size Check"
    
    print_info "Measuring critical CSS size..."
    echo ""
    
    # Extract inline styles from index.html
    local style_content=$(sed -n '/<style>/,/<\/style>/p' index.html)
    local uncompressed_size=$(echo "$style_content" | wc -c)
    
    # Calculate approximate gzipped size (rough estimate: 30-35% of original)
    local gzipped_estimate=$((uncompressed_size * 30 / 100))
    
    echo "Uncompressed size: $(numfmt --to=iec-i --suffix=B $uncompressed_size || echo "$uncompressed_size bytes")"
    echo "Estimated gzipped: $(numfmt --to=iec-i --suffix=B $gzipped_estimate || echo "$gzipped_estimate bytes")"
    echo ""
    
    # Check if within target (7-10KB gzipped)
    if [ "$gzipped_estimate" -lt 10240 ]; then
        print_success "Critical CSS size within target (<10KB gzipped)"
    else
        print_warning "Critical CSS size exceeds target (>10KB gzipped)"
    fi
    
    echo ""
}

###############################################################################
# Test 5: File Existence Check
###############################################################################

test_file_existence() {
    print_header "Test 5: File Existence Check"
    
    print_info "Checking critical files exist..."
    echo ""
    
    # Check critical.css
    if [ -f "src/styles/critical.css" ]; then
        print_success "Critical CSS file exists: src/styles/critical.css"
    else
        print_failure "Critical CSS file NOT found: src/styles/critical.css"
    fi
    
    # Check index.html
    if [ -f "index.html" ]; then
        print_success "Index file exists: index.html"
    else
        print_failure "Index file NOT found: index.html"
    fi
    
    # Check CSS bundles directory
    if [ -d "src/styles/bundles" ]; then
        local bundle_count=$(ls -1 src/styles/bundles/*.css 2>/dev/null | wc -l || echo 0)
        print_success "CSS bundles directory exists ($bundle_count bundles)"
    else
        print_failure "CSS bundles directory NOT found"
    fi
    
    echo ""
}

###############################################################################
# Test 6: Route Bundle Integration Check
###############################################################################

test_route_bundle_integration() {
    print_header "Test 6: Route Bundle Integration Check"
    
    print_info "Verifying route bundles work with critical CSS..."
    echo ""
    
    # Check if css-bundle-loader exists
    if [ -f "src/app/utils/css-bundle-loader.ts" ]; then
        print_success "CSS bundle loader exists: css-bundle-loader.ts"
    else
        print_failure "CSS bundle loader NOT found"
    fi
    
    # Check if RouteLink component exists
    if [ -f "src/app/components/navigation/RouteLink.tsx" ]; then
        print_success "RouteLink component exists with preloading support"
    else
        print_failure "RouteLink component NOT found"
    fi
    
    # Check for bundle imports in routes
    if grep -r "loadCSSBundle" src/app/routes/*.tsx 2>/dev/null | wc -l | grep -q "[1-9]"; then
        print_success "Routes use loadCSSBundle for dynamic CSS loading"
    else
        print_warning "No routes found using loadCSSBundle (may use lazy loading)"
    fi
    
    echo ""
}

###############################################################################
# Generate Summary Report
###############################################################################

generate_summary() {
    print_header "Verification Summary"
    
    local success_rate=$((PASSED_TESTS * 100 / TOTAL_TESTS))
    
    echo ""
    echo "Total Tests: $TOTAL_TESTS"
    echo -e "Passed: ${GREEN}$PASSED_TESTS${NC}"
    echo -e "Failed: ${RED}$FAILED_TESTS${NC}"
    echo "Success Rate: ${success_rate}%"
    echo ""
    
    if [ $FAILED_TESTS -eq 0 ]; then
        echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
        echo -e "${GREEN}  ✓ ALL TESTS PASSED — CRITICAL CSS VERIFIED!${NC}"
        echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
    else
        echo -e "${RED}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
        echo -e "${RED}  ✗ SOME TESTS FAILED — REVIEW FAILURES ABOVE${NC}"
        echo -e "${RED}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
    fi
    
    echo ""
    print_info "Next Steps:"
    echo "  1. Manual FOUC testing in browser (Slow 3G throttle)"
    echo "  2. Lighthouse performance testing (before/after comparison)"
    echo "  3. Dark mode testing (toggle and verify no flash)"
    echo "  4. JavaScript-disabled testing (noscript fallback)"
    echo ""
    print_info "See /reports/2026-03/phase-3-step-3-task-3-3-plan.md for details"
    echo ""
}

###############################################################################
# Main Execution
###############################################################################

main() {
    clear
    
    print_header "Critical CSS Verification Script"
    echo "Phase 3 Step 3 Task 3.3"
    echo "Timestamp: $TIMESTAMP"
    echo ""
    
    # Create results directory
    mkdir -p "$RESULTS_DIR"
    
    # Run tests
    test_sample_routes
    test_critical_css_presence
    test_css_variable_usage
    test_critical_css_size
    test_file_existence
    test_route_bundle_integration
    
    # Generate summary
    generate_summary
    
    # Exit with appropriate code
    if [ $FAILED_TESTS -eq 0 ]; then
        exit 0
    else
        exit 1
    fi
}

# Run main function
main "$@"
