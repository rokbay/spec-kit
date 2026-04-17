/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Zap, 
  UserX, 
  CreditCard, 
  Smartphone, 
  ShieldCheck, 
  MessageCircle, 
  Quote, 
  Globe, 
  Languages, 
  ChevronRight,
  Monitor,
  Menu,
  CheckCircle2
} from "lucide-react";

const Navbar = () => (
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
        <button className="md:hidden text-primary">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </div>
  </nav>
);

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
            The smarter way to pay for everything you love, split into 4 easy installments.
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
          <h3 className="text-xl font-bold text-primary mb-2">30-Sec Approval</h3>
          <p className="text-sm text-on-surface-variant">Instant decisioning engine gets you shopping in seconds.</p>
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
          <h3 className="text-xl font-bold text-primary mb-8 px-2">Global Standards</h3>
          <div className="flex gap-12 items-center px-4">
            <div>
              <div className="text-4xl font-black text-secondary leading-none mb-2">99%</div>
              <div className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Security</div>
            </div>
            <div className="w-[1px] h-12 bg-outline" />
            <div>
              <div className="text-4xl font-black text-secondary leading-none mb-2">24/7</div>
              <div className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Support</div>
            </div>
          </div>
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
            <img 
              alt="Modern home setup" 
              className="w-full h-[500px] object-cover rounded-[24px]"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZgpt688E0uF12NjJlkKqULcg2VyO2qACWAFIY6SB89JYTNfZYeTVtolzx5XPGPxqWiP5pbDH4MeUDd-zxGau_Wol5xaiLMooHOYPoSCaGGa1aSyxbJYVqOij9hVcPRBAiY-JPPQAWVmcjR2umKovdioP9kVH9nWDHleU-dVvDhS9oOzu4UceFZDAepzps_7PdfVa7Z-dSOjZTVPKiBF8kijQBjqOIG72BULw6mSQ8CldzoIXZk6ba73mkJBIrRuIgL3ixQGxyn6l1"
              referrerPolicy="no-referrer"
            />
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
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCHwSsCZiuW1nbzumxAN6RXRpRz146JBkIhp7nV4X5kwHDUvN5K78t5Epy6of6LoCuNAfu5DQVaZxqrxvpIoedUVlvoGT8d_kNGsFxmDe_DcPTl6LQU8CnMmMWh9cWQ-Stu6L-MoWu_pgOtIzeedFmANtvw9O9e-6lHWJEpGU58mZd3uK5mRr_vZM1M60cfjG67qGmz8665eMvf6SQX3GaGKB_-lSoe3j1cnw--hQfHKBagLLa485Y_Tmyh9osxowvZlyrzvxs8C-52",
            price: "$45/mo",
            delay: 0
          },
          { 
            title: "Bespoke Furniture", 
            badge: "Popular", 
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDvLSdBCcfBHe2VwiOKBHKavvOYMlcql8bhwra7uo0nX_rkUL7ra0u9VXHQfhqS1IKfmwXdTWg_x-1s1yzdhTDCZY9LYtQ_sNZSfwO-Ai4AUfptZeasKu2VcKQo_FZ6_8j9O129CYB8hcC0Dvk3OZOCFLxUvb4_eZgiTqjaY3ALauLs8TTHx0f3vR2V9EK-PP0KHkr9tIvxqUA0YcaQaVdxrnBFigSL1GofBUNQ9u-WjeLnscn6dbLDvDCC2Veqtbajn5A3v3_-ltZj",
            price: "$30/mo",
            delay: 0.1,
            translate: "md:translate-y-12"
          },
          { 
            title: "Advanced Appliances", 
            badge: null, 
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBp2vAD8yTmV6fO3cRNMv4-7QTjeduxCivfYLtFPfjG7tN_fMb7LYE_94rx4doZpMtBIHVq-ntRDSoDy7OF11l8LqASNGSwEQulk3nMG_edwmpQi8785OZ9bfTcMnLqWYwu_utawqa2EdChpfU-BqclUs5QxM9u9AtmnYAn4M4DoPVK8XzKvlDoPbVctTqKK_jH995u5RSHoPPxfB_TQJ_20Tn3lIWYE1EfTDhwvzcj38-96L8m6xWdDa28KiXl-w-WgU7wtC6kkSE_",
            price: "$55/mo",
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
              <img 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src={item.img}
                referrerPolicy="no-referrer"
              />
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

const ApplicationForm = () => (
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
            <button className="flex items-center gap-3 bg-[#25D366] text-white px-6 py-3 rounded-xl font-bold text-base hover:brightness-110 transition-all shadow-md active:scale-95">
              <MessageCircle className="w-5 h-5 fill-white" />
              Chat on WhatsApp
            </button>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-[24px] border-bento p-8 md:p-10 shadow-bento"
        >
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest pl-1">Full Name</label>
              <input 
                className="w-full bg-surface-container-low border border-outline rounded-xl py-3 px-4 focus:ring-2 focus:ring-secondary/20 focus:bg-white transition-all outline-none text-sm" 
                placeholder="Johnathan Doe" 
                type="text"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest pl-1">Phone Number</label>
              <input 
                className="w-full bg-surface-container-low border border-outline rounded-xl py-3 px-4 focus:ring-2 focus:ring-secondary/20 focus:bg-white transition-all outline-none text-sm" 
                placeholder="+1 (555) 000-0000" 
                type="tel"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest pl-1">Product Interest</label>
              <select className="w-full bg-surface-container-low border border-outline rounded-xl py-3 px-4 focus:ring-2 focus:ring-secondary/20 focus:bg-white transition-all outline-none appearance-none text-sm">
                <option>Electronics</option>
                <option>Furniture</option>
                <option>Home Appliances</option>
                <option>Other</option>
              </select>
            </div>
            <button className="w-full bg-secondary text-white py-4 rounded-xl font-bold text-lg hover:brightness-110 transition-all mt-4 transform active:scale-95 shadow-lg shadow-secondary/10">
              Submit Application
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section className="py-24 px-6 md:px-12">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-20 grayscale mb-24">
        {["SECUREPAY", "TECH TRUST", "GLOBAL BANK", "MODERN RETAIL"].map((logo) => (
          <span key={logo} className="font-headline font-black text-2xl tracking-tighter text-on-surface">
            {logo}
          </span>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div 
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
          className="bg-white border-bento shadow-bento p-10 rounded-[24px]"
        >
          <p className="text-xl font-medium text-primary mb-8 leading-relaxed italic">
            "The process was actually faster than a coffee run. I got my new workstation approved while waiting for my latte."
          </p>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-surface-container-high overflow-hidden border border-outline shadow-sm">
              <img 
                alt="Marcus Sterling" 
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_M7aB9hacJ5j_1Nt6WjgqJcFCiQ7lHmtO3W05GQw3E_UvNIUO2F4TinYgAGmssCB7S8Sfa_Kup53YN2heC5PTxqItrkBUKivP6KVmBKItZl9xXOnYXf28BCF3CXgZAgysdBAY03VNQ2QIuTiA6oX51rEbeEFi0j9raKAEuSZWJBK2HXYr4_u2-zUc9r108dRNm4Qen039hB9Jsj3dQ225p1IKC_Zpi6P9Q-u1qYYTAL-LXIOW__PDy6043y3EpVfTM_ZfKxmh4snF"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <p className="font-bold text-primary text-sm">Marcus Sterling</p>
              <p className="text-xs text-on-surface-variant">Creative Director</p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-white border-bento shadow-bento p-10 rounded-[24px]"
        >
          <p className="text-xl font-medium text-primary mb-8 leading-relaxed italic">
            "No hidden surprises. Transparent terms and the app interface is absolutely beautiful. Financing finally feels modern."
          </p>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-surface-container-high overflow-hidden border border-outline shadow-sm">
              <img 
                alt="Elena Rodriguez" 
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD15V-DEGu0KXSq62P55kvZnEvvrYYZaHV0VP17uAS8sKLlZTcEDqdXJTQexaqpa1QRrnDkrLJPyj5iOrsPRsrJ-cbDe4JznH1MsoW4pUC2j5gwQO_E-4hlEwYj7heWaPIybKFBCAS-iTmIP3WF9kFOosOghdVEAnrpA_7r7FZ-wIc6LsB2cKvbqhrfm05Pr6I_qBrCIMqUxQobKchvHarrJBBd8wYBwW3NpJSMnQC5x6bwbl8IdLCUGrz7Zkr5Gx9Xv6AtBSeYHxb9"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <p className="font-bold text-primary text-sm">Elena Rodriguez</p>
              <p className="text-xs text-on-surface-variant">Home Owner</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

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
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {[
            { title: "Platform", links: ["Benefits", "Process", "Partners"] },
            { title: "Legal", links: ["Terms", "Privacy", "Regulatory"] },
            { title: "Company", links: ["About Us", "Careers", "Contact"] },
            { title: "Support", links: ["Help Center", "FAQs"] }
          ].map((col) => (
            <div key={col.title} className="space-y-4">
              <h5 className="text-primary font-bold text-[10px] uppercase tracking-widest">{col.title}</h5>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="font-body text-xs text-on-surface-variant hover:text-secondary transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="pt-12 border-t border-bento flex flex-col md:flex-row justify-between items-center gap-8">
        <p className="font-body text-[10px] text-on-surface-variant uppercase tracking-wider">
          © 2024 FinAtelier. All rights reserved.
        </p>
        <div className="flex gap-6">
          <Globe className="w-4 h-4 text-on-surface-variant cursor-pointer hover:text-secondary transition-colors" />
          <Languages className="w-4 h-4 text-on-surface-variant cursor-pointer hover:text-secondary transition-colors" />
        </div>
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
      <Testimonials />
      <Footer />
    </div>
  );
}
