/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useRef, useEffect } from 'react';
import { ShoppingBag, Menu, Truck, ShieldCheck, Sparkles, ArrowRight, Home, Search, Heart, User, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });

  const handleWhatsAppOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Order Inquiry\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}`;
    window.open('https://wa.me/201009891255?text=' + encodeURIComponent(text), '_blank');
  };
  const carouselRef = useRef<HTMLDivElement>(null);
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

  return (
    <div className="min-h-screen bg-background text-on-background font-body selection:bg-primary/20">
      {/* Top Navigation Bar */}
      <nav className="fixed top-0 w-full z-50 bg-stone-50/80 backdrop-blur-xl flex justify-between items-center px-8 py-4 max-w-full shadow-sm">
        <div className="text-2xl font-headline italic text-primary">Quail Studio</div>
        <div className="hidden md:flex items-center gap-8 font-label tracking-wide">
          <a className="text-primary border-b-2 border-primary pb-1 hover:opacity-80 transition-opacity" href="#">Collection</a>
          <a className="text-stone-500 hover:text-primary transition-colors" href="#">Lookbook</a>
          <a className="text-stone-500 hover:text-primary transition-colors" href="#">Archive</a>
          <a className="text-stone-500 hover:text-primary transition-colors" href="#">Studio</a>
          <a className="text-stone-500 hover:text-primary transition-colors" href="#">About</a>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-primary hover:opacity-80 transition-opacity p-2 active:scale-95">
            <ShoppingBag size={24} />
          </button>
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
          <div className="relative z-10 text-center max-w-4xl space-y-6">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-headline italic text-7xl md:text-9xl text-white tracking-tight leading-none drop-shadow-lg"
            >
              The Tactile Studio
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

        {/* Product Gallery Section */}
        <section className="py-24 px-8 max-w-7xl mx-auto bg-surface" id="collection">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="space-y-2">
              <span className="text-primary font-semibold tracking-widest text-sm uppercase">CURATED SELECTION</span>
              <h2 className="font-headline text-5xl text-on-surface">Artisanal Garments</h2>
            </div>
            <p className="text-on-surface-variant max-w-sm text-lg leading-relaxed">
              Each piece is cut, sewn, and finished in our studio, ensuring unique textures and permanent durability.
            </p>
          </div>

          <div className="relative group">
            <div className="overflow-hidden rounded-xl">
              <motion.div 
                className="flex gap-8"
                drag="x"
                dragConstraints={{ left: -((products.length - 1) * 400), right: 0 }}
                animate={{ x: -(currentIndex * (carouselRef.current?.offsetWidth || 0) / (window.innerWidth > 1024 ? 3 : window.innerWidth > 768 ? 2 : 1)) }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                ref={carouselRef}
              >
                {products.map((product) => (
                  <motion.div 
                    key={product.id}
                    className="min-w-full md:min-w-[calc(50%-1rem)] lg:min-w-[calc(33.333%-1.333rem)] bg-surface-container-low rounded-lg overflow-hidden group/card flex flex-col h-full shadow-sm hover:shadow-md transition-all"
                  >
                    <div className="aspect-[4/5] relative overflow-hidden bg-surface-container">
                      <img 
                        alt={product.name} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-105" 
                        src={product.image}
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10" style={{ mixBlendMode: 'overlay' }}>
                        <div className="text-white opacity-40 font-headline italic text-3xl md:text-4xl -rotate-45 select-none tracking-widest whitespace-nowrap drop-shadow-md">
                          Quail Studio
                        </div>
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-headline text-xl italic">{product.name}</h3>
                        <span className="font-bold text-lg">${product.price}</span>
                      </div>
                      <p className="text-on-surface-variant font-body text-sm">{product.description}</p>
                      <div className="mt-auto pt-4">
                        <button className="w-full py-2 border border-primary/20 text-primary text-sm font-semibold rounded-full hover:bg-primary hover:text-white transition-colors">
                          View Details
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Navigation Buttons */}
            <button 
              onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
              className={`absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/80 shadow-lg text-primary transition-all hover:bg-white ${currentIndex === 0 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
            >
              <ChevronLeft size={24} strokeWidth={1.5} />
            </button>
            <button 
              onClick={() => setCurrentIndex(prev => Math.min(products.length - (window.innerWidth > 1024 ? 3 : window.innerWidth > 768 ? 2 : 1), prev + 1))}
              className={`absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/80 shadow-lg text-primary transition-all hover:bg-white ${currentIndex >= products.length - (window.innerWidth > 1024 ? 3 : window.innerWidth > 768 ? 2 : 1) ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
            >
              <ChevronRight size={24} strokeWidth={1.5} />
            </button>
          </div>
        </section>

        {/* Order Section */}
        <section className="bg-secondary text-white py-32 px-8 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -mr-48 -mt-48"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-2xl -ml-32 -mb-32"></div>
          <div className="max-w-5xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="space-y-8">
                <h2 className="font-headline text-6xl leading-tight">Bring the Studio Home</h2>
                <p className="text-xl text-white/80 font-light leading-relaxed">
                  Complete your order details below. Each piece is packaged with sustainable materials and carbon-neutral shipping.
                </p>
                <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm border border-white/10">
                  <h3 className="font-headline text-2xl mb-4 italic">Exclusive Delivery within Egypt</h3>
                  <p className="text-white/80 leading-relaxed">
                    As a growing local independent studio, we meticulously craft each piece. We offer standard domestic shipping across Egypt. Exchanges are happily accepted within 14 days if the garment remains in its pristine, tactile condition.
                  </p>
                </div>
              </div>
              <div className="bg-surface p-10 rounded-xl shadow-2xl text-on-surface">
                <form className="space-y-6" onSubmit={handleWhatsAppOrder}>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold tracking-widest text-secondary uppercase">Full Name</label>
                    <input required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full px-6 py-4 rounded-md bg-surface-container-highest border-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary/20 transition-all text-on-surface outline-none placeholder:text-stone-400" placeholder="Julianne Smith" type="text"/>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold tracking-widest text-secondary uppercase">Email Address</label>
                    <input required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full px-6 py-4 rounded-md bg-surface-container-highest border-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary/20 transition-all text-on-surface outline-none placeholder:text-stone-400" placeholder="julie@quail.studio" type="email"/>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold tracking-widest text-secondary uppercase">Phone Number</label>
                    <input required value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full px-6 py-4 rounded-md bg-surface-container-highest border-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary/20 transition-all text-on-surface outline-none placeholder:text-stone-400" placeholder="+20 10 0000 0000" type="tel"/>
                  </div>
                  <button className="w-full group relative overflow-hidden bg-primary text-white py-5 rounded-full font-bold text-lg glossy-finish active:scale-95 transition-all flex items-center justify-center gap-3" type="submit">
                    <span className="relative z-10">Place Order</span>
                    <ArrowRight className="relative z-10 group-hover:translate-x-2 transition-transform" size={24} />
                    <div className="absolute inset-0 bg-orange-800 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                  </button>
                  <p className="text-center text-sm text-stone-500 italic mt-4">
                    You will be redirected to WhatsApp to confirm your bespoke selection.
                  </p>
                </form>
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
          <p className="text-stone-600 text-center md:text-left">© 2024 The Quail Studio Experience. Hand-crafted in the studio.</p>
        </div>
        <div className="flex gap-8">
          <a className="text-stone-600 hover:text-primary transition-colors" href="#">Instagram</a>
        </div>
      </footer>

      {/* Floating Navigation Pill (Mobile) */}
      <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <div className="glass-nav bg-stone-50/70 border border-white/20 px-6 py-4 rounded-full flex items-center gap-8 shadow-xl">
          <a className="text-primary" href="#"><Home size={20} /></a>
          <a className="text-stone-400" href="#"><Search size={20} /></a>
          <a className="text-stone-400" href="#"><Heart size={20} /></a>
          <a className="text-stone-400" href="#"><User size={20} /></a>
        </div>
      </div>
    </div>
  );
}
