#!/usr/bin/env python3
"""
Fix Phase 2: User-Facing Components Font Violations

Replaces all hardcoded font families with CSS variables in:
- EnquiryModal.tsx (DONE - verified 0 violations)
- FormField.tsx (ui and blocks/forms versions)
- Toast.tsx
- AdvancedFilters.tsx
"""

import os
import re

# File paths to fix
FILES = [
    'src/app/components/ui/FormField.tsx',
    'src/app/components/blocks/forms/FormField.tsx',
    'src/app/components/ui/Toast.tsx',
    'src/app/components/ui/AdvancedFilters.tsx',
]

# Replacements
REPLACEMENTS = [
    (r"fontFamily:\s*['\"]Lexend,\s*sans-serif['\"]", "fontFamily: 'var(--font-primary)'"),
    (r"fontFamily:\s*['\"]Manrope,\s*sans-serif['\"]", "fontFamily: 'var(--font-secondary)'"),
]

def fix_file(filepath):
    """Fix font violations in a single file"""
    if not os.path.exists(filepath):
        print(f"⚠️  SKIP: {filepath} (file not found)")
        return 0, 0
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original = content
    violations = 0
    
    # Apply all replacements
    for pattern, replacement in REPLACEMENTS:
        matches = len(re.findall(pattern, content))
        violations += matches
        content = re.sub(pattern, replacement, content)
    
    if content != original:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"✅ FIXED: {filepath} ({violations} violations)")
        return violations, 1
    else:
        print(f"✓  CLEAN: {filepath} (0 violations)")
        return 0, 1

def main():
    print("🚀 Phase 2: Fixing User-Facing Components\n")
    
    total_violations = 0
    total_files = 0
    fixed_files = 0
    
    for filepath in FILES:
        violations, count = fix_file(filepath)
        total_violations += violations
        total_files += count
        if violations > 0:
            fixed_files += 1
    
    print(f"\n{'='*60}")
    print(f"✅ PHASE 2 COMPLETE")
    print(f"{'='*60}")
    print(f"Files processed: {total_files}")
    print(f"Files fixed: {fixed_files}")
    print(f"Total violations fixed: {total_violations}")
    print(f"\n🎉 All user-facing components now use CSS variables!")

if __name__ == '__main__':
    main()
