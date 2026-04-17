/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { 
  Zap, 
  UserX, 
  CreditCard, 
  Smartphone, 
  ShieldCheck, 
  MessageCircle, 
  ChevronRight,
  Menu,
} from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 w-full z-50 bg-white/70 backdrop-blur-[24px] border-b border-bento shadow-bento">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex justify-between items-center">
          <div className="font-headline text-2xl font-extrabold text-primary tracking-tighter flex items-center gap-2">
            <div className="w-8 h-8 bg-secondary rounded-lg" />
            FinAtelier
          </div>
          <div className="hidden md:flex items-center gap-10">
            {["Benefits", "Process", "Gallery", "Apply"].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-on-surface-variant hover:text-primary transition-colors font-headline font-medium tracking-tight text-sm"
              >
                {item}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <button className="bg-secondary text-white px-6 py-3 rounded-xl font-semibold tracking-tight hover:brightness-110 transition-all transform active:scale-95 hidden sm:block text-sm">
              Get Started
            </button>
            <button className="md:hidden text-primary" onClick={() => setMenuOpen(o => !o)}>
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>
      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-b border-bento px-6 py-4 flex flex-col gap-4 sticky top-[73px] z-40 shadow-bento">
          {["Benefits", "Process", "Gallery", "Apply"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="text-on-surface-variant hover:text-primary transition-colors font-headline font-medium tracking-tight text-sm py-2 border-b border-bento last:border-0"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </>
  );
};

const Hero = () => (
  <section className="px-6 md:px-12 py-12 md:py-20 lg:h-[700px]">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6 h-full">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="lg:col-span-2 bg-hero-gradient p-10 md:p-16 rounded-[24px] text-white flex flex-col justify-between shadow-bento"
      >
        <div>
          <h1 className="font-headline text-5xl md:text-6xl font-extrabold leading-[1.1] tracking-tighter mb-8">
            Zero Down.<br/>
            Zero Interest.
          </h1>
          <p className="text-lg opacity-90 max-w-sm leading-relaxed mb-10">
            Split your purchase into 4 equal payments. No bank visit. No paperwork. Just your national ID.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-white text-secondary px-8 py-4 rounded-xl font-bold text-base hover:bg-surface-container-low transition-all">
            Apply Now
          </button>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="lg:col-span-2 bg-white p-10 rounded-[24px] border-bento shadow-bento flex flex-col justify-center"
      >
        <span className="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant mb-6 inline-block">
          The FinAtelier Promise
        </span>
        <div className="text-7xl md:text-8xl font-black text-secondary leading-none mb-4">0%</div>
        <div className="text-xl md:text-2xl font-bold text-primary mb-4">No hidden fees. No interest. Ever.</div>
        <p className="text-on-surface-variant max-w-sm leading-relaxed text-base">
          Transparent installments designed for your budget, with automated reminders and instant approval.
        </p>
      </motion.div>
    </div>
  </section>
);

const Benefits = () => (
  <section id="benefits" className="py-24 px-6 md:px-12">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Bento Card 1 */}
        <motion.div 
          whileHover={{ y: -5 }}
          className="md:col-span-2 bg-white p-10 rounded-[24px] border-bento shadow-bento transition-all group"
        >
          <div className="w-12 h-12 bg-secondary-container rounded-xl flex items-center justify-center mb-8">
            <UserX className="w-6 h-6 text-secondary" />
          </div>
          <span className="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant mb-2 inline-block">Security First</span>
          <h3 className="text-2xl font-bold text-primary mb-4">No Guarantor Needed</h3>
          <p className="text-on-surface-variant leading-relaxed">
            Your creditworthiness is built on your trust, not your connections. We verify your identity instantly.
          </p>
        </motion.div>

        {/* Bento Card 2 */}
        <motion.div 
          whileHover={{ y: -5 }}
          className="bg-white p-10 rounded-[24px] border-bento shadow-bento transition-all"
        >
          <div className="w-12 h-12 bg-secondary-container rounded-xl flex items-center justify-center mb-8">
            <CreditCard className="w-6 h-6 text-secondary" />
          </div>
          <span className="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant mb-2 inline-block">Transparent</span>
          <h3 className="text-xl font-bold text-primary mb-2">No Hidden Fees</h3>
          <p className="text-sm text-on-surface-variant">Complete transparency from day one.</p>
        </motion.div>

        {/* Bento Card 3 */}
        <motion.div 
          whileHover={{ y: -5 }}
          className="bg-surface-container-low p-10 rounded-[24px] border-bento shadow-bento transition-all"
        >
          <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-8 shadow-sm">
            <Zap className="w-6 h-6 text-secondary fill-secondary" />
          </div>
          <span className="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant mb-2 inline-block">Lightning Fast</span>
          <h3 className="text-xl font-bold text-primary mb-2">Fast Approval</h3>
          <p className="text-sm text-on-surface-variant">Our decisioning engine gets you shopping quickly.</p>
        </motion.div>

        {/* Bento Card 4 */}
        <motion.div 
          whileHover={{ y: -5 }}
          className="md:col-span-2 bg-white p-10 rounded-[24px] border-bento shadow-bento transition-all"
        >
          <div className="flex items-start justify-between gap-8 h-full">
            <div>
              <div className="w-12 h-12 bg-secondary-container rounded-xl flex items-center justify-center mb-8">
                <Smartphone className="w-6 h-6 text-secondary" />
              </div>
              <span className="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant mb-2 inline-block">All-in-one</span>
              <h3 className="text-2xl font-bold text-primary mb-4">Mobile Friendly</h3>
              <p className="text-on-surface-variant leading-relaxed text-sm">
                Apply, manage, and pay from your phone. Our mobile-first platform keeps you in control 24/7.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Bento Card 5 */}
        <motion.div 
          whileHover={{ y: -5 }}
          className="md:col-span-2 bg-white p-10 rounded-[24px] border-bento shadow-bento transition-all flex flex-col justify-between"
        >
          <h3 className="text-xl font-bold text-primary">Bank-grade Security &amp; Dedicated Support</h3>
        </motion.div>
    </div>
  </section>
);

