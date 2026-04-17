# Plan: Finatelier v2 — Production Quality, Market Fit & Security

## Sequencing Rationale
Security changes (REQ-06) touch the form component, which overlaps with REQ-01. These must be implemented together in a single atomic pass on `ApplicationForm` to avoid merge conflicts. All other REQs are independent.

---

## Phase 1 — Application Form: Functional + Secure (REQ-01 + REQ-06)

**File:** `web2/finatelier/src/App.tsx` — `ApplicationForm` component

### Step 1.1 — Add form state
```
const [fullName, setFullName] = useState('');
const [phone, setPhone] = useState('');
const [productInterest, setProductInterest] = useState('Electronics');
const [honeypot, setHoneypot] = useState('');
const [formError, setFormError] = useState('');
const [cooldown, setCooldown] = useState(0);
```

### Step 1.2 — Validation function
Implement `validateForm()` which:
- Tests `fullName` against `/^[\p{L}\s]{2,60}$/u` (Unicode letters + spaces only, 2–60 chars)
- Tests `phone` against `/^(\+20|0)(10|11|12|15)[0-9]{8}$/` (Egyptian mobile numbers only)
- Confirms `productInterest` is one of the allowed enum values
- Returns `null` on success or an error string on failure

### Step 1.3 — Submit handler
```
handleSubmit(e):
  e.preventDefault()
  if honeypot has value → return silently
  if cooldown > 0 → return
  errors = validateForm()
  if errors → setFormError(errors); return
  text = encodeURIComponent(`FinAtelier Inquiry\nName: ${fullName}\nPhone: ${phone}\nProduct: ${productInterest}`)
  window.open(`https://wa.me/[BUSINESS_NUMBER]?text=${text}`, '_blank')
  setCooldown(60)  // start 60-second rate limit
```

### Step 1.4 — Cooldown timer
```
useEffect:
  if cooldown > 0:
    const t = setTimeout(() => setCooldown(c => c - 1), 1000)
    return () => clearTimeout(t)
```

### Step 1.5 — Honeypot field
Add `<input type="text" name="website" style={{display:'none'}} tabIndex={-1} autoComplete="off" />` inside the form.

### Step 1.6 — Legal disclosure line
Add below submit button: `"By submitting, you consent to being contacted via WhatsApp by a FinAtelier representative."`

### Step 1.7 — Wire WhatsApp button in left column
The existing `<button>Chat on WhatsApp</button>` should become an `<a href="https://wa.me/[NUMBER]" target="_blank">` link.

---

## Phase 2 — Mobile Navigation (REQ-02)

**File:** `web2/finatelier/src/App.tsx` — `Navbar` component

### Step 2.1 — Convert to stateful component
Change arrow function `const Navbar = () =>` to a proper function component with `useState`:
```
const [menuOpen, setMenuOpen] = useState(false);
```

### Step 2.2 — Wire hamburger
`<button onClick={() => setMenuOpen(o => !o)}>` 

### Step 2.3 — Conditional mobile menu
Below the `<nav>` bar, render:
```jsx
{menuOpen && (
  <div className="md:hidden bg-white border-b border-bento px-6 py-4 flex flex-col gap-4">
    {['Benefits', 'Process', 'Gallery', 'Apply'].map(item => (
      <a href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)} ...>{item}</a>
    ))}
  </div>
)}
```

---

## Phase 3 — Egypt Localization (REQ-03)

**File:** `web2/finatelier/src/App.tsx` — `Collection` and `Hero` components

### Step 3.1 — Replace USD prices
In the `Collection` data array:
- `"$45/mo"` → `"EGP 1,400/mo"`
- `"$30/mo"` → `"EGP 925/mo"`  
- `"$55/mo"` → `"EGP 1,700/mo"`

### Step 3.2 — Update Hero subheadline
Replace: `"The smarter way to pay for everything you love, split into 4 easy installments."`
With: `"Split your purchase into 4 equal payments. No bank visit. No paperwork. Just your national ID."`

### Step 3.3 — Footer copyright
`© 2024 FinAtelier.` → `© 2025 FinAtelier Egypt.`

---

## Phase 4 — SEO + CSP Meta Tags (REQ-04 + REQ-06-D)

**File:** `web2/finatelier/index.html`

### Step 4.1 — Add title and meta description
### Step 4.2 — Add Open Graph tags
### Step 4.3 — Add Content-Security-Policy meta tag

---

## Phase 5 — Dependency Cleanup (REQ-05)

**File:** `web2/finatelier/package.json`

- Remove `@google/genai` entirely
- Move `express` and `dotenv` to `devDependencies`
- Run `npm install` to regenerate lockfile

---

## Execution Order & Ownership

| Phase | Owner | Risk |
|---|---|---|
| 1 (Form + Security) | Jules | Medium — multiple state interactions |
| 2 (Mobile Nav) | Jules | Low |
| 3 (Localization) | Jules | Low — text only |
| 4 (SEO + CSP) | Jules | Low — HTML only |
| 5 (Dependencies) | Jules | Low |
