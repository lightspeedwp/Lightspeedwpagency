# 📚 Prompts Directory — Quick Reference

**Purpose:** Reusable AI prompts for LSX Design prototype maintenance and validation  
**Location:** `/guidelines/prompts/`

---

## 📋 **AVAILABLE PROMPTS**

### **1. Prototype Validation Prompt** ⭐⭐⭐⭐⭐
**File:** `2025-01-19-prototype-validation-prompt.md`  
**Use case:** Comprehensive system validation  
**Duration:** 45-60 minutes  
**Checks:**
- Import errors
- Routing coverage
- Design system compliance
- Navigation integrity
- Font usage
- Export consistency

**When to use:**
- After major changes
- Before deployment
- Monthly system health checks
- When navigation seems broken
- After adding new templates

---

## 🚀 **QUICK START GUIDE**

### **Step 1: Choose Your Prompt**
```bash
# Navigate to prompts directory
cd /guidelines/prompts/

# View available prompts
ls -la

# Read a prompt
cat 2025-01-19-prototype-validation-prompt.md
```

### **Step 2: Copy the Prompt**
1. Open the prompt file
2. Find the **"MASTER VALIDATION PROMPT"** section
3. Copy everything inside the code block (```markdown ... ```)
4. Paste into your AI assistant

### **Step 3: Wait for Analysis**
- AI will read guidelines automatically
- Analysis takes 45-60 minutes
- Reports will be generated in `/reports/2025-01/validation/`

### **Step 4: Review Results**
```bash
# Navigate to validation reports
cd /reports/2025-01/validation/

# View executive summary
cat validation-summary.md

# View specific reports
cat import-errors-report.md
cat routing-audit-report.md
cat design-system-compliance.md
```

### **Step 5: Fix Issues**
1. Start with **CRITICAL** issues (red flags)
2. Move to **WARNINGS** (yellow flags)
3. Optionally apply **IMPROVEMENTS** (green flags)

---

## 📂 **PROMPT NAMING CONVENTION**

All prompts follow this pattern:
```
YYYY-MM-DD-{category}-{description}-prompt.md
```

**Examples:**
- `2025-01-19-prototype-validation-prompt.md`
- `2025-01-20-component-creation-prompt.md`
- `2025-01-21-design-system-audit-prompt.md`

**Categories:**
- `prototype` — System-wide validation
- `component` — Component generation
- `design-system` — Design token audits
- `migration` — CSS/system migrations
- `optimization` — Performance improvements
- `templates` — Template creation
- `utilities` — Utility generation
- `documentation` — Doc generation

---

## 🎯 **PROMPT TEMPLATE STRUCTURE**

Every prompt should include:

1. **Header** — Date, purpose, category
2. **Objectives** — What will be validated/generated
3. **Guidelines Reference** — Required reading order
4. **Tasks** — Step-by-step actions
5. **Output Format** — Expected deliverables
6. **Checklist** — Validation criteria
7. **Common Issues** — Known problems & fixes
8. **Next Steps** — What to do after completion

---

## 📊 **VALIDATION REPORTS STRUCTURE**

Reports are organized by month:
```
/reports/
  └── 2025-01/
      ├── validation/          # System validation reports
      ├── routing/             # Routing audits
      ├── design-system/       # Design system compliance
      ├── performance/         # Performance reports
      └── accessibility/       # WCAG compliance reports
```

---

## 🔧 **CREATING NEW PROMPTS**

### **Template Structure:**
```markdown
# 🎯 [Prompt Title]

**Date:** YYYY-MM-DD  
**Purpose:** [Brief description]  
**Category:** [Category name]

---

## 📋 **OBJECTIVES**
[List what this prompt will accomplish]

---

## 🎯 **MASTER PROMPT**

\`\`\`markdown
[Your prompt content here]

## CRITICAL GUIDELINES TO FOLLOW:
1. Read `/guidelines/Guidelines.md`
2. Read category-specific guidelines
3. Follow design system rules

## TASKS:
[Step-by-step instructions]

## OUTPUT FORMAT:
[Expected deliverables]

## CHECKLIST:
- [ ] Item 1
- [ ] Item 2
\`\`\`

---

## 📚 **RELATED GUIDELINES**
- Link to relevant guidelines

---

**End of Prompt**
```

### **Save Location:**
```bash
/guidelines/prompts/YYYY-MM-DD-{category}-{description}-prompt.md
```

---

## 💡 **BEST PRACTICES**

### **DO:**
- ✅ Include date in filename (YYYY-MM-DD)
- ✅ Reference specific guideline files
- ✅ Provide expected output format
- ✅ Include validation checklist
- ✅ List common issues & fixes
- ✅ Specify estimated duration
- ✅ Use clear section headers

### **DON'T:**
- ❌ Make prompts too general
- ❌ Skip guideline references
- ❌ Forget output format
- ❌ Omit validation criteria
- ❌ Use vague instructions

---

## 🔍 **CURRENT PROMPTS INVENTORY**

| Prompt | Date | Status | Use Case |
|--------|------|--------|----------|
| **Prototype Validation** | 2025-01-19 | ✅ Active | System-wide validation |

**Total prompts:** 1  
**Last updated:** 2025-01-19

---

## 📖 **RELATED DOCUMENTATION**

- **[Guidelines.md](../Guidelines.md)** — Master guidelines
- **[prompt-generation-guidelines.md](./prompt-generation-guidelines.md)** — How to write prompts
- **[reporting-guidelines.md](../reporting/reporting-guidelines.md)** — Report standards

---

## 🚀 **QUICK COMMANDS**

### **List All Prompts:**
```bash
ls -la /guidelines/prompts/*.md
```

### **Search Prompts by Keyword:**
```bash
grep -r "validation" /guidelines/prompts/
```

### **Count Total Prompts:**
```bash
ls /guidelines/prompts/*-prompt.md | wc -l
```

### **View Latest Prompt:**
```bash
ls -t /guidelines/prompts/*-prompt.md | head -1
```

---

**Created:** 2025-01-19  
**Last Updated:** 2025-01-19  
**Maintainer:** LSX Design System Team  
**Status:** Active
