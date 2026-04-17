# Spec: Finatelier Production Readiness Cleanup

## Problem Statement
The current `web2/finatelier` site contains several AI-generated placeholder elements that undermine brand credibility and trust — the core asset for a fintech product. These must be removed before any public-facing deployment.

## Goals
1. Remove all fake social proof (testimonials, fabricated user names/photos, placeholder brand logos).
2. Neutralize or remove unsubstantiated performance claims that could constitute misleading advertising.
3. Replace all externally-hosted AI-generated images with locally controlled assets.
4. Clean the footer and navigation to reflect only real, navigable content.

## Out of Scope
- Redesigning the visual system (Bento grid, color tokens, typography).
- Adding new features or sections.
- Backend/API work.

---

## Requirements

### REQ-01: Remove Testimonials Section
- **What:** Delete the entire `<Testimonials />` component and its call in `App()`.
- **Why:** Contains fabricated users ("Marcus Sterling", "Elena Rodriguez"), AI-generated avatars from `lh3.googleusercontent.com`, and fake brand logos (SECUREPAY, TECH TRUST, etc.). This is the textbook definition of AI slop and damages trust in a fintech context.
- **Acceptance:** No testimonial cards, no fake brand logos, and no placeholder avatar images exist anywhere in the rendered output.

### REQ-02: Neutralize Unsubstantiated Claims
- **What:** Audit all hardcoded marketing copy and statistics.
- **Specific targets:**
  - `"30-Sec Approval"` → change to `"Fast Approval"` — no startup can guarantee a hard SLA without legal liability.
  - `"99% Security"` stat in Benefits bento card → remove the number; replace with a plain statement like `"Bank-grade Security"`.
  - `"24/7 Support"` → change to `"Dedicated Support"`.
- **Why:** Fabricated performance metrics are FCA/regulatory red flags for a fintech product.
- **Acceptance:** No hardcoded percentage or time-based guarantee exists without a real backing mechanism.

### REQ-03: Replace External Placeholder Images
- **What:** All `src` attributes pointing to `lh3.googleusercontent.com/aida-public/...` must be replaced.
- **Target files:** `Process` section hero image and all three `Collection` product images.
- **Resolution:** Use solid-color placeholder `<div>` blocks styled with Tailwind until real assets are provided. No third-party image generation services.
- **Acceptance:** No `lh3.googleusercontent.com` URLs exist in the build.

### REQ-04: Audit Navigation & Footer Dead Links
- **What:** All `href="#"` dead links in the `Footer` must either link to a real on-page anchor or be removed.
- **Specific targets:** Terms, Privacy, Regulatory, Careers, About Us, Help Center, FAQs — none have real pages.
- **Resolution:** Remove all dead links. Keep only `Benefits` and `Process` anchors. Add a single line: `"Terms & Privacy — Coming Soon"`.
- **Acceptance:** Zero `href="#"` dead links exist in the footer.

### REQ-05: Remove Unused Lucide Icon Imports
- **What:** After removing Testimonials, `Quote`, `Globe`, `Languages`, `Monitor`, `CheckCircle2` may be unused.
- **Resolution:** Remove any icon not referenced in the remaining JSX.
- **Acceptance:** No unused imports remain (prevents lint warnings in CI).

---

## Constraints
- Do not alter any CSS custom properties, Tailwind config, or the Bento design system.
- Do not alter any JSX comments already in the file.
- The `ApplicationForm` section and its WhatsApp button must remain untouched.
