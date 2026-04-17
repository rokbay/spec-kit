# Spec: Finatelier v2 — Production Quality, Market Fit & Security Hardening

## Context
FinAtelier is a fintech installment-payment landing page targeting the Egyptian consumer market. The primary conversion action is submitting an application (via WhatsApp or form). After the AI slop cleanup, the site is structurally clean but functionally incomplete and not yet deployable to production.

## Goals
1. Make the application form functionally complete with a real submission path.
2. Fix broken mobile navigation.
3. Localize all copy and pricing to the EGP / Egypt market.
4. Implement SEO fundamentals.
5. Harden all user-facing inputs against security threats specific to fintech + WhatsApp redirect flows.
6. Remove dead dependencies from `package.json`.

---

## Requirements

### REQ-01: Functional Application Form with WhatsApp Submission
- The form in `<ApplicationForm />` currently has `onSubmit={(e) => e.preventDefault()}` — it does nothing.
- Wire React `useState` hooks for `fullName`, `phone`, `productInterest`.
- On submit, validate all fields (see REQ-06 for security rules), then open:
  `https://wa.me/[NUMBER]?text=...` with a pre-filled, URL-encoded message containing the form data.
- The phone field must default to Egyptian format placeholder: `+20 10 0000 0000`.
- The WhatsApp button in the left column must also be wired to the same number.
- **Acceptance:** Submitting the form opens WhatsApp with a correctly formatted message. Invalid inputs show inline error messages without submitting.

### REQ-02: Functional Mobile Navigation Menu
- The `<Menu>` icon in `<Navbar />` has no `onClick` handler — tapping it on mobile does nothing.
- Add a `mobileMenuOpen` boolean state to `<Navbar />`.
- When `true`, render a full-width dropdown below the nav bar with the same links as the desktop nav (`Benefits`, `Process`, `Gallery`, `Apply`).
- Clicking any link closes the menu.
- **Acceptance:** On a mobile viewport, tapping the hamburger icon reveals and hides the navigation links.

### REQ-03: Egypt Market Localization
- All price strings currently use `$` (USD). Change to `EGP` prefix.
  - `$45/mo` → `EGP 1,400/mo`
  - `$30/mo` → `EGP 925/mo`
  - `$55/mo` → `EGP 1,700/mo`
- Hero subheadline: update from generic BNPL copy to Egypt-specific framing. Suggested: *"Split your purchase into 4 equal payments. No bank visit. No paperwork. Just your national ID."*
- Footer copyright: `© 2025 FinAtelier Egypt.`
- Phone placeholder in form: `+20 10 0000 0000`
- **Acceptance:** No `$` currency symbol appears anywhere on the page.

### REQ-04: SEO Meta Tags in `index.html`
Add to `<head>` in `web2/finatelier/index.html`:
- `<title>FinAtelier Egypt — Buy Now, Pay Later in 4 Installments</title>`
- `<meta name="description" content="FinAtelier offers zero-interest installment plans for electronics, furniture, and appliances across Egypt. Apply in minutes with just your national ID.">`
- Open Graph: `og:title`, `og:description`, `og:type=website`
- `<meta name="viewport" content="width=device-width, initial-scale=1.0">` (if missing)
- **Acceptance:** Running `curl` or Lighthouse on the page returns all meta tags with non-empty content.

### REQ-05: Dependency Cleanup in `package.json`
- Remove `@google/genai` from `dependencies` — it is a scaffolding artifact, not used in the app.
- Move `express` and `dotenv` from `dependencies` to `devDependencies` (they are server-only tools, not part of the client bundle).
- **Acceptance:** `npm run build` produces a `dist/` folder with no `express`, `dotenv`, or `@google/genai` in the client bundle.

---

## REQ-06: Security Hardening (Fintech + WhatsApp Flow)

This section applies best practices from OWASP Top 10 and fintech-specific attack vectors relevant to a client-side form that redirects to WhatsApp.

### REQ-06-A: Input Sanitization & Validation
- **Full Name:** Allow only Unicode letters and spaces. Reject `<`, `>`, `"`, `'`, `;`, `--` (XSS and SQL injection characters even on client-side).
- **Phone Number:** Enforce Egyptian phone format: `/^(\+20|0)(10|11|12|15)[0-9]{8}$/`. Reject non-numeric characters.
- **Product Interest:** This is a `<select>` — server-safe by nature, but validate that the submitted value is one of the allowed enum options before encoding it into the WhatsApp URL.
- All values must be sanitized with `encodeURIComponent()` before being interpolated into the WhatsApp URL (already partially implied by REQ-01 but must be enforced).

### REQ-06-B: Honeypot Anti-Spam Field
- Add a hidden `<input type="text" name="website" tabIndex={-1} autoComplete="off" style={{display:'none'}} />` field.
- If this field has any value on submit, silently reject the submission (bots fill hidden fields; humans never see them).

### REQ-06-C: Rate Limiting (Client-Side Throttle)
- After a successful form submission, disable the submit button for **60 seconds** with a visible countdown (`"Please wait 58s before resubmitting"`).
- This prevents automated rapid-fire WhatsApp message spam to the business number.
- **Acceptance:** Submitting the form once disables the button for 60 seconds regardless of page state.

### REQ-06-D: Content Security Policy Meta Tag
- Add to `index.html` `<head>`:
  ```html
  <meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self'; style-src 'self' https://fonts.googleapis.com; font-src https://fonts.gstatic.com; connect-src 'self'; img-src 'self' data:;">
  ```
- This blocks XSS injection of external scripts, inline styles exploits, and unauthorized data exfiltration — critical for a form that collects phone numbers.

### REQ-06-E: No PII in URL Parameters
- Verify that the WhatsApp `wa.me` redirect URL is opened in a **new tab** (`_blank`) and does NOT expose PII in the browser's address bar of the current page (the current-page URL must never contain name/phone as query params).
- **Acceptance:** After form submission, the page URL remains unchanged.

### REQ-06-F: Accessible & Honest Legal Disclosure
- Add a single line of small print below the submit button:
  `"By submitting, you consent to being contacted via WhatsApp by a FinAtelier representative."`
- This is a basic GDPR/PDPL (Egypt's Personal Data Protection Law, Law No. 151 of 2020) compliance disclosure for collecting phone numbers.
