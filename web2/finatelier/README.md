# FinAtelier Egypt — Architectural Fintech

A high-performance installment-payment landing page tailored for the Egyptian market. Built with modern web standards, focusing on silhouette, speed, and conversion security.

## 🚀 Quick Start

### Prerequisites
- Node.js (v18+)
- npm

### Installation
```bash
# Navigate to project directory
cd web2/finatelier

# Install dependencies
npm install

# Start development server
npm run dev
```

## 🛠 Tech Stack
- **Framework:** React 19 + Vite 6
- **Styling:** Tailwind CSS 4 (Custom design tokens in `index.css`)
- **Animations:** Framer Motion (Optimized for bento-grid transitions)
- **Icons:** Lucide React

## 🎯 Configuration & Customization

This project is built to be easily adjusted for production use.

### 📱 WhatsApp Routing
All application forms and CTA buttons route to WhatsApp. To change the target number:
1. Open `src/App.tsx`.
2. Locate the `handleSubmit` function.
3. Replace the placeholder number `201XXXXXXXXX` with your production business number (format: country code without `+` followed by the mobile number).

### 🎨 Branding & Theme
Design tokens are centralized in `src/index.css` under the `@theme` block. You can quickly swap:
- `--color-primary` (Deep blacks/grays)
- `--color-secondary` (Brand accent blue/gold)
- `--font-headline` & `--font-body` (Google Fonts integration)

### 📂 Key Components
- **`Navbar`**: Responsive navigation with stateful mobile drawer.
- **`ApplicationForm`**: Security-hardened lead capture with honeypot spam protection and localized Egyptian regex validation.
- **`Collection`**: Dynamic product grid with EGP currency formatting.

## 🔒 Security Features
- **Input Sanitization:** Regex enforcement for Unicode names and Egyptian mobile formats.
- **Bot Protection:** Hidden honeypot field included in all form submissions.
- **Rate Limiting:** 60-second client-side cooldown implemented on the primary CTA to prevent automated spam.
- **Content Security Policy:** Strict CSP meta tags pre-configured in `index.html`.

## 📄 License
© 2025 FinAtelier Egypt. All rights reserved.
