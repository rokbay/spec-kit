/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useRef, useEffect } from 'react';
import { Instagram, Menu, ArrowRight, Home, Search, Heart, User, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', honeypot: '' });
  const [checkoutFit, setCheckoutFit] = useState<string | null>(null);
  const [formError, setFormError] = useState('');
  
  const handleFitSelection = (fitName: string) => {
    setCheckoutFit(fitName);
    setTimeout(() => {
      document.getElementById('checkout-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 150); // wait for Framer Motion to expand the container
  };
  
  // Sizing Studio
  const [userHeight, setUserHeight] = useState(180);

  const products = [
    {
      id: 1,
      name: "Fit 1",
      price: 180,
      description: "Heavyweight French Terry in Sage",
      image: "/images/fit-1.jpeg"
    },
    {
      id: 2,
      name: "Fit 2",
      price: 180,
      description: "Brushed Cotton Fleece in Bone",
      image: "/images/fit-2.jpeg"
    },
    {
      id: 3,
      name: "Fit 3",
      price: 180,
      description: "Premium Oversized Fit in Carbon",
      image: "/images/fit-3.jpeg"
    }
  ];

  const handleWhatsAppOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.honeypot) return; // Anti-spam trap

    const sanitize = (str: string) => str.replace(/[<>]/g, '');
    const safeName = sanitize(formData.name).trim();
    const safeEmail = sanitize(formData.email).trim();
    const safePhone = sanitize(formData.phone).trim();

    if (!/^[a-zA-Z\s]+$/.test(safeName)) {
      setFormError('Name must contain only letters to prevent injection.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(safeEmail)) {
      setFormError('Please enter a valid email.');
      return;
    }
    if (!/^[\d\+\-\s]{8,}$/.test(safePhone)) {
      setFormError('Please enter a valid phone number.');
      return;
    }

    setFormError('');
    const text = `Order Inquiry\nFit: ${checkoutFit}\nName: ${safeName}\nEmail: ${safeEmail}\nPhone: ${safePhone}`;
    window.open('https://wa.me/201009891255?text=' + encodeURIComponent(text), '_blank');
  };

  const nextSlide = () => setCurrentIndex(prev => Math.min(products.length - 1, prev + 1));
  const prevSlide = () => setCurrentIndex(prev => Math.max(0, prev - 1));

  // Determine physics for the 2D Virtual Sizing overlay clothing
  // Baseline mannequin is 180cm. Shorter user = structurally larger garment on their frame.
  const garmentScale = 180 / userHeight;

  // Active product for the mannequin comparison
  const previewProduct = products.find(p => p.name === checkoutFit) || products[0];

  return (
    <div className="min-h-screen bg-background text-on-background font-body selection:bg-primary/20 overflow-x-hidden">
      {/* Top Navigation Bar */}
      <nav className="fixed top-0 w-full z-50 bg-stone-50/80 backdrop-blur-xl flex justify-between items-center px-8 py-4 max-w-full shadow-sm">
        <div className="text-2xl font-headline italic text-primary">Quail Studio</div>
        <div className="hidden md:flex items-center gap-8 font-label tracking-wide">
          <a className="text-primary border-b-2 border-primary pb-1 hover:opacity-80 transition-opacity" href="#collection">Collection</a>
          <a className="text-stone-500 hover:text-primary transition-colors" href="#sizing">Studio</a>
          <a className="text-stone-500 hover:text-primary transition-colors" href="#about">About</a>
        </div>
        <div className="flex items-center gap-4">
          <a className="text-primary hover:opacity-80 transition-opacity p-2 animate-shake" href="https://www.instagram.com/quail_essentials?igsh=MTRobjd0M3dpNXN1cg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
            <Instagram size={24} />
          </a>
          <button className="md:hidden text-primary">
            <Menu size={24} />
          </button>
        </div>
      </nav>

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden px-8">
          <div className="absolute inset-0 z-0">
            <img 
              alt="Quail Studio Hero" 
              className="w-full h-full object-cover" 
              src="/images/fit-3.jpeg"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
          <div className="relative z-10 text-center w-full max-w-full overflow-hidden space-y-6">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-headline italic text-7xl md:text-9xl text-white tracking-tight leading-none drop-shadow-lg w-full flex overflow-hidden whitespace-nowrap"
            >
              <div className="animate-marquee flex gap-16 whitespace-nowrap shrink-0">
                <span>The Tactile Studio</span>
                <span>The Tactile Studio</span>
                <span>The Tactile Studio</span>
                <span>The Tactile Studio</span>
              </div>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-body text-xl md:text-2xl text-white/90 max-w-2xl mx-auto font-light leading-relaxed"
            >
              A curated collection where comfort meets silhouette. Garments designed for the body, not just the eye.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pt-8"
            >
              <a className="bg-primary text-white px-10 py-5 rounded-full font-semibold tracking-wide text-lg hover:opacity-90 active:scale-95 transition-all inline-block glossy-finish" href="#collection">
                Explore Collection
              </a>
            </motion.div>
          </div>
        </section>

        {/* Product Gallery Section (Coverflow Carousel) */}
        <section className="py-24 px-4 max-w-7xl mx-auto bg-surface overflow-hidden" id="collection">
          <div className="flex flex-col text-center items-center justify-center mb-16 space-y-4">
            <span className="text-primary font-semibold tracking-widest text-sm uppercase">Curated Selection</span>
            <h2 className="font-headline text-5xl text-on-surface">Artisanal Garments</h2>
            <p className="text-on-surface-variant max-w-md text-lg leading-relaxed mx-auto">
              Each piece is cut, sewn, and finished in our studio, ensuring unique textures and permanent durability.
            </p>
          </div>

          <div className="relative h-[550px] w-full max-w-5xl mx-auto flex items-center justify-center perspective-1000">
            <AnimatePresence>
              {products.map((product, idx) => {
                const diff = idx - currentIndex;
                const isCenter = diff === 0;

                // Coverflow math logic
                const xOffset = diff * (window.innerWidth < 768 ? 200 : 350);
                const scaleAmount = isCenter ? 1 : 0.8;
                const blurAmount = isCenter ? 0 : 6;
                const zIndex = 20 - Math.abs(diff);
                const opacity = Math.abs(diff) > 1 ? 0 : 1;

                return (
                  <motion.div 
                    key={product.id}
                    initial={false}
                    animate={{ 
                      x: xOffset, 
                      scale: scaleAmount, 
                      zIndex: zIndex, 
                      filter: `blur(${blurAmount}px)`,
                      opacity: opacity
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="absolute w-[280px] sm:w-[320px] bg-surface-container-low rounded-xl overflow-hidden group/card flex flex-col shadow-xl"
                  >
                    <div 
                      className="aspect-[4/5] relative overflow-hidden bg-surface-container cursor-pointer"
                      onClick={() => handleFitSelection(product.name)}
                    >
                      <img 
                        alt={product.name} 
                        className="w-full h-full object-cover" 
                        src={product.image}
                        referrerPolicy="no-referrer"
                      />
                      {/* Subdued Watermark */}
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10" style={{ mixBlendMode: 'overlay' }}>
                        <div className="text-white opacity-40 font-headline italic text-3xl md:text-4xl -rotate-45 select-none tracking-widest whitespace-nowrap drop-shadow-md">
                          Quail Studio
                        </div>
                      </div>
                    </div>
                    <div className="p-6 flex flex-col items-center flex-grow bg-surface-container-low">
                      <h3 className="font-headline text-2xl italic text-on-surface mb-2">{product.name}</h3>
                      <p className="text-on-surface-variant font-body text-sm text-center mb-6">{product.description}</p>
                      
                      <button 
                        onClick={() => handleFitSelection(product.name)}
                        className={`w-full py-3 text-sm font-bold uppercase tracking-wider rounded-full transition-all ${isCenter ? 'bg-primary text-white shadow-lg shadow-primary/30 hover:bg-primary/90' : 'border border-primary/20 text-primary hover:bg-primary/10'}`}
                      >
                        Order This Fit
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>

            {/* Custom Side Arrows */}
            <button 
              onClick={prevSlide}
              className={`absolute left-0 md:-left-12 top-1/2 -translate-y-1/2 z-50 p-4 rounded-full bg-white/90 shadow-xl border border-stone-200 text-primary transition-all hover:bg-white hover:scale-105 active:scale-95 ${currentIndex === 0 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
            >
              <ChevronLeft size={28} strokeWidth={2} />
            </button>
            <button 
              onClick={nextSlide}
              className={`absolute right-0 md:-right-12 top-1/2 -translate-y-1/2 z-50 p-4 rounded-full bg-white/90 shadow-xl border border-stone-200 text-primary transition-all hover:bg-white hover:scale-105 active:scale-95 ${currentIndex === products.length - 1 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
            >
              <ChevronRight size={28} strokeWidth={2} />
            </button>
          </div>

          {/* Inline Auto-Expanding Checkout Modal */}
          <AnimatePresence>
            {checkoutFit && (
              <motion.div
                id="checkout-section"
                initial={{ height: 0, opacity: 0, marginTop: 0 }}
                animate={{ height: 'auto', opacity: 1, marginTop: 48 }}
                exit={{ height: 0, opacity: 0, marginTop: 0 }}
                className="overflow-hidden max-w-4xl mx-auto"
              >
                <div className="bg-secondary text-white p-8 sm:p-12 rounded-3xl shadow-2xl relative bg-gradient-to-t from-secondary to-[#6a3f00]">
                  <button 
                    onClick={() => setCheckoutFit(null)} 
                    className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-10"
                  >
                    <X size={28} />
                  </button>
                  
                  <div className="flex flex-col md:flex-row gap-12 items-center">
                    <div className="flex-1 space-y-4">
                      <h2 className="font-headline text-4xl sm:text-5xl italic leading-tight mb-2 text-primary-fixed">Configure {checkoutFit}</h2>
                      <p className="text-white/80 font-light text-lg mb-8">Exclusive Delivery within Egypt. Lock in your piece before it's gone.</p>
                      
                      {formError && (
                        <div className="mb-6 p-4 rounded-md bg-red-900/40 text-red-100 border border-red-500/50 backdrop-blur-md">
                          {formError}
                        </div>
                      )}

                      <form className="space-y-6" onSubmit={handleWhatsAppOrder}>
                        <input type="text" name="hp_name" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" value={formData.honeypot} onChange={e => setFormData({...formData, honeypot: e.target.value})} />
                        
                        <div>
                          <label className="text-xs font-semibold tracking-widest uppercase block mb-2 text-white/50">Full Name</label>
                          <input required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full px-5 py-4 rounded-xl bg-white/10 border border-white/20 focus:bg-white/20 focus:ring-2 focus:ring-white/30 transition-all text-white outline-none placeholder:text-white/30" placeholder="Julianne Smith" type="text"/>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          <div>
                            <label className="text-xs font-semibold tracking-widest uppercase block mb-2 text-white/50">Email Address</label>
                            <input required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full px-5 py-4 rounded-xl bg-white/10 border border-white/20 focus:bg-white/20 focus:ring-2 focus:ring-white/30 transition-all text-white outline-none placeholder:text-white/30" placeholder="julie@quail.studio" type="email"/>
                          </div>
                          <div>
                            <label className="text-xs font-semibold tracking-widest uppercase block mb-2 text-white/50">Phone Number</label>
                            <input required value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full px-5 py-4 rounded-xl bg-white/10 border border-white/20 focus:bg-white/20 focus:ring-2 focus:ring-white/30 transition-all text-white outline-none placeholder:text-white/30" placeholder="+20 10 0000 0000" type="tel"/>
                          </div>
                        </div>
                        <button className="w-full mt-4 group relative overflow-hidden bg-white text-secondary py-5 rounded-xl font-bold text-lg glossy-finish active:scale-95 transition-all flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(255,255,255,0.2)]" type="submit">
                          <span className="relative z-10">Confirm via WhatsApp</span>
                          <ArrowRight className="relative z-10 group-hover:translate-x-2 transition-transform" size={24} />
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        {/* 2D Sizes/Fitting Studio */}
        <section id="sizing" className="py-24 px-8 bg-surface-container-high border-t border-stone-200">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16">
            <div className="flex-1 space-y-6">
              <span className="text-primary font-semibold tracking-widest text-sm uppercase">Virtual Sizing Room</span>
              <h2 className="font-headline text-5xl text-primary italic">Perfect Your Fit</h2>
              <p className="text-stone-600 leading-relaxed text-lg max-w-md">
                We guarantee a 14-day exchange to ensure you're completely satisfied with your bespoke piece. To avoid sizing issues, use our dynamic sizing studio to visualize how the garment falls relative to your absolute height.
              </p>

              <div className="pt-8 space-y-4 max-w-md">
                <div className="flex justify-between items-end">
                  <label className="font-headline text-2xl text-stone-800">Your Height</label>
                  <span className="text-primary font-bold text-3xl italic">{userHeight} cm</span>
                </div>
                <input 
                  type="range" 
                  min="165" 
                  max="195" 
                  value={userHeight} 
                  onChange={(e) => setUserHeight(Number(e.target.value))} 
                  className="w-full h-2 bg-stone-300 rounded-lg appearance-none cursor-pointer accent-primary"
                />
                <div className="flex justify-between text-xs font-label uppercase text-stone-400 tracking-wider">
                  <span>165cm</span>
                  <span>195cm</span>
                </div>
              </div>
            </div>

            <div className="flex-1 flex justify-center relative w-full h-[500px]">
              {/* Dynamic Overlay Rendering */}
              <div className="relative w-[300px] h-[500px] flex justify-center items-end pb-8">
                {/* SVG Generic Male Mannequin Silhouette */}
                <svg viewBox="0 0 100 250" className="absolute bottom-0 w-[200px] h-full text-stone-200 fill-current drop-shadow-md z-0" xmlns="http://www.w3.org/2000/svg">
                  {/* Head */}
                  <circle cx="50" cy="20" r="15" />
                  {/* Neck */}
                  <rect x="42" y="30" width="16" height="15" />
                  {/* Torso */}
                  <path d="M 20 50 Q 50 40 80 50 L 75 140 L 25 140 Z" />
                  {/* Arms */}
                  <path d="M 20 50 L 5 120 L 15 125 L 25 60 Z" />
                  <path d="M 80 50 L 95 120 L 85 125 L 75 60 Z" />
                  {/* Legs */}
                  <rect x="25" y="140" width="20" height="110" />
                  <rect x="55" y="140" width="20" height="110" />
                </svg>

                {/* Clothing overlay mapping real garment to the Torso */}
                <motion.div 
                  className="absolute bottom-[20%] w-[180px] h-[220px] z-10 flex items-center justify-center mask-garment"
                  animate={{ scale: garmentScale }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  style={{ transformOrigin: "top center" }}
                >
                  <img 
                    src={previewProduct.image} 
                    alt="Garment Overlay" 
                    className="w-full h-full object-cover rounded-2xl shadow-xl border-4 border-white/50"
                  />
                </motion.div>
                
                {/* Visual measurement line */}
                <div className="absolute left-[-20px] bottom-0 h-full w-[2px] border-l-2 border-dashed border-primary/40 flex flex-col justify-between py-4 text-xs text-primary font-bold">
                  <span>{userHeight}cm</span>
                  <span>0cm</span>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* About Section */}
      <section id="about" className="py-24 px-8 max-w-4xl mx-auto text-center space-y-8">
        <h2 className="font-headline text-5xl text-primary italic">About the Founder</h2>
        <div className="font-body text-xl text-stone-600 leading-relaxed font-light space-y-6 text-left border-l-4 border-primary/20 pl-8">
          <p>
            In a world of fast fashion and mass production, I craved garments that felt deeply personal—pieces that live, breathe, and age beautifully with the wearer.
          </p>
          <p>
            I’m <strong className="text-primary font-semibold font-headline">اسمهان</strong> (Asmahan), and Quail Studio was born out of my obsession with tactility, true comfort, and the raw beauty of minimalist silhouettes. Every piece here is a reflection of authentic craftsmanship blended with a modern aesthetic.
          </p>
          <p className="italic text-2xl text-primary font-headline mt-8">
            We don't just make clothes; we curate a feeling.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-100 py-12 px-8 flex flex-col md:flex-row justify-between items-center gap-8 w-full font-label text-sm tracking-tight">
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="font-headline text-lg italic text-primary">Quail Studio</div>
          <p className="text-stone-600 text-center md:text-left">© 2024 The Quail Studio Experience. Hand-crafted in little details.</p>
        </div>
      </footer>

      {/* Floating Navigation Pill (Mobile) */}
      <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <div className="glass-nav bg-stone-50/70 border border-white/20 px-6 py-4 rounded-full flex items-center gap-8 shadow-xl">
          <a className="text-primary" href="#collection"><Home size={20} /></a>
          <a className="text-stone-400" href="#"><Search size={20} /></a>
          <a className="text-stone-400" href="#"><Heart size={20} /></a>
          <a className="text-stone-400" href="#"><User size={20} /></a>
        </div>
      </div>
    </div>
  );
}
