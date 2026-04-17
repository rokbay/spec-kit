# Tasks: Finatelier Production Readiness Cleanup

---

- [ ] **TASK-01** Delete `const Testimonials` component definition (lines 387–452 in App.tsx)
- [ ] **TASK-02** Delete `<Testimonials />` call from `App()` return block
- [ ] **TASK-03** Change "30-Sec Approval" h3 → "Fast Approval"; update body copy
- [ ] **TASK-04** Replace "99% Security" stat block → plain "Bank-grade Security" label
- [ ] **TASK-05** Change "24/7 Support" stat label → "Dedicated Support" or remove stat column
- [ ] **TASK-06** Replace `Process` section `<img>` (lh3.googleusercontent.com) → styled placeholder `<div>`
- [ ] **TASK-07** Replace 3× `Collection` product `<img>` tags → styled placeholder `<div>` blocks
- [ ] **TASK-08** Remove `Legal`, `Company`, `Support` footer link columns
- [ ] **TASK-09** Add single `"Terms & Privacy — Coming Soon"` line to footer
- [ ] **TASK-10** Remove `<Globe />` and `<Languages />` icon buttons from footer bottom bar
- [ ] **TASK-11** Audit and strip unused Lucide imports (`Quote`, `Globe`, `Languages`, `Monitor`, `CheckCircle2`)
- [ ] **TASK-12** Commit all changes with message: `"feat: production readiness cleanup — remove AI slop, dead links, and placeholder images"`
