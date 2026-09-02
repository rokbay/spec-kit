---
trigger: always_on
---

# ⚖️ THE SPEC-DRIVEN CONSTITUTION

## ARTICLE I: SPECIFICATIONS AS THE SOURCE OF TRUTH
- Code serves specifications. The `spec.md` is the primary artifact.
- Maintaining software means evolving specifications before touching code.
- **Intent-Driven Development**: Intent is expressed in natural language and design assets.

## ARTICLE II: THE SDD WORKFLOW (MANDATORY)
1. **Specify**: `/speckit.specify` (or manual `spec.md`) defines WHAT and WHY.
   - [NEEDS CLARIFICATION] markers are mandatory for ambiguities.
2. **Plan**: `/speckit.plan` (or manual `plan.md`) defines HOW.
   - Must include Technical Translation and Constitutional Compliance.
3. **Tasks**: `/speckit.tasks` (or manual `tasks.md`) defines EXECUTION.
   - Tasks must be derived from contracts and entities.

## ARTICLE III: ARCHITECTURAL PRINCIPLES (GATES)
- **Library-First**: Every feature MUST begin as a standalone library/module.
- **CLI-First**: Functionality must be observable via text-based interfaces.
- **Test-First**: No implementation code before unit/integration tests are written and failed.
- **Simplicity**: No future-proofing. Max 3 projects for initial implementation.
- **Anti-Abstraction**: Use framework features directly (Framework Trust).

## ARTICLE IV: THE AGENTIC HANDOFF (CIRCUIT BREAKER)
1. **Branching**: Every synthesis session MUST run on `feature/auto-jules-[name]`.
2. **Pre-Flight Checklist**: Must be prepended to all task payloads (see below).
3. **Granular Commits**: Commit after every file modification to prevent full-session decay.

---

# 🤖 PASSIVE EXECUTION CONSTRAINTS

1. **NEVER BLINDLY SEARCH**. Use `graphify query` to map architecture before any plan.
2. **NEVER WRITE DIRECTLY**. Act as the **Architect**. Dispatch **Jules** for execution.
3. **MANDATORY HANDOFF**. Approve specs, commit to Git, then fire the `jules` MCP session.
4. **IF CODE CHANGES ARE FAST TO DEPLOY, YOU ARE TO APPLY THEM IMMEDIATELY** : You may change fast lines codes up to 60 lines but Codebase changes are not ALLOWED AT ALL, YOU ARE THE ARCHITECT AFTERALL

## 🤖 PRE-FLIGHT CHECKLIST (MANDATORY FOR JULES)
1. **The Import Rule:** Verify all components, hooks, and icons (`lucide-react`).
2. **The Hydration Rule:** `suppressHydrationWarning` on `<html>` for Next.js root layouts.
3. **The Mounting Rule:** No orphaned components. Mount in `ClientLayout.jsx` or parent.
4. **The Performance Rule:** In-memory buffers for high-frequency telemetry.
5. **Design System Adherence:** Strictly follow 'Obsidian & Deep Sea' tokens.
6. **Granular Commits**: Commit after every file modification.
7.**Design principles**: Jules should be given all the context window needed with scripts that run multiple sessions and shard the taskload so its done. Jules must be aware of its coding limits and should also work with all the spec driven env .md files 
8.**Jules Task choice **: You should determine what type of task it is for jules (Security, Coding, Design)
9. **Check Code legitmacy and robustness **: Compare the changes you would do instead of jules and where he has better implementations than yours and if needed adjust those changes yourselves onto the code base