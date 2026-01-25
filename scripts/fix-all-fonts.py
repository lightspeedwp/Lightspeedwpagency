#!/usr/bin/env python3

"""
Fix Font Variables Script - Python Version

Purpose: Replace hardcoded font families with CSS variables across all TypeScript files

Changes:
- fontFamily: 'Lexend, sans-serif' → fontFamily: 'var(--font-primary)'
- fontFamily: 'Manrope, sans-serif' → fontFamily: 'var(--font-secondary)'
- fontFamily: "Lexend, sans-serif" → fontFamily: 'var(--font-primary)'
- fontFamily: "Manrope, sans-serif" → fontFamily: 'var(--font-secondary)'

Usage:
    python3 scripts/fix-all-fonts.py

Created: 2025-01-19
"""

import os
import re
from pathlib import Path
from typing import List, Tuple

# ANSI color codes
class Colors:
    BLUE = '\033[0;34m'
    GREEN = '\033[0;32m'
    YELLOW = '\033[1;33m'
    RED = '\033[0;31m'
    NC = '\033[0m'  # No Color

# Directories to search
SEARCH_DIRS = [
    'src/app/components/templates',
    'src/app/components/patterns',
    'src/app/components/parts',
    'src/app/components/common',
    'src/app/components/ui',
    'src/app/components/blocks',
]

# Replacement patterns
REPLACEMENTS = [
    # Single quotes
    (r"fontFamily:\s*'Lexend[^']*'", "fontFamily: 'var(--font-primary)'"),
    (r"fontFamily:\s*'Manrope[^']*'", "fontFamily: 'var(--font-secondary)'"),
    # Double quotes
    (r'fontFamily:\s*"Lexend[^"]*"', "fontFamily: 'var(--font-primary)'"),
    (r'fontFamily:\s*"Manrope[^"]*"', "fontFamily: 'var(--font-secondary)'"),
]

def print_header():
    """Print script header"""
    print(f"{Colors.BLUE}╔════════════════════════════════════════════════════════════════╗{Colors.NC}")
    print(f"{Colors.BLUE}║  LSX Design — Font Variables Fix Script (Python)              ║{Colors.NC}")
    print(f"{Colors.BLUE}╚════════════════════════════════════════════════════════════════╝{Colors.NC}")
    print()

def fix_file(file_path: Path) -> Tuple[int, bool]:
    """
    Fix hardcoded fonts in a single file
    
    Returns:
        Tuple of (number_of_replacements, file_was_modified)
    """
    try:
        # Read file content
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        total_replacements = 0
        
        # Apply all replacement patterns
        for pattern, replacement in REPLACEMENTS:
            matches = len(re.findall(pattern, content))
            if matches > 0:
                content = re.sub(pattern, replacement, content)
                total_replacements += matches
        
        # Write back if changed
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            return (total_replacements, True)
        
        return (0, False)
    
    except Exception as e:
        print(f"{Colors.RED}  ❌ Error processing {file_path}: {e}{Colors.NC}")
        return (0, False)

def main():
    """Main execution function"""
    print_header()
    
    total_files_scanned = 0
    total_files_fixed = 0
    total_replacements = 0
    
    # Process each directory
    for search_dir in SEARCH_DIRS:
        dir_path = Path(search_dir)
        
        if not dir_path.exists():
            print(f"{Colors.YELLOW}⚠️  Directory not found: {search_dir}{Colors.NC}")
            continue
        
        print(f"{Colors.BLUE}📁 Scanning: {search_dir}{Colors.NC}")
        
        # Find all .tsx files
        tsx_files = list(dir_path.rglob('*.tsx'))
        
        for file_path in tsx_files:
            total_files_scanned += 1
            replacements, was_modified = fix_file(file_path)
            
            if was_modified:
                total_files_fixed += 1
                total_replacements += replacements
                print(f"{Colors.GREEN}  ✅ Fixed: {file_path.name} ({replacements} replacements){Colors.NC}")
        
        print()
    
    # Print summary
    print(f"{Colors.BLUE}╔════════════════════════════════════════════════════════════════╗{Colors.NC}")
    print(f"{Colors.BLUE}║  Summary                                                       ║{Colors.NC}")
    print(f"{Colors.BLUE}╚════════════════════════════════════════════════════════════════╝{Colors.NC}")
    print(f"{Colors.GREEN}✅ Files scanned: {total_files_scanned}{Colors.NC}")
    print(f"{Colors.GREEN}✅ Files fixed: {total_files_fixed}{Colors.NC}")
    print(f"{Colors.GREEN}✅ Total replacements: {total_replacements}{Colors.NC}")
    print()
    print(f"{Colors.BLUE}📝 Changes made:{Colors.NC}")
    print(f"{Colors.BLUE}   • fontFamily: 'Lexend, sans-serif' → fontFamily: 'var(--font-primary)'{Colors.NC}")
    print(f"{Colors.BLUE}   • fontFamily: 'Manrope, sans-serif' → fontFamily: 'var(--font-secondary)'{Colors.NC}")
    print()
    
    if total_files_fixed > 0:
        print(f"{Colors.GREEN}🎉 Font variables fix complete!{Colors.NC}")
    else:
        print(f"{Colors.YELLOW}ℹ️  No files needed fixing.{Colors.NC}")

if __name__ == '__main__':
    main()
