# Strategy Audit Orchestration — Quick Start Guide

**Created:** February 25, 2026  
**Version:** 1.0  
**Purpose:** Fast-track guide to executing the 9-audit sequence

---

## ⚡ 5-Minute Setup

### Step 1: Read the Orchestrator (5 min)
**Read:** `/prompts/strategy-audit/00-ORCHESTRATOR-EXECUTE-ALL-AUDITS.md`

This gives you:
- Complete mission context
- Reference file inventory (17 strategy files)
- 9-audit workflow overview
- Expected outputs and quality gates

### Step 2: Verify Scaffolding (30 sec)
**Check these directories exist:**
- `/guidelines/strategy/` — 17 reference files ✅
- `/prompts/strategy-audit/` — 9 prompts + orchestrator ✅
- `/reports/2026-02/strategy-audit/` — Empty (will populate) 📝
- `/tasks/strategy-evolution/` — Empty (will populate after reports) 📝

### Step 3: Start Execution (begin)
**Open:** `/prompts/strategy-audit/01-ia-and-navigation-audit.md`  
**Execute:** Follow the instructions  
**Save:** Report to `/reports/2026-02/strategy-audit/01-ia-and-navigation-audit.md`

---

## 🔄 Execution Loop (Repeat 9 Times)

For each of the 9 prompts:

```bash
1. Open prompt NN-*.md
2. Read reference files listed in "Context" section
3. Execute audit steps sequentially
4. Generate report following the format template
5. Save to /reports/2026-02/strategy-audit/NN-*.md
6. Review for completeness
7. Mark as COMPLETE in tracking table
8. Move to next prompt
```

**DO NOT skip ahead. Execute sequentially.**

---

## 📋 Prompt Sequence Checklist

Copy this checklist and track your progress:

### Phase 1: Current State Analysis
- [ ] **Prompt 01:** IA and Navigation Audit → Report saved
- [ ] **Prompt 02:** Positioning and Messaging Audit → Report saved
- [ ] **Prompt 03:** Design System Token Audit → Report saved
- [ ] **Prompt 04:** Block and Pattern Coverage Audit → Report saved

### Phase 2: Strategic Gap Analysis
- [ ] **Prompt 05:** Content Gap and Page Inventory → Report saved
- [ ] **Prompt 06:** Authority and Proof Placement Audit → Report saved
- [ ] **Prompt 07:** Voice, Tone, and AEO Audit → Report saved

### Phase 3: Engineering Standards
- [ ] **Prompt 08:** Performance and Accessibility Audit → Report saved
- [ ] **Prompt 09:** Launch Readiness Assessment → Report saved

### After All Reports
- [ ] **Generate task lists** in `/tasks/strategy-evolution/`
- [ ] **Review dependencies** between task phases
- [ ] **Define critical path** for launch
- [ ] **Estimate effort** for each phase

---

## 📊 Expected Timeline

| Phase | Audits | Estimated Time | Output |
|-------|--------|----------------|--------|
| Phase 1 | 01-04 | 2-3 hours | 4 reports |
| Phase 2 | 05-07 | 1.5-2 hours | 3 reports |
| Phase 3 | 08-09 | 1-1.5 hours | 2 reports |
| **Total** | **9 audits** | **4.5-6.5 hours** | **9 reports** |
| Task Lists | — | 1-2 hours | 8 task lists |
| **Grand Total** | **—** | **5.5-8.5 hours** | **Complete strategy** |

---

## 🎯 What Each Audit Produces

| Audit | Key Output | Feeds Into |
|-------|-----------|------------|
| 01 — IA/Nav | Route mapping, URL redirects | Task Phase 2 (IA) |
| 02 — Positioning | Messaging gaps, CTA audit | Task Phase 4 (Content) |
| 03 — Tokens | CSS variable compliance | Task Phase 3 (Design System) |
| 04 — Patterns | Pattern coverage gaps | Task Phase 5 (Patterns) |
| 05 — Content Gap | Missing pages list | Task Phase 2 (IA), Phase 4 (Content) |
| 06 — Proof | Proof placement strategy | Task Phase 6 (Conversion) |
| 07 — Voice/AEO | AI readiness assessment | Task Phase 8 (AEO/Schema) |
| 08 — Performance | CWV audit, a11y gaps | Task Phase 7 (Performance) |
| 09 — Launch | Blocker identification | Task Phase 1 (Critical) |

---

## 🚨 Common Pitfalls to Avoid

### ❌ DON'T:
- Skip ahead to Prompt 05 before completing Prompts 01-04
- Generate reports without reading reference files
- Save reports outside `/reports/2026-02/strategy-audit/`
- Generate task lists before all 9 reports are complete
- Assume findings without auditing codebase

### ✅ DO:
- Execute prompts sequentially
- Read ALL reference files listed in each prompt
- Save reports with exact filename format: `NN-*.md`
- Review each report before proceeding
- Document blockers and gaps clearly
- Wait until Report 09 is complete before generating task lists

---

## 🔍 Validation Checklist

Before moving to the next prompt, verify:

- [ ] Report follows the format template in the prompt
- [ ] All tables are complete (no placeholder text)
- [ ] Executive summary is 2-3 sentences
- [ ] Priority actions are ranked by impact
- [ ] Report is saved to correct location
- [ ] Filename matches format: `NN-[audit-name].md`

---

## 📞 Troubleshooting

### "Reference file not found"
**Solution:** Check `/guidelines/strategy/` — file may be misnamed. Document gap in report.

### "Not sure what to audit"
**Solution:** Re-read the "Key Questions" section in the prompt. Each prompt has specific focus.

### "Report is too long"
**Solution:** Use tables to condense data. Keep Executive Summary to 2-3 sentences max.

### "Audit reveals missing strategy"
**Solution:** Document as blocker in Priority Actions. Flag for creation before continuing.

---

## 🎬 Ready to Start?

1. **Read:** `/prompts/strategy-audit/00-ORCHESTRATOR-EXECUTE-ALL-AUDITS.md` (5 min)
2. **Open:** `/prompts/strategy-audit/01-ia-and-navigation-audit.md`
3. **Execute:** Follow the instructions
4. **Save:** `/reports/2026-02/strategy-audit/01-ia-and-navigation-audit.md`
5. **Review:** Validate completeness
6. **Proceed:** Move to Prompt 02

**Time to first report: ~30-45 minutes**

---

## 📈 Success Indicators

You'll know the orchestration is working when:

1. **Reports are consistent** — All follow the same format
2. **Findings are specific** — Concrete gaps, not vague observations
3. **Actions are prioritized** — High/medium/low impact clearly ranked
4. **Dependencies are clear** — You can see how audits build on each other
5. **Gaps are documented** — Missing elements clearly identified
6. **Timeline is realistic** — Task estimates are grounded in findings

---

## 🏆 Final Deliverables

After completing all 9 prompts and generating task lists, you will have:

✅ **9 audit reports** — Complete current state analysis  
✅ **8 task lists** — Prioritized implementation roadmap  
✅ **Clear critical path** — Launch blockers identified  
✅ **Effort estimates** — Hours/days for each phase  
✅ **Dependency map** — What must complete before what  
✅ **Strategic alignment** — Blueprint → Prototype validation complete  

---

**Ready? Open Prompt 01 and begin.**

**Questions? Re-read the orchestrator: `00-ORCHESTRATOR-EXECUTE-ALL-AUDITS.md`**