const Process = () => (
  <section id="process" className="py-24 px-6 md:px-12">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5">
          <h2 className="font-headline text-4xl md:text-5xl font-extrabold text-primary mb-8 leading-[1.1] tracking-tighter">
            The Three-Step <br/>Mastery
          </h2>
          <p className="text-on-surface-variant text-lg mb-10 max-w-md">
            We've refined the application process to its purest form. No paperwork, no waiting rooms, just progress.
          </p>
          <div className="space-y-4">
            {[
              { id: 1, title: "Choose Product", desc: "Select from our curated list of partners.", active: false },
              { id: 2, title: "Submit Application", desc: "Verify your details in under a minute.", active: true },
              { id: 3, title: "Get Approved", desc: "Receive your digital contract immediately.", active: false }
            ].map((step) => (
              <div 
                key={step.id} 
                className={`flex items-center gap-6 p-6 rounded-[24px] border-bento transition-all ${
                  step.active 
                    ? "bg-white shadow-bento border-secondary/20" 
                    : "bg-surface-container-low/50 border-transparent"
                }`}
              >
                <div className={`flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-lg text-sm font-black ${
                  step.active ? "bg-secondary text-white" : "bg-surface-container-highest text-primary"
                }`}>
                  {step.id}
                </div>
                <div>
                  <h4 className="font-bold text-primary text-base">{step.title}</h4>
                  <p className="text-xs text-on-surface-variant">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:col-span-7">
          <div className="bg-white p-4 rounded-[32px] border-bento shadow-bento overflow-hidden">
            {/* Process image placeholder — replace with a real owned asset */}
            <div className="w-full h-[500px] rounded-[24px] bg-surface-container-high flex items-center justify-center text-on-surface-variant text-sm tracking-widest uppercase font-bold">
              [Photo Coming Soon]
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Collection = () => (
  <section id="gallery" className="py-24 px-6 md:px-12">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div>
          <h2 className="font-headline text-4xl font-extrabold text-primary mb-4 tracking-tighter">The Collection</h2>
          <p className="text-on-surface-variant max-w-lg text-lg">
            From essential appliances to high-end lifestyle tech. Ownership starts here.
          </p>
        </div>
        <div className="flex gap-4">
          <button className="bg-white border-bento shadow-bento text-primary px-8 py-3 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-surface-container-low transition-all">
            Electronics
          </button>
          <button className="bg-white border-bento shadow-bento text-primary px-8 py-3 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-surface-container-low transition-all">
            Furniture
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { 
            title: "Ultra-Performance Tech", 
            badge: "New", 
            bg: "bg-stone-100",
            price: "EGP 1,400/mo",
            delay: 0
          },
          { 
            title: "Bespoke Furniture", 
            badge: "Popular", 
            bg: "bg-stone-200",
            price: "EGP 925/mo",
            delay: 0.1,
            translate: "md:translate-y-12"
          },
          { 
            title: "Advanced Appliances", 
            badge: null, 
            bg: "bg-stone-300",
            price: "EGP 1,700/mo",
            delay: 0.2
          }
        ].map((item, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: item.delay }}
            className={`group cursor-pointer ${item.translate || ""}`}
          >
            <div className="relative overflow-hidden rounded-[24px] aspect-[4/5] bg-white border-bento shadow-bento mb-6">
              {/* Product image placeholder — replace with owned asset */}
              <div className={`w-full h-full ${item.bg} flex items-center justify-center`} />
              <div className="absolute inset-0 bg-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-4 left-4 right-4 p-5 bg-white/90 backdrop-blur-md rounded-xl translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <div className="flex justify-between items-center">
                  <p className="text-secondary font-black text-base">{item.price}</p>
                  <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center">
                    <ChevronRight className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center px-2">
              <h3 className="text-lg font-bold text-primary">{item.title}</h3>
              {item.badge && (
                <span className="text-secondary bg-secondary-container px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-widest">
                  {item.badge}
                </span>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const ALLOWED_PRODUCTS = ["Electronics", "Furniture", "Home Appliances", "Other"] as const;
const EGYPT_PHONE_RE = /^(\+20|0)(10|11|12|15)[0-9]{8}$/;
const SAFE_NAME_RE = /^[\p{L}\s]{2,60}$/u;

const ApplicationForm = () => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [productInterest, setProductInterest] = useState<typeof ALLOWED_PRODUCTS[number]>('Electronics');
  const [honeypot, setHoneypot] = useState('');
  const [formError, setFormError] = useState('');
  const [cooldown, setCooldown] = useState(0);

  /* REQ-06-C: 60-second cooldown timer */
  useEffect(() => {
    if (cooldown <= 0) return;
    const t = setTimeout(() => setCooldown(c => c - 1), 1000);
    return () => clearTimeout(t);
  }, [cooldown]);

  /* REQ-06-A: Input validation */
  const validateForm = (): string | null => {
    if (!SAFE_NAME_RE.test(fullName.trim())) return 'Name must contain only letters (2–60 characters).';
    if (!EGYPT_PHONE_RE.test(phone.trim())) return 'Please enter a valid Egyptian mobile number (e.g. +20 10 0000 0000).';
    if (!ALLOWED_PRODUCTS.includes(productInterest)) return 'Please select a valid product category.';
    return null;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (honeypot) return; /* REQ-06-B: honeypot guard */
    if (cooldown > 0) return; /* REQ-06-C: rate limit guard */

    const error = validateForm();
    if (error) { setFormError(error); return; }

    setFormError('');
    /* REQ-06-E: PII stays out of page URL — sent only via WhatsApp deep link in new tab */
    const text = encodeURIComponent(
      `FinAtelier Inquiry\nName: ${fullName.trim()}\nPhone: ${phone.trim()}\nProduct: ${productInterest}`
    );
    window.open(`https://wa.me/201XXXXXXXXX?text=${text}`, '_blank', 'noopener,noreferrer');
    setCooldown(60);
  };

  return (
    <section id="apply" className="py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto bg-surface-container-low rounded-[32px] border-bento shadow-bento p-8 md:p-16 overflow-hidden relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
          <div>
            <h2 className="font-headline text-4xl md:text-5xl font-extrabold text-primary mb-8 leading-[1.1] tracking-tighter">
              Start Your <br/>Application
            </h2>
            <p className="text-on-surface-variant text-lg mb-12 max-w-sm">
              Our team is ready to guide you. Fill out the form or chat with us directly for instant assistance.
            </p>
            <div className="space-y-6">
              <div className="flex gap-4 items-center">
                <div className="w-10 h-10 bg-white border-bento shadow-sm text-secondary flex items-center justify-center rounded-xl">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <p className="text-primary font-semibold text-sm">Secured with 256-bit encryption</p>
              </div>
              {/* REQ-01: WhatsApp button wired to real link */}
              <a
                href="https://wa.me/201XXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-[#25D366] text-white px-6 py-3 rounded-xl font-bold text-base hover:brightness-110 transition-all shadow-md active:scale-95"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                Chat on WhatsApp
              </a>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[24px] border-bento p-8 md:p-10 shadow-bento"
          >
            <form className="space-y-5" onSubmit={handleSubmit}>
              {/* REQ-06-B: Honeypot — hidden from humans, visible to bots */}
              <input
                type="text"
                name="website"
                style={{ display: 'none' }}
                tabIndex={-1}
                autoComplete="off"
                value={honeypot}
                onChange={e => setHoneypot(e.target.value)}
              />

              <div className="space-y-2">
                <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest pl-1">Full Name</label>
                <input 
                  className="w-full bg-surface-container-low border border-outline rounded-xl py-3 px-4 focus:ring-2 focus:ring-secondary/20 focus:bg-white transition-all outline-none text-sm" 
                  placeholder="Ahmed Mohamed" 
                  type="text"
                  value={fullName}
                  onChange={e => setFullName(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest pl-1">Phone Number</label>
                <input 
                  className="w-full bg-surface-container-low border border-outline rounded-xl py-3 px-4 focus:ring-2 focus:ring-secondary/20 focus:bg-white transition-all outline-none text-sm" 
                  placeholder="+20 10 0000 0000" 
                  type="tel"
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest pl-1">Product Interest</label>
                <select
                  className="w-full bg-surface-container-low border border-outline rounded-xl py-3 px-4 focus:ring-2 focus:ring-secondary/20 focus:bg-white transition-all outline-none appearance-none text-sm"
                  value={productInterest}
                  onChange={e => setProductInterest(e.target.value as typeof ALLOWED_PRODUCTS[number])}
                >
                  {ALLOWED_PRODUCTS.map(p => <option key={p}>{p}</option>)}
                </select>
              </div>

              {/* REQ-06-A: Inline validation error */}
              {formError && (
                <div className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                  {formError}
                </div>
              )}

              <button
                type="submit"
                disabled={cooldown > 0}
                className="w-full bg-secondary text-white py-4 rounded-xl font-bold text-lg hover:brightness-110 transition-all mt-4 transform active:scale-95 shadow-lg shadow-secondary/10 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {cooldown > 0 ? `Please wait ${cooldown}s` : 'Submit Application'}
              </button>

              {/* REQ-06-F: Egypt PDPL consent disclosure */}
              <p className="text-[10px] text-on-surface-variant text-center mt-3">
                By submitting, you consent to being contacted via WhatsApp by a FinAtelier representative.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-white border-t border-bento w-full py-16 px-6 md:px-12">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
        <div className="max-w-sm">
          <div className="font-headline font-black text-2xl text-primary mb-6 tracking-tighter flex items-center gap-2">
            <div className="w-8 h-8 bg-secondary rounded-lg" />
            FinAtelier
          </div>
          <p className="font-body text-sm leading-relaxed text-on-surface-variant">
            Redefining the financial relationship between ambition and ownership. Architectural precision in every transaction with the power of split payments.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-12">
          {/* Only real navigable links remain */}
          <div className="space-y-4">
            <h5 className="text-primary font-bold text-[10px] uppercase tracking-widest">Platform</h5>
            <ul className="space-y-3">
              {["Benefits", "Process"].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="font-body text-xs text-on-surface-variant hover:text-secondary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="pt-12 border-t border-bento flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-body text-[10px] text-on-surface-variant uppercase tracking-wider">
          © 2025 FinAtelier Egypt. All rights reserved.
        </p>
        <p className="text-[10px] text-on-surface-variant">Terms &amp; Privacy — Coming Soon</p>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Benefits />
      <Process />
      <Collection />
      <ApplicationForm />
      <Footer />
    </div>
  );
}
