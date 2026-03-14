# LSX Design -- Continue Next Task

**Category:** Utilities
**Version:** 1.0
**Created:** March 13, 2026
**Status:** Production
**Reusable:** Yes -- use to resume work in any new session
**Estimated Duration:** Varies by task

---

## Purpose

A minimal, generic prompt to resume work from where you left off. The AI reads the task tracker, identifies the next priority item, and executes it. Paste as-is into a new session.

---

## The Prompt

Copy everything below this line and paste it into a new session:

---

# Continue -- Next Task

Read `/guidelines/Guidelines.md` for project rules, then:

1. **Read** `/tasks/task-list.md` -- find the first unchecked (`- [ ]`) task under "Open Tasks" or "Active/Next Tasks"
2. **If task-list.md has no open tasks**, read `/tasks/master-task-list.md` for the next priority work item
3. **If the task references another file** (e.g., an orchestrator in `/prompts/`), read that file for full instructions
4. **Execute** the task following all project guidelines:
   - Use CSS variables from the design system (never hardcode values)
   - Use only font faces defined in the CSS
   - Use `@phosphor-icons/react` for all icons (never `lucide-react`)
   - Use `react-router` (never `react-router-dom`)
   - Never delete existing service pages
5. **When complete**, update `/tasks/task-list.md`:
   - Mark the task `[x]` with today's date
   - Add any follow-up tasks discovered
   - Update "Last Updated" date
6. **Report** what was done and what the next task would be

## Design System Context

I've updated the tailwind css and /styles/global.css file to include colors, spacing, borders, radius and typography from my teams design system.
- Make sure all UI being generated uses these variables from the css, so that the generation adheres to my design system and the user has ability to update the styling by updating the css.
- For typography ONLY use the font faces defined in the css for all generated text.
