# Plan: Finatelier Production Readiness Cleanup

## Summary
Structured implementation plan derived from `spec.md`. Work is sequenced to minimize risk: deletions first, then copy edits, then image replacements, then link cleanup, then import hygiene.

---

## Phase 1 — Delete the Testimonials Component (REQ-01)

### Step 1.1 — Remove the component definition
Delete lines 387–452 (`const Testimonials = ...`) from `web2/finatelier/src/App.tsx`.

### Step 1.2 — Remove the component call
Delete `<Testimonials />` from the `App()` return block.

**Risk:** None. Pure deletion.

---

## Phase 2 — Neutralize Unsubstantiated Claims (REQ-02)

### Step 2.1 — "30-Sec Approval" → "Fast Approval"
In `Benefits`, Bento Card 3: change `h3` from `"30-Sec Approval"` to `"Fast Approval"` and update the `p` to `"Our decisioning engine gets you shopping quickly."`.

### Step 2.2 — "99% Security" stat
In `Benefits`, Bento Card 5: remove the `99%` and `Security` pair entirely. Replace the two-column stat layout with a single clean label: `"Bank-grade Security"`.

### Step 2.3 — "24/7 Support" stat
In the same bento card: change `24/7` label to `"Dedicated Support"` or remove the stat entirely if layout allows without orphan dividers.

**Risk:** Low. Text-only edits. Must verify the vertical divider renders correctly after removing a stat column.

---

## Phase 3 — Replace External Images (REQ-03)

### Step 3.1 — Process section hero image
Replace the `<img>` tag on line ~225 (the home-setup image in `Process`) with a styled placeholder `<div>`:
```jsx
<div className="w-full h-[500px] rounded-[24px] bg-surface-container-high flex items-center justify-center text-on-surface-variant text-sm tracking-widest uppercase font-bold">
  [Photo Coming Soon]
</div>
```

### Step 3.2 — Collection product images
Replace each of the 3 `<img>` tags inside the `Collection` grid with styled placeholder `<div>` blocks using distinct background tones (e.g., `bg-stone-100`, `bg-stone-200`, `bg-stone-300`) to preserve visual hierarchy.

**Risk:** Low. No functional or layout impact. The aspect-ratio wrapper `aspect-[4/5]` remains.

---

## Phase 4 — Footer Dead Link Cleanup (REQ-04)

### Step 4.1 — Remove dead link columns
From the `Footer` grid, remove the full column objects for: `Legal`, `Company`, `Support`. Retain only the `Platform` column with anchors to `#benefits` and `#process`.

### Step 4.2 — Add legal placeholder line
Below the remaining footer nav, add a single `<p>` line:
```jsx
<p className="text-[10px] text-on-surface-variant">Terms & Privacy — Coming Soon</p>
```

### Step 4.3 — Remove Globe & Languages icons
Remove the `<Globe />` and `<Languages />` icon buttons from the footer bottom bar since they have no real functionality.

**Risk:** Low. Visual simplification.

---

## Phase 5 — Import Hygiene (REQ-05)

### Step 5.1 — Audit and remove unused Lucide imports
After all deletions, scan the import list for: `Quote`, `Globe`, `Languages`, `Monitor`, `CheckCircle2`, `MessageCircle` (if WhatsApp button uses text only).
Remove any that are not referenced in the remaining JSX.

**Risk:** Minimal. Standard lint cleanup.

---

## Execution Order

| Phase | Change | Dependency |
|---|---|---|
| 1 | Delete Testimonials | None |
| 2 | Fix copy claims | None |
| 3 | Replace images | None |
| 4 | Footer cleanup | None |
| 5 | Import cleanup | After 1, 3, 4 |

Phases 1–4 are independent and can be parallelised by Jules and Antigravity. Phase 5 must run last.
