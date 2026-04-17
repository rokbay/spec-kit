# Tasks: Finatelier v2 — Production Quality, Market Fit & Security

## Phase 1 — Application Form (REQ-01 + REQ-06)
- [ ] **TASK-01** Add `useState` hooks for `fullName`, `phone`, `productInterest`, `honeypot`, `formError`, `cooldown` to `ApplicationForm`
- [ ] **TASK-02** Implement `validateForm()`: Unicode name regex, Egyptian phone regex (`/^(\+20|0)(10|11|12|15)[0-9]{8}$/`), enum check for productInterest
- [ ] **TASK-03** Implement `handleSubmit`: honeypot guard → cooldown guard → validate → `encodeURIComponent` → `window.open` WhatsApp URL → start 60s cooldown
- [ ] **TASK-04** Add `useEffect` cooldown timer (1s interval, auto-clears)
- [ ] **TASK-05** Wire all form inputs to their respective state handlers (`onChange`)
- [ ] **TASK-06** Add honeypot `<input type="text" name="website" style={{display:'none'}} tabIndex={-1} autoComplete="off" />`
- [ ] **TASK-07** Disable submit button when `cooldown > 0`; show `"Please wait ${cooldown}s"` label
- [ ] **TASK-08** Show inline `formError` message above submit button when validation fails
- [ ] **TASK-09** Wire left-column WhatsApp button as `<a href="https://wa.me/[NUMBER]" target="_blank" rel="noopener noreferrer">`
- [ ] **TASK-10** Add legal disclosure line below submit button: `"By submitting, you consent to being contacted via WhatsApp by a FinAtelier representative."`

## Phase 2 — Mobile Navigation (REQ-02)
- [ ] **TASK-11** Add `menuOpen` state and `setMenuOpen` to `Navbar`
- [ ] **TASK-12** Wire `<Menu>` icon `onClick` to toggle `menuOpen`
- [ ] **TASK-13** Render conditional mobile dropdown with nav links; each link closes menu on click

## Phase 3 — Egypt Localization (REQ-03)
- [ ] **TASK-14** Replace `$45/mo` → `EGP 1,400/mo`, `$30/mo` → `EGP 925/mo`, `$55/mo` → `EGP 1,700/mo` in Collection array
- [ ] **TASK-15** Update Hero subheadline to Egypt-specific copy
- [ ] **TASK-16** Update form phone placeholder to `+20 10 0000 0000`
- [ ] **TASK-17** Update footer copyright to `© 2025 FinAtelier Egypt.`

## Phase 4 — SEO + Security Headers (REQ-04 + REQ-06-D)
- [ ] **TASK-18** Add `<title>FinAtelier Egypt — Buy Now, Pay Later in 4 Installments</title>` to `index.html`
- [ ] **TASK-19** Add `<meta name="description">` with Egypt-specific content to `index.html`
- [ ] **TASK-20** Add Open Graph meta tags (`og:title`, `og:description`, `og:type`) to `index.html`
- [ ] **TASK-21** Add `Content-Security-Policy` meta tag to `index.html` blocking external scripts and unauthorized data connections

## Phase 5 — Dependency Cleanup (REQ-05)
- [ ] **TASK-22** Remove `@google/genai` from `package.json` dependencies
- [ ] **TASK-23** Move `express` and `dotenv` from `dependencies` to `devDependencies`
- [ ] **TASK-24** Run `npm install` to update lockfile

## Commit
- [ ] **TASK-25** Commit: `"feat: v2 production hardening — functional form, mobile nav, Egypt localization, SEO, security"`
