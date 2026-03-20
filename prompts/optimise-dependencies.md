# Optimise Dependencies — Dependency Audit & Cleanup

**Type:** Sub-Trigger  
**Version:** 1.0.0  
**Created:** March 18, 2026  
**Status:** Active  
**Trigger:** `optimise dependencies`  
**Parent Orchestrator:** `optimise`  
**Repeatable:** Yes  
**Estimated Duration:** 35-40 minutes

---

## Purpose

Audit and optimize project dependencies by removing unused packages, finding duplicate dependencies, identifying heavy alternatives, and flagging update opportunities.

---

## Instructions

**Environment Reminder:** You are working inside **Figma Make**. Do NOT suggest browser refresh, cache clearing, or terminal commands.

---

## Audit Scope

### 1. Unused Dependencies

**Check `package.json` against actual imports:**
- Scan all `.tsx` and `.ts` files for `import` statements
- Compare against `dependencies` and `devDependencies`
- Flag packages never imported

### 2. Duplicate Dependencies

**Scan for:**
- Multiple versions of the same package (check `pnpm-lock.yaml` or similar)
- Similar packages providing same functionality (e.g., `date-fns` AND `moment`)

### 3. Heavy Dependencies

**Identify packages with large bundle impact:**
- Packages > 100KB
- Check for lighter alternatives
- Consider tree-shaking optimization

**Examples:**
- `moment` (heavy) → `date-fns` (lighter) → native `Intl` (lightest)
- `lodash` (heavy) → `lodash-es` (tree-shakeable)

### 4. Dependency Updates

**Check for:**
- Security vulnerabilities
- Breaking changes in major versions
- Performance improvements in newer versions

---

## Success Metrics

| Metric | Target |
|---|---|
| Unused dependencies | 0 |
| Duplicate dependencies | 0 |
| Heavy dependencies | Document alternatives |
| Outdated dependencies | < 6 months old |

---

**Prompt Location:** `/prompts/optimise-dependencies.md`  
**Category:** Optimisation  
**Difficulty:** Medium  
**Estimated Duration:** 35-40 minutes
